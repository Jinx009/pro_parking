package main.entry.webapp;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import database.models.Token;
import service.basicFunctions.HttpService;
import service.basicFunctions.TokenService;
import utils.BaseConstant;
import utils.HttpDataUtil;
import utils.enums.AppInfo;

@Controller
public class BaseController {
	
	private static final Logger logger = LoggerFactory.getLogger(BaseController.class);  

	@Autowired
	private TokenService tokenService;
	@Autowired
	private HttpService httpService;
	
	/**
	 * 获取token
	 * @param appId
	 * @return
	 */
	public String getToken(String appId){
		Token token = tokenService.getByAppId(appId);
		if(token!=null){
			long timestamp_now = new Date().getTime();
			if(timestamp_now>token.getTimestamp()){
				logger.warn("{} token 已失效 {}",token.getTimestamp(),timestamp_now);
				token = getNewToken(appId);
			}
		}else{
			token = getNewToken(appId);
		}
		if(token!=null){
			return token.getToken();
		}
		return null;
	}
	
	/**
	 * 新建token
	 * @param appId
	 * @return
	 */
	public Token getNewToken(String appId){
		AppInfo appInfo = AppInfo.getByAppId(appId);
		if(appInfo!=null){
			try {
				String result = httpService.get(HttpDataUtil.getTokenUrl(appInfo));
				logger.error("BaseController.getNewToken[res:{}]",result);
				if(!BaseConstant.HTTP_ERROR_CODE.equals(result)){
					JSONObject jsonObject = JSONObject.parseObject(result);
					Token token = JSON.parseObject(jsonObject.getString(BaseConstant.PARAMS),Token.class);
					if(token!=null){
						return tokenService.createNew(appId,token);
					}
				}
			} catch (Exception e) {
				logger.error("BaseController.getNewToken[error:{}]",e);
			}
		}
		return null;
	}
	
}

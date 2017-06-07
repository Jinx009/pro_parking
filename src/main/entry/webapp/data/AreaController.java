package main.entry.webapp.data;


import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.alibaba.fastjson.JSONObject;

import common.helper.HttpWebIOHelper;
import database.RestResponse;
import lombok.Setter;
import main.entry.webapp.BaseController;
import service.basicFunctions.HttpService;
import utils.BaseConstant;
import utils.HttpDataUtil;

@Controller
@Setter
public class AreaController extends BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(AreaController.class);   

	@Autowired
	private HttpService httpService;
	
	private RestResponse<?> restResponse;

	/**
	 * 获取area
	 * @param id
	 * @param response
	 * @throws IOException 
	 */
	@RequestMapping(value = "/rest/areas", method = RequestMethod.GET)
	public void getArea(@RequestParam(value = "id",required = false)Integer id,
						@RequestParam(value = "appId",required = false)String appId,
				        HttpServletResponse response) throws IOException{
		restResponse = new RestResponse<>(BaseConstant.HTTP_ERROR_CODE,BaseConstant.HTTP_ERROR_MSG,null);
		try {
			if(id!=null){
				String token = getToken(appId);
				if(token!=null){
					String result = httpService.get(HttpDataUtil.getAreaUrl(id,token));
					if(!BaseConstant.HTTP_ERROR_CODE.equals(result)){
						restResponse = JSONObject.parseObject(result, RestResponse.class);
					}
				}
			}
		} catch (Exception e) {
			logger.error("AreaController.getArea[error:{}]", e);
		}
		HttpWebIOHelper._printWebJson(restResponse, response);
	}
	
}

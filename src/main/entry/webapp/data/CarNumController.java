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
public class CarNumController extends BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(CarNumController.class);

	@Autowired
	private HttpService httpService;
	
	private RestResponse<?> restResponse;
	
	@RequestMapping(value = "rest/nums",method = RequestMethod.GET)
	public void  carNums(@RequestParam(value = "location",required = false)Integer location,
						 @RequestParam(value = "area",required = false)Integer area,
						 @RequestParam(value = "lid",required = false)Integer lid,
						 @RequestParam(value = "type",required = false)Integer type,
						 @RequestParam(value = "dateStr",required = false)String dateStr,
						 @RequestParam(value = "appId",required = false)String appId,
					    HttpServletResponse response) throws IOException{
		restResponse = new RestResponse<>(BaseConstant.HTTP_ERROR_CODE,BaseConstant.HTTP_ERROR_MSG,null);
		if(lid==null)
			lid = 0;
		try {
			if(area!=null){
				String token = getToken(appId);
				if(token!=null){
					String result = httpService.get(HttpDataUtil.getCarNumUrl(token, location, area, lid, dateStr, type));
					if(!BaseConstant.HTTP_ERROR_CODE.equals(result)){
						restResponse = JSONObject.parseObject(result, RestResponse.class);
					}
				}
			}
		} catch (Exception e) {
			logger.error("CarNumController.carNums[error:{}]", e);
		}
		HttpWebIOHelper._printWebJson(restResponse, response);
	}
	
	@RequestMapping(value = "rest/views",method = RequestMethod.GET)
	public void  carNumsViews(@RequestParam(value = "location",required = false)Integer location,
						 @RequestParam(value = "area",required = false)Integer area,
						 @RequestParam(value = "type",required = false)Integer type,
						 @RequestParam(value = "dateStr",required = false)String dateStr,
						 @RequestParam(value = "appId",required = false)String appId,
					    HttpServletResponse response) throws IOException{
		restResponse = new RestResponse<>(BaseConstant.HTTP_ERROR_CODE,BaseConstant.HTTP_ERROR_MSG,null);
		if(area==null)
			area = 0;
		try {
			if(location!=null){
				String token = getToken(appId);
				if(token!=null){
					String result = httpService.get(HttpDataUtil.getCarNumViewsUrl(token, location, area,dateStr, type));
					if(!BaseConstant.HTTP_ERROR_CODE.equals(result)){
						restResponse = JSONObject.parseObject(result, RestResponse.class);
					}
				}
			}
		} catch (Exception e) {
			logger.error("CarNumController.carNumsViews[error:{}]", e);
		}
		HttpWebIOHelper._printWebJson(restResponse, response);
	}
	
}

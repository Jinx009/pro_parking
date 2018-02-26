package main.entry.webapp.page;


import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import main.entry.webapp.BaseController;
import service.basicFunctions.HttpService;
import utils.BaseConstant;
import utils.HttpDataUtil;
import utils.enums.AppInfo;



/**
 * 页面处理
 * @author jinx
 */
@Controller
@RequestMapping
public class PageController extends BaseController{
	
	@Autowired
	private HttpService httpService;
	
	private static final Logger logger = LoggerFactory.getLogger(PageController.class);   
	
	@RequestMapping(value = "/404")
	public String page404(HttpServletRequest request){
		request.setAttribute(BaseConstant.MSG,BaseConstant.NOT_FIND);
		return "500";
	}
	
	/**
	 * 首页
	 * @param appId
	 * @return
	 */
	@RequestMapping(value = "{appId}")
	public String index(@PathVariable("appId")String appId,HttpServletRequest request){
		request.setAttribute(BaseConstant.APP_ID,appId);
		AppInfo appInfo =  AppInfo.getByAppId(appId);
		if(appInfo!=null){
			return "index";
		}else{
			request.setAttribute(BaseConstant.MSG,BaseConstant.APP_NOT_EXISTS);
			return "500";
		}
	}

	/**
	 * 首页
	 * @param appId
	 * @return
	 */
	@RequestMapping(value = "view/{appId}")
	public String view(@PathVariable("appId")String appId,HttpServletRequest request){
		request.setAttribute(BaseConstant.APP_ID,appId);
		AppInfo appInfo =  AppInfo.getByAppId(appId);
		if(appInfo!=null){
			return "view";
		}else{
			request.setAttribute(BaseConstant.MSG,BaseConstant.APP_NOT_EXISTS);
			return "500";
		}
	}
	
	/**
	 * 实况车辆总数显示图
	 * @param area
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping(value = "singleView/{location}/{appId}")
	public String viewTwo(@PathVariable("location")String location,@PathVariable("appId")String appId,HttpServletRequest request){
		request.setAttribute(BaseConstant.APP_ID,appId);
		String page = "500";
		try {
			if(Integer.valueOf(location).intValue()==0){
				String token = getToken(appId);
				if(token!=null){
					String result = httpService.get(HttpDataUtil.getLocationUrl(token));
					if (!BaseConstant.HTTP_ERROR_CODE.equals(result)){
						JSONObject jsonObject = JSON.parseObject(result);
				        List<ArrayList> list = JSONArray.parseArray(jsonObject.getString("params"),ArrayList.class);
				        if(list!=null&&!list.isEmpty()){
				        	ArrayList<Object> base = list.get(0);
				        	if(base!=null&&!base.isEmpty()){
				        		location = String.valueOf(base.get(0));
				        	}
				        }
					}
				}
			}
			page = "views/view_"+location;
		} catch (Exception e) {
			logger.warn("[PageController.viewTwo][error:{}]",e);
		}
		request.setAttribute(BaseConstant.LOCATION,location);
		request.setAttribute(BaseConstant.MSG,BaseConstant.AREA_NOT_EXISTS);
		return page;
	}

}

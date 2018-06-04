package utils;

import utils.enums.AppInfo;

public class HttpDataUtil {

	public static final String BASE_URL = "http://localhost:8092/gtw";
	public static final String GET_TOKEN_URL = "/rest/token";
	public static final String GET_LOCATION_URL = "/rest/locations";
	public static final String GET_AREA_URL = "/rest/areas";
	private static final String GET_LID_URL = "/rest/intersection/lids";
	private static final String GET_POS_URL = "/rest/intersection/poss";
	private static final String GET_CAR_NUMS_URL = "/rest/intersection/nums";
	private static final String GET_CAR_NUMS_VIEW_URL = "/rest/intersection/numsView";
	
	/**
	 * 获取location
	 * @param appInfo
	 * @return
	 */
	public static String getLocationUrl(String token){
		String url = BASE_URL+GET_LOCATION_URL+"?token="+token;
		return url;
	}

	/**
	 * 获取token链接
	 * @param appInfo
	 * @return
	 */
	public static String getTokenUrl(AppInfo appInfo) {
		String url = BASE_URL+GET_TOKEN_URL+"?appId="+appInfo.getAppId()+"&secret="+appInfo.getSecret();
		return url;
	}

	/**
	 * 获取area
	 * @param id
	 * @return
	 */
	public static String getAreaUrl(Integer id,String token) {
		String url = BASE_URL+GET_AREA_URL+"?id="+id+"&token="+token;
		return url;
	}

	/**
	 * 获取车道
	 * @param id
	 * @return
	 */
	public static String getLidUrl(String token,Integer area) {
		String url = BASE_URL+GET_LID_URL+"?area="+area+"&token="+token;
		return url;
	}

	/**
	 * 获取方向
	 * @param token
	 * @param area
	 * @return
	 */
	public static String getPosUrl(String token, Integer area) {
		String url = BASE_URL+GET_POS_URL+"?area="+area+"&token="+token;
		return url;
	}
	
	/**
	 * 首页绘图数据
	 * @param token
	 * @param location
	 * @param area
	 * @param lid
	 * @param dateStr
	 * @param type
	 * @return
	 */
	public static String getCarNumUrl(String token,Integer location,Integer area,Integer lid,String dateStr,Integer type) {
		String url = BASE_URL+GET_CAR_NUMS_URL+"?area="+area+"&token="+token+"&location="+location+"&lid="+lid+"&type="+type+"&dateStr="+dateStr;
		return url;
	}
	
	/***
	 * 实景图绘制
	 * @param token
	 * @param location
	 * @param area
	 * @param dateStr
	 * @param type
	 * @return
	 */
	public static String getCarNumViewsUrl(String token,Integer location,Integer area,String dateStr,Integer type) {
		String url = BASE_URL+GET_CAR_NUMS_VIEW_URL+"?area="+area+"&token="+token+"&location="+location+"&type="+type+"&dateStr="+dateStr;
		return url;
	}
}

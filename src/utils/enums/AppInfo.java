package utils.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AppInfo {
	
	MA_AN_SHAN("maanshan","69f81c72-82c3-40c9-932b-0ee2d3928599","马鞍山路口"),
	WU_HAN("wuhan","86fd0aa0-1f5c-4374-9756-b26868acd7ae","武汉路口"),
	CHENG_DU("chengdu","a4eda00c-7a49-4a34-9686-3671c23c9eb6","成都路口"),
	HANKOU_DUDIAN("wuhan-dudian","985eada4-82e6-4d58-9895-73689ec31ec8","汉口堵点")
	;
	
	private String appId;
	private String secret;
	private String description;
	
    /**
     *  根据code查询
     * @param code 接口编码
     * @return 接口编码对象
     */
    public static AppInfo getByAppId(String appId) {
    	AppInfo[] appInfos = AppInfo.values();
        for (AppInfo appInfo : appInfos) {
            if (appInfo.getAppId().equals(appId))
                return appInfo;
        }
        return null;
    }
}

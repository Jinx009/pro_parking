package database.basicFunctions.dao;


import database.common.BaseDao;
import database.models.Token;

public interface TokenDao extends BaseDao<Token>{

	public Token getByAppId(String appId);
	
}

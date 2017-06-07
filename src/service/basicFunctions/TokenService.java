package service.basicFunctions;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import database.basicFunctions.dao.TokenDao;
import database.models.Token;


@Service("tokenService")
public class TokenService{

	@Autowired
	private TokenDao tokenDao;
	
	public Token getByAppId(String appId){
		return tokenDao.getByAppId(appId);
	}
	
	public void update(Token token){
		tokenDao.update(token);
	}
	
	public Token save(Token token){
		return tokenDao.save(token);
	}

	public Token createNew(String appId, Token token) {
		token.setBaseId(appId);
		token.setCreateTime(new Date());
		return save(token);
	}
}

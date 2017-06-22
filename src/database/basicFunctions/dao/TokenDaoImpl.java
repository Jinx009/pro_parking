package database.basicFunctions.dao;


import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import database.common.BaseDaoImpl;
import database.models.Token;

@Repository("tokenDao")
public class TokenDaoImpl extends BaseDaoImpl<Token> implements TokenDao{

	@SuppressWarnings("unchecked")
	public Token getByAppId(String appId){
		String hql = " FROM Token WHERE baseId= '"+appId+"' ORDER BY createTime DESC ";
		Query query = em.createQuery(hql);
		List<Token> list = query.getResultList();
		if(list!=null&&!list.isEmpty()){
			return list.get(0);
		}
		return null;
	}
	
}

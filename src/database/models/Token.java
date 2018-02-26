package database.models;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;


/**
 * 
 * @author Jinx
 *
 */
@Getter
@Setter
@Entity
@Table(name="web_token")
public class Token {

	@Id
	@Column(unique=true, nullable=false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    @Column(name = "base_id")
    private String baseId;//mac地址或者商户appId
    @Column(name = "token")
    private String token;//当前token
    @Column(name = "time_stamp")
    private long timestamp;//失效时间戳
    @Column(name = "create_time")
    private Date createTime;//创建时间

}

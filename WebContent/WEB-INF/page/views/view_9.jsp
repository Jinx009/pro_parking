<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
<title>路口项目数据平台</title>
<link rel="stylesheet" type="text/css" href="/themes/bt/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.bootcss.com/bootstrap/2.3.2/css/bootstrap-responsive.min.css" >
<link rel="stylesheet" type="text/css" href="/themes/intersection/css/index.css?version=1.0.4" />
<link rel="stylesheet" type="text/css" href="/themes/intersection/css/view.css?version=1.0.4" />
<!--[if lt IE 9]>
<script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
<![endif]-->
</head>
<body>
	<input type="hidden" value="${appId }" id="appId" >
	<input type="hidden" value="${_location }" id="_location" >
	<nav class="navbar navbar-inverse navbar-fixed-top">
		 <div class="navbar-inner">
		     <a class="brand" href="#">&nbsp;&nbsp;路口项目数据平台</a>
        	<ul class="nav">
			  <li>
			    <a href="/${appId}.html">数据曲线</a>
			  </li>
			  <li><a href="/view/${appId}.html ">实况预览</a></li>
			  <li class="active"><a href="/singleView/0/${appId}.html ">全局预览</a></li>
			</ul>
		  </div>
	</nav>
	<div class="accordion search-panel" id="accordion2">
	  <div class="accordion-group">
	    <div class="accordion-heading">
	      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">筛选区域 </a>
	    </div>
	    <div id="collapseOne" class="accordion-body collapse in">
	      <div class="accordion-inner padding-top-20">
	        <form class="margin-bottom-0" >
	         <div class="input-prepend">
			    <select  class="span2" id="location" onchange="goView();" >
			    	<option value="" >请选择区域</option>
			    </select>
			  </div>
			   <div class="input-append">
			    <select  class="span2" id="type" >
			    	<option value="0" >实时</option>
			    	<option value="1" >6:00——7:00</option>
			    	<option value="2" >7:00——8:00</option>
			    	<option value="3" >8:00——9:00</option>
			    	<option value="4" >9:00——10:00</option>
			    	<option value="5" >10:00——11:00</option>
			    	<option value="6" >11:00——12:00</option>
			    	<option value="7" >12:00——13:00</option>
			    	<option value="8" >13:00——14:00</option>
			    	<option value="9" >14:00——15:00</option>
			    	<option value="10" >15:00——16:00</option>
			    	<option value="11" >16:00——17:00</option>
			    	<option value="12" >17:00——18:00</option>
			    	<option value="13" >18:00——19:00</option>
			    	<option value="14" >19:00——20:00</option>
			    	<option value="15" >20:00——21:00</option>
			    	<option value="16" >21:00——22:00</option>
			    	<option value="17" >22:00——23:00</option>
			    	<option value="18" >23:00——24:00</option>
			    	<option value="19" >24:00——1:00</option>
			    </select>
			  </div>
			   <div class="input-append">
			     <input type="text" class="span2" value="" id="time"  readonly="readonly" onClick="WdatePicker();" >
			  </div>
			  <div class="input-append">
				 <a class="btn" onclick="getData();"> 查询<i class="icon-search"></i></a>
			</div>
			</form>
	      </div>
	    </div>
	  </div>
	</div>
	<div id="paper" class="views-paper" ></div>
	<div class="views-footer" ></div>
	<script src="/themes/js/jquery.js" ></script>
	<script src="/themes/bt/js/bootstrap.min.js"></script>
	<script src="/themes/js/raphael.js"></script>
	<script src="/themes/layer/layer.js" ></script>
    <script src="/themes/js/WdatePicker.js"></script>
    <script src="/themes/intersection/views/views_9_data.min.js?version=1.01"></script>
    <script src="/themes/intersection/views/views_9.min.js?version=1.03"></script>
</body>
</html>
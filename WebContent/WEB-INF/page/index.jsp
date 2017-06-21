<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
<title>路口数据分析系统</title>
<link rel="stylesheet" type="text/css" href="/themes/bt/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="http://cdn.bootcss.com/bootstrap/2.3.2/css/bootstrap-responsive.min.css" >
<link rel="stylesheet" type="text/css" href="/themes/intersection/css/index.css?version=1.0.4" />
<!--[if lt IE 9]>
<script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
<![endif]-->
</head>
<body>
	<input type="hidden" value="${appId }" id="appId" >
	<nav class="navbar navbar-inverse navbar-fixed-top">
		 <div class="navbar-inner">
		     <a class="brand" href="#">&nbsp;&nbsp;路口数据分析系统</a>
        	<ul class="nav">
			  <li class="active">
			    <a href="/${appId}.html">数据曲线</a>
			  </li>
			  <li><a href="/view/${appId }.html">实况预览</a></li>
			  <li><a href="/singleView/0/${appId}.html ">全局预览</a></li>
			</ul>
		  </div>
	</nav>
	<div class="accordion search-panel" id="accordion2">
	  <div class="accordion-group">
	    <div class="accordion-heading">
	      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
	        数据源筛选
	      </a>
	    </div>
	    <div id="collapseOne" class="accordion-body collapse in">
	      <div class="accordion-inner padding-top-20">
	        <form class="margin-bottom-0" >
			  <div class="input-prepend">
			    <select  class="span2" id="location" onchange="getArea();" >
			    	<option value="" >请选择区域</option>
			    </select>
			  </div>
			  <div class="input-append">
			    <select  class="span2" id="area" onchange="getLid();" >
			    	<option value="" >请选择路口</option>
			    </select>
			  </div>
			   <div class="input-append">
			    <select  class="span2" id="lid" >
			    	<option value="" >请选择车道</option>
			    </select>
			  </div>
			   <div class="input-append">
			     <input type="text" class="span2" value="" id="time"  readonly="readonly" onClick="WdatePicker();" >
			  </div>
			  <div class="input-append">
				  <div class="btn-group">
					  <a class="btn btn-info" id="type0" onclick="changeType(0)" >日</a>
				<!-- 	  <a class="btn" id="type1" onclick="changeType(1)" >周</a> -->
					  <a class="btn" id="type2" onclick="changeType(2)" >月</a>
					  <a class="btn" id="type3" onclick="changeType(3)" >年</a>
					</div>
			 </div>
			  <div class="input-append">
				 <a class="btn" onclick="getData();"> 查询<i class="icon-search"></i></a>
			</div>
			</form>
	      </div>
	    </div>
	  </div>
	</div>
	<div id="picturePlace0" class="dom-height" ></div>
	<script src="/themes/js/jquery.js" ></script>
	<script src="/themes/bt/js/bootstrap.min.js"></script>
	<script src="/themes/layer/layer.js" ></script>
    <script src="/themes/js/echarts-all.js" ></script>
    <script src="/themes/intersection/index_data.js?version=1.12"></script>
    <script src="/themes/intersection/index.js?version=1.16"></script>
    <script src="/themes/js/WdatePicker.js"></script>
</body>
</html>
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
<link rel="stylesheet" type="text/css" href="/themes/intersection/css/view.css?version=1.0.5" />
<!--[if lt IE 9]>
<script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
<![endif]-->
</head>
<body>
	<input type="hidden" value="${appId }" id="appId" >
		<nav class="navbar navbar-inverse navbar-fixed-top" style="padding: 0px;">
		 <div class="navbar-inner" style="padding: 0px;">
		     <a class="brand" href="#" style="padding-top: 0px;padding-bottom: 0px;padding-left: 5px;margin-left: 15px;">
		     	<img alt="" src="/themes/img/2.png" height="51px" style="height: 51px;">
		     </a>
        	<ul class="nav" style="height: 51px;line-height: 51px;margin: 0;">
			  <li style="height: 51px;line-height: 51px;margin: 0;">
			    <a href="/${appId}.html" style="padding-bottom:0px;padding-top: 0px;">数据曲线</a>
			  </li>
			  <li class="active" style="height: 51px;line-height: 51px;margin: 0;"><a href="/view/${appId }.html" style="padding-bottom:0px;padding-top: 0px;">实况预览</a></li>
			  <li style="height: 51px;line-height: 51px;margin: 0;"><a href="/singleView/0/${appId}.html" style="padding-bottom:0px;padding-top: 0px;">全局预览</a></li>
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
			    <select  class="span2" id="location" onchange="getArea();" >
			    	<option value="" >请选择区域</option>
			    </select>
			  </div>
			  <div class="input-append">
			    <select  class="span2" id="area"  >
			    	<option value="" >请选择路口</option>
			    </select>
			  </div>
			   <div class="input-append">
			    <select  class="span2" id="type" >
			    	<option value="0" >实时</option>
			    	<option value="1" >0:00——0:30</option>
			    	<option value="2" >0:30——1:00</option>
			    	<option value="3" >1:00——1:30</option>
			    	<option value="4" >1:30——2:00</option>
			    	<option value="5" >2:00——2:30</option>
			    	<option value="6" >2:30——3:00</option>
			    	<option value="7" >3:00——3:30</option>
			    	<option value="8" >3:30——4:00</option>
			    	<option value="9" >4:00——4:30</option>
			    	<option value="10" >4:30——5:00</option>
			    	<option value="11" >5:00——5:30</option>
			    	<option value="12" >5:30——6:00</option>
			    	<option value="13" >6:00——6:30</option>
			    	<option value="14" >6:30——7:00</option>
			    	<option value="15" >7:00——7:30</option>
			    	<option value="16" >7:30——8:00</option>
			    	<option value="17" >8:00——8:30</option>
			    	<option value="18" >8:30——9:00</option>
			    	<option value="19" >9:00——9:30</option>
			    	<option value="20" >9:30——10:00</option>
			    	<option value="21" >10:00——10:30</option>
			    	<option value="22" >10:30——11:00</option>
			    	<option value="23" >11:00——11:30</option>
			    	<option value="24" >11:30——12:00</option>
			    	<option value="25" >12:00——12:30</option>
			    	<option value="26" >12:30——13:00</option>
			    	<option value="27" >13:00——13:30</option>
			    	<option value="28" >13:30——14:00</option>
			    	<option value="29" >14:00——14:30</option>
			    	<option value="30" >14:30——15:00</option>
			    	<option value="31" >15:00——15:30</option>
			    	<option value="32" >15:30——16:00</option>
			    	<option value="33" >16:00——16:30</option>
			    	<option value="34" >16:30——17:00</option>
			    	<option value="35" >17:00——17:30</option>
			    	<option value="36" >17:30——18:00</option>
			    	<option value="37" >18:00——18:30</option>
			    	<option value="38" >18:30——19:00</option>
			    	<option value="39" >19:00——19:30</option>
			    	<option value="40" >19:30——20:00</option>
			    	<option value="41" >20:00——20:30</option>
			    	<option value="42" >20:30——21:00</option>
			    	<option value="43" >21:00——21:30</option>
			    	<option value="44" >21:30——22:00</option>
			    	<option value="45" >22:00——22:30</option>
			    	<option value="46" >22:30——23:00</option>
			    	<option value="47" >23:00——23:30</option>
			    	<option value="48" >23:30——00:00</option>
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
	<div id="paper" class="view-paper" ></div>
	<svg><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><marker id="raphael-marker-endclassic-0" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(111,43,103)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-1" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(207,130,178)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-2" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(178,83,159)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-3" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(28,117,59)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-4" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#96ca75" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-5" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(188,218,105)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-6" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(188,25,31)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-7" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#ea000a" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-8" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(242,112,112)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-9" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(20,47,89)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-10" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(41,94,187" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endclassic-11" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(117,158,209)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker></defs></svg>
	<div class="view-footer" ></div>
	<script src="/themes/js/jquery.js" ></script>
	<script src="/themes/bt/js/bootstrap.min.js"></script>
	<script src="/themes/js/raphael.js"></script>
	<script src="/themes/layer/layer.js" ></script>
    <script src="/themes/js/WdatePicker.js"></script>
    <script src="/themes/intersection/view_data.js?version=1.06"></script>
    <script src="/themes/intersection/view.js?version=1.23"></script>
</body>
</html>
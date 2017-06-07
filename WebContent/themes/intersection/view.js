var paper,nums_array = new Array(12);
var appId = $('#appId').val();
$(function(){
	for(var i = 0;i<12;i++){
		nums_array[i] = 0;
	}
	paper = new Raphael(document.getElementById('paper'),600, 600);
	getLocation();
//	setArrow();
})
/**
 * 获取数据
 */
function getData(){
	var _location = $('#location').val();
	var _area = $('#area').val();
	var dateStr = $('#time').val();
	var type = $('#type').val();
	if(0!=type&&(dateStr==''||dateStr==null)&&'0'!=type){
		layer.alert('非实时数据请选择一个时间点!');
	}else{
		$.ajax({
			url:'/rest/views.html?appId='+appId+'&location='+_location+'&area='+_area+'&type='+type+'&dateStr='+dateStr,
			type:'get',
			dataType:'json',
			success:function(res){
				if('200'==res.respCode){
					for(var i = 0;i<12;i++){
						nums_array[i] = 0;
					}
					if(res.params!=null&&res.params.length>0){
						changeNumsArray(res.params);
						doPic();
					}else{
						layer.alert('无数据！');
					}
				}else{
					layer.alert(res.msg);
				}
			}
		})
	}
}
/**
 * 获取location
 */
function getLocation(){
	$.ajax({
		url:'/rest/locations.html?appId='+appId,
		type:'get',
		dataType:'json',
		success:function(res){
			if('200'==res.respCode){
				$('#location').html('');
				$.each(res.params,function(i,obj){
					$('#location').append('<option value="'+obj[0]+'" >'+obj[1]+'</option>');
				})
				getArea();
			}else{
				layer.alert(res.msg);
			}
		}
	})
}
/**
 * 获取area
 */
function getArea(){
	var _location = $('#location').val();
	$.ajax({
		url:'/rest/areas.html?appId='+appId+'&id='+_location,
		type:'get',
		dataType:'json',
		success:function(res){
			if('200'==res.respCode){
				$('#area').html('');
				$.each(res.params,function(i,obj){
					$('#area').append('<option value="'+obj[1]+'" >'+obj[0]+'</option>');
				})
				getData();
			}else{
				layer.alert(res.msg);
			}
		}
	})
}
/**
 * 真实绘图
 */
var _svgArray = [];
function doPic(){
	if(paper!=null&&paper.clear!=undefined){
		paper.clear();
	}
 	paper.image('/themes/img/view_back.jpg',0,0,600,600);
    var _max = $._getPathMaxNums(nums_array)[0];
    for(var i in nums_array){
    	dataArray[i].nums = nums_array[i];
    }
    for(var i in dataArray){
    	if(i!=0&&i!=3&&i!=6&&i!=9){
    		var _width = $._getPathStrokeWidth(_max,40,dataArray[i].nums);
    		_svgArray[i] = paper.path(dataArray[i].path).attr(dataArray[i].attr).attr({'stroke-width':_width,'arrow-end':'classic-wide-long'});
    	}
    	if(0!=dataArray[i].nums){
    		paper.text(dataArray[i].x,dataArray[i].y,dataArray[i].nums).attr(dataArray[i].attr);
    	}
    }
    for(var i in dataArray){
    	if(i==0||i==3||i==6||i==9){
    		var _width = $._getPathStrokeWidth(_max,40,dataArray[i].nums);
    		if(_width<=20){
    			_width = 20;
    		}
    		_svgArray[i]  = paper.path(dataArray[i].path).attr(dataArray[i].attr).attr({'stroke-width':_width,'arrow-end':'classic-wide-long'});
    	}
    }
    if (Raphael.svg) {
    	for(var i in _svgArray){
    		_svgArray[i].node.attributes["marker-end"].value = 'url(#raphael-marker-endclassic-'+i+')';
    	}
    }
}

/**
 * 添加jquery辅助方法
 */
$.extend({
	_getPathMaxNums:function(_arr){
		return [1800,0];
	},
	_getPathStrokeWidth:function(_max,base_width,nums){
		if(nums!=''&&nums!=null){
			var value = parseInt(nums/_max*base_width);
			if(value<=4)
				value = 4;
			return value;
		}
		return 0;
	}
})();

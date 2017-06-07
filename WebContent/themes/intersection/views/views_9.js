var _location = $('#_location').val();
var appId = $('#appId').val();
var paper;
$(function(){
	for(var i = 0;i<12;i++){
		nums_array[i] = 0;
	}
	getLocation();
	getData();
	if(paper){
		paper.clear();
	}
	paper = new Raphael(document.getElementById("paper"),1030, 485);
    paper.image('/themes/img/views_bg.jpg',0,0,1030,485);
})
/**
 * 获取数据
 */
function getData(){
	var _time = $('#time').val();
	var _type = $('#type').val();
	var _location = $('#_location').val();
	if(0!=_type&&(_time==''||_time==null)&&'0'!=_type){
		layer.alert('非实时数据请选择一个时间点!');
	}else{
		$.ajax({
			url:'/rest/views.html?appId='+appId+'&location='+_location+'&area=&type='+_type+'&dateStr='+_time+'&timeStr='+Date.parse(new Date()),
			type:'get',
			dataType:'json',
			success:function(res){
				if('200'==res.respCode){
					for(var i = 0;i<12;i++){
						nums_array[i] = 0;
					}
					if(res.params!=null&&res.params.length>0){
						changeNumsArray(res.params);
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
function doPic(){
	if(paper.clear!==undefined){
		paper.clear();
	}
	paper = new Raphael(document.getElementById("paper"),1030, 485);
    paper.image('/themes/img/views_bg.jpg',0,0,1030,485);
    if(nums_array[0]!=0){
    	paper.path('M'+getPoint(1,nums_array[0])).attr({'fill':_model.bg,'stroke':_model.bg});
    	paper.text(_model.paths[0]._textX,_model.paths[0]._textY,nums_array[0]).attr({'font-size':'12px'});
//    	paper.path(getYellowPath(1,nums_array[0])).attr({'stroke':'rgb(250,204,46)','stroke-width':3});
    }
    if(nums_array[1]!=0){
    	paper.path('M'+getPoint(2,nums_array[1])).attr({'fill':_model.bg,'stroke':_model.bg});
    	paper.text(_model.paths[1]._textX,_model.paths[1]._textY,nums_array[1]).attr({'font-size':'12px'});
//    	paper.path(getYellowPath(2,nums_array[1])).attr({'stroke':'rgb(250,204,46)','stroke-width':3});
    }
    if(nums_array[2]!=0){
    	paper.path('M'+getPoint(3,nums_array[2])).attr({'fill':_model.bg,'stroke':_model.bg});
    	paper.text(_model.paths[2]._textX,_model.paths[2]._textY,nums_array[2]).attr({'font-size':'12px'});
//    	paper.path(getYellowPath(3,nums_array[2])).attr({'stroke':'rgb(250,204,46)','stroke-width':3});
    }
    if(nums_array[3]!=0){
    	paper.path('M'+getPoint(4,nums_array[3])).attr({'fill':_model.bg,'stroke':_model.bg});
    	paper.text(_model.paths[3]._textX,_model.paths[3]._textY,nums_array[3]).attr({'font-size':'12px'});
//    	paper.path(getYellowPath(4,nums_array[3])).attr({'stroke':'rgb(250,204,46)','stroke-width':3});
    }
	var circleNum = 0;
	for(var i in nums_array){
		circleNum += nums_array[i]
	}
	paper.circle(_model._circleX,_model._circleY,_model.r).attr({'fill':getCircleColor(circleNum),'stroke':getCircleColor(circleNum)});
	paper.text(_model._circleX,_model._circleY,circleNum).attr({'font-size':'14px','stroke':'white'});
}
/**
 * 获取大的区域范围
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
					if(_location==obj[0]){
						$('#location').append('<option value="'+obj[0]+'" selected="selected"  >'+obj[1]+'</option>');
					}else{
						$('#location').append('<option value="'+obj[0]+'" >'+obj[1]+'</option>');
					}
				})
			}else{
				layer.alert(res.msg);
			}
		}
	})
}
/**
 * 获取圆圈颜色
 * @param _nums
 * @returns {String}
 */
function getCircleColor(_nums){
	if(_nums<500){
		return 'green';
	}else if(_nums>=500&&_nums<1000){
		return 'blue';
	}else if(_nums>=1000&&_nums<1500){
		return 'yellow';
	}else if(_nums>=1500&&_nums<2000){
		return 'yellow';
	}else{
		return '#1e1a52';
	}
}
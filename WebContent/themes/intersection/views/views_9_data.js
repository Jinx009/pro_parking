var _model = 
 {
	 _desc:'主路口',
	 _circleX:560,
	 _circleY:329,
	 area:9,
	 r:24,
	 bg:'rgb(160,160,160)',
	 paths:[
	     {
	    	 id:1,
	    	 point1:{x:376,y:328},
	     	 point2:{x:517,y:328},
	     	 point3:{x:531,y:328},
	     	_textX:505,
	     	_textY:328,
	     	_path:487
	     },{
	    	 id:2,
	    	 point1:{x:558,y:216},
	     	 point2:{x:558,y:286},
	     	 point3:{x:558,y:300},
	     	_textX:558,
	     	_textY:280,
	     	_path:256
	     },{
	    	 id:3,
	    	 point1:{x:726,y:328},
	     	 point2:{x:602,y:328},
	     	 point3:{x:588,y:328},
	     	_textX:614,
	     	_textY:328,
	     	_path:632
	     },{
	    	 id:4,
	    	 point1:{x:558,y:485},
	     	 point2:{x:558,y:377},
	     	 point3:{x:558,y:363},
	     	_textX:558,
	     	_textY:391,
	     	_path:407
	     }     
	 ]
 };
var _maxWidth = 40,_maxNum = 7200,dataArray = new Array(),nums_array = new Array(),pathArray = new Array();
/**
 * 获取线坐标
 * @param _type
 * @param _num
 */
function getPoint(_type,_num){
	var _baseNum = parseInt(_maxNum/4);
	var _change = parseInt(_maxWidth/2*_num/_baseNum);
	if(_change>20){
		_change = 20;
	}
	if(_type==1){
		return _model.paths[0].point1.x+','+(_model.paths[0].point1.y+_change)+'L'+
			   _model.paths[0].point1.x+','+(_model.paths[0].point1.y-_change)+'L'+
			   _model.paths[0].point2.x+','+(_model.paths[0].point2.y-_change)+'L'+
			   _model.paths[0].point3.x+','+_model.paths[0].point3.y+'L'+
			   _model.paths[0].point2.x+','+(_model.paths[0].point2.y+_change);
	}else if(_type==2){
		return (_model.paths[1].point1.x-_change)+','+(_model.paths[1].point1.y)+'L'+
			   (_model.paths[1].point1.x+_change)+','+(_model.paths[1].point1.y)+'L'+
			   (_model.paths[1].point2.x+_change)+','+(_model.paths[1].point2.y)+'L'+
			   _model.paths[1].point3.x+','+_model.paths[1].point3.y+'L'+
			   (_model.paths[1].point2.x-_change)+','+(_model.paths[1].point2.y);
	}
	else if(_type==3){
		return (_model.paths[2].point1.x)+','+(_model.paths[2].point1.y-_change)+'L'+
			   (_model.paths[2].point1.x)+','+(_model.paths[2].point1.y+_change)+'L'+
			   (_model.paths[2].point2.x)+','+(_model.paths[2].point2.y+_change)+'L'+
			   _model.paths[2].point3.x+','+_model.paths[2].point3.y+'L'+
			   (_model.paths[2].point2.x)+','+(_model.paths[2].point2.y-_change);
	}else if(_type==4){
		return (_model.paths[3].point1.x-_change)+','+(_model.paths[3].point1.y)+'L'+
			   (_model.paths[3].point1.x+_change)+','+(_model.paths[3].point1.y)+'L'+
			   (_model.paths[3].point2.x+_change)+','+(_model.paths[3].point2.y)+'L'+
			   _model.paths[3].point3.x+','+_model.paths[3].point3.y+'L'+
			   (_model.paths[3].point2.x-_change)+','+(_model.paths[3].point2.y);
	}
}
/**
 * 画黄线
 * @param type
 * @param _num
 */
function getYellowPath(_type,_num){
	var _baseNum = parseInt(_maxNum/4);
	var _change = parseInt(_maxWidth/2*_num/_baseNum);
	if(_change>20){
		_change = 20;
	}
	if(_type==1){
		return 'M'+_model.paths[0]._path+','+(_model.paths[0].point1.y+_change)+
					'L'+_model.paths[0]._path+','+(_model.paths[0].point1.y-_change);
	}else if(_type==2){
		return 'M'+(_model.paths[1].point1.x-_change)+','+_model.paths[1]._path+
		'L'+(_model.paths[1].point1.x+_change)+','+_model.paths[1]._path;
	}
	else if(_type==3){
		return 'M'+_model.paths[2]._path+','+(_model.paths[2].point1.y+_change)+
		'L'+_model.paths[2]._path+','+(_model.paths[2].point1.y-_change);
	}else if(_type==4){
		console.log('M'+(_model.paths[3].point1.x-_change)+','+_model.paths[3]._path+
				'L'+(_model.paths[3].point1.x+_change)+','+_model.paths[3]._path);
		return 'M'+(_model.paths[3].point1.x-_change)+','+_model.paths[3]._path+
		'L'+(_model.paths[3].point1.x+_change)+','+_model.paths[3]._path;
	}
}
/**
 * 改变数组的值
 * @param _data
 */
function changeNumsArray(_data){
	for(var i in _data){
    	if(_data[i].direction=='0'){
    		nums_array[1] += _data[i].nums;
    	}
    	if(_data[i].direction=='1'){
    		nums_array[2] += _data[i].nums;
    	}
    	if(_data[i].direction=='2'){
    		nums_array[3] += _data[i].nums;
    	}
    	if(_data[i].direction=='3'){
    		nums_array[0] += _data[i].nums;
    	}
	}
	doPic();
}



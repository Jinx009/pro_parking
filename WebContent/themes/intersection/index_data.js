var appId = $('#appId').val();
var _data = '',type = 0;
var dataArray = [];
var _num = -1;
$(document).ready(function (){
	getLocation();
})
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
				getData();
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
			}else{
				layer.alert(res.msg);
			}
		}
	})
}
/**
 * 选择车道
 */
function getLid(){
	var _id = $('#area').val();
	$.ajax({
		url:'/rest/lids.html?appId='+appId+'&id='+_id,
		type:'get',
		dataType:'json',
		success:function(res){
			if('200'==res.respCode){
				$('#lid').html('<option value="" >请选择车道</option>');
				$.each(res.params,function(i,obj){
					$('#lid').append('<option value="'+obj.value+'" >'+obj.value+'</option>');
				})
			}else{
				layer.alert(res.msg);
			}
		}
	})
}
/**
 * 切换类型
 * @param num
 */
function changeType(num){
	for(var i = 0;i<4;i++){
		$('#type'+i).removeClass('btn-info');
	}
	$('#type'+num).addClass('btn-info');
	type = num;
};
/**
 * 获取数据
 */
function getData(){
	dataArray = [];
	var _location = $('#location').val(),_area = $('#area').val(),_lid = $('#lid').val(),time = $('#time').val();
	$.ajax({
		url:'/rest/nums.html?appId='+appId+'&location='+_location+'&area='+_area+"&lid="+_lid+'&type='+type+'&dateStr='+time,
		type:'get',
		dataType:'json',
		success:function(res){
			if('200'==res.respCode){
				_data = res.params;
				if(_data==''){
					layer.alert('暂无数据！');
				}else{
					var now = new Date();
					for(var i in _data){
						dataArray.push([now.setTime(_data[i].date),_data[i].nums]);
					}
					var option = getOption(dataArray);
					myChart.setOption(option,true);
				}
			}else{
				layer.alert(res.msg);
			}
		}
	})	
}
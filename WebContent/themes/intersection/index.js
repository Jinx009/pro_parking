var myChart = echarts.init(document.getElementById('picturePlace0'));
function getOption(_data){
	return {
		title : {
			text : '车流量折线图',
			subtext : ''
		},
		tooltip : {
			trigger : 'item',
			formatter : function(params) {
				var date = new Date(params.value[0]);
				data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-'
						+ date.getDate() + ' ' + date.getHours() + ':'
						+ date.getMinutes();
				return data + '<br/>车流量：' + params.value[1];
			}
		},
		toolbox : {
			show : true,
			feature : {
				mark : {
					show : false
				},
				dataView : {
					show : false,
					readOnly : false
				},
				restore : {
					show : false
				},
				saveAsImage : {
					show : true
				}
			}
		},
		dataZoom : {
			show : true,
			start : 0
		},
		legend : {
			data : [ '图例' ]
		},
		grid : {
			y2 : 80
		},
		xAxis : [ {
			type : 'time'
			//splitNumber : 5
		} ],
		yAxis : [ {
			type : 'value'
		} ],
		series : [ {
			name : '图例',
			type : 'line',
			showAllSymbol : true,
			symbolSize : function(value) {
				return 2;
			},
			data : _data
		} ]
	};
}

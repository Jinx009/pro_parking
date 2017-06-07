var dataArray = [//0北向南 1 东向西 2 南向北 3 西向东   1 直 2 左 3 右 4 左直 5 右直 6 全部
		{//北向南直行d_01:
	    	path:'M  384,0 L 120,470',
	    	attr:{
	    		stroke:'rgb(111,43,103)',
	    	},
	    	nums:0,
	    	x:110,
	    	y:490
		},     
		{//北向南左转d_02:
//			path:'M107,84  C221,147,259,182,296,138',
			path:'M296,138  C259,182,221,147,107,84',
			attr:{
				stroke:'rgb(207,130,178)',
			},
	    	nums:0,
	    	x:97,
	    	y:80
		},   
		{//北向南右转d_03:
//			path:'M497,435 C306,327,252,307,256,248',
			path:'M256,248 C252,307,306,327,497,435',
			attr:{
				stroke:'rgb(178,83,159)',
			},                                        
	    	nums:0,
	    	x:520,
	    	y:445
		},
		{//东向西直行d_11:
			path:'M  597,381 L 95,105 ',
			attr:{
				stroke:'rgb(28,117,59)',
			},
	    	nums:0,
	    	x:85,
	    	y:100
		},
		{//东向西左转d_12:
			path:'M140,480  C268,261,279,207,354,252',
			attr:{
				stroke:'#96ca75',
			},
	    	nums:0,
	    	x:135,
	    	y:500
		},
		{//东向西右转d_13:
			path:'M425,282 C399,257,431,218,503,96 ',
			attr:{
				stroke:'rgb(188,218,105)',
			},
	    	nums:0,
	    	x:513,
	    	y:85
		},
		{//南向北直行d_21:
			path:'M190,597 L  483,82 ',
			attr:{
				stroke:'rgb(188,25,31)',
			},
	    	nums:0,
	    	x:487,
	    	y:69
		},
		{//南向北左转d_22:
			path:'M327,363 C379,256,325,255,86,121 ',
			attr:{
				stroke:'#ea000a',
				stroke_width:0
			},
	    	nums:0,
	    	x:76,
	    	y:116
		},
		{//南向北右转d_23:
			path:'M290,440 C 325,383,384,432,475,484 ',
			attr:{
				stroke:'rgb(242,112,112)',
			},
	    	nums:0,
	    	x:485,
	    	y:490
		},
		{//西向东直行d_31:
			path:'M 0,189  L 487,462',
			attr:{
				stroke:'rgb(20,47,89)',
			},
	    	nums:0,
	    	x:507,
	    	y:468
		},
		{//西向东左转d_32:
			path:'M259,328 C333,328,354,267,463,71 ',
			attr:{
				stroke:'rgb(41,94,187)',
			},
	    	nums:0,
	    	x:460,
	    	y:60
		},
		{//西向东右转d_33:
			path:'M 144,273 C196,307,159,346,96,459 ',
			attr:{
				stroke:'rgb(117,158,209)',
			},
	    	nums:0,
	    	x:86,
	    	y:475
		},
];

/**
 * 改变数组的值
 * @param _data
 */
function changeNumsArray(_data){
	for(var i in _data){
    	if(_data[i].direction=='0'){
    		if(_data[i].directionOnLid=='1'){
    			nums_array[0] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='2'){
    			nums_array[1] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='3'){
    			nums_array[2] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='4'){
    			nums_array[0] += parseInt(_data[i].nums);
    			nums_array[1] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='5'){
    			nums_array[0] += parseInt(_data[i].nums);
    			nums_array[2] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='6'){
    			nums_array[0] += parseInt(_data[i].nums);
    			nums_array[1] += parseInt(_data[i].nums/3);
    			nums_array[2] += parseInt(_data[i].nums/3);
    		}
    	}
    	if(_data[i].direction=='1'){
    		if(_data[i].directionOnLid=='1'){
    			nums_array[3] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='2'){
    			nums_array[4] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='3'){
    			nums_array[5] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='4'){
    			nums_array[3] += parseInt(_data[i].nums);
    			nums_array[4] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='5'){
    			nums_array[3] += parseInt(_data[i].nums);
    			nums_array[5] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='6'){
    			nums_array[3] += parseInt(_data[i].nums);
    			nums_array[4] += parseInt(_data[i].nums/3);
    			nums_array[5] += parseInt(_data[i].nums/3);
    		}
    	}
    	if(_data[i].direction=='2'){
    		if(_data[i].directionOnLid=='1'){
    			nums_array[6] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='2'){
    			nums_array[7] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='3'){
    			nums_array[8] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='4'){
    			nums_array[6] += parseInt(_data[i].nums);
    			nums_array[7] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='5'){
    			nums_array[6] += parseInt(_data[i].nums);
    			nums_array[8] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='6'){
    			nums_array[6] += parseInt(_data[i].nums);
    			nums_array[7] += parseInt(_data[i].nums/3);
    			nums_array[8] += parseInt(_data[i].nums/3);
    		}
    	}
    	if(_data[i].direction=='3'){
    		if(_data[i].directionOnLid=='1'){
    			nums_array[9] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='2'){
    			nums_array[10] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='3'){
    			nums_array[11] += _data[i].nums;
    		}
    		if(_data[i].directionOnLid=='4'){
    			nums_array[9] += parseInt(_data[i].nums);
    			nums_array[10] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='5'){
    			nums_array[9] += parseInt(_data[i].nums);
    			nums_array[11] += parseInt(_data[i].nums/2);
    		}
    		if(_data[i].directionOnLid=='6'){
    			nums_array[9] += parseInt(_data[i].nums);
    			nums_array[10] += parseInt(_data[i].nums/3);
    			nums_array[11] += parseInt(_data[i].nums/3);
    		}
    	}
	}
}

function setArrow(){
	 $('body').append(
		'<svg>'+
             '<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">'+
             	'<marker id="raphael-marker-endclassic-0" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(111,43,103)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-1" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(207,130,178)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-2" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(178,83,159)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-3" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(28,117,59)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-4" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#96ca75" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-5" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(188,218,105)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-6" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(188,25,31)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-7" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#ea000a" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-8" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(242,112,112)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-9" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(20,47,89)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-10" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(41,94,187" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'<marker id="raphael-marker-endclassic-11" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="" xlink:href="#raphael-marker-classic" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="rgb(117,158,209)" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker>'+
             	'</defs>'+
         '</svg>');
}

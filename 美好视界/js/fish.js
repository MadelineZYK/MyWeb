$(function(){
	$(".rr").hover(function(){
		$(this).prev().css("visibility","visible");
	},function(){
		$(this).prev().css("visibility","");
	});
	
	$("#txt").focus(function(){
		$(this).attr("value","");
	});
	
	$("#txt").blur(function(){
		$(this).attr("value","SEARCH");
	});

	
	$("#focus").hover(function(){
		clearInterval(timeHandle);
	},function(){
		timeHandle=setInterval("change(3000,-1)",3000);
	});
	
	timeHandle=setInterval("change(3000,-1)",3000);

	$("#arrL").click(function(){
		$("#focus ul").stop(true,true);
		change(0,-1);
	});

	$("#arrR").click(function(){
		$("#focus ul").stop(true,true);
		change(0,0);
	});
	
});

var timeHandle;
// var inow=1;
// var i=0;

// function clickscroll(){
// 	var a=i;
// 	for(i;i<4;i++){
// 		$(".slide").each(function(){
// 			var inow=$(this).attr("ulIndex");
// 			$("#ul"+inow).animate({"left":(inow-i-1)*975},2000);
// 		});
// 	}
// 	i++;
// 	i=a;
// 	if(i==4){
// 		i=0;
// 	}
// }

var direction=-1;//-1表示左，0表示右
var n=0;//第一张
var i=0;//循环参数
var l=0;//总数
function change(time,direction){
	l=n+3;
	var a=n%4;//第一张
	var b=(n+3)%4;//最后一张
	for(n;n<=l;n++){//从第一张开始位移
		var m=n%4;
		$("#ul"+m).animate({"left":(i+direction)*975+"px"},time);
		i++;
	}
	n=n-4;//回到第一张
	i=0;//循环置0
	if(direction==-1){
		$("#ul"+a).animate({"left":"975px"},0);//将第一张闪到最后
	}
	else{
		$("#ul"+b).animate({"left":"-975px"},0);
		n=b-1;
	}
	n++;//加完回到第一张
	if(n==4){
		n=0;
	}
}
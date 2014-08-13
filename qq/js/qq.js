$(function(){

	$("#importantNews").hover(function(){
		$(".t1").removeClass("currentContent");
		$(this).addClass("currentContent");
		$(this).parent().parent().next().show();
		$(this).parent().parent().next().next().hide();
	});

	$("#jiangsuNews").hover(function(){
		$(".t1").removeClass("currentContent");
		$(this).addClass("currentContent");
		$(this).parent().parent().next().next().show();
		$(this).parent().parent().next().hide();
	});

	$("#rb").hover(function(){
		$(".t2").removeClass("currentContent");
		$(this).addClass("currentContent");
		$(this).parent().next().show();
		$(this).parent().next().next().hide();
	});

	$("#ys").hover(function(){
		$(".t2").removeClass("currentContent");
		$(this).addClass("currentContent");
		$(this).parent().next().next().show();
		$(this).parent().next().hide();
	});

	$("#shangZhengT").hover(function(){
		$(this).parent().children().removeClass("choose");
		$(this).addClass("choose");
		$(this).parent().next().show();
		$(this).parent().next().next().hide();
		$(this).parent().next().next().next().hide();
	});

	$("#hengZhiT").hover(function(){
		$(this).parent().children().removeClass("choose");
		$(this).addClass("choose");
		$(this).parent().next().next().show();
		$(this).parent().next().hide();
		$(this).parent().next().next().next().hide();
	});

	$("#daoZhiT").hover(function(){
		$(this).parent().children().removeClass("choose");
		$(this).addClass("choose");
		$(this).parent().next().next().next().show();
		$(this).parent().next().next().hide();
		$(this).parent().next().hide();
	});

	$(".rightArea3C12Title").hover(function(){
		$(".rightArea3ContentMoren").hide();
		$(this).parent().next().show();
	});

	$(".rightArea3C12Title1").hover(function(){
		$(".rightArea3ContentMoren1").hide();
		$(this).parent().next().show();
	});

	$(".rightArea3C12Title2").hover(function(){
		$(".rightArea3ContentMoren2").hide();
		$(this).parent().next().show();
	});

	timeHandle=setInterval("showPic(2000,-1)",2000);

	$(".layoutPicContentL").click(function(){
		$("#layoutPicContent2 li").stop(true,true);
		clearInterval(timerHandle);
		newchange(0,-1);
		timerHandle = setInterval("newchange(2000,-1)",2000);
		directionR=-1;
	});

	$(".layoutPicContentR").click(function(){
		$("#layoutPicContent2 li").stop(true,true);
		clearInterval(timerHandle);
		newchange(0,0);
		timerHandle = setInterval("newchange(2000,0)",2000);
		directionR=0;		
	});

});

var timeHandle;
var n=0;
var i=0;
var l=0;
function showPic(time,direction){
	l=n+5;
	var a=n%6;
	var b=(n+5)%6;
	for(n;n<=l;n++){
		var m=n%6;
		$(".layoutPicli"+m).animate({"left":(i+direction)*188+"px"},time);
		i++;
	}
	n=n-6;
	i=0;
	if(direction==-1){
		$(".layoutPicli"+a).animate({"left":"940px"},0);
	}
	else{
		$(".layoutPicli"+b).animate({"left":"-188px"},0);
		n=b-1;
	}
	n++;
	if(n==6){
		n=0;
	}
}
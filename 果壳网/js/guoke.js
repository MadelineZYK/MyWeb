$(function(){
	$(".spec").hover(function(){
		$(this).find(".oo").next().show();
	},function(){
		$(this).find(".oo").next().hide();
	});

	$(".ma").hover(function(){
		$(this).css("background-color","#ccc");
	},function(){
		$(this).css("background-color","");
	});



	$(".focusli").click(function(){
		currIndex=$(this).attr("picIndex");
		showPic();
	});

	$(".focusContent").hover(function(){
		clearInterval(timeHandle);
	},function(){
		timeHandle=setInterval("showPic()",2000);
	});

	timeHandle=setInterval("showPic()",2000);


	$("#refresh").click(function(){
		$(".sidegroup").removeClass("currenthot");		
		ng++;
		$("#sg"+ng).addClass("currenthot");
		if(ng==5){
			ng=0;
		}
	});
});
var ng=1;
var timeHandle;
var currIndex=2;
function showPic(){
	var curImg=$("#fl"+currIndex).attr("imgurl");
	$(".focusContent").css("background-image",'url("'+curImg+'")');
	$(".focusli").removeClass("currentli");
	$("#fl"+currIndex).addClass("currentli");
	$(".ftitle").removeClass("currentft");
	$("#ft"+currIndex).addClass("currentft");
	currIndex++;
	if(currIndex==6){
		currIndex=1;
	}
}
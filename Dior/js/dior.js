$(function(){
	$(".column").hover(function(){
		var img=$(this).attr("imgurl");
		$(this).parent().parent().prev().prev().css("background-image",'url("'+img+'")');
		$(this).children().children().css("opacity","1");
		$(this).parent().parent().prev().show();
	},function(){
		$(this).children().children().css("opacity","");
		$(this).parent().parent().prev().hide();
	});

	$(".firstco,.lastco").hover(function(){
		$(this).find(".title").css("color","#000");
		$(this).find("a").css("color","#000");
		$(this).parent().parent().prev().hide();
	},function(){
		$(this).find(".title").css("color","");
		$(this).find("a").css("color","");
	});

	$(".first").hover(function(){
		$(this).parent().animate({"left":"-820px"},1000);
	});

	$(".last").hover(function(){
		$(this).parent().animate({"left":"0"},1000);
	});

	$("#languagestrigger").click(function(){
		$(this).next().show();
		return false;
	});

	$(".hh6").hover(function(){
		$(this).css("background-color","#ccc");
	},function(){
		$(this).css("background-color","");
	});

	$(".hh6").click(function(){
		$(".ull").hide();
		$(this).next().show();
		return false;
	});

	$(document).click(function(){
		$(".languageslist").hide();
	});
	$(".languageslist li ul li").hover(function(){
		$(this).css("background-color","#ccc");
	},function(){
		$(this).css("background-color","");
	});
});
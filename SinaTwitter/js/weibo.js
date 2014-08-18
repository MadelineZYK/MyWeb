$(function(){
	$(".toptitle").hover(function(){
		$(this).find(".t1").css({"background-color":"#fff","color":"#000"});
		$(this).find(".t1").find("em").css({"border-color":"#fff #fff #333 #fff","margin":"-4px 0 0"});
		$(this).find(".t1").next().show();
	},function(){
		$(this).find(".t1").css({"background-color":"","color":""});
		$(this).find(".t1").find("em").css({"border-color":"","margin":""});
		$(this).find(".t1").next().hide();
	});

	$(".sinput").focus(function(){
		$(this).attr("placeholder","");
		$(this).parent().css("background-color","#fff");
		$(this).next().next().show();
	});

	$(".sinput").blur(function(){
		$(this).attr("placeholder","大家正在热搜：赵丽颖 张翰");
		$(this).parent().css("background-color","");
		$(this).next().next().hide();
	});

	$(".ulli").hover(function(){
		$(".ulli").removeClass("currentsc");
		$(this).addClass("currentsc");
	},function(){
		$(".ulli").removeClass("currentsc");
		$(".stitle").addClass("currentsc");
	});

	$(".gnsetting").hover(function(){
		$(this).find(".ptitle1").css("background-color","#fff");
		$(this).find(".pscontent").show();
	},function(){
		$(this).find(".ptitle1").css("background-color","");
		$(this).find(".pscontent").hide();
	});

	$(".pt").hover(function(){
		$(this).css("background-color","#000");
	},function(){
		$(this).css("background-color","");
	});

	$(".pscontent li").hover(function(){
		$(this).css("background-color","#e6e6e6");
	},function(){
		$(this).css("background-color","");
	});

	$(".txt1").hover(function(){
		$(this).css("background-color","#e6e6e6");
	},function(){
		$(this).css("background-color","");
	});

	$(".level2box").hover(function(){
		$(this).find(".btns").show();
	},function(){
		$(this).find(".btns").hide();
	});

	$(".link1").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".zk").click(function(){
		$(this).hide();
		$(this).prev().show();
	});

	$(".sq").click(function(){
		$(this).parent().hide();
		$(this).parent().next().show();
	});

	$(".func1").hover(function(){
		$(this).css("color","#0a8cd2");
	},function(){
		$(this).css("color","");
	});

	$(".inputdetail").focus(function(){
		$(this).parent().css("border-color","#e4e4e4");
		$(this).parent().prev().find(".key").hide();
		$(this).parent().prev().find(".num").show();
	});

	$(".inputdetail").blur(function(){
		$(this).parent().css("border-color","");
		$(this).parent().prev().find(".num").hide();
		$(this).parent().prev().find(".key").show();
	});
});
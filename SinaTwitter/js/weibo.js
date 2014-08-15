$(function(){
	$(".t1").hover(function(){
		$(this).css({"background-color":"#fff","color":"#000"});
		$(this).find("em").css({"border-color":"#fff #fff #333 #fff","margin":"-4px 0 0"});
		$(this).next().show();
	},function(){
		$(this).css({"background-color":"","color":""});
		$(this).find("em").css({"border-color":"","margin":""});
		$(this).next().hide();
	})
});
$(function(){
	$(":text,:password").focus(function(){
		$(this).css("box-shadow", "0 0 8px rgba(0,191,255,0.7)");
	});

	$(":text,:password").blur(function(){
		$(this).css("box-shadow", "0 1px 1px rgba(0,0,0,0.075)");
	});
	
});
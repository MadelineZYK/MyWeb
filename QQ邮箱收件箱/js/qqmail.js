$(function(){
	$(".fdul li").hover(function(){
		$(this).css("background-color","#006b8e");
	},function(){
		$(this).css("background-color","");
	});

	$("#subject").focus(function(){
		$(this).next().next().css("background-position","-75px -4px");
		$(this).attr("value","");
	});

	$("#subject").blur(function(){
		$(this).next().next().css("background-position","");
		$(this).attr("value","邮件搜索...");
	});
//全选，已读，删除，垃圾箱

	$("#ckbselectall").click(function(){
		var ch = $(this).attr("choice");
		if(ch=='no'){
			selectall();
			$(this).parent().parent().parent().parent().next().css({"height":"25px","visibility":"visible"});
			$(this).attr("choice","yes");
		}else{
			notselectall();
			$(this).parent().parent().parent().parent().next().css({"height":"","visibility":""});
			$(this).attr("choice","no");
		}		
	});

	$(".a1").click(function(){
		selectall();
		$(this).parent().parent().parent().find("#ckbselectall").attr("choice","yes");
		$(this).parent().parent().parent().find("#selectall").css({"height":"25px","visibility":"visible"});
	});

	$(".w1").click(function(){
		notselectall();
		$(this).parent().parent().parent().find("#ckbselectall").attr("choice","no");
		$(this).parent().parent().parent().find("#selectall").css({"height":"0","visibility":"hidden"});
	});

	$(".w2").click(function(){
		var inputs = document.getElementsByTagName('input');   
		for(var i=0;i<inputs.length;i++)   
		{
			if(inputs[i].getAttribute('type')=='checkbox'){
				var cc=inputs[i].getAttribute("bz");
				if(cc=="0"){
					inputs[i].checked = true; 
				}   
			}
			
		}   
	});

	$(".y1").click(function(){
		var inputs = document.getElementsByTagName('input');   
		for(var i=0;i<inputs.length;i++)   
		{
			if(inputs[i].getAttribute('type')=='checkbox'){
				var cc=inputs[i].getAttribute("bz");
				if(cc=="1"){
					inputs[i].checked = true; 
				}   
			}
			
		}   
	});

	$("#setallreaded").click(function(){
		selectall();
		$(this).parent().parent().next().find("#ckbselectall").attr("choice","yes");
		$(this).parent().parent().parent().find("#selectall").css({"height":"25px","visibility":"visible"});
	});

	$("#quickdel,#quickdel1").click(function(){
		var inputs = document.getElementsByTagName('input');   
		for(var i=inputs.length-1;i>0;i--)   
		{
		   if(inputs[i].getAttribute('type')=='checkbox'){
			   	if(inputs[i].checked == true){
			   		inputs[i].parentNode.parentNode.parentNode.parentNode.remove();
			   	}   
		   }   
		}   
	});//删除选中的项

	$(".xla li").hover(function(){
		$(this).css("background-color","#3470cc");
		$(this).find("a").css({"color":"#fff","text-decoration":"none"});
	},function(){
		$(this).css("background-color","");
		$(this).find("a").css({"color":"","text-decoration":""});
	});

	$("#markcontainer").click(function(){
		$(this).parent().parent().parent().parent().prev().show();
		return false;
	});

	$(document).click(function(){
		$(".xla").hide();
	});

	//标记已读
	$(".ydyj").click(function(){
		$(".cb").each(function(){
			if ($(this).is(':checked')) {
				$(this).parent().next().find("div").removeClass("ru").addClass("rr");
				$(this).parent().next().next().find("*").removeClass("bold");
				$(this).removeAttr("checked");
			}
		});
	});

	//全部标记为已读
	$("#setallreaded").click(function(){
		$(".cb").each(function(){
			$(this).parent().next().find("div").removeClass("ru").addClass("rr");
			$(this).parent().next().next().find("*").removeClass("bold");
			$("input").removeAttr("checked");
		});
	});
});

function selectall(){
	var inputs = document.getElementsByTagName('input');   
	for(var i=0;i<inputs.length;i++)   
	{   
	   if(inputs[i].getAttribute('type')=='checkbox'){
	   	inputs[i].checked = true;   
	   }   
	}   
}

function notselectall(){
	var inputs = document.getElementsByTagName('input');   
	for(var i=0;i<inputs.length;i++)   
	{   
	    if(inputs[i].getAttribute('type')=='checkbox')   
	    { 
	    	inputs[i].checked = false; 
		}
	}   
}
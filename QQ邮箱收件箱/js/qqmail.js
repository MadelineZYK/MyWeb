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
			$(this).attr("choice","yes");
		}else{
			notselectall();
		}
		
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
		     if (inputs[i].checked == true){   
		      	inputs[i].checked = false  
		     }else{   
		     	inputs[i].checked = true;   
		     }   
		}
	}   
}
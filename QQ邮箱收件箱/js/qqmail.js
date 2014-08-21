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
		if($(this).is(':checked')){
			$(".cb").each(function(){
				$(this).prop("checked", true);
			});
			$(this).parent().parent().parent().parent().next().css({"height":"25px","visibility":"visible"});
		}else{
			$(".cb").each(function(){
				$(this).prop("checked", false);
			});
			$(this).parent().parent().parent().parent().next().css({"height":"","visibility":""});
		}
	});//全选

	$(".a1").click(function(){
		$(".cb").each(function(){
			$(this).prop("checked", true);
		});
		$(this).parent().parent().parent().find("#ckbselectall").prop("checked", true);
		$(this).parent().parent().parent().find("#selectall").css({"height":"25px","visibility":"visible"});
	});//全部

	$(".w1").click(function(){
		$(".cb").each(function(){
			$(this).prop("checked", false);
		});
		$(this).parent().parent().parent().find("#ckbselectall").prop("checked", false);
		$(this).parent().parent().parent().find("#selectall").css({"height":"0","visibility":"hidden"});
	});//无

	$(".w2").click(function(){
		$(".cb").each(function(){
			var ch=$(this).attr("bz");
			if(ch=="0"){
				$(this).prop("checked",true);
			}
		});
	});//未读

	$(".y1").click(function(){
		$(".cb").each(function(){
			var cc= $(this).attr("bz");
			if(cc=="1"){
				$(this).prop("checked",true);
			}
		});
	});//已读

	$("#quickdel,#quickdel1").click(function(){
		$(".cb").each(function(){
			if($(this).is(':checked')){
				var i=$(this).parent().parent().parent().parent().parent().prev().find("span").html()-1;
				$(this).parent().parent().parent().parent().hide();
				$(this).prop("checked",false);
				$(this).parent().parent().parent().parent().parent().prev().find("span").html(i);
				var ch=$(this).attr("bz");
				if(ch=="0"){
					var j=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html()-1;
					if(j==0){
						$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".weidushu").html("");
					}else{
						$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html(j);
					}
				}
			}
		});
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
				$(this).prop("checked",false);
				$(this).attr("bz","1");
				var j=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html()-1;
				if(j==0){
					$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".weidushu").html("");
				}else{
					$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html(j);
				}
			}
		});
	});

	//全部标记为已读
	$("#setallreaded").click(function(){
		$(".cb").each(function(){
			$(this).parent().next().find("div").removeClass("ru").addClass("rr");
			$(this).parent().next().next().find("*").removeClass("bold");
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".weidushu").html("");
		});
	});
});
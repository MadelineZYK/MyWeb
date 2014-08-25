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

	$(".ckbselectall").click(function(){
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
				var rr=$(this).parent().next().next().find(".t1").find("b").html();
				var zz=$(this).parent().next().next().find(".gt").find(".black").html();
				var tt=$(this).parent().next().next().find(".dt").find("div").html();
				var i=$(this).parent().parent().parent().parent().parent().prev().find("span").html()-1;
				$(this).parent().parent().parent().parent().hide();
				zhuanyi(rr,zz,tt);
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
				$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find("#ysc").find(".fsize").css("text-align","left");
				$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find("#ysc").append('<a href="#" class="nolinkbg normal fdleft emptylink">[清空]<\/a>');
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

	//标记未读
	$(".wdyj").click(function(){
		$(".cb").each(function(){
			if ($(this).is(':checked')) {
				$(this).parent().next().find("div").removeClass("rr").addClass("ru");
				$(this).parent().next().next().find("*").addClass("bold");
				$(this).prop("checked",false);
				$(this).attr("bz","0");
				var j=$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html();
				j++;
				$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find(".wds").html(j);				
			}
		});
	});

	//标记星标
	$(".xbyj").click(function(){
		$(".cb").each(function(){
			if ($(this).is(':checked')) {
				$(this).prop("checked",false);
				$(this).parent().parent().find(".fg").find("div").css("background-position","-48px -160px");				
			}
		});
	});

	//取消星标
	$(".qxxb").click(function(){
		$(".cb").each(function(){
			if ($(this).is(':checked')) {
				$(this).prop("checked",false);
				$(this).parent().parent().find(".fg").find("div").css("background-position","-32px -160px");				
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

	$("#ysc").click(function(){
		$(this).removeClass("fs").addClass("fn");
		$(this).prev().prev().prev().prev().prev().removeClass("fn").addClass("fs");
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().next().find("#qqmailcontainer").hide();
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().next().find("#qqmailcontainer1").show();
	});

	
	$("#sjx").click(function(){
		$(this).removeClass("fs").addClass("fn");
		$(this).next().next().next().next().next().removeClass("fn").addClass("fs");
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().next().find("#qqmailcontainer1").hide();
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().next().find("#qqmailcontainer").show();
	});
});


function zhuanyi(ren,zt,time){
	var html="";
	html+='<div class="toarea">';
	html+='	<table class="i m">';
	html+='		<tbody>';
	html+='			<tr>';
	html+='				<td class="cx">';
	html+='					<input class="cb" type="checkbox" bz="0">';
	html+='				</td>';
	html+='				<td class="ci">';
	html+='					<div class="cir rr"></div>';
	html+='				</td>';
	html+='				<td class="l">';
	html+='					<table class="i">';
	html+='						<tbody>';
	html+='							<tr>';
	html+='								<td class="t1 tf">';
	html+='									<b>'+ren+'</b>';
	html+='								</td>';
	html+='								<td class="fgn">';
	html+='									<div></div>';
	html+='								</td>';
	html+='								<td class="gt">';
	html+='									<div class="tf no">';
	html+='										<u class="black tt">'+zt+'</u>';
	html+='									</div>';
	html+='								</td>';
	html+='								<td class="dt">';
	html+='									<div>'+time+'</div>';
	html+='								</td>';
	html+='								<td class="fg">';
	html+='									<div></div>';
	html+='								</td>';
	html+='							</tr>';
	html+='						</tbody>';
	html+='					</table>';
	html+='				</td>';
	html+='			</tr>';
	html+='		</tbody>';
	html+='	</table>';
	html+='</div>';
	$(".xinsc").append(html);
	var ss=$(".curdefault").find("span").html();
	ss++;
	$(".curdefault").find("span").html(ss);
}
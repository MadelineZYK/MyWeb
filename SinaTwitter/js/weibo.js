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

	$(".wbleftnav .txt1").hover(function(){
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
		$(this).parent().css("border-color","#ffb941");
		$(this).parent().prev().find(".key").hide();
		$(this).parent().prev().find(".num").show();
	});

	$(".inputdetail").blur(function(){
		$(this).parent().css("border-color","");
		$(this).parent().prev().find(".num").hide();
		$(this).parent().prev().find(".key").show();
	});

	$(".wbtnround").hover(function(){
		$(this).css({"background-color":"#ffa71b","border-color":"#ff9b01"});
		$(this).find("span").css("color","#fff");
	},function(){
		$(this).css({"background-color":"","border-color":""});
		$(this).find("span").css("color","");
	});

	$(".wbtnb").hover(function(){
		$(this).css({"background-color":"#ffa71b","border-color":"#ff9b01","color":"#fff"});
		$(this).find(".addicon").css("color","#fff");
	},function(){
		$(this).css({"background-color":"","border-color":"","color":""});
		$(this).find(".addicon").css("color","");
	});

	$(".namelist").hover(function(){
		$(this).find(".change").show();
	},function(){
		$(this).find(".change").hide();
	});

	$(".pic30").hover(function(){
		$(this).find(".change").show();
	},function(){
		$(this).find(".change").hide();
	});

	$(".hottopic li a").hover(function(){
		$(this).css("text-decoration","underline");
	},function(){
		$(this).css("text-decoration","none");
	});

	$(".rli1").hover(function(){
		$(this).addClass("currentli");
		$(this).find(".wtabarrow").show();
		$(this).next().next().removeClass("currentli");
		$(this).next().next().find(".wtabarrow").hide();
		$(this).parent().parent().next().find(".interesttab").show();
		$(this).parent().parent().next().find(".memberdynamic").hide();
	});

	$(".rli2").hover(function(){
		$(this).addClass("currentli");
		$(this).find(".wtabarrow").show();
		$(this).prev().prev().find(".wtabarrow").hide();
		$(this).prev().prev().removeClass("currentli");
		$(this).parent().parent().next().find(".memberdynamic").show();
		$(this).parent().parent().next().find(".interesttab").hide();
	});

	$(".smartsort").click(function(){
		$(this).next().show();
		$(this).find(".warrow").find("em").css({"border-color":"#fff #fff #333 #fff","margin":"0 0 0 -2px"});
		return false;
	});
	$(document).click(function(){
		$(".groupsort").hide();
		$(".smartsort").find(".warrow").find("em").css({"border-color":"","margin":""});
		$(".replyexpand").hide();
	});

	$(".zan,.zan1").click(function(){
		var left = parseInt($(this).offset().left)+10;
		var top =  parseInt($(this).offset().top)-10;
		var obj=$(this);
  		$(this).append('<div id="zhan"><b>+1<\/b></\div>');
  		$('#zhan').css({'position':'absolute','z-index':'1', 'color':'#C30','left':left+'px','top':top+'px'}).animate({top:top-10,left:left+10},'slow',function(){
	   		$(this).fadeIn('fast').remove();
	   		var Num = parseInt(obj.find('span').text());
	       		Num++;
	    	obj.find('span').text(Num);
    	});
	});

	$(".pl").click(function(){
		$(this).parent().parent().next().show();
		return false;
	});

	$(window).scroll(function(){
        var scroll_top = $(document).scrollTop();
        if (scroll_top != 0){
        	$(".wgotop").css("visibility","visible");
        }
        else{
        	$(".wgotop").css("visibility","hidden");
        }           
    });

    $(".replyexpand").click(function(){
    	return false;
    });

    $(".hh")
});

function addreply(){
	var html="";
	html+='<div class="wbarrow">';
	html+='	<em class="line1c">◆</em>';
	html+='	<span class="bg4c">◆</span>';
	html+='</div>';
	html+='<div class="line1 input clearfix">';
	html+='	<div>';
	html+='		<textarea class="winput"></textarea>';
	html+='	</div>';
	html+='	<div class="action">';
	html+='		<span class="wico16 icofaces"></span>';
	html+='		<ul class="commonedlist">';
	html+='			<li>';
	html+='				<label>';
	html+='				<input class="wcheckbox" type="checkbox">同时转发到我的微博';
	html+='				</label>';
	html+='			</li>';
	html+='		</ul>';
	html+='	</div>';
	html+='	<p class="btn">';
	html+='		<a class="wbtna">';
	html+='			<span class="btn30px wfl4">';
	html+='				<b></b>';
	html+='				<em class="btntext">评论</em>';
	html+='			</span>';
	html+='		</a>';
	html+='	</p>';
	html+='</div>';	
	$(".wbmediaexpand").append(html);
}
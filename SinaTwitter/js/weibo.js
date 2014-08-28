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
		$(this).parent().next().find(".wbtnvdisable").find(".btn30px").css({"background-color":"#e64141","color":"#fff"});
	});

	$(".inputdetail").blur(function(){
		$(this).parent().css("border-color","");
		$(this).parent().prev().find(".num").hide();
		$(this).parent().prev().find(".key").show();
		$(this).parent().next().find(".wbtnvdisable").find(".btn30px").css({"background-color":"","color":""});
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
		// $(".replyexpand").hide();
	});

	$(document).on("click",".zan,.zan1",function(){
		var ii = $(this).attr("ifzan");
		var obj=$(this);
		var Num = parseInt(obj.find('span').text());
		if(ii==0){
			var left = parseInt($(this).offset().left)+10;
			var top =  parseInt($(this).offset().top)-10;			
	  		$(this).append('<div id="zhan"><b>+1<\/b></\div>');
	  		$('#zhan').css({'position':'absolute','z-index':'1', 'color':'#C30','left':left+'px','top':top+'px'}).animate({top:top-10,left:left+10},'slow',function(){
		   		$(this).fadeIn('fast').remove();
		   		var shu=Num+1;
		    	obj.find('span').text(shu);
	    	});
	    	$(this).find("em").css("background-position","-100px 0");
	    	$(this).attr("ifzan","1");
    	}else{
    		var ss=Num-1;
    		obj.find('span').text(ss);
    		$(this).find("em").css("background-position","");
	    	$(this).attr("ifzan","0");
    	}
	});

	$(document).on("click",".zan1",function(){
		var ii = $(this).attr("ifzan");
		var obj=$(this);
		var Num = parseInt(obj.find('span').text());
		if(ii==0){
			var left = parseInt($(this).offset().left)+10;
			var top =  parseInt($(this).offset().top)-10;			
	  		$(this).append('<div id="zhan"><b>+1<\/b></\div>');
	  		$('#zhan').css({'position':'absolute','z-index':'1', 'color':'#C30','left':left+'px','top':top+'px'}).animate({top:top-10,left:left+10},'slow',function(){
		   		$(this).fadeIn('fast').remove();
		   		var shu=Num+1;
		    	obj.find('span').text(shu);
	    	});
	    	$(this).find("em").css("background-position","-100px 0");
	    	$(this).attr("ifzan","1");
    	}else{
    		var ss=Num-1;
    		obj.find('span').text(ss);
    		$(this).find("em").css("background-position","");
	    	$(this).attr("ifzan","0");
    	}
	});

	$(document).on("click",".pl",function(){
		var yy=$(this).attr("isopen");
		var con=$(this).attr("ifc");
		var pp=$(this).attr("pindex");
		if(yy=="no"&&con=="0"){
			addsreply(pp);
			addkuang(pp);
			$(".dahuifu"+pp).show();
			$(this).attr("isopen","yes");
		}
		if(yy=="no"&&con=="1"){
			$(".dahuifu"+pp).show();
			$(this).attr("isopen","yes");
		}
		if(yy=="yes"&&con=="0"){
			$(".dahuifu"+pp).empty();
			$(".dahuifu"+pp).hide();
			$(this).attr("isopen","no");
		}	
		if(yy=="yes"&&con=="1"){
			$(".dahuifu"+pp).hide();
			$(this).attr("isopen","no");
		}	
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

    $(document).on("click",".hh",function(){
    	var ss=$(this).attr("iso");
    	var n=$(this).attr("rindex");
    	if(ss=="no"){
    		addreply(n);
    		$(this).attr("iso","yes");
    		$(".rereply"+n).show();
    	}else{
    		$(".rereply"+n).empty();
    		$(".rereply"+n).hide();
    		$(this).attr("iso","no");
    	}   	
    });


	$(document).on("click",".btntext",function(){
		var b=$(this).attr("bindex");
    	var c=$(this).parent().parent().parent().parent().find(".winput").val();
    	appendreply(c,b);
    	$(this).parent().parent().parent().parent().find(".winput").val("");
    	$(this).parent().parent().parent().parent().parent().parent().prev().find(".pl").attr("ifc","1");
	});

	$("#fabu").click(function(){
		var ccton=$(this).parent().parent().parent().prev().find(".inputdetail").val();
		addFabu(ccton);
		$(this).parent().parent().parent().prev().find(".inputdetail").val("");
	});

	var topp;
	$(window).scroll(function(){
		topp=$(this).scrollTop();
	});

	$(document).on("click",".zf",function(){
		var dx=$(this).parent().parent().parent().find(".wbname").html();
		var nr=$(this).parent().parent().parent().find(".wbtext").html();
		$(".mengban").show();
		$(".contrans").find(".conttxtlink").html("@"+dx);
		$(".contrans").find(".contgeyan").html(nr);
		$(".contrans").css("top",topp+200+'px');
		$(".contrans").show();
		$(".concwbrzfbtn").click(function(){
			var pc=$(".contte").val();
			zhuanfa(pc,dx,nr);
			$(".mengban").hide();
			$(".contrans").hide();
			$(".contte").val("");
		});
		$(".contclose").click(function(){
			$(".mengban").hide();
			$(".contrans").hide();
		});
	});

	$(".bigcursor").click(function(){
		var ind=$(this).attr("liindex");
		$(this).parent().parent().parent().parent().parent().hide();
		$(this).parent().parent().parent().parent().parent().next().show();
		$(this).parent().parent().parent().parent().parent().next().find("#ll"+ind).show();
	});

	$(".smallcursor").click(function(){
		$(this).find(".epli").hide();
		$(this).parent().parent().hide();
		$(this).parent().parent().prev().show();
	});
});

function addsreply(n){
	var html="";
	html+='<div class="replyexpand line1 bg4">';
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
	html+='				<em class="btntext" bindex='+n+'>评论</em>';
	html+='			</span>';
	html+='		</a>';
	html+='	</p>';
	html+='</div>';
	html+='<div id="ccru'+n+'"></div>';	
	html+='</div>';	
	$(".dahuifu"+n).prepend(html);
}

//回复的回复框
function addreply(n){
	var html="";
	html+='<div class="wbmediaexpand repeat line1 bg1">';
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
	html+='				<em class="btntext" bindex='+n+'>评论</em>';
	html+='			</span>';
	html+='		</a>';
	html+='	</p>';
	html+='</div>';	
	html+='</div>';	
	$(".rereply"+n).prepend(html);
}

function appendreply(c,b){
	var d=new Date();
	var Time = new Date();
	var h = Time.getHours()<10?"0"+Time.getHours():Time.getHours();
	var m = Time.getMinutes()<10?"0"+Time.getMinutes():Time.getMinutes();
	var s = Time.getSeconds()<10?"0"+Time.getSeconds():Time.getSeconds();
	var T = h+":"+m+":"+s;
	var html="";
	html+='<dl class="commentlist line1">';
	html+='	<dt>';
	html+='		<a href="#">';
	html+='			<img src="images/user.jpg">';
	html+='		</a>';
	html+='	</dt>';
	html+='	<dd>';
	html+='		<a href="#">Wing_yk</a>：'+c+'('+T+')';
	html+='		<div class="info">';
	html+='			<span class="wlinkb">';
	html+='				<em class="hover">';
	html+='					<a href="#">举报</a>';
	html+='					<em class="txt3">|</em>';
	html+='				</em>';
	html+='				<a class="zan1" ifzan="0">';
	html+='					<em class="wico20 iconpraisedb"></em>';
	html+='					(<span>0</span>)';
	html+='				</a>';
	html+='				<i class="txt3">|</i>';
	html+='				<a class="hh" rindex="'+b+'">回复</a>';
	html+='			</span>';
	html+='		</div>';
	html+='		<div class="rereply'+b+'"></div>';
	html+='	</dd>';
	html+='	<dd class="clear"></dd>';
	html+='</dl>';
	$(".commentlists"+b).prepend(html);
}

function addkuang(x){
	var html="";
	// html+='<div class="tabb txt3 line1">';
	// html+='	<span class="txt2">共2条</span>';
	// html+='	<a class="currenta txt1">全部</a>';
	// html+='	<i class="wvline">|</i>';
	// html+='	<a class="func1">热门</a>';
	// html+='	<i class="wvline">|</i>';
	// html+='	<a class="func1">认证用户</a>';
	// html+='	<i class="wvline">|</i>';
	// html+='	<a class="func1">关注的人</a>';
	// html+='</div>';
	html+='<div class="commentlists'+x+'">';
	// html+='	<dl class="commentlist line1">';
	// html+='		<dt>';
	// html+='			<a href="#">';
	// html+='				<img src="images/p1.jpg">';
	// html+='			</a>';
	// html+='		</dt>';
	// html+='		<dd>';
	// html+='			<a href="#">沫迹Sissi</a>：加油！ (8月20日 19:01)';
	// html+='			<div class="info">';
	// html+='				<span class="wlinkb">';
	// html+='					<em class="hover">';
	// html+='						<a href="#">举报</a>';
	// html+='						<em class="txt3">|</em>';
	// html+='					</em>';
	// html+='					<a class="zan1" ifzan="0">';
	// html+='						<em class="wico20 iconpraisedb"></em>';
	// html+='						(<span>6</span>)';
	// html+='					</a>';
	// html+='					<i class="txt3">|</i>';
	// html+='					<a class="hh" rindex="1" iso="no">回复</a>';
	// html+='				</span>';
	// html+='			</div>';
	// html+='			<div class="rereply1"></div>';
	// html+='		</dd>';
	// html+='		<dd class="clear"></dd>';
	// html+='	</dl>';	
	// html+=' <dl class="commentlist line1">';
	// html+='		<dt>';
	// html+='			<a href="#">';
	// html+='				<img src="images/p2.jpg">';
	// html+='			</a>';
	// html+='		</dt>';
	// html+='		<dd>';
	// html+='			<a href="#">Sissi</a>：加油!!!!!!!!！ (8月21日 12:32)';
	// html+='			<div class="info">';
	// html+='				<span class="wlinkb">';
	// html+='					<em class="hover">';
	// html+='						<a href="#">举报</a>';
	// html+='						<em class="txt3">|</em>';
	// html+='					</em>';
	// html+='					<a class="zan1" ifzan="0">';
	// html+='						<em class="wico20 iconpraisedb"></em>';
	// html+='						(<span>2</span>)';
	// html+='					</a>';
	// html+='					<i class="txt3">|</i>';
	// html+='					<a class="hh" rindex="2">回复</a>';
	// html+='				</span>';
	// html+='			</div>';
	// html+='			<div class="rereply2"></div>';
	// html+='		</dd>';
	// html+='		<dd class="clear"></dd>';
	// html+='	</dl>';
	// html+='</div>';
	$("#ccru"+x).prepend(html);
}


function addFabu(ct){
	var html="";
	var curtime=new Date();
	var hour=curtime.getHours();
	var min=curtime.getMinutes();
	var t=hour+":"+min;
	html+='<div class="wbfeedtype swfun line2">';
	html+='	<div class="wbscreen">';
	html+='		<a class="wico12 iconchoose"></a>';
	html+='	</div>';
	html+='	<div class="wbfeeddetail line2 clearfix">';
	html+='		<div class="wbface">';
	html+='			<a href="#" class="wfaceradius">';
	html+='				<img src="images/user.jpg">';
	html+='			</a>';
	html+='		</div>';
	html+='		<div class="wbdetail">';
	html+='			<div class="wbinfo">';
	html+='				<a class="wbname func1">Wing_yk</a>';
	html+='				<a href="#">';
	html+='					<i class="wico16 approveco"></i>';
	html+='				</a>';
	html+='			</div>';
	html+='			<div class="wbtext">';
	html+='			'+ct+'</div>';
	html+='			<div class="wbfunc clearfix">';
	html+='				<div class="wbhandle">';
	html+='					<a class="zan" ifzan="0">';
	html+='						<em class="wico20 iconpraised"></em>(<span>0</span>)';
	html+='					</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a class="zf">转发</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a href="#">收藏</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a class="pl" pindex="10" isopen="no" ifc="0">评论(0)</a>';
	html+='				</div>';
	html+='				<div class="wbfrom">';
	html+='					<a href="#" class="link2 wbtime">'+t+'</a>';
	html+='					<em class="txt2">来自</em>';
	html+='					<a href="#" class="link2">微博桌面</a>';
	html+='					<span class="hoverr">';
	html+='						<em class="txt2">|</em>&nbsp;';
	html+='						<a href="#" class="jubao">举报</a>';
	html+='					</span>';
	html+='				</div>';
	html+='			</div>';
	html+='			<div class="dahuifu10"></div>';
	html+='		</div>';
	html+='	</div>';
	html+='</div>';
	$("#gfb").prepend(html);
}

function zhuanfa(p,r,c){
	var html="";
	var curtime=new Date();
	var hour=curtime.getHours();
	var min=curtime.getMinutes();
	var t=hour+":"+min;
	html+='<div class="wbfeedtype swfun line2">';
	html+='	<div class="wbscreen">';
	html+='		<a class="wico12 iconchoose"></a>';
	html+='	</div>';
	html+='	<div class="wbfeeddetail line2 clearfix">';
	html+='		<div class="wbface">';
	html+='			<a href="#" class="wfaceradius">';
	html+='				<img src="images/user.jpg">';
	html+='			</a>';
	html+='		</div>';
	html+='		<div class="wbdetail">';
	html+='			<div class="wbinfo">';
	html+='				<a class="wbname func1">Wing_yk</a>';
	html+='				<a href="#">';
	html+='					<i class="wico16 approveco"></i>';
	html+='				</a>';
	html+='			</div>';
	html+='			<div class="wbtext">'+p+'//转发微博';
	html+='			</div>';
	html+='			<div class="wbmediaexpand swfun2 line1 bg1">';
	html+='				<div class="wbarrow">';
	html+='					<em class="line1c">◆</em>';
	html+='					<span class="bg1c">◆</span>';
	html+='				</div>';
	html+='				<div class="listcontent">';
	html+='					<div class="wbinfo">';
	html+='						<a href="#" class="wbname func3">'+r+'</a>';
	html+='						<a href="#">';
	html+='							<i class="wico16 approveco"></i>';
	html+='						</a>';
	html+='					</div>';
	html+='					<div class="wbtext">';
	html+='						<em>';
	html+='						'+c+'</em>';
	html+='					</div>';
	html+='				</div>';
	html+='			</div>';
	html+='			<div class="wbfunc clearfix">';
	html+='				<div class="wbhandle">';
	html+='					<a class="zan">';
	html+='						<em class="wico20 iconpraised"></em>(<span>0</span>)';
	html+='					</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a class="zf">转发</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a href="#">收藏</a>';
	html+='					<i class="txt3">|</i>';
	html+='					<a class="pl" pindex="20" isopen="no" ifc="0">评论(0)</a>';
	html+='				</div>';
	html+='				<div class="wbfrom">';
	html+='					<a href="#" class="link2 wbtime">'+t+'</a>';
	html+='					<em class="txt2">来自</em>';
	html+='					<a href="#" class="link2">微博桌面</a>';
	html+='					<span class="hoverr">';
	html+='						<em class="txt2">|</em>&nbsp;';
	html+='						<a href="#" class="jubao">举报</a>';
	html+='					</span>';
	html+='				</div>';
	html+='			</div>';
	html+='			<div class="dahuifu20"></div>';
	html+='		</div>';
	html+='	</div>';
	html+='</div>';
	$("#gfb").prepend(html);
}
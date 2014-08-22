$(function(){
	//改变背景
	$(".changBgFre").click(function(){
		$(".bgAllImage").css({"opacity":"0"});
		BgIndex--;
		if(BgIndex==-1)
		{
			BgIndex=28;
		}
		$(".bgAllImage").attr("src","css/image/"+BgIndex+".jpg");
		$(".bgAllImage").animate({"opacity":"1"},1000);
	});
	$(".changBgNext").click(function(){
		$(".bgAllImage").css({"opacity":"0"});
		BgIndex++;
		if(BgIndex==29)
		{
			BgIndex=0;
		}
		$(".bgAllImage").attr("src","css/image/"+BgIndex+".jpg");
		$(".bgAllImage").animate({"opacity":"1"},1000);
	});


	$(".currentChatScrollAreaList").sortable({ revert:true,axis:"y"});//拖动会话窗口
	
	$('.chatI').draggable({
		connectToSortable:".currentChatScrollAreaList",
		revert:"invalid",
    });
    
    $("ul,li").disableSelection();

    $(".panelNotifySetting").draggable({containment:".draggableBox",scroll:false});//拖动

	$(document).on("click",".chatPanel",function(){
		$(".chatPanel").css("z-index",0);
		$(".panelNotifySetting").css("z-index",0);
		$(this).css("z-index",1);
	});//显示隐藏当前聊天窗口

	$(".panelNotifySetting").click(function(){
		$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
		$(this).css("z-index",1);//显示设置栏
	});

	//赋初始显示状态
	$("#session").find(".icon").css("background-image",iconN[0]);
	//底部导航切换
	$(".nav").click(function(){
		$(".nav .icon").css("background-image","");

		var n =$(this).attr("num");

		$(".nav").removeClass("navSelected");
		$(this).addClass("navSelected");
		$(this).find(".icon").css("background-image",iconN[n-1]);
		
		
		$(".panel").hide();
		$("#panel"+n).show();
	});
	
	//生成或显示聊天窗口，生成会话列表,出小圆点 
	$(document).on("click",".listItem",function(){
		var num = $(this).attr("class").split("Ltqq");
		var name = $(this).find(".memberNick").html().split("<span>");
		var nameAll = $(this).find(".memberNick").html();
		var lastC = $(this).find(".lastChat").html()
		var PicA = $(this).find("img").attr("src");
		
		if($(this).attr("showchatPanel") == "false")//生成聊天窗口
		{
			addChatPanel(num[1],name[0]);
			$(".Ltqq"+num[1]).attr("showchatPanel","true");
		}
		
		$(".chatPanel").css("z-index",0);//隐藏全体聊天窗口
		
		$(".chatPanel"+num[1]).css("z-index",1);//显示聊天窗口

		$(".chatPanel"+num[1]).show();

		if($(this).attr("isshow")=="false")//生成会话列表 
		{
			addChat(num[1],PicA,nameAll);
			chatCount++;
			$(".Ltqq"+num[1]).attr("isshow","true");
		}

		
		$(".chatPanel").draggable({containment:".draggableBox",scroll:false,handle:".chatHeader"});//拖动
		$("#session a").css("background-image",'url("css/images/systemmsg_unread.png")');//出小圆点
	}); 

	//会话置顶
	$(document).on("click",".chatI",function(){
		var num = $(this).attr("class").split("Ltqq");
		var name = $(this).find(".memberNick").html().split("<span>");
		var nameAll = $(this).find(".memberNick").html();
		var PicA = $(this).find("img").attr("src");
		var lastC = $(this).find(".lastChat").html()
		var PicA = $(this).find("img").attr("src");

		ChattoTop(num[1],PicA,nameAll,lastC);
		$(this).remove();

	});

	//关闭按钮出现
	$(document).on("mousemove",".listItem",function(){
		$(this).find(".close").show();
	});
	$(document).on("mouseout",".listItem",function(){
		$(this).find(".close").hide();
	});
	
	//删除会话，清空记录
	$(document).on("click",".close",function(){
		var num = $(this).parent().attr("class").split("Ltqq");
		$(".Ltqq"+num[1]).attr({"showchatPanel":"false","isshow":"false"});		
		$(this).parent().remove();
		chatCount--;
		$(".chatPanel"+num[1]).remove();
		return false;
	});


	//隐藏聊天窗口
	$(document).on("click",".chatHeaderRightButton",function(){
		//var numC = $(this).parent().parent().attr("class").split("chatPanel chatPanel");
		//$(".Ltqq"+numC[1]).attr("showchatPanel","false");

		$(this).parent().parent().fadeOut();
		$(".chatPanel").css("z-index",0);

	});
	
	//发送对话
	$(document).on("click",".sendBtn",function(){
		var temp = $(this).parent().parent().parent().attr("class").split("chatPanel chatPanel");
		var numC =temp[1].split(" ");//jQuery ui对类名做了改变
		
		var content = $(this).parent().find(".chatTextarea").val();

		if(content!="")
		{
			if(isshowTime=="true")
			{
				showTime(numC[0]);
				isshowTime="false";
			}
			send(numC[0],content);
			$(this).parent().find(".chatTextarea").val("");
			$(".Ltqq"+numC[0]).find(".lastChat").html(content);
		}		
	});

	//下拉小菜单
	$(document).on("click",".chatHeaderLeftButton",function(){
		if($(this).parent().parent().find(".pannelMenuList").attr("isshow")=="false")
		{
			$(this).parent().parent().find(".pannelMenuList").slideDown();
			$(this).parent().parent().find(".pannelMenuList").attr("isshow","true");
		}
		else
		{
			$(this).parent().parent().find(".pannelMenuList").slideUp();
			$(this).parent().parent().find(".pannelMenuList").attr("isshow","false");
		}
		
	});


	// 联系人顶部切换
	$(".memberTabLi").click(function(){
		$(".memberTabLi").removeClass("selectmemberTabLi");
		$(this).addClass("selectmemberTabLi");

		var LiIndex=$(this).index();
		$(".memberTNBox").removeClass("selectmemTNBox");
		$(".memberTNBox:eq("+LiIndex+")").addClass("selectmemTNBox");
	});


	// 联系人中部切换
	$(".memberTNBULiGroupD").click(function(){
		if($(this).next().attr("isshow")=="false")
		{
			$(this).css("background-image",'url("images/open_arrow_fire.png")');
			$(this).next().show();
			$(this).next().attr("isshow","true");
		}
		else
		{
			$(this).css("background-image","");
			$(this).next().hide();
			$(this).next().attr("isshow","false");
		}
		
	});

	//QQ人物状态更换
	$(".rowSetCLi").click(function(){
		var p = $(this).find(".rowSetCLiIcon").css("background-position");
		$(".userOnlineState").css("background-position",p);
		$(".rowSetL").css("background-position",p);
	});


	//打开关闭QQ人物状态栏
	$(".rowSet").click(function(){
		if($(".rowSetC").attr("isshow")=="false")
		{
			$(".rowSetC").show();
			$(".rowSetC").attr("isshow","true");
		}
		else
		{
			$(".rowSetC").hide();
			$(".rowSetC").attr("isshow","false");
		}
		return false;
	});
	$(document).click(function(){
		if($(".rowSetC").attr("isshow")=="true")
		{
			$(".rowSetC").hide();
			$(".rowSetC").attr("isshow","false");
		}
	});

	//关于QQ
	$(".aboutQQClick").click(function(){
		if($(".aboutQQ").attr("isshow")=="false")
		{
			$(this).find(".moreIcon").css("background-image",'url("images/open_arrow_fire.png")');
			$(".aboutQQ").show();
			$(".aboutQQ").attr("isshow","true");
		}
		else
		{
			$(this).find(".moreIcon").css("background-image","");
			$(".aboutQQ").hide();
			$(".aboutQQ").attr("isshow","false");
		}
	});


	//相关设置开关
	$(".panel4rowS").click(function(){
		$(".panelNotifySetting").show();
	});
	$(".panelSetHeaderB").click(function(){
		$(".panelNotifySetting").hide();
	});


	//消除会话圆点
	setInterval("chatspot()",1000);
	setInterval("showTimeIsorNot()",5000);

	//弹出表情框
	$(document).on("click",".addFaceBtn",function(){
		var ifv=$(this).parent().parent().parent().next().attr("view");
		if(ifv=="no")
		{
			$(this).parent().parent().parent().next().fadeIn();
			$(this).parent().parent().parent().next().attr("view","yes");
		}
		else
		{
			$(this).parent().parent().parent().next().fadeOut();
			$(this).parent().parent().parent().next().attr("view","no");
		}		
	});
	//表情页面切换
	$(document).on("click",".btnf1",function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('images/qqimage_01.jpg')");
		$(".item1").show();
		$(".item2").hide();
	});
	
	$(document).on("click",".btnf2",function(){
		$(".btnfwarpnor").removeClass("btnfselected");
		$(this).addClass("btnfselected");
		$(".faceimgtop").css("background-image","url('images/qqimage_02.jpg')");
		$(".item2").show();
		$(".item1").hide();
	});
	//获取表情
	$(document).on("click",".facetxt",function(){
		var facetxt=$(this).attr("txt");
		var text=$(this).parent().parent().parent().parent().prev().find("textarea").val();
		var all=text+facetxt;
		$(this).parent().parent().parent().parent().prev().find("textarea").val(all);		
	});
	//删除已选表情
	$(document).on("click",".del",function(){
		var txt=$(this).parent().parent().parent().parent().prev().find("textarea").val();
		var len=$(this).parent().parent().parent().parent().prev().find("textarea").val().length-4;
		var subtxt=txt.substring(0,len);
		$(this).parent().parent().parent().parent().prev().find("textarea").val(subtxt);
	});
});

var BgIndex = 1;//背景图

var chatCount = 0;//会话数

var isshowTime = "true";

var iconN=new Array('url("images/tab_icon_conversation_selected.png")',//底部导航图片地址
		'url("images/tab_icon_contact_selected.png")',
		'url("images/tab_icon_plugin_selected.png")',
		'url("images/tab_icon_setup_selected.png")'
	);

//定时显示时间
function showTimeIsorNot(){
	isshowTime="true";
}


//会话小圆点
function chatspot(){
	if(chatCount==0)
	{
		$("#session a").css("background-image","");
	}
}

//添加聊天窗口
function addChatPanel(num,name){
	var html="";
	html+='			<div class="chatPanel chatPanel'+num+'" tabindex="-1">';
	html+='				<div class="chatHeader">';
	html+='					<div class="chatHeaderLeftButton">';
	html+='						<span class="chatHeaderLeftButtonI"></span>';
	html+='					</div>';
	html+='					<h1 class="chatTitle">'+name+'</h1>';
	html+='					<div class="chatHeaderRightButton" title="隐藏到会话栏">';
	html+='						<span class="chatHeaderRightButtonI">隐藏</span>';
	html+='					</div>';
	html+='				</div>';
	html+='				<div class="chatBodyWrapper">';
	html+='					<div class="chatBodyBox">';
	html+='					</div>';
	html+='				</div>';
	html+='				<ul class="pannelMenuList" isshow="false">';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon1"></div>';
	html+='						QQ空间';
	html+='					</li>';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon2"></div>';
	html+='						详细资料';
	html+='					</li>';
	html+='					<li>';
	html+='						<div class="menuListIcon menuListIcon3"></div>';
	html+='						聊天记录';
	html+='					</li>';
	html+='				</ul>';
	html+='				<div class="chatFooter">';

	html+='					<div class="chatToolbar">';
	html+='						<div class="addFaceBtn" title="表情">';
	html+='							<span class="btnImg"></span>';
	html+='						</div>';
	html+='						<textarea class="chatTextarea"></textarea>';
	html+='						<button class="sendBtn">';
	html+='							<span>发送</span>';
	html+='						</button>';
	html+='					</div>';
	html+='				</div>';
	html+='			</div>';
	html+='			<div class="talkboxfaceimg" view="no">';
	html+='					<div class="faceimgtop">';
	html+='						<ul class="faceimg1">';
	html+='							<li class="faceItem item1">';
	html+='								<i title="微笑" txt="[微笑]"class="facetxt"></i>';
	html+='								<i title="撇嘴" txt="[撇嘴]"class="facetxt"></i>';
	html+='								<i title="色" txt="[色]"class="facetxt"></i>';
	html+='								<i title="发呆" txt="[发呆]"class="facetxt"></i>';
	html+='								<i title="得意"txt="[得意]"class="facetxt"></i>';
	html+='								<i title="流泪" txt="[流泪]"class="facetxt"></i>';
	html+='								<i title="害羞" txt="[害羞]"class="facetxt"></i>';
	html+='								<i title="闭嘴" txt="[闭嘴]"class="facetxt"></i>';
	html+='								<i title="睡" txt="[睡]"class="facetxt"></i>';
	html+='								<i title="大哭" txt="[大哭]"class="facetxt"></i>';
	html+='								<i title="尴尬" txt="[尴尬]"class="facetxt"></i>';
	html+='								<i title="发怒" txt="[发怒]"class="facetxt"></i>';
	html+='								<i title="调皮" txt="[调皮]"class="facetxt"></i>';
	html+='								<i title="呲牙" txt="[呲牙]"class="facetxt"></i>';
	html+='								<i title="惊讶" txt="[惊讶]"class="facetxt"></i>';
	html+='								<i title="难过" txt="[难过]"class="facetxt"></i>';
	html+='								<i title="酷" txt="[酷]"class="facetxt"></i>';
	html+='								<i title="冷汗" txt="[冷汗]"class="facetxt"></i>';
	html+='								<i title="抓狂" txt="[抓狂]"class="facetxt"></i>';
	html+='								<i title="吐" txt="[吐]"class="facetxt"></i>';
	html+='								<i title="delkey" class="del"></i>';
	html+='							</li>';
	html+='							<li class="faceItem faceItem2 item2">';
	html+='								<i title="偷笑" txt="[偷笑]"class="facetxt"></i>';
	html+='								<i title="可爱" txt="[可爱]"class="facetxt"></i>';
	html+='								<i title="白眼" txt="[白眼]"class="facetxt"></i>';
	html+='								<i title="傲慢"txt="[傲慢]"class="facetxt"></i>';
	html+='								<i title="饥饿"txt="[饥饿]"class="facetxt"></i>';
	html+='								<i title="困"txt="[困]"class="facetxt"></i>';
	html+='								<i title="惊恐"txt="[惊恐]"class="facetxt"></i>';
	html+='								<i title="流汗"txt="[流汗]"class="facetxt"></i>';
	html+='								<i title="憨笑"txt="[憨笑]"class="facetxt"></i>';
	html+='								<i title="大兵"txt="[大兵]"class="facetxt"></i>';
	html+='								<i title="奋斗"txt="[奋斗]"class="facetxt"></i>';
	html+='								<i title="咒骂"txt="[咒骂]"class="facetxt"></i>';
	html+='								<i title="疑问"txt="[疑问]"class="facetxt"></i>';
	html+='								<i title="嘘"txt="[嘘]"class="facetxt"></i>';
	html+='								<i title="晕"txt="[晕]"class="facetxt"></i>';
	html+='								<i title="折磨"txt="[折磨]"class="facetxt"></i>';
	html+='								<i title="衰"txt="[衰]"class="facetxt"></i>';
	html+='								<i title="骷髅"txt="[骷髅]"class="facetxt"></i>';
	html+='								<i title="敲打"txt="[敲打]"class="facetxt"></i>';
	html+='								<i title="再见"txt="[再见]"class="facetxt"></i>';
	html+='								<i title="delkey" class="del"></i>';
	html+='							</li>';
	html+='						</ul>';
	html+='					</div>';
	html+='					<ul class="btnfwarp">';
	html+='						<li class="btnfwarpnor btnf1 btnfselected"></li>';
	html+='						<li class="btnfwarpnor btnf2"></li>';
	html+='					</ul>';
	html+='			</div>';
	$("#container").append(html);
}

//显示时间
function showTime(n){
	var Time = new Date();
	var h = Time.getHours()<10?"0"+Time.getHours():Time.getHours();
	var m = Time.getMinutes()<10?"0"+Time.getMinutes():Time.getMinutes();
	var s = Time.getSeconds()<10?"0"+Time.getSeconds():Time.getSeconds();
	var T = h+":"+m+":"+s;

	var html="";
	html+='						<div class="chatTime">';
	html+='							<span>'+T+'</span>';
	html+='						</div>';
	$(".chatPanel"+n).find(".chatBodyBox").append(html);
}

//发送消息
function send(n,c){
	var txt=c;
	for (var i=0;i<txt.length;i++) {
		txt=txt.replace("[微笑]","<img src='images/14.gif' />");
		txt=txt.replace("[撇嘴]","<img src='images/1.gif' />");
		txt=txt.replace("[色]","<img src='images/2.gif' />");
		txt=txt.replace("[发呆]","<img src='images/3.gif' />");
		txt=txt.replace("[得意]","<img src='images/4.gif' />");
		txt=txt.replace("[流泪]","<img src='images/5.gif' />");
		txt=txt.replace("[害羞]","<img src='images/6.gif' />");
		txt=txt.replace("[闭嘴]","<img src='images/7.gif' />");
		txt=txt.replace("[睡]","<img src='images/8.gif' />");
		txt=txt.replace("[大哭]","<img src='images/9.gif' />");
		txt=txt.replace("[尴尬]","<img src='images/10.gif' />");
		txt=txt.replace("[发怒]","<img src='images/11.gif' />");
		txt=txt.replace("[调皮]","<img src='images/12.gif' />");
		txt=txt.replace("[呲牙]","<img src='images/13.gif' />");
		txt=txt.replace("[惊讶]","<img src='images/0.gif' />");
		txt=txt.replace("[难过]","<img src='images/15.gif' />");
		txt=txt.replace("[酷]","<img src='images/16.gif' />");
		txt=txt.replace("[冷汗]","<img src='images/96.gif' />");
		txt=txt.replace("[抓狂]","<img src='images/18.gif' />");
		txt=txt.replace("[吐]","<img src='images/19.gif' />");
		txt=txt.replace("[偷笑]","<img src='images/20.gif' />");
		txt=txt.replace("[可爱]","<img src='images/21.gif' />");
		txt=txt.replace("[白眼]","<img src='images/22.gif' />");
		txt=txt.replace("[傲慢]","<img src='images/23.gif' />");
		txt=txt.replace("[饥饿]","<img src='images/24.gif' />");
		txt=txt.replace("[困]","<img src='images/25.gif' />");
		txt=txt.replace("[惊恐]","<img src='images/26.gif' />");
		txt=txt.replace("[流汗]","<img src='images/27.gif' />");
		txt=txt.replace("[憨笑]","<img src='images/28.gif' />");
		txt=txt.replace("[大兵]","<img src='images/29.gif' />");
		txt=txt.replace("[奋斗]","<img src='images/30.gif' />");
		txt=txt.replace("[咒骂]","<img src='images/31.gif' />");
		txt=txt.replace("[疑问]","<img src='images/32.gif' />");
		txt=txt.replace("[嘘]","<img src='images/33.gif' />");
		txt=txt.replace("[晕]","<img src='images/34.gif' />");
		txt=txt.replace("[折磨]","<img src='images/35.gif' />");
		txt=txt.replace("[衰]","<img src='images/36.gif' />");
		txt=txt.replace("[骷髅]","<img src='images/37.gif' />");
		txt=txt.replace("[敲打]","<img src='images/38.gif' />");
		txt=txt.replace("[再见]","<img src='images/39.gif' />");
	}


	var html="";
	html+='						<div class="chatContentSelf">';
	html+='							<img class="avatarImg" src="images/userhead.jpg">';
	html+='							<p class="chatNick">翎';
	html+='							</p>';
	html+='							<p class="chatContent ">'+txt+'</p>';
	html+='						</div>';
	$(".chatPanel"+n).find(".chatBodyBox").append(html);
	$(".Ltqq"+n).find(".lastChat").html(txt);
}


//添加会话
function addChat(n,p,name){
	var html="";
	html+='											<li class="listItem chatI Ltqq'+n+'" showchatPanel="true" isshow="false">';
	html+='												<a href="#" class="avatar">';
	html+='													<img src="'+p+'">';
	html+='												</a>';
	html+='												<p class="memberNick">'+name+'</p>';
	html+='												<span class="lastChat"></span>';
	html+='												<div class="close" title="结束会话，聊天记录会消失哦"></div>';
	html+='											</li>';
	$(".currentChatScrollAreaList").prepend(html);
}

//会话置顶
function ChattoTop(n,p,name,lastC){
	var html="";
	html+='											<li class="listItem chatI Ltqq'+n+'" showchatPanel="true" isshow="true">';
	html+='												<a href="#" class="avatar">';
	html+='													<img src="'+p+'">';
	html+='												</a>';
	html+='												<p class="memberNick">'+name+'</p>';
	html+='												<span class="lastChat">'+lastC+'</span>';
	html+='												<div class="close" title="结束会话，聊天记录会消失哦"></div>';
	html+='											</li>';
	$(".currentChatScrollAreaList").prepend(html);
}
$(window).load(function(){
	var audio=document.getElementById("audio");
	loadplay();
});

$(function(){
	//移动到选歌列表界面事件
	$(".uitrackitem").hover(function(){
		$(".uitrackitem").removeClass("uitrackcurrent");
		$(this).addClass("uitrackcurrent");
		$(this).find("em").addClass("hem");
		$(this).find(".morebtn").show();
		$(this).find(".delebtn").show();
	},function(){
		$(this).removeClass("uitrackcurrent");
		$(this).find("em").removeClass("hem");
		$(this).find(".morebtn").hide();
		$(this).find(".delebtn").hide();
	});

	//歌曲复选框选中事件
	$(".uitrackitemid").click(function(){
		var state=$(this).attr("select");
		if(state==0){
			$(this).css("background-position","-37px -710px");
			$(this).attr("select","1");
		}
		else{
			$(this).css("background-position","");
			$(this).attr("select","0");
		}
	});

	//全选框按钮事件
	$("#jcheckalltrack").click(function(){
		var s=$(this).attr("select");
		if(s==0){
			$(this).css("background-position","-37px -710px");
			$(this).attr("select","1");
			$(".uitrackitemid[select='0']").css("background-position","-37px -710px");
			$(".uitrackitemid[select='0']").attr("select","1");
		}
		if(s==1){
			$(this).css("background-position","");
			$(this).attr("select","0");
			$(".uitrackitemid[select='1']").css("background-position","");
			$(".uitrackitemid[select='1']").attr("select","0");
		}
	});

	//歌曲列表播放按钮点击事件
	$(".uitracksort em").click(function(){
		$(".uitracksort em").removeClass("dem");
		$(this).addClass("dem");
		$(".uitrackcontrol1").hide();
		$(this).parent().next().next().next().show();
		
		var eindex=$(this).attr("songindex");
		sonIndex=eindex;
		$("#audio").attr("src",'mp3/'+eindex+'.mp3');

		audio.play();
		audio.addEventListener('timeupdate',updateProgress,false);//当 timeupdate 事件被激活时，添加一个事件监听器来调用updateProgress 函数，进度条就会随着视频的播放而不断更新
		audio.addEventListener('play',audioPlay,false);
		audio.addEventListener('pause',audioPause,false);
		audio.addEventListener('ended',audioEnded,false);
		getReady(eindex);
		startPlay();
		$(".uiroamwrap").hide();
		$(".uitrackitem").css("background-color","");
		$(this).parent().parent().next().show();
		$(this).parent().parent().parent().css("background-color","#f0f0f0");

		//底部显示歌曲信息
		var songname=$(this).parent().next().find(".c1").html();
		var singername=$(this).parent().next().find(".c2").html();
		$("#jtrackname").html(songname);
		$("#jsingername").html(singername);
		//更换右侧图片
		$("#canvaspic").attr("src",'images/t'+eindex+'.jpg');
		setTimeout('loadBg()',100);
		$(".blur").css("opacity","0");
		$(".blur").animate({opacity:"1"},1000);
	});

	$(".playbtn").click(function(){
		var sta=$(this).attr("isplay");
		if(sta==0){
			$(this).css("background-position","0 -30px");
			$(this).attr("isplay","1");
		}
		if(sta==1){
			$(this).css("background-position","");
			$(this).attr("isplay","0");
		}
		if(audio.paused)
			audio.play();
		else
			audio.pause();
	});//播放按钮事件

	$(".playerdot").draggable({
		containment:".panel",
		drag: function(){
			var l=$(".playerdot").css("left");
			var le=parseInt(l);
			audio.currentTime=audio.duration*(le/661);
		}
	});//底部进度条控制

	$(".panel").click(function(e){
		var dot=e.pageX-$(this).offset().left;
		var span=parseInt(dot);
		$(this).find(".playerdot").css("left",span+"px");
		$(this).prev().find(".playing").css("width",span+"px");
		audio.currentTime=audio.duration*(span/661);		
	});

	$(".volumedot").draggable({
		containment:".volumecontrol",
		drag: function(){
			var l=$(".volumedot").css("left");
			var le=parseInt(l);
			$(this).parent().prev().find(".volumecur").css("width",le+"px");
			audio.volume=(le/80);			
		}
	});

	$(".volumecontrol").click(function(e){
		var vd=e.pageX-$(this).offset().left;
		var len=parseInt(vd);
		$(this).find(".volumedot").css("left",len+"px");
		$(this).prev().find(".volumecur").css("width",len+"px");
		audio.volume=(len/80);
	});

	$(".prevbtn").click(function(){
		var eindex=parseInt(sonIndex)-1;
		$(".uitracksort em[songindex="+eindex+"]").click();
	});

	$(".nextbtn").click(function(){
		var eindex=parseInt(sonIndex)+1;
		$(".uitracksort em[songindex="+eindex+"]").click();
	});

});


var sonIndex=1;

function loadplay(){
	$(".uitracksort em[songindex="+sonIndex+"]").click();
}

//模糊背景
function loadBg(){
	var can=document.getElementById("myCanvas");
	var ctx=can.getContext("2d");
	var img=document.getElementById("canvaspic");
	ctx.drawImage(img,45,45,139,115,0,0,1366,700);
	stackBlurCanvasRGBA('myCanvas',0,0,1366,700,60);//让画布变模糊效果
}

//计算时间
function calcuateTime(time){
	var hour;
	var minute;
	var second;
	hour=String(parseInt(time/3600,10));
	if(hour.length=1)
		hour='0'+hour;
	minute=String(parseInt((time%3600)/60,10));
	if(minute.length==1)
		minute='0'+minute;
	second=String(parseInt(time%60,10));
	if(second.length==1)
		second='0'+second;
	return minute+":"+second;
}

//进度条改变
function updateProgress(evt){
	var songtime=calcuateTime(Math.floor(audio.duration));
	$("#jdurationtime").html(songtime);//显示当前歌曲总时间长度

	var curtime=calcuateTime(Math.floor(audio.currentTime));//当前播放的位置
	$("#jpositiontime").html(curtime);//显示当前已播放时间

	var le=661*(Math.floor(audio.currentTime)/Math.floor(audio.duration));
	var lefpx=Math.floor(le).toString()+"px";
	$(".playerdot").css("left",lefpx);
	$(".playing").css("width",lefpx);
}

//播放时效果
function audioPlay(evt){
	$(".iconplay").css({"background-image":'url("images/leftli.gif")',"background-position":"0 0"});
	$(".playbtn").css("background-position","0 -30px");
	$(".playbtn").attr("isplay","1");
}

//暂停时
function audioPause(evt){
	$(".iconplay").css({"background-image":"","background-position":""});
}

//一首歌播放结束切换到下一首
function audioEnded(evt){
	var sid=parseInt(sonIndex)+1;
	$(".uitracksort em[songindex="+sid+"]").click();
}

//显示歌词部分
var scrolltime=0;
var tflag=0;
var lytext=new Array();//存放汉字的歌词
var lytime=new Array();//存放时间
var delay=10;
var line=0;
var scrollh=0;

//获取歌词
function getLyr(s){
	var ly="";
	if(s=="1"){
		ly="[00:00] Let it go.[00:02] Let it go.[00:03] Can’t hold you back anymore.[00:07] Let it go.[00:08] Let it go.[00:10] Turn my back and slam the door.[00:16] The snow blows white on the mountain tonight.[00:19] Not a footprint to be seen.[00:22] A kingdom of isolation and it looks like I’m the Queen.[00:30] The wind is howling like the swirling storm inside.[00:37] Couldn’t keep it in,heaven knows I tried.[00:44] Don’t let them in,don’t let them see.[00:47] Be the good girl.[00:48] You always had to be.[00:50] Conceal,don’t feel.[00:52] Don’t let them know.[00:57] Well,now they know.[01:00] Let it go.[01:01] Let it go.[01:04] Can’t hold you back anymore.[01:07] Let it go.[01:08] Let it go.[01:11] Turn my back and slam the door.[01:14] And here I stand,and here I’ll stay.[01:20] Let it go.[01:22] Let it go.[01:24] The cold never bothered me anyway.[01:28] It’s funny how some distance.[01:31] Makes everything seem small.[01:35] And the fears that once controlled me.[01:38] Can’t get to me at all.[01:42] Up here in the cold thin air.[01:45] I finally can breathe.[01:48] I know i left a life behind but I’m to relieved to grieve.[01:55] Let it go.[01:56] Let it go.[01:58] Can’t hold you back anymore.[02:02] Let it go.[02:03] Let it go.[02:05] Turn my back and slam the door.[02:09] And here I stand.[02:12] And here I’ll stay.[02:15] Let it go.[02:17] Let it go.[02:19] The cold never bothered me anyway.[02:23] Standing frozen in the life I’ve chosen.[02:30] You won’t find me,the past is so behind me.[02:37] Buried in the snow.[02:43] Let it go.[02:45] Let it go.[02:46] Can’t hold you back anymore.[02:51] Let it go.[02:53] Let it go.[02:55] Turn my back and slam the door.[02:59] And here I stand.[03:02] And here I’ll stay.[03:05] Let it go.[03:07] Let it go.[03:09] The cold never bothered me anyway.[03:13] na na na na na na.[03:19] Let it go na na na.[03:25] na na na You say.[03:33] Let it go.[03:34] Let it go.[03:39] Let it go";
	}
	if(s=="2"){
		ly="[00:00]张悬 - 艳火.[00:06].[00:07]作词：张悬 作曲：张悬.[00:10].[00:17]扑火 我们相视笑着扑火.[00:25]什么都不说 不说的 是真的.[00:33]我们相视笑着 是梦也快乐.[00:38]当你穿越爱的历史向我走来.[00:46]我在你眼里看尽了相恋的年代.[00:51]曾经的黑白 此刻灿烂.[00:57].[01:01]于是你不停散落 我不停拾获.[01:07]我们在遥远的路上白天黑夜为彼此是艳火.[01:12]如果你在前方回头 而我亦回头.[01:17]我们就错过.[01:21].[01:24]很久此前人们都许诺…….[01:28]许诺要是什么 可以不说.[01:33].[01:35]扑火 我们相视笑着扑火.[01:42]什么都不说 不说的 是真的.[01:48]我们相视笑着 是梦也快乐.[01:55]当你原谅所以遗憾 对我依赖.[02:03]我在你怀里想起了最初的感慨.[02:08]第一次等待 此刻还在.[02:14].[02:15]于是你不停散落 我不停拾获.[02:21]我们在遥远的路上白天黑夜为彼此是艳火.[02:26]如果你在前方回头 而我亦回头.[02:31]我们就错过.[02:35].[02:36]于是你不断地爱我 我能如何便如何.[02:42]在遥远的路上即使尘埃看今夜艳火.[02:47]我等你在前方回头 而我不回头 你要不要我.[03:01].[03:56]扑火 我们相视笑着扑火.[04:03]什么都不说 不说的是真的.[04:10]我们相视笑着 有梦了 快乐.[04:19]";
	}
	if(s>2){
		ly="[00:00] .[00:02]纯音乐暂无歌词"
	}
	return ly;
}

function toArray(str){
	var left=0;
	var leftArr=new Array();
	for (var k = 0; k < str.length; k++) {
		if(str.charAt(k)=="["){
			leftArr[left]=k;
			left++;
		}
	}
	if(left!=0){
		for (var i = 0; i < leftArr.length; i++) {
			lytext[tflag]=str.substring(str.lastIndexOf("]")+1);
			lytime[tflag]=conSeconds(str.substring(leftArr[i]+1,leftArr[i]+6));
			tflag++;
		}
	}
}

//重新排序时间和歌词数组
function sortArr(){
	var temp=null;
	var temp1=null;
	for (var k = 0; k < lytime.length; k++) {
		for (var j = 0; j < lytime.length-k; j++) {
			if(lytime[j]>lytime[j+1]){
				temp==lytime[j];
				temp1=lytext[j];
				lytime[j]=lytime[j+1];
				lytext[j]=lytext[j+1];
				lytime[j+1]=temp;
				lytext[j+1]=temp1;
			}
		}
	}
}

//显示歌词前的准备工作
function getReady(s){
	var lyr=getLyr(s);
	if(lyr==""){
		$("#lyr").html("本歌暂无歌词！");
	}
	var arry=lyr.split(".");
	tflag=0;
	for (var i = 0; i < lytext.length; i++) {
		lytext[i]="";
	}
	for (var i = 0; i < lytime.length; i++) {
		lytime[i]="";
	}
	$("#lyr").html("");
	document.getElementById("lyr").scrollTop=0;
	for (var i = 0; i < arry.length; i++) {
		toArray(arry[i]);
	}
	sortArr();
	scrollBar();
}

//显示歌词
function showLyr(t){
	var div=document.getElementById("lyr");
	document.getElementById("lyr").innerHTML="";//每次调用前清空之前的
	if(t<lytime[lytime.length-1]){
		for (var k = 0; k < lytext.length;k++) {
			if(lytime[k]<t&&t<lytime[k+1]){
				scrollh=k*25;
				div.innerHTML+="<font color=#f60 style=font-weight:bold>"+lytext[k]+"</font><br>";
			}
			else 
				if(t<lytime[lytime.length-1])
					div.innerHTML+=lytext[k]+"<br>";
		}
	}
	else{
		for (var j = 0; j < lytext.length-1; j++) {
			div.innerHTML+=lytext[j]+"<br>";
			div.innerHTML+="<font color=red style=font-weight:bold>"+lytext[lytext.length-1]+"</font><br>";
		}
	}
}

//设置滚动条的滚动
function scrollBar(){
	if(document.getElementById("lyr").scrollTop<=scrollh)
		document.getElementById("lyr").scrollTop+=1;
	if(document.getElementById("lyr").scrollTop>=scrollh+50)
		document.getElementById("lyr").scrollTop-=1;
	window.setTimeout("scrollBar()",delay);
}




//把时间转化成秒
function conSeconds(t){
	var m=t.substring(0,t.indexOf(":"));
	var s=t.substring(t.indexOf(":")+1);
	m=parseInt(m.replace(/0/,""));
	var totalt=parseInt(m)*60+parseInt(s);
	return totalt;
}

//开始播放
function startPlay(){
	var ms=audio.currentTime;
	showLyr(ms);
	window.setTimeout("startPlay()",100);
}
$(window).load(function(){
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
		var eindex=$(this).attr("songindex");
		sonIndex=eindex;
		$("#audio").attr("src",'mp3/'+eindex+'.mp3');
		audio=document.getElementById("audio");//获得音频元素
		if(audio.paused){//是否暂停
			audio.play();//播放
		}
		else{
			audio.pause();//暂停
			audio.addEventListener("timeupdate",updateProgress,false);//当 timeupdate 事件被激活时，添加一个事件监听器来调用updateProgress 函数，进度条就会随着视频的播放而不断更新
			audio.addEventListener("play",audioPlay,false);
			audio.addEventListener("pause",audioPause,false);
			audio.addEventListener("ended",audioEnded,false);


		}
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
			audio.addEventListener("timeupdate",updateProgress,false);//当 timeupdate 事件被激活时，添加一个事件监听器来调用updateProgress 函数，进度条就会随着视频的播放而不断更新
			audio.addEventListener("play",audioPlay,false);
			audio.addEventListener("pause",audioPause,false);
			audio.addEventListener("ended",audioEnded,false);
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
}

//播放时效果
function audioPlay(evt){
	$(".iconplay").css("background",'url("../images/leftli.gif") no-repeat 0 0 !important');
	$(".playbtn").css("background-position","0 -30px");
	$(".playbtn").attr("isplay","1");
}

//暂停时
function audioPause(evt){
	$(".iconplay").css("background","");
}

//一首歌播放结束切换到下一首
function audioEnded(evt){
	var sid=parseInt(sonIndex)+1;
	$(".uitracksort em[songindex="+sid+"]").click();
}
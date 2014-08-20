$(function(){
	timehandle=setInterval("showbg()",3000);

	$("#closebutton").click(function(){
		$(this).parent().parent().hide();
	});

	$(".close").click(function(){
		$(this).parent().parent().next().css("margin-top","0");
	});

	$("#sus").click(function(){
		$(this).hide();
		$(this).next().show();
		$(this).prev().animate({"height":"120px"},500);
		$(this).prev().animate({"height":"85px"},500);
	});

	$("#cb").click(function(){
		$(this).hide();
		$(this).prev().show();
		$(this).prev().prev().animate({"height":"120px"},500);
		$(this).prev().prev().animate({"height":"0px"},500);
	});

	$(".menutrigger").hover(function(){
		$(this).css("background-position","-50px 0");
	},function(){
		$(this).css("background-position","");
	});

	$(".menumobile").hover(function(){
		$(this).find(".cxul").show();
	},function(){
		$(this).find(".cxul").hide();
	});

	$(".lifting").click(function(){
		var h=$(this).find(".menu").attr("href");
		$(this).parent().parent().parent().parent().prev().find("#page").find("section").addClass("hide");
		$(this).parent().parent().parent().parent().prev().find("#page").find(h).removeClass("hide");
		$(this).parent().parent().parent().parent().prev().find("#page").show();
		$(this).parent().parent().parent().parent().parent().parent().css("height","800px");
	});

	setInterval("timer()",1000);  //倒计时
});


var timehandle;
var currindex=1;
function showbg(){
	$(".bg").css("background-image",'url("images/'+currindex+'.jpg")');
	currindex++;
	if(currindex==5){
		currindex=1;
	}
}

function timer(){
    var ts = (new Date(2014, 9-1, 7, 0, 0, 0)) - (new Date());//计算剩余的毫秒数  
    var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
    var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
    var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
    var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
    dd = checkTime(dd);  
    hh = checkTime(hh);  
    mm = checkTime(mm);  
    ss = checkTime(ss);
    document.getElementById("days").innerHTML = dd;
    document.getElementById("hours").innerHTML = hh;
    document.getElementById("minutes").innerHTML = mm;
    document.getElementById("seconds").innerHTML = ss;      
}  

function checkTime(i)    
{    
   if (i < 10) {    
       i = "0" + i;    
    }    
   return i;    
}    
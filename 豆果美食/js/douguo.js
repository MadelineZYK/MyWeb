$(function(){

	$("#cptip").hover(function(){
		$(this).find(".bbtips").show();
	},function(){
		$(this).find(".bbtips").hide();
	});

	$(".altone").hover(function(){
		$(this).find(".altceng").show();
	},function(){
		$(this).find(".altceng").hide();
	});

	$(".issue").hover(function(){
		$(this).find(".fallce").show();
	},function(){
		$(this).find(".fallce").hide();
	});

	$(".rt3").hover(function(){
		$(this).css({"background-color":"#f2f2ee","color":"#ed585c"});
	},function(){
		$(this).css({"background-color":"","color":""});
	});

	
	
	$('.chg').click(function(){
		var obj = $(this).parent().next().children();
		var dobj = $(this).parent().children();
		var num = $(this).html();
		$(obj).each(function(k,v){
				$(v).hide();
		});
		$(dobj).each(function(k,v){
			 $(v).removeClass("on");
		});
		if(num == 1)
		{
			obj.eq(0).show();
			obj.eq(1).show();
			$(this).addClass("on");
		}
		if(num == 2)
		{
			obj.eq(2).show();
			obj.eq(3).show();
			$(this).addClass("on");
		}
		if(num == 3)
		{
			obj.eq(4).show();
			obj.eq(5).show();
			$(this).addClass("on");
		}
		if(num == 4)
		{
			obj.eq(6).show();
			obj.eq(7).show();
			$(this).addClass("on");
		}
	});

	$('.jx').click(function(){
		$(this).addClass("mon");
		$(this).prev().removeClass("mon");
		$(this).parent().next().hide();
		$(this).parent().next().next().show();
	});

	$('.pp').click(function(){
		$(this).addClass("mon");
		$(this).next().removeClass("mon");
		$(this).parent().next().show();
		$(this).parent().next().next().hide();
	});

	$(window).scroll(function(){
        var scroll_top = $(document).scrollTop();
        if (scroll_top != 0){
        	$("#backtop").show();
        }
        else{
        	$("#backtop").hide();
        }           
    });
    $("#backtop").click(function () {
        $("#backtop").hide();
    });

    timeHandle=setInterval("change()",3000);

    $(".nepright").hover(function(){
    	clearInterval(timeHandle);
    },function(){
    	timeHandle=setInterval("change()",3000);
    });

});

var timeHandle;
var n=0;//第一张
var i=0;//循环参数
var l=0;//总数
function change(){
	l=n+1;
	var a=n%2;//第一张
	var b=(n+1)%2;//最后一张

	var currIndex=$("#pl"+b).attr("index");
	$(".lii").removeClass("on");
	$(".nli"+currIndex).addClass("on");
	
	for(n;n<=l;n++){//从第一张开始位移
		var m=n%2;
		$("#pl"+m).animate({"left":(i-1)*680+"px"},3000);
		i++;
	}
	n=n-2;//回到第一张
	i=0;//循环置0
	$("#pl"+a).animate({"left":"680px"},0);//将第一张闪到最后
	n++;//加完回到第一张
	if(n==2){
		n=0;
	}

}
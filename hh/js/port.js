$(document).ready(function(){
    var wd=$(".mask").width();
    var len=$(".img li").length;
    var intv = setInterval(function(){
        nextAni();
    }, 6000);
    function nextAni(){
        $(".img").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 1200, function(){ 
            $(".img li").eq(0).appendTo($(".img"));
            $(".img").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".img li").eq(len-1).prependTo($(".img"));
        $(".img").css("margin-left", -wd+"px");
        $(".img").not(":animated").animate({
            "margin-left":"0px"
        }, 1200);
    }
    $(".btnBox .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 6000);
    });
    $(".btnBox .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 6000);
    });
    $(".img li").mouseover(function(){
        clearInterval(intv);
    });
    $(".img li").mouseout(function(){
        intv = setInterval(function(){
            nextAni();
        }, 6000);
    });
});
$(document).ready(function(){
    var wd=$(".mask").width();
//    var ht=$(".slider1").height();
    var len=$(".img li").length;
    var intv = setInterval(function(){
        nextAni();
    }, 8000);
    function nextAni(){
        $(".img").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 700, function(){ 
            $(".img li").eq(0).appendTo($(".img"));
            $(".img").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".img li").eq(len-1).prependTo($(".img"));
        $(".img").css("margin-left", -wd+"px");
        $(".img").not(":animated").animate({
            "margin-left":"0px"
        }, 700);
    }
    $(".btnBox .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 8000);
    });
    $(".btnBox .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 8000);
    });
});
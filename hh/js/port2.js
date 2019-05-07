$(document).ready(function(){
    var wd=$(".mask").width();
//    var ht=$(".slider1").height();
    var len=$(".img li").length;

    function nextAni(){
        $(".img").not(":animated").animate({
            "margin-left":-wd+"px"
        }, function(){ 
            $(".img li").eq(0).appendTo($(".img"));
            $(".img").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".img li").eq(len-1).prependTo($(".img"));
        $(".img").css("margin-left", -wd+"px");
        $(".img").not(":animated").animate({
            "margin-left":"0px"
        });
    }
    $(".btnBox .next .btn").click(function(){
        nextAni();
    });
    $(".btnBox .prev .btn").click(function(){
        prevAni();
    });
});
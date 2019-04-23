$(document).ready(function(){
    var wd=$(".container").width();
//    var ht=$(".slider1").height();
    var len=$(".page_wrap section").length;
    var intv = setInterval(function(){
        nextAni();
    }, 1000000);
    function nextAni(){
        $(".page_wrap").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 700, function(){ 
            $(".page_wrap section").eq(0).appendTo($(".page_wrap"));
            $(".page_wrap").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".page_wrap section").eq(len-1).prependTo($(".page_wrap"));
        $(".page_wrap").css("margin-left", -wd+"px");
        $(".page_wrap").not(":animated").animate({
            "margin-left":"0px"
        }, 700);
    }
    $(".btnBox .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 1000000);
    });
    $(".btnBox .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 1000000);
    });
});
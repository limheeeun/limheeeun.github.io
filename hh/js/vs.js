$(document).ready(function(){
    var wd=$(".nav-contents").width();
    var len=$(".nav-wrap li").length;
    var intv = setInterval(function(){
        nextAni();
    }, 4300);
    function nextAni(){
        $(".nav-wrap").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 700, function(){ 
            $(".nav-wrap li").eq(0).appendTo($(".nav-wrap"));
            $(".nav-wrap").css("margin-left", "0px");
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
            $(".btn_box li .btn").removeClass("on");
            $(".btn_box li .btn").eq(0).addClass("on");
        });
    }
    function prevAni(){
        $(".nav-wrap li").eq(len-1).prependTo($(".nav-wrap"));
        $(".nav-wrap").css("margin-left", -wd+"px");
        $(".nav-wrap").not(":animated").animate({
            "margin-left":"0px"
        }, 700);
        $(".btn_box li").eq(len-1).appendTo($(".btn_box"));
        $(".btn_box li .btn").removeClass("on");
        $(".btn_box li .btn").eq(0).addClass("on");
    }
    function numAni(num){
        for(var x=0;x<num-1;x++){
            $(".nav-wrap li").eq(0).appendTo($(".nav-wrap"));
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
        }
        nextAni();
    }
    $(".btn_box li .btn").click(function(){
        var btnNum = $(this).parents("li").index();
        clearInterval(intv);
        numAni(btnNum);
        intv = setInterval(function(){  nextAni(); }, 2950);
    });
    $(".lr_btn .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 2950);
    });
    $(".lr_btn .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 2950);
    });
});
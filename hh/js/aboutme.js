$(document).ready(function(){
    var wd=$(".container").width();
    var len=$(".page_wrap section").length;
    var intv = setInterval(function(){
        nextAni();
    }, 100000000);
    function nextAni(){
        $(".page_wrap").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 700, function(){ 
            $(".page_wrap section").eq(0).appendTo($(".page_wrap"));
            $(".page_wrap").css("margin-left", "0px");
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
            $(".btn_box li .btn").removeClass("on");
            $(".btn_box li .btn").eq(0).addClass("on");
        });
    }
    function prevAni(){
        $(".page_wrap section").eq(len-1).prependTo($(".page_wrap"));
        $(".page_wrap").css("margin-left", -wd+"px");
        $(".page_wrap").not(":animated").animate({
            "margin-left":"0px"
        }, 700);
        $(".btn_box li").eq(len-1).appendTo($(".btn_box"));
        $(".btn_box li .btn").removeClass("on");
        $(".btn_box li .btn").eq(0).addClass("on");
    }
    function numAni(num){
        for(var x=0;x<num-1;x++){
            $(".page_wrap section").eq(0).appendTo($(".page_wrap"));
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
        }
        nextAni();
    }
    $(".btn_box li .btn").click(function(){
        var btnNum = $(this).parents("li").index();
        clearInterval(intv);
        numAni(btnNum);
        intv = setInterval(function(){  nextAni(); }, 100000000);
    });
    $(".lr_btn .next .btn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 100000000);
    });
    $(".lr_btn .prev .btn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 100000000);
    });
});
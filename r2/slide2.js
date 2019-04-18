$(document).ready(function(){
    var wd=$(".ban1").width();
    var len=$(".ban_frame li").length;
    var intv = setInterval(function(){
        nextAni();
    }, 2950);
    function nextAni(){
        $(".ban_frame").not(":animated").animate({
            "margin-left":-wd+"px"
        }, 700, function(){ 
            $(".ban_frame li").eq(0).appendTo($(".ban_frame"));
            $(".ban_frame").css("margin-left", "0px");
            $(".btn_box li").eq(0).appendTo($(".btn_box"));
            $(".btn_box li .btn").removeClass("on");
            $(".btn_box li .btn").eq(0).addClass("on");
        });
    }
    function numAni(num){
        for(var x=0;x<num-1;x++){
            $(".ban_frame li").eq(0).appendTo($(".ban_frame"));
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
});
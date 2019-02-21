$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    var wd = 237; //이미지 넓이 지정
    function nextAni() {
        $(".ban2").not(":animated").animate({"margin-left":-wd+"px"}, 800, function(){
            $(".ban2 li").eq(0).appendTo($(".ban2"));
            $(".ban2").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".ban2 li").eq(2).prependTo($(".ban2"));
        $(".ban2").css("margin-left", -wd+"px"); //-wd+"px" 넓이 지정
        $(".ban2").not(":animated").animate({"margin-left":"0px"}, 800);
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".popOpenBtn").click(function(){
       $(".popBox").fadeIn(); 
    });
    $(".closeBtn").click(function(){
       $(".popBox").fadeOut(); 
    });
});
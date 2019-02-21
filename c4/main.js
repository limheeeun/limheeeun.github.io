$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".ban").not(":animated").animate({"margin-left":"-858px"}, 800, function(){
            $(".ban li").eq(0).appendTo($(".ban"));
            $(".ban").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".ban li").eq(2).prependTo($(".ban"));
        $(".ban").css("margin-left", "-858px");
        $(".ban").not(":animated").animate({"margin-left":"0px"}, 800);
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
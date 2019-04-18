$(document).ready(function(){
    var wd = $(".slide_view").width();
    var len = $(".slide_box li").length;
    var cnt = 0;
    var intv = setInterval(function(){
        nextAni();
    }, 8000);
    
    function nextAni(){
        $(".slide_box li").removeClass("on");
        $(".slide_control li").removeClass("on");
        cnt++;
        if(cnt>=len) {
            cnt = 0;
        } 
        $(".slide_box li").eq(cnt).addClass("on");
        $(".slide_control li").eq(cnt).addClass("on");
    }
    function prevAni(){
        $(".slide_box li").removeClass("on");
        $(".slide_control li").removeClass("on");
        cnt--;
        if(cnt<0) {
            cnt=len-1;
        }
        $(".slide_box li").eq(cnt).addClass("on");
        $(".slide_control li").eq(cnt).addClass("on");
    }
    
    $(".lr_btn .next").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function(){
            nextAni();
        }, 8000);
    });
    $(".lr_btn .prev").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function(){
            nextAni();
        }, 8000);
    });
});

$(document).ready(function(){
    $(".tabBtnBox li").click(function(){
        var idx = $(this).index();
        $(".tabBtnBox li button").removeClass("on");
        $(this).find("button").addClass("on");
        $(".tabConBox .tabItem").removeClass("on");
        $(".tabConBox .tabItem").eq(idx).addClass("on");
    });
});
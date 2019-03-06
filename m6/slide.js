$(document).ready(function(){
        var wd = parseInt($(".vsBox").width());
        function nextAni(){
            $(".vsImg").not(":animated").animate({"margin-left":-wd+"px"}, 600, function(){
                $(".vsImg li").removeClass("on");
                $(".vsImg li").eq(0).appendTo($(".vsImg"));
                $(".vsImg").css("margin-left", "0px");
                $(".vsImg li").eq(0).addClass("on");
                $(".btnBox li").eq(0).appendTo($(".btnBox"));
                $(".btnBox li label").removeClass("on");
                $(".btnBox li").eq(0).find("label").addClass("on");
            });
        }
        var intv = setInterval(function(){
            nextAni();
        }, 3200); 
        
        var loadingToSplash = setTimeout(function(){
            loadSplash();
        }, 1000);
        
        function loadSplash(){
            $("#splash").animate({"opacity":"0", "left": "-101%"}, 600, function(){
                $("#splach").fadeOut();
            });
        }
    });    
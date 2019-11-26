$(document).ready(function(){
    $("#gnb .gnb_about").click(function(){
        var position=$("section.about").offset();
        $("body").stop().animate({scrollTop:position.top}, 500);
    });
    $("#gnb .gnb_ability").click(function(){
        var position=$(".ability").offset();
        $("body").stop().animate({scrollTop:position.top}, 500);
    });
});



/* portfolio tab 구현 */
$(document).ready(function(){
    $(".tab_content").hide();
    $(".tab_content:first").show();
    
    $("ul.tabs li").click(function(){
        $("ul.tabs li").removeClass("active").css("color", "#acacac");
        $(this).addClass("active").css("color", "#000");
        $(".tab_content").hide()
        var activeTab=$(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
});


/* 팝업 구현 */
$(document).ready(function(){
    cookiedata=document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0) {
        document.all['divpop'].style.visibility = "visible";
    }
    else {
        document.all['divpop'].style.visibility = "hidden";
    }
    
    function setCookie( name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    $(".popborder .close").click(function(){
        $("#divpop").fadeOut(500, function(){
            $(this).find(".popborder").empty();
        });
    });
});

/* 타이핑 */
$(document).ready(function(){
    $(".vs_txt.bottom").unityping({
        string: ['"i Always dream of a bright life."'],
        typingSpeed: 600,
        startDelay: 1000,
        backSpeed: 100,
        backDelay: 1000
    });
});

/* 메인타이틀 컬러애니메이션 */
$(document).ready(function(){
    var rev1 = new RevealFx(document.querySelector('#mainTit1'), {
        revealSettings : {
            bgcolor: '#f9523c',
            onCover: function(contentEI, revealerEI){
                contentEI.style.opacity = 1;
            }
        }
    });
    rev1.reveal();
    
    var rev2 = new RevealFx(document.querySelector('#mainTit2'), {
        revealSettings : {
            bgcolor: '#fcf652',
            delay: 250,
            onCover: function(contentEI, revealerEI){
                contentEI.style.opacity = 1;
            }
        }
    });
    rev2.reveal();
});

/* 탑버튼 구현 */
$("#back-top").hide();

$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    
    $('#back-top a').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/* 메뉴 클릭시 스크롤링 */
$(document).ready(function(){
    var speed = 700;
    
    function scrolling(obj) {
        if(!obj){
            $('html, body').animate({scrollTop:0}, speed);
        } else {
            var posTop = $(obj).offset().top -80;
            $('html, body').animate({scrollTop:posTop}, speed);
        }
    };
    
    $("#gnb a").click(function(){
        var direction = $(this).attr("href");
        scrolling(direction);
        return false;
    });
});

/* 메뉴 온클릭 */
$(document).ready(function(){
    $("#gnb a").click(function(){
        $("#gnb a").removeClass();
        $(this).addClass('on');
    });
});

/* 페이지 스크롤링 */
/*
$(document).ready(function(){
    var sc_pg=parseInt($(window).height());
    $(window).on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0){
            $('body, html').not(":animated").animate({scrollTop : '+='+sc_pg+'px'}, 800);
        } else {
            $('body, html').not(":animated").animate({scrollTop : '-='+sc_pg+'px'}, 800);
        }
        return false;
    });
});
*/

/* 헤더영역스크롤링 구현 */
$(document).ready(function(){
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        if(sct>=800){
            $(".hd").css("position", "fixed");
            $(".hd").not(":animated").slideDown(1000);
        } else if(sct>=100){
            $(".hd").css("display", "none");
        } else {
            $(".hd").css("position", "absolute");
            $(".hd").not(":animated").slideDown(1000);
        }
    });
});

/* 메뉴 슬라이드 구현 */
$(document).ready(function(){
	
	// 공통 - 네비게이션
	var isActive = false;
	$('#menu ul li a').on('click',function(){
		$('#ham-menu').removeClass('active');
		$('#menu').stop().animate({top:'-100%'},300);	
		isActive =!isActive;
	});		
	$('#ham-menu').on('click',function(){
		$(this).toggleClass('active');// 햄버거 버튼 효과
		if(isActive){
			//닫힘
			$('#menu').stop().animate({top:'-100%'},300);						
		}else{
			//열림
			$('#menu').stop().animate({top:0},300);	
		}
		isActive =!isActive;
	});
});

$(document).ready(function(){
       $(".menu1>a").click(function(){
           var submenu = $(this).next("ul")
           if(submenu.is(":visible")){
               submenu.slideUp();
           } else {
               submenu.slideDown();
           }
       });
    });    
$(document).ready(function() {  
    $(window).scroll(function(event) {
        var scTop = $(window).scrollTop();
        if (scTop >= 200) {
        $("#upBtn").fadeIn();
      } else {
        $("#upBtn").fadeOut();
      }
    });
    $("#upBtn").click(function() {
      $("html, body").animate({scrollTop : 0}, 800);
      return false;
    });
});

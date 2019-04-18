$( document ).ready( function() {  
    $("#upBtn").css("display", "none");
    $(window).scroll( function() {
        var scTop = $(window).scrollTop();
      if ( scTop >= 50 ) {
        $("#upBtn").fadeIn();
      } else {
        $( "#upBtn" ).fadeOut();
      }
    });
    $( "#upBtn" ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
      return false;
    });
  });

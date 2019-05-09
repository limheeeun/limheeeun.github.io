$( document ).ready( function() {
        $( window ).scroll( function() {
          if ( $( this ).scrollTop() > 200 ) {
            $( '#upBtn' ).fadeIn();
          } else {
            $( '#upBtn' ).fadeOut();
          }
        } );
        $( '#upBtn' ).click( function() {
          $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
          return false;
        } );
      } );
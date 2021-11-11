( function( $ ) {
    "use strict";	

    const viewportHeight = $(window).height();
    
    //when scroll
    $(window).scroll(function(){ 
    	//up button
        if ($(this).scrollTop() > viewportHeight) {         	
        	//show up button when scroll from top is > viewport height 
            $('#btn-scroll-top').fadeIn(); 
        } else { 
            $('#btn-scroll-top').fadeOut(); 
        } 
    }); 

    //to top button
    $('#btn-scroll-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 800); 
        return false; 


    });  

} )( jQuery );
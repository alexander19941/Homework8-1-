$( function() {
    // init tabs
    $( ".services-tab" ).tabs();
    // init portfolio tabs
    $( ".portfolio-tabs").tabs();
    // init reviews carousel
    $( '.reviews-carousel').slick({
        dots: true,
        autoplay: true,
        autoplayspeed: 5000 
    });
} );
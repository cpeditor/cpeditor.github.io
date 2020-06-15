((function($){
    "use strict";
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonialsSlider(){
        if ( $(".testi_slider").length ){
            $(".testi_slider").owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            });
        }
    }

    testimonialsSlider();

})(jQuery));

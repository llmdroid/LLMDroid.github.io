window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
	var $carousel = $(".owl-carousel");

	$(".owl-carousel").owlCarousel({
		items:3,
		center:true,
		loop:true,	
		nav: true,  /* Enable navigation */
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		responsive:{
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
			}
		},
		onInitialized: updateCenter,
        onTranslate: updateCenter,  // Update center on carousel transition
	});

    function updateCenter(event) {
        var $items = $carousel.find('.owl-item');
        $items.removeClass('center');
        var $center = $carousel.find('.owl-item.active.center');
        if ($center.length === 0) {  // If there's no active center item yet
            $center = $carousel.find('.owl-item.active').eq(1);  // Assume the second active item is the center
        }
        $center.addClass('center');
    }
});

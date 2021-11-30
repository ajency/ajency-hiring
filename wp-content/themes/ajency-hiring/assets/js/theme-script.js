(function($){

	  /* features slider */
	  jQuery(document).ready(function($){
		var deviceAgent = navigator.userAgent.toLowerCase();
		var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
		if (agentID || window.outerWidth < 769) {
	
			$('.feature-cards').removeClass('container-md');
			$('.feature-cards').removeClass('container-md__2');
			$('.feature-cards .gb-container-content').addClass('feature-slider');
			$('.feature-cards .card .gb-container-content').removeClass('feature-slider');
			$('.img-container .gb-container-content').removeClass('feature-slider');
			$('<div class="slider-nav"><div class="arrows"><div class="dots"></div></div></div>').insertAfter(".feature-cards");
			$('.feature-slider').slick({
				loop: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows:false,
				appendDots: $('.features-section .slider-nav .dots'),
				adaptiveHeight: true
			  });
	 
		}
	});

	/* testimonial slider - images */
	$('<div class="slider-nav"><div class="arrows"><div class="dots"></div></div></div>').insertAfter(".testimonial-images .image-box");
	$('.testimonial-images .image-box .wp-block-group__inner-container').slick({
		loop: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows:true,
		appendArrows: $('.testimonial-images .slider-nav .arrows'),
    	appendDots: $('.testimonial-images .slider-nav .dots'),
    	prevArrow: "<button class='arrows__prev'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 8L15 8' stroke='#236BC1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M8 0.999999L15 8L8 15' stroke='#236BC1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
    	nextArrow: "<button class='arrows__next'><svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 8L15 8' stroke='#236BC1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M8 0.999999L15 8L8 15' stroke='#236BC1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
		asNavFor: '.testimonial-slider'
	  });
	  	/* testimonial slider - images */
		$('.testimonial-section .right-side .gb-block-layout-column-inner').addClass('testimonial-slider');
		$('.testimonial-slider').slick({
			loop: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.testimonial-images .image-box .wp-block-group__inner-container'
		});

	/* testimonial background element height */
	$testimonial_height = $('.testimonial-section').height();
	$('.testimonial-section .custom-element').css({"height":$testimonial_height});
	$('.testimonial-section .testimonial-images .gb-container-content').css({"height":$testimonial_height});

	$(document).on('blur change', 'input[type="text"], input[type="email"], input[type="tel"], textarea, input[type="number"]', function () {
		if (!$(this).val()) {
			$(this).parent().removeClass("valid-field");
		} else {
			$(this).parent().addClass("valid-field");
		}
	  });

	/* checkbox */
	$("input[type='checkbox']").change(function() {
		if(this.checked) {
		  $(this).attr( 'checked', 'checked' );
		  $(this).parent().addClass('checked');
		}else{
		  $(this).removeAttr( 'checked', 'checked' );
		  $(this).parent().removeClass('checked');
		}
	});

	/* footer */
	$(".site-footer").addClass("container-md");
	$(".site-footer a").attr( {target: "_blank"});

	/* link hover */
	$(".site-footer .nav-secondary .menu a").addClass("custom-links");
	$(".site-header .menu li:first-child a").addClass("custom-links");
	$(".contact-card__mail a").addClass("custom-links");
	$(".contact-card__phone a").addClass("custom-links");
	$(".custom-logo-link").addClass("logo-links");
	$(".footer-logos a").addClass("logo-links");

}(jQuery));
var $ = jQuery.noConflict();
var $window_width = $(window).width();
var stickyNavTop = $('header#header').offset().top;
$(document).ready(function () {
	"use strict";
	
	/* ToolTip Activate */
	$('[rel=tooltip]').tooltip();

	/* PlaceHolder fix for IE */
	$('input, textarea').placeholder();
	$('#mc_mv_EMAIL').attr('placeholder', 'Type your email address');

	/* Page Header */
	pageHeader();

	/* Set Icon for list elements. (1 icon for all list) */
	codelessSetIconList();

	

	/* Styling VC section */
	codelessSectionStyle();



	/* Initialize Navigation JS Part */
	if(!$('body').hasClass('header_5'))
	codelessNavigation();

	/* Fullwidth Google Map */
	codelessFullwidthMap();

	/* IFRAME height in grid blog */
	codelessIFrameHeight();

	/* Search Button in Header */
	codelessSearchButton();

	/* Scroll Up Binding */
	scrollUpBinding();

	/* Accordion Toggle Binding */
	accordionBinding();

	/* Top Navigation Widget */
	codelessTopNavWidget();

	/* LightBox */
	codelessLightBoxInit();

	/* $("audio,video").mediaelementplayer(); */  

	/* Twitter Footer Carousel */
	twitterFooterCarousel();

	/* Clients Carousel Init */
	if($('.clients_caro').length > 0)
    	clientsCarousel();

    /* Testimonials Carousel Init */
    if($('.testimonial_carousel').length > 0)
    	testimonialsCarousel();

    /* Testimonial Cycle */
    if($('.testimonial_cycle').length > 0)
    	testimonialsCycle();


    /* Flexslider Init */
	if($('.flexslider').length > 0)
    	flexsliderInit();

    /* Portfolio Page Isotope Filter */
    codelessPortfolioPageIsotope();

    /* FAQ filter */
    codelessFaqFilter();

    /* Staff Carousel */
    codelessStaffCarousel();

    /* Portfolio Carousel */
    codelessPortfolioCarousel();

    /* Blog Latest Post */
    codelessLatestBlogCarousel();

    /* Codeless Slider Init */
    if($('.codeless_slider').length > 0)
		$('.codeless_slider').codelessSliderInit();  

	/* Left Navigation */
	codelessLeftNavtion();

	/* Smoothscroll */
	if( $("body").hasClass('nicescroll') )
		codeless_smoothScroll();

	if($('#blogmasonry').length > 0)
		codeless_blogmasonry();

	if($('#fullpage').length > 0)
		codeless_fullscreen_section();

	codeless_backgroundcheck(); 

	if($('.fixed_sidebar').length > 0)
		codeless_single_portfolio_floating();

	codelessExtraNav();

	codelessCustomSelect();

	codelessTabsactive();

	codelessMobileMenu();

	codelessOverallButton();

	if($('body').hasClass('header_5'))
		codelessMenuOverlay(); 

	codelessLayoutChanges();

	codelessOnlineFunctions();

	if($('body').hasClass('one_page'))
	codelessOnePage();

	if($('body').hasClass('sticky_active') && $window_width >= 980) 
		codelessStickyNav();
    	
    
});



$(window).load(function () { 
	codelessInitParallax();
});



$(window).scroll(function(){ 
	"use strict";

	
});



$(window).resize(function(){
	"use strict";	
	/*var width = 1100;
	if($('.swiper_slider').length > 0){
		var slide_per_view = $('.swiper_slider').data('slidenr');

		if ($(".container").css("max-width") == "940px" ){
			slide_per_view = 4;
		}else if ($(".container").css("max-width") == "420px" ){
			slide_per_view = 1;
		}else if ($(".container").css("width") == "724px" ){
			slide_per_view = 2;
		}else if ($(".container").css("max-width") == "300px" ){
			slide_per_view = 1;
		}
		var swiperParent = new Swiper('.swiper_slider',{
		    slidesPerView: slide_per_view,
		    paginationClickable: true,
		    pagination: '.pagination'
		});
		
	}	*/
	//codelessPortfolioPageIsotope();


	codeless_single_portfolio_floating();
	codelessLayoutChanges();
	testimonialsCycle();
	codelessInitParallax();
});




/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS BEGIN --------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

/*------------------------------ Page Header ------------------------- */

function pageHeader(){
	"use strict";
	var self = $('.header_page.centered');
	if(self.length == 0)
		return false;
	var height = self.height();
		self.height(0);

	setTimeout(function(){
		self.animate({
			opacity: 1,
			height: height+'px'
		}, 800); 
	}, 600);
				
	var top = self.offset().top;
	var bottom = self.offset().top + height;
	var op_test = 1;

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
					
		if($('.fixed_header').length > 0)
			scrollTop += $('.fixed_header').height();
		if (jQuery('#wpadminbar').length > 0)
			scrollTop += 32;
		if($(window).scrollTop() == 0)
			scrollTop = 0;
		var opacity1 = 1 - ( scrollTop / bottom );
		op_test = opacity1;
		var new_height = height;
		if(scrollTop > top){
			new_height = bottom - scrollTop;
		}
		//self.css({opacity: opacity1});
		if(!self.hasClass('with_subtitle'))
			self.find('h1').css('line-height', new_height+'px').css('height', new_height+'px').css('padding-top', (height-new_height)+'px').css('opacity', opacity1);
		else{
			self.find('.titles').css('opacity', opacity1).css('padding-top', (height-new_height)+'px');
		}

	});


}



/*------------------------------ Lists ----------------------------- */

function codelessSetIconList(){
	"use strict";
	if($('.list').length > 0){
		$('.list').each(function(){
			var icon = $(this).find('ul').data('icon');
			$('i', $(this)).addClass(icon);
		});
	}
}

/* Parallax Init */

function codelessInitParallax(){
	if($('.section-style.parallax_section').length || $(".header_page:not('.no_parallax')").length){
		$(".section-style.parallax_section, .header_page:not('.no_parallax')").each(function(){
			var self = $(this); 
			$(this).parallax("50%", 0.4); 
		});
	}
}


/*------------------------------ Sections ----------------------------- */
function codelessSectionStyle(){
	"use strict";
	$('.section-style').each(function(){
		if($(this).prev().hasClass('section-style')){
			$(this).css('margin-top', '0px');
			$(this).prev().css('margin-bottom', '0px');
		}

		if($(this).is(':last-child') && ( $(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio') )){
			$(this).parent().css('padding-bottom', '0px');
		}
		if($(this).is(':first-child') && ( $(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio') ) ){
			var style = $(this).parent().attr('style');
			if(typeof style == "undefined")
				style = ''; 
			$(this).parent().attr('style', style+'padding-top:0px !important');
		}
	});

	$('.transparency_section').each(function(){
		var height = $(this).outerHeight();
		$(this).css('margin-top', '-'+height+'px');
	});

	

	if($window_width > 979){
		$('.full-width-content.section-style ').each(function(){
			var max_height = 0;
			var full_width_section = $(this);
			if($('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).length > 1){ 
				$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).each(function(){
					var this_ = $(this);
					if(this_.innerHeight() > max_height)
						max_height = this_.innerHeight(); 
				});
				$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).innerHeight(max_height+'px');
			}
			
		});
	}else{
		$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
	}

	$('.section-style').each(function(){
		var self = $(this);
		if(self.css('padding-bottom') == '0px'){
			var pad = $('.wpb_column', self).last().css('padding-bottom');
			if($window_width < 768){
				$('.wpb_column', self).last().css('padding-bottom', '40px');
			}else{
				$('.wpb_column', self).last().css('padding-bottom', pad);
			}
		}
	});

	$(window).resize(function(){
		$window_width = $(this).width();
		$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
		if($window_width > 979){
			$('.full-width-content.section-style ').each(function(){
				var max_height = 0;
				var full_width_section = $(this);
				if($('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).length > 1){ 
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).each(function(){
						var this_ = $(this);
						if(this_.innerHeight() > max_height)
							max_height = this_.innerHeight(); 
					}); 
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).innerHeight(max_height+'px');
				}
				
			});
		}else{
			$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
		}

		$('.section-style').each(function(){
			var self = $(this);
			if(self.css('padding-bottom') == '0px'){
				var pad = $('.wpb_column', self).last().css('padding-bottom');
				
				if($window_width < 768){
					$('.wpb_column', self).last().css('padding-bottom', '40px');
				}else{
					$('.wpb_column', self).last().css('padding-bottom', pad);
				}
			}
		});

	});
	

}
		
/*------------------------------ Navigation -------------------------- */
function codelessNavigation(){
	"use strict";
	
	$('nav .menu li').each(function(){
		var self = $(this);
		if($('.codeless_mega4', self).length > 0){
			self.css('position', 'static');
		}

		if($('.codeless_mega5', self).length > 0){
			self.css('position', 'static');
		}
	});

	$('.header_1 nav .menu li .sub-menu').each(function(){
		$(this).parent().first().addClass('hasSubMenu');
	});

	$('nav .menu, .sticky_menu .menu').mouseleave(function(event) {
		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
	});

	$('nav .menu > li, .sticky_menu .menu > li').mouseenter(function() {
		$(this).parent().find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
		$('header#header .cart .content').stop().fadeOut(400).css('display', 'none');

		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');

		$(this).parent().find('.codeless_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
	});

	$('nav .menu > li ul > li, .sticky_menu .menu > li ul > li').mouseenter(function() {
		

		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').first().stop().fadeIn(400).css('display', 'block');

		$(this).parent().find('.codeless_custom_menu_mega_menu').stop().fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').first().stop().fadeIn(400).css('display', 'block');
	});

	$('.codeless_custom_menu_mega_menu').each(function(){
		var bg = $(this).parent('li').data('bg');
		$(this).css('background-image', 'url('+bg+')');
	});

	$('header#header .container').live('mouseleave', function(event) {
		$(this).find('.cart .content').stop().fadeOut(400).css('display', 'none');
	}); 

	$('header#header .cart_icon').live('mouseenter', function() {
		$(this).parents('header#header').first().find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
		$(this).parent().find('.content').first().stop().fadeIn(400).css('display', 'block'); 
	});

	$('header#header .vert_mid > a').live('mouseenter', function() {
		$(this).parent().find('.cart .content').first().stop().fadeOut(400).css('display', 'none'); 
	});


	if($('.header_10').length > 0){
		var container_left = $('.full_nav_menu').offset().left;
		var nav = $('.full_nav_menu nav').offset().left;
		$('.codeless_custom_menu_mega_menu').each(function(){
			var minus = nav - container_left; 
			$(this).css('left', '-'+minus+'px');
		});
	}

	$(window).resize(function(){
		if($('.header_10').length > 0){
			var container_left = $('.full_nav_menu').offset().left;
			var nav = $('.full_nav_menu nav').offset().left;
			$('.codeless_custom_menu_mega_menu').each(function(){
				var minus = nav - container_left; 
				$(this).css('left', '-'+minus+'px');
			});
		}
	});
}
		

/*------------------------------ Fullwidth Google MAP ----------------------------- */	

function codelessFullwidthMap(){
	"use strict";
	if($('.googlemap.fullwidth_map').length > 0){
		$('.googlemap.fullwidth_map').each(function(){
			var $parent = $(this).parents('.row-dynamic-el').first();
			if($parent.next().hasClass('section-style'))
				$parent.css('margin-bottom', '0px');
		}); 
		$('.row-google-map').each(function(){
			if($('.fullwidth_map', $(this)).length > 0){
				var $parent = $(this).parents('.row-dynamic-el').first();
				$parent.css('margin-top', '0px');
			}
				
		});
	}
}

 
/*------------------------------ Change IFRAME GRID height -------------------------- */   

function codelessIFrameHeight(){
	"use strict";
	$('.blog-article.grid .media img').first().imagesLoaded(function(){
		var first_height = $('.blog-article.grid .media img').first().height();
			
		$('.blog-article.grid iframe').each(function(){
			$(this).css('height', first_height+'px');
			$(this).parent('.media').css('height', first_height+'px');
		});
	});
}

 
/*------------------------------ HEader Search Button ------------------------------ */  

function codelessSearchButton(){
	"use strict";
	$('.open_search_button').click(function(){
		if($('body').hasClass('open_search')){
			$('body').removeClass('open_search');
		}else
			$('body').addClass('open_search');

	});

	
	$(window).scroll(function() {
		if($('body').hasClass('open_search')){
			$('body').removeClass('open_search');
		}
	});
	
		
   	$('html').click(function(e) {
       	if((e.target.id != 's')) { 
        	$('.right_search_container').hide();
    	}
   	});
}

/*------------------------------ Side navigation --------------------------- */  

function codelessExtraNav(){
	"use strict";
	$('.extra_navigation_button').click(function(){
		if($('body').hasClass('open_extra_nav')){
			$('body').removeClass('open_extra_nav');
		}else
			$('body').addClass('open_extra_nav');

	});

	$('.extra_navigation .close').click(function(){
		$('body').removeClass('open_extra_nav');
	});

	/*$(window).scroll(function() {
		if($('body').hasClass('open_extra_nav')){
			$('body').removeClass('open_extra_nav');
		}
	});*/

}
		

/*------------------------------ Scroll Up binding ------------------------------ */  

function scrollUpBinding(){
	"use strict";
	$('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
}
        
		
/*------------------------------ Accordion Toggle Binding ------------------------------ */  

function accordionBinding(){
	"use strict";
	$(".accordion-group .accordion-toggle").live('click', function(){
		var $self = $(this).parent().parent();
		if($self.find('.accordion-heading').hasClass('in_head')){
			$self.parent().find('.accordion-heading').removeClass('in_head');
		}else{  
			$self.parent().find('.accordion-heading').removeClass('in_head');
			$self.find('.accordion-heading').addClass('in_head');
		}
	});
}

/*------------------------------ Top Navtion Widget ------------------------------ */ 
function codelessTopNavWidget(){
	"use strict";
	$('.small_widget a').not('.aaaa a').toggle(function(e){
		$('.small_widget').removeClass('active'); 
              e.preventDefault();
		var box = $(this).data('box');
		$('.top_nav_sub').hide();
		$('.top_nav_sub.'+box).fadeIn("400");
              $(this).parent().addClass('active'); 

	}, function(e){
		e.preventDefault();
		var box = $(this).data('box');
              $('.small_widget').removeClass('active');  
		$('.top_nav_sub').fadeOut('400');
		$('.top_nav_sub.'+box).fadeOut('slow');
            
              
	});
}	

	
/*------------------------------ LightBox -------------------------------------- */ 

function codelessLightBoxInit(){
	"use strict";
	$(".lightbox-gallery").fancybox();
	$('.show_review_form').fancybox();
	$('.lightbox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
}


/*------------------------------ Tweeter Footer Carousel ------------------------ */ 

function twitterFooterCarousel(){
	"use strict";
	$("#tweet_footer").each(function(){
		var $self = $(this);
		$self.carouFredSel({
			circular : true,
			infinite : true,
			auto : false,
			scroll : {
				items : 1,
				fx : "fade"
			},
			prev : {
				button : $self.parent().parent().find('.back')
			},

			next : {
				button : $self.parent().parent().find('.next')
			}
	
		});
	});
}


/*------------------------------ Blog Carousel ------------------------ */ 

function codelessBlogCarousel(){
	"use strict";
	$(".carousel_blog").each(function(){
	    var $self = $(this);
	    if( $('li img', $self).size() ) {
	  		$('li img', $self).one("load", function(){
		       	$self.carouFredSel( {		
					circular: true,
					infinite: true,
					auto 	: false,

					scroll  : {
			        	items : 1
			        },

					prev : {
						button : $self.parents('.latest_blog').find('.prev')
					},

					next : {
						button : $self.parents('.latest_blog').find('.next')
					}
			
				});
			}).each(function() {
	  		    if(this.complete) $(this).trigger("load");
	  		});
		}else{
			$self.carouFredSel( {		
				circular: true,
				infinite: true,
				auto 	: false,

				scroll  : {
			        items : 1
			    },

				prev : {
					button : $self.parents('.latest_blog').find('.prev')
				},

				next : {
					button : $self.parents('.latest_blog').find('.next')
				}
			
			});
		}  	         
	});		
}

     
/*------------------------------ Clients Carousel ------------------------ */ 

function clientsCarousel(){
	"use strict";

	var $self = $('.clients_caro');
	if($self.length){
		$self.css('display', 'none');
		$self.imagesLoaded(function(){
			$self.css('display', 'block');
			$self.carouFredSel( 
			{
						items:4,
						auto: false, 
						scroll: { items : 1 },
						prev : {
							button : $self.parents('.clients_el').first().find('.prev')
						},

						next : {
							button : $self.parents('.clients_el').first().find('.next')
						}
			});
		})
	}
	
	

}


/*------------------------------ Testimonials Carousel ------------------------ */ 
    	
function testimonialsCarousel(){
	"use strict";
	$('.testimonial_carousel').each(function(){
		var $self = $(this);
		$(this).carouFredSel({
						
			auto: true,
			scroll: { items : 1, fx: 'fade' },
			prev : {
				button : $self.parent('.testimonial_carousel_element').find('.prev')
			},

			next : {
				button : $self.parent('.testimonial_carousel_element').find('.next')
			}

		});

	});
}

/* ---------------------------- Testimonial Cycle ----------------------------- */

function testimonialsCycle(){
	"use strict";

	$('.testimonial_cycle').each(function(){
		var $self = $(this);
		var container_width = $self.parents('.wpb_wrapper').first().width();

		$('.item', $self).width(container_width+'px');

		$(this).carouFredSel({
						
			auto: true,
			scroll: { items : 1, fx: 'fade' },

		});

	});
}


/*------------------------------ Flexslider Init ------------------------ */ 
function flexsliderInit(){
	"use strict";
	$('.flexslider').each(function(){ 
		var $s = $(this);
		$s.flexslider({
			slideshowSpeed: 6000,
			animationSpeed: 800,
                     
			controlNav: true,
			pauseOnAction: true,
			pauseOnHover: false,
			start: function(slider) {

				$s.find(" .slides > li .flex-caption").each(function(){
					var effect_in = $(this).attr("data-effect-in");
					var effect_out = $(this).attr("data-effect-out");
					$(this).addClass("animated " + effect_in);
					

				});
			},
			before: function(slider) {
				var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
				$s.find(".slides > li .flex-caption").removeClass('animated');				
				$(".flex-caption", current_slide).each(function(){
					var effect_in = $(this).attr("data-effect-in");
					var effect_out = $(this).attr("data-effect-out");

					$(this).removeClass("animated "+effect_in).addClass("animated " + effect_out);
				});
			},
			after: function(slider) {
				var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
				$s.find(".slides > li .flex-caption").removeClass('animated');				
				$(".flex-caption", current_slide).each(function(){
					var effect_in = $(this).attr("data-effect-in");
					var effect_out = $(this).attr("data-effect-out");

					$(this).removeClass("animated "+effect_out).addClass("animated " + effect_in);
				});
			}		
		});
	});
}


/*------------------------------ Portfolio Page Isotope filter ------------------------ */ 

function codelessPortfolioPageIsotope(){
	"use strict";
	if($('#portfolio-preview-items .filterable').length > 0){
		var $container = $('#portfolio-preview-items .filterable');
		$container.imagesLoaded(function(){
			var state = $container.mixItUp();
		});
	}

	if($('.masonry').length > 0){
		$container = $('.masonry');
		imagesLoaded( $container, function() {
				
				var msnry = new Masonry( '.masonry', {
					"columnWidth": ".grid-size",
	  				itemSelector: '.portfolio-item'
				});

				$('#portfolio-filter li a').click(function(){
					var filter = $(this).data('filter');
					if(filter != 'all'){

						msnry.destroy();

						$container.mixItUp();
						$container.removeClass('masonry').addClass('filterable');
						
						$container.mixItUp('filter', filter); 
						
					}else{
						$container.removeClass('filterable').addClass('masonry');
						$container.mixItUp('destroy', false);
						$('#portfolio-filter li').removeClass('active');
						$('#portfolio-filter li a').removeClass('active');
						$(this).addClass('active');
						$(this).parent().addClass('active');
						msnry = new Masonry( '.masonry', {
							"columnWidth": ".grid-size",
			  				itemSelector: '.portfolio-item'
						});
					}
					
				});
				
		
		});
		
	}
	
}
	
    
/*------------------------------ FAQ Isotope filter ------------------------ */ 

function codelessFaqFilter(){
	"use strict";
	$('nav#faq-filter li a').click(function(e){
		e.preventDefault();

		var selector = $(this).attr('data-filter');

		$('.faq .accordion-group').fadeOut();
		$('.faq .accordion-group'+selector).fadeIn();

		$(this).parents('ul').find('li').removeClass('active');
		$(this).parent().addClass('active');
	});
}	


/*------------------------------ Staff Carousel ------------------------------ */ 

function codelessStaffCarousel(){
	"use strict";
	if($('.staff_slider').length > 0){

		$('.staff_slider').parents('.span_12').first().css('display', 'block');
	  
	    var slide_per_view = $('.staff_slider').data('slidenr');


		if ($window_width >= 979 && $window_width < 1100 ){
			slide_per_view = 3;
		}else if ($window_width >= 421 && $window_width < 768 ){ 
			slide_per_view = 2;
		}else if ($window_width <= 420){
			slide_per_view = 1;
		}else if ($window_width >= 768 && $window_width < 979 ){
			slide_per_view = 2;
		}else if($window_width > 1100){
			slide_per_view = $('.staff_slider').data('slidenr');
		} 

	  
	  var staff_slider = new Swiper('.staff_slider',{
	    slidesPerView: slide_per_view, 
	    paginationAsRange: false,
	  });
	  var $pag_wrapper = $('.staff_carousel').parents('.wpb_row').first().prev();
	  if($('.staff_carousel').length > 0){
	  		if($('.staff_carousel .swiper_pagination').length > 0){
	  			$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.staff_carousel .swiper_pagination').html() + '</div>' );
	  			$('.staff_carousel .swiper_pagination').remove();
	  		}
	  		

	  		var height = $('.staff_carousel .single_staff').height();
	  		$('.staff_carousel .swiper-wrapper').css({height: height+'px'});
	  }
	  
	  if($pag_wrapper.find('.swiper_pagination').length > 0){
		  $('.swiper_pagination .next', $pag_wrapper ).on('click', function(e){
		  		e.preventDefault();
		  		staff_slider.swipeNext();
		  });

		  $('.swiper_pagination .prev', $pag_wrapper).on('click', function(e){
		  		e.preventDefault();
		  		staff_slider.swipePrev();
		  });
	  }

	  $(window).resize(function(){
	  	$window_width = $(window).width();
	  	if ($window_width >= 979 && $window_width < 1100 ){
			slide_per_view = 3;
		}else if ($window_width >= 421 && $window_width < 768 ){ 
			slide_per_view = 2;
		}else if ($window_width <= 420){
			slide_per_view = 1;
		}else if ($window_width >= 768 && $window_width < 979 ){
			slide_per_view = 2;
		}else if($window_width > 1100){
			slide_per_view = $('.staff_slider').data('slidenr');
		} 

		var staff_slider = new Swiper('.staff_slider',{
		    slidesPerView: slide_per_view, 
		    paginationAsRange: false,
		});
		var height = $('.staff_carousel .single_staff').height();
	  	$('.staff_carousel .swiper-wrapper').css({height: height+'px'});
	  });
	  
	}
}


/*------------------------------ Portfolio Carousel ------------------------------ */ 

function codelessPortfolioCarousel(){
	"use strict";
	if($('.portfolio_slider').length > 0){
	  
	    var slide_per_view = $('.portfolio_slider').data('slidenr');

		if ($(".container").css("max-width") == "940px" ){
			slide_per_view = 4;
		}else if ($(".container").css("max-width") == "420px" ){
			slide_per_view = 1;
		}else if ($(".container").css("width") == "724px" ){
			slide_per_view = 2;
		}else if ($(".container").css("max-width") == "300px" ){
			slide_per_view = 1;
		} 
	  
	  var portfolio_slider = new Swiper('.portfolio_slider',{ 
	    slidesPerView: slide_per_view, 
	    paginationAsRange: false, 
	  });
	  var $pag_wrapper = $('.recent_portfolio').parents('.wpb_row').first().prev();
	  if($('.portfolio_slider').length > 0){
	  		$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.recent_portfolio .swiper_pagination').html() + '</div>' );
	  		$('.recent_portfolio .swiper_pagination').remove();

	  		
	  		if( $('.recent_portfolio .portfolio-item img').size() ) {
				
				$('.recent_portfolio .portfolio-item img').one("load", function(){
					var height = $(this).parents('.portfolio-item').first().height();
					$('.portfolio_slider .swiper-wrapper').css({height: height+'px'});  
				});
			}
	  		
	  }
	  

	  $('.swiper_pagination .next', $pag_wrapper ).live('click', function(e){ 
	  		e.preventDefault();
	  		portfolio_slider.swipeNext();
	  });

	  $('.swiper_pagination .prev', $pag_wrapper).live('click', function(e){
	  		e.preventDefault();
	  		portfolio_slider.swipePrev();
	  });
	  
	}
}


/*------------------------------ Portfolio Carousel ------------------------------ */ 

function codelessLatestBlogCarousel(){
	"use strict";
	if($('.blog_slider').length > 0){
	  
	    var slide_per_view = $('.blog_slider').data('slidenr');

		if ($(".container").css("max-width") == "940px" ){
			slide_per_view = 4;
		}else if ($(".container").css("max-width") == "420px" ){
			slide_per_view = 1;
		}else if ($(".container").css("width") == "724px" ){
			slide_per_view = 2;
		}else if ($(".container").css("max-width") == "300px" ){
			slide_per_view = 1;
		} 
	  
	  var blog_slider = new Swiper('.blog_slider',{ 
	    slidesPerView: slide_per_view, 
	    paginationAsRange: false, 
	  });
	  var $pag_wrapper = $('.latest_blog').parents('.wpb_row').first().prev();
	  if($('.blog_slider').length > 0){
	  		$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.latest_blog .swiper_pagination').html() + '</div>' );
	  		$('.latest_blog .swiper_pagination').remove();
	  }
	  

	  $('.swiper_pagination .next', $pag_wrapper ).live('click', function(e){ 
	  		e.preventDefault();
	  		portfolio_slider.swipeNext();
	  });

	  $('.swiper_pagination .prev', $pag_wrapper).live('click', function(e){
	  		e.preventDefault();
	  		portfolio_slider.swipePrev();
	  });
	  
	}
}
	

/*------------------------------ Codeless Slider ------------------------------ */ 

$.fn.codelessSliderInit = function () {
    "use strict";
    var slider = this;
    var parent = this.parents('.codeless_slider_swiper').first();
    var slide_per_view = slider.data('slidenumber');
	var height = slider.data('height');
	
	if(height == 'fullscreen')
		height = $(window).height();

	var $loading = $('.loading', parent);

	if($('body').hasClass('header_7')  && $(window).width() > 970 && $('.codeless_slider_wrapper', parent).css('position') == 'fixed' ){
		var pad = $('.header_wrapper').innerWidth();
		var pos = 'left'
		if($('.pos--right').length > 0)
			pos = 'right'
		$('.codeless_slider_wrapper', parent).css('padding-'+pos, pad+'px');
		$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
	}
	//slider.hide();
	parent.height(height+'px');
	slider.height(height+'px');

	$('.codeless_slider').imagesLoaded(function(){
		$loading.css('display', 'none');
		var codelessSlider = new Swiper('.codeless_slider',{ 
			slidesPerView: slide_per_view,
			paginationAsRange: false,
			loop: false,
			touchRatio: 0.7,
			autoplay: 5000,
			speed: 800,
			noSwiping: true,
			updateOnImagesReady:true,
			onSwiperCreated: function(swiper){
			   	var $h1 = $(swiper.activeSlide()).find('h1');
			   	var $p =  $(swiper.activeSlide()).find('p');
			   	var $buttons =  $(swiper.activeSlide()).find('.buttons');
			    	
			   	$h1.removeClass('with_animation').addClass($h1.data('animation'));
			    $p.removeClass('with_animation').addClass($p.data('animation'));
			    	
			    $buttons.removeClass('with_animation').addClass($buttons.data('animation'));
			},
			onSlideChangeEnd: function(swiper){
			    var $h1 = $(swiper.activeSlide()).find('h1');
			    var $p =  $(swiper.activeSlide()).find('p');
			    var $buttons =  $(swiper.activeSlide()).find('.buttons');
			    $h1.removeClass('with_animation').addClass($h1.data('animation'));
			    $p.removeClass('with_animation').addClass($p.data('animation'));
			    $buttons.removeClass('with_animation').addClass($buttons.data('animation'));


			    $h1 = $(swiper.activeSlide()).next().find('h1');
			    $p =  $(swiper.activeSlide()).next().find('p');
			    $buttons =  $(swiper.activeSlide()).next().find('.buttons');
			    $h1.addClass('with_animation').removeClass($h1.data('animation'));
			    $p.addClass('with_animation').removeClass($p.data('animation'));
			    $buttons.addClass('with_animation').removeClass($buttons.data('animation'));

			    $h1 = $(swiper.activeSlide()).prev().find('h1');
			    $p =  $(swiper.activeSlide()).prev().find('p');
			    $buttons =  $(swiper.activeSlide()).prev().find('.buttons');
			    $h1.addClass('with_animation').removeClass($h1.data('animation'));
			    $p.addClass('with_animation').removeClass($p.data('animation'));
			    $buttons.addClass('with_animation').removeClass($buttons.data('animation'));

			},
			onSlideChangeStart: function(swiper){
			    var $h1 = $(swiper.activeSlide()).find('h1');
			    var $p =  $(swiper.activeSlide()).find('p');
			    var $buttons =  $(swiper.activeSlide()).find('.buttons');

			    $h1.addClass('with_animation').removeClass($h1.data('animation'));
			    $p.addClass('with_animation').removeClass($p.data('animation'));
			    $buttons.addClass('with_animation').removeClass($buttons.data('animation'));
			}
		});

		//slider.fadeIn('slow');

		$('.nav-slider .next', parent ).live('click', function(e){ 
	  		e.preventDefault();
	  		codelessSlider.swipeNext();
		});

		$('.nav-slider .prev', parent).live('click', function(e){
		  		e.preventDefault();
		  		codelessSlider.swipePrev();
		});
	});

	

	if(parent.hasClass('parallax_slider') && $('.container').width() > 420){
		var skrollr_slider = skrollr.init({
            edgeStrategy: 'set', 
            smoothScrolling: true, 
            forceHeight: false
        }); 
        skrollr_slider.refresh()
	}

	

	if($('.swiper-slide', slider).length == 1)
		$('.nav-slider', parent).hide();

	$(window).resize(function(){
		if($('body').hasClass('header_7') && $(window).width() > 970 ){
			var pad = $('.header_wrapper').innerWidth();
			var pos = 'left'
			if($('.pos--right').length > 0)
				pos = 'right'
			$('.codeless_slider_wrapper', parent).css('padding-'+pos, pad+'px');
			$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
		}else{ 
			var pos = 'left'
			if($('.pos--right').length > 0)
				pos = 'right'
			$('.codeless_slider_wrapper', parent).css('padding-'+pos, 0+'px');
			$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
		}
	}); 
	

};


/*------------------------------ Woocommerce Functions ------------------------------ */ 
	
function codelessWoocommerceInit(){
	"use strict";
	if($('.add_to_cart_button').length > 0){
		
		$('body').on('adding_to_cart', function(event, param1, param2){
			var $thisbutton = param1;
			var $product = $thisbutton.parents('.product').first();
			var $load = $product.find('.loading_ef');
			$load.css('opacity', 1);
			$('body').on('added_to_cart', function(event, param1, param2){
				
				$load.css('opacity', 0);
				
				setTimeout(function(){$load.html('<i class="moon-checkmark"></i>'); $load.css('opacity', 1);}, 500);
				setTimeout(function(){$load.css('opacity', 1);}, 400);
				setTimeout(function(){$load.css('opacity', 0);}, 2000);
				$product.addClass('product_added_to_cart');
			});
		});
	}
}


/*------------------------------ Left Navigation ------------------------------ */ 

function codelessLeftNavtion(){
	"use strict";
	$(".page_item_has_children").each(function(){
    	$(this).click(function(){
	        $(this).find('.children').toggle(400);
	        $(this).toggleClass('open-child');
       
    	});
  	});

   $('li.current_page_item').parents('.children').css({ display: 'block' });
   $('.current_page_ancestor').addClass('open-child');
}
    

/*------------------------------ Mobile Menu ---------------------------- */ 

function codelessMobileMenu(){
	"use strict";
	var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
	var padding = $('.top_wrapper').css('padding-top');

	$('.mobile_small_menu').click(function(){
		
		if($(this).hasClass('open')){
			$('.header_wrapper').height('auto');
			$('header#header .row-fluid:first-child .span12').css('position', 'relative');

			$('header#header .row-fluid:first-child .span12').height(height);
			$('.menu-small').slideDown(400);
			if(!$('body').hasClass('header_3')) 
				$('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

			if($('body').hasClass('header_4'))
				$('.top_wrapper').css('padding-top', '0'); 
			$('.tparrows').hide();
			
			$(this).removeClass('open').addClass('close');
		}else if($(this).hasClass('close')){

			$('.menu-small').slideUp(400);
			$('.tparrows').show();
			if(!$('body').hasClass('header_3'))
				$('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

			if($('body').hasClass('header_4'))
				$('.top_wrapper').css('padding-top', padding);
			$(this).removeClass('close').addClass('open'); 
			$('.header_wrapper').height('auto');
		}
	});

	$('#mobile-menu li').each(function(){
		var id = $(this).attr('id');
		$(this).attr('id', 'responsive-'+id);
	});

	$(window).resize(function(){
		var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
		var padding = $('.top_wrapper').css('padding-top');
		if($(window).width() > 980){
			$('.header_7 .header_wrapper').height('100%');
		}
	});
}
	



/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS END ----------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/



    
      
/*------------------------------ Switcher Toggle Button ------------------------ */ 
    
function codelessSwitcherToggle(){
	"use strict";
	$("#switcher-head .button").toggle(function(){
		$("#style-switcher").animate({
			left: 0
		}, 500);
	}, function(){
		$("#style-switcher").animate({
			left: -263
		}, 500);
	});
}  


/* ----------------------------- SmoothScroll ---------------------------- */

function codeless_smoothScroll(){
	"use strict";
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}
}

/* ----------------------------- End SmoothScroll ------------------------ */


/* ----------------------------- BLOG Masonry ---------------------------- */

function codeless_blogmasonry(){
	"use strict";
	var container = $('#blogmasonry .filterable');
		if( $('.media img', container).size() ) {
			$('.media img', container).one("load", function(){

				var msnry = new Masonry( '#blogmasonry .filterable', {
					"columnWidth": ".grid-size", 
	  				itemSelector: '.blog-article'
				});
				
			});
	   
		}
}

/* ----------------------------- End BLOG Masonry ------------------------ */


/* ----------------------------- Background Check ------------------------ */

function codeless_backgroundcheck(){
	"use strict";
	if($('.header_1').length > 0 || $('.header_4').length > 0){
		if($('.page_header_centered').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			BackgroundCheck.init({
				targets: '.header_wrapper',
				images: '.header_page',
				classes: { dark: 'background--dark', light: 'background--light', complex: 'background--dark' }
			});
			setTimeout(function(){ BackgroundCheck.refresh(); }, 400);
		}

		if($('#fullpage').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			BackgroundCheck.init({
				targets: '.header_wrapper', 
				images: '.section'
			});
			setTimeout(function(){
				if($('.header_wrapper').hasClass('background--light'))
					$('.section:first-child .content').addClass('background--light');
				else if($('.header_wrapper').hasClass('background--dark'))
					$('.section:first-child .content').addClass('background--dark');
			}, 800);
		}

		if($('.fullscreen-single').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			var ca = Array.prototype.slice.call(document.querySelectorAll(".header_wrapper")).concat(Array.prototype.slice.call(document.querySelectorAll(".fullscreen-single")));
			BackgroundCheck.init({
				targets: ca, 
				images: '.header_fullscreen_single img',
				windowEvents: false
			});
		}
			
			 		
	}
} 

/* ----------------------------- End Background Check -------------------- */

/* ----------------------------- Fullscreen Section ---------------------- */

function codeless_fullscreen_section(){
	"use strict";
	if($('.fullscreen-blog-article').length > 0){
		$('#fullpage .section .content').each(function(){
			var height = $(this).height();
			$(this).css('margin-top', '-'+(height/2)+'px' );	
		});
	}
	
	$('#fullpage').fullpage({
		verticalCentered: false,
		navigation: true,
		navigationPosition: 'right',
		resize: false,
		afterLoad: function(anchorLink, index){
			if($('.auto_color_check').length > 0){
				BackgroundCheck.refresh();
				if($('.header_wrapper').hasClass('background--light'))
					$('.section:nth-child('+index+') .content').addClass('background--light');
				else if($('.header_wrapper').hasClass('background--dark'))
					$('.section:nth-child('+index+') .content').addClass('background--dark');
			}
			$('#fullpage .section .with_animation').animate_on_appear();
			


        },
        afterRender: function(){
        	$('#fullpage .section .with_animation').animate_on_appear();
        }
        /*onLeave: function(index, nextIndex){
            var current = $('#fullpage .section:nth-child('+index+') .content') ;
            var next = $('#fullpage .section:nth-child('+nextIndex+') .content');
            current.removeClass('with_animation').removeClass(current.data('animation'));
            next.addClass('with_animation').delay(current.data('delay')).queue( function() {
            	$(this).addClass(current.data('animation'));
            });
        }*/

	});	
}

/* ----------------------------- End Fullscreen Section ------------------- */

/* ----------------------------- SINGLE PORTFOLIO FLOATING----------------- */

function codeless_single_portfolio_floating(){
	"use strict";
	var $sidebar   = $(".fixed_sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    if( $('.container').width() > 420 && $sidebar.length > 0){
    	$window.scroll(function() {
	        if ($window.scrollTop() > offset.top) {
	            $sidebar.stop().animate({
	                marginTop: $window.scrollTop() - offset.top + topPadding
	            });
	        } else {
	            $sidebar.stop().animate({
	                marginTop: 0
	            });
	        }
	    });
    }else{
    	$(window).unbind('scroll');
    }
}


/* ----------------------------- END SINGLE PORTFOLIO FLOATING------------ */

/* ----------------------------- Custom Select --------------------------- */

function codelessCustomSelect(){
	"use strict";
	$('.woocommerce-ordering .orderby').select2();
}

/* ----------------------------- End Custom Select ----------------------- */

/* ----------------------------- Tabs ------------------------------------ */

function codelessTabsactive(){
	"use strict";
	if($('.tabbable').length > 0){
		$('.tabbable').each(function(){
			$(this).find('.tab-pane').first().addClass('active'); 
		});
	}
}

/* ----------------------------- End Tabs -------------------------------- */

/* ----------------------------- Buttons Style --------------------------- */

function codelessOverallButton(){
	"use strict";
	var extra = codeless_global.button_style;

	if($('.wpcf7-form p input[type="submit"]').length > 0){
		$('.wpcf7-form p input[type="submit"]').addClass('btn-bt').addClass(extra);
	}
	if($('#respond input[type="submit"]').length > 0){
		$('#respond input[type="submit"]').addClass('btn-bt').addClass(extra);
	}

	if($('.woocommerce .button, #woocommerce .button').length > 0){
		$('.woocommerce .button, #woocommerce .button').addClass('btn-bt').addClass(extra);
	}

	if($('.not_found .search_field').length > 0){
		$('.not_found .search_field button').addClass('btn-bt').addClass(extra);
	}

	if($('.post-password-form input[type="submit"]').length > 0){
		$('.post-password-form input[type="submit"]').addClass('btn-bt').addClass(extra);
	}
	$("body").bind("added_to_cart", function() {
		$('.added_to_cart').addClass('btn-bt').addClass(extra);
	});
}

/* ----------------------------- End Buttons Style ----------------------- */

/* ----------------------------- Header5 Overlay ------------------------- */

	function codelessMenuOverlay(){

		var triggerBttn = document.getElementById( 'trigger-overlay' ),
			overlay = document.querySelector( 'div.overlay_menu' ),
			closeBttn = overlay.querySelector( 'button.overlay-close' );
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

			triggerBttn.addEventListener( 'click', toggleOverlay ); 
			closeBttn.addEventListener( 'click', toggleOverlay );

			function toggleOverlay(){
				if( classie.has( overlay, 'open' ) ) {
					classie.remove( overlay, 'open' );
					classie.add( overlay, 'close' );

					var onEndTransitionFn = function( ev ) {
						if( support.transitions ) {
							if( ev.propertyName !== 'visibility' ) return;
							this.removeEventListener( transEndEventName, onEndTransitionFn );
						}
						classie.remove( overlay, 'close' );
					};
					if( support.transitions ) {
						overlay.addEventListener( transEndEventName, onEndTransitionFn );
					}
					else {
						onEndTransitionFn();
					}
				}
				else if( !classie.has( overlay, 'close' ) ) {
					classie.add( overlay, 'open' );
				}
			}

			$('.overlay_menu .menu-item-has-children').hover(function(){

				var height = $(this).find('.sub-menu li').height();
				height *= $(this).find('.sub-menu li').length;
				$(this).find('.sub-menu').height(height+'px');

			}, function(){
				$(this).find('.sub-menu').height(0);
			});


	}


/* ----------------------------- End Header 5 Overlay -------------------- */


/* ----------------------------- Layout Changes -------------------------- */

function codelessLayoutChanges(){
	"use strict";
	var container = $('.container').width();
	$('.testimonial_carousel .item').each(function(){

		var self = $(this);
		var wpb_column = self.parents('.wpb_column').first().width();
		self.innerWidth(wpb_column+'px');
		self.height(self.height()+'px');
		self.parents('.caroufredsel_wrapper').first().height(self.height()+'px');
		self.parents('.testimonial_carousel').first().height(self.height()+'px');
		
	});

	$('.clients_caro .item').each(function(){
		var self = $(this);
		var wpb_column = self.parents('.wpb_column').first().width();
		if(container > 420 && container <= 724)
			self.innerWidth( (wpb_column/3)+'px');
		if(container > 724 && container < 940)
			self.innerWidth( (wpb_column/4)+'px');
		if(container > 940) 
			self.innerWidth( (wpb_column/5)+'px'); 
	});

	clientsCarousel();
}

/* ----------------------------- End Layout Changes ---------------------- */


/* ----------------------------- One Page -------------------------------- */

function codelessOnePage(){
	"use strict";
	$('nav .menu').onePageNav({
	    currentClass: 'current-menu-item',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	});
}

/* ----------------------------- End One Page ---------------------------- */

/* ----------------------------- Sticky Nav ------------------------------ */

function codelessStickyNav(){
	"use strict";
	var opened = false;
	var position = $('.header_wrapper').css('position'); 
	var bool_test = false;
	$(window).scroll(function(){
		var top = $(this).scrollTop(); 

		if(top > stickyNavTop + 300 && !opened){
			
			$('body').addClass('sticky_header'); 

			setTimeout(function(){
				if($('.header_wrapper').hasClass('background--dark')){
					$('.header_wrapper').removeClass('background--dark');
					bool_test = true;
				}
				$('.header_wrapper').css('position', 'fixed').css('visibility', 'visible').addClass('open');
				opened = true; 

			}, 200)
			
		}else if(top == 0){ 
			if( ($('.header_wrapper').hasClass('header_1') || $('.header_wrapper').hasClass('header_4') ) && bool_test){
				$('.header_wrapper').addClass('background--dark');
			}
			$('body').removeClass('sticky_header');
			$('.header_wrapper').removeClass('open').css('position', position); 
			
			opened = false;
			
			
		}  
		
			
	});

	$(window).resize(function(){
		$window_width = $(this).width();
		if($window_width < 980){ 
			$('body').removeClass('sticky_header');
			$('.header_wrapper').removeClass('open').css('position', position); 
			opened = false;
		}
	});
}

/* ----------------------------- End Sticky Nav -------------------------- */

/*------------------------------ Online Functions ------------------------ */ 
function codelessOnlineFunctions(){
	"use strict";

	if($('.sidebar_right #blogmasonry').hasClass('cols3') )
		$('.sidebar_right #blogmasonry').removeClass('cols3').addClass('cols2');

	var page = 'default';
	var ref = $.cookie('cl_sp_ma');
	
	if(typeof ref === 'undefined' || ref.length == 0){
		ref = new URL(document.html).hostname;
		ref = ref.split('.');
		if(ref.length > 2)
			ref = ref[1];
		else
			ref = ref[0];
		$.removeCookie('cl_sp_ma');
		$.cookie('cl_sp_ma', ref, { expires: 1, path: '/'  });
	}

	var href= 'http://codeless.co/specular/join.php?referrer='+ref+'&page='+page;
	$('a[href="http://codeless.co/specular/join.php"]').attr('href', href);
}
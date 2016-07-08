$('body').css('opacity', 0);
$(window).load(function() {
  $('body').css('opacity', 1);
});

 

$(document).ready(function(){
 

/*HomePage Slideshow*/
	$("#home").backstretch([
		"assets/images/hotballoon.jpg",
		"assets/images/beach.jpg",
		"assets/images/road1.jpg"], {fade: 750,
	duration: 3000});
  
/*About Owl Carousel*/
	$("#about-demo").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
	});
	
	
	
	
/*Magnific PopUp*/	  
	$('#about-demo').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: false,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Neha Vavle</small>';
			}
		}
	});

  
  
/*Milestone Number counter effect*/
	$('.counter').counterUp({
		delay: 120,
		time: 2000
	});
  

/*Navigation Vertical Scroll Effect*/

	$('#main-nav a').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
		
		
	

/*Portfolio Image Hover Effect*/
	$('.fig-wrap').hover( function() {
		$(this).find('.img-overlay').fadeIn(300);
	}, function() {
		$(this).find('.img-overlay').fadeOut(100);
	});
	  
	
/*Navbar visible on scroll*/	
	$(window).on('scroll',function() {
		var scrolltop = $(this).scrollTop();
		if(scrolltop >= 215) {
			$('#main-nav').fadeIn(250);
		}
		else if(scrolltop <= 215) {
			$('#main-nav').fadeOut(250);
		}
	}); 
	
	
 
	
	
	 
}); 


/*Portfolio Isotope filter*/	
$(window).load(function(){
var $container = $('.portfoliowrap');
	 $container.imagesLoaded(function () {
    
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: true
        }
    });
 });
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: true
            }
         });
         return false;
    });
});

$(window).resize(function(){ $('.portfoliowrap').isotope('reLayout'); });

/*Animation Reveal on Scroll*/
 $(window).load(function () {
         new WOW().init();
      }); 
	  

var pieData = [
        {
          value: 20,

          color:"#509b9e"
        },
        {
          value : 100-20,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(pieData,null);
	
var pieData = [
        {
          value: 40,
          color:"#509b9e"
        },
        {
          value : 100-40,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(pieData,null);	

	var pieData = [
        {
          value: 65,
          color:"#509b9e"
        },
        {
          value : 100-65,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(pieData,null);	

	var pieData = [
        {
          value: 75,
          color:"#334959"
        },
        {
          value : 100-75,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(pieData,null);	

	var pieData = [
        {
          value: 93,
          color:"#334959"
        },
        {
          value : 100-93,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas4").getContext("2d")).Doughnut(pieData,null);	

		var pieData = [
        {
          value: 85,
          color:"#334959"
        },
        {
          value : 100-85,
          color : "#d1d1d1"
        }
      ];

    var myPie = new Chart(document.getElementById("canvas5").getContext("2d")).Doughnut(pieData,null);	

  
	
	$(document).ready(function(){
	
  
	$('#about-demo').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: false,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Neha Vavle</small>';
			}
		}
	});
 
});
	



	

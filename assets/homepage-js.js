$(document).ready(function(){
  $(".banner-slider").owlCarousel({
  	items:1,
  	loop:true,
  	nav:false,
    dot:true,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:1
        },
        1080:{
        	items:1
        }

    }
  });
});
	$(document).ready(function(){
  $(".brand-slider").owlCarousel({
  	items:1,
  	loop:false,
  	nav:false,
    autoplay:true,
    slideSpeed:300,
    dot:false,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:2
        },
        1080:{
        	items:4
        }

    }
  });
});

$(document).ready(function(){
  $(".mx-banner").owlCarousel({
  	items:1,
  	loop:false,
  	nav:true,
    autoplay:true,
    slideSpeed:300,
    dots:false,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:1
        },
        1080:{
        	items:1
        }

    }
  });
});


 
$('.our-gear-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 2,
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

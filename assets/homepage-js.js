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
    dot:false,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:2
        },
        820:{
          items:2
        }
        1080:{
        	items:4
        }

    }
  });
});

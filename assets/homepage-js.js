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
// Fixed menu menu 
$(document).ready(function(){
  $(".menu-icon").click(function() {
      $(".fixed-desktop-menu").show();
  });
  $(".menu-close-icon").click(function() {
      $(".fixed-desktop-menu").hide();
  });
  $(".hide-show-icon").click(function() {
      $(".brandimagesrotate").toggleClass("active");
  });

});

 
$('.our-gear-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 2,
  dots: true,
  centerMode: true,
  centerPadding: '200px',
  focusOnSelect: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3
      }
    }
  ]
});

// $(document).ready(function(){
//   $(".featuredslider").owlCarousel({
//   	items:1,
//   	loop:false,
//   	nav:false,
//     autoplay:false,
//     slideSpeed:300,
//     dots:true,
//     margin:25,
//     center:true,
//   	responsiveClass:true,
//     responsive:{
//         767:{
//         	items:1
//         },
//         1080:{
//         	items:4
//         }

//     }
//   });
// });


$('.featuredslider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  dots:true,
  responsive: [
    {
      breakpoint: 375,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

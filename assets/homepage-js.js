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

// Demo js
$(document).ready(function(){
  $(".topbrand-text").click(function(){
    $(this).hide();
  });
   $(".brandimages").click(function(){
    $("p").show();
    $("topbrand-text").fadeout(5000);
  });
});



// $('.our-gear-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 2,
//   dots: true,
//   centerMode: true,
//   centerPadding: '200px',
//   focusOnSelect: true,
//     arrows: true,
//     responsive: [
//     {
//       breakpoint: 375,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 3
//       }
//     }
//   ]
// });

$(document).ready(function(){
  $(".our-gear-slider").owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
    autoplay:true,
    slideSpeed:300,
    dots:true,
    margin:25,
    center: true,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:1
        },
        1080:{
        	items:2
        }

    }
  });
});


$(document).ready(function(){
  $(".featuredslider").owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
    autoplay:true,
    slideSpeed:300,
    dots:true,
    margin:25,
    center:true,
  	responsiveClass:true,
    responsive:{
        767:{
        	items:1
        },
        1080:{
        	items:3
        }

    }
  });
});


// $('.featuredslider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   arrows: true,
//   dots:true,
//   responsive: [
//     {
//       breakpoint: 375,
//       settings: {
//         centerMode: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

$(document).ready(function(){
  jQuery(".selection_chip").click(function(){
    console.log(jQuery(this).append('<li><div class="selection_chip shapefilterClick"  attval="Round" title="Round"><span class="icon_"><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.00006 24.0002C3.00006 35.5979 12.4023 45 24.0002 45C35.5984 45 45.0001 35.5979 45.0001 24.0002C45.0001 12.4021 35.5984 3 24.0002 3C12.4023 3 3.00006 12.4021 3.00006 24.0002ZM24.0002 43.7732C13.0798 43.7732 4.22681 34.9204 4.22681 24.0002C4.22681 13.0796 13.0798 4.22677 24.0002 4.22677C34.9209 4.22677 43.7733 13.0796 43.7733 24.0002C43.7733 34.9204 34.9209 43.7732 24.0002 43.7732Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.31769 38.7527H10.5444V29.6404L19.0128 10.2633L24.4626 4.01688L23.5382 3.21037L17.9643 9.59905L9.31769 29.3841V38.7527Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.4557 29.6404V38.7527H38.6825V29.3841L30.0355 9.59907L24.4623 3.2104L23.5379 4.01686L28.9871 10.2633L37.4557 29.6404Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0128 37.7369L24.4626 43.9833L23.5382 44.7898L17.9643 38.4011L9.31769 18.6164V9.24755H10.5444V18.36L19.0128 37.7369Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4623 44.7898L30.0355 38.4011L38.6825 18.6164V9.24757H37.4557V18.36L28.987 37.7369L23.5379 43.9833L24.4623 44.7898Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.7901 23.5382L38.4015 17.9643L18.6167 9.31784H9.24805V10.5446H18.3604L37.7372 19.0128L43.9836 24.4626L44.7901 23.5382Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3604 37.4558H9.24805V38.6826H18.6167L38.4015 30.0364L44.7901 24.4625L43.9836 23.5381L37.7372 28.9879L18.3604 37.4558Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2632 19.0128L29.6398 10.5446H38.7524V9.31784H29.3834L9.59898 17.9643L3.21039 23.5382L4.01688 24.4626L10.2632 19.0128Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3834 38.6826H38.7524V37.4558H29.6398L10.2632 28.9879L4.01688 23.5381L3.21039 24.4625L9.59898 30.0364L29.3834 38.6826Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.49038 32.4707L10.2103 30.0583L9.65199 28.9659L4.93207 31.3783L5.49038 32.4707Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.93207 16.6219L9.65199 19.0347L10.2104 17.9423L5.49043 15.5296L4.93207 16.6219Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.0683 31.3784L38.3487 28.9659L37.7903 30.0583L42.51 32.4707L43.0683 31.3784Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M42.51 15.5296L37.7903 17.9424L38.3487 19.0347L43.0684 16.6219L42.51 15.5296Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5296 5.48916L17.942 10.2095L19.0344 9.65118L16.622 4.93088L15.5296 5.48916Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.3777 4.93088L28.9653 9.65118L30.0577 10.2095L32.4701 5.48916L31.3777 4.93088Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.622 43.0688L19.0344 38.3483L17.942 37.79L15.5296 42.5106L16.622 43.0688Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.4701 42.5106L30.0577 37.79L28.9653 38.3483L31.3777 43.0688L32.4701 42.5106Z" fill="#4E4B66"></path></svg></span></div></li>
'));
  });
});
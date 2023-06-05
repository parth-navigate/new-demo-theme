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
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $("ol").append("<li><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.0913 3.56978C25.4422 3.2176 24.7991 3 24.2122 3C23.6252 3 22.982 3.21758 22.3329 3.56977C21.6754 3.92651 20.9679 4.44528 20.2408 5.10561C18.7858 6.42685 17.2131 8.35022 15.7631 10.7919C12.8614 15.6782 10.4242 22.6856 10.4242 31.2117C10.4242 38.8265 16.5973 45 24.2122 45C31.8269 45 38.0001 38.8265 38.0001 31.2117C38.0001 22.6856 35.5627 15.6782 32.6609 10.7919C31.2109 8.35022 29.6381 6.42686 28.1832 5.10562C27.4561 4.44529 26.7487 3.92652 26.0913 3.56978ZM31.6161 11.4124C34.4136 16.1231 36.7849 22.9178 36.7849 31.2117C36.7849 38.1554 31.1557 43.7848 24.2122 43.7848C17.2685 43.7848 11.6393 38.1554 11.6393 31.2117C11.6393 22.9178 14.0104 16.1231 16.8079 11.4124C18.2076 9.0555 19.7072 7.2316 21.0577 6.00521C21.7333 5.39172 22.3618 4.93657 22.9124 4.63786C23.4713 4.3346 23.9082 4.21517 24.2122 4.21517C24.516 4.21517 24.9529 4.33458 25.5117 4.63785C26.0622 4.93656 26.6908 5.39171 27.3663 6.0052C28.7167 7.23159 30.2164 9.0555 31.6161 11.4124Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7446 29.8267L24.4769 37.7426L25.0837 36.6898L11.3515 28.7739L10.7446 29.8267Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6249 6.51611L10.5749 28.919L11.5211 29.6814L29.5711 7.27851L28.6249 6.51611Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.27 39.5286L21.2986 39.5286V38.3135H13.27V39.5286Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1149 39.4779L25.0231 37.7727L24.5372 36.6589L20.629 38.3641L21.1149 39.4779Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3536 39.2376L23.6936 44.7089L24.7308 44.0758L21.3908 38.6045L20.3536 39.2376Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3377 38.6316L18.0583 42.8473L19.1273 43.4253L21.4066 39.2095L20.3377 38.6316Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1278 3.44971L13.607 38.7631L14.7803 39.0795L24.3011 3.76603L23.1278 3.44971Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7492 31.6169L11.1541 33.855L11.6861 34.9475L16.2813 32.7094L15.7492 31.6169Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.0727 28.7739L23.3403 36.6898L23.9471 37.7426L37.6796 29.8267L37.0727 28.7739Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8532 7.27851L36.9031 29.6814L37.8494 28.919L19.7995 6.51611L18.8532 7.27851Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.1542 38.3135H27.1251V39.5286L35.1542 39.5286V38.3135Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7946 38.3641L23.8867 36.6589L23.4007 37.7727L27.3086 39.4779L27.7946 38.3641Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.033 38.6045L23.6937 44.0758L24.7309 44.7089L28.0703 39.2376L27.033 38.6045Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.0171 39.2096L29.2968 43.4253L30.3657 42.8473L28.086 38.6316L27.0171 39.2096Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.3883 16.9124L26.9762 38.7256L28.1267 39.1166L35.5389 17.3033L34.3883 16.9124Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.1228 3.76605L33.6442 39.0795L34.8175 38.7631L25.2961 3.44971L24.1228 3.76605Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.1427 32.7095L36.7383 34.9475L37.2704 33.855L32.6747 31.6169L32.1427 32.7095Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.0383 10.4459L34.5743 17.5741L35.3531 16.6414L26.8172 9.51318L26.0383 10.4459Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8853 17.3033L20.2976 39.1166L21.4481 38.7256L14.0359 16.9124L12.8853 17.3033Z" fill="#4E4B66"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.6074 9.51318L13.0711 16.6414L13.85 17.5741L22.3862 10.4459L21.6074 9.51318Z" fill="#4E4B66"></path></svg></li>");
  });
});
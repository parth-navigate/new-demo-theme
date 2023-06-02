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

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


$(function() {
  function getCounterData(obj) {
    var days = parseInt($('.e-m-days', obj).text());
    var hours = parseInt($('.e-m-hours', obj).text());
    var minutes = parseInt($('.e-m-minutes', obj).text());
    var seconds = parseInt($('.e-m-seconds', obj).text());
    return seconds + (minutes * 60) + (hours * 3600) + (days * 3600 * 24);
  }

  function setCounterData(s, obj) {
    var days = Math.floor(s / (3600 * 24));
    var hours = Math.floor((s % (60 * 60 * 24)) / (3600));
    var minutes = Math.floor((s % (60 * 60)) / 60);
    var seconds = Math.floor(s % 60);

    console.log(days, hours, minutes, seconds);

    $('.e-m-days', obj).html(days);
    $('.e-m-hours', obj).html(hours);
    $('.e-m-minutes', obj).html(minutes);
    $('.e-m-seconds', obj).html(seconds);
  }

  var count = getCounterData($(".counter"));

  var timer = setInterval(function() {
    count--;
    if (count == 0) {
      clearInterval(timer);
      return;
    }
    setCounterData(count, $(".counter"));
  }, 1000);
});


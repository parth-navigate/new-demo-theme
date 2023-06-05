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


var $dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm');
var months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

var days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function update(){
  var date = new Date();
  
  var ampm = date.getHours() < 12
             ? 'AM'
             : 'PM';
  
  var hours = date.getHours() == 0
              ? 12
              : date.getHours() > 12
                ? date.getHours() - 12
                : date.getHours();
  
  var minutes = date.getMinutes() < 10 
                ? '0' + date.getMinutes() 
                : date.getMinutes();
  
  var seconds = date.getSeconds() < 10 
                ? '0' + date.getSeconds() 
                : date.getSeconds();
  
  var dayOfWeek = days[date.getDay()];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  
  var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
  
  
  $hOut.text(hours);
  $mOut.text(minutes);
  $sOut.text(seconds);
  $ampmOut.text(ampm);
  $dOut.text(days);
  $('#day1').text(dayOfWeek)
} 

update();
window.setInterval(update, 1000);


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});


$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});

$(document).ready(function(){
  $("button").click(function(){
    alert("Background color = " + $("p").css("background-color"));
  });
});
// price slider

// $( function() {
// 		$( ".slider-range" ).slider({
// 			range: true,
// 			min: 0,
// 			max: 500,
// 			values: [ 75, 300 ],
// 			slide: function( event, ui ) {
// 				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
// 			}
// 		});
// 		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
// 			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
// 	} );


// animation for nav bar fade-in on scroll 
$(document).scroll(function(){
  var y = $(this).scrollTop();

  if (y > 100) {
    $('.top-bar').addClass('scrolled');
  } else {
    $('.top-bar').removeClass('scrolled');
  }
});

// gallery slide show for portfolio section where it's just one thumbnail
$(document).ready(function() {
	$('.magnific-gallery-tyme, .magnific-gallery-shelter').each(function(index , value){
	  	var gallery = $(this);
	  	var galleryImages = $(this).data('links').split(',');
	    var items = [];
	    for(var i=0;i<galleryImages.length; i++){
	      items.push({
	        src:galleryImages[i],
	        title:''
	      });
	    }
	    gallery.magnificPopup({
	      mainClass: 'mfp-fade',
	      items:items,
	      gallery:{
	        enabled:true,
	        tPrev: $(this).data('prev-text'),
	        tNext: $(this).data('next-text')
	      },
	      type: 'image'
	    });
	});	
});

// animation for after submitting contact form 
var contactFormAnimate = function() {
	$('#contactForm').fadeOut('slow');
	setInterval(function(){
		$('#form-submit-thanks').fadeIn();
	},1000)
};

// remove animation classes for mobile devices
var windowWidth = $(window).width();

if (windowWidth < 768) {
	$('#design-and-dev').removeClass('fadeInLeft');
	$('#tech-consulting').removeClass('fadeInUp');
	$('#it-services').removeClass('fadeInRight');
	$('#it-clients').removeClass('fadeInUp');
	$('#about-image').parent().removeClass('fadeInUp');
}

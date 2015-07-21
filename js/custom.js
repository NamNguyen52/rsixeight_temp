$(document).scroll(function(){
  var y = $(this).scrollTop();

  if (y > 100) {
    $('.top-bar').addClass('scrolled');
  } else {
    $('.top-bar').removeClass('scrolled');
  }
});

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

var contactFormAnimate = function() {
	$('#contactForm').fadeOut('slow');
	setInterval(function(){
		$('#form-submit-thanks').fadeIn();
	},1000)
};
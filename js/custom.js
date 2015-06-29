$(document).scroll(function(){
  var y = $(this).scrollTop();

  if (y > 100) {
    $('.top-bar').addClass('scrolled');
  } else {
    $('.top-bar').removeClass('scrolled');
  }
});
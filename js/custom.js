$(document).scroll(function(){
  var y = $(this).scrollTop();

  if (y > 100) {
    $('.top-bar').addClass('scrolled');
  } else {
    $('.top-bar').removeClass('scrolled');
  }
});

$("#map-info-toggle").hover(
  function () {
    $("#map-marker-info-box").css('display', 'block');
  }, 
  function () {
    $("#map-marker-info-box").css('display', 'none');
  }
);
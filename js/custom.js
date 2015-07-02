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
    $("#map-marker-info-box").animate({'opacity': '1'}, 400);
  }, 
  function () {
    $("#map-marker-info-box").animate({'opacity': '0'}, 400);
  }
);
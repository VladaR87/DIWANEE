jQuery(document).ready(function($){
  $('.menu-ico').on('click', function(){
    $('.mobile-nav-wrapper').slideToggle();
  });

  $(".about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000, function(){
      $('.mobile-nav-wrapper').slideUp();
    });
  });
  $(".jobs").click(function() {
    $('html, body').animate({
        scrollTop: $("#jobs").offset().top - 50
    }, 2000, function(){
      $('.mobile-nav-wrapper').slideUp();
    });
  });
  $(".contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
    }, 2000, function(){
      $('.mobile-nav-wrapper').slideUp();
    });
  });

});

jQuery(document).ready(function($){
  $('.menu-ico').on('click', function(){
    $('.mobile-nav-wrapper').slideToggle();
  });

  $(".about").click(function() {
    $('.mobile-nav-wrapper').css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });
  $(".jobs").click(function() {
    $('.mobile-nav-wrapper').css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#jobs").offset().top - 50
    }, 2000);
  });
  $(".contact").click(function() {
    $('.mobile-nav-wrapper').css('display', 'none');
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
    }, 2000);
  });

});

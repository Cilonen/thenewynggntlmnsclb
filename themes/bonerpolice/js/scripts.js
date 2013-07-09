(function ($) {
$(document).ready(function(){
  $('.front #header, .view-audio').css({'height':($(window).height())+'px'});

  $(window).resize(function(){
    $('.front #header, .view-audio').css({'height':($(window).height())+'px'});
  });
});

$(document).ready(function(){
  $('.view-audio').css({'height':(($(window).height()) - 25)+'px'});

  $(window).resize(function(){
    $('.view-audio').css({'height':(($(window).height()) - 25)+'px'});
  });
});

$(document).ready(function(){
  $('.background-cover').css({'height':(($(window).height()) - 158)+'px'});

  $(window).resize(function(){
    $('.background-cover').css({'height':(($(window).height()) - 158)+'px'});
  });
});

  // Placement for the Logo at the top of the page
  $(document).ready(function(){

      $('.front #logo').css({
          position:'absolute',
          left: ($(window).width() - $('#logo').outerWidth())/2,
          top: ($(window).height() - $('#logo').outerHeight())/2
      });

  });

  $(window).resize(function(){

      $('.front #logo').css({
          position:'absolute',
          left: ($(window).width() - $('#logo').outerWidth())/2,
          top: ($(window).height() - $('#logo').outerHeight())/2
      });

  });

  $(document).ready(function(){

      $('.front #logo').click(function(){
    $('html, body').animate({scrollTop: ($(window).height())+'px' }, "slow");
    return false;
});

  });

  // Homepage rotator.
    $(document).ready(function(){

      $('.view-audio .view-content').bxSlider({
      mode: 'vertical',
      easing: 'linear',
      speed: 1000,
      auto: false,
      controls: true,
      useCSS: true,
    });
  });

})(jQuery);

$(document).ready(function() {
  $(window).scroll(function(){
    $('.fadein').each(function(i){
      var bot_object = $(this).position().top + $(this).outerHeight();
      var bot_window = $(window).scrollTop() + $(window).height();

      if (bot_window > bot_object) {
        $(this).animate({'opacity':'1'},2000);
      }
    });
  });
});
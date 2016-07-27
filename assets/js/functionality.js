$(document).ready(function(){


/* ==========================================================================
   Adding logic for SS images on responsive design. AKA Breathing room.
   ========================================================================== */

(function($) {
  function imageBreathingRoom() {
    var colsize = $('.main-content').width();
    $('.main-content img').each(function() { 
      if(($(this).width() + 300) >= colsize ) {
        $(this).addClass('left-alone');
        if($(this).parent().hasClass('captionImage')) {
          $(this).parent().addClass('left-alone');
        }
      }
      else {
        $(this).removeClass('left-alone');
        if($(this).parent().hasClass('captionImage')) {
          $(this).parent().removeClass('left-alone');
        }
      }
    });
  }
  imageBreathingRoom();
  var resizeTimer;
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageBreathingRoom();
    }, 200);
  });
})(jQuery);


/* ==========================================================================
   Remove empty paragraph tags
   ========================================================================== */

(function($) {
  $('p:empty').remove();
})(jQuery);


}); // End doc ready
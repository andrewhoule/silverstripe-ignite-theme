
/* ==========================================================================
   Adding logic for SS images on responsive design. AKA Breathing room.
   ========================================================================== */

(function($) {

  // Function for better aesthetics on responsive SS images
  function imageBreathingRoom() {

    // Vars
    var templateContentClass = 'template-content';
    var colSize = $('.' + templateContentClass).width();
    var noFloatClass = 'no-float';
    var captionImageClass = 'captionImage';

    // Deal with each image in template content
    $('.' + templateContentClass + ' img').each(function() {
      if(($(this).width() + 300) >= colSize ) {
        $(this).addClass(noFloatClass);
        if($(this).parent().hasClass(captionImageClass)) {
          $(this).parent().addClass(noFloatClass);
        }
      } else {
        $(this).removeClass(noFloatClass);
        if($(this).parent().hasClass(captionImageClass)) {
          $(this).parent().removeClass(noFloatClass);
        }
      }
    });
  }

  // Do stuff on doc ready
  $(document).ready(function() {
    imageBreathingRoom();
  });

  // Do stuff on window resize
  $(window).resize(function() {
    imageBreathingRoom();
  });

})(jQuery);


/* ==========================================================================
   Remove empty paragraph tags
   ========================================================================== */

(function($) {
  $(document).ready(function(){
    $('p:empty').remove();
  });
})(jQuery);

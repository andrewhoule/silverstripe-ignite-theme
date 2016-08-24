
/* ==========================================================================
   Adding logic for SS images on responsive design. AKA Breathing room.
   ========================================================================== */

(function($) {
  function imageBreathingRoom() {
    var colsize = $('.main-content').width();
    var leftClass = 'left-alone';
    var captionImageClass = 'captionImage';
    var $this

    $this = $(this);

    $('.main-content img').each(function() {
      if(($this.width() + 300) >= colsize ) {
        $this.addClass(leftClass);
        if($this.parent().hasClass('captionImage')) {
          $this.parent().addClass(leftClass);
        }
      } else {
        $this.removeClass(leftClass);
        if($this.parent().hasClass('captionImage')) {
          $this.parent().removeClass(leftClass);
        }
      }
    });
  }

  $(document).ready(function(){
    imageBreathingRoom();
  });

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
  $(document).ready(function(){
    $('p:empty').remove();
  });
})(jQuery);


/* ==========================================================================
   Get SVG working for older versions of IE / * Requires SVG4Everybody
   ========================================================================== */

(function($) {
  $(document).ready(function(){
    svg4everybody();
  });
})(jQuery);

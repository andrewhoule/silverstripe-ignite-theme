$(document).ready(function(){


/* ==========================================================================
   Adding some logic to deal with wrapping text around floating image on responsive design. AKA Breathing room.
   ========================================================================== */

function imageBreathingRoom() {
  var colsize = $('.main-content').width();
  $('.main-content img').each(function() { 
      if(($(this).width() + 400) >= colsize ) {
      $(this).addClass('left-alone');
    }
    else {
      $(this).removeClass('left-alone');
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


}); // End doc ready
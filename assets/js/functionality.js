$(document).ready(function(){


/* ==========================================================================
   Adding some logic to deal with wrapping text around floating image on responsive design. AKA Breathing room.
   ========================================================================== */

var resizeTimer;
$(window).resize(function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
   var colsize = $('.main-content').width();
    $('.main-content img').each(function() { 
    if( ($(this).width() + 400) >= colsize ) {
      $(this).addClass('left-alone');
    }
    else {
      $(this).removeClass('left-alone');
    }
   });
  }, 200);
});
var colsize = $('.main-content').width();
$('.main-content img').each(function() { 
  if( ($(this).width() + 400) >= colsize ) {
    $(this).addClass('left-alone');
  }
});


}); // End doc ready
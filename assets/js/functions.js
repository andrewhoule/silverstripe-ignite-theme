$(document).ready(function(){


/* ==========================================================================
   Tabs
   ========================================================================== */

$(".tab-content").hide(); // Hide all tab content
$(".tabs").each(function() { // Active first tab
	$(this).find("> ul > li:first").addClass("active").show(); //Activate first tab
	$(this).find(".tab-content:first").show();
});
$(".tabs li").click(function() {
    $(this).parent().parent().find(".tab-content").hide();
    var selected_tab = $(this).find("a").attr("href");
    $(selected_tab).fadeIn();
    $(this).parent().find("li").removeClass('active');
    $(this).addClass("active");
    return false;
});
   

}); // End doc ready
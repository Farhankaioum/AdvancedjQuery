$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
   //$(".red-box").fadeOut(2000);
   //$(".red-box").fadeIn(2000);
   //$(".red-box").fadeTo(2000, 0.5);
   //$(".red-box").fadeToggle();
});

$(function(){
	$(".red-box").hide(5000);
	$(".red-box").show(3000);
	$(".red-box").toggle(1000);
});
var scroll = new SmoothScroll('a[href*="#"]');

// fix lines appearing when you reload in middle of page
$(window).scroll(function(){
	// $(".line").css("width", "10%");
	var width = (15 - ($(window).scrollTop() / 20)).toString() + "%";
	// console.log(width)
    $(".line").css("width", width);
  });
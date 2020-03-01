function markCurrentLink(target) {
  $('.nav-link').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    } else {
      $(this).removeClass('current');
    }
  });
}


function initJS() {
	markCurrentLink()
	// var scroll = new SmoothScroll('a[href*="#"]');

	// fix lines appearing when you reload in middle of page
	$(window).scroll(function(){
		var lines = $(".line");
		var side_title = $('.section-side-title-fixed');
		var width = (15 - ($(window).scrollTop() / 20)).toString() + "%";
		lines.css("width", width);
		if ($(window).scrollTop() > 300) {
			lines.fadeOut()
		} else {
			lines.fadeIn()
		}
    if ($(window).scrollTop() > 200) {
        side_title.fadeIn();
    } else {
        side_title.fadeOut();
    }
	});

	$(".lazy").unveil(100, function() {
    $(this).on('load', function() {
      this.style.opacity = 1;
    });
  });
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// navbar open
$('.navbar-collapse').on('shown.bs.collapse', function() {
	$('#nav-mobile').addClass("show-background-color");
});

// navbar close
$('.navbar-collapse').on('hide.bs.collapse', function() {
	$('#nav-mobile').removeClass("show-background-color");
});

$(function() {
  const swup = new Swup();
	swup.on('contentReplaced', function() {
	  initJS();
	});
});

initJS()
var btnTop = $(".btn-top")
$(window).on("scroll", function () {
	if ($(window).scrollTop() >= 20) {
		btnTop.fadeIn();
	} else {
		btnTop.fadeOut();
	}
});


btnTop.on("click", function () {
	$("html,body").animate({scrollTop:0}, 600);
});

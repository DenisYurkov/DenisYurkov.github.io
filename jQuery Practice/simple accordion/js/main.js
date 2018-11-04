var accordion = function () {
	var data = $('.accordion').attr("data-accordion");

	$('.accordion-header').on('click' , function () {
		if (data === "close") {
			$(".accordion-body").slideUp();
			if ($(this).hasClass("active")) {
				$(this).toggleClass("active")
			} 
			else {
				$(".accordion-header").removeClass("active");
				$(this).toggleClass("active");
			}
		} 
		else {
			$(this).toggleClass("active");
		}
		$(this).next(".accordion-body").not("animated").slideToggle();
	});
}
accordion();
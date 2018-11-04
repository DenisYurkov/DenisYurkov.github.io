(function($) {
	$(function() {
		$('.icon').on('click', function () {
			$(this).closest('.menu').toggleClass('menu-open');
		});
	});
})(jQuery); 
//hide() hides items
//show() show items

/*
The animation captures only the height of the blocks
slideUp()
slideDown()
slideToggle()
*/

//Block disappears on click
$(".anim").click(function () {
	$(this).hide(800);
});

//The block disappears and shows a modal window
$(".anim").hide("slow", function () {
	alert("Hello!");
});

//Opens and closes the text when you click on the title
function changeClass() {
	$(this).prev().toggleClass('active')
}
$(function () {
	$('article h2').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});
});


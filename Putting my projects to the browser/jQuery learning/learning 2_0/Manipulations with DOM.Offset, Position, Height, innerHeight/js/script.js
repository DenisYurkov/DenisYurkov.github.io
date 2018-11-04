//Method offset
var p = $('.first');
var offset = p.offset();
p.html('left:' + offset.left + ', top:' + offset.top);
//We set our values ​​using offset
$('.third').offset({top:11, left:50});
//We used method offset and position
var a = $('.four');
var position = a.position();
a.html('left:' + position.left + ', top:' + position.top);
//Method height
function ShowHeight(element,height) {
	$('.button__end').text(" Height of the + element " + " is " + height);
}
$("#get__Paragraph").click(function () {
	ShowHeight("paragraph",$(".button__text").height());
});

$("#get__Document").click(function () {
	ShowHeight(document,$(document).height());
});

$("#get__Window").click(function () {
	ShowHeight(window,$(window).height());
});
//Method innerHeight
var p = $("p:first");
$("p:last").text('innerHeight:' + p.innerHeight());

/*Color Example*/

$("h1").css("color","green");
$("h1").html("New Text");

/*Button Example*/

$('#bth_start').click(function () {
	$("#message")
		.html("Message")
		.css("background-color", "green")
		.parent()
		.css("background-color", "fff4dd")
		.width(150)
		.height(80)
});

$('#bth_reset').click(function () {
	location.reload();
});
var fafffsa = fsdfsfsfs;
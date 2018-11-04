$('a').click(function (event) {
	alert("Hello People");
	return false;
});

$("header").click(function (event) {
	alert("Hello World");
});


$("#quantity").keyup(function () {
	var Value = $(this).val();
	$('#msg').text(Value);
});
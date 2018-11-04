$('.five').replaceWith('<h2>New Text</h2>');
$('<h2>New text</h2>').replaceAll('.second');
$('.third').wrap('<div class="new"> Text </div> ');
$('.four').clone().appendTo('.six');

var p;
	$('button').click(function () {
		if (p) {
			p.appendTo('.start');
			p = null;
		} else {
			p = $('.hello').detach();
		}
});

$('.four').empty();
$('.first').remove();

// slow manipulations DOM
var $myDiv = $('<div>Hello</div>').attr({'id':'my', 'class':'page'}).appendTo('#content');
//fast manipulations DOM
var myDiv = document.createElement('div');
	myDiv.id = 'my';
	myDiv.className = 'page';

$('p').after("<hr>");
$('<hr>').insertAfter('p');
$('<hr>').insertBefore('p');
$('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ipsa aut!</p>').appendTo("#content");
$('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugiat, voluptatem!</p>').prependTo('#content');

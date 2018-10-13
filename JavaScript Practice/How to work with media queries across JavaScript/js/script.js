//var screen = window.innerHeight;
//var screen = window.innerWidth;
//var screen = document.documentElement.clientWidth;
//var screen = document.documentElement.clientHeight;
//console.log(screen); 
if (matchMedia) {
	var screen = window.matchMedia("(max-width: 768px)");
	screen.addListener(changes);
	changes(screen);
}

function changes(screen) {
	var message = (screen.mathes ? "less " : " more") + " than 768px";
	document.getElementById("now").firstChild.nodeValue=message;	
}

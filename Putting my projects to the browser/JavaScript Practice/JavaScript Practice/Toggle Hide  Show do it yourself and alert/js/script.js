// Toggle Hide/Show script

function myFunction() {
	var x = document.getElementById("myDiv");
	if (x.style.display === "none") {
		x.style.display = "block";
	}else {
		x.style.display = "none";
	}
}

// Alert Button script

var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length  ;  i++) {
	close[i].onclick=function(){
		var div = this.parentElement;
		div.style.opacity = "0";
		setTimeout(function(){
			div.style.display = "none";
		}, 600);
	}
}

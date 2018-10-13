function move() {
	var elem = document.getElementById("myBar");
	var width = 10;
	var id = setInterval(frame, 10);
	function frame() {
		if (width>=100) {
			clearInterval(id);
		}
		else{
			width++;
			elem.style.width = width + '%';
			document.getElementById('label').innerHTML = width*1 + '%';
		}
	}
}
var mobal = document.getElementById('myMobal');
var bth = document.getElementById('myBth');
var span = document.getElementsByClassName('close')[0];

bth.onclick = function () {
	mobal.style.display = 'block';
}

span.onclick = function () {
	mobal.style.display ='none';
}

window.onclick = function (event) {
	if (event.target == mobal) {
		mobal.style.display = 'none';
	}
}
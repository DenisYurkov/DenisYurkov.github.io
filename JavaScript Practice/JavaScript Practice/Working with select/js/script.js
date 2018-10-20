function fun1() {
	var sel = document.getElementById('mySelect').selectedIndex;
	var options= document.getElementById('mySelect').options;
	alert('Выбрана опция ' +options[sel]);
}
function fun2() {
	var rng=document.getElementById('r1');
	var p=document.getElementById('one');
	p.innerHTML=rng.value;
}
function fun3() {
	var rng=document.getElementById('r1');
	var i1=document.getElementById('i1');
 	i1.value=rng.value;
}
function fun4() {
	var rng=document.getElementById('r1');
	var div=document.getElementById('test');
 	div.style.width=rng.value + 'px'
}


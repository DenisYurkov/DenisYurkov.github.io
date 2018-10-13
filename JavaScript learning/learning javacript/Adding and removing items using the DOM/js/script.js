function test() {
	var element = document.getElementById('block-1');
	var link = document.createElement('a');
	var br = document.createElement('br');
	
	link.innerHTMl = 'Go to google';
	link.href = 'https://www.google.com/';

	element.appendChild(br);
	element.appendChild(link);
}
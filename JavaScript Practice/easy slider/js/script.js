var img =[
	'img/21c9HdA-czU.jpg',
	'img/ovP-QoSY2MY.jpg',
	'img/WXISCJaCeVQ.jpg',
	'img/j-VWUx-Wb5o.jpg',
	'img/images.jpg',
	'img/images (1).jpg',
	'img/images (2).jpg',
	'img/images (3).jpg'
];
var num = 0;
function next() {
	var slider = document.getElementById('slider');
	num++;
	if (num>= img.length) {
		num = 0;
}
	slider.src = img[num];
}
function prev(){
	var slider = document.getElementById('slider');
	num--;
	if (num < 0) {
		num = img.length-1;
	}
	slider.src = img[num];
}
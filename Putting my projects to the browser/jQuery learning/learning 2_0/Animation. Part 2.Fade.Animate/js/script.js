//fadeOut() Fading
//fadeTo() Flowering
//fadeToggle() It is fading and blooming
//fadeTo()  Changes the opacity value
//animate() The animate function uses css animation in jQuery
$(".anim").click(function () {
	$(this).fadeOut("slow");
	$(this).fadeIn("fast");
});

$(".anim").click(function () {
	$(this).fadeTo("slow", 0.4);
});

$(".anim").animate({'height':'50px'})
			.animate({'opacity':'0.5'})
		  		.animate({'width':'121px'},{queue:false})

$(document).ready(function() {



/*1 lesson*/


	$('p.lead').css('border', 'solid 3px orange');



	$('h2').parent().css('border', 'solid 3px orange');


	$('p:last').css('border', 'solid 3px orange');


	



	$('a[href$=".com"]').css('border', 'solid 3px orange');

/*2 Lesson*/

		$('h2').dblclick(function(){
			$(this).toggleClass('blue')
		});

		$('h2').mouseenter(function(){
			$(this).toggleClass('blue')
		});
		$('h2').mouseleave(function(){
			$(this).toggleClass('blue')
		});
		$('input').focus(function(){
			console.log('Поле в фокусе!')
		});
			$('input').change(function(){
				$('#userName').text(', ' + $(this).val());
		});
		$('input').keyup(function(){
			$('#userName').text(' , ' + $(this).val());
		});
/*3 lesson*/
	$('p:first').hide(5000).delay(1000).show(1000)

	$('img').click(function(){
		$(this).fadeOut(500, function(){
			$(this).attr('src', 'https://www.infoniac.ru/upload/medialibrary/d65/d65b6ab2eb91451effc612b4ad818bed.jpg').fadeIn(500);
		});
	});

		$('h2').click(function(){
			$(this).removeClass('blue')
		});

		$('.lead').click(function(){
			$(this).text('Hello');
			$(this).html('Грусть <em>Полная</em>');
			$(this).append(' Lesson');
			$(this).prepend('Грусть <em>Полная</em>.');
			$(this).after('Грусть <em>Полная</em>');
			$(this).wrap('div class="container"></div>');
			$(this).unwrap('div class="container"></div>');
			$(this).empty('Грусть <em>Полная</em>');
			$(this).remove();
			$(this).append('img');
		});

});
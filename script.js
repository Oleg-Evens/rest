$(document).ready(function(){

	$('.present-input').mask('+7(999)-999-99-99');

	//accordion
	$('.char-item').on('click', function(){
		$('.char-item').css('background','#fff');
		$('.char-item').css('color','#606060');
		$(this).css('background','#871618');
		$(this).css('color','#fff');
		let now = $(this).attr('data-num');
		$('.char-item-content').css('display','none');
		$('.char-item-content[data-num="'+now+'"]').css('display','flex');
	});

	//clock
	let seconds = $('.seconds').html();
	let minutes = $('.minutes').html();
	let hours = $('.hours').html();
	var timer = setInterval(function(){
		if(seconds == 0) {
			seconds = 60;
			minutes-=1;
			if(minutes >= 10) {
				$('.minutes').html(minutes);
			} else {
				$('.minutes').html('0' + minutes);
			}
			if(minutes == 0) {
				if(hours == 0) {
					clearInterval(timer);
				}
				minutes = 60;
				hours-=1;
				$('.hours').html('0' + hours);
			}
		}
		seconds-=1;
		if(seconds >= 10) {
			$('.seconds').html(seconds);
		} else {
			$('.seconds').html('0' + seconds);
		}
	},1000)

	//change color header
	setInterval(function(){
		if($('body, html').scrollTop() > 0) {
			$('.header-main').css('background','rgba(0,0,0,0.5)');
		} else {
			$('.header-main').css('background','#ac4445');
		}
	},50)
	$('.header-item').on('click', function(){
		if($(this).attr('data-el') == 1) {
			$('body, html').stop().animate({scrollTop: $('.el1').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 2) {
			$('body, html').stop().animate({scrollTop: $('.el2').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 3) {
			$('body, html').stop().animate({scrollTop: $('.el3').offset().top-50}, 1000, 'swing');			
		} else if($(this).attr('data-el') == 4) {
			$('body, html').stop().animate({scrollTop: $('.el4').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 5) {
			$('body, html').stop().animate({scrollTop: $('.el5').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 6) {
			$('body, html').stop().animate({scrollTop: $('.el6').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 7) {
			$('body, html').stop().animate({scrollTop: $('.el7').offset().top-50}, 1000, 'swing');
		} else if($(this).attr('data-el') == 8) {
			$('body, html').stop().animate({scrollTop: $('.el8').offset().top-50}, 1000, 'swing');
		}
	});
	$('.bushnell-hit').on('click', function(){
		$('body, html').stop().animate({scrollTop: $('.aimstock-main').offset().top-50}, 1000, 'swing');
	});




	$('.close-inf').on('click', function(){
		$('.blackout').css('display','none');
		$('.aim-modal-catalog').css('display','none');
	});

	$('.get-more').on('click', function(){
		$('.blackout').css('display','block');
		$('.aim-modal-catalog').css('display','block');
		$('.aim-modal-name').html($(this).attr('data-name'));
		for(let i = 1; i < 9; i++) {
			if(i == 1) {
				$('.aim-over-main-img').attr('src', $(this).attr('data-f'+i));
			}
			$('.aim-el'+i).attr('src', $(this).attr('data-f'+i));
		}
		$('.aim-modal-text[data-find="1"]').html($(this).attr('data-content1'));
		$('.aim-modal-text[data-find="1"]').css('display','block');
		$('.aim-modal-text[data-find="2"]').html($(this).attr('data-content2'));
		$('.aim-modal-text[data-find="3"]').html($(this).attr('data-content3'));
	});

	$('.aim-menu-item').on('click', function() {
		$('.aim-menu-item').css('border-bottom', '1px gray solid');
		$(this).css('border-bottom', '3px #871618 solid');
		$('.aim-modal-text[data-find="'+$(this).attr('data-find')+'"]');
		$('.aim-modal-text').css('display','none');
		$('.aim-modal-text[data-find="'+$(this).attr('data-find')+'"]').css('display','block');
	});

	$('.aim-imgs img').on('click', function(){
		$('.aim-imgs img').css('border','1px transparent solid');
		$(this).css('border','1px #871618 solid');
		$('.aim-over-main-img').attr('src',$(this).attr('src'));
	});

	$('.policy_sogl').on('click', function(){
		$('.modal-sogl').css('display','block');
		$('.blackout').css('display','block');
	});

	$('.policy_conf').on('click', function(){
		$('.modal-conf').css('display','block');
		$('.blackout').css('display','block');
	});

	$('.close-modal').on('click', function(){
		$('.modal-sogl').css('display','none');
		$('.modal-conf').css('display','none');
		$('.blackout').css('display','none');
	});
});
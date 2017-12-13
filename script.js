$(document).ready(function(){

	$('.reviews').slick({
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      dots: true,
      slidesToScroll: 1
    });

	$('.input-tel').mask('+7(999)-999-99-99');

	$('.input-tel-order').mask('+7(999)-999-99-99');

	$('.present-input').mask('+7(999)-999-99-99');

	//accordion
	$('.char-item').on('click', function(){
		$('.char-item').css('background','#fff');
		$('.char-item').css('color','#606060');
		$(this).css('background','linear-gradient(to top, #ef9d2b, #f52620)');
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
			$('.header-main').css('background','#2a2a2a');
		}
		if($('body').width() > 1200) {
			$('.header-main').css('left','0');
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

	$('.arrow-top').on('click',function(){
		$('body, html').stop().animate({scrollTop: 0}, 1000, 'swing');
	});


	$('.close-inf').on('click', function(){
		$('.blackout').css('display','none');
		$('.aim-modal-catalog').css('display','none');
		$('.arrow-right').css('display','none');
		$('.arrow-left').css('display','none');
		$('.modal-order').css('display','none');
		$('body').css('overflow-y','scroll');
	});

	$('.close-inf-e').on('click', function(){
		$('.blackout').css('display','none');
		$('.aim-modal-catalog').css('display','none');
		$('.arrow-right').css('display','none');
		$('.arrow-left').css('display','none');
		$('.modal-order').css('display','none');
		$('body').css('overflow-y','scroll');
	});

	$('.get-more').on('click', function(){
		$('.arrow-right').css('display','block');
		$('.arrow-left').css('display','block');
		$('body').css('overflow','hidden');
		curr_slide = $(this).attr('data-numed');
		$('.blackout').css('display','block');
		$('.aim-modal-catalog').css('display','block');
		$('.price-now').html($(this).attr('data-price'));
		$('.aim-modal-name').html($(this).attr('data-name'));
		for(let i = 1; i < 9; i++) {
			if(i == 1) {
				if($(this).attr('data-f'+i) != '') {
					$('.aim-over-main-img').attr('src', $(this).attr('data-f'+i));
				} else {
					$('.aim-over-main-img').attr('src', 'qwe');
				}
			}
			$('.aim-el'+i).attr('src', $(this).attr('data-f'+i));
		}
		$('.aim-modal-text[data-find="1"]').html($(this).attr('data-content1'));
		$('.aim-modal-text[data-find="1"]').css('display','block');
		$('.aim-modal-text[data-find="2"]').html($(this).attr('data-content2'));
		$('.aim-modal-text[data-find="3"]').html($(this).attr('data-content3'));
	});

	$('.catalog-item').on('click', function(){
		$('body').css('overflow','hidden');
		curr_slide = $(this).children('.order-block').children('.get-more').attr('data-numed');
		$('.arrow-right').css('display','block');
		$('.arrow-left').css('display','block');
		$('.blackout').css('display','block');
		$('.aim-modal-catalog').css('display','block');
		$('.price-now').html($(this).children('.order-block').children('.get-more').attr('data-price'));
		$('.aim-modal-name').html($(this).children('.order-block').children('.get-more').attr('data-name'));
		for(let i = 1; i < 9; i++) {
			if(i == 1) {
				$('.aim-over-main-img').attr('src', $(this).children('.order-block').children('.get-more').attr('data-f'+i));
			}
			if($('.aim-el'+i).attr('src', $(this).children('.order-block').children('.get-more').attr('data-f'))+i == '') {
				alert(1);
			} else {
				$('.aim-el'+i).attr('src', $(this).children('.order-block').children('.get-more').attr('data-f'+i));
			}
		}
		$('.aim-modal-text[data-find="1"]').html($(this).children('.order-block').children('.get-more').attr('data-content1'));
		$('.aim-modal-text[data-find="1"]').css('display','block');
		$('.aim-modal-text[data-find="2"]').html($(this).children('.order-block').children('.get-more').attr('data-content2'));
		$('.aim-modal-text[data-find="3"]').html($(this).children('.order-block').children('.get-more').attr('data-content3'));
	});

	$('.aim-menu-item').on('click', function() {
		$('.aim-menu-item').css('border-bottom', '1px gray solid');
		$(this).css('border-bottom', '3px red solid');
		$('.aim-modal-text[data-find="'+$(this).attr('data-find')+'"]');
		$('.aim-modal-text').css('display','none');
		$('.aim-modal-text[data-find="'+$(this).attr('data-find')+'"]').css('display','block');
	});

	$('.aim-imgs img').on('click', function(){
		$('.aim-imgs img').css('border','1px transparent solid');
		$(this).css('border','1px #2c7d36 solid');
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

	$('.bars').on('click', function(){
		if($('.header-main').css('left') == '0px') {
			$('.header-main').css('left','-1000px');
		} else {
			$('.header-main').css('left','0');
		}
	});

	var curr_slide = 1;

	$('.arrow-right').on('click', function(){
		$('.modal-order').css('display','none');
		if(curr_slide == 8) {
			curr_slide = 0;
		}
		curr_slide++;
		$('.price-now').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-price'));
		$('.aim-modal-name').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-name'));
		for(let i = 1; i < 9; i++) {
			if(i == 1) {
				$('.aim-over-main-img').attr('src', $('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-f'+i));
			}
			$('.aim-el'+i).attr('src', $('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-f'+i));
		}
		$('.aim-modal-text[data-find="1"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content1'));
		$('.aim-modal-text[data-find="1"]').css('display','block');
		$('.aim-modal-text[data-find="2"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content2'));
		$('.aim-modal-text[data-find="3"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content3'));
	});

	$('.arrow-left').on('click', function(){
		$('.modal-order').css('display','none');
		if(curr_slide == 1) {
			curr_slide = 9;
		}
		curr_slide--;
		$('.price-now').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-price'));
		$('.aim-modal-name').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-name'));
		for(let i = 1; i < 9; i++) {
			if(i == 1) {
				$('.aim-over-main-img').attr('src', $('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-f'+i));
			}
			$('.aim-el'+i).attr('src', $('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-f'+i));
		}
		$('.aim-modal-text[data-find="1"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content1'));
		$('.aim-modal-text[data-find="1"]').css('display','block');
		$('.aim-modal-text[data-find="2"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content2'));
		$('.aim-modal-text[data-find="3"]').html($('.catalog-item:nth-child('+curr_slide+')').children('.order-block').children('.get-more').attr('data-content3'));
	});

	$('.order-item').on('click', function() {
		$('.modal-order').css('display','flex');
	});

	$('.close-modal-window').on('click', function() {
		$('.modal-order').css('display','none');
	});
});
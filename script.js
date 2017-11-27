$('.other-img').on('click',function() {
	var target = $(this).parents().children('.over-img');
	target.css('opacity','0');
	let src = $(this).attr('src');
	setTimeout(function(){
		target.css('opacity','1');
		target.attr('src',src);
	},500);
});
var b1 = 1; 
setInterval(function(){
	$('.b1 .over-img').css('opacity','0');
	setTimeout(function(){
		b1++;
		$('.b1 .over-img').css('opacity','1');
		if(b1 == 5) {
			b1 = 1;
		}
		if(b1 == 1) $('.b1 .over-img').attr('src', 'img-ert/2582.jpg');
		if(b1 == 2) $('.b1 .over-img').attr('src', 'img-ert/5152.jpg');
		if(b1 == 3) $('.b1 .over-img').attr('src', 'img-ert/5451.jpg');
		if(b1 == 4) $('.b1 .over-img').attr('src', 'img-ert/48415.jpg');
		if(b1 == 5) $('.b1 .over-img').attr('src', 'img-ert/48645.jpg');
	},500)
},5000)

var b2 = 1; 
setInterval(function(){
	$('.b2 .over-img').css('opacity','0');
	setTimeout(function(){
		$('.b2 .over-img').css('opacity','1');
		b2++;
		if(b2 == 5) {
			b2 = 1;
		}
		if(b2 == 1) $('.b2 .over-img').attr('src', 'img-ert/25112.jpg');
		if(b2 == 2) $('.b2 .over-img').attr('src', 'img-ert/84151.jpg');
		if(b2 == 3) $('.b2 .over-img').attr('src', 'img-ert/845125.jpg');
		if(b2 == 4) $('.b2 .over-img').attr('src', 'img-ert/2332132.jpg');
		if(b2 == 5) $('.b2 .over-img').attr('src', 'img-ert/8485151.jpg');
	},500)
},5000)

var b3 = 1; 
setInterval(function(){
	$('.b3 .over-img').css('opacity','0');
	setTimeout(function(){
		$('.b3 .over-img').css('opacity','1');
		if(b3 == 5) {
			b3 = 1;
		}
		if(b3 == 1) $('.b3 .over-img').attr('src', 'img-ert/84851.jpg');
		if(b3 == 2) $('.b3 .over-img').attr('src', 'img-ert/845141.jpg');
		if(b3 == 3) $('.b3 .over-img').attr('src', 'img-ert/8485151.jpg');
		if(b3 == 4) $('.b3 .over-img').attr('src', 'img-ert/84451515.jpg');
		if(b3 == 5) $('.b3 .over-img').attr('src', 'img-ert/55513513541.jpg');
		b3++;
	},500)
},5000)

var b4 = 1; 
setInterval(function(){
	$('.b4 .over-img').css('opacity','0');
	setTimeout(function(){
		b4++;
		$('.b4 .over-img').css('opacity','1');
		if(b4 == 4) {
			b4 = 1;
		}
		if(b4 == 1) $('.b4 .over-img').attr('src', 'img-ert/867468543556.jpg');
		if(b4 == 2) $('.b4 .over-img').attr('src', 'img-ert/sdfghj.jpg');
		if(b4 == 3) $('.b4 .over-img').attr('src', 'img-ert/sdfghytr.jpg');
		if(b4 == 4) $('.b4 .over-img').attr('src', 'img-ert/uyhfcds.jpg');
	},500)
},5000)

var b5 = 1; 
setInterval(function(){
	$('.b5 .over-img').css('opacity','0');
	setTimeout(function(){
		b5++;
		$('.b5 .over-img').css('opacity','1');
		if(b5 == 5) {
			b5 = 1;
		}
		if(b5 == 1) $('.b5 .over-img').attr('src', 'img-ert/545dsss.jpg');
		if(b5 == 2) $('.b5 .over-img').attr('src', 'img-ert/8486454dsds.jpg');
		if(b5 == 3) $('.b5 .over-img').attr('src', 'img-ert/serfsersere.jpg');
		if(b5 == 4) $('.b5 .over-img').attr('src', 'img-ert/sfersersere.jpg');
		if(b5 == 5) $('.b5 .over-img').attr('src', 'img-ert/drgtdrtgdr.jpg');
	},500)
},5000)

var b6 = 1; 
setInterval(function(){
	$('.b6 .over-img').css('opacity','0');
	setTimeout(function(){
		b6++;
		$('.b6 .over-img').css('opacity','1');
		if(b6 == 5) {
			b6 = 1;
		}
		if(b6 == 1) $('.b6 .over-img').attr('src', 'img-ert/fghfbrt.jpg');
		if(b6 == 2) $('.b6 .over-img').attr('src', 'img-ert/rdtyrevter.jpg');
		if(b6 == 3) $('.b6 .over-img').attr('src', 'img-ert/sersecre.jpg');
		if(b6 == 4) $('.b6 .over-img').attr('src', 'img-ert/ukh-kuhku.jpg');
		if(b6 == 5) $('.b6 .over-img').attr('src', 'img-ert/w3435rtrftgdf.jpg');
	},500)
},5000)

$('.blackout').on('click',function(){
	$('.blackout').css('display','none');
	$('.modal-window').css('display','none');
	$('.modal-sogl').css('display','none');
	$('.modal-conf').css('display','none');
	$('.modal-window-q').css('display','none');
})

body = $('html, body');
$('.more1').click(function(){
	body.stop().animate({scrollTop: $(".b1").offset().top}, 1000, 'swing', function() { });
});
$('.more2').click(function(){
	body.stop().animate({scrollTop: $(".b2").offset().top}, 1000, 'swing', function() { });
});
$('.more3').click(function(){
	body.stop().animate({scrollTop: $(".b3").offset().top}, 1000, 'swing', function() { });
});
$('.more4').click(function(){
	body.stop().animate({scrollTop: $(".b4").offset().top}, 1000, 'swing', function() { });
});
$('.more5').click(function(){
	body.stop().animate({scrollTop: $(".b5").offset().top}, 1000, 'swing', function() { });
});
$('.more6').click(function(){
	body.stop().animate({scrollTop: $(".b6").offset().top}, 1000, 'swing', function() { });
});

$('.policy_conf').click(function(){
	$('.blackout').css('display','block');
	$('.modal-sogl').css('display','block');
})
$('.policy_sogl').click(function(){
	$('.blackout').css('display','block');
	$('.modal-conf').css('display','block');
});

$(document).ready(function() {
 	$(".input-tel").mask("+7 (999) 999-9999");
});
$(document).ready(function(){
	$('.step1').css('display','block');
	var num = 1;
	$('.next').click(function(){
		if(num < 4 && $('.ok1').css('display') != 'none' || $('.ok2').css('display') != 'none' || $('.ok3').css('display') != 'none' || $('.ok4').css('display') != 'none') {
			num++;
			$('.circle').css('background', 'gray');
			$('.step').css('display','none');
			if(num == 1) {
				$('.c1').css('background', 'red');
				$('.step1').css('display','block');
			}
			if(num == 2) {
				$('.c2').css('background', 'red');
				$('.step2').css('display','block');
			}
			if(num == 3) {
				$('.c3').css('background', 'red');
				$('.step3').css('display','block');
			}
			if(num == 4) {
				$('.c4').css('background', 'red');
				$('.step4').css('display','block');
			}
		}
	});
	$('.back').click(function(){
		if(num > 1) {
			num--;
			$('.circle').css('background', 'gray');
			$('.step').css('display','none');
			if(num == 1) {
				$('.c1').css('background', 'red');
				$('.step1').css('display','block');
			}
			if(num == 2) {
				$('.c2').css('background', 'red');
				$('.step2').css('display','block');
			}
			if(num == 3) {
				$('.c3').css('background', 'red');
				$('.step3').css('display','block');
			}
			if(num == 4) {
				$('.c4').css('background', 'red');
				$('.step4').css('display','block');
			}
		}
	});
	$('.block').click(function(e){
		$('.ok').css('display', 'none');
		$(event.target).children('.ok').css('display', 'block');
	})
});
$('.circ').click(function(){
	f5();
})

$('.more').click(function(){
	f5();
})

$('.back').click(function(){
	f1();
	f2();
})

$('.buy_card .el:nth-child(2) .el-text').click(function(event){
	f4(event);
})

$('.rel-desc .str:last-child').click(function(){
	$('.rel-img').css('left', '-2000px');
	setTimeout(function(){
		$('.rel-desc .name').css('left', '-2000px');
	},100)
	setTimeout(function(){
		var i = 0;
		var timer = setInterval(function(){
			i++;
			$('.rel-desc .str:nth-child(' + i + ')').css('left', '-2000px');
			if(i == 6) {
				clearInterval(timer);
			}
		},100)
	},100)
	f3();
})

function f1() {
	$('.plate:nth-child(1)').css('left', '0px');
	$('.plate:nth-child(3)').css('left', '0px');
	$('.plate:nth-child(4)').css('left', '0px');
	$('.plate:nth-child(6)').css('left', '0px');
	setTimeout(function(){
		$('.plate').css('top', '-450px');
	}, 750)
	setTimeout(function(){
		$('.over').css('top', '-100px');
		$('.back').css('top', '-100px');
	}, 500)
}

function f2() {
	setTimeout(function(){
		var top = 900;
		var counter = 7;
		$('.description .start').css('top', '1450px');
		setTimeout(function(){
			$('.welcome').css('top', '600px');
		}, 800)
		var timer = setInterval(function(){
			$('.description .str:nth-child(' + counter + ')').css('top', top + 'px');
			top -= 35;
			counter--;
			if(counter < 0) {
				clearInterval(timer);
			}
		},100)
		$('.cap').css('opacity', '0.4');
	},1500)
}

function f3() {
	$('.cap').css('opacity', '0.4');
	var top = 1900;
	var counter = 7;
	$('.description .start').css('top', '2100px');
	setTimeout(function(){
		$('.welcome').css('top', '1500px');
	}, 800)
	var timer = setInterval(function(){
		$('.description .str:nth-child(' + counter + ')').css('top', top + 'px');
		top -= 35;
		counter--;
		if(counter < 0) {
			clearInterval(timer);
		}
	},100)
	setTimeout(function(){
		$('.plate').css('top', '100px');
		for(var i = 4; i < 7; i++) {
			$('.plate:nth-child(' + i + ')').css('top', '540px');
		}
		setTimeout(function(){
			$('.plate:nth-child(1)').css('left', '-550px');
			$('.plate:nth-child(3)').css('left', '550px');
			$('.plate:nth-child(4)').css('left', '-550px');
			$('.plate:nth-child(6)').css('left', '550px');
		}, 500)
		setTimeout(function(){
			$('.over').css('top', '0px');
			$('.back').css('top', '75px');
		}, 750)
	}, 1500)
}

$('.start').click(function(){
	f3();
})

function f4() {
	f1();
	var target = event.target;
	for(var i = 1; i < 7; i++) {
		if($(target).hasClass('r' + i)) {
			var need = i;
		}
	}
	setTimeout(function(){
		$('.cap').css('opacity', '0.6');
		$('.rel-desc:nth-child(' + need + ') .rel-img').css('left', '0px');
		setTimeout(function(){
			$('.rel-desc:nth-child(' + need + ') .name').css('left', '0px');
		},100)
		setTimeout(function(){
			var i = 0;
			var timer = setInterval(function(){
				i++;
				$('.rel-desc:nth-child(' + need + ') .str:nth-child(' + i + ')').css('left', '0');
				if(i == 6) {
					clearInterval(timer);
				}
			},100)
		},100)
	},1000)
}

function f5() {
	$('.over-main').css('opacity', '0');
	setTimeout(function(){
		$('.line').css('width', '0');
		$('.line').css('opacity', '0');
	},300)
	setTimeout(function(){
		$('.circ').css('margin-left', '-885px');
		$('.circ').css('width', '50px');
		$('.circ').css('height', '50px');
		$('.word').css('font-size', '25px');
		$('.header .name').css('margin-left', '-750px');
		$('.header .more').css('margin-top', '-100px');
		$('.center-incr:first-child .line::after').css('transform', 'rotate(-135deg)');
	},900)
	setTimeout(function(){
		$('.circ').css('margin-top', '-600px');
	},1350)
	setTimeout(function(){
		var top = 900;
		var counter = 7;
		$('.description .start').css('top', '1450px');
		setTimeout(function(){
			$('.welcome').css('top', '600px');
		}, 800)
		var timer = setInterval(function(){
			$('.str:nth-child(' + counter + ')').css('top', top + 'px');
			top -= 35;
			counter--;
			if(counter < 0) {
				clearInterval(timer);
			}
		},100)
		$('.cap').css('opacity', '0.4');
	},1500)
}

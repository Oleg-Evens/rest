$('.content-button').on('click',function(){
	$('.blackout').toggleClass('show');
	$('.modal-window').toggleClass('show-w');
});

$('.real-btn').on('click',function(){
	$('.blackout').toggleClass('show');
	$('.modal-window').toggleClass('show-w');
});

$('.happen-btn').on('click',function(){
	$('.blackout').toggleClass('show');
	$('.modal-window').toggleClass('show-w');
});

$('.end-btn').on('click',function(){
	$('.blackout').toggleClass('show');
	$('.modal-window').toggleClass('show-w');
});

$('.blackout').on('click',function(){
	$('.blackout').toggleClass('show');
	$('.modal-window').toggleClass('show-w');
});

$('.btn-scroll').on('click',function(){
	$(document).scrollTop(100);
	alert(1);
});
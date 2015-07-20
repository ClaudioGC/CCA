$(document).ready(function(){

	$('h2').mouseenter(function(){
		$('caja').fadeTo('fast', 1);
	});

	$('caja').mouseleave(function(){
		$('caja').fadeTo('fast', 0.5);
	});

});
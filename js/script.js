$(document).ready(function(){

	$('caja').mouseenter(function(){
		$('caja').fadeTo('slow', 1);
	});

	$('caja').mouseleave(function(){
		$('caja').fadeTo('fast', 0.5);
	});

});
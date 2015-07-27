$(document).ready(function(){

	$('#titulo').mouseenter(function(){
		$('#titulo').fadeTo('slow', 1);
	});

	$('#titulo').mouseleave(function(){
		$('#titulo').fadeTo('fast', 0.5);
	});

});
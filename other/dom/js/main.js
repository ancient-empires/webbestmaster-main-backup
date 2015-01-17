(function (win, doc, docElem) {

	"use strict";
	/*global console, alert */

	var divs = $('div');

	divs.on('rerere1', function(){
		console.log('////');
	});

	divs.on('mousemove', function(e){
		console.log(e);
	});



	divs.off();


	console.log(divs);

	divs.css('height', '200px');


	$('div').data('text-re-re', 44);

//	$('div').css('padding', '5px');
	$('div').css('padding-left', '5px');
	$('div').css({
		//'padding-left': '4px',
		'margin-left': '43px'
	});



/*
	$('input').prop({
		checked: true
	});
*/
	$('input').prop('checked', true);
	console.log($('input[type="text"]').prop('value'));
	$('input[type="number"]').prop('value', function(i, val){
		console.log(this, i, val);
		return val + 3
	});



	console.log($('div').css('margin-left'));

	console.log($('div').data('text-re-re'));

}(window, document, document.documentElement));
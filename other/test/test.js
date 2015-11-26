/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	submitBtn.addEventListener('click', function () {

		var inputs = document.querySelectorAll('.add-number-input'),
			inputsArr = Array.prototype.slice.call(inputs),
			values = [],
			testValue = /^[0-9\-\+\.\s]{8,12}$/g, // use \s instead of space // only for Sergey K. - remove it
			canSubmit = true;

		// collect all values
		inputsArr.forEach(function (item) {
			values.push(item.value);
		});

		inputsArr.forEach(function (item) {

			var el = item,
				value = el.value;

			if ( value.length < 8 || !testValue.test(value) || values.indexOf(value) !== values.lastIndexOf(value) ) {
				el.classList.add('error');
				canSubmit = false;
			} else {
				el.classList.remove('error');
			}

		});

		if (canSubmit) {
			submitForm.submit();
		}

	});

}(window));
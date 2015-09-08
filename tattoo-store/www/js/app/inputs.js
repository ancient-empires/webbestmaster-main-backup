/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	win.APP = win.APP || {};

	win.APP.inputs = {

		initAll: function () {

			var inputs = this;

			inputs.initNumbers();

		},

		initNumbers: function () {

			var $numberInputs = $('[type="number"]');

			function changeInput($input, deltaValue) {

				var curValue = Number($input.val()),
					newValue = curValue + deltaValue,
					max = Number($input.attr('max')),
					min = Number($input.attr('min'));

				if ( !isNaN(max) && newValue > max ) {
					newValue = max;
				}

				if ( !isNaN(min) && newValue < min ) {
					newValue = min;
				}

				if ( newValue !== curValue ) {
					$input.val(newValue);
					$input.trigger('change');
				}

			}

			$numberInputs.each(function () {

				var $numberInput = $(this),
					$increase = $numberInput.next(),
					$decrease = $numberInput.prev();

				$increase.on('click', function () {
					changeInput($numberInput, 1);
				});

				$decrease.on('click', function () {
					changeInput($numberInput, -1);
				});

			});

		}

	};

	win.addEventListener('load', function () {
		win.APP.inputs.initAll();
	});

}(window));
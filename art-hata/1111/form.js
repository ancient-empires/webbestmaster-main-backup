/*jslint white: true, nomen: true */
(function (win, doc, loc) {

	"use strict";
	/*global window */
	/*global */

	var formHtml = $('.js-form-container').html(),
		//$formWrappers = $('.js-form-wrapper'),
		$formWrappers = $('.align_center'),
		$showFormButton = $('[href="/zagruzit-izobrazhenie"], [href="/image-upload/skinali.php"]'),
		formFadeClassName = 'js-fade-for-form';

	function bindFormEventListeners($form) {

		var $close = $form.parent().find('.js-close-form'); // find close button

		$close.on('click', hideForm); // add event listeners to remove/hide form

		$form.on('submit', function (e) {

			var $this = $(e.currentTarget),
				inputs = $this.find('[name]'),
				formData = new FormData();

			inputs.each(function () {
				var $this = $(this),
					name = $this.attr('name'),
					i, len,
					files;
				if ( name === 'files') {
					files = this.files;
					for (i = 0, len = files.length; i < len; i += 1) {
						formData.append('file_' + i, files[i]);
					}
				} else {
					formData.append(name, $this.val());
				}

			});

			$.ajax({
				url: '/image-upload/send-request.php', // point to server-side PHP script
				dataType: 'text',  // what to expect back from the PHP script, if anything
				cache: false,
				contentType: false,
				processData: false,
				data: formData,
				type: 'post',
				xhr: function() {  // Custom XMLHttpRequest
					var myXhr = $.ajaxSettings.xhr();
					if(myXhr.upload){ // Check if upload property exists
						myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
					}
					return myXhr;
				},
				success: function(php_script_response){
					alert(php_script_response); // display response from the PHP script, if any
				}
			});

			function progressHandlingFunction(e){
				if(e.lengthComputable){
					// show progress
					console.log(e.loaded, e.total);
				} else {
					// show spinner
				}
			}

			e.preventDefault();

		});

	}

	// append from to wrappers
	function appendForm() {

		var $form = $(formHtml);

		// TODO: here is switсh/case to show correct form
		// use data-attr

		bindFormEventListeners($form);

		$(this).append($form);

	}

	function showForm(e) {

		var $this = $(this),
			$fade = $('<div class="' + formFadeClassName + '" />'),
			$body = $(doc.body),
			$form = $(formHtml);

		$fade.addClass('fade-for-form');

		$fade.append($form);

		$body.append($fade);

		bindFormEventListeners($fade.find('form'));

		return e && e.preventDefault && e.preventDefault();

	}

	function hideForm() {
		$('.' + formFadeClassName).remove();
	}

	$formWrappers.each(appendForm);

	$showFormButton
		.removeAttr('onclick')
		.on('click', showForm);

}(window, window.document, window.location));
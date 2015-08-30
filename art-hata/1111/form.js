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

		var $parent = $form.parent(),
			$close = $parent.find('.js-close-form'); // find close button

		$parent.on('click', function(e){
			e.stopPropagation();
		});

		$close.on('click', hideForm); // add event listeners to remove/hide form

		$form.on('submit', function (e) {

			var $this = $(e.currentTarget),
				inputs = $this.find('[name]'),
				extra = $this.find('[name="extra"]'),
				title = $this.find('[name="title"]'),
				$tel = $this.find('[name="tel"]'),
				tel = ($tel.val()|| '').trim(),
				formData = new FormData();

			if ( !tel || !/^\+?[\-\_\d\s]{11,25}$/g.test(tel) ) {
				alert('Неправильно указан номер');
				e.preventDefault();
				return;
			}

			extra.val( decodeURIComponent ('URL: ' + loc.href) );

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
				success: function(response){

					if ( String(response).trim().indexOf('status:1;') === 0 ) {
						alert('Ваше сообщение успешно отправлено.');
					} else {
						alert('Ошибка при оформлении заказа!');
					}
				}
			});

			function progressHandlingFunction(e){
				if(e.lengthComputable){
					// show progress

					$('.js-request-form-progress-line').css('width', e.loaded / e.total * 100 + '%');

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

		$fade.on('click', hideForm);

		$body.append($fade);

		bindFormEventListeners($fade.find('form'));

		$form.find('[name="title"]').val($this.html());

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
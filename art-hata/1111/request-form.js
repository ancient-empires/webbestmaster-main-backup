/*jslint white: true, nomen: true */
(function (win, doc, loc) {

	"use strict";
	/*global window */
	/*global */

	var selectors = {
		showFormButton: '.js-request-form',
		fade: '.js-fade-for-form',
		formSource: '.js-form-container'
		};


















	//$(win).on('load', function () {

		console.log('request-form.js initialized');

		var formHtml = $('.js-form-container').html(),
		//$formWrappers = $('.js-form-wrapper'),
		//$formWrappers = $('.align_center'),
			$showFormButton = $('.request-form'),
			formFadeClassName = 'js-fade-for-form';

		function getType(type) {

			switch (type) {

				case 'picture':

					return 'Картина на холсте';

					break;

				case 'skinali':

					return 'Скинали для кухни';

					break;

				case 'oboi':

					return 'Фотообои';


					break;

			}


		}


		function bindFormEventListeners($form, data) {

			data = data || {};

			var $parent = $form.parent(),
				$select = $form.find('select'),
				$close = $parent.find('.js-close-form'), // find close button
				type = data.type;

			if (type) {
				$select.val(getType(type));
			}

			$select.on('change', function (e) {

				$form.find('[name=title]').val($select.val());

			});

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
					formData = new FormData(),
					costData = getCostData();

				if ( !tel || !/^\+?[\-\_\d\s]{11,25}$/g.test(tel) ) {
					alert('Неправильно указан номер');
					e.preventDefault();
					return;
				}

				extra.val( extra.val() || '' );

				for (var key in costData) {
					if (costData.hasOwnProperty(key)) {

						var value = costData[key],
							langMap = {
								cost: 'цена',
								size: 'размер',
								prepare: 'с подготовкой'
							};
						if (value) {
							extra.val( extra.val() + langMap[key] + ': ' + value + '; ');
						}

					}
				}

				extra.val( extra.val() + decodeURIComponent (' Категория: ' + loc.href + '; ') );

				inputs.each(function () {
					var $this = $(this),
						name = $this.attr('name'),
						i, len,
						files;
					if ( name === 'files' ) {
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
							win.location.href = '/info/zakaz-prinyat';
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

		function getCostData() {

			var cost = '', size = '', prepare = '';

			try {
				cost = $('#our_price_display').html();
			} catch (e) {}

			try {
				size = $('.attribute_list').eq(0).find('select').find('option:selected').html();
			} catch (e) {}

			try {
				prepare = $('.attribute_list').eq(1).find('[type="radio"]:checked').parent().find('span').html();
			} catch (e) {}

			return {
				cost: cost,
				size: size,
				prepare: prepare
			}

		}

		function showForm(e) {

			var $this = $(this),
				$fade = $('<div class="' + formFadeClassName + '" />'),
				$body = $(doc.body),
				$form = $(formHtml),
				noFiles = $this.attr('data-no'),
				findParent = $this.attr('data-gallery'),
				type = $this.attr('data-form'),
				$extra = $form.find('[name="extra"]'),
				ifBuy = $this.attr('data-buy'),
				noWork = $this.attr('data-no-work'),
				buttonName = $this.attr('data-button-name'),
				$img;

			$fade.addClass('fade-for-form');

			$fade.append($form);

			$fade.on('click', hideForm);

			$body.append($fade);

			if (findParent) {
				$img = $this.closest('li').find('img');
				$extra.val($extra.val() || '');
				$extra.val( $extra.val() +  'Изображение: ' + $img.attr('src') + ';');
				$form.find('[name="content"]').parent().find('span').html('Размер, прочие пожелания');
				$form.find('[name="content"]').attr('placeholder', 'Размер, прочие пожелания');
				$form.find('[type="submit"]').val('Получить бесплатный эскиз').css('width', '302px');
			}

			if (noFiles) {
				$form.find('[type="file"]').parent().remove();
				$form.find('.request-form-progress-wrapper').remove();
			}

			if (ifBuy) {
				$form.find('[name="content"]').parent().find('span').html('Размер, адресс доставки, прочие пожелания');
				$form.find('[name="content"]').attr('placeholder', 'Размер, адресс доставки, прочие пожелания');
				$form.find('[type="submit"]').val('Сделать заказ').css('width', '302px');
			}

			if (noWork) {
				$form.find('.request-form-label').eq(0).hide();
			}

			if (buttonName) {
				$form.find('[type="submit"]').val(buttonName).css('width', '302px');
			}

			bindFormEventListeners($fade.find('form'), {type: type});

			$form.find('[name="title"]').val( type ? ('Форма ' + (getType(type))) : 'заказ');

			if ( type === 'skinali' ) {
				$form.find('.request-form-label').eq(0).hide();
				$form.find('.request-form-label').eq(3).hide();
				$form.find('.request-form-label').eq(3).hide();
				$form.find('.request-form-progress-wrapper').hide();
				$form.find('[type="submit"]').val('Заказать бесплатный замер').css('width', '302px');
			}

			return e && e.preventDefault && e.preventDefault();

		}

		function hideForm() {
			$('.' + formFadeClassName).remove();
		}

		//$formWrappers.each(appendForm);

		$showFormButton
			.removeAttr('onclick')
			.on('click', showForm);


	//});

}(window, window.document, window.location));
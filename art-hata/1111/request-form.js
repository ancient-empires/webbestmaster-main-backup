/*jslint white: true, nomen: true */
(function (win, loc) {

	'use strict';
	/*global window */
	/*global */

	// js-request-form-main-container request-form-main-container

	var selectors = {
			showFormButton: '.js-request-form',
			formMailContainer: '.js-request-form-main-container',
			fade: '.js-fade-for-form',
			formSource: '.js-form-container',
			filePreviewContainer: '.js-file-preview-container'
		},
		paramList = [
			'data-form-header', // set header text - text
			'data-hide-close', // set to hide close button - 1
			'data-button-text', // set text on submit button - text
			'data-hide-header', // set to hide header - 1
			'data-hide-works-type', // set to hide select with works type - 1
			'data-hide-name', // set to hide name - 1
			'data-hide-email', // set to hide email - 1
			'data-hide-files', // set to hide files - 1
			'data-hide-tel', // set to hide tel-phone - 1
			'data-hide-content', // set to hide textarea with comments - 1
			'data-css-class', // set to add css classes - text

			'data-works-type', // set selected works type
			'data-works-type-text', // set to select default option
			'data-name-text', // set to change label with name
			'data-email-text', // set to change label with email
			'data-files-text', // set to change label with files
			'data-tel-text', // set to change label with tel
			'data-content-text', // set to hide textarea change label with content
			'data-gallery' // set to send with gallery image - 1
		];


	$(selectors.showFormButton).on('click', showForm);

	$(selectors.formMailContainer).each(function () {

		var $wrapper = $(this),
			$form = $($(selectors.formSource).html()),
			formParams = {},
			i, len,
			param, value;

		for (i = 0, len = paramList.length; i < len; i += 1) {
			param = paramList[i];
			value = $wrapper.attr(param);
			if (value) {
				formParams[param] = value;
			}
		}

		setFormByParams($form, formParams);

		bindEventListeners($form, formParams);

		$wrapper.append($form);

	});

	function showForm(e) {

		var $button = $(e.currentTarget),
			$form = $($(selectors.formSource).html()),
			$fade = $('<div class="' + selectors.fade.substr(1) + ' fade-for-form"></div>'),
			formParams = {},
			i, len, value, param;

		for (i = 0, len = paramList.length; i < len; i += 1) {
			param = paramList[i];
			value = $button.attr(param);
			if (value) {
				formParams[param] = value;
			}
		}

		setFormByParams($form, formParams, $button);

		bindEventListeners($form, formParams);

		$fade.append($form);
		$('body').append($fade);

		$fade.on('click', hideForm);

	}

	function setFormByParams($form, params, $button) {

		var key, value, $img, $extra;

		for (key in params) {

			if (params.hasOwnProperty(key)) {

				value = params[key];

				switch (key) {

					case 'data-form-header': // set header text - text
						$form.find('.js-request-form-header').html(value);
						break;

					case 'data-hide-close': // set to hide close button - 1
						$form.find('.js-request-form-wrapper-close').hide();
						break;

					case 'data-button-text': // set text on submit button - text
						$form.find('[type="submit"]').val(value).css('width', '310px');
						break;

					case 'data-hide-header': // set to hide header - 1
						$form.find('.js-request-form-header').hide();
						break;

					case 'data-hide-works-type': // set to hide select with works type - 1
						$form.find('[name="works-type"]').parent().hide();
						break;

					case 'data-hide-name': // set to hide name - 1
						$form.find('[name="name"]').parent().hide();
						break;

					case 'data-hide-email': // set to hide email - 1
						$form.find('[name="email"]').parent().hide();
						break;

					case 'data-hide-files': // set to hide files - 1
						$form.find('[name="files"]').parent().hide();
						$form.find('.js-request-form-progress-wrapper').hide();
						break;

					case 'data-hide-tel': // set to hide tel-phone - 1
						$form.find('[name="tel"]').parent().hide();
						break;

					case 'data-hide-content': // set to hide textarea with comments - 1
						$form.find('[name="content"]').parent().hide();
						break;

					case 'data-css-class': // set to add css classes - text
						$form.addClass(value);
						break;

					case 'data-works-type':
						$form.find('[name="works-type"]').val(value);
						$form.find('[name="title"]').val('Форма: ' + value + '. ');
						break;

					case 'data-works-type-text': // set to select default option
						$form.find('[name="works-type"]').parent().find('span').html(value);
						break;

					case 'data-name-text': // set to change label with name
						$form.find('[name="name"]').attr('placeholder', value).parent().find('span').html(value);
						break;

					case 'data-email-text': // set to change label with email
						$form.find('[name="email"]').attr('placeholder', value).parent().find('span').html(value);
						break;

					case 'data-files-text': // set to change label with files
						$form.find('[name="files"]').parent().find('span').html(value);
						break;

					case 'data-tel-text': // set to change label with tel
						$form.find('[name="tel"]').parent().find('span').html(value);
						break;

					case 'data-content-text': // set to hide textarea change label with content
						$form.find('[name="content"]').attr('placeholder', value).parent().find('span').html(value);
						break;

					case 'data-gallery':
						$img = $button.closest('li').find('img');
						$extra = $form.find('[name="extra"]');
						$extra.val($extra.val() || '');
						$extra.val($extra.val() + 'Изображение: ' + $img.attr('src') + '; ');
						break;

				}

			}

		}

	}

	function bindEventListeners($form, params) {

		$form.on('click', function (e) {
			e.stopPropagation();
		});

		$form.find('[name="works-type"]').on('change', function (e) {
			$form.find('[name="title"]').val('Форма: ' + $(e.currentTarget).val() + '. ');
		});

		$form.find('.js-request-form-wrapper-close').on('click', hideForm);

		$form.find('[name="title"]').val('Форма: ' + $form.find('[name="works-type"]').val() + '. ');

		$form.find('[type="file"]').on('change', function (e) {

			var inputNode = e.currentTarget,
				$input = $(inputNode),
				allFiles = $input.data('files') || [],
				files = inputNode.files,
				file,
				i, len,
				filesSize = 0,
				maxFilesSize = 25 * 1024 * 1024;

			$form.addClass('form-in-progress');

			for (i = 0, len = files.length; i < len; i += 1) {
				file = files[i];
				if (!inAllFilesDetect(allFiles, file) && file.size < maxFilesSize ) {
					allFiles.push(file);
				}

				if ( file.size > maxFilesSize ) {
					alert(file.name + ': слишком большой файл!');
				}

			}

			for (i = 0, len = allFiles.length; i < len; i += 1) {
				file = allFiles[i];
				if (file) {
					filesSize += file.size || 0;
				}
			}

			if ( filesSize > maxFilesSize ) {
				alert('Слишком большие файлы! Форма не будет отправлена!');
			}

			$input.data('files', allFiles);

			$input.val(null);

			drawFiles($form, allFiles);

		});

		$form.find('form').on('submit', function (e) {

			var $this = $(e.currentTarget),
				$inputs = $this.find('[name]'),
				$file = $this.find('[type="file"]'),
				$extra = $this.find('[name="extra"]'),
			//$title = $this.find('[name="title"]'),
				$tel = $this.find('[name="tel"]'),
				tel = ($tel.val() || '').trim(),
				formData = new FormData(),
				costData = getCostData(),
				key, value,
				langMap = {
					cost: 'цена',
					size: 'размер',
					prepare: 'с подготовкой'
				},
				files = $file.data('files') || [],
				i, len;

			if (!tel || !/^\+?[\-\_\d\s]{7,25}$/g.test(tel)) {
				alert('Неправильно указан номер');
				e.preventDefault();
				return;
			}

			for (key in costData) {
				if (costData.hasOwnProperty(key)) {
					value = costData[key];
					if (value) {
						$extra.val($extra.val() + langMap[key] + ': ' + value + '; ');
					}
				}
			}

			$extra.val($extra.val() + decodeURIComponent(' Категория: ' + loc.href + '; '));

			$inputs.each(function () {
				var $this = $(this),
					name = $this.attr('name'),
					files;
				if (name !== 'files') {
					formData.append(name, $this.val());
				}
			});

			for (i = 0, len = files.length; i < len; i += 1) {
				formData.append('file_' + i, files[i]);
			}

			$.ajax({
				url: '/image-upload/send-request.php', // point to server-side PHP script
				dataType: 'text',  // what to expect back from the PHP script, if anything
				cache: false,
				contentType: false,
				processData: false,
				data: formData,
				type: 'post',
				xhr: function () {  // Custom XMLHttpRequest
					var myXhr = $.ajaxSettings.xhr();
					if (myXhr.upload) { // Check if upload property exists
						myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // For handling the progress of the upload
					}
					return myXhr;
				},
				success: function (response) {

					if (String(response).trim().indexOf('status:1;') === 0) {
						loc.href = '/info/zakaz-prinyat';
					} else {
						alert('Ошибка при оформлении заказа!');
					}

				},
				error: function () {
					alert('Слишком большие файлы!');
				}

			});

			function progressHandlingFunction(evt) {
				if (evt.lengthComputable) {
					$('.js-request-form-progress-line').css('width', evt.loaded / evt.total * 100 + '%');
				} else {
					// show spinner
				}
			}

			e.preventDefault();

		});

		function inAllFilesDetect(arr, item) {

			var i, len, file, isInArr = false;

			for (i = 0, len = arr.length; i < len; i += 1) {
				file = arr[i];
				isInArr = isInArr || (file.lastModified === item.lastModified && file.name === item.name && file.size === item.size);
			}

			return isInArr;

		}

		function drawFiles($form, files) {

			var i, len,
				deferred = $.Deferred(),
				promise = deferred.promise();

			$form.find(selectors.filePreviewContainer).empty();

			for (i = 0, len = files.length; i < len; i += 1) {
				promise = promise.then(drawImagePreviewFromFile.bind(null, files[i], $form, i));
			}

			promise.then(function () {
				$form.removeClass('form-in-progress');
				//return addRemoveButton($form);
			});

			deferred.resolve();

		}

		function drawImagePreviewFromFile(file, $form, index) {

			var $container = $form.find(selectors.filePreviewContainer),
				reader = new FileReader(),
				deferred = $.Deferred(),
				size = file.size,
				lastModified = file.lastModified,
				name = file.name,
				$wrapper = $('<div data-index="' + index + '" class="form-preview-image-wrapper js-form-preview-image-wrapper"></div>');

			reader.readAsDataURL(file);

			reader.onload = function (dataUrl) {

				var image = new Image(),
					$image;

				image.src = dataUrl.target.result;

				//$wrapper.attr('data-file-size', size);
				//$wrapper.attr('data-file-last-modified', lastModified);
				//$wrapper.attr('data-file-name', name);

				$image = $(image);

				$image.addClass('form-preview-image');

				$wrapper.append(image);

				$container.append($wrapper);

				image.onerror = function () {
					var $image = $(this);
					$image.parent().append('<div class="no-preview-image">Не изображение</div>');
					$image.remove();
					console.log('error image');
					addRemoveButton($form, $wrapper);
					deferred.resolve();
				};

				image.onload = function () {
					console.log('load');
					addRemoveButton($form, $wrapper);

					deferred.resolve();
				};


			};

			reader.onerror = function () {
				console.log('error reader');
				$form.data([size, lastModified, name].join('-'), 'not-image');
				$wrapper.append('<div class="no-preview-image">Не изображение</div>');
				$container.append($wrapper);
				addRemoveButton($form, $wrapper);
				deferred.resolve();
			};

			return deferred.promise();

		}

	}

	function addRemoveButton($form, $wrapper) {

		var $removeButton = $('<div class="form-remove-file">Удалить</div>');

		$removeButton.on('click', function (e) {

			var $wrapper = $(e.currentTarget).parent(),
				index = Number($wrapper.attr('data-index')),
				$input = $form.find('[type="file"]'),
				files = $input.data('files');

			files.splice(index, 1);

			$input.data('files', files);

			$wrapper.remove();

			$form.find('.js-form-preview-image-wrapper').each(function (index) {
				$(this).attr('data-index', index);
			});

		});

		$wrapper.append($removeButton);

	}

	function hideForm() {
		$(selectors.fade).remove();
	}

	function getCostData() {

		var cost = '', size = '', prepare = '';

		try {
			cost = $('#our_price_display').html();
		} catch (e) {
		}

		try {
			size = $('.attribute_list').eq(0).find('select').find('option:selected').html();
		} catch (e) {
		}

		try {
			prepare = $('.attribute_list').eq(1).find('[type="radio"]:checked').parent().find('span').html();
		} catch (e) {
		}

		return {
			cost: cost,
			size: size,
			prepare: prepare
		}

	}

}(window, window.location));
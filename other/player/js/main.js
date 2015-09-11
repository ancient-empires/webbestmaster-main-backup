bro(function () {

	//var dataLayerPush = window.dataLayer.push;
	//
	//window.dataLayer.push = function () {
	//
	//	console.log('-',arguments[0]);
	//
	//	return dataLayerPush.apply(window.dataLayer, arguments);
	//
	//};














	var $ = bro;

	var list = [];

	var player = $('.js-player');

	var dropZone = $('.js-drop-zone');

	player.on('ended', function () {

		var $this = $(this),
			nextIndex = +$this.data('index') + 1,
			nextItem = $('.js-track[data-index="' + nextIndex + '"]');

		if (nextItem.isEmpty()) {
			nextItem = $('.js-track[data-index="0"]');
		}

		$this.prop('src', nextItem.data('src'))
			.data('index', nextItem.data('index'))
			.prop('play').call(this);

		$('.js-current-track').html(nextItem.html()).data('duration', nextItem.data('duration'));

		$('.active-track').removeClass('active-track');
		nextItem.addClass('active-track');

	});

	dropZone.on('dragover', function (e) {

		e.stopPropagation();
		e.preventDefault();

	});

	dropZone.on('drop', function (e) {

		e.stopPropagation();
		e.preventDefault();

		player
			.prop('src', '#')
			.prop('pause').call(player[0]);

		list = [];
		$('.js-play-list').html('');

		var util = $(),
			files = util.toArray(e.dataTransfer.files); // FileList object

		files.forEach(function (file, index) {

			list.push({
				file: file,
				src: URL.createObjectURL(file),
				name: file.name,
				index: index
			});

		});

		createList();

	});


	function createList() {


		var playList = $('.js-play-list');
		
		list.forEach(function (item, index) {

			var $track = $('<div/>', {
				class: 'track js-track'
			})
				.data(item)
				.html(item.name.replace(/\.\S*?$/, ''))
				.on('click', function () {

					var $this = $(this);

					player.prop('src', $this.data('src'))
						.data('index', $this.data('index'))
						.prop('play').call(player[0]);

					$('.js-current-track').html($this.html()).data('duration', $this.data('duration'));

					$('.active-track').removeClass('active-track');
					$this.addClass('active-track');

				});

			playList.append($track);

			// add track duration only
			var audio = new Audio();
			audio.src = item.src;
			audio.index = index;
			$(audio).on('canplaythrough', function () {

				var sec = parseInt(this.duration),
					min = Math.floor(sec / 60);
				sec %= 60;
				sec = sec < 10 ? '0' + sec : sec;

				$('.js-track').eq(this.index).data('duration', min + '.' + sec);

			});

		});

	}


});
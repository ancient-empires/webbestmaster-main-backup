(function (win) {

	var timer;
	timer = {
		init: function(){
			this.node = $('.js-timer-wrapper', main.wrapper);
			this.countValue = 0;

			if (this.timeoutID !== undefined) {
				clearTimeout(this.timeoutID);
			}

			if (!info.timerIsActive && this.node) {
				this.node.style.display = 'none';
				return;
			}

			this.isActive = true;
			this.isPause = false;
			this.timeoutID = setTimeout(this.count.bind(this), 1000);

		},
		count: function(){

			this.countValue += this.isPause ? 0 : 1;
			var countValue = this.countValue;
			var minutes = Math.floor(countValue / 60);
			var seconds = countValue % 60;
			if (seconds <= 9) {
				seconds = '0' + seconds;
			}

			var timerNode = $('.js-timer-wrapper', main.wrapper);
			if (timerNode) {
				timerNode.innerHTML = minutes + ':' + seconds;
				this.timeoutID = setTimeout(this.count.bind(this), 1000);
			} else {
				this.stop();
			}

		},
		stop: function(){
			this.isActive = false;
			clearTimeout(this.timeoutID);
		},
		pause: function(needPause){
			this.isPause = needPause === undefined || needPause === true;
		}


	};

	win.timer = timer;

}(window));

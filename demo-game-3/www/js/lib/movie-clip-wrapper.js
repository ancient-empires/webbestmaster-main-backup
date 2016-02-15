function MovieClipWrapper(clip) {

	var wrapper = this;

	wrapper.clip = clip;
	// used for trigger onIteration event
	wrapper.loopCount = -1; // not started state

	// use for play and playOne
	wrapper.mode = 'play';
	wrapper.playOneCb = null;
	wrapper.playCb = null;

}

MovieClipWrapper.prototype.play = function (fn) {

	var wrapper = this,
		clip = wrapper.clip;

	wrapper.mode = 'play';

	wrapper.playCb = fn;

	return clip.play.apply(clip, arguments);

};

MovieClipWrapper.prototype.playOne = function (fn) {

	var wrapper = this,
		clip = wrapper.clip;

	wrapper.mode = 'playOne';

	wrapper.playOneCb = fn;

	if (!clip.loop) {
		clip.loop = true;
	}

	return clip.play.apply(clip, arguments);

};

MovieClipWrapper.prototype.stop = function () {

	var wrapper = this,
		clip = wrapper.clip;

	wrapper.loopCount = -1;

	return clip.stop.apply(clip, arguments);

};


MovieClipWrapper.prototype.gotoAndPlay = function () {

	var clip = this.clip;

	return clip.gotoAndPlay.apply(clip, arguments);

};

MovieClipWrapper.prototype.gotoAndStop = function () {

	var wrapper = this,
		clip = wrapper.clip;

	wrapper.loopCount = -1;

	return clip.gotoAndStop.apply(clip, arguments);

};

MovieClipWrapper.prototype.hide = function () {
	this.clip.visible = false;
};

MovieClipWrapper.prototype.loop = function (isLoop) {
	this.clip.loop = isLoop;
};

MovieClipWrapper.prototype.update = function () {

	var wrapper = this,
		clip = wrapper.clip;

	if (!clip.playing || clip.currentFrame) { // !clip.playing || clip.currentFrame !== 0
		return;
	}

	if (!( wrapper.loopCount += 1 )) { // small optimizing
		return;
	}

	if (wrapper.playCb && wrapper.mode === 'play') {
		return wrapper.playCb();
	}

	if (wrapper.mode === 'playOne') {
		wrapper.gotoAndStop(0);
		return wrapper.playOneCb && wrapper.playOneCb();
	}

};

export default MovieClipWrapper;
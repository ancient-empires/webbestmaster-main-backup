import util from './../lib/util';

function Wheel(data) {

	var wheel = this;

	util.eachHash(data, function (value, key) {
		wheel[key] = value;
	});

}

Wheel.prototype.beginA = 0.2;
Wheel.prototype.endA = -0.2;
Wheel.prototype.tIncrease = 0.1;
Wheel.prototype.vMax = 3.1;

Wheel.prototype.updatePosition = function () {

	switch (this.state) {
		case 'spin-begin':

			this.updateSpinBegin();

			break;

		case 'spin-main':

			this.updateSpinMain();

			break;

		case 'spin-end':

			this.updateSpinEnd();

			break;

	}

	this.tilingSprite.tilePosition.y = this.position * this.itemHeight;

};

Wheel.prototype.beginSpin = function () {

	var wheel = this;

	wheel.position = wheel.position % wheel.wheelItemCount;
	wheel.state = 'spin-begin';
	wheel.t = 0;
	wheel.v = 0;
	wheel.a = wheel.beginA;
	wheel.beginSpinStartPosition = wheel.position;

	wheel.updatePosition();

};

Wheel.prototype.updateSpinBegin = function () {

	var wheel = this;
	var tIncrease = wheel.tIncrease;

	var t = wheel.t + tIncrease;
	var a = wheel.a;
	var v = a * t;
	var vMax = wheel.vMax;
	var position = wheel.beginSpinStartPosition + v * t / 2 - Math.sin(v / vMax * Math.PI) * 1.2;

	wheel.position = position;

	wheel.t = Math.round(t * 100) / 100;

	if (v < vMax) {
		return;
	}

	wheel.v = v;
	wheel.state = 'spin-main';

	wheel.beginTime = wheel.t;

	wheel.beginPath = position - wheel.beginSpinStartPosition;

	wheel.sIncrease = v * tIncrease;
	wheel.eedStopping = false;
	wheel.t = 0;

	if (wheel.beginSpinCb) {
		wheel.beginSpinCb();
		wheel.beginSpinCb = null;
	}

};

Wheel.prototype.updateSpinMain = function () {

	this.position += this.sIncrease;

	if (this.position >= this.wheelItemCount) {

		this.position %= this.wheelItemCount;
	}

};

Wheel.prototype.endSpin = function (position) {

	var wheel = this;

	wheel.state = 'spin-end';
	wheel.t = 0;
	wheel.a = wheel.endA;
	wheel.endSpinStopPosition = position;

};


Wheel.prototype.updateSpinEnd = function () {

	var wheel = this,
		v = wheel.v,
		tIncrease = wheel.tIncrease,
		t = wheel.t,
		position = wheel.position,
		sIncrease = wheel.sIncrease,
		wheelItemCount = wheel.wheelItemCount,
		needStopping = wheel.needStopping;

	if (!v) {
		return;
	}

	if (!needStopping) { // wait for position to begin ending

		position += sIncrease;

		wheel.position = position;

		// detect starting of ending
		var deltaPath = (position + wheel.beginPath - wheel.endSpinStopPosition) % wheelItemCount;

		if (Math.abs(deltaPath) >= sIncrease) {
			return;
		}

		wheel.lastPosition = position /*- deltaPath*/,
		wheel.needStopping = true;
		wheel.deltaPath = deltaPath;

		return;

	}

	var a = wheel.a;

	position = wheel.lastPosition + v * t + a * t * t / 2;
	position += wheel.deltaPath * ( a * t / v );
	position -= Math.sin((v - a * t) / v * Math.PI) * 1.2;

	wheel.position = position % wheelItemCount;

	t += tIncrease;

	wheel.t = (Math.round(t * 100) / 100);

	if (t <= wheel.beginTime) {
		return;
	}

	wheel.position = wheel.endSpinStopPosition;
	wheel.v = 0;
	wheel.t = 0;

	if (wheel.endSpinCb) {
		wheel.endSpinCb();
		wheel.endSpinCb = null;
	}


};


export default Wheel;
var util = {

	eachHash: function (hash, fn) {

		var key;

		for (key in hash) {
			if (hash.hasOwnProperty(key)) {
				fn(hash[key], key);
			}
		}

	}

};

window.requestAnimationFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 16.6666);
	};


export default util;
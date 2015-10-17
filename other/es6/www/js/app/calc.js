	'use strict';
	/*global window */
	/*global */

	let notExported = 'abc';

	function square(x) {
		return x * x;
	}

	export default { square };


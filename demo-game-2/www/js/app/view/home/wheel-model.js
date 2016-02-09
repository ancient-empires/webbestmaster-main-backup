'use strict';
/*global window */
/*global */

import Backbone from './../../../lib/backbone';
import log from './../../../services/log';

var WheelModel = Backbone.Model.extend({

	initialize: function () {

		log('wheel was initialized!');

	}

});


export default WheelModel;
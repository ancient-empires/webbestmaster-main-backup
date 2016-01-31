import BaseView from './../core/base';
import tm from './../../../services/template-master';
import TanCollection from './models/tan-collection';
import RotaterModel from './rotater/rotater-model';
import device from './../../../services/device';
import log from './../../../services/log';
import info from './../../../services/info';
import mediator from './../../../services/mediator';
import lang from './../../../services/lang';
import tangrams from './../../data/tangrams';
import _ from './../../../lib/lodash';
import TangramView from './tangram-view';

var TangramConstructorView = TangramView.extend({

	events: {
		scroll: 'stopEvent',
		'click .js-save-atoms': 'saveAtoms',
		'click .js-tangram-menu-button': 'menu'
		//'click .js-back-to-section': 'backToSection'
	},

	initialize: function () {

		var view = this,
			tanCollection = new TanCollection(),
			rotater = new RotaterModel(),
			scale,
			minX = 0,
			minY = 0,
			maxX = device.get('width'),
			maxY = device.get('height'),
			sizeX = maxX - minX,
			sizeY = maxY - minY,
			viewData = {
				minX: minX,
				minY: minY,
				maxX: maxX,
				maxY: maxY,
				sizeX: sizeX,
				sizeY: sizeY
			},
			patternSvg;

		view.set('tan-collection', tanCollection);

		view.set(viewData);
		tanCollection.setData(viewData);

		scale = view.detectScale();

		view.setElement(tm.get('tangram')({
			mode: 'constructor',
			size: scale,
			info: info
		}));

		tanCollection.setData('mode', 'constructor');

		tanCollection.setScale(scale);
		tanCollection.initPattern({
			data: []
		});
		patternSvg = tanCollection.drawPattern();
		tanCollection.createTans();
		tanCollection.addDrawFieldTo(view.$el);
		tanCollection.drawTans();
		tanCollection.setData('rotater', rotater);

		view.$el.append(patternSvg);

		view.set('$menuButton', view.$el.find('.js-tangram-menu-button'));

		rotater.initialize({
			parentView: view,
			size: scale
		});

		view.subscribe('tangram-is-done', view.hideMenuButton);

		view.render();

		return BaseView.prototype.initialize.apply(view, arguments);

	},

	detectScale: function () {

		var view = this,
			minX = view.get('minX'),
			minY = view.get('minY'),
			maxX = view.get('maxX'),
			maxY = view.get('maxY'),
			scale,
			minScreenSize = device.get('minScreenSize'),
			spaceSize = (maxX - minX) * (maxY - minY);

		scale = Math.round(Math.sqrt(spaceSize / minScreenSize) * 120);

		view.set('scale', scale);

		return scale;

	},

	saveAtoms: function () {

		this.publish('tan-collection:saveAtoms');

	}

});

export default TangramConstructorView;
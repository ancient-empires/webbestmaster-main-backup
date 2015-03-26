/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc) {

	// todo: bug - after resize on ios - smoke is wrong

	"use strict";
	/*global window, document, setTimeout, history, Image */
	/*global Backbone, $, templateMaster, APP, log, Mover */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleView = APP.BB.BaseView.extend({

		events: {
			'click .js-end-turn': 'endTurn'
		},

		selectors: {
			mapImageWrapper: '.js-map-image-wrapper',
			moveAreaWrapper: '.js-move-area-wrapper',
			moveAreaContainer: '.js-move-area-container',
			eventHandlerWrapper: '.js-event-handler-wrapper',
			eventSquares: '.js-event-square',
			activeEventSquare: '.active-event-square',
			activeSquareMark: '.active-square-mark',
			buildingWrapper: '.js-building-wrapper',
			unitsWrapper: '.js-units-wrapper',
			unitWrapper: '.js-unit-wrapper',
			building: '.js-building',
			smokeWrapper: '.js-smoke-wrapper',
			viewDisable: '.js-view-disable',
			square: '.js-square',
			statusBar: '.js-battle-view-status-bar',
			styleSquareSize: '.js-style-square-size'
		},

		squareSize: {
			min: 24,
			max: 96, // 192
			default: 48 // 24 * 2
		},

		initialize: function (data) {

			this.detectClickEvent();

			this.detectTransitionEndEventName();
			this.detectAnimationEndEventName();

			this.$el = $(this.tmpl.battle(data));

			this.proto.initialize.apply(this, arguments);

			// get map
			this.set('args', this.util.copyJSON(data));
			this.set('map', this.util.copyJSON(APP.maps[data.jsMapKey]));

			this.set('model', new win.APP.BB.BattleModel({
				view: this,
				args: this.get('args'),
				map: this.get('map')
			}));

			this.set('markActiveSquare', {}); // {x: number, y: number}

			// set sizes
			this.setSize();

			// draw map
			this.drawMap();

			// draw buildings
			this.drawBuildings();

			// draw units
			this.drawUnits();

			// bind move area
			this.bindMoveArea();

			log(data);

			this.bindEventListeners();

			this.render();

			// start game from model
			this.get('model').startGame();

		},

		detectTransitionEndEventName: function () {
			var i,
				el = doc.createElement('div'),
				transitions = {
					'transition':'transitionend',
					'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
					'MozTransition':'transitionend',
					'WebkitTransition':'webkitTransitionEnd'
				},
				transitionEnd = 'transitionend';

			for (i in transitions) {
				if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
					transitionEnd = transitions[i];
				}
			}

			this.set('transitionEnd', transitionEnd);

		},

		detectAnimationEndEventName: function () {
			var i,
				el = doc.createElement('div'),
				animations = {
					'animation':'animationend',
					'OAnimation':'oAnimationEnd',  // oAnimationEnd in very old Opera
					'MozAnimation':'animationend',
					'WebkitAnimation':'webkitAnimationEnd'
				},
				animationEnd = 'animationend';

			for (i in animations) {
				if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
					animationEnd = animations[i];
				}
			}

			this.set('animationEnd', animationEnd);

		},

		disable: function () {
			this.$el.find(this.selectors.viewDisable).removeClass('hidden');
		},

		enable: function () {
			this.$el.find(this.selectors.viewDisable).addClass('hidden');
		},

		onClick: function (xy) {

			this.markActiveSquare(xy);

			// 0 - show unit available attack (using available path) - hold or dblclick
			// 1 - show unit info in popup - hold or dblclick
			// 5 - show available path - only for player unit - click

			this.get('model').click(xy);

		},

		endTurn: function () {
			this.get('model').newTurn();
			this.removeActiveSquare();
			this.clearAvailableActions();
		},

		markActiveSquare: function (xy) {

			this.removeActiveSquare();

			var view = this,
				x = xy.x,
				y = xy.y,
				util = view.util,
				selectors = view.selectors,
				squareEventHandler = util.findIn(view.$el[0], selectors.eventSquares + '[data-xy="x' + x + 'y' + y + '"]');

			if ( !squareEventHandler ) {
				squareEventHandler = view.createEventHandlerListener({
					x: xy.x,
					y: xy.y
				});
			}

			view.set('markActiveSquare', {
				x: x,
				y: y
			});

			squareEventHandler.innerHTML = '<div class="' + view.classNames.activeSquareMark + '">&nbsp;</div>';

		},

		removeActiveSquare: function () {

			var view = this,
				node = view.util.findIn(view.$el[0], view.selectors.activeSquareMark);

			view.set('markActiveSquare', {
				x: null,
				y: null
			});

			return node && node.parentNode.removeChild(node);

		},

		restoreActiveSquare: function () {

			var view = this,
				markActiveSquareXy = view.get('markActiveSquare');

			if ( markActiveSquareXy.x === null || markActiveSquareXy.y === null ) {
				return;
			}

			view.markActiveSquare(markActiveSquareXy);

		},

		showAvailableActions: function (actions) {

			var view = this;

			view.clearAvailableActions();

			if ( actions.availablePathViewWithTeamUnit ) {
				view.showAvailablePathViewWithTeamUnit(actions.availablePathViewWithTeamUnit);
			}

			if ( actions.confirmMoveAction ) {
				view.showConfirmMoveAction(actions.confirmMoveAction);
			}

			if ( actions.unitsUnderAttack ) {
				view.showUnitsUnderAttack(actions.unitsUnderAttack);
			}

			if ( actions.confirmAttackAction ) {
				view.showConfirmAttackAction(actions.confirmAttackAction);
			}

			if ( actions.gravesToRaise ) {
				view.showGravesToRaise(actions.gravesToRaise);
			}

			if ( actions.buildingToFix ) {
				view.showFixBuilding(actions.buildingToFix);
			}

			if ( actions.buildingToOccupy ) {
				view.showBuildingToOccupy(actions.buildingToOccupy);
			}

			if ( actions.openStore ) {
				view.showOpenStore(actions.openStore);
			}

		},

		showAvailablePathViewWithTeamUnit: function (path) {

			path.forEach(function (xy) {
				this.createEventHandlerListener({
					x: xy.x,
					y: xy.y,
					className: 'show-available-path'
				});
			}, this);

		},

		showConfirmMoveAction: function (confirmMoveAction) {

			this.createEventHandlerListener({
				x: confirmMoveAction.x,
				y: confirmMoveAction.y,
				className: 'show-confirm-move'
			});

		},

		showUnitsUnderAttack: function (unitsUnderAttack) {

			unitsUnderAttack.forEach(function (xy) {
				this.createEventHandlerListener({
					x: xy.x,
					y: xy.y,
					className: 'show-unit-under-attack'
				});
			}, this);

		},

		showConfirmAttackAction: function (confirmAttackAction) {

			this.createEventHandlerListener({
				x: confirmAttackAction.x,
				y: confirmAttackAction.y,
				className: 'show-confirm-attack'
			});

		},

		showGravesToRaise: function (graves) {

			graves.forEach(function (xy) {
				this.createEventHandlerListener({
					x: xy.x,
					y: xy.y,
					className: 'show-raise-skeleton'
				});
			}, this);

		},

		showFixBuilding: function (building) {

			this.createEventHandlerListener({
				x: building.x,
				y: building.y,
				className: 'show-fix-building'
			});

		},

		showBuildingToOccupy: function (building) {

			this.createEventHandlerListener({
				x: building.x,
				y: building.y,
				className: 'show-occupy-building'
			});

		},

		showOpenStore: function (xy) {

			this.createEventHandlerListener({
				x: xy.x,
				y: xy.y,
				className: 'show-open-store'
			});

		},

		clearAvailableActions: function () {

			var view = this,
				util = view.util,
				nodes = util.findInAll(view.$el[0], view.selectors.eventSquares),
				parentNode = nodes[0] && nodes[0].parentNode;

			nodes.forEach(function (node) {
				parentNode.removeChild(node);
			});

			view.restoreActiveSquare();

		},

		updateStatusBar: function () {

			var view = this,
				model = view.get('model'),
				activePlayer = model.get('activePlayer'),
				unitLimit = model.get('unitLimit'),
				color = activePlayer.color,
				money = activePlayer.money,
				playerUnits = model.getUnitsByOwnerId(activePlayer.id),
				obj = {
					color: color,
					unitLimit: unitLimit,
					unitCount: playerUnits.length,
					money: money
				},
				$node = view.tmpl['battle-view-status-bar'](obj),
				$statusBarWrapper = view.$el.find(view.selectors.statusBar);

			$statusBarWrapper.empty().append($node);

		},

		bindEventListeners: function () {
			var device = win.APP.device;
			this.listenTo(device, 'resize', this.onResize);
		},

		unbindEventListeners: function () {
			this.stopListening();
			this.get('mover').unbindEventListeners();
		},

		onResize: function () {

			var mover = this.get('mover');
			mover.detectSizes();
			mover.detectEdgePositions();
			mover.onResizeCheckState();

		},

		createEventHandlerListener: function (data) { // x, y, className

			var view = this,
				util = view.util,
				x = data.x,
				y = data.y,
				className = data.className || '',
				squareSize = view.getSquareSize(),
				pre = view.info.get('pre', true).css,
				node = doc.createElement('div'),
				prevNode = util.findIn(view.$el[0], view.selectors.eventSquares + '[data-xy="x' + x + 'y' + y + '"]'),
				wrapper;

			if ( prevNode ) {
				prevNode.parentNode.removeChild(prevNode);
			}

			node.className = ('js-square js-event-square square ' + className).trim();

			node.setAttribute('data-xy', 'x' + x + 'y' + y);
			node.setAttribute('data-x', x);
			node.setAttribute('data-y', y);

			node.setAttribute('style', pre + 'transform: translate3d(' + (x * squareSize) + 'px, ' +  (y * squareSize) + 'px, 0);');

			wrapper = util.findIn(view.$el[0], view.selectors.eventHandlerWrapper);
			wrapper.appendChild(node);

			return node;
		},

		drawMap: function () {

			var $mapImageWrapper = this.$el.find(this.selectors.mapImageWrapper),
				canvas = $mapImageWrapper.get(0),
				ctx = canvas.getContext('2d'),
				getXYFromStringXY = this.util.getXYFromStringXY,
				xyStr = this.util.getStringFromXY,
				map = this.get('map'),
				squareSize = this.getSquareSize(),
				squareSizeX2,
				mapTiles = win.APP.mapTiles,
				terrains = map.terrain,
				angleTypes = ['road', 'water'],
				reBridge = /^bridge\-\d+$/;

			squareSize = Math.max(squareSize, Math.round(this.squareSize.max * 0.66) ); // set max
			squareSize = Math.min(squareSize, this.squareSize.min * 2); // and min square

			if ( this.info.get('isIOS', true) ) {
				squareSize = 24; // see tiles image size
			}

			squareSizeX2 = squareSize * 2;

			canvas.width = map.size.width * 2 * squareSize;
			canvas.height = map.size.height * 2 * squareSize;

			// reduce blur
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			// draw angles road
			angleTypes.forEach(function (type) {

				var re = new RegExp('^(' + type +'|bridge)\\-' + '\\d+$');

				_.each(terrains, function (value, xy) {

					if ( !re.test(value) || reBridge.test(value) ) {
						return;
					}

					xy = getXYFromStringXY(xy);

					var x = xy.x,
						y = xy.y,
						xl = x - 1,
						xr = x + 1,
						yu = y - 1,
						yd = y + 1,
						xSquareSizeX2 = x * squareSizeX2,
						ySquareSizeX2 = y * squareSizeX2,
						xSquareSizeX2Half = xSquareSizeX2 + squareSize,
						ySquareSizeX2Half = ySquareSizeX2 + squareSize,
						t1 = re.test(terrains[xyStr(xl, yu)] || value),
						t2 = re.test(terrains[xyStr(x, yu)] || value),
						t3 = re.test(terrains[xyStr(xr, yu)] || value),
						t4 = re.test(terrains[xyStr(xl, y)] || value),
						t6 = re.test(terrains[xyStr(xr, y)] || value),
						t7 = re.test(terrains[xyStr(xl, yd)] || value),
						t8 = re.test(terrains[xyStr(x, yd)] || value),
						t9 = re.test(terrains[xyStr(xr, yd)] || value);

					// draw 2, 4, 6, 8
					if ( !t2 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-2'].img, xSquareSizeX2, ySquareSizeX2, squareSizeX2, squareSize);
					}

					if ( !t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-4'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( !t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-6'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( !t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-8'].img, xSquareSizeX2, ySquareSizeX2Half, squareSizeX2, squareSize);
					}

					// draw 1, 3, 7, 9 - normal
					if ( !t1 && !t2 && !t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t3 && !t2 && !t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t7 && !t4 && !t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( !t9 && !t6 && !t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// draw 1, 3, 7, 9 - small
					if ( t2 && t4 && !t1 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1-s'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t2 && t6 && !t3 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3-s'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t4 && t8 && !t7 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7-s'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( t6 && t8 && !t9 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9-s'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

				});

			});

		},

		drawBuildings: function () {
			var model = this.get('model');
			model.appendBuildings();
		},

		appendBuilding: function (building) {

			var $node = $('<div>&nbsp;</div>'),
				x = building.x,
				y = building.y,
				dY = building.type === 'castle' ? -1 : 0,
				squareSize = this.getSquareSize(),
				height = squareSize - squareSize * dY,
				pre = this.info.get('pre', true).css,
				$wrapper = this.$el.find(this.selectors.buildingWrapper);

			$node.attr('data-xy', 'x' + x + 'y' + y).attr('data-x', x).attr('data-y', y).attr('data-type', building.type);

			$node.addClass('building').addClass('js-building').addClass('square');

			if (building.state === 'normal') {
				$node.addClass( 'building-' + building.type + '-' + building.color );
			}

			if (building.state === 'destroyed') {
				$node.addClass( 'building-' + building.type + '-destroyed' );
			}

			x = x * squareSize;
			y = (y + dY) * squareSize;

			$node.css(pre + 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');

			$node.css({
				height: height + 'px'
			});

			if (building.type === 'farm' && building.hasOwnProperty('ownerId')) {
				this.addSmokeToBuilding(building);
			}

			$wrapper.append($node);

		},

		redrawBuilding: function (building) {

			var view = this,
				state = building.state,
				color = building.color || win.APP.building.defaults.color,
				type = building.type,
				x = building.x,
				y = building.y,
				$wrapper = view.$el.find(view.selectors.buildingWrapper),
				$buildingNode = $wrapper.find('[data-xy="x' + x + 'y' + y + '"]');

			$buildingNode.attr('class', '').addClass('building js-building square');

			if ( state === 'normal' ) {
				$buildingNode.addClass( 'building-' + type + '-' + color );
			}

			if ( state === 'destroyed' ) {
				$buildingNode.addClass( 'building-' + type + '-destroyed' );
				view.removeSmokeToBuilding(building);
			}

			if ( type === 'farm' && building.hasOwnProperty('ownerId') ) {
				view.addSmokeToBuilding(building);
			} else {
				view.removeSmokeToBuilding(building);
			}

		},

		addSmokeToBuilding: function (building) {

			var x = building.x,
				y = building.y,
				pre = this.info.get('pre', true).css,
				squareSize = this.getSquareSize(),
				$wrapper = this.$el.find(this.selectors.smokeWrapper),
				$smokeContainer = $('<div class="smoke-container square js-square"><div class="building-smoke">&nbsp;</div></div>');

			$smokeContainer.attr('data-xy', 'x' + x + 'y' + y).attr('data-x', x).attr('data-y', y);

			x *= squareSize;
			y *= squareSize;

			$smokeContainer.css(pre + 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');

			$wrapper.append($smokeContainer);

		},

		removeSmokeToBuilding: function (building) {

			var x = building.x,
				y = building.y,
				$wrapper = this.$el.find(this.selectors.smokeWrapper),
				$smokeContainer = $wrapper.find('[data-xy="x' + x + 'y' + y + '"]');

			$smokeContainer.remove();

		},

		drawUnits: function () {
			var model = this.get('model');
			model.appendUnits();
		},

		appendUnit: function (unit) {

			var view = this,
				pre = view.info.get('pre', true).css,
				$unitWrapper = $('<div></div>'),
				squareSize = view.getSquareSize(),
				$unitBlock = $('<div>&nbsp;</div>'),
				unitInfo = unit.toJSON(),
				x = unitInfo.x,
				y = unitInfo.y,
				cssX = x * squareSize,
				cssY = y * squareSize,
				unitType = unit.get('type'),
				isCommander = unit.isCommander(),
				$unitLayerWrapper = view.$el.find(view.selectors.unitsWrapper);

			$unitWrapper.css(pre + 'transform', 'translate3d(' + cssX + 'px, ' + cssY + 'px, 0)');

			$unitWrapper.attr({
				'data-x': x,
				'data-y': y,
				'data-xy': 'x' + x + 'y' + y,
				'data-unit-id': unitInfo.id
			});

			$unitWrapper.addClass('js-square square unit-wrapper unit-wrapper-' + unitType);

			$unitWrapper.append($unitBlock);

			$unitBlock.addClass('unit-image unit-image-' + unitType + '-' + unitInfo.color);

			// health
			$unitWrapper.append('<div class="js-unit-health unit-health"><div class="js-unit-health-ten unit-health-ten">&nbsp;</div><div class="js-unit-health-one unit-health-one">&nbsp;</div></div>');

			// delta health
			$unitWrapper.append('<div class="js-delta-unit-health delta-unit-health"><div class="js-delta-unit-health-sign delta-unit-health-sign">&nbsp;</div><div class="js-delta-unit-health-ten delta-unit-health-ten">&nbsp;</div><div class="js-delta-unit-health-one delta-unit-health-one">&nbsp;</div></div>');

			// wisp aura
			$unitWrapper.append('<div class="js-under-wisp-aura-image under-wisp-aura-image">&nbsp;</div>');

			// poisoned
			$unitWrapper.append('<div class="js-under-poison-image under-poison-image">&nbsp;</div>');

			// level
			$unitWrapper.append('<div class="js-unit-level unit-level">&nbsp;</div>');

			// level up
			$unitWrapper.append('<div class="js-unit-level-up unit-level-up">&nbsp;</div>');

			$unitLayerWrapper.append($unitWrapper);

			view.setUnitHealth({ unit: unit });

			view.setUnitLevel({ unit: unit, doNotShowLevelUp: isCommander });

		},


		removeUnit: function (unit) {

			this.getUnitByUnit(unit).remove();

		},

		getUnitByUnit: function (unit) {
			return this.$el.find(this.selectors.unitsWrapper + ' [data-unit-id="' + unit.get('id') + '"]');
		},

		setActiveUnit: function (unit) {
			this.getUnitByUnit(unit).removeClass('not-active');
		},

		setNotActiveUnit: function (unit) {
			this.getUnitByUnit(unit).addClass('not-active');
		},

		addGrave: function (grave) {

			var view = this,
				pre = view.info.get('pre', true).css,
				$graveWrapper = $('<div></div>'),
				squareSize = view.getSquareSize(),
				x = grave.x,
				y = grave.y,
				cssX = x * squareSize,
				cssY = y * squareSize,
				$unitLayerWrapper = view.$el.find(view.selectors.unitsWrapper);

			$graveWrapper.css(pre + 'transform', 'translate3d(' + cssX + 'px, ' + cssY + 'px, 0)');

			$graveWrapper.attr({
				'data-x': x,
				'data-y': y,
				'data-xy': 'x' + x + 'y' + y,
				'data-grave-id': grave.id
			});

			$graveWrapper.addClass('js-square square grave-wrapper');

			$unitLayerWrapper.append($graveWrapper);

		},

		removeGrave: function (grave) {

			var view = this,
				$graveWrapper = view.$el.find(view.selectors.unitsWrapper + ' [data-grave-id="' + grave.id + '"]');

			$graveWrapper.remove();

		},

		setWispAuraState: function (data) {

			var view = this,
				unit = data.unit,
				wispAuraState = data.wispAuraState,
				$unitNode = view.getUnitByUnit(unit);

			return wispAuraState ? $unitNode.addClass('under-wisp-aura') : $unitNode.removeClass('under-wisp-aura');

		},

		setPoisonState: function (data) {

			var view = this,
				unit = data.unit,
				poisonCount = data.poisonCount,
				$unitNode = view.getUnitByUnit(unit);

			return poisonCount ? $unitNode.addClass('under-poison') : $unitNode.removeClass('under-poison');

		},

		getSquareSize: function () {
			return this.info.get('squareSize');
		},

		setSize: function () {

			var squareSize = this.getSquareSize() || this.squareSize.default,
				selectors = this.selectors,
				$moveAreaContainer = this.$el.find(selectors.moveAreaContainer),
				$mapImageWrapper = this.$el.find(selectors.mapImageWrapper),
				$eventHandlerWrapper = this.$el.find(selectors.eventHandlerWrapper),
				$squares = this.$el.find(selectors.square),
				$buildings = this.$el.find(selectors.building),
				map = this.get('map'),
				pre = this.info.get('pre', true).css,
				width = map.size.width * squareSize,
				height = map.size.height * squareSize;

			this.info.set('squareSize', squareSize);

			// set container
			$moveAreaContainer.css({
					width: width + 'px',
					height: height + 'px'
				});

			// set canvas
			$mapImageWrapper.css({
					width: width + 'px',
					height: height + 'px'
				});

			//set event handler wrapper
			$eventHandlerWrapper.css({
					width: width + 'px',
					height: height + 'px'
				});

			// set squares sizes
			$squares.each(function () {

				var $this = $(this),
					x = Number($this.attr('data-x')) * squareSize,
					y = Number($this.attr('data-y')) * squareSize;

				$this.css(pre + 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');

			});

			// set buildings position
			$buildings.each(function () {

				var $this = $(this),
					type = $this.attr('data-type'),
					x = Number($this.attr('data-x')),
					y = Number($this.attr('data-y')),
					dY = type === 'castle' ? -1 : 0,
					nodeHeight = squareSize - squareSize * dY;

				x = x * squareSize;
				y = (y + dY) * squareSize;

				$this.css(pre + 'transform', 'translate3d(' + x + 'px, ' + y + 'px, 0)');

				$this.css({
					height: nodeHeight + 'px'
				});

			});

			this.autoSetStyleForSize();

		},

		autoSetStyleForSize: function () {

			var view = this,
				squareSize = view.getSquareSize(),
				$el = view.$el,
				selectors = view.selectors,
				$style = $el.find(selectors.styleSquareSize);

			$style.html('.square { width: ' + squareSize + 'px; height: ' + squareSize + 'px; }');

		},

		bindMoveArea: function () {

			var moveAreaWrapper = this.$el.find(this.selectors.moveAreaWrapper),
				moveAreaContainer = moveAreaWrapper.find(this.selectors.moveAreaContainer),
				mover = new Mover({
					wrapper: moveAreaWrapper,
					container: moveAreaContainer,
					onRedraw: {
						context: this,
						fn: this.onRedrawMapFromMover
					}
				});

			mover.init();

			win.mover = mover;

			this.set('mover', mover);

		},

		onRedrawMapFromMover: function (data) {

			var xyzs = data.xyzs,
				time = xyzs.hasOwnProperty('time') ? xyzs.time : 300,
				scale = xyzs.scale,
				x = xyzs.x,
				y = xyzs.y,
				z = xyzs.z,
				squareSize = Math.round(this.getSquareSize() * scale),
				mover = this.get('mover');

			squareSize = win.APP.util.getBetween(this.squareSize.min, squareSize, this.squareSize.max);

			this.info.set('squareSize', squareSize);

			this.setSize();

			mover.detectSizes();
			mover.detectEdgePositions();
			mover.setDefaultContainerSize();
			mover.setStyleByXYZS({
				x: x,
				y: y,
				z: z,
				time:  time,
				check: true // fix if user up two finger simultaneously
			});

			mover.set('currentContainerXY', { // fix if user up two finger simultaneously
				x: x,                         // see mover.fixAfterResizing
				y: y
			});

		},

		detectClickEvent: function () {

			this.events[this.eventTypes.down + ' ' + this.selectors.moveAreaContainer] = 'saveDownEvent';
			this.events[this.eventTypes.move + ' ' + this.selectors.moveAreaContainer] = 'saveMoveEvent';
			//this.events[this.eventTypes.up + ' ' + this.selectors.eventHandlerWrapper] = 'detectClick';
			this.events[this.eventTypes.up + ' ' + '.js-main-event-handler'] = 'detectClick';
		},

		detectClick: function (e) {

			var view = this,
				x,
				y,
				downXY = view.get('downEvent'),
				moveXY = view.get('moveEvent'),
				maxDeltaMove = 10,

				// math analise,
				selectors,
				$el,
				$moveAreaWrapper,
				$moveAreaContainer,
				squareSize,
				$mainEventHandler,
				w, h, aw, ah, dxy;


			if ( !downXY || !moveXY ) {
				return;
			}

			if ( Math.abs(downXY.x - moveXY.x) + Math.abs(downXY.y - moveXY.y) >  maxDeltaMove ) {
				return;
			}

			selectors = view.selectors;
			$el = view.$el;
			$moveAreaWrapper = $el.find(selectors.moveAreaWrapper);
			$moveAreaContainer = $el.find(selectors.moveAreaContainer);
			squareSize = view.getSquareSize();
			$mainEventHandler = $(e.currentTarget);
			w = $moveAreaWrapper.width();
			h = $moveAreaWrapper.height();
			aw = $mainEventHandler.width();
			ah = $mainEventHandler.height();
			dxy = view.util.getXyFromStyle($moveAreaContainer.attr('style'));

			x = (aw - w) / 2 + downXY.x - dxy.x;
			y = (ah - h) / 2 + downXY.y - dxy.y;

			x = Math.floor( x / squareSize );
			y = Math.floor( y / squareSize );

			view.onClick({ x: x, y: y });

		},

		saveDownEvent: function (e) {

			var events = this.getEvents(e);

			if (events.length === 1) {
				this.set('downEvent', events.events[0]);
				this.set('moveEvent', events.events[0]);
			} else {
				this.set('downEvent', false);
				this.set('moveEvent', false);
			}

		},

		saveMoveEvent: function (e) {

			var events = this.getEvents(e);

			if (events.length === 1) {
				this.set('moveEvent', events.events[0]);
			} else {
				this.set('moveEvent', false);
			}

		},

		getEvents: function (e) {

			e = e.originalEvent;

			var evt = {},
				touches = e.touches,
				events = touches || [e];

			evt.events = [];

			evt.length = events.length;

			_.each(events, function (e) {
				evt.events.push({
					x: e.clientX,
					y: e.clientY
				});

			});

			return evt;

		},

		//////////////////
		// unit actions
		//////////////////

		moveUnitTo: function (data) {

			var view = this,
				model = view.get('model'),
				deferred = $.Deferred(),
				pre = view.info.get('pre', true).css,
				transitionEnd = view.get('transitionEnd'),
				squareSize = view.getSquareSize(),
				$unitNode = view.getUnitByUnit(data.unit),
				x = data.x,
				y = data.y,
				xPx = x * squareSize,
				yPx = y * squareSize;

			view.disable();

			$unitNode.addClass('moving');

			// set action on move end
			$unitNode.one(transitionEnd, function () {

				$(this)
					.removeClass('moving')
					.attr('data-x', x)
					.attr('data-y', y)
					.attr('data-xy', 'x' + x + 'y' + y);

				model.clearAvailableActions();
				view.clearAvailableActions();

				view.enable();

				deferred.resolve();

			}); // work only one time

			$unitNode.css(pre + 'transform', 'translate3d(' + xPx + 'px, ' + yPx + 'px, 0)');

			return deferred.promise();

		},

		showAttack: function (data) {

			var view = this,
				model = view.get('model'),
				from = data.from,
				to = data.to,
				deferred = $.Deferred(),
				pre = view.info.get('pre', true).css,
				transitionEnd = view.get('transitionEnd'),
				squareSize = view.getSquareSize(),
				$attackNode = $('<div class="attack-square square">&nbsp;</div>'),
				$unitsWrapper = view.$el.find(view.selectors.unitsWrapper);

			view.removeActiveSquare();

			$unitsWrapper.append($attackNode);

			$attackNode.css(pre + 'transform', 'translate3d(' + (from.x * squareSize) + 'px, ' + (from.y * squareSize) + 'px, 0)');


			$attackNode.one(transitionEnd, function () {

				$(this).remove();

				model.clearAvailableActions();
				view.clearAvailableActions();

				view.enable();

				deferred.resolve();

			}); // work only one time

			view.disable();

			$attackNode.addClass('moving');

			setTimeout(function () { // todo: try to do transitionEnd without this hack
				$attackNode.css(pre + 'transform', 'translate3d(' + (to.x * squareSize) + 'px, ' + (to.y * squareSize) + 'px, 0)');
			}, 0);


			return deferred.promise();

		},

		showDifferentUnitHealth: function (data) {

			var view = this,
				unit = data.unit,
				differentHealth = data.differentHealth,
				deferred = $.Deferred(),
				$unitWrapper = view.getUnitByUnit(unit),
				$deltaHealth = $unitWrapper.find('.js-delta-unit-health'),
				animationEnd = view.get('animationEnd');

			view.disable();

			view.setUnitHealth({ unit: unit });

			view.setUnitDifferentHealth({
				unit: unit,
				differentHealth: differentHealth
			});

			$deltaHealth.one(animationEnd, function () {

				$deltaHealth.removeClass('bounce');

				view.enable();

				deferred.resolve();

			}); // work only one time

			$deltaHealth.addClass('bounce');

			return deferred.promise();

		},

		chars: {
			charsList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'none', 'plus', 'minus', 'slash'],
			charReference: {
				'-': 'minus',
				'+': 'plus',
				'/': 'slash'
			}
		},

		setUnitHealth: function (data) {

			var view = this,
				charsList = view.chars.charsList,
				unit = data.unit,
				health = unit.get('health'),
				defaultHealth = unit.get('defaultHealth'),
				$unitWrapper = view.getUnitByUnit(unit),
				one = 'none',
				ten = 'none',
				$healthOne = $unitWrapper.find('.js-unit-health-one'),
				$healthTen = $unitWrapper.find('.js-unit-health-ten');

			_.each(charsList, function (char) {
				$healthOne.removeClass('number-1-' + char);
				$healthTen.removeClass('number-1-' + char);
			});

			if (health !== defaultHealth) {
				health = health.toString().split('');
				one = health.pop() || one;
				ten = health.pop() || ten;
			}

			$healthOne.addClass('number-1-' + one);
			$healthTen.addClass('number-1-' + ten);

		},

		setUnitDifferentHealth: function (data) {

			var view = this,
				charsList = view.chars.charsList,
				$unitWrapper = view.getUnitByUnit(data.unit),
				sign = 'none',
				one = 'none',
				ten = 'none',
				$deltaHealthSign = $unitWrapper.find('.js-delta-unit-health-sign'),
				$deltaHealthOne = $unitWrapper.find('.js-delta-unit-health-one'),
				$deltaHealthTen = $unitWrapper.find('.js-delta-unit-health-ten'),
				differentHealth = data.differentHealth;

			if ( differentHealth > 0 ) {
				sign = 'plus';
			}

			if ( differentHealth < 0 ) {
				sign = 'minus';
			}

			_.each(charsList, function (char) {
				$deltaHealthSign.removeClass('number-2-' + char);
				$deltaHealthOne.removeClass('number-2-' + char);
				$deltaHealthTen.removeClass('number-2-' + char);
			});

			differentHealth = Math.abs(differentHealth).toString();

			if ( differentHealth.length === 1 ) {
				one = differentHealth[0];
			}

			if ( differentHealth.length === 2 ) {
				one = differentHealth[1];
				ten = differentHealth[0];
			}

			$deltaHealthSign.addClass('number-2-' + sign);
			$deltaHealthOne.addClass('number-2-' + one);
			$deltaHealthTen.addClass('number-2-' + ten);

		},

		setUnitLevel: function (data) {

			var view = this,
				charsList = view.chars.charsList,
				unit = data.unit,
				level = unit.get('level'),
				$unitWrapper = view.getUnitByUnit(unit),
				$level = $unitWrapper.find('.js-unit-level');

			_.each(charsList, function (char) {
				$level.removeClass('number-1-' + char);
			});

			if ( !level ) {
				return;
			}

			$level.addClass('number-1-' + level);

			if ( !data.doNotShowLevelUp ) { // when commander was killed and was buy in unit store
				view.showLevelUp({
					unit: unit
				});
			}

		},

		showLevelUp: function (data) {

			var view = this,
				unit = data.unit,
				$unitWrapper = view.getUnitByUnit(unit),
				$levelUp = $unitWrapper.find('.js-unit-level-up'),
				animationEnd = view.get('animationEnd');

			$levelUp.one(animationEnd, function () {
				$(this).removeClass('move-up');
			}); // work only one time

			$levelUp.addClass('move-up');

		}

	});

}(window, window.document));

/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.en = {
		language: 'language',
		languageName: 'English',
		shortLanguageName: 'Eng',
		appName: 'AE2FG',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'play',
		online: 'online',
		settings: 'settings',
		instructions: 'instructions',
		about: 'about',

		// settings
		on: 'on',
		off: 'off',
		music: 'music',
		vibrate: 'vibrate',
		help: 'help',
		fightAnimation: 'fight animation',
		gameSpeed: 'game speed',
		confirmTurn: 'confirm turn',
		confirmMove: 'confirm move',
		confirmAttack: 'confirm attack',

		// play
		newGame: 'new game',
		loadGame: 'load game',
		selectLevel: 'select level',
		skirmish: 'skirmish',

		// setup skirmish
		player: 'player',
		cpu: 'cpu',
		none: 'none',
		money: 'money',
		unitLimit: 'unit limit',
		fight: 'fight',

		// colors
		blue: 'blue',
		red: 'red',
		green: 'green',
		black: 'black',

		rateUs: {
			header: 'Rate us, please!',
			notNow: 'not now',
			fiveStars: 'Yes, 5 stars!'
		},

		// unit store
		unitStoreHeader: 'Units',

		aboutText: 'Programmer:<br>Dmitry Turovtsov<br><br>Thanks:<br>Pavel Prylutski<br>Igor Kupreev<br>Pavel Sychykau',
		instructionsText: [
			'Ancient Empires is a thrilling strategy game putting you in the role of King Galamar as you fight to reclaim your kingdom.',
			'The flashing red/blue marks the movement range of a unit. A unit\'s range is determined by its type and the terrain it is on.',
			'Different types of terrain affect a unit\'s ability to move, attack and defend. For example, mountains add defence points but slow units down. When you tap to these terrain features appear at the bottom of the screen.',
			'When a unit has completed a move, unit becomes translucent. This means that it cannot be moved again until your next turn.',
			'You can move each unit only once each turn.',
			'Use \'+\' and \'-\' buttons (bottom-right corner) to scale map',
			'You can view the characteristics of any unit in store. Units get more powerful as they gain battle experience.',
			'To attack an enemy unit, move your unit within range and select \'attack\' icon. If there is more than one enemy in range, select which unit to attack. The success of your attack is determined by unit characteristics and terrain.',
			'Only a knight can occupy a castle. You can purchase new units with gold in castle.',
			'You can occupy buildings by moving a soldier onto it and selecting \'occupy\' icon. Once a building is occupied, it changes colour.',
			'Once a building has been occupied, it earns gold. The more buildings you occupy, the more you earn.',
			'Units can be healed by occupying buildings. The longer a unit stays, the more life it regains.',
			'Lizards are amphibious, giving them increased movement and defence when in water.',
			'A spider\'s attack is poisonous. A poisoned unit is weak for its next turn.',
			'A tombstone shows where a unit has been defeated. It disappears after 1 turn.',
			'Wizards have the power to summon skeleton warriors from the graves of fallen soldiers. After a unit has been defeated, a tombstone appears for 1 turn. Move a wizard next to a tombstone and select \'raise\' icon.',
			'Use wisps to provide nearby friendly units with an aura that augments their attack points.',
			'Keep your wyverns away from enemy archers, as they are vulnerable to arrows!'
		],
		unitsList: {
			'soldier': {
				name: 'soldier',
				description: ''
			},
			'archer': {
				name: 'archer',
				description: ''
			},
			'elemental': {
				name: 'elemental',
				description: ''
			},
			'sorceress': {
				name: 'sorceress',
				description: ''
			},
			'wisp': {
				name: 'wisp',
				description: ''
			},
			'dire-wolf': {
				name: 'dire wolf',
				description: ''
			},
			'golem': {
				name: 'golem',
				description: ''
			},
			'catapult': {
				name: 'catapult',
				description: ''
			},
			'dragon': {
				name: 'dragon',
				description: ''
			},
			'skeleton': {
				name: 'skeleton',
				description: ''
			},
			'galamar': {
				name: 'galamar',
				description: ''
			},
			'valadorn': {
				name: 'valadorn',
				description: ''
			},
			'demon-lord': {
				name: 'demon lord',
				description: ''
			},
			'saeth': {
				name: 'saeth',
				description: ''
			}

		}

	};

}(window));
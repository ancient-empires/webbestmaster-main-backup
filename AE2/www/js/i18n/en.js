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
		'gameSpeed-1': 'slower',
		'gameSpeed-2': 'slow',
		'gameSpeed-3': 'normal',
		'gameSpeed-4': 'fast',
		'gameSpeed-5': 'faster',
		gameDifficulty: 'game difficulty',
		easy: 'easy',
		normal: 'normal',
		hard: 'hard',

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

		// popups
		endTurnQuestion: 'End Turn?',
		yes: 'yes',
		no: 'no',
		ok: 'ok',

			// end game
		blackDefeat: 'Black player was defeat!',
		blueDefeat: 'Blue player was defeat!',
		greenDefeat: 'Green player was defeat!',
		redDefeat: 'Red player was defeat!',
		victory: 'Victory!',
		defeat: 'Defeat!',
		restartBattle: 'Restart',
		quitBattle: 'Quit',
		areYouSureToQuitBattle: 'Are you sure to quit battle?',
		areYouSureToRestartBattle: 'Are you sure to restart the battle?',

			// notification
		objective: 'objective',
		skirmishObjective: 'Defeat the enemy commander and occupy all enemy castles!',
		newTurn: 'new turn',
		income: 'income',

			//battle menu
		menu: 'menu',

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
				description: 'Soldiers are solid all-round fighters that form the backbone of any army. Soldiers are also the only unit that can capture towns to earn gold.'
			},
			'archer': {
				name: 'archer',
				description: 'With their powerful bows archers can attack from a distance and are especially powerful against airborne enemies.'
			},
			'elemental': {
				name: 'elemental',
				description: 'Elementals are magical water spirits. When in water, Elementals have greater movement and stronger defence.'
			},
			'sorceress': {
				name: 'sorceress',
				description: 'Skilled in the use of magic, Sorceresses are weak in close combat. However, their ability to summon fighting skeletons from dead troops can be decisive in battle.'
			},
			'wisp': {
				name: 'wisp',
				description: 'These mystical beings of pure light radiate an aura which strengthens the attacking abilities of nearby friendly units. In close combat they are especially deadly against skeletons.'
			},
			'dire-wolf': {
				name: 'dire wolf',
				description: 'Dire Wolves are feared hunters that travel in packs. Beware - their bite is poisonous and reduces both attack and defence levels for one turn.'
			},
			'golem': {
				name: 'golem',
				description: 'Golems are ancient beings - slow but immensely strong in defence. A golem stationed in a building or a well defended mountain is very difficult to defeat.'
			},
			'catapult': {
				name: 'catapult',
				description: 'Catapults blaze a trail of destruction with their enormous attack range. However, their relative immobility and inability to attack up close make them vulnerable, so guard them well. Catapults can either move or attack during a turn, but not do both.'
			},
			'dragon': {
				name: 'dragon',
				description: 'These massive flying beasts have ruled over the mountains of mist since ancient times. They are extremely mobile as well as deadly in attack on land, air and sea.'
			},
			'skeleton': {
				name: 'skeleton',
				description: 'Summoned by Sorceresses, these lifeless warriors are as strong as soldiers and deadly opponents on any battlefield.'
			},
			'galamar': {
				name: 'galamar',
				description: 'Galamar (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle.'
			},
			'valadorn': {
				name: 'valadorn',
				description: 'Valadorn (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle.'
			},
			'demon-lord': {
				name: 'demon lord',
				description: 'Demon Lords (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle.'
			},
			'saeth': {
				name: 'saeth',
				description: 'Saeth (commander) is very strong in attack and defence. Commanders can also occupy castles to produce troops and can be revived in the castle if they fall in battle.'
			}

		}

	};

}(window));
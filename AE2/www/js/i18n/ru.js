/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.ru = {
		language: 'Язык',
		languageName: 'Русский',
		shortLanguageName: 'Рус',
		appName: 'AE2FG',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'Играть',
		online: 'По сети',
		settings: 'Настройки',
		instructions: 'Инструкции',
		about: 'О программе',

		// settings
		on: 'вкл',
		off: 'выкл',
		music: 'музыка',
		vibrate: 'вибро',
		help: 'помощь',
		fightAnimation: 'анимация боя',
		gameSpeed: 'скорость игры',
		confirmTurn: 'подтверждение хода',
		confirmMove: 'подтверждение движения юнита',
		confirmAttack: 'подтверждение атаки',
		'gameSpeed-1': 'оч. медленно',
		'gameSpeed-2': 'медленно',
		'gameSpeed-3': 'обычная',
		'gameSpeed-4': 'быстро',
		'gameSpeed-5': 'оч. быстро',
		mainSettings: 'Основные настройки',
		gameDifficulty: 'Сложность игры',
		easy: 'легко',
		normal: 'нормально',
		hard: 'трудно',
		buildingSmoke: 'дым из труб',
		unitAnimation: 'анимация юнитов',
		autoSave: 'автосохранение',

		// play
		newGame: 'Новая игра',
		loadGame: 'Загрузить игру',
		selectLevel: 'Выбор уровня',
		skirmish: 'Схватка',
		mission: 'Миссия',

		// setup skirmish
		player: 'Игрок',
		cpu: 'ЦПУ',
		none: 'Нет',
		money: 'Деньги',
		unitLimit: 'Лимит войск',
		fight: 'В бой',
		team: 'Команда',

		// colors
		blue: 'синий',
		red: 'красный',
		green: 'зелёный',
		black: 'чёрный',

		rateUs: {
			header: 'Пожалуйста, оцените приложение!',
			notNow: 'не сейчас',
			fiveStars: 'Да, 5 звёзд!'
		},

		// unit store
		unitStoreHeader: 'Войска',

		// popups
		endTurnQuestion: 'Закончить ход?',
		yes: 'Да',
		no: 'Нет',
		ok: 'Ок',
		continue: 'продолжить',
		congratulations: 'Поздравления!',
		gameSaved: 'Игра сохранена',
		unlocked: 'доступна!',

			//save/load popup
		save: 'Сохранить',
		delete: 'Удалить',
		replace: 'Заменить',
		saveGame: 'Сохранить игру',
		areYouSureToDeleteSavedGame: 'Вы уверены, что хотите удалить сохранение?',
		areYouSureToLoadGame: 'Вы уверены, что хотите загрузить сохранение?',
		noSavedGames: 'Нет сохранённых игр',
		load: 'Загрузить',

			// end game
		blackDefeat: 'Чёрный игрок повержен!',
		blueDefeat: 'Синий игрок повержен!',
		greenDefeat: 'Зелёный игрок повержен!',
		redDefeat: 'Красный игрок повержен!',
		victory: 'Победа!',
		defeat: 'Поражение!',
		missionComplete: 'Миссия завершена!',
		restartBattle: 'Заново',
		quitBattle: 'Выход',
		areYouSureToQuitBattle: 'Вы уверены, что хотите покинуть сражение?',
		areYouSureToRestartBattle: 'Вы уверены, что хотите перезапустить сражение?',

			// notification
		objective: 'Цель',
		skirmishObjective: 'Поразить вражеского командира и захватить все вражеские замки!',
		newTurn: 'Смена хода',
		income: 'Доход',

			//battle menu
		menu: 'Меню',

		// map editor
		mapEditor: 'Редактор карт',
		maps: 'Карты',
		width: 'Ширина',
		height: 'Высота',
		name: 'Имя',
		colors: 'Цвета',

		//aboutText: 'Ancient Empire: strike back.<br><br><br>Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Алексей Данилов<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		aboutText: '<br><br><br>Ancient Empire: Strike Back.<br><br><br>Древняя Империя: Ответный Удар.<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: strike back\' is a thrilling strategy game that lets you control King Galamar and his brother Valadorn as they fight to protect their kingdom from evil.',
			'Next are instructions, hints and tips on how to play which also appear in the game.',
			'The red squares mark the movement range of a unit. A unit\'s range is determined by its type and the terrain it is on.',
			'Different types of terrain affect a unit\'s ability to move, attack and defend. For example, mountains add defence points but reduce movement. When you move the cursor these terrain features appear at the bottom of the screen.',
			'When a unit has completed a move, it will change to grey. This means that it cannot be used again until your next turn.',
			'You can move each unit only once each turn. When you have finished moving all your units tap \'end turn\'.',
			'Units get more powerful as they gain battle experience and are upgraded in rank.',
			'You can view the attack range of any unit by double tap when it is selected.',
			'To attack an enemy unit, move your unit within range and select \'attack\'. If there is more than one enemy in range, select which unit to attack. The success of your attack is determined by unit characteristics and terrain.',
			'Only a Commander can occupy a castle. Once a castle is occupied you can purchase new units with your gold. The Commander does not need to remain in the castle in order to purchase units.',
			'You can occupy buildings by moving a soldier or Commander onto it and selecting \'occupy\'. Once a building is occupied, it changes colour. If a building is damaged you must repair the building before it can be occupied.',
			'Once a building has been occupied, it earns gold. The more buildings you occupy, the more gold you earn.',
			'Units can be healed by occupying buildings. The longer a unit stays, the more life it regains.',
			'If a Commander is defeated in battle, he can be resurrected in a castle. The more times a Commander is defeated, the more expensive he is to resurrect.',
			'Water Elementals are amphibious, giving them increased movement, attack and defence when in water.',
			'An attack by Dire Wolves is poisonous. A poisoned unit is slow and weak for its next turn.',
			'A Sorceress has the power to summon skeleton warriors from the graves of fallen soldiers. After a unit has been defeated, a tombstone appears for 1 turn. Move a Sorceress next to a tombstone and select \'raise\'.',
			'Use Wisps to provide nearby friendly units with an aura that augments their attack points.',
			'The Catapult has the ability to destroy the enemy towns and help disrupt the flow of gold.',
			'Keep your Dragons away from enemy archers, as they are vulnerable to arrows!'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['To select unit tap (<img src="img/help/tap-finger.png" class="icon-in-text" />) to unit.', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - The red squares mark the movement range of a unit.', 'A unit\'s range is determined by its type and the terrain it is on.']
			},
			// 1
			{
				img: 'img/help/attack.png',
				text: ['To attack an enemy unit, move your unit within range and select <img src="img/help/attack-icon.png" class="icon-in-text" />.', 'If there is more than one enemy in range, select which unit to attack. The success of your attack is determined by unit characteristics and terrain.']
			},
			// 2
			{
				//img: 'img/help/occupy-castle.png',
				text: ['Only a Commander can occupy (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />) a castle.', 'Once a castle is occupied you can purchase new units with your gold.', 'The Commander does not need to remain in the castle in order to purchase units.']
			},
			// 3
			{
				//img: 'img/help/occupy-farm.png',
				text: ['You can occupy buildings by moving a soldier or Commander onto it and selecting \'occupy\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Once a building is occupied, it changes colour.', 'If a building is damaged you must repair (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) the building before it can be occupied.']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['A Sorceress has the power to summon skeleton warriors from the graves of fallen soldiers.', 'After a unit has been defeated, a tombstone appears for 1 turn.', 'Move a Sorceress next to a tombstone and select \'raise\' <img src="img/help/attack-icon.png" class="icon-in-text" />.']
			}
		],
		unitsList: {
			'soldier': {
				name: 'солдат',
				description: 'Солдаты это солидные всесторонние бойцы, которые сформируют костяк любой армии. Также солдаты - единственная единица, которая может захватывать города, приносящие золото.'
			},
			'archer': {
				name: 'лучник',
				description: 'Со своими мощными луками стрелки могут атаковать на расстоянии и особенно эффективны против летающих врагов.'
			},
			'elemental': {
				name: 'элементаль',
				description: 'Элементалы это магические водяные духи. Будучи в воде, Элементалы быстрее передвигаются и лучше защищаются.'
			},
			'sorceress': {
				name: 'ведьма',
				description: 'Натасканные в использовании магии, Ведьмы слабы в ближнем бою. Однако, их способность к вызову боевых скелетов из мертвых войск может стать решающей в битве.'
			},
			'wisp': {
				name: 'висп',
				description: 'Эти мистические существа чистого света излучают ауру, которая усиливает способности к атаке у ближайших дружественных единиц. В ближнем бою они особенно смертельны против скелетов.'
			},
			'dire-wolf': {
				name: 'лесной волк',
				description: 'Жуткие Волки - опасные охотники, которые передвигаются стаями. Будьте осторожны - их укусы ядовиты, что умельшает и атаку, и защиту на один ход.'
			},
			'golem': {
				name: 'голем',
				description: 'Големы - это древние существа - медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			'catapult': {
				name: 'катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			'dragon': {
				name: 'дракон',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			},
			'skeleton': {
				name: 'скелет',
				description: 'Вызванные ведьмами, эти безжизненные воины сильны как солдаты и смертельные оппоненты на любом поле боя.'
			},
			'galamar': {
				name: 'галамар',
				description: 'Галамар (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'valadorn': {
				name: 'валадорн',
				description: 'Валадорн (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'demon-lord': {
				name: 'демон лорд',
				description: 'Демон лорд (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'saeth': {
				name: 'саеф',
				description: 'Саеф (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'crystal': {
				name: 'crystal',
				description: 'Эти легендарные кристаллы были изначально выкопаны из руин Античной Цитадели. Мало что известно об их силе, за исключением того, что они, по слухам, могут защитить королевство, а также обладают силой, чтобы уничтожить его.'
			}
		},

		story: {
			list: [
				// 0
				//'With the passing of the war against the forces of darkness, the brothers Galamar and Valadorn are reunited in their rule of the kingdom of Thorin. The kingdom is slowly returning to its peace time ways, protected by three ancient crystals safely guarded in the temples of Courage, Wisdom and Life, when rumours of skirmishes in the North reach the palace...',
				'img/story/story-1-1.png_!_With the passing of the war against the forces of darkness, the brothers Galamar and Valadorn are reunited in their rule of the kingdom of Thorin. The kingdom is slowly returning to its peace time ways, protected by three ancient crystals safely guarded in the temples of Courage, Wisdom and Life, when rumours of skirmishes in the North reach the palace...',
				// 1
				//'\'And three was their number, three to protect, three to destroy. Mercy upon the wielder of their power, mercy upon our souls, for He shall unleash the heavenly fires onto this world.\'<br \/>[Verse 3:7 from the Crystal Prophecies, author unknown, translated from the only surviving transcript from the Age of Darkness]',
				'img/story/story-1-2.png_!_\'And three was their number, three to protect, three to destroy. Mercy upon the wielder of their power, mercy upon our souls, for He shall unleash the heavenly fires onto this world.\'<br \/>[Verse 3:7 from the Crystal Prophecies, author unknown, translated from the only surviving transcript from the Age of Darkness]',
				// 2
				//'A messenger from the Temple of Courage arrives at the castle gates, pleading for the King\'s assistance - the Temple has fallen prey to brutal attackers, and must be protected...',
				'img/story/story-1-3.png_!_A messenger from the Temple of Courage arrives at the castle gates, pleading for the King\'s assistance - the Temple has fallen prey to brutal attackers, and must be protected...',
				// 3
				//'With the help of the Elementals, King Galamar finally reaches the Temple of Life one step before the enemy...',
				'img/story/story-4-1.png_!_With the help of the Elementals, King Galamar finally reaches the Temple of Life one step before the enemy...',
				// 4
				//'Galamar and Valadorn follow the path of destruction left behind by the dragon and find themselves at the ruins of the Ancient Citadel...',
				'img/story/story-8-1.png_!_Galamar and Valadorn follow the path of destruction left behind by the dragon and find themselves at the ruins of the Ancient Citadel...',
				// 5
				//'\'And the Earth shall tremble, and the skies shall weep. For He who is the destroyer shall be destroyed, for the He who is the taker shall be taken. And a new age, free of evil and darkness shall dawn.\'<br>[Final verse from the Crystal Prophecies, author unknown, never translated, lost during the age of darkness]'
				'img/story/story-8-2.png_!_\'And the Earth shall tremble, and the skies shall weep. For He who is the destroyer shall be destroyed, for the He who is the taker shall be taken. And a new age, free of evil and darkness shall dawn.\'<br>[Final verse from the Crystal Prophecies, author unknown, never translated, lost during the age of darkness]'
			]
		}

	};

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.en = {
		language: '语言',
		languageName: '简体中文',
		shortLanguageName: 'CHS',
		appName: '远古帝国：反击',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: '游戏',
		online: '在线模式',
		settings: '系统设置',
		instructions: '操作提示',
		about: '相关',

		// settings
		on: '开启',
		off: '关闭',
		music: '音乐',
		vibrate: '振动',
		help: '帮助',
		youCanDisableHelpNotification: '你可以开启/关闭帮助文本在\'系统设置\'',
		fightAnimation: '战斗动画',
		gameSpeed: '游戏速度',
		confirmTurn: '确认回合',
		confirmMove: '确认移动',
		confirmAttack: '确认进攻',
		'gameSpeed-1': '慢速',
		'gameSpeed-2': '较慢',
		'gameSpeed-3': '正常',
		'gameSpeed-4': '较快',
		'gameSpeed-5': '快速',
		mainSettings: '主要设置',
		gameDifficulty: '游戏难度',
		font: '字体',
		easy: '简单',
		normal: '正常',
		hard: '困难',
		buildingSmoke: '建筑烟雾',
		unitAnimation: '单位动画',
		autoSave: '自动保存',

		// play
		newGame: '新游戏',
		loadGame: '载入游戏',
		selectLevel: '选择等级',
		skirmish: '遭遇战',
		userMaps: '自制地图',
		userMap: '编辑地图',
		mission: '战役',

		// setup skirmish
		player: '玩家',
		cpu: '电脑',
		none: '空白',
		money: '起始资金',
		unitLimit: '单位限制',
		fight: '战斗',
		team: '队伍',

		// colors
		blue: '蓝色',
		red: '红色',
		green: '绿色',
		black: '黑色',

		rateUs: {
			header: '请给我们的产品打个分吧！',
			notNow: '不是现在！',
			fiveStars: '没问题！五星好评！'
		},

		// unit store
		unitStoreHeader: '单位',

		// popups
		endTurnQuestion: '结束回合吗？',
		yes: '是的',
		no: '不要',
		ok: '好的',
		continue: '继续',
		congratulations: '恭喜你!',
		gameSaved: '游戏已保存',
		unlocked: '解锁!',

			//save/load popup
		save: '保存',
		delete: '删除',
		replace: '替换',
		saveGame: '保存游戏',
		areYouSureToDeleteSavedGame: '你确定要删除已保存的游戏吗？',
		areYouSureToLoadGame: '你确定要载入档案吗？',
		noSavedGames: '没有记录',
		load: '载入',

			// end game
		blackDefeat: '黑色队伍被击败了!',
		blueDefeat: '蓝色队伍被击败了!',
		greenDefeat: '绿色队伍被击败了!',
		redDefeat: '红色队伍被击败了!',
		victory: '胜利!',
		defeat: '失败!',
		missionComplete: '任务完成!',
		restartBattle: '重新开始',
		quitBattle: '退出',
		areYouSureToQuitBattle: '你确定要离开战役吗?',
		areYouSureToRestartBattle: '你确定要重新开始战役吗?',

			// notification
		objective: '任务目标e',
		skirmishObjective: '击败敌方的指挥官并占领所有城堡!',
		newTurn: '新回合!',
		income: '收入',
		tooMuchUnits: '过多的单位!',

			//battle menu
		menu: '菜单',

		// map editor
		mapEditor: '地图编辑器',
		maps: '地图',
		width: '宽度',
		height: '高度',
		name: '名称',
		colors: '颜色',
		open: '打开',
		clean: '清除',
		exit: '退出',
		areYouSureToLeaveMapEditor: '你确定要退出地图编辑器吗?',
		unsavedMapProgressWillBeLost: '未保存的数据将会丢失!',
		noSavedMaps: '没有保存过的地图',
		youAreSureToDeleteMap: '确定要删除地图吗?',
		mapHasBeenSaved: '地图已保存.',
		mapHasBeenDeleted: '地图已删除',
		cleanMapNotSavedDataWillBeLost: '要清除地图吗？未被保存的数据将会遗失.',
		needMoreUnitsOrBuildings: '需要更多单位或建筑',
		enterMapName: '输入地图名称',
		mapName: '地图名称',

		// other
		disableAllTips: '关闭所有提示',

		//aboutText: '<br><br><br>Ancient Empire: Strike Back.<br><br><br><!--Programmer:<br>Dmitry Turovtsov<br><br>Thanks:<br>Alexey Danilov<br>Pavel Prylutski<br>Igor Kupreev<br>Pavel Sychykau-->',
		aboutText: '<br><br><br>Ancient Empire:<br>Strike Back<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: Strike Back\' 是一款惊心动魄的策略战棋游戏，你需要控制国王格拉玛和他的兄弟渥拉顿与恶魔战斗来保卫他们的国度。',
			'接下来是一些关于如何进行游戏的提示（在游戏过程中也可以看到这些提示）。',
			'红色的区域是一个单位可以移动的范围. 一个单位可以移动的范围由它的兵种属性和地形共同决定。',
			'不同的地形会影响单位的移动、攻击和防御。举例来说，山地形可以提高单位的防御力，但是减少单位的移动力。当你把光标移动到不同的地形上时，屏幕上将会出现相关的说明。',
			'当一个单位行动完成后，他的颜色将会变灰，并且在你的下一个回合前将无法行动。',
			'每回合你可以让你的每个单位行动一次。 当你的所有单位均行动完毕后请点击 \'结束回合\'.',
			'你的单位可以在战斗中获得经验值并升级，这会让他们变得更强。',
			'你可以双击一个选取的单位来查看他的攻击范围。',
			'想攻击一个敌方单位，将你的单位移动到他的附近并点选 \'攻击\'. 如果范围内有不止一个目标，你需要选取进攻的对象。进攻的效果取决于单位的能力和地形。',
			'只有指挥官可以占领城堡。当一个城堡被占领时你可以用金币来征召新的单位。即使指挥官不在城堡里你依然可以这样做。',
			'你可以将指挥官或者士兵移动到建筑上并点击 \'占领\'来占领建筑。当一个建筑被占领时，它的颜色将会改变。当一个建筑被破坏时，你必须先修复它，才能占领。',
			'每一个被占领的建筑都会提供给你金币，多占领建筑来提升你的收入！',
			'单位可以在建筑里获得回复，停留的时间越长，回复越多。',
			'当指挥官被击败后，可以在城堡中重新征召。',
			'水元素是神奇的生物，在水中他们可以获得攻击力、防御力和移动上的加成。',
			'恶狼的攻击是有毒的！这种毒将会虚弱目标一个回合。',
			'女巫可以从死亡单位的墓碑上召唤骷髅。当一个单位死亡后，将会产生一个持续1回合的墓碑。将你的女巫移动到墓碑边上并选择 \'召唤\'.',
			'小精灵可以保护周围的友方单位，给他们提供一个增加攻击力的光环。',
			'投石机可以帮助你破坏敌方的建筑，切断他们的经济来源。',
			'确保你的龙远离弓箭手！面对弓箭它们非常的脆弱！'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['要选择一个单位请单击 (<img src="img/help/tap-finger.png" class="icon-in-text" />) 该单位.', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - 红色的区域是一个单位可以移动的范围.', '一个单位可以移动的范围由它的兵种属性和地形共同决定']
			},
			// 1
			{
				img: 'img/help/attack.png',
				text: ['想攻击一个敌方单位，将你的单位移动到他的附近并点选 \'攻击\'. <img src="img/help/attack-icon.png" class="icon-in-text" />.', '如果范围内有不止一个目标，你需要选取进攻的对象。进攻的效果取决于单位的能力和地形。']
			},
			// 2
			{
				//img: 'img/help/occupy-castle.png',
				text: ['Only a Commander can occupy (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />) a castle.', 'Once a castle is occupied you can purchase new units with your gold.', 'The Commander does not need to remain in the castle in order to purchase units.']
			},
			// 3
			{
				//img: 'img/help/occupy-farm.png',
				text: ['You can occupy buildings by moving a Soldier or Commander onto it and selecting \'occupy\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Once a building is occupied, it changes colour.', 'If a building is damaged you must repair (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) the building before it can be occupied.']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['A Sorceress has the power to summon Skeleton warriors from the graves of fallen units.', 'After a unit has been defeated, a tombstone appears for 1 turn.', 'Move a Sorceress next to a tombstone and select \'raise\' <img src="img/help/attack-icon.png" class="icon-in-text" />.']
			}
		],
		unitsList: {
			'soldier': {
				name: '士兵',
				description: '士兵是全能型的战士，是所有部队的基础。士兵也是唯一可以占领建筑来产生金币的单位。'
			},
			'archer': {
				name: '弓箭手',
				description: '装备着精良的弓箭，弓箭手们可以在远处发起强大的攻击，尤其对空中的生物非常致命。'
			},
			'elemental': {
				name: '水元素',
				description: '水元素是神奇的生物，在水中他们可以获得攻击力、防御力和移动上的加成。'
			},
			'sorceress': {
				name: '女巫',
				description: '钻研着神秘的黑魔法，虽然对于近身战斗并不擅长，女巫却可以从墓碑中召唤出可怕的骷髅战士来改变战局。'
			},
			'wisp': {
				name: '小精灵',
				description: '这种神奇的光亮生物可以给附近的友军提供一个增加攻击力的光环，他们的光芒也对骷髅非常致命。'
			},
			'dire-wolf': {
				name: '恶狼',
				description: '恶狼是邪恶的觅食者。他们的毒牙可以削弱目标的攻击力与防御力一回合。'
			},
			'golem': {
				name: '石像',
				description: '石像是远古的生物——缓慢却坚韧。一个驻守在建筑里的石像是非常难以被击败的。'
			},
			'catapult': {
				name: '投石车',
				description: '投石车有着长远的射程和恐怖的破坏力，然而这样的优势却也有着相当大的代价，那就是移动与攻击不能并存。他们可以破坏你的建筑来阻止你获得金币，要小心了。'
			},
			'dragon': {
				name: '龙',
				description: '这种传奇的生物一直都生活在世界的顶端，他们的吐息对于任何生物来说都是一种灾难，他们的翅膀也帮助他们可以在各种地形上高速移动。'
			},
			'skeleton': {
				name: '骷髅',
				description: '被女巫从墓碑中召唤出来，这种不死的生物对于死亡没有任何的恐惧，尽管战斗力不如生前，他们依然是战场上不可忽视的力量。'
			},
			'galamar': {
				name: '格拉玛',
				description: '格拉玛 (指挥官) 在攻防两端都有着优异的能力，是军队的核心与领袖。 当被击败后，指挥官也可以在城堡中被复活。游戏的每一种势力都有对应的指挥官。'
			},
			'valadorn': {
				name: '渥拉顿',
				description: '渥拉顿 (指挥官)在攻防两端都有着优异的能力，是军队的核心与领袖。 当被击败后，指挥官也可以在城堡中被复活。游戏的每一种势力都有对应的指挥官。'
			},
			'demon-lord': {
				name: '恶魔领主',
				description: '恶魔领主 (指挥官)在攻防两端都有着优异的能力，是军队的核心与领袖。 当被击败后，指挥官也可以在城堡中被复活。游戏的每一种势力都有对应的指挥官。'
			},
			'saeth': {
				name: '西斯',
				description: '西斯 (指挥官)在攻防两端都有着优异的能力，是军队的核心与领袖。 当被击败后，指挥官也可以在城堡中被复活。游戏的每一种势力都有对应的指挥官。'
			},
			'crystal': {
				name: '水晶',
				description: '从远古遗迹中被发现的水晶，具备着神秘的能量，正义的人认为他象征着守护，而邪恶的人则利用他实施毁灭。'
			}
		},

		story: {
			list: [
				// 0
				'img/story/story-1-1.png_!_随着与黑暗势力作战的不断升级，国王格拉玛和他的兄弟渥拉顿为了遵守守卫领土的誓言再次联合在了一起。这个王国的和平是同三个守护水晶紧紧联系在一起的，而这些水晶正存放在勇气、智慧与生命神殿里。然而现在，战火已经波及到了这些神殿...',
				// 1
				'img/story/story-1-2.png_!_\'三个水晶，有人想要守护他们，而有人想要破坏他们。这些水晶是远古的产物，具有神秘的灵魂能量，没有人知道，他们会给这世界带来黑暗还是光明的力量...',
				// 2
				'img/story/story-1-3.png_!_勇气神殿的信使来到了城堡的大门前,向国王传递着信息——勇气神殿正在遭受攻击，我们必须守护住神殿...',
				// 3
				'img/story/story-4-1.png_!_借助这些精灵的帮助，国王格拉玛紧随着黑暗势力的脚步，到达了神殿...',
				// 4
				'img/story/story-8-1.png_!_格拉玛与渥拉顿追随着巨龙的足迹，最后却发现他们已经身处在一个古代遗迹之中...',
				// 5
				'img/story/story-8-2.png_!_\'世界终将和平，天空终将湛蓝。这些妄图摧毁世界的人必须被摧毁，想要夺取和平的人也终将被消灭。新的世界就要来临了。'
			]
		}

	};

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
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
		youCanDisableHelpNotification: 'Вы можете включить/отключить подсказки из \'Настройки\'',
		fightAnimation: 'анимация боя',
		gameSpeed: 'Скорость игры',
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
		font: 'Шрифт',
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
		userMaps: 'Свои карты',
		userMap: 'Своя карта',
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
		continue: 'Продолжить',
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
		tooMuchUnits: 'Слишком много юнитов!',

			//battle menu
		menu: 'Меню',

		// map editor
		mapEditor: 'Редактор карт',
		maps: 'Карты',
		width: 'Ширина',
		height: 'Высота',
		name: 'Имя',
		colors: 'Цвета',
		open: 'Открыть',
		clean: 'Очистить',
		exit: 'Выход',
		areYouSureToLeaveMapEditor: 'Вы уверены что хотите выйти из редактора карт?',
		unsavedMapProgressWillBeLost: 'Не сохранённые данные будут потеряны!',
		noSavedMaps: 'Нет сохранённых карт',
		youAreSureToDeleteMap: 'Вы уверены что хотите удалить карту?',
		mapHasBeenSaved: 'карта была сохранена.',
		mapHasBeenDeleted: 'карта была удалена',
		cleanMapNotSavedDataWillBeLost: 'Очистить карту? Не сохранённые данные будут потеряны!',
		needMoreUnitsOrBuildings: 'Нужно больше Юнитов или Зданий',
		enterMapName: 'Введите имя карты',
		mapName: 'Имя карты',

		// other
		disableAllTips: 'Отключить ВСЕ подсказки',

		//aboutText: 'Ancient Empire: strike back.<br><br><br>Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Алексей Данилов<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		aboutText: '<br>Ancient Empire:<br>Strike Back<br><br>Древняя Империя:<br>Ответный Удар<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: Strike Back\' - это захватывающая стратегия, которая позволяет вам управлять Королем Галамаром и его братом Валадорном в попытках защитить их королевство от зла.',
			'Далее последуют инструкции, подсказки и советы о том, как играть, которые также будут появляться в игре.',
			'Красные квадраты помечают область перемещения единицы. Границы единицы определяется ее типом и местностью, на которой она стоит.',
			'Разные типы местности влияют на способности единиц к передвижению, атаке и защите. Например, горы добавляют боевым единицам очки защиты, но замедляют скорость передвижения. Когда вы двигаете курсор через такие места, их особенности появляются внизу экрана.',
			'Когда единица завершит движение, она сменит цвет на серый. Она означает, что единица не может быть использована снова до следующего вашего хода.',
			'Вы можете перемещать единицу только один раз за ход. Когда вы закончите движение всех ваших единиц, то выберите \'конец хода\'.',
			'Единицы становятся более сильными, получая опыт в битвах.',
			'Вы можете увидеть пределы атаки любой единицы нажатием двойным нажатием на неё, когда она выбрана.',
			'Чтобы атаковать вражескую единицу, сдвиньте вашу единицу в пределы атаки и выберите \'атака\'. Если в пределах атаки находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.',
			'Только командир может занять замок. Как только замок оккупирован, вы можете покупать новые единицы за золото. Командиру не обязательно оставаться в замке, чтобы покупать единицы.',
			'Вы можете занимать здания, переместив Солдата или Командира на него и выбрав \'занять\'. Как только здание будет занято, оно сменит цвет. Если здание повреждено, вам придется отремонтировать его, перед тем как занять.',
			'Как только здание будет занято, оно начнет приносить золото. Чем больше зданий вы займете, тем больше заработаете.',
			'Единицы могут лечиться в занятых зданиях. Чем больше единица находится в здании, тем больше жизни восстановится.',
			'Если Командир погибнет в битве, его можно будет оживить в замке.',
			'Водные Элементалы - земноводные, что увеличивает им перемещение, атаку и защиту, когда они в воде.',
			'Атака Жутких Волков ядовита. Отравленная единица становится медленной и вялой в следующем ходе.',
			'Ведьма имеет силу поднимать скелетов-воинов из могил павших солдат. После поражения единицы на ее месте на 1 ход появится надгробие. Переместите Ведьму к надгробию и выберите \'поднять\'.',
			'Используйте Виспов, чтобы обеспечить ближайшие дружественные единицы аурой, которая усиливает их атаку.',
			'Катапульта может уничтожать вражеские города, что помогает прервать поток золота.',
			'Держите ваших Драконов подальше от вражеских стрелков, потому что они уязвимы перед стрелами!'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['Что бы выбрать еденицу нажмите (<img src="img/help/tap-finger.png" class="icon-in-text" />) на неё.', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - Красные квадраты помечают область перемещения единицы.', 'Границы единицы определяется ее типом и местностью, на которой она стоит.']
			},
			// 1
			{
				img: 'img/help/attack.png',
				text: ['Чтобы атаковать вражескую единицу, сдвиньте вашу единицу в пределы атаки и выберите <img src="img/help/attack-icon.png" class="icon-in-text" />.', 'Если в пределах атаки находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.']
			},
			// 2
			{
				//img: 'img/help/occupy-castle.png',
				text: ['Только командир может занять (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />) замок.', 'Как только замок оккупирован, вы можете покупать новые единицы за золото.', 'Командиру не обязательно оставаться в замке, чтобы покупать единицы.']
			},
			// 3
			{
				//img: 'img/help/occupy-farm.png',
				text: ['Вы можете занимать здания, переместив Солдата или Командира на него и выбрав \'занять\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Как только здание будет занято, оно сменит цвет.', 'Если здание повреждено, вам придется отремонтировать (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) его, перед тем как занять.']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['Ведьма имеет силу поднимать скелетов-воинов из могил павших солдат.', 'После поражения единицы на ее месте на 1 ход появится надгробие.', 'Переместите Ведьму к надгробию и выберите \'поднять\' <img src="img/help/attack-icon.png" class="icon-in-text" />.']
			}
		],
		unitsList: {
			'soldier': {
				name: 'Солдат',
				description: 'Солдаты это солидные всесторонние бойцы, которые сформируют костяк любой армии. Также солдаты - единственная единица, которая может захватывать города, приносящие золото.'
			},
			'archer': {
				name: 'Лучник',
				description: 'Со своими мощными луками стрелки могут атаковать на расстоянии и особенно эффективны против летающих врагов.'
			},
			'elemental': {
				name: 'Элементаль',
				description: 'Элементалы это магические водяные духи. Будучи в воде, Элементалы быстрее передвигаются и лучше защищаются.'
			},
			'sorceress': {
				name: 'Ведьма',
				description: 'Натасканные в использовании магии, Ведьмы слабы в ближнем бою. Однако, их способность к вызову боевых скелетов из мертвых войск может стать решающей в битве.'
			},
			'wisp': {
				name: 'Висп',
				description: 'Эти мистические существа чистого света излучают ауру, которая усиливает способности к атаке у ближайших дружественных единиц. В ближнем бою они особенно смертельны против скелетов.'
			},
			'dire-wolf': {
				name: 'Жуткий волк',
				description: 'Жуткие Волки - опасные охотники, которые передвигаются стаями. Будьте осторожны - их укусы ядовиты, что умельшает и атаку, и защиту на один ход.'
			},
			'golem': {
				name: 'Голем',
				description: 'Големы - это древние существа - медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			'catapult': {
				name: 'Катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			'dragon': {
				name: 'Дракон',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			},
			'skeleton': {
				name: 'Скелет',
				description: 'Вызванные ведьмами, эти безжизненные воины сильны как солдаты и смертельные оппоненты на любом поле боя.'
			},
			'galamar': {
				name: 'Галамар',
				description: 'Галамар (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'valadorn': {
				name: 'Валадорн',
				description: 'Валадорн (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'demon-lord': {
				name: 'Демон Лорд',
				description: 'Демон лорд (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'saeth': {
				name: 'Саеф',
				description: 'Саеф (командир) очень силен в атаке и защите. Командиры могут также занимать замки, чтобы производить войска, и их можно оживлять в замке, если они умрут в битве.'
			},
			'crystal': {
				name: 'Кристалл',
				description: 'Эти легендарные кристаллы были изначально выкопаны из руин Античной Цитадели. Мало что известно об их силе, за исключением того, что они, по слухам, могут защитить королевство, а также обладают силой, чтобы уничтожить его.'
			}
		},

		story: {
			list: [
				// 0
				'img/story/story-1-1.png_!_После завершения войны против сил тьмы, братья Галамар и Валадорн воссоединились в правлениии королевства Торин. Королевство медленно возвращалось к мирной жизни, защищенное тремя античными кристаллами, защищенными в храмах Отваги, Мудрости и Жизни, когда достигли дворца слухи о схватках на Севере...',
				// 1
				'img/story/story-1-2.png_!_\'И три было их числом, три для защиты, три для уничтожения. Сжалься над их силой, сжалься над нашими душами, пусть Он спустит небесные огни на наш мир.\'<br \/>[Стих 3:7 из  Предсказаний Кристаллов, автор неизвестен, был переведен из единственного уцелевшего манускрипта Времен Тьмы]',
				// 2
				'img/story/story-1-3.png_!_Посланник из Храма Отваги прибыл к воротам замка, с мольбой о поддержке Короля - Храм пал под натиском зверских атакующих, и должен быть защищен...',
				// 3
				'img/story/story-4-1.png_!_С помощью Элементалов, Король Галамар в конце концов достиг Храма Жизни, в одном шаге от врагов...',
				// 4
				'img/story/story-8-1.png_!_Галамар и Валадорн проследовали по пути разрушений, оставленных драконом и обнаружили руины Античной Цитадели...',
				// 5
				'img/story/story-8-2.png_!_\'И Земля задрожит, и небеса заплачут. За Него, который разрушит разрушителя, за Него, который заберет берущего. И новая эра, свободная он зла и тьмы наступит.\'<br>[Последний стих из  Предсказаний Кристаллов, автор неизвестен, никогда не переводился, был потерян в веках тьмы]'
			]
		}

	};

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	APP.languages = APP.languages || {};

	APP.languages.es = {
		language: 'Lengua',
		languageName: 'Español',
		shortLanguageName: 'Spa',
		appName: 'AE2FG',

		//theme: 'Theme',
		//share: 'Share',

		// title page
		play: 'Jugar',
		online: 'En linea',
		settings: 'Opciones',
		instructions: 'Instrucciones',
		about: 'Acerca de',

		// settings
		on: 'si',
		off: 'no',
		music: 'musica',
		vibrate: 'vibración',
		help: 'ayuda',
		youCanDisableHelpNotification: 'Puedes desactivar la notificación de ayuda en \'Opciones\'',
		fightAnimation: 'animación de batalla',
		gameSpeed: 'velocidad de juego',
		confirmTurn: 'confirmar turno',
		confirmMove: 'confirmar movimiento',
		confirmAttack: 'confirmar ataque',
		'gameSpeed-1': 'muy lento',
		'gameSpeed-2': 'lento',
		'gameSpeed-3': 'normal',
		'gameSpeed-4': 'rapido',
		'gameSpeed-5': 'muy rapido',
		mainSettings: 'Ajustes opciones',
		gameDifficulty: 'Dificultad de juego',
		font: 'Fuente',
		easy: 'facil',
		normal: 'normal',
		hard: 'difícil',
		buildingSmoke: 'humo en casa',
		unitAnimation: 'animación de unidad',
		autoSave: 'ahorro automático',

		// play
		newGame: 'Nuevo juego',
		loadGame: 'Cargar partida',
		selectLevel: 'Seleccionar nivel',
		skirmish: 'Escaramuza',
		userMaps: 'Mapas de los usuarios',
		userMap: 'Mapa del usuario',
		mission: 'Misión',

		// setup skirmish
		player: 'Jugador',
		cpu: 'CPU',
		none: 'Ninguno',
		money: 'Fondos',
		unitLimit: 'Limite de unidades',
		fight: 'Pelea',
		team: 'Equipo',

		// colors
		blue: 'azúl',
		red: 'rojo',
		green: 'verde',
		black: 'negro',

		rateUs: {
			header: 'Valoranos por favor!',
			notNow: 'Ahora no',
			fiveStars: 'Si, 5 estrellas!'
		},

		// unit store
		unitStoreHeader: 'Unidades',

		// popups
		endTurnQuestion: 'Terminar turno?',
		yes: 'Si',
		no: 'No',
		ok: 'De acuerdo',
		continue: 'Continuar',
		congratulations: 'Felicidades!',
		gameSaved: 'Juego guardado',
		unlocked: 'desbloqueado!',

			//save/load popup
		save: 'Guardar',
		delete: 'Borrar',
		replace: 'Remplazar',
		saveGame: 'Guardar juego',
		areYouSureToDeleteSavedGame: '¿Desea borrar el juego guardado?',
		areYouSureToLoadGame: '¿Desea cargar partida?',
		noSavedGames: 'No guardar juego',
		load: 'Cargando',

			// end game
		blackDefeat: 'Jugador negro fue derrotado!',
		blueDefeat: 'Jugador azúl fue derrotado!',
		greenDefeat: 'Jugador verde fue derrotado!',
		redDefeat: 'Jugador rojo fue derrotado!',
		victory: 'Victoria!',
		defeat: 'Derrota!',
		missionComplete: 'Misión cumplida!',
		restartBattle: 'Reanudar',
		quitBattle: 'Salir',
		areYouSureToQuitBattle: '¿Seguro quiere abandonar batalla?',
		areYouSureToRestartBattle: '¿Seguro quiere reanudar batalla?',

			// notification
		objective: 'Objetivo',
		skirmishObjective: 'Derrota al comandante enemigo y ocupa todos sus castillos!',
		newTurn: 'Nuevo turno!',
		income: 'Ingreso',
		tooMuchUnits: 'Unidades demasiado!',

			//battle menu
		menu: 'Menú',

		// map editor
		mapEditor: 'Editor de mapas',
		maps: 'Mapas',
		width: 'Anchura',
		height: 'Altura',
		name: 'Nombre',
		colors: 'Colores',
		open: 'Abierto',
		clean: 'Limpio',
		exit: 'Salida',
		areYouSureToLeaveMapEditor: '¿Seguro que salir editor de mapas?',
		unsavedMapProgressWillBeLost: 'Mapa de progreso no se haya guardado se perderá!',
		noSavedMaps: 'No hay mapas guardados',
		youAreSureToDeleteMap: 'Usted está seguro de eliminar mapa?',
		mapHasBeenSaved: 'mapa ha sido guardado.',
		mapHasBeenDeleted: 'mapa ha sido eliminado.',
		cleanMapNotSavedDataWillBeLost: 'Mapa Clean? No se perderán los datos guardados.',
		needMoreUnitsOrBuildings: 'Necesitas más unidades o edificios',
		enterMapName: 'Ingrese nombre del mapa',
		mapName: 'Nombre del mapa',

		// other
		disableAllTips: 'Desactivar TODAS consejos',

		//aboutText: '<br><br><br>Ancient Empire: Strike Back.<br><br><br><!--Programmer:<br>Dmitry Turovtsov<br><br>Thanks:<br>Alexey Danilov<br>Pavel Prylutski<br>Igor Kupreev<br>Pavel Sychykau-->',
		aboutText: '<br><br><br>Ancient Empire:<br>Strike Back<br><br><br>',
		instructionsText: [
			'\'Ancient Empire: Strike Back\' es un juego de estrategia emocionante que te permite controlar Rey Galamar y su hermano Valadorn mientras luchan para proteger su reino del mal.',
			'A continuación se muestran las instrucciones, consejos y sugerencias sobre cómo jugar, que también aparecen en el juego.',
			'Los cuadros rojos marcan el rango de movimiento de una unidad. El rango de una unidad se determina por su tipo y el terreno que se encuentra.',
			'Los diferentes tipos de terreno afectan la capacidad de una unidad para moverse, atacar y defender. Por ejemplo, las montañas añaden puntos de defensa, pero reducen el movimiento. Al mover el cursor estas características del terreno aparecen estas caracteristicas en la parte inferior de la pantalla.',
			'Cuando una unidad ha completado un movimiento, cambiará a gris. Esto significa que no puede ser utilizado de nuevo hasta su próximo turno.',
			'Puede mover cada unidad sólo una vez cada turno. Cuando haya terminado de mover todas sus unidades toque \'terminar turno\'.',
			'Las unidades se vuelven mas poderosas a medida que adquieren experiencia en batalla y se actualizan en rango.',
			'Puede ver el rango de ataque de cualquier unidad dando doble toque cuando se selecciona.',
			'Para atacar a una unidad enemiga, mueve tu unidad dentro del rango y selecciona \'atacar\'. En caso de haber más de un enemigo al alcanze, selecciona cuál unidad deseas atacar. El éxito de tu ataque está determinado por las características de la unidad y el terreno.',
			'Sólo un comandante puede ocupar un castillo. Una vez que un castillo es ocupado puedes adquirir nuevas unidades con tu oro. El comandante no necesita permanecer en el castillo para adquirir unidades.',
			'Puedes ocupar edificios moviendo a un soldado o comandante dentro de ellos y seleccionando "ocupar". Una vez un edificio es ocupado, cambia su color. Si un edificio es dañado tendrás que repararlo antes de que pueda ser ocupado.',
			'Una vez que un edificio ha sido ocupado, generará oro. Mientras más edificios ocupes, más oro recibirás',
			'Las unidades pueden ser curadas en los edificios de tu propiedad. Mientras más tiempo pase una unidad en el edificio, será mayor la energía que recuperará. ',
			'Si un comandante es derrotado en batalla, puede ser revivido en un castillo.',
			'Los elementales son anfibios, lo que les da un incremento de movimiento, ataque y defensa mientras permanescan en el agua.',
			'Un ataque hecho por lobos es venenoso. Una unidad envenenada es lenta y débil hasta su siguiente turno.',
			'Una hechicera tiene el poder para invocar guerreros esqueleto de las tumbas de las unidades caídas. Después que una unidad ha sido derrotada, una lápida aparece por un turno. Mueve a la hechicera al lado de una lápida y selecciona \'resucitar\'.',
			'Usa los fragmentos para proporcionar a tus unidades cercanas un aura que aumenta sus puntos de ataque.',
			'La catapulta tiene la habilidad para destruir edificios enemigos e interrumpir su flujo de recursos.',
			'Mantén a tus dragones lejos de arqueros enemigos, ¡ellos son vulnerables a las flechas!'
		],
		helpList: [
			// 0
			{
				img: 'img/help/select-unit.png',
				text: ['Para seleccionar una unidad toca (<img src="img/help/tap-finger.png" class="icon-in-text" />) a la unidad.', '<img src="img/help/finger-on-red-square.png" class="icon-in-text" /> - Los cuadros rojos marcan el rango de movimiento de la unidad.', 'El rango de la unidad está determinado por su tipo y el terreno en el que se encuentre.']
			},
			// 1
			{
				//img: 'img/help/occupy-castle.png',
				text: ['Para atacar a una unidad enemiga, mueve tu unidad dentro del rango y selecciona <img src="img/help/attack-icon.png" class="icon-in-text" />.', 'Si hay más de un enemigo en rango, selecciona que unidad atacar. El éxito de tu ataque está determinado por las caracteristicas de tu unidad y el terreno.']
			},
			// 2
			{
				//img: 'img/help/occupy-farm.png',
				text: ['Sólo un Comandante puede ocupar (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />) un castillo.', 'Una vez que un castillo es ocupado puedes reclutar nuevas unidades con tu oro.', 'El Comandante no necesita permanecer en el castillo para reclutar unidades.']
			},
			// 3
			{
				img: 'img/help/raise.png',
				text: ['Puedes ocupar edificios moviendo a un soldado o comandante dentro de ellos y seleccionando \'ocupar\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Una vez un edificio es ocupado, cambia su color.', 'Si un edificio es dañado tendrás que repararlo (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) antes de que pueda ser ocupado.']
			},
			// 4
			{
				img: 'img/help/raise.png',
				text: ['Puedes ocupar edificios moviendo a un soldado o comandante dentro de ellos y seleccionando \'ocupar\' (<img src="img/help/occupy-building-icon.png" class="icon-in-text" />).', 'Una vez un edificio es ocupado, cambia su color.', 'Si un edificio es dañado tendrás que repararlo (<img src="img/help/fix-building-icon.png" class="icon-in-text" />) antes de que pueda ser ocupado.']
			}
		],
		unitsList: {
			'soldier': {
				name: 'Soldado',
				description: 'Los soldados son sólidos y completos guerreros que forman la columna vertebral de cualquier ejército. Los soldados son también la unica unidad que puede capturar edificios para obtener oro.'
			},
			'archer': {
				name: 'Arquero',
				description: 'Con sus poderosos arcos los arqueros puede atacar desde la distancia y son especialmente poderosos contra enemigos voladores.'
			},
			'elemental': {
				name: 'Elemental',
				description: 'Los elementales son espíritus magicos del agua. Cuando están en el agua, los elementales tienen un mayor movimiento y una defensa aumentada.'
			},
			'sorceress': {
				name: 'Hechicera',
				description: 'Habilidosa en el uso de la magia. Las hechiceras son débiles en combate cercano. Sin embargo, su habilidad para invocar guerreros esqueleto de las tropas derrotadas puede ser decisiva en batalla.'
			},
			'wisp': {
				name: 'Fragmento',
				description: 'Estos seres míticos de luz pura irradian un aura que aumenta las habilidades de ataque de las unidades cercanas. En combate a corta distacia son especialmente mortales contra los guerreros esqueleto.'
			},
			'dire-wolf': {
				name: 'Lobos Mortales',
				description: 'Los lobos mortales son feroces cazadores que viajan en manada. Ten cuidado - su mordida es venenosa y reduce los niveles de ataque y defensa por un turno.'
			},
			'golem': {
				name: 'Golem',
				description: 'Los golem son seres antiguos - lentos pero inmensamente poderosos en defensa. Un golem posicionado en un edificio o una montaña es muy difícil de derrotar.'
			},
			'catapult': {
				name: 'Catapulta',
				description: 'Las catapultas proclaman un rastro de destrucción con su enorme rango de ataque. Sin embargo, su relativa inmovilidad y inhabilidad para atacar a corta distancia las hace vulnerables, así que resguardalas bien. Las catapultas pueden moverse así como atacar durante un turno, pero no las dos cosas al mismo tiempo.'
			},
			'dragon': {
				name: 'Dragón',
				description: 'Estas masivas bestias voladoras han reinado sobre las montañas de niebla desde tiempos antiguos. Son extremadamente ágiles y mortales tanto en tierra como aire y mar.'
			},
			'skeleton': {
				name: 'Esqueletos',
				description: 'Invocados por Hechiceras, estos guerreros sin vida son tan fuertes como los soldados y mortales oponentes sobre cualquier campo de batalla.'
			},
			'galamar': {
				name: 'Galamar',
				description: 'Galamar (comandante) es muy fuerte en ataque y defensa. Los comandantes también pueden ocupar castillos para producir tropas y pueden ser revividos en el castillo si caen en batalla.'
			},
			'valadorn': {
				name: 'Valador',
				description: 'Valador (comandante) es muy fuerte en ataque y defensa. Los comandantes también pueden ocupar castillos para producir tropas y pueden ser revividos en el castillo si caen en batalla.'
			},
			'demon-lord': {
				name: 'Señor de los demonios',
				description: 'Señor de los demonios (comandante) es muy fuerte en ataque y defensa. Los comandantes también pueden ocupar castillos para producir tropas y pueden ser revividos en el castillo si caen en batalla.'
			},
			'saeth': {
				name: 'Saeth',
				description: 'Saeth (comandante) es muy fuerte en ataque y defensa. Los comandantes también pueden ocupar castillos para producir tropas y pueden ser revividos en el castillo si caen en batalla.'
			},
			'crystal': {
				name: 'Cristal',
				description: 'Estos legendarios cristales fueron recuperados originalmente de las ruinas de la Antigua Ciudadela. Poco se sabe de su poder, excepto que se rumora que protegen el reino, aunque también poseen el poder para destruirlo.'
			}
		},

		story: {
			list: [
				// 0
				'img/story/story-1-1.png_!_Con el paso de la guerra contra las fuerzas de la oscuridad. Los hermanos Galamar y Valador están reunidos en sus dominios, el reino de Thorin. El reino se recupera lentamente retornando a sus tiempos de paz, protegido por tres antiguos cristales resguardados a salvo en los templos del Coraje, Sabiduría y Vida, fue entonces cuando rumores acerca de escaramuzas en el norte alcanzaron el palacio...',
				// 1
				'img/story/story-1-2.png_!_\'Y tres era su número, tres para proteger, tres para destruir. Misericordia a aquel portador de su poder, misericordia sobre nuestras almas, para aquel que liberará el fuego celestial sobre este mundo.\'<br \/>[Verso 3:7 de las Profecias del Cristal, autor desconocido, traducido del único expediente sobreviviente de la Era de las Tinieblas.',
				// 2
				'img/story/story-1-3.png_!_Un mensajero de El Templo del Coraje llegó a las puertas del castillo, súplicando por la ayuda del rey - El templo ha caído preso por unos atacantes brutales, y debe ser protegido... ',
				// 3
				'img/story/story-4-1.png_!_Con la ayuda de los Elementales, El rey Galamar finalmente alcanza El Templo de la Vida un paso antes que el enemigo...',
				// 4
				'img/story/story-8-1.png_!_Galamar y Valador siguen el camino de destrucción dejado atrás por el dragón y se encuentran en las ruinas de la Antigua Ciudadela...',
				// 5
				'img/story/story-8-2.png_!_\'Y la tierra temblará, y los cielos llorarán. Aquel que destruya será destruido, Aquel que arrebate le será arrebatado. Y una nueva era, libre de maldad y obscuridad nacerá.\' <br />[Verso final de las Profecias del Cristal, autor desconocido, nunca traducido, perdido durante la Era de las Tinieblas]'
			]
		}

	};

}(window));/**
 * Add dataset support to elements
 * No globals, no overriding prototype with non-standard methods,
 *   handles CamelCase properly, attempts to use standard
 *   Object.defineProperty() (and Function bind()) methods,
 *   falls back to native implementation when existing
 * Inspired by http://code.eligrey.com/html5/dataset/
 *   (via https://github.com/adalgiso/html5-dataset/blob/master/html5-dataset.js )
 * Depends on Function.bind and Object.defineProperty/Object.getOwnPropertyDescriptor (shims below)
 * Licensed under the X11/MIT License
 */

// Inspired by https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		'use strict';
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			FNOP = function () {
			},
			fBound = function () {
				return fToBind.apply(
						this instanceof FNOP && oThis ? this : oThis,
					aArgs.concat(Array.prototype.slice.call(arguments))
				);
			};

		FNOP.prototype = this.prototype;
		fBound.prototype = new FNOP();

		return fBound;
	};
}

/*
 * Xccessors Standard: Cross-browser ECMAScript 5 accessors
 * http://purl.eligrey.com/github/Xccessors
 * 
 * 2010-06-21
 * 
 * By Eli Grey, http://eligrey.com
 * 
 * A shim that partially implements Object.defineProperty,
 * Object.getOwnPropertyDescriptor, and Object.defineProperties in browsers that have
 * legacy __(define|lookup)[GS]etter__ support.
 * 
 * Licensed under the X11/MIT License
 *   See LICENSE.md
 */

// Removed a few JSLint options as Notepad++ JSLint validator complaining and 
//   made comply with JSLint; also moved 'use strict' inside function
/*jslint white: true, undef: true, plusplus: true,
 bitwise: true, regexp: true, newcap: true, maxlen: 90 */

/*! @source http://purl.eligrey.com/github/Xccessors/blob/master/xccessors-standard.js*/

(function () {
	'use strict';
	var ObjectProto = Object.prototype,
		defineGetter = ObjectProto.__defineGetter__,
		defineSetter = ObjectProto.__defineSetter__,
		lookupGetter = ObjectProto.__lookupGetter__,
		lookupSetter = ObjectProto.__lookupSetter__,
		hasOwnProp = ObjectProto.hasOwnProperty;

	if (defineGetter && defineSetter && lookupGetter && lookupSetter) {

		if (!Object.defineProperty) {
			Object.defineProperty = function (obj, prop, descriptor) {
				if (arguments.length < 3) { // all arguments required
					throw new TypeError("Arguments not optional");
				}

				prop += ""; // convert prop to string

				if (hasOwnProp.call(descriptor, "value")) {
					if (!lookupGetter.call(obj, prop) && !lookupSetter.call(obj, prop)) {
						// data property defined and no pre-existing accessors
						obj[prop] = descriptor.value;
					}

					if ((hasOwnProp.call(descriptor, "get") ||
						hasOwnProp.call(descriptor, "set"))) {
						// descriptor has a value prop but accessor already exists
						throw new TypeError("Cannot specify an accessor and a value");
					}
				}

				// can't switch off these features in ECMAScript 3
				// so throw a TypeError if any are false
				if (!(descriptor.writable && descriptor.enumerable &&
					descriptor.configurable)) {
					throw new TypeError(
							"This implementation of Object.defineProperty does not support" +
							" false for configurable, enumerable, or writable."
					);
				}

				if (descriptor.get) {
					defineGetter.call(obj, prop, descriptor.get);
				}
				if (descriptor.set) {
					defineSetter.call(obj, prop, descriptor.set);
				}

				return obj;
			};
		}

		if (!Object.getOwnPropertyDescriptor) {
			Object.getOwnPropertyDescriptor = function (obj, prop) {
				if (arguments.length < 2) { // all arguments required
					throw new TypeError("Arguments not optional.");
				}

				prop += ""; // convert prop to string

				var descriptor = {
						configurable: true,
						enumerable: true,
						writable: true
					},
					getter = lookupGetter.call(obj, prop),
					setter = lookupSetter.call(obj, prop);

				if (!hasOwnProp.call(obj, prop)) {
					// property doesn't exist or is inherited
					return descriptor;
				}
				if (!getter && !setter) { // not an accessor so return prop
					descriptor.value = obj[prop];
					return descriptor;
				}

				// there is an accessor, remove descriptor.writable;
				// populate descriptor.get and descriptor.set (IE's behavior)
				delete descriptor.writable;
				descriptor.get = descriptor.set = undefined;

				if (getter) {
					descriptor.get = getter;
				}
				if (setter) {
					descriptor.set = setter;
				}

				return descriptor;
			};
		}

		if (!Object.defineProperties) {
			Object.defineProperties = function (obj, props) {
				var prop;
				for (prop in props) {
					if (hasOwnProp.call(props, prop)) {
						Object.defineProperty(obj, prop, props[prop]);
					}
				}
			};
		}
	}
}());

// Begin dataset code

if (!document.documentElement.dataset &&
	// FF is empty while IE gives empty object
	(!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get)
	) {
	var propDescriptor = {
		enumerable: true,
		get: function () {
			'use strict';
			var i,
				that = this,
				HTML5_DOMStringMap,
				attrVal, attrName, propName,
				attribute,
				attributes = this.attributes,
				attsLength = attributes.length,
				toUpperCase = function (n0) {
					return n0.charAt(1).toUpperCase();
				},
				getter = function () {
					return this;
				},
				setter = function (attrName, value) {
					return (typeof value !== 'undefined') ?
						this.setAttribute(attrName, value) :
						this.removeAttribute(attrName);
				};
			try { // Simulate DOMStringMap w/accessor support
				// Test setting accessor on normal object
				({}).__defineGetter__('test', function () {
				});
				HTML5_DOMStringMap = {};
			}
			catch (e1) { // Use a DOM object for IE8
				HTML5_DOMStringMap = document.createElement('div');
			}
			for (i = 0; i < attsLength; i++) {
				attribute = attributes[i];
				// Fix: This test really should allow any XML Name without
				//         colons (and non-uppercase for XHTML)
				if (attribute && attribute.name &&
					(/^data-\w[\w\-]*$/).test(attribute.name)) {
					attrVal = attribute.value;
					attrName = attribute.name;
					// Change to CamelCase
					propName = attrName.substr(5).replace(/-./g, toUpperCase);
					try {
						Object.defineProperty(HTML5_DOMStringMap, propName, {
							enumerable: this.enumerable,
							get: getter.bind(attrVal || ''),
							set: setter.bind(that, attrName)
						});
					}
					catch (e2) { // if accessors are not working
						HTML5_DOMStringMap[propName] = attrVal;
					}
				}
			}
			return HTML5_DOMStringMap;
		}
	};
	try {
		// FF enumerates over element's dataset, but not
		//   Element.prototype.dataset; IE9 iterates over both
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	} catch (e) {
		propDescriptor.enumerable = false; // IE8 does not allow setting to true
		Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
	}
}/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));
/*! jquery.finger - v0.1.2 - 2014-10-01
* https://github.com/ngryman/jquery.finger
* Copyright (c) 2014 Nicolas Gryman; Licensed MIT */

(function($, ua) {

	var isChrome = /chrome/i.exec(ua),
		isAndroid = /android/i.exec(ua),
		hasTouch = 'ontouchstart' in window && !(isChrome && !isAndroid),
		startEvent = hasTouch ? 'touchstart' : 'mousedown',
		stopEvent = hasTouch ? 'touchend touchcancel' : 'mouseup mouseleave',
		moveEvent = hasTouch ? 'touchmove' : 'mousemove',

		namespace = 'finger',
		rootEl = $('html')[0],

		start = {},
		move = {},
		motion,
		cancel,
		safeguard,
		timeout,
		prevEl,
		prevTime,

		Finger = $.Finger = {
			pressDuration: 300,
			doubleTapInterval: 300,
			flickDuration: 150,
			motionThreshold: 5
		};

	function preventDefault(event) {
		event.preventDefault();
		$.event.remove(rootEl, 'click', preventDefault);
	}

	function page(coord, event) {
		return (hasTouch ? event.originalEvent.touches[0] : event)['page' + coord.toUpperCase()];
	}

	function trigger(event, evtName, remove) {
		var fingerEvent = $.Event(evtName, move);
		$.event.trigger(fingerEvent, { originalEvent: event }, event.target);

		if (fingerEvent.isDefaultPrevented()) {
			if (~evtName.indexOf('tap') && !hasTouch)
				$.event.add(rootEl, 'click', preventDefault);
			else
				event.preventDefault();
		}

		if (remove) {
			$.event.remove(rootEl, moveEvent + '.' + namespace, moveHandler);
			$.event.remove(rootEl, stopEvent + '.' + namespace, stopHandler);
		}
	}

	function startHandler(event) {
		var timeStamp = event.timeStamp || +new Date();

		if (safeguard == timeStamp) return;
		safeguard = timeStamp;

		// initializes data
		start.x = move.x = page('x', event);
		start.y = move.y = page('y', event);
		start.time = timeStamp;
		start.target = event.target;
		move.orientation = null;
		move.end = false;
		motion = false;
		cancel = false;
		timeout = setTimeout(function() {
			cancel = true;
			trigger(event, 'press');
		}, $.Finger.pressDuration);

		$.event.add(rootEl, moveEvent + '.' + namespace, moveHandler);
		$.event.add(rootEl, stopEvent + '.' + namespace, stopHandler);

		// global prevent default
		if (Finger.preventDefault) {
			event.preventDefault();
			$.event.add(rootEl, 'click', preventDefault);
		}
	}

	function moveHandler(event) {
		// motion data
		move.x = page('x', event);
		move.y = page('y', event);
		move.dx = move.x - start.x;
		move.dy = move.y - start.y;
		move.adx = Math.abs(move.dx);
		move.ady = Math.abs(move.dy);

		// security
		motion = move.adx > Finger.motionThreshold || move.ady > Finger.motionThreshold;
		if (!motion) return;

		// moves cancel press events
		clearTimeout(timeout);

		// orientation
		if (!move.orientation) {
			if (move.adx > move.ady) {
				move.orientation = 'horizontal';
				move.direction = move.dx > 0 ? +1 : -1;
			}
			else {
				move.orientation = 'vertical';
				move.direction = move.dy > 0 ? +1 : -1;
			}
		}

		// for delegated events, the target may change over time
		// this ensures we notify the right target and simulates the mouseleave behavior
		while (event.target && event.target !== start.target)
			event.target = event.target.parentNode;
		if (event.target !== start.target) {
			event.target = start.target;
			stopHandler.call(this, $.Event(stopEvent + '.' + namespace, event));
			return;
		}

		// fire drag event
		trigger(event, 'drag');
	}

	function stopHandler(event) {
		var timeStamp = event.timeStamp || +new Date(),
			dt = timeStamp - start.time,
			evtName;

		// always clears press timeout
		clearTimeout(timeout);

		// tap-like events
		// triggered only if targets match
		if (!motion && !cancel && event.target === start.target) {
			var doubleTap = prevEl === event.target && timeStamp - prevTime < Finger.doubleTapInterval;
			evtName = doubleTap ? 'doubletap' : 'tap';
			prevEl = doubleTap ? null : start.target;
			prevTime = timeStamp;
		}
		// motion events
		else {
			// ensure last target is set the initial one
			event.target = start.target;
			if (dt < Finger.flickDuration) trigger(event, 'flick');
			move.end = true;
			evtName = 'drag';
		}

		trigger(event, evtName, true);
	}

	// initial binding
	$.event.add(rootEl, startEvent + '.' + namespace, startHandler);

})(jQuery, navigator.userAgent);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 13/03/14 22.30
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * jquery.mb.browser
 * Author: pupunzi
 * Creation date: 16/01/13
 *
 ******************************************************************************/
/*Browser detection patch*/

/*jslint white: true, nomen: true */
(function (win, jQuery) {

	"use strict";
	/*global window */
	/*global */

	var nAgt = navigator.userAgent;

	if(!jQuery.browser){

		jQuery.browser = {};
		jQuery.browser.mozilla = false;
		jQuery.browser.webkit = false;
		jQuery.browser.opera = false;
		jQuery.browser.safari = false;
		jQuery.browser.chrome = false;
		jQuery.browser.msie = false;

		jQuery.browser.ua = nAgt;

		jQuery.browser.name  = navigator.appName;
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
		var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
		if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
			jQuery.browser.opera = true;
			jQuery.browser.name = "Opera";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
			if ((verOffset=nAgt.indexOf("Version"))!=-1)
				jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}

// In Opera > 20 the true version is after "OPR"
		else if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
			jQuery.browser.opera = true;
			jQuery.browser.name = "Opera";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+4);
		}

// In MSIE < 11, the true version is after "MSIE" in userAgent
		else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
			jQuery.browser.msie = true;
			jQuery.browser.name = "Microsoft Internet Explorer";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
		}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
		else if (nAgt.indexOf("Trident")!=-1 ) {
			jQuery.browser.msie = true;
			jQuery.browser.name = "Microsoft Internet Explorer";
			var start = nAgt.indexOf("rv:")+3;
			var end = start+4;
			jQuery.browser.fullVersion = nAgt.substring(start,end);
		}

// In Chrome, the true version is after "Chrome"
		else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
			jQuery.browser.webkit = true;
			jQuery.browser.chrome = true;
			jQuery.browser.name = "Chrome";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		}
// In Safari, the true version is after "Safari" or after "Version"
		else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
			jQuery.browser.webkit = true;
			jQuery.browser.safari = true;
			jQuery.browser.name = "Safari";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
			if ((verOffset=nAgt.indexOf("Version"))!=-1)
				jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}
// In Safari, the true version is after "Safari" or after "Version"
		else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
			jQuery.browser.webkit = true;
			jQuery.browser.name = "Safari";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
			if ((verOffset=nAgt.indexOf("Version"))!=-1)
				jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}
// In Firefox, the true version is after "Firefox"
		else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
			jQuery.browser.mozilla = true;
			jQuery.browser.name = "Firefox";
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
		}
// In most other browsers, "name/version" is at the end of userAgent
		else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
			jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
			jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
			if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
				jQuery.browser.name = navigator.appName;
			}
		}

// trim the fullVersion string at semicolon/space if present
		if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
			jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
		if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
			jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

		jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
		if (isNaN(jQuery.browser.majorVersion)) {
			jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
			jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
		}
		jQuery.browser.version = jQuery.browser.majorVersion;

	}

	/*Check all mobile environments*/
	jQuery.browser.android = (/Android/i).test(nAgt);
	jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
	jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
	jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
	jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
	jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);

	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;

}(window, window.jQuery));
/* http://stackoverflow.com/questions/4080497/how-can-i-listen-for-a-click-and-hold-in-jquery */
(function($) {

	function startTrigger(e) {
		var $elem = $(this);
		$elem.data('mouseheld_timeout', setTimeout(function() {
			$elem.trigger('mouseheld');
		}, e.data));
	}

	function stopTrigger() {
		var $elem = $(this);
		clearTimeout($elem.data('mouseheld_timeout'));
	}

	var mouseheld = $.event.special.mouseheld = {
		setup: function(data) {
			// the first binding of a mouseheld event on an element will trigger this
			// lets bind our event handlers
			var $this = $(this);
			$this.bind('mousedown', +data || mouseheld.time, startTrigger);
			$this.bind('mouseleave mouseup', stopTrigger);
		},
		teardown: function() {
			var $this = $(this);
			$this.unbind('mousedown', startTrigger);
			$this.unbind('mouseleave mouseup', stopTrigger);
		},
		time: 750 // default to 750ms
	};

})(jQuery);;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc, docElem) {

	"use strict";
	/*global window, document, navigator, localStorage */
	/*global APP */

	win.APP = win.APP || {};

	function getPrefix() {

		var data = {
				js: '',
				css: ''
			},
			tempStyle = doc.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

		// find vendors by css transform property
		vendors.forEach(function (vendor) {
			var transform = vendor + 'ransform';
			if (!tempStyle.hasOwnProperty(transform)) {
				return;
			}

			vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

			data.js = vendor;

			vendor = vendor.toLocaleLowerCase();
			if (vendor) {
				data.css = '-' + vendor + '-';
			}

		});

		return data;

	}

	var info;

	info = {

		withAds: false,

		link: {
			ios: {
				normal: '',
				pro: ''
			},
			android: {
				normal: '',
				pro: ''
			}
		},

		ls: win.localStorage,
		saveItem: 'ae2-ls-item',
		attr: {},
		systemAttr: {},
		defaultLanguage: 'en',
		//availableLanguages: ['en'],
		availableLanguages: ['en', 'es', 'ru'],
		availableFonts: [
			{
				id: 'courier',
				cssClass: 'font-courier'
			},
			{
				id: 'lucida',
				cssClass: 'font-lucida'
			},
			{
				id: 'pixel',
				cssClass: 'font-pixel'
			}
		],

		init: function () {

			var lang;

			// get data from LS
			this.attr = JSON.parse(this.ls.getItem(this.saveItem) || '{}');

			// set vendor prefix
			this.set('pre', getPrefix(), true);

			// is touch
			this.set('isTouch', 'ontouchstart' in document, true);

			// is phone
			this.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus

			this.setOS();

			// set language
			lang = this.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
			lang = lang.split('-')[0].toLocaleLowerCase();
			lang = (this.availableLanguages.indexOf(lang) === -1) ? this.defaultLanguage : lang;
			lang = lang.toLowerCase();
			this.set('language', lang);

			//set settings
			this.setSettings();

			this.detectTransitionEndEventName();
			this.detectAnimationEndEventName();

		},
		setOS: function () {

			var ua = win.navigator.userAgent,
				isIE = /MSIE/.test(ua),
				isAndroid = (/android/i).test(ua),
				isIOS = /iPad|iPhone|iPod/.test(ua);

			this.set('isIE', isIE, true);
			this.set('isAndroid', isAndroid, true);
			this.set('isIOS', isIOS, true);

			if (isIE) {
				this.set('os', 'wp', true);
			}

			if (isAndroid) {
				this.set('os', 'android', true);
			}

			if (isIOS) {
				this.set('os', 'ios', true);
			}

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

			this.set('transitionEnd', transitionEnd, true);

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

			this.set('animationEnd', animationEnd, true);

		},

		set: function (key, value, isSystem) {

			if (isSystem) {
				this.systemAttr[key] = value;
			} else {
				this.attr[key] = value;
				this.ls.setItem(this.saveItem, JSON.stringify(this.attr));
			}


			return true;

		},

		get: function (key, isSystem) {
			return isSystem ? this.systemAttr[key] : this.attr[key];
		},

		remove: function (key, isSystem) {
			if (isSystem) {
				delete this.systemAttr[key];
			} else {
				delete this.attr[key];
				this.ls.setItem(this.saveItem, JSON.stringify(this.attr));
			}

			return key;

		},

		setSettings: function () {

			var defaultSettings = {
					autoSave: 'on', // auto save game after every turn
					confirmTurn: 'off', // game turn
					confirmMove: 'off', // move unit
					confirmAttack: 'off', // attack unit
					music: 'on',
					vibrate: 'off',
					help: 'on',
					fightAnimation: 'off',
					buildingSmoke: 'off',
					unitAnimation: 'off',
					font: 'pixel',
					difficult: 'easy', // easy, normal, hard
					gameSpeed: '3' // 1..5, use string type
				},
				key,
				value;

			for (key in defaultSettings) {
				if (defaultSettings.hasOwnProperty(key)) {
					value = this.get(key) || defaultSettings[key];
					this.set(key, value);
				}
			}

		},

		actionTime: function () {

			var info = this,
				speed = parseInt(info.get('gameSpeed'), 10),
				q = 6 - speed; // 6 === maxSpeed'5' + 1

			return 300 + (q - 1) * 100;

		}

	};

	info.init();

	win.APP.info = info;

}(window, document, document.documentElement));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global APP */

	win.APP = win.APP || {};

	var lang = {

		attr: {},

		set: function (lang) {
			this.attr = APP.languages[lang];
		},

		get: function (key) {
			return key ? this.attr[key] : this.attr;
		}

	};

	// default language
	lang.set( APP.info.get('language') );

	APP.lang = lang;

}(window));/*jslint white: true, nomen: true */
(function (win, doc) {

	"use strict";
	/*global window, document */
	/*global APP */

	win.APP = win.APP || {};

	var templateMaster;

	templateMaster = {
		templateSelector: 'script[type="text/x-template"]',
		tmplText: {},
		tmplFn: {},
		optimizeHtml: function (html) {
			return html
				.trim() // remove extra spaces
				.replace(/\{\{\s*(\S+)\s*\}\}/gi, "<%= window.APP.lang.attr.$1 %>") // {{ word }} to normal state
				.replace(/>\s+</g, '><') // remove extra spaces
				.replace(/\s+/g, ' '); // remove extra spaces
		},
		createTemplateFunction: function (str) {
			return new Function("obj",
					"var p=[]; obj = obj || {}; with( obj ){p.push('" + str
					.replace(/[\r\t\n]/g, " ")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=([\s\S]*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'") + "');} return p.join('');");
		},
		init: function () {

			var templates = doc.querySelectorAll(this.templateSelector);

			Array.prototype.forEach.call(templates, function(tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = this.optimizeHtml(tmplNode.textContent);

				this.tmplText[name] = text;
				this.tmplFn[name] = this.createTemplateFunction(text);

				tmplNode.parentNode.removeChild(tmplNode);

			}, this);

		}

	};

	win.APP.templateMaster = templateMaster;

}(window, document));

/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc, docElem) {

	"use strict";
	/*global window, document */
	/*global */

	win.APP = win.APP || {};

	win.APP.util = {
		setHTMLStyle: function() {

			var util = this,
				screenSize = docElem.clientWidth * docElem.clientHeight,
				fontSize = Math.round( 16 * Math.pow(screenSize / 153600, 0.5) ); // 153600 = 320 * 480

			fontSize = util.getBetween(16, fontSize, 24);

			fontSize = Math.round(fontSize / 2) * 2;

			docElem.style.fontSize = fontSize + 'px';

		},
		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},
		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},
		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},
		getPathSize: function (xy1, xy2) {
			return Math.pow( Math.pow(xy1.x - xy2.x, 2) + Math.pow(xy1.y - xy2.y, 2) , 0.5);
		}

	};

}(window, document, document.documentElement));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, console */
	/*global */

	win.logger = {
		on: function () {
			console.log('Logger is Enabled');
			this.isEnable = true;
		},
		off: function () {
			console.log('Logger is Disabled');
			this.isEnable = false;
		},
		isEnable: false,
		log: function () {
			return this.isEnable && console.log.apply(console, arguments);
		}
	};

	function log() {
		return logger.log.apply(logger, arguments);
	}

	win.log = log;

}(window));(function (win, doc, $) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	function Mover(data) {

		this.attr = {};

		this.set('$wrapper', data.wrapper);
		this.set('$container', data.container);

		this.set('onRedraw', data.onRedraw || false);

		this.set('isTouch', 'ontouchstart' in document);

		this.setEventMap();

	}

	Mover.prototype = {
		init: function (data) {

			data = data || {};

			if (data.wrapper) {
				this.set('$wrapper', data.wrapper);
			}

			if (data.container) {
				this.set('$container', data.container);
			}

			// detect vendor prefix for css and js
			this.setPrefix();

			// set styles and other for container
			this.setDefaultContainerState();

			this.detectTransitionEndEventName();

			this.bindEventListeners();

			return this;

		},
		detectTransitionEndEventName: function () {
			var i,
				el = document.createElement('div'),
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
		get: function (key) {
			return this.attr[key];
		},
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		detectSizes: function () {

			['$wrapper', '$container'].forEach(function (nodeName) {
				var $node = this.get(nodeName);
				this.set(nodeName + '.width', $node.width());
				this.set(nodeName + '.height', $node.height());
			}, this);

		},
		bindEventListeners: function () {

			var $wrapper = this.get('$wrapper'),
				eventMap = this.get('eventMap'),
				isTouch = this.get('isTouch');

			$wrapper.on(eventMap.down, $.proxy( this, 'onDown' ));
			$wrapper.on(eventMap.move, $.proxy( this, 'onMove' ));
			$wrapper.on(eventMap.up, $.proxy( this, 'onUp' ));

			if ( isTouch ) { // add for devices
				$wrapper.on('touchcancel', $.proxy( this, 'onUp' ));
			} else {  // fix for PC
				$wrapper.on('mouseleave', $.proxy( this, 'onUp' ));
				// zooming for PC
				$wrapper.on('mousewheel', $.proxy( this, 'onMouseWheel' ));
			}

		},

		unbindEventListeners: function () {

			var $wrapper = this.get('$wrapper'),
				eventMap = this.get('eventMap'),
				isTouch = this.get('isTouch');

			$wrapper.off(eventMap.down, this.onDown);
			$wrapper.off(eventMap.move, this.onMove);
			$wrapper.off(eventMap.up, this.onUp);

			if ( isTouch ) {
				$wrapper.off('touchcancel', this.onUp);
			} else {  // fix for PC
				$wrapper.off('mouseleave', this.onUp);
				$wrapper.off('mousewheel', this.onMouseWheel);
			}

		},

		onDown: function (e) {

			var events = this.getEvents(e),
				startEventXY = this.getAverageXY(events.events),
				$container = this.get('$container'),
				styleXY = $container.attr('style'),
				pre = this.get('prefix').css,
				startContainerXY = this.getXYZSFromStyle(styleXY);

			$container.css(pre + 'transition', 'none');

			// set start EVENTs position
			this.set('startEventXY', startEventXY);
			// set start container position
			this.set('startContainerXY', startContainerXY);
			this.set('currentContainerXY', startContainerXY);

			this.set('isActive', true);

			this.clearLogMoving();
			this.logMoving(startEventXY);

			this.detectSizes();
			this.detectEdgePositions();

			// detect start zooming
			if (events.length === 2) {
				this.set('pinchIsActive', true);
				this.set('pinchStartEvents', events.events);
			} else {
				this.set('pinchIsActive', false);
			}

		},

		onMove: function (e) {

			if ( !this.get('isActive') ) {
				return false;
			}

			var events = this.getEvents(e),
				currentEventXY = this.getAverageXY(events.events),
				currentContainerXY = this.get('currentContainerXY'),
				edges = this.get('edges'),
				logMoving = this.get('logMoving'),
				lastEventXY = logMoving[logMoving.length - 1],
				pinchData,
				x,
				y,
				dx,
				dy;

			dx = lastEventXY.x - currentEventXY.x;
			x = currentContainerXY.x - dx;

			dy = lastEventXY.y - currentEventXY.y;
			y = currentContainerXY.y - dy;

			if ( x >= edges.max.x || x <= edges.min.x ) {
				x += dx * 0.3;
			}

			if ( y >= edges.max.y || y <= edges.min.y ) {
				y += dy * 0.3;
			}

			this.set('currentContainerXY', {
				x: x,
				y: y
			});

			if ( this.get('pinchIsActive') ) { // zooming
				pinchData = this.getPinchData(events.events);
				this.setStyleByXYZS({
					x: x * pinchData.scale,
					y: y * pinchData.scale,
					scale: pinchData.scale
				});
			} else { // just moving
				this.setStyleByXYZS({
					x: x,
					y: y
				});
			}

			this.logMoving(currentEventXY);

		},

		onUp: function (e) {

			var events = this.getEvents(e),
				isTouch = this.get('isTouch');

			if (events.events.length === 0 && isTouch && this.get('pinchIsActive') ) { // 2 fingers -> 0 finger
				this.set('pinchIsActive', false);
				this.setContainerSize();
				return;
			}

			if ( events.events.length === 0 || !isTouch ) { // if is not touch device - stop moving
				this.set('isActive', false);
				this.sliding();
				this.clearLogMoving();
				return;
			}

			if (events.events.length === 1 && isTouch ) { // 2 fingers -> 1 finger
				this.set('pinchIsActive', false);
				this.setContainerSize();
				this.onDown(e);
			}

		},

		onMouseWheel: function (e) {

			var style = this.get('$container').attr('style'),
				xyzs = this.getXYZSFromStyle(style),
				scale = 1 + e.deltaY/300;

			this.setStyleByXYZS({
				x: xyzs.x * scale,
				y: xyzs.y * scale,
				scale: scale,
				time: 300
			});

			this.setContainerSize({
				withDelay: true
			});

		},

		onResizeCheckState: function () {

			var style = this.get('$container').attr('style'),
				xyzs = this.getXYZSFromStyle(style),
				edges = this.get('edges'),
				x = xyzs.x,
				y = xyzs.y;

			x = Math.min(edges.max.x, x);
			x = Math.max(edges.min.x, x);

			y = Math.min(edges.max.y, y);
			y = Math.max(edges.min.y, y);

			this.setStyleByXYZS({
				x: x,
				y: y,
				time: 300
			});

		},

		setContainerSize: function (data) {

			data = data || {};

			var onRedraw = this.get('onRedraw'),
				$container,
				style,
				xyzs,
				transitionEnd = this.get('transitionEnd');

			if ( !onRedraw ) {
				return false;
			}

			$container = this.get('$container');

			if (data.withDelay) {
				$container.one(transitionEnd, $.proxy( this, 'setContainerSize', { time: 0 } )); // work only one time
				return;
			}

			style = $container.attr('style');
			xyzs = this.getXYZSFromStyle(style);

			xyzs.time = data.time || 0;

			onRedraw.fn.call(onRedraw.context, {
				xyzs: xyzs
			});

			// detect bug with position
			// fix bug - if user up 2 fingers from display
			this.fixAfterResizing({
				time: xyzs.time
			});

		},

		getPinchData: function (events) {

			var startEvents = this.get('pinchStartEvents'),
				before,
				after;

			before = Math.pow(startEvents[0].x - startEvents[1].x, 2) + Math.pow(startEvents[0].y - startEvents[1].y, 2);
			before = Math.pow(before, 0.5);

			after = Math.pow(events[0].x - events[1].x, 2) + Math.pow(events[0].y - events[1].y, 2);
			after = Math.pow(after, 0.5);

			return {
				scale: (after / before) || 1
			};

		},

		sliding: function () {

			var logMoving = this.get('logMoving');

			if ( !logMoving || logMoving.length <= 1 ) {
				return false;
			}

			var begin = logMoving.shift(),
				end = logMoving.pop(),
				currentContainerXY = this.get('currentContainerXY'),
				edges = this.get('edges'),
				dx = begin.x - end.x,
				dy = begin.y - end.y,
				dTime = Date.now() - begin.timeStamp,
				speedX,
				speedY,
				endX,
				endY,
				endTime = Math.min(dTime * 3, 250);

			speedX = dx / dTime;
			speedY = dy / dTime;
			speedX = Math.abs(speedX) < 0.3 ? 0 : speedX;
			speedY = Math.abs(speedY) < 0.3 ? 0 : speedY;

			endX = currentContainerXY.x - Math.abs(dx) * 3 * speedX;
			endY = currentContainerXY.y - Math.abs(dy) * 3 * speedY;

			// adjust end coordinates
			endX = Math.min(edges.max.x, endX);
			endX = Math.max(edges.min.x, endX);

			endY = Math.min(edges.max.y, endY);
			endY = Math.max(edges.min.y, endY);

			this.setStyleByXYZS({
				x: endX,
				y: endY,
				time: endTime
			});

		},

		setStyleByXYZS: function (xyzs) {

			xyzs.scale = xyzs.scale || 1;
			xyzs.time = xyzs.time || 0;

			var pre = this.get('prefix').css,
				$container = this.get('$container'),
				edges;

			if ( xyzs.check ) {

				edges = this.get('edges');

				xyzs.x = Math.min(edges.max.x, xyzs.x);
				xyzs.x = Math.max(edges.min.x, xyzs.x);

				xyzs.y = Math.min(edges.max.y, xyzs.y);
				xyzs.y = Math.max(edges.min.y, xyzs.y);

			}

			xyzs.x = Math.round(xyzs.x);
			xyzs.y = Math.round(xyzs.y);
			xyzs.z = Math.round(xyzs.z || 0);

			$container
				.css(pre + 'transition', 'all ' + xyzs.time + 'ms ease-out')
				.css(pre + 'transform', 'translate3d(' + xyzs.x + 'px, ' + xyzs.y + 'px, ' + xyzs.z + 'px) scale(' + xyzs.scale + ')');

		},

		showXY: function (xy) {

			var mover = this;

			mover.detectSizes();
			mover.detectEdgePositions();

			mover.setStyleByXYZS({
				x: xy.x,
				y: xy.y,
				check: true,
				time: xy.time
			});

		},

		detectEdgePositions: function () {

			var wrapper = {
					width: this.get('$wrapper.width'),
					height: this.get('$wrapper.height')
				},
				container = {
					width: this.get('$container.width'),
					height: this.get('$container.height')
				},
				edgeSize = Math.round( Math.min(wrapper.width, wrapper.height) / 2 ),
				xEdge = container.width >= wrapper.width ? container.width / 2 - wrapper.width / 2 + edgeSize : 0,
				yEdge = container.height >= wrapper.height ? container.height / 2 - wrapper.height / 2 + edgeSize : 0,
				edges = {
					max: {
						x: xEdge,
						y: yEdge
					},
					min: {
						x: -xEdge,
						y: -yEdge
					}
				};

			this.set('edges', edges);

			return edges;

		},

		getXYZSFromStyle: function (style) {

			var reGetTransform = /^[\s\S]*?translate3d\((\-?\d+)px,\s?(\-?\d+)px,\s?(\-?\d+)px\)[\s\S]*?$/,
				coordinatesArr = style.replace(reGetTransform, '$1_$2_$3').split('_'),
				reGetScale = /^[\s\S]*?scale\((\S+?)\)[\s\S]*?$/,
				scale = parseFloat(style.replace(reGetScale, '$1'));

			return {
				x: parseInt(coordinatesArr[0], 10),
				y: parseInt(coordinatesArr[1], 10),
				z: parseInt(coordinatesArr[2], 10),
				scale: scale
			};

		},

		setEventMap: function () {

			var isTouch = this.get('isTouch'),
				map = {
					down: isTouch ? 'touchstart' : 'mousedown',
					move: isTouch ? 'touchmove' : 'mousemove',
					up: isTouch ? 'touchend' : 'mouseup'
				};

			this.set('eventMap', map);

		},

		getEvents: function (e) {

			e = e.originalEvent;

			var evt = {},
				touches = e.touches,
				events = touches || [e];

			evt.events = [];

			evt.length = events.length;
			evt.type = this.mapEventType[e.type];

			$.each(events, function (index, e) {
				evt.events.push({
					x: e.clientX,
					y: e.clientY
				});
			});

			return evt;

		},
		mapEventType: {
			mousedown: 'down',
			touchstart: 'down',
			mousemove: 'move',
			touchmove: 'move',
			mouseup: 'up',
			touchend: 'up'
		},
		getAverageXY: function (arr) {

			var sumX = 0,
				sumY = 0,
				count = arr.length;

			arr.forEach(function (xy) {
				sumX += xy.x;
				sumY += xy.y;
			});

			return {
				x: Math.round(sumX / count),
				y: Math.round(sumY / count)
			};

		},

		setPrefix: function() {

			var data = {
					js: '',
					css: ''
				},
				tempStyle = doc.createElement('div').style,
				vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

			// find vendors by css transform property
			vendors.forEach(function (vendor) {
				var transform = vendor + 'ransform';
				if (!tempStyle.hasOwnProperty(transform)) {
					return;
				}

				vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

				data.js = vendor;

				vendor = vendor.toLocaleLowerCase();
				if (vendor) {
					data.css = '-' + vendor + '-';
				}

			});

			this.set('prefix', data);

		},

		setDefaultContainerState: function () {

			this.setDefaultContainerSize();

			this.setStyleByXYZS({
				x: 0,
				y: 0
			});

		},

		setDefaultContainerSize: function () {

			var $container = this.get('$container'),
				nodeContainer = $container.get(0),
				width = parseInt(nodeContainer.style.width, 10),
				height = parseInt(nodeContainer.style.height, 10);

			$container.css({
				'position': 'relative',
				'left': '50%',
				'top': '50%',
				'margin-left': '-' + Math.round(width / 2) + 'px',
				'margin-top': '-' + Math.round(height / 2) + 'px'
			});

		},

		logMoving: function (xy) {

			var logMoving = this.get('logMoving');

			if (logMoving.length > 10) {
				logMoving.shift(); // delete first item
			}

			logMoving.push({
				x: xy.x,
				y: xy.y,
				timeStamp: Date.now()
			});

			this.set('logMoving', logMoving);

		},

		clearLogMoving: function () {
			this.set('logMoving', []);
		},

		fixAfterResizing: function (data) {

			data = data || {};

			var mover = this,
				edges = mover.get('edges'),
				currentContainerXY = mover.get('currentContainerXY'),
				x = currentContainerXY.x,
				y = currentContainerXY.y,
				time = data.hasOwnProperty('time') ? data.time : 300;

			x = Math.min(edges.max.x, x);
			x = Math.max(edges.min.x, x);

			y = Math.min(edges.max.y, y);
			y = Math.max(edges.min.y, y);

			if (currentContainerXY.x === x && currentContainerXY.y === y) {
				return;
			}

			mover.setStyleByXYZS({
				x: x,
				y: y,
				time: time
			});

			if ( !mover.get('isTouch') ) {
				setTimeout(function () {
					mover.detectSizes();
					mover.detectEdgePositions();
				}, time + 100)
			}

		}

	};

	win.Mover = Mover;

}(window, document, window.jQuery));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, setTimeout */
	/*global Backbone, APP, $ */

	win.APP = win.APP || {};

	APP.BB = APP.BB || {};

	APP.BB.Router = Backbone.Router.extend({

		routes: {
			'': 'title',
			'settings': 'settings',
			'play': 'play',
			'about': 'about',
			'instructions': 'instructions',
			'load-game': 'loadGame',
			'select-level': 'selectLevel',
			'skirmish-select-map': 'skirmishSelectMap',
			'user-map-select-map': 'userMapSelectMap',
			'mission-setup-map/:jsMapKey': 'missionSetupMap',
			'skirmish-setup-map/:jsMapKey': 'skirmishSetupMap',
			'user-map-setup-map/:jsMapKey': 'userMapSetupMap',
			'battle': 'battle',
			'main-battle-menu': 'mainBattleMenu',
			'map-editor': 'mapEditor'
		},

		title: function () {
			new APP.BB.TitleView();
		},

		settings: function () {
			new APP.BB.SettingsView();
		},

		play: function () {
			new APP.BB.PlayView();
		},

		about: function () {
			new APP.BB.AboutView();
		},

		instructions: function () {
			new APP.BB.InstructionsView();
		},

		loadGame: function () {
			new APP.BB.LoadGameView();
		},

		selectLevel: function () {
			new APP.BB.SelectLevelView();
		},

		skirmishSelectMap: function () {
			new APP.BB.SkirmishSelectMapView();
		},

		userMapSelectMap: function () {
			new APP.BB.SkirmishSelectMapView({
				type: 'userMap'
			});
		},

		skirmishSetupMap: function (jsMapKey) {
			new APP.BB.SkirmishSetupMapView(jsMapKey);
		},

		userMapSetupMap: function (jsMapKey) {
			new APP.BB.SkirmishSetupMapView(jsMapKey, { type: 'userMap' });
		},

		missionSetupMap: function (jsMapKey) {
			new APP.BB.SkirmishSetupMapView(jsMapKey, {type: 'mission'});
		},

		battle: function () {

			$('.js-unit-store-wrapper')
				.trigger('hide-unit-store');

			$('.js-battle-menu-wrapper')
				.trigger('hide-battle-menu');

			$('.js-settings-wrapper')
				.trigger('hide-battle-setting');

			$('.js-move-area-container')
				.removeClass('hidden');

		},

		mainBattleMenu: function () {

		},

		mapEditor: function () {
			new APP.BB.MapEditorView();
		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = APP.BB.Router.prototype;

			function getAction() {

				var e = window.event || {},
					newURL = e.newURL || '',
					oldURL = e.oldURL || '',
					reBattle = /#battle$/,
					reMapEditor = /#map-editor$/,
					popupPart = APP.BB.BaseView.prototype.popupUrl,
					viewAction;

				if ( newURL.indexOf(popupPart) !== -1 ) {
					viewAction = 'showPopup';
				}

				if ( oldURL.indexOf(popupPart) !== -1 ) {
					viewAction = 'hidePopup';
				}

				if ( router.isForce ) {
					return viewAction;
				}

				if ( reBattle.test(oldURL) ) {
					viewAction = 'routeFromBattle';
				}

				if ( reMapEditor.test(oldURL) ) {
					viewAction = 'routeFromMapEditor';
				}

				return viewAction;

			}

			_.each(this.routes, function (value) {
				originalFunctions[value] = proto[value];
				proto[value] = function () {

					var router = this,
						viewAction = getAction(),
						baseProto = win.APP.BB.BaseView.prototype,
						d;
						//battleData = win.APP.bb.battleData;

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						
						case 'hidePopup':
							baseProto.hidePopup();
							//if ( battleData.isEndGame === 'yes' && battleData.gameTo === 'quit') {
							//	router.routeFromBattle();
							//}

							break;							
							
						case 'showPopup':

							break;							
							
						case 'routeFromBattle':

							//if ( battleData.isEndGame !== 'yes' ) {
								baseProto.routeByUrl('battle');
								baseProto.showPopup({
									popupName: 'route-from-battle'
								});
							//}

							break;

						case 'routeFromMapEditor':

							baseProto.routeByUrl('map-editor');
							baseProto.showPopup({
								popupName: 'route-from-map-editor'
							});

							break;

					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(this, arguments);

		}
		//,
		//
		//routeFromBattle: function () {
		//	var baseProto = win.APP.BB.BaseView.prototype;
		//	baseProto.routeBack();
		//	setTimeout(function () {
		//		baseProto.routeBack();
		//	}, 50);
		//
		//}

	});


	if ($.browser.mozilla) {
		window.addEventListener("hashchange", function (e) {
			window.event = e;
		}, true);
	}

}(window));/*jslint white: true, nomen: true */
(function (win, doc) {

	'use strict';
	/*global console, alert, window, document, openDatabase */
	/*global $ */

	win.APP.map = {
		squareSize: {
			min: 24,
			max: 96, // 192
			default: 48 // 24 * 2
		},
		//maxCanvasSize: 3145728 - 1, // 2048 * 768 * 2 - 1 - default version
		maxCanvasSize: 1536 * 768 * 2, // 1536 * 768 * 2 - 1
		scaleImage: function (img, scale) {

			var imgWidth = img.width,
				imgHeight = img.height,
				srcCanvas,
				srcCtx,
				srcData,
				dstCanvas,
				dstCtx,
				offset,
				x, y, r, g, b, a;

			srcCanvas = doc.createElement('canvas');
			srcCanvas.width = imgWidth;
			srcCanvas.height = imgHeight;

			srcCtx = srcCanvas.getContext('2d');
			srcCtx.drawImage(img, 0, 0);
			srcData = srcCtx.getImageData(0, 0, img.width, img.height).data;

			dstCanvas = doc.createElement('canvas');
			dstCanvas.width = imgWidth * scale;
			dstCanvas.height = imgHeight * scale;
			dstCtx = dstCanvas.getContext('2d');

			offset = 0;
			for (y = 0; y < imgHeight; y += 1) {
				for (x = 0; x < imgWidth; x += 1) {
					r = srcData[offset];
					offset += 1;
					g = srcData[offset];
					offset += 1;
					b = srcData[offset];
					offset += 1;
					a = srcData[offset] / 100;
					offset += 1;
					dstCtx.fillStyle = 'rgba(' + [r, g, b, a].join(',') + ')';
					dstCtx.fillRect(x * scale, y * scale, scale, scale);
				}
			}

			return dstCanvas.toDataURL();

		},
		allColors: ['blue', 'red', 'green', 'black', 'gray'],
		playerColors: ['blue', 'red', 'green', 'black'],
		playerTypes: ['player', 'cpu', 'none'],
		money: [0,100,200,500, 750, 1000, 1500, 2000, 5000],
		unitsLimits: [10, 15, 20, 25,50,100,200,500,1000],
		terrainTypes: ['bridge-1', 'bridge-2', 'forest-1', 'forest-2', 'hill-1', 'road-1', 'stone-1', 'stone-2', 'terra-1', 'terra-2', 'terra-3', 'terra-4', 'terra-5', 'water-1', 'water-2', 'water-3'],
		getTypeByTileName: function (tileName) {
			return tileName.replace(/\-\d+$/,'');
		},

		terra: {
			pathResistance: 1,
			defence: 5
		},
		road: {
			pathResistance: 1,
			defence: 0
		},
		bridge: {
			pathResistance: 1,
			defence: 0
		},
		hill: {
			pathResistance: 2,
			defence: 10
		},
		forest: {
			pathResistance: 2,
			defence: 10
		},
		stone: {
			pathResistance: 3,
			defence: 15
		},
		water: {
			pathResistance: 3,
			flowPathResistance: 1,
			defence: 0
		},

		// db
		db: {

			name: 'AE2DB',
			version: '1',
			description: 'AE2 DB',
			size: 1024 * 1024 * 20, // 1024 x 1024 x 20 = 1MB x 20 = 20MB
			db: false, // field for db
			skirmishMaps: 'skirmish',
			missionMaps: 'mission',
			savedGame: 'savedGame',
			userMap: 'userMap',

			init: function () {

				var dbMaster = this,
					db = openDatabase(dbMaster.name, dbMaster.version, dbMaster.description, dbMaster.size);

				dbMaster.db = db;

				// create tablet if needed
				db.transaction(function(tx) {

					var missionDeferred = $.Deferred(),
						skirmishDeferred = $.Deferred();

					$.when(missionDeferred, skirmishDeferred).done(function () {
						dbMaster.prepareDefaultMap();
					});

					//tx.executeSql('DROP TABLE IF EXISTS ' + dbMaster.missionMaps); // TODO: comment this for production

					tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.missionMaps + ' (jsMapKey TEXT, info TEXT, map TEXT)', [], function () {
						missionDeferred.resolve();
					}, function (e) {
						log(e);
					});

					tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.skirmishMaps + ' (jsMapKey TEXT, info TEXT, map TEXT)', [], function () {
						skirmishDeferred.resolve();
					}, function (e) {
						log(e);
					});

					//tx.executeSql('DROP TABLE IF EXISTS ' + dbMaster.savedGame); // TODO: comment this for production

					tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.savedGame + ' (date TEXT, name TEXT, game TEXT)', [], null, null);

					tx.executeSql('CREATE TABLE IF NOT EXISTS ' + dbMaster.userMap + ' (jsMapKey TEXT, info TEXT, map TEXT)', [], null, null);

				});

			},

			prepareDefaultMap: function () {

				var maps = win.APP.maps,
					dbMaster = this,
					db = dbMaster.db;

				_.each(maps, function (map, jsMapKey) {
					db.transaction(function (tx) {
						tx.executeSql('SELECT * FROM ' + map.type + ' WHERE jsMapKey=?', [jsMapKey], function (tx, results) {
							if (results.rows.length) {
								dbMaster.compareMap(results.rows.item(0), map, jsMapKey).then(function () {
									delete win.APP.maps[jsMapKey];
								});
								return;
							}
							dbMaster.insertMap(map, jsMapKey);
						});
					});
				});

			},

			compareMap: function (oldMap, newMap, jsMapKey) {

				var maps = win.APP.maps,
					dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db,
					oldMapData = JSON.parse(oldMap.map),
					newMapVersion = newMap.version,
					oldMapVersion = oldMapData.version,
					savedProperties = ['isOpen', 'isDone', 'isDoneByDifficult_easy', 'isDoneByDifficult_normal', 'isDoneByDifficult_hard'];

				if (oldMapVersion >= newMapVersion) {
					deferred.resolve();
					return deferred.promise();
				}

				// get done state
				_.each(savedProperties, function (property) {
					if ( !oldMapData.hasOwnProperty(property) ) {
						return;
					}
					newMap[property] = oldMapData[property];
				});

				dbMaster.removeMap({
					type: newMap.type,
					jsMapKey: jsMapKey
				}).then(function () {
					dbMaster.insertMap(newMap, jsMapKey);
					deferred.resolve();
				});
				return deferred.promise();

			},

			insertMap: function (map, jsMapKey) { // map

				var maps = win.APP.maps,
					deferred = $.Deferred(),
					dbMaster = this,
					db = dbMaster.db,
					info;

				info = JSON.parse(JSON.stringify(map));

				delete info.units;
				delete info.buildings;
				delete info.terrain;

				db.transaction(function(tx) {
					tx.executeSql('INSERT INTO ' + map.type + ' (jsMapKey, info, map) values(?, ?, ?)', [jsMapKey, JSON.stringify(info), JSON.stringify(map)], function () {
						deferred.resolve();
					}, null);
				});

				delete maps[jsMapKey];

				return deferred.promise();

			},

			removeMap: function (data) {

				var dbMaster = this,
					db = dbMaster.db,
					type = data.type,
					jsMapKey = data.jsMapKey,
					deferred = $.Deferred();

				db.transaction(function (tx) {
					tx.executeSql('DELETE FROM ' + type + ' WHERE jsMapKey = ?', [jsMapKey], function () {
						deferred.resolve();
					}, function () {
						deferred.resolve();
					});
				});

				return deferred.promise();

			},

			removeSave: function (name) {

				var dbMaster = this,
					db = dbMaster.db,
					deferred = $.Deferred();

				db.transaction(function (tx) {
					tx.executeSql('DELETE FROM ' + dbMaster.savedGame + ' WHERE name = ?', [name], function () {
						deferred.resolve();
					}, function () {
						deferred.resolve();
					});
				});

				return deferred.promise();

			},

			getMapsInfo: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db,
					mapsInfo = {};

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' ORDER BY jsMapKey ASC', [], function (tx, results) {
						var i, len, row;
						for (i = 0, len = results.rows.length; i < len; i += 1) {
							row = results.rows.item(i);
							mapsInfo[row.jsMapKey] = JSON.parse(row.info);
						}
						deferred.resolve(mapsInfo);
					});
				});

				return deferred.promise();

			},

			getMapInfo: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' WHERE jsMapKey=?', [data.jsMapKey], function (tx, results) {

						var row = results.rows.item(0),
							mapInfo = JSON.parse(row.info);

						deferred.resolve(mapInfo);

					});
				});

				return deferred.promise();

			},

			getMap: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' WHERE jsMapKey=?', [data.jsMapKey], function (tx, results) {

						var row = results.rows.item(0),
							map = JSON.parse(row.map);

						deferred.resolve(map);

					});
				});

				return deferred.promise();

			},

			getMapList: function (data) {

				data = data || {};

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db,
					mapsInfo = {};

				data.type = data.type || dbMaster.skirmishMaps;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' ORDER BY jsMapKey ASC', [], function (tx, results) {
						var i, len, row;
						for (i = 0, len = results.rows.length; i < len; i += 1) {
							row = results.rows.item(i);
							mapsInfo[row.jsMapKey] = JSON.parse(row.info);
						}
						deferred.resolve(mapsInfo);
					});
				});

				return deferred.promise();

			},

			openMap: function (openMaps) {

				var dbMaster = this;

				_.each(openMaps, function (mapData) {
					dbMaster.getMap(mapData).then(function (map) {
						map.isOpen = true;
						dbMaster.removeMap(mapData).then(function () {
							dbMaster.insertMap(map, mapData.jsMapKey);
						});
					});
				});

			},

			setMapDone: function (mapData) {

				var dbMaster = this,
					difficultLevel = win.APP.info.get('difficult');

				dbMaster.getMap(mapData).then(function (map) {

					map.isDone = true;
					map['isDoneByDifficult_' + difficultLevel] = true;

					dbMaster.removeMap(mapData).then(function () {
						dbMaster.insertMap(map, mapData.jsMapKey);
					});

				});

			},

			saveGame: function (date, name, data) {

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				_.each(data.map, function (value, key) {
					if ( !/briefing/i.test(key) ) { // save briefing only
						return;
					}
					_.each(value, function (briefing) {
						// detect onShow
						if (briefing.onShow && briefing.onShow.context && briefing.onShow.default_context) {
							briefing.onShow.context = briefing.onShow.default_context;
						}

						// detect onHide
						if (briefing.onHide && briefing.onHide.context && briefing.onHide.default_context) {
							briefing.onHide.context = briefing.onHide.default_context;
						}
					});
				});

				dbMaster
					.removeSave(name)
					.then(function () {
						db.transaction(function(tx) {
							tx.executeSql('INSERT INTO ' + dbMaster.savedGame + ' (date, name, game) values(?, ?, ?)', [date, name, JSON.stringify(data)], function () {
								deferred.resolve();
							}, null);
						});
					});

				return deferred.promise();

			},

			getSavedGames: function () {

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db,
					saves = [];

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + dbMaster.savedGame + ' ORDER BY date DESC', [], function (tx, results) {
						var i, len, row;
						for (i = 0, len = results.rows.length; i < len; i += 1) {
							row = results.rows.item(i);
							saves.push(row.name);
						}
						deferred.resolve(saves);
					});
				});

				return deferred.promise();

			},

			getSavedGame: function (gameName) {

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + dbMaster.savedGame + ' WHERE name=?', [gameName], function (tx, results) {
						deferred.resolve(results.rows.item(0));
					});
				});

				return deferred.promise();

			},

			mapIsExist: function (data) {

				var dbMaster = this,
					deferred = $.Deferred(),
					db = dbMaster.db;

				db.transaction(function (tx) {
					tx.executeSql('SELECT * FROM ' + data.type + ' WHERE jsMapKey=?', [data.jsMapKey], function (tx, results) {
						deferred.resolve( Boolean(results.rows.length) );
					});
				});

				return deferred.promise();

			}

		}

	};

}(window, window.document));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global console, alert, window, document */
	/*global */

	win.APP.mapTiles = {

		// main
		'bridge-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEyWZFrSjkRLQTmsblN9Sh1TGeRHAAAAVklEQVR4Aa2RSwqAUAwDE196/ysrklVJXDkwtDh+hIdTwFXogQVMASQnCUm0Y98dD7TjKU8vvpjCrJvA8IRSoIUs06u0TYHf34i/ugJ3mBhY+PNoT+EGXu4DQ2cCGDoAAAAASUVORK5CYII=',
		'bridge-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEzSjkSWZFp9Sh1LQTmsblOEQcKrAAAARklEQVR42rXPMQ4AIQwDQWLj/38Zo/NJ1Ihs4SbFKGNWEeNMYNW8PBA7KcMcnhoOcth1GRAi0EKTYeIPXYbTN0baDClQ/ljuKQN6TFmLxAAAAABJRU5ErkJggg==',
		'forest-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtO+czJCVZkAf5y4mRybAAAAjElEQVR42n2PSxKDMAxDwb+40Puft3ZcoywALaWR3mh7l9mDz7s9+PttIhnone/MHgl4KKACnshM3BW8f4FFvh4V8DqYW6xm4NVWJqq5vvIGnXIcetb6wiOiT4hqHbxoTPV68SLoqNeLt7UG3iSPxhXgTfKIrgBvKIUG9ZvVxptah/AG62iU0EAE+1U/3CYEh+g3Tw8AAAAASUVORK5CYII=',
		'forest-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtNCVZm+czIAf5wEVV2SAAAAb0lEQVR42o2OWwrAIAwEax4mtb3/eatSCKwRnJ/ALhvmOqbWTc6lbvKSNjIKzXJn9qLpIJuIzMZdlwGLvN4nYN+L+YsV7UVGo4r2Rk2eRxsZ2BPR3ekH7I1+bLG3iM/sA7QP0D4A+wDtA7APwv6MD3onA0PJgvpTAAAAAElFTkSuQmCC',
		'hill-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX09OaT1OA2qtF7jtNCVZltgelBAAAAR0lEQVR4Ac2PsQqAUAwDc+n7/28W3qBim8FB8IYQekOo/o3tKjVgZ1OcxWgG3hoYDbhquu9cVmARfw0G7qN+LF2VsJkN+ooDYH4AUzZs6V0AAAAASUVORK5CYII=',
		'road-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAADFBMVEXCij15TFOca2Cvek/vzfTLAAAAUklEQVR42o1PQQ4AIAgy+v+fa+OADZtysUGCxP4gCUAiOC+j8QiFoVOgaZTBymisTNCSHrOC/QbPff+EbWCBfsPm8ObCvEeUAqPggvn3zWv8hQOnUAaMq7ZOUwAAAABJRU5ErkJggg==',
		'stone-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAGFBMVEX09OaT1OCru/N7jtPC1/dCVZk2qtEuNUIzhb8aAAAApklEQVR4AZ2OgWpEIQwEZ3eT3P//cZ8Eihx3FDog6AxG+ZuZJJ88D8pnD/3Fo/eSL2VALC9u+neYcpeOCA+adPoa5DhQk7F0B7wnC1R9f7WFjPd9b2hExTLCsp5QPChCE09EfMhekRnShlEn9lkFkmY6LWDSaaOcgIRygpx0V6pqQzn9iiSTThy7TqBKdiy79GqrHuBwtj4xneNZv+lUeYe8UQv/5gfc+QLan8+rhgAAAABJRU5ErkJggg==',
		'stone-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIVBMVEUuNUI2qtFCVZl7jtOIABWT1OCru/PC1/ftHCT09Ob/fydclyL/AAAAxUlEQVR4AXXRQW7FQAgD0Awegz33P3BBkdo07feCBU9mw+UP+QFN/oG1j/bGH1j23lvxhuUjH5vxApzjhnMYT5gC5bFz/YI4Zw206HpAgMYAFwLxDcuplNUtJfkESXPfzWbFDbO3guek05pd3hDqICXTPdlQA4SshVyikalMdGVAXkJkKwOQ0Fy+SK4BenqBkIkBk+bATEQUquqGSsQFkmoHci4NuIqZyB7iFcnqeMCc8iACs3f5hqHRtjny/nnd8Rve+Qhf5qgQfg3bMNUAAAAASUVORK5CYII=',
		'terra-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEX09OYsDoUiAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'terra-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX29t7D49mR0dQ1qMZAU5ddagrgAAAAYElEQVR4AdXPMW7DUAwE0Zld3v/MKRLGX7AMqPVUBB62IO/ZpL2DgNl78wIa+S2gOYAF4RH0BR6AOQTNAqTTA7ILK8wfYBf+V1CBadlMMNMIOMM1dR99XCp3BT4IqnxdP3U6AOlAf220AAAAAElFTkSuQmCC',
		'terra-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEWR0dQ1qMb29t5AU5d3ibjD49lInfDAAAAAvklEQVR4AYXPUYorYQhE4TqWtf8tX7VvaDLzMEKQnA9+aVmqblOqGRXuLsliAfwBw0K/wAJ/Agd3oxf6brwgpnlmFL3AgUAHfEE/0L/AWpB/gMtVSc3yQcsH2Ca59QXmA1gvNNi68f8PtCweoWb0dC6z4gRJ+DqbpR5xuu/F7S2h6MTdVftj+0KtmGlJdQLePlCpke0jZHuBFjRCNBNjrueeosR1Eu5PSvXIQhxtnKmFmoUB605vfmANIM/WwT93YgP9d55xyQAAAABJRU5ErkJggg==',
		'terra-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEX29t6R0dTD49k1qMZ3ibhAU5fSFAssAAAAYklEQVR4Aa2M0QoCMAwDL8n2/78sSN3QrYLgvYzskjISRzFg2SwkAqrwLhC+ijXwIV7ZV+F6t6gcw0UkOsUY+1vRFtFqP1OJan8yp8wNmZ/pVyLmK1aS9mJ01IEyHY2x+C8PMGgAxB7LN1oAAAAASUVORK5CYII=',
		'terra-5': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAElBMVEX29t6R0dQ1qMZAU5fD49l3ibjnniWjAAAAv0lEQVQYV0XJsXLCMBAA0dVheumE+jssemRCbyvjHgH//y0pmCHbvVkAUOe/xxFCAoJzfBwfRAGU+R3DvrADY51Xk2mZCrCfHBN0ewO9+eS6aq5Az6Ytu7QKMueFUZjbYgiXFkaJ+Ykh9BGfl1AqxoF+nm639Vy5cqDPEcJSucK1vwDu9QD8Dg0pRS8/QG/ZQFquwH5fAObXEyZ366etipYIyc1ARDXC5hbVg2iyD+CDzb/nTUnfM8hpmIOKpvYHDvwbD2PPXe0AAAAASUVORK5CYII=',
		'water-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEUhVNNf+AozAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'water-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf8ysPhgz/DN4+eD/UgYAAAAIklEQVQY02NgIA8IIJiMys6K2GWwAEZktrIiDhk6OohMAAAU1AGYuS2vKAAAAABJRU5ErkJggg==',
		'water-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf9gz/AysPjN4+dmthq+AAAAJElEQVQY02NgoBwwKpKgFokprKIsiFWGHCCAxBZWFsAhQzUAAJi4APfDllgeAAAAAElFTkSuQmCC',

		// angles
			// road
		'a-road-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2A2qtGvek+T1OB5TFP09OZtbMsPAAAAOUlEQVR42oWLQQ4AMAjCELb/f3miidttPRgaEPvhI1Lfaa6EFElJpmXgh84AauxIsmfOwAiNRZGFOb1RAii+KOSbAAAAAElFTkSuQmCC',
		'a-road-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAR0lEQVR42n3JAQ7AIAgDwM52/f+TxyBkiTovgaLF/eNcXK88vgvxGEPSSAqVyE1SE8Sw2Y5dP/AGAzJi3NAxocgq9s4F6QUf3ckFVUPR+LwAAAAASUVORK5CYII=',
		'a-road-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2A2qtGvek+T1OB5TFP09OZtbMsPAAAAOUlEQVR42n3LQQ4AIAgDwULl/1+2BRM9uRcyIUU9fUD6kBcnhCJjsJzcAEaeITNNTwXAYjXcC73C2rqEAiguDjzDAAAAAElFTkSuQmCC',
		'a-road-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAVklEQVR42m3PUQ7AIAgDULFl9z/y6MQ1JvLVF4KNIzNI4NEUsgEI0xtBMioshABigQqaC4rG8GZSqUsFl/bFRglEww9o46cV7zhvvsr/Py6NEmB4kxsvJPUFN3MPk0cAAAAASUVORK5CYII=',
		'a-road-6': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAAVklEQVR42m2NQQ7AQAgCdUH//+SGjZakqScn4BitIXmy6kKAzBpoGADV3qT3ZnuTBATHiXoCGaSzem27OzFEMxfg2h0yDTAAGDVG56cGJx8BEM1j9R88LdIFNNwHUCkAAAAASUVORK5CYII=',
		'a-road-7': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEWca2DCij02qtF5TFOT1OCvek/09OYbOmi9AAAAPElEQVR4AV3MUQ6AMAjGYITa+x9ZSTYl4+3L3xAq1HX3NTSrYmAsfEgk62WEKHS5s/VkA4QF7PuzCTiWB9ZnAuarfOb5AAAAAElFTkSuQmCC',
		'a-road-8': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEXCij2T1OA2qtGca2B5TFP09Oavek9eCOc+AAAARklEQVR42oWMQQrAQAgDY4z9/5Or7uKp0gFhyIB4FjCyBPe88bT91X/wYlSQdAcVVVtA8pjTSA2wJKNZJK3sCfGNIRbW8AJs4QVz0+c5fAAAAABJRU5ErkJggg==',
		'a-road-9': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEWca2DCij02qtF5TFOT1OCvek/09OYbOmi9AAAAO0lEQVR4AVXLUQ6AMAgEUSzj3P/IQoi1zt9LduPurgS1EZlLB9UfDEq1QlZhNqC4z12A8MKOE27Ah6MH1LgC5rwdaAUAAAAASUVORK5CYII=',
		'a-road-1-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC82qtGT1OD09OZ5TFOca2Cvek+e1/vUAAAANUlEQVR42m3KMQ4AMAgCQEHp/5/cEmMnWfCCkZms0/mQQRKGFQDi46U0b3Jmcfe9QyppWVZc1SIC7yU/hSsAAAAASUVORK5CYII=',
		'a-road-3-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC82qtGT1OD09OZ5TFOca2Cvek+e1/vUAAAAOElEQVR42l3J0QoAIAhDUbWt///kpmRC92FwmO0KvtQFPWKABxKAvkTZDEj0SWFKcEClmYf9dD8O17QC81nzBtQAAAAASUVORK5CYII=',
		'a-road-7-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEU2qtGT1OB5TFP09Oaca2Cvek+whiSvAAAANElEQVR4AXXLwQ0AMAhCURTcf+VqQ3vzJx5eDCinvoFluAXaoAtNFrL7CAbybUjGoAzCnwPQ4QKHOyQTRAAAAABJRU5ErkJggg==',
		'a-road-9-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEV5TFM2qtGT1OD09Oaca2Cvek/jHXq9AAAAMUlEQVR42pXKQQoAMAwCQU3M/7/cBEqwxy5eBkRZkKM+IIPemyYsIsiBepHdBRYdODjTIgKFi9rjBwAAAABJRU5ErkJggg==',
		
			// water
		'a-water-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAHlBMVEV7jtMZP54hVNNUKC8QdtsAl+J5TFOca2BLuOv09OZIZy18AAAASklEQVQI1yWMwREAMQgCjXpC+m/4kPBAVgfjWkEZY40xJYOAAKZkCzWCmQfemha2YMXlQPNbxVacu1uXAh0z/cCQ5/gBXxYQD6QfJ/QDdkduTmoAAAAASUVORK5CYII=',
		'a-water-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAHlBMVEVUKC97jtP09OYQdtsAl+J5TFNLuOuca2AZP54hVNOngmFhAAAAUElEQVR42nWJQRLAMAgC0Uas//9wqU16cw/LADB3+gf5yryNMAJaGJlp5DvICdWIZRbQIzriHC35hAz5L1tdwAGsAVwDqAHcAyippEPtQA08T1EGqx/qCJEAAAAASUVORK5CYII=',
		'a-water-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAHlBMVEV7jtMZP54hVNNUKC8QdtsAl+J5TFOca2BLuOv09OZIZy18AAAASklEQVR42iXLQQ4AMQhCUVsdxPtfeJD+hckLMTgzjHHRQSZ0DJXQ4QMgIA0AXgW+EotvkxqcqCprn+KWyU4t51wjMQuLWFxlNOcHI70DeNCX4ZIAAAAASUVORK5CYII=',
		'a-water-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAG1BMVEV7jtNUKC+ca2AAl+J5TFP09OZLuOsQdtshVNMYBHqyAAAAPklEQVR4AZ3OMQ6AAAxC0VIp9f4n1k0GSYxsbyG/hG4du+e9GtAg8sF8gxjfYBgiHbQhtxX5I9RzIsog9DsuAE4Gk8q2wRQAAAAASUVORK5CYII=',
		'a-water-6': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAG1BMVEV7jtNUKC+ca2AAl+J5TFP09OZLuOsQdtshVNMYBHqyAAAAQklEQVR4AZXOMRKAQAxC0YAJ6/1PrJVLisy4dK9hftzv1rpEQhuJ+pApR/0BUw4YoA3Mb/QDoqa2OA5lh0ZEK1DDAwz4BpMQMLaeAAAAAElFTkSuQmCC',
		'a-water-7': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAG1BMVEWT1OCca2B5TFP09OYAl+JUKC8hVNMQdttLuOtd57RmAAAAQElEQVR4AWXHQRKAMAwCQEjE8P8XS3tpZ9zbwlT5mXkD1pUu6YR1xVW/zEkWaErJWiJp1gLW3gZ4l6SEztq9+APt4AL8MBy1ggAAAABJRU5ErkJggg==',
		'a-water-8': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAMAAABP7o1HAAAAFVBMVEWca2D09OZUKC8Al+JLuOsQdtshVNNUHAE3AAAALUlEQVR4AWNgwwEGVoIVB8AtwYwDMLDgAAxMQMDAAKSACJkJ1MEIBCCSBYUJAKV1BVU7rdexAAAAAElFTkSuQmCC',
		'a-water-9': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAG1BMVEWT1OCca2B5TFP09OYAl+JUKC8hVNMQdttLuOtd57RmAAAAQklEQVR4AU3HuwFDMQjFUD5WuPtPHEzxsCod+3VVR4HrAQuIXIQvIjSoD339D04DPO1MKiBNt3lk4O6zMlPelP35B/A7Avyx5tKDAAAAAElFTkSuQmCC',
		'a-water-1-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC+ca2BLuOt5TFMAl+IQdtshVNOCBgE9AAAAM0lEQVR4AX3HuRUAIBACUdyD/ksWA95q4kTzEciM6qbCeiBd0Bs5T8R5o+YJnX5AB88fG8R6As5VmRW8AAAAAElFTkSuQmCC',
		'a-water-3-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAFVBMVEVUKC+ca2BLuOt5TFMAl+IQdtshVNOCBgE9AAAAMUlEQVR4AXXHyQ0AIAhFQRaw/5L9IS/qxbmNLemuyLR44zfmJxphSWYxYaUwmVCCfzbILQLOSttGLAAAAABJRU5ErkJggg==',
		'a-water-7-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2BUKC9LuOsAl+IQdtshVNNLsAMwAAAAKklEQVR4AWNgRQKUc1hYWJA5CC4DMzOCx8DEBOZCOIyMQB6cw8DABJMCANQsAo26LsDCAAAAAElFTkSuQmCC',
		'a-water-9-s': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAElBMVEWca2BUKC9LuOsAl+IQdtshVNNLsAMwAAAAKElEQVQIW2NkZUAARupx/iM4/5FkQOz/UM5/EEJwgBDKAUn8/8fACACdqg86uLhn0wAAAABJRU5ErkJggg=='

	};

	win.APP.mapTilesPreview = {
		'bridge-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEyWZFrSjkRLQTmsblN9Sh1TGeRHAAAAVklEQVR4Aa2RSwqAUAwDE196/ysrklVJXDkwtDh+hIdTwFXogQVMASQnCUm0Y98dD7TjKU8vvpjCrJvA8IRSoIUs06u0TYHf34i/ugJ3mBhY+PNoT+EGXu4DQ2cCGDoAAAAASUVORK5CYII=',
		'bridge-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEXAeEzSjkSWZFp9Sh1LQTmsblOEQcKrAAAARklEQVR42rXPMQ4AIQwDQWLj/38Zo/NJ1Ihs4SbFKGNWEeNMYNW8PBA7KcMcnhoOcth1GRAi0EKTYeIPXYbTN0baDClQ/ljuKQN6TFmLxAAAAABJRU5ErkJggg==',
		'forest-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtO+czJCVZkAf5y4mRybAAAAjElEQVR42n2PSxKDMAxDwb+40Puft3ZcoywALaWR3mh7l9mDz7s9+PttIhnone/MHgl4KKACnshM3BW8f4FFvh4V8DqYW6xm4NVWJqq5vvIGnXIcetb6wiOiT4hqHbxoTPV68SLoqNeLt7UG3iSPxhXgTfKIrgBvKIUG9ZvVxptah/AG62iU0EAE+1U/3CYEh+g3Tw8AAAAASUVORK5CYII=',
		'forest-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEX09OZ8xiNLuOsAqDcAWYIBVVcAcHGT1OAAg397jtNCVZm+czIAf5wEVV2SAAAAb0lEQVR42o2OWwrAIAwEax4mtb3/eatSCKwRnJ/ALhvmOqbWTc6lbvKSNjIKzXJn9qLpIJuIzMZdlwGLvN4nYN+L+YsV7UVGo4r2Rk2eRxsZ2BPR3ekH7I1+bLG3iM/sA7QP0D4A+wDtA7APwv6MD3onA0PJgvpTAAAAAElFTkSuQmCC',
		'hill-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX09OaT1OA2qtF7jtNCVZltgelBAAAAR0lEQVR4Ac2PsQqAUAwDc+n7/28W3qBim8FB8IYQekOo/o3tKjVgZ1OcxWgG3hoYDbhquu9cVmARfw0G7qN+LF2VsJkN+ooDYH4AUzZs6V0AAAAASUVORK5CYII=',
		'road-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAADFBMVEXCij15TFOca2Cvek/vzfTLAAAAUklEQVR42o1PQQ4AIAgy+v+fa+OADZtysUGCxP4gCUAiOC+j8QiFoVOgaZTBymisTNCSHrOC/QbPff+EbWCBfsPm8ObCvEeUAqPggvn3zWv8hQOnUAaMq7ZOUwAAAABJRU5ErkJggg==',
		'stone-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAGFBMVEX09OaT1OCru/N7jtPC1/dCVZk2qtEuNUIzhb8aAAAApklEQVR4AZ2OgWpEIQwEZ3eT3P//cZ8Eihx3FDog6AxG+ZuZJJ88D8pnD/3Fo/eSL2VALC9u+neYcpeOCA+adPoa5DhQk7F0B7wnC1R9f7WFjPd9b2hExTLCsp5QPChCE09EfMhekRnShlEn9lkFkmY6LWDSaaOcgIRygpx0V6pqQzn9iiSTThy7TqBKdiy79GqrHuBwtj4xneNZv+lUeYe8UQv/5gfc+QLan8+rhgAAAABJRU5ErkJggg==',
		'stone-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIVBMVEUuNUI2qtFCVZl7jtOIABWT1OCru/PC1/ftHCT09Ob/fydclyL/AAAAxUlEQVR4AXXRQW7FQAgD0Awegz33P3BBkdo07feCBU9mw+UP+QFN/oG1j/bGH1j23lvxhuUjH5vxApzjhnMYT5gC5bFz/YI4Zw206HpAgMYAFwLxDcuplNUtJfkESXPfzWbFDbO3guek05pd3hDqICXTPdlQA4SshVyikalMdGVAXkJkKwOQ0Fy+SK4BenqBkIkBk+bATEQUquqGSsQFkmoHci4NuIqZyB7iFcnqeMCc8iACs3f5hqHRtjny/nnd8Rve+Qhf5qgQfg3bMNUAAAAASUVORK5CYII=',
		'terra-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEX09OYsDoUiAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'terra-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAD1BMVEX29t7D49mR0dQ1qMZAU5ddagrgAAAAYElEQVR4AdXPMW7DUAwE0Zld3v/MKRLGX7AMqPVUBB62IO/ZpL2DgNl78wIa+S2gOYAF4RH0BR6AOQTNAqTTA7ILK8wfYBf+V1CBadlMMNMIOMM1dR99XCp3BT4IqnxdP3U6AOlAf220AAAAAElFTkSuQmCC',
		'terra-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEWR0dQ1qMb29t5AU5d3ibjD49lInfDAAAAAvklEQVR4AYXPUYorYQhE4TqWtf8tX7VvaDLzMEKQnA9+aVmqblOqGRXuLsliAfwBw0K/wAJ/Agd3oxf6brwgpnlmFL3AgUAHfEE/0L/AWpB/gMtVSc3yQcsH2Ca59QXmA1gvNNi68f8PtCweoWb0dC6z4gRJ+DqbpR5xuu/F7S2h6MTdVftj+0KtmGlJdQLePlCpke0jZHuBFjRCNBNjrueeosR1Eu5PSvXIQhxtnKmFmoUB605vfmANIM/WwT93YgP9d55xyQAAAABJRU5ErkJggg==',
		'terra-4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAElBMVEX29t6R0dTD49k1qMZ3ibhAU5fSFAssAAAAYklEQVR4Aa2M0QoCMAwDL8n2/78sSN3QrYLgvYzskjISRzFg2SwkAqrwLhC+ijXwIV7ZV+F6t6gcw0UkOsUY+1vRFtFqP1OJan8yp8wNmZ/pVyLmK1aS9mJ01IEyHY2x+C8PMGgAxB7LN1oAAAAASUVORK5CYII=',
		'terra-5': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAElBMVEX29t6R0dQ1qMZAU5fD49l3ibjnniWjAAAAv0lEQVQYV0XJsXLCMBAA0dVheumE+jssemRCbyvjHgH//y0pmCHbvVkAUOe/xxFCAoJzfBwfRAGU+R3DvrADY51Xk2mZCrCfHBN0ewO9+eS6aq5Az6Ytu7QKMueFUZjbYgiXFkaJ+Ykh9BGfl1AqxoF+nm639Vy5cqDPEcJSucK1vwDu9QD8Dg0pRS8/QG/ZQFquwH5fAObXEyZ366etipYIyc1ARDXC5hbVg2iyD+CDzb/nTUnfM8hpmIOKpvYHDvwbD2PPXe0AAAAASUVORK5CYII=',
		'water-1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAQMAAADaua+7AAAAA1BMVEUhVNNf+AozAAAAC0lEQVQIHWOgMQAAAGAAAfrd2uIAAAAASUVORK5CYII=',
		'water-2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf8ysPhgz/DN4+eD/UgYAAAAIklEQVQY02NgIA8IIJiMys6K2GWwAEZktrIiDhk6OohMAAAU1AGYuS2vKAAAAABJRU5ErkJggg==',
		'water-3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUhVNMFkf9gz/AysPjN4+dmthq+AAAAJElEQVQY02NgoBwwKpKgFokprKIsiFWGHCCAxBZWFsAhQzUAAJi4APfDllgeAAAAAElFTkSuQmCC',

		// buildings
		'well': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAMFBMVEX///82qtE3ruRAACpBSFRve5B5TFN9Sh2T1OCWZFqca2Cdqb6vek/AeEza3uXkpDwTnjwsAAAAAXRSTlMAQObYZgAAAK9JREFUeNpl0AEOhSAMA9DtTxyg4v1v+8sKUWKzxNCnS0RmzMwRHpb2vjGrsb0uDG32bEvBGI092wHu3ZyAaox3MANw0QQfEMv6l09LQAUoTth7LIIiVsFOZGdeq+xkpj2rVjHsDuDfDuEiAm+CwlsYYCWMELcQoIAwwrgCBTjB3uAqkC9ED/lCSkJaQDW1LaNOx5ZVtaKveGbJOAJSa5CgGsXMrx0AyRF5By+zWfIHqR4OmBOmZNIAAAAASUVORK5CYII=',
		'temple': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEX///8AAAAwNj82qtFAACpBSFRbZXdve5B5TFN9Sh2EkquT1OCWZFqca2Cdqb62wNHa3uXkpDy5AEM5AAAAAXRSTlMAQObYZgAAAKFJREFUeNq1jMEOAyEIRIUVULRa//9nC7o2m23S277TMC9DeAKZ3Ftm0dZ7U2G+tiyyhQhv57UaUxiyV2TndaHaaInfBT2zaO9JuyzQDq9qztX1d4HeNq15jFy1uaOyFo7EOkaN4vlcAKABEHOOO0+RgNgAMcATQTqKCyRRFVIAXQlTOIX2rkt4cmEcCdFPf73TFKWkhMyYjJ2OsHjdCP/4APxBDTIjEfeXAAAAAElFTkSuQmCC',
		'castle-black': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAMAAAA8VkqRAAAAP1BMVEUAAACEkqtaZHZve5BBSFQAAAC5wtH09OYvNT+dqb4AK0vyzHJUKC9AU5cAQXKca2B5TFOT1ODy5ccAdpYAFjCW4UGSAAAAAXRSTlMAQObYZgAAAQ1JREFUeAHtj0GunEAMRL/LZcsESOaTuf9ZU7in1QtygCzyxKb89CT66z//HBB/WzDBeacJjDuqMA3HQgtG0IIEyOg1RBpgibTUN1fHKUBriBTGWwgAxaYAUEgUsu9o2iSqhdXdeCPFshaBrHGfphLRgmKJXi1ooj4GZYKx3lpoaiyul9f7p3jX4+W8fouL6+X0FI7rLi6M1Q/0zWxz7D/EjrH6gWak2RRj1SjIVfSaBbCKXrPIVCGjO3rNYtvMYL7vbujVRXz+ysxdfqy4hVlmF4CKsWIVdEbQ+SjoIZyPooaoR1EIgXoUMUSs4jTPdAsegjHWKfEto/vxag4Z3b+/2pzH8fr14XUc533/A49RDL+w5xRoAAAAAElFTkSuQmCC',
		'castle-blue': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAMAAAA8VkqRAAAAP1BMVEUAAACEkqtaZHZve5BBSFQAAAD09OYvNT+2wNGdqb69xNAAZMbyzHJUKC+V1+pBlelAU5eca2B5TFPy5ccMNXDKp7LeAAAAAXRSTlMAQObYZgAAARNJREFUeAHtj1Fu6zAMBMPlEpT9rDw3zv3PWoqMoA/3AP3oIEAwHCxgPX4dfyD4ySAB553DUHe4YxaWIQPNKEYCpKVV2AWQPf72+E3L8R6AkhDDhCMEAJyJA2AQwbHnHUmWHZ5BfGw0iUSXDIbm817FGywDgxXSMlAC/xT4MNp6qyPxMq6X+/t/8Pb1cjQBpPF6BhfLRqC2QHGNxYWyfKBuIpvi+BccKPMRREiRGcq8FuRapM0FsBZpc9FaLEY5gLS52DYRiB6HCtJyYZ+vElGNXmYjiLSWCyAWZbYWVJpReVtQLVDeFl7BbwvHCPDbwirYWpyirakYe0ArOyM8o8S9v5IeJe7PR5az99fXh1fv57h/A2k/DW2hsGhHAAAAAElFTkSuQmCC',
		'castle-gray': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAMAAAA8VkqRAAAAM1BMVEUAAABnZ2eVlZV+fn5JSUk3NzcAAAD09ObCwsKsrKyXl5djY2PHx8e6urp3d3ddXV3f39/hEhORAAAAAXRSTlMAQObYZgAAAQ9JREFUeNrtjlFu60AMA0stKWxsp8n9T1uu1IU/0gO8jzcIYowGdPL1n38OmL8Mh+G+cxn6Dgm7sA0VmMkjSYDMsg7XARyXH5c/22p8GfAoiGX1YhoAYiEANA7CVXcUVS6oQmhtRuFERYXEVN930URWoLlDWQWG0X6VlnEFBiS4FGqjA9y9kmqoNqwwA4jJ92XebFuBY5qBd5g32uig8Yh4DDxP80SbVoggI3ZoUy/Ie1G2F8C9KNuLOb1w8R1le/HwDyLG8zkCbStk/w9fxnBvyxUi5qwF4EVb3gsOZvrrY8GRZvBjoQ76WAgrQB+L7JD34owx54ikDLPtdJguvutVyMX36eBySq/vX17Sue4/xVoNKfAXRfwAAAAASUVORK5CYII=',
		'castle-green': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAMAAAA8VkqRAAAAQlBMVEUAAACEkqtaZHZve5BBSFQAAAD09OYvNT+2wNGdqb69xNAAmTfyzHJUKC9AU5eca2B5TFNjviWT1ODy5cer7VoAVVINfLyyAAAAAXRSTlMAQObYZgAAARRJREFUeAHtj0GO4zAMBMNmE5S9ljcbb/7/1aHICDp4HjCHKQQIioUGrMeP4xcE3xkk4LxzGOoOd8zCMmSgGcVIgLS0CrsAssffHr9pOd4DUBJimHCEAIAzcQAMIjj2vCPJssMziI+NJpHoksHQfN6reINlYLBCWgZK4J8CH0Zbb3UkXsb1cn//C96+Xo4mgDRe/4OLZSNQW6C4xuJCWT5QN5FNcfwJDpT5CCKkyAxlXgtyLdLmAliLtLloLRajHEDaXGybCESPQwVpubDPV4moRi+zEURaywUQizJbCyrNqLwtqBYobwuv4LeFYwT4bWEVbC1O0dZUjD2glZ0RXlHi3p9JjxL31yPL2fvz74dn7+e4fwGuGA13s9hHYAAAAABJRU5ErkJggg==',
		'castle-red': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAwCAMAAAA8VkqRAAAAQlBMVEUAAACEkqtaZHZve5BBSFQAAAC5wtH09OYwNj+dqb6hAHDyzHJUKC8uNUJAU5fbJHGca2B5TFOT1ODy5cf0npxfBXi9Ojv2AAAAAXRSTlMAQObYZgAAARFJREFUeAHtj0uu3EAMAyM2JcjxJ5nnzP2vGlqahhfOAbJ4BW+oQgHuH9/8d0D8a8EE550m0HfsO6ZhL5SgO81JgPReJcIAC4SFvrkqDgFaQYQwXkIA2FnsACgkElF3FGUCewnLqxmFFNOQEo7Ivk+TAS9BcYtaJWgiPwZpgt5vzYRMkb14vzzfv8Q7Hy/n+UecvF/OEWLgvIoTveqBYzFbBtafYkWvvIQZaTZFr+yCvItaswDuotYsIlTI6I5as1gWM9hY12GoVYV//spsDPlefgmziCoAFb38LjjozsFHweFi8FFki3wUCRfIR+Et/C4OGxHDnJug9zokvmR0317FJqP7l4TMsW2v3x9e23Zc978nEw0aI1iNPAAAAABJRU5ErkJggg==',
		'farm-black': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAKlBMVEX09OYAK0sAQXIAFjCT1OBLuOtaZHUAdpaEkqshJStBSFSdqb4wNj+2wNG7cGzIAAAAlUlEQVR4AX3KUZKFIAxEUaE1JgH3v93pYCkUMq9/UtzD1gdgWw35zCtBIiQsegBQ66cHKFfnHlBESp17A7OS0Ht+4bpKyviCq+oSkv8HyaXDPkJc7HcPaP0MabB3YAdAmYHd3SkTsEssZITWHxmBXe+FdGA3U/5XM8oLfKk7o8XhnweOKlpKQBzx4wV34QhxfIBpv+EPNTcHLWwTyMgAAAAASUVORK5CYII=',
		'farm-blue': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAKlBMVEX09OYAZMZBlekMNXCT1OBLuOtaZHWEkquW2fQhJStBSFSdqb4wNj+2wNEEhadYAAAAlUlEQVR4AX3KUZKFIAxEUaE1MQH3v93pYCkUMq9/UtzD1gdgWw35zCtBIiQsegBQ66cHKFfnHlBESp17A7OS0Ht+4bpKyviCq+oSkv8HyaXDPkJc7HcPaP0MabB3YAdAmYHd3SkTsEssZITWHxmBXe+FdGA3U/5XM8oLfKk7o8XhnweOKlpKQBzx4wV34QhxfIBpv+EPPUMHLQRocu8AAAAASUVORK5CYII=',
		'farm-gray': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJFBMVEX09OaVlZVjY2PCwsI7OzukpKRmZmbLy8slJSVJSUmsrKw3NzdxN6WSAAAAkklEQVR4AX3KYZKGIAyDYQsRW7j/fTfBURhkv/zp8D4cYwCO3WCX7QSJkLDpAqC1Txdobe2CWkpta+/gXhNGtxdyrsnwhTCzLaT4D1KUAXkGXeS7d1C/ugjyAHYAlBXYI4KyAHvRJDP0/sgM7HZPMoDd3fjf3Ckv8GURjK7DPw+crVitAp0S5wsRhSPoxATLfsMfiq8GR5I3HE8AAAAASUVORK5CYII=',
		'farm-green': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAKlBMVEX09OYAmTdjviUAVVKT1OBLuOtaZHWEkqur7VohJStBSFSdqb4wNj+2wNHc69yjAAAAlUlEQVR4AX3KUZKFIAxEUaE1MQH3v93pYCkUMq9/UtzD1gdgWw35zCtBIiQsegBQ66cHKFfnHlBESp17A7OS0Ht+4bpKyviCq+oSkv8HyaXDPkJc7HcPaP0MabB3YAdAmYHd3SkTsEssZITWHxmBXe+FdGA3U/5XM8oLfKk7o8XhnweOKlpKQBzx4wV34QhxfIBpv+EPPUMHLQRocu8AAAAASUVORK5CYII=',
		'farm-red': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAKlBMVEX09OahAHDbJHFfBXiT1OBLuOtaZHWEkqv0npwhJStBSFSdqb4wNj+2wNF++xBkAAAAlUlEQVR4AX3KUZKFIAxEUaE1MQH3v93pYCkUMq9/UtzD1gdgWw35zCtBIiQsegBQ66cHKFfnHlBESp17A7OS0Ht+4bpKyviCq+oSkv8HyaXDPkJc7HcPaP0MabB3YAdAmYHd3SkTsEssZITWHxmBXe+FdGA3U/5XM8oLfKk7o8XhnweOKlpKQBzx4wV34QhxfIBpv+EPPUMHLQRocu8AAAAASUVORK5CYII=',
		'farm-destroyed': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAIVBMVEX09OZbZXcuNUKEkquT1OBBSFQAAAA5r7329t6dqb69xNCVJXzJAAAAv0lEQVR4AZWR0YoEIRADJ4mxV///g0/NrQsH+3D1YAtF0Q7zfOH1/JdPQebMvDTOydY4psRP0chpkRTIiECJsCSQXb5FowjAJM9s76DojoVNDcH4LQpL8BiMIVpIAFGdAaAsngJTRAr4LOdeEqEIcGgX2UEgIorSrPfXRVyE+yr13gHswzbrSQJqzNHdIa/D1U7RSsRKFKGIRWELezlvf4sCCY2x9+xxi1ZVxiIPgCtFzKJtcvv8v8Wf6+ubeH4A+SMFQqUXf1sAAAAASUVORK5CYII='
	}

}(window));
/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_007 = {
		version: 4,
		type: 'skirmish',
		size: {width: 11, height: 19},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'Crossroads',

		// es
		'name-es': 'Cruce de caminos',

		// ru
		'name-ru': 'Перекресток',

		units: [
			{x: 1, y: 3, type: 'commander', ownerId: 0},
			{x: 9, y: 3, type: 'commander', ownerId: 1},
			{x: 1, y: 15, type: 'commander', ownerId: 2},
			{x: 9, y: 15, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 3, y: 9, type: 'farm', state: 'destroyed'},
			{x: 7, y: 9, type: 'farm', state: 'destroyed'},
			{x: 5, y: 7, type: 'farm', state: 'destroyed'},
			{x: 5, y: 11, type: 'farm', state: 'destroyed'},
			{x: 1, y: 3, type: 'castle', state: 'normal', ownerId: 0},
			{x: 0, y: 5, type: 'farm', state: 'normal', ownerId: 0},
			{x: 9, y: 3, type: 'castle', state: 'normal', ownerId: 1},
			{x: 10, y: 5, type: 'farm', state: 'normal', ownerId: 1},
			{x: 0, y: 13, type: 'farm', state: 'normal', ownerId: 2},
			{x: 1, y: 15, type: 'castle', state: 'normal', ownerId: 2},
			{x: 9, y: 15, type: 'castle', state: 'normal', ownerId: 3},
			{x: 10, y: 13, type: 'farm', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'forest-2',
			x0y4: 'road-1',
			x0y5: 'terra-1',
			x1y0: 'water-1',
			x1y1: 'water-2',
			x1y2: 'water-1',
			x1y3: 'terra-1',
			x1y4: 'road-1',
			x1y5: 'road-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'hill-1',
			x2y4: 'forest-2',
			x2y5: 'road-1',
			x3y0: 'water-3',
			x3y1: 'water-1',
			x3y2: 'forest-2',
			x3y3: 'terra-1',
			x3y4: 'hill-1',
			x3y5: 'road-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'forest-1',
			x4y3: 'forest-1',
			x4y4: 'stone-1',
			x4y5: 'stone-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'stone-1',
			x5y3: 'stone-1',
			x5y4: 'stone-1',
			x5y5: 'stone-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'stone-1',
			x6y3: 'stone-1',
			x6y4: 'stone-1',
			x6y5: 'forest-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'forest-1',
			x7y3: 'forest-2',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'water-3',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'terra-1',
			x8y4: 'road-1',
			x8y5: 'stone-1',
			x9y0: 'water-1',
			x9y1: 'water-2',
			x9y2: 'water-1',
			x9y3: 'terra-1',
			x9y4: 'road-1',
			x9y5: 'forest-2',
			x10y0: 'water-3',
			x10y1: 'water-1',
			x10y2: 'water-1',
			x10y3: 'hill-1',
			x10y4: 'road-1',
			x10y5: 'terra-1',
			x0y6: 'stone-1',
			x1y6: 'terra-1',
			x2y6: 'forest-1',
			x3y6: 'road-1',
			x4y6: 'forest-2',
			x5y6: 'stone-1',
			x6y6: 'forest-1',
			x7y6: 'road-1',
			x8y6: 'hill-1',
			x9y6: 'terra-1',
			x10y6: 'hill-1',
			x0y7: 'forest-1',
			x1y7: 'stone-1',
			x2y7: 'terra-1',
			x3y7: 'road-1',
			x4y7: 'terra-1',
			x5y7: 'terra-1',
			x6y7: 'hill-1',
			x7y7: 'road-1',
			x8y7: 'terra-1',
			x9y7: 'stone-1',
			x10y7: 'forest-1',
			x0y8: 'water-1',
			x1y8: 'water-1',
			x2y8: 'forest-2',
			x3y8: 'road-1',
			x4y8: 'road-1',
			x5y8: 'road-1',
			x6y8: 'road-1',
			x7y8: 'road-1',
			x8y8: 'hill-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x0y9: 'water-2',
			x1y9: 'water-1',
			x2y9: 'stone-1',
			x3y9: 'terra-1',
			x4y9: 'forest-1',
			x5y9: 'road-1',
			x6y9: 'forest-2',
			x7y9: 'terra-1',
			x8y9: 'stone-1',
			x9y9: 'water-1',
			x10y9: 'water-3',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'forest-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'forest-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x0y11: 'stone-1',
			x1y11: 'stone-1',
			x2y11: 'terra-1',
			x3y11: 'road-1',
			x4y11: 'terra-1',
			x5y11: 'terra-1',
			x6y11: 'terra-1',
			x7y11: 'road-1',
			x8y11: 'road-1',
			x9y11: 'road-1',
			x10y11: 'stone-1',
			x0y12: 'hill-1',
			x1y12: 'terra-1',
			x2y12: 'forest-1',
			x3y12: 'road-1',
			x4y12: 'hill-1',
			x5y12: 'stone-1',
			x6y12: 'forest-2',
			x7y12: 'hill-1',
			x8y12: 'forest-2',
			x9y12: 'road-1',
			x10y12: 'hill-1',
			x0y13: 'terra-1',
			x1y13: 'hill-1',
			x2y13: 'stone-1',
			x3y13: 'road-1',
			x4y13: 'forest-2',
			x5y13: 'stone-1',
			x6y13: 'forest-1',
			x7y13: 'stone-1',
			x8y13: 'forest-1',
			x9y13: 'road-1',
			x10y13: 'terra-1',
			x0y14: 'road-1',
			x1y14: 'road-1',
			x2y14: 'road-1',
			x3y14: 'road-1',
			x4y14: 'stone-1',
			x5y14: 'stone-1',
			x6y14: 'stone-1',
			x7y14: 'hill-1',
			x8y14: 'terra-1',
			x9y14: 'road-1',
			x10y14: 'road-1',
			x0y15: 'forest-2',
			x1y15: 'terra-1',
			x2y15: 'hill-1',
			x3y15: 'terra-1',
			x4y15: 'forest-1',
			x5y15: 'stone-1',
			x6y15: 'stone-1',
			x7y15: 'forest-2',
			x8y15: 'terra-1',
			x9y15: 'terra-1',
			x10y15: 'forest-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'water-1',
			x3y16: 'forest-2',
			x4y16: 'stone-1',
			x5y16: 'stone-1',
			x6y16: 'forest-1',
			x7y16: 'forest-1',
			x8y16: 'water-1',
			x9y16: 'water-1',
			x10y16: 'water-1',
			x0y17: 'water-3',
			x1y17: 'water-1',
			x2y17: 'water-1',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'water-1',
			x7y17: 'water-1',
			x8y17: 'water-1',
			x9y17: 'water-1',
			x10y17: 'water-2',
			x0y18: 'water-1',
			x1y18: 'water-2',
			x2y18: 'water-1',
			x3y18: 'water-1',
			x4y18: 'water-1',
			x5y18: 'water-1',
			x6y18: 'water-1',
			x7y18: 'water-3',
			x8y18: 'water-1',
			x9y18: 'water-1',
			x10y18: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_006 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 12},
		maxPlayers: 3,
		isOpen: true,

		// en
		name: 'Frozen Friends',

		// ru
		'name-ru': 'Холодные друзья',

		units: [
			{x: 2, y: 1, type: 'commander', ownerId: 0},
			{x: 7, y: 10, type: 'commander', ownerId: 1},
			{x: 13, y: 1, type: 'commander', ownerId: 2}
		],
		buildings: [
			{x: 2, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 7, y: 10, type: 'castle', state: 'normal', ownerId: 1},
			{x: 13, y: 1, type: 'castle', state: 'normal', ownerId: 2},
			{x: 4, y: 2, type: 'farm', state: 'normal'},
			{x: 1, y: 4, type: 'farm', state: 'normal'},
			{x: 5, y: 8, type: 'farm', state: 'normal'},
			{x: 5, y: 5, type: 'farm', state: 'destroyed'},
			{x: 7, y: 4, type: 'farm', state: 'destroyed'},
			{x: 10, y: 2, type: 'farm', state: 'normal'},
			{x: 13, y: 4, type: 'farm', state: 'normal'},
			{x: 9, y: 8, type: 'farm', state: 'normal'},
			{x: 9, y: 5, type: 'farm', state: 'destroyed'}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'stone-1',
			x0y2: 'stone-1',
			x0y3: 'hill-1',
			x0y4: 'terra-1',
			x0y5: 'water-1',
			x1y0: 'stone-1',
			x1y1: 'forest-1',
			x1y2: 'stone-1',
			x1y3: 'terra-1',
			x1y4: 'terra-1',
			x1y5: 'stone-1',
			x2y0: 'terra-1',
			x2y1: 'terra-1',
			x2y2: 'hill-1',
			x2y3: 'terra-1',
			x2y4: 'forest-2',
			x2y5: 'stone-1',
			x3y0: 'hill-1',
			x3y1: 'terra-1',
			x3y2: 'terra-1',
			x3y3: 'stone-1',
			x3y4: 'terra-1',
			x3y5: 'forest-1',
			x4y0: 'forest-2',
			x4y1: 'forest-1',
			x4y2: 'terra-1',
			x4y3: 'terra-1',
			x4y4: 'hill-1',
			x4y5: 'terra-1',
			x5y0: 'water-1',
			x5y1: 'stone-1',
			x5y2: 'terra-1',
			x5y3: 'stone-1',
			x5y4: 'stone-1',
			x5y5: 'terra-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'water-1',
			x6y3: 'water-1',
			x6y4: 'stone-1',
			x6y5: 'terra-1',
			x7y0: 'water-2',
			x7y1: 'water-1',
			x7y2: 'water-1',
			x7y3: 'water-1',
			x7y4: 'terra-1',
			x7y5: 'forest-1',
			x8y0: 'water-1',
			x8y1: 'water-1',
			x8y2: 'stone-1',
			x8y3: 'stone-1',
			x8y4: 'stone-1',
			x8y5: 'terra-1',
			x9y0: 'water-1',
			x9y1: 'stone-1',
			x9y2: 'forest-1',
			x9y3: 'terra-1',
			x9y4: 'forest-2',
			x9y5: 'terra-1',
			x10y0: 'stone-1',
			x10y1: 'stone-1',
			x10y2: 'terra-1',
			x10y3: 'terra-1',
			x10y4: 'stone-1',
			x10y5: 'terra-1',
			x11y0: 'stone-1',
			x11y1: 'hill-1',
			x11y2: 'stone-1',
			x11y3: 'hill-1',
			x11y4: 'terra-1',
			x11y5: 'forest-2',
			x12y0: 'forest-2',
			x12y1: 'terra-1',
			x12y2: 'terra-1',
			x12y3: 'terra-1',
			x12y4: 'terra-1',
			x12y5: 'stone-1',
			x13y0: 'stone-1',
			x13y1: 'terra-1',
			x13y2: 'hill-1',
			x13y3: 'terra-1',
			x13y4: 'terra-1',
			x13y5: 'stone-1',
			x14y0: 'stone-1',
			x14y1: 'forest-1',
			x14y2: 'stone-1',
			x14y3: 'hill-1',
			x14y4: 'terra-1',
			x14y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'water-1',
			x2y6: 'stone-1',
			x3y6: 'hill-1',
			x4y6: 'stone-1',
			x5y6: 'stone-1',
			x6y6: 'hill-1',
			x7y6: 'terra-1',
			x8y6: 'stone-1',
			x9y6: 'stone-1',
			x10y6: 'hill-1',
			x11y6: 'stone-1',
			x12y6: 'stone-1',
			x13y6: 'water-1',
			x14y6: 'water-1',
			x0y7: 'water-3',
			x1y7: 'water-1',
			x2y7: 'water-1',
			x3y7: 'water-1',
			x4y7: 'stone-1',
			x5y7: 'hill-1',
			x6y7: 'stone-1',
			x7y7: 'forest-2',
			x8y7: 'hill-1',
			x9y7: 'stone-1',
			x10y7: 'water-1',
			x11y7: 'water-1',
			x12y7: 'water-1',
			x13y7: 'water-1',
			x14y7: 'water-2',
			x0y8: 'water-1',
			x1y8: 'water-1',
			x2y8: 'water-2',
			x3y8: 'water-1',
			x4y8: 'forest-2',
			x5y8: 'terra-1',
			x6y8: 'hill-1',
			x7y8: 'terra-1',
			x8y8: 'terra-1',
			x9y8: 'terra-1',
			x10y8: 'water-1',
			x11y8: 'water-1',
			x12y8: 'water-1',
			x13y8: 'water-3',
			x14y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'water-1',
			x2y9: 'water-1',
			x3y9: 'water-1',
			x4y9: 'stone-1',
			x5y9: 'forest-1',
			x6y9: 'terra-1',
			x7y9: 'hill-1',
			x8y9: 'terra-1',
			x9y9: 'forest-2',
			x10y9: 'stone-1',
			x11y9: 'water-1',
			x12y9: 'water-1',
			x13y9: 'water-1',
			x14y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'water-2',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'water-1',
			x5y10: 'stone-1',
			x6y10: 'terra-1',
			x7y10: 'terra-1',
			x8y10: 'terra-1',
			x9y10: 'forest-1',
			x10y10: 'hill-1',
			x11y10: 'water-1',
			x12y10: 'water-1',
			x13y10: 'water-1',
			x14y10: 'water-1',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'water-3',
			x3y11: 'water-1',
			x4y11: 'water-1',
			x5y11: 'stone-1',
			x6y11: 'stone-1',
			x7y11: 'hill-1',
			x8y11: 'forest-1',
			x9y11: 'stone-1',
			x10y11: 'stone-1',
			x11y11: 'water-1',
			x12y11: 'water-1',
			x13y11: 'water-2',
			x14y11: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_004 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 15},
		maxPlayers: 2,
		isOpen: true,

		// en
		name: 'Icy Path',

		// ru
		'name-ru': 'Ледяной путь',

		units: [
			{x: 1, y: 1, type: 'commander', ownerId: 0},
			{x: 13, y: 13, type: 'commander', ownerId: 1}
		],
		buildings: [
			{x: 1, y: 3, type: 'farm', state: 'normal', ownerId: 0},
			{x: 3, y: 1, type: 'farm', state: 'normal', ownerId: 0},
			{x: 1, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 1, y: 10, type: 'castle', state: 'normal'},
			{x: 3, y: 8, type: 'farm', state: 'normal'},
			{x: 6, y: 13, type: 'farm', state: 'normal'},
			{x: 6, y: 8, type: 'farm', state: 'normal'},
			{x: 8, y: 6, type: 'farm', state: 'normal'},
			{x: 8, y: 1, type: 'farm', state: 'normal'},
			{x: 13, y: 4, type: 'castle', state: 'normal'},
			{x: 11, y: 6, type: 'farm', state: 'normal'},
			{x: 13, y: 11, type: 'farm', state: 'normal', ownerId: 1},
			{x: 11, y: 13, type: 'farm', state: 'normal', ownerId: 1},
			{x: 13, y: 13, type: 'castle', state: 'normal', ownerId: 1}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'forest-1',
			x0y2: 'road-1',
			x0y3: 'stone-1',
			x0y4: 'water-1',
			x0y5: 'water-1',
			x1y0: 'terra-1',
			x1y1: 'terra-1',
			x1y2: 'road-1',
			x1y3: 'terra-1',
			x1y4: 'water-1',
			x1y5: 'water-1',
			x2y0: 'road-1',
			x2y1: 'road-1',
			x2y2: 'road-1',
			x2y3: 'road-1',
			x2y4: 'bridge-2',
			x2y5: 'bridge-2',
			x3y0: 'hill-1',
			x3y1: 'terra-1',
			x3y2: 'road-1',
			x3y3: 'forest-1',
			x3y4: 'water-1',
			x3y5: 'water-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'bridge-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'water-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'bridge-1',
			x5y3: 'water-1',
			x5y4: 'water-1',
			x5y5: 'water-1',
			x6y0: 'water-1',
			x6y1: 'forest-2',
			x6y2: 'road-1',
			x6y3: 'stone-1',
			x6y4: 'water-1',
			x6y5: 'water-1',
			x7y0: 'forest-1',
			x7y1: 'terra-1',
			x7y2: 'road-1',
			x7y3: 'road-1',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'hill-1',
			x8y1: 'terra-1',
			x8y2: 'terra-1',
			x8y3: 'stone-1',
			x8y4: 'terra-1',
			x8y5: 'forest-1',
			x9y0: 'stone-1',
			x9y1: 'forest-1',
			x9y2: 'hill-1',
			x9y3: 'forest-1',
			x9y4: 'forest-2',
			x9y5: 'road-1',
			x10y0: 'forest-2',
			x10y1: 'forest-1',
			x10y2: 'stone-1',
			x10y3: 'forest-2',
			x10y4: 'stone-1',
			x10y5: 'road-1',
			x11y0: 'water-1',
			x11y1: 'stone-1',
			x11y2: 'forest-1',
			x11y3: 'terra-1',
			x11y4: 'hill-1',
			x11y5: 'road-1',
			x0y6: 'forest-1',
			x1y6: 'hill-1',
			x2y6: 'terra-1',
			x3y6: 'forest-1',
			x4y6: 'stone-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'road-1',
			x8y6: 'terra-1',
			x9y6: 'road-1',
			x10y6: 'terra-1',
			x11y6: 'terra-1',
			x0y7: 'forest-2',
			x1y7: 'terra-1',
			x2y7: 'forest-1',
			x3y7: 'hill-1',
			x4y7: 'terra-1',
			x5y7: 'road-1',
			x6y7: 'road-1',
			x7y7: 'road-1',
			x8y7: 'road-1',
			x9y7: 'road-1',
			x10y7: 'hill-1',
			x11y7: 'forest-2',
			x0y8: 'hill-1',
			x1y8: 'terra-1',
			x2y8: 'terra-1',
			x3y8: 'terra-1',
			x4y8: 'stone-1',
			x5y8: 'road-1',
			x6y8: 'terra-1',
			x7y8: 'road-1',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'terra-1',
			x11y8: 'forest-1',
			x0y9: 'forest-2',
			x1y9: 'road-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'road-1',
			x6y9: 'terra-1',
			x7y9: 'road-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x11y9: 'water-1',
			x0y10: 'forest-1',
			x1y10: 'terra-1',
			x2y10: 'stone-1',
			x3y10: 'terra-1',
			x4y10: 'hill-1',
			x5y10: 'forest-2',
			x6y10: 'forest-2',
			x7y10: 'road-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'water-1',
			x0y11: 'stone-1',
			x1y11: 'hill-1',
			x2y11: 'terra-1',
			x3y11: 'forest-2',
			x4y11: 'stone-1',
			x5y11: 'forest-1',
			x6y11: 'stone-1',
			x7y11: 'road-1',
			x8y11: 'stone-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'forest-1',
			x12y0: 'water-1',
			x12y1: 'water-1',
			x12y2: 'stone-1',
			x12y3: 'forest-2',
			x12y4: 'terra-1',
			x12y5: 'road-1',
			x12y6: 'terra-1',
			x12y7: 'forest-1',
			x12y8: 'stone-1',
			x12y9: 'bridge-2',
			x12y10: 'bridge-2',
			x12y11: 'road-1',
			x13y0: 'water-1',
			x13y1: 'water-1',
			x13y2: 'hill-1',
			x13y3: 'terra-1',
			x13y4: 'terra-1',
			x13y5: 'road-1',
			x13y6: 'forest-2',
			x13y7: 'forest-1',
			x13y8: 'water-1',
			x13y9: 'water-1',
			x13y10: 'water-1',
			x13y11: 'terra-1',
			x14y0: 'water-1',
			x14y1: 'water-1',
			x14y2: 'forest-2',
			x14y3: 'terra-2',
			x14y4: 'stone-1',
			x14y5: 'terra-1',
			x14y6: 'forest-1',
			x14y7: 'stone-1',
			x14y8: 'forest-2',
			x14y9: 'water-1',
			x14y10: 'water-1',
			x14y11: 'stone-1',
			x0y12: 'forest-1',
			x1y12: 'stone-1',
			x2y12: 'hill-1',
			x3y12: 'stone-1',
			x4y12: 'hill-1',
			x5y12: 'stone-1',
			x6y12: 'terra-1',
			x7y12: 'road-1',
			x8y12: 'road-1',
			x9y12: 'bridge-1',
			x10y12: 'bridge-1',
			x11y12: 'road-1',
			x12y12: 'road-1',
			x13y12: 'road-1',
			x14y12: 'road-1',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'forest-2',
			x4y13: 'forest-1',
			x5y13: 'hill-1',
			x6y13: 'terra-1',
			x7y13: 'terra-1',
			x8y13: 'forest-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'terra-1',
			x12y13: 'road-1',
			x13y13: 'terra-1',
			x14y13: 'forest-2',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'water-1',
			x4y14: 'forest-1',
			x5y14: 'forest-1',
			x6y14: 'terra-1',
			x7y14: 'forest-2',
			x8y14: 'water-1',
			x9y14: 'water-1',
			x10y14: 'water-1',
			x11y14: 'hill-1',
			x12y14: 'road-1',
			x13y14: 'terra-1',
			x14y14: 'stone-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_001 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 15},
		maxPlayers: 2,
		isOpen: true,

		// en
		name: 'Island Cross',

		// ru
		'name-ru': 'Остров крест',

		units: [
			{type: 'commander', x: 13, y: 1, ownerId: 0},
			{type: 'commander', x: 1, y: 13, ownerId: 1}
		],
		buildings: [
			{type: 'farm', x: 8, y: 0, state: 'destroyed'},
			{type: 'farm', x: 0, y: 1, state: 'destroyed'},
			{type: 'farm', x: 11, y: 1, state: 'normal'},
			{type: 'castle', x: 13, y: 1, state: 'normal', ownerId: 0},
			{type: 'farm', x: 0, y: 4, state: 'normal'},
			{type: 'temple', x: 7, y: 6, state: 'normal'},
			{type: 'castle', x: 11, y: 6, state: 'normal'},
			{type: 'castle', x: 3, y: 8, state: 'normal'},
			{type: 'well', x: 7, y: 8, state: 'normal'},
			{type: 'farm', x: 14, y: 10, state: 'normal'},
			{type: 'castle', x: 1, y: 13, state: 'normal', ownerId: 1},
			{type: 'farm', x: 3, y: 13, state: 'normal'},
			{type: 'farm', x: 14, y: 13, state: 'destroyed'},
			{type: 'farm', x: 6, y: 14, state: 'destroyed'}
		],
		terrain: {
			x0y0: 'stone-1',
			x1y0: 'terra-1',
			x2y0: 'forest-1',
			x3y0: 'terra-1',
			x4y0: 'water-1',
			x5y0: 'terra-1',
			x6y0: 'forest-1',
			x7y0: 'hill-1',
			x8y0: 'terra-1',
			x9y0: 'forest-1',
			x10y0: 'road-1',
			x11y0: 'road-1',
			x12y0: 'road-1',
			x13y0: 'road-1',
			x14y0: 'hill-1',
			x0y1: 'terra-1',
			x1y1: 'forest-1',
			x2y1: 'road-1',
			x3y1: 'road-1',
			x4y1: 'bridge-1',
			x5y1: 'road-1',
			x6y1: 'road-1',
			x7y1: 'road-1',
			x8y1: 'road-1',
			x9y1: 'road-1',
			x10y1: 'road-1',
			x11y1: 'terra-1',
			x12y1: 'forest-1',
			x13y1: 'terra-1',
			x14y1: 'forest-1',
			x0y2: 'terra-1',
			x1y2: 'terra-1',
			x2y2: 'road-1',
			x3y2: 'terra-1',
			x4y2: 'water-1',
			x5y2: 'terra-1',
			x6y2: 'terra-1',
			x7y2: 'terra-1',
			x8y2: 'terra-1',
			x9y2: 'terra-1',
			x10y2: 'terra-1',
			x11y2: 'terra-1',
			x12y2: 'terra-1',
			x13y2: 'terra-1',
			x14y2: 'terra-1',
			x0y3: 'terra-1',
			x1y3: 'terra-1',
			x2y3: 'road-1',
			x3y3: 'terra-1',
			x4y3: 'water-1',
			x5y3: 'water-1',
			x6y3: 'water-1',
			x7y3: 'water-1',
			x8y3: 'water-1',
			x9y3: 'water-1',
			x10y3: 'water-1',
			x11y3: 'water-1',
			x12y3: 'water-1',
			x13y3: 'water-1',
			x14y3: 'water-1',
			x0y4: 'terra-1',
			x1y4: 'forest-1',
			x2y4: 'road-1',
			x3y4: 'terra-1',
			x4y4: 'water-1',
			x5y4: 'water-1',
			x6y4: 'water-1',
			x7y4: 'water-1',
			x8y4: 'water-1',
			x9y4: 'water-1',
			x10y4: 'water-1',
			x11y4: 'water-1',
			x12y4: 'water-1',
			x13y4: 'water-1',
			x14y4: 'water-1',
			x0y5: 'terra-1',
			x1y5: 'terra-1',
			x2y5: 'road-1',
			x3y5: 'road-1',
			x4y5: 'terra-1',
			x5y5: 'water-1',
			x6y5: 'water-1',
			x7y5: 'terra-1',
			x8y5: 'terra-1',
			x9y5: 'water-1',
			x10y5: 'terra-1',
			x11y5: 'terra-1',
			x12y5: 'terra-1',
			x13y5: 'terra-1',
			x14y5: 'terra-1',
			x0y6: 'forest-1',
			x1y6: 'terra-1',
			x2y6: 'stone-1',
			x3y6: 'road-1',
			x4y6: 'terra-1',
			x5y6: 'water-1',
			x6y6: 'terra-1',
			x7y6: 'terra-1',
			x8y6: 'terra-1',
			x9y6: 'water-1',
			x10y6: 'terra-1',
			x11y6: 'terra-1',
			x12y6: 'stone-1',
			x13y6: 'stone-1',
			x14y6: 'stone-1',
			x0y7: 'forest-1',
			x1y7: 'forest-1',
			x2y7: 'terra-1',
			x3y7: 'road-1',
			x4y7: 'road-1',
			x5y7: 'bridge-1',
			x6y7: 'forest-1',
			x7y7: 'forest-1',
			x8y7: 'forest-1',
			x9y7: 'bridge-1',
			x10y7: 'road-1',
			x11y7: 'road-1',
			x12y7: 'terra-1',
			x13y7: 'forest-1',
			x14y7: 'forest-1',
			x0y8: 'stone-1',
			x1y8: 'stone-1',
			x2y8: 'stone-1',
			x3y8: 'terra-1',
			x4y8: 'terra-1',
			x5y8: 'water-1',
			x6y8: 'terra-1',
			x7y8: 'terra-1',
			x8y8: 'terra-1',
			x9y8: 'water-1',
			x10y8: 'terra-1',
			x11y8: 'road-1',
			x12y8: 'stone-1',
			x13y8: 'terra-1',
			x14y8: 'forest-1',
			x0y9: 'terra-1',
			x1y9: 'terra-1',
			x2y9: 'terra-1',
			x3y9: 'terra-1',
			x4y9: 'terra-1',
			x5y9: 'water-1',
			x6y9: 'terra-1',
			x7y9: 'terra-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'terra-1',
			x11y9: 'road-1',
			x12y9: 'road-1',
			x13y9: 'terra-1',
			x14y9: 'terra-1',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'water-1',
			x5y10: 'water-1',
			x6y10: 'water-1',
			x7y10: 'water-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'terra-1',
			x12y10: 'road-1',
			x13y10: 'forest-1',
			x14y10: 'terra-1',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'water-1',
			x3y11: 'water-1',
			x4y11: 'water-1',
			x5y11: 'water-1',
			x6y11: 'water-1',
			x7y11: 'water-1',
			x8y11: 'water-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'terra-1',
			x12y11: 'road-1',
			x13y11: 'terra-1',
			x14y11: 'terra-1',
			x0y12: 'terra-1',
			x1y12: 'terra-1',
			x2y12: 'terra-1',
			x3y12: 'terra-1',
			x4y12: 'terra-1',
			x5y12: 'terra-1',
			x6y12: 'terra-1',
			x7y12: 'terra-1',
			x8y12: 'terra-1',
			x9y12: 'terra-1',
			x10y12: 'water-1',
			x11y12: 'terra-1',
			x12y12: 'road-1',
			x13y12: 'terra-1',
			x14y12: 'terra-1',
			x0y13: 'forest-1',
			x1y13: 'terra-1',
			x2y13: 'forest-1',
			x3y13: 'terra-1',
			x4y13: 'road-1',
			x5y13: 'road-1',
			x6y13: 'road-1',
			x7y13: 'road-1',
			x8y13: 'road-1',
			x9y13: 'road-1',
			x10y13: 'bridge-1',
			x11y13: 'road-1',
			x12y13: 'road-1',
			x13y13: 'forest-1',
			x14y13: 'terra-1',
			x0y14: 'hill-1',
			x1y14: 'road-1',
			x2y14: 'road-1',
			x3y14: 'road-1',
			x4y14: 'road-1',
			x5y14: 'forest-1',
			x6y14: 'terra-1',
			x7y14: 'hill-1',
			x8y14: 'forest-1',
			x9y14: 'terra-1',
			x10y14: 'water-1',
			x11y14: 'terra-1',
			x12y14: 'forest-1',
			x13y14: 'terra-1',
			x14y14: 'stone-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_011 = {
		version: 4,
		type: 'skirmish',
		size: {width: 13, height: 13},
		maxPlayers: 2,
		isOpen: false,

		// en
		name: 'Liberty Port',

		// es
		'name-es': 'Puerto de la Libertad',

		// ru
		'name-ru': 'Порт свободы',

		units: [
			{x: 1, y: 1, type: 'commander', ownerId: 0},
			{x: 11, y: 1, type: 'commander', ownerId: 1}
		],
		buildings: [
			{x: 6, y: 5, type: 'farm', state: 'normal'},
			{x: 2, y: 3, type: 'farm', state: 'normal'},
			{x: 0, y: 6, type: 'farm', state: 'normal'},
			{x: 3, y: 8, type: 'farm', state: 'normal'},
			{x: 1, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 1, y: 11, type: 'farm', state: 'normal'},
			{x: 6, y: 10, type: 'castle', state: 'normal'},
			{x: 11, y: 11, type: 'farm', state: 'normal'},
			{x: 9, y: 9, type: 'farm', state: 'normal'},
			{x: 10, y: 6, type: 'farm', state: 'normal'},
			{x: 12, y: 3, type: 'farm', state: 'normal'},
			{x: 11, y: 1, type: 'castle', state: 'normal', ownerId: 1}
		],
		terrain: {
			x0y0: 'forest-1',
			x0y1: 'stone-1',
			x0y2: 'hill-1',
			x0y3: 'forest-1',
			x0y4: 'hill-1',
			x0y5: 'stone-1',
			x1y0: 'stone-1',
			x1y1: 'terra-1',
			x1y2: 'road-1',
			x1y3: 'road-1',
			x1y4: 'road-1',
			x1y5: 'forest-2',
			x2y0: 'forest-2',
			x2y1: 'terra-1',
			x2y2: 'terra-1',
			x2y3: 'terra-1',
			x2y4: 'road-1',
			x2y5: 'road-1',
			x3y0: 'forest-1',
			x3y1: 'forest-2',
			x3y2: 'stone-1',
			x3y3: 'terra-1',
			x3y4: 'forest-2',
			x3y5: 'water-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'water-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'water-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'water-2',
			x5y4: 'water-1',
			x5y5: 'water-1',
			x6y0: 'water-3',
			x6y1: 'water-1',
			x6y2: 'water-1',
			x6y3: 'water-1',
			x6y4: 'water-1',
			x6y5: 'terra-1',
			x7y0: 'water-1',
			x7y1: 'water-2',
			x7y2: 'water-1',
			x7y3: 'water-1',
			x7y4: 'water-1',
			x7y5: 'water-1',
			x8y0: 'water-1',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'water-1',
			x8y4: 'water-1',
			x8y5: 'water-1',
			x9y0: 'forest-2',
			x9y1: 'forest-1',
			x9y2: 'stone-1',
			x9y3: 'water-1',
			x9y4: 'water-1',
			x9y5: 'forest-2',
			x10y0: 'stone-1',
			x10y1: 'hill-1',
			x10y2: 'terra-1',
			x10y3: 'forest-1',
			x10y4: 'hill-1',
			x10y5: 'stone-1',
			x11y0: 'forest-1',
			x11y1: 'terra-1',
			x11y2: 'road-1',
			x11y3: 'road-1',
			x11y4: 'road-1',
			x11y5: 'road-1',
			x12y0: 'forest-2',
			x12y1: 'forest-1',
			x12y2: 'terra-1',
			x12y3: 'terra-1',
			x12y4: 'forest-1',
			x12y5: 'road-1',
			x0y6: 'terra-1',
			x1y6: 'forest-1',
			x2y6: 'road-1',
			x3y6: 'water-1',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'forest-1',
			x10y6: 'terra-1',
			x11y6: 'stone-1',
			x12y6: 'road-1',
			x0y7: 'terra-1',
			x1y7: 'road-1',
			x2y7: 'road-1',
			x3y7: 'stone-1',
			x4y7: 'water-1',
			x5y7: 'water-1',
			x6y7: 'water-1',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'stone-1',
			x10y7: 'forest-2',
			x11y7: 'road-1',
			x12y7: 'road-1',
			x0y8: 'stone-1',
			x1y8: 'road-1',
			x2y8: 'forest-1',
			x3y8: 'terra-1',
			x4y8: 'hill-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'forest-1',
			x8y8: 'hill-1',
			x9y8: 'terra-1',
			x10y8: 'hill-1',
			x11y8: 'road-1',
			x12y8: 'forest-1',
			x0y9: 'terra-1',
			x1y9: 'road-1',
			x2y9: 'hill-1',
			x3y9: 'forest-2',
			x4y9: 'road-1',
			x5y9: 'road-1',
			x6y9: 'road-1',
			x7y9: 'road-1',
			x8y9: 'road-1',
			x9y9: 'terra-1',
			x10y9: 'stone-1',
			x11y9: 'road-1',
			x12y9: 'stone-1',
			x0y10: 'forest-1',
			x1y10: 'road-1',
			x2y10: 'road-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'hill-1',
			x6y10: 'terra-1',
			x7y10: 'stone-1',
			x8y10: 'road-1',
			x9y10: 'road-1',
			x10y10: 'road-1',
			x11y10: 'road-1',
			x12y10: 'forest-2',
			x0y11: 'forest-2',
			x1y11: 'terra-1',
			x2y11: 'hill-1',
			x3y11: 'forest-1',
			x4y11: 'forest-2',
			x5y11: 'stone-1',
			x6y11: 'terra-1',
			x7y11: 'water-1',
			x8y11: 'water-1',
			x9y11: 'hill-1',
			x10y11: 'terra-1',
			x11y11: 'terra-1',
			x12y11: 'forest-1',
			x0y12: 'forest-1',
			x1y12: 'stone-1',
			x2y12: 'forest-1',
			x3y12: 'stone-1',
			x4y12: 'water-1',
			x5y12: 'water-1',
			x6y12: 'water-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'stone-1',
			x10y12: 'forest-2',
			x11y12: 'forest-1',
			x12y12: 'stone-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_013 = {
		version: 4,
		type: 'skirmish',
		size: {width: 11, height: 11},
		maxPlayers: 2,
		isOpen: false,

		// en
		name: 'Morning Star',

		// es
		'name-es': 'Estrella de la Mañana',

		// ru
		'name-ru': 'Утренняя звезда',

		units: [
			{x: 2, y: 8, type: 'commander', ownerId: 0},
			{x: 8, y: 2, type: 'commander', ownerId: 1}
		],
		buildings: [
			{x: 0, y: 2, type: 'farm', state: 'normal'},
			{x: 5, y: 0, type: 'farm', state: 'normal'},
			{x: 2, y: 5, type: 'farm', state: 'normal'},
			{x: 8, y: 5, type: 'farm', state: 'normal'},
			{x: 5, y: 10, type: 'farm', state: 'normal'},
			{x: 0, y: 10, type: 'farm', state: 'normal'},
			{x: 10, y: 0, type: 'farm', state: 'normal'},
			{x: 10, y: 8, type: 'farm', state: 'normal'},
			{x: 2, y: 8, type: 'castle', state: 'normal', ownerId: 0},
			{x: 8, y: 2, type: 'castle', state: 'normal', ownerId: 1}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'terra-1',
			x0y3: 'terra-1',
			x0y4: 'forest-1',
			x0y5: 'water-1',
			x1y0: 'water-3',
			x1y1: 'water-1',
			x1y2: 'road-1',
			x1y3: 'road-1',
			x1y4: 'road-1',
			x1y5: 'road-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'bridge-1',
			x2y3: 'water-1',
			x2y4: 'water-1',
			x2y5: 'terra-1',
			x3y0: 'water-2',
			x3y1: 'water-1',
			x3y2: 'bridge-1',
			x3y3: 'water-1',
			x3y4: 'water-1',
			x3y5: 'water-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'road-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'water-1',
			x5y0: 'terra-1',
			x5y1: 'forest-1',
			x5y2: 'road-1',
			x5y3: 'water-1',
			x5y4: 'water-1',
			x5y5: 'water-3',
			x6y0: 'stone-1',
			x6y1: 'road-1',
			x6y2: 'road-1',
			x6y3: 'stone-1',
			x6y4: 'water-1',
			x6y5: 'water-1',
			x7y0: 'forest-1',
			x7y1: 'road-1',
			x7y2: 'stone-1',
			x7y3: 'forest-1',
			x7y4: 'stone-1',
			x7y5: 'water-1',
			x8y0: 'stone-1',
			x8y1: 'road-1',
			x8y2: 'terra-1',
			x8y3: 'hill-1',
			x8y4: 'forest-1',
			x8y5: 'terra-1',
			x9y0: 'hill-1',
			x9y1: 'road-1',
			x9y2: 'road-1',
			x9y3: 'road-1',
			x9y4: 'road-1',
			x9y5: 'road-1',
			x10y0: 'terra-1',
			x10y1: 'terra-1',
			x10y2: 'forest-1',
			x10y3: 'stone-1',
			x10y4: 'water-1',
			x10y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'road-1',
			x2y6: 'forest-1',
			x3y6: 'stone-1',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-2',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'road-1',
			x10y6: 'forest-2',
			x0y7: 'stone-1',
			x1y7: 'road-1',
			x2y7: 'hill-1',
			x3y7: 'forest-2',
			x4y7: 'stone-1',
			x5y7: 'water-1',
			x6y7: 'water-1',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'road-1',
			x10y7: 'terra-1',
			x0y8: 'forest-1',
			x1y8: 'road-1',
			x2y8: 'terra-1',
			x3y8: 'stone-1',
			x4y8: 'road-1',
			x5y8: 'road-1',
			x6y8: 'road-1',
			x7y8: 'bridge-1',
			x8y8: 'bridge-1',
			x9y8: 'road-1',
			x10y8: 'terra-1',
			x0y9: 'terra-1',
			x1y9: 'road-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'forest-2',
			x6y9: 'water-1',
			x7y9: 'water-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x0y10: 'terra-1',
			x1y10: 'hill-1',
			x2y10: 'stone-1',
			x3y10: 'forest-1',
			x4y10: 'stone-1',
			x5y10: 'terra-1',
			x6y10: 'water-1',
			x7y10: 'water-1',
			x8y10: 'water-3',
			x9y10: 'water-1',
			x10y10: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_009 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 15},
		maxPlayers: 2,
		isOpen: false,

		// en
		name: 'Peak Island',

		// es
		'name-es': 'Cúspide de la Isla',

		// ru
		'name-ru': 'Остров пик',

		units: [
			{x: 7, y: 3, type: 'commander', ownerId: 0},
			{x: 7, y: 11, type: 'commander', ownerId: 1}
		],
		buildings: [
			{x: 7, y: 3, type: 'castle', state: 'normal', ownerId: 0},
			{x: 3, y: 3, type: 'farm', state: 'normal', ownerId: 0},
			{x: 11, y: 3, type: 'farm', state: 'normal', ownerId: 0},
			{x: 12, y: 6, type: 'farm', state: 'normal'},
			{x: 8, y: 6, type: 'farm', state: 'normal'},
			{x: 8, y: 8, type: 'farm', state: 'destroyed'},
			{x: 6, y: 6, type: 'farm', state: 'destroyed'},
			{x: 6, y: 8, type: 'farm', state: 'normal'},
			{x: 2, y: 7, type: 'farm', state: 'normal'},
			{x: 3, y: 11, type: 'farm', state: 'normal', ownerId: 1},
			{x: 7, y: 11, type: 'castle', state: 'normal', ownerId: 1},
			{x: 11, y: 11, type: 'farm', state: 'normal', ownerId: 1}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-2',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'water-1',
			x1y4: 'water-1',
			x1y5: 'water-3',
			x2y0: 'water-2',
			x2y1: 'water-1',
			x2y2: 'forest-1',
			x2y3: 'forest-2',
			x2y4: 'water-1',
			x2y5: 'water-1',
			x3y0: 'water-1',
			x3y1: 'water-1',
			x3y2: 'forest-1',
			x3y3: 'terra-1',
			x3y4: 'road-1',
			x3y5: 'road-1',
			x4y0: 'water-3',
			x4y1: 'water-1',
			x4y2: 'hill-1',
			x4y3: 'terra-1',
			x4y4: 'road-1',
			x4y5: 'hill-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'forest-2',
			x5y3: 'stone-1',
			x5y4: 'road-1',
			x5y5: 'stone-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'forest-1',
			x6y3: 'terra-1',
			x6y4: 'road-1',
			x6y5: 'stone-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'forest-1',
			x7y3: 'terra-1',
			x7y4: 'road-1',
			x7y5: 'stone-1',
			x8y0: 'water-1',
			x8y1: 'water-1',
			x8y2: 'stone-1',
			x8y3: 'hill-1',
			x8y4: 'road-1',
			x8y5: 'stone-1',
			x9y0: 'water-1',
			x9y1: 'water-1',
			x9y2: 'hill-1',
			x9y3: 'terra-1',
			x9y4: 'road-1',
			x9y5: 'stone-1',
			x10y0: 'water-1',
			x10y1: 'water-1',
			x10y2: 'forest-1',
			x10y3: 'hill-1',
			x10y4: 'road-1',
			x10y5: 'hill-1',
			x11y0: 'water-1',
			x11y1: 'water-1',
			x11y2: 'terra-1',
			x11y3: 'terra-1',
			x11y4: 'road-1',
			x11y5: 'road-1',
			x12y0: 'water-1',
			x12y1: 'water-1',
			x12y2: 'forest-2',
			x12y3: 'forest-1',
			x12y4: 'hill-1',
			x12y5: 'forest-2',
			x13y0: 'water-1',
			x13y1: 'water-1',
			x13y2: 'water-1',
			x13y3: 'water-1',
			x13y4: 'water-1',
			x13y5: 'water-1',
			x14y0: 'water-1',
			x14y1: 'water-1',
			x14y2: 'water-2',
			x14y3: 'water-1',
			x14y4: 'water-1',
			x14y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'water-1',
			x2y6: 'water-1',
			x3y6: 'road-1',
			x4y6: 'forest-1',
			x5y6: 'stone-1',
			x6y6: 'terra-1',
			x7y6: 'hill-1',
			x8y6: 'terra-1',
			x9y6: 'stone-1',
			x10y6: 'forest-1',
			x11y6: 'road-1',
			x12y6: 'terra-1',
			x13y6: 'water-1',
			x14y6: 'water-1',
			x0y7: 'water-1',
			x1y7: 'water-1',
			x2y7: 'terra-1',
			x3y7: 'road-1',
			x4y7: 'hill-1',
			x5y7: 'terra-1',
			x6y7: 'terra-1',
			x7y7: 'forest-2',
			x8y7: 'terra-1',
			x9y7: 'hill-1',
			x10y7: 'terra-1',
			x11y7: 'road-1',
			x12y7: 'water-1',
			x13y7: 'water-1',
			x14y7: 'water-1',
			x0y8: 'water-2',
			x1y8: 'water-1',
			x2y8: 'terra-1',
			x3y8: 'road-1',
			x4y8: 'forest-2',
			x5y8: 'stone-1',
			x6y8: 'terra-1',
			x7y8: 'terra-1',
			x8y8: 'terra-1',
			x9y8: 'stone-1',
			x10y8: 'forest-1',
			x11y8: 'road-1',
			x12y8: 'water-1',
			x13y8: 'water-1',
			x14y8: 'water-3',
			x0y9: 'water-1',
			x1y9: 'water-1',
			x2y9: 'hill-1',
			x3y9: 'road-1',
			x4y9: 'terra-1',
			x5y9: 'stone-1',
			x6y9: 'stone-1',
			x7y9: 'stone-1',
			x8y9: 'stone-1',
			x9y9: 'stone-1',
			x10y9: 'terra-1',
			x11y9: 'road-1',
			x12y9: 'water-1',
			x13y9: 'water-2',
			x14y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'forest-2',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'road-1',
			x9y10: 'road-1',
			x10y10: 'road-1',
			x11y10: 'road-1',
			x12y10: 'water-1',
			x13y10: 'water-1',
			x14y10: 'water-1',
			x0y11: 'water-3',
			x1y11: 'water-1',
			x2y11: 'terra-1',
			x3y11: 'terra-1',
			x4y11: 'terra-1',
			x5y11: 'stone-1',
			x6y11: 'hill-1',
			x7y11: 'terra-1',
			x8y11: 'terra-1',
			x9y11: 'forest-2',
			x10y11: 'hill-1',
			x11y11: 'terra-1',
			x12y11: 'forest-1',
			x13y11: 'water-1',
			x14y11: 'water-1',
			x0y12: 'water-1',
			x1y12: 'water-1',
			x2y12: 'forest-1',
			x3y12: 'water-1',
			x4y12: 'water-1',
			x5y12: 'forest-1',
			x6y12: 'forest-2',
			x7y12: 'terra-1',
			x8y12: 'forest-1',
			x9y12: 'stone-1',
			x10y12: 'terra-1',
			x11y12: 'forest-2',
			x12y12: 'water-1',
			x13y12: 'water-1',
			x14y12: 'water-1',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'water-1',
			x4y13: 'water-1',
			x5y13: 'water-1',
			x6y13: 'water-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'water-1',
			x13y13: 'water-2',
			x14y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'water-1',
			x4y14: 'water-2',
			x5y14: 'water-1',
			x6y14: 'water-1',
			x7y14: 'water-1',
			x8y14: 'water-1',
			x9y14: 'water-1',
			x10y14: 'water-1',
			x11y14: 'water-1',
			x12y14: 'water-3',
			x13y14: 'water-1',
			x14y14: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_002 = {
		version: 4,
		type: 'skirmish',
		size: {width: 10, height: 10},
		maxPlayers: 2,
		isOpen: true,

		// en
		name: 'River',

		// ru
		'name-ru': 'Река',

		units: [
			{type: 'commander', x: 8, y: 1, ownerId: 0},
			{type: 'commander', x: 1, y: 8, ownerId: 1}
		],

		buildings: [
			{type: 'farm', x: 9, y: 0, state: 'normal'},
			{type: 'farm', x: 1, y: 1, state: 'destroyed'},
			{type: 'castle', x: 8, y: 1, state: 'normal', ownerId: 0},
			{type: 'farm', x: 2, y: 4, state: 'destroyed'},
			{type: 'farm', x: 7, y: 5, state: 'destroyed'},
			{type: 'castle', x: 1, y: 8, state: 'normal', ownerId: 1},
			{type: 'farm', x: 8, y: 8, state: 'destroyed'},
			{type: 'farm', x: 0, y: 9, state: 'normal'}
		],

		terrain: {
			x0y0: 'forest-1',
			x1y0: 'forest-1',
			x2y0: 'hill-1',
			x3y0: 'hill-1',
			x4y0: 'hill-1',
			x5y0: 'forest-1',
			x6y0: 'forest-1',
			x7y0: 'forest-1',
			x8y0: 'forest-1',
			x9y0: 'terra-1',
			x0y1: 'forest-1',
			x1y1: 'terra-1',
			x2y1: 'terra-1',
			x3y1: 'terra-1',
			x4y1: 'road-1',
			x5y1: 'road-1',
			x6y1: 'road-1',
			x7y1: 'road-1',
			x8y1: 'road-1',
			x9y1: 'forest-1',
			x0y2: 'water-1',
			x1y2: 'water-1',
			x2y2: 'water-1',
			x3y2: 'water-1',
			x4y2: 'road-1',
			x5y2: 'terra-1',
			x6y2: 'hill-1',
			x7y2: 'road-1',
			x8y2: 'road-1',
			x9y2: 'forest-1',
			x0y3: 'terra-1',
			x1y3: 'road-1',
			x2y3: 'road-1',
			x3y3: 'bridge-1',
			x4y3: 'road-1',
			x5y3: 'terra-1',
			x6y3: 'hill-1',
			x7y3: 'stone-1',
			x8y3: 'road-1',
			x9y3: 'forest-1',
			x0y4: 'terra-1',
			x1y4: 'road-1',
			x2y4: 'terra-1',
			x3y4: 'water-1',
			x4y4: 'water-1',
			x5y4: 'water-1',
			x6y4: 'terra-1',
			x7y4: 'terra-1',
			x8y4: 'road-1',
			x9y4: 'forest-1',
			x0y5: 'forest-1',
			x1y5: 'road-1',
			x2y5: 'terra-1',
			x3y5: 'terra-1',
			x4y5: 'water-1',
			x5y5: 'water-1',
			x6y5: 'water-1',
			x7y5: 'terra-1',
			x8y5: 'road-1',
			x9y5: 'terra-1',
			x0y6: 'forest-1',
			x1y6: 'road-1',
			x2y6: 'stone-1',
			x3y6: 'hill-1',
			x4y6: 'terra-1',
			x5y6: 'road-1',
			x6y6: 'bridge-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'terra-1',
			x0y7: 'forest-1',
			x1y7: 'road-1',
			x2y7: 'road-1',
			x3y7: 'hill-1',
			x4y7: 'terra-1',
			x5y7: 'road-1',
			x6y7: 'water-1',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'water-1',
			x0y8: 'forest-1',
			x1y8: 'road-1',
			x2y8: 'road-1',
			x3y8: 'road-1',
			x4y8: 'road-1',
			x5y8: 'road-1',
			x6y8: 'terra-1',
			x7y8: 'terra-1',
			x8y8: 'terra-1',
			x9y8: 'forest-1',
			x0y9: 'terra-1',
			x1y9: 'forest-1',
			x2y9: 'forest-1',
			x3y9: 'forest-1',
			x4y9: 'forest-1',
			x5y9: 'hill-1',
			x6y9: 'hill-1',
			x7y9: 'hill-1',
			x8y9: 'forest-1',
			x9y9: 'forest-1'
		}

	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_003 = {
		version: 4,
		type: 'skirmish',
		size: {width: 17, height: 12},
		maxPlayers: 2,
		isOpen: true,

		// en
		name: 'Rocky Bay',

		// ru
		'name-ru': 'Скалистая бухта',

		units: [
			{type: 'commander', x: 1, y: 9, ownerId: 0},
			{type: 'commander', x: 15, y: 9, ownerId: 1}
		],
		buildings: [
			{type: 'farm', x: 0, y: 2, state: 'normal'},
			{type: 'farm', x: 6, y: 2, state: 'normal'},
			{type: 'castle', x: 8, y: 2, state: 'normal'},
			{type: 'farm', x: 10, y: 2, state: 'normal'},
			{type: 'farm', x: 16, y: 2, state: 'normal'},
			{type: 'farm', x: 2, y: 3, state: 'normal'},
			{type: 'farm', x: 14, y: 3, state: 'normal'},
			{type: 'castle', x: 1, y: 9, state: 'normal', ownerId: 0},
			{type: 'farm', x: 3, y: 9, state: 'normal'},
			{type: 'farm', x: 13, y: 9, state: 'normal'},
			{type: 'castle', x: 15, y: 9, state: 'normal', ownerId: 1},
			{type: 'farm', x: 2, y: 11, state: 'normal'},
			{type: 'farm', x: 14, y: 11, state: 'normal'}
		],
		terrain: {
			x0y0: 'stone-1',
			x1y0: 'stone-1',
			x2y0: 'terra-1',
			x3y0: 'stone-1',
			x4y0: 'forest-1',
			x5y0: 'terra-1',
			x6y0: 'stone-1',
			x7y0: 'terra-1',
			x8y0: 'stone-1',
			x9y0: 'terra-1',
			x10y0: 'stone-1',
			x11y0: 'terra-1',
			x12y0: 'forest-1',
			x13y0: 'stone-1',
			x14y0: 'terra-1',
			x15y0: 'stone-1',
			x16y0: 'stone-1',
			x0y1: 'stone-1',
			x1y1: 'forest-1',
			x2y1: 'stone-1',
			x3y1: 'stone-1',
			x4y1: 'stone-1',
			x5y1: 'terra-1',
			x6y1: 'terra-1',
			x7y1: 'forest-1',
			x8y1: 'terra-1',
			x9y1: 'forest-1',
			x10y1: 'terra-1',
			x11y1: 'terra-1',
			x12y1: 'stone-1',
			x13y1: 'stone-1',
			x14y1: 'stone-1',
			x15y1: 'forest-1',
			x16y1: 'stone-1',
			x0y2: 'terra-1',
			x1y2: 'forest-1',
			x2y2: 'forest-1',
			x3y2: 'stone-1',
			x4y2: 'hill-1',
			x5y2: 'forest-1',
			x6y2: 'terra-1',
			x7y2: 'terra-1',
			x8y2: 'terra-1',
			x9y2: 'terra-1',
			x10y2: 'terra-1',
			x11y2: 'forest-1',
			x12y2: 'hill-1',
			x13y2: 'stone-1',
			x14y2: 'forest-1',
			x15y2: 'forest-1',
			x16y2: 'terra-1',
			x0y3: 'forest-1',
			x1y3: 'forest-1',
			x2y3: 'terra-1',
			x3y3: 'terra-1',
			x4y3: 'road-1',
			x5y3: 'road-1',
			x6y3: 'road-1',
			x7y3: 'road-1',
			x8y3: 'road-1',
			x9y3: 'road-1',
			x10y3: 'road-1',
			x11y3: 'road-1',
			x12y3: 'road-1',
			x13y3: 'terra-1',
			x14y3: 'terra-1',
			x15y3: 'forest-1',
			x16y3: 'forest-1',
			x0y4: 'hill-1',
			x1y4: 'forest-1',
			x2y4: 'terra-1',
			x3y4: 'stone-1',
			x4y4: 'road-1',
			x5y4: 'terra-1',
			x6y4: 'forest-1',
			x7y4: 'terra-1',
			x8y4: 'terra-1',
			x9y4: 'terra-1',
			x10y4: 'forest-1',
			x11y4: 'terra-1',
			x12y4: 'road-1',
			x13y4: 'stone-1',
			x14y4: 'terra-1',
			x15y4: 'forest-1',
			x16y4: 'hill-1',
			x0y5: 'forest-1',
			x1y5: 'forest-1',
			x2y5: 'hill-1',
			x3y5: 'terra-1',
			x4y5: 'road-1',
			x5y5: 'forest-1',
			x6y5: 'terra-1',
			x7y5: 'water-1',
			x8y5: 'water-1',
			x9y5: 'water-1',
			x10y5: 'terra-1',
			x11y5: 'forest-1',
			x12y5: 'road-1',
			x13y5: 'terra-1',
			x14y5: 'hill-1',
			x15y5: 'forest-1',
			x16y5: 'forest-1',
			x0y6: 'stone-1',
			x1y6: 'forest-1',
			x2y6: 'stone-1',
			x3y6: 'hill-1',
			x4y6: 'road-1',
			x5y6: 'stone-1',
			x6y6: 'terra-1',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'water-1',
			x10y6: 'terra-1',
			x11y6: 'stone-1',
			x12y6: 'road-1',
			x13y6: 'hill-1',
			x14y6: 'stone-1',
			x15y6: 'forest-1',
			x16y6: 'stone-1',
			x0y7: 'forest-1',
			x1y7: 'stone-1',
			x2y7: 'terra-1',
			x3y7: 'terra-1',
			x4y7: 'road-1',
			x5y7: 'stone-1',
			x6y7: 'terra-1',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'water-1',
			x10y7: 'terra-1',
			x11y7: 'stone-1',
			x12y7: 'road-1',
			x13y7: 'terra-1',
			x14y7: 'terra-1',
			x15y7: 'stone-1',
			x16y7: 'forest-1',
			x0y8: 'terra-1',
			x1y8: 'terra-1',
			x2y8: 'forest-1',
			x3y8: 'terra-1',
			x4y8: 'road-1',
			x5y8: 'stone-1',
			x6y8: 'terra-1',
			x7y8: 'water-1',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'terra-1',
			x11y8: 'stone-1',
			x12y8: 'road-1',
			x13y8: 'terra-1',
			x14y8: 'forest-1',
			x15y8: 'terra-1',
			x16y8: 'terra-1',
			x0y9: 'forest-1',
			x1y9: 'terra-1',
			x2y9: 'terra-1',
			x3y9: 'terra-1',
			x4y9: 'road-1',
			x5y9: 'stone-1',
			x6y9: 'terra-1',
			x7y9: 'water-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'terra-1',
			x11y9: 'stone-1',
			x12y9: 'road-1',
			x13y9: 'terra-1',
			x14y9: 'terra-1',
			x15y9: 'terra-1',
			x16y9: 'forest-1',
			x0y10: 'road-1',
			x1y10: 'road-1',
			x2y10: 'road-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'stone-1',
			x6y10: 'terra-1',
			x7y10: 'water-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'terra-1',
			x11y10: 'stone-1',
			x12y10: 'road-1',
			x13y10: 'road-1',
			x14y10: 'road-1',
			x15y10: 'road-1',
			x16y10: 'road-1',
			x0y11: 'terra-1',
			x1y11: 'forest-1',
			x2y11: 'terra-1',
			x3y11: 'hill-1',
			x4y11: 'forest-1',
			x5y11: 'terra-1',
			x6y11: 'terra-1',
			x7y11: 'water-1',
			x8y11: 'water-1',
			x9y11: 'water-1',
			x10y11: 'terra-1',
			x11y11: 'terra-1',
			x12y11: 'forest-1',
			x13y11: 'hill-1',
			x14y11: 'terra-1',
			x15y11: 'forest-1',
			x16y11: 'terra-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_015 = {
		version: 4,
		type: 'skirmish',
		size: {width: 19, height: 19},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'Shadow Lands',

		// es
		'name-es': 'Tierras Sombrías',

		// ru
		'name-ru': 'Теневые земли',

		units: [
			{x: 9, y: 1, type: 'commander', ownerId: 0},
			{x: 2, y: 7, type: 'commander', ownerId: 1},
			{x: 16, y: 7, type: 'commander', ownerId: 2},
			{x: 9, y: 15, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 1, y: 6, type: 'farm', state: 'normal'},
			{x: 2, y: 4, type: 'farm', state: 'normal'},
			{x: 6, y: 0, type: 'farm', state: 'normal'},
			{x: 3, y: 9, type: 'farm', state: 'normal'},
			{x: 5, y: 11, type: 'castle', state: 'normal'},
			{x: 12, y: 0, type: 'farm', state: 'normal'},
			{x: 15, y: 9, type: 'farm', state: 'normal'},
			{x: 16, y: 4, type: 'farm', state: 'normal'},
			{x: 17, y: 6, type: 'farm', state: 'normal'},
			{x: 9, y: 3, type: 'farm', state: 'normal'},
			{x: 5, y: 3, type: 'castle', state: 'normal'},
			{x: 13, y: 3, type: 'castle', state: 'normal'},
			{x: 7, y: 7, type: 'castle', state: 'normal'},
			{x: 11, y: 7, type: 'castle', state: 'normal'},
			{x: 9, y: 8, type: 'farm', state: 'destroyed'},
			{x: 9, y: 6, type: 'farm', state: 'destroyed'},
			{x: 13, y: 11, type: 'castle', state: 'normal'},
			{x: 6, y: 17, type: 'farm', state: 'normal'},
			{x: 9, y: 17, type: 'farm', state: 'normal'},
			{x: 12, y: 17, type: 'farm', state: 'normal'},
			{x: 9, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 2, y: 7, type: 'castle', state: 'normal', ownerId: 1},
			{x: 16, y: 7, type: 'castle', state: 'normal', ownerId: 2},
			{x: 9, y: 15, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-2',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'stone-1',
			x1y4: 'terra-1',
			x1y5: 'hill-1',
			x2y0: 'water-1',
			x2y1: 'forest-1',
			x2y2: 'forest-2',
			x2y3: 'terra-1',
			x2y4: 'terra-1',
			x2y5: 'road-1',
			x3y0: 'water-1',
			x3y1: 'forest-2',
			x3y2: 'forest-2',
			x3y3: 'stone-1',
			x3y4: 'terra-1',
			x3y5: 'road-1',
			x4y0: 'forest-2',
			x4y1: 'terra-1',
			x4y2: 'hill-1',
			x4y3: 'terra-1',
			x4y4: 'hill-1',
			x4y5: 'road-1',
			x5y0: 'hill-1',
			x5y1: 'road-1',
			x5y2: 'road-1',
			x5y3: 'terra-1',
			x5y4: 'road-1',
			x5y5: 'road-1',
			x6y0: 'terra-1',
			x6y1: 'road-1',
			x6y2: 'stone-1',
			x6y3: 'hill-1',
			x6y4: 'terra-1',
			x6y5: 'stone-1',
			x7y0: 'stone-1',
			x7y1: 'road-1',
			x7y2: 'hill-1',
			x7y3: 'stone-1',
			x7y4: 'forest-1',
			x7y5: 'terra-1',
			x8y0: 'terra-1',
			x8y1: 'road-1',
			x8y2: 'terra-1',
			x8y3: 'terra-1',
			x8y4: 'stone-1',
			x8y5: 'stone-1',
			x9y0: 'terra-1',
			x9y1: 'terra-1',
			x9y2: 'terra-1',
			x9y3: 'terra-1',
			x9y4: 'stone-1',
			x9y5: 'stone-1',
			x10y0: 'hill-1',
			x10y1: 'road-1',
			x10y2: 'forest-2',
			x10y3: 'terra-1',
			x10y4: 'stone-1',
			x10y5: 'stone-1',
			x11y0: 'terra-1',
			x11y1: 'road-1',
			x11y2: 'hill-1',
			x11y3: 'stone-1',
			x11y4: 'forest-1',
			x11y5: 'terra-1',
			x12y0: 'terra-1',
			x12y1: 'road-1',
			x12y2: 'stone-1',
			x12y3: 'forest-2',
			x12y4: 'terra-1',
			x12y5: 'stone-1',
			x13y0: 'hill-1',
			x13y1: 'road-1',
			x13y2: 'road-1',
			x13y3: 'terra-1',
			x13y4: 'road-1',
			x13y5: 'road-1',
			x14y0: 'forest-1',
			x14y1: 'stone-1',
			x14y2: 'terra-1',
			x14y3: 'terra-1',
			x14y4: 'stone-1',
			x14y5: 'road-1',
			x15y0: 'water-1',
			x15y1: 'forest-2',
			x15y2: 'stone-1',
			x15y3: 'forest-1',
			x15y4: 'hill-1',
			x15y5: 'road-1',
			x16y0: 'water-1',
			x16y1: 'forest-1',
			x16y2: 'forest-2',
			x16y3: 'terra-1',
			x16y4: 'terra-1',
			x16y5: 'road-1',
			x17y0: 'water-1',
			x17y1: 'water-1',
			x17y2: 'water-1',
			x17y3: 'forest-2',
			x17y4: 'terra-1',
			x17y5: 'terra-1',
			x18y0: 'water-3',
			x18y1: 'water-1',
			x18y2: 'water-1',
			x18y3: 'water-1',
			x18y4: 'water-1',
			x18y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'terra-1',
			x2y6: 'road-1',
			x3y6: 'water-1',
			x4y6: 'water-1',
			x5y6: 'forest-2',
			x6y6: 'terra-1',
			x7y6: 'hill-1',
			x8y6: 'terra-1',
			x9y6: 'terra-1',
			x10y6: 'hill-1',
			x11y6: 'terra-1',
			x12y6: 'hill-1',
			x13y6: 'forest-1',
			x14y6: 'water-1',
			x15y6: 'water-1',
			x16y6: 'road-1',
			x17y6: 'terra-1',
			x18y6: 'water-1',
			x0y7: 'water-1',
			x1y7: 'terra-1',
			x2y7: 'terra-1',
			x3y7: 'water-1',
			x4y7: 'water-1',
			x5y7: 'water-1',
			x6y7: 'forest-1',
			x7y7: 'terra-1',
			x8y7: 'forest-1',
			x9y7: 'terra-1',
			x10y7: 'forest-2',
			x11y7: 'terra-1',
			x12y7: 'forest-1',
			x13y7: 'water-1',
			x14y7: 'water-1',
			x15y7: 'water-1',
			x16y7: 'terra-1',
			x17y7: 'hill-1',
			x18y7: 'water-1',
			x0y8: 'water-1',
			x1y8: 'hill-1',
			x2y8: 'road-1',
			x3y8: 'water-1',
			x4y8: 'water-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'terra-1',
			x8y8: 'hill-1',
			x9y8: 'terra-1',
			x10y8: 'terra-1',
			x11y8: 'hill-1',
			x12y8: 'water-1',
			x13y8: 'water-1',
			x14y8: 'water-1',
			x15y8: 'water-1',
			x16y8: 'road-1',
			x17y8: 'terra-1',
			x18y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'forest-2',
			x2y9: 'road-1',
			x3y9: 'terra-1',
			x4y9: 'water-1',
			x5y9: 'water-1',
			x6y9: 'water-1',
			x7y9: 'road-1',
			x8y9: 'road-1',
			x9y9: 'road-1',
			x10y9: 'road-1',
			x11y9: 'road-1',
			x12y9: 'water-1',
			x13y9: 'water-1',
			x14y9: 'water-1',
			x15y9: 'terra-1',
			x16y9: 'road-1',
			x17y9: 'forest-1',
			x18y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'forest-1',
			x2y10: 'road-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'road-1',
			x12y10: 'road-1',
			x13y10: 'road-1',
			x14y10: 'road-1',
			x15y10: 'road-1',
			x16y10: 'road-1',
			x17y10: 'forest-2',
			x18y10: 'water-1',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'terra-1',
			x3y11: 'stone-1',
			x4y11: 'hill-1',
			x5y11: 'terra-1',
			x6y11: 'road-1',
			x7y11: 'stone-1',
			x8y11: 'water-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'stone-1',
			x12y11: 'road-1',
			x13y11: 'terra-1',
			x14y11: 'terra-1',
			x15y11: 'hill-1',
			x16y11: 'forest-1',
			x17y11: 'water-1',
			x18y11: 'water-1',
			x0y12: 'water-1',
			x1y12: 'water-1',
			x2y12: 'forest-2',
			x3y12: 'hill-1',
			x4y12: 'forest-2',
			x5y12: 'terra-1',
			x6y12: 'road-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'water-2',
			x10y12: 'water-1',
			x11y12: 'water-1',
			x12y12: 'road-1',
			x13y12: 'stone-1',
			x14y12: 'terra-1',
			x15y12: 'forest-1',
			x16y12: 'terra-1',
			x17y12: 'water-1',
			x18y12: 'water-3',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'forest-1',
			x4y13: 'terra-1',
			x5y13: 'stone-1',
			x6y13: 'road-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'road-1',
			x13y13: 'hill-1',
			x14y13: 'forest-2',
			x15y13: 'forest-2',
			x16y13: 'water-1',
			x17y13: 'water-1',
			x18y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'water-1',
			x4y14: 'water-1',
			x5y14: 'water-1',
			x6y14: 'road-1',
			x7y14: 'hill-1',
			x8y14: 'stone-1',
			x9y14: 'forest-2',
			x10y14: 'forest-1',
			x11y14: 'stone-1',
			x12y14: 'road-1',
			x13y14: 'water-1',
			x14y14: 'water-1',
			x15y14: 'water-1',
			x16y14: 'water-1',
			x17y14: 'water-1',
			x18y14: 'water-1',
			x0y15: 'water-1',
			x1y15: 'water-3',
			x2y15: 'water-1',
			x3y15: 'water-1',
			x4y15: 'water-3',
			x5y15: 'water-1',
			x6y15: 'road-1',
			x7y15: 'road-1',
			x8y15: 'road-1',
			x9y15: 'terra-1',
			x10y15: 'road-1',
			x11y15: 'road-1',
			x12y15: 'road-1',
			x13y15: 'water-1',
			x14y15: 'water-1',
			x15y15: 'water-1',
			x16y15: 'water-2',
			x17y15: 'water-1',
			x18y15: 'water-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'water-1',
			x3y16: 'water-1',
			x4y16: 'water-1',
			x5y16: 'water-1',
			x6y16: 'terra-1',
			x7y16: 'hill-1',
			x8y16: 'forest-1',
			x9y16: 'terra-1',
			x10y16: 'hill-1',
			x11y16: 'forest-2',
			x12y16: 'terra-1',
			x13y16: 'water-1',
			x14y16: 'water-1',
			x15y16: 'water-1',
			x16y16: 'water-1',
			x17y16: 'water-3',
			x18y16: 'water-1',
			x0y17: 'water-1',
			x1y17: 'water-1',
			x2y17: 'water-2',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'terra-1',
			x7y17: 'water-1',
			x8y17: 'water-1',
			x9y17: 'terra-1',
			x10y17: 'water-1',
			x11y17: 'water-1',
			x12y17: 'terra-1',
			x13y17: 'water-1',
			x14y17: 'water-3',
			x15y17: 'water-1',
			x16y17: 'water-1',
			x17y17: 'water-1',
			x18y17: 'water-1',
			x0y18: 'water-1',
			x1y18: 'water-1',
			x2y18: 'water-1',
			x3y18: 'water-1',
			x4y18: 'water-1',
			x5y18: 'water-1',
			x6y18: 'water-1',
			x7y18: 'water-1',
			x8y18: 'water-1',
			x9y18: 'water-1',
			x10y18: 'water-1',
			x11y18: 'water-1',
			x12y18: 'water-1',
			x13y18: 'water-1',
			x14y18: 'water-1',
			x15y18: 'water-1',
			x16y18: 'water-1',
			x17y18: 'water-1',
			x18y18: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_008 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 15},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'Solitude',

		// es
		'name-es': 'Soledad',

		// ru
		'name-ru': 'Одиночество',

		units: [
			{x: 2, y: 7, type: 'commander', ownerId: 0},
			{x: 7, y: 2, type: 'commander', ownerId: 1},
			{x: 12, y: 7, type: 'commander', ownerId: 2},
			{x: 7, y: 12, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 7, y: 7, type: 'farm', state: 'normal'},
			{x: 6, y: 2, type: 'farm', state: 'normal'},
			{x: 4, y: 4, type: 'farm', state: 'normal'},
			{x: 4, y: 10, type: 'farm', state: 'normal'},
			{x: 10, y: 10, type: 'farm', state: 'normal'},
			{x: 10, y: 4, type: 'farm', state: 'normal'},
			{x: 2, y: 8, type: 'farm', state: 'normal'},
			{x: 8, y: 12, type: 'farm', state: 'normal'},
			{x: 12, y: 6, type: 'farm', state: 'normal'},
			{x: 2, y: 7, type: 'castle', state: 'normal', ownerId: 0},
			{x: 7, y: 2, type: 'castle', state: 'normal', ownerId: 1},
			{x: 12, y: 7, type: 'castle', state: 'normal', ownerId: 2},
			{x: 7, y: 12, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-3',
			x0y1: 'water-1',
			x0y2: 'water-2',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'water-1',
			x1y4: 'water-1',
			x1y5: 'forest-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'stone-1',
			x2y4: 'terra-1',
			x2y5: 'hill-1',
			x3y0: 'water-2',
			x3y1: 'water-1',
			x3y2: 'stone-1',
			x3y3: 'road-1',
			x3y4: 'road-1',
			x3y5: 'road-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'hill-1',
			x4y3: 'road-1',
			x4y4: 'terra-1',
			x4y5: 'water-1',
			x5y0: 'water-1',
			x5y1: 'forest-1',
			x5y2: 'terra-1',
			x5y3: 'road-1',
			x5y4: 'water-1',
			x5y5: 'water-1',
			x6y0: 'water-1',
			x6y1: 'hill-1',
			x6y2: 'terra-1',
			x6y3: 'road-1',
			x6y4: 'water-1',
			x6y5: 'water-1',
			x7y0: 'water-1',
			x7y1: 'terra-1',
			x7y2: 'terra-1',
			x7y3: 'road-1',
			x7y4: 'bridge-2',
			x7y5: 'bridge-2',
			x8y0: 'water-1',
			x8y1: 'forest-2',
			x8y2: 'terra-1',
			x8y3: 'road-1',
			x8y4: 'water-1',
			x8y5: 'water-1',
			x9y0: 'water-1',
			x9y1: 'forest-2',
			x9y2: 'forest-1',
			x9y3: 'road-1',
			x9y4: 'water-1',
			x9y5: 'water-1',
			x10y0: 'water-1',
			x10y1: 'water-1',
			x10y2: 'stone-1',
			x10y3: 'road-1',
			x10y4: 'terra-1',
			x10y5: 'water-1',
			x11y0: 'water-3',
			x11y1: 'water-1',
			x11y2: 'hill-1',
			x11y3: 'road-1',
			x11y4: 'road-1',
			x11y5: 'road-1',
			x12y0: 'water-1',
			x12y1: 'water-1',
			x12y2: 'water-1',
			x12y3: 'stone-1',
			x12y4: 'terra-1',
			x12y5: 'hill-1',
			x13y0: 'water-1',
			x13y1: 'water-2',
			x13y2: 'water-1',
			x13y3: 'water-1',
			x13y4: 'water-1',
			x13y5: 'forest-2',
			x14y0: 'water-1',
			x14y1: 'water-1',
			x14y2: 'water-1',
			x14y3: 'water-1',
			x14y4: 'water-1',
			x14y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'hill-1',
			x2y6: 'terra-1',
			x3y6: 'road-1',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'bridge-2',
			x8y6: 'water-1',
			x9y6: 'water-1',
			x10y6: 'water-1',
			x11y6: 'road-1',
			x12y6: 'terra-1',
			x13y6: 'terra-1',
			x14y6: 'water-1',
			x0y7: 'water-1',
			x1y7: 'terra-1',
			x2y7: 'terra-1',
			x3y7: 'road-1',
			x4y7: 'bridge-1',
			x5y7: 'bridge-1',
			x6y7: 'bridge-1',
			x7y7: 'terra-1',
			x8y7: 'bridge-1',
			x9y7: 'bridge-1',
			x10y7: 'bridge-1',
			x11y7: 'road-1',
			x12y7: 'terra-1',
			x13y7: 'hill-1',
			x14y7: 'water-1',
			x0y8: 'water-1',
			x1y8: 'hill-1',
			x2y8: 'terra-1',
			x3y8: 'road-1',
			x4y8: 'water-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'bridge-2',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x11y8: 'road-1',
			x12y8: 'terra-1',
			x13y8: 'stone-1',
			x14y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'forest-2',
			x2y9: 'forest-1',
			x3y9: 'road-1',
			x4y9: 'water-1',
			x5y9: 'water-1',
			x6y9: 'water-1',
			x7y9: 'bridge-2',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x11y9: 'road-1',
			x12y9: 'hill-1',
			x13y9: 'forest-1',
			x14y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'stone-1',
			x3y10: 'road-1',
			x4y10: 'terra-1',
			x5y10: 'water-1',
			x6y10: 'water-1',
			x7y10: 'bridge-2',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'terra-1',
			x11y10: 'road-1',
			x12y10: 'forest-1',
			x13y10: 'water-1',
			x14y10: 'water-1',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'forest-1',
			x3y11: 'road-1',
			x4y11: 'road-1',
			x5y11: 'road-1',
			x6y11: 'road-1',
			x7y11: 'road-1',
			x8y11: 'road-1',
			x9y11: 'road-1',
			x10y11: 'road-1',
			x11y11: 'road-1',
			x12y11: 'forest-2',
			x13y11: 'water-1',
			x14y11: 'water-2',
			x0y12: 'water-2',
			x1y12: 'water-1',
			x2y12: 'water-1',
			x3y12: 'stone-1',
			x4y12: 'terra-1',
			x5y12: 'hill-1',
			x6y12: 'terra-1',
			x7y12: 'terra-1',
			x8y12: 'terra-1',
			x9y12: 'hill-1',
			x10y12: 'terra-1',
			x11y12: 'stone-1',
			x12y12: 'water-1',
			x13y12: 'water-1',
			x14y12: 'water-1',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'water-1',
			x4y13: 'water-1',
			x5y13: 'forest-1',
			x6y13: 'hill-1',
			x7y13: 'forest-2',
			x8y13: 'terra-1',
			x9y13: 'forest-2',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'water-1',
			x13y13: 'water-1',
			x14y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-3',
			x3y14: 'water-1',
			x4y14: 'water-1',
			x5y14: 'water-1',
			x6y14: 'water-1',
			x7y14: 'water-1',
			x8y14: 'water-1',
			x9y14: 'water-1',
			x10y14: 'water-1',
			x11y14: 'water-3',
			x12y14: 'water-1',
			x13y14: 'water-1',
			x14y14: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_005 = {
		version: 4,
		type: 'skirmish',
		size: {width: 16, height: 10},
		maxPlayers: 2,
		isOpen: true,

		// en
		name: 'The Crossing',

		// ru
		'name-ru': 'Пересечение',

		units: [
			{x: 1, y: 1, type: 'commander', ownerId: 0},
			{x: 14, y: 6, type: 'commander', ownerId: 1}
		],
		buildings: [
			{x: 1, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 3, y: 1, type: 'farm', state: 'normal'},
			{x: 4, y: 8, type: 'castle', state: 'normal'},
			{x: 2, y: 4, type: 'farm', state: 'normal'},
			{x: 6, y: 6, type: 'farm', state: 'normal'},
			{x: 8, y: 5, type: 'farm', state: 'normal'},
			{x: 8, y: 2, type: 'farm', state: 'normal'},
			{x: 10, y: 0, type: 'castle', state: 'normal'},
			{x: 13, y: 3, type: 'farm', state: 'normal'},
			{x: 12, y: 6, type: 'farm', state: 'normal'},
			{x: 14, y: 6, type: 'castle', state: 'normal', ownerId: 1}
		],
		terrain: {
			x0y0: 'forest-1',
			x0y1: 'stone-1',
			x0y2: 'road-1',
			x0y3: 'forest-1',
			x0y4: 'terra-1',
			x0y5: 'terra-1',
			x1y0: 'stone-1',
			x1y1: 'terra-1',
			x1y2: 'road-1',
			x1y3: 'hill-1',
			x1y4: 'stone-1',
			x1y5: 'hill-1',
			x2y0: 'hill-1',
			x2y1: 'terra-1',
			x2y2: 'road-1',
			x2y3: 'forest-1',
			x2y4: 'terra-1',
			x2y5: 'forest-2',
			x3y0: 'forest-2',
			x3y1: 'terra-1',
			x3y2: 'road-1',
			x3y3: 'road-1',
			x3y4: 'road-1',
			x3y5: 'road-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'water-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'forest-1',
			x5y0: 'water-2',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'water-1',
			x5y4: 'water-1',
			x5y5: 'forest-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'forest-1',
			x6y3: 'stone-1',
			x6y4: 'terra-1',
			x6y5: 'terra-1',
			x7y0: 'forest-1',
			x7y1: 'forest-1',
			x7y2: 'terra-1',
			x7y3: 'hill-1',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'forest-2',
			x8y1: 'terra-1',
			x8y2: 'terra-1',
			x8y3: 'terra-1',
			x8y4: 'road-1',
			x8y5: 'terra-1',
			x9y0: 'stone-1',
			x9y1: 'road-1',
			x9y2: 'road-1',
			x9y3: 'road-1',
			x9y4: 'road-1',
			x9y5: 'water-1',
			x10y0: 'terra-1',
			x10y1: 'road-1',
			x10y2: 'hill-1',
			x10y3: 'stone-1',
			x10y4: 'terra-1',
			x10y5: 'water-1',
			x11y0: 'terra-1',
			x11y1: 'road-1',
			x11y2: 'forest-1',
			x11y3: 'terra-1',
			x11y4: 'road-1',
			x11y5: 'road-1',
			x0y6: 'forest-1',
			x1y6: 'terra-1',
			x2y6: 'hill-1',
			x3y6: 'road-1',
			x4y6: 'forest-2',
			x5y6: 'terra-1',
			x6y6: 'terra-1',
			x7y6: 'road-1',
			x8y6: 'hill-1',
			x9y6: 'water-1',
			x10y6: 'water-1',
			x11y6: 'road-1',
			x0y7: 'stone-1',
			x1y7: 'terra-1',
			x2y7: 'stone-1',
			x3y7: 'road-1',
			x4y7: 'hill-1',
			x5y7: 'forest-2',
			x6y7: 'stone-1',
			x7y7: 'road-1',
			x8y7: 'water-1',
			x9y7: 'water-1',
			x10y7: 'water-1',
			x11y7: 'road-1',
			x0y8: 'forest-2',
			x1y8: 'hill-1',
			x2y8: 'terra-1',
			x3y8: 'road-1',
			x4y8: 'terra-1',
			x5y8: 'road-1',
			x6y8: 'road-1',
			x7y8: 'road-1',
			x8y8: 'water-1',
			x9y8: 'water-2',
			x10y8: 'water-1',
			x11y8: 'forest-2',
			x0y9: 'forest-1',
			x1y9: 'forest-1',
			x2y9: 'stone-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'road-1',
			x6y9: 'hill-1',
			x7y9: 'stone-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x11y9: 'stone-1',
			x12y0: 'stone-1',
			x12y1: 'road-1',
			x12y2: 'road-1',
			x12y3: 'road-1',
			x12y4: 'road-1',
			x12y5: 'hill-1',
			x12y6: 'terra-1',
			x12y7: 'road-1',
			x12y8: 'terra-1',
			x12y9: 'forest-1',
			x13y0: 'forest-1',
			x13y1: 'hill-1',
			x13y2: 'terra-1',
			x13y3: 'terra-1',
			x13y4: 'terra-1',
			x13y5: 'terra-1',
			x13y6: 'hill-1',
			x13y7: 'road-1',
			x13y8: 'hill-1',
			x13y9: 'stone-1',
			x14y0: 'forest-1',
			x14y1: 'stone-1',
			x14y2: 'terra-1',
			x14y3: 'hill-1',
			x14y4: 'forest-1',
			x14y5: 'stone-1',
			x14y6: 'terra-1',
			x14y7: 'road-1',
			x14y8: 'terra-1',
			x14y9: 'forest-2',
			x15y0: 'stone-1',
			x15y1: 'forest-1',
			x15y2: 'forest-2',
			x15y3: 'stone-1',
			x15y4: 'forest-2',
			x15y5: 'forest-1',
			x15y6: 'stone-1',
			x15y7: 'road-1',
			x15y8: 'forest-1',
			x15y9: 'forest-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_014 = {
		version: 4,
		type: 'skirmish',
		size: {width: 19, height: 19},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'The Crucible',

		// es
		'name-es': 'El Crisol',

		// ru
		'name-ru': 'Суровое испытание',

		units: [
			{x: 3, y: 3, type: 'commander', ownerId: 0},
			{x: 15, y: 3, type: 'commander', ownerId: 1},
			{x: 3, y: 15, type: 'commander', ownerId: 2},
			{x: 15, y: 15, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 3, y: 3, type: 'castle', state: 'normal', ownerId: 0},
			{x: 8, y: 4, type: 'farm', state: 'destroyed'},
			{x: 10, y: 4, type: 'farm', state: 'destroyed'},
			{x: 9, y: 2, type: 'castle', state: 'normal'},
			{x: 15, y: 3, type: 'castle', state: 'normal', ownerId: 1},
			{x: 4, y: 8, type: 'farm', state: 'destroyed'},
			{x: 4, y: 10, type: 'farm', state: 'destroyed'},
			{x: 2, y: 9, type: 'castle', state: 'normal'},
			{x: 7, y: 11, type: 'farm', state: 'destroyed'},
			{x: 7, y: 7, type: 'farm', state: 'destroyed'},
			{x: 11, y: 7, type: 'farm', state: 'destroyed'},
			{x: 11, y: 11, type: 'farm', state: 'destroyed'},
			{x: 9, y: 9, type: 'castle', state: 'normal'},
			{x: 16, y: 9, type: 'castle', state: 'normal'},
			{x: 14, y: 8, type: 'farm', state: 'destroyed'},
			{x: 14, y: 10, type: 'farm', state: 'destroyed'},
			{x: 3, y: 15, type: 'castle', state: 'normal', ownerId: 2},
			{x: 8, y: 14, type: 'farm', state: 'destroyed'},
			{x: 10, y: 14, type: 'farm', state: 'destroyed'},
			{x: 9, y: 16, type: 'castle', state: 'normal'},
			{x: 15, y: 15, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-2',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-3',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'water-1',
			x1y4: 'water-1',
			x1y5: 'water-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'stone-1',
			x2y3: 'forest-1',
			x2y4: 'hill-1',
			x2y5: 'water-1',
			x3y0: 'water-3',
			x3y1: 'water-1',
			x3y2: 'forest-2',
			x3y3: 'terra-1',
			x3y4: 'road-1',
			x3y5: 'bridge-2',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'terra-1',
			x4y3: 'road-1',
			x4y4: 'stone-1',
			x4y5: 'water-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'bridge-1',
			x5y4: 'water-1',
			x5y5: 'water-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'water-1',
			x6y3: 'bridge-1',
			x6y4: 'water-1',
			x6y5: 'water-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'hill-1',
			x7y3: 'road-1',
			x7y4: 'forest-1',
			x7y5: 'water-1',
			x8y0: 'water-1',
			x8y1: 'water-1',
			x8y2: 'terra-1',
			x8y3: 'road-1',
			x8y4: 'terra-1',
			x8y5: 'water-1',
			x9y0: 'water-1',
			x9y1: 'water-1',
			x9y2: 'terra-1',
			x9y3: 'road-1',
			x9y4: 'road-1',
			x9y5: 'bridge-2',
			x10y0: 'water-2',
			x10y1: 'water-1',
			x10y2: 'stone-1',
			x10y3: 'road-1',
			x10y4: 'terra-1',
			x10y5: 'water-1',
			x11y0: 'water-1',
			x11y1: 'water-1',
			x11y2: 'forest-2',
			x11y3: 'road-1',
			x11y4: 'terra-1',
			x11y5: 'water-1',
			x12y0: 'water-1',
			x12y1: 'water-1',
			x12y2: 'water-1',
			x12y3: 'bridge-1',
			x12y4: 'water-1',
			x12y5: 'water-1',
			x13y0: 'water-1',
			x13y1: 'water-1',
			x13y2: 'water-1',
			x13y3: 'bridge-1',
			x13y4: 'water-1',
			x13y5: 'water-1',
			x14y0: 'water-1',
			x14y1: 'water-1',
			x14y2: 'hill-1',
			x14y3: 'road-1',
			x14y4: 'stone-1',
			x14y5: 'water-1',
			x15y0: 'water-1',
			x15y1: 'water-1',
			x15y2: 'forest-1',
			x15y3: 'terra-1',
			x15y4: 'road-1',
			x15y5: 'bridge-2',
			x16y0: 'water-1',
			x16y1: 'water-1',
			x16y2: 'stone-1',
			x16y3: 'forest-1',
			x16y4: 'terra-1',
			x16y5: 'water-1',
			x17y0: 'water-1',
			x17y1: 'water-1',
			x17y2: 'water-1',
			x17y3: 'water-1',
			x17y4: 'water-1',
			x17y5: 'water-1',
			x18y0: 'water-1',
			x18y1: 'water-1',
			x18y2: 'water-1',
			x18y3: 'water-3',
			x18y4: 'water-1',
			x18y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'water-1',
			x2y6: 'water-1',
			x3y6: 'bridge-2',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'bridge-2',
			x10y6: 'water-1',
			x11y6: 'water-1',
			x12y6: 'water-1',
			x13y6: 'water-1',
			x14y6: 'water-1',
			x15y6: 'bridge-2',
			x16y6: 'water-1',
			x17y6: 'water-1',
			x18y6: 'water-1',
			x0y7: 'water-1',
			x1y7: 'water-1',
			x2y7: 'forest-2',
			x3y7: 'road-1',
			x4y7: 'terra-1',
			x5y7: 'water-1',
			x6y7: 'water-1',
			x7y7: 'terra-1',
			x8y7: 'hill-1',
			x9y7: 'road-1',
			x10y7: 'forest-1',
			x11y7: 'terra-1',
			x12y7: 'water-1',
			x13y7: 'water-1',
			x14y7: 'forest-1',
			x15y7: 'road-1',
			x16y7: 'hill-1',
			x17y7: 'water-1',
			x18y7: 'water-1',
			x0y8: 'water-1',
			x1y8: 'water-1',
			x2y8: 'stone-1',
			x3y8: 'road-1',
			x4y8: 'terra-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'forest-1',
			x8y8: 'terra-1',
			x9y8: 'road-1',
			x10y8: 'stone-1',
			x11y8: 'forest-1',
			x12y8: 'water-1',
			x13y8: 'water-1',
			x14y8: 'terra-1',
			x15y8: 'road-1',
			x16y8: 'terra-1',
			x17y8: 'water-1',
			x18y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'water-1',
			x2y9: 'terra-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'bridge-1',
			x6y9: 'bridge-1',
			x7y9: 'road-1',
			x8y9: 'road-1',
			x9y9: 'terra-1',
			x10y9: 'road-1',
			x11y9: 'road-1',
			x12y9: 'bridge-1',
			x13y9: 'bridge-1',
			x14y9: 'road-1',
			x15y9: 'road-1',
			x16y9: 'terra-1',
			x17y9: 'water-1',
			x18y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'water-1',
			x2y10: 'terra-1',
			x3y10: 'road-1',
			x4y10: 'terra-1',
			x5y10: 'water-1',
			x6y10: 'water-1',
			x7y10: 'forest-1',
			x8y10: 'stone-1',
			x9y10: 'road-1',
			x10y10: 'terra-1',
			x11y10: 'forest-1',
			x12y10: 'water-1',
			x13y10: 'water-1',
			x14y10: 'terra-1',
			x15y10: 'road-1',
			x16y10: 'stone-1',
			x17y10: 'water-1',
			x18y10: 'water-2',
			x0y11: 'water-1',
			x1y11: 'water-1',
			x2y11: 'hill-1',
			x3y11: 'road-1',
			x4y11: 'forest-1',
			x5y11: 'water-1',
			x6y11: 'water-1',
			x7y11: 'terra-1',
			x8y11: 'forest-1',
			x9y11: 'road-1',
			x10y11: 'hill-1',
			x11y11: 'terra-1',
			x12y11: 'water-1',
			x13y11: 'water-1',
			x14y11: 'terra-1',
			x15y11: 'road-1',
			x16y11: 'forest-2',
			x17y11: 'water-1',
			x18y11: 'water-1',
			x0y12: 'water-1',
			x1y12: 'water-1',
			x2y12: 'water-1',
			x3y12: 'bridge-2',
			x4y12: 'water-1',
			x5y12: 'water-1',
			x6y12: 'water-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'bridge-2',
			x10y12: 'water-1',
			x11y12: 'water-1',
			x12y12: 'water-1',
			x13y12: 'water-1',
			x14y12: 'water-1',
			x15y12: 'bridge-2',
			x16y12: 'water-1',
			x17y12: 'water-1',
			x18y12: 'water-1',
			x0y13: 'water-3',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'bridge-2',
			x4y13: 'water-1',
			x5y13: 'water-1',
			x6y13: 'water-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'bridge-2',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'water-1',
			x13y13: 'water-1',
			x14y13: 'water-1',
			x15y13: 'bridge-2',
			x16y13: 'water-1',
			x17y13: 'water-1',
			x18y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'terra-1',
			x3y14: 'road-1',
			x4y14: 'stone-1',
			x5y14: 'water-1',
			x6y14: 'water-1',
			x7y14: 'terra-1',
			x8y14: 'terra-1',
			x9y14: 'road-1',
			x10y14: 'terra-1',
			x11y14: 'forest-1',
			x12y14: 'water-1',
			x13y14: 'water-1',
			x14y14: 'stone-1',
			x15y14: 'road-1',
			x16y14: 'hill-1',
			x17y14: 'water-1',
			x18y14: 'water-1',
			x0y15: 'water-1',
			x1y15: 'water-1',
			x2y15: 'forest-1',
			x3y15: 'terra-1',
			x4y15: 'road-1',
			x5y15: 'bridge-1',
			x6y15: 'bridge-1',
			x7y15: 'road-1',
			x8y15: 'road-1',
			x9y15: 'road-1',
			x10y15: 'road-1',
			x11y15: 'road-1',
			x12y15: 'bridge-1',
			x13y15: 'bridge-1',
			x14y15: 'road-1',
			x15y15: 'terra-1',
			x16y15: 'forest-1',
			x17y15: 'water-1',
			x18y15: 'water-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'stone-1',
			x3y16: 'forest-2',
			x4y16: 'hill-1',
			x5y16: 'water-1',
			x6y16: 'water-1',
			x7y16: 'forest-1',
			x8y16: 'stone-1',
			x9y16: 'terra-1',
			x10y16: 'hill-1',
			x11y16: 'terra-1',
			x12y16: 'water-1',
			x13y16: 'water-1',
			x14y16: 'terra-1',
			x15y16: 'forest-2',
			x16y16: 'stone-1',
			x17y16: 'water-1',
			x18y16: 'water-1',
			x0y17: 'water-1',
			x1y17: 'water-1',
			x2y17: 'water-1',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'water-1',
			x7y17: 'water-1',
			x8y17: 'water-1',
			x9y17: 'water-1',
			x10y17: 'water-1',
			x11y17: 'water-1',
			x12y17: 'water-1',
			x13y17: 'water-1',
			x14y17: 'water-1',
			x15y17: 'water-1',
			x16y17: 'water-1',
			x17y17: 'water-1',
			x18y17: 'water-2',
			x0y18: 'water-1',
			x1y18: 'water-1',
			x2y18: 'water-1',
			x3y18: 'water-1',
			x4y18: 'water-1',
			x5y18: 'water-1',
			x6y18: 'water-2',
			x7y18: 'water-1',
			x8y18: 'water-1',
			x9y18: 'water-1',
			x10y18: 'water-1',
			x11y18: 'water-1',
			x12y18: 'water-3',
			x13y18: 'water-1',
			x14y18: 'water-1',
			x15y18: 'water-1',
			x16y18: 'water-1',
			x17y18: 'water-3',
			x18y18: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_010 = {
		version: 4,
		type: 'skirmish',
		size: {width: 15, height: 15},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'Waterways',

		// es
		'name-es': 'Vía Fluvial',

		// ru
		'name-ru': 'Водоемы',

		units: [
			{x: 2, y: 2, type: 'commander', ownerId: 0},
			{x: 12, y: 3, type: 'commander', ownerId: 1},
			{x: 2, y: 12, type: 'commander', ownerId: 2},
			{x: 12, y: 12, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 2, y: 2, type: 'castle', state: 'normal', ownerId: 0},
			{x: 4, y: 3, type: 'farm', state: 'normal'},
			{x: 2, y: 4, type: 'farm', state: 'normal'},
			{x: 6, y: 7, type: 'farm', state: 'destroyed'},
			{x: 7, y: 12, type: 'farm', state: 'destroyed'},
			{x: 1, y: 9, type: 'farm', state: 'normal'},
			{x: 3, y: 10, type: 'farm', state: 'normal'},
			{x: 2, y: 12, type: 'castle', state: 'normal', ownerId: 2},
			{x: 10, y: 3, type: 'farm', state: 'normal'},
			{x: 13, y: 5, type: 'farm', state: 'normal'},
			{x: 11, y: 9, type: 'farm', state: 'normal'},
			{x: 12, y: 3, type: 'castle', state: 'normal', ownerId: 1},
			{x: 12, y: 12, type: 'castle', state: 'normal', ownerId: 3},
			{x: 13, y: 10, type: 'farm', state: 'normal'}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'water-1',
			x1y0: 'water-1',
			x1y1: 'hill-1',
			x1y2: 'forest-1',
			x1y3: 'stone-1',
			x1y4: 'water-1',
			x1y5: 'water-1',
			x2y0: 'water-1',
			x2y1: 'forest-1',
			x2y2: 'terra-1',
			x2y3: 'terra-1',
			x2y4: 'terra-1',
			x2y5: 'water-1',
			x3y0: 'water-1',
			x3y1: 'water-1',
			x3y2: 'forest-2',
			x3y3: 'terra-1',
			x3y4: 'hill-1',
			x3y5: 'road-1',
			x4y0: 'water-3',
			x4y1: 'water-1',
			x4y2: 'water-1',
			x4y3: 'terra-1',
			x4y4: 'forest-1',
			x4y5: 'road-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'water-1',
			x5y4: 'stone-1',
			x5y5: 'road-1',
			x6y0: 'water-1',
			x6y1: 'water-1',
			x6y2: 'water-1',
			x6y3: 'water-1',
			x6y4: 'water-1',
			x6y5: 'road-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'water-1',
			x7y3: 'water-2',
			x7y4: 'water-1',
			x7y5: 'bridge-1',
			x8y0: 'water-3',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'water-1',
			x8y4: 'water-1',
			x8y5: 'bridge-1',
			x9y0: 'water-1',
			x9y1: 'water-2',
			x9y2: 'water-1',
			x9y3: 'water-1',
			x9y4: 'forest-1',
			x9y5: 'road-1',
			x10y0: 'water-1',
			x10y1: 'water-1',
			x10y2: 'water-1',
			x10y3: 'terra-1',
			x10y4: 'road-1',
			x10y5: 'road-1',
			x11y0: 'water-1',
			x11y1: 'water-1',
			x11y2: 'stone-1',
			x11y3: 'terra-1',
			x11y4: 'road-1',
			x11y5: 'forest-2',
			x12y0: 'water-1',
			x12y1: 'hill-1',
			x12y2: 'forest-1',
			x12y3: 'terra-1',
			x12y4: 'road-1',
			x12y5: 'road-1',
			x13y0: 'water-1',
			x13y1: 'stone-1',
			x13y2: 'stone-1',
			x13y3: 'hill-1',
			x13y4: 'forest-1',
			x13y5: 'terra-1',
			x14y0: 'water-1',
			x14y1: 'water-1',
			x14y2: 'water-1',
			x14y3: 'water-1',
			x14y4: 'water-1',
			x14y5: 'water-1',
			x0y6: 'water-1',
			x1y6: 'water-2',
			x2y6: 'water-1',
			x3y6: 'road-1',
			x4y6: 'stone-1',
			x5y6: 'forest-1',
			x6y6: 'stone-1',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'water-1',
			x10y6: 'water-1',
			x11y6: 'forest-2',
			x12y6: 'road-1',
			x13y6: 'terra-1',
			x14y6: 'water-1',
			x0y7: 'water-3',
			x1y7: 'water-1',
			x2y7: 'water-1',
			x3y7: 'bridge-2',
			x4y7: 'water-1',
			x5y7: 'water-1',
			x6y7: 'terra-1',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'water-2',
			x10y7: 'water-1',
			x11y7: 'stone-1',
			x12y7: 'road-1',
			x13y7: 'stone-1',
			x14y7: 'water-1',
			x0y8: 'water-1',
			x1y8: 'water-1',
			x2y8: 'water-1',
			x3y8: 'bridge-2',
			x4y8: 'water-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'water-1',
			x8y8: 'water-3',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x11y8: 'hill-1',
			x12y8: 'road-1',
			x13y8: 'forest-1',
			x14y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'terra-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'water-1',
			x5y9: 'water-2',
			x6y9: 'water-1',
			x7y9: 'water-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x11y9: 'terra-1',
			x12y9: 'road-1',
			x13y9: 'hill-1',
			x14y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'stone-1',
			x2y10: 'road-1',
			x3y10: 'terra-1',
			x4y10: 'water-1',
			x5y10: 'water-1',
			x6y10: 'water-1',
			x7y10: 'water-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'stone-1',
			x12y10: 'road-1',
			x13y10: 'terra-1',
			x14y10: 'water-1',
			x0y11: 'water-1',
			x1y11: 'hill-1',
			x2y11: 'road-1',
			x3y11: 'road-1',
			x4y11: 'bridge-1',
			x5y11: 'bridge-1',
			x6y11: 'road-1',
			x7y11: 'road-1',
			x8y11: 'bridge-1',
			x9y11: 'bridge-1',
			x10y11: 'bridge-1',
			x11y11: 'road-1',
			x12y11: 'road-1',
			x13y11: 'terra-1',
			x14y11: 'water-1',
			x0y12: 'water-1',
			x1y12: 'forest-1',
			x2y12: 'terra-1',
			x3y12: 'forest-1',
			x4y12: 'water-1',
			x5y12: 'water-1',
			x6y12: 'stone-1',
			x7y12: 'terra-1',
			x8y12: 'water-1',
			x9y12: 'water-1',
			x10y12: 'water-1',
			x11y12: 'hill-1',
			x12y12: 'terra-1',
			x13y12: 'forest-1',
			x14y12: 'water-1',
			x0y13: 'water-1',
			x1y13: 'stone-1',
			x2y13: 'forest-2',
			x3y13: 'terra-1',
			x4y13: 'water-1',
			x5y13: 'water-1',
			x6y13: 'water-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'stone-1',
			x12y13: 'forest-2',
			x13y13: 'hill-1',
			x14y13: 'water-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'water-1',
			x4y14: 'water-1',
			x5y14: 'water-3',
			x6y14: 'water-1',
			x7y14: 'water-1',
			x8y14: 'water-1',
			x9y14: 'water-2',
			x10y14: 'water-1',
			x11y14: 'water-1',
			x12y14: 'water-1',
			x13y14: 'water-1',
			x14y14: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_012 = {
		version: 4,
		type: 'skirmish',
		size: {width: 13, height: 13},
		maxPlayers: 4,
		isOpen: false,

		// en
		name: 'Winter Storm',

		// es
		'name-es': 'Tormenta de Invierno',

		// ru
		'name-ru': 'Зимний шторм',

		units: [
			{x: 6, y: 1, type: 'commander', ownerId: 0},
			{x: 1, y: 6, type: 'commander', ownerId: 1},
			{x: 11, y: 6, type: 'commander', ownerId: 2},
			{x: 6, y: 11, type: 'commander', ownerId: 3}
		],
		buildings: [
			{x: 0, y: 4, type: 'farm', state: 'destroyed'},
			{x: 0, y: 8, type: 'farm', state: 'destroyed'},
			{x: 4, y: 0, type: 'farm', state: 'destroyed'},
			{x: 8, y: 0, type: 'farm', state: 'destroyed'},
			{x: 12, y: 4, type: 'farm', state: 'destroyed'},
			{x: 12, y: 8, type: 'farm', state: 'destroyed'},
			{x: 8, y: 12, type: 'farm', state: 'destroyed'},
			{x: 4, y: 12, type: 'farm', state: 'destroyed'},
			{x: 5, y: 5, type: 'farm', state: 'normal'},
			{x: 5, y: 7, type: 'farm', state: 'normal'},
			{x: 7, y: 7, type: 'farm', state: 'normal'},
			{x: 7, y: 5, type: 'farm', state: 'normal'},
			{x: 6, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 1, y: 6, type: 'castle', state: 'normal', ownerId: 1},
			{x: 11, y: 6, type: 'castle', state: 'normal', ownerId: 2},
			{x: 6, y: 11, type: 'castle', state: 'normal', ownerId: 3}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'stone-1',
			x0y2: 'stone-1',
			x0y3: 'hill-1',
			x0y4: 'terra-1',
			x0y5: 'forest-2',
			x1y0: 'stone-1',
			x1y1: 'hill-1',
			x1y2: 'forest-2',
			x1y3: 'forest-2',
			x1y4: 'hill-1',
			x1y5: 'terra-1',
			x2y0: 'stone-1',
			x2y1: 'forest-1',
			x2y2: 'water-1',
			x2y3: 'water-1',
			x2y4: 'water-1',
			x2y5: 'terra-1',
			x3y0: 'hill-1',
			x3y1: 'forest-2',
			x3y2: 'water-1',
			x3y3: 'water-2',
			x3y4: 'water-1',
			x3y5: 'forest-2',
			x4y0: 'terra-1',
			x4y1: 'hill-1',
			x4y2: 'water-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'stone-1',
			x5y0: 'forest-2',
			x5y1: 'terra-1',
			x5y2: 'stone-1',
			x5y3: 'forest-2',
			x5y4: 'hill-1',
			x5y5: 'terra-1',
			x6y0: 'terra-1',
			x6y1: 'terra-1',
			x6y2: 'road-1',
			x6y3: 'road-1',
			x6y4: 'road-1',
			x6y5: 'road-1',
			x7y0: 'forest-1',
			x7y1: 'terra-1',
			x7y2: 'terra-1',
			x7y3: 'forest-1',
			x7y4: 'stone-1',
			x7y5: 'terra-1',
			x8y0: 'terra-1',
			x8y1: 'hill-1',
			x8y2: 'water-1',
			x8y3: 'water-1',
			x8y4: 'water-1',
			x8y5: 'hill-1',
			x9y0: 'hill-1',
			x9y1: 'forest-1',
			x9y2: 'water-1',
			x9y3: 'water-1',
			x9y4: 'water-1',
			x9y5: 'forest-1',
			x10y0: 'stone-1',
			x10y1: 'forest-2',
			x10y2: 'water-1',
			x10y3: 'water-1',
			x10y4: 'water-1',
			x10y5: 'stone-1',
			x11y0: 'stone-1',
			x11y1: 'hill-1',
			x11y2: 'forest-2',
			x11y3: 'forest-1',
			x11y4: 'hill-1',
			x11y5: 'terra-1',
			x12y0: 'stone-1',
			x12y1: 'stone-1',
			x12y2: 'stone-1',
			x12y3: 'hill-1',
			x12y4: 'terra-1',
			x12y5: 'forest-2',
			x0y6: 'hill-1',
			x1y6: 'terra-1',
			x2y6: 'road-1',
			x3y6: 'road-1',
			x4y6: 'road-1',
			x5y6: 'road-1',
			x6y6: 'road-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'road-1',
			x10y6: 'road-1',
			x11y6: 'terra-1',
			x12y6: 'hill-1',
			x0y7: 'forest-1',
			x1y7: 'terra-1',
			x2y7: 'stone-1',
			x3y7: 'forest-1',
			x4y7: 'hill-1',
			x5y7: 'terra-1',
			x6y7: 'road-1',
			x7y7: 'terra-1',
			x8y7: 'stone-1',
			x9y7: 'forest-1',
			x10y7: 'terra-1',
			x11y7: 'terra-1',
			x12y7: 'forest-1',
			x0y8: 'terra-1',
			x1y8: 'hill-1',
			x2y8: 'water-1',
			x3y8: 'water-1',
			x4y8: 'water-1',
			x5y8: 'stone-1',
			x6y8: 'road-1',
			x7y8: 'hill-1',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x11y8: 'hill-1',
			x12y8: 'terra-1',
			x0y9: 'hill-1',
			x1y9: 'forest-2',
			x2y9: 'water-1',
			x3y9: 'water-1',
			x4y9: 'water-1',
			x5y9: 'forest-2',
			x6y9: 'road-1',
			x7y9: 'forest-1',
			x8y9: 'water-1',
			x9y9: 'water-3',
			x10y9: 'water-1',
			x11y9: 'forest-1',
			x12y9: 'hill-1',
			x0y10: 'stone-1',
			x1y10: 'forest-1',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'water-1',
			x5y10: 'terra-1',
			x6y10: 'road-1',
			x7y10: 'stone-1',
			x8y10: 'water-1',
			x9y10: 'water-1',
			x10y10: 'water-1',
			x11y10: 'forest-1',
			x12y10: 'stone-1',
			x0y11: 'stone-1',
			x1y11: 'hill-1',
			x2y11: 'forest-1',
			x3y11: 'forest-2',
			x4y11: 'hill-1',
			x5y11: 'terra-1',
			x6y11: 'terra-1',
			x7y11: 'terra-1',
			x8y11: 'hill-1',
			x9y11: 'forest-2',
			x10y11: 'forest-1',
			x11y11: 'hill-1',
			x12y11: 'stone-1',
			x0y12: 'stone-1',
			x1y12: 'stone-1',
			x2y12: 'stone-1',
			x3y12: 'hill-1',
			x4y12: 'terra-1',
			x5y12: 'forest-1',
			x6y12: 'hill-1',
			x7y12: 'forest-2',
			x8y12: 'terra-1',
			x9y12: 'hill-1',
			x10y12: 'stone-1',
			x11y12: 'stone-1',
			x12y12: 'stone-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '神殿守护',
			objective: '击退这些侵略者，格拉玛必须存活。'
		},
		langRuExtra = {
			name: 'ХРАМОВЫЕ НАЛЕТЧИКИ',
			objective: 'Остановить налетчиков, Король Галамар должен выжить.'
		},
		langEsExtra = {
			name: 'ASALTANTES DEL TEMPLO',
			objective: 'Detén a los asaltantes, El rey Galamar debe sobrevivir.'
		};

	win.APP.maps.mission_001_001 = {
		version: 6,
		type: 'mission',
		isOpen: true,
		openMaps: [
			{jsMapKey: 'mission_001_002', type: 'mission'},
			{jsMapKey: 'skirmish_001_007', type: 'skirmish'}
		],
		size: {width: 12, height: 12},
		maxPlayers: 2,
		unitLimit: 25,
		win: ['noEnemyUnit'], // allCastles, noEnemyUnit
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		help: [
			langEn.helpList[0],
			langEn.helpList[1]
		],
		startBriefing: [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[0]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[1]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[2]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: '勇气神殿'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '帮帮我们！这些骷髅正在抢夺我们保护的水晶!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '长官！我们必须立即阻止他们！!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '士兵们！进攻！击退这些肮脏的生物!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		n1Briefing: [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'More attackers!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '这不像是强盗，而像是敌人的部队!小心点！',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 10, y: 10 }]
				}
			}
		],
		endBriefing: [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '谢谢长官，我们必须立刻把水晶送回去，这样重要的东西不能落入黑暗之手！',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '非常荣幸帮助到您，你觉得谁可能来抢夺这些水晶？',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '我恐怕这是恶魔们的主意，去找智慧神殿的长老吧，她应该了解更多。',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '我应该让我的兄弟渥拉顿赶紧到这里..而我需要去追击那些进攻者！',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Crossroads\' ' + langEn.unlocked //openMaps: [ { jsMapKey: 'mission_001_002', type: 'mission' }, { jsMapKey: 'River', type: 'skirmish' } ],

				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap', // open next battle map
					args: ['mission_001_002', { type: 'mission' }]
				}
			}
		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'help-es': [
			langEs.helpList[0],
			langEs.helpList[1]
		],
		'startBriefing-es': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[0]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[1]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[2]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'El Templo del Coraje'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Ayúdennos! ¡Estamos bajo ataque! ¡Estos esqueletos invasores han robado el Cristal del Coraje que juramos protejer!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Capitán, debemos detener esta amenaza de una vez por todas!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Tropas avancen! ¡Hagan pagar a estos invasores!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		'n1Briefing-es': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Más atacantes!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Éstos no son asaltantes! ¡Parecen mas, tropas enemigas! ¡Tenga cuidado Capitán!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 10, y: 10 }]
				}
			}
		],
		'endBriefing-es': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Le agradesco, su majestad, tiene que ayudarnos a recuperar el Cristal lo mas pronto posible. ¡Una reliquía tan importante no debe caer en las manos equivocadas!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Estoy su servicio. ¿Quién podría estar tras el Cristal?',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Temo que estos criminales puedan estar aliados con un mal mayor. Sería prudente consultarlo con el sumo sacerdote en el Templo de la Sabiduría. Puede que él sepa más acerca de esto.',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Enviare a mi hermano Valador inmediatamente. Tomaré mis tropas y siguiré a los atacantes que escaparon.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Cruce de caminos\' ' + langEs.unlocked //openMaps: [ { jsMapKey: 'mission_001_002', type: 'mission' }, { jsMapKey: 'River', type: 'skirmish' } ],

				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap', // open next battle map
					args: ['mission_001_002', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'help-ru': [
			langRu.helpList[0],
			langRu.helpList[1]
		],
		'startBriefing-ru': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[0]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[1]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[2]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Храм Отваги'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Помогите! Нас атакуют! Эти скелеты-налетчики украли Кристалл Отваги, который мы поклялись защищать!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Капитан, мы должны остановить эту угрозу немедленно!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Вперед, войска! Заставим этих налетчиков заплатить!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		'n1Briefing-ru': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Еще атакующие!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Там не налетчики! Они похожи на вражеские войска! Будьте осторожны, Капитан!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 10, y: 10 }]
				}
			}
		],
		'endBriefing-ru': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Благодарю, ваше Величество, вы должны помочь нам возвратить Кристалл как можно быстрее. Такая важная реликвия не должна попасть в плохие руки!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Я в вашем распоряжении. Кто сможет проследить за Кристаллом?',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Боюсь, эти злоумышленники могут быть связаны с еще большим злом. Было бы умно посоветоваться с Высщим Священником из Храма Мудрости. Он может знать больше об этом.',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Я пошлю брата Валадорна немедленно. Я возьму свои войска и буду преследовать атакующих.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Перекресток\' ' + langRu.unlocked //openMaps: [ { jsMapKey: 'mission_001_002', type: 'mission' }, { jsMapKey: 'River', type: 'skirmish' } ],

				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap', // open next battle map
					args: ['mission_001_002', { type: 'mission' }]
				}
			}
		],

		cases: [
			{
				isDone: false,
				detect: 'noEnemyUnit',
				do: ['appendUnits', 'showBriefing'],
				units: [
					{
						type: 'archer',
						ownerId: 1,
						x: 1,
						y: 1
					},
					{
						type: 'soldier',
						ownerId: 1,
						x: 10,
						y: 10
					}
				],
				briefingName: 'n1Briefing'
			}
		],
		units: [
			{x: 10, y: 3, type: 'skeleton', ownerId: 1},
			{x: 8, y: 3, type: 'skeleton', ownerId: 1},
			{x: 4, y: 9, type: 'galamar', ownerId: 0},
			{x: 3, y: 10, type: 'archer', ownerId: 0},
			{x: 3, y: 8, type: 'soldier', ownerId: 0},
			{x: 3, y: 9, type: 'soldier', ownerId: 0}
		],
		buildings: [
			{x: 1, y: 1, type: 'well', state: 'normal'},
			{x: 4, y: 8, type: 'farm', state: 'normal', ownerId: 0},
			{x: 8, y: 8, type: 'farm', state: 'normal', ownerId: 0},
			{x: 6, y: 1, type: 'farm', state: 'normal', ownerId: 1},
			{x: 8, y: 1, type: 'farm', state: 'normal', ownerId: 1},
			{x: 9, y: 3, type: 'temple', state: 'normal'},
			{x: 10, y: 10, type: 'well', state: 'normal'}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'forest-1',
			x0y2: 'terra-4',
			x0y3: 'stone-1',
			x0y4: 'forest-2',
			x0y5: 'water-1',
			x1y0: 'forest-1',
			x1y1: 'terra-1',
			x1y2: 'stone-1',
			x1y3: 'forest-1',
			x1y4: 'forest-2',
			x1y5: 'water-1',
			x2y0: 'stone-1',
			x2y1: 'terra-1',
			x2y2: 'hill-1',
			x2y3: 'terra-1',
			x2y4: 'forest-1',
			x2y5: 'hill-1',
			x3y0: 'stone-1',
			x3y1: 'stone-1',
			x3y2: 'terra-1',
			x3y3: 'terra-1',
			x3y4: 'stone-1',
			x3y5: 'terra-1',
			x4y0: 'road-1',
			x4y1: 'road-1',
			x4y2: 'road-1',
			x4y3: 'road-1',
			x4y4: 'road-1',
			x4y5: 'stone-1',
			x5y0: 'forest-1',
			x5y1: 'hill-1',
			x5y2: 'forest-1',
			x5y3: 'terra-1',
			x5y4: 'road-1',
			x5y5: 'terra-1',
			x6y0: 'terra-1',
			x6y1: 'terra-1',
			x6y2: 'hill-1',
			x6y3: 'terra-1',
			x6y4: 'road-1',
			x6y5: 'forest-1',
			x7y0: 'hill-1',
			x7y1: 'terra-1',
			x7y2: 'forest-1',
			x7y3: 'forest-2',
			x7y4: 'road-1',
			x7y5: 'stone-1',
			x8y0: 'forest-2',
			x8y1: 'terra-1',
			x8y2: 'forest-2',
			x8y3: 'terra-1',
			x8y4: 'road-1',
			x8y5: 'hill-1',
			x9y0: 'stone-1',
			x9y1: 'terra-1',
			x9y2: 'terra-1',
			x9y3: 'terra-1',
			x9y4: 'road-1',
			x9y5: 'road-1',
			x10y0: 'forest-1',
			x10y1: 'stone-1',
			x10y2: 'terra-1',
			x10y3: 'hill-1',
			x10y4: 'road-1',
			x10y5: 'terra-1',
			x11y0: 'forest-1',
			x11y1: 'forest-2',
			x11y2: 'hill-1',
			x11y3: 'forest-1',
			x11y4: 'road-1',
			x11y5: 'forest-1',
			x0y6: 'water-2',
			x1y6: 'water-1',
			x2y6: 'water-1',
			x3y6: 'water-1',
			x4y6: 'hill-1',
			x5y6: 'stone-1',
			x6y6: 'forest-2',
			x7y6: 'hill-1',
			x8y6: 'terra-1',
			x9y6: 'road-1',
			x10y6: 'forest-2',
			x11y6: 'terra-1',
			x0y7: 'water-1',
			x1y7: 'water-1',
			x2y7: 'water-1',
			x3y7: 'water-1',
			x4y7: 'terra-1',
			x5y7: 'road-1',
			x6y7: 'road-1',
			x7y7: 'road-1',
			x8y7: 'road-1',
			x9y7: 'road-1',
			x10y7: 'stone-1',
			x11y7: 'forest-2',
			x0y8: 'forest-2',
			x1y8: 'terra-1',
			x2y8: 'terra-1',
			x3y8: 'hill-1',
			x4y8: 'terra-1',
			x5y8: 'road-1',
			x6y8: 'terra-1',
			x7y8: 'hill-1',
			x8y8: 'terra-1',
			x9y8: 'terra-1',
			x10y8: 'forest-1',
			x11y8: 'forest-1',
			x0y9: 'road-1',
			x1y9: 'road-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'road-1',
			x6y9: 'terra-1',
			x7y9: 'forest-2',
			x8y9: 'stone-1',
			x9y9: 'terra-1',
			x10y9: 'hill-1',
			x11y9: 'terra-2',
			x0y10: 'hill-1',
			x1y10: 'forest-2',
			x2y10: 'terra-1',
			x3y10: 'terra-1',
			x4y10: 'hill-1',
			x5y10: 'terra-1',
			x6y10: 'forest-1',
			x7y10: 'forest-1',
			x8y10: 'forest-2',
			x9y10: 'terra-1',
			x10y10: 'terra-1',
			x11y10: 'forest-2',
			x0y11: 'stone-1',
			x1y11: 'stone-1',
			x2y11: 'forest-1',
			x3y11: 'forest-2',
			x4y11: 'terra-1',
			x5y11: 'stone-1',
			x6y11: 'hill-1',
			x7y11: 'forest-1',
			x8y11: 'forest-1',
			x9y11: 'stone-1',
			x10y11: 'terra-1',
			x11y11: 'hill-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '拯救',
			objective: '摧毁所有地方部队，占领所有城堡.'
		},
		langRuExtra = {
			name: 'К СПАСЕНИЮ',
			objective: 'Уничтожить все вражеские войска, занять оба замка.'
		},
		langEsExtra = {
			name: 'AL RESCATE',
			objective: 'Destruye a todas las tropas enemigas, ocupa ambos castillos.'
		};

	win.APP.maps.mission_001_002 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_003', type: 'mission'},
			{jsMapKey: 'skirmish_001_008', type: 'skirmish'}
		],
		size: {width: 15, height: 12},
		maxPlayers: 2,
		unitLimit: 25,
		availableStoreUnits: ['soldier', 'archer'],
		money: [
			{playerId: 0, money: 300},
			{playerId: 1, money: 300}
		],
		win: ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		help: [
			langEn.helpList[2],
			langEn.helpList[3]
		],
		startBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: '智慧神殿'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '这怎么可能？智慧神殿正在被攻击！',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '很好，很好..是渥拉顿吗？准备好被我击败吧!',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 12, y: 3 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '报告！我们发现了一小股地方部队正在接近！',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 10 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '智慧水晶！不要让他们跑了！',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '先生，我们必须追上去！',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '让我们先击退对神殿的进攻吧，神殿已经支撑不了多久了。',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '让我们以这个城堡为根基吧',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 3 , y: 5 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		endBriefing: [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '做得好！长官！但是恐怕我们没有时间休息了，生命水晶可能也有危险，我们必须赶紧通知国王格拉玛！',
					img: 'i/face/valadorn.png'
				}
			},			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '好的，先生，我会让军队做好准备的',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Solitude\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_003', { type: 'mission' }]
				}
			}
		],


		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'help-es': [
			langEs.helpList[2],
			langEs.helpList[3]
		],
		'startBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'El Templo de la Sabiduría.'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¿Cómo es esto posible? El Templo de la Sabiduría también está siendo atacado.',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Bien, bien... ¿Valador, supongo? Preparate para ser derrotado.',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 12, y: 3 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Señor, una parte de las fuerzas enemigas está retirandose!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 10 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡El Cristal de la Sabiduría! ¡No los dejen escapar!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Mi señor, debemos seguirlos!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Detengamos el ataque primero. De otra manera los guardias del templo no tendrán oportunidad!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Hagamos nuestra base en ese castillo.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 3 , y: 5 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		'endBriefing-es': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Bien hecho Capitán. Pero no hay tiempo para descansar. El Cristal de la VIda puede estar en peligro. ¡Debemos advertir al rey Galamar!',
					img: 'i/face/valadorn.png'
				}
			},			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Si señor. Prepararé a las tropas.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Soledad\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_003', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'help-ru': [
			langRu.helpList[2],
			langRu.helpList[3]
		],
		'startBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Храм Мудрости'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Как это может быть? Храм Мудрости тоже атакован!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Так, так... Валадорн, предполагаю? Приготовься к поражению!',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 12, y: 3 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Сэр, часть вражеских сил отступает!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 10 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Кристалл Мудрости! Не дайте им уйти!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Сэр, мы должны преследовать их!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Давайте сначала остановим атаку. Охрана храма не даст другого шанса!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 9 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Давайте разобьем лагерь в том замке!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 3 , y: 5 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		'endBriefing-ru': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Хорошая работа, Капитан. Но у нас нет времени на отдых. Кристалл Жизни все еще в опасности. Мы должны предупредить Короля Галамара!',
					img: 'i/face/valadorn.png'
				}
			},			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Да, Сэр. Я приготовлю войска.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Одиночество\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_003', { type: 'mission' }]
				}
			}
		],

		units: [
			{x: 8, y: 9, type: 'valadorn', ownerId: 0},
			{x: 9, y: 10, type: 'archer', ownerId: 0},
			{x: 7, y: 10, type: 'soldier', ownerId: 0},
			{x: 12, y: 3, type: 'demon-lord', ownerId: 1},
			{x: 13, y: 4, type: 'archer', ownerId: 1},
			{x: 6, y: 1, type: 'soldier', ownerId: 1},
			{x: 6, y: 2, type: 'soldier', ownerId: 1}
		],
		buildings: [
			{x: 7, y: 3, type: 'temple', state: 'normal'},
			{x: 3, y: 5, type: 'castle', state: 'normal'},
			{x: 1, y: 4, type: 'farm', state: 'normal'},
			{x: 5, y: 2, type: 'farm', state: 'normal'},
			{x: 5, y: 7, type: 'farm', state: 'destroyed'},
			{x: 7,y: 7,type: 'farm', state: 'normal'},
			{x: 10, y: 2, type: 'farm', state: 'normal'},
			{x: 9, y: 5, type: 'farm', state: 'destroyed'},
			{x: 13, y: 6, type: 'farm', state: 'normal'},
			{x: 12, y: 3, type: 'castle', state: 'normal'}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'hill-1',
			x0y2: 'forest-1',
			x0y3: 'forest-2',
			x0y4: 'stone-1',
			x0y5: 'forest-2',
			x1y0: 'water-1',
			x1y1: 'water-1',
			x1y2: 'forest-2',
			x1y3: 'stone-1',
			x1y4: 'terra-1',
			x1y5: 'hill-1',
			x2y0: 'water-3',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'forest-1',
			x2y4: 'hill-1',
			x2y5: 'terra-1',
			x3y0: 'water-1',
			x3y1: 'water-1',
			x3y2: 'water-1',
			x3y3: 'stone-1',
			x3y4: 'terra-1',
			x3y5: 'terra-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'stone-1',
			x4y3: 'forest-2',
			x4y4: 'terra-1',
			x4y5: 'hill-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'terra-1',
			x5y3: 'stone-1',
			x5y4: 'forest-1',
			x5y5: 'terra-1',
			x6y0: 'bridge-2',
			x6y1: 'bridge-2',
			x6y2: 'road-1',
			x6y3: 'road-1',
			x6y4: 'road-1',
			x6y5: 'stone-1',
			x7y0: 'water-1',
			x7y1: 'water-1',
			x7y2: 'forest-1',
			x7y3: 'terra-1',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'water-3',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'stone-1',
			x8y4: 'road-1',
			x8y5: 'forest-2',
			x9y0: 'water-1',
			x9y1: 'water-1',
			x9y2: 'water-1',
			x9y3: 'hill-1',
			x9y4: 'road-1',
			x9y5: 'terra-1',
			x0y6: 'road-1',
			x1y6: 'road-1',
			x2y6: 'road-1',
			x3y6: 'road-1',
			x4y6: 'road-1',
			x5y6: 'road-1',
			x6y6: 'road-1',
			x7y6: 'road-1',
			x8y6: 'hill-1',
			x9y6: 'stone-1',
			x0y7: 'forest-2',
			x1y7: 'forest-1',
			x2y7: 'hill-1',
			x3y7: 'road-1',
			x4y7: 'hill-1',
			x5y7: 'terra-1',
			x6y7: 'forest-1',
			x7y7: 'terra-1',
			x8y7: 'hill-1',
			x9y7: 'terra-1',
			x0y8: 'hill-1',
			x1y8: 'stone-1',
			x2y8: 'terra-1',
			x3y8: 'road-1',
			x4y8: 'road-1',
			x5y8: 'road-1',
			x6y8: 'hill-1',
			x7y8: 'forest-2',
			x8y8: 'terra-1',
			x9y8: 'stone-1',
			x0y9: 'stone-1',
			x1y9: 'forest-2',
			x2y9: 'hill-1',
			x3y9: 'terra-1',
			x4y9: 'forest-1',
			x5y9: 'road-1',
			x6y9: 'road-1',
			x7y9: 'road-1',
			x8y9: 'road-1',
			x9y9: 'hill-1',
			x0y10: 'forest-2',
			x1y10: 'forest-1',
			x2y10: 'forest-1',
			x3y10: 'stone-1',
			x4y10: 'hill-1',
			x5y10: 'terra-1',
			x6y10: 'hill-1',
			x7y10: 'terra-1',
			x8y10: 'road-1',
			x9y10: 'terra-1',
			x0y11: 'terra-4',
			x1y11: 'forest-2',
			x2y11: 'stone-1',
			x3y11: 'stone-1',
			x4y11: 'forest-2',
			x5y11: 'stone-1',
			x6y11: 'forest-2',
			x7y11: 'hill-1',
			x8y11: 'road-1',
			x9y11: 'forest-1',
			x10y0: 'water-1',
			x10y1: 'water-1',
			x10y2: 'terra-1',
			x10y3: 'forest-1',
			x10y4: 'road-1',
			x10y5: 'road-1',
			x10y6: 'forest-2',
			x10y7: 'water-1',
			x10y8: 'water-1',
			x10y9: 'water-1',
			x10y10: 'hill-1',
			x10y11: 'water-1',
			x11y0: 'water-1',
			x11y1: 'forest-1',
			x11y2: 'forest-2',
			x11y3: 'stone-1',
			x11y4: 'hill-1',
			x11y5: 'road-1',
			x11y6: 'forest-1',
			x11y7: 'water-1',
			x11y8: 'water-1',
			x11y9: 'water-1',
			x11y10: 'water-1',
			x11y11: 'water-1',
			x12y0: 'water-1',
			x12y1: 'forest-2',
			x12y2: 'stone-1',
			x12y3: 'terra-1',
			x12y4: 'terra-1',
			x12y5: 'road-1',
			x12y6: 'hill-1',
			x12y7: 'terra-1',
			x12y8: 'water-1',
			x12y9: 'water-1',
			x12y10: 'water-1',
			x12y11: 'water-1',
			x13y0: 'water-1',
			x13y1: 'terra-1',
			x13y2: 'hill-1',
			x13y3: 'terra-1',
			x13y4: 'stone-1',
			x13y5: 'road-1',
			x13y6: 'terra-1',
			x13y7: 'forest-1',
			x13y8: 'water-1',
			x13y9: 'water-1',
			x13y10: 'water-1',
			x13y11: 'water-1',
			x14y0: 'water-1',
			x14y1: 'forest-2',
			x14y2: 'forest-2',
			x14y3: 'terra-2',
			x14y4: 'hill-1',
			x14y5: 'road-1',
			x14y6: 'forest-1',
			x14y7: 'stone-1',
			x14y8: 'forest-2',
			x14y9: 'hill-1',
			x14y10: 'water-1',
			x14y11: 'water-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '阴影之路',
			objective: '小心翼翼地穿过森林，击败所有的单位，格拉玛必须存活。'
		},
		langRuExtra = {
			name: 'ПУТЬ ТЕНЕЙ',
			objective: 'Проследовать через лес. Уничтожить все сопротивление. Король Галамар должен выжить.'
		},
		langEsExtra = {
			name: 'CAMINO DE SOMBRAS',
			objective: 'Pasa através del bosque con seguridad. Destruye toda resistencia. El rey Galamar debe sobrevivir.'
		};

	win.APP.maps.mission_001_003 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_004', type: 'mission' },
			{jsMapKey: 'skirmish_001_009', type: 'skirmish'}
		],
		size: {width: 10, height: 17},
		maxPlayers: 2,
		unitLimit: 25,
		win: ['noEnemyUnit'], // allCastles, noEnemyUnit
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		help: [
			langEn.helpList[4]
		],
		startBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Forest of Mists'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '尊敬的长官，这个森林是魔法生物的巢穴，在夜晚通过并不安全啊。',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8 , y: 14 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '长官，您已经收到渥拉顿的消息了——我们不能停下！必须到达生命神殿！',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '明白了。士兵们！打起精神，保护好国王！',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		n1Briefing: [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '更多的狼..看上去情况不妙。',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '天啊！这是什么生物！',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '您好，尊敬的先生。我们是水元素，是来帮助你们的。'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 4, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '非常感谢你们的帮助，这份恩情我们绝不会忘记。',
					img: 'i/face/galamar.png'
				}
			}
		],
		endBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Peak Island\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_004', { type: 'mission' }]
				}
			}
		],


		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'help-es': [
			langEs.helpList[4]
		],
		'startBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Bosque de Niebla.'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Su Majestad, este bosque es conocido por ser el hogar de espíritus, Elementales, y otras mágicas criaturas. No es seguro viajar de noche.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8 , y: 14 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Capitán, escuchó al mensajero de Valador - ¡Debemos avanzar! Nada puede detenernos para llegar a El Templo de la Vida.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Entendido. ¡Tropas, manténganse alerta y protejan al Rey Galamar!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}
		],
		'n1Briefing-es': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Más lobos! Su Majestad ésto no se ve bien...',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Por el creador! ¡¿Qué son esas cosas?!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Saludos, hombres de Thorin! Nosotros, Los Elementales, hemos oido acerca de su búsqueda para proteger nuestras tierras de la maldad y les ofrecemos nuestra alianza a su Rey.'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 4, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Aceptamos su oferta alegremente. Su lealtad al reino no será olvidada.',
					img: 'i/face/galamar.png'
				}
			}
		],
		'endBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Cúspide de la Isla\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_004', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'help-ru': [
			langRu.helpList[4]
		],
		'startBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Лес Мистов'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше величество, лес известен как обитель духов, элементалов, и других магических созданий. Путешествовать по нему ночью небезопасно.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8 , y: 14 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Капитан, вы слышали посланника от Валадорна - мы должны поднажать! Ничего не должно стоять между нами и Храмом Жизни.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Понял. Войска, держите глаза открытыми и защитите Короля Галамара!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				},
				onHide: {
					fn: 'autoShowHelpButton'
				}
			}

		],
		'n1Briefing-ru': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Еще волки! Ваше величество, это выглядит плохо...',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 1, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Именем Создателя! Что это такое!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Здраствуйте, люди Торина! Мы, Элементалы, слышали  о вашем задании по защите наших земель от зла, и предлагаем нашу верность нашему Королю.'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 4, y: 8}]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Мы рады принять ваше предложение. Ваша преданность королевству не будет забыта.',
					img: 'i/face/galamar.png'
				}
			}
		],
		'endBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Остров пик\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_004', { type: 'mission' }]
				}
			}
		],

		cases: [
			{
				isDone: false,
				detect: 'noEnemyUnit',
				do: ['appendUnits', 'showBriefing'],
				units: [
					{
						type: 'elemental',
						ownerId: 0,
						x: 3,
						y: 8
					},
					{
						type: 'elemental',
						ownerId: 0,
						x: 4,
						y: 7
					},
					{
						type: 'elemental',
						ownerId: 0,
						x: 5,
						y: 8
					},

					{
						type: 'wisp',
						ownerId: 1,
						x: 2,
						y: 1
					},

					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 1,
						y: 2
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 3,
						y: 2
					},

					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 0,
						y: 8
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 1,
						y: 7
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 8,
						y: 6
					}

				],
				briefingName: 'n1Briefing'
			}
		],

		units: [
			{x: 7, y: 14, type: 'soldier', ownerId: 0},
			{x: 8, y: 14, type: 'galamar', ownerId: 0},
			{x: 7, y: 15, type: 'archer', ownerId: 0},
			{x: 8, y: 15, type: 'sorceress', ownerId: 0},
			{x: 6, y: 13, type: 'dire-wolf', ownerId: 1},
			{x: 8, y: 11, type: 'dire-wolf', ownerId: 1},
			{x: 8, y: 5, type: 'dire-wolf', ownerId: 1}
		],
		buildings: [
			{x: 4, y: 8, type: 'well', state: 'normal'}
		],
		terrain: {
			x0y0: 'forest-1',
			x0y1: 'forest-1',
			x0y2: 'stone-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'forest-2',
			x1y0: 'stone-1',
			x1y1: 'forest-1',
			x1y2: 'hill-1',
			x1y3: 'terra-1',
			x1y4: 'terra-1',
			x1y5: 'terra-1',
			x2y0: 'road-1',
			x2y1: 'road-1',
			x2y2: 'road-1',
			x2y3: 'road-1',
			x2y4: 'road-1',
			x2y5: 'forest-1',
			x3y0: 'terra-1',
			x3y1: 'forest-2',
			x3y2: 'hill-1',
			x3y3: 'forest-2',
			x3y4: 'road-1',
			x3y5: 'forest-2',
			x4y0: 'stone-1',
			x4y1: 'forest-1',
			x4y2: 'forest-1',
			x4y3: 'stone-1',
			x4y4: 'road-1',
			x4y5: 'terra-1',
			x5y0: 'water-1',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'hill-1',
			x5y4: 'road-1',
			x5y5: 'stone-1',
			x6y0: 'water-1',
			x6y1: 'water-2',
			x6y2: 'water-1',
			x6y3: 'forest-1',
			x6y4: 'road-1',
			x6y5: 'forest-1',
			x7y0: 'water-3',
			x7y1: 'water-1',
			x7y2: 'water-1',
			x7y3: 'forest-2',
			x7y4: 'road-1',
			x7y5: 'road-1',
			x8y0: 'water-1',
			x8y1: 'water-1',
			x8y2: 'water-1',
			x8y3: 'forest-1',
			x8y4: 'terra-1',
			x8y5: 'forest-2',
			x9y0: 'water-1',
			x9y1: 'water-3',
			x9y2: 'water-1',
			x9y3: 'water-1',
			x9y4: 'water-1',
			x9y5: 'water-1',
			x0y6: 'forest-1',
			x1y6: 'hill-1',
			x2y6: 'water-1',
			x3y6: 'water-1',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'road-1',
			x8y6: 'hill-1',
			x9y6: 'forest-1',
			x0y7: 'hill-1',
			x1y7: 'terra-1',
			x2y7: 'water-1',
			x3y7: 'water-1',
			x4y7: 'water-1',
			x5y7: 'water-1',
			x6y7: 'water-1',
			x7y7: 'bridge-2',
			x8y7: 'water-1',
			x9y7: 'water-1',
			x0y8: 'forest-1',
			x1y8: 'terra-1',
			x2y8: 'water-1',
			x3y8: 'water-1',
			x4y8: 'terra-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'bridge-2',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x0y9: 'water-1',
			x1y9: 'bridge-2',
			x2y9: 'water-1',
			x3y9: 'water-1',
			x4y9: 'bridge-2',
			x5y9: 'water-1',
			x6y9: 'water-1',
			x7y9: 'road-1',
			x8y9: 'forest-1',
			x9y9: 'water-1',
			x0y10: 'water-1',
			x1y10: 'bridge-2',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'bridge-2',
			x5y10: 'water-1',
			x6y10: 'water-1',
			x7y10: 'road-1',
			x8y10: 'stone-1',
			x9y10: 'stone-1',
			x0y11: 'forest-2',
			x1y11: 'hill-1',
			x2y11: 'forest-2',
			x3y11: 'terra-1',
			x4y11: 'road-1',
			x5y11: 'hill-1',
			x6y11: 'forest-1',
			x7y11: 'road-1',
			x8y11: 'forest-1',
			x9y11: 'stone-1',
			x0y12: 'forest-2',
			x1y12: 'forest-1',
			x2y12: 'terra-1',
			x3y12: 'hill-1',
			x4y12: 'road-1',
			x5y12: 'road-1',
			x6y12: 'road-1',
			x7y12: 'road-1',
			x8y12: 'road-1',
			x9y12: 'road-1',
			x0y13: 'forest-1',
			x1y13: 'stone-1',
			x2y13: 'hill-1',
			x3y13: 'terra-1',
			x4y13: 'forest-2',
			x5y13: 'forest-1',
			x6y13: 'stone-1',
			x7y13: 'road-1',
			x8y13: 'hill-1',
			x9y13: 'forest-2',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'forest-1',
			x4y14: 'stone-1',
			x5y14: 'forest-1',
			x6y14: 'forest-1',
			x7y14: 'road-1',
			x8y14: 'road-1',
			x9y14: 'forest-1',
			x0y15: 'water-2',
			x1y15: 'water-1',
			x2y15: 'water-1',
			x3y15: 'forest-1',
			x4y15: 'hill-1',
			x5y15: 'forest-1',
			x6y15: 'hill-1',
			x7y15: 'terra-1',
			x8y15: 'road-1',
			x9y15: 'forest-1',
			x0y16: 'water-1',
			x1y16: 'water-1',
			x2y16: 'forest-1',
			x3y16: 'forest-2',
			x4y16: 'water-1',
			x5y16: 'water-1',
			x6y16: 'forest-1',
			x7y16: 'forest-1',
			x8y16: 'road-1',
			x9y16: 'hill-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: 'REINFORCEMENTS',
			objective: 'Protect the Temple of Life - destroy all enemy units, occupy the enemy castle!'
		},
		langRuExtra = {
			name: 'ПОДКРЕПЛЕНИЕ',
			objective: 'Защитить Храм Жизни - уничтожить все вражеские единицы, занять вражеский замок!'
		},
		langEsExtra = {
			name: 'REFUERZOS',
			objective: 'Proteje el Templo de la Vida - ¡Destruye a todas las unidades enemigas, ocupa el castillo enemigo! '
		};

	win.APP.maps.mission_001_004 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_005', type: 'mission'},
			{jsMapKey: 'skirmish_001_010', type: 'skirmish'}
		],
		size: {width: 16, height: 16},
		maxPlayers: 2,
		unitLimit: 25,
		availableStoreUnits: ['soldier', 'archer', 'elemental', 'sorceress', 'wisp', 'dire-wolf', 'golem', 'catapult'],
		money: [
			{playerId: 0, money: 400},
			{playerId: 1, money: 800}
		],
		win: ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		startBriefing: [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[3]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: '生命神殿'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '感谢上帝！你到了！请帮助我们保护水晶！',
					img: 'i/face/tamplier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '只有严密防守才能保护住水晶，我们不能放松警惕.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '长官！我们的探子发现附近有敌方的部队!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '他们正在破坏我们的建筑来切断我们的资金补给！必须阻止他们！',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '长官，我们必须保护水晶，准备战斗吧!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				}
			}
		],
		endBriefing: [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '感谢上帝，我们保护住了水晶。',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '做得好长官！欢呼胜利吧！',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Waterways\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_005', { type: 'mission' }]
				}
			}
		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'startBriefing-es': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[3]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'El Templo de la Vida'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Su Majestad, gracias a dios está aquí! ¡Por favor ayúdenos a proteger el Cristal!',
					img: 'i/face/tamplier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Solamente en las fortalezas de Thorin el Cristal estará a salvo. Debemos llevarlo allí.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Su Majestad, nuestros exploradores reportan tropas enemigas cercanas! ',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Están destruyendo nuestros edificios para mermar nuestro suministro de oro! ¡Deben ser detenidos!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Capitán, tenemos que salvar el Cristal, preparen las tropas para la batalla!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				}
			}
		],
		'endBriefing-es': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Su Majestad, hemos detenido el ataque.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Bien hecho, Capitán! ¡Prepare las tropas marcharemos hacia Thorin!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Vía Fluvial\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_005', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'startBriefing-ru': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[3]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Храм Жизни'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше Величество, благодаря Создателю вы здесь! Пожалуйста, помогите нам защитить Кристалл!',
					img: 'i/face/tamplier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Только в хорошо защищенных крепостях Торина Кристалл будет в безопасности. Мы должны принести его туда.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше Величество, наши разведчики докладывают, что вражеские войска неподалеку!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Они разрушают наши здания, чтобы нанести ущерб нашим поставкам золота! Она должны быть остановлены!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Капитан, мы должны спасти Кристалл, готовьте войска к битве!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				}
			}
		],
		'endBriefing-ru': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше величество, мы остановили атаку.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Хорошая работа, Капитан! Приготовьте войска к маршу в Торин!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Водоемы\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_005', { type: 'mission' }]
				}
			}
		],

		units: [
			{x: 7, y: 1, type: 'galamar', ownerId: 0},
			{x: 3, y: 3, type: 'sorceress', ownerId: 0},
			{x: 7, y: 5, type: 'elemental', ownerId: 0},
			{x: 5, y: 4, type: 'soldier', ownerId: 0},
			{x: 11, y: 3, type: 'archer', ownerId: 0},
			{x: 12, y: 3, type: 'soldier', ownerId: 0},
			{x: 13, y: 6, type: 'soldier', ownerId: 1},
			{x: 11, y: 7, type: 'dire-wolf', ownerId: 1},
			{x: 13, y: 9, type: 'demon-lord', ownerId: 1},
			{x: 12, y: 9, type: 'catapult', ownerId: 1},
			{x: 5, y: 11, type: 'golem', ownerId: 1},
			{x: 6, y: 10, type: 'catapult', ownerId: 1},
			{x: 9, y: 11, type: 'soldier', ownerId: 1},
			{x: 14, y: 5, type: 'elemental', ownerId: 1}
		],
		buildings: [
			{x: 7, y: 1, type: 'castle', state: 'normal', ownerId: 0},
			{x: 3, y: 3, type: 'temple', state: 'normal'},
			{x: 7, y: 5, type: 'farm', state: 'normal', ownerId: 0},
			{x: 1, y: 8, type: 'farm', state: 'normal', ownerId: 0},
			{x: 5, y: 11, type: 'farm', state: 'normal', ownerId: 1},
			{x: 4, y: 9, type: 'farm', state: 'destroyed'},
			{x: 9, y: 1, type: 'farm', state: 'normal', ownerId: 0},
			{x: 12, y: 3, type: 'farm', state: 'normal', ownerId: 0},
			{x: 13, y: 6, type: 'farm', state: 'normal', ownerId: 1},
			{x: 13, y: 9, type: 'castle', state: 'normal', ownerId: 1},
			{x: 9, y: 11, type: 'farm', state: 'normal', ownerId: 1},
			{x: 14, y: 11, type: 'farm', state: 'normal', ownerId: 1},
			{x: 12, y: 13, type: 'farm', state: 'normal', ownerId: 1},
			{x: 5, y: 4, type: 'farm', state: 'normal', ownerId: 0}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'stone-1',
			x0y2: 'forest-1',
			x0y3: 'stone-1',
			x0y4: 'hill-1',
			x0y5: 'road-1',
			x1y0: 'stone-1',
			x1y1: 'forest-2',
			x1y2: 'hill-1',
			x1y3: 'forest-1',
			x1y4: 'forest-1',
			x1y5: 'road-1',
			x2y0: 'stone-1',
			x2y1: 'forest-2',
			x2y2: 'forest-1',
			x2y3: 'terra-1',
			x2y4: 'hill-1',
			x2y5: 'road-1',
			x3y0: 'forest-1',
			x3y1: 'stone-1',
			x3y2: 'terra-1',
			x3y3: 'terra-1',
			x3y4: 'road-1',
			x3y5: 'road-1',
			x4y0: 'stone-1',
			x4y1: 'forest-2',
			x4y2: 'stone-1',
			x4y3: 'terra-1',
			x4y4: 'hill-1',
			x4y5: 'road-1',
			x5y0: 'forest-1',
			x5y1: 'hill-1',
			x5y2: 'forest-1',
			x5y3: 'stone-1',
			x5y4: 'terra-1',
			x5y5: 'road-1',
			x6y0: 'forest-1',
			x6y1: 'terra-1',
			x6y2: 'terra-1',
			x6y3: 'stone-1',
			x6y4: 'forest-1',
			x6y5: 'forest-2',
			x7y0: 'stone-1',
			x7y1: 'terra-1',
			x7y2: 'road-1',
			x7y3: 'forest-1',
			x7y4: 'forest-2',
			x7y5: 'terra-1',
			x8y0: 'road-1',
			x8y1: 'road-1',
			x8y2: 'road-1',
			x8y3: 'road-1',
			x8y4: 'road-1',
			x8y5: 'road-1',
			x9y0: 'forest-2',
			x9y1: 'terra-1',
			x9y2: 'road-1',
			x9y3: 'forest-2',
			x9y4: 'terra-1',
			x9y5: 'hill-1',
			x10y0: 'stone-1',
			x10y1: 'forest-2',
			x10y2: 'road-1',
			x10y3: 'stone-1',
			x10y4: 'forest-1',
			x10y5: 'forest-1',
			x11y0: 'forest-1',
			x11y1: 'hill-1',
			x11y2: 'road-1',
			x11y3: 'hill-1',
			x11y4: 'forest-1',
			x11y5: 'stone-1',
			x12y0: 'forest-1',
			x12y1: 'hill-1',
			x12y2: 'road-1',
			x12y3: 'terra-1',
			x12y4: 'water-1',
			x12y5: 'water-1',
			x13y0: 'forest-1',
			x13y1: 'road-1',
			x13y2: 'road-1',
			x13y3: 'stone-1',
			x13y4: 'water-1',
			x13y5: 'water-1',
			x14y0: 'stone-1',
			x14y1: 'road-1',
			x14y2: 'hill-1',
			x14y3: 'water-1',
			x14y4: 'water-1',
			x14y5: 'water-1',
			x0y6: 'stone-1',
			x1y6: 'stone-1',
			x2y6: 'forest-1',
			x3y6: 'road-1',
			x4y6: 'forest-2',
			x5y6: 'road-1',
			x6y6: 'road-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'stone-1',
			x10y6: 'terra-1',
			x11y6: 'forest-1',
			x12y6: 'stone-1',
			x13y6: 'terra-1',
			x14y6: 'forest-1',
			x0y7: 'forest-1',
			x1y7: 'terra-1',
			x2y7: 'hill-1',
			x3y7: 'road-1',
			x4y7: 'forest-1',
			x5y7: 'forest-2',
			x6y7: 'hill-1',
			x7y7: 'stone-1',
			x8y7: 'water-1',
			x9y7: 'water-1',
			x10y7: 'forest-2',
			x11y7: 'forest-1',
			x12y7: 'forest-2',
			x13y7: 'hill-1',
			x14y7: 'forest-1',
			x0y8: 'stone-1',
			x1y8: 'terra-1',
			x2y8: 'terra-1',
			x3y8: 'road-1',
			x4y8: 'stone-1',
			x5y8: 'stone-1',
			x6y8: 'forest-2',
			x7y8: 'water-1',
			x8y8: 'water-1',
			x9y8: 'water-1',
			x10y8: 'stone-1',
			x11y8: 'terra-1',
			x12y8: 'terra-1',
			x13y8: 'terra-1',
			x14y8: 'stone-1',
			x0y9: 'hill-1',
			x1y9: 'stone-1',
			x2y9: 'forest-1',
			x3y9: 'road-1',
			x4y9: 'terra-1',
			x5y9: 'terra-1',
			x6y9: 'stone-1',
			x7y9: 'water-1',
			x8y9: 'water-1',
			x9y9: 'water-1',
			x10y9: 'forest-2',
			x11y9: 'terra-1',
			x12y9: 'hill-1',
			x13y9: 'terra-1',
			x14y9: 'terra-1',
			x0y10: 'forest-1',
			x1y10: 'forest-2',
			x2y10: 'terra-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'bridge-1',
			x8y10: 'bridge-1',
			x9y10: 'road-1',
			x10y10: 'road-1',
			x11y10: 'road-1',
			x12y10: 'road-1',
			x13y10: 'road-1',
			x14y10: 'road-1',
			x0y11: 'stone-1',
			x1y11: 'forest-2',
			x2y11: 'hill-1',
			x3y11: 'hill-1',
			x4y11: 'terra-1',
			x5y11: 'terra-1',
			x6y11: 'hill-1',
			x7y11: 'water-1',
			x8y11: 'water-1',
			x9y11: 'terra-1',
			x10y11: 'terra-1',
			x11y11: 'hill-1',
			x12y11: 'forest-1',
			x13y11: 'road-1',
			x14y11: 'terra-1',
			x0y12: 'forest-1',
			x1y12: 'forest-1',
			x2y12: 'forest-1',
			x3y12: 'stone-1',
			x4y12: 'forest-1',
			x5y12: 'terra-1',
			x6y12: 'forest-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'forest-1',
			x10y12: 'stone-1',
			x11y12: 'terra-1',
			x12y12: 'terra-1',
			x13y12: 'road-1',
			x14y12: 'forest-2',
			x15y0: 'forest-1',
			x15y1: 'road-1',
			x15y2: 'stone-1',
			x15y3: 'water-1',
			x15y4: 'water-2',
			x15y5: 'water-1',
			x15y6: 'water-1',
			x15y7: 'forest-1',
			x15y8: 'road-1',
			x15y9: 'road-1',
			x15y10: 'road-1',
			x15y11: 'stone-1',
			x15y12: 'forest-2',
			x0y13: 'water-1',
			x1y13: 'water-1',
			x2y13: 'water-1',
			x3y13: 'stone-1',
			x4y13: 'hill-1',
			x5y13: 'forest-1',
			x6y13: 'water-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'stone-1',
			x10y13: 'terra-1',
			x11y13: 'terra-1',
			x12y13: 'terra-1',
			x13y13: 'road-1',
			x14y13: 'road-1',
			x15y13: 'forest-1',
			x0y14: 'water-3',
			x1y14: 'water-1',
			x2y14: 'water-1',
			x3y14: 'forest-2',
			x4y14: 'stone-1',
			x5y14: 'water-1',
			x6y14: 'water-1',
			x7y14: 'water-1',
			x8y14: 'water-1',
			x9y14: 'hill-1',
			x10y14: 'forest-2',
			x11y14: 'hill-1',
			x12y14: 'stone-1',
			x13y14: 'terra-1',
			x14y14: 'road-1',
			x15y14: 'forest-1',
			x0y15: 'water-1',
			x1y15: 'water-2',
			x2y15: 'water-1',
			x3y15: 'water-1',
			x4y15: 'water-1',
			x5y15: 'water-1',
			x6y15: 'water-3',
			x7y15: 'water-1',
			x8y15: 'hill-1',
			x9y15: 'forest-1',
			x10y15: 'forest-1',
			x11y15: 'forest-1',
			x12y15: 'forest-2',
			x13y15: 'hill-1',
			x14y15: 'road-1',
			x15y15: 'forest-2'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '护航',
			objective: '保护水晶成功运送，格拉玛必须生存。'
		},
		langRuExtra = {
			name: 'СЛУЖБА ЭСКОРТА',
			objective: 'Доставить Кристалл на юг в город Торин. Король Галамар должен выжить.'
		},
		langEsExtra = {
			name: 'EL DEBER DE ESCOLTA',
			objective: 'Entrega el Cristal al sur de la ciudad de Thorin. El Rey Galamar debe sobrevivir.'
		};

	win.APP.maps.mission_001_005 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_006', type: 'mission'},
			{jsMapKey: 'skirmish_001_011', type: 'skirmish'}
		],
		size: {width: 20, height: 12},
		maxPlayers: 2,
		unitLimit: 25,
		win: ['noEnemyUnit', 'allUnorderedCasesIsDone'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		defeat: ['commanderIsDead', 'crystalIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		startBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Pathway to Thorin'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '上帝啊，我并不喜欢这个森林，警戒！',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 11 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '非常好，长官，让我们一路小心..',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				}
			}
		],
		n1Briefing: [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '必须不计一切代价保护好水晶！',
					img: 'i/face/soldier.png'
				}
			}

		],
		endBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Liberty Port\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_006', { type: 'mission' }]
				}
			}
		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'startBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Camino hacia Thorin'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Su Majestad, No me gusta como luce este bosque, ¡debemos ser cuidadosos!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 11 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Muy bien, Capitán. Seguiremos este camino y nos mantendremos en guardia.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				}
			}
		],
		'n1Briefing-es': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Emboscada! ¡Protejan el Cristal a cualquier costo!',
					img: 'i/face/soldier.png'
				}
			}

		],
		'endBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Puerto de la Libertad\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_006', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'startBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Путь в Торин'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше Высочество, мне не нравится, как выглядит этот лес, мы должны быть осторожны!',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 11 , y: 1 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Очень хорошо, Капитан. Давайте проследуем этим путем и останемся под защитой нашей охраны.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				}
			}
		],
		'n1Briefing-ru': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Засада! Защитите Кристалл любой ценой!',
					img: 'i/face/soldier.png'
				}
			}

		],
		'endBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Порт свободы\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_006', { type: 'mission' }]
				}
			}
		],

		unorderedCases: [
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits', 'showBriefing'],
				place: [
					{
						x1: 0,
						y1: 0,
						x2: 8,
						y2: 6
					}
				],
				units: [
					{
						type: 'skeleton',
						ownerId: 1,
						x: 4,
						y: 1
					},
					{
						type: 'archer',
						ownerId: 1,
						x: 5,
						y: 2
					},
					{
						type: 'skeleton',
						ownerId: 1,
						x: 4,
						y: 3
					}
				],
				briefingName: 'n1Briefing'
			},

			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 0,
						y1: 7,
						x2: 7,
						y2: 11
					}
				],
				units: [
					{
						type: 'archer',
						ownerId: 1,
						x: 5,
						y: 10
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 7,
						y: 9
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 7,
						y: 8
					}
				]
			},
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 8,
						y1: 7,
						x2: 15,
						y2: 11
					}
				],
				units: [
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 11,
						y: 5
					},
					{
						type: 'golem',
						ownerId: 1,
						x: 12,
						y: 6
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 12,
						y: 7
					}
				]
			},
			{
				isDone: false,
				detect: 'unitOnPlace',
				do: ['appendUnits'],
				place: [
					{
						x1: 16,
						y1: 4,
						x2: 19,
						y2: 11
					}
				],
				units: [
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 16,
						y: 10
					},
					{
						type: 'golem',
						ownerId: 1,
						x: 17,
						y: 10
					},
					{
						type: 'dire-wolf',
						ownerId: 1,
						x: 18,
						y: 10
					},
					{
						type: 'archer',
						ownerId: 1,
						x: 18,
						y: 9
					}
				]
			}
		],

		units: [
			{x: 11, y: 0, type: 'crystal', ownerId: 0},
			{x: 11, y: 1, type: 'galamar', ownerId: 0},
			{x: 12, y: 0, type: 'archer', ownerId: 0},
			{x: 12, y: 1, type: 'sorceress', ownerId: 0},
			{x: 11, y: 2, type: 'soldier', ownerId: 0},
			{x: 10, y: 1, type: 'dire-wolf', ownerId: 0}
		],
		buildings: [
			{x: 2, y: 1, type: 'temple', state: 'normal'},
			{x: 7, y: 5, type: 'temple', state: 'normal'},
			{x: 6, y: 10, type: 'well', state: 'normal'},
			{x: 4, y: 4, type: 'well', state: 'normal'},
			{x: 12, y: 5, type: 'well', state: 'normal'},
			{x: 18, y: 8, type: 'well', state: 'normal'},
			{x: 12, y: 8, type: 'temple', state: 'normal'}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'stone-1',
			x0y2: 'stone-1',
			x0y3: 'forest-2',
			x0y4: 'stone-1',
			x0y5: 'forest-1',
			x1y0: 'stone-1',
			x1y1: 'stone-1',
			x1y2: 'forest-1',
			x1y3: 'hill-1',
			x1y4: 'terra-1',
			x1y5: 'terra-1',
			x2y0: 'stone-1',
			x2y1: 'terra-1',
			x2y2: 'road-1',
			x2y3: 'road-1',
			x2y4: 'road-1',
			x2y5: 'road-1',
			x3y0: 'forest-1',
			x3y1: 'terra-1',
			x3y2: 'road-1',
			x3y3: 'terra-1',
			x3y4: 'hill-1',
			x3y5: 'forest-1',
			x4y0: 'stone-1',
			x4y1: 'hill-1',
			x4y2: 'road-1',
			x4y3: 'terra-1',
			x4y4: 'terra-1',
			x4y5: 'stone-1',
			x5y0: 'forest-2',
			x5y1: 'terra-1',
			x5y2: 'road-1',
			x5y3: 'forest-1',
			x5y4: 'forest-1',
			x5y5: 'stone-1',
			x6y0: 'stone-1',
			x6y1: 'forest-2',
			x6y2: 'road-1',
			x6y3: 'road-1',
			x6y4: 'stone-1',
			x6y5: 'terra-1',
			x7y0: 'stone-1',
			x7y1: 'forest-1',
			x7y2: 'hill-1',
			x7y3: 'road-1',
			x7y4: 'stone-1',
			x7y5: 'terra-1',
			x8y0: 'forest-1',
			x8y1: 'stone-1',
			x8y2: 'forest-1',
			x8y3: 'road-1',
			x8y4: 'stone-1',
			x8y5: 'hill-1',
			x9y0: 'terra-1',
			x9y1: 'forest-1',
			x9y2: 'forest-2',
			x9y3: 'road-1',
			x9y4: 'forest-2',
			x9y5: 'stone-1',
			x0y6: 'stone-1',
			x1y6: 'hill-1',
			x2y6: 'road-1',
			x3y6: 'forest-1',
			x4y6: 'stone-1',
			x5y6: 'stone-1',
			x6y6: 'hill-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'road-1',
			x0y7: 'forest-2',
			x1y7: 'terra-1',
			x2y7: 'road-1',
			x3y7: 'forest-2',
			x4y7: 'forest-1',
			x5y7: 'forest-2',
			x6y7: 'road-1',
			x7y7: 'road-1',
			x8y7: 'terra-1',
			x9y7: 'hill-1',
			x0y8: 'forest-1',
			x1y8: 'forest-2',
			x2y8: 'road-1',
			x3y8: 'terra-1',
			x4y8: 'forest-2',
			x5y8: 'hill-1',
			x6y8: 'road-1',
			x7y8: 'hill-1',
			x8y8: 'stone-1',
			x9y8: 'stone-1',
			x0y9: 'forest-1',
			x1y9: 'forest-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'road-1',
			x6y9: 'road-1',
			x7y9: 'terra-1',
			x8y9: 'hill-1',
			x9y9: 'stone-1',
			x0y10: 'stone-1',
			x1y10: 'stone-1',
			x2y10: 'forest-2',
			x3y10: 'stone-1',
			x4y10: 'terra-1',
			x5y10: 'hill-1',
			x6y10: 'terra-1',
			x7y10: 'forest-1',
			x8y10: 'forest-2',
			x9y10: 'stone-1',
			x0y11: 'forest-2',
			x1y11: 'stone-1',
			x2y11: 'stone-1',
			x3y11: 'forest-1',
			x4y11: 'stone-1',
			x5y11: 'stone-1',
			x6y11: 'stone-1',
			x7y11: 'stone-1',
			x8y11: 'stone-1',
			x9y11: 'forest-1',
			x10y0: 'road-1',
			x10y1: 'forest-1',
			x10y2: 'terra-1',
			x10y3: 'road-1',
			x10y4: 'stone-1',
			x10y5: 'terra-1',
			x10y6: 'road-1',
			x10y7: 'stone-1',
			x10y8: 'stone-1',
			x10y9: 'forest-1',
			x10y10: 'forest-2',
			x10y11: 'stone-1',
			x11y0: 'road-1',
			x11y1: 'road-1',
			x11y2: 'road-1',
			x11y3: 'road-1',
			x11y4: 'stone-1',
			x11y5: 'terra-1',
			x11y6: 'road-1',
			x11y7: 'stone-1',
			x11y8: 'hill-1',
			x11y9: 'forest-1',
			x11y10: 'stone-1',
			x11y11: 'stone-1',
			x12y0: 'terra-1',
			x12y1: 'terra-1',
			x12y2: 'hill-1',
			x12y3: 'forest-2',
			x12y4: 'stone-1',
			x12y5: 'terra-1',
			x12y6: 'road-1',
			x12y7: 'terra-1',
			x12y8: 'terra-1',
			x12y9: 'stone-1',
			x12y10: 'stone-1',
			x12y11: 'stone-1',
			x13y0: 'hill-1',
			x13y1: 'forest-2',
			x13y2: 'forest-1',
			x13y3: 'forest-1',
			x13y4: 'stone-1',
			x13y5: 'stone-1',
			x13y6: 'road-1',
			x13y7: 'road-1',
			x13y8: 'road-1',
			x13y9: 'terra-1',
			x13y10: 'stone-1',
			x13y11: 'forest-1',
			x14y0: 'forest-1',
			x14y1: 'stone-1',
			x14y2: 'forest-2',
			x14y3: 'stone-1',
			x14y4: 'stone-1',
			x14y5: 'forest-2',
			x14y6: 'terra-1',
			x14y7: 'hill-1',
			x14y8: 'road-1',
			x14y9: 'hill-1',
			x14y10: 'forest-2',
			x14y11: 'stone-1',
			x15y0: 'stone-1',
			x15y1: 'stone-1',
			x15y2: 'stone-1',
			x15y3: 'stone-1',
			x15y4: 'hill-1',
			x15y5: 'terra-1',
			x15y6: 'hill-1',
			x15y7: 'terra-1',
			x15y8: 'road-1',
			x15y9: 'hill-1',
			x15y10: 'terra-1',
			x15y11: 'hill-1',
			x16y0: 'stone-1',
			x16y1: 'forest-2',
			x16y2: 'stone-1',
			x16y3: 'forest-1',
			x16y4: 'forest-1',
			x16y5: 'hill-1',
			x16y6: 'stone-1',
			x16y7: 'stone-1',
			x16y8: 'road-1',
			x16y9: 'terra-1',
			x16y10: 'hill-1',
			x16y11: 'road-1',
			x17y0: 'forest-1',
			x17y1: 'stone-1',
			x17y2: 'forest-1',
			x17y3: 'hill-1',
			x17y4: 'forest-1',
			x17y5: 'stone-1',
			x17y6: 'stone-1',
			x17y7: 'stone-1',
			x17y8: 'road-1',
			x17y9: 'road-1',
			x17y10: 'road-1',
			x17y11: 'road-1',
			x18y0: 'stone-1',
			x18y1: 'stone-1',
			x18y2: 'stone-1',
			x18y3: 'forest-2',
			x18y4: 'stone-1',
			x18y5: 'stone-1',
			x18y6: 'stone-1',
			x18y7: 'stone-1',
			x18y8: 'terra-1',
			x18y9: 'hill-1',
			x18y10: 'forest-2',
			x18y11: 'forest-2',
			x19y0: 'forest-1',
			x19y1: 'stone-1',
			x19y2: 'forest-1',
			x19y3: 'forest-1',
			x19y4: 'stone-1',
			x19y5: 'forest-1',
			x19y6: 'stone-1',
			x19y7: 'forest-2',
			x19y8: 'stone-1',
			x19y9: 'forest-2',
			x19y10: 'forest-1',
			x19y11: 'forest-1'
		}
	};

}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '北行',
			objective: '占领所有城堡，摧毁所有敌军，渥拉顿必须存活。'
		},
		langRuExtra = {
			name: 'ИДУЩИЙ НА СЕВЕР',
			objective: 'Занять вражеский замок и уничтожить все вражеские войска. Король Валадорн должен выжить.'
		},
		langEsExtra = {
			name: 'A DIRECCIÓN NORTE',
			objective: 'Ocupa el castillo enemigo y derrota a todas las tropas enemigas. Valador debe sobrevivir.'
		};

	win.APP.maps.mission_001_006 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_007', type: 'mission'},
			{jsMapKey: 'skirmish_001_012', type: 'skirmish'}
		],
		size: {width: 12, height: 20},
		maxPlayers: 2,
		unitLimit: 25,
		money: [
			{playerId: 0, money: 600},
			{playerId: 1, money: 1200}
		],
		win: ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		startBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'The Gates of Thorin'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '敌人正计划着攻击格拉玛来阻止他运送水晶，我们必须击败他们！',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 5, y: 17 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				}
			}
		],
		endBriefing: [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '让我们赶紧北行去和格拉玛汇合!这些敌人知道格拉玛的意图，他需要我们的帮助！',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Winter Storm\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_007', { type: 'mission' }]
				}
			}
		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'startBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Las Puertas de Thorin'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡El enemigo está planeando atacar al Rey Galamar antes de que alcanze Thorin! ¡Tenemos que derrotarlos!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 5, y: 17 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				}
			}

		],
		'endBriefing-es': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Dirijamonos hacia el Norte para encontrarnos con Galamar. ¡Las tropas enemigas conocen sobre sus planes y puede que necesite ayuda!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Tormenta de Invierno\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_007', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'startBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Ворота Торина'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Враг планирует атаковать Короля Галамара, пока он не достигнет Торина. Мы должны уничтожить их!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 5, y: 17 }]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				}
			}

		],
		'endBriefing-ru': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Давайте поспешим на Север, чтобы встретиться с Галамаром. Враги знают о его планах и ему может потребоваться наша помощь!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Зимний шторм\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_007', { type: 'mission' }]
				}
			}
		],

		units: [
			{x: 5, y: 5, type: 'demon-lord', ownerId: 1},
			{x: 6, y: 5, type: 'wisp', ownerId: 1},
			{x: 4, y: 6, type: 'golem', ownerId: 1},
			{x: 5, y: 6, type: 'catapult', ownerId: 1},
			{x: 6, y: 6, type: 'soldier', ownerId: 1},
			{x: 7, y: 6, type: 'dire-wolf', ownerId: 1},
			{x: 5, y: 7, type: 'soldier', ownerId: 1},
			{x: 5, y: 17, type: 'valadorn', ownerId: 0},
			{x: 7, y: 17, type: 'archer', ownerId: 0},
			{x: 8, y: 17, type: 'soldier', ownerId: 0},
			{x: 8, y: 16, type: 'golem', ownerId: 0},
			{x: 4, y: 16, type: 'dire-wolf', ownerId: 0},
			{x: 3, y: 17, type: 'catapult', ownerId: 0}
		],
		buildings: [
			{x: 5, y: 5, type: 'castle', state: 'normal', ownerId: 1},
			{x: 5, y: 7, type: 'farm', state: 'normal', ownerId: 1},
			{x: 7, y: 8, type: 'farm', state: 'normal', ownerId: 1},
			{x: 10, y: 6, type: 'farm', state: 'normal'},
			{x: 2, y: 7, type: 'farm', state: 'normal'},
			{x: 10, y: 10, type: 'farm', state: 'destroyed'},
			{x: 2, y: 14, type: 'farm', state: 'normal', ownerId: 0},
			{x: 9, y: 13, type: 'farm', state: 'destroyed'},
			{x: 4, y: 12, type: 'farm', state: 'normal'},
			{x: 8, y: 17, type: 'farm', state: 'normal', ownerId: 0},
			{x: 5, y: 17, type: 'castle', state: 'normal', ownerId: 0}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-3',
			x0y4: 'water-1',
			x0y5: 'forest-1',
			x1y0: 'water-1',
			x1y1: 'water-2',
			x1y2: 'water-1',
			x1y3: 'water-1',
			x1y4: 'water-1',
			x1y5: 'forest-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'stone-1',
			x2y4: 'forest-1',
			x2y5: 'forest-2',
			x3y0: 'water-1',
			x3y1: 'water-1',
			x3y2: 'forest-2',
			x3y3: 'forest-1',
			x3y4: 'hill-1',
			x3y5: 'stone-1',
			x4y0: 'water-1',
			x4y1: 'hill-1',
			x4y2: 'terra-1',
			x4y3: 'stone-1',
			x4y4: 'terra-1',
			x4y5: 'forest-1',
			x5y0: 'bridge-2',
			x5y1: 'road-1',
			x5y2: 'road-1',
			x5y3: 'road-1',
			x5y4: 'terra-1',
			x5y5: 'terra-1',
			x6y0: 'water-1',
			x6y1: 'terra-1',
			x6y2: 'terra-1',
			x6y3: 'road-1',
			x6y4: 'road-1',
			x6y5: 'road-1',
			x7y0: 'water-1',
			x7y1: 'stone-1',
			x7y2: 'forest-2',
			x7y3: 'terra-1',
			x7y4: 'stone-1',
			x7y5: 'hill-1',
			x8y0: 'water-1',
			x8y1: 'forest-1',
			x8y2: 'terra-1',
			x8y3: 'stone-1',
			x8y4: 'forest-2',
			x8y5: 'forest-1',
			x9y0: 'water-1',
			x9y1: 'water-1',
			x9y2: 'stone-1',
			x9y3: 'terra-1',
			x9y4: 'forest-1',
			x9y5: 'forest-2',
			x10y0: 'water-2',
			x10y1: 'water-1',
			x10y2: 'water-1',
			x10y3: 'water-1',
			x10y4: 'water-1',
			x10y5: 'forest-1',
			x11y0: 'water-1',
			x11y1: 'water-3',
			x11y2: 'water-1',
			x11y3: 'water-2',
			x11y4: 'water-1',
			x11y5: 'water-1',
			x0y6: 'stone-1',
			x1y6: 'road-1',
			x2y6: 'road-1',
			x3y6: 'road-1',
			x4y6: 'road-1',
			x5y6: 'road-1',
			x6y6: 'road-1',
			x7y6: 'road-1',
			x8y6: 'road-1',
			x9y6: 'road-1',
			x10y6: 'terra-1',
			x11y6: 'water-1',
			x0y7: 'hill-1',
			x1y7: 'road-1',
			x2y7: 'terra-1',
			x3y7: 'forest-1',
			x4y7: 'stone-1',
			x5y7: 'terra-1',
			x6y7: 'road-1',
			x7y7: 'terra-1',
			x8y7: 'stone-1',
			x9y7: 'road-1',
			x10y7: 'road-1',
			x11y7: 'road-1',
			x0y8: 'forest-2',
			x1y8: 'road-1',
			x2y8: 'stone-1',
			x3y8: 'terra-1',
			x4y8: 'forest-1',
			x5y8: 'hill-1',
			x6y8: 'road-1',
			x7y8: 'terra-1',
			x8y8: 'terra-1',
			x9y8: 'water-1',
			x10y8: 'water-1',
			x11y8: 'bridge-2',
			x0y9: 'forest-1',
			x1y9: 'road-1',
			x2y9: 'forest-2',
			x3y9: 'hill-1',
			x4y9: 'forest-1',
			x5y9: 'terra-1',
			x6y9: 'road-1',
			x7y9: 'hill-1',
			x8y9: 'forest-1',
			x9y9: 'water-1',
			x10y9: 'water-1',
			x11y9: 'bridge-2',
			x0y10: 'water-1',
			x1y10: 'bridge-2',
			x2y10: 'water-1',
			x3y10: 'water-1',
			x4y10: 'water-1',
			x5y10: 'stone-1',
			x6y10: 'road-1',
			x7y10: 'terra-1',
			x8y10: 'forest-1',
			x9y10: 'forest-2',
			x10y10: 'terra-1',
			x11y10: 'road-1',
			x0y11: 'water-1',
			x1y11: 'bridge-2',
			x2y11: 'water-1',
			x3y11: 'water-1',
			x4y11: 'water-1',
			x5y11: 'hill-1',
			x6y11: 'road-1',
			x7y11: 'stone-1',
			x8y11: 'hill-1',
			x9y11: 'stone-1',
			x10y11: 'terra-1',
			x11y11: 'road-1',
			x0y12: 'stone-1',
			x1y12: 'road-1',
			x2y12: 'road-1',
			x3y12: 'road-1',
			x4y12: 'terra-1',
			x5y12: 'forest-1',
			x6y12: 'road-1',
			x7y12: 'road-1',
			x8y12: 'road-1',
			x9y12: 'road-1',
			x10y12: 'road-1',
			x11y12: 'road-1',
			x0y13: 'forest-1',
			x1y13: 'terra-1',
			x2y13: 'hill-1',
			x3y13: 'road-1',
			x4y13: 'terra-1',
			x5y13: 'hill-1',
			x6y13: 'water-1',
			x7y13: 'water-1',
			x8y13: 'water-1',
			x9y13: 'terra-1',
			x10y13: 'hill-1',
			x11y13: 'stone-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'terra-1',
			x3y14: 'road-1',
			x4y14: 'hill-1',
			x5y14: 'stone-1',
			x6y14: 'water-1',
			x7y14: 'water-3',
			x8y14: 'water-1',
			x9y14: 'road-1',
			x10y14: 'road-1',
			x11y14: 'road-1',
			x0y15: 'water-1',
			x1y15: 'water-1',
			x2y15: 'terra-1',
			x3y15: 'road-1',
			x4y15: 'forest-2',
			x5y15: 'forest-1',
			x6y15: 'water-1',
			x7y15: 'water-1',
			x8y15: 'water-1',
			x9y15: 'road-1',
			x10y15: 'forest-2',
			x11y15: 'stone-1',
			x0y16: 'stone-1',
			x1y16: 'stone-1',
			x2y16: 'hill-1',
			x3y16: 'road-1',
			x4y16: 'terra-1',
			x5y16: 'stone-1',
			x6y16: 'hill-1',
			x7y16: 'forest-1',
			x8y16: 'stone-1',
			x9y16: 'road-1',
			x10y16: 'terra-1',
			x11y16: 'forest-2',
			x0y17: 'forest-1',
			x1y17: 'forest-1',
			x2y17: 'stone-1',
			x3y17: 'road-1',
			x4y17: 'hill-1',
			x5y17: 'terra-1',
			x6y17: 'terra-1',
			x7y17: 'stone-1',
			x8y17: 'terra-1',
			x9y17: 'road-1',
			x10y17: 'stone-1',
			x11y17: 'forest-1',
			x0y18: 'road-1',
			x1y18: 'road-1',
			x2y18: 'road-1',
			x3y18: 'road-1',
			x4y18: 'road-1',
			x5y18: 'road-1',
			x6y18: 'road-1',
			x7y18: 'road-1',
			x8y18: 'road-1',
			x9y18: 'road-1',
			x10y18: 'water-1',
			x11y18: 'water-1',
			x0y19: 'stone-1',
			x1y19: 'forest-1',
			x2y19: 'forest-2',
			x3y19: 'road-1',
			x4y19: 'stone-1',
			x5y19: 'forest-1',
			x6y19: 'hill-1',
			x7y19: 'terra-1',
			x8y19: 'stone-1',
			x9y19: 'forest-1',
			x10y19: 'water-1',
			x11y19: 'water-3'
		}
	};


}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '会和',
			objective: '穿过敌方部队，占领他们的城堡并击败所有敌人。格拉玛与渥拉顿必须存活。'
		},
		langRuExtra = {
			name: 'ВСТРЕЧА',
			objective: 'Пробить путь на запад через вражеские войска, убить их командира и занять все замки! Король Галамар и Король Валадорн должны выжить.'
		},
		langEsExtra = {
			name: 'REUNIÓN',
			objective: 'Tallar un camino hacia el oeste a través de las tropas enemigas, derrotar a su comandante y ocupar todos los castillos! Galamar y Valadorn deben sobrevivir.'
		};

	win.APP.maps.mission_001_007 = {
		version: 6,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'mission_001_008', type: 'mission'},
			{jsMapKey: 'skirmish_001_013', type: 'skirmish'}
		],
		size: {width: 16, height: 18},
		maxPlayers: 2,
		unitLimit: 25,
		money: [
			{playerId: 0, money: 400},
			{playerId: 1, money: 400}
		],
		win: ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		startBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Outside the City'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				}
			}
		],
		n1Briefing: [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '冲啊！勇敢的战士们！趁现在还来得及！',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 0, y: 8 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '敌人们太强大了，我建议撤退！',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 14, y: 7 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '我们除了进攻外没有别的选择！',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '格拉玛！我们以最快速度赶到了！让我们再次一起战斗吧！',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 13, y: 16 }]
				}
			}
		],
		endBriefing: [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'Morning Star\' ' + langEn.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_008', { type: 'mission' }]
				}
			}
		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'startBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Fuera de la Ciudad'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				}
			}
		],
		'n1Briefing-es': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Corran, lamentables humanos, antes de que sea demasiado tarde!',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 0, y: 8 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Las fuerzas enemigas lucen formidables, recomiendo una retirada.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 14, y: 7 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡No tenemos otra opción mas que atacar!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Galamar! ¡Venimos los más ráído que pudimos! ¡Permitenos pelear lado a lado!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 13, y: 16 }]
				}
			}

		],
		'endBriefing-es': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'Estrella de la Mañana\' ' + langEs.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_008', { type: 'mission' }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'startBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'За Городом'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				}
			}
		],
		'n1Briefing-ru': [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Беги, жалкий человечишко, пока еще не слишком поздно!',
					img: 'i/face/demon-lord.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 0, y: 8 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Вражеские войска выглядят угрожающе, я рекомендую отступить.',
					img: 'i/face/soldier.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 14, y: 7 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'У нас нет иного выбора кроме атаки!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Галамар! Мы пришли так быстро как могли! Будем сражаться бок о бок!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 13, y: 16 }]
				}
			}

		],
		'endBriefing-ru': [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Утренняя звезда\' ' + langRu.unlocked
				},
				playSound: {
					sound: 'victory.mp3',
					road: 0,
					isLoop: false
				},
				onHide: {
					fn: 'openMap',
					args: ['mission_001_008', { type: 'mission' }]
				}
			}
		],

		cases: [
			{
				isDone: false,
				detect: 'turnCount',
				turnCount: 11,
				do: ['appendUnits', 'showBriefing'],
				units: [
					{x: 12, y: 14, type: 'soldier', ownerId: 1},
					{x: 14, y: 14, type: 'golem', ownerId: 1},
					{x: 13, y: 12, type: 'elemental', ownerId: 1},
					{x: 13, y: 15, type: 'sorceress', ownerId: 1},
					{x: 12, y: 16, type: 'golem', ownerId: 0},
					{x: 13, y: 16, type: 'valadorn', ownerId: 0},
					{x: 14, y: 16, type: 'dragon', ownerId: 0},
					{x: 13, y: 17, type: 'wisp', ownerId: 0},
					{x: 12, y: 17, type: 'archer', ownerId: 0},
					{x: 0, y: 8, type: 'demon-lord', ownerId: 1},
					{x: 1, y: 10, type: 'soldier', ownerId: 1},
					{x: 3, y: 8, type: 'soldier', ownerId: 1},
					{x: 4, y: 9, type: 'golem', ownerId: 1},
					{x: 5, y: 10, type: 'golem', ownerId: 1},
					{x: 2, y: 10, type: 'dragon', ownerId: 1},
					{x: 4, y: 8, type: 'dragon', ownerId: 1},
					{x: 2, y: 9, type: 'wisp', ownerId: 1}
				],
				briefingName: 'n1Briefing'
			}
		],

		units: [
			{x: 14, y: 3, type: 'galamar', ownerId: 0},
			{x: 14, y: 2, type: 'soldier', ownerId: 0},
			{x: 14, y: 1, type: 'archer', ownerId: 0},
			{x: 13, y: 1, type: 'sorceress', ownerId: 0},
			{x: 12, y: 7, type: 'sorceress', ownerId: 1},
			{x: 13, y: 8, type: 'archer', ownerId: 1},
			{x: 13, y: 7, type: 'soldier', ownerId: 1},
			{x: 14, y: 7, type: 'dire-wolf', ownerId: 1}
		],
		buildings: [
			{x: 0, y: 8, type: 'castle', state: 'normal'},
			{x: 3, y: 8, type: 'farm', state: 'destroyed'},
			{x: 1, y: 10, type: 'farm', state: 'destroyed'},
			{x: 0, y: 13, type: 'farm', state: 'normal'},
			{x: 3, y: 14, type: 'farm', state: 'normal'},
			{x: 13, y: 14, type: 'well', state: 'normal'},
			{x: 14, y: 9, type: 'farm', state: 'destroyed'},
			{x: 8, y: 9, type: 'farm', state: 'destroyed'},
			{x: 11, y: 7, type: 'farm', state: 'destroyed'},
			{x: 8, y: 4, type: 'farm', state: 'destroyed'},
			{x: 11, y: 8, type: 'well', state: 'normal'},
			{x: 12, y: 9, type: 'castle', state: 'normal'}
		],
		terrain: {
			x0y0: 'stone-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'stone-1',
			x1y0: 'forest-1',
			x1y1: 'water-1',
			x1y2: 'water-1',
			x1y3: 'water-2',
			x1y4: 'water-1',
			x1y5: 'forest-1',
			x2y0: 'water-1',
			x2y1: 'water-1',
			x2y2: 'water-1',
			x2y3: 'water-1',
			x2y4: 'water-1',
			x2y5: 'water-1',
			x3y0: 'water-1',
			x3y1: 'water-3',
			x3y2: 'water-1',
			x3y3: 'water-1',
			x3y4: 'water-1',
			x3y5: 'water-1',
			x4y0: 'water-1',
			x4y1: 'water-1',
			x4y2: 'water-1',
			x4y3: 'water-1',
			x4y4: 'water-1',
			x4y5: 'terra-1',
			x5y0: 'stone-1',
			x5y1: 'water-1',
			x5y2: 'water-1',
			x5y3: 'water-1',
			x5y4: 'water-1',
			x5y5: 'bridge-1',
			x6y0: 'forest-1',
			x6y1: 'water-1',
			x6y2: 'water-1',
			x6y3: 'water-3',
			x6y4: 'water-1',
			x6y5: 'bridge-1',
			x7y0: 'forest-2',
			x7y1: 'water-1',
			x7y2: 'water-1',
			x7y3: 'water-1',
			x7y4: 'water-1',
			x7y5: 'forest-2',
			x8y0: 'stone-1',
			x8y1: 'forest-2',
			x8y2: 'stone-1',
			x8y3: 'hill-1',
			x8y4: 'terra-1',
			x8y5: 'hill-1',
			x9y0: 'stone-1',
			x9y1: 'stone-1',
			x9y2: 'forest-1',
			x9y3: 'stone-1',
			x9y4: 'terra-1',
			x9y5: 'forest-1',
			x10y0: 'stone-1',
			x10y1: 'forest-2',
			x10y2: 'hill-1',
			x10y3: 'forest-1',
			x10y4: 'forest-1',
			x10y5: 'terra-1',
			x11y0: 'forest-1',
			x11y1: 'terra-1',
			x11y2: 'stone-1',
			x11y3: 'terra-1',
			x11y4: 'stone-1',
			x11y5: 'stone-1',
			x12y0: 'forest-1',
			x12y1: 'forest-2',
			x12y2: 'terra-1',
			x12y3: 'forest-1',
			x12y4: 'stone-1',
			x12y5: 'hill-1',
			x13y0: 'road-1',
			x13y1: 'road-1',
			x13y2: 'hill-1',
			x13y3: 'forest-2',
			x13y4: 'road-1',
			x13y5: 'road-1',
			x14y0: 'stone-1',
			x14y1: 'road-1',
			x14y2: 'road-1',
			x14y3: 'road-1',
			x14y4: 'road-1',
			x14y5: 'stone-1',
			x15y0: 'stone-1',
			x15y1: 'forest-1',
			x15y2: 'stone-1',
			x15y3: 'forest-1',
			x15y4: 'stone-1',
			x15y5: 'forest-2',
			x0y6: 'forest-1',
			x1y6: 'hill-1',
			x2y6: 'forest-1',
			x3y6: 'forest-2',
			x4y6: 'terra-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'terra-1',
			x8y6: 'terra-1',
			x9y6: 'forest-2',
			x10y6: 'forest-1',
			x11y6: 'forest-1',
			x12y6: 'forest-2',
			x13y6: 'road-1',
			x14y6: 'terra-1',
			x15y6: 'forest-1',
			x0y7: 'forest-2',
			x1y7: 'terra-1',
			x2y7: 'forest-2',
			x3y7: 'terra-1',
			x4y7: 'stone-1',
			x5y7: 'water-1',
			x6y7: 'water-1',
			x7y7: 'water-1',
			x8y7: 'stone-1',
			x9y7: 'terra-1',
			x10y7: 'terra-1',
			x11y7: 'terra-1',
			x12y7: 'terra-1',
			x13y7: 'road-1',
			x14y7: 'terra-1',
			x15y7: 'forest-1',
			x0y8: 'terra-1',
			x1y8: 'hill-1',
			x2y8: 'terra-1',
			x3y8: 'terra-1',
			x4y8: 'forest-2',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'water-1',
			x8y8: 'forest-2',
			x9y8: 'hill-1',
			x10y8: 'terra-1',
			x11y8: 'terra-1',
			x12y8: 'forest-2',
			x13y8: 'road-1',
			x14y8: 'forest-1',
			x15y8: 'forest-1',
			x0y9: 'road-1',
			x1y9: 'road-1',
			x2y9: 'road-1',
			x3y9: 'road-1',
			x4y9: 'road-1',
			x5y9: 'hill-1',
			x6y9: 'water-1',
			x7y9: 'water-1',
			x8y9: 'terra-1',
			x9y9: 'stone-1',
			x10y9: 'hill-1',
			x11y9: 'terra-1',
			x12y9: 'terra-1',
			x13y9: 'road-1',
			x14y9: 'terra-1',
			x15y9: 'stone-1',
			x0y10: 'forest-2',
			x1y10: 'terra-1',
			x2y10: 'hill-1',
			x3y10: 'terra-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'bridge-1',
			x7y10: 'bridge-1',
			x8y10: 'road-1',
			x9y10: 'road-1',
			x10y10: 'road-1',
			x11y10: 'road-1',
			x12y10: 'road-1',
			x13y10: 'road-1',
			x14y10: 'stone-1',
			x15y10: 'water-1',
			x0y11: 'terra-1',
			x1y11: 'stone-1',
			x2y11: 'forest-2',
			x3y11: 'stone-1',
			x4y11: 'forest-1',
			x5y11: 'water-1',
			x6y11: 'water-1',
			x7y11: 'water-1',
			x8y11: 'forest-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'water-1',
			x12y11: 'bridge-2',
			x13y11: 'water-1',
			x14y11: 'water-1',
			x15y11: 'water-1',
			x0y12: 'forest-1',
			x1y12: 'terra-1',
			x2y12: 'terra-1',
			x3y12: 'forest-1',
			x4y12: 'stone-1',
			x5y12: 'water-1',
			x6y12: 'water-1',
			x7y12: 'water-1',
			x8y12: 'water-1',
			x9y12: 'water-1',
			x10y12: 'water-1',
			x11y12: 'water-1',
			x12y12: 'bridge-2',
			x13y12: 'water-1',
			x14y12: 'water-1',
			x15y12: 'water-1',
			x0y13: 'terra-1',
			x1y13: 'hill-1',
			x2y13: 'terra-1',
			x3y13: 'hill-1',
			x4y13: 'forest-1',
			x5y13: 'hill-1',
			x6y13: 'water-1',
			x7y13: 'water-3',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'hill-1',
			x12y13: 'road-1',
			x13y13: 'terra-1',
			x14y13: 'stone-1',
			x15y13: 'forest-1',
			x0y14: 'forest-1',
			x1y14: 'terra-1',
			x2y14: 'forest-2',
			x3y14: 'terra-1',
			x4y14: 'terra-1',
			x5y14: 'forest-2',
			x6y14: 'water-1',
			x7y14: 'water-1',
			x8y14: 'water-1',
			x9y14: 'water-1',
			x10y14: 'forest-2',
			x11y14: 'terra-1',
			x12y14: 'road-1',
			x13y14: 'terra-1',
			x14y14: 'forest-2',
			x15y14: 'terra-1',
			x0y15: 'stone-1',
			x1y15: 'forest-1',
			x2y15: 'stone-1',
			x3y15: 'forest-1',
			x4y15: 'water-1',
			x5y15: 'water-1',
			x6y15: 'water-1',
			x7y15: 'water-1',
			x8y15: 'water-1',
			x9y15: 'stone-1',
			x10y15: 'forest-1',
			x11y15: 'stone-1',
			x12y15: 'road-1',
			x13y15: 'road-1',
			x14y15: 'terra-1',
			x15y15: 'stone-1',
			x0y16: 'forest-1',
			x1y16: 'forest-2',
			x2y16: 'forest-1',
			x3y16: 'water-1',
			x4y16: 'water-1',
			x5y16: 'water-1',
			x6y16: 'water-2',
			x7y16: 'water-1',
			x8y16: 'water-1',
			x9y16: 'forest-1',
			x10y16: 'hill-1',
			x11y16: 'terra-1',
			x12y16: 'terra-1',
			x13y16: 'road-1',
			x14y16: 'stone-1',
			x15y16: 'forest-2',
			x0y17: 'forest-1',
			x1y17: 'stone-1',
			x2y17: 'water-1',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'water-1',
			x6y17: 'water-1',
			x7y17: 'water-1',
			x8y17: 'forest-1',
			x9y17: 'forest-2',
			x10y17: 'stone-1',
			x11y17: 'forest-1',
			x12y17: 'stone-1',
			x13y17: 'road-1',
			x14y17: 'hill-1',
			x15y17: 'forest-1'
		}
	};


}(window));/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	var langEn = win.APP.languages.en,
		langRu = win.APP.languages.ru,
		langEs = win.APP.languages.es,
		langEnExtra = {
			name: '天堂之怒',
			objective: '击败西斯和他的生物！格拉玛与渥拉顿必须存活。'
		},
		langRuExtra = {
			name: 'НЕБЕСНЫЕ ФУРИИ',
			objective: 'Порвать Саефа и его приспешников! Король Галамар и Король Валадорн должны выжить.'
		},
		langEsExtra = {
			name: 'LA FURIA DE LOS CIELOS',
			objective: '¡Derrota a Saeth y a sus adeptos! Galamar y Valador deben sobrevivir.'
		};

	win.APP.maps.mission_001_008 = {
		version: 7,
		type: 'mission',
		isOpen: false,
		openMaps: [
			{jsMapKey: 'skirmish_001_014', type: 'skirmish'},
			{jsMapKey: 'skirmish_001_015', type: 'skirmish'}
		],
		size: {width: 14, height: 18},
		maxPlayers: 2,
		unitLimit: 25,
		money: [
			{playerId: 0, money: 900}, // default {playerId: 0, money: 900}
			{playerId: 1, money: 600}
		],
		win: ['noEnemyUnit'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		defeat: ['commanderIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		// en
		name: langEnExtra.name,
		objective: langEnExtra.objective,
		startBriefing: [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[4]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'The Ancient Citadel'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '古代遗迹..水晶..还有西斯！',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '结束了，格拉玛与渥拉顿。你们真是太可笑了，居然想要对抗我！水晶的力量已经聚齐，现在我掌握了最强大的力量！我的意愿就是神的意志！来看看我是如何摧毁你们的吧！',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '你的把戏没办法愚弄我们！西斯！',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right ta-center',
				cssClass: 'briefing',
				popupData: {
					text: '目标确定...<br>天堂之怒启动!',
					img: ''
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '天堂之怒？这就是水晶的力量吗..真是太可怕了。',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '这就是古代遗迹的力量，你们永远都不会明白! 感受天堂之怒吧!',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '格拉玛！我们必须尽快击败他!不然我们的军队就全毁了！',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '没错，我们必须尽快击破水晶，在西斯和他的天堂之怒再次降临以前....',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEnExtra.name,
					text: langEnExtra.objective
				}
			}
		],
		endBriefing: [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				playSound: {
					sound: 'game-complete.mp3',
					road: 0,
					isLoop: true
				},
				popupData: {
					text: '可笑的人类，你们将会消失在历史的尘埃里...',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '西斯！你的失败是注定的!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '在你那有限的生命与无知的思想里..也许吧。但是我的生命是无穷的，谁也无法阻止我重生!',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '上帝啊，遗迹正在坍塌，我们必须迅速撤离!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '但是水晶..他们还在这里!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '我们唯一可以做的就是先救自己!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '你已经服务我很久了，现在，走吧!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEn.story.list[5]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.missionComplete,
					text: '\'The Crucible\' and \'Shadow Lands\' ' + langEn.unlocked
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.congratulations,
					text: '感谢游玩远古帝国：反击 - 我非常希望你能喜欢他!'
				},
				onHide: {
					fn: 'backTo',
					args: ['', { isForce: true }]
				}
			}

		],

		// es
		'name-es': langEsExtra.name,
		'objective-es': langEsExtra.objective,
		'startBriefing-es': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[4]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'La Antigua Citadela'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Las Ruinas de la Antigua Citadela... y Saeth! ¡Con los Cristales!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Al fin, Galamar y Valador! ¡Vaya si son valientes para atreverse a enfrentarme! Todas las llaves están colocadas, y pronto el mas grande poder que se jámas se haya creado en la tierra rugirá y se doblara a mi voluntad. ¡Tu destrucción será el testimonio de su poder y gloria!',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Tus artimañas no podrán engañarnos mas, Saeth!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right ta-center',
				cssClass: 'briefing',
				popupData: {
					text: 'BLANCO ADQUIRIDO...<br>FURIA DE LOS CIELOS ACTIVADA!',
					img: ''
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¿Furia de los cielos? ¡¿Qué demonios es eso?!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Patéticas criaturas, ¡Ésto es algo tan antiguo que no lo comprenderían ni aunque vivieran mil años! ¡Testifiquen el poder de la Furia de los Cielos!',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Galamar! ¡Tenemos que apresurarnos si queremos que nuestras tropas tengan una oportunidad!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Señor, deberiamos atacar esos castillos primero antes de lanzar un ataque a las Ruinas donde está Saeth',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEsExtra.name,
					text: langEsExtra.objective
				}
			}
		],
		'endBriefing-es': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				playSound: {
					sound: 'game-complete.mp3',
					road: 0,
					isLoop: true
				},
				popupData: {
					text: 'Lamentables y miserables. Ustedes no vivirán lo suficiente para ver su precioso reino envuelto en oscuridad...',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Saeth! ¡Esta vez tu derrota en definitiva!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'En sus insignificantes vidas y estrechas mentes, quizás... Sin embargo todo esta ahora puesto en marcha - Las invisibles fuerzas que goviernan el tiempo están más allá de su compresión. ¡No pueden evitar que me levante de nuevo!',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Su Majestad, las Ruinas se están cayendo a pedazos! ¡Debemos irnos inmediatamente!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: '¡Pero los Cristales... todavía siguen dentro!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: '¡Lo único que podemos salvar ahora es a nosotros mismos!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Me han servido bien, ¡Ahora vamos!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langEs.story.list[5]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.missionComplete,
					text: '\'El Crisol\' y las \'Tierras Sombrías\' ' + langEs.unlocked
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEs.congratulations,
					text: 'Gracias por jugar AE2 - ¡Espero que hayas disfrutado jugando, tanto como yo disfrute haciendolo!'
				},
				onHide: {
					fn: 'backTo',
					args: ['', { isForce: true }]
				}
			}
		],

		// ru
		'name-ru': langRuExtra.name,
		'objective-ru': langRuExtra.objective,
		'startBriefing-ru': [
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[4]
				},
				playSound: {
					sound: 'bg-story.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: 'Античная цитадель'
				},
				playSound: {
					sound: 'bg-good.mp3',
					road: 0,
					isLoop: true
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Руины Античной Цитадели... и Саеф! С Кристаллами!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Наконец-то, Галамар и Валадорн! Как вы храбры, чтобы противостоять мне! Все ключи на местах, и скоро величайшая сила из свех, когда либо созранных на земле подчинится моей воле. Ваше уничтожение будет доказательством этой силы!',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Твои уловки больше не будут вводить нас в заблуждение, Саеф!',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right ta-center',
				cssClass: 'briefing',
				popupData: {
					text: 'ЦЕЛЬ ДОСТИГНУТА...<br>НЕБЕСНЫЕ ФУРИИ АКТИВИРОВАНЫ!',
					img: ''
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Небесные фурии? Что, именем Создателя, это такое!',
					img: 'i/face/galamar.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 8, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Жалкие создания, это что-то настолько древнее, чего вы не сможете понять, даже если проживете тысячи лет! Будьте свидетелями силы Небесных Фурий!',
					img: 'i/face/saeth.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 7, y: 2 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Галамар! Вы должны поторопиться, чтобы наши войска получили шанс.',
					img: 'i/face/valadorn.png'
				},
				onShow: {
					fn: 'centerToXY',
					context: 'parentView',
					args: [{ x: 6, y: 15 }]
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Сэр, мы должны атаковать эти замки перед тем, как мы начнем нападение на Саефа и Руины.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRuExtra.name,
					text: langRuExtra.objective
				}
			}
		],
		'endBriefing-ru': [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				playSound: {
					sound: 'game-complete.mp3',
					road: 0,
					isLoop: true
				},
				popupData: {
					text: 'Жалкие негодяи! Вы не проживете столько, чтобы увидеть, как ваше драгоценное Королевство поглотиться тьмой...',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Саеф! Пришло время твоего поражения!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'В твоей незначительной жизни и ограниченных мозгах, возможно...Тем не менее все сейчас в движении - невидимые силы, которые управляют временем за пределами твоих знаний. Ты не сможешь остановить меня от воскрешения!',
					img: 'i/face/saeth.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Ваше Величество, Руины разваливаются! Мы должны уйти немедленно!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Но Кристаллы... Они все еще там!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Все что мы можем сейчас спасти - это наши жизни!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing',
				popupData: {
					text: 'Вы хорошо служили мне. А сейчас уходите!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'story',
				cssClass: 'full-screen',
				popupData: {
					content: langRu.story.list[5]
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.missionComplete,
					text: '\'Суровое испытание\' и \'Теневые земли\' ' + langRu.unlocked
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langRu.congratulations,
					text: 'И благодарим вас за игру в \'Ancient Empire: Strike Back\' - я очень надеюсь, что вы насладились игрой также как я наслаждался, создавая ее!'
				},
				onHide: {
					fn: 'backTo',
					args: ['', { isForce: true }]
				}
			}
		],

		units: [
			{x: 2, y: 9, type: 'catapult', ownerId: 1},
			{x: 4, y: 9, type: 'elemental', ownerId: 1},
			{x: 3, y: 9, type: 'demon-lord', ownerId: 1},
			{x: 6, y: 9, type: 'archer', ownerId: 1},
			{x: 7, y: 9, type: 'wisp', ownerId: 1},
			{x: 7, y: 2, type: 'saeth-heavens-fury', ownerId: 1},
			{x: 12, y: 4, type: 'dragon', ownerId: 1},
			{x: 13, y: 4, type: 'demon-lord', ownerId: 1},
			{x: 6, y: 15, type: 'valadorn', ownerId: 0},
			{x: 8, y: 15, type: 'galamar', ownerId: 0},
			{x: 7, y: 15, type: 'golem', ownerId: 0},
			{x: 5, y: 15, type: 'elemental', ownerId: 0},
			{x: 6, y: 16, type: 'wisp', ownerId: 0},
			{x: 7, y: 16, type: 'catapult', ownerId: 0},
			{x: 10, y: 14, type: 'dragon', ownerId: 0}
		],
		buildings: [
			{x: 0, y: 12, type: 'farm', state: 'normal'},
			{x: 3, y: 16, type: 'farm', state: 'normal'},
			{x: 3, y: 9, type: 'castle', state: 'normal', ownerId: 1},
			{x: 4, y: 3, type: 'farm', state: 'normal', ownerId: 1},
			{x: 7, y: 4, type: 'farm', state: 'normal', ownerId: 1},
			{x: 9, y: 1, type: 'farm', state: 'normal', ownerId: 1},
			{x: 12, y: 3, type: 'farm', state: 'normal', ownerId: 1},
			{x: 13, y: 4, type: 'castle', state: 'normal', ownerId: 1},
			{x: 6, y: 9, type: 'farm', state: 'normal', ownerId: 1},
			{x: 4, y: 11, type: 'farm', state: 'normal'},
			{x: 12, y: 15, type: 'farm', state: 'normal', ownerId: 0},
			{x: 8, y: 17, type: 'farm', state: 'normal', ownerId: 0},
			{x: 8, y: 15, type: 'castle', state: 'normal', ownerId: 0},
			{x: 10, y: 9, type: 'farm', state: 'destroyed'},
			{x: 12, y: 6, type: 'farm', state: 'destroyed'}
		],
		terrain: {
			x0y0: 'water-1',
			x0y1: 'water-1',
			x0y2: 'water-1',
			x0y3: 'water-1',
			x0y4: 'water-1',
			x0y5: 'water-3',
			x1y0: 'stone-1',
			x1y1: 'forest-2',
			x1y2: 'stone-1',
			x1y3: 'water-1',
			x1y4: 'water-2',
			x1y5: 'water-1',
			x2y0: 'forest-1',
			x2y1: 'stone-1',
			x2y2: 'forest-1',
			x2y3: 'water-1',
			x2y4: 'water-1',
			x2y5: 'water-3',
			x3y0: 'stone-1',
			x3y1: 'stone-1',
			x3y2: 'forest-2',
			x3y3: 'water-1',
			x3y4: 'water-1',
			x3y5: 'water-1',
			x4y0: 'stone-1',
			x4y1: 'stone-1',
			x4y2: 'stone-1',
			x4y3: 'terra-1',
			x4y4: 'stone-1',
			x4y5: 'water-1',
			x5y0: 'stone-1',
			x5y1: 'forest-2',
			x5y2: 'terra-1',
			x5y3: 'stone-1',
			x5y4: 'forest-1',
			x5y5: 'water-1',
			x6y0: 'hill-1',
			x6y1: 'terra-1',
			x6y2: 'terra-2',
			x6y3: 'terra-1',
			x6y4: 'forest-1',
			x6y5: 'stone-1',
			x7y0: 'terra-1',
			x7y1: 'terra-5',
			x7y2: 'terra-3',
			x7y3: 'terra-1',
			x7y4: 'terra-1',
			x7y5: 'forest-2',
			x8y0: 'forest-2',
			x8y1: 'terra-1',
			x8y2: 'terra-4',
			x8y3: 'terra-1',
			x8y4: 'terra-1',
			x8y5: 'hill-1',
			x9y0: 'stone-1',
			x9y1: 'terra-1',
			x9y2: 'terra-1',
			x9y3: 'stone-1',
			x9y4: 'terra-1',
			x9y5: 'terra-1',
			x10y0: 'forest-1',
			x10y1: 'stone-1',
			x10y2: 'stone-1',
			x10y3: 'hill-1',
			x10y4: 'terra-1',
			x10y5: 'hill-1',
			x11y0: 'forest-2',
			x11y1: 'forest-1',
			x11y2: 'hill-1',
			x11y3: 'terra-1',
			x11y4: 'forest-2',
			x11y5: 'road-1',
			x12y0: 'forest-1',
			x12y1: 'forest-2',
			x12y2: 'forest-1',
			x12y3: 'terra-1',
			x12y4: 'terra-1',
			x12y5: 'road-1',
			x13y0: 'forest-2',
			x13y1: 'hill-1',
			x13y2: 'terra-2',
			x13y3: 'terra-1',
			x13y4: 'terra-1',
			x13y5: 'road-1',
			x0y6: 'water-1',
			x1y6: 'water-1',
			x2y6: 'water-1',
			x3y6: 'water-1',
			x4y6: 'water-1',
			x5y6: 'water-1',
			x6y6: 'water-1',
			x7y6: 'water-1',
			x8y6: 'water-1',
			x9y6: 'forest-1',
			x10y6: 'terra-1',
			x11y6: 'road-1',
			x12y6: 'terra-1',
			x13y6: 'forest-2',
			x0y7: 'stone-1',
			x1y7: 'forest-2',
			x2y7: 'water-1',
			x3y7: 'water-1',
			x4y7: 'water-2',
			x5y7: 'water-1',
			x6y7: 'water-3',
			x7y7: 'water-1',
			x8y7: 'water-1',
			x9y7: 'forest-1',
			x10y7: 'road-1',
			x11y7: 'road-1',
			x12y7: 'hill-1',
			x13y7: 'forest-2',
			x0y8: 'forest-1',
			x1y8: 'forest-1',
			x2y8: 'forest-2',
			x3y8: 'water-1',
			x4y8: 'water-1',
			x5y8: 'water-1',
			x6y8: 'water-1',
			x7y8: 'water-1',
			x8y8: 'stone-1',
			x9y8: 'road-1',
			x10y8: 'road-1',
			x11y8: 'terra-1',
			x12y8: 'stone-1',
			x13y8: 'forest-1',
			x0y9: 'road-1',
			x1y9: 'road-1',
			x2y9: 'stone-1',
			x3y9: 'terra-1',
			x4y9: 'terra-1',
			x5y9: 'stone-1',
			x6y9: 'terra-1',
			x7y9: 'hill-1',
			x8y9: 'road-1',
			x9y9: 'road-1',
			x10y9: 'terra-1',
			x11y9: 'forest-2',
			x12y9: 'water-1',
			x13y9: 'water-1',
			x0y10: 'hill-1',
			x1y10: 'road-1',
			x2y10: 'road-1',
			x3y10: 'road-1',
			x4y10: 'road-1',
			x5y10: 'road-1',
			x6y10: 'road-1',
			x7y10: 'road-1',
			x8y10: 'road-1',
			x9y10: 'terra-1',
			x10y10: 'water-1',
			x11y10: 'water-1',
			x12y10: 'water-1',
			x13y10: 'water-3',
			x0y11: 'stone-1',
			x1y11: 'hill-1',
			x2y11: 'terra-1',
			x3y11: 'road-1',
			x4y11: 'terra-1',
			x5y11: 'forest-1',
			x6y11: 'forest-2',
			x7y11: 'terra-1',
			x8y11: 'stone-1',
			x9y11: 'water-1',
			x10y11: 'water-1',
			x11y11: 'water-1',
			x12y11: 'water-1',
			x13y11: 'water-1',
			x0y12: 'terra-1',
			x1y12: 'terra-1',
			x2y12: 'forest-2',
			x3y12: 'road-1',
			x4y12: 'stone-1',
			x5y12: 'water-1',
			x6y12: 'water-1',
			x7y12: 'bridge-2',
			x8y12: 'water-1',
			x9y12: 'water-1',
			x10y12: 'water-2',
			x11y12: 'water-1',
			x12y12: 'water-1',
			x13y12: 'water-1',
			x0y13: 'forest-1',
			x1y13: 'stone-1',
			x2y13: 'terra-1',
			x3y13: 'road-1',
			x4y13: 'hill-1',
			x5y13: 'water-1',
			x6y13: 'water-1',
			x7y13: 'bridge-2',
			x8y13: 'water-1',
			x9y13: 'water-1',
			x10y13: 'water-1',
			x11y13: 'water-1',
			x12y13: 'forest-1',
			x13y13: 'forest-1',
			x0y14: 'water-1',
			x1y14: 'water-1',
			x2y14: 'stone-1',
			x3y14: 'road-1',
			x4y14: 'terra-1',
			x5y14: 'water-1',
			x6y14: 'water-1',
			x7y14: 'road-1',
			x8y14: 'hill-1',
			x9y14: 'forest-1',
			x10y14: 'terra-1',
			x11y14: 'terra-1',
			x12y14: 'terra-1',
			x13y14: 'forest-2',
			x0y15: 'water-1',
			x1y15: 'water-1',
			x2y15: 'forest-1',
			x3y15: 'road-1',
			x4y15: 'road-1',
			x5y15: 'road-1',
			x6y15: 'terra-1',
			x7y15: 'road-1',
			x8y15: 'terra-1',
			x9y15: 'terra-1',
			x10y15: 'hill-1',
			x11y15: 'terra-1',
			x12y15: 'terra-1',
			x13y15: 'stone-1',
			x0y16: 'water-2',
			x1y16: 'water-1',
			x2y16: 'water-1',
			x3y16: 'terra-1',
			x4y16: 'terra-1',
			x5y16: 'road-1',
			x6y16: 'road-1',
			x7y16: 'road-1',
			x8y16: 'road-1',
			x9y16: 'road-1',
			x10y16: 'road-1',
			x11y16: 'road-1',
			x12y16: 'road-1',
			x13y16: 'road-1',
			x0y17: 'water-1',
			x1y17: 'water-3',
			x2y17: 'water-1',
			x3y17: 'water-1',
			x4y17: 'water-1',
			x5y17: 'forest-1',
			x6y17: 'stone-1',
			x7y17: 'road-1',
			x8y17: 'terra-1',
			x9y17: 'forest-1',
			x10y17: 'forest-1',
			x11y17: 'forest-2',
			x12y17: 'stone-1',
			x13y17: 'forest-1'
		}
	};

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc) {

	"use strict";
	/*global window, document, location, Image */
	/*global Backbone, $, APP, log */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var proto;

	APP.BB.BaseView = Backbone.View.extend({

		events: {
			// base
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',

			// hide view
			'hide': 'hide',

			// no scroll
			'touchmove .js-no-scroll': 'stopEvent',
			'gesturestart .js-no-scroll': 'stopEvent',
			'gesturechange .js-no-scroll': 'stopEvent',
			'gestureend .js-no-scroll': 'stopEvent',

			// fix extra scroll for iOS
			'touchstart .js-scroll-area-container': 'touchStartAutoScroll',

			// external
			'click .js-list-backward[data-group-name]': 'changeSelect',
			'click .js-list-changed-item[data-group-name]': 'changeSelect',
			'click .js-list-forward[data-group-name]': 'changeSelect',

			// tabs
			'click .js-tab-button': 'tabAction',
			'click .js-tab-close': 'tabClose'

		},

		popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper'
		},

		// will be change after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend'],
			dbl: ['dblclick', 'doubletap']
		},

		initStatic: function () {

			proto.$wrapper = $(this.selectors.wrapper);

			var info = win.APP.info,
				isTouch = info.get('isTouch', true),
				eventTypesIndex = Number(isTouch),
				types = this.eventTypes,
				os = info.get('os', true);

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			// sounds
			proto.events[types['down'] + ' [data-sound]'] = 'playSound';

			proto.$wrapper.addClass(os);
			proto.$wrapper.addClass('isMobile_' + isTouch);

			$(doc.body).on('contextmenu', this.stopEvent);

		},

		constructor: function() {

			this.events = $.extend( {}, proto.events, this.events );

			this.selectors = $.extend( {}, proto.selectors, this.selectors );

			this.attr = {};

			this.setClassNames();

			return Backbone.View.prototype.constructor.apply(this, arguments);
		},

		setClassNames: function () {

			this.classNames = {};

			_.each(this.selectors, function (value, key) {
				this[key] = value.replace(/\./g, ' ').trim();
			}, this.classNames);

		},

		initialize: function() {

			this.delegateEvents(); // fix for case -> get html async

		},

		changeSelect: function (e) { // external

			var $this = $(e.currentTarget),
				direction = $this.hasClass('js-list-backward') ? -1 : 1,
				groupName = $this.attr('data-group-name'),
				$container = this.$el.find('.js-list-changed-item[data-full-list][data-group-name="' + groupName + '"]'),
				listData = JSON.parse(decodeURI($container.attr('data-full-list'))),
				listLength = listData.length,
				currentKey = $container.attr('data-key'),
				followIndex = 0,
				followData;

			// find current index
			listData.every(function (obj, i) {
				if ( obj.key.toString() === currentKey ) {
					followIndex = i + direction;
					return false;
				}
				return true;
			});

			// adjust follow index
			if ( followIndex < 0 ) {
				followIndex = listLength - 1;
			}

			if ( followIndex >= listLength ) {
				followIndex = 0;
			}

			followData = listData[followIndex];

			$container.attr('data-key', followData.key);
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		hide: function () {
			log('hide view');

			this.undelegateEvents();

			if (this.unbindEventListeners) {
				this.unbindEventListeners();
			}

			this.$el.remove();

		},

		render: function () {

			var $oldContainer = this.$wrapper.find('> div');
			$oldContainer.trigger('hide');

			this.$wrapper.append(this.$el);
			this.util.setSizes();
			this.util.toTop();

		},

		navigate: function() { //url, options
			APP.bb.router.navigate.apply(APP.bb.router, arguments);
		},

		routeTo: function(e) {

			var $this = $(e.currentTarget),
				route = $this.attr('data-route');

			this.navigate(route, true);

		},

		routeByUrl: function(route, options) {
			this.navigate(route, options);
		},

		routeToPopup: function () {

			var view = this;

			view.routeByUrl(Backbone.history.fragment + '?' + view.popupUrl);

		},

		routeBack: function(e) {

			this.stopEvent(e);

			if (location.hash) {
				Backbone.history.history.back();
			}

		},

		backTo: function (url, data) {

			data = data || {};

			var view = this,
				router = win.APP.bb.router;
			router.isForce = data.isForce;

			(function backTo() {
				setTimeout(function () {
					if (Backbone.history.fragment === url) {
						router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 200);
			}());

		},

		showPopup: function(data) {

			var view = this,
				deferred = $.Deferred(),
				popup;

			view.hidePopup();

			setTimeout(function () {
				popup =	new APP.BB.PopupView(data);
				popup.set('deferred', deferred);
			}, 50);

			return deferred.promise();

		},

		showTicket: function (data) {

			var deferred = $.Deferred(),
				popup;

			setTimeout(function () {
				popup =	new APP.BB.TicketView(data);
				popup.set('deferred', deferred);
			}, 50);

			return deferred.promise();

		},

		hidePopup: function () {

			$('.js-popup-wrapper').trigger('hide');

		},

		hidePopups: function (data) {

			data = data || {};

			var view = this,
				deferred = $.Deferred();

			(function hidePopups () {
				setTimeout(function () {
					if (view.isPopupExist()) {
						view.routeBack();
						hidePopups();
					} else {
						deferred.resolve();
					}
				}, data.timePadding || 0); // def se time out for routing is 50
			}());

			return deferred.promise();

		},

		isPopupExist: function () {
			var view = this,
				url = win.location.href,
				popupPart = view.popupUrl;

			return url.indexOf(popupPart) !== -1;

		},

		stopEvent: function(e) {

			if (e && e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}

		},

		toExternalLink: function(e) {

			this.stopEvent(e);

			var $this = $(e.currentTarget),
				url = $this.attr('href');

			win.open(url);

		},
		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},
		get: function (key) {
			return this.attr[key];
		},

		extendFromObj: function (data) {
			_.extend(this.attr, data);
		},

		touchStartAutoScroll: function (e) {

			if ( !this.info.get('isIOS', true) ) { // do for IOS only
				return;
			}

			var $wrapper = $(e.currentTarget),
				$scrollArea = $wrapper.find('> div'),
				scrollTop = $wrapper.scrollTop(),
				wrapperHeight,
				scrollAreaHeight,
				maxScrollTop;

			if (scrollTop <= 0) {
				$wrapper.scrollTop(1);
				return;
			}

			wrapperHeight = $wrapper.outerHeight();
			scrollAreaHeight = $scrollArea.outerHeight();
			maxScrollTop = scrollAreaHeight - wrapperHeight;

			if ( scrollTop >= maxScrollTop ) {
				$wrapper.scrollTop(maxScrollTop - 1);
			}

		},

		tabAction: function (e) {

			var view = this,
				$el = view.$el,
				$button = $(e.currentTarget),
				tabId = $button.attr('data-tab-id'),
				tabState = $button.attr('data-tab-state'),
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$block = $el.find(tabBlockSelector + '[data-tab-id="' + tabId + '"]'),
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

			if (tabState === 'close') {
				$button
					.attr('data-tab-state', 'open')
					.removeClass(tabButtonClassPrefix + 'close')
					.addClass(tabButtonClassPrefix + 'open');
				$block.removeClass('hidden');
			}

		},

		tabClose: function () {

			var view = this,
				$el = view.$el,
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

		},

		playSound: function (e) {

			var $this = $(e.currentTarget),
				sound = $this.attr('data-sound');

			win.APP.soundMaster.play({
				sound: sound,
				road: 3,
				isLoop: false
			});

		},

		autoShowHelpButton: function () {

			var view = this,
				info = view.info,
				isShow = info.get('help'),
				$helpButton = view.$wrapper.find('.js-help-button');

			if (isShow === 'on') {
				$helpButton.removeClass('hidden');
			} else {
				$helpButton.addClass('hidden');
			}

		}

	});

	proto = win.APP.BB.BaseView.prototype;

	proto.tmpl = win.APP.templateMaster.tmplFn;
	proto.proto = proto;
	proto.info = win.APP.info;

	proto.util = {
		toTop: function () {
			win.scrollTo(0, 0);
		},
		setSizes: function () {

			log('set sizes');

		},
		onResize: function () {
			log('on resize');
			this.setSizes();
		},
		init: function () {
			win.addEventListener('resize', this.onResize.bind(this), false);
		},
		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		},
		hideSymbols: function (str, sign) {
			sign = sign || '?';
			return str.toString().replace(/[\d\w]/g, sign);
		},
		//themeList: ['coffee', 'black-coffee', 'owl', 'owl owl-black'],
		//themeDefault: 'coffee',
		//
		//setTheme: function (themeName) {
		//
		//	var $body = $(doc.body);
		//
		//	_.each(this.themeList, function (themeName) {
		//		$body.removeClass(themeName);
		//	});
		//
		//	$body.addClass(themeName);
		//
		//	win.APP.info.set('theme', themeName);
		//
		//},
		//loadSavedTheme: function () {
		//
		//	var themeName = win.APP.info.get('theme') || this.themeDefault;
		//
		//	this.setTheme(themeName);
		//
		//},
		runIfConnect: function (calback, context) {
			var img = new Image();
			img.addEventListener('load', calback.call(context), false);
			img.src = 'http://statlex.com/i/statlex-icon.png?t=' + Date.now();
		},
		getXYFromStringXY: function (xy) {
			return {
				x: parseInt(xy.replace(/^x(\-?\d+)y\d+$/, '$1'), 10),
				y: parseInt(xy.replace(/^x\d+y(\-?\d+)$/, '$1'), 10)
			};
		},
		getStringFromXY: function (x, y) {
			return 'x' + x + 'y' + y;
		},
		getXyFromStyle: function (style) {
			var xy = style.replace(/^[\s\S]+translate3d\(/, '').match(/\-?\d+(\.\d*)?/g);

			return {
				x: parseInt(xy[0], 10),
				y: parseInt(xy[1], 10)
			};
		},
		findIn: function (context, selector) {
			return context.querySelector(selector);
		},
		findInAll: function (context, selector) {
			return Array.prototype.slice.call(context.querySelectorAll(selector));
		}

	};

	proto.util.init();

}(window, document));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TitleView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			var view = this;

			view.$el = $(view.tmpl.title());

			view.proto.initialize.apply(view, arguments);

			view.render();

			log('do not show showRateUs');
			//this.showRateUs();

		},

		showRateUs: function () {

			this.util.runIfConnect(function () {
				setTimeout(function () {
					win.APP.bb.rate = new win.APP.BB.RateView();
					win.APP.bb.rate.show();
				}, 50);
			}, this);

		}

	});

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PopupView = APP.BB.BaseView.extend({

		events: {
			'click .js-popup-container': 'stopEvent',
			'click .js-confirmed-end-turn': 'confirmedEndTurn',
			'click .js-restart-battle': 'restartBattle',
			'click .js-quit-battle': 'quitBattle',
			'click .js-quit-map-editor': 'quitMapEditor',
			'click .js-open-map-in-editor': 'openMapInEditor',
			'click .js-delete-user-map': 'deleteUserMap',
			'click .js-clear-map': 'clearMap',
			'click .js-disable-all-tips': 'disableAllTips'
		},

		selectors: {
			popupContainer: '.js-popup-container'
		},

		initialize: function(data) {

			var view = this,
				popupUrl = view.popupUrl,
				url = win.location.href;

			if ( url.indexOf(popupUrl) === -1 ) {
				view.routeToPopup();
			}

			view.extendFromObj(data); // popupName, parentView, popupData(objToView)


			view.$el = $(view.tmpl['popup-wrapper']());

			view.$el.addClass(data.from || 'left');

			if (data.cssClass) {
				view.$el.addClass(data.cssClass);
			}

			view.proto.initialize.apply(this, arguments);

			view.render();

			view.showInAnimation();

		},

		render: function () {

			var view = this,
				append$el = view.get('append$el'),
				popupData = view.get('popupData') || {},
				playSound = view.get('playSound'),
				$content = $(view.tmpl[view.get('popupName')](popupData)),
				$container = view.$el.find(view.selectors.popupContainer),
				onShow = view.get('onShow'),
				context;

			if (playSound) {
				win.APP.soundMaster.play(playSound);
			}

			$container.html( $content.html() );

			if (append$el) {
				$container.append(append$el);
			}

			view.$wrapper.append('<div class="js-popup-protector popup-protector"></div>');
			view.$wrapper.append(view.$el);

			if (!onShow) {
				return;
			}

			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);

		},

		hide: function () {

			var view = this;


			view.showOutAnimation().then(function () {

				var $popupProtector = view.$wrapper.find('.js-popup-protector');
				setTimeout(function () {
					$popupProtector.remove();
				}, view.info.actionTime() + 50);

				view.proto.hide.call(view);
				view.get('deferred').resolve();

				var onHide = view.get('onHide'),
					//battleData = win.APP.bb.battleData,
					context;

				if (!onHide) {
					return;
				}

				context = onHide.context || view;

				//if ( onHide.fn === 'backTo' ) {
					//battleData.isEndGame = 'yes';
					//battleData.gameTo = 'quit';
				//}

				context[onHide.fn].apply(context, onHide.args);

			});

		},

		// actions

		confirmedEndTurn: function (e) {

			var view = this,
				parentView = view.get('parentView');

			view.stopEvent(e);
			view.routeBack();

			parentView.confirmedEndTurn();

		},

		restartBattle: function (e) {

			var view = this,
				parentView = view.get('parentView');

			//battleData = win.APP.bb.battleData;
			if (e && e.currentTarget && $(e.currentTarget).attr('data-on-hide') === 'none') {
				view.set('onHide', false);
			}

			//battleData.isEndGame = 'yes';
			//battleData.gameTo = 'restart';

			view.hide();
			view.routeBack();
			setTimeout(function () {
				parentView.restart();
			}, 50);

		},

		quitBattle: function (e) {

			var view = this;

			if (e && e.currentTarget && $(e.currentTarget).attr('data-on-hide') === 'none') {
				view.set('onHide', false);
			}

			//battleData = win.APP.bb.battleData;

			//battleData.isEndGame = 'yes';
			//battleData.gameTo = 'quit';

			//debugger
			//view.hide();
			//view.routeBack();

			view.backTo('play', { isForce: true });

		},

		quitMapEditor: function () {

			this.backTo('', { isForce: true });

		},

		showInAnimation: function () {

			var view = this;
			setTimeout(function () { // show animation
				view.$el.addClass('show-in');
			}, 50);

		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				deferred = $.Deferred(),
				transitionEnd = view.info.get('transitionEnd', true);

			$el.one(transitionEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('show-out');

			return deferred.promise();

		},

		disableAllTips: function () {

			var view = this,
				info = view.info;

			info.set('help', 'off');
			view.autoShowHelpButton();
			view.routeBack();

		},

		openMapInEditor: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				parentView = view.get('parentView'),
				jsMapKey = $this.attr('data-map-name');

			win.APP.map.db.getMap({
				jsMapKey: jsMapKey,
				type: 'userMap'
			}).then(function (map) {
				parentView.initialize({
					map: map
				});
			});

		},

		openMap: function (jsMapKey, data) {

			new APP.BB.SkirmishSetupMapView(jsMapKey, data);

		},

		deleteUserMap: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				parentView = view.get('parentView'),
				mapType = 'userMap',
				lang = win.APP.lang,
				mapName = $this.attr('data-user-map-name');

			parentView.deleteMap({
				mapName: mapName,
				jsMapKey: 'userMap_' + mapName,
				type: mapType
			});

			view.$el.find('.js-user-map-wrapper[data-user-map-name="' + mapName + '"]').remove();

			if ( !view.$el.find('.js-user-map-wrapper').length ) {
				view.$el.find('.js-popup-header').html(lang.get('noSavedMaps'));
			}

		},

		clearMap: function () {

			var view = this,
				parentView = view.get('parentView');

			parentView.clearMap();

			view.routeBack();


		}

	});

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.TicketView = APP.BB.BaseView.extend({

		events: {

		},

		selectors: {

		},

		initialize: function(data) {

			var view = this,
				timeoutId;

			view.extendFromObj(data); // popupName, parentView, popupData(objToView)

			view.$el = $(view.tmpl['ticket-wrapper'](data.popupData));

			if (data.cssClass) {
				view.$el.addClass(data.cssClass);
			}

			view.proto.initialize.apply(this, arguments);

			view.bindEventListeners();

			view.render();

			view.showInAnimation();

			timeoutId = setTimeout(function () {
				view.hide();
			}, view.info.actionTime() * 6);

			view.set('timeoutId', timeoutId);

		},

		bindEventListeners: function () {
			var view = this;
			view.$el.on('click', $.proxy(view, 'hide' ));
		},

		unbindEventListeners: function () {
			var view = this;
			view.$el.off('click', view.hide );
			clearTimeout(view.get('timeoutId'));
		},

		render: function () {

			var view = this,
				playSound = view.get('playSound');

			if (playSound) {
				win.APP.soundMaster.play(playSound);
			}

			view.$wrapper.append(view.$el);

		},

		hide: function () {

			var view = this;

			view.showOutAnimation().then(function () {
				view.proto.hide.call(view);
				view.get('deferred').resolve();
			});

		},

		showInAnimation: function () {

			var view = this;
			setTimeout(function () { // show animation
				view.$el.addClass('show-in');
			}, 50);

		},

		showOutAnimation: function () {

			var view = this,
				$el = view.$el,
				deferred = $.Deferred(),
				transitionEnd = view.info.get('transitionEnd', true);

			$el.one(transitionEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('show-out');

			return deferred.promise();

		}

	});

}(window));(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	var d = 86400e3; // d -> day -> 86400sec -> 86400 000

	APP.BB.RateView = APP.BB.BaseView.extend({

		events: {
			'click .js-five-stars': 'fiveStars'
		},

		showPeriod: 3 * d,

		initialize: function () {

			var os = this.info.get('os', true),
				level = this.info.withAds ? 'normal' : 'pro',
				link = this.info.link[os][level];

			this.$el = $(this.tmpl.rate({ link: link }));

			return this;

		},
		show: function () {

			var rateData = this.info.get('rate') || {},
				isRated = rateData.isRated,
				now = Date.now(),
				lastShowTime = rateData.lastShowTime;

			// if it is first time for show
			// we set last show time to now
			// to do not show rate us on first time
			if ( !lastShowTime ) {
				rateData.lastShowTime = now;
				lastShowTime = now;
				this.info.set('rate', rateData);
				return;
			}

			// check for rate
			if (isRated) {
				return;
			}

			//check for last show time
			if (now - lastShowTime < this.showPeriod) {
				return;
			}

			// save last show date
			rateData.lastShowTime = now;
			this.info.set('rate', rateData);

			this.routeToPopup();

			this.proto.initialize.apply(this, arguments);

			this.render();

		},
		render: function () {

			this.$wrapper.append(this.$el);

		},

		fiveStars: function () {

			var rateData = this.info.get('rate') || {};
			rateData.isRated = true;
			this.info.set('rate', rateData);

			this.routeBack();


		}

	});

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SettingsView = APP.BB.BaseView.extend({

		selectors: {
			settingsWrapper: '.js-battle-settings-wrapper',
			onOffSetting: '.js-change-on-off-setting',
			style: '.js-game-speed-style'
		},

		events: {
			'click .js-change-on-off-setting-wrapper': 'changeOnOffSetting',
			'click .js-change-select-setting': 'changeSelectSetting',
			'click .js-setting-item-wrapper': 'changeSettings',
			'hide-battle-setting': 'hide'
		},

		initialize: function (data) {

			var view = this,
				isBattleState = /^battle/.test(Backbone.history.fragment);

			view.$el = $(this.tmpl.settings({ view: view, info: view.info, isBattleState: isBattleState }));

			view.extendFromObj(data);

			view.set('args', data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				$mainWrapper = view.$wrapper,
				$wrapper = $mainWrapper.find(view.selectors.settingsWrapper),
				battleView = view.get('view');

			if ($wrapper.length) {
				$wrapper.empty().append(view.$el);
				battleView.$el.find(battleView.selectors.moveAreaContainer).addClass('hidden');
				return;
			}

			view.proto.render.call(view);

		},

		changeOnOffSetting: function (e) {

			var view = this,
				$wrapper = $(e.currentTarget),
				$this = $wrapper.find(view.selectors.onOffSetting),
				key = $this.attr('data-key'),
				value = ( $this.attr('data-value') === 'on' ) ? 'off' : 'on';

			if ( value === 'on' ) {
				$this.addClass('on-off-enable');
			} else {
				$this.removeClass('on-off-enable');
			}

			$this.attr( 'data-value', value );
			view.info.set(key, value);

			switch (key) {

				case 'help':
					view.autoShowHelpButton();
					break;

				case 'buildingSmoke':
					view.autoShowBuildingSmoke();
					break;

				case 'unitAnimation':
					view.autoShowUnitAnimation();
					break;

				case 'music':
					view.autoSetMusic();
					break;

			}

		},

		changeSelectSetting: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				key = $this.attr('data-key'),
				value = $this.attr('data-value'),
				$nodes = view.$el.find('.js-change-select-setting[data-key="' + key + '"]');

			$nodes.addClass('opacity50');
			$nodes.removeClass('selected-in-list');

			$this.removeClass('opacity50');
			$this.addClass('selected-in-list');

			view.info.set(key, value);

			switch (key) {

				case 'language':
					win.APP.lang.set(value);
					new view.constructor(view.get('args')); // do not use this.loadUrl(); cause this view used in battle view
					break;

				case 'gameSpeed':
					view.setSpeedStyle();
					break;

				case 'font':
					view.autoSetFont();
					break;

			}

		},

		setSpeedStyle: function () {

			var view = this,
				speed = parseInt(view.info.get('gameSpeed'), 10),
				time = view.info.actionTime(),
				$style = view.tmpl['game-speed']({time: time - 100});

			view.$wrapper.find(view.selectors.style).remove();

			view.$wrapper.append($style);

		},

		autoShowBuildingSmoke: function () {

			var view = this,
				info = view.info,
				smokeState = info.get('buildingSmoke'),
				battleView = $('.js-battle-view-wrapper');

			// todo: do the same for autoShowUnitAnimation

			if (!battleView.length) {
				return;
			}

			if (smokeState === 'on') {
				battleView.trigger('showHouseSmoke');
			} else {
				battleView.trigger('hideHouseSmoke');
			}

		},

		autoShowUnitAnimation: function () {

			var view = this,
				info = view.info,
				unitAnimationState = info.get('unitAnimation');

			if (unitAnimationState === 'on') {
				view.$wrapper.removeClass('hide-unit-animation');
			} else {
				view.$wrapper.addClass('hide-unit-animation');
			}

		},

		autoSetFont: function () {

			var view = this,
				info = view.info,
				fontId = info.get('font'),
				allFonts = info.availableFonts,
				font = _.find(allFonts, { id: fontId }),
				$body = $(win.document.body);

			_.each(allFonts, function (font) {
				$body.removeClass(font.cssClass);
			});

			$body.addClass(font.cssClass);

		},

		autoSetMusic: function () {

			var view = this,
				info = view.info,
				musicState = info.get('music'),
				soundMaster = win.APP.soundMaster;

			if (musicState === 'on') {
				soundMaster.restoreBgSound();
			} else {
				soundMaster.stopBgSound();
			}

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.PlayView = APP.BB.BaseView.extend({

		selectors: {
			startGame: '.js-start-game'
		},

		events: {
			'click .js-start-game': 'startGame'
		},

		initialize: function () {

			this.$el = $(this.tmpl.play());

			this.proto.initialize.apply(this, arguments);

			this.render();

		},

		startGame: function () {
			this.routeByUrl('select-level', {trigger: false});

			new APP.BB.SelectLevelView({
				newGame: true
			});

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.AboutView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.about());

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.InstructionsView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function () {

			this.$el = $(this.tmpl.instructions());

			this.proto.initialize.apply(this, arguments);

			this.render();

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.LoadGameView = APP.BB.BaseView.extend({

		events: {
			'click .js-load-game': 'loadGame'
		},

		initialize: function () {

			var view = this,
				dbMaster = win.APP.map.db;


			dbMaster.getSavedGames().then(function (savedGames) {
				view.$el = $(view.tmpl.loadGame({ savedGames: savedGames }));
				view.proto.initialize.apply(view, arguments);
				view.render();
			});

		},

		loadGame: function (e) {

			var view = this,
				dbMaster = win.APP.map.db,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name');

			dbMaster.getSavedGame(gameName).then(function (data) {
				var game = JSON.parse(data.game);
				game.fromSave = true;
				new win.APP.BB.BattleView(game);
			});

			view.routeByUrl('battle', { trigger: true });

		}

	});

}(window));
(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SelectLevelView = APP.BB.BaseView.extend({

		events: {

		},

		initialize: function (data) {

			data = data || {};

			var view = this;

			win.APP.map.db.getMapsInfo({ type: 'mission' }).then(function (mapsInfo) {

				view.$el = $(view.tmpl.selectLevel({
					mapsInfo: mapsInfo
				}));

				view.proto.initialize.apply(view, arguments);

				if (data.newGame) {
					view.routeByUrl('mission-setup-map/mission_001_001', { trigger: true });
					return;
				}

				view.render();

			});

		}

	});

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSelectMapView = APP.BB.BaseView.extend({

		events: {
			'click .js-map-preview': 'showMapPreview'
		},

		squareSize: {
			max: 24
		},

		initialize: function (data) {

			data = data || {};

			var view = this;

			win.APP.map.db.getMapsInfo(data).then(function (mapsData) {

				var mapsInfo = [];

				_.each(mapsData, function (item, key) {
					item.jsKey = key;
					mapsInfo.push(item);
				});

				if (data.type === 'userMap') {

					mapsInfo = mapsInfo.sort(function (a, b) {
						return ((a.maxPlayers + a.name) > (b.maxPlayers + b.name)) ? 1 : -1;
					});

					view.$el = $(view.tmpl.skirmishSelectMap({
						mapsInfo: mapsInfo,
						urlPrefix: 'user-map-setup-map'
					}));

				} else { // skirmish

					view.$el = $(view.tmpl.skirmishSelectMap({
						mapsInfo: mapsInfo,
						urlPrefix: 'skirmish-setup-map'
					}));

				}

				view.proto.initialize.apply(view, arguments);

				view.render();

			});


		},

		showMapPreview: function (e) {

			var view = this,
				$el = view.$el,
				dbMaster = win.APP.map.db,
				$this = $(e.currentTarget),
				jsMapKey = $this.attr('data-js-map-key'),
				mapType = $this.attr('data-map-type'),
				$previewWrapper = $el.find('[data-preview-wrapper-for="' + jsMapKey + '"]'),
				$previewImage = $el.find('[data-preview-image-for="' + jsMapKey + '"]');

			if ($previewWrapper.hasClass('hidden')) {
				$previewWrapper.removeClass('hidden');
				if ($previewImage.attr('src')) {
					return;
				}
				dbMaster.getMap({
					type: mapType,
					jsMapKey: jsMapKey
				}).then(function (data) {
					$previewImage.attr('src', view.getPreviewFromData(data));
				});

			} else {
				$previewWrapper.addClass('hidden');
			}

		},

		getPreviewFromData: function (data) {

			var view = this,
				canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d'),
				squareSize = view.squareSize.max,
				squareSizeX2 = squareSize * 2,
				terrains = data.terrain,
				mapWidth = data.size.width,
				mapHeight = data.size.height,
				mapTilesPreview = win.APP.mapTilesPreview,
				getXYFromStringXY = view.util.getXYFromStringXY,
				buildings = data.buildings,
				allColors = win.APP.map.allColors,
				noMansBuildingsList = win.APP.building.noMansBuildingsList,
				maxCanvasSize = win.APP.map.maxCanvasSize;

			while ( mapWidth * mapHeight * squareSize * squareSize * 4 >= maxCanvasSize ) {
				squareSize -= 4;
			}

			canvas.width = mapWidth * squareSizeX2;
			canvas.height = mapHeight * squareSizeX2;

			// reduce blur for ios devices
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTilesPreview[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			_.each(buildings, function (building) {

				var type = building.type,
					xy = {
						x: building.x,
						y: building.y
					},
					color = building.hasOwnProperty('ownerId') ? allColors[building.ownerId] : 'gray',
					state = building.state;

				if (state === 'destroyed') { // destroyed farm
					ctx.drawImage(mapTilesPreview[type + '-' + state].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
					return;
				}

				if ( _.contains(noMansBuildingsList, type) ) { // well or temple
					ctx.drawImage(mapTilesPreview[type].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
					return;
				}

				if (type === 'castle') {
					ctx.drawImage(mapTilesPreview[type + '-' + color].img, xy.x * squareSizeX2, (xy.y - 1) * squareSizeX2, squareSizeX2, squareSizeX2 * 2);
				} else {
					ctx.drawImage(mapTilesPreview[type + '-' + color].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
				}

			});

			return canvas.toDataURL();


		}

	});

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SkirmishSetupMapView = APP.BB.BaseView.extend({

		events: {
			'click .js-go-to-battle': 'goToBattle'
		},

		initialize: function (jsMapKey, data) {

			if (win.APP.bb.router.isForce) {
				return;
			}

			data = data || {};

			var view = this,
				mapType = data.type || 'skirmish';

			view.set('jsMapKey', jsMapKey);
			view.set('mapType', mapType);

			if ( mapType === 'mission' ) {

				win.APP.map.db.getMapInfo({
					jsMapKey: jsMapKey,
					type: mapType
				}).then(function (mapInfo) {

					new win.APP.BB.BattleView({
						jsMapKey: jsMapKey,
						type: mapType,
						money: 500,
						unitLimit: mapInfo.unitLimit,
						players: [
							{
								teamNumber: 1,
								id: 0,
								type: 'player',
								color: 'blue'

							},
							{
								teamNumber: 2,
								id: 1,
								type: 'cpu',
								color: 'red'
							}
						]
					});

					view.navigate('battle');

				});

				return;
			}

			win.APP.map.db.getMapInfo({
				jsMapKey: jsMapKey,
				type: view.get('mapType')
			}).then(function (mapInfo) {
				var viewData = view.createViewData(mapInfo);
				view.$el = $(view.tmpl.skirmishSetupMap(viewData));
				view.proto.initialize.apply(view, arguments);
				view.render();
			});

		},

		createViewData: function (map) {

			var viewData = {},
				util = win.APP.util,
				staticMapInfo = this.util.copyJSON(APP.map),
				i, len,
				playerData,
				playersData = [],
				colors = staticMapInfo.playerColors,
				playerType = staticMapInfo.playerTypes[0],
				list = {};

			function objToDataURL(obj) {
				return encodeURI(JSON.stringify(obj).replace(/\s/g, ''));
			}

			// set team number, color and type = cpu || player
			for (i = 1, len = map.maxPlayers; i <= len; i += 1) {
				playerData = {};
				playerData.teamNumber = i;
				colors = util.assortArray(colors);
				playerData.color = colors.pop();
				playersData.push(playerData);
				playerData.type = playerType;
			}
			viewData.playersData = playersData;

			// set money
			viewData.money = staticMapInfo.money[0];

			// set unit limit
			viewData.unitLimit = staticMapInfo.unitsLimits[0];

			// set lists
			// player types
			list.playerTypes = [];
			_.each(staticMapInfo.playerTypes, function (type) {
				list.playerTypes.push({
					key: type,
					value: win.APP.lang.get(type)
				});
			});
			list.playerTypes = objToDataURL(list.playerTypes);

			// team numbers
			list.teamNumber = [];
			for (i = 1, len = map.maxPlayers; i <= len; i += 1) {
				list.teamNumber.push({
					key: i,
					value: i
				});
			}
			list.teamNumber = objToDataURL(list.teamNumber);

			// money list
			list.money = [];
			_.each(staticMapInfo.money, function (value) {
				list.money.push({
					key: value,
					value: value
				});
			});
			list.money = objToDataURL(list.money);

			// money list
			list.unitsLimits = [];
			_.each(staticMapInfo.unitsLimits, function (value) {
				list.unitsLimits.push({
					key: value,
					value: value
				});
			});
			list.unitsLimits = objToDataURL(list.unitsLimits);

			viewData.list = list;

			return viewData;

		},

		goToBattle: function () {

			var data = {},
				$players = this.$el.find('.js-player-info-wrapper'),
				players = [],
				$money = this.$el.find('.js-money'),
				$unitLimit = this.$el.find('.js-unit-limit');

			data.jsMapKey = this.get('jsMapKey');
			data.type = this.get('mapType');

			data.money = parseInt($money.attr('data-key'), 10);

			data.unitLimit = parseInt($unitLimit.attr('data-key'), 10);

			$players.each(function (index) {

				var $this = $(this),
					teamNumber = parseInt($this.find('.js-player-team-number').attr('data-key'), 10),
					type = $this.find('.js-player-type').attr('data-key'),
					color = $this.find('.js-player-color').attr('data-player-color');

				players.push({
					teamNumber: teamNumber,
					id: index,
					type: type,
					color: color
				});

			});

			data.players = players;

			new win.APP.BB.BattleView(data);

			this.navigate('battle');

		}

	});

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win, doc) {

	// todo: bug - after resize on ios - smoke is wrong

	"use strict";
	/*global window, document, setTimeout, history, Image */
	/*global Backbone, $, templateMaster, APP, log, Mover, _ */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleView = APP.BB.BaseView.extend({

		events: {
			'click .js-end-turn': 'endTurn',
			'click .js-battle-menu-button': 'openMenu',
			'click .js-help-button': 'showHelp',
			'hideHouseSmoke': 'hideHouseSmoke',
			'showHouseSmoke': 'showHouseSmoke'
		},

		selectors: {
			mapImageWrapper: '.js-map-image-wrapper',
			mapImage: '.js-map-image',
			moveAreaWrapper: '.js-move-area-wrapper',
			moveAreaContainer: '.js-move-area-container',
			mainEventHandler: '.js-main-event-handler',
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
			viewCpuDisable: '.js-view-cpu-disable',
			square: '.js-square',
			statusBar: '.js-battle-view-status-bar',
			styleSquareSize: '.js-style-square-size',
			unitInfoWrapper: '.js-unit-info-wrapper',
			helpButton: '.js-help-button'
		},

		squareSize: win.APP.map.squareSize,

		initialize: function (data) {

			var view = this;

			view.detectClickEvent();

			view.$el = $(view.tmpl.battle());

			if (data.fromSave) {

				view.info.set('difficult', data.difficult);

				var args = {
					jsMapKey: data.jsMapKey,
					money: 500,
					players: data.players,
					unitLimit: data.unitLimit,
					difficult: data.difficult,
					fromSave: true
				};

				view.set('args', args);
				view.set('argsForRestart', data.argsForRestart);

				view.set('map', data.map);

				// see normal load
				view.set('model', new win.APP.BB.BattleModel({
					view: view,
					args: view.get('args'),
					map: view.get('map'),
					savedData: data
				}));

				view.set('markActiveSquare', {}); // {x: number, y: number}

				view.set('infoSquareXY', {x: 0, y: 0}); // {x: number, y: number}

				// set sizes
				view.setSize();

				// draw map
				//setTimeout(function () {
				view.drawMap();
				//}, 50);

				// draw buildings
				view.drawBuildings(); // +

				// draw units
				view.drawUnits(); // +

				view.drawGraves();

				// bind move area
				view.bindMoveArea();

				view.bindEventListeners();

				view.render();

				// start game from model
				view.get('model').startGame();

				view.proto.initialize.apply(view, arguments);

				return;
			}

			// get map
			view.set('args', data);
			view.set('argsForRestart', view.util.copyJSON(data));

			win.APP.map.db.getMap({
				jsMapKey: data.jsMapKey,
				type: data.type
			}).then(function (map) {

				view.set('map', map);

				view.set('model', new win.APP.BB.BattleModel({
					view: view,
					args: view.get('args'),
					map: view.get('map')
				}));

				view.set('markActiveSquare', {}); // {x: number, y: number}

				view.set('infoSquareXY', {x: 0, y: 0}); // {x: number, y: number}

				// set sizes
				view.setSize();

				 //draw map
				view.drawMap();

				// draw buildings
				view.drawBuildings();

				// draw units
				view.drawUnits();

				// bind move area
				view.bindMoveArea();

				view.bindEventListeners();

				view.render();

				// start game from model
				view.get('model').startGame();

				view.proto.initialize.apply(view, arguments);

			});

		},

		restart: function () {

			var view = this,
				args = view.get('argsForRestart');

			view.trigger('hide');

			new view.constructor(args);

		},

		disable: function () {
			this.$el.find(this.selectors.viewDisable).removeClass('hidden');
		},

		enable: function () {
			this.$el.find(this.selectors.viewDisable).addClass('hidden');
		},

		onClick: function (xy) {

			var view = this;

			view.markActiveSquare(xy);
			view.autoSetSquareInfo();

			// 0 - show unit available attack (using available path) - hold or dblclick
			// 1 - show unit info in popup - hold or dblclick
			// 5 - show available path - only for player unit - click

			view.get('model').click(xy);


		},

		endTurn: function () {

			var view = this,
				info = view.info;

			if ( info.get('confirmTurn') === 'on' ) {
				view.showPopup({
					popupName: 'end-turn-popup',
					parentView: view
				});
				return;
			}

			view.confirmedEndTurn();

		},

		confirmedEndTurn: function () {

			var view = this;

			view.get('model').newTurn();
			view.removeActiveSquare();
			view.clearAvailableActions();

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

			view.showUnitInfo();

		},

		removeActiveSquare: function () {

			var view = this,
				node = view.util.findIn(view.$el[0], view.selectors.activeSquareMark);

			view.set('markActiveSquare', {
				x: null,
				y: null
			});

			view.hideUnitInfo();

			return node && node.parentNode.removeChild(node);

		},

		restoreActiveSquare: function () {

			var view = this,
				markActiveSquareXy = view.get('markActiveSquare');

			if ( markActiveSquareXy.x === null || markActiveSquareXy.y === null ) {
				return;
			}

			view.markActiveSquare(markActiveSquareXy);
			view.showUnitInfo();

		},

		showAvailableActions: function (actions) {

			var view = this,
				deferred = $.Deferred();

			view.clearAvailableActions();

			if ( actions.availablePathWithTeamUnit ) {
				view.showAvailablePathWithTeamUnit(actions.availablePathWithTeamUnit);
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

			if ( actions.availableAttackMapWithPath ) {
				view.showAvailableAttackMapWithPath(actions.availableAttackMapWithPath);
			}

				setTimeout(function () {
					deferred.resolve();
				}, win.APP.info.actionTime());

			return deferred.promise();

		},

		showAvailablePathWithTeamUnit: function (path) {

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

		showAvailableAttackMapWithPath: function (attackSquares) {

			var view = this,
				util = view.util,
				el = view.$el[0],
				squareSelector = view.selectors.eventSquares,
				availableAttackClassName = 'show-available-attack';

			attackSquares.forEach(function (xy) {

				var x = xy.x,
					y = xy.y,
					node = util.findIn(el, squareSelector + '[data-xy="x' + x + 'y' + y + '"]');

				if ( node ) {
					node.classList.add(availableAttackClassName);
					return;
				}

				view.createEventHandlerListener({
					x: x,
					y: y,
					className: availableAttackClassName
				});

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
				util = view.util,
				hideSymbols = util.hideSymbols,
				model = view.get('model'),
				activePlayer = model.get('activePlayer'),
				unitLimit = model.get('unitLimit'),
				color = activePlayer.color,
				money = activePlayer.money,
				playerUnits = model.getUnitsByOwnerId(activePlayer.id),
				isCpu = activePlayer.type === 'cpu',
				obj = {
					color: color,
					unitLimit: isCpu ? hideSymbols(unitLimit, '-') : unitLimit,
					unitCount: isCpu ? hideSymbols(playerUnits.length, '-') : playerUnits.length,
					money: isCpu ? hideSymbols(money, '-') : money
				},
				$node = view.tmpl['battle-view-status-bar'](obj),
				$statusBarWrapper = view.$el.find(view.selectors.statusBar);

			$statusBarWrapper.empty().append($node);

			view.autoSetSquareInfo();

		},

		autoSetSquareInfo: function () {

			var view = this,
				xy = view.get('markActiveSquare'),
				model = view.get('model'),
				isNotXY = typeof xy.x !== 'number' || typeof xy.y !== 'number',
				building,
				terrain,
				infoViewObj = {},
				$el = view.$el,
				$node;

			if ( isNotXY ) {
				xy = view.get('infoSquareXY');
				xy.x = xy.x || 0;
				xy.y = xy.y || 0;
			}

			view.set('infoSquareXY', xy);

			building = model.getBuildingByXY(xy);
			terrain = model.getTerrainByXY(xy);
			infoViewObj.armor = model.getArmorByXY(xy);

			if ( building ) {
				if (building.state === 'normal') {
					infoViewObj.className = 'building-' + building.type + '-' + building.color;
				}
				if (building.state === 'destroyed') {
					infoViewObj.className = 'building-' + building.type + '-destroyed';
				}
			} else if ( terrain ) { // find terrain
				infoViewObj.className = 'terrain-' + terrain.terrainName;
			}

			$node = $(view.tmpl['battle-view-info-square'](infoViewObj));
			$el.find('.js-status-bar-info-square-container').remove();
			$el.find('.js-status-bar-info-square-wrapper').append($node);

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

			node.innerHTML = '&nbsp;';

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

			var view = this,
				$mapImageWrapper = view.$el.find(view.selectors.mapImageWrapper),
				canvas = doc.createElement('canvas'),
				//canvas = $mapImageWrapper.get(0),
				ctx = canvas.getContext('2d'),
				getXYFromStringXY = view.util.getXYFromStringXY,
				xyStr = view.util.getStringFromXY,
				map = view.get('map'),
				squareSize = view.squareSize.max,
				squareSizeX2,
				mapTiles = win.APP.mapTiles,
				terrains = map.terrain,
				angleTypes = ['road', 'water'],
				mapWidth = map.size.width,
				mapHeight = map.size.height,
				maxCanvasSize = win.APP.map.maxCanvasSize;

			//if ( !this.info.get('isAndroid', true) ) { // for NOT android set size 24
			//	squareSize = 48; // see tiles image size 24 * 2
			//}

			// adjust square size
			while ( mapWidth * mapHeight * squareSize * squareSize * 4 >= maxCanvasSize ) {
				squareSize -= 6;
			}

			//squareSize -= 6;

			squareSizeX2 = squareSize * 2;

			canvas.width = mapWidth * squareSizeX2;
			canvas.height = mapHeight * squareSizeX2;

			// reduce blur for ios devices
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// prepare buildings
			_.each(terrains, function (value, xy) {

				var building = _.find(map.buildings, getXYFromStringXY(xy));

				if ( !building ) {
					return;
				}

				if ( 'farm' === building.type ) {
					terrains[xy] = 'terra-1';
				} else {
					terrains[xy] = 'road-1';
				}

			});

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			// draw angles road
			angleTypes.forEach(function (type) {

				_.each(terrains, function (value, xy) {

					if ( value.indexOf(type) === -1 ) {
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

						terrain1 = terrains[xyStr(xl, yu)] || value,
						terrain2 = terrains[xyStr(x, yu)] || value,
						terrain3 = terrains[xyStr(xr, yu)] || value,
						terrain4 = terrains[xyStr(xl, y)] || value,
						terrain6 = terrains[xyStr(xr, y)] || value,
						terrain7 = terrains[xyStr(xl, yd)] || value,
						terrain8 = terrains[xyStr(x, yd)] || value,
						terrain9 = terrains[xyStr(xr, yd)] || value,

						t1 = terrain1.indexOf(type) && terrain1.indexOf('bridge'),
						t2 = terrain2.indexOf(type) && terrain2.indexOf('bridge'),
						t3 = terrain3.indexOf(type) && terrain3.indexOf('bridge'),
						t4 = terrain4.indexOf(type) && terrain4.indexOf('bridge'),
						t6 = terrain6.indexOf(type) && terrain6.indexOf('bridge'),
						t7 = terrain7.indexOf(type) && terrain7.indexOf('bridge'),
						t8 = terrain8.indexOf(type) && terrain8.indexOf('bridge'),
						t9 = terrain9.indexOf(type) && terrain9.indexOf('bridge');

					// draw 2, 4, 6, 8
					if ( t2 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-2'].img, xSquareSizeX2, ySquareSizeX2, squareSizeX2, squareSize);
					}

					if ( t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-4'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-6'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-8'].img, xSquareSizeX2, ySquareSizeX2Half, squareSizeX2, squareSize);
					}

					// draw 1, 3, 7, 9 - normal
					if ( t2 && t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t2 && t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t4 && t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( t6 && t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// draw 1, 3, 7, 9 - small
					if ( !t2 && !t4 && t1 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1-s'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t2 && !t6 && t3 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3-s'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t4 && !t8 && t7 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7-s'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( !t6 && !t8 && t9 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9-s'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// fix building

				});

			});

			$mapImageWrapper.find('img')[0].src = canvas.toDataURL();

		},

		drawBuildings: function () {

			var view = this,
				model = view.get('model'),
				info = view.info,
				smokeState = info.get('buildingSmoke');

			model.appendBuildings();

			if (smokeState === 'on') {
				view.showHouseSmoke();
			} else {
				view.hideHouseSmoke();
			}

		},

		hideHouseSmoke: function () {

			this.$el.find(this.selectors.smokeWrapper).remove();

		},

		showHouseSmoke: function () {

			var view = this,
				model = view.get('model'),
				buildings = model.get('buildings'),
				$el = view.$el,
				selectors = view.selectors,
				$eventHandleWrapper = $el.find(selectors.eventHandlerWrapper),
				$smokeWrapper = $('<div/>').attr('class', 'js-smoke-wrapper smoke-wrapper').attr('style', $eventHandleWrapper.attr('style'));

			view.hideHouseSmoke();

			$eventHandleWrapper.after($smokeWrapper);

			_.each(buildings, function (building) {
				if ( building.type === 'farm' && building.hasOwnProperty('ownerId') ) {
					view.addSmokeToBuilding(building);
				}
			});

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

		redrawUnit: function (unit) {

			var view = this,
				x = unit.get('x'),
				y = unit.get('y'),
				color = unit.get('color'),
				$unitWrapper = view.$el.find(view.selectors.unitsWrapper),
				allColors = win.APP.map.allColors,
				type = unit.get('type'),
				$unit = $unitWrapper.find('[data-xy="x' + x + 'y' + y + '"]'),
				$unitImage = $unit.find('.js-unit-image');

			_.each(allColors, function (color) {
				$unitImage.removeClass('unit-image-' + type + '-' + color);
			});

			$unitImage.addClass('unit-image-' + type + '-' + color);

		},

		addSmokeToBuilding: function (building) {

			var x = building.x,
				y = building.y,
				pre = this.info.get('pre', true).css,
				squareSize = this.getSquareSize(),
				$wrapper = this.$el.find(this.selectors.smokeWrapper),
				$smokeContainer = $('<div class="square js-square"><div class="building-smoke-mover"><div class="building-smoke">&nbsp;</div></div></div>');

			if (!$wrapper.length) {
				return;
			}

			$wrapper.find('[data-xy="x' + x +'y' + y + '"]').remove();

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

			if (!$wrapper.length) {
				return;
			}

			$smokeContainer.remove();

		},

		drawUnits: function () {
			var model = this.get('model');
			model.appendUnits();
		},

		drawGraves: function () {
			var model = this.get('model');
			model.appendGraves();
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
				$unitLayerWrapper = view.$el.find(view.selectors.unitsWrapper),
				unitImage,
				animationEnd = view.info.get('animationEnd', true);

			$unitWrapper.css(pre + 'transform', 'translate3d(' + cssX + 'px, ' + cssY + 'px, 0)');

			$unitWrapper.attr({
				'data-x': x,
				'data-y': y,
				'data-xy': 'x' + x + 'y' + y,
				'data-unit-id': unitInfo.id
			});

			$unitWrapper.addClass('js-square square unit-wrapper unit-wrapper-' + unitType);

			$unitWrapper.append($unitBlock);

			$unitBlock.addClass('js-unit-image unit-image unit-image-' + unitType + '-' + unitInfo.color);

			// health
			//$unitWrapper.append('<div class="js-unit-health unit-health"><div class="js-unit-health-ten unit-health-ten">&nbsp;</div><div class="js-unit-health-one unit-health-one">&nbsp;</div></div>');

			// delta health
			//$unitWrapper.append('<div class="js-delta-unit-health delta-unit-health"><div class="js-delta-unit-health-sign delta-unit-health-sign">&nbsp;</div><div class="js-delta-unit-health-ten delta-unit-health-ten">&nbsp;</div><div class="js-delta-unit-health-one delta-unit-health-one">&nbsp;</div></div>');

			// wisp aura
			//$unitWrapper.append('<div class="js-under-wisp-aura-image under-wisp-aura-image">&nbsp;</div>');

			// poisoned
			//$unitWrapper.append('<div class="js-under-poison-image under-poison-image">&nbsp;</div>');

			// level
			//$unitWrapper.append('<div class="js-unit-level unit-level">&nbsp;</div>');

			// level up
			//$unitWrapper.append('<div class="js-unit-level-up unit-level-up">&nbsp;</div>');

			// show unit appear animation
			unitImage = $unitWrapper.find('.unit-image');
			unitImage.one(animationEnd, function () {
				$(this).removeClass('show-new-unit');
			}); // work only one time
			unitImage.addClass('show-new-unit');

			$unitLayerWrapper.append($unitWrapper);

			view.setUnitHealth({ unit: unit });

			view.setUnitLevel({ unit: unit, doNotShowLevelUp: Boolean(unit.get('xp')) });

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
				$graveWrapper = $('<div>&nbsp;</div>'),
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
				$unitNode = view.getUnitByUnit(unit),
				$wispAura;

			if (wispAuraState) {
				// do not add node if node exist
				$wispAura = $unitNode.find('.js-under-wisp-aura-image');
				if (!$wispAura.length) {
					$unitNode.append('<div class="js-under-wisp-aura-image under-wisp-aura-image">&nbsp;</div>')
				}
			} else {
				//remove wist aura
				$unitNode.find('.js-under-wisp-aura-image').remove();
			}

		},

		setPoisonState: function (data) {

			var view = this,
				unit = data.unit,
				poisonCount = data.poisonCount,
				$unitNode = view.getUnitByUnit(unit),
				$poison;

			if (poisonCount) {
				// do not add node if node exist
				$poison = $unitNode.find('.js-under-poison-image');
				if (!$poison.length) {
					$unitNode.append('<div class="js-under-poison-image under-poison-image">&nbsp;</div>')
				}
			} else {
				$unitNode.find('.js-under-poison-image').remove();
			}

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
				height = map.size.height * squareSize,
				$innerBlocks = this.$el.find(selectors.moveAreaContainer + '> div');

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

			// set event handler wrapper
			$eventHandlerWrapper.css({
					width: width + 'px',
					height: height + 'px'
				});

			// set .building-wrapper, units-wrapper and etc.
			$innerBlocks.css({
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

			$style.html('.square-grid { background-size: ' + squareSize + 'px ' + squareSize + 'px } .square { width: ' + squareSize + 'px; height: ' + squareSize + 'px; }');

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

			var view = this,
				selectors = view.selectors;

			view.events[view.eventTypes.down + ' ' + selectors.moveAreaContainer] = 'saveDownEvent';
			view.events[view.eventTypes.move + ' ' + selectors.moveAreaContainer] = 'saveMoveEvent';
			view.events[view.eventTypes.up + ' ' + selectors.mainEventHandler] = 'detectClick';
			view.events[view.eventTypes.dbl + ' ' + selectors.mainEventHandler] = 'detectDblClick';

		},

		detectClick: function () {

			var view = this,
				downXY = view.get('downEvent'),
				moveXY = view.get('moveEvent'),
				maxDeltaMove = 10,
				xy;

			if ( !downXY || !moveXY ) {
				return;
			}

			if ( Math.abs(downXY.x - moveXY.x) + Math.abs(downXY.y - moveXY.y) >  maxDeltaMove ) {
				return;
			}

			xy = view.getEventXy();

			view.onClick(xy);

		},

		detectDblClick: function () {

			var view = this,
				model = view.get('model'),
				xy = view.getEventXy(),
				activePlayer = model.get('activePlayer'),
				availableActions,
				availableAttackMapWithPath,
				//x = markActiveSquareXy.x,
				//y = markActiveSquareXy.y,
				unit = model.getUnitByXY(xy);

			if ( !unit ) {
				return;
			}

			availableAttackMapWithPath = unit.getAvailableAttackMapWithPath();

			if ( unit.get('ownerId') === activePlayer.id ) { // 'active' unit

				availableActions = unit.getAvailableActions();
				availableActions.availableAttackMapWithPath = availableAttackMapWithPath;
				view.showAvailableActions(availableActions);
				model.set('availableActions', availableActions);

			} else { // enemy or teams unit

				model.clearAvailableActions();
				view.clearAvailableActions();
				view.showAvailableActions({
					availablePathWithTeamUnit: unit.getAvailablePathWithTeamUnit(),
					availableAttackMapWithPath: availableAttackMapWithPath
				});

			}

		},

		getEventXy: function () {

			var view = this,
				x, y,
				downXY = view.get('downEvent'),
				selectors = view.selectors,
				$el = view.$el,
				$moveAreaWrapper = $el.find(selectors.moveAreaWrapper),
				$moveAreaContainer = $el.find(selectors.moveAreaContainer),
				squareSize = view.getSquareSize(),
				$mainEventHandler = $el.find(selectors.mainEventHandler),
				w = $moveAreaWrapper.width(),
				h = $moveAreaWrapper.height(),
				aw = $mainEventHandler.width(),
				ah = $mainEventHandler.height(),
				dxy = view.util.getXyFromStyle($moveAreaContainer.attr('style'));

			x = (aw - w) / 2 + downXY.x - dxy.x;
			y = (ah - h) / 2 + downXY.y - dxy.y;

			x = Math.floor( x / squareSize );
			y = Math.floor( y / squareSize );

			return {
				x: x,
				y: y
			};

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
				transitionEnd = view.info.get('transitionEnd', true),
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

		//showFightScreen: function (data) {
		//
		//	var view = this,
		//		info = view.info,
		//		deferred = $.Deferred(),
		//		fightAnimationView;
		//
		//	if (info.get('fightAnimation') === 'on') {
		//		fightAnimationView = new win.APP.BB.FightAnimationView({
		//			parentView: view,
		//			parentDeferred: deferred,
		//			attacker: {
		//				unit: data.attacker
		//			},
		//			defender: {
		//				unit: data.defender
		//			}
		//		});
		//
		//		view.set('fightAnimationView', fightAnimationView);
		//
		//	} else {
		//		deferred.resolve();
		//	}
		//
		//	return deferred.promise();
		//
		//},

		showAttack: function (data) {

			var view = this,
				model = view.get('model'),
				from = data.from,
				to = data.to,
				deferred = $.Deferred(),
				pre = view.info.get('pre', true).css,
				transitionEnd = view.info.get('transitionEnd', true),
				squareSize = view.getSquareSize(),
				attackNode = doc.createElement('div'),
				$attackNode,
				//$attackNode = $('<div class="attack-square square js-attack-square">&nbsp;</div>'),
				$unitsWrapper = view.$el.find(view.selectors.unitsWrapper);

			attackNode.className = 'attack-square square js-attack-square';
			attackNode.innerHTML = '<div class="spark">&nbsp;</div>';

			$attackNode = $(attackNode);

			view.removeActiveSquare();

			$unitsWrapper.append($attackNode);

			$attackNode.css(pre + 'transform', 'translate3d(' + (from.x * squareSize) + 'px, ' + (from.y * squareSize) + 'px, 0)');


			$attackNode.one(transitionEnd, function () {

				//$(this).remove();
				view.$el.find('.js-attack-square').remove();

				model.clearAvailableActions();
				view.clearAvailableActions();

				view.enable();

				deferred.resolve();

			}); // work only one time

			view.disable();

			$attackNode.addClass('moving');

			setTimeout(function () { // todo: try to do transitionEnd without this hack
				$attackNode.css(pre + 'transform', 'translate3d(' + (to.x * squareSize) + 'px, ' + (to.y * squareSize) + 'px, 0)');
			}, 50);

			return deferred.promise();

		},

		showDifferentUnitHealth: function (data) {

			var view = this,
				info = view.info,
				unit = data.unit,
				differentHealth = data.differentHealth,
				deferred = $.Deferred(),
				$unitWrapper = view.getUnitByUnit(unit),
				$deltaHealth = $('<div class="js-delta-unit-health delta-unit-health"><div class="js-delta-unit-health-sign delta-unit-health-sign">&nbsp;</div><div class="js-delta-unit-health-ten delta-unit-health-ten">&nbsp;</div><div class="js-delta-unit-health-one delta-unit-health-one">&nbsp;</div></div>'),
				animationEnd = view.info.get('animationEnd', true);

			$unitWrapper.append($deltaHealth);

			view.disable();

			view.setUnitHealth({ unit: unit });

			view.setUnitDifferentHealth({
				unit: unit,
				differentHealth: differentHealth
			});

			$deltaHealth.one(animationEnd, function () {

				$(this).remove();

				view.enable();

				deferred.resolve();

			}); // work only one time

			//if (info.get('fightAnimation') === 'on') {
			//	view.get('fightAnimationView').refreshStatusBar();
			//}

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
				unit = data.unit,
				health = unit.get('health'),
				defaultHealth = unit.get('defaultHealth'),
				$unitWrapper = view.getUnitByUnit(unit),
				one = 'none',
				ten = 'none',
				$healthOne = $unitWrapper.find('.js-unit-health-one'),
				$healthTen = $unitWrapper.find('.js-unit-health-ten');

			if (health === defaultHealth) {
				$healthOne.remove();
				$healthTen.remove();
				return;
			}

			health = health.toString().split('');
			one = health.pop() || one;
			ten = health.pop() || ten;

			if (one === 'none') {
				$healthOne.remove();
			} else {
				if ($healthOne.length) {
					$healthOne.attr('class', 'js-unit-health-one unit-health-one number-1-' + one);
				} else {
					$unitWrapper.append('<div class="js-unit-health-one unit-health-one number-1-' + one + '">&nbsp;</div>')
				}
			}

			if (ten === 'none') {
				$healthTen.remove();
			} else {
				if ($healthTen.length) {
					$healthTen.attr('class', 'js-unit-health-ten unit-health-ten number-1-' + ten);
				} else {
					$unitWrapper.append('<div class="js-unit-health-ten unit-health-ten number-1-' + ten + '">&nbsp;</div>')
				}
			}

		},

		setUnitDifferentHealth: function (data) {

			var view = this,
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
				unit = data.unit,
				level = unit.get('level'),
				$unitWrapper = view.getUnitByUnit(unit),
				$level = $unitWrapper.find('.js-unit-level');

			if ( !level ) {
				return;
			}

			if ($level.length) {
				$level.attr('class', 'js-unit-level unit-level number-1-' + level);
			} else {
				$unitWrapper.append('<div class="js-unit-level unit-level number-1-' + level + '">&nbsp;</div>')
			}

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
				$levelUp = $('<div class="js-unit-level-up unit-level-up">&nbsp;</div>'),
				animationEnd = view.info.get('animationEnd', true);

			$unitWrapper.append($levelUp);

			$levelUp.one(animationEnd, function () {
				$(this).remove();
			}); // work only one time

			$levelUp.addClass('move-up');

		},

		//notifications
		showObjective: function () {

			var view = this,
				model = view.get('model'),
				map = model.get('map'),
				mapType = map.type,
				lang = win.APP.lang,
				languageField = 'objective-' + view.info.get('language');

			if ( mapType === 'mission' ) {
				return view.showPopup({
					popupName: 'simple-notification',
					popupData: {
						header: lang.get('objective'),
						text: map[languageField] || map.objective
					}
				});
			}

			if ( /skirmish|userMap/.test(mapType) ) {
				return view.showPopup({
					popupName: 'simple-notification',
					popupData: {
						header: lang.get('objective'),
						text: lang.get('skirmishObjective')
					}
				});
			}

		},

		showBriefing: function (data) {

			data = data || {};

			var view = this,
				model = view.get('model'),
				info = view.info,
				map = model.get('map'),
				briefingName = data.briefingName,
				languageField = briefingName + '-' + info.get('language'),
				briefingList = map[languageField] || map[briefingName] || [], // [] if map has no needed briefing
				deferred = $.Deferred(),
				promise = deferred.promise(),
				nextFunction;

			_.each(briefingList, function (item) {

				var onShow = item.onShow, onHide = item.onHide;

				if (onShow && onShow.context === 'parentView') {
					onShow.default_context = 'parentView';
					onShow.context = view;
				}

				if (onHide && onHide.context === 'parentView') {
					onHide.default_context = 'parentView';
					onHide.context = view;
				}

				nextFunction = (nextFunction || promise).then(function () {
					return view.showPopup(item);
				});
			});

			setTimeout(function () {
				deferred.resolve();
			}, info.actionTime());

		},
		
		openMenu: function () {

			new APP.BB.BattleMenuView({
				view: this
			});

		},

		showHelp: function () {

			var view = this,
				language = view.info.get('language'),
				model = view.get('model'),
				map = model.get('map'),
				help = map['help-' + language] || map.help || win.APP.lang.get('helpList'),
				$helpButton = view.$el.find(view.selectors.helpButton);

			if ( $helpButton.hasClass('blink') ) {
				$helpButton.addClass('hidden');
				$helpButton.removeClass('blink');
				setTimeout(function () {
					$helpButton.removeClass('hidden');
				}, 200);
			}

			view.showPopup({
				cssClass: 'full',
				popupName: 'help',
				popupData: {
					help: help
				}
			});

		},

		showUnitInfo: function () {

			var view = this,
				model = view.get('model'),
				unit,
				xy = view.get('markActiveSquare'),
				isNotXY = !xy.hasOwnProperty('x') || !xy.hasOwnProperty('y') || xy.x === null || xy.y === null;

			view.hideUnitInfo();

			if (isNotXY) {
				return;
			}

			unit = model.getUnitByXY(xy);
			if (!unit) {
				return;
			}

			var placeArmor = model.getArmorByXY(xy),
				level = unit.get('level'),
				unitMoveType = unit.get('moveType'),
				unitXY = {
					x: unit.get('x'),
					y: unit.get('y')
				},
				unitTerrain = model.getTerrainByXY(unitXY),
				atk = unit.get('atk'),
				atkMax = atk.max,
				atkMin = atk.min,
				def = unit.get('def'),
				underWispAura = unit.get('underWispAura'),
				poisonCount = unit.get('poisonCount'),
				unitMaster = win.APP.unitMaster,
				defByLevel = unitMaster.defByLevel,
				atkByLevel = unitMaster.atkByLevel,
				viewObj = {};

			atkMin = atkMin + level * atkByLevel;
			atkMax = atkMax + level * atkByLevel;
			viewObj.atk = atkMin + '-' + atkMax;
			viewObj.def = def + level * defByLevel;
			viewObj.level = level;
			viewObj.underWispAura = underWispAura;
			viewObj.poisonCount = poisonCount;
			viewObj.placeArmor = placeArmor;

			// detect armor for elementals
			if (unitMoveType === 'flow' && unitTerrain.terrainType === 'water') {
				viewObj.placeArmor = unitMaster.bonusDefByWater;
			}

			view.$el.find(view.selectors.unitInfoWrapper).html(view.tmpl['unit-info'](viewObj));

		},

		hideUnitInfo: function () {

			var view = this;

			view.$el.find(view.selectors.unitInfoWrapper).empty();

		},

		cpuMode: function (onOff) {

			var view = this,
				$node = view.$el.find(view.selectors.viewCpuDisable);

			return onOff ? $node.removeClass('hidden') : $node.addClass('hidden');

		},

		centerToXY: function (xy) {

			var view = this,
				map = view.get('map'),
				mover = view.get('mover'),
				squareSize = view.getSquareSize(),
				width = map.size.width,
				height = map.size.height,
				x = Math.round((xy.x - width / 2) * squareSize),
				y = Math.round((xy.y - height / 2) * squareSize);

			mover.showXY({
				x: -x,
				y: -y,
				time: view.info.actionTime()
			});

		}

	});

}(window, window.document));
/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _, $ */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.MapEditorView = APP.BB.BattleView.extend({

		events: {
			'click .js-open-map-popup': 'openMapPopup',
			'click .js-delete-map-popup': 'deleteMapPopup',
			//'change .js-tool-size': 'changeSize',

			'click .js-set-brush-type': 'setBrushType',
			'click .js-set-brush-color': 'setBrushColor',
			'click .js-set-brush-form': 'setBrushForm',

			'click .js-save-map': 'saveMap',
			'click .js-size-button': 'setMapSize',
			'input .js-map-name': 'onChangeMapName',
			'focus .js-map-name': 'disableMapEditor',
			'blur .js-map-name': 'enableMapEditor',
			'click .js-map-editor-disable-screen': 'enableMapEditor',
			'click .js-clear-map-popup': 'popupClearMap'

		},

		selectors: {

			// self
			toolsWrapper: '.js-map-editor-tools-wrapper',
			disableScreen: '.js-map-editor-disable-screen',
			mapSize: '.js-map-size',

			// nested
			mapImageWrapper: '.js-map-image-wrapper',
			mapImage: '.js-map-image',
			moveAreaWrapper: '.js-move-area-wrapper',
			moveAreaContainer: '.js-move-area-container',
			mainEventHandler: '.js-main-event-handler',
			eventHandlerWrapper: '.js-event-handler-wrapper',
			eventSquares: '.js-event-square',
			//activeEventSquare: '.active-event-square',
			//activeSquareMark: '.active-square-mark',
			buildingWrapper: '.js-building-wrapper',
			unitsWrapper: '.js-units-wrapper',
			unitWrapper: '.js-unit-wrapper',
			building: '.js-building',
			//smokeWrapper: '.js-smoke-wrapper',
			//viewDisable: '.js-view-disable',
			//viewCpuDisable: '.js-view-cpu-disable',
			square: '.js-square',
			statusBar: '.js-battle-view-status-bar',
			styleSquareSize: '.js-style-square-size',
			mapNameInput: '.js-map-name',
			saveButton: '.js-save-map'
			//unitInfoWrapper: '.js-unit-info-wrapper',
		},

		defaultMap: {
			type: 'userMap',
			size: {
				width: 11,
				height: 11
			},
			name: '',
			isOpen: true,
			maxPlayers: null, // set automatically
			units: [],
			buildings: [],
			terrain: {}

		},

		defaults: {
			map: {
				size: {
					min: 4,
					max: 100
				}
			},
			brush: {
				color: 'blue',
				type: 'terrain', // terrain, unit, building
				form: ''
			}
		},

		squareSize: win.APP.map.squareSize,

		initialize: function (data) {

			//win.APP.bb.battleData = {};

			$('.js-map-editor-wrapper').trigger('hide'); // remove previous map editor

			data = data || {};

			var view = this,
				util = view.util;

			view.set('brush', view.defaults.brush);

			view.set('clickXY', {});

			view.battleProto = APP.BB.BattleView.prototype;

			view.detectClickEvent();

			view.$el = $(view.tmpl['map-editor']({
				mapName: (data.map && data.map.name) || view.defaultMap.name
			}));

			view.set('map', util.copyJSON(data.map || view.defaultMap));

			// set sizes
			view.setSize();

			view.drawMap();

			// draw buildings
			view.drawBuildings();

			// draw units
			view.drawUnits();

			// bind move area
			view.bindMoveArea();

			view.bindEventListeners();

			view.render();

			view.proto.initialize.apply(view, arguments);

			view.updateTools();

			view.onChangeMapName();

			view.updateMapSize();

		},

		onChangeMapName: function () {

			var view = this,
				dbMaster = win.APP.map.db,
				$mapNameInput = view.$el.find(view.selectors.mapNameInput),
				mapName = $mapNameInput.val().trim(),
				$saveButton = view.$el.find(view.selectors.saveButton),
				jsMapKey = 'userMap_' + mapName,
				mapType = 'userMap';

			dbMaster.mapIsExist({
				jsMapKey: jsMapKey,
				type: mapType
			}).then(function (isExist) {

				var lang = win.APP.lang;

				if (isExist) {
					$saveButton
						.html(lang.get('replace'))
						.removeClass('map-editor-status-save')
						.addClass('map-editor-status-replace');
				} else {
					$saveButton
						.html(lang.get('save'))
						.addClass('map-editor-status-save')
						.removeClass('map-editor-status-replace');
				}

			});

		},

		onClick: function (xy) {

			var view = this,
				xyStr = 'x' + xy.x + 'y' + xy.y,
				map = view.get('map'),
				brush = view.get('brush'),
				util = win.APP.util,
				buildingMaster = win.APP.building,
				mapMaster = win.APP.map,
				unitMaster = win.APP.unitMaster,
				playerColors = mapMaster.playerColors,
				buildingData,
				unitType = brush.form,
				unitForRemove;

			if (brush.type === 'terrain' && brush.form) {
				if (brush.form === 'eraser') {
					map.terrain[xyStr] = 'terra-1';
				} else {
					map.terrain[xyStr] = brush.form;
				}
				view.drawPartMap(xy);
				return;
			}

			if (brush.type === 'unit' && unitType) {
				util.arrayRemoveByValue(map.units, _.find(map.units, xy));
				if (brush.form !== 'eraser') {

					if ( _.contains(unitMaster.commanderList, unitType) ) {
						unitForRemove = _.find(map.units, {type: unitType});
						if (unitForRemove) {
							win.APP.util.arrayRemoveByValue(map.units, unitForRemove);
						}
					}

					map.units.push({
						x: xy.x,
						y: xy.y,
						type: brush.form,
						ownerId: playerColors.indexOf(brush.color)
					});
				}
				view.reDrawUnits();
				return;
			}

			if (brush.type === 'building' && brush.form) {
				util.arrayRemoveByValue(map.buildings, _.find(map.buildings, xy));

				if (brush.form !== 'eraser') {
					buildingData = {
						x: xy.x,
						y: xy.y,
						type: brush.form,
						state: 'normal'
					};

					if ( _.contains(buildingMaster.noMansBuildingsList, brush.form) ) {
						buildingData.color = 'gray';
					}

					if ( brush.form === 'farm-destroyed' ) {
						buildingData.type = 'farm';
						buildingData.state = 'destroyed';
						buildingData.color = 'gray';
					}

					if ( buildingData.color !== 'gray' ) {
						buildingData.ownerId = playerColors.indexOf(brush.color);
					}

					map.buildings.push(buildingData);
				}

				view.reDrawBuildings();
				//view.drawMap();
				view.drawPartMap(xy);
				return;
			}


		},

		// just overwrite
		detectDblClick: function () {
			win.log('dbl click is');
		},

		openMapPopup: function () {

			var view = this;

			win.APP.map.db.getMapsInfo({
				type: 'userMap'
			}).then(function (mapsData) {

				var mapsInfo = [];

				_.each(mapsData, function (item, key) {
					item.jsKey = key;
					mapsInfo.push(item);
				});

				mapsInfo = mapsInfo.sort(function (a, b) {
					return ((a.maxPlayers + a.name) > (b.maxPlayers + b.name)) ? 1 : -1;
				});

				view.showPopup({
					popupName: 'map-list-popup',
					parentView: view,
					popupData: {
						mapsInfo: mapsInfo
					},
					cssClass: 'no-image-border'
				});

			});

		},

		deleteMapPopup: function () {

			var view = this;

			win.APP.map.db.getMapsInfo({
				type: 'userMap'
			}).then(function (mapsInfo) {
				view.showPopup({
					popupName: 'map-list-popup-delete',
					parentView: view,
					popupData: {
						mapsInfo: mapsInfo
					},
					cssClass: 'no-image-border'
				});
			});

		},

		drawMap: function (data) {

			data = data || {};

			// prepare empty map's squares
			var view = this,
				map = view.get('map'),
				x, y,
				lenX, lenY,
				tileXY;

			for (x = 0, lenX = map.size.width; x < lenX; x += 1) {
				for (y = 0, lenY = map.size.height; y < lenY; y += 1) {
					tileXY = 'x' + x + 'y' + y;
					if ( !map.terrain[tileXY] ) {
						map.terrain[tileXY] = 'terra-1';
					}
				}
			}



			var $mapImageWrapper = view.$el.find(view.selectors.mapImageWrapper),
				//canvas = doc.createElement('canvas'),
				canvas = $mapImageWrapper.get(0),
				ctx = canvas.getContext('2d'),
				getXYFromStringXY = view.util.getXYFromStringXY,
				xyStr = view.util.getStringFromXY,
				squareSize = view.squareSize.max,
				squareSizeX2,
				mapTiles = win.APP.mapTiles,
				terrains = map.terrain,
				angleTypes = ['road', 'water'],
				mapWidth = map.size.width,
				mapHeight = map.size.height,
				maxCanvasSize = win.APP.map.maxCanvasSize;

			//if ( !this.info.get('isAndroid', true) ) { // for NOT android set size 24
				squareSize = 48; // see tiles image size 24 * 2
			//}

			// adjust square size
			while ( mapWidth * mapHeight * squareSize * squareSize * 4 > maxCanvasSize ) {
				squareSize -= 6;
			}

			squareSize -= 6;

			squareSizeX2 = squareSize * 2;

			canvas.width = mapWidth * squareSizeX2;
			canvas.height = mapHeight * squareSizeX2;

			// reduce blur for ios devices
			ctx.webkitImageSmoothingEnabled = false;
			ctx.mozImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false; // future

			// prepare buildings
			_.each(terrains, function (value, xy) {

				var building = _.find(map.buildings, getXYFromStringXY(xy));

				if ( !building ) {
					return;
				}

				if ( 'farm' === building.type ) {
					terrains[xy] = 'terra-1';
				} else {
					terrains[xy] = 'road-1';
				}

			});

			// draw main tiles
			_.each(terrains, function (value, xy) {
				xy = getXYFromStringXY(xy);
				ctx.drawImage(mapTiles[value].img, xy.x * squareSizeX2, xy.y * squareSizeX2, squareSizeX2, squareSizeX2);
			});

			// draw angles road
			angleTypes.forEach(function (type) {

				_.each(terrains, function (value, xy) {

					if ( value.indexOf(type) === -1 ) {
						return;
					}

					// redraw only needed squares
					if (data.hasOwnProperty('x') && Math.abs(data.x - xy.x) <= 1 && Math.abs(data.y - xy.y) <= 1 ) {
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

						terrain1 = terrains[xyStr(xl, yu)] || value,
						terrain2 = terrains[xyStr(x, yu)] || value,
						terrain3 = terrains[xyStr(xr, yu)] || value,
						terrain4 = terrains[xyStr(xl, y)] || value,
						terrain6 = terrains[xyStr(xr, y)] || value,
						terrain7 = terrains[xyStr(xl, yd)] || value,
						terrain8 = terrains[xyStr(x, yd)] || value,
						terrain9 = terrains[xyStr(xr, yd)] || value,

						t1 = terrain1.indexOf(type) && terrain1.indexOf('bridge'),
						t2 = terrain2.indexOf(type) && terrain2.indexOf('bridge'),
						t3 = terrain3.indexOf(type) && terrain3.indexOf('bridge'),
						t4 = terrain4.indexOf(type) && terrain4.indexOf('bridge'),
						t6 = terrain6.indexOf(type) && terrain6.indexOf('bridge'),
						t7 = terrain7.indexOf(type) && terrain7.indexOf('bridge'),
						t8 = terrain8.indexOf(type) && terrain8.indexOf('bridge'),
						t9 = terrain9.indexOf(type) && terrain9.indexOf('bridge');

					// draw 2, 4, 6, 8
					if ( t2 ) { // up is different type
						ctx.drawImage(mapTiles['a-' + type + '-2'].img, xSquareSizeX2, ySquareSizeX2, squareSizeX2, squareSize);
					}

					if ( t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-4'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-6'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSizeX2);
					}

					if ( t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-8'].img, xSquareSizeX2, ySquareSizeX2Half, squareSizeX2, squareSize);
					}

					// draw 1, 3, 7, 9 - normal
					if ( t2 && t4 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t2 && t6 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( t4 && t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( t6 && t8 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// draw 1, 3, 7, 9 - small
					if ( !t2 && !t4 && t1 ) {
						ctx.drawImage(mapTiles['a-' + type + '-1-s'].img, xSquareSizeX2, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t2 && !t6 && t3 ) {
						ctx.drawImage(mapTiles['a-' + type + '-3-s'].img, xSquareSizeX2Half, ySquareSizeX2, squareSize, squareSize);
					}

					if ( !t4 && !t8 && t7 ) {
						ctx.drawImage(mapTiles['a-' + type + '-7-s'].img, xSquareSizeX2, ySquareSizeX2Half, squareSize, squareSize);
					}

					if ( !t6 && !t8 && t9 ) {
						ctx.drawImage(mapTiles['a-' + type + '-9-s'].img, xSquareSizeX2Half, ySquareSizeX2Half, squareSize, squareSize);
					}

					// fix building

				});

			});

			//$mapImageWrapper.find('img')[0].src = canvas.toDataURL();

		},

		drawPartMap: function (xy) {

			this.drawMap(xy);

		},

		drawBuildings: function () {

			var view = this,
				map = view.get('map'),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				buildings = map.buildings,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors;

			_.each(buildings, function (building) {

				var x, y;

				x = building.x;
				y = building.y;

				if (x > maxX || y > maxY || x < 0 || y < 0) {
					return;
				}

				building.color = playerColors[building.ownerId] || 'gray';
				if (building.color === 'gray') {
					delete building.ownerId;
				}
				view.appendBuilding(building);
			});

		},

		drawUnits: function () {

			var view = this,
				map = view.get('map'),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				units = map.units,
				mapMaster = win.APP.map,
				playerColors = mapMaster.playerColors,
				unitMaster = win.APP.unitMaster,
				commanderList = unitMaster.commanderList;

			_.each(units, function (unitData) {

				var unit,
					x = unitData.x,
					y = unitData.y,
					unitType,
					isCommander;

				if (x > maxX || y > maxY || x < 0 || y < 0) {
					return;
				}

				unitType = unitData.type;
				isCommander = unitType === 'commander' || _.contains(commanderList, unitType);

				unitData.color = playerColors[unitData.ownerId];

				if ( isCommander ) {
					unitData.type = commanderList[unitData.ownerId];
				}

				unit = unitMaster.createUnit(unitData);
				view.appendUnit(unit);

			});


		},

		updateTools: function () {

			var view = this,
				map = view.get('map'),
				$wrapper = view.$el.find(view.selectors.toolsWrapper),
				$node,
				parseData = {};

			parseData.brush = view.get('brush');

			parseData.mapName = map.name;

			parseData.hasCommander = false;

			$node = $(view.tmpl['map-editor-tools'](parseData));

			$wrapper.empty();

			$wrapper.append($node);

			view.delegateEvents();

		},

		reDrawUnits: function () {
			this.$el.find(this.selectors.unitsWrapper).empty();
			this.drawUnits();
		},

		reDrawBuildings: function () {

			this.$el.find(this.selectors.buildingWrapper).empty();
			this.drawBuildings();

		},

		setBrushType: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.type = $this.attr('data-brush-type');
			brush.form = '';

			view.updateTools();

		},

		setBrushColor: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.color = $this.attr('data-brush-color');

			brush.form = undefined;

			view.updateTools();

		},

		setBrushForm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				brush = view.get('brush');

			brush.form = $this.attr('data-brush-form');

			view.updateTools();

		},

		saveMap: function () {

			var view = this,
				map = view.get('map'),
				endMap = view.util.copyJSON(map),
				maxX = map.size.width - 1,
				maxY = map.size.height - 1,
				buildings = map.buildings || [],
				units = map.units || [],
				getXYFromStringXY = view.util.getXYFromStringXY,
				terrain = map.terrain,
				mapName = view.$el.find(view.selectors.mapNameInput).val().trim(),
				unitMaster = win.APP.unitMaster,
				commanderList = unitMaster.commanderList,
				dbMaster = win.APP.map.db,
				jsMapKey = 'userMap_' + mapName,
				ids = {
					'0': false,
					'1': false,
					'2': false,
					'3': false
				},
				i, j,
				lang = win.APP.lang,
				detectGap = function () {
					_.each(ids, function (value, key) {
						key = Number(key);
						ids[key] = Boolean(_.find(units, {ownerId: key}) || _.find(buildings, {ownerId: key}));
					});
				};

			endMap.units = [];
			endMap.buildings = [];
			endMap.terrain = {};
			endMap.name = mapName;

			if ( !endMap.name.length ) {

				view.showTicket({
					popupData: {
						text: lang.get('enterMapName')
					},
					cssClass: 'error'
				});

				return;
			}

			_.each(terrain, function (type, xyStr) {

				var xy = getXYFromStringXY(xyStr),
					x = xy.x,
					y = xy.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				endMap.terrain[xyStr] = type;

			});

			_.each(buildings, function (building) {

				var x = building.x,
					y = building.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				building = view.util.copyJSON(building);

				delete building.color;

				endMap.buildings.push(building);

			});

			_.each(units, function (unit) {

				var x = unit.x,
					y = unit.y;

				if ( x > maxX || y > maxY || x < 0 || y < 0 ) {
					return;
				}

				unit = view.util.copyJSON(unit);

				delete unit.color;
				delete unit.id;

				if ( _.contains(commanderList, unit.type) ) {
					unit.type = 'commander';
				}

				endMap.units.push(unit);

			});

			detectGap();
			for (i = 0; i < 4; i += 1) {
				if ( !ids[String(i)] ) {
					for (j = i; j < 4; j += 1) {
						_.each(endMap.units, function (unit) {
							if (unit.ownerId > j) {
								unit.ownerId -= 1;
							}
						});
						_.each(endMap.buildings, function (building) {
							if (building.ownerId > j) {
								building.ownerId -= 1;
							}
						});
					}
				}
				detectGap();
			}

			detectGap();

			endMap.maxPlayers = 0;
			_.each(ids, function (value) {
				endMap.maxPlayers += value ? 1 : 0;
			});

			if (endMap.maxPlayers < 2) {
				view.showTicket({
					popupData: {
						text: lang.get('needMoreUnitsOrBuildings')
					},
					cssClass: 'error'
				});
				return;
			}

			// put map to db
			dbMaster.removeMap({
				jsMapKey: jsMapKey,
				type: endMap.type
			}).then(function () {
				return dbMaster.insertMap(endMap, jsMapKey);
			}).then(function () {
				return view.showTicket({
					popupData: {
						text: endMap.name + ' - ' + win.APP.lang.get('mapHasBeenSaved')
					}
				});
			}).then(function () {
				view.onChangeMapName();
			});

		},

		deleteMap: function (data) {

			var view = this,
				type = data.type,
				dbMaster = win.APP.map.db,
				jsMapKey = data.jsMapKey;

			dbMaster.removeMap({
				jsMapKey: jsMapKey,
				type: type
			}).then(function () {
				return view.showTicket({
					popupData: {
						text: data.mapName + ' - ' + win.APP.lang.get('mapHasBeenDeleted')
					}
				});
			}).then(function () {
				view.onChangeMapName();
			});

		},

		//changeSize: function (e) {
		//
		//	var view = this,
		//		map = view.get('map'),
		//		$this = $(e.currentTarget),
		//		value = $this.attr('data-value');
		//
		//	map.size[$this.attr('data-group-name')] = parseInt(value, 10);
		//	view.drawMap();
		//	view.setSize();
		//
		//	view.get('mover').setDefaultContainerState();
		//
		//	view.reDrawUnits();
		//	view.reDrawBuildings();
		//
		//},

		setMapSize: function (e) {

			var view = this,
				defaults = view.defaults,
				max = defaults.map.size.max,
				min = defaults.map.size.min,
				//util = view.util,
				appUtil = win.APP.util,
				getBetween = appUtil.getBetween,
				map = view.get('map'),
				terrain = map.terrain,
				units = map.units || [],
				buildings = map.buildings || [],
				newTerrain = {},
				$button = $(e.currentTarget),
				delta = $button.attr('data-delta'),
				deltaNumber = parseInt(delta, 10),
				position = $button.attr('data-position');

			if (position === 'up' || position === 'down') {

				if (map.size.height + deltaNumber !== getBetween(min, map.size.height + deltaNumber, max)) {
					return;
				}

				map.size.height += deltaNumber;

				if (position === 'up') {

					_.each(terrain, function (value, key) {
						var xy = key.match(/\-?\d+/g),
							x = xy[0],
							y = parseInt(xy[1], 10) + deltaNumber;
						newTerrain['x' + x + 'y' + y] = value;
					});

					_.each(units, function (unit) {
						unit.y += deltaNumber;
					});

					_.each(buildings, function (building) {
						building.y += deltaNumber;
					});

					map.terrain = newTerrain;

				}

			}

			if (position === 'left' || position === 'right') {

				if (map.size.width + deltaNumber !== getBetween(min, map.size.width + deltaNumber, max)) {
					return;
				}

				map.size.width += deltaNumber;

				if (position === 'left') {

					_.each(terrain, function (value, key) {
						var xy = key.match(/\-?\d+/g),
							x = parseInt(xy[0], 10) + deltaNumber,
							y = xy[1];
						newTerrain['x' + x + 'y' + y] = value;
					});

					_.each(units, function (unit) {
						unit.x += deltaNumber;
					});

					_.each(buildings, function (building) {
						building.x += deltaNumber;
					});

					map.terrain = newTerrain;

				}

			}


			view.drawMap();
			view.setSize();

			view.get('mover').setDefaultContainerState();

			view.reDrawUnits();
			view.reDrawBuildings();

			view.updateMapSize();

		},

		popupClearMap: function () {

			var view = this;

			view.showPopup({
				popupName: 'clear-map',
				parentView: view,
				popupData: {}
			});

		},

		clearMap: function () {
			this.initialize();
		},

		disableMapEditor: function () {
			this.$el.find(this.selectors.disableScreen).removeClass('hidden');
		},

		enableMapEditor: function () {
			this.$el.find(this.selectors.disableScreen).addClass('hidden');
		},

		updateMapSize: function () {

			var view = this,
				map = view.get('map'),
				$mapSize = view.$el.find(view.selectors.mapSize);

			$mapSize.html(map.size.width + '&times;' + map.size.height)

		}

	});


}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.BattleMenuView = APP.BB.BaseView.extend({

		selectors: {
			'battleMenuWrapper': '.js-battle-menu-static-wrapper'
		},

		settings: {
			url: 'main-battle-menu'
		},

		events: {
			'click .js-popup-container': 'stopEvent',
			'hide-battle-menu': 'hide',
			'click .js-restart-battle': 'restartBattle',
			'click .js-quit-battle': 'quitBattle',
			'click .js-show-objective': 'showObjective',
			'click .js-show-settings': 'showSettings',
			'click .js-show-save-state': 'showSaveState',
			'click .js-show-load-state': 'showLoadState'
		},

		initialize: function (data) {

			var view = this;

			if (Backbone.history.fragment !== view.settings.url) {
				view.navigate(view.settings.url);
			}

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				battleView = view.get('view'),
				$menuWrapper = battleView.$el.find(view.selectors.battleMenuWrapper),
				$contentWrapper = $(view.tmpl['popup-wrapper']()),
				$content = $(view.tmpl['battle-menu']());

			$contentWrapper.removeClass('js-popup-wrapper').addClass('js-battle-menu-wrapper battle-menu-wrapper');

			$contentWrapper.find('.js-popup-container').html($content.html());

			view.$el = $contentWrapper;

			$menuWrapper.append(view.$el);

		},

		restartBattle: function () {

			var view = this;

			view.routeBack();

			view.showPopup({
				popupName: 'popup-confirm-restart-battle',
				parentView: view.get('view')
			});

		},

		quitBattle: function () {

			var view = this;

			view.routeBack();

			view.showPopup({
				popupName: 'popup-confirm-quit-battle',
				parentView: view.get('view')
			});

		},

		showObjective: function () {

			var view = this;

			view.routeBack();
			view.get('view').showObjective();

		},

		showSettings: function () {

			var view = this;

			view.routeBack();

			setTimeout(function () {
				new win.APP.BB.SettingsView({
					view: view.get('view')
				});
				view.routeByUrl('battle-settings');
			}, 50);

		},

		showSaveState: function () {

			var view = this,
				battleView = view.get('view'),
				battleModel = battleView.get('model'),
				map = battleModel.get('map'),
				saveGameView;

			saveGameView = new win.APP.BB.SaveGameView({
				battleView: battleView,
				battleModel: battleModel
			});

			view.showPopup({
				popupName: 'simple-notification',
				append$el: saveGameView.$el,
				cssClass: 'no-image-border'
			});

		},

		showLoadState: function () {

			var view = this,
				battleView = view.get('view'),
				battleModel = battleView.get('model'),
				map = battleModel.get('map'),
				loadGameView;

			loadGameView = new win.APP.BB.LoadGamePopupView({
				battleView: battleView,
				battleModel: battleModel
			});

			view.showPopup({
				popupName: 'simple-notification',
				append$el: loadGameView.$el,
				cssClass: 'no-image-border'
			});

		}

	});

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window, setTimeout */
	/*global $, templateMaster, APP, Backbone, _ */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.UnitStoreView = APP.BB.BaseView.extend({

		selectors: {
			storeWrapper: '.js-store-wrapper',
			card: '.js-unit-card',
			buyUnitCount: '.js-buy-unit-count',
			descriptionUnitInfo: '.js-description-unit-info',
			disableUnitStore: '.js-disable-unit-store'
		},

		settings: {
			url: 'unit-store'
		},

		events: {
			'hide-unit-store': 'hide',
			'click .js-buy-unit': 'buyUnit',
			'click .js-show-unit-description': 'showUnitDescription'
			//'click .js-change-on-off-setting': 'changeOnOffSetting',
			//'click .js-change-select-setting': 'changeSelectSetting'
		},

		deltaActionTime: 360,

		initialize: function (data) {

			var view = this;

			if ( data.model.isUnitsTooMuch() ) {

				view.showTicket({
					popupData: {
						text: win.APP.lang.get('tooMuchUnits')
					},
					cssClass: 'error'
				});

				return;
			}

			view.set('createTime', Date.now());

			if (Backbone.history.fragment !== view.settings.url) {
				view.navigate(view.settings.url);
			}

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				model = view.get('model'),
				map = model.get('map'),
				battleView = model.get('view'),
				player = model.get('activePlayer'),
				storeWrapper = view.$wrapper.find(view.selectors.storeWrapper);

			battleView.$el.find(battleView.selectors.moveAreaContainer).addClass('hidden');

			view.$el = $(view.tmpl['unit-store']({
				commander: player.commander,
				playerColor: player.color,
				availableStoreUnits: map.availableStoreUnits
			}));

			view.autoSetCardState();
			storeWrapper.append(view.$el);

		},

		buyUnit: function (e) {

			var view, model, mapSize, unitLimit, mapWidth, mapHeight, x, y, xy, currentXY, getPathSize, player,
				playerUnits, playerMoney, $this, unitType, unitData, unitCost, freeXYs;

			if (e.state === 'cpu') { // bot

				view = e.view;
				model = e.model;

				currentXY = {
					x: e.x,
					y: e.y
				};

				player = e.player;

				//$this;
				unitType = e.unitType;

			} else { // human

				view = this;
				model = view.get('model');

				if (Date.now() - view.get('createTime') < view.deltaActionTime) {
					return;
				}

				currentXY = {
					x: view.get('x'),
					y: view.get('y')
				};

				player = view.get('player');

				$this = $(e.currentTarget);
				unitType = $this.attr('data-unit-key');

			}

			mapSize = model.get('map').size;
			unitLimit = model.get('unitLimit');
			mapWidth = mapSize.width;
			mapHeight = mapSize.height;
			getPathSize = win.APP.util.getPathSize;
			playerUnits = model.getUnitsByOwnerId(player.id);
			playerMoney = player.money;
			unitData = win.APP.unitMaster.list[unitType];
			unitCost = unitData.cost;
			freeXYs = [];

			if ( playerUnits.length >= unitLimit ) {
				return;
			}

			if ( unitCost > playerMoney ) {
				return;
			}

			// if commander is live - return
			// do not buy 2+ commander
			if ( player.commander.isLive && _.contains(win.APP.unitMaster.commanderList, unitType) ) {
				return;
			}

			player.money -= unitCost;

			for (x = 0; x < mapWidth; x += 1) {
				for (y = 0; y < mapHeight; y += 1) {
					xy = {x: x, y: y};
					if ( !model.getUnitByXY(xy) ) {
						freeXYs.push(xy);
					}
				}
			}

			freeXYs = freeXYs.sort(function (xy1, xy2) {
				return getPathSize(currentXY, xy1) - getPathSize(currentXY, xy2);
			});

			model.appendUnit({
				type: unitType,
				ownerId: player.id,
				teamNumber: player.teamNumber,
				color: player.color,
				x: freeXYs[0].x,
				y: freeXYs[0].y
			});

			if (e.state === 'cpu') { // bot
				view.updateStatusBar();
			} else {
				view.autoSetCardState();
				view.get('view').updateStatusBar();
				view.setUnitCounter(unitType);

				if ( model.isUnitsTooMuch() ) {
					view.routeBack();
					view.showTicket({
						popupData: {
							text: win.APP.lang.get('tooMuchUnits')
						},
						cssClass: 'error'
					});
				}

			}


		},

		autoSetCardState: function () {

			var view = this,
				model = view.get('model'),
				player = view.get('player'),
				playerUnits = model.getUnitsByOwnerId(player.id),
				unitLimit = model.get('unitLimit'),
				playerMoney = player.money,
				unitData = win.APP.unitMaster.list,
				$cards = view.$el.find(view.selectors.card),
				$commanderCard = view.$el.find(view.selectors.card + '[data-is-commander="true"]');

			// set commander state
			if ( player.commander.isLive ) {
				$commanderCard.addClass('hidden');
			} else {
				$commanderCard.removeClass('hidden');
			}

			// detect unit limit exceed
			if ( playerUnits.length >= unitLimit ) {
				$cards.addClass('disabled-card');
				return;
			}

			_.each($cards, function (card) {

				var $card = $(card),
					unitType = $card.attr('data-unit-card-name'),
					unitCost = unitData[unitType].cost;

				return unitCost > playerMoney ? $card.addClass('disabled-card') : $card.removeClass('disabled-card');

			});

		},

		setUnitCounter: function (type) {

			var view = this,
				selectors = view.selectors,
				$count = view.$el.find(selectors.buyUnitCount + '[data-unit-key="' + type + '"]'),
				count = parseInt($count.attr('data-unit-count'), 10) + 1;

			$count
				.removeClass('hidden')
				.attr('data-unit-count', count)
				.html('[' + count + ']');

		},

		showUnitDescription: function (e) {

			var view = this,
				$button = $(e.currentTarget),
				unitKey = $button.attr('data-unit-key'),
				state = $button.attr('data-description-is-show'),
				$description = view.$el.find(view.selectors.descriptionUnitInfo + '[data-unit-key="' + unitKey + '"]');

			if (Date.now() - view.get('createTime') < view.deltaActionTime) {
				return;
			}

			if ( state === 'no' ) {
				$description.removeClass('hidden');
				$button.attr('data-description-is-show', 'yes');
			} else {
				$description.addClass('hidden');
				$button.attr('data-description-is-show', 'no');
			}

		}

	});

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.SaveGameView = APP.BB.BaseView.extend({

		selectors: {
			setInputTextValue: '.js-set-input-text-value',
			saveInputText: '.js-save-input-text',
			savedList: '.js-saved-list',
			saveGame: '.js-save-game',
			removeSavedGame: '.js-remove-saved-game',
			savedItemWrapper: '.js-saved-item-wrapper',
			closeDeleteConfirm: '.js-close-delete-confirm',
			container: '.js-popup-container'
		},

		events: {
			// do not add events here
			//'click .js-save-game': 'saveGame'
		},

		initialize: function (data) {

			var view = this;

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				saveName = view.getSaveName(),
				dbMaster = win.APP.map.db;

			view.$el = $(view.tmpl['save-game']({
				saveName: saveName
			}));

			dbMaster.getSavedGames().then(function (savedGames) {
				var html = view.tmpl['save-game-items']({ savedGames: savedGames });
				view.$el.find(view.selectors.savedList).html(html);
				view.undelegateEvents();
				view.bindEventListeners();
				view.autoSetSaveButtonState();
			});

		},

		bindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			view.unbindEventListeners();

			view.$el.find(selectors.saveGame).on('click', $.proxy(view, 'saveGame') );
			view.$el.find(selectors.removeSavedGame).on('click', $.proxy(view, 'removeSavedGame') );
			view.$el.find(selectors.closeDeleteConfirm).on('click', $.proxy(view, 'closeDeleteConfirm') );
			view.$el.find(selectors.saveInputText).on('input', $.proxy(view, 'autoSetSaveButtonState') );
			view.$el.find(selectors.saveInputText).on('focus', $.proxy(view, 'onFocusSaveInputText') );
			view.$el.find(selectors.saveInputText).on('blur', $.proxy(view, 'onBlurSaveInputText') );
			view.$el.find(selectors.setInputTextValue).on('click', $.proxy(view, 'setInputTextValue') );

		},

		unbindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			view.$el.find(selectors.saveGame).off('click', view.saveGame );
			view.$el.find(selectors.removeSavedGame).off('click', view.removeSavedGame );
			view.$el.find(selectors.closeDeleteConfirm).off('click', view.closeDeleteConfirm );
			view.$el.find(selectors.saveInputText).off('input', view.autoSetSaveButtonState );
			view.$el.find(selectors.saveInputText).off('focus',view.onFocusSaveInputText );
			view.$el.find(selectors.saveInputText).off('blur', view.onBlurSaveInputText );
			view.$el.find(selectors.setInputTextValue).off('click', view.setInputTextValue );

		},

		onFocusSaveInputText: function () {

			var view = this,
				$container = view.$el.closest(view.selectors.container);

			setTimeout(function () {
				$container.addClass('small-area-container');
			}, 400);

		},

		onBlurSaveInputText: function () {

			var view = this,
				$container = view.$el.closest(view.selectors.container);

			setTimeout(function () {
				$container.removeClass('small-area-container');
			}, 200);

		},

		autoSetSaveButtonState: function () {

			var view = this,
				lang = win.APP.lang,
				selectors = view.selectors,
				$inputText = view.$el.find(selectors.saveInputText),
				saveName = $inputText.val().trim(),
				$savedGame = view.$el.find(selectors.savedItemWrapper + '[data-save-name="' + saveName + '"]'),
				$saveGameButton = view.$el.find(selectors.saveGame);

			if ($savedGame.length) {
				$saveGameButton.html(lang.get('replace'));
			} else {
				$saveGameButton.html(lang.get('save'));
			}

		},

		setInputTextValue: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				saveName = $this.attr('data-save-name'),
				selectors = view.selectors,
				$inputText = view.$el.find(selectors.saveInputText);

			$inputText.val(saveName);

			view.autoSetSaveButtonState();

		},

		getSaveName: function () {

			var view = this,
				info = view.info,
				language = info.get('language'),
				battleView = view.get('battleView'),
				battleModel = view.get('battleModel'),
				map = battleModel.get('map'),
				mapName = map['name-' + language] || map.name,
				date = new Date(),
				saveName = mapName + ' ' + [date.getSeconds(), date.getMinutes(), date.getHours(), date.getDate(), date.getMonth() + 1, date.getFullYear()].join('-');

			saveName = saveName.replace(/(\d+)/g, function (match, p1) {
				return p1.length > 1 ? p1 : 0 + p1;
			});

			return saveName;

		},

		saveGame: function () {

			var view = this,
				saveDate = Date.now(),
				saveName = view.$el.find(view.selectors.saveInputText).val().trim(),
				gameData = view.getDataToSave(),
				dbMaster = win.APP.map.db;

			view.setSaveButtonEnable(false);

			dbMaster
				.saveGame(saveDate, saveName, gameData)
				.then(function () {
					return dbMaster.getSavedGames()
				})
				.then(function (savedGames) {
					var html = view.tmpl['save-game-items']({ savedGames: savedGames });
					view.$el.find(view.selectors.savedList).html(html);
					view.undelegateEvents();
					view.setSaveButtonEnable(true);
					view.bindEventListeners();
					view.autoSetSaveButtonState();
					view.showTicket({
						popupData: {
							text: win.APP.lang.get('gameSaved') + '<br>' + saveName
						}
					});
				});

		},

		removeSavedGame: function (e) {

			var view = this,
				dbMaster = win.APP.map.db,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name'),
				$blocks,
				$block = view.$el.find(view.selectors.savedItemWrapper + '[data-save-name="' + gameName + '"]');

			$block.remove();

			dbMaster.removeSave(gameName);

			$blocks = view.$el.find(view.selectors.savedItemWrapper);

			if ( !$blocks.length ) {
				view.$el.find(view.selectors.savedList).html(win.APP.lang.get('noSavedGames'))
			}

		},

		closeDeleteConfirm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name'),
				$button = view.$el.find('.js-tab-button[data-save-name="' + gameName + '"]');

			$button.trigger('click');

		},

		setSaveButtonEnable: function (isEnable) {

			var view = this,
				saveButton = view.$el.find(view.selectors.saveGame);

			return isEnable ? saveButton.removeClass('disable') : saveButton.addClass('disable');

		},

		getDataToSave: function () {

			// see battle model

			var view = this,
				battleView = view.get('battleView'),
				model = view.get('battleModel'),
				activePlayer,
				units = model.get('units'),
				buildings = model.get('buildings'),
				save = {
					turnCount: model.get('turnCount'),
					circleCount: model.get('circleCount'),
					players: model.get('players'),
					activePlayer: model.get('activePlayer'),
					units: [],
					buildings: buildings,
					jsMapKey: model.get('jsMapKey'),
					map: model.get('map'),
					unitLimit: model.get('unitLimit'),
					difficult: view.info.get('difficult'),
					graves: model.get('graves'),
					argsForRestart: battleView.get('argsForRestart')
				},
				doNotSaves = ['model', 'view'];

			// save players - ALL data - done
			// active player - save ID - done, save full player
			// save units - ALL data.toJSON(), active and no active - done
			// save buildings - ALL data - done
			// save map - terrain - full map done

			_.each(units, function (unit) {
				// toJSON is bad idea, save only needed data
				var unitData = {};
				_.each(unit.toJSON(), function (value, key) {
					return _.contains(doNotSaves, key) || (unitData[key] = value);
				});
				save.units.push(unitData);
			});

			return save;

		}

	});

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */
	/*global $, templateMaster, APP, Backbone */

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.LoadGamePopupView = APP.BB.BaseView.extend({

		selectors: {
			closeLoadConfirm: '.js-close-load-confirm',
			loadGame: '.js-load-game'
		},

		events: {

		},

		initialize: function (data) {

			var view = this;

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);

			view.render();

		},

		render: function () {

			var view = this,
				dbMaster = win.APP.map.db;

			view.$el = $(view.tmpl['load-game-popup']());

			dbMaster.getSavedGames().then(function (savedGames) {
				var html = view.tmpl['load-game-popup']({ savedGames: savedGames });
				view.$el.html(html);
				view.undelegateEvents();
				view.bindEventListeners();
			});

		},

		bindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			view.unbindEventListeners();

			view.$el.find(selectors.loadGame).on('click', $.proxy(view, 'loadGame') );
			view.$el.find(selectors.closeLoadConfirm).on('click', $.proxy(view, 'closeLoadConfirm') );

		},

		unbindEventListeners: function () {

			var view = this,
				selectors = view.selectors;

			view.$el.find(selectors.loadGame).off('click', view.loadGame );
			view.$el.find(selectors.closeLoadConfirm).off('click', view.closeLoadConfirm );

		},

		closeLoadConfirm: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name'),
				$button = view.$el.find('.js-tab-button[data-save-name="' + gameName + '"]');

			$button.trigger('click');

		},

		loadGame: function (e) {

			var view = this,
				dbMaster = win.APP.map.db,
				$this = $(e.currentTarget),
				gameName = $this.attr('data-save-name');

			dbMaster.getSavedGame(gameName).then(function (data) {
				var game = JSON.parse(data.game);
				game.fromSave = true;
				new win.APP.BB.BattleView(game);
			});

			view.backTo('battle');
			
		}

	});

}(window));
/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document, setTimeout, clearTimeout */
	/*global APP, $, Backbone*/

	win.APP = win.APP || {};

	win.APP.BB = win.APP.BB || {};

	APP.BB.StoryView = APP.BB.BaseView.extend({

		events: {},

		initialize: function (data) { // parentView:view, pageIndex:number

			var view = this,
				story = window.APP.lang.get('story'),
				text = story.list[data.storyNumber],
				imgPathPrefix = story.imgPathPrefix,
				pages = text.split('_!!_'),
				reDetectImg = /\w+\.png$/;

			pages = _.map(pages, function (page) {
				return _.map(page.split('_!_'), function (part) {
					return reDetectImg.test(part) ? {type: 'img', src: imgPathPrefix + part} : {type: 'text', src: part};
				});
			});

			view.$el = $(view.tmpl.story({pages: pages}));

			view.extendFromObj(data);

			view.proto.initialize.apply(view, arguments);
			view.render();

		},

		render: function () {

			var view = this,
				parentView = view.get('parentView');

			parentView.$el.append(view.$el);

		}

	});

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global _ */

	win.APP = win.APP || {};

	win.APP.BB.FightAnimationView = APP.BB.BaseView.extend({

		events: {},

		selectors: {
			statusBarWrapper: '.js-fight-animation-status-bar'
		},

		fighters: {

			'galamar': {
				count: 1
			},
			'valadorn': {
				count: 1
			},
			'demon-lord': {
				count: 1
			},
			'saeth': {
				count: 1
			},
			'saeth-heavens-fury': {
				count: 1
			},
			'soldier': {
				count: 5
			},
			'archer': {
				count: 5
			},
			'elemental': {
				count: 5
			},
			'sorceress': {
				count: 5
			},
			'wisp': {
				count: 5
			},
			'dire-wolf': {
				count: 3
			},
			'golem': {
				count: 3
			},
			'catapult': {
				count: 3
			},
			'dragon': {
				count: 1
			},
			'skeleton': {
				count: 5
			},
			'crystal': {
				count: 5
			}

		},

		initialize: function (data) { // parentView, parentDeferred, attacker, defender

			var view = this;

			view.extendFromObj(data);

			view.setTerrain(data);

			view.setUnits(data);

			view.$el = $(view.tmpl['fight-animation'](data));

			view.render();

		},

		setTerrain: function (data) {

			var view = this,
				parentView = view.get('parentView'),
				model = parentView.get('model'),
				attacker = data.attacker.unit,
				defender = data.defender.unit,
				attackerTerrain = model.getTerrainByXY({
					x: attacker.get('x'),
					y: attacker.get('y')
				}),
				defenderTerrain = model.getTerrainByXY({
					x: defender.get('x'),
					y: defender.get('y')
				});

			// todo: detect building add 'building' type

			data.attacker.terrain = attackerTerrain.terrainType;
			data.defender.terrain = defenderTerrain.terrainType;

		},

		setUnits: function (data) {

			var view = this;

			_.each(['attacker', 'defender'], function (warriorType) {

				var unitData = data[warriorType],
					unit = unitData.unit,
					type = unit.get('type'),
					health = unit.get('health'),
					defaultHealth = unit.get('defaultHealth'),
					fullCount = view.fighters[type].count,
					count = Math.ceil(health / defaultHealth * fullCount),
					fighters = [],
					i, len;

				for (i = 0, len = fullCount; i < len; i += 1) {
					fighters[i] = i < count;
				}

				unitData.fullCount = fullCount;
				unitData.fighters = fighters;

			});

		},

		render: function () {

			var view = this,
				parentView = view.get('parentView');

			parentView.$el.append(view.$el);

			setTimeout(function () {
				view.get('parentDeferred').resolve();
			}, 2e3);


		},

		refreshStatusBar: function () {

			var view = this,
				selectors = view.selectors,
				$el = view.$el,
				$statusBar = $el.find(selectors.statusBarWrapper),
				newStatusBarHtml = $(view.tmpl['fight-animation-status-bar']({
					attacker: view.get('attacker'),
					defender: view.get('defender')
				}));

			$statusBar.html(newStatusBarHtml.html());

		}


	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $ */

	var Device = Backbone.Model.extend({

		initialize: function(){

			this.bindEventListeners();

		},
		bindEventListeners: function () {

			$(window).on('resize', $.proxy( this, 'onResize' ) );

		},
		onResize: function () {

			this.trigger('resize');

		}


	});

	win.APP.device = new Device();

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _, log */

	win.APP.bb = win.APP.bb || {};

	//win.APP.bb.battleData = {};

	win.APP.BB.BattleModel = Backbone.Model.extend({

		initialize: function() {

			var model = this,
				args = model.get('args'),
				players,
				map = model.get('map'),
				playersMoney = map.money;

			//win.APP.bb.battleData = {
			//	isEndGame: 'no',
			//	gameTo: 'quit'
			//};

			players = JSON.parse(JSON.stringify(args.players));

			players = _.filter(players, function (player) {
				return player.type !== 'none';
			});

			model.set('jsMapKey', args.jsMapKey);
			model.set('unitLimit', args.unitLimit);
			model.set('players', players);
			model.set('buildings', []); // will be filled building append units
			model.set('units', []); // will be filled after append units
			model.set('graves', []); // will be filled in battle

			players = model.get('players');
			if (playersMoney) {
				_.each(playersMoney, function (data) {
					var player = _.find(players, {id: data.playerId});
					if (player) {
						player.money = player.hasOwnProperty('money') ? player.money : data.money
					}
				});
			} else {
				// add money to player
				_.each(model.get('players'), function (player) {
					player.money = player.hasOwnProperty('money') ? player.money : args.money;
				});
			}

			this.clearAvailableActions();

			this.autoSetCommandersName();

		},

		appendBuildings: function () {

			var mapBuildings = this.get('map').buildings,
				savedData = this.get('savedData'),
				view = this.get('view'),
				players = this.get('players'),
				buildingArr = this.get('buildings'),
				buildingDefaultColor = win.APP.building.defaults.color,
				buildingMap = win.APP.building.list,
				buildingDefaultTeamNumber = win.APP.building.defaults.teamNumber;

			if (savedData) {

				mapBuildings = savedData.buildings;

				_.each(mapBuildings, function (building) {
					buildingArr.push(building);
					view.appendBuilding(building);
				});

				return;

			}

			_.each(mapBuildings, function (building) {

				// detect color of building
				var player = _.where(players, { id: building.ownerId })[0];

				building.color = player ? player.color : buildingDefaultColor;
				building.teamNumber = player ? player.teamNumber : buildingDefaultTeamNumber;
				building.canBeStore = Boolean(buildingMap[building.type].canBeStore);

				buildingArr.push(building);

				view.appendBuilding(building);

			});

		},

		appendUnits: function () {

			var model = this,
				savedData = this.get('savedData'),
				mapUnits = model.get('map').units,
				players = model.get('players');


			if (savedData) {
				mapUnits = savedData.units;
				_.each(mapUnits, function (unit) {
					model.appendUnit(unit);
				});
				return;
			}

			_.each(mapUnits, function (unit) {

				// detect color of building
				var player = _.where(players, { id: unit.ownerId })[0];

				if ( !player ) { // detect player.type === 'none' was deleted from players
					return;
				}

				unit.color = player.color;
				unit.teamNumber = player.teamNumber;

				model.appendUnit(unit);

			});

		},

		appendUnit: function (unitData) {

			var unit,
				model = this,
				player,
				view = model.get('view'),
				unitArr = model.get('units'),
				unitType = unitData.type,
				isCommander = unitType === 'commander' || _.contains(win.APP.unitMaster.commanderList, unitType);

			if ( isCommander ) {

				player = _.find( model.get('players'), {id: unitData.ownerId});

				// if player has commander? test only for mission (7th mission)
				unitData.type = unitType === 'commander' ? player.commander.name : unitType;
				unitData.xp = player.commander.xp;
				player.commander.isLive = true;

			}

			unit = win.APP.unitMaster.createUnit(unitData);
			unit.set('model', model);
			unit.set('view', view);

			unitArr.push(unit);
			view.appendUnit(unit);

			model.autoSetWispAura();

			return unit;

		},

		appendGraves: function () {

			var model = this,
				view = model.get('view'),
				savedData = model.get('savedData'),
				graves = savedData.graves;

			_.each(graves, function (savedGrave) {

				var grave = win.APP.unitMaster.createGrave({
					x: savedGrave.x,
					y: savedGrave.y
				});

				grave.currentTime = savedGrave.currentTime;
				model.addGrave(grave);
				view.addGrave(grave);

			});

		},

		appendUnitNearFrom: function (unitData) {
			
			var model = this,
				view = model.get('view'),
				mapSize = model.get('map').size,
				unitLimit = model.get('unitLimit'),
				mapWidth = mapSize.width,
				mapHeight = mapSize.height,
				getPathSize = win.APP.util.getPathSize,
				currentXY = {
					x: unitData.x,
					y: unitData.y
				},
				players = model.get('players'),
				player = _.find(players, {id: unitData.ownerId}),
				freeXYs = [],
				y, x, xy;

			for (x = 0; x < mapWidth; x += 1) {
				for (y = 0; y < mapHeight; y += 1) {
					xy = {x: x, y: y};
					if ( !model.getUnitByXY(xy) ) {
						freeXYs.push(xy);
					}
				}
			}

			freeXYs = freeXYs.sort(function (xy1, xy2) {
				return getPathSize(currentXY, xy1) - getPathSize(currentXY, xy2);
			});

			model.appendUnit({
				type: unitData.type,
				ownerId: unitData.ownerId,
				teamNumber: player.teamNumber,
				color: player.color,
				x: freeXYs[0].x,
				y: freeXYs[0].y
			});

			view.updateStatusBar();

		},
		
		autoSetCommandersName: function () {

			var model = this,
				players = model.get('players'),
				mapUnits = model.get('map').units,
				copyJSON = win.APP.BB.BaseView.prototype.util.copyJSON,
				util = win.APP.util,
				commanderList = util.assortArray(copyJSON(win.APP.unitMaster.commanderList));

			// set commanders from map
			_.each(players, function (player) {

				player.commander = player.commander || {
					isLive: false,
					name: null,
					xp: 0
				};

				var ownerId = player.id,
					units = _.where(mapUnits, { ownerId: ownerId });

				_.each(units, function (unit) {
					var unitType = unit.type;
					if ( _.contains(commanderList, unitType) ) {
						player.commander.name = unitType;
						util.arrayRemoveByValue(commanderList, unitType);
					}
				});

			});

			// set other commanders
			_.each(players, function (player) {
				if ( player.commander.name ) {
					return;
				}
				player.commander.name = commanderList.pop();
			});

		},

		addGraveInsteadUnit: function (unit) {

			unit.unbindEventListener();

			var withoutGrave = unit.get('withoutGrave'),
				model = this,
				view = model.get('view'),
				grave = win.APP.unitMaster.createGrave({
					x: unit.get('x'),
					y: unit.get('y')
				}),
				activePlayer = model.get('activePlayer');

			model.removeUnit(unit);
			view.removeUnit(unit);

			model.checkPlayerDefeat();
			model.checkEndMission();

			if (unit.get('ownerId') === activePlayer.id) {
				view.updateStatusBar();
			}

			if (withoutGrave) {
				return;
			}

			model.addGrave(grave);
			view.addGrave(grave);

		},

		removeUnit: function (unit) {

			var model = this,
				units = model.get('units'),
				unitIndex = units.indexOf(unit);

			units.splice(unitIndex, 1);

			// set wisp aura for attacked team
			model.autoSetWispAura({
				playerId: unit.get('ownerId')
			});

		},

		addGrave: function (grave) {

			var model = this,
				graves = model.get('graves');

			graves.push(grave);

		},

		removeGrave: function (grave) {

			var model = this,
				graves = model.get('graves'),
				graveIndex = graves.indexOf(grave);

			graves.splice(graveIndex, 1);

		},

		autoSetWispAura: function (data) {

			data = data || {};

			var model = this,
				activePlayer = model.get('activePlayer'),
				allTeamUnits,
				wisps,
				wispAuraMap,
				otherUnits;

			if ( !activePlayer ) {
				return;
			}

			if (data.hasOwnProperty('playerId')) {
				activePlayer = _.find(model.get('players'), { id: data.playerId });
			}

			if (!activePlayer) {
				return;
			}

			allTeamUnits = model.getUnitsByTeamNumber(activePlayer.teamNumber);
			wisps = [];
			wispAuraMap = [];
			otherUnits = [];

			_.each(allTeamUnits, function (unit) {
				return unit.get('type') === 'wisp' ? wisps.push(unit) : otherUnits.push(unit);
			});

			// create wisp aura map
			_.each(wisps, function (wisp) {
				var auraMap = wisp.getWispAuraMap();
				wispAuraMap = wispAuraMap.concat(auraMap);
			});

			_.each(otherUnits, function (unit) {

				var unitX = unit.get('x'),
					unitY = unit.get('y');

				unit.set('underWispAura', Boolean( _.find(wispAuraMap, { x: unitX, y: unitY }) ));

			});

		},

		increaseTurnCounter: function () {

			var model = this,
				players = model.get('players'),
				activePlayer = model.get('activePlayer'),
				currentCount = model.get('turnCount') || 0,
				currentCircleCount = model.get('circleCount') || 0;

			model.set('turnCount', currentCount + 1);

			// increase circleCount
			if ( players.indexOf(activePlayer) === 0 ) {
				model.set('circleCount', currentCircleCount + 1);
			}

		},

		startGame: function () {

			var model = this,
				savedData = model.get('savedData'),
				map = model.get('map'),
				mapType = map.type,
				view = model.get('view'),
				activePlayer = model.get('players')[0];

			if (savedData) {
				activePlayer = _.find(model.get('players'), { id: savedData.activePlayer.id });
			}

			model.set('activePlayer', activePlayer);

			model.startTurn({
				startGame: true,
				isSavedData: Boolean(savedData)
			});

			if (savedData) {
				view.autoShowHelpButton();
			} else {
				if ( /skirmish|userMap/.test(mapType) ) {
					view.showObjective().then(function () {
						view.autoShowHelpButton();
					});
				}

				if (mapType === 'mission') {
					view.showBriefing({
						briefingName: 'startBriefing'
					});
				}
			}

			_.each(model.get('players'), function (player) {
				model.autoSetWispAura({
					playerId: player.id
				});
			});

		},

		newTurn: function () {

			var model = this,
				view = model.get('view'),
				earn, color,
				isCpu,
				activePlayer;

			model.setActivePlayer();

			activePlayer = model.get('activePlayer');

			earn = model.grabBuildingEarn(); // auto increase player money
			color = activePlayer.color;

			model.startTurn();

			isCpu = activePlayer.type === 'cpu';

			if ( isCpu ) {
				view.showPopup({
					popupName: 'between-turn-notification',
					cssClass: 'disable-event',
					popupData: {
						color: color,
						earn: '?'
					}
				});
			} else {

				// if has cases to do
				if ( model.hasCasesToDo() ) {

					view.showPopup({
						popupName: 'between-turn-notification',
						popupData: {
							color: color,
							earn: earn
						}
					}).then(function () {
						model.checkCases();
					});

				} else {
					view.showPopup({
						popupName: 'between-turn-notification',
						popupData: {
							color: color,
							earn: earn
						}
					});
					model.autoSave();

				}

			}

		},

		setActivePlayer: function () {

			var players = this.get('players'),
				activePlayer = this.get('activePlayer'),
				playersLength = players.length,
				activePlayerIndex = players.indexOf(activePlayer),
				nextActivePlayerIndex = activePlayerIndex + 1;

			if (nextActivePlayerIndex >= playersLength) {
				nextActivePlayerIndex = 0;
			}

			activePlayer = players[nextActivePlayerIndex];
			this.set('activePlayer', activePlayer);

		},

		startTurn: function (data) {

			data = data || {};

			var model = this,
				savedData = model.get('savedData'),
				savedUnits,
				view = model.get('view'),
				activePlayer = model.get('activePlayer');

			if (data.isSavedData) {
				model.set('turnCount', savedData.turnCount);
				model.set('circleCount', savedData.circleCount);
			} else {
				model.increaseTurnCounter();
			}

			switch (activePlayer.type) {
				case 'cpu':
					win.APP.soundMaster.play({
						sound: 'bg-bad.mp3',
						road: 0,
						isLoop: true
					});
					break;
				case 'player':
					win.APP.soundMaster.play({
						sound: 'bg-good.mp3',
						road: 0,
						isLoop: true
					});
					break;
			}

			model.clearAvailableActions();

			view.clearAvailableActions();

			view.removeActiveSquare();

			model.setUnitsState();

			if (savedData && data.startGame) {
				savedUnits = savedData.units;
				_.each(model.get('units'), function (unit) {
					var savedUnit = _.find(savedUnits, {x: unit.get('x'), y: unit.get('y')});
					_.each(savedUnit, function (value, key) {
						unit.set(key, value);
					});
				});
			}

			if ( !data.startGame ) {
				model.healthByBuildings();
				model.setGraveState();
				model.autoSetPoisonCount();
			}

			model.get('view').updateStatusBar();

			if (activePlayer.type === 'cpu') {
				view.hidePopups({ timePadding: win.APP.info.actionTime() * 3 }).then(function () {
					model.runCpu();
				});
				view.cpuMode(true);
			} else {
				view.cpuMode(false);
			}

		},

		click: function (xy) {

			// 0 - show unit available attack (using available path) - hold or dblclick
			// 1 - show unit info in popup - hold or dblclick
			// 5 - show available path - only for player unit - click

			var model = this,
				view = this.get('view'),
				activePlayer = model.get('activePlayer'),
				action = model.getActionByXY(xy),
				unit = model.getUnitByXY(xy),
				building = model.getBuildingByXY(xy),
				buildingData = win.APP.building.list,
				terrain = model.getTerrainByXY(xy),
				availableActions,
				unitOwnerId;

			// find active actions
			if (action) {
				// do action
				model.doAction(action);
				return;
			}

			// find unit
			if (unit) {

				unitOwnerId = unit.get('ownerId');

				// if unit is active - 1
					// if unit owned by active player
						// create and show available action
					// if unit is NOT owned by active player
						// show available path and available attack (attack only)
				// if unit is inactive - 2
					// show terrain info

				if ( unit.get('isActive') ) {

					if ( unitOwnerId === activePlayer.id ) {
						// create and show available action
						availableActions = unit.getAvailableActions();
						view.showAvailableActions(availableActions);
						model.set('availableActions', availableActions);
						log('create and show available action');
					} else {
						// show available path and available attack (attack only)
						log('show available path and available attack (attack only)');
						model.clearAvailableActions();
						view.clearAvailableActions();

						if ( building && buildingData[building.type].canBeStore ) { // try to open store
							model.tryToOpenStoreByBuilding(building);
						}

					}

				} else {

					if ( unitOwnerId === activePlayer.id && building && buildingData[building.type].canBeStore && building.ownerId === activePlayer.id) { // try to open store
						model.openStore(xy);
					}

					// show terrain info
					log(terrain);
					model.clearAvailableActions();
					view.clearAvailableActions();

				}

				return;
			}

			// find building
			if (building) {
				// show building / terrain info // see view.autoSetSquareInfo
				model.tryToOpenStoreByBuilding(building);
				log(building);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

			// find terrain
			if (terrain) {
				// show terrain info // see view.autoSetSquareInfo
				log(terrain);
				model.clearAvailableActions();
				view.clearAvailableActions();
				return;
			}

		},

		getUnitsByOwnerId: function (ownerId) {
			return _.filter(this.get('units'), function (unit) {
				return unit.get('ownerId') === ownerId;
			});
		},

		getUnitsByTeamNumber: function (teamNumber) {
			return _.filter(this.get('units'), function (unit) {
				return unit.get('teamNumber') === teamNumber;
			});
		},

		getBuildingsByOwnerId: function (ownerId) {
			return _.where(this.get('buildings'), {ownerId: ownerId});
		},

		//getBuildingsByTeamNumber: function (teamNumber) {
		//
		//},

		//////////////////
		// find by xy
		//////////////////

		getActionByXY: function (xy) {

			var model = this,
				actions = model.get('availableActions'),
				unit = actions.unit,
				availablePathViewWithoutTeamUnit = actions.availablePathViewWithoutTeamUnit,
				confirmMoveAction = actions.confirmMoveAction,
				confirmAttackAction = actions.confirmAttackAction,
				unitsUnderAttack = actions.unitsUnderAttack,
				gravesToRaise = actions.gravesToRaise,
				move,
				undoMoveActions = actions.undoMoveActions,
				undoAttackActions = actions.undoAttackActions,
				buildingToFix = actions.buildingToFix,
				buildingToOccupy = actions.buildingToOccupy,
				openStore = actions.openStore;

			log(' -- actions');
			log(actions);

			move = _.find(availablePathViewWithoutTeamUnit, xy);

			if ( move ) {
				return {
					type: 'move',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( confirmMoveAction && confirmMoveAction.x === xy.x && confirmMoveAction.y === xy.y ) {
				return {
					type: 'confirmMove',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( undoMoveActions && _.find(undoMoveActions, xy) ) {
				return {
					type: 'undoMoveAction',
					unit: unit,
					beforeX: undoMoveActions[0].beforeX,
					beforeY: undoMoveActions[0].beforeY
				};
			}

			if ( confirmAttackAction && confirmAttackAction.x === xy.x && confirmAttackAction.y === xy.y ) {
				return {
					type: 'confirmAttackAction',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( undoAttackActions && _.find(undoAttackActions, xy) ) {
				return {
					type: 'undoAttackAction',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}

			if ( unitsUnderAttack && _.find(unitsUnderAttack, xy) ) {
				return {
					type: 'attack',
					unit: unit,
					attackX: xy.x,
					attackY: xy.y
				};
			}

			if ( gravesToRaise && _.find(gravesToRaise, xy) ) {
				return {
					type: 'raise',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}


			if ( buildingToFix && buildingToFix.x === xy.x && buildingToFix.y === xy.y ) {
				return {
					type: 'fix-building',
					unit: unit,
					buildingToFix: buildingToFix,
					x: xy.x,
					y: xy.y
				};
			}

			if ( buildingToOccupy && buildingToOccupy.x === xy.x && buildingToOccupy.y === xy.y  ) {
				return {
					type: 'occupy-building',
					unit: unit,
					buildingToOccupy: buildingToOccupy,
					x: xy.x,
					y: xy.y
				};
			}

			if ( openStore && openStore.x === xy.x && openStore.y === xy.y ) {
				return {
					type: 'open-store',
					unit: unit,
					x: xy.x,
					y: xy.y
				};
			}


			return false;

		},

		getUnitByXY: function (xy) {

			var x = xy.x,
				y = xy.y,
				result = false;

			_.each(this.get('units'), function (unit) {
				if ( unit.get('x') === x && unit.get('y') === y ) {
					result = unit;
				}
			});

			return result;

		},

		getBuildingByXY: function (xy) {

			var x = xy.x,
				y = xy.y,
				result = false;

			_.each(this.get('buildings'), function (building) {
				if ( building.x === x && building.y === y ) {
					result = building;
				}
			});

			return result;

		},

		getTerrainByXY: function (xy) {

			var map = this.get('map'),
				terrain = map.terrain,
				terrainName = terrain['x' + xy.x + 'y' + xy.y] || '',
				terrainType = win.APP.map.getTypeByTileName(terrainName);

			if ( !terrainName ) { // if terrain with xy is not exist -> return false
				return false;
			}

			return {
				xy: xy,
				x: xy.x,
				y: xy.y,
				terrainName: terrainName,
				terrainType: terrainType
			};

		},

		getArmorByXY: function (xy) {

			// try to get building
			var model = this,
				buildings = model.get('buildings'),
				build = _.find(buildings, xy),
				armor = build && win.APP.building.list[build.type].defence,
				terrainType;

			if (armor) {
				return armor;
			}

			terrainType = model.getTerrainByXY(xy).terrainType;
			return win.APP.map[terrainType].defence;

		},

		//////////////////
		// unit actions
		//////////////////

		clearAvailableActions: function () {
			this.set('availableActions', []);
		},

		doAction: function (action) {

			var model = this,
				unit = action.unit,
				actionType = action.type;

			switch (actionType) {

				case 'move':

					unit.moveTo(action);

					break;

				case 'confirmMove':

					unit.confirmMove();

					break;

				case 'undoMoveAction':

					unit.undoMoveAction(action);

					break;

				case 'attack':

					unit.attackToXy(action);

					break;


				case 'confirmAttackAction':

					unit.confirmAttack(action);

					break;

				case 'undoAttackAction':

					unit.undoAttack(action);

					break;

				case 'raise':

					unit.raise(action);

					break;

				case 'fix-building':

					unit.fixBuilding(action);

					break;

				case 'occupy-building':

					unit.occupyBuilding(action);

					break;

				case 'open-store':

					model.openStore(action);

					break;

				default:
					debugger
					log('--- undefind unit action');

			}

			log('do action');
			log(action);

		},

		setUnitsState: function () {

			var model = this,
				units = model.get('units');

			_.each(units, function (unit) {
				unit.prepareToNextTurn();
			});

		},

		setGraveState: function () {

			var model = this,
				view = model.get('view'),
				graves = model.get('graves'),
				stayGraves = [],
				removedGraves = [];

			_.each(graves, function (grave) {
				grave.increaseTime();
				return grave.needRemove() ? removedGraves.push(grave) : stayGraves.push(grave);
			});

			_.each(removedGraves, function (grave) {
				model.removeGrave(grave);
				view.removeGrave(grave);
			});

			model.set('graves', stayGraves);

		},

		healthByBuildings: function () {

			var model = this,
				buildings = model.get('buildings'),
				units = model.get('units'),
				activePlayerId = model.get('activePlayer').id;

			_.each(units, function (unit) {

				if ( unit.get('ownerId') !== activePlayerId ) {
					return;
				}

				var x = unit.get('x'),
					y = unit.get('y'),
					building = _.find(buildings, {x: x, y: y});

				unit.healthUpByBuilding(building);

			});

		},

		autoSetPoisonCount: function () {

			var model = this,
				units = model.get('units');

			_.each(units, function (unit) {

				var poisonCount = unit.get('poisonCount');

				if ( !poisonCount ) {
					return;
				}

				unit.setBy('poisonCount', -1);

			});

		},

		openStore: function (xy) {

			var model = this,
				view = model.get('view'),
				activePlayer = model.get('activePlayer');

			model.clearAvailableActions();
			view.clearAvailableActions();
			view.removeActiveSquare();

			new APP.BB.UnitStoreView({
				model: model,
				view: view,
				x: xy.x,
				y: xy.y,
				player: activePlayer
			});

		},

		tryToOpenStoreByBuilding: function (building) {

			var model = this,
				activePlayer = model.get('activePlayer');

			if ( building.ownerId !== activePlayer.id ) {
				return;
			}

			if ( !win.APP.building.list[building.type].canBeStore ) {
				return;
			}

			model.openStore({
				x: building.x,
				y: building.y
			});

		},

		grabBuildingEarn: function () {

			var model = this,
				earn = 0,
				player = model.get('activePlayer'),
				buildingData = win.APP.building.list,
				buildings = model.getBuildingsByOwnerId(player.id);

			_.each(buildings, function (building) {
				earn += buildingData[building.type].earn;
			});

			player.money += earn;

			return earn;

		},

		//////////////////
		// unit actions
		//////////////////

		checkEndMission: function () {

			if ( this.get('map').type !== 'mission' ) {
				return;
			}

			if ( this.checkCases() ) {
				return false;
			}

			var model = this,
				mapMaster = win.APP.map,
				view = model.get('view'),
				map = model.get('map'),
				wins = map.win,
				isWin = true,
				defeats = map.defeat,
				isDefeat = false,
				players = model.get('players');

			// find win state
			_.each(wins, function (win) {
				isWin = isWin && model.checkState({
					detect: win
				});
			});

			if (isWin) {

				model.set('isEndGame', true);

				//win.APP.bb.battleData.isEndGame = 'yes'; // will be set after las notification in endBriefing

				mapMaster.db.openMap(map.openMaps); // jsMapKey

				mapMaster.db.setMapDone({
					type: map.type,
					jsMapKey: model.get('jsMapKey')
				});

				view.showBriefing({
					briefingName: 'endBriefing'
				});
				return true;
			}

			// find defeat state
			_.each(defeats, function (defeat) {
				isDefeat = isDefeat || model.checkState({
					detect: defeat
				});
			});

			if (isDefeat) {

				model.set('isEndGame', true);

				//win.APP.bb.battleData.isEndGame = 'yes';
				//win.APP.bb.battleData.isEndGame = 'yes';
				view.showPopup({
					popupName: 'win-or-defeat',
					parentView: view,
					playSound: {
						sound: 'game-over.mp3',
						road: 0,
						isLoop: false
					},
					popupData: {
						header: win.APP.lang.get('defeat')
					},
					onHide: {
						fn: 'restartBattle'
					}
				});
				return true
			}

			// check here win and defeat

			return false;

		},

		checkPlayerDefeat: function () {

			if ( !/skirmish|userMap/.test(this.get('map').type) ) { // detect skirmish and user map
				return;
			}

			var model = this,
				view = model.get('view'),
				players = model.get('players'),
				looser = false,
				teamsNumbers = [],
				util = win.APP.util,
				//winTeam,
				//looserTeam,
				//looserBuilding,
				teamOfLooser;

			_.each(players, function (player) {

				teamsNumbers.push(player.teamNumber);

				if ( model.playerIsDefeat(player) ) {
					looser = player;
				}

			});

			teamsNumbers = _.uniq(teamsNumbers);

			if ( !looser ) {
				return false;
			}

			// remove looser from players
			players = util.arrayRemoveByValue(players, looser);

			teamOfLooser = model.getTeamByPlayer(looser);

			if ( teamOfLooser.length ) { // team is not empty

				// divide money and farm between team
				// divide money
				_.each(teamOfLooser, function (player) {
					player.money += Math.floor( looser.money / teamOfLooser.length ); // really do not want create one more variable with teamOfLooser.length
				});

				_.each( model.getBuildingsByOwnerId(looser.id), function (building) {

					var teamPlayer = teamOfLooser[0];

					building.color = teamPlayer.color;
					building.ownerId = teamPlayer.id;

					view.redrawBuilding(building);

				});

				_.each(model.getUnitsByOwnerId(looser.id), function (unit) {

					// see building
					var teamPlayer = teamOfLooser[0],
						color = teamPlayer.color,
						teamNumber = teamPlayer.teamNumber,
						ownerId = teamPlayer.id;

					unit.set('color', color);
					unit.set('teamNumber', teamNumber);
					unit.set('ownerId', ownerId);

					view.redrawUnit(unit);

				});


				if ( _.where(players, {type: 'cpu'}).length === players.length ) { // cpu only
					//win.APP.bb.battleData.isEndGame = 'yes';
					model.set('isEndGame', true);
					view.showPopup({
						popupName: 'win-or-defeat',
						parentView: view,
						playSound: {
							sound: 'game-over.mp3',
							road: 0,
							isLoop: false
						},
						popupData: {
							header: win.APP.lang.get('defeat')
						},
						onHide: { // can be disabled from popup view
							fn: 'backTo',
							args: ['play', { isForce: true }]
						}
					});
				} else {
					view.showPopup({
						popupName: 'simple-popup',
						parentView: view,
						popupData: {
							header: win.APP.lang.get(looser.color + 'Defeat')
						}
					});
				}

				return false;

			}

			// update team numbers
			teamsNumbers = [];
			_.each(players, function (player) {
				teamsNumbers.push(player.teamNumber);
			});
			teamsNumbers = _.uniq(teamsNumbers);

			if ( teamsNumbers.length === 1 ) { // detect winner

				//looserTeam = looser.teamNumber;
				//winTeam = teamsNumbers[0];

				//win.APP.bb.battleData.isEndGame = 'yes';

				model.set('isEndGame', true);

				if ( _.where(players, {type: 'cpu'}).length === players.length ) { // cpu only
					view.showPopup({
						popupName: 'win-or-defeat',
						parentView: view,
						playSound: {
							sound: 'game-over.mp3',
							road: 0,
							isLoop: false
						},
						popupData: {
							header: win.APP.lang.get('defeat')
						},
						onHide: { // can be disabled from popup view
							fn: 'backTo',
							args: ['play', { isForce: true }]
						}
					});
				} else {
					view.showPopup({
						popupName: 'win-or-defeat',
						parentView: view,
						playSound: {
							sound: 'victory.mp3',
							road: 0,
							isLoop: false
						},
						popupData: {
							header: win.APP.lang.get('victory')
						},
						onHide: { // can be disabled from popup view
							fn: 'backTo',
							args: ['play', { isForce: true }]
						}
					});
				}

				return true; // end game

			}

			// adjust loser's building
			_.each(model.getBuildingsByOwnerId(looser.id), function (building) {

				delete building.ownerId;
				building.teamNumber = null;
				delete building.color;

				view.redrawBuilding(building);

			});

			// adjust loser's units
			_.each(model.getUnitsByOwnerId(looser.id), function (unit) {

				// see building
				unit.set('color', 'gray');
				unit.set('teamNumber', null);
				unit.set('ownerId', null);

				view.redrawUnit(unit);

			});

			return false;

		},

		doCase: function (doIt, theCase) {

			var model = this,
				view = model.get('view');

			switch (doIt) {

				case 'appendUnits':
					_.each(theCase.units, function (unit) {
						model.appendUnitNearFrom(unit);
					});
					break;

				case 'showBriefing':

					view.showBriefing({
						briefingName: theCase.briefingName
					});

					break;

			}

			theCase.isDone = true;

		},

		checkCases: function () {

			var model = this,
				view = model.get('view'),
				map = model.get('map'),
				unorderedCases = _.where(map.unorderedCases, { isDone: false }),
				theCase = _.find(map.cases, { isDone: false });

			_.each(unorderedCases, function (caseItem) {

				if ( !model.checkState(caseItem) ) {
					return false;
				}

				_.each(caseItem.do, function (doIt) {
					model.doCase(doIt, caseItem);
				});

			});

			if ( !theCase ) {
				return false;
			}

			if ( !model.checkState(theCase) ) {
				return false;
			}

			_.each(theCase.do, function (doIt) {
				model.doCase(doIt, theCase);
			});

			return true;

		},

		hasCasesToDo: function () {

			var model = this,
				view = model.get('view'),
				map = model.get('map'),
				unorderedCases = _.where(map.unorderedCases, { isDone: false }),
				theCase = _.find(map.cases, { isDone: false }),
				hasCaseToDo = false;

			_.each(unorderedCases, function (caseItem) {
				hasCaseToDo = hasCaseToDo || model.checkState(caseItem);
			});

			hasCaseToDo = hasCaseToDo || model.checkState(theCase);

			return hasCaseToDo;

		},

		playerHasCastle: function (player) {

			var model = this,
				buildings = model.getBuildingsByOwnerId(player.id);

			return Boolean( _.find(buildings, { type: 'castle' }) );

		},

		playerHasCommander: function (player) {
			return player.commander.isLive;
		},

		playerIsDefeat: function (player) {

			var model = this;

			return !(model.playerHasCastle(player) || model.playerHasCommander(player));

		},

		getTeamByPlayer: function (player) {

			var model = this,
				players = model.get('players'),
				team = [],
				teamNumber = player.teamNumber;

			_.each(players, function (teamPlayer) {

				if ( teamNumber !== teamPlayer.teamNumber || teamPlayer === player ) {
					return;
				}

				team.push(teamPlayer);

			});

			return team;

		},

		runCpu: function () {

			var model = this,
				cpu;

			cpu = new win.APP.Cpu({
				model: model,
				player: model.get('activePlayer')
			});

			cpu.run();

		},

		checkState: function (theCase) {

			if (!theCase) {
				return false;
			}

			var model = this,
				buildings = model.get('buildings'),
				view = model.get('view'),
				map = model.get('map'),
				unorderedCases = _.where(map.unorderedCases, { isDone: false }),
				castles = _.where(buildings, { type: 'castle' }),
				units = model.get('units'),
				enemyUnits = _.filter(units, function (unit) {
					return unit.get('ownerId') === 1;
				}),
				playerUnits = _.filter(units, function (unit) {
					return unit.get('ownerId') === 0;
				}),
				players = model.get('players'),
				isPassed,
				player = _.find(players, {id: 0});

			switch (theCase.detect) {

				case 'turnCount':

					return model.get('turnCount') >= theCase.turnCount;

					break;

				case 'allCastles':

					return castles.length === _.where(castles, {ownerId: 0}).length;

					break;

				case 'noEnemyUnit':

					return !enemyUnits.length;

					break;

				case 'commanderIsDead':

					if (player.commander.isLive) {
						return false;
					}

					return {
						type: 'commanderIsDead'
					};

					break;

				case 'crystalIsDead':

					isPassed = true;

					_.each(playerUnits, function (unit) {

						if ( !isPassed ) {
							return;
						}

						if (unit.get('type') === 'crystal') {
							isPassed = false;
						}

					});

					return isPassed && { type: 'crystalIsDead' };

					break;

				case 'unitOnPlace':

					isPassed = false;

					_.each(playerUnits, function (unit) {
						_.each(theCase.place, function (place) {

							var unitX, unitY;

							if (isPassed) {
								return;
							}

							unitX = unit.get('x');
							unitY = unit.get('y');

							isPassed = unitX >= place.x1 && unitX <= place.x2 && unitY >= place.y1 && unitY <= place.y2;

						});
					});

					return isPassed;

					break;

				case 'allUnorderedCasesIsDone':

					return !unorderedCases.length;

					break;

			}

		},

		//////////////////
		// saving
		//////////////////

		autoSave: function () {

			var model = this,
				info = win.APP.info,
				autoSaveState = info.get('autoSave'),
				lang,
				map,
				saveDate,
				saveName,
				gameData,
				dbMaster;

			if (autoSaveState === 'off') {
				return;
			}

			lang = win.APP.lang;
			map = model.get('map');
			saveDate = Date.now();
			saveName = lang.get(map.type) + ' ' + lang.get('autoSave');
			gameData = model.getDataToSave();
			dbMaster = win.APP.map.db;

			dbMaster
				.saveGame(saveDate, saveName, gameData)
				.then(function () {
					model.get('view').showTicket({
						popupData: {
							text: win.APP.lang.get('gameSaved') + '<br>' + saveName
						}
					});
				});

		},

		getDataToSave: function () {

			// see save game view
			var model = this,
				battleView = model.get('view'),
				activePlayer,
				units = model.get('units'),
				buildings = model.get('buildings'),
				save = {
					turnCount: model.get('turnCount'),
					circleCount: model.get('circleCount'),
					players: model.get('players'),
					activePlayer: model.get('activePlayer'),
					units: [],
					buildings: buildings,
					jsMapKey: model.get('jsMapKey'),
					map: model.get('map'),
					unitLimit: model.get('unitLimit'),
					difficult: battleView.info.get('difficult'),
					graves: model.get('graves'),
					argsForRestart: battleView.get('argsForRestart')
				},
				doNotSaves = ['model', 'view'];

			// save players - ALL data - done
			// active player - save ID - done, save full player
			// save units - ALL data.toJSON(), active and no active - done
			// save buildings - ALL data - done
			// save map - terrain - full map done

			_.each(units, function (unit) {
				// toJSON is bad idea, save only needed data
				var unitData = {};
				_.each(unit.toJSON(), function (value, key) {
					return _.contains(doNotSaves, key) || (unitData[key] = value);
				});
				save.units.push(unitData);
			});

			return save;

		},

		isUnitsTooMuch: function () {

			var model = this,
				players = model.get('players'),
				map = model.get('map'),
				allUnits = model.get('units'),
				maxUnits = Math.round(map.size.height * map.size.width / 2);

			maxUnits += maxUnits % players.length;

			return  maxUnits <= allUnits.length;

		}


	});

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global window */

	function Grave(data) {
		this.id = data.id;
		this.x = data.x;
		this.y = data.y;
		this.currentTime = 1;
	}

	Grave.prototype = {
		maxTtl: 3,
		increaseTime: function () {
			this.currentTime += 1;
		},
		needRemove: function () {
			return this.currentTime > this.maxTtl;
		}
	};

	win.APP.unitMaster = {
		unitCounter: 1, // set unit id
		graveCounter: 1, // set grave id
		createGrave: function (data) {

			data.id = this.graveCounter;
			this.graveCounter += 1;

			return new Grave(data);
		},
		createUnit: function (data) {

			data.id = this.unitCounter;
			this.unitCounter += 1;

			return new win.APP.BB.Unit[this.list[data.type].modelName](data);

		},
		defByLevel: 2,
		atkByLevel: 2,
		reduceMoveByPoison: 2,
		bonusAtkByWispAura: 10,
		reduceAktPoison: 10,
		reduceDefPoison: 10,
		bonusAtkByWater: 15,
		bonusDefByWater: 15,
		levelList: [0, 100, 205, 315, 430, 551, 678, 812, 952, 1100], // prev + (prev +5%) for every level
		commanderList: ['galamar', 'valadorn', 'demon-lord', 'saeth'],
		noInEditor: [],
		list: {

			// commanders
			galamar: {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				//atk: {
				//	min: 155,
				//	max: 165
				//},
				//atkRange: 7,
				def: 20,
				mov: 5,
				modelName: 'GalamarModel',
				langKey: 'galamar',
				canFixBuilding: true,
				withoutGrave: true,
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
			},
			valadorn: {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'ValadornModel',
				langKey: 'valadorn',
				canFixBuilding: true,
				withoutGrave: true,
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
			},
			'demon-lord': {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'DemonLordModel',
				langKey: 'demon-lord',
				canFixBuilding: true,
				withoutGrave: true,
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
			},
			saeth: {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 5,
				modelName: 'SaethModel',
				langKey: 'saeth',
				canFixBuilding: true,
				withoutGrave: true,
				listOccupyBuilding: ['farm', 'castle'],
				cost: 400
			},

			'saeth-heavens-fury': {
				atk: {
					min: 55,
					max: 65
				},
				atkRange: 16,
				def: 45,
				mov: 1,
				modelName: 'SaethHeavensFuryModel',
				langKey: 'saeth',
				canNotBeBuy: true
			},

			// private units
			soldier: {
				atk: {
					min: 50,
					max: 55
				},
				atkRange: 2,
				def: 5,
				mov: 5,
				modelName: 'SoldierModel',
				langKey: 'soldier',
				canFixBuilding: true,
				listOccupyBuilding: ['farm'],
				cost: 150
			},
			archer: {
				//atk: {
				//	min: 150,
				//	max: 155
				//},
				//atkRange: 7,
				atk: {
					min: 50,
					max: 55
				},
				atkRange: 3,
				def: 5,
				mov: 5,
				modelName: 'ArcherModel',
				langKey: 'archer',
				bonusAtkAgainstFly: 10,
				cost: 250
			},
			elemental: {
				atk: {
					min: 50,
					max: 55
				},
				atkRange: 2,
				def: 10,
				mov: 5,
				modelName: 'ElementalModel',
				langKey: 'elemental',
				moveType: 'flow',
				cost: 300
			},
			sorceress: {
				atk: {
					min: 40,
					max: 45
				},
				atkRange: 3,
				raiseRange: 3,
				def: 5,
				mov: 5,
				modelName: 'SorceressModel',
				langKey: 'sorceress',
				cost: 400
			},
			wisp: {
				atk: {
					min: 35,
					max: 40
				},
				atkRange: 2,
				auraRange: 3,
				def: 10,
				mov: 5,
				modelName: 'WispModel',
				langKey: 'wisp',
				bonusAtkAgainstSkeleton: 20,
				cost: 500
			},
			'dire-wolf': {
				atk: {
					min: 60,
					max: 65
				},
				atkRange: 2,
				def: 20,
				mov: 6,
				modelName: 'DireWolfModel',
				langKey: 'dire-wolf',
				poisonPeriod: 2,
				cost: 600
			},
			golem: {
				atk: {
					min: 50,
					max: 60
				},
				atkRange: 2,
				def: 30,
				mov: 5,
				modelName: 'GolemModel',
				langKey: 'golem',
				bonusDefAgainstArcher: 10,
				cost: 600
			},
			catapult: {
				atk: {
					min: 50,
					max: 70
				},
				atkRange: 6,
				def: 10,
				mov: 4,
				modelName: 'CatapultModel',
				langKey: 'catapult',
				cost: 700,
				canNotActionAfterMove: true,
				canDestroyBuilding: true
			},
			dragon: {
				atk: {
					min: 70,
					max: 80
				},
				atkRange: 2,
				def: 25,
				mov: 7,
				modelName: 'DragonModel',
				langKey: 'dragon',
				bonusAtkAgainstArcher: 10,
				bonusAtkAgainstSoldier: 10,
				moveType: 'fly',
				cost: 1000
			},

			// other
			skeleton: {
				atk: {
					min: 45,
					max: 50
				},
				atkRange: 2,
				def: 2,
				mov: 5,
				modelName: 'SkeletonModel',
				langKey: 'skeleton',
				withoutGrave: true,
				canNotBeBuy: true,
				cost: 0
			},
			crystal: {
				atk: {
					min: 0,
					max: 0
				},
				atkRange: 1,
				def: 15,
				mov: 4,
				modelName: 'CrystalModel',
				langKey: 'crystal',
				canNotBeBuy: true,
				cost: 0
			}

		}
	};

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global Backbone, $, _ */

	win.APP.BB.Unit = {};

	win.APP.BB.Unit.BaseUnitModel = Backbone.Model.extend({

		//////////
		// init
		//////////

		initialize: function(data) {

			data = data || {};

			var unit = this;

			// default state
			unit.setDefaultState();

			unit.set('health', data.health || 100);
			unit.set('defaultHealth', 100);
			unit.set('xp', data.xp || 0);
			unit.set('level', data.level || 0);

			unit.set('silents', {}); // hack for triggering

			unit.autoSetLevel();  // workaround for commanders before listeners

			unit.bindEventListener();

		},

		setBy: function (key, delta) {

			return this.set(key, this.get(key) + delta);

		},

		bindEventListener: function () {
			var unit = this;
			unit.on('change:isActive', unit.onChangeIsActive);
			unit.on('change:x', unit.autoSetWispAura);
			unit.on('change:y', unit.autoSetWispAura);
			unit.on('change:underWispAura', unit.onUnderWispAuraChange);
			unit.on('change:poisonCount', unit.onPoisonCountChange);
			unit.on('change:level', unit.onChangeLevel);
			unit.on('change:health', unit.onChangeHealth);
			unit.on('change:xp', unit.onChangeXp);
		},

		unbindEventListener: function () {
			this.off();
		},

		silentOn: function () {
			var unit = this,
				silents = unit.get('silents');
			_.each(arguments, function (eventName) {
				silents[eventName] = true;
			});
		},

		silentOff: function () {
			var unit = this,
				silents = unit.get('silents');
			_.each(arguments, function (eventName) {
				delete silents[eventName];
			});
		},

		//////////
		// on changes
		//////////

		onChangeIsActive: function (e, isActive) {

			var unit = this,
				view = unit.get('view');

			return isActive ? view.setActiveUnit(unit) : view.setNotActiveUnit(unit);

		},

		autoSetWispAura: function () {

			var unit = this,
				silents = unit.get('silents'),
				model = unit.get('model');

			if ( silents.x || silents.y ) {
				return;
			}

			model.checkCases();
			model.autoSetWispAura();

		},

		onUnderWispAuraChange: function (e, underWispAura) {

			var unit = this,
				view = unit.get('view');

			view.setWispAuraState({
				unit: unit,
				wispAuraState: underWispAura
			});

		},

		onPoisonCountChange: function (e, poisonCount) {

			var unit = this,
				view = unit.get('view');

			view.setPoisonState({
				unit: unit,
				poisonCount: poisonCount
			});

		},

		onChangeLevel: function () {

			var unit = this,
				view = unit.get('view');

			view.setUnitLevel({ unit: unit });

		},

		onChangeHealth: function (e, health) {

			var unit = this,
				silents = unit.get('silents'),
				player;

			if (silents.health) {
				return;
			}

			if ( health <= 0 && unit.isCommander() ) {
				player = unit.getOwner();
				player.commander.isLive = false;
			}

		},

		onChangeXp: function (e, xp) {

			var unit = this,
				player;

			if ( unit.isCommander() ) {
				player = unit.getOwner();
				player.commander.xp = xp;
			}

		},

		setDefaultState: function () {

			this.set('isActive', true);
			this.set('didMove', false);
			this.set('didAttack', false);
			//this.set('didRaise', false);
			this.set('poisonCount', 0);
			//this.set('didPoison', false);
			this.set('underWispAura', false);
			this.set('gotBuilding', false);
			this.set('fixedBuilding', false);

		},

		autoSetLevel: function () {

			var unit = this,
				xp = unit.get('xp'),
				level = unit.get('level'),
				levelList = win.APP.unitMaster.levelList;

			_.each(levelList, function (levelPoint, index) {
				if (xp >= levelPoint) {
					level = index;
				}
			});

			unit.set('level', level);

		},

		//////////
		// getting data
		//////////

		autoSetActiveState: function () {

			var unit = this,
				actions = unit.getAvailableActions(),
				isActive = false;

			isActive = isActive || (actions.availablePathWithTeamUnit && actions.availablePathWithTeamUnit.length);
			isActive = isActive || (actions.availablePathViewWithoutTeamUnit && actions.availablePathViewWithoutTeamUnit.length);
			isActive = isActive || actions.buildingToFix;
			isActive = isActive || actions.buildingToOccupy;
			isActive = isActive || (actions.gravesToRaise && actions.gravesToRaise.length);
			isActive = isActive || (actions.unitsUnderAttack && actions.unitsUnderAttack.length);

			unit.set('isActive', Boolean(isActive));

		},

		getAvailableActions: function () {

			if ( !this.get('isActive') ) {
				return {};
			}

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				units = unit.get('model').get('units'),
				teamUnits = [], // done
				enemyUnits = [], // done
				availablePathWithTeamUnit, // done
				availablePathViewWithoutTeamUnit, // done
				unitsUnderAttack,
				gravesToRaise,
				buildingToFix,
				buildingToOccupy,
				openStore;

			// get team and enemy units
			_.each(units, function (unit) {
				if ( unit.get('teamNumber') === unitTeamNumber ) {
					teamUnits.push(unit);
				} else {
					enemyUnits.push(unit);
				}
			});

			// get available path view with team unit
			availablePathWithTeamUnit = unit.getAvailablePathWithTeamUnit();

			// get available path view withOUT team unit
			availablePathViewWithoutTeamUnit = _.filter(availablePathWithTeamUnit, function (xy) {
				var founded = false;
				_.each(teamUnits, function (unit) {
					if ( unit.get('x') === xy.x && unit.get('y') === xy.y ) {
						founded = true;
					}
				});
				return !founded;
			});

			// get unitsUnderAttack
			unitsUnderAttack = unit.getUnitsUnderAttack();

			// get graves to raise
			gravesToRaise = unit.getGravesToRaise();

			// detect building (farm) to fix
			buildingToFix = unit.getBuildingToFix();

			// get building to occupy (farm and castle)
			buildingToOccupy = unit.getBuildingToOccupy();

			// show $ to go to store
			openStore = unit.getCanOpenStore();

			return {
				unit: unit,
				openStore: openStore,
				buildingToOccupy: buildingToOccupy,
				buildingToFix: buildingToFix,
				gravesToRaise: gravesToRaise,
				unitsUnderAttack: unitsUnderAttack,
				availablePathWithTeamUnit: availablePathWithTeamUnit,
				availablePathViewWithoutTeamUnit: availablePathViewWithoutTeamUnit
			};

		},

		getAvailablePathFull: function () {

			if ( this.get('didMove') ) {
				return [];
			}

			var unit = this,
				view = unit.get('view'),
				map = view.get('map'),
				terrain = map.terrain,
				pathFinder,
				unitMaster = win.APP.unitMaster,
				reduceByPoison = unit.get('poisonCount') ? unitMaster.reduceMoveByPoison : 0;

			pathFinder = new PathFinder({
				terrain: terrain,
				mov: unit.get('mov') - 1 - reduceByPoison,
				x: unit.get('x'),
				y: unit.get('y'),
				moveType: unit.get('moveType'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: true
			});

			return pathFinder.getAvailablePath();

		},

		getAvailablePathWithTeamUnit: function () {

			if ( this.get('didMove') ) {
				return [];
			}

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				units = model.get('units'),
				unitTeamNumber = unit.get('teamNumber'),
				map = view.get('map'),
				terrain = map.terrain,
				pathFinder,
				blackWholes = [],
				unitMaster = win.APP.unitMaster,
				reduceByPoison = unit.get('poisonCount') ? unitMaster.reduceMoveByPoison : 0;

			_.each(units, function (unit) {

				if ( unit.get('teamNumber') === unitTeamNumber ) { // unit can move around alias units
					return;
				}

				blackWholes.push('x' + unit.get('x') + 'y' + unit.get('y'));

			});

			pathFinder = new PathFinder({
				blackWholes: blackWholes,
				terrain: terrain,
				mov: unit.get('mov') - 1 - reduceByPoison,
				x: unit.get('x'),
				y: unit.get('y'),
				moveType: unit.get('moveType'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: true
			});

			return pathFinder.getAvailablePath();

		},

		getUnitsUnderAttack: function () {

			var unit = this,
				model = unit.get('model'),
				units = model.get('units'),
				enemyUnits = [],
				availableAttackXYs,
				underAttackXYs = [],
				unitTeamNumber = unit.get('teamNumber');

			if ( unit.get('didAttack') ) {
				return underAttackXYs; // []
			}

			_.each(units, function (unit) {
				if ( unit.get('teamNumber') !== unitTeamNumber ) {
					enemyUnits.push(unit);
				}
			});

			availableAttackXYs = unit.getAvailableAttackMap();

			_.each(enemyUnits, function (enemyUnit) {

				var xy = {
					x: enemyUnit.get('x'),
					y: enemyUnit.get('y')
				};

				if ( _.find(availableAttackXYs, xy) ) {
					underAttackXYs.push(xy);
				}

			});

			return underAttackXYs;

		},

		getAvailableAttackMap: function () {

			var unit = this,
				view = unit.get('view'),
				map = view.get('map'),
				pathFinder;

			pathFinder = new PathFinder({
				mov: unit.get('atkRange') - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			return pathFinder.getAvailablePath();

		},

		getAvailableAttackMapFromXy: function (xy) {

			var unit = this,
				view = unit.get('view'),
				map = view.get('map'),
				pathFinder;

			pathFinder = new PathFinder({
				mov: unit.get('atkRange') - 1,
				x: xy.x,
				y: xy.y,
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			return pathFinder.getAvailablePath();

		},

		getAvailableAttackMapWithPath: function () {

			var unit = this,
				attacksMap = [{
					x: unit.get('x'), // add unit's xy
					y: unit.get('y')
				}],
				availablePath = unit.getAvailablePathWithTeamUnit();

			_.each(availablePath, function (xy) {
				_.each(unit.getAvailableAttackMapFromXy(xy), function (xy) {
					return _.find(attacksMap, xy) || attacksMap.push(xy);
				});
			});

			attacksMap.shift(); // remove unit's xy

			return attacksMap;

		},

		getGravesToRaise: function () {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				map = view.get('map'),
				graves = model.get('graves'),
				availableGraves = [],
				raiseRange = unit.get('raiseRange'),
				availableXYToRaise,
				pathFinder;

			if ( !raiseRange ) {
				return availableGraves;
			}

			pathFinder = new PathFinder({
				mov: raiseRange - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			availableXYToRaise = pathFinder.getAvailablePath();

			_.each(availableXYToRaise, function (xy) {
				var graveToAdd = _.find(graves, xy);
				if ( graveToAdd && !model.getUnitByXY(xy) ) {
					availableGraves.push(graveToAdd);
				}
			});

			return availableGraves;

		},

		getConfirmMoveActions: function (xy) {

			var unit = this,
				view = unit.get('view'),
				sizes = view.get('map').size,
				undoMoveActions = [],
				curX = xy.x,
				curY = xy.y,
				beforeX = xy.beforeX,
				beforeY = xy.beforeY,
				x, y,
				xLen, yLen;

			for (x = 0, xLen = sizes.width; x < xLen; x += 1) {
				for (y = 0, yLen = sizes.height; y < yLen; y += 1) {
					undoMoveActions.push({
						x: x,
						y: y,
						beforeX: beforeX,
						beforeY: beforeY
					});
				}
			}

			return {
				unit: unit,
				confirmMoveAction: {
					x: curX,
					y: curY
				},
				undoMoveActions: undoMoveActions
			};

		},

		getConfirmAttackActions: function (xy) {

			var unit = this,
				view = unit.get('view'),
				sizes = view.get('map').size,
				undoAttackActions = [],
				curX = xy.x,
				curY = xy.y,
				x, y,
				xLen, yLen;

			for (x = 0, xLen = sizes.width; x < xLen; x += 1) {
				for (y = 0, yLen = sizes.height; y < yLen; y += 1) {
					undoAttackActions.push({
						x: x,
						y: y
					});
				}
			}

			return {
				unit: unit,
				confirmAttackAction: {
					x: curX,
					y: curY
				},
				undoAttackActions: undoAttackActions
			};

		},

		canStrikeBack: function (enemy) {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				enemyX = enemy.get('x'),
				enemyY = enemy.get('y'),
				dX = Math.abs(unitX - enemyX),
				dY = Math.abs(unitY - enemyY);

			return dX + dY <= 1;

		},

		getAttackToUnit: function (enemy, data) {

			data = data || {};

			var unit = this,
				model = unit.get('model'),
				unitXY = {
					x: unit.get('x'),
					y: unit.get('y')
				},
				enemyXY = {
					x: enemy.get('x'),
					y: enemy.get('y')
				},
				unitMaster = win.APP.unitMaster,
				unitLevel = unit.get('level'),
				unitAktBonusByLevel = unitMaster.atkByLevel * unitLevel,
				unitAkt = unit.get('atk'),
				unitMaxAtk = unitAkt.max,
				unitMinAtk = unitAkt.min,
				unitAktBonusByWispAura = unit.get('underWispAura') ? unitMaster.bonusAtkByWispAura : 0,
				unitAtkReduceByPoison = unit.get('poisonCount') ? unitMaster.reduceAktPoison : 0,
				unitMoveType = unit.get('moveType'),
				unitTerrain = model.getTerrainByXY(unitXY),
				unitFlowAtkBonus = (unitMoveType === 'flow' && unitTerrain.terrainType === 'water') ? unitMaster.bonusAtkByWater : 0,
				enemyMoveType = enemy.get('moveType'),
				enemyType = enemy.get('type'),
				unitAtkBonusAgainstFly = ( enemyMoveType === 'fly' && unit.get('bonusAtkAgainstFly') ) ? unit.get('bonusAtkAgainstFly') : 0,
				unitAtkBonusAgainstSkeleton = ( enemyType === 'skeleton' && unit.get('bonusAtkAgainstSkeleton') ) ? unit.get('bonusAtkAgainstSkeleton') : 0,
				unitAtkBonusAgainstArcher = ( enemyType === 'archer' && unit.get('bonusAtkAgainstArcher') ) ? unit.get('bonusAtkAgainstArcher') : 0,
				unitAtkBonusAgainstSoldier = ( enemyType === 'soldier' && unit.get('bonusAtkAgainstSoldier') ) ? unit.get('bonusAtkAgainstSoldier') : 0,
				unitDefBonusAgainstArcher = ( enemyType === 'archer' && unit.get('bonusDefAgainstArcher') ) ? unit.get('bonusDefAgainstArcher') : 0,
				enemyDef = enemy.get('def'),
				enemyDefTerrain = model.getArmorByXY(enemyXY),
				enemyTerrain = model.getTerrainByXY(enemyXY),
				enemyLevel = enemy.get('level'),
				enemyDefBonusByLevel = unitMaster.defByLevel * enemyLevel,
				enemyDefReduceByPoison = enemy.get('poisonCount') ? unitMaster.reduceDefPoison : 0,
				enemyFlowDefBonus = (enemyMoveType === 'flow' && enemyTerrain.terrainType === 'water') ? unitMaster.bonusDefByWater : 0,
				unitStartAtk = data.average ? Math.round( (unitMinAtk + unitMaxAtk) / 2) : unit.util.getRandomBetween(unitMinAtk, unitMaxAtk),
				unitQ = unit.get('health') / unit.get('defaultHealth'),
				enemyQ = enemy.get('health') / enemy.get('defaultHealth'),
				atk;

			atk = ( unitStartAtk + unitAktBonusByLevel + unitFlowAtkBonus + unitAtkBonusAgainstArcher + unitAtkBonusAgainstSoldier + unitAtkBonusAgainstFly + unitAtkBonusAgainstSkeleton - unitAtkReduceByPoison  + unitAktBonusByWispAura) * unitQ - ( enemyDefBonusByLevel + enemyFlowDefBonus + unitDefBonusAgainstArcher - enemyDefReduceByPoison + enemyDef + enemyDefTerrain) * unitQ; // * enemyQ;

			atk = Math.max(atk, 1);

			atk = Math.min(atk, enemy.get('health'));

			return Math.round(atk);

		},

		getBuildingToFix: function () {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				model = unit.get('model'),
				buildings = model.get('buildings'),
				building = false;

			if ( unit.get('canFixBuilding') ) {
				building = _.find(buildings, {x: unitX, y: unitY, state: 'destroyed'});
			}

			return building;

		},

		getBuildingToOccupy: function () {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				model = unit.get('model'),
				unitOwnerId = unit.get('ownerId'),
				listOccupyBuilding = unit.get('listOccupyBuilding'),
				buildings = model.get('buildings'),
				building = _.find(buildings, {x: unitX, y: unitY});

			if ( !listOccupyBuilding || !building ) {
				return false;
			}

			if ( building.state !== 'normal' ) {
				return false;
			}

			if ( building.ownerId === unitOwnerId ) {
				return false;
			}

			if ( !_.contains(listOccupyBuilding, building.type) ) {
				return false;
			}

			return building;

		},

		getWispAuraMap: function () {

			var unit = this,
				view = unit.get('view'),
				map = view.get('map'),
				auraRange = unit.get('auraRange'),
				pathFinder;

			pathFinder = new PathFinder({
				mov: auraRange - 1,
				x: unit.get('x'),
				y: unit.get('y'),
				minX: 0,
				minY: 0,
				maxX: map.size.width - 1,
				maxY: map.size.height - 1,
				relativeTypeSpace: false
			});

			return pathFinder.getAvailablePath();

		},

		getCanOpenStore: function () {

			var unit = this,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				unitOwnerId = unit.get('ownerId'),
				model = unit.get('model'),
				buildings = model.get('buildings'),
				building;

			building = _.find(buildings, {x: unitX, y: unitY});

			if ( !building ) {
				return false;
			}

			if ( !win.APP.building.list[building.type].canBeStore ) {
				return false;
			}

			if ( building.ownerId !== unitOwnerId ) {
				return false;
			}

			return {
				x: unitX,
				y: unitY
			};

		},

		getOwner: function () {

			var unit = this,
				model = unit.get('model'),
				players = model.get('players');

			return _.find( players, { id: unit.get('ownerId') } );

		},

		isCommander: function () {

			var unit = this,
				unitType = unit.get('type'),
				commanderList = win.APP.unitMaster.commanderList;

			return _.contains(commanderList, unitType);

		},

		//////////
		// unit's action
		//////////

		moveTo: function (data) {

			var unit = this,
				deferred = $.Deferred(),
				model = unit.get('model'),
				view = unit.get('view'),
				playerType = model.get('activePlayer').type,

				x = data.x,
				y = data.y,

				beforeX = unit.get('x'),
				beforeY = unit.get('y');

			view
				.moveUnitTo(data)
				.done(function () {

					unit.set('x', x);
					unit.set('y', y);

					unit.set('didMove', true);

					// detect - confirm move

					var availableActions;

					if ( view.info.get('confirmMove') === 'on' && playerType !== 'cpu' ) {
						availableActions = unit.getConfirmMoveActions({
							x: x,
							y: y,
							beforeX: beforeX,
							beforeY: beforeY
						});
					} else {
						unit.autoSetActiveState();
						availableActions = unit.getAvailableActions(); // view.info.get('confirmMove') === 'off'
					}

					view.showAvailableActions(availableActions);
					model.set('availableActions', availableActions);

					deferred.resolve();

				});

			return deferred.promise();

		},

		confirmMove: function () {

			this.autoSetActiveState();

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				availableActions = unit.getAvailableActions();

			view.clearAvailableActions();
			model.clearAvailableActions();

			view.showAvailableActions(availableActions);
			model.set('availableActions', availableActions);

		},

		attackToXy: function (action) {

			var unit = this,
				x = action.attackX,
				y = action.attackY,
				enemyUnit,
				enemyBuilding,
				model = unit.get('model'),
				view = unit.get('view'),
				playerType = model.get('activePlayer').type,
				availableActions;

			if ( view.info.get('confirmAttack') === 'on' && !action.confirmed && playerType !== 'cpu' ) {

				availableActions = unit.getConfirmAttackActions({
					x: x,
					y: y
				});

				model.set('availableActions', availableActions);
				view.showAvailableActions(availableActions);

			} else {

				model.clearAvailableActions();
				view.clearAvailableActions();

				enemyUnit = model.getUnitByXY({
					x: x,
					y: y
				});

				if (enemyUnit) {
					unit.attackToUnit(enemyUnit);
					return;
				}

				enemyBuilding = model.getBuildingByXY({
					x: x,
					y: y
				});

				if ( enemyBuilding ) {
					unit.attackToBuilding(enemyBuilding);
				}


			}

		},

		attackToUnit: function (enemyUnit) {

			var unit = this,
				view = unit.get('view');

			//view.showFightScreen({
			//	attacker: unit,
			//	defender: enemyUnit
			//}).then(function () {

				view.showAttack({
					attacker: unit,
					defender: enemyUnit,
					from: {
						x: unit.get('x'),
						y: unit.get('y')
					},
					to: {
						x: enemyUnit.get('x'),
						y: enemyUnit.get('y')
					}
				}).then(function () {

					unit.set('isActive', false);

					var atk = unit.getAttackToUnit(enemyUnit);

					enemyUnit.setBy('health', -atk);

					//enemyUnit.setBy('poisonCount', unit.get('poisonPeriod') || 0);

					unit.setBy('xp', atk);

					return view.showDifferentUnitHealth({
						unit: enemyUnit,
						differentHealth: -atk
					});

				}).then(function () {

					var enemyUnitHealth = enemyUnit.get('health'),
						model = enemyUnit.get('model');

					if (enemyUnitHealth > 0) {

						if ( enemyUnit.canStrikeBack(unit) ) {

							view.showAttack({
								from: {
									x: enemyUnit.get('x'),
									y: enemyUnit.get('y')
								},
								to: {
									x: unit.get('x'),
									y: unit.get('y')
								}
							}).then(function () {

								var atk = enemyUnit.getAttackToUnit(unit);

								unit.setBy('health', -atk);

								enemyUnit.setBy('xp', atk);

								return view.showDifferentUnitHealth({
									unit: unit,
									differentHealth: -atk
								});

							}).then(function () {

								var unitHealth = unit.get('health'),
									model = unit.get('model');

								if ( unitHealth <= 0 ) {

									model.addGraveInsteadUnit(unit);
									//uni
									enemyUnit.autoSetLevel();
								} else {
									enemyUnit.autoSetLevel();
									unit.autoSetLevel();
								}

								enemyUnit.setBy('poisonCount', unit.get('poisonPeriod') || 0);

							});

						} else {
							log('-- can NOT strike BACK');
							enemyUnit.setBy('poisonCount', unit.get('poisonPeriod') || 0);
							unit.autoSetLevel();

						}

					} else {
						model.addGraveInsteadUnit(enemyUnit);
						log(' -- create grove for enemy unit');
						unit.autoSetLevel();
					}

				});


			//});


		},

		attackToBuilding: function (building) {

			var unit = this,
				view = unit.get('view');

			view.showAttack({
				from: {
					x: unit.get('x'),
					y: unit.get('y')
				},
				to: {
					x: building.x,
					y: building.y
				}
			}).then(function () {

				delete building.color;
				building.teamNumber = null;
				delete building.ownerId;
				building.state = 'destroyed';

				view.redrawBuilding(building);

				unit.set('isActive', false);
				unit.setBy('xp', unit.get('atk').min);
				unit.autoSetLevel();
			});

		},

		undoMoveAction: function (data) {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),

				x = data.beforeX,
				y = data.beforeY;

			view
				.moveUnitTo({
					x: x,
					y: y,
					unit: data.unit
				})
				.done(function () {

					unit.set('x', x);
					unit.set('y', y);

					unit.set('didMove', false);

					var availableActions = unit.getAvailableActions();
					view.markActiveSquare({
						x: x,
						y: y
					});
					view.showAvailableActions(availableActions);
					model.set('availableActions', availableActions);

				});

		},

		confirmAttack: function (action) {

			this.attackToXy({
				attackX: action.x,
				attackY: action.y,
				confirmed: true
			});

		},

		undoAttack: function () {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				availableActions = unit.getAvailableActions();

			view.clearAvailableActions();
			model.clearAvailableActions();

			view.showAvailableActions(availableActions);
			model.set('availableActions', availableActions);

			view.markActiveSquare({
				x: unit.get('x'),
				y: unit.get('y')
			});

		},

		raise: function (action) {

			var unit = this,
				model = unit.get('model'),
				view = unit.get('view'),
				x = action.x,
				y = action.y,
				graves = model.get('graves'),
				grave = _.find(graves, { x: x, y: y }),
				newUnitData,
				newUnit;

			model.removeGrave(grave);
			view.removeGrave(grave);

			model.clearAvailableActions();
			view.clearAvailableActions();

			unit.set('isActive', false);

			newUnitData = {
				ownerId: unit.get('ownerId'),
				type: 'skeleton',
				x: x,
				y: y,
				teamNumber: unit.get('teamNumber'),
				color: unit.get('color')
			};

			newUnit = model.appendUnit(newUnitData);

			newUnit.set('isActive', false);

			view.updateStatusBar();

		},

		fixBuilding: function (action) {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				building = action.buildingToFix;

			unit.set('isActive', false);

			view.clearAvailableActions();
			model.clearAvailableActions();

			building.state = 'normal';
			view.redrawBuilding(building);

		},

		occupyBuilding: function (action) {

			var unit = this,
				view = unit.get('view'),
				model = unit.get('model'),
				building = action.buildingToOccupy;

			unit.set('isActive', false);

			view.clearAvailableActions();
			model.clearAvailableActions();

			building.color = unit.get('color');
			building.ownerId = unit.get('ownerId');
			building.teamNumber = unit.get('teamNumber');

			view.redrawBuilding(building);

			model.checkPlayerDefeat();
			model.checkEndMission();

		},

		healthUpByBuilding: function (building) {

			if ( !building ) {
				return;
			}

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				unitHealth = unit.get('health'),
				defaultHealth = unit.get('defaultHealth'),
				view = unit.get('view'),
				buildingType = building.type,
				buildingTeamNumber = building.teamNumber,

				deltaHealth = defaultHealth - unitHealth,
				buildingUpHealth = win.APP.building.list[buildingType].healthUp;

			deltaHealth = Math.min(deltaHealth, buildingUpHealth);

			if ( !deltaHealth ) {
				return;
			}

			switch (buildingType) {

				case 'well':
				case 'temple':
					unit.setBy('health', deltaHealth);
					view.showDifferentUnitHealth({
						unit: unit,
						differentHealth: deltaHealth
					});
					break;

				case 'castle':
				case 'farm':
					if ( unitTeamNumber === buildingTeamNumber ) {
						unit.setBy('health', deltaHealth);
						view.showDifferentUnitHealth({
							unit: unit,
							differentHealth: deltaHealth
						});
					}
					break;

			}

		},

		prepareToNextTurn: function () {

			var unit = this;

			// todo: see unit.setDefaultState();
			unit.set('isActive', true);
			unit.set('didMove', false);
			unit.set('didAttack', false);
			//unit.set('didRaise', false);
			//unit.set('poisonCount', false); // sen only by dire wolf or 'next turn'
			//unit.set('didPoison', false);
			//unit.set('underWispAura', false); // set only from wisp autoSetWispAura
			unit.set('gotBuilding', false);
			unit.set('fixedBuilding', false);

		},

		util: {
			getRandomBetween: function (start, end) {
				return Math.floor(Math.random() * (end - start + 1) + start);
			}
		}

	});




	function PathFinder(data) {

		this.attr = {};

		this.setAttributes(data);

		if ( !data.blackWholes ) {
			this.set('blackWholes', []);
		}

		this.set('availablePath', []);
		this.set('donePathPoints', []);

		this.setTerrainType();

	}

	PathFinder.prototype = {

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},

		get: function (key) {
			return this.attr[key];
		},

		setAttributes: function (data) {
			var key;

			data = JSON.parse(JSON.stringify(data));

			for (key in data) {
				if (data.hasOwnProperty(key)) {
					this.set(key, data[key]);
				}
			}
		},

		setTerrainType: function () {

			var terrain = this.get('terrain'),
				key;

			for (key in terrain) {
				if (terrain.hasOwnProperty(key)) {
					terrain[key] = win.APP.map.getTypeByTileName(terrain[key]);
				}
			}

		},

		getSquareByXY: function (x, y) {
			return this.get('terrain')['x' + x + 'y' + y];
		},

		getAvailablePath: function () {

			var availablePath,
				point = new PathFinderPoint({
					pathFinder: this,
					mov: this.get('mov'),
					x: this.get('x'),
					y: this.get('y')
				});

			availablePath = this.get('availablePath');

			// remove first xy with unit's xy
			availablePath.shift();

			this.set('availablePath', availablePath);

			return this.get('availablePath');

		},

		addCoordinatesToAvailablePath: function (data) {

			var isInPoints = false,
				x = data.x,
				y = data.y;

			this.get('availablePath').every(function (point) {

				if (point.x === x && point.y === y) {
					isInPoints = true;
					return false;
				}

				return true;

			});

			if (isInPoints) {
				return;
			}

			this.get('availablePath').push(data);

		},

		isInDonePoints: function (x, y, mov) {

			var isInDonePoints = false;

			this.get('donePathPoints').forEach(function (point) {
				if ( point.x === x && point.y === y && mov <= point.mov ) {
					isInDonePoints = true;
				}
			});

			return isInDonePoints;

		},

		addToDonePoints: function (x, y, mov) {

			if (this.isInDonePoints(x, y, mov)) {
				return;
			}

			this.get('donePathPoints').push({ x: x, y: y, mov: mov });
		}

	};


	function PathFinderPoint(data) {
		this.attr = data;
		this.run();
	}

	PathFinderPoint.prototype = {

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},

		get: function (key) {
			return this.attr[key];
		},

		run: function () {

			var x = this.get('x'),
				y = this.get('y'),
				xy2 = {x: x, y: y - 1},
				xy4 = {x: x - 1, y: y},
				xy6 = {x: x + 1, y: y},
				xy8 = {x: x, y: y + 1},
				mov = this.get('mov'),
				pathFinder = this.get('pathFinder');

			// this is in donePoints
			if ( pathFinder.isInDonePoints(x, y, mov) ) {
				return;
			}

			pathFinder.addToDonePoints(x, y, mov);

			// add current coordinates to parent
			pathFinder.addCoordinatesToAvailablePath({x: x, y: y});

			this.tryGoToSquare(xy4);
			this.tryGoToSquare(xy6);
			this.tryGoToSquare(xy2);
			this.tryGoToSquare(xy8);

		},

		tryGoToSquare: function (coordinates) {

			var x = coordinates.x,
				y = coordinates.y,
				mov = this.get('mov'),
				pathFinder = this.get('pathFinder'),
				minX = pathFinder.get('minX'),
				minY = pathFinder.get('minY'),
				maxX = pathFinder.get('maxX'),
				maxY = pathFinder.get('maxY'),
				blackWholes = pathFinder.get('blackWholes'),
				isRelativeTypeSpace = pathFinder.get('relativeTypeSpace'),
				squareType,
				unitMoveType,
				pathResistance = 1;

			// detect max and min xy
			if ( x > maxX || x < minX || y > maxY || y < minY ) {
				return;
			}

			// detect blackWholes
			if ( blackWholes.indexOf('x' + x + 'y' + y) !== -1 ) {
				return;
			}

			if (isRelativeTypeSpace) {

				squareType = pathFinder.getSquareByXY(x, y);
				unitMoveType = pathFinder.get('moveType');

				switch (unitMoveType) {
					case 'fly':
						pathResistance = 1;
						break;
					case 'flow':
						if (squareType === 'water') {
							pathResistance = win.APP.map.water.flowPathResistance;
						} else {
							pathResistance = win.APP.map[squareType].pathResistance;
						}
						break;
					default :
						pathResistance = win.APP.map[squareType].pathResistance;

				}

			}

			if ( mov >= pathResistance ) {
				new PathFinderPoint({
					pathFinder: pathFinder,
					mov: mov - pathResistance,
					x: x,
					y: y
				});
			}

		}

	};


}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.ArcherModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.archer

	});

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global _ */

	win.APP.BB.Unit.CatapultModel = win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.catapult,

		/* overwrite
		 * base-unit.js canStrikeBack
		 * */
		canStrikeBack: function () {
			return false;
		},

		/* overwrite
		 * base-unit.js getUnitsUnderAttack
		 * */
		getUnitsUnderAttack: function () {

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				model = unit.get('model'),
				buildings = model.get('buildings'),
				proto = win.APP.BB.Unit.BaseUnitModel.prototype,
				getUnitsUnderAttack = proto.getUnitsUnderAttack,

				underAttackXYs,
				availableAttackMap;

			underAttackXYs = getUnitsUnderAttack.call(this);

			underAttackXYs = unit.filterExtraXYs(underAttackXYs);

			availableAttackMap = unit.filterExtraXYs(unit.getAvailableAttackMap());

			_.each(buildings, function (building) {

				var type = building.type,
					xy = {
						x: building.x,
						y: building.y
					},
					state = building.state,
					availableStates = win.APP.building.list[type].availableStates,
					unitOnXY = model.getUnitByXY(xy);

				if ( !_.find(availableAttackMap, xy) ) { // do not add extra buildings
					return;
				}

				if ( !_.contains(availableStates, 'destroyed') ) { // do not add without 'destroyed' state
					return;
				}

				if ( state === 'destroyed' ) { // do not destroy twice
					return;
				}

				if ( unitTeamNumber === building.teamNumber ) { // do not destroy team building
					return;
				}

				if ( null === building.teamNumber ) { // do not destroy no man's building
					return;
				}

				if ( _.find(underAttackXYs, xy) ) { // do not add the same XY twice
					return;
				}

				if ( unitOnXY && unitOnXY.get('teamNumber') === unit.get('teamNumber') ) { // do not add xy if team unit on building
					return;
				}

				underAttackXYs.push(xy);

			});

			return underAttackXYs;

		},

		/* overwrite
		 * base-unit.js bindEventListener
		 * */
		bindEventListener: function () {

			var unit = this,
				proto = win.APP.BB.Unit.BaseUnitModel.prototype,
				bindEventListener = proto.bindEventListener;

			bindEventListener.call(unit);

			unit.on('change:didMove', function (e, didMove) {
				this.set('isActive', !didMove);
			});

		},

		/* overwrite
		 * base-unit.js bindEventListener
		 * */
		getAvailablePathWithTeamUnit: function () {

			var unit = this,
				unitTeamNumber = unit.get('teamNumber'),
				model = unit.get('model'),
				buildings = model.get('buildings'),
				proto = win.APP.BB.Unit.BaseUnitModel.prototype,
				availablePathWithTeamUnit,
				getAvailablePathWithTeamUnit = proto.getAvailablePathWithTeamUnit;

			availablePathWithTeamUnit = getAvailablePathWithTeamUnit.call(unit);

			availablePathWithTeamUnit = _.filter(availablePathWithTeamUnit, function (xy) {

				var building = _.find(buildings, xy),
					type,
					state,
					availableStates;

				if ( !building ) {
					return true;
				}

				type = building.type;
				state = building.state;
				availableStates = win.APP.building.list[type].availableStates;

				if ( !_.contains(availableStates, 'destroyed') ) {
					return true;
				}

				if ( state === 'destroyed' ) { // do not destroy twice
					return true;
				}

				if ( building.teamNumber === unitTeamNumber ) {
					return true;
				}

				//if ( null === building.teamNumber ) {
				//	return true;
				//}
				//return false;
				return null === building.teamNumber;

			});

			return availablePathWithTeamUnit;

		},

		filterExtraXYs: function (arr) {
			
			var unit = this,
				x = unit.get('x'),
				y = unit.get('y'),
				removedXYs = [
					{x: x, y: y - 1}, // 2
					{x: x - 1, y: y}, // 4
					{x: x + 1, y: y}, // 6
					{x: x, y: y + 1}  // 8
				];

			return _.filter(arr, function (xy) {
				return !_.find(removedXYs, xy);
			});

		},

		getAvailableAttackMapWithPath: function () {

			var unit = this,
				x = unit.get('x'),
				y = unit.get('y'),
				availableAttackMap = unit.getAvailableAttackMapFromXy({
					x: x,
					y: y
				});

			return unit.filterExtraXYs(availableAttackMap);

		}

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.CrystalModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.crystal,

		canStrikeBack: function () {
			return false;
		}

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.DemonLordModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list['demon-lord']

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.DireWolfModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list['dire-wolf']

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.DragonModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.dragon

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.ElementalModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.elemental

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.GalamarModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.galamar

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.GolemModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.golem

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.SaethModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.saeth

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.SaethHeavensFuryModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list['saeth-heavens-fury']

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.SkeletonModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.skeleton

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.SoldierModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.soldier

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	var proto = win.APP.BB.Unit.BaseUnitModel.prototype;

	win.APP.BB.Unit.SorceressModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.sorceress,

		getAvailablePathWithTeamUnit: function () {

			var unit = this,
				model = unit.get('model'),
				graves = model.get('graves'),
				path,
				endPath = [];

			path = proto.getAvailablePathWithTeamUnit.apply(unit, arguments);

			_.each(path, function (xy) {
				return _.find(graves, xy) || endPath.push(xy);
			});

			return endPath;

		}

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.ValadornModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.valadorn

	});

}(window));(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.BB.Unit.WispModel =  win.APP.BB.Unit.BaseUnitModel.extend({

		defaults: win.APP.unitMaster.list.wisp

	});

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP = win.APP || {};

	var soundMaster;

	soundMaster = {

		init: function () {

			var soundMaster = this;

			soundMaster.initPlayers();

			win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);

		},

		roads: [{}, {}, {}, {}], // 4 roads

		initPlayers: function () {

			// todo: detect player type here (web, android, iOS)

			var soundMaster = this,
				isAndroidPlayer = win.AndAud_0,
				isIosPlayer = win.Media, // detect cordova Media
				player;

			if (isAndroidPlayer) {
				player = win.APP.soundMaster.androidPlayer;
			}

			if (isIosPlayer) {
				player = win.APP.soundMaster.iosPlayer;
			}

			player = player || win.APP.soundMaster.webPlayer; // get system player or use web player

			player.init();

			soundMaster.player = player;

		},

		getPlayer: function () {
			return this.player;
		},

		playBgSound: function () {

			var soundMaster = this,
				gbSound = soundMaster.getCurrentBgSound();

			if (!gbSound) {
				return;
			}

			soundMaster.play({
				sound: gbSound,
				isLoop: true,
				road: 0
			});

		},

		getCurrentBgSound: function () {

			var state = Backbone.history.fragment;

			switch (state) {

				case '':
				case 'play':
				case 'select-level':
				case 'skirmish-select-map':
					return 'main-theme.mp3'; // file name main-theme.mp3

			}

			// if false - do not anything
			return false;

		},

		play: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer(),
				prevState = soundMaster.roads[data.road],
				curStr = JSON.stringify(data),
				prevStr = JSON.stringify(prevState);

			//save arguments for - do not start play the same sound
			if (curStr === prevStr && data.isLoop) {
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			if (win.APP.info.get('music') === 'off') {
				return;
			}

			player.play(data);

		},

		stop: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer();

			player.stop(data);

		},

		stopBgSound: function () {

			var soundMaster = this,
				state = soundMaster.roads[0]; // 0 is bg sound

			soundMaster.stop(state);

		},

		restoreBgSound: function () {

			var soundMaster = this,
				state = JSON.parse(JSON.stringify(soundMaster.roads[0])); // 0 is bg sound

			soundMaster.roads[0] = {}; // wipe previous state to force play sound

			soundMaster.play(state);

		}

	};

	win.APP.soundMaster = soundMaster;

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP.soundMaster = win.APP.soundMaster || {};

	win.APP.soundMaster.webPlayer = {

		roads: new Array(4),

		pathPrefix: 'sounds/',

		init: function () {

			var player = this;

			player.roads = _.map(player.roads, function () {
				return new Audio();
			});

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio;

			player.stop(data);

			newAudio = new Audio();
			if (isLoop) {
				newAudio.addEventListener('ended', function() {
					if ( win.APP.info.get('music') === 'off' ) {
						return;
					}
					var audio = this;
					audio.currentTime = 0;
					audio.play();
				}, false);
			}

			newAudio.addEventListener('canplay', function () {
				if ( win.APP.info.get('music') === 'off' ) {
					return;
				}
				var audio = this;
				audio.play();
			});

			player.roads[roadNumber].src = '';
			player.roads[roadNumber] = newAudio;

			newAudio.src = player.pathPrefix + sound;

		},

		stop: function (data) {

			var player = this,
				roadNumber = data.road,
				road = player.roads[roadNumber];

			if (road && road.pause) {
				road.pause();
			}

			if (road && road.currentTime && road.currentTime < 0.1) {
				road.currentTime = 0;
			}

		}

	}

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP.soundMaster = win.APP.soundMaster || {};

	win.APP.soundMaster.androidPlayer = {

		pathPrefix: 'www/sounds/',

		init: function () {

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				src = player.pathPrefix + sound,
				andAud = window['AndAud_' + roadNumber];

			if (isLoop) {
				andAud.playAudioLooping(src);
			} else {
				andAud.playAudio(src);
			}

		},

		stop: function (data) {

			var roadNumber = data.road,
				andAud = window['AndAud_' + roadNumber];

			andAud.stop();

		}

	}

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	win.APP.soundMaster = win.APP.soundMaster || {};

	win.APP.soundMaster.iosPlayer = {

		roads: new Array(4),

		pathPrefix: 'sounds/',

		init: function () {

		},

		play: function (data) {

			if (data.road) {
				return;
			}

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio,
				settings = {
					playAudioWhenScreenIsLocked: false
				};

			player.stop(data);

			newAudio = new Media(player.pathPrefix + sound);

			if (isLoop) {
				settings.numberOfLoops = 9;
			}

			newAudio.play(settings); // play audio with needed settings

			player.roads[roadNumber] = newAudio;

		},

		stop: function (data) {

			var player = this,
				roadNumber = data.road,
				road = player.roads[roadNumber];

			if ( road && road.release ) {
				player.roads[roadNumber].stop();
				player.roads[roadNumber].release();
			}

		}

	}

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, setTimeout */
	/*global _, log, $ */

	function Cpu(json) { // model, player:'activePlayer'

		var cpu = this;
		cpu.attr = {};
		cpu.extend(json);

	}

	Cpu.prototype = {

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		extend: function (json) {
			_.extend(this.attr, json);
			return this;
		},

		rates: {
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0.5,
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 10
		},

		rates_hard: { // default rates
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0.5,
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 10
		},

		rates_normal: {
			severalBuildings: -20, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 40,
			destroyEnemyBuilding: 40,
			building: {
				castle: 100,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: 0, // dif
				upHealth: 1,
				availableReceiveDamage: -0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 0
		},

		rates_easy: {
			severalBuildings: 0, // if unit can work with several buildings, reduce rate
			lowPriority: -1000,
			highPriority: 1000,
			killUnit: 1000,
			destroyEnemyBuilding: 0,
			building: {
				castle: 0,
				farm: 0
			},

			q: {
				nearestNonOwnedBuilding: -1,
				placeArmor: -0.5,
				upHealth: 0,
				availableReceiveDamage: 0.1,
				listOccupyBuilding: 50
			},

			onHealthUpBuilding: 0
		},

		run: function () {

			var cpu = this;

			cpu.setRates();

			cpu.buyUnits();
			cpu.turnUnit();

		},

		setRates: function () {

			var cpu = this,
				difficult = win.APP.info.get('difficult');

			cpu.rates = cpu['rates_' + difficult];

		},

		runScenario: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				view = model.get('view'),
				unit = scenario.get('unit'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				};

			// see view.onClick
			view.markActiveSquare({
				x: unitX,
				y: unitY
			}); // {x: number, y: number}
			view.autoSetSquareInfo();
			view.centerToXY(xy);

			// show available actions
			view
				.showAvailableActions(unit.getAvailableActions())
				// move if needed
				.then(function () {

					var deferred = $.Deferred();

					if ( unitX !== x || unitY !== y ) {

						view.markActiveSquare(xy); // {x: number, y: number}
						view.autoSetSquareInfo();

						unit.moveTo({
								x: x,
								y: y,
								type: 'move',
								unit: unit,
								confirmed: true
							})
							.then(function () {
								deferred.resolve();
							});
					} else {
						deferred.resolve();
					}

					return deferred.promise();

				})
				// after move
				.then(function () {

					setTimeout(function () {
						cpu.runScenarioAction(scenario);
					}, win.APP.info.actionTime());

				});

		},

		runScenarioAction: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				action = scenario.get('action'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				unit = scenario.get('unit'),
				actionName = scenario.get('action').name,
				q = 1;

			switch (actionName) {

				case 'move':

					// do nothing, move was in past step

					unit.set('isActive', false);

					break;

				case 'attack':

					unit.attackToXy({
						attackX: action.enemy.x,
						attackY: action.enemy.y
					});

					q = 3.5;

					break;

				case 'fixBuilding':

					unit.fixBuilding({
						buildingToFix: model.getBuildingByXY(xy)
					});

					break;

				case 'getBuilding':

					unit.occupyBuilding({
						buildingToOccupy: model.getBuildingByXY(xy)
					});

					break;

				case 'raiseSkeleton':

					unit.raise({
						x: action.grave.x,
						y: action.grave.y
					});

					break;

			}

			setTimeout(function () {
				cpu.turnUnit();
			}, win.APP.info.actionTime() * q);

		},

		buyUnits: function () {

			// 1 - detect castle closest to enemy castle
			var cpu = this,
				model = cpu.get('model'),
				player = cpu.get('player'),
				store = cpu.getStore();

			if ( !store ) { // no store, no units ))
				return;
			}

			// buy commander if needed and can
			// buy commander, or no any buy
			cpu.buyUnit({
				store: store,
				type: player.commander.name
			});

			if ( !model.playerHasCommander(player) ) {
				return;
			}

			// buy next needed unit, called him self
			cpu.buyNextUnit({
				store: store
			});

		},

		buyNextUnit: function (data) {

			var cpu = this,
				util = win.APP.util,
				assortArray = util.assortArray,
				model = cpu.get('model'),
				player = cpu.get('player'),
				units = model.getUnitsByOwnerId(player.id),
				unitLimit = model.get('unitLimit'),
				unitTypeToBuy,
				unitMaster = win.APP.unitMaster,
				unitCounts = [
					{ type: 'soldier', 		count: 2, currentCount: 0 },
					{ type: 'archer',		count: 2, currentCount: 0 }
					//{ type: 'sorceress', 	count: 1, currentCount: 0 }
					//{ type: 'golem',	 	count: 1, currentCount: 0 },
					//{ type: 'dire-wolf',	count: 1, currentCount: 0 }
				],
				otherUnits = ['soldier', 'archer', 'sorceress', 'sorceress', 'golem', 'dire-wolf', 'dragon', 'catapult', 'sorceress', 'golem', 'dire-wolf', 'dragon'];

			unitCounts = assortArray(unitCounts);

			if ( model.isUnitsTooMuch() ) {
				log('too much units CPU');
				return;
			}

			// do not buy if limit exceed
			if ( unitLimit <= units.length) {
				return;
			}

			_.each(unitCounts, function (data) {

				_.each(units, function (unit) {
					if ( unit.get('type') === data.type ) {
						data.currentCount += 1;
					}
				});

			});

			_.each(unitCounts, function (data) {
				if ( data.currentCount < data.count && !unitTypeToBuy ) {
					unitTypeToBuy = data.type;
				}
			});

			if ( unitTypeToBuy && unitMaster.list[unitTypeToBuy].cost <= player.money ) {
				cpu.buyUnit({
					store: data.store,
					type: unitTypeToBuy
				});
				cpu.buyNextUnit({
					store: data.store
				});
				return;
			}

			unitTypeToBuy = win.APP.util.assortArray(otherUnits)[0];

			if ( unitTypeToBuy && unitMaster.list[unitTypeToBuy].cost <= player.money ) {
				cpu.buyUnit({
					store: data.store,
					type: unitTypeToBuy
				});
				cpu.buyNextUnit({
					store: data.store
				});
				return;
			}


			log('buy other units');

			// buy other units




		},

		getStore: function () {

			var cpu = this,
				util = win.APP.util,
				model = cpu.get('model'),
				units = model.get('units'),
				player = cpu.get('player'),
				teamNumber = player.teamNumber,
				ownerId = player.id,
				buildings = model.get('buildings'),
				unitData = win.APP.unitMaster,
				commandersList = unitData.commanderList,
				pairs,
				enemyCommanders = _.filter(units, function (unit) {
					return unit.get('teamNumber') !== teamNumber && _.contains(commandersList, unit.get('type'));
				}),
				enemyStores = _.filter(buildings, function (building) {
					return building.canBeStore && building.teamNumber !== teamNumber && building.teamNumber !== null;
				}),
				stores = _.where(buildings, { ownerId: ownerId, canBeStore: true });

			if ( !stores.length ) {
				return false;
			}

			if ( enemyCommanders.length ) {
				pairs = [];
				_.each(enemyCommanders, function (unit) {
					_.each(stores, function (store) {
						pairs.push({
							unit: unit,
							store: store,
							pathSize: util.getPathSize(store, {
								x: unit.get('x'),
								y: unit.get('y')
							})
						});
					});
				});

				pairs = pairs.sort(function (a, b) {
					return a.pathSize - b.pathSize;
				});

				log('-- before stores ');
				log(pairs);

				return pairs[0].store;

			}

			if ( enemyStores.length ) {
				pairs = [];

				_.each(enemyStores, function (enemyStore) {
					_.each(stores, function (store) {
						pairs.push({
							store: store,
							pathSize: util.getPathSize(store, enemyStore)
						});
					});
				});

				pairs = pairs.sort(function (a, b) {
					return a.pathSize - b.pathSize;
				});

				log('-- no commanders');
				log(pairs);
				return pairs[0].store;

			}

			// it non reach code, if enemyCommanders.length === 0 and enemyStores.length === 0 -> end game
			return stores[0];

		},

		buyUnit: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				unitType = data.type,
				store = data.store,
				unitStore = win.APP.BB.UnitStoreView.prototype;

			unitStore.buyUnit({
				state: 'cpu',
				view: model.get('view'),
				model: model,
				player: cpu.get('player'),
				unitType: unitType,
				x: store.x,
				y: store.y
			});

		},

		turnUnit: function () {

			if ( this.get('model').get('isEndGame') ) {
				log('end game from CPU');
				return;
			}

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				player = cpu.get('player'),
				privateUnits = model.getUnitsByOwnerId(player.id),
				scenarios = [],
				lowPriorityScenarios = [],
				highPriorityScenarios = [],
				scenarioIsDone = false;

			// get ALL scenarios, except nonActive units
			_.each(privateUnits, function (unit) {

				if ( !unit.get('isActive') ) {
					return;
				}

				var scenario = cpu.getUnitScenarios(unit);
				scenarios = scenarios.concat(scenario);

			});

			_.each(scenarios, function (scenario) {
				cpu.setAutoRate(scenario, scenarios);
			});

			_.each(scenarios, function (scenario) {

				var actionName = scenario.get('action').name;

				if ( actionName === 'move' ) {
					lowPriorityScenarios.push(scenario);
				} else {
					highPriorityScenarios.push(scenario);
				}

			});

			// reRate move
			_.each(lowPriorityScenarios, function (lowPriorityScenario) {

				_.each(highPriorityScenarios, function (sc) {
					var action = sc.get('action'),
						grave,
						x = lowPriorityScenario.get('x'),
						y = lowPriorityScenario.get('y'),
						scX = sc.get('x'),
						scY = sc.get('y'),
						isTheSamePlace = (scX === x && scY === y);

					// if this move disturbs other scenarios
					switch (action.name) {
						case 'fixBuilding':
						case 'getBuilding':
							if ( isTheSamePlace ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
						case 'raiseSkeleton':
							grave = action.grave;
							if ( isTheSamePlace || (grave.x === x && grave.y === y) ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
						case 'attack':
							if ( sc.get('rate') === rates.lowPriority && isTheSamePlace ) {
								lowPriorityScenario.set('rate', rates.lowPriority);
							}
							break;
					}

				});

			});

			 _.each(scenarios, function (scenario) {
				 cpu.setAutoAvailableByPosition(scenario); // detect available position
				 //cpu.setAutoAvailableByCanEnemyGetBuilding(scenario); // detect available position - TODO: need implement
				 cpu.setAutoAvailableByRaiseSkeleton(scenario); // detect raise skeleton
			 });

			scenarios = _.filter(scenarios, function (scenario) {
				return scenario.get('isAvailable') && scenario.get('rate') !== rates.lowPriority;
			});

			cpu.setAutoRateBuildingWork(scenarios);

			if ( !scenarios.length ) {
				model.newTurn();
				return;
			}

			// find get building - 1
			// find raise skeleton - 2
			// find attack - 3
			// find fix building - 4
			// find move - 5

			_.each(['getBuilding', 'raiseSkeleton', 'attack', 'fixBuilding', 'move'], function (scenarioType) {

				if ( scenarioIsDone ) {
					return;
				}

				var filteredScenarios = _.filter(scenarios, function (scenario) {
					return scenario.get('action').name === scenarioType;
				});

				if ( !filteredScenarios.length ) {
					return;
				}

				switch (scenarioType) {

					case 'getBuilding':

						_.each(filteredScenarios, function (scenarion) {

							var building = scenarion.get('action').building,
								addedRate = rates.building[building.type];

							scenarion.changeBy(addedRate);

							filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
								return sc2.get('rate') - sc1.get('rate');
							});

						});

						break;

					case 'raiseSkeleton':

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage);
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'attack':

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage - scenario.get('availableResponseDamage'));
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'fixBuilding':

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {
							return sc2.get('rate') - sc1.get('rate');
						});

						break;

					case 'move':

						_.each(filteredScenarios, function (scenario) {

							var dataByPosition = scenario.get('dataByPosition'),
								placeArmor = dataByPosition.placeArmor,
								availableReceiveDamage = dataByPosition.availableReceiveDamage,
								onHealthUpBuilding = dataByPosition.onHealthUpBuilding;

							if (availableReceiveDamage) {
								scenario.changeBy('rate', placeArmor + onHealthUpBuilding + availableReceiveDamage * rates.q.availableReceiveDamage);
							}

						});

						filteredScenarios = filteredScenarios.sort(function (sc1, sc2) {

							var unit1 = sc1.get('unit'),
								unit2 = sc2.get('unit'),
								length1 = (unit1.get('listOccupyBuilding') || []).length * rates.q.listOccupyBuilding,
								length2 = (unit2.get('listOccupyBuilding') || []).length * rates.q.listOccupyBuilding;

							return (sc2.get('rate') + length1) - (sc1.get('rate') + length2);

						});

						break;

				}

				scenarioIsDone = true;
				cpu.runScenario( filteredScenarios[0] );

			});

		},

		// getting action of unit
		getUnitScenarios: function (unit) {

			var cpu = this,
				availableXYs = cpu.getAvailableUnitXYs(unit),
				scenarios = [];

			_.each(availableXYs, function (xy) {

				var xyScenarios = cpu.getUnitScenariosByXY({
					x: xy.x,
					y: xy.y,
					unit: unit
				});

				scenarios = scenarios.concat(xyScenarios);

			});

			return scenarios;

		},

		getAvailableUnitXYs: function (unit) {

			var cpu = this,
				model = cpu.get('model'),
				fullPath = unit.getAvailablePathWithTeamUnit(),
				restPath,
				units = model.get('units');

			restPath = _.filter(fullPath, function (xy) {

				var unit = model.getUnitByXY(xy);

				if ( !unit ) {
					return true;
				}

				return unit.get('isActive');

			});

			restPath.push({
				x: unit.get('x'),
				y: unit.get('y')
			});

			return restPath;

		},

		getUnitScenariosByXY: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				x = data.x,
				y = data.y,
				unit = data.unit,
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				gravesToRaise,
				scenarios = [],
				actionList = ['move', 'attack', 'fixBuilding', 'getBuilding', 'raiseSkeleton'],
				Scenario = win.APP.Scenario;

			unit.silentOn('x', 'y');
			unit.set('x', x);
			unit.set('y', y);

			_.each(actionList, function (action) {

				var scenario,
					unitsUnderAttack,
					buildingToGet,
					buildingToFix;

				switch (action) {

					case 'move':

						scenario = new Scenario({
							x: x,
							y: y,
							unit: unit,
							action: {
								name: action
							}
						});

						scenarios.push(scenario);
						break;

					case 'attack':

						// todo: add IF for cristal, cristal can not attack - needless for CPU

						if ( !(unit.get('canNotActionAfterMove') && ( unitX !== x || unitY !== y )) ) { // detect moved catapult

							unitsUnderAttack = unit.getUnitsUnderAttack();

							_.each(unitsUnderAttack, function (enemyUnitXY) {

								var scenario = new Scenario({
									x: x,
									y: y,
									unit: unit,
									action: {
										name: action,
										enemy: {
											x: enemyUnitXY.x,
											y: enemyUnitXY.y
										}
									}
								});

								scenarios.push(scenario);

							});

						}


						break;

					case 'fixBuilding':

						buildingToFix = unit.getBuildingToFix();

						if (buildingToFix) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'getBuilding':

						// detect can unit get this building
						buildingToGet = unit.getBuildingToOccupy();

						if ( buildingToGet && buildingToGet.teamNumber !== unit.get('teamNumber') ) {

							scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									building: {
										type: buildingToGet.type
									}
								}
							});

							scenarios.push(scenario);

						}

						break;

					case 'raiseSkeleton':

						gravesToRaise = unit.getGravesToRaise();

						_.each(gravesToRaise, function (grave) {

							var scenario = new Scenario({
								x: x,
								y: y,
								unit: unit,
								action: {
									name: action,
									grave: {
										x: grave.x,
										y: grave.y
									}
								}
							});

							scenarios.push(scenario);

						});

						break;

				}

			});

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			return scenarios;

		},

		setAutoAvailableByRaiseSkeleton: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				action = scenario.get('action'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				actionName = action.name,
				unitOnXY = model.getUnitByXY(xy),
				isUnitOnXY = unitOnXY && unitOnXY !== unit,
				graveXY,
				unitOnGraveXY,
				isUnitOnGraveXY;

			// raise
			if ( actionName === 'raiseSkeleton' ) {
				graveXY = action.grave;
				unitOnGraveXY = model.getUnitByXY(graveXY);
				isUnitOnGraveXY = unitOnGraveXY && unitOnGraveXY !== unit;
				if ( isUnitOnXY || isUnitOnGraveXY ) {
					scenario.set('isAvailable', false);
				}
			}


		},

		setAutoAvailableByPosition: function (scenario) {
			var cpu = this,
				model = cpu.get('model'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				unitOnXY = model.getUnitByXY(xy),
				isUnitOnXY = unitOnXY && unitOnXY !== unit;

			scenario.set('isAvailable', !isUnitOnXY);

		},

		// detect enemy can get your building
		setAutoAvailableByCanEnemyGetBuilding: function (scenario) {

			var cpu = this,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				nearestUnitBuilding = [],
				nearestEnemyBuilding = [],
				enemyUnits = [],
				teamUnits = [],
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				availablePathWithTeamUnit,
				availablePathViewWithoutTeamUnit
				;

			// get team and enemy units
			_.each(allUnits, function (unit) {
				if ( unit.get('teamNumber') === unitTeamNumber ) {
					teamUnits.push(unit);
				} else {
					enemyUnits.push(unit);
				}
			});

			enemyUnits = _.filter(enemyUnits, function (enemyUnit) {
				return enemyUnit.get('listOccupyBuilding');
			});

			availablePathWithTeamUnit = unit.getAvailablePathWithTeamUnit();

			// get available path view withOUT team unit
			availablePathViewWithoutTeamUnit = _.filter(availablePathWithTeamUnit, function (xy) {
				var founded = false;
				_.each(teamUnits, function (unit) {
					if ( unit.get('x') === xy.x && unit.get('y') === xy.y ) {
						founded = true;
					}
				});
				return !founded;
			});

			availablePathViewWithoutTeamUnit.push({
				x: unit.get('x'),
				y: unit.get('y')
			});

			_.each(enemyUnits, function (enemyUnit) {

				var availablePath = enemyUnit.getAvailablePathWithTeamUnit();

				_.each(availablePath, function (xy) {

					var building = model.getBuildingByXY(xy);

					if (!building) {
						return;
					}

					if (enemyUnit.get('listOccupyBuilding').indexOf(building.type) === -1) {
						return;
					}

					nearestEnemyBuilding.push(building);

				});

			});

			_.each(availablePathViewWithoutTeamUnit, function (xy) {

				var building = model.getBuildingByXY(xy);

				if ( !building ) {
					return;
				}

				if ( nearestEnemyBuilding.indexOf(building) === -1 ) {
					return;
				}

				nearestUnitBuilding.push(building);

			});

			//if ( _.find(nearestUnitBuilding, xy) ) {
				log('DETECT WHEN ENEMY CAN GET BUILDING');
				log(nearestUnitBuilding);
			//}


		},

		setAutoRate: function (scenario, allScenarios) {

			var cpu = this,
				action = scenario.get('action'),
				actionName = action.name,
				xy = {
					x: scenario.get('x'),
					y: scenario.get('y')
				},
				util = win.APP.util,
				unit = scenario.get('unit'),
				rates = cpu.rates,
				rate = 0;

			cpu.insertDataByPosition(scenario);

			switch (actionName) {

				case 'move':

					rate = cpu.rateMove({ // usually move rate is <0
						scenario: scenario,
						allScenarios: allScenarios
					});

					break;

				case 'attack':

					rate = cpu.rateAttack({
						scenario: scenario
					});

					break;

				case 'fixBuilding':
				case 'getBuilding':
				case 'raiseSkeleton':

					rate = rates.highPriority - util.getPathSize(xy, {x: unit.get('x'), y: unit.get('y')});

					break;

			}

			scenario.set('rate', rate);

		},

		setAutoRateBuildingWork: function (scenarios) {

			var cpu = this,
				unitWithScenarios = [];

			// detect unit can fix or build 2 and more buildings
			// create array with unit has all own scenarios
			_.each(scenarios, function (scenario) {
				var unit = scenario.get('unit'),
					unitWithScenario = _.find(unitWithScenarios, { unit: unit });

				if ( unitWithScenario ) {
					unitWithScenario.scenarios.push(scenario);
				} else {
					unitWithScenarios.push({
						unit: unit,
						scenarios: [scenario],
						getBuildingCount: 0,
						fixBuildingCount: 0
					});
				}
			});

			_.each(unitWithScenarios, function (unitWithScenario) {
				var scenarios = unitWithScenario.scenarios;
				_.each(scenarios, function (scenario) {
					var actionName = scenario.get('action').name;
					switch ( actionName ){
						case 'fixBuilding':
							unitWithScenario.fixBuildingCount += 1;
							break;
						case 'getBuilding':
							unitWithScenario.getBuildingCount += 1;
							break;
					}
				});
			});

			_.each(unitWithScenarios, function (unitWithScenario) {
				var scenarios = unitWithScenario.scenarios,
					severalBuildings = cpu.rates.severalBuildings,
					fixBuildingCount = unitWithScenario.fixBuildingCount,
					getBuildingCount = unitWithScenario.getBuildingCount;
				_.each(scenarios, function (scenario) {
					var actionName = scenario.get('action').name,
						rate = scenario.get('rate');

					switch ( actionName ) {
						case 'fixBuilding':
							scenario.set('rate', rate + severalBuildings * fixBuildingCount);
							break;
						case 'getBuilding':
							scenario.set('rate', rate + severalBuildings * getBuildingCount);
							break;
					}

				});
			});

		},

		insertDataByPosition: function (scenario) {

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				allUnits = model.get('units'),
				unit = scenario.get('unit'),
				x = scenario.get('x'),
				y = scenario.get('y'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				unitTeamNumber = unit.get('teamNumber'),
				enemyUnits,
				availableReceiveDamage = 0, // +
				placeArmor, // +
				upHealth = 0, // ---
				building,
				buildingData = win.APP.building,
				buildingUpHealthList = buildingData.upHealthList,
				buildingList = buildingData.list,
				onHealthUpBuilding = 0;

			unit.silentOn('x', 'y');
			unit.set('x', x);
			unit.set('y', y);

			enemyUnits = _.filter(allUnits, function (unit) {
				return unit.get('teamNumber') !== unitTeamNumber;
			});

			_.each(enemyUnits, function (enemy) {

				// try to get available attack map from cache
				var cachedField = [enemy.get('type'), 'x', enemy.get('x'), 'y', enemy.get('y')].join('-'),
					cachedAvailableAttackMap = cpu.get(cachedField),
					availableAttackMap;

				if (cachedAvailableAttackMap) {
					availableAttackMap = cachedAvailableAttackMap;
				} else {
					availableAttackMap = enemy.getAvailableAttackMap();
					cpu.set(cachedField, availableAttackMap);
				}

				if (!_.find(availableAttackMap, {x: x, y: y})) {
					return;
				}

				availableReceiveDamage += enemy.getAttackToUnit(unit, {average: true});

			});

			placeArmor = model.getArmorByXY({
				x: x,
				y: y
			});

			building = model.getBuildingByXY({ x: x, y: y });
			if ( building &&
				(building.ownerId === unit.get('ownerId') ||
				_.contains(buildingUpHealthList, building.type) ||
				building.teamNumber === unit.get('teamNumber')) ) {
				upHealth = buildingList[building.type].healthUp;
				upHealth = Math.min(upHealth, unit.get('defaultHealth') - unit.get('health'));
				onHealthUpBuilding = rates.onHealthUpBuilding;
			}

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			scenario.set('dataByPosition', {
				placeArmor: placeArmor,
				availableReceiveDamage: availableReceiveDamage,
				upHealth: upHealth,
				onHealthUpBuilding: onHealthUpBuilding
			});

		},

		rateMove: function (data) {

			var cpu = this,
				model = cpu.get('model'),
				player = model.get('activePlayer'),
				hasCastle = model.playerHasCastle(player),
				hasCommander = model.playerHasCommander(player),
				allBuildings = model.get('buildings'),
				wantedBuildings,
				util = win.APP.util,
				scenario = data.scenario,
				unit = scenario.get('unit'),
				unitTeamNumber = unit.get('teamNumber'),
				allUnits = model.get('units'),
				enemyUnits = _.filter(allUnits, function (unit) {
					return unit.get('teamNumber') !== unitTeamNumber;
				}),
				//allScenarios = data.allScenarios,
				rates = cpu.rates,
				buildingData = win.APP.building,
				dataByPosition = scenario.get('dataByPosition'),
				wantedBuildingList = unit.get('listOccupyBuilding') || buildingData.wantedBuildingList,
				x = scenario.get('x'),
				y = scenario.get('y'),
				xy = {
					x: x,
					y: y
				},
				//building = model.getBuildingByXY(xy),
				pathToBuildingLength = Infinity,
				//pathToEnemyLength = Infinity,
				rate;

			// 1 detect: enemy unit which can get or stay on building
			//if ( building ) {
			//
			//	// can enemy get building
			//	_.each(enemyUnits, function (enemy) {
			//
			//		var path = enemy.getAvailablePathFull(),
			//			buildingTypeList = enemy.get('listOccupyBuilding');
			//
			//		if ( !_.find(path, xy) || !buildingTypeList ) {
			//			return;
			//		}
			//
			//	});
			//
			//}

			// 2 - nearest non player and available to get building
			wantedBuildings = _.filter(allBuildings, function (building) {
				return building.teamNumber !== unitTeamNumber && _.contains(wantedBuildingList, building.type);
			});

			if ( !wantedBuildings.length || ( !hasCastle && !hasCommander ) ) { // if mission or no needed buildings

				_.each(enemyUnits, function (enemy) {
					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize({ x: enemy.get('x'), y: enemy.get('y') }, xy));
				});

			} else {

				_.each(wantedBuildings, function (building) {

					var teamUnit = model.getUnitByXY(building);

					if ( teamUnit && teamUnit.get('teamNumber') === unitTeamNumber && _.contains(teamUnit.get('listOccupyBuilding'), building.type) ) {
						return;
					}

					pathToBuildingLength = Math.min(pathToBuildingLength, util.getPathSize(building, xy));

				});

			}

			// set rate by nearest non owned building
			rate = pathToBuildingLength * rates.q.nearestNonOwnedBuilding;

			// add rate by upHealth
			rate += dataByPosition.upHealth * rates.q.upHealth;

			return rate;

		},

		rateAttack: function (data) {

			var cpu = this,
				rates = cpu.rates,
				model = cpu.get('model'),
				scenario = data.scenario,
				action = scenario.get('action'),
				scenarioX = scenario.get('x'),
				scenarioY = scenario.get('y'),
				unit = scenario.get('unit'),
				unitX = unit.get('x'),
				unitY = unit.get('y'),
				enemyXY = action.enemy,
				enemy = model.getUnitByXY(enemyXY),
				enemyHealth = enemy ? enemy.get('health') : 0,
				enemyBuilding = model.getBuildingByXY(enemyXY),
				availableGivenDamage,
				availableResponseDamage = 0,
				dataByPosition = scenario.get('dataByPosition'),
				rate;

			if ( !enemy && enemyBuilding && unit.get('canDestroyBuilding') ) {
				return rates.destroyEnemyBuilding;
			}

			unit.silentOn('x', 'y');
			unit.set('x', scenarioX);
			unit.set('y', scenarioY);

			// count
			availableGivenDamage = unit.getAttackToUnit(enemy, {average: true});

			// detect can enemy do strike back
			if ( availableGivenDamage < enemyHealth && enemy.canStrikeBack(unit) ) {
				enemy.silentOn('health');
				enemy.set('health', enemyHealth - availableGivenDamage);
				availableResponseDamage = enemy.getAttackToUnit(unit, {average: true});
				enemy.set('health', enemyHealth);
				enemy.silentOff('health');
			}

			if ( availableGivenDamage >= enemyHealth ) {
				rate = rates.killUnit;
			} else {
				if ( availableResponseDamage < unit.get('health') - 10 ) { // detect: unit will be alive after attack
					rate = availableGivenDamage; // unit alive
				} else {
					rate = rates.lowPriority;  // unit die
				}
			}

			scenario.set('availableResponseDamage', availableResponseDamage);

			unit.set('x', unitX);
			unit.set('y', unitY);
			unit.silentOff('x', 'y');

			return rate;

		}


	};

	win.APP.Cpu = Cpu;

}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	function Scenario (json) { // x, y, action

		var sc = this;
		sc.attr = {};
		sc.extend(json);

	}

	Scenario.prototype = {

		get: function (key) {
			return this.attr[key];
		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		extend: function (json) {
			_.extend(this.attr, json);
			return this;
		}

	};




	win.APP.Scenario = Scenario;

}(window));/*jslint white: true, nomen: true */ // http://www.jslint.com/lint.html#options
(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global */

	win.APP.building = {
		defaults: {
			state: 'normal',
			ownerId: null,
			color: 'gray',
			teamNumber: null
		},
		upHealthList: ['well', 'temple'], // bot only
		noMansBuildingsList: ['well', 'temple'], // map editor
		wantedBuildingList: ['castle', 'farm'], // bot only
		list: {
			castle: {
				availableStates: ['normal'],
				earn: 50,
				healthUp: 20,
				defence: 15,
				canBeStore: true
			},
			farm: {
				availableStates: ['normal', 'destroyed'],
				earn: 30,
				healthUp: 20,
				defence: 15
			},
			well: {
				availableStates: ['normal'],
				healthUp: 20,
				defence: 15
			},
			temple: {
				availableStates: ['normal'],
				healthUp: 20,
				defence: 15
			}
		}

	};


}(window));/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window, document, setTimeout, history, location, Image*/
	/*global APP, Backbone, FastClick, _, $ */

	win.APP = win.APP || {};

	win.APP.bb = win.APP.bb || {};

	function initTiles() {

		function prepareTiles(tiles) {

			_.each(tiles, function (base64, key) {
				var img = new Image(),
					scale = 8;

				$(img).one('load', function () {

					var base64Scaled = win.APP.map.scaleImage(this, scale);

					tiles[key] = {
						base64: base64Scaled,
						img: img
					};

					img.src = base64Scaled;

				}.bind(img, scale, key));

				img.src = base64;

			});

		}

		prepareTiles(win.APP.mapTiles);
		prepareTiles(win.APP.mapTilesPreview);

	}

	function start() {

		APP.templateMaster.init();
		win.APP.util.setHTMLStyle();
		win.APP.BB.BaseView.prototype.initStatic();

		FastClick.attach(document.body);

		function back() {

			var settingsPrototype;

			if ( location.hash ) {
				history.back();
				setTimeout(back, 50);
			} else {
				// prepare map
				win.APP.map.db.init();
				//win.APP.BB.BaseView.prototype.util.loadSavedTheme();
				win.APP.bb.router = new win.APP.BB.Router();
				Backbone.history.start();
				initTiles();
				settingsPrototype = win.APP.BB.SettingsView.prototype;
				settingsPrototype.setSpeedStyle();
				settingsPrototype.autoShowBuildingSmoke();
				settingsPrototype.autoShowUnitAnimation();
				settingsPrototype.autoSetFont();
				win.APP.soundMaster.init();
				win.APP.soundMaster.playBgSound();

				//setTimeout(function () {
				//	win.APP.soundMaster.play({
				//		sound: 'click.mp3',
				//		road: 3,
				//		isLoop: false
				//	});
				//}, 1000);
				//
				//setTimeout(function () {
				//	win.APP.soundMaster.playBgSound();
				//}, 2000);


			}

		}

		back();

	}

	win.addEventListener('load', start, false);

}(window));
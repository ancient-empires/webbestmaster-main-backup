(function (win) {

	"use strict";
	/*global window */

	win.langs = win.langs || {};

	win.langs.ru = {
		language: 'язык',
		languageName: 'Русский',
		languageNameShort: 'Рус',
		objective: 'Цель мисссии',
		thanks: 'Программист:<br>Дмитрий Туровцов<br><br>Благодарности:<br>Павел Прилуцкий<br>Игорь Купреев<br>Павел Сычиков',
		back: 'Назад',
		confirmTurn: 'подтверждение хода',
		sound: 'звук',
		gameSpeed: 'скорость игры',
		fast: 'быстрее',
		slow: 'медленнее',
		companies: 'компании',
		maps: 'карты',
		createGame: 'создать игру',
		instruction: 'инструкции',
		settings: 'настройки',
		credits: 'авторы',
		players: 'игроки',
		human: 'игрок',
		cpu: 'бот',
		buy: 'цена',
		menu: 'меню',
		exit: 'выход',
		restart: 'перезапуск',
		quit: 'выход',
		areYouSure: 'Вы уверены?',
		yes: 'да',
		no: 'нет',
		blueTurn: 'ход<br>синих!',
		redTurn: 'ход<br>красных!',
		nextMission: 'следующая миссия',
		youWin: 'победа',
		youDefeat: 'поражение',
		blueWin: 'синие победили!',
		redWin: 'красные победили!',
		occupyAllBuildings: 'Захватить все здания.',
		units: {
			archer: {
				name: 'лучник',
				description: 'Со своими мощными луками лучники могут атаковать на расстоянии, и они особенно сильны против летающих врагов.'
			},
			bones: {
				name: 'скелет',
				description: 'Вызванные волшебниками, эти безжизненные воины также сильны как солдаты, и являются смертелными противниками на любом поле битвы.'
			},
			catapult: {
				name: 'катапульта',
				description: 'Катапульты приносят опустошение везде, куда достанут со своей гигантской зоной атаки. Однако, они относительная неподвижность и неспособность атаковать вблизи делают их уязвимыми, так что защищайте их хорошо. Катапульты могут передвигаться и атаковать в течении хода, но только что-нибудь одно за ход.'
			},
			golem: {
				name: 'голем',
				description: 'Выкованные из живых камней племенем гномов в Потерянных Горах, големы медленны, но необычайно сильны в защите. Голема, расположенного в здании или хорошо защищенной горе очень сложно победить.'
			},
			knight: {
				name: 'рыцарь',
				description: 'Рыцарь очень силен в атаке и защите. Также рыцарь может захватить замок или ферму.'
			},
			lizard: {
				name: 'ящерица',
				description: 'Потомки древней земноводной империи, лежащей в болотах на востоке, ящерицы - гордые воины. Они чрезвычайно мобильны (+3) и сильны в защите (+2), когда находятся в воде.'
			},
			soldier: {
				name: 'солдат',
				description: 'Усердные и храбрые, солдаты сформируют основу любой армии. Только они и рыцари могут захватывать фермы с целью получения золота.'
			},
			spider: {
				name: 'паук',
				description: 'Пауки - это опасные создания, чье местообитание простирается в суровых темных лесах на западе. В добавление к их высокой мобильности, пауки используют атаку ядом, чтобы ослабить оппонента на один ход.'
			},
			wisp: {
				name: 'висп',
				description: 'Эти мистические существа чистого Света излучают ауру, которая добавляет очки атаки ближайшим дружественным единицам. В близком бою они особенно смертельны против скелетов.'
			},
			wizard: {
				name: 'волшебник',
				description: 'Древняя гильдия волшебников слаба в близком бою, но чрезвычайна полезна, так как они могут поднимать боевых скелетов из мертвых войск.'
			},
			wyvern: {
				name: 'вайверн',
				description: 'Эти грациозные летающие твари правят над горами с древнейших времен. Они чрезвычайно подвижны, а так же смертельно опасны в атаках на земле, воздухе и в море.'
			}
		},
		instructions: [
			'Античные Империи это захватывающая стратегия, помещающая вас в роли Короля Галамара в битву за свое королевство.',
			'Синие или красные квадратики показывают возможной путь единицы. Размер пути единицы определяется ее типом и местностью, на которой она стоит.',
			'Разные типы местности влияют на способности единиц к передвижению, атаке и защите. Например, горы добавляют единицам очки защиты, но замедляют скорость передвижения. При нажатии на них особенности местности отображаются в нижней части экрана.',
			'Когда единица завершила движение, то она становится полупрозрачной. Это означает, что он не может быть перемещена снова до следующего хода.',
			'Вы можете перемещать единицу только один раз за ход.',
			'Используйте \'+\' и \'-\' (в правом нижнем углу) чтобы масштабировать карту.',
			'Вы можете посмотреть характеристики воинов в магазине. Единицы становятся более сильными, получая опыт в битвах.',
			'Чтобы атаковать вражескую единицу, передвиньте вашу единицу в пределы атаки и выберите \'Атака\'. Если в пределах находятся несколько врагов, выберите, какую единицу атаковать. Успех атаки определяется характеристиками единиц и местностью.',
			'Только рыцарь может занять замок. В замке Вы покупать новые единицы за золото.',
			'Вы можете занять здание, переместив солдата на него и выбрав \'Занять\'. Как только здание будет занято, оно сменит цвет.',
			'Как только здание будет занято, оно начнет приносить золото. Чем больше зданий вы займете, тем больше заработаете.',
			'Единицы могут быть вылечены, заняв здание. Чем больше единица находится в здании, тем больше жизни восстановится.',
			'Ящерицы - земноводные, это увеличивает им передвижение и защиту в воде.',
			'Атака паука ядовита. Отравленная единица замедляется и слабеет до своего следующего хода.',
			'Надгробие показывает, где единица была повержена. Оно исчезает после одного хода.',
			'У волшебников есть сила для вызова скелетов-воинов из могил поверженных солдат.',
			'Используйте виспов для обеспечения ближайшим дружественным единицам ауры, которая прибавляет им очки атаки.',
			'Держите ваших вайвернов вдали от вражеских лучников, так как они уязвимы для стрел!'
		],
		missions: {
			c01_regroup: {
				A1Header: 'Часть 1',
				A1: 'ru The Kingdom of Thorin is divided. Betrayed by his own twin brother Valadorn, King Galamar has fled into the borderlands of the east. Only the Blue guard, Galamar\'s personal troops, have remained loyal and stand ready to reclaim the land...',
				H1: 'ru Sire, your troops are weary after last night\'s battle. It would be wise to regroup at the abandoned castle.',
				G1: 'ru Sound advice, captain. Ready the troops - we should not let the enemy catch us unprepared.',
				H2: 'ru Valadorn\'s army should be easy to spot with their red uniforms.',
				T1: '[] King Galamar must occupy castle.%%%%[] Keep all troops alive.',
				H3: 'ru Spies!! Valadorn and his Red legion must know where we are! Quickly, protect the King!',
				objective: '[] ru King Galamar must occupy castle.%%%%[] ru Keep all troops alive.',
				'Keep all troops alive': 'ru Keep all troops alive'
			},
			c02_friendsAndEnemies: {
				A1Header: 'Часть 2',
				A1: 'King Galamar has survived Valadorn\'s attack. However, before Galamar can try to reclaim his kingdom he must first travel north to seek new allies.',
				G1: 'Forward, troops. But first, occupy these two buildings. We can rest once we reach the next village.',
				T1: '[] Keep the knight.%%%%[] Occupy the castle and at least one village.%%%%[] Produce at least three new unit of troops.',

				H1: 'Sire, our scouts report that the lizard people of the north are under attack!',
				G2: 'Then we must act quickly! The Lizard Chief is an old ally, and he will be sure to help us if we can save him.',

				H2: 'Sire, these lizards bring news from their village. They are under attack from forest spiders!',

				G3: 'Spiders? Then we will have to use the terrain to our advantage - rushing to attack would be foolish.',
				H3: 'Be careful your majesty - the spiders attack is poisonous!',
				objective: '[] Keep the knight.%%%%[] Occupy the castle and at least one village.%%%%[] Produce at least three new unit of troops.',
				'Keep the knight': 'Keep the knight'
			},
			c03_escort: {
				A1Header: 'Часть 3',
				A1: 'The Lizard Chief agrees to join Galamar\'s forces. Now Galamar\'s thoughts turn to the wizards of the Grey Tower. If the Lizard Chief can persuade them to help, their magic would be a great asset to his growing forces.',
				H1: 'Sire, the bridge has been destroyed!',
				G1: 'Valadorn must be expecting us - we must find another way across. This could be a trap.',
				H2: 'Troops! Keep your eyes open and protect the Lizard Chief at all cost.',
				//T1: 'Galamar and the Lizard Chief must reach the Grey Tower.',
				T1: '[] Occupy the castle.%%%%[] Keep the knight.%%%%[] Keep the Lizard Chief.',
				objective: '[] Occupy the castle.%%%%[] Keep the knight.%%%%[] Keep the Lizard Chief.',
				'Keep the knight': 'Keep the knight',
				'Keep the Lizard Chief': 'Keep the Lizard Chief'
			},
			c04_reinforcements: {
				A1Header: 'Часть 4',
				A1: 'Having reached the Grey Tower the High Wizard agrees to help Galamar. However, Galamar\'s troops have no time to rest, as a message arrives from the nearby city of Var Telan, telling of a surprise attack by Valadorn\'s Red legion.',
				H1: 'Your majesty, the Red legion! Watch out for their long range catapult!',
				T1: '[] Keep the knight.%%%%[] Save the city: destroy all enemy units!%%%%[] Occupy the castle.',
				H2: 'What is this treachery! The city has turned against us!',
				V1: 'As predictable as ever, brother! I have you now!',
				V2: 'Retreat!! Curse you Galamar! You won\'t be so lucky next time!',
				objective: '[] Keep the knight.%%%%[] Save the city: destroy all enemy units!%%%%[] Occupy the castle.',
				'Keep the knight': 'Keep the knight'
			},
			c05_wyvernRescue: {
				A1Header: 'Часть 5',
				A1: 'As Galamar\'s forces settle into the city castle, a scout patrol discovers some flying serpents called wyverns being held captive at an enemy campsite nearby. Could the wyverns be used against Valadorn and his forces? To find out, Galamar will have to rescue them.',
				G1: 'Sources indicate that the wyverns are being held in this castle.',
				H1: 'Be careful, your Majesty, wyverns can be formidable enemies as well as powerful allies.',
				T1: '[] Occupy the castle.%%%%[] Destroy all enemy units and free the wyverns.%%%%[] Keep the knight.',
				H2: 'Look your Majesty, the wyverns have broken free! They are now under our command!',
				objective: '[] Occupy the castle.%%%%[] Destroy all enemy units and free the wyverns.%%%%[] Keep the knight.',
				'Keep the knight': 'Keep the knight'
			},
			c06_siege: {
				A1Header: 'Часть 6',
				A1: 'With the powerful wyverns adding to his forces, Galamar is ready to fight back against Valadorn. He decides to mount a surprise attack on the main command outpost outside Thorin city.',
				H1: 'The city is well defended, your Majesty.',
				G1: 'So it seems. We may have to alter our battle plan.',
				T1: '[] Destroy all enemy units.%%%%[] Occupy the enemy castle.%%%%[] Keep the knight.',
				objective: '[] Destroy all enemy units.%%%%[] Occupy the enemy castle.%%%%[] Keep the knight.',
				'Keep the knight': 'Keep the knight'
			},
			c07_finalAssault: {
				A1Header: 'Часть 7',
				A1: 'Galamar is on the verge of recapturing the city when suddenly a huge explosion splits the ground.',
				G1: 'Valadorn\'s troops appearing everywhere?! What kind of evil magic is this?',
				V1: 'So, twin brother, it seems our positions are reversed! Submit now or be destroyed!',
				G2: 'Never! Whatever dark power is controlling you, I will defeat it!',
				T1: '[] Destroy all enemy units and save the kingdom!%%%%[] Keep the knight.',
				V2: 'Galamar... what have I done?',
				G3: 'The spell! It\'s broken!',
				A2: 'With Galamar victorious, the spell controlling Valadorn is broken. The evil force is none other than Saeth, the shadow demon! His plan defeated, with a terrible roar he orders his dark army to attack Galamar. Will the newly united Kingdom of Thorin withstand this attack? Can Galamar and his brother banish the evil Saeth once and for all?',
				objective: '[] Destroy all enemy units and save the kingdom!%%%%[] Keep the knight.',
				'Keep the knight': 'Keep the knight'
			}
		}

	};

}(window));

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
					header: langEn.missionComplete
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

}(window));
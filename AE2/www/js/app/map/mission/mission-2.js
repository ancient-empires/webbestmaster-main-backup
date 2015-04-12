/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var langEn = win.APP.languages.en;

	win.APP.maps.mission_2 = {
		"type": "mission",
		"isOpen": true,
		"size": {"width": 15, "height": 12},
		"name": "TO THE RESCUE",
		"name-ru": "RU TO THE RESCUE",
		"maxPlayers": 2,
		"money": [300, 1000],
		"win": ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit
		"defeat": ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		"objective": 'Destroy all attacking enemy troops, occupy both castles.',
		"startBriefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'How can this be? The Temple of Wisdom is also under attack!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Well, well... Valadorn, I presume? Prepare to be defeated!',
					img: 'i/face/demon-lord.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Sir, a part of the enemy force is retreating!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'The Crystal of Wisdom! Do not let them escape!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Sir, we must follow them!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Let us stop this attack first. The temple guards will not stand a chance otherwise!',
					img: 'i/face/valadorn.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Let us make our stand at this castle!',
					img: 'i/face/soldier.png'
				}
			}

		],

		"endBriefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Well done, Captain. But there is no time to rest. The Crystal of Life may also be in danger. We must warn King Galamar!',
					img: 'i/face/valadorn.png'
				}
			},			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Yes, Sir. I will ready the troops.',
					img: 'i/face/soldier.png'
				}
			}
		],

		"units": [
			{"x": 8, "y": 9, "type": "valadorn", "ownerId": 0},
			{"x": 9, "y": 10, "type": "archer", "ownerId": 0},
			{"x": 7, "y": 10, "type": "soldier", "ownerId": 0},
			{"x": 12, "y": 3, "type": "demon-lord", "ownerId": 1},
			{"x": 13, "y": 4, "type": "archer", "ownerId": 1},
			{"x": 6, "y": 1, "type": "soldier", "ownerId": 1}
		],
		"buildings": [
			{"x": 7, "y": 3, "type": "temple", "state": "normal"},
			{"x": 3, "y": 5, "type": "castle", "state": "normal"},
			{"x": 1, "y": 4, "type": "farm", "state": "normal"},
			{"x": 5, "y": 2, "type": "farm", "state": "normal"},
			{"x": 5, "y": 7, "type": "farm", "state": "destroyed"},
			{"x": 7,"y": 7,"type": "farm", "state": "normal"},
			{"x": 10, "y": 2, "type": "farm", "state": "normal"},
			{"x": 9, "y": 5, "type": "farm", "state": "destroyed"},
			{"x": 13, "y": 6, "type": "farm", "state": "normal"},
			{"x": 12, "y": 3, "type": "castle", "state": "normal"}
		],
		"terrain": {
			"x0y0": "water-1",
			"x0y1": "hill-1",
			"x0y2": "forest-1",
			"x0y3": "forest-2",
			"x0y4": "stone-1",
			"x0y5": "forest-2",
			"x1y0": "water-1",
			"x1y1": "water-1",
			"x1y2": "forest-2",
			"x1y3": "stone-1",
			"x1y4": "terra-1",
			"x1y5": "hill-1",
			"x2y0": "water-3",
			"x2y1": "water-1",
			"x2y2": "water-1",
			"x2y3": "forest-1",
			"x2y4": "hill-1",
			"x2y5": "terra-1",
			"x3y0": "water-1",
			"x3y1": "water-1",
			"x3y2": "water-1",
			"x3y3": "stone-1",
			"x3y4": "terra-1",
			"x3y5": "terra-1",
			"x4y0": "water-1",
			"x4y1": "water-1",
			"x4y2": "stone-1",
			"x4y3": "forest-2",
			"x4y4": "terra-1",
			"x4y5": "hill-1",
			"x5y0": "water-1",
			"x5y1": "water-1",
			"x5y2": "terra-1",
			"x5y3": "stone-1",
			"x5y4": "forest-1",
			"x5y5": "terra-1",
			"x6y0": "bridge-2",
			"x6y1": "bridge-2",
			"x6y2": "road-1",
			"x6y3": "road-1",
			"x6y4": "road-1",
			"x6y5": "stone-1",
			"x7y0": "water-1",
			"x7y1": "water-1",
			"x7y2": "forest-1",
			"x7y3": "terra-1",
			"x7y4": "road-1",
			"x7y5": "road-1",
			"x8y0": "water-3",
			"x8y1": "water-1",
			"x8y2": "water-1",
			"x8y3": "stone-1",
			"x8y4": "road-1",
			"x8y5": "forest-2",
			"x9y0": "water-1",
			"x9y1": "water-1",
			"x9y2": "water-1",
			"x9y3": "hill-1",
			"x9y4": "road-1",
			"x9y5": "terra-1",
			"x0y6": "road-1",
			"x1y6": "road-1",
			"x2y6": "road-1",
			"x3y6": "road-1",
			"x4y6": "road-1",
			"x5y6": "road-1",
			"x6y6": "road-1",
			"x7y6": "road-1",
			"x8y6": "hill-1",
			"x9y6": "stone-1",
			"x0y7": "forest-2",
			"x1y7": "forest-1",
			"x2y7": "hill-1",
			"x3y7": "road-1",
			"x4y7": "hill-1",
			"x5y7": "terra-1",
			"x6y7": "forest-1",
			"x7y7": "terra-1",
			"x8y7": "hill-1",
			"x9y7": "terra-1",
			"x0y8": "hill-1",
			"x1y8": "stone-1",
			"x2y8": "terra-1",
			"x3y8": "road-1",
			"x4y8": "road-1",
			"x5y8": "road-1",
			"x6y8": "hill-1",
			"x7y8": "forest-2",
			"x8y8": "terra-1",
			"x9y8": "stone-1",
			"x0y9": "stone-1",
			"x1y9": "forest-2",
			"x2y9": "hill-1",
			"x3y9": "terra-1",
			"x4y9": "forest-1",
			"x5y9": "road-1",
			"x6y9": "road-1",
			"x7y9": "road-1",
			"x8y9": "road-1",
			"x9y9": "hill-1",
			"x0y10": "forest-2",
			"x1y10": "forest-1",
			"x2y10": "forest-1",
			"x3y10": "stone-1",
			"x4y10": "hill-1",
			"x5y10": "terra-1",
			"x6y10": "hill-1",
			"x7y10": "terra-1",
			"x8y10": "road-1",
			"x9y10": "terra-1",
			"x0y11": "terra-4",
			"x1y11": "forest-2",
			"x2y11": "stone-1",
			"x3y11": "stone-1",
			"x4y11": "forest-2",
			"x5y11": "stone-1",
			"x6y11": "forest-2",
			"x7y11": "hill-1",
			"x8y11": "road-1",
			"x9y11": "forest-1",
			"x10y0": "water-1",
			"x10y1": "water-1",
			"x10y2": "terra-1",
			"x10y3": "forest-1",
			"x10y4": "road-1",
			"x10y5": "road-1",
			"x10y6": "forest-2",
			"x10y7": "water-1",
			"x10y8": "water-1",
			"x10y9": "water-1",
			"x10y10": "hill-1",
			"x10y11": "water-1",
			"x11y0": "water-1",
			"x11y1": "forest-1",
			"x11y2": "forest-2",
			"x11y3": "stone-1",
			"x11y4": "hill-1",
			"x11y5": "road-1",
			"x11y6": "forest-1",
			"x11y7": "water-1",
			"x11y8": "water-1",
			"x11y9": "water-1",
			"x11y10": "water-1",
			"x11y11": "water-1",
			"x12y0": "water-1",
			"x12y1": "forest-2",
			"x12y2": "stone-1",
			"x12y3": "terra-1",
			"x12y4": "terra-1",
			"x12y5": "road-1",
			"x12y6": "hill-1",
			"x12y7": "terra-1",
			"x12y8": "water-1",
			"x12y9": "water-1",
			"x12y10": "water-1",
			"x12y11": "water-1",
			"x13y0": "water-1",
			"x13y1": "terra-1",
			"x13y2": "hill-1",
			"x13y3": "terra-1",
			"x13y4": "stone-1",
			"x13y5": "road-1",
			"x13y6": "terra-1",
			"x13y7": "forest-1",
			"x13y8": "water-1",
			"x13y9": "water-1",
			"x13y10": "water-1",
			"x13y11": "water-1",
			"x14y0": "water-1",
			"x14y1": "forest-2",
			"x14y2": "forest-2",
			"x14y3": "terra-2",
			"x14y4": "hill-1",
			"x14y5": "road-1",
			"x14y6": "forest-1",
			"x14y7": "stone-1",
			"x14y8": "forest-2",
			"x14y9": "hill-1",
			"x14y10": "water-1",
			"x14y11": "water-1"
		}
	};

}(window));
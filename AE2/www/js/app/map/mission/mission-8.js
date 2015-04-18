/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var langEn = win.APP.languages.en;

	win.APP.maps.mission_001_008 = {
		"type": "mission",
		"isOpen": true,
		//"openMaps": [ { "jsMapKey": 'mission_001_009', "type": "mission" } ],
		"size": {"width": 14, "height": 18},
		"name": "HEAVEN'S FURY",
		"name-ru": "RU HEAVEN'S FURY",
		"maxPlayers": 2,
		"unitLimit": 25,
		"money": [600, 1200],
		"win": ['noEnemyUnit', 'allCastles'], // allCastles, noEnemyUnit, allUnorderedCasesIsDone
		"defeat": ['commanderIsDead'], // 'galamarDead', 'valadornDead', crystalIsDead

		"objective": 'Defeat Saeth and his minions! Galamar and Valadorn must survive.',

		"startBriefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'The Ruins of the Ancient Citadel... and Saeth! With the Crystals!',
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
					text: 'At last, Galamar and Valadorn! How very brave of you to confront me! All the keys are now in place, and soon the greatest power ever created on this earth will roar and bend to my will. Your destruction will be testimony to its might and glory!',
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
					text: 'Your ruses can no longer fool us, Saeth!',
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
					text: 'TARGET AQUIRED...<br>HEAVEN\'S FURY ACTIVATED!',
					img: ''
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing',
				popupData: {
					text: 'Heaven\'s Fury? What in the name of the Creator is that!',
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
					text: 'Pathetic creatures, this is something ancient that you would not understand even if you lived a thousand years! Witness the power of Heaven\'s Fury!',
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
					text: 'Galamar! We must hurry if our troops are to stand a chance!',
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
					text: 'Sire, we should attack these castles first before we launch an attack on the Saeth and the Ruins.',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.objective,
					text: 'Defeat Saeth and his minions! Galamar and Valadorn must survive.'
				}
			}
		],

		"endBriefing": [
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.victory,
					text: 'Go to next mission!'
				}
				//,onHide: {
					//fn: 'openMap',
					//args: ['mission_001_002', { type: 'mission' }]
				//}
			}
		],

		"units": [
			{"x": 2, "y": 9, "type": "catapult", "ownerId": 1},
			{"x": 4, "y": 9, "type": "elemental", "ownerId": 1},
			{"x": 3, "y": 9, "type": "demon-lord", "ownerId": 1},
			{"x": 6, "y": 9, "type": "archer", "ownerId": 1},
			{"x": 7, "y": 9, "type": "wisp", "ownerId": 1},

			{"x": 7, "y": 2, "type": "saeth-heavens-fury", "ownerId": 1},

			{"x": 12, "y": 4, "type": "dragon", "ownerId": 1},
			{"x": 13, "y": 4, "type": "demon-lord", "ownerId": 1},

			{"x": 6, "y": 15, "type": "valadorn", "ownerId": 0},

			{"x": 8, "y": 15, "type": "galamar", "ownerId": 0},

			{"x": 7, "y": 15, "type": "golem", "ownerId": 0},
			{"x": 5, "y": 15, "type": "elemental", "ownerId": 0},
			{"x": 6, "y": 16, "type": "wisp", "ownerId": 0},
			{"x": 7, "y": 16, "type": "catapult", "ownerId": 0},
			{"x": 10, "y": 14, "type": "dragon", "ownerId": 0}
		],
		"buildings": [
			{"x": 0, "y": 12, "type": "farm", "state": "normal"},
			{"x": 3, "y": 16, "type": "farm", "state": "normal"},
			{"x": 3, "y": 9, "type": "castle", "state": "normal", "ownerId": 1},
			{"x": 4, "y": 3, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 7, "y": 4, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 9, "y": 1, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 12, "y": 3, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 13, "y": 4, "type": "castle", "state": "normal", "ownerId": 1},
			{"x": 6, "y": 9, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 4, "y": 11, "type": "farm", "state": "normal"},
			{"x": 12, "y": 15, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 8, "y": 17, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 8, "y": 15, "type": "castle", "state": "normal", "ownerId": 0},
			{"x": 10, "y": 9, "type": "farm", "state": "destroyed"},
			{"x": 12, "y": 6, "type": "farm", "state": "destroyed"}
		],
		"terrain": {
			"x0y0": "water-1",
			"x0y1": "water-1",
			"x0y2": "water-1",
			"x0y3": "water-1",
			"x0y4": "water-1",
			"x0y5": "water-3",
			"x1y0": "stone-1",
			"x1y1": "forest-2",
			"x1y2": "stone-1",
			"x1y3": "water-1",
			"x1y4": "water-2",
			"x1y5": "water-1",
			"x2y0": "forest-1",
			"x2y1": "stone-1",
			"x2y2": "forest-1",
			"x2y3": "water-1",
			"x2y4": "water-1",
			"x2y5": "water-3",
			"x3y0": "stone-1",
			"x3y1": "stone-1",
			"x3y2": "forest-2",
			"x3y3": "water-1",
			"x3y4": "water-1",
			"x3y5": "water-1",
			"x4y0": "stone-1",
			"x4y1": "stone-1",
			"x4y2": "stone-1",
			"x4y3": "terra-1",
			"x4y4": "stone-1",
			"x4y5": "water-1",
			"x5y0": "stone-1",
			"x5y1": "forest-2",
			"x5y2": "terra-1",
			"x5y3": "stone-1",
			"x5y4": "forest-1",
			"x5y5": "water-1",
			"x6y0": "hill-1",
			"x6y1": "terra-1",
			"x6y2": "terra-2",
			"x6y3": "terra-1",
			"x6y4": "forest-1",
			"x6y5": "stone-1",
			"x7y0": "terra-1",
			"x7y1": "terra-5",
			"x7y2": "terra-3",
			"x7y3": "terra-1",
			"x7y4": "terra-1",
			"x7y5": "forest-2",
			"x8y0": "forest-2",
			"x8y1": "terra-1",
			"x8y2": "terra-4",
			"x8y3": "terra-1",
			"x8y4": "terra-1",
			"x8y5": "hill-1",
			"x9y0": "stone-1",
			"x9y1": "terra-1",
			"x9y2": "terra-1",
			"x9y3": "stone-1",
			"x9y4": "terra-1",
			"x9y5": "terra-1",
			"x10y0": "forest-1",
			"x10y1": "stone-1",
			"x10y2": "stone-1",
			"x10y3": "hill-1",
			"x10y4": "terra-1",
			"x10y5": "hill-1",
			"x11y0": "forest-2",
			"x11y1": "forest-1",
			"x11y2": "hill-1",
			"x11y3": "terra-1",
			"x11y4": "forest-2",
			"x11y5": "road-1",
			"x12y0": "forest-1",
			"x12y1": "forest-2",
			"x12y2": "forest-1",
			"x12y3": "terra-1",
			"x12y4": "terra-1",
			"x12y5": "road-1",
			"x13y0": "forest-2",
			"x13y1": "hill-1",
			"x13y2": "terra-2",
			"x13y3": "terra-1",
			"x13y4": "terra-1",
			"x13y5": "road-1",
			"x0y6": "water-1",
			"x1y6": "water-1",
			"x2y6": "water-1",
			"x3y6": "water-1",
			"x4y6": "water-1",
			"x5y6": "water-1",
			"x6y6": "water-1",
			"x7y6": "water-1",
			"x8y6": "water-1",
			"x9y6": "forest-1",
			"x10y6": "terra-1",
			"x11y6": "road-1",
			"x12y6": "terra-1",
			"x13y6": "forest-2",
			"x0y7": "stone-1",
			"x1y7": "forest-2",
			"x2y7": "water-1",
			"x3y7": "water-1",
			"x4y7": "water-2",
			"x5y7": "water-1",
			"x6y7": "water-3",
			"x7y7": "water-1",
			"x8y7": "water-1",
			"x9y7": "forest-1",
			"x10y7": "road-1",
			"x11y7": "road-1",
			"x12y7": "hill-1",
			"x13y7": "forest-2",
			"x0y8": "forest-1",
			"x1y8": "forest-1",
			"x2y8": "forest-2",
			"x3y8": "water-1",
			"x4y8": "water-1",
			"x5y8": "water-1",
			"x6y8": "water-1",
			"x7y8": "water-1",
			"x8y8": "stone-1",
			"x9y8": "road-1",
			"x10y8": "road-1",
			"x11y8": "terra-1",
			"x12y8": "stone-1",
			"x13y8": "forest-1",
			"x0y9": "road-1",
			"x1y9": "road-1",
			"x2y9": "stone-1",
			"x3y9": "terra-1",
			"x4y9": "terra-1",
			"x5y9": "stone-1",
			"x6y9": "terra-1",
			"x7y9": "hill-1",
			"x8y9": "road-1",
			"x9y9": "road-1",
			"x10y9": "terra-1",
			"x11y9": "forest-2",
			"x12y9": "water-1",
			"x13y9": "water-1",
			"x0y10": "hill-1",
			"x1y10": "road-1",
			"x2y10": "road-1",
			"x3y10": "road-1",
			"x4y10": "road-1",
			"x5y10": "road-1",
			"x6y10": "road-1",
			"x7y10": "road-1",
			"x8y10": "road-1",
			"x9y10": "terra-1",
			"x10y10": "water-1",
			"x11y10": "water-1",
			"x12y10": "water-1",
			"x13y10": "water-3",
			"x0y11": "stone-1",
			"x1y11": "hill-1",
			"x2y11": "terra-1",
			"x3y11": "road-1",
			"x4y11": "terra-1",
			"x5y11": "forest-1",
			"x6y11": "forest-2",
			"x7y11": "terra-1",
			"x8y11": "stone-1",
			"x9y11": "water-1",
			"x10y11": "water-1",
			"x11y11": "water-1",
			"x12y11": "water-1",
			"x13y11": "water-1",
			"x0y12": "terra-1",
			"x1y12": "terra-1",
			"x2y12": "forest-2",
			"x3y12": "road-1",
			"x4y12": "stone-1",
			"x5y12": "water-1",
			"x6y12": "water-1",
			"x7y12": "bridge-2",
			"x8y12": "water-1",
			"x9y12": "water-1",
			"x10y12": "water-2",
			"x11y12": "water-1",
			"x12y12": "water-1",
			"x13y12": "water-1",
			"x0y13": "forest-1",
			"x1y13": "stone-1",
			"x2y13": "terra-1",
			"x3y13": "road-1",
			"x4y13": "hill-1",
			"x5y13": "water-1",
			"x6y13": "water-1",
			"x7y13": "bridge-2",
			"x8y13": "water-1",
			"x9y13": "water-1",
			"x10y13": "water-1",
			"x11y13": "water-1",
			"x12y13": "forest-1",
			"x13y13": "forest-1",
			"x0y14": "water-1",
			"x1y14": "water-1",
			"x2y14": "stone-1",
			"x3y14": "road-1",
			"x4y14": "terra-1",
			"x5y14": "water-1",
			"x6y14": "water-1",
			"x7y14": "road-1",
			"x8y14": "hill-1",
			"x9y14": "forest-1",
			"x10y14": "terra-1",
			"x11y14": "terra-1",
			"x12y14": "terra-1",
			"x13y14": "forest-2",
			"x0y15": "water-1",
			"x1y15": "water-1",
			"x2y15": "forest-1",
			"x3y15": "road-1",
			"x4y15": "road-1",
			"x5y15": "road-1",
			"x6y15": "terra-1",
			"x7y15": "road-1",
			"x8y15": "terra-1",
			"x9y15": "terra-1",
			"x10y15": "hill-1",
			"x11y15": "terra-1",
			"x12y15": "terra-1",
			"x13y15": "stone-1",
			"x0y16": "water-2",
			"x1y16": "water-1",
			"x2y16": "water-1",
			"x3y16": "terra-1",
			"x4y16": "terra-1",
			"x5y16": "road-1",
			"x6y16": "road-1",
			"x7y16": "road-1",
			"x8y16": "road-1",
			"x9y16": "road-1",
			"x10y16": "road-1",
			"x11y16": "road-1",
			"x12y16": "road-1",
			"x13y16": "road-1",
			"x0y17": "water-1",
			"x1y17": "water-3",
			"x2y17": "water-1",
			"x3y17": "water-1",
			"x4y17": "water-1",
			"x5y17": "forest-1",
			"x6y17": "stone-1",
			"x7y17": "road-1",
			"x8y17": "terra-1",
			"x9y17": "forest-1",
			"x10y17": "forest-1",
			"x11y17": "forest-2",
			"x12y17": "stone-1",
			"x13y17": "forest-1"
		}
	};


}(window));
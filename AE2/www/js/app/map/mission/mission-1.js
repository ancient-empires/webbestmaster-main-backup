/*jslint white: true, nomen: true */
(function (win) {

	"use strict";
	/*global window */
	/*global */

	var langEn = win.APP.languages.en;

	win.APP.maps.mission_1 = {
		"type": "mission",
		"isOpen": true,
		"size": {"width": 12, "height": 12},
		"name": "TEMPLE RAIDERS",
		"name-ru": "RU TEMPLE RAIDERS",
		"maxPlayers": 2,
		"win": ['noEnemyUnit'], // allCastles, noEnemyUnit
		"defeat": ['commanderIsDead'], // 'galamarDead', 'valadornDead'

		"objective": 'Stop the raiders, King Galamar must survive.',
		"startBriefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Help us! We are under attack! These skeleton raiders have stolen the Crystal of Courage we swore to protect!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Captain, we must stop this menace at once!',
					img: 'i/face/soldier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Forward troops! Make these raiders pay!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.objective,
					text: 'Stop the raiders, King Galamar must survive.'
				}
			}
		],
		"n1Briefing": [
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'More attackers!',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'These are no raiders! They look like enemy troops! Be careful, Captain!',
					img: 'i/face/soldier.png'
				}
			}
		],
		"endBriefing": [
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'Thank you, your Majesty, you must help us return the Crystal as quickly as possible. Such an important relic must not fall into the wrong hands!',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'I am at your service. Who could possibly be after the Crystal?',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'right',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'I fear these criminals may be allied to a greater evil. It would be wise to consult with the High Priest at the Temple of Wisdom. He may know more of this.',
					img: 'i/face/tamplier.png'
				}
			},
			{
				popupName: 'briefing',
				from: 'left',
				cssClass: 'briefing bottom',
				popupData: {
					text: 'I shall send my brother Valadorn there immediately. I will take my troops and follow the attackers who got away.',
					img: 'i/face/galamar.png'
				}
			},
			{
				popupName: 'simple-notification',
				popupData: {
					header: langEn.victory,
					text: 'Go to next mission!'
				},
				onHide: {
					fn: 'backTo',
					args: ['select-level']
				}
			}
		],

		"objective-ru": 'RU - Stop the raiders, King Galamar must survive.',
		"startBriefing-ru": [
			{
				popupName: 'briefing',
				text: 'ru - Help us! We are under attack! These skeleton raiders have stolen the Crystal of Courage we swore to protect!',
				from: 'right',
				img: 'i/face/tamplier.png'
			}
		],
		"n1Briefing-ru": [],
		"endBriefing-ru": [],

		"cases": [
			{
				isDone: false,
				detect: 'noEnemyUnit',
				do: ['appendUnits', 'showBriefing'],
				units: [
					{
						type: 'archer',
						ownerId: 1,
						x: 4,
						y: 5
					},
					{
						type: 'soldier',
						ownerId: 1,
						x: 6,
						y: 5
					}
				],
				briefingName: 'n1Briefing'
			}
		],
		"units": [
			{"x": 10, "y": 3, "type": "skeleton", "ownerId": 1},
			{"x": 8, "y": 3, "type": "skeleton", "ownerId": 1},
			{"x": 4, "y": 9, "type": "galamar", "ownerId": 0},
			{"x": 3, "y": 10, "type": "archer", "ownerId": 0},
			{"x": 3, "y": 8, "type": "soldier", "ownerId": 0}
		],
		"buildings": [
			{"x": 1, "y": 1, "type": "well", "state": "normal"},
			{"x": 4, "y": 8, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 8, "y": 8, "type": "farm", "state": "normal", "ownerId": 0},
			{"x": 6, "y": 1, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 8, "y": 1, "type": "farm", "state": "normal", "ownerId": 1},
			{"x": 9, "y": 3, "type": "temple", "state": "normal"},
			{"x": 10, "y": 10, "type": "well", "state": "normal"}
		],
		"terrain": {
			"x0y0": "stone-1",
			"x0y1": "forest-1",
			"x0y2": "terra-4",
			"x0y3": "stone-1",
			"x0y4": "forest-2",
			"x0y5": "water-1",
			"x1y0": "forest-1",
			"x1y1": "terra-1",
			"x1y2": "stone-1",
			"x1y3": "forest-1",
			"x1y4": "forest-2",
			"x1y5": "water-1",
			"x2y0": "stone-1",
			"x2y1": "terra-1",
			"x2y2": "hill-1",
			"x2y3": "terra-1",
			"x2y4": "forest-1",
			"x2y5": "hill-1",
			"x3y0": "stone-1",
			"x3y1": "stone-1",
			"x3y2": "terra-1",
			"x3y3": "terra-1",
			"x3y4": "stone-1",
			"x3y5": "terra-1",
			"x4y0": "road-1",
			"x4y1": "road-1",
			"x4y2": "road-1",
			"x4y3": "road-1",
			"x4y4": "road-1",
			"x4y5": "stone-1",
			"x5y0": "forest-1",
			"x5y1": "hill-1",
			"x5y2": "forest-1",
			"x5y3": "terra-1",
			"x5y4": "road-1",
			"x5y5": "terra-1",
			"x6y0": "terra-1",
			"x6y1": "terra-1",
			"x6y2": "hill-1",
			"x6y3": "terra-1",
			"x6y4": "road-1",
			"x6y5": "forest-1",
			"x7y0": "hill-1",
			"x7y1": "terra-1",
			"x7y2": "forest-1",
			"x7y3": "forest-2",
			"x7y4": "road-1",
			"x7y5": "stone-1",
			"x8y0": "forest-2",
			"x8y1": "terra-1",
			"x8y2": "forest-2",
			"x8y3": "terra-1",
			"x8y4": "road-1",
			"x8y5": "hill-1",
			"x9y0": "stone-1",
			"x9y1": "terra-1",
			"x9y2": "terra-1",
			"x9y3": "terra-1",
			"x9y4": "road-1",
			"x9y5": "road-1",
			"x10y0": "forest-1",
			"x10y1": "stone-1",
			"x10y2": "terra-1",
			"x10y3": "hill-1",
			"x10y4": "road-1",
			"x10y5": "terra-1",
			"x11y0": "forest-1",
			"x11y1": "forest-2",
			"x11y2": "hill-1",
			"x11y3": "forest-1",
			"x11y4": "road-1",
			"x11y5": "forest-1",
			"x0y6": "water-2",
			"x1y6": "water-1",
			"x2y6": "water-1",
			"x3y6": "water-1",
			"x4y6": "hill-1",
			"x5y6": "stone-1",
			"x6y6": "forest-2",
			"x7y6": "hill-1",
			"x8y6": "terra-1",
			"x9y6": "road-1",
			"x10y6": "forest-2",
			"x11y6": "terra-1",
			"x0y7": "water-1",
			"x1y7": "water-1",
			"x2y7": "water-1",
			"x3y7": "water-1",
			"x4y7": "terra-1",
			"x5y7": "road-1",
			"x6y7": "road-1",
			"x7y7": "road-1",
			"x8y7": "road-1",
			"x9y7": "road-1",
			"x10y7": "stone-1",
			"x11y7": "forest-2",
			"x0y8": "forest-2",
			"x1y8": "terra-1",
			"x2y8": "terra-1",
			"x3y8": "hill-1",
			"x4y8": "terra-1",
			"x5y8": "road-1",
			"x6y8": "terra-1",
			"x7y8": "hill-1",
			"x8y8": "terra-1",
			"x9y8": "terra-1",
			"x10y8": "forest-1",
			"x11y8": "forest-1",
			"x0y9": "road-1",
			"x1y9": "road-1",
			"x2y9": "road-1",
			"x3y9": "road-1",
			"x4y9": "road-1",
			"x5y9": "road-1",
			"x6y9": "terra-1",
			"x7y9": "forest-2",
			"x8y9": "stone-1",
			"x9y9": "terra-1",
			"x10y9": "hill-1",
			"x11y9": "terra-2",
			"x0y10": "hill-1",
			"x1y10": "forest-2",
			"x2y10": "terra-1",
			"x3y10": "terra-1",
			"x4y10": "hill-1",
			"x5y10": "terra-1",
			"x6y10": "forest-1",
			"x7y10": "forest-1",
			"x8y10": "forest-2",
			"x9y10": "terra-1",
			"x10y10": "terra-1",
			"x11y10": "forest-2",
			"x0y11": "stone-1",
			"x1y11": "stone-1",
			"x2y11": "forest-1",
			"x3y11": "forest-2",
			"x4y11": "terra-1",
			"x5y11": "stone-1",
			"x6y11": "hill-1",
			"x7y11": "forest-1",
			"x8y11": "forest-1",
			"x9y11": "stone-1",
			"x10y11": "terra-1",
			"x11y11": "hill-1"
		}
	};

}(window));
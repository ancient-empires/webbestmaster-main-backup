(function (win) {

	"use strict";
	/*global window */

	win.langs = win.langs || {};

	win.langs.en = {
		language: 'language',
		languageName: 'english',
		units: {
			archer: {
				name: 'en archer',
				description: 'With their powerful bows archers can attack from a distance and are especially powerful against airborne enemies.'
			},
			bones: {
				name: 'en bones',
				description: 'Summoned by Wizards, these lifeless warriors are as strong as soldiers and deadly opponents on any battlefield.'
			},
			catapult: {
				name: 'en catapult',
				description: 'Catapults bring devastation wherever they go with their enormous attack range. However, their relative immobility and inability to attack up close make them vulnerable so guard them well. Catapults can either move or attack during a turn, but not do both.'
			},
			golem: {
				name: 'en golem',
				description: 'Forged out of living rock by the dwarf tribes of the Lost Mountains, Golems are slow but immensely strong in defence. A golem stationed in a building or a well defended mountain is very difficult to defeat.'
			},
			knight: {
				name: 'en knight',
				description: 'The Knight is very strong in attack and defence. Knight can also occupy farms and castles to produce troops and can be revived in the castle if they fall in battle.'
			},
			lizard: {
				name: 'en lizard',
				description: 'Descendants of the ancient amphibian empire spanning the marshlands in the east Lizards are proud warriors. They are immensely mobile (+3) and stronger in defence (+2) when in water.'
			},
			soldier: {
				name: 'en soldier',
				description: 'Hardworking and brave, soldiers form the backbone of any army. They are also the only unit that can capture farms to earn gold.'
			},
			spider: {
				name: 'en spider',
				description: 'Spiders are dangerous creatures whose natural habitat spans the unforgiving dark forests of the west. In addition to being highly mobile, spiders use a poisoned attack to weaken their opponents for one turn.'
			},
			wisp: {
				name: 'en wisp',
				description: 'These mystical beings of pure light radiate an aura which adds attack points to nearby friendly units. In close combat they are especially deadly against skeletons.'
			},
			wizard: {
				name: 'en wizard',
				description: 'The ancient guild of wizards are weak at close combat, but immensely useful as they can summon fighting skeletons from dead troops.'
			},
			wyvern: {
				name: 'en wyvern',
				description: 'These majestic flying beasts have ruled over the mountains of mist since ancient times. They are extremely mobile as well as deadly in attack on land, air and sea.'
			}
		},
		instructions: [
			'Ancient Empires is a thrilling strategy game putting you in the role of King Galamar as you fight to reclaim your kingdom.',
			'The flashing red/blue marks the movement range of a unit. A unit\'s range is determined by its type and the terrain it is on.',
			'Different types of terrain affect a unit\'s ability to move, attack and defend. For example, mountains add defence points but slow units down. When you tap to these terrain features appear at the bottom of the screen.',
			'When a unit has completed a move, unit becomes translucent. This means that it cannot be moved again until your next turn.',
			'You can move each unit only once each turn.',
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
		]

	};

}(window));
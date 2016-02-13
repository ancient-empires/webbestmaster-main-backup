var wheelsData = {

	count: 6,
	wheels: [
		{
			x: 18,
			y: 162,
			hi: 3
		},
		{
			x: 18 + 124,
			y: 162 - 33,
			hi: 4
		},
		{
			x: 18 + 124 * 2,
			y: 162 - 33 * 2,
			hi: 5
		},
		{
			x: 18 + 124 * 3,
			y: 162 - 33 * 3,
			hi: 6
		},
		{
			x: 18 + 124 * 4,
			y: 162 - 33 * 4,
			hi: 7
		},
		{
			x: 18 + 124 * 5,
			y: 162 - 33 * 4,
			hi: 7
		}
	],
	item: {
		w: 123,
		h: 66,
		hx2: 112, // h * 2
		list: {
			superWild: {
				h: 3,
				path: 'i/game/item/wild-x3.png'
			},
/*
			bonus: {
				h: 3,
				path: 'i/game/item/.png'
			},
*/
			wild: {
				h: 1,
				path: 'i/game/item/wild.png'
			},
			lion: {
				h: 1,
				path: 'i/game/item/lion.png'
			},
			scarecrow: {
				h: 1,
				path: 'i/game/item/scarecrow.png'
			},
			woodcutter: {
				h: 1,
				path: 'i/game/item/woodcutter.png'
			},
			girl: {
				h: 1,
				path: 'i/game/item/girl.png'
			}
/*
			crow: {
				h: 1,
				path: 'i/game/item/.png'
			},
			poppy: {
				h: 1,
				path: 'i/game/item/.png'
			},
			heart: {
				h: 1,
				path: 'i/game/item/.png'
			},
			club: {
				h: 1,
				path: 'i/game/item/.png'
			},
			diamond: {
				h: 1,
				path: 'i/game/item/.png'
			},
			spades: {
				h: 1,
				path: 'i/game/item/.png'
			}
*/

		}
	}

};

export default wheelsData;
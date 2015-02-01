(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.mathematics = {
		name: 'Mathematics',
		lang: 'en',
		questions: [
			{
				title: 'Eight 8\'s',
				text: 'How can you add eight 8\'s to get the number 1,000? (only use addition)',
				
				answer: '888 + 88 + 8 + 8 + 8 = 1,000'
			},
			{
				title: 'Two Fathers and Two Sons Riddle',
				text: 'Two fathers and two sons sat down to eat eggs for breakfast. They ate exactly three eggs, each person had an egg. The riddle is for you to explain how.',
				
				answer: 'One of the \'fathers\' is also a grandfather. Therefore the other father is both a son and a father to the grandson. In other words, the one father is both a son and a father.'
			},
			{
				title: 'Three Guys at A Hotel Riddle',
				text: 'Three guys rent a hotel room for the night. When they get to the hotel they pay the $30 fee, then go up to their room. Soon the bellhop brings up their bags and gives the lawyers back $5 because the hotel was having a special discount that weekend. So the three lawyers decide to each keep one of the $5 dollars and to give the bellhop a $2 tip. However, when they sat down to tally up their expenses for the weekend the could not explain the following details:<br><br>Each one of them had originally paid $10 (towards the initial $30), then each got back $1 which meant that they each paid $9. Then they gave the bellhop a $2 tip. HOWEVER, 3 * $9 + $2 = $29<br><br>The guys couldn\'t figure out what happened to the other dollar. After all, the three paid out $30 but could only account for $29.<br><br>Can you determine what happened?',
				
				answer: 'There are many ways of explaining/thinking about this truly brain bending riddle! It all boils down to the fact that the lawyers\'s math is incorrect.<br><br>They did NOT spend $9 * 3 + $2. They spent exactly $27 dollars. $25 for the room and $2 for the tip. Remember they got exactly $3, in total back. Another way to think about the answer to this rР°iddle is to just pretend that the bellhop refunded $3 to the lawyers (rather than giving them $5 and receiving $2 back).If the lawyers get $3 back and each takes $1. They they spent exactly $27 dollars.'
			},
			{
				title: 'Foreign Country Riddle',
				text: 'In a certain country ВЅ of 5 = 3. If the same proportion holds, what is the value of 1/3 of 10 ?',
				
				answer: 'The answer is 4_!_http://www.mathwarehouse.com/riddles/img/certain-country.gif'
			},

			{
				title: 'Three Brothers on a Farm',
				text: 'Three brothers live in a farm. They agreed to buy new seeds: Adam and Ben would go and Charlie stayed to protect fields. Ben bought 75 sacks of wheat in the market whereas Adam bought 45 sacks. At home, they split the sacks equally. Charlie had paid 1400 dollars for the wheat. How much dollars did Ben and Adam get of the sum, considering equal split of the sacks?',
				
				answer: 'Every farmers part is 1/3(45+75) = 40 sacks.<br><br>Charlie paid $1400 for 40 sacks, then 1 sack costs $1400/40 = $35/sack.<br><br>Adam got $35*(45-40)=35*5 = $175.<br><br>Ben got $35*(75-40)=35*35 = $1225.<br><br>Answer: Ben $1225, Adam $175'
			},
			{
				title: 'Odd number',
				text: 'I am an odd number. Take away one letter and I become even. What number am I?',
				
				answer: 'Seven (take away the \'s\' and it becomes \'even\').'
			},
			{
				title: 'Sally and her mother',
				text: 'Sally is 54 years old and her mother is 80, how many years ago was Sally\'s mother three times her age?',
				
				answer: '41 years ago, when Sally was 13 and her mother was 39.'
			},
			{
				title: 'Three numbers',
				text: 'Which 3 numbers have the same answer whether they\'re added or multiplied together? ',
				
				answer: '1, 2 and 3.'
			},
			{
				title: '5 apples',
				text: 'There is a basket containing 5 apples, how do you divide the apples among 5 children so that each child has 1 apple while 1 apple remains in the basket?',
				
				answer: '4 children get 1 apple each while the fifth child gets the basket with the remaining apple still in it.'
			},
			{
				title: 'Three digit number.',
				text: 'There is a three digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number? ',
				
				answer: '141'
			},
			{
				title: 'Ship in a port.',
				text: 'A ship anchored in a port has a ladder which hangs over the side. The length of the ladder is 200cm, the distance between each rung in 20cm and the bottom rung touches the water. The tide rises at a rate of 10cm an hour. When will the water reach the fifth rung? ',
				
				answer: 'The tide raises both the water and the boat so the water will never reach the fifth rung.'
			},
			{
				title: 'MIDNIGHT',
				text: 'If it were two hours later, it would be half as long until midnight as it would be if it were an hour later.<br>What time is it now?',
				
				answer: '9 pm'
			},
			{
				title: 'FILLING THE POOL',
				text: 'A swimming pool has four faucets. The first can fill the entire pool with water in two days, the second - in three days, the third - in four days, and the last one can fill the pool in 6 hours.<br>How long will it take to fill the pool using all 4 faucets together?',
				
				answer: 'Because there are 24 hours in one day, in one hour fills the first tap 1/48, the second tap 1/72, the third tap 1/96 and the fourth tap fills 1/6 of the reservoir. That is all together (6+4+3+48) / 288 = 61/288. The reservoir will be full in 288/61 hours, which is 4 hours 43 minutes and about 17 seconds.'
			},
			{
				title: 'FILLING THE POOL',
				text: 'A swimming pool has four faucets. The first can fill the entire pool with water in two days, the second - in three days, the third - in four days, and the last one can fill the pool in 6 hours.<br>How long will it take to fill the pool using all 4 faucets together?',
				
				answer: 'Because there are 24 hours in one day, in one hour fills the first tap 1/48, the second tap 1/72, the third tap 1/96 and the fourth tap fills 1/6 of the reservoir. That is all together (6+4+3+48) / 288 = 61/288. The reservoir will be full in 288/61 hours, which is 4 hours 43 minutes and about 17 seconds.'
			},
			{
				title: '8 jars',
				text: 'A snail is at the bottom of a 30 foot well. Every hour the snail is able to climb up 3 feet, then immediately slide back down 2 feet. How many hours does it take for the snail to get out of the well?',
				
				answer: '28 hours. The snail is travelling at one foot per hour, except on the 28th hour the snail has already reached the top of the well, so it will not slide down the 2 feet. '
			},
			{
				title: 'Equality',
				text: 'If 7 is equal to 13 then what is 16 equal to?',
				
				answer: '31, because I multiplied it by 2 and subtracted one.'
			},
			{
				title: 'Lilly and cans',
				text: 'Lilly has 15 pop can tabs all together they equal $30. She dropped one and lost 2. But she has $26. Explain.',
				
				answer: 'One pop can tab equals $2. She lost 2 so there goes $4. She dropped one but didn\'t lose it, so she has $26.'
			},
			{
				title: 'Numbers',
				text: 'How do you write 23 using only the number 2? 34 using only the number 3? 56 using only the number 5? 100 using only the number 9?',
				
				answer: 'By using fractions. 22+2/2=23, 33+3/3=34, 55+5/5=56, 99+9/9=100'
			},
			{
				title: 'Black and white socks',
				text: 'In a drawer you have black socks and white socks. They are not stored away in pairs. Without looking, how many times will you have to reach into the drawer to come out with a matching pair?',
				
				answer: 'To be guaranteed a pair you will have to reach in the drawer three times.'
			},
			{
				title: 'Gallon of water',
				text: 'You have a 4 gallon and a 7 gallon jug of water. How can you measure exactly 6 gallons of water using these two jugs?',
				
				answer: 'Fill up the 7 gallon jug completely. Now pour as much of the 7 gallons as you can into the 4 gallon jug. You should have 3 gallons in the 7 gallon jug. Dump out the 4 gallon jug, pour the 3 gallons from the 7 gallon jug into the 4 gallon container. Finally, fill up the 7 gallon jug completely and pour what you can, 1 gallon, into the 4 gallon jug until it is full. Taking 1 gallon from seven gallons leaves 6 gallons.'
			},
			{
				title: 'A man and two sons',
				text: 'A man weighing 14 stone and his two sons weighing 7 stone each were stranded on an island. All they had to get off the island was a small boat, but it could only hold 14 stone. How did the man and his sons get off the island?',
				
				answer: 'The two sons get in the boat and go back to shore, one jumps out, the other rows back to the island and gets out. The dad gets in and rides back to shore where he jumps out and the other son gets back in. The son goes back to the island and collects the other son and together the two of them row back to the safety of the shore!'
			},
			{
				title: '10 candles',
				text: '10 candles stand burning in a dining room. A strong breeze blows in through an open window and extinguishes 3 of them. Assuming the wind doesn\'t extinguish any more candles, how many candles do you have left in the end?',
				
				answer: '3. The 7 candles that manage to stay lit will melt down completely. The only candles that remain in the end are the 3 that are extinguished by the wind and therefore stay intact.'
			},
			{
				title: 'Numbers',
				text: 'This riddle must be done IN YOUR HEAD and NOT using paper and pen or a calculator. Try it! Take 1000 and add 40 to it. Now add another 1000 to it. Now add 30. And another 1000. Now add 20. Now add another 1000. Now add 10. What is the total?',
				
				answer: 'Did you get 5000? Way to go. Most of us did, but that\'s wrong. The answer is 4100. Believe it: use a calculator.'
			},
			{
				title: 'Boy and his sister',
				text: 'A boy and his big sister are sitting around the kitchen table chatting. The boy says, "If I take two years away from my age and gave them to you, you\'d be twice my age." The sister added, "Why don\'t you just give me one more and then I\'ll be three times you age." How old are the siblings?',
				
				answer: 'They are both 6 years old. They had to have been born with in one year of each other.'
			}

		]

	};

}(window));
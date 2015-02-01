<<<<<<< HEAD
(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.yahooInterviewQuestions = {
		name: 'Yahoo interview questions',
		lang: 'en', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Interesting Gold Bar Interiew Puzzle',
				text: 'You are a king of an empire. You have a servant working in your palace. He works all the seven days and you only pay him in the form of gold bar. You must pay the worker for his work every day at the end of the day.  If you are only able to make two breaks in the gold bar, how will you pay the servant if the servant works for the equal time every day and thus equal amount must be paid at the end of the day?',
				
				answer: 'If you are thinking of how to cut in such a way that you are able to make seven equal pieces, you are thinking in the wrong direction. You should give more stress on how to make the transaction with the worker.<br>You have to break the gold bar two times so you have the following sizes of the bar:<br>1/7 ---- Bar A<br>2/7 ---- Bar B<br>4/7 ---- Bar C<br>When the day 1 ends:<br>Give Bar A (You remain with Bar B and Bar C; Worker possess - Bar A)<br>When the day 2 ends:<br>Give Bar B and take the Bar A back (You remain with Bar A and Bar C; Worker possess - Bar B)<br>When the day 3 ends:<br>Give Bar A (You remain with Bar C; Worker possess - Bar A and Bar B)<br>When the day 4 ends:<br>Give Bar C and take back Bar A and Bar B (You remain with Bar A and Bar B; Worker possess - Bar C)<br>When the day 5 ends:<br>Give Bar A (You remain with Bar B; Worker possess - Bar A and Bar C)<br>When the day 6 ends:<br>Give Bar B and take back Bar A (You remain with Bar A; Worker possess - Bar B and Bar C)<br>When the day 7 ends:<br>Give Bar A (You remain with no bar; Worker possess - Bar A, Bar B and Bar C)<br>Thus by the end of seven days, you have taken care of everything.'
			},
			{
				title: 'Hard Yahoo Logical Mathematics Interview Question',
				text: 'In an old town, there lived a pot maker who wanted to sell the last stock of his craft to a merchant. When the merchant asked him how many pots he had, he replied that he was unable to count after 100. But he gave him certain clues to figure out for himself:<br>If the number of pots are divided by two, there will be one left.<br>If they are divided by three, there will be one left.<br>If they are divided by four, there will be one left.<br>If they are divided by five, there will be one left.<br>If they are divided by six, there will be one left.<br>If they are divided by seven, there will be one left.<br>If they are divided by eight, there will be one left.<br>If they are divided by nine, there will be one left.<br>If they are divided by ten, there will be one left.<br>But if they are divided by eleven, there will be no pot left.<br>Can you find the number of pots, the pot maker possess? ',
				
				answer: 'You may solve this question with different methods but we are only giving away one.<br>What you have to do in that method is look for a number x to which all the numbers from 2 to 10 divide evenly. Multiplying the numbers together (2*3*4*5*6*7*8*9*10) will give you a big number but we have to find a smaller possibility. What we can do is find the prime factors, a subset of which we can use to form a number from 2 to 10.<br>2*2*2*3*3*5*7 will certainly give us what we need. The product is 2520 and it is the lowest possible number which can be evenly divided by 2-10.<br>Now if we add 1 to the number, the result will be 2521 which will satisfy all the conditions from 2 to 10. But will not hold true in case of 11.<br>If you calculate, you will see that you can multiply 2520 by any integer and add 1 to it to satisfy all the conditions except the divisibility by 11. What we need is an integer Y that can be multiplied by 2520 and if we add 1 to the product, it becomes divisible by 11.<br>2520/11 leaves a remainder 1. Now let us keep increasing the number of 2520. Suppose if we divide two 2520 by 11, the remainder then will be 1 + 1 = 2. If we keep going on like that. Ten 2520 when divided by 11 will give 10 as remainder and if we add 1 to them, it will be completely divisible. Also it will satisfy all the conditions from 2-10.<br>Thus our answer is 25201. '
			},
			{
				title: 'Yahoo Interview Anagram Puzzle',
				text: 'Following are some four letter words. If an alphabet is added to each one of them and they are rearranged, they can form a five letter word. Also, the thus found seven letters are an anagram to a seven letter word.<br>Can you find all that?<br>The words are:<br>Mail<br>Exit<br>Gosh<br>City',
				
				answer: 'MAIL + C = CLAIM<br>EXIT + S = EXIST<br>GOSH + T = GHOST<br>CITY + H = ITCHY<br>NEWT + I = TWINE<br>DENY + E = NEEDY<br>MINI + M = MINIM<br><br>The seven letters are CSTHIEM which can be rearranged to form CHEMIST. '
			},
			{
				title: 'Yahoo Interview Tricky Question',
				text: 'Select any four numbers out of the following such that the sum is twelve.<br>1 6 1<br>6 1 6<br>1 6 1<br>6 1 6',
				
				answer: 'This is quite a tricky question. To solve it you must turn the grid upside down and then you will have the following numbers:<br>9 1 9<br>1 9 1<br>9 1 9<br>1 9 1<br>Now if you select a 9 and three 1, the sum will be 12.<br>It\'s quite easy to solve but what matters is if you can approach the possibility of it.'
			},
			{
				title: 'Guess the Password Interview Puzzle',
				text: 'I was working in a highly secured company that needed to keep highest possible encryption. On a random day I logged into my system and it said password denied. Then it caught my attention that the passwords were changed randomly on any day for maximum security and that it could only be obtained from the boss in that case. I went to the cabin of my boss and said, "Boss, my old password is out of date." He replied, "Yes I know about it. Though your new password is different, it has the same amount of letters as your previous one and also four of the letters are same." Can you deduce the old password and the new password?',
				
				answer: 'Old password - Out of Date. New Password - Different. Both of them are given in the statements if you read closely. '
			},
			{
				title: 'Tricky Clock Interview Puzzle',
				text: 'If you see a reflection of an analogue clock which shows 2:30, what will be the original time?',
				
				answer: 'Though the question is very simple, most of the people answer it wrong. The real time will be 9:30. If you don\'t believe us, take a clock with 9:30 time in front of the mirror and look for yourself.'
			},
			{
				title: 'Jumbled Words Interview Question',
				text: 'If you look closely at the letters mentioned below, you will find four related words that have been merged and jumbled up. Can you? RENM IPUR TNTU SAWS GERM NIMU',
				
				answer: 'Spring, summer, autumn and winter.'
			},
			{
				title: 'Yahoo Logical Mathematics Interview Question',
				text: 'Suppose that you are building a tower using play bricks. A white brick is 19 mm tall whereas a black brick is 21 mm tall.  If you want to build a tower 562 mm tall, how many of each will be required?',
				
				answer: 'According to the question<br>19W + 21B = 562 (where W stands for white bricks and B stands for black bricks)<br>The easiest way to solve this problem would be putting in the values for W, till we achieve an answer which is divisible by 21.<br>Why? Because it is must for the statement to be true.<br>If W = 1<br>21B = 562 - 19 = 543 i.e. not divisible<br>If W = 2<br>21B = 562 - 38 = 524 i.e. not divisible<br>If W = 3<br>21B = 562 - 57 = 505 i.e. not divisible<br>If W = 4<br>21B = 562 - 76 = 486 i.e. not divisible<br>If W = 5<br>21B = 562 - 95 = 467 i.e. not divisible<br>If W = 6<br>21B = 562 - 114 = 448 i.e. not divisible<br>If W = 7<br>21B = 562 - 133 = 429 i.e. not divisible<br>If W = 8<br>21B = 562 - 152 = 410 i.e. not divisible<br>If W = 9<br>21B = 562 - 171 = 391 i.e. not divisible<br>If W = 10<br>21B = 562 - 190 = 372 i.e. not divisible<br>If W = 11<br>21B = 562 - 209 = 353 i.e. not divisible<br>If W = 12<br>21B = 562 - 228 = 334 i.e. not divisible<br>If W = 13<br>21B = 562 - 247 = 315 i.e. divisible<br>Thus W must be 13 and if W = 13<br>B = 315/21 = 15<br>Thus to form that tower, 13 white bricks and 15 black bricks will be required. '
			},
			{
				title: 'Salary Interview Question',
				text: 'I got my salary on Sunday. On Monday, I spent a quarter of that in buying a new smartphone. On Tuesday, I spent one third of the remaining in buying a music player. On Wednesday, I spent half of the remaining on buying new furniture. On Thursday, I was left with just $125 and I bought an old laptop from that. What is the salary I received on Sunday?',
				
				answer: 'Let us move backwards.<br>On Thursday, I had $125.<br>On Wednesday, I had $125 (1 / one half) = $250<br>On Tuesday I had $250 (1 / two third) = $375<br>On Monday, I had $375 (1 / three quarters) = $500<br>Thus my salary is $500. '
			},
			{
				title: 'Yahoo Tricky Series Interview Question',
				text: 'Find the next term in the series 1, 3/2, 5/4, 7/8, __?',
				
				answer: 'This one is a tricky series and here we shall tell you a common way to solve the series problem when fractions are involved. You will find that so many series can be solved the way this one is solved.<br>Just look at the numerator and denominator separately<br>Numerators = 1, 3, 5, 7<br>Two is added to each one, thus the next number will be 9.<br>Denominators = 1, 2, 4, 8<br>Every next term is the double of previous, thus the next term will be 16.<br>So, the next term in the series will be 9/16.'
			}

		]

	};

=======
(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.yahooInterviewQuestions = {
		name: 'Yahoo interview questions',
		lang: 'en', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Interesting Gold Bar Interiew Puzzle',
				text: 'You are a king of an empire. You have a servant working in your palace. He works all the seven days and you only pay him in the form of gold bar. You must pay the worker for his work every day at the end of the day.  If you are only able to make two breaks in the gold bar, how will you pay the servant if the servant works for the equal time every day and thus equal amount must be paid at the end of the day?',
				
				answer: 'If you are thinking of how to cut in such a way that you are able to make seven equal pieces, you are thinking in the wrong direction. You should give more stress on how to make the transaction with the worker.<br>You have to break the gold bar two times so you have the following sizes of the bar:<br>1/7 ---- Bar A<br>2/7 ---- Bar B<br>4/7 ---- Bar C<br>When the day 1 ends:<br>Give Bar A (You remain with Bar B and Bar C; Worker possess - Bar A)<br>When the day 2 ends:<br>Give Bar B and take the Bar A back (You remain with Bar A and Bar C; Worker possess - Bar B)<br>When the day 3 ends:<br>Give Bar A (You remain with Bar C; Worker possess - Bar A and Bar B)<br>When the day 4 ends:<br>Give Bar C and take back Bar A and Bar B (You remain with Bar A and Bar B; Worker possess - Bar C)<br>When the day 5 ends:<br>Give Bar A (You remain with Bar B; Worker possess - Bar A and Bar C)<br>When the day 6 ends:<br>Give Bar B and take back Bar A (You remain with Bar A; Worker possess - Bar B and Bar C)<br>When the day 7 ends:<br>Give Bar A (You remain with no bar; Worker possess - Bar A, Bar B and Bar C)<br>Thus by the end of seven days, you have taken care of everything.'
			},
			{
				title: 'Hard Yahoo Logical Mathematics Interview Question',
				text: 'In an old town, there lived a pot maker who wanted to sell the last stock of his craft to a merchant. When the merchant asked him how many pots he had, he replied that he was unable to count after 100. But he gave him certain clues to figure out for himself:<br>If the number of pots are divided by two, there will be one left.<br>If they are divided by three, there will be one left.<br>If they are divided by four, there will be one left.<br>If they are divided by five, there will be one left.<br>If they are divided by six, there will be one left.<br>If they are divided by seven, there will be one left.<br>If they are divided by eight, there will be one left.<br>If they are divided by nine, there will be one left.<br>If they are divided by ten, there will be one left.<br>But if they are divided by eleven, there will be no pot left.<br>Can you find the number of pots, the pot maker possess? ',
				
				answer: 'You may solve this question with different methods but we are only giving away one.<br>What you have to do in that method is look for a number x to which all the numbers from 2 to 10 divide evenly. Multiplying the numbers together (2*3*4*5*6*7*8*9*10) will give you a big number but we have to find a smaller possibility. What we can do is find the prime factors, a subset of which we can use to form a number from 2 to 10.<br>2*2*2*3*3*5*7 will certainly give us what we need. The product is 2520 and it is the lowest possible number which can be evenly divided by 2-10.<br>Now if we add 1 to the number, the result will be 2521 which will satisfy all the conditions from 2 to 10. But will not hold true in case of 11.<br>If you calculate, you will see that you can multiply 2520 by any integer and add 1 to it to satisfy all the conditions except the divisibility by 11. What we need is an integer Y that can be multiplied by 2520 and if we add 1 to the product, it becomes divisible by 11.<br>2520/11 leaves a remainder 1. Now let us keep increasing the number of 2520. Suppose if we divide two 2520 by 11, the remainder then will be 1 + 1 = 2. If we keep going on like that. Ten 2520 when divided by 11 will give 10 as remainder and if we add 1 to them, it will be completely divisible. Also it will satisfy all the conditions from 2-10.<br>Thus our answer is 25201. '
			},
			{
				title: 'Yahoo Interview Anagram Puzzle',
				text: 'Following are some four letter words. If an alphabet is added to each one of them and they are rearranged, they can form a five letter word. Also, the thus found seven letters are an anagram to a seven letter word.<br>Can you find all that?<br>The words are:<br>Mail<br>Exit<br>Gosh<br>City',
				
				answer: 'MAIL + C = CLAIM<br>EXIT + S = EXIST<br>GOSH + T = GHOST<br>CITY + H = ITCHY<br>NEWT + I = TWINE<br>DENY + E = NEEDY<br>MINI + M = MINIM<br><br>The seven letters are CSTHIEM which can be rearranged to form CHEMIST. '
			},
			{
				title: 'Yahoo Interview Tricky Question',
				text: 'Select any four numbers out of the following such that the sum is twelve.<br>1 6 1<br>6 1 6<br>1 6 1<br>6 1 6',
				
				answer: 'This is quite a tricky question. To solve it you must turn the grid upside down and then you will have the following numbers:<br>9 1 9<br>1 9 1<br>9 1 9<br>1 9 1<br>Now if you select a 9 and three 1, the sum will be 12.<br>It\'s quite easy to solve but what matters is if you can approach the possibility of it.'
			},
			{
				title: 'Guess the Password Interview Puzzle',
				text: 'I was working in a highly secured company that needed to keep highest possible encryption. On a random day I logged into my system and it said password denied. Then it caught my attention that the passwords were changed randomly on any day for maximum security and that it could only be obtained from the boss in that case. I went to the cabin of my boss and said, "Boss, my old password is out of date." He replied, "Yes I know about it. Though your new password is different, it has the same amount of letters as your previous one and also four of the letters are same." Can you deduce the old password and the new password?',
				
				answer: 'Old password - Out of Date. New Password - Different. Both of them are given in the statements if you read closely. '
			},
			{
				title: 'Tricky Clock Interview Puzzle',
				text: 'If you see a reflection of an analogue clock which shows 2:30, what will be the original time?',
				
				answer: 'Though the question is very simple, most of the people answer it wrong. The real time will be 9:30. If you don\'t believe us, take a clock with 9:30 time in front of the mirror and look for yourself.'
			},
			{
				title: 'Jumbled Words Interview Question',
				text: 'If you look closely at the letters mentioned below, you will find four related words that have been merged and jumbled up. Can you? RENM IPUR TNTU SAWS GERM NIMU',
				
				answer: 'Spring, summer, autumn and winter.'
			},
			{
				title: 'Yahoo Logical Mathematics Interview Question',
				text: 'Suppose that you are building a tower using play bricks. A white brick is 19 mm tall whereas a black brick is 21 mm tall.  If you want to build a tower 562 mm tall, how many of each will be required?',
				
				answer: 'According to the question<br>19W + 21B = 562 (where W stands for white bricks and B stands for black bricks)<br>The easiest way to solve this problem would be putting in the values for W, till we achieve an answer which is divisible by 21.<br>Why? Because it is must for the statement to be true.<br>If W = 1<br>21B = 562 - 19 = 543 i.e. not divisible<br>If W = 2<br>21B = 562 - 38 = 524 i.e. not divisible<br>If W = 3<br>21B = 562 - 57 = 505 i.e. not divisible<br>If W = 4<br>21B = 562 - 76 = 486 i.e. not divisible<br>If W = 5<br>21B = 562 - 95 = 467 i.e. not divisible<br>If W = 6<br>21B = 562 - 114 = 448 i.e. not divisible<br>If W = 7<br>21B = 562 - 133 = 429 i.e. not divisible<br>If W = 8<br>21B = 562 - 152 = 410 i.e. not divisible<br>If W = 9<br>21B = 562 - 171 = 391 i.e. not divisible<br>If W = 10<br>21B = 562 - 190 = 372 i.e. not divisible<br>If W = 11<br>21B = 562 - 209 = 353 i.e. not divisible<br>If W = 12<br>21B = 562 - 228 = 334 i.e. not divisible<br>If W = 13<br>21B = 562 - 247 = 315 i.e. divisible<br>Thus W must be 13 and if W = 13<br>B = 315/21 = 15<br>Thus to form that tower, 13 white bricks and 15 black bricks will be required. '
			},
			{
				title: 'Salary Interview Question',
				text: 'I got my salary on Sunday. On Monday, I spent a quarter of that in buying a new smartphone. On Tuesday, I spent one third of the remaining in buying a music player. On Wednesday, I spent half of the remaining on buying new furniture. On Thursday, I was left with just $125 and I bought an old laptop from that. What is the salary I received on Sunday?',
				
				answer: 'Let us move backwards.<br>On Thursday, I had $125.<br>On Wednesday, I had $125 (1 / one half) = $250<br>On Tuesday I had $250 (1 / two third) = $375<br>On Monday, I had $375 (1 / three quarters) = $500<br>Thus my salary is $500. '
			},
			{
				title: 'Yahoo Tricky Series Interview Question',
				text: 'Find the next term in the series 1, 3/2, 5/4, 7/8, __?',
				
				answer: 'This one is a tricky series and here we shall tell you a common way to solve the series problem when fractions are involved. You will find that so many series can be solved the way this one is solved.<br>Just look at the numerator and denominator separately<br>Numerators = 1, 3, 5, 7<br>Two is added to each one, thus the next number will be 9.<br>Denominators = 1, 2, 4, 8<br>Every next term is the double of previous, thus the next term will be 16.<br>So, the next term in the series will be 9/16.'
			}

		]

	};

>>>>>>> 7a0fb1fe99c92abf88459e8fe8d30f908a8d64f1
}(window));
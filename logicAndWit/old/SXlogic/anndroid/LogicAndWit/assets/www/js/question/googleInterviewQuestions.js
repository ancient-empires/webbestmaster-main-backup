<<<<<<< HEAD
(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.googleInterviewQuestions = {
		name: 'Google interview questions',
		lang: 'en', // ru || en
		//вЂ™
		questions: [

			{
				title: 'Warden and Prisoners Interview Question',
				text: '23 selected prisoners are summoned by the warden. He gives them a choice of playing a game with him that might ensure their escape from the prison or might as well lead them towards painful death. The prisoners think that this is the only chance for them to be free again and agrees to him. The warden tell them that there is a room which has just two switches which are labelled 1 or 2. The switches may be up or down and the condition is not known at present. They are not connected to anything. The warden may select any prisoner on any day and send him to the switch room. The prisoner will have to select any one switch and reverse its position i.e. if it is up, he will turn it down and if it is down, he will turn it up. He can and must only flip one switch and then he will be confined to his cell again. The warden may choose the same prisoner more than one time and he will be choosing completely randomly. But at a certain point of time, everyone will have visited the switch room. And at any time, the prisoners may declare that everyone has visited the room at least once. If they will be true, they will be set free but if they will be wrong, they will be killed. The warden gives them an hour to plan any kind of strategy and then they will be confined to their respective cells and will never be allowed to meet. What strategy can help them be free?',
				
				answer: 'Everyone will appoint any one person as a leader. Now everyone must follow some steps. Every prisoner will flip the first switch up at the first opportunity and also at the second opportunity. If the first switch is already up or they have flipped it up two times already, then they will flip the second switch. The leader however will have a different routine. He is the only one who will flip the switch down the first switch. Suppose if the switch is already down, he will flip the second switch. Also he will keep a count and when he has flipped the first switch down 44 times, he will declare that every prisoner has visited the room.  This is because once the leader has flipped down the switch 44 times, he will know that everyone has visited the room. If the switch was down initially, the other 22 prisoners will turn it up two times. If the first switch was already up, there will be one prisoner who will flip the switch up only once and the rest will do it twice. Now this trick won\'t work when the leader has flipped the switch 23 times. Consider the fact that it is possible that 12 prisoners randomly and the leader have been taken to the switch room 24 times and the rest have not been taken till then. Remember that the first switch might have been up in the beginning itself. Thus the prisoners must flip the switch up twice. If they do it just once, the leader will never know whether to count till 22 or 23.'
			},
			{
				title: 'Two Eggs Interview Problem',
				text: 'Eggs have quite a unique property. They may be extremely fragile that they may break by mere a drop from your hand. However, they may not break even if they are dropped from the 100th floor. That is exactly what you have in this problem. You have two identical eggs and you have access to a 100 story building. The question is how many drops you will make before you can find out the highest possible floor of the building from which the egg can be dropped without breaking. Remember you only have two eggs to break.',
				
				answer: 'Let us first assume that the number of drops required are N.<br>If the egg breaks at maximum number of tries, we will have N - 1 drops till it does not break. Thus we must drop the first egg from the height N. Now if the first drop of the first egg does not break the egg, we can have N - 2 drops for the second egg if the first egg breaks in the second drop.<br>Let us put that into a valid example for better understanding. Suppose we need 16 drops. Now let us drop the egg from the sixteenth floor, if it breaks, we will try all the floors below sixteen. Suppose it does not breaks, then we have 15 drops left and we will drop it from 16+15+1 = 32nd floor. This is because if it breaks at 32nd floor, we can try all the way down to 17th floor in fourteen tries making the total tries to be 16.<br><br>Let us assume that 16 is the correct answer<br>1 + 15 16 if breaks at 16 checks from 1 to 15 in 15 drops<br>1 + 14 31 if breaks at 31 checks from 17 to 30 in 14 drops<br>1 + 13 45.....<br>1 + 12 58<br>1 + 11 70<br>1 + 10 81<br>1 + 9 91<br>1 + 8 100 we can easily do in the end as we have enough drops to complete the task.<br>Seeking the above case, we must note that we have achieved it in 14 or 14 drops but we still need to find out the optimal one. We know from above that the optimal one will require 0 linear trials in the last step.<br>Thus we can say that<br>(1+p) + (1+ (p-1)) + (1+ (p-2)) + .........+ (1+0) >= 100.<br>Let 1+p=q which is the answer we are looking for<br>q (q+1)/2 >=100<br>q=14<br>Thus the optimal number of drops required are 14.<br>Drops will be tried at floor number 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100. How? Just move up 14, 13, 12 .... Floor till it breaks or does not.'
			},
			{
				title: 'Fastest Horse Interview Puzzle',
				text: 'You are provided with twenty five different horses and you must find out who are the fastest horses. You can conduct a race of five horses only at one time. There is no point in the race where you can find out the actual speed of a horse in a race.  How many races will it take to help you determine the fastest three horses?',
				
				answer: 'Seven. Dividing the horses in a group of five, we will have five different groups of horses. A race will be conducted separately for each group which will help us find the fastest three horses in every group. We have used five different races till now. Now we can have a race among the winners from every race which will help us determine the fastest of them all. We have used the sixth race. The second fastest horse can be the one who came second in the sixth race or the second fastest horse in the finals winners\' first race. If we look at the first case, the third fastest horse can be the third fastest horse in the sixth race or the second fastest horse in either the fastest or second fastest horse first race. If we look at the other case, the third fastest horse may be the second fastest in the sixth race or the third fastest in the final winners\' first race. If you calculate our assumptions, we have five more horses to race (seventh race) and determine the second fastest and the third fastest horse. '
			},
			{
				title: 'Nine Hats Interview Puzzle',
				text: 'Nine brilliant most students were summoned by an inspecting professor. He gave them a situation and told them that he is having nine hats. The hats are either red colored or blue colored as told by the professor. He also tells them that he have at least one red colored hat and the number of blue hats are greater than the red hats.  He places one hat on each of their heads. The students are not allowed to talk with each other and no means of communication is feasible. He asks them how many hats are blue and how many are red. He gives them half an hour to deduce and moves out of the room. Nobody is able to answer when he returns back and thus he gives them another fifteen minutes. But when he returns, no one can answer again. Thus he gives them final five minutes. On returning back this time, everyone was available with an accurate answer. How could the students have deduced the right answer? What is the right answer?',
				
				answer: 'In the first wave, let us make an assumption that there is only 1 red hat and other 8 hats are blue. The student who can see all the other 8 blue hats on others\' head will certainly be clear that there are 8 blue hats and 1 red hat since the professor told them that there is at least 1 red hat among the nine. But no one was able to answer after the first half an hour. Thus this can\'t be possible and our assumption is wrong. Now let us assume that there are 2 red hats and 7 blue hats. The student who is having a red hat on his head can definitely see 7 blue hats and one red hat. He can deduce that he is wearing a red hat. But nobody was able to answer in the second interval as well. Thus our assumption is again wrong. In the last wave of final five minutes, let us assume that there are 3 hats and 6 blue hats. The student with a red hat can see 2 other red hats and 6 blue hats and he may deduce that he is wearing a red hat. In this interval, everyone was able to answer which states that our assumption is correct. Thus there are 3 red hats and 6 blue hats. '
			},
			{
				title: 'Empire State Building Interview Question',
				text: 'If you are offered a stack of pennies as tall as the Empire State Building will you be able to fit them in a normal room?',
				
				answer: 'It is one of those problems which will keep you thinking for much time. But did you consider the fact that that the number of pennies are not told and the question asks if the stack will fit the room or not. Also the size of the room is not mentioned and it is left to your intuition. Now consider the Empire State Building which is 102 stories tall or say 100 story tall on a rough note. Now that is hundred times more than an ordinary room measured on the inside. Now you will have to break the skyscraper-high column of pennies into about a hundred floor-to-ceiling-high columns. Now the question becomes if you can fit approximately hundred floor-to-ceiling penny columns in a room? Surely! It will be just a ten by ten array of penny columns. Of course, every room will have enough space to set hundred pennies flat on the floor. '
			},
			{
				title: 'Complete the Equation Interview Problem',
				text: 'In the following equation, add any standard arithmetic signs to make it true. 3 1 3 6 = 8',
				
				answer: 'Whenever you are offered such a problem, it is wiser to think in a linear way first. We know that 3 +1 will be four which is half of the number on the right hand side.  So the equation is now (3+1) 3 6 = 8<br>Now look at the other two digits 3 and 6. 3 is half of 6. Let us put a division sign in between and you will get 1/2 as the answer. The equation is now<br>(3+1) (3/6) = 8 ==> 4 1/2 = 8<br>Let us put a division sign in between and that will solve the problem.<br>(3+1) / (3/6) = 8<br>Solve the equation and you will get 8 = 8.'
			},
			{
				title: 'Series Interview Problem',
				text: 'Complete the following sequence 1, 11, 21, 1211, 111221, __?',
				
				answer: 'Consider each term as a description of the preceding term. The first term is one \'1\':11. The second term is two times \'1\':21. Let us write the series in the above manner<br>One 1: 11<br>Two 1s: 21<br>One 2 and one 1: 1211<br>One 1, one 2 and two 1s: 111221<br>Three 1s, two 2s and one 1: 312211<br>Hence the next term is 312211'
			},
			{
				title: 'Monty Hall Interview Problem',
				text: 'Sarah and Michael are a loving couple. One night Sarah playfully places three identical boxes on a table in front of Michael. Out of the three boxes, one contains a pearl and other two are empty. Michael is then allowed to pick any one of them. Now between the two boxes that remain on the table, at least one is empty. Sarah removes one empty box from the table. Now Michael must choose from the box he picked or the box on the table. What box should Michael choose?',
				
				answer: 'This puzzle is also known as Monty Hall Puzzle. If Michael choose the box on the table, the probability of finding the pearl inside will be 2/3. Let us consider the same thing with more boxes. If Sarah placed 100 boxes on the table with one box that contains the pearl and Michael is allowed to pick random, 99 boxes will remain on the table. Now at least 98 boxes in the table will be empty. Sarah will remove these 98 boxes and now Michael will have to choose from the box on table or the box in his hand. If he chooses the box below, the probability of finding the pearl in the box will be 99/100. Now you must be convinced why he should pick the box on the table. '
			},
			{
				title: 'Hands of Clock Interview Puzzle',
				text: 'Can you determine how many times do the minute and hour hands of a clock overlap in a day?',
				
				answer: '24 times is the most common answer however that is completely wrong. The right answer will be 22 times.<br>Let us prove it by some simple mathematics.<br>Assume that it takes T hours for the minute hand to complete T laps. The hour hand will complete T/12 Laps in the same time.<br>Consider the situation when the hour hand and the minute hand will overlap for the first time; the minute hand would have completed one lap extra than the hour hands.<br>Thus, T =T/12 + 1<br>Considering the above expression we know that the first overlap will take place after t = 12/11 hours i.e. 1:05 am.<br>Similarly, the second overlap will take place when the minute hand would have completed two more laps than the hour hand.<br>Considering there are X laps,<br>T = T/12 + X<br>Everyone knows that a day comprises of 24 hours. Putting that in the equation we get<br>24 = 24/12 + X<br>Solve it and you will get<br>X = 22<br>Hence both of the hands will overlap 22 times in 24 hours.<br>Let us give you with those exact timings as well.<br>The hands will overlap at 12:00, 1:05, 2:10, 3:15, 4:20, 5:25, 6:30, 7:35, 8:40, 9:45, and 10:50. Do consider the fact that there will be no 11:55. It becomes 12:00. '
			},
			{
				title: 'Warm Up Interview Question',
				text: 'A man pushed his car into a hotel and lost all of his fortune. How can this be possible?',
				
				answer: 'This is quite a popular question and is often considered as a warmer. However, many might not be able to answer even this warm up question as well. The answer is quite simple. The man is playing monopoly.'
			}

		]

	};

=======
(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.googleInterviewQuestions = {
		name: 'Google interview questions',
		lang: 'en', // ru || en
		//вЂ™
		questions: [

			{
				title: 'Warden and Prisoners Interview Question',
				text: '23 selected prisoners are summoned by the warden. He gives them a choice of playing a game with him that might ensure their escape from the prison or might as well lead them towards painful death. The prisoners think that this is the only chance for them to be free again and agrees to him. The warden tell them that there is a room which has just two switches which are labelled 1 or 2. The switches may be up or down and the condition is not known at present. They are not connected to anything. The warden may select any prisoner on any day and send him to the switch room. The prisoner will have to select any one switch and reverse its position i.e. if it is up, he will turn it down and if it is down, he will turn it up. He can and must only flip one switch and then he will be confined to his cell again. The warden may choose the same prisoner more than one time and he will be choosing completely randomly. But at a certain point of time, everyone will have visited the switch room. And at any time, the prisoners may declare that everyone has visited the room at least once. If they will be true, they will be set free but if they will be wrong, they will be killed. The warden gives them an hour to plan any kind of strategy and then they will be confined to their respective cells and will never be allowed to meet. What strategy can help them be free?',
				
				answer: 'Everyone will appoint any one person as a leader. Now everyone must follow some steps. Every prisoner will flip the first switch up at the first opportunity and also at the second opportunity. If the first switch is already up or they have flipped it up two times already, then they will flip the second switch. The leader however will have a different routine. He is the only one who will flip the switch down the first switch. Suppose if the switch is already down, he will flip the second switch. Also he will keep a count and when he has flipped the first switch down 44 times, he will declare that every prisoner has visited the room.  This is because once the leader has flipped down the switch 44 times, he will know that everyone has visited the room. If the switch was down initially, the other 22 prisoners will turn it up two times. If the first switch was already up, there will be one prisoner who will flip the switch up only once and the rest will do it twice. Now this trick won\'t work when the leader has flipped the switch 23 times. Consider the fact that it is possible that 12 prisoners randomly and the leader have been taken to the switch room 24 times and the rest have not been taken till then. Remember that the first switch might have been up in the beginning itself. Thus the prisoners must flip the switch up twice. If they do it just once, the leader will never know whether to count till 22 or 23.'
			},
			{
				title: 'Two Eggs Interview Problem',
				text: 'Eggs have quite a unique property. They may be extremely fragile that they may break by mere a drop from your hand. However, they may not break even if they are dropped from the 100th floor. That is exactly what you have in this problem. You have two identical eggs and you have access to a 100 story building. The question is how many drops you will make before you can find out the highest possible floor of the building from which the egg can be dropped without breaking. Remember you only have two eggs to break.',
				
				answer: 'Let us first assume that the number of drops required are N.<br>If the egg breaks at maximum number of tries, we will have N - 1 drops till it does not break. Thus we must drop the first egg from the height N. Now if the first drop of the first egg does not break the egg, we can have N - 2 drops for the second egg if the first egg breaks in the second drop.<br>Let us put that into a valid example for better understanding. Suppose we need 16 drops. Now let us drop the egg from the sixteenth floor, if it breaks, we will try all the floors below sixteen. Suppose it does not breaks, then we have 15 drops left and we will drop it from 16+15+1 = 32nd floor. This is because if it breaks at 32nd floor, we can try all the way down to 17th floor in fourteen tries making the total tries to be 16.<br><br>Let us assume that 16 is the correct answer<br>1 + 15 16 if breaks at 16 checks from 1 to 15 in 15 drops<br>1 + 14 31 if breaks at 31 checks from 17 to 30 in 14 drops<br>1 + 13 45.....<br>1 + 12 58<br>1 + 11 70<br>1 + 10 81<br>1 + 9 91<br>1 + 8 100 we can easily do in the end as we have enough drops to complete the task.<br>Seeking the above case, we must note that we have achieved it in 14 or 14 drops but we still need to find out the optimal one. We know from above that the optimal one will require 0 linear trials in the last step.<br>Thus we can say that<br>(1+p) + (1+ (p-1)) + (1+ (p-2)) + .........+ (1+0) >= 100.<br>Let 1+p=q which is the answer we are looking for<br>q (q+1)/2 >=100<br>q=14<br>Thus the optimal number of drops required are 14.<br>Drops will be tried at floor number 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100. How? Just move up 14, 13, 12 .... Floor till it breaks or does not.'
			},
			{
				title: 'Fastest Horse Interview Puzzle',
				text: 'You are provided with twenty five different horses and you must find out who are the fastest horses. You can conduct a race of five horses only at one time. There is no point in the race where you can find out the actual speed of a horse in a race.  How many races will it take to help you determine the fastest three horses?',
				
				answer: 'Seven. Dividing the horses in a group of five, we will have five different groups of horses. A race will be conducted separately for each group which will help us find the fastest three horses in every group. We have used five different races till now. Now we can have a race among the winners from every race which will help us determine the fastest of them all. We have used the sixth race. The second fastest horse can be the one who came second in the sixth race or the second fastest horse in the finals winners\' first race. If we look at the first case, the third fastest horse can be the third fastest horse in the sixth race or the second fastest horse in either the fastest or second fastest horse first race. If we look at the other case, the third fastest horse may be the second fastest in the sixth race or the third fastest in the final winners\' first race. If you calculate our assumptions, we have five more horses to race (seventh race) and determine the second fastest and the third fastest horse. '
			},
			{
				title: 'Nine Hats Interview Puzzle',
				text: 'Nine brilliant most students were summoned by an inspecting professor. He gave them a situation and told them that he is having nine hats. The hats are either red colored or blue colored as told by the professor. He also tells them that he have at least one red colored hat and the number of blue hats are greater than the red hats.  He places one hat on each of their heads. The students are not allowed to talk with each other and no means of communication is feasible. He asks them how many hats are blue and how many are red. He gives them half an hour to deduce and moves out of the room. Nobody is able to answer when he returns back and thus he gives them another fifteen minutes. But when he returns, no one can answer again. Thus he gives them final five minutes. On returning back this time, everyone was available with an accurate answer. How could the students have deduced the right answer? What is the right answer?',
				
				answer: 'In the first wave, let us make an assumption that there is only 1 red hat and other 8 hats are blue. The student who can see all the other 8 blue hats on others\' head will certainly be clear that there are 8 blue hats and 1 red hat since the professor told them that there is at least 1 red hat among the nine. But no one was able to answer after the first half an hour. Thus this can\'t be possible and our assumption is wrong. Now let us assume that there are 2 red hats and 7 blue hats. The student who is having a red hat on his head can definitely see 7 blue hats and one red hat. He can deduce that he is wearing a red hat. But nobody was able to answer in the second interval as well. Thus our assumption is again wrong. In the last wave of final five minutes, let us assume that there are 3 hats and 6 blue hats. The student with a red hat can see 2 other red hats and 6 blue hats and he may deduce that he is wearing a red hat. In this interval, everyone was able to answer which states that our assumption is correct. Thus there are 3 red hats and 6 blue hats. '
			},
			{
				title: 'Empire State Building Interview Question',
				text: 'If you are offered a stack of pennies as tall as the Empire State Building will you be able to fit them in a normal room?',
				
				answer: 'It is one of those problems which will keep you thinking for much time. But did you consider the fact that that the number of pennies are not told and the question asks if the stack will fit the room or not. Also the size of the room is not mentioned and it is left to your intuition. Now consider the Empire State Building which is 102 stories tall or say 100 story tall on a rough note. Now that is hundred times more than an ordinary room measured on the inside. Now you will have to break the skyscraper-high column of pennies into about a hundred floor-to-ceiling-high columns. Now the question becomes if you can fit approximately hundred floor-to-ceiling penny columns in a room? Surely! It will be just a ten by ten array of penny columns. Of course, every room will have enough space to set hundred pennies flat on the floor. '
			},
			{
				title: 'Complete the Equation Interview Problem',
				text: 'In the following equation, add any standard arithmetic signs to make it true. 3 1 3 6 = 8',
				
				answer: 'Whenever you are offered such a problem, it is wiser to think in a linear way first. We know that 3 +1 will be four which is half of the number on the right hand side.  So the equation is now (3+1) 3 6 = 8<br>Now look at the other two digits 3 and 6. 3 is half of 6. Let us put a division sign in between and you will get 1/2 as the answer. The equation is now<br>(3+1) (3/6) = 8 ==> 4 1/2 = 8<br>Let us put a division sign in between and that will solve the problem.<br>(3+1) / (3/6) = 8<br>Solve the equation and you will get 8 = 8.'
			},
			{
				title: 'Series Interview Problem',
				text: 'Complete the following sequence 1, 11, 21, 1211, 111221, __?',
				
				answer: 'Consider each term as a description of the preceding term. The first term is one \'1\':11. The second term is two times \'1\':21. Let us write the series in the above manner<br>One 1: 11<br>Two 1s: 21<br>One 2 and one 1: 1211<br>One 1, one 2 and two 1s: 111221<br>Three 1s, two 2s and one 1: 312211<br>Hence the next term is 312211'
			},
			{
				title: 'Monty Hall Interview Problem',
				text: 'Sarah and Michael are a loving couple. One night Sarah playfully places three identical boxes on a table in front of Michael. Out of the three boxes, one contains a pearl and other two are empty. Michael is then allowed to pick any one of them. Now between the two boxes that remain on the table, at least one is empty. Sarah removes one empty box from the table. Now Michael must choose from the box he picked or the box on the table. What box should Michael choose?',
				
				answer: 'This puzzle is also known as Monty Hall Puzzle. If Michael choose the box on the table, the probability of finding the pearl inside will be 2/3. Let us consider the same thing with more boxes. If Sarah placed 100 boxes on the table with one box that contains the pearl and Michael is allowed to pick random, 99 boxes will remain on the table. Now at least 98 boxes in the table will be empty. Sarah will remove these 98 boxes and now Michael will have to choose from the box on table or the box in his hand. If he chooses the box below, the probability of finding the pearl in the box will be 99/100. Now you must be convinced why he should pick the box on the table. '
			},
			{
				title: 'Hands of Clock Interview Puzzle',
				text: 'Can you determine how many times do the minute and hour hands of a clock overlap in a day?',
				
				answer: '24 times is the most common answer however that is completely wrong. The right answer will be 22 times.<br>Let us prove it by some simple mathematics.<br>Assume that it takes T hours for the minute hand to complete T laps. The hour hand will complete T/12 Laps in the same time.<br>Consider the situation when the hour hand and the minute hand will overlap for the first time; the minute hand would have completed one lap extra than the hour hands.<br>Thus, T =T/12 + 1<br>Considering the above expression we know that the first overlap will take place after t = 12/11 hours i.e. 1:05 am.<br>Similarly, the second overlap will take place when the minute hand would have completed two more laps than the hour hand.<br>Considering there are X laps,<br>T = T/12 + X<br>Everyone knows that a day comprises of 24 hours. Putting that in the equation we get<br>24 = 24/12 + X<br>Solve it and you will get<br>X = 22<br>Hence both of the hands will overlap 22 times in 24 hours.<br>Let us give you with those exact timings as well.<br>The hands will overlap at 12:00, 1:05, 2:10, 3:15, 4:20, 5:25, 6:30, 7:35, 8:40, 9:45, and 10:50. Do consider the fact that there will be no 11:55. It becomes 12:00. '
			},
			{
				title: 'Warm Up Interview Question',
				text: 'A man pushed his car into a hotel and lost all of his fortune. How can this be possible?',
				
				answer: 'This is quite a popular question and is often considered as a warmer. However, many might not be able to answer even this warm up question as well. The answer is quite simple. The man is playing monopoly.'
			}

		]

	};

>>>>>>> 7a0fb1fe99c92abf88459e8fe8d30f908a8d64f1
}(window));
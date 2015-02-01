(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.amazonInterviewQuestions = {
		name: 'Amazon interview questions',
		lang: 'en', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Gate to Heaven Interview Puzzle',
				text: 'Amanda dies and reaches at the gate of heaven. She has three doors in front of her out of which only one of them leads to heaven. Out of the other two gates, one leads to hell for one day and then back to the gate and one leads to hell for two days and then back to the gate. If she chooses one of these two gates, the gates are shuffled when she returns back. How long will Amanda take to reach heaven?',
				answer: 'Let us simplify the question and then it will lead us to the answer easily. There are three possibilities. Thus the probability of choosing any door is 1/3rd. 1/3 of the time the door to heaven will be chosen by Amanda and thus 1/3 of the time it will take her zero days. 1/3 of the time, the day which leads to hell for one day will be chosen and of those the right door will be chosen the next day. So 1/9 trips take one day. In the similar manner, 1/9 will take to the door which takes to 2 days hell. When that happens, the cases will be split again and again. Thus on average, it will take three days for Amanda to reach Heaven by choosing the right gate. '
			},
			{
				title: 'Mislabeled Candy Boxes Interview Puzzle',
				text: 'A new company has launched a range of juicy candies. There are two flavors of which these juice candies will be available for retail - Peach and Grape. The toffees are packed in three different boxes with one containing peach candies, one containing grape candies and one containing a mixture of both. It is informed that the packaging person has accidentally mislabeled all the three boxes. If you are asked to label them correctly, how many candies will you have to pick and from which jar in order to label every box correctly?',
				answer: 'There are many ways in which you can think a solution for the problem. Your approach should be to minimize the efforts. What if you took out one candy from the box labeled Peach and Grape? What you have to consider is the fact that every box is labelled incorrectly. Thus if you pick a candy from the box labelled with Peach and Grape, it is evident that the box will not have a mixture of both (as it is labelled wrong). Thus you will get to know which candies are present in that box.  Suppose the candy you take out turns out to be peach flavored, then the box labeled as Grapes is the one which contains a mixture of both peach and grapes. This is because it is labelled incorrectly and since we have already figured out the box with Peach candies, we can be confident of the fact. And then the jar labelled as peach will be the one containing grape flavored candies. If the candy you take out from the mixed labeled box is Grape flavored, you can use the same logic to find out the rest. Consider picking a candy from the other two boxes instead of what is told in the solution and you will find out that you will have to take out a candy from each of the boxes before being sure.'
			},
			{
				title: 'Truthcity or Liarcity Interview Puzzle',
				text: 'You are extremely excited to finally visit Truthcity, a city where everyone speaks truth forever their life. On way, you find a two diverging roads and there is no board to suggest which way leads to the Truthcity. However you do know that the other road leads to Liarcity, a city where every single person always speaks a lie. You meet a man passing by who allows you to ask one question as he will not answer more than one. The problem is that you don\'t know whether the man is from Truthcity or the Liarcity. What is the question that you will pop up that tells you the way to Truthcity?',
				
				answer: 'We know you must be having numerous thought about it. But trust us that when you know the solution to the problem you will regret for not thinking in that direction. You just have to ask the person, "Which way is your city?" Just follow the path he directs you to and you will reach Truthcity. How? Well if the person belongs to Liarcity, he will speak lie and will tell you the direction of the Truthcity and if the person belongs to Truthcity, he will tell the truth and will lead you to the Truthcity. Isn\'t it simpler than you thought?'
			},
			{
				title: 'Jigsaw Trap Interview Puzzle',
				text: 'Detective Hoffman wakes up in a room to find himself in a trap set by Jigsaw. The room has two exits i.e. two doors. One of the door leads to a chamber made by magnifying glass. If Hoffman exits through that door, the burning sun will fry him up within moments. The second door exit leads to a fire breathing dragon. What is the possible way in which Detective Hoffman can set himself free from the Jigsaw trap?',
				
				answer: 'This is quite a famous interview puzzle and is usually asked as a warm up question. While you can figure out endless possibilities, the answer is quite simple. Detective Hoffman will just have to wait till the night. When there is no sun, he can simply walk out of the door that leads to the chamber built with magnifying glass.'
			},
			{
				title: 'Poisoned Wine Interview Puzzle',
				text: 'A King has a collection of 1000 bottles of irresistible and one of the finest wines in the world. The king is quite fond of drinking which is taken to be as a weak point by the neighboring king, He creates a plan to kill the king so that he can take over his kingdom and increase his power. He send in a servant to poison the wines with a deadly virus that is so strong that even if it is diluted a million times, it will still have an effect and will kill the king over a prolonged duration of one month. The servant is able to mix poison in only one of the wines when the guards catch him. The servant is killed and thus the truth behind which of the 1000 bottles is poisoned dies with him. The king call up his advisor who is quite clever. He tells the king something which brightens up his face. He summons some of his prisoners. Seeking what the advisor told him, he knows that he will not have to murder more than ten prisoners and he will be able to enjoy the rest of the 999 bottles of wine after a month\'s time. What trick did the advisor tell the king? How will the king be able to achieve what he thinks?',
				
				answer: 'Now this problem is a bit tricky. Before you start panicking about the solution let us give you a hint. You need to think in terms of binary numbers. There are 1000 bottles which should be labeled from 1 to 1000 first. Now write those numbers in binary format.<br><br>Bottle Number 1 = 0000000001<br>Bottle number 2 = 0000000010<br>Bottle number 500 = 0111110100<br>Bottle number 1000 = 1111101000<br>Now the king will summon ten prisoners and label them from 1 to 10. The prisoner labeled as 1 will take a sip from those bottles that have a 1 in its least significant bit and the prisoner labeled as 10 will take a sip from every bottle that have a 1 in its most significant bit etcetera.<br><br>Let us frame an example. The wine from the bottle number 924 will be sipped by 10, 9, 8, 5, 4 and 3. Thus if that bottle will be poisoned, only those 6 prisoners will die.<br><br>After a month\'s time, all the king need to do is line up the prisoners in order and call each living prisoner as 0 and each dead prisoner as 1. N such a manner the number that the king will get will be of that bottle which is poisoned.<br><br>Now also note that if there would have been 1024 or more bottles, there would have been more prisoners required for the very same task.'
			},
			{
				title: 'Logical Sequence Interview Problem',
				text: 'Identify the next number in the sequence 31, 28, 31, 30, __?',
				
				answer: 'Did you consider the fact that we could be talking months here?<br>January - 31 days<br>February - 28 days<br>March - 31 days<br>April - 30 days<br>May - 31 days<br>Thus the next number in the sequence will be 31.'
			},
			{
				title: 'Age of Children Interview Puzzle',
				text: 'Lincoln and Michael gets acquainted in a bar. Lincoln offers a drink to Michael and they begin chatting. After a small conversation, Lincoln comes to know that Michael is married and has three children. He asks him, "How old are your children?" Michael thinks and then replies that the product of his children\'s ages is 72. Lincoln is puzzled and says that the information is not enough. Michael tells him that if he goes outside and look at the building number posted on the door to the bar, he will get the sum of their ages. Lincoln goes outside and returns. Still puzzled, He tells Michael that the information is still not enough. Michael smiles and tells him that his youngest child loves strawberry ice cream.  How old are the children?',
				
				answer: 'In this question, let us think through the mind of Lincoln. At the first information of the product of the ages being 72, he must have calculated the number of ways in which the three ages can be multiplied in order to obtain 72. Of course there are many ways and therefore he asked for more info. Then Michael tells him how to find the sum of the ages of his children. Of course, we don\'t know what he saw. But he said that the information was still not enough. Now why did he say so? It is because there must be two permutations with the same sum or he would have identified the ages easily. Now what are those two permutations? The two possible permutations are 8 3 3 and 6 6 2. Both of them adds up to 14 (which would be the bar\'s address). The last hint by Michael was that his youngest child loves to eat strawberry ice cream. The term youngest means that there is only one youngest child. If you see the permutation 8 3 3, it will mean that there are two youngest children. Thus it does not stand valid with the third hint. So, we are only left with one possibility i.e. 6 6 2.  Thus the ages of his children are 6, 6 and 2. '
			},
			{
				title: 'Airplane Collision Interview Question',
				text: 'Read the question carefully as it can be quite tricky. There are four airplanes flying in four different directions. Each of the plane navigates a straight line at a constant speed. Please keep in mind that none of the two planes are flying parallel with each other. They began flying at the same time long time ago. Sometimes, even a collision takes place but the strong build, makes the planes continue with the journey. But even the sturdy built can only survive two collisions and after that the plane will crash.  Out of the six possible collisions, five have already taken place (do note that the collisions did not involve more than two planes at one time). Two planes have already crashed. What will be the fate of the remaining two planes?',
				
				answer: 'Let us assume that the z axis denotes the time and x and y axis denote the 2D planet. The four trajectories in that case are straight lines. Since no collisions involved more than two air planes, the four lines must be lying in the same plane. Now you must be thinking that the other two planes will collide as well.  But consider the fact that they might have collided in the negative time. Thus you can\'t be sure with the provided facts if the two remaining planes will collide or not. There can be both possibilities. The first assumption depicts that the four air planes fly in a manner that there is no collision between the ships. However in the second diagram, the four airplanes fly in a manner that there is collision between them. '
			},
			{
				title: 'Light Switches Interview Puzzle',
				text: 'A room has three light switches. The light switches are located outside the room with a closed door. Only one of them is the actual switch that can control the lights inside the room. You are allowed to turn those switches as many times as you wish. Please note that you can\'t identify from outside whether the lights are on or off. You can enter the room only once to see the light. You can\'t change the light switches once you are inside. Rule out all the illogical answers like there is a window in the room or someone inside can help you with the answer etcetera.  Based on what information and guidelines have been provided to you, can you determine the exact switch that controls the light inside the room?',
				
				answer: 'Even though the question might sound quite difficult, there is quite a simple solution for it if you light up your logics. All you have to do is turn two switches on and keep one off. Keep them in the same position for some 10 minutes and then shut one of them off. Hurry up into the room now.  There can be two possibilities - either the light are on or they are off. If they are on, you know which switch controls the lights as you have left only one switch on. If the lights are off, it can be either of the two remaining switches. All you have to do is touch the lights with your bare hand. If the lights are hot, it is the switch which you just turned off before entering the room and if the lights are cold, it is the switch which was left untouched and was off since the beginning. '
			},
			{
				title: 'Chasing Cats Interview Question',
				text: 'Suppose that there is a unit square. There are four cats sitting at the four different corners of the square. Each of those cats start chasing the other cat in the clockwise direction. The speed of the cats are same and constant and they continuously change their direction in a manner that they are always heading straight to the other cat.  How long will it take for the cats to catch each other? Where will they catch each other?',
				
				answer: 'Let us denote the cats with A, B, C and D in a fashion that A is chasing B, B is chasing C, C is chasing D and D is chasing A. The cats are moving in symmetry and thus the only logical answer is that they will meet at the center of the square.  At any point of time, the Cat A is perpendicular to cat B and Cat B is perpendicular to Cat C and so on. Cat A runs for Cat B but Cat B does not run towards or away from Cat A for it is moving in a perpendicular direction to Cat A. Thus the distance that need to be covered by Cat A to grab Cat B will be exactly same as the original distance between them which in this case is one unit (as it is a unit square).  Thus the speed of each cat towards the cat it is chasing will be [1 + cos (x)] where x denotes the angle on each corner. Thus speed of the cat = 1 + cos (90) = 1 + 0 = 1 The time needed = Distance / Speed = 1/1 = 1 unit'
			}

		]

	};

}(window));
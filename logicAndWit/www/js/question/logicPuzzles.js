(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.logicPuzzles = {
		name: 'Logic puzzles',
		lang: 'en',
		questions: [
			{
				title: 'Bulbs',
				text: 'There are three switches downstairs. Each corresponds to one of the three light bulbs in the attic. You can turn the switches on and off and leave them in any position. How would you identify which switch corresponds to which light bulb, if you are only allowed one trip upstairs?',
				answer: 'Keep the first bulb switched on for a few minutes. It gets warm, right? So all you have to do then is ... switch it off, switch another one on, walk into the room with bulbs, touch them and tell which one was switched on as the first one (the warm one) and the others can be easily identified'
			},
			{
				title: 'A man in elevator',
				text: 'A man who lives on the tenth floor takes the elevator down to the first floor every morning and goes to work. In the evening, when he comes back; on a rainy day, or if there are other people in the elevator, he goes to his floor directly. Otherwise, he goes to the seventh floor and walks up three flights of stairs to his apartment.  Can you explain why? (This is one of the more popular and most celebrated of all lateral thinking logic puzzles. It is a true classic. Although there are many possible solutions that fit the conditions, only the canonical answer is truly satisfying.)',
				answer: 'The man is of short stature. He can\'t reach the upper elevator buttons, but he can ask people to push them for him. He can also push them with his umbrella.'
			},
			{
				title: 'The ball',
				text: 'How can you throw a ball as hard as you can and have it come back to you, even if it doesn\'t bounce off anything? There is nothing attached to it, and no one else catches or throws it back to you.',
				answer: 'Throw the ball straight up in the air.'
			},
			{
				title: 'The magnet',
				text: 'This logic puzzle was published in Martin Gardner\'s column in the Scientific American. You are in a room with no metal objects except for two iron rods. Only one of them is a magnet. How can you identify which one is a magnet?',
				answer: 'You can hang the iron rods on a string and watch which one turns to the north (or hang just one rod).<br><br>Gardner gives one more solution: take one rod and touch with its end the middle of the second rod. If they get closer, then you have a magnet in your hand.<br><br>The real magnet will have a magnetic field at its poles, but not at its center. So as previously mentioned, if you take the iron bar and touch its tip to the magnet\'s center, the iron bar will not be attracted. This is assuming that the magnet\'s poles are at its ends. If the poles run through the length of the magnet, then it would be much harder to use this method.<br><br>In that case, rotate one rod around its axis while holding an end of the other to its middle. If the rotating rod is the magnet, the force will fluctuate as the rod rotates. If the rotating rod is not magnetic, the force is constant (provided you can keep their positions steady).'
			},
			{
				title: 'Virile microbes',
				text: 'A Petri dish hosts a healthy colony of bacteria. Once a minute every bacterium divides into two. The colony was founded by a single cell at noon. At exactly 12:43 (43 minutes later) the Petri dish was half full. At what time will the dish be full?',
				answer: 'The dish will be full at 12:44.'
			},
			{
				title: 'Sheikh\'s inheritance',
				text: 'An Arab sheikh tells his two sons to race their camels to a distant city to see who will inherit his fortune. The one whose camel is slower wins. After wandering aimlessly for days, the brothers ask a wise man for guidance. Upon receiving the advice, they jump on the camels and race to the city as fast as they can. What did the wise man say to them?',
				answer: 'The wise man told them to switch camels.'
			},
			{
				title: 'Philosopher\'s clock',
				text: 'One absentminded ancient philosopher forgot to wind up his only clock in the house. He had no radio, TV, telephone, internet, or any other means for telling time. So he traveled on foot to his friend\'s place few miles down the straight desert road. He stayed at his friend\'s house for the night and when he came back home, he knew how to set his clock. How did he know?',
				answer: 'Clocks can measure time even when they do not show the right time. You just have to wind the clock up and... We have to suppose that the journey to the friend and back lasts exactly the same time and the friend has a clock (showing the correct time) - it would be too easy if mentioned in the riddle. Now there is no problem to figure out the solution, is there?'
			},
			{
				title: 'Master of logic puzzles(dots)',
				text: 'Three Masters of Logic wanted to find out who was the wisest amongst them. So they turned to their Grand Master, asking to resolve their dispute.<br><br>"Easy," the old sage said. "I will blindfold you and paint either red, or blue dot on each man\'s forehead. When I take your blindfolds off, if you see at least one red dot, raise your hand. The one, who guesses the color of the dot on his forehead first, wins."<br><br>And so it was said, and so it was done. The Grand Master blindfolded the three contestants and painted red dots on every one. When he took their blindfolds off, all three men raised their hands as the rules required, and sat in silence pondering. Finally, one of them said: "I have a red dot on my forehead."<br><br>How did he guess?',
				answer: 'The wisest one must have thought like this:<br><br>I see all hands up and 2 red dots, so I can have either a blue or a red dot. If I had a blue one, the other 2 guys would see all hands up and one red and one blue dot. So they would have to think that if the second one of them (the other with red dot) sees the same blue dot, then he must see a red dot on the first one with red dot. However, they were both silent (and they are wise), so I have a red dot on my forehead.<br><br>Here is another way to explain it:<br><br>All three of us (A, B, and C (me)) see everyone\'s hand up, which means that everyone can see at least one red dot on someone\'s head. If C has a blue dot on his head then both A and B see three hands up, one red dot (the only way they can raise their hands), and one blue dot (on C\'s, my, head). Therefore, A and B would both think this way: if the other guys\' hands are up, and I see one blue dot and one red dot, then the guy with the red dot must raise his hand because he sees a red dot somewhere, and that can only mean that he sees it on my head, which would mean that I have a red dot on my head. But neither A nor B say anything, which means that they cannot be so sure, as they would be if they saw a blue dot on my head. If they do not see a blue dot on my head, then they see a red dot. So I have a red dot on my forehead.'
			},
			{
				title: 'Master of logic puzzles(hats)',
				text: 'After losing the "Spot on the Forehead" contest, the two defeated Puzzle Masters complained that the winner had made a slight pause before raising his hand, thus derailing their deductive reasoning train of thought. And so the Grand Master vowed to set up a truly fair test to reveal the best logician amongst them.<br><br>He showed the three men 5 hats - two white and three black. Then he turned off the lights in the room and put a hat on each Puzzle Master\'s head. After that the old sage hid the remaining two hats, but before he could turn the lights on, one of the Masters, as chance would have it, the winner of the previous contest, announced the color of his hat. And he was right once again.<br><br>What color was his hat? What could have been his reasoning?',
				answer: 'The important thing in this riddle is that all masters had equal chances to win. If one of them had been given a black hat and the other white hats, the one with black hat would immediately have known his color (unlike the others). So 1 black and 2 white hats is not a fair distribution.<br><br>If there had been one white and two black hats distributed, then the two with black hats would have had advantage. They would have been able to see one black and one white hat and supposing they had been given white hat, then the one with black hat must at once react as in the previous situation. However, if he had remained silent, then the guys with black hats would have known that they wear black hats, whereas the one with white hat would have been forced to eternal thinking with no clear answer. So neither this is a fair situation.<br><br>That\'s why the only way of giving each master an equal chance is to distribute hats of one color - so 3 black hats.'
			},
			{
				title: 'Master of logic puzzles(stamps)',
				text: 'Try this. The Grand Master takes a set of 8 stamps, 4 red and 4 green, known to the logicians, and loosely affixes two to the forehead of each logician so that each logician can see all the other stamps except those 2 in the Grand Master\'s pocket and the two on her own forehead. He asks them in turn if they know the colors of their own stamps:<br><br>A: "No."<br><br>B: "No."<br><br>C: "No."<br><br>A: "No."<br><br>B: "Yes."<br><br>What color stamps does B have?',
				answer: 'B says: "Suppose I have red-red. A would have said on her second turn: \'I see that B has red-red. If I also have red-red, then all four reds would be used, and C would have realized that she had green-green. But C didn\'t, so I don\'t have red-red. Suppose I have green-green. In that case, C would have realized that if she had red-red, I would have seen four reds and I would have answered that I had green-green on my first turn. On the other hand, if she also has green-green [we assume that A can see C; this line is only for completeness], then B would have seen four greens and she would have answered that she had two reds. So C would have realized that, if I have green-green and B has red-red, and if neither of us answered on our first turn, then she must have green-red.<br><br>"\'But she didn\'t. So I can\'t have green-green either, and if I can\'t have green-green or red-red, then I must have green-red.\'<br><br>So B continues:<br><br>"But she (A) didn\'t say that she had green-red, so the supposition that I have red-red must be wrong. And as my logic applies to green-green as well, then I must have green-red."<br><br>So B had green-red, and we don\'t know the distribution of the others certainly.<br><br>(Actually, it is possible to take the last step first, and deduce that the person who answered YES must have a solution which would work if the greens and reds were switched -- red-green.)'
			},
			{
				title: 'Head bands',
				text: 'Three Palefaces were taken captive by a hostile Indian tribe. According to tribe\'s custom they had to pass an intelligence test, or die.<br><br>The chieftain showed 5 headbands - 2 red and 3 white. The 3 men were blindfolded and positioned one after another, face to back. The chief put a headband on each of their heads, hid two remaining headbands, and removed their blindfolds. So the third man could see the headbands on the two men in front of him, the second man could see the headband on the first, and the first could not see any headbands at all.<br><br>According to the rules any one of the three men could speak first and try to guess his headband color. And if he guessed correctly - they passed the test and could go free, if not - they failed. It so happened that all 3 Palefaces were prominent logicians from a nearby academy. So after a few moments of silence, the first man in the line said: "My headband is ...".<br><br>What color was his head band? Why?',
				answer: 'The first one (he did not see any head bands) thought this way:<br><br>The last one is silent, which means, he does not know, ergo at least one of head bands he sees is white. The one in the middle is silent too even though he knows what I already mentioned. If I had a red head band, the second one would have known that he had a white head band. However, nobody says anything, so my head band is not red - my head band is white.'
			},
			{
				title: 'Christmas brain teaser',
				text: 'Four angels sat on the Christmas tree amidst other ornaments. Two had blue halos and two - yellow. However, none of them could see above his head. Angel A sat on the top branch and could see the angels B and C, who sat below him. Angel B, could see angel C who sat on the lower branch. And angel D stood at the base of the tree obscured from view by a thicket of branches, so no one could see him and he could not see anyone either.<br><br>Which one of them could be the first to guess the color of his halo and speak it out loud for all other angels to hear?',
				answer: 'There are 2 possible solutions:<br>1. if angels B and C had aureole of the same color, then angel A must have immediately said his own color (other then theirs),<br>2. if angels B and C had different colors, then angel A must have been silent and that would have been a signal for angel B, who could know (looking at angel C) what his own color is (the other one then C had).'
			},
			{
				title: 'Honestants and swindlecants 1',
				text: 'There are two kinds of people on a mysterious island. There are so-called Honestants who speak always the truth, and the others are Swindlecants who always lie.<br><br>Three fellows (A, B and C) are having a quarrel at the market. A gringo goes by and asks the A fellow: "Are you an Honestant or a Swindlecant?" The answer is incomprehensible so the gringo gives another quite logical question to B: "What did A say?" B answers: "A said that he is a Swindlecant." And to that says the fellow C: "Do not believe B, he is lying!"<br><br>Who is B and C?',
				answer: 'It is impossible that any inhabitant of such an island says: "I am a liar." An honestant would thus be lying and a swindlecant would be speaking truth. So B must have been lying and therefore he is a swindlecant. And that means that C was right saying B is lying - so C is an honestant. However, it is not clear what is A.'
			},
			{
				title: 'Honestants and swindlecants 2',
				text: 'Afterwards he meets another two aborigines. One says: "I am a Swindlecant or the other one is an Honestant."<br><br>Who are they?',
				answer: 'Logical disjunction is a statement "P or Q". Such a disjunction is false if both P and Q are false. In all other cases it is true. Note that in everyday language, use of the word "or" can sometimes mean "either, but not both" (e.g., "would you like tea or coffee?"). In logic, this is called an "exclusive disjunction" or "exclusive or" (xor).<br><br>So if A was a swindlecant, then his statement would be false (thus A would have to be an honestant and B would have to be a swindlecant). However, that would cause a conflict which implicates that A must be an honestant. In that case at least one part of his statement is true and as it can\'t be the first one, B must be an honestant, too.'
			},
			{
				title: 'Honestants and swindlecants 3',
				text: 'Our gringo was lucky and survived. On his way to the pub he met three aborigines. One made this statement: "We are all Swindlecants." The second one concluded: "Just one of us is an honest man."  Who are they?',
				
				answer: 'The first one must be a swindlecant (otherwise he would bring himself into a liar paradox), and so (knowing that the first one is lying) there must be at least one honestant among them. If the second one is lying, then (as the first one stated) the third one is an honestant, but that would make the second one speak the truth. So the second one is an honestant and C is a swindlecant.'
			},
			{
				title: 'Honestants and swindlecants 4',
				text: 'In the pub the gringo met a funny guy who said: "If my wife is an Honestant, then I am Swindlecant."<br><br>Who is this couple?',
				answer: 'It is important to explore the statement as a whole. In this logical conditional ("if-then" statement) p is a hypothesis (or antecedent) and q is a conclusion (or consequent).<br><br>It is obvious, that the husband is not a Swindlecant, because in that case one part of the statement (Q) " ... then I am Swindlecant." would have to be a lie, which is a conflict. And since A is an Honestant, the whole statement is true.<br><br>If his wife was an Honestant too, then the second part of statement (Q) " ... then I am Swindlecant." would have to be true, which is a conflict again. Therefore the man is an Honestant and his wife is a Swindlecant. Or is it a paradox? Think about it.'
			},
			{
				title: 'Honestants and swindlecants 5',
				text: 'When the gringo wanted to pay and leave the pub, the bartender told him how much his drink costed. It was quite expensive, so he asked the bartender if he spoke the truth. But the gringo did not hear the whispered answer so he questioned a man sitting next to him about it. And the man said: "The bartender said yes, but he is a big liar." Who are they?',
				
				answer: 'This one seems not clear to me. However, the bartender and the man sitting next to the gringo must be one honestant and one swindlecant (not knowing who is who).<br><br>1. the bartender must have said: "Yes, I speak the truth" (no matter who he is)<br><br>2. the man sitting next to gringo said: "The bartender said yes, but he is a big liar.", which is true only if BOTH parts of the sentence are true<br><br>if it\'s true - the man is an honestant and the bartender a swindlecant,<br><br>if it\'s false = "he is a big liar" is false - bartender is an honestant and the man is a swindlecant.'
			},
			{
				title: 'Honestants and swindlecants 6',
				text: 'Going out of the pub, the gringo heard about a fantastic buried treasure. He wanted to be sure so he asked another man who replied:<br><br>"On this island is a treasure, only if I am an honest man."<br><br>So shall he go and find the treasure?',
				
				answer: 'It is important to explore the statement as a whole. If the man is an Honestant, then the whole statement must be true. One part of it, where he said that he is an honest man is true then and so the other part (about the treasure) must be true, too. However, if he is a Swindlecant, the whole statement is a lie. The part mentioning that he is an honest man is in that case of course a lie. Thus the other part must be truth. So there must be a treasure on the island, no matter what kind of man said the sentence.'
			},
			{
				title: 'Honestants and swindlecants 7',
				text: 'Thinking about the treasure, the gringo forgot what day it was, so he asked four aborigines and got these answers:<br>A: Yesterday was Wednesday.<br>B: Tomorrow will be Sunday.<br>C: Today is Friday.<br>D: The day before yesterday was Thursday.<br>Because everything you need to know is how many people lied, I will not tell. What day of the week was it?',
				answer: 'The important thing was what we did not need to know. So if we knew how many people lied we would know the answer. And one more thing - B and D said the same.<br>If all of them lied, there would be 4 possible days to choose from (which one is not clear).<br>If only one of them spoke the truth, it could be A or C, so 2 possible days (not clear again).<br>If two of them were honest, it would have to be B and D saying that it was Saturday.<br>Neither 3 nor all 4 could have been honest because of an obvious conflict.<br>So it was Saturday.'
			},
			{
				title: 'Honestants and swindlecants 8',
				text: 'After a hard day the gringo wanted some time to relax. But a few minutes later two aborigines wanted to talk to him. To make things clear, the gringo asked: "Is at least one of you an honestant?" After the answer, there was no doubt.<br>Who are they and who answered?',
				
				answer: 'If the aborigine answered "Yes.", the gringo would not have been able to identify them. That means, the answer had to be "No.", and the one who said that was a liar and the other one was an honest man.'
			},
			{
				title: 'Honestants and swindlecants 9',
				text: 'There was a girl on this island, and everybody wanted her. However, she wanted just a rich swindlecant. If you were a rich swindlecant, how would you convince her saying only one sentence? And what if she wanted a rich honestant (and if you were one). Let us assume for this logic problem that there are only rich or poor people on the island.',
				
				answer: '"I am a poor swindlecant." An honestant can not say such a sentence, so it is a lie. And that\'s why only a rich swindlecant can say that.<br>"I am not a poor honestant." A swindlecant can not say that, because it would be true. And that\'s why an honestant who is not poor (a rich one) said that.'
			},
			{
				title: 'Logic problems in the court of law 1',
				text: 'And now a few cases from the island of honestants and swindlecants. A prisoner at the bar was allowed to say one sentence to defend himself. After a while he said: "A swindlecant committed the crime."<br>Did it rescue him?',
				
				answer: 'Yes, the statement helped him. If he is an honestant, then a swindlecant committed the crime. If he is a swindlecant, then his statement points to an honestant who is guilty. Thus he is again innocent regarding the statement.'
			},
			{
				title: 'Logic problems in the court of law 2',
				text: 'A man accused of a crime, hired an attorney whose statements were always admitted by the court as undisputable truth. The following exchange took place in court.<br>Prosecutor: "If the accused committed the crime, he had an accomplice."<br>Defender: "That is not true!"<br>Did the attorney help his client?',
				
				answer: 'The statement of plaintiff is a lie only if the hypothesis (or antecedent) is true and conclusion (or consequent) is not true. So the solicitor did not help his client at all. He actually said that his client was guilty and there was no accomplice.'
			},
			{
				title: 'Logic problems in the court of law 3',
				text: 'You live on an island where there are only two kinds of people: the ones who always tell the truth (truth tellers) and those who always lie (liars). You are accused of crime and brought before the court, where you are allowed to speak only one sentence in your defense. What do you say in each of the following situations?<br>If you were a liar (the court does not know that) and you were innocent. And it is an established fact that a liar committed the crime.<br>Same situation as above, but you are the one who committed the crime.<br>If you were a truth teller (the court does not know that) and you were innocent. And it is an established fact that a truth teller committed the crime.<br>If you were innocent and it is an established fact that the crime was not committed by a "normal" person. Normal people are that new immigrant group who sometimes lie and sometimes speak the truth. What sentence, no matter whether you were a truth teller, liar, or normal, can prove your innocence?',
				
				answer: '1. "I did it - I am guilty."<br>2. There is no such sentence.<br>3. "I am innocent."<br>4. "Either I am an honestant and innocent, or I am a swindlecant and guilty." = "I am either an innocent honestant, or a guilty swindlecant." The court could think this way:<br>4.1 If he is an honestant, then his statement is true and he is innocent.<br>4.2 If he is a swindlecant, then his statement is a lie and he is neither an innocent honestant nor a guilty swindlecant. This means that he is an innocent swindlecant.<br>4.3 If he is normal, then he is innocent since a normal man couldn\'t have done that.'
			},
			{
				title: 'Lion and unicorn',
				text: 'Alice came across a lion and a unicorn in a forest of forgetfulness. Those two are strange beings. The lion lies every Monday, Tuesday and Wednesday and the other days he speaks the truth. The unicorn lies on Thursdays, Fridays and Saturdays, however the other days of the week he speaks the truth.<br>Lion: Yesterday I was lying.<br>Unicorn: So was I.<br>Which day did they say that?',
				answer: 'As there is no day when both of the beings would be lying, at least one of them must have spoken the truth. They both speak the truth only on Sunday. However, the Lion would then be lying in his statement, so it couldn\'t be said on Sunday. So exactly one of them lied.<br>If the Unicorn was honest, then it would have to be Sunday - but previously we proved this wrong. Thus only the Lion spoke the truth when he met Alice on Thursday and spoke with the Unicorn about Wednesday.'
			},
			{
				title: 'In the Alps',
				text: 'Three tourists have an argument regarding the way they should go. Hans says that Emanuel lies. Emanuel claims that Hans and Philip speak the same, only doesn\'t know whether truth or lie.<br>So who is lying for sure?',
				answer: 'The only one who is lying for sure is Philip. Hans speaks probably the truth and Emanuel lies. It can be also the other way, but since Hans expressed himself before Emanuel did, then Emanuel\'s remark (that he does not know whether Hans is lying) is not true.'
			},
			{
				title: 'Coins',
				text: 'Imagine there are 3 coins on the table: gold, silver, and copper. If you make a truthful statement, you will get one coin. If you make a false statement, you will get nothing. What sentence can guarantee you getting the gold coin?',
				
				answer: '"You will give me neither copper nor silver coin." If it is true, then I have to get the gold coin. If it is a lie, then the negation must be true, so "you give me either copper or silver coin", which would break the given conditions that you get no coin when lying. So the first sentence must be true.'
			}

		]

	};

}(window));
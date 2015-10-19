(function () {

	"use strict";
	/*global window, document, console, alert */

	window.lang = window.lang || {};

	window.lang.zh = {
		language: '语言',
		languageName: '中国的',
		score: '级/纪录',
		digits: '数字',
		learn: '学习',
		test: '测验',
		addition: '加法',
		subtraction: '减法',
		doPreviousLevel: '这级还没开放。请完成前一级。 ;)',
		levelIsDone: '非常好！这级完成了。请通过下一级。 :)',
		sectionIsDone: '非常好！这个部分完成了。请通过下一个部分。 :)',
		settings: '设置',
		level: '!!! do NOT USE or REPLACE this field !!!',
		beginner: '新手',
		expert: '内行',
		ball_many: '皮球',
		book_many: '书',
		chicken_many: '小鸡',
		cup_many: '茶碗',
		dog_many: '狗',
		leaf_many: '树叶',
		mouse_many: '老鼠',
		rabbit_many: '兔子',
		snail_many: '蜗牛',
		squirrel_many: '松鼠',
		testBasicsQuestion: '这里有多少%thing%？',
		youHaveDoneThisSection: '非常好！这个部分完成了。请通过下一个部分。 ;)',
		youDontHaveEnoughPoints: '分数不够，下一个部分不能开放。请把这个部分再看一次。 :)',
		thanks: '谢谢',
		thanksForDe: 'Svetlana Dubinetskaya',
		thanksForEs: 'Viktoriya Kostyuk',
		shareUs: '共享',
		designerName: 'Anna Rudnitskaya',
		designer: 'Designer'
	};

	for (var i = 0; i <= 9; i++) {
		lang.zh['number-' + i] = '/android_asset/www/sound/numbers/zh/' + i + '.mp3';
	}

}());

var theThing = undefined;

var replaceThing = function () {
	var priorThing = theThing;
	var unused = function () {
		// 'unused' - единственное место, где используется 'priorThing',
		// но 'unused' никогда не вызывается
		if (priorThing) {
			console.log("hi");
		}
	};
	theThing = {
		longStr: new Array(1000000).join('*'),  // создаем 1Mб объект
		someMethod: function () {
			console.log(someMessage);
		}
	};

};

setInterval(replaceThing, 1000);    // вызываем 'replaceThing' каждую секунду




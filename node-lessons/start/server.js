function User(name) {
	this.name = name;
}

User.prototype.hello = function (who) {
	console.log('Hello,', who.name);
};

var vasya = new User('Vasya'),
	petya = new User('Petya');

vasya.hello(petya);

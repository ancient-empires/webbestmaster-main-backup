var fs = require('fs');

fs.readFile(__filename, function(err, data) {
	console.log('--1');
	console.log(data);
});

fs.readFile(__filename, 'utf-8', function(err, data) {
	console.log('--2');
	console.log(data);
});

fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data) {
	console.log('--2.5');
	console.log(data);
});

fs.readFile(__filename, function(err, data) {
	console.log('--3');
	console.log(data.toString());
});

fs.stat(__filename, function(err, stat) {

	console.log(stat);
	console.log(stat.isFile());

});

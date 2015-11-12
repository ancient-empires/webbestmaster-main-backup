var http = require('http');
var fs = require('fs');

new http.Server(function (req, res) {

	console.log(req.headers.cookie);

	var file = new fs.ReadStream('./' + req.url);

	sendFile(file, res);

}).listen(3000);

//var stream = new fs.ReadStream('big.html', {encoding: 'utf-8'});
//var stream = new fs.ReadStream('file.png');

function sendFile(file, res) {

	file.pipe(res);

	res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);

	//file.pipe(process.stdout); // see in console

	file.on('error', function (err) {
		res.statusCode = 500;
		res.end('Server error 500');
		console.error(err);
	});

	// normal behavior for file stream - open and close
	file
		.on('open', function (err) {
			// start pipe from file to res
			console.log('file stream is open');
		})
		.on('close', function (err) {
			// end pipe from file to res
			console.log('file stream is close');
		});

	// detect when user close page until data was received
	res.on('close', function () {
		file.destroy();
	});

}



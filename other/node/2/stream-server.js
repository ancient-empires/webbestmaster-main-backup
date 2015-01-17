var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

	var file = new fs.ReadStream(__filename);
	sendFile(file, res);

});

server.listen(3000);

/*
function sendFile(file, res) {
	file.on('readable', write);

	function write() {
		var fileContent = file.read();  // read

		if (fileContent && !res.write(fileContent)) { //send
			file.removeListener('readable', write);
			res.once('drain', function () { // wait
				file.on('readable', write);
				write();
			});
		}

		res.write(fileContent);

	}

	file.on('end', function () {
		res.end();
	});

}
*/

// sendFile is equals to pipe

function sendFile(file, res) {

	file.pipe(res);

	file.on('error', function (err) {
		res.statusCode = 500;
		res.end('Server error');
		console.log(err);
	});

	file
		.on('open', function () {
			console.log('open');
		})
		.on('close', function () {
			console.log('close');
		});

	res.on('close', function () {
		file.destroy();
	});

}


var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){

	console.log(req);
	console.log(req.method, req.url);

	var parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl);
	res.setHeader('Cache-control', 'no-cache');
	res.setHeader('my-Own-HeadER', 'tring');
	res.end(parsedUrl.query.message);
});


server.listen(1337);
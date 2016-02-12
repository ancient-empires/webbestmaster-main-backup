var express = require('express'),
	app = express(),
	helper = require('./helper'),
	sendFile = helper.sendFile,
	os = require('os'),
	ifaces = os.networkInterfaces(),
	port = process.env.PORT || 3000;

//app.use(express.bodyParser());

//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.multipart());

//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// use api - REST
/*
 app.post('/api/convert-photo', function(req, res){

 helper
 .clearFolders(['upload-files', 'tinify'])
 .then(helper.saveFilesToDisk.bind(helper, req))
 .then(helper.tinifyImages)
 .then(function (data) {
 res.send(JSON.stringify(data));
 });

 //res.on('close', function () {
 // still not need to implemented
 //});

 });
 */

app.post('/log/*', function (req, res) {

	var bodyStr = '';

	req.on("data", function (chunk) {
		bodyStr += chunk.toString();
	});

	req.on("end", function () {
		console.log('log -', bodyStr);
	});

	res.send('');

	//res.on('close', function () {
	// still not need to implemented
	//});

});

// send file
app.get('*', sendFile);

// Handle 404 - implemented by helper
/*
 app.use(function(req, res) {
 res.send('404: Page not Found', 404);
 });
 */

// Handle 500
app.use(function (error, req, res, next) {
	res.status(500).send('500: Internal Server Error');
});

app.listen(port);



// show IP and port
Object.keys(ifaces).forEach(function (ifname) {
	var alias = 0;

	ifaces[ifname].forEach(function (iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}

		if (alias >= 1) {
			// this single interface has multiple ipv4 addresses
			console.log(ifname + ':' + alias, iface.address);
		} else {
			// this interface has only one ipv4 adress
			//console.log(ifname, iface.address);
			console.log('dist server started on http://' + iface.address + ':' + port + '/');
		}
		++alias;
	});
});
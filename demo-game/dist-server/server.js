var express = require('express'),
	app = express(),
	helper = require('./helper'),
	sendFile = helper.sendFile;

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

app.listen(process.env.PORT || 3000);
var fs = require('fs');

var stream = new fs.ReadStream(__filename + 'ds');

stream.on('readable', function(){
	var data = stream.read().toString();
	console.log(data);
});

stream.on('end', function(){
	console.log('end');
});

stream.on('error', function(err){
	console.log(err);
});

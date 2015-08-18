requirejs.config({

	baseUrl: 'js/',

	paths: {
		'jquery': 'lib/jquery-2.1.3',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone'
	}

	//shim: {
	//
	//	'backbone': {
	//		'exports': 'bb',
	//		'deps': ['jquery', 'underscore']
	//	}
	//
	//
	//}

});

//
//require(['view/app'], function (view) {
//	new view();
//
//});


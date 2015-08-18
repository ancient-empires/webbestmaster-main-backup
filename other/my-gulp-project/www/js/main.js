require.config({

	baseUrl: 'js/',

	paths: {
		'jquery': 'lib/jquery-2.1.3',
		'underscore': 'lib/underscore',
		'bb': 'lib/backbone'
	}

});


require(['view/app'], function (view) {
	new view();

});


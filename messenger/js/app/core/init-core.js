define(['templateMaster', 'fastclick', 'shim', 'router', 'device', 'log', 'Firebase', 'db', 'user',
	'app/home/home-view', 'app/main/main-view'], function (templateMaster, fastclick) {

	'use strict';

	templateMaster.init();

	fastclick.attach(window.document.body);

	return true;

});
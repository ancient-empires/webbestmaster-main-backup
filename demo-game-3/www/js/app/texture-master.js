import Deferred from './../lib/deferred';
import frameTextures from './frame-textures';
import gameTextures from './game-textures';
import util from './../lib/util';
import log from './../services/log';

var textureMaster = {

	initTextures: function () {

		var defer = new Deferred();

		var loader = PIXI.loader;

		var frameTexturesData = frameTextures.textures;
		var gameTexturesData = gameTextures.textures;

		util.eachHash(frameTexturesData, function (item, key) {
			loader.add('frameTextures/' + key, item.path);
		});

		util.eachHash(gameTexturesData, function (item, key) {
			loader.add('gameTextures/' + key, item.path);
		});

		loader.add('i/game/effect/club-win-animation.json');

		loader
			.on('progress', function () {
				log('on loading texture progress');
			})
			.load(function (loader, resources) {

				util.eachHash(resources, function (value, key) {

					var path = key.split('/'),
						root = path[0],
						name = path[1];

					switch (root) {
						case 'frameTextures':
							frameTexturesData[name].texture = value;
							break;

						case 'gameTextures':
							gameTexturesData[name].texture = value;
							break;

					}

				});

				defer.resolve();

			});

		return defer.promise();

	}

};


export default textureMaster;
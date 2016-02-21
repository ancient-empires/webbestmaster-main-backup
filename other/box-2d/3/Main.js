var box2d = {
	b2Vec2: Box2D.Common.Math.b2Vec2,
	b2BodyDef: Box2D.Dynamics.b2BodyDef,
	b2Body: Box2D.Dynamics.b2Body,
	b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
	b2World: Box2D.Dynamics.b2World,
	b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
	b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
	b2DebugDraw: Box2D.Dynamics.b2DebugDraw,
	b2RevoluteJointDef: Box2D.Dynamics.Joints.b2RevoluteJointDef
};

var SCALE = 30;

var stage, world;

setInterval(tick, 16);

function init() {

	world = new box2d.b2World(new box2d.b2Vec2(0, 50), true);

	// create ground
	var fixDef = new box2d.b2FixtureDef();
	fixDef.density = 1;
	fixDef.friction = 0.5;

	var bodyDef = new box2d.b2BodyDef();
	bodyDef.type = box2d.b2Body.b2_staticBody;

	bodyDef.position.x = 400 / SCALE;
	bodyDef.position.y = 600 / SCALE;
	//bodyDef.angle = -0.1;

	fixDef.shape = new box2d.b2PolygonShape();
	fixDef.shape.SetAsBox(400 / SCALE, 20 / SCALE);

	// add object to world
	// you can save link to your object to change the object in future
	var body = world.CreateBody(bodyDef); 	// world.CreateBody(bodyDef)
	body.CreateFixture(fixDef);				// .CreateFixture(fixDef);

	// setup DEBUG draw
	var debugDraw = new box2d.b2DebugDraw();
	debugDraw.SetSprite(document.getElementById('debug').getContext('2d'));
	debugDraw.SetFillAlpha(0.3);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetDrawScale(SCALE);
	debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
	world.SetDebugDraw(debugDraw);

	createObjects();

}

function createObjects() {

	var data = [
		{id: "b1", x: 17, y: 600 / SCALE - 10, halfHeight: 2, halfWidth: 0.10, strength: 25},
		//{id: "b2", x: 20, y: 600 / SCALE - 10, halfHeight: 0.25, halfWidth: 2, strength: 30},
		{id: "ball", x: 2, y: 600 / SCALE, radius: 0.5}
	];

	for(var id in data) {

		var entity = data[id];

		var bodyDef = new box2d.b2BodyDef();

		bodyDef.type = box2d.b2Body.b2_dynamicBody;

		bodyDef.position.x = entity.x;
		bodyDef.position.y = entity.y;
		bodyDef.userData = {
			id: id
		};

		var body = world.CreateBody(bodyDef);

		var fixDef = new box2d.b2FixtureDef();

		fixDef.density = 1;
		fixDef.friction = 0.5;

		if (entity.radius) {
			fixDef.shape = new box2d.b2CircleShape(entity.radius);
			body.CreateFixture(fixDef);
		} else if (entity.polys) {
			for (var j = 0; j < entity.polys.length; j++) {
				var points = entity.polys[j];
				var vecs = [];
				for (var i = 0; i < points.length; i++) {
					var vec = new box2d.b2Vec2();
					vec.Set(points[i].x, points[i].y);
					vecs[i] = vec;
				}
				fixDef.shape = new box2d.b2PolygonShape();
				fixDef.shape.SetAsArray(vecs, vecs.length);
				body.CreateFixture(fixDef);
			}
		} else {
			fixDef.shape = new box2d.b2PolygonShape();
			fixDef.shape.SetAsBox(entity.halfWidth, entity.halfHeight);
			body.CreateFixture(fixDef);
		}

	}

	var listener = new Box2D.Dynamics.b2ContactListener();

	// contact.GetFixtureA().GetBody().GetUserData() !!! set user data
	// contact.GetFixtureB().GetBody().GetUserData() !!!

	listener.BeginContact = function(contact) {
		//console.log(contact.GetFixtureA().GetBody());
		//console.log(contact.GetFixtureB().GetBody());
	};

	listener.EndContact = function (contact) {
		//console.log(contact);
	};

	listener.PostSolve = function (contact, impulse) { // IMPULSE here only

		var body1 = contact.GetFixtureA().GetBody();
		var body2 = contact.GetFixtureB().GetBody();
		console.log('--------------');
		console.log(body1.GetUserData());
		console.log(impulse);
	};

	world.SetContactListener(listener);

	setTimeout(function () {
		body.ApplyImpulse(
			new box2d.b2Vec2(
				Math.cos(Math.PI / 6) * 40,
				Math.sin(-Math.PI / 10) * 50
			),
			body.GetWorldCenter()
		);
	}, 1000)


}

function tick() {

	// update world step
	world.Step(1 / 60, 10, 10); // use "world.Step(1 / 60, 3, 3);" to more fast counting

	// update Debug canvas
	world.DrawDebugData();

	// here you can update your objects drawing
	// ..code..

	// in END of step
	// cause you CAN NOT destroy any object while counting of physics in progress
	world.ClearForces();

	// here you can destroy needless objects
	// ..code..

}

var box2d = {
	b2Vec2: Box2D.Common.Math.b2Vec2,
	b2BodyDef: Box2D.Dynamics.b2BodyDef,
	b2Body: Box2D.Dynamics.b2Body,
	b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
	b2World: Box2D.Dynamics.b2World,
	b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
	b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
	b2DebugDraw: Box2D.Dynamics.b2DebugDraw
};

var SCALE = 30;

var stage, world;

setInterval(tick, 16);

function newBall() {

	var fixDef = new box2d.b2FixtureDef();
	fixDef.density = 1;
	fixDef.friction = 0.5;

	fixDef.restitution = 0.5;

	var bodyDef = new box2d.b2BodyDef();
	bodyDef.type = box2d.b2Body.b2_dynamicBody;

	bodyDef.position.x = Math.random() * 400 / SCALE;
	bodyDef.position.y = 0;

	fixDef.shape = new box2d.b2CircleShape(Math.random() * 100 / SCALE);

	world.CreateBody(bodyDef).CreateFixture(fixDef);

}

function newShape() {

	var fixDef = new box2d.b2FixtureDef();
	fixDef.density = 1;
	fixDef.friction = 1;
	fixDef.restitution = 0.5;

	var bodyDef = new box2d.b2BodyDef();
	bodyDef.type = box2d.b2Body.b2_dynamicBody;

	bodyDef.position.x = Math.random() * 400 / SCALE;
	bodyDef.position.y = 0;

	fixDef.shape = new box2d.b2PolygonShape();

	fixDef.shape.SetAsArray([
		new box2d.b2Vec2(SCALE * 0.1, SCALE * 0.1),
		new box2d.b2Vec2(SCALE * 0.2, SCALE * 0.3),
		new box2d.b2Vec2(SCALE * 0.08, SCALE * 0.1)
	], 3);

	world.CreateBody(bodyDef).CreateFixture(fixDef);

}

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

}

var i = 0;

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

	i++;
	if (i < 5) {
		newShape();
		newBall();
	}

}

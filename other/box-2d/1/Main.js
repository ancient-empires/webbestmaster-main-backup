var box2d = {
	b2Vec2: Box2D.Common.Math.b2Vec2,
	b2BodyDef: Box2D.Dynamics.b2BodyDef,
	b2Body: Box2D.Dynamics.b2Body,
	b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
	b2Fixture: Box2D.Dynamics.b2Fixture,
	b2World: Box2D.Dynamics.b2World,
	b2MassData: Box2D.Collision.Shapes.b2MassData,
	b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
	b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
	b2DebugDraw: Box2D.Dynamics.b2DebugDraw
};

var SCALE = 30;

var stage, world;

function init() {

	stage = new createjs.Stage(document.getElementById('canvas'));

	setupPhysics();

	stage.mouseDown = function () {

		var fixDef = new box2d.b2FixtureDef();
		fixDef.density = 1;
		fixDef.friction = 0.5;

		fixDef.restitution = 0.5;

		var bodyDef = new box2d.b2BodyDef();
		bodyDef.type = box2d.b2Body.b2_dynamicBody;

		bodyDef.position.x = Math.random() * 400 / SCALE;
		bodyDef.position.y = 0;

		fixDef.shape = new box2d.b2CircleShape(Math.random() * 100 / SCALE);
		//fixDef.shape.SetAsBox(400/SCALE, 20 / SCALE);

 		world.CreateBody(bodyDef).CreateFixture(fixDef);

	};

	createjs.Ticker.addEventListener(this);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.useRAF = true;

}


function setupPhysics() {

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
	fixDef.shape.SetAsBox(400/SCALE, 20 / SCALE);

	world.CreateBody(bodyDef).CreateFixture(fixDef);

	// setup debug draw
	var debugDraw = new box2d.b2DebugDraw();
	debugDraw.SetSprite(stage.canvas.getContext('2d'));
	debugDraw.SetDrawScale(SCALE);

	debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);

	world.SetDebugDraw(debugDraw);

}


function tick() {

	stage.update();
	world.DrawDebugData();
	world.Step(1/60, 10, 10);
	world.ClearForces();

}

createjs.Ticker.addEventListener("tick", handleTick);

var i = 0;

function handleTick(event) {
	tick();

	i++;
	if (i < 2){
		stage.mouseDown();

	}
}


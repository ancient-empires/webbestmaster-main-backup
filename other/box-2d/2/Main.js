var box2d = {
	b2Vec2: Box2D.Common.Math.b2Vec2,
	b2BodyDef: Box2D.Dynamics.b2BodyDef,
	b2Body: Box2D.Dynamics.b2Body,
	b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
	b2World: Box2D.Dynamics.b2World,
	b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
	b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
	b2DebugDraw: Box2D.Dynamics.b2DebugDraw,
	b2RevoluteJointDef: Box2D.Dynamics.Joints.b2RevoluteJointDef,
	b2DistanceJointDef: Box2D.Dynamics.Joints.b2DistanceJointDef
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


	var wheel1 = {};

	wheel1.bodyDef = new box2d.b2BodyDef();
	wheel1.bodyDef.type = box2d.b2Body.b2_dynamicBody;

	wheel1.bodyDef.position.x = 1;
	wheel1.bodyDef.position.y = 4;

	wheel1.fixDef = new box2d.b2FixtureDef();
	wheel1.fixDef.density = 1.0;
	wheel1.fixDef.friction = 0.5;
	wheel1.fixDef.restitution = 0.2;

	wheel1.fixDef.shape = new box2d.b2CircleShape(1.5);

	wheel1.body = world.CreateBody(wheel1.bodyDef);
	wheel1.body.CreateFixture(wheel1.fixDef);


	var wheel2 = {};

	wheel2.bodyDef = new box2d.b2BodyDef();
	wheel2.bodyDef.type = box2d.b2Body.b2_dynamicBody;

	wheel2.bodyDef.position.x = 6;
	wheel2.bodyDef.position.y = 4;

	wheel2.fixDef = new box2d.b2FixtureDef();
	wheel2.fixDef.density = 1.0;
	wheel2.fixDef.friction = 0.5;
	wheel2.fixDef.restitution = 0.2;

	wheel2.fixDef.shape = new box2d.b2CircleShape(0.5);

	wheel2.body = world.CreateBody(wheel2.bodyDef);
	wheel2.body.CreateFixture(wheel2.fixDef);

	
	var chassis = {};

	chassis.bodyDef = new box2d.b2BodyDef();
	chassis.bodyDef.type = box2d.b2Body.b2_dynamicBody;

	chassis.bodyDef.position.x = 3.5;
	chassis.bodyDef.position.y = 4;

	chassis.fixDef = new box2d.b2FixtureDef();
	chassis.fixDef.density = 1.0;
	chassis.fixDef.friction = 0.5;
	chassis.fixDef.restitution = 0.2;

	chassis.fixDef.shape = new box2d.b2PolygonShape();
	chassis.fixDef.shape.SetAsBox(2.5, 0.15);

	chassis.body = world.CreateBody(chassis.bodyDef);
	chassis.body.CreateFixture(chassis.fixDef);

	// joint b2RevoluteJointDef

	var joint1 = new box2d.b2RevoluteJointDef();

	// add MOTOR!!!
	joint1.motorSpeed = -2;
	joint1.maxMotorTorque = 10;
	joint1.enableMotor = true;

	joint1.Initialize(wheel1.body, chassis.body, wheel1.body.GetWorldCenter());
	world.CreateJoint(joint1);



	var joint2 = new box2d.b2RevoluteJointDef();
	joint2.Initialize(wheel2.body, chassis.body, wheel2.body.GetWorldCenter());
	world.CreateJoint(joint2);



/*
	// the same as b2RevoluteJointDef, but without anchor
	var joint1 = new box2d.b2DistanceJointDef();

	joint1.Initialize(wheel1.body, wheel2.body, wheel1.body.GetWorldCenter(), wheel2.body.GetWorldCenter());

	joint1.frequencyHz = 15;
	joint1.dampingRatio = 1;

	world.CreateJoint(joint1);

*/

	// IMPULS!!!!
	setTimeout(function () {
		wheel2.body.ApplyImpulse(
			new box2d.b2Vec2(
				Math.cos(45 * (Math.PI / 180)) * 500,
				Math.sin(45 * (Math.PI / 180)) * 500
			),
			wheel2.body.GetWorldCenter()
		);
	}, 5e3)

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

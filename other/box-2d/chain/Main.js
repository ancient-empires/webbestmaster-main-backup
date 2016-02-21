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
	b2DistanceJointDef: Box2D.Dynamics.Joints.b2DistanceJointDef,
	b2MouseJointDef: Box2D.Dynamics.Joints.b2MouseJointDef,
	b2AABB: Box2D.Collision.b2AABB
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

	var chain = [];

	for (var i = 0, len = 10; i < len; i += 1) {


		var bodyDef = new box2d.b2BodyDef();

		bodyDef.type = box2d.b2Body.b2_dynamicBody;

		bodyDef.position.x = (800 / 20) / SCALE + i;
		bodyDef.position.y = (600 / 1) / SCALE;

		var fixDef = new box2d.b2FixtureDef();

		fixDef.shape = new box2d.b2PolygonShape();
		fixDef.shape.SetAsBox(0.5, 0.1);

		fixDef.density = 1;
		fixDef.friction = 0.5;
		fixDef.restitution = 0.3;

		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);


		chain.push({
			bodyDef: bodyDef,
			fixDef: fixDef,
			body: body
		});

	}


	for (i = 1, len = 10; i < len; i += 1) {

		var prevLink = chain[i - 1];
		var nextLink = chain[i];

		var joint = new box2d.b2DistanceJointDef();

		var prevX = prevLink.body.GetWorldCenter().x + 0.5/2 + 0.15;
		var nextX = nextLink.body.GetWorldCenter().x - 0.5/2 - 0.15;
		var y = prevLink.body.GetWorldCenter().y;


		joint.Initialize(
			prevLink.body,
			nextLink.body,
			new box2d.b2Vec2(prevX, y),
			new box2d.b2Vec2(nextX, y)
		);

		world.CreateJoint(joint);

	}

}

function tick() {

	if (isMouseDown) {
		mouseDownAt(mouseX, mouseY);
	} else if (isMouseDownFn()) {
		mouseUp();
	}


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

var mouseX, mouseY, isMouseDown, mouseJoint;

var canvas = document.getElementById('debug');

canvas.addEventListener("mousedown", function (e) {
	isMouseDown = true;
	handleMouseMove(e);
	document.addEventListener("mousemove", handleMouseMove, true);
}, true);

canvas.addEventListener("mouseup", function () {
	document.removeEventListener("mousemove", handleMouseMove, true);
	isMouseDown = false;
	mouseX = undefined;
	mouseY = undefined;
}, true);

function handleMouseMove(e) {
	mouseX = (e.clientX - canvas.getBoundingClientRect().left) / SCALE;
	mouseY = (e.clientY - canvas.getBoundingClientRect().top) / SCALE;
};


function mouseDownAt(x, y) {
	if (!mouseJoint) {
		var body = getBodyAt(x, y);
		if (body) {
			var md = new box2d.b2MouseJointDef();
			md.bodyA = world.GetGroundBody();
			md.bodyB = body;
			md.target.Set(x, y);
			md.collideConnected = true;
			md.maxForce = 300000000000000000.0 * body.GetMass();
			mouseJoint = world.CreateJoint(md);
			body.SetAwake(true);
		}
	} else {
		mouseJoint.SetTarget(new box2d.b2Vec2(x, y));
	}
}


function getBodyAt(x, y) {
	var mousePVec = new box2d.b2Vec2(x, y);
	var aabb = new box2d.b2AABB();
	aabb.lowerBound.Set(x - 0.001, y - 0.001);
	aabb.upperBound.Set(x + 0.001, y + 0.001);

	// Query the world for overlapping shapes.

	var selectedBody = null;
	world.QueryAABB(function (fixture) {
		if (fixture.GetBody().GetType() != box2d.b2Body.b2_staticBody) {
			if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
				selectedBody = fixture.GetBody();
				return false;
			}
		}
		return true;
	}, aabb);
	return selectedBody;
}

function isMouseDownFn() {
	return (mouseJoint != null);
}

function mouseUp () {
	world.DestroyJoint(mouseJoint);
	mouseJoint = null;
}

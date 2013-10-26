var   b2Vec2 = Box2D.b2Vec2
 , b2BodyDef = Box2D.b2BodyDef
 , b2Body = Box2D.b2Body
 , b2FixtureDef = Box2D.b2FixtureDef
 , b2Fixture = Box2D.b2Fixture
 , b2World = Box2D.b2World
 , b2MassData = Box2D.b2MassData
 , b2PolygonShape = Box2D.b2PolygonShape
 , b2CircleShape = Box2D.b2CircleShape;

NINJA_RADIUS = 20.0
SCALE = 30.0

function outside(x, y) {
  var CANVAS_WIDTH = $('#gameCanvas').width();
  var CANVAS_HEIGHT = $('#gameCanvas').height();
  return x < 0 || y < 0 || x > CANVAS_WIDTH || y > CANVAS_HEIGHT;
}

var Vector2D = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector2D.prototype.tob2Vec2 = function(scale) {
  if (scale == null) scale = 1.0;
  return new b2Vec2(this.x / scale, this.y / scale);
}
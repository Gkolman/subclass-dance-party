var GoodDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

GoodDancer.prototype = Object.create(Dancer.prototype);
GoodDancer.prototype.constructor = GoodDancer;

GoodDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn('slow');
};
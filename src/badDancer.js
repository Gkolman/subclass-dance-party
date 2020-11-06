var BadDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

BadDancer.prototype = Object.create(Dancer.prototype);
BadDancer.prototype.constructor = BadDancer;


BadDancer.prototype.step = function() {

  // invoke step so that it properly refers to dancer.step
  Dancer.prototype.step.call(this); // ->
  this.$node.fadeIn('slow');
};
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = blinkyDancer.step;
  //this.step();

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {


  makeDancer.prototype.step.call(this);
  // oldStep -> reference to makeDancer.step -> was invoked

  //invoked old step

  //setTimeout(this.step, this.timeBetweenSteps);
  //this.step();
  // we need to invoke the old version of step() which, will set the position.
  // make the constructor blink

  this.$node.toggle();
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // visible
  // not visible
  //
};
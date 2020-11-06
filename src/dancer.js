// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  console.log('this = ', this);
  console.log('name = ', (this.__proto__.constructor.name));
  //`${this.name}`
  this.$node = $(`<span class="${this.__proto__.constructor.name}"></span>`);
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function() {
    that.step();
  }
  , this.timeBetweenSteps);
};
// step sets the time in between steps
// dancer.step();

// invokes the step method within dancer
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//Dancer.prototype.lineUp = function() {
//this.$node.css(styleSettings) = {
//   top: ???
//   left: ??? we need to make each dancer have a different number
//   }
// };
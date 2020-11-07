$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.addLineUpButton').on('click', function(event) {
    for (var currentDancer of window.dancers) {
      console.log(currentDancer.left);
      //currentDancer.left = 0;

      var styleSettings = {
        left: '100%'
      };
      currentDancer.$node.css(styleSettings);
    }
  });

  $('.addInteractButton').on('click', function(event) {
    var firstDancer = window.dancers[0];
    var firstDancerPosition = window.dancers[0].left;

    var closestDancer = null;
    var closestPoint = null;
    var closestDistance = null;


    for (var i = 1; i < window.dancers.length; i++ ) {
      var dancer = window.dancers[i];
      if (closestDancer === null) {
        closestDancer = dancer;
        closestPoint = dancer.left;
        closestDistance = Math.abs(dancer.left - firstDancer.left);
      } else {

        var comparison = Math.abs(firstDancer.left - dancer.left);
        if (comparison < closestDistance) {
          closestDistance = comparison;
          closestDancer = dancer;
        }
      }
    }

    var doStuff = function() {
      console.log('firstDancer = ', firstDancer);
      console.log('closestDancer = ', closestDancer);
      var firstDancerSelector = firstDancer.$node;

      var style = {
        border: '10px solid red'
      };
      firstDancer.$node.css(style);
      closestDancer.$node.css(style);
      //closestDancer.$node.css = style;


      console.log(firstDancerSelector);
      //firstDancer

      //closestDancer
    };
    doStuff();

    // in here
  });
  // end of blinky dancer append function
}); // ends document.ready function

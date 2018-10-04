'use strict'
var marks = [5, 4, 6, 7, 9];
var inflatedMarks = marks.map(function(include){
  return include + 1;
});
console.log(inflatedMarks);

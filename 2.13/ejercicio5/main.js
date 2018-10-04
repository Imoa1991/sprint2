'use strict'
var pins = [2389, 2384, 2837, 5232, 8998];
var pares = pins.filter(function(number){
 return number % 2 === 0;
});
console.log(pares);

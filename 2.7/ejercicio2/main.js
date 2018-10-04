'use strict';
var numbers = [5,8,6,2,1];
var pacos = [4,5,6,7];
function mediaNumber (array) {
  var acumulador = 0;
  for(var i = 0; i < array.length; i++) {
     acumulador += array[i];
  }
  var media = acumulador/array.length;
  return media;
}
alert(mediaNumber(numbers));
alert(mediaNumber(pacos));

'use strict';
var age = prompt('¿Qué edad tiene tu perro?');
age = parseInt(age);
var firstYear = 15;
var secondYear = 9;
var thirdYear = 5;
if (age === 1) {
  alert('son 15 de humano');
} else if (age === 2) {
  alert (firstYear + secondYear);
} else if (age === 3) {
  alert (firstYear + secondYear + thirdYear);
} else if (age > 3) {
  alert(firstYear + secondYear + (thirdYear*(age-2)));
} else {
  alert('el número que has puesto es una mierda');
}

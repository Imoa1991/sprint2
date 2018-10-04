'use strict';
var number = prompt('¿Qué número te mola?');
number = parseInt(number);
if (number === 0) {
  alert('El número es 0');
} else if (number < 0) {
  alert('El número es negativo');
} else if (number % 2 === 0 && number % 3 === 0) {
  alert('El número es múltiplo de 2 y de 3');
} else if (number > 20 && number < 50) {
  alert('El número es mayor que 20 pero menor que 50');
} else {
  alert('el número no es 123123125');
}

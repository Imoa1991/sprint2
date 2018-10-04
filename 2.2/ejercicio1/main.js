/*var age = 35;
if ( age > 30 ){
  alert('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else if ( age >= 20) {
  alert('Tienes entre 20 y 30 años'); //Esta línea se ejecuta solo si NO se cumple la primera condición y SÍ se cumple la segunda
} else if ( age >= 10) {
  alert('Tienes entre 10 y 19 años'); //Esta línea se ejecuta solo si NO se cumplen la primeras condiciones y SÍ se cumple la última
} else {
  alert('Eres un niño entre 0 y 9 años'); //Esta línea se ejecuta solo si NO se cumplen ninguna de las condiciones anteriores
}*/
'use strict';
var user = prompt('¿Cual es tu nombre?');
user = user.toLowerCase();//Esto hace que compare los nombres siempre en minisculas si pusiera toUpperCase lo compararía en mañusculas todas las letras.
var name = 'irene';
var name2 = 'aylen';
if (name === user || name2 === user) {
  alert('Bienvenida ' + user);
} else {
  alert('Lo siento pero el usuario que has introducido no está registrado');
}

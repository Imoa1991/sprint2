/*Vamos a partir de una variable result con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable result en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable result.

NOTA: Este tipo de variable como result que se va actualizando y al final tiene el resultado de varias operaciones se llama aculumador. Puede ser de tipo numérico pero también de tipo cadena.*/
'use strict';
var result = 0;
for(var i = 0; i <= 9; i++) {
  console.log('El resultado es: ' + result);
  result = (result + 2); //sale 18 porque lo escribo antes de hacer la suma
}
var result = 0;
for(var i = 0; i <= 9; i++) {
  result = (result + 2);
  console.log('El resultado es: ' + result);// sale 20 porque hago la suma antes de escribirlo
}

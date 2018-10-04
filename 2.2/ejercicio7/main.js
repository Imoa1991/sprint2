/*Cada tres años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuando serán las 15 próximas lunas.*/
'use strict';
var vacio = '';
var tree = '▲';
for (var i = 0; i <= 4; i++) {
  vacio = vacio + tree;
  console.log(vacio);
}

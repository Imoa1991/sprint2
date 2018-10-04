/*Cada tres años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuando serán las 15 próximas lunas.*/
'use strict';
var moon = 2017;
for (var i = 0; i <= 14; i++) {
  moon = (moon + 3)
  console.log('Años en los que se ve la Luna del cazador ' + moon);
}

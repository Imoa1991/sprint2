'use strict';
var year = 2018;
var leap = 4;
var module = year % leap;
var difference = leap - module;
var nextLeapYear = difference + year;
alert(module + ' Resto');
alert(' Próximo año bisiesto ' + nextLeapYear);
// 0 4 8 12 16
// 13 % 4 = 1 Resto, Años que han pasado desde el último bisiesto.
// 4 - 1 = 3 Años que faltan para que sea el proximo bisiesto.
// 13 + 3 = 16 Próximo año bisiesto.

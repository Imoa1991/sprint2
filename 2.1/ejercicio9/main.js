"use strict";
var price = prompt('¿Cuanto ha sido la cuenta?')
var commensal = prompt('¿Cuantos comensales sois?');
var priceNumber = parseInt(price);
var commensalNumber = parseInt(commensal);
alert('Cada comensal debe pagar: ' + priceNumber / commensalNumber);

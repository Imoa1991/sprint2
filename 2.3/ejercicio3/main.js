/*Crea una función que reciba como parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si introducimos un 10, la función devolverá "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/

function price(amount) {
//var amount = parseInt(amount);
var taxes = amount * 0.21;
var priceWithTaxes = amount + taxes;
alert('Precio sin IVA: ' + amount + ', IVA: ' + taxes + ' y Total: ' + priceWithTaxes);
}
var ask = parseInt(prompt('¿Cuanto vale el producto?'));
price(ask);

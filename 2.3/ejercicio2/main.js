/*Crea una función que reciba 4 parámetros, cada uno con un número, y devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado usando alert.*/
function medium(a,b,c,d) {
  var sum = a + b + c + d;
  var division = sum / 4;
  return division;
}
var mediumVar = medium(2,3,4,5);
alert(mediumVar);

//Segunda forma de hacerlo.
function mediumWithAlert(a,b,c,d) {
  var sum = a + b + c + d;
  var division = sum / 4;
  alert(division);
}
mediumWithAlert(2,3,4,5);

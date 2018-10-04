/*Crea tu árbol de Navidad
Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:.*/
'use strict';
var row = '';
var tree = '▲';
var start ='★';
var line ='|';
console.log(start);
for (var i = 0; i <=4; i++) {
  row = row + tree;
  console.log(row);
}
console.log(line);

/*intentandolo hacer con condicionales*/
row = '';
for (var i = 0; i<=6; i++){
  if (i === 0) {
    console.log(start);
  }
  if (i > 0 && i < 6){
    row = row + tree;
    console.log(row);
  }
  if (i === 6) {
    console.log(line);
  }
}

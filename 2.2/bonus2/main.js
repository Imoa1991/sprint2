/*Crea tu árbol de Navidad
Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:.*/
'use strict';
var rowTrees = '';
var tree = '▲';
var start ='★';
var line ='|';
var space = ' ';
var rowSpaces = '';
for (var i = 0; i <= 4; i++) {
  for (var j = 0; j <= 4 - i; j++){
    rowSpaces = rowSpaces + space;
  }

  rowTrees = rowTrees + tree;
    console.log(rowTrees);
  if (i === 4) {
    console.log(line);
  }
}

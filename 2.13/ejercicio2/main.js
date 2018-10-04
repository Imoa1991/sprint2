'use strict'
var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
var saludo = names.map(function(name){
  return 'Bienvenido '+ name;
});
console.log(saludo);

'use strict'
var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
var saludo = users.map(function(criatura){
  if (criatura.isPremium === false) {
    return 'Bienvenido '+ criatura.name;
  }
  else {
    return 'Bienvenido '+ criatura.name + ' gracias por confiar en nosotros';
  }
});
console.log(saludo);

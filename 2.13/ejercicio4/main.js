'use strict'
var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];
var premium = users.filter(function(premiumUsers){
return premiumUsers.isPremium === true;
});
console.log(premium);
//Para que salga el nombre.
//var usuariosPremium = premium.map(function(user){
// return user.name;
// });
// console.log(usuariosPremium);

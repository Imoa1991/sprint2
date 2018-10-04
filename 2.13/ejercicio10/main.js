'use strict'
var users = [
  {name: 'María', isPremium: false, pin: 2389},
  {name: 'Lucía', isPremium: true, pin: 2384},
  {name: 'Susana', isPremium: true, pin: 2837},
  {name: 'Rocío', isPremium: false, pin: 5232},
  {name: 'Inmaculada', isPremium: false, pin: 8998}
];
//Ordenado alfabeticamente
var orderedUsers = users.sort(function(c1,c2){
  if (c1.name > c2.name) {
    return 1;
} else if (c1.name < c2.name) {
    return -1;
} else {
    return 0;
}
});
console.log(orderedUsers);
//Ordenado por el pin
var orderedPin = users.sort(function(c1,c2){
  if (c1.pin > c2.pin) {
    return 1;
} else if (c1.pin < c2.pin) {
    return -1;
} else {
    return 0;
}
});
console.log(orderedPin);

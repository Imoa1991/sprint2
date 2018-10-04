'use strict'
var users = [
  {name: 'Gregory Goyle', time: 56},
  {name: 'Nymphadora Tonks', time: 9},
  {name: 'Luna Lovegood', time: 45},
  {name: 'Cedric Diggory', time: 28},
  {name: 'Cho Chang', time: 35}
];
var winner = users.reduce(function(acc, item) {
  if (acc.time > item.time) {
    return acc;
  } else {
    return item;
  }
});

console.log(winner);

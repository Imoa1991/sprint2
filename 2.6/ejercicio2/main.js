// function name(){
//   var paragraph = document.querySelector('#name');
//   alert('Hola, ' + paragraph.value );
// }
// var clickButton = document.querySelector('.button');
// clickButton.addEventListener('click', name);
var paragraph = document.querySelector('.name');
var button = document.querySelector('.button');
var names = document.querySelector('.me');
function pintAlert(){
var content = paragraph.value;
names.innerHTML = 'Hola ' + content;
}
button.addEventListener('click', pintAlert);

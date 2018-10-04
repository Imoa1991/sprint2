var ask = prompt('¿Como te llamas?');
var name = ask;
var changeText = document.querySelector ('.firstText');
changeText.innerHTML = 'Hola ' + name;

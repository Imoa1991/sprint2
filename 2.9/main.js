'use strict'

for (var i=0; i<10; i++) {
   var newItem = document.createElement('p');
   newItem.className = 'frasecita';
   newItem.id = 'paragraph' + i;
   var newContent = document.createTextNode('He aprendido bien cómo funcionan los bucles');
   newItem.appendChild (newContent);
   var newDiv = document.createElement('div');
   newDiv.appendChild (newItem);
   var body = document.querySelector('.body');
   body.appendChild (newDiv);
   var select = document.createElement('select');
   select.id = i;
   newDiv.appendChild (select);
   var option1 = document.createElement('option');
   option1.className = 'blanco';
   var colorWhite = document.createTextNode('blanco');
   option1.appendChild(colorWhite);
   var option2 = document.createElement('option');
   option2.className = 'azul';
   var colorBlue = document.createTextNode('azul');
   option2.appendChild(colorBlue);
   var option3 = document.createElement('option');
   option3.className = 'rojo';
   var colorRed = document.createTextNode('rojo');
   option3.appendChild(colorRed);
   var option4 = document.createElement('option');
   option4.className = 'verde';
   var colorGreen = document.createTextNode('verde');
   option4.appendChild(colorGreen);
   var option5 = document.createElement('option');
   option5.className = 'amarillo';
   var colorYellow = document.createTextNode('amarillo');
   option5.appendChild(colorYellow);
   var option6 = document.createElement('option');
   option6.className = 'rosa';
   var colorPink = document.createTextNode('rosa');
   option6.appendChild(colorPink);
   select.appendChild(option1);
   select.appendChild(option2);
   select.appendChild(option3);
   select.appendChild(option4);
   select.appendChild(option5);
   select.appendChild(option6);
   // select.addEventListener('change', changeColor);
   select.onchange = changeColor;
}
// var selects = document.querySelectorAll('select');
// for (var i=0; i<selects.length; i++) {
//   selects[i].addEventListener('change', changeColor);
// }

function changeColor(event){
  var paragraph = document.querySelector('#paragraph' + event.currentTarget.id);
  paragraph.setAttribute('class', 'frasecita ' + event.currentTarget.value); 
}

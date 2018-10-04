var text = document.querySelector ('.text');
var body = document.querySelector ('.body');
var newText = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>'
function openText (){
  body.innerHTML += newText;
}
text.addEventListener ('mouseover', openText);

para que se repita una sola vez debemos aplicar la repeticion(lo que se añade) a body en la funcion y texto en add porque realmente se añade solo el texto.

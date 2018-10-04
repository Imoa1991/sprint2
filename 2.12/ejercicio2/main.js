'use strict';

var button= document.querySelector(".boton");
var input= document.querySelector(".name");
var lista= document.querySelector("ul");

function searchCaracter(){
  var url= "https://swapi.co/api/people/?search=" + input.value;
  fetch(url)
    .then(function(response){
      return response.json();

    })
    .then(function(json){
      var results = json.results;
      for (var i=0; i<results.length; i++){
        var caracter= results[i]; //esto se hace porque hay varios resultados dentro del objeto y quiero obtenerlos todos
        var li = document.createElement("li"); // aqui creo los li que van dentro de los ul
        lista.appendChild(li); // aqui "adopto" el ul que es el padre con el li que acabo de crear
        li.innerHTML= caracter.name + " " + caracter.gender; //para agregar el contenido al li solo tengo que utilizar innerHTML, ojo utilizo el valor que se ha recorrido con el for 
      }
    });
}
button.addEventListener("click", searchCaracter);

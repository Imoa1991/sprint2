'use strict'
var movies = [
  'Inception',
  'The butterfly effect',
  'Eternal sunshine of the spotless mind',
  'Blue velvet',
  'Split'
];
var button= document.querySelector('.start');
var body= document.querySelector('body');
//evento para que pinte las peliculas a través de la función printMovies
button.addEventListener('click', printMovies);

function printMovies() {
//Creamos un ul
  var list = document.createElement('ul');
//Se hace un for para recorrer el array
  for (var i = 0; i < movies.length; i++) {
//nos dice en que pelicula nos encontramos
    var title = movies[i];
    //creamos li por cada pelicula y metemos el nombre de cada peli dentro
    var listLi = document.createElement('li');
    //listLi.innerHTML = title;
    var textLi = document.createTextNode(title);
    listLi.appendChild(textLi);
    //hacemos otro evento para cuando hacemos click en una de las peliculas
    listLi.addEventListener('click', showTitle);
    list.appendChild(listLi);
  }
  //pinta la lista en el body
  body.appendChild(list);
}
//saca un alert con el nombre de la pelicula el cual sabemos a traves de target que busca el elemto del DOM en el que nos encontramos y en innerHTML pone el nombre de la pelicula.
function showTitle(event) {
  alert(event.target.innerHTML);
}

//Crear una página vacía que al pulsar la tecla 'r' se ponga el fondo rojo y al pulsar la 'a' ponga el fondo de la web azul. Vamos a ecuchar evento de teclado (directamente sobre el elemento document). En el objeto evento podemos consultar la propiedad key para saber qué tecla se ha pulsado.
var myBody = document.querySelector('.body');
myBody.addEventListener('keydown', function (event){
  console.log(event);
  //Esto hace que si me llega una letra en mayuscula la pasa a minuscula.
  var lowerKey = event.key.toLowerCase();
  if (lowerKey === 'r' || lowerKey === 'a') {
    //elimina las clases que he pintado antes (r y a).
    clear();
    //añade la clase al body (r y a).
    myBody.classList.add(lowerKey);
  }
  // if (event.key === 'r') {
  //   myBody.classList.add('r');
  // } else if (event.key === 'a') {
  //   myBody.classList.add('a');
  // }
});
 function clear(){
    myBody.classList.remove('r', 'a');
 }
// var objeto = {
//   clear: function () {
//     myBody.classList.remove('r', 'a');
//   }
// }
//Para llamar a esto tendriamos que hacer objeto.clear();

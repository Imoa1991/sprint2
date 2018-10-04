/*Como hemos visto en las clases anteriores, en CSS tenemos dos tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, en caso de ser border-box o el ancho total de la caja, en caso de ser content-box.
La función tendrá 4 parametros: el primero será un booleano para especificar si es border-box o no, el segundo será el ancho del contenido o de la caja entera, el tercero el padding y el cuarto el borde.
Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.*/
// function calculator(width,padding,border){

//Forma way de hacerlo
function calculator(){
  var questionBox = prompt('¿Qué modelo de caja estamos usando?');
  questionBox = questionBox.toLowerCase();
  var width = parseInt(prompt('¿Cual es el ancho de la caja?'));
  var padding = parseInt(prompt('¿Cual es tu padding?'));
  var border = parseInt(prompt('¿Cual es tu borde?'));
  if (questionBox === 'border-box'){
    return width;
  } else {
    return width + (padding*2) + (border*2);
  }
}
//alert(calculator(200,15,5));

//Forma menos way de hacerlo
alert(calculator());

function dim(borderbox, width, height, padding, border) {
  var result;
  if (borderbox === true) {
    // aquí voy a calcular las dimensiones como si usasemos border-box
    result = 'Con border box mi caja mide ' + width + 'x' + height;
  } else {
    // aquí voy a calcular las dimensiones como si usasemos content-box
    result = 'Con content box mi caja mide ' + (width + (padding*2) + (border*2)) + 'x' + (height + (padding*2) + (border*2));
  }
  return result;
}

console.log(dim(true, 400, 100, 10, 5));

//forma super caca de hacerlo
function dim(borderbox, width, padding, border) {
  var result;
  if (borderbox === true) {
    // aquí voy a calcular las dimensiones como si usasemos border-box
    result = width;
  } else {
    // aquí voy a calcular las dimensiones como si usasemos content-box
    result = width + (padding*2) + (border*2);
  }
  return result;
}

console.log('las dimensiones de mi caja son ' + dim(false, 400, 10, 5));

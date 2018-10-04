/*Crea un nuevo objeto en JavaScript adalaber que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
- Susana, 34 años, periodista
Luego muestra una ventana de alerta para mostrar una frase como esta, accediendo a los datos del objeto:
- 'Mi nombre es María, tengo 34 años y soy periodista'
Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar la alerta) con una nueva Adalaber con estos datos:
- Rocío, 25 años, actriz*/

var adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.studies = 'periodista';
adalaber1.showBio = function (){
  return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.studies;
}
adalaber1.run = function () {
  return 'Estoy corriendo';
}
alert(adalaber1.showBio());
alert(adalaber1.run());

var adalaber2 = {
  name: 'Rocío',
  age: 25,
  studies: 'actriz',
  distance: 50,
  showBio: function(){
    return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' años y soy ' + this.studies
  },
  runAMarathon: function(){
    return 'Estoy corriendo un maratón de ' + this.distance + ' kilómetros'
  }
}
alert(adalaber2.showBio());
alert(adalaber2.runAMarathon());
/*Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestra una ventana de alerta con la frase 'Estoy corriendo'.

Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse una ventana de alerta con el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.*/

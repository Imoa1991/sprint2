/*Vamos a crear un contador con los datos del contador que comentamos en la introducción de esta sesión. Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.
Con la ayuda de alert Probaremos a usar varios métodos distintos y comprobar el estado actual para ver si funciona correctamente.*/

var counter = {
  max: 20,
  min: 10,
  initial: 11,
  now: 12,
  askForNewNow: function () {
    var now = parseInt(
      prompt('¿Que número te gusta entre ' + this.max + ' y ' + this.min + ' ?')
    );
    if (now < this.max && now > this.min) {
      this.now = now;
    } else {
      alert('Este número no es valido');
    }
  },
  increase: function () {
    if (this.now < this.max && this.now >= this.min){
      this.now += 1;
    }
  },
  decrease: function () {
    if (this.now > this.min && this.now <= this.max) {
      this.now -= 1;
    }
  },
  resettle: function () {
    return this.initial;
  }
};
counter.askForNewNow();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
alert(counter.now);

counter.decrease();
alert(counter.now);

counter.resettle();
alert(counter.initial);

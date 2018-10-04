var counter = 0;
var minutes = 0;
var time = document.querySelector('.time');
function temporizator() {
  if (counter < 59 && minutes === 0) {
    counter += 1;
    time.innerHTML = 'Escrito hace ' + counter + ' segundo';
  } else if (counter === 59) {
    minutes += 1;
    counter = 0;
    time.innerHTML = 'Escrito hace ' + minutes + ' minutos ' + counter + ' segundo' ;
  } else if (minutes != 0){
    counter += 1;
    time.innerHTML = 'Escrito hace ' + minutes + ' minutos ' + counter + ' segundo';
  }
}
var temp = setInterval(temporizator, 1000);

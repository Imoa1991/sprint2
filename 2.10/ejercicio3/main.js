var counter = 0;
var img = '<img src="http://www.catadelvino.com/fotos/87201400109936042.jpg" width="50" alt="uva" class="img">';
function temporizator (){
    counter += 1;
    var time = document.querySelector('.time');
    var uvas = document.querySelector('.uvas');
    time.innerHTML = counter;
    uvas.innerHTML += img;
    if (counter === 12){
      clearInterval(temp);
    }
 }
var temp = setInterval(temporizator, 1000);

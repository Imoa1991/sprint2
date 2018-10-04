var counter = 0;
function temporizator (){
    counter += 1;
    var time = document.querySelector('.time');
    time.innerHTML = counter;
 }
setInterval(temporizator, 2000);

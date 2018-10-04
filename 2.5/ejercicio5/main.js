var elementsList = document.querySelector('.list');
var list1 ='';
for (var i = 0; i <= 2; i++) {
  list1 += '<li>texto ' + (i+1) + '</li>';
}
elementsList.innerHTML = list1;

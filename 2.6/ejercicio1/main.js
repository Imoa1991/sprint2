function changeLanguage (){
  console.log(event);
  var paragraph = document.querySelector('.hello');
  paragraph.innerHTML = 'Hello';
}

var clickButton = document.querySelector('#button');
clickButton.addEventListener('click', changeLanguage);

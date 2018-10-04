var tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Aprender cómo funcionan los objetos de JavaScript',
    completed: false
  }
];
var ul = document.querySelector('.list');
for (var i = 0; i<tasks.length; i++) {
  if(tasks[i].completed === true) {
    var checkbox = '<input type="checkbox" checked>';
    var crossClass = 'cross';
  } else {
    var checkbox = '<input type="checkbox">';
    var crossClass = '';
  }
  var li = '<li class="' + crossClass + '">' + tasks[i].name + checkbox + '</li>';
  ul.innerHTML += li;
}

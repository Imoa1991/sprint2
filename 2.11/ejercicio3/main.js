'use strict';

var button= document.querySelector(".boton");
var input= document.querySelector(".name");
var paco= document.querySelector(".user");
var foto= document.querySelector(".foto");
var repos= document.querySelector(".number");
var email= document.querySelector(".email");
console.dir(input);

function user(){
var userName= "https://api.github.com/users/" +  input.value;
  fetch(userName)
    .then(function(response){
      console.log(response);
      return response.json();

    })
    .then(function(json){
      console.log(json);
      paco.innerHTML= json.name;
      foto.src= json.avatar_url;
      repos.innerHTML= json.public_repos;
      email.innerHTML= '<a href=' + json.html_url + '>' + json.html_url + '</a>';
   });
}
button.addEventListener("click", user);

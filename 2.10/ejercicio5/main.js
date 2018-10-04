function removeMsg() {
  var msg = document.querySelector('.msg');
  msg.innerHTML = 'Su sesión ha expirado';
}
setTimeout(removeMsg, 3000);

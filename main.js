//const menu = document.querySelector('.menu')


function showMenu(a) { 
  let menu = document.getElementById(a) 
  menu.classList.add("visible");
}

function fixMenu() {
  menu.classList.toggle("fixed");
  menu.classList.remove("visible");
  
}
console.log('hola');

function hiddenMenu(a){
  let menu = document.getElementById(a)   
  menu.classList.remove("visible");
}
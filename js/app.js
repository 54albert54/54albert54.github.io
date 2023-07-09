const imagen1 = document.getElementById('imagen1')
const imagen2 = document.getElementById('imagen2')

const navBar = document.querySelector('.navbar')
const cargarImagen = (e)=>{

e.forEach((entrada) => {
  if (entrada.isIntersecting){
    entrada.target.classList.add('visible')
    
  }else
  entrada.target.classList.remove('visible')
});
}
 
const observador = new IntersectionObserver(cargarImagen, {
  root: null, //tamaño total de la pantalla
  rootMargin:'0px 0px 0px 0px' , // arriba derecha abajo izquierda 
  threshold:.2 // que tanto esta el el elemento esta en la pantalla

})

//observador.observe(imagen1)     // hay que llamar una vez la funcioncion por cada elemetno 
//observador.observe(imagen2)

let paraObservar = [imagen1,imagen2 ] // amenos que se haca un forEach  de esta manera

paraObservar.forEach(imanes =>{
  observador.observe(imanes)}
  )

 
 const mostrarMenu =()=>{
  navBar.classList.toggle('aparecer')
 }
 function ocultarMenu(){
  navBar.classList.add('aparecer')
 }
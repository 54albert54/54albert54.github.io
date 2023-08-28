const skillMovil = document.querySelector('.data')
const infoMovil = document.querySelector('.data-movil')
const botnSkill = document.querySelector('.botn-skill')
const botnInfo = document.querySelector('.botn-info')
const extraInfo = document.querySelector('#extra-info')
const extraInfoMovile = document.querySelector('.extra-info')

let newData = '27-agust-2023 v1.1'

extraInfo.innerHTML =  newData
extraInfoMovile.innerHTML =  newData


const mostrarInfoMovil = ()=>{
  skillMovil.classList.add('invisible')
  infoMovil.classList.remove('invisible')
  botnInfo.style.background = "#fff";
  botnSkill.style.background = "linear-gradient(#848484,#303030) ";
}
const mostrarSkillMovil = ()=>{
  skillMovil.classList.remove('invisible')
  infoMovil.classList.add('invisible')
  botnSkill.style.background = "#000";
  botnSkill.style.color = "#fff";
  botnInfo.style.background = "linear-gradient(#848484,#303030) ";
}
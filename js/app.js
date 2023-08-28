const skillMovil = document.querySelector('.data')
const infoMovil = document.querySelector('.data-movil')
const botnSkill = document.querySelector('.botn-skill')
const botnInfo = document.querySelector('.botn-info')
const extraInfo = document.querySelector('#extra-info')
const extraInfoMovile = document.querySelector('.extra-info')
const fixedDiv = document.querySelector('.botnes');
const originalOffsetTop = fixedDiv.offsetTop;


let newData = '27-agust-2023 v1.2'

extraInfo.innerHTML =  newData
extraInfoMovile.innerHTML =  newData

let skillSide = true;

let shadowBLK = '#0d0c0c83';
let shadowWHT = '#84848453';
let swadow = shadowWHT
const mostrarInfoMovil = ()=>{
  skillMovil.classList.add('invisible')
  infoMovil.classList.remove('invisible')
  botnInfo.style.background = "#fff";
  botnSkill.style.background = "linear-gradient(#848484,#303030) ";
  swadow = shadowBLK
}
const mostrarSkillMovil = ()=>{
  skillMovil.classList.remove('invisible')
  infoMovil.classList.add('invisible')
  botnSkill.style.background = "#000";
  botnSkill.style.color = "#fff";
  botnInfo.style.background = "linear-gradient(#848484,#303030) ";
  swadow = shadowWHT
}
window.addEventListener('scroll', function () {
  
  if (window.pageYOffset >= originalOffsetTop) {
      fixedDiv.style.position = 'fixed';
      fixedDiv.style.top = '13px';
      fixedDiv.style.boxShadow=` 0 4px 20px 4px ${swadow}`;
      fixedDiv.style.borderRadius='0';
  } else {
      fixedDiv.style.position = 'relative';
      fixedDiv.style.top = '';
      fixedDiv.style.boxShadow='none';
  }
});
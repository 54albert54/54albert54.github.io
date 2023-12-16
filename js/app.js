const skillMovil = document.querySelector('.data')
const infoMovil = document.querySelector('.data-movil')
const botnSkill = document.querySelector('.botn-skill')
const botnInfo = document.querySelector('.botn-info')
const extraInfo = document.querySelector('#extra-info')
const extraInfoMovile = document.querySelector('.extra-info')
const fixedDiv = document.querySelector('.botnes');
const fixedDivTitle = document.querySelector('.movile-title');
const originalOffsetTop = fixedDiv.offsetTop;

const nameContainer = document.querySelector('.movile-namefixed');


let newData = ' v1.4'//27-agust-2023

extraInfo.innerHTML =  newData
extraInfoMovile.innerHTML =  newData

let skillSide = true;

let shadowBLK = '#0d0c0c83';
let shadowWHT = '#84848453';
let swadow = shadowWHT
const mostrarInfoMovil = ()=>{
  skillMovil.classList.add('invisible')
  infoMovil.classList.remove('invisible')
  botnInfo.style.background = "#cdcdcd";
  botnSkill.style.background = "linear-gradient(#848484,#303030) ";
  swadow = shadowBLK
}
const mostrarSkillMovil = ()=>{
  skillMovil.classList.remove('invisible')
  infoMovil.classList.add('invisible')
  botnSkill.style.background = "#000"; //#04205B
  botnSkill.style.color = "#fff";
  botnInfo.style.background = "linear-gradient(#848484,#303030) ";
  swadow = shadowWHT
}
// window.addEventListener('scroll', function () {
  
  
//   if (window.pageYOffset >= originalOffsetTop) {
//       fixedDiv.style.position = 'fixed';
//       fixedDiv.style.top = '0';
//       fixedDiv.style.boxShadow=` 0 4px 20px 8px ${swadow}`;
//       fixedDiv.style.borderRadius='0';
//       fixedDivTitle.style.opacity= "0"
//       nameContainer.classList.remove('invisible')
//       fixedDiv.style.background = "#04205B";
//   } else {
//       fixedDiv.style.position = 'relative';
//       fixedDiv.style.top = '4px';
//       fixedDiv.style.boxShadow='none';
//       fixedDivTitle.style.opacity= "1"
//       nameContainer.classList.add('invisible')
//       fixedDiv.style.background = "#cdcdcd";
//   }
// });
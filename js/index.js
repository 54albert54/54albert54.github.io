const listMenu = document.querySelector('.header-menuList')
const menuIconContainer = document.querySelector('.header-menuIconContainer')
const proyectSeccion = document.querySelector('.proyectSeccion-continer')










const showMovil = () =>{
  listMenu.classList.toggle('inactive')
    let toggleIcon = listMenu.classList.contains('inactive')
    menuIconContainer.innerHTML = (!toggleIcon)?  
    cancelIcon:menuIcon;
  }

class RepositoyInfo{
  constructor(name,img,code,repoLink,pageLink){
    this.name = name;
    this.img = img;
    this.code = code;
    this.repoLink = repoLink;
    this.pageLink = pageLink;
  }
  showCode(){
    const data = this.code.map(cod => code[cod])
    const allcode = data.join(' ')
    return allcode
  }
}
const allRepo = []
const pokeNatice = new RepositoyInfo('Pokedex React-Natice',"./files/pokedex.png",['react','ts','mysql'],'https://github.com/54albert54/PokeNative',`https://65111f2a70ade65a3ac6363e--astounding-kashata-dbb4fc.netlify.app`)
const MemoryQuiz = new RepositoyInfo('Memory-Quiz',"./files/memoryp.png",['html','css','js'],'https://github.com/54albert54/memoryQuiz','https://54albert54.github.io/memoryQuiz/')
const RockLegends = new RepositoyInfo('Rock Legends',"./files/rocklegend.png",['html','css','js'],'https://github.com/54albert54/RockLegends2in1','https://54albert54.github.io/RockLegends2in1/')

allRepo.push(pokeNatice,MemoryQuiz,RockLegends)
const proyectContainerTemplate = (repoInfo)=>{
  
  return(
`
<div class="main-decorate proyect"> </div>
<p class="sub-title" >${repoInfo.name}</p>
<img class="proyect-img" src="${repoInfo.img} " alt="">
<div class="proyect-codeUsed"  >
  <p class="infoSeccion-title">Codes Used</p>
  <div>
  ${repoInfo.showCode()}
  </div>
  <div class="proyect-links">
    <a class="proyect-boton" href="${repoInfo.repoLink}">Go to the repository.</a>
    <a class="proyect-boton" href="${repoInfo.pageLink}">got to the page.</a>
  </div>
</div>
`)}



allRepo.map(repo =>{
  const div = document.createElement('div')
  div.classList.add('proyect-view')
  div.innerHTML = proyectContainerTemplate(repo)
  proyectSeccion.appendChild(div)
})

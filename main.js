var width = cnv.width;
var height = cnv.height;

//localStorage.setItem('level1', JSON.stringify([]))

var orx = startPosX
var ory = startPosY


//inicio apagar

renderBlocks('add')
/*
function fastAdd() {
  if (!localStorage.hasOwnProperty("level1")) localStorage.setItem('level1', JSON.stringify([]))

  var json = JSON.parse(localStorage.level1)
  json.push([startPosX, startPosY])
  localStorage.level1 = JSON.stringify(json)
  
  renderBlocks('add')
  
  //startPosX = orx
  //startPosY = ory
} 
*/
setInterval(()=>{
  startPosX = Math.max(0,Math.min(World.width - 60,startPosX))
  startPosY = Math.max(0,Math.min(World.height - 60,startPosY))
},0)
/*
function fastRemove() {
  var json = JSON.parse(localStorage.level1)
  json.pop()
  //impede apagar o personagem
  localStorage.level1 = JSON.stringify(json)
  renderBlocks('delete')
}
*/
//fim apagar
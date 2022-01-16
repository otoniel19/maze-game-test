var width = cnv.width;
var height = cnv.height;

localStorage.removeItem('level1')

if(!localStorage.level1) localStorage.setItem('level1', JSON.stringify("[[660,360],[600,360],[720,360],[780,360],[540,360],[540,300],[540,240],[540,180],[540,120],[540,60],[780,60],[780,120],[780,300],[780,240],[780,180],[840,60],[900,60],[900,120],[900,180],[960,180],[1020,180],[1020,60],[1020,0],[1080,60],[1140,60],[1160,60],[1220,60],[1220,0],[1160,0],[1100,0],[1040,0],[1080,180],[1140,180],[1140,240],[1140,300],[1080,300],[1020,300],[960,300],[960,360],[960,420],[1020,420],[1080,420],[1080,480],[1080,540],[1140,480],[1020,540],[900,360],[900,300],[900,420],[900,540],[960,540],[780,540],[720,540],[660,540],[540,540],[540,480],[540,420],[780,420],[720,420],[660,420],[600,420],[420,540],[420,480],[420,420],[420,360],[360,360],[300,360],[300,240],[360,240],[420,240],[420,180],[420,120],[420,60],[360,60],[300,60],[300,120],[360,540],[300,540],[300,480],[180,240],[180,360],[180,180],[180,120],[180,60],[180,300],[180,480],[180,600],[180,540],[180,420],[120,420],[60,420],[60,540],[60,600],[60,60],[60,120],[60,180],[120,180],[60,300]]"))

var orx = startPosX
var ory = startPosY


//inicio apagar

renderBlocks('add')
/*
function fastAdd() {
  //if (!localStorage.hasOwnProperty("level1")) localStorage.setItem('level1', JSON.stringify([]))

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

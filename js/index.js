var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

var Sprites = [];
var Blocks = [];

var Player = new Sprite(0, 0, "player");
var bgimg = document.getElementById("img");
var brickimg = document.getElementById('wall')

var Cam = {
  img: bgimg,
  x: 0,
  y: 0,
  width: cnv.width,
  height: cnv.height,
  leftEdge: function() {
    return this.x + this.width * 0.25;
  },
  rightEdge: function() {
    return this.x + this.width * 0.75;
  },
  topEdge: function() {
    return this.y + this.height * 0.25;
  },
  bottomEdge: function() {
    return this.y + this.height * 0.75;
  }
};

var World = {
  img: bgimg,
  x: 0,
  y: 0,
  width: img.width,
  height: img.height,
  visible: true
};

Sprites.push(World, Player);

Cam.x = (World.width - Cam.x) / 2;
Cam.y = (World.height - Cam.y) / 2;
Player.x = (World.width - Player.x) / 2 + 20
Player.y = (World.height - Player.y) / 2 - 60

var startPosX = Player.x;
var startPosY = Player.y;

function render() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.save();
  ctx.translate(-Cam.x, -Cam.y);
  Sprites.forEach((name) => {
    if (name.visible)
      ctx.drawImage(
        name.img,
        0,
        0,
        name.width,
        name.height,
        name.x,
        name.y,
        name.width,
        name.height
      );
    //apagar depois
    //ctx.drawImage(brickimg, 0, 0, 60, 60, startPosX, startPosY, 60, 60)
  });
  ctx.restore();
}

//apagar isso Também
function renderBlocks(c) {
  if (c == 'add') {
    JSON.parse(localStorage.level1).forEach(name => {
      Sprites.push(new Sprite(name[0], name[1], 'wall'))
      Blocks.push(new Sprite(name[0], name[1], 'wall'))
      //ctx.drawImage(brickimg,0,0,60,60,name[0],name[1],60,60)
    })
  } else {
    if (Sprites.length != 2) {
      Sprites.pop()
      Blocks.pop()
    }
  }
}

function update() {
  if (Player.x < Cam.leftEdge()) {
    Cam.x = Player.x - Cam.width * 0.25;
  }
  if (Player.x + Player.width > Cam.rightEdge()) {
    Cam.x = Player.x + Player.width - Cam.width * 0.75;
  }
  if (Player.y < Cam.topEdge()) {
    Cam.y = Player.y - Cam.height * 0.25;
  }
  if (Player.y + Player.height > Cam.bottomEdge()) {
    Cam.y = Player.y + Player.height - Cam.height * 0.75;
  }

  //limites de movimentação da câmera
  if (Cam.x <= 0) Cam.x = 0;
  if (Cam.x >= 880) Cam.x = 880;
  if (Cam.y <= 8) Cam.y = 8;
  if (Cam.y >= 320) Cam.y = 320;

  Player.x = Math.max(0, Math.min(World.width - Player.width, Player.x));
  Player.y = Math.max(0, Math.min(World.height - Player.height, Player.y));
  Blocks.forEach((blk) => {
    if (blk.visible) Wall(Player, blk);
    blk.x = Math.max(0, Math.min(World.width - blk.width, blk.x));
    blk.y = Math.max(0, Math.min(World.height - blk.height, blk.y));
  });
}

setInterval(() => {
  if (Player.x >= 100 && Player.y >= 560) {
    alert('Vitoria! Mais Niveis futuramente!')
    location.reload(1)
  }
}, 1000)

function addWall(...sprs) {
  if (sprs.length == 0) return;
  sprs.forEach((spr) => {
    Sprites.push(new Sprite(spr[0], spr[1], "wall"));
    Blocks.push(new Sprite(spr[0], spr[1], "wall"));
  });
}

function addMultiWalls(array) {
  if (array.length == 0) return;
  array.forEach((blk) => {
    Sprites.push(new Sprite(blk.x, blk.y, "wall"));
    Blocks.push(new Sprite(blk.x, blk.y, "wall"));
  });
}

function loop() {
  update(); // colisão
  render(); // renderizaçao
  requestAnimationFrame(loop);
}

loop();
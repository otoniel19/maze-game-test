(function () {
  try {
    let Width = screen.availWidth / 2;
    let Height = screen.availHeight / 2 + 100;
    
    const stick = nipplejs.create({
      zone: document.getElementById("nipplejs"),
      size: 200,
      color: "#000",
      mode: "static",
      dynamicPage: true,
      position: {
        top: Height + "px",
        left: Width + "px"
      },
      multiTouch: true
    });
    
    var speed = 2

    stick.on("move", (evt, data) => {
      if (evt.type != "move") return;
      if (data.direction == undefined || data.direction.angle == undefined)
        return;

      var dir = data.direction.angle;

      if (dir == "up") {
        Player.y -= 2 * speed;
        Cam.y -= 2 * speed;
      }
      if (dir == "down") {
        Player.y += 2 * speed;
        Cam.y += 2 * speed;
      }
      if (dir == "left") {
        Player.x -= 2 * speed;
        Cam.x -= 2 * speed;
      }
      if (dir == "right") {
        Player.x += 2 * speed;
        Cam.x += 2 * speed;
      }
    });

    // setInterval(console.clear,0)
  } catch (e) {
    return console.log("ops");
  }
})();


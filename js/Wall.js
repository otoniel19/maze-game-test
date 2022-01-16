function Wall(r1, r2) {
  var cx = r1.centerX() - r2.centerX();
  var cy = r1.centerY() - r2.centerY();

  var sx = r1.halfWidth() + r2.halfWidth() - 10;
  var sy = r1.halfHeight() + r2.halfHeight() - 10;
 
  if (Math.abs(cx) < sx && Math.abs(cy) < sy) {
    var ovx = sx - Math.abs(cx);
    var ovy = sy - Math.abs(cy);
    if (ovx >= ovy) {
      if (cy > 0) {
        r1.y += ovy;
        Cam.y += ovy;
      } else {
        r1.y -= ovy;
        Cam.y -= ovy;
      }
    } else {
      if (cx > 0) {
        r1.x += ovx;
        Cam.x += ovx;
      } else {
        r1.x -= ovx;
        Cam.x -= ovx;
      }
    }
  }
}


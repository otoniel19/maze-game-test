class Sprite {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.visible = true;
    this.img = document.getElementById(img);
  }
  halfWidth() {
    return this.width / 2;
  }
  halfHeight() {
    return this.height / 2;
  }
  centerX() {
    return this.x + this.halfWidth();
  }
  centerY() {
    return this.y + this.halfHeight();
  }
}


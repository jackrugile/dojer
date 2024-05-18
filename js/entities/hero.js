/*==============================================================================

Hero Entity

==============================================================================*/

(function () {
  "use strict";

  g.Hero = function (state) {
    this.state = state;
    this.width = 3 * g.s;
    this.height = 3 * g.s;
    this.x = g.s;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.velocity = 0.56 * g.s;
    this.gravity = 0.128 * g.s;
    this.rise = -1.9 * g.s;
    this.upper = true;
    this.forward = true;
    this.deathFlag = 0;
    this.dead = 0;
    this.landed = 0;
    this.sprite = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ];
  };

  g.Hero.prototype.update = function () {
    this.upper = this.y < g.height / 2;

    if (!this.dead) {
      if (g.keys.pressed.LEFT || g.keys.pressed.A) {
        this.vx = -this.velocity;
        this.forward = false;
      } else if (g.keys.pressed.RIGHT || g.keys.pressed.D) {
        this.vx = this.velocity;
        this.forward = true;
      } else {
        this.vx = 0;
      }
      if (g.keys.pressed.UP || g.keys.pressed.W) {
        if (this.landed) {
          if (this.upper) {
            this.jump(1);
          } else {
            this.switch();
          }
        }
      }
      if (g.keys.pressed.DOWN || g.keys.pressed.S) {
        if (this.landed) {
          if (this.upper) {
            this.switch();
          } else {
            this.jump(1);
          }
        }
      }

      this.vy += this.gravity * this.state.time.ndelta;
    } else {
      this.vx = 0;
      this.vy = 0;
    }

    this.x += this.vx * this.state.time.ndelta;
    this.y += this.vy * this.state.time.ndelta;

    // lock bounds
    this.lockBounds();

    if (this.deathFlag) {
      setTimeout(function () {
        g.setState("gameover");
      }, 1000);
      this.deathFlag = 0;
      this.dead = 1;
    }
  };

  g.Hero.prototype.render = function () {
    g.ctx.save();
    g.ctx.beginPath();
    g.ctx.translate(g.r(this.x), g.r(this.y));
    for (var y = 0; y < this.sprite.length; y++) {
      for (var x = 0; x < this.sprite[y].length; x++) {
        if (this.sprite[y][x]) {
          if (this.forward) {
            var xNew = g.r(x * g.s);
          } else {
            var xNew = g.r(this.width - g.s - x * g.s);
          }
          if (this.upper) {
            var yNew = g.r(y * g.s);
          } else {
            var yNew = g.r(this.height - y * g.s - g.s);
          }
          g.ctx.rect(xNew, yNew, g.s, g.s);
        }
      }
    }

    if (this.dead) {
      g.ctx.fillStyle =
        g.util.roundToNearest(this.state.time.nelapsed, 2) % 4 == 0
          ? "#000"
          : "#fff";
    } else {
      g.ctx.fillStyle = this.upper ? "#000" : "#fff";
    }
    g.ctx.fill();
    g.ctx.restore();

    if (g.storage.get("debug")) {
      g.ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
      g.ctx.fillRect(g.r(this.x + g.s), g.r(this.y + g.s), g.s, g.s);
    }
  };

  g.Hero.prototype.lockBounds = function () {
    if (this.x > g.width - this.width) {
      this.x = g.width - this.width;
      this.vx = -this.vx;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.upper) {
      if (this.y > g.height / 2 - this.height) {
        this.y = g.height / 2 - this.height;
        this.vy = 0;
      }
    } else {
      if (this.y < g.height / 2) {
        this.y = g.height / 2;
        this.vy = 0;
      }
    }

    if (this.vy == 0 && !this.landed) {
      g.audio.land.play();
      this.landed = 1;
    }
  };

  g.Hero.prototype.switch = function () {
    g.audio.switch.play();
    if (this.upper) {
      this.y = g.height / 2;
      this.upper = false;
    } else {
      this.y = g.height / 2 - this.height;
      this.upper = true;
    }
    this.gravity = -this.gravity;
    this.vy = 0;
    this.jump(0);
    this.state.tempStorage.switches++;
  };

  g.Hero.prototype.jump = function (playSound) {
    this.landed = 0;
    if (playSound) {
      g.audio.jump.play();
    }
    if (this.upper) {
      this.vy = this.rise;
    } else {
      this.vy = -this.rise;
    }
    this.state.tempStorage.jumps++;
  };
})();

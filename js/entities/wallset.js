/*==============================================================================

Wall Set Entity

==============================================================================*/

(function () {
  "use strict";

  g.WallSet = function (opt) {
    opt = opt || {};
    this.init(opt);
  };

  g.WallSet.prototype.init = function (opt) {
    this.state = opt.state || null;
    this.config = this.state
      ? this.state.wallConfigs[
          g.util.randInt(0, this.state.wallConfigs.length - 1)
        ]
      : null;
    this.width = g.s * 3;
    this.x = g.width;
    this.vx = this.state ? this.state.wallVelocity : 0;
    this.walls = new g.Group();
    this.scored = 0;
    this.hasSpawnedNew = 0;

    if (this.state && this.state.firstWallFlag) {
      this.state.firstWallFlag = 0;
      this.x = g.width * 1.75;
    }

    var length = this.config.length;
    for (var i = 0; i < length; i++) {
      if (this.config[i]) {
        this.walls.add(new g.Wall(this.state, this, i));
      }
    }
  };

  g.WallSet.prototype.update = function (i) {
    if (!this.state.hero.dead) {
      this.x += this.vx; // * this.state.time.delta;
    }
    this.walls.each("update");
    this.checkBounds(i);
    this.checkScore();
  };

  g.WallSet.prototype.render = function () {
    this.walls.each("render");
  };

  g.WallSet.prototype.checkBounds = function (i) {
    // create new wall set the moment this one leaves the game
    if (!this.hasSpawnedNew && this.x < -this.width) {
      this.hasSpawnedNew = 1;
      this.state.createWall();
    }

    // full game width for buffer before destroying - otherwise, when hugging left wall, score is not awarded
    if (this.x < -g.width) {
      this.walls.empty();
      this.state.walls.release(this);
    }
  };

  g.WallSet.prototype.checkScore = function () {
    if (!this.scored) {
      if (this.state.hero.x > this.x + this.width) {
        g.audio.score.play();
        this.scored = 1;
        this.state.scoreFlag = 1;
        this.state.score++;
      }
    }
  };
})();

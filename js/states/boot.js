/*==============================================================================

Boot State

==============================================================================*/

(function () {
  "use strict";

  function StateBoot() {
    this.name = "boot";
  }

  StateBoot.prototype.init = function () {
    var _this = this;

    // setup state specific time
    this.time = new g.Time();

    g.audio = {};

    this.loaded = 0;
    this.total = 0;

    g.audio.music = new Howl({
      urls: ["audio/music.ogg", "audio/music.mp3", "audio/music.wav"],
      volume: 1,
      autoplay: true,
      loop: true,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.click = new Howl({
      urls: ["audio/click.ogg", "audio/click.mp3", "audio/click.wav"],
      volume: 0.3,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.land = new Howl({
      urls: ["audio/land.ogg", "audio/land.mp3", "audio/land.wav"],
      volume: 0.2,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.start = new Howl({
      urls: ["audio/start.ogg", "audio/start.mp3", "audio/start.wav"],
      volume: 0.5,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.jump = new Howl({
      urls: ["audio/jump.ogg", "audio/jump.mp3", "audio/jump.wav"],
      volume: 0.65,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.switch = new Howl({
      urls: ["audio/switch.ogg", "audio/switch.mp3", "audio/switch.wav"],
      volume: 0.65,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.score = new Howl({
      urls: ["audio/score.ogg", "audio/score.mp3", "audio/score.wav"],
      volume: 0.45,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;

    g.audio.death = new Howl({
      urls: ["audio/death.ogg", "audio/death.mp3", "audio/death.wav"],
      volume: 0.35,
      onload: function () {
        _this.loadAudio(_this);
      },
    });
    this.total++;
  };

  StateBoot.prototype.loadAudio = function (state) {
    state.loaded++;
    if (state.loaded >= state.total) {
      g.setState("menu");
    }
  };

  StateBoot.prototype.step = function () {
    // update the states time
    this.time.update();

    // clear the canvas
    g.ctx.clearRect(0, 0, g.width, g.height);

    // render world split
    g.renderWorldSplit();

    // render load progress
    g.ctx.beginPath();
    g.text({
      ctx: g.ctx,
      font: g.Font,
      x: g.s * 7,
      y: g.height / 2 - g.s * 2,
      text:
        g.util.format.pad(Math.round((this.loaded / this.total) * 100), 2) +
        "%",
      hspacing: g.s,
      vspacing: g.s * 2,
      halign: "left",
      valign: "bottom",
      scale: g.s,
      snap: 1,
      render: 1,
    });
    g.ctx.fillStyle = "#000";
    g.ctx.fill();

    g.ctx.fillStyle = "#000";
    g.ctx.fillRect(
      0,
      g.height / 2 - g.s,
      g.r((this.loaded / this.total) * g.width),
      g.s
    );

    g.ctx.fillStyle = "#fff";
    g.ctx.fillRect(
      0,
      g.height / 2,
      g.r((this.loaded / this.total) * g.width),
      g.s
    );
  };

  StateBoot.prototype.exit = function () {};

  g.addState(new StateBoot());
})();

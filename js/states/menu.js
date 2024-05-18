/*==============================================================================

Menu State

==============================================================================*/

(function () {
  "use strict";

  function StateMenu() {
    this.name = "menu";
  }

  StateMenu.prototype.init = function () {
    // setup state specific time
    this.time = new g.Time();
  };

  StateMenu.prototype.step = function () {
    // update the states time
    this.time.update();

    // clear the canvas
    g.ctx.clearRect(0, 0, g.width, g.height);

    // render world split
    g.renderWorldSplit();

    // render #LRJ and game title
    g.ctx.beginPath();
    g.text({
      ctx: g.ctx,
      font: g.Font,
      x: g.s * 2,
      y: g.s * 2,
      text: "#LRJ\n" + g.config.title.toUpperCase(),
      hspacing: g.s,
      vspacing: g.s * 2,
      halign: "left",
      valign: "top",
      scale: g.s,
      snap: 1,
      render: 1,
    });
    g.ctx.fillStyle = "#000";
    g.ctx.fill();

    // render WASD
    g.ctx.beginPath();
    g.text({
      ctx: g.ctx,
      font: g.Font,
      x: g.s * 2,
      y: g.height / 2 + g.s * 2,
      text: "WASD",
      hspacing: g.s,
      vspacing: g.s,
      halign: "left",
      valign: "top",
      scale: g.s,
      snap: 1,
      render: 1,
    });
    g.ctx.fillStyle = "#fff";
    g.ctx.fill();

    // render arrows
    g.ctx.beginPath();
    // up arrow
    g.ctx.save();
    g.ctx.translate(g.s * 2, g.height / 2 + 9 * g.s);
    g.ctx.rect(g.s * 2, g.s, g.s, g.s);
    g.ctx.rect(g.s * 1, g.s * 2, g.s * 3, g.s);
    g.ctx.rect(0, g.s * 3, g.s * 5, g.s);
    g.ctx.restore();
    // left arrow
    g.ctx.save();
    g.ctx.translate(g.s * 8, g.height / 2 + 9 * g.s);
    g.ctx.rect(g.s, g.s * 2, g.s, g.s);
    g.ctx.rect(g.s * 2, g.s * 1, g.s, g.s * 3);
    g.ctx.rect(g.s * 3, 0, g.s, g.s * 5);
    g.ctx.restore();
    // down arrow
    g.ctx.save();
    g.ctx.translate(g.s * 14, g.height / 2 + 9 * g.s);
    g.ctx.rect(0, g.s, g.s * 5, g.s);
    g.ctx.rect(g.s * 1, g.s * 2, g.s * 3, g.s);
    g.ctx.rect(g.s * 2, g.s * 3, g.s, g.s);
    g.ctx.restore();
    // right arrow
    g.ctx.save();
    g.ctx.translate(g.s * 20, g.height / 2 + 9 * g.s);
    g.ctx.rect(g.s, 0, g.s, g.s * 5);
    g.ctx.rect(g.s * 2, g.s * 1, g.s, g.s * 3);
    g.ctx.rect(g.s * 3, g.s * 2, g.s, g.s);
    g.ctx.restore();
    g.ctx.fillStyle = "#fff";
    g.ctx.fill();

    // listen for instructions
    if (
      g.keys.pressedOnce.W ||
      g.keys.pressedOnce.A ||
      g.keys.pressedOnce.S ||
      g.keys.pressedOnce.D ||
      g.keys.pressedOnce.UP ||
      g.keys.pressedOnce.LEFT ||
      g.keys.pressedOnce.DOWN ||
      g.keys.pressedOnce.RIGHT
    ) {
      g.audio.click.play();
      g.setState("instructions");
    }
  };

  StateMenu.prototype.exit = function () {};

  g.addState(new StateMenu());
})();

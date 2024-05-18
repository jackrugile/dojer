/*==============================================================================

Game

==============================================================================*/

(function () {
  "use strict";

  // get nearest power of 2 that fits in screen
  var size = Math.min(window.innerWidth, window.innerHeight);
  var n = size / 2;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n++;

  g.config = {
    width: n,
    height: n,
    title: "Dojer",
    namespace: "dojer",
    state: "boot",
  };

  g.init = function () {
    // setup overall game time
    g.time = new g.Time();

    // setup local storage
    g.storage = new g.Storage(g.config.namespace);

    // setup storage defaults if they don't exist
    if (g.util.objIsEmpty(g.storage.obj)) {
      g.storage.set("bestScore", 0);
      g.storage.set("totalScore", 0);
      g.storage.set("totalJumps", 0);
      g.storage.set("totalSwitches", 0);
      g.storage.set("totalDeaths", 0);
      g.storage.set("totalTime", 0);
      g.storage.set("mute", 0);
      g.storage.set("debug", 0);
    }

    // check for mute
    if (g.storage.get("mute")) {
      Howler.mute();
    }

    // setup the main canvas
    g.c = document.createElement("canvas");
    g.ctx = g.c.getContext("2d");
    g.width = g.c.width = g.config.width;
    g.height = g.c.height = g.config.height;
    document.body.appendChild(g.c);

    // setup scale based on 32x32, shortcut
    g.s = g.width / 32;

    // rounding to nearest 32 pixel shortcut
    g.r = function (value) {
      return g.util.roundToNearest(value, g.s);
    };

    // setup keyboard tracking
    g.keys = new g.Keys([
      "W",
      "A",
      "S",
      "D",
      "UP",
      "LEFT",
      "DOWN",
      "RIGHT",
      "M",
      "P",
      "ZERO",
      "ESC",
    ]);

    // setup mouse tracking
    g.mouse = new g.Mouse();

    // set the initial state and get things going
    g.lastState = null;
    g.setState(g.config.state);
    g.step();
  };

  g.step = function () {
    // constant loop, regardless of state
    requestAnimationFrame(g.step);
    // tracks total game time
    g.time.update();
    // step keys
    g.keys.step();
    // steps current state
    g.states[g.state].step();
    // store prev keys
    g.keys.storePrev();

    // listen for debug toggle
    if (g.keys.pressedOnce.ZERO) {
      if (g.storage.get("debug")) {
        g.storage.set("debug", 0);
      } else {
        g.storage.set("debug", 1);
      }
    }

    // listen for mute toggle
    if (g.keys.pressedOnce.M) {
      if (g.storage.get("mute")) {
        g.storage.set("mute", 0);
        Howler.unmute();
      } else {
        g.storage.set("mute", 1);
        Howler.mute();
      }
    }

    // render debug grid
    if (g.storage.get("debug")) {
      g.ctx.strokeStyle = "rgba(128, 128, 128, 0.25)";
      for (var x = 0; x < 32; x++) {
        for (var y = 0; y < 32; y++) {
          g.ctx.strokeRect(x * g.s - 0.5, y * g.s - 0.5, g.s, g.s);
        }
      }
    }
  };

  g.renderWorldSplit = function () {
    g.ctx.fillStyle = "#fff";
    g.ctx.fillRect(0, 0, g.width, g.height / 2);
  };

  //window.addEventListener( 'load', g.init, false );
  g.init();
})();

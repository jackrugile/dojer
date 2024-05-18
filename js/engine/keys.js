/*==============================================================================

Keys

==============================================================================*/

(function () {
  "use strict";

  g.Keys = function (trackedKeys) {
    this.map = {
      A: "A".charCodeAt(0),
      B: "B".charCodeAt(0),
      C: "C".charCodeAt(0),
      D: "D".charCodeAt(0),
      E: "E".charCodeAt(0),
      F: "F".charCodeAt(0),
      G: "G".charCodeAt(0),
      H: "H".charCodeAt(0),
      I: "I".charCodeAt(0),
      J: "J".charCodeAt(0),
      K: "K".charCodeAt(0),
      L: "L".charCodeAt(0),
      M: "M".charCodeAt(0),
      N: "N".charCodeAt(0),
      O: "O".charCodeAt(0),
      P: "P".charCodeAt(0),
      Q: "Q".charCodeAt(0),
      R: "R".charCodeAt(0),
      S: "S".charCodeAt(0),
      T: "T".charCodeAt(0),
      U: "U".charCodeAt(0),
      V: "V".charCodeAt(0),
      W: "W".charCodeAt(0),
      X: "X".charCodeAt(0),
      Y: "Y".charCodeAt(0),
      Z: "Z".charCodeAt(0),
      ZERO: "0".charCodeAt(0),
      ONE: "1".charCodeAt(0),
      TWO: "2".charCodeAt(0),
      THREE: "3".charCodeAt(0),
      FOUR: "4".charCodeAt(0),
      FIVE: "5".charCodeAt(0),
      SIX: "6".charCodeAt(0),
      SEVEN: "7".charCodeAt(0),
      EIGHT: "8".charCodeAt(0),
      NINE: "9".charCodeAt(0),
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CONTROL: 17,
      ALT: 18,
      ESC: 27,
      SPACEBAR: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
    };

    this.pressed = {};
    this.pressedOnce = {};
    this.prevPressed = {};

    this.trackedKeys = trackedKeys;
    this.trackedKeysLength = this.trackedKeys.length;

    for (var i = 0; i < this.trackedKeysLength; i++) {
      this.pressed[this.trackedKeys[i]] = 0;
      this.pressedOnce[this.trackedKeys[i]] = 0;
    }

    this.bindEvents();
  };

  g.Keys.prototype.keydown = function (_this, e) {
    e.preventDefault();
    var e = e.keyCode ? e.keyCode : e.which;
    for (var i = 0; i < _this.trackedKeysLength; i++) {
      if (e == _this.map[_this.trackedKeys[i]]) {
        _this.pressed[_this.trackedKeys[i]] = 1;
      }
    }
  };

  g.Keys.prototype.keyup = function (_this, e) {
    e.preventDefault();
    var e = e.keyCode ? e.keyCode : e.which;
    for (var i = 0; i < _this.trackedKeysLength; i++) {
      if (e == _this.map[_this.trackedKeys[i]]) {
        _this.pressed[_this.trackedKeys[i]] = 0;
      }
    }
  };

  g.Keys.prototype.bindEvents = function () {
    var _this = this;
    window.addEventListener(
      "keydown",
      function (e) {
        _this.keydown(_this, e);
      },
      false
    );
    window.addEventListener(
      "keyup",
      function (e) {
        _this.keyup(_this, e);
      },
      false
    );
  };

  g.Keys.prototype.step = function () {
    // setup the pressed once state for all keys
    for (var k in this.pressed) {
      if (this.pressed[k] && !this.prevPressed[k]) {
        this.pressedOnce[k] = 1;
      } else {
        this.pressedOnce[k] = 0;
      }
    }
  };

  g.Keys.prototype.storePrev = function () {
    // move current keys to old keys for comparisons on the next update
    this.prevPressed = {};
    for (var k in this.pressed) {
      this.prevPressed[k] = this.pressed[k];
    }
  };
})();

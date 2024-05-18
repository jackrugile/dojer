/*==============================================================================

Core

==============================================================================*/

g = {};

(function () {
  "use strict";

  /*==============================================================================

  Math

  ==============================================================================*/

  g.m = Math;
  g.mathProps =
    "E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(
      " "
    );
  for (var i = 0; i < g.mathProps.length; i++) {
    g[g.mathProps[i]] = g.m[g.mathProps[i]];
  }
  g.m.TWO_PI = g.m.PI * 2;

  /*==============================================================================

  Miscellaneous

  ==============================================================================*/

  g.isset = function (prop) {
    return typeof prop != "undefined";
  };

  g.log = function () {
    if (g.isset(g.config) && g.config.debug && window.console) {
      console.log(Array.prototype.slice.call(arguments));
    }
  };
})();

(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/03_gameplay/tween/tween-demo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1ad8dW61zxGsrp51I5maibs', 'tween-demo', __filename);
// cases/03_gameplay/tween/tween-demo.js

'use strict';

var t = cc.tween;

cc.Class({
  extends: cc.Component,

  properties: {
    nodes: [cc.Node]
  },

  start: function start() {
    var nodes = this.nodes;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      t(node)
      // The defference delay should only eval once
      .delay(0.5 + i * 0.2)
      // repeat 1000 times
      .repeat(1000, t()
      // first reset node properties
      .set({ opacity: 0, scale: 10, x: 0, rotation: 0 })
      // parallel exec tween
      .parallel(t().to(1, { opacity: 255, scale: 1 }, { easing: 'quintInOut' }), t().to(2.5, { x: node.x }, { easing: 'backOut' })).delay(0.5).to(0.8, { rotation: 360 }, { easing: 'cubicInOut' }).delay(1).to(0.3, { opacity: 0, scale: 3 }, { easing: "quintIn" }).delay(1)).start();
    }
  }
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=tween-demo.js.map
        
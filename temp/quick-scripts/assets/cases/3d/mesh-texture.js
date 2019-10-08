(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/3d/mesh-texture.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '95a3dIihBlE1bM4psBuANTA', 'mesh-texture', __filename);
// cases/3d/mesh-texture.js

"use strict";

var gfx = cc.gfx;

cc.Class({
    extends: cc.Component,
    editor: {
        executeInEditMode: true
    },

    properties: {
        speed: 50
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var vfmt = new gfx.VertexFormat([{ name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 }, { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 }]);

        var mesh = new cc.Mesh();
        mesh.init(vfmt, 9, true);
        this.mesh = mesh;

        this.vertexes = [cc.v2(-100, 100), cc.v2(0, 100), cc.v2(100, 100), cc.v2(-100, 0), cc.v2(0, 0), cc.v2(100, 0), cc.v2(-100, -100), cc.v2(0, -100), cc.v2(100, -100)];

        mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);

        mesh.setVertices(gfx.ATTR_UV0, [cc.v2(0, 0), cc.v2(0.5, 0), cc.v2(1, 0), cc.v2(0, 0.5), cc.v2(0.5, 0.5), cc.v2(1, 0.5), cc.v2(0, 1), cc.v2(0.5, 1), cc.v2(1, 1)]);

        mesh.setIndices([0, 1, 3, 1, 4, 3, 1, 2, 4, 2, 5, 4, 3, 4, 6, 4, 7, 6, 4, 5, 7, 5, 8, 7]);

        var renderer = this.node.getComponent(cc.MeshRenderer);
        if (!renderer) {
            renderer = this.node.addComponent(cc.MeshRenderer);
        }
        renderer.mesh = mesh;
        this.mesh = mesh;
    },
    update: function update(dt) {
        if (CC_EDITOR) return;

        var lm = this.vertexes[3];
        var rm = this.vertexes[5];
        if (lm.x < -200 && this.speed < 0 || lm.x > 0 && this.speed > 0) {
            this.speed *= -1;
        }
        lm.x += dt * this.speed;
        rm.x += -dt * this.speed;

        this.mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);
    }
});

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
        //# sourceMappingURL=mesh-texture.js.map
        
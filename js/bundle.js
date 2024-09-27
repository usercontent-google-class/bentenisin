"use strict";

function _get(e, t, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var n = _superPropBase(e, t);
        if (n) {
            var a = Object.getOwnPropertyDescriptor(n, t);
            return a.get ? a.get.call(i) : a.value;
        }
    })(e, t, i || e);
}

function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)););
    return e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}

! function() {
    var e = function() {
        function ErrorUtils() {
            _classCallCheck(this, ErrorUtils);
        }
        return _createClass(ErrorUtils, null, [{
            key: "throwNormalError",
            value: function(e) {
                throw new Error(e);
            }
        }, {
            key: "throwNot2BeNull",
            value: function(e, t) {
                null == e && this.throwNormalError("".concat(t, " is supposed to be valid!!!"));
            }
        }]), ErrorUtils;
    }();

    function __awaiter(e, t, i, n) {
        return new(i || (i = Promise))(function(a, o) {
            function fulfilled(e) {
                try {
                    step(n.next(e));
                } catch (e) {
                    o(e);
                }
            }

            function rejected(e) {
                try {
                    step(n.throw(e));
                } catch (e) {
                    o(e);
                }
            }

            function step(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                    e(t);
                })).then(fulfilled, rejected);
            }
            step((n = n.apply(e, t || [])).next());
        });
    }
    Object.create;
    Object.create;
    var t = function() {
            function AbstractBean(e) {
                _classCallCheck(this, AbstractBean), this._name = e, this._dispatcher = new Laya.EventDispatcher();
            }
            return _createClass(AbstractBean, [{
                key: "finish",
                value: function() {
                    this._dispatcher && this._dispatcher.event(Laya.Event.COMPLETE);
                }
            }, {
                key: "destroy",
                value: function() {
                    this._dispatcher && (this._dispatcher.offAll(), this._dispatcher = void 0);
                }
            }, {
                key: "name",
                get: function() {
                    return this._name;
                }
            }, {
                key: "dispatcher",
                get: function() {
                    return this._dispatcher;
                }
            }]), AbstractBean;
        }(),
        i = function() {
            function MathUtils() {
                _classCallCheck(this, MathUtils);
            }
            return _createClass(MathUtils, null, [{
                key: "isBetween",
                value: function(e, t, i) {
                    return arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? e >= Math.min(t, i) && e <= Math.max(t, i) : e > Math.min(t, i) && e < Math.max(t, i);
                }
            }, {
                key: "minMax",
                value: function(e, t) {
                    return {
                        min: Math.min(e, t),
                        max: Math.max(e, t)
                    };
                }
            }, {
                key: "calValueBetween",
                value: function(e, t, i) {
                    var n = this.minMax(t, i),
                        a = n.min,
                        o = n.max;
                    return Math.max(Math.min(o, e), a);
                }
            }, {
                key: "randomBetween",
                value: function(e, t) {
                    var i = this.minMax(e, t),
                        n = i.min,
                        a = i.max;
                    return n + Math.random() * (a - n);
                }
            }, {
                key: "calLen",
                value: function(e, t) {
                    return Math.sqrt(e * e + t * t);
                }
            }, {
                key: "easeTo",
                value: function(e, t, i) {
                    return e + (t - e) * i;
                }
            }, {
                key: "lerpPointLike",
                value: function(e, t, i) {
                    return {
                        x: Laya.MathUtil.lerp(e.x, t.x, i),
                        y: Laya.MathUtil.lerp(e.y, t.y, i)
                    };
                }
            }, {
                key: "pNormalize",
                value: function(e) {
                    var t = this.calLen(e.x, e.y);
                    return t ? {
                        x: e.x / t,
                        y: e.y / t
                    } : {
                        x: 1,
                        y: 0
                    };
                }
            }, {
                key: "pRotateByAngle",
                value: function(e, t, i) {
                    return this.pAdd(t, this.pRotate(this.pSub(e, t), this.pForAngle(i)));
                }
            }, {
                key: "pMul",
                value: function(e, t) {
                    return {
                        x: e.x * t,
                        y: e.y * t
                    };
                }
            }, {
                key: "pAdd",
                value: function(e, t) {
                    return {
                        x: e.x + t.x,
                        y: e.y + t.y
                    };
                }
            }, {
                key: "pSub",
                value: function(e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y
                    };
                }
            }, {
                key: "pForAngle",
                value: function(e) {
                    return {
                        x: Math.cos(e),
                        y: Math.sin(e)
                    };
                }
            }, {
                key: "pRotate",
                value: function(e, t) {
                    return {
                        x: e.x * t.x - e.y * t.y,
                        y: e.x * t.y + e.y * t.x
                    };
                }
            }, {
                key: "isEqual",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-9;
                    return Math.abs(e - t) < i;
                }
            }, {
                key: "fixRotationDegree",
                value: function(e) {
                    return e < 0 && (e += 360 * (Math.abs(Math.ceil(e / 360)) + 1)), e % 360;
                }
            }, {
                key: "calRotation",
                value: function(e, t, i, n) {
                    var a = i - e,
                        o = n - t;
                    return this.calRotationByDelta(a, o);
                }
            }, {
                key: "isInBox",
                value: function(e, t, i, n, a, o, s, r, l) {
                    return this.isBetween(t, a, a + l) && this.isBetween(e, n - .5 * r, n + .5 * r) && this.isBetween(i, o - .5 * s, o + .5 * s);
                }
            }, {
                key: "calRotationByDelta",
                value: function(e, t) {
                    var i = 0;
                    return e ? (i = 180 * Math.atan(t / e) / Math.PI, e < 0 && (i -= 180)) : i = 90 * (t > 0 ? 1 : -1),
                        this.fixRotationDegree(i);
                }
            }]), MathUtils;
        }();
    i.DEGREE_2_RADIAN_FACTOR = Math.PI / 180;
    var n, a = function() {
            function LayaUtils() {
                _classCallCheck(this, LayaUtils);
            }
            return _createClass(LayaUtils, null, [{
                key: "fixWxOpenDataViewer",
                value: function(e) {
                    var t = window.sharedCanvas;
                    t && e.on(Laya.Event.DISPLAY, void 0, function() {
                        t.width = e.width, t.height = e.height;
                    });
                }
            }, {
                key: "addClickListener",
                value: function(e, t, i) {
                    e.on(Laya.Event.CLICK, i, t);
                }
            }, {
                key: "addBtnsClickHandler",
                value: function(e, t, i) {
                    e.forEach(function(e) {
                        e && e.on(Laya.Event.CLICK, i, t);
                    });
                }
            }, {
                key: "removeBtnsClickHandler",
                value: function(e, t, i) {
                    e.forEach(function(e) {
                        e && e.off(Laya.Event.CLICK, i, t);
                    });
                }
            }, {
                key: "asyncLoadTexture2D",
                value: function(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Promise(function(n, a) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                            var t;
                            return regeneratorRuntime.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        i ? (t = function onError() {
                                            console.log("加载失败", e), Laya.loader.off(Laya.Event.ERROR, void 0, onError), a();
                                        }, Laya.loader.on(Laya.Event.ERROR, void 0, t), Laya.loader.load(e, Laya.Handler.create(void 0, function(e) {
                                            Laya.loader.off(Laya.Event.ERROR, void 0, t), n(e);
                                        }), void 0, Laya.Loader.TEXTURE2D)) : Laya.Texture2D.load(e, Laya.Handler.create(void 0, n));

                                    case 1:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadMaterial",
                value: function(e) {
                    return new Promise(function(t) {
                        Laya.BaseMaterial.load(e, Laya.Handler.create(void 0, t));
                    });
                }
            }, {
                key: "asyncCreateRes",
                value: function(e, t) {
                    return new Promise(function(i) {
                        Laya.loader.create(e, Laya.Handler.create(void 0, i), t ? Laya.Handler.create(void 0, t, void 0, !0) : void 0);
                    });
                }
            }, {
                key: "asyncLoadScene3D",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        i(Laya.Loader.getRes(e));

                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee2, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadSprite3D",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                            var t;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        (t = Laya.Sprite3D.instantiate(Laya.Loader.getRes(e))).transform.localPosition = new Laya.Vector3(0, 0, 0),
                                            i(t);

                                    case 5:
                                    case "end":
                                        return n.stop();
                                }
                            }, _callee3, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadParticle",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                            var t;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        (t = Laya.ShuriKenParticle3D.instantiate(Laya.Loader.getRes(e))).transform.localPosition = new Laya.Vector3(0, 0, 0),
                                            i(t);

                                    case 5:
                                    case "end":
                                        return n.stop();
                                }
                            }, _callee4, this);
                        }));
                    });
                }
            }, {
                key: "asyncOpenScene",
                value: function(e) {
                    var t = this,
                        i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise(function(n) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        Laya.Scene.open(e, i, void 0, Laya.Handler.create(void 0, n));

                                    case 3:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee5, this);
                        }));
                    });
                }
            }, {
                key: "asyncLoadScene",
                value: function(e, t, i) {
                    return new Promise(function(n) {
                        Laya.Scene.load(e, Laya.Handler.create(null, function(e) {
                            t && t.call(i, 1), n(e);
                        }), t ? Laya.Handler.create(i, t, void 0, !1) : void 0);
                    });
                }
            }, {
                key: "asyncLoadJson",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
                            var t;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, this.asyncCreateRes(e);

                                    case 2:
                                        t = Laya.Loader.getRes(e), Array.isArray(t) || (t = t ? [t] : []), i(t);

                                    case 5:
                                    case "end":
                                        return n.stop();
                                }
                            }, _callee6, this);
                        }));
                    });
                }
            }, {
                key: "getUrlParamsObj",
                value: function() {
                    var e, t = {};
                    Laya.Browser.window.conch || (((null === (e = Laya.Browser.window.location) || void 0 === e ? void 0 : e.href) || "").split("?")[1] || "").split("&").forEach(function(e) {
                        if (e && -1 !== e.indexOf("=")) {
                            var i = e.split("=");
                            t[i[0]] = i[1];
                        }
                    });
                    return t;
                }
            }, {
                key: "asyncLoadRes",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee8() {
                        var t = this;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", new Promise(function(i) {
                                        return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee7() {
                                            return regeneratorRuntime.wrap(function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, this.asyncCreateRes(e);

                                                    case 2:
                                                        i(Laya.loader.getRes(e));

                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, _callee7, this);
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee8, this);
                    }));
                }
            }, {
                key: "browerAlert",
                value: function(e) {
                    Laya.Browser.window.conch || Laya.Browser.window.alert(e);
                }
            }, {
                key: "rgb2V3",
                value: function(e) {
                    e = e.replace(/^#/, "");
                    var t = new Laya.Vector3();
                    return 6 === e.length && (t.x = parseInt(e.substr(0, 2), 16) / 256, t.y = parseInt(e.substr(0, 2), 16) / 256,
                        t.z = parseInt(e.substr(0, 2), 16) / 256), t;
                }
            }, {
                key: "try2SetTexture",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee9() {
                        var a, o;
                        return regeneratorRuntime.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                                case 0:
                                    if (e instanceof Laya.MeshSprite3D ? o = e.meshRenderer.material : e instanceof Laya.SkinnedMeshSprite3D && (o = e.skinnedMeshRenderer.material), !(o instanceof Laya.UnlitMaterial)) {
                                        s.next = 6;
                                        break;
                                    }
                                    return s.next = 4, this.asyncLoadTexture2D(t, n);

                                case 4:
                                    a = s.sent, o.albedoTexture = a;

                                case 6:
                                    return "x" === i ? e.transform.localScaleZ = e.transform.localScaleX * a.height / a.width : "z" === i && (e.transform.localScaleX = e.transform.localScaleZ * a.width / a.height),
                                        s.abrupt("return", a);

                                case 8:
                                case "end":
                                    return s.stop();
                            }
                        }, _callee9, this);
                    }));
                }
            }, {
                key: "getMeshSprite3DChildDeep",
                value: function(e) {
                    for (var t = e.numChildren, i = 0; i < t; i++) {
                        var n = e.getChildAt(i);
                        if (n instanceof Laya.MeshSprite3D || n instanceof Laya.SkinnedMeshSprite3D) return n;
                        var a = this.getMeshSprite3DChildDeep(n);
                        if (a) return a;
                    }
                }
            }, {
                key: "getChildByNameDeep",
                value: function(e, t) {
                    var i = e.getChildByName(t);
                    if (i) return i;
                    for (var n = e.numChildren, a = 0; a < n; a++) {
                        i = e.getChildAt(a);
                        var o = this.getChildByNameDeep(i, t);
                        if (o) return o;
                    }
                }
            }, {
                key: "playOrStopParticle",
                value: function(e, t) {
                    if (e instanceof Laya.ShuriKenParticle3D) {
                        e.active || (console.log("粒子没有active？"), e.active = !0);
                        var i = e.particleSystem;
                        if (i.isEmitting === t) return;
                        t ? i.play() : i.stop();
                    }
                }
            }, {
                key: "playParticleEffectOnce",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Laya.Vector3();
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee11() {
                        var a = this;
                        return regeneratorRuntime.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    return o.abrupt("return", new Promise(function(o) {
                                        return __awaiter(a, void 0, void 0, regeneratorRuntime.mark(function _callee10() {
                                            var a;
                                            return regeneratorRuntime.wrap(function(s) {
                                                for (;;) switch (s.prev = s.next) {
                                                    case 0:
                                                        return s.next = 2, LayaUtils.asyncLoadSprite3D(e);

                                                    case 2:
                                                        (a = s.sent).transform.position = n, t.addChild(a), a.timerOnce(i, void 0, function() {
                                                            a.destroy(!0), o();
                                                        });

                                                    case 6:
                                                    case "end":
                                                        return s.stop();
                                                }
                                            }, _callee10, this);
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return o.stop();
                            }
                        }, _callee11, this);
                    }));
                }
            }, {
                key: "getFrameDelta",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40;
                    return Math.min(Laya.timer.delta, 1e3 / e);
                }
            }, {
                key: "getVFrameDelta",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
                    return e * this.getFrameDelta(t) / 1e3;
                }
            }, {
                key: "calFrameValue",
                value: function(e) {
                    return e * this.getFrameDelta() / 1e3;
                }
            }, {
                key: "updateSelfProps",
                value: function(e, t) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = Array.isArray(t) ? t : [t],
                        a = function() {
                            return n.forEach(function(t) {
                                return e[t] = e[t];
                            });
                        };
                    if (i) return Laya.Handler.create(void 0, a, void 0, !1);
                    a();
                }
            }, {
                key: "createUlitPlane",
                value: function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee12() {
                        var s, r;
                        return regeneratorRuntime.wrap(function(l) {
                            for (;;) switch (l.prev = l.next) {
                                case 0:
                                    return s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(e, t)), (r = new Laya.UnlitMaterial()).renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                                        r.cull = Laya.RenderState.CULL_NONE, s.meshRenderer.sharedMaterial = r, i.isEqual(a, 1) || (r.albedoColor = new Laya.Vector4(1, 1, 1, a)),
                                        l.next = 8, this.try2SetTexture(s, n, "z", o);

                                case 8:
                                    return r.albedoTexture = l.sent, l.abrupt("return", s);

                                case 10:
                                case "end":
                                    return l.stop();
                            }
                        }, _callee12, this);
                    }));
                }
            }, {
                key: "asyncRequest",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post";
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", new Promise(function(n, a) {
                                        var o = new Laya.HttpRequest();
                                        o.once(Laya.Event.COMPLETE, void 0, n),
                                            o.once(Laya.Event.ERROR, void 0, a),
                                            o.send(e, t, i, "json", ["Content-Type", "application/json;charset=UTF-8"]);
                                    }));

                                case 1:
                                case "end":
                                    return n.stop();
                            }
                        }, _callee13, this);
                    }));
                }
            }, {
                key: "setVisibleAndAlpha",
                value: function(e, t) {
                    e.visible = t, e.alpha = t ? 1 : 0;
                }
            }, {
                key: "prewarmParticle",
                value: function(e) {}
            }, {
                key: "tweenShake",
                value: function(e, t) {
                    var i = new Laya.TimeLine(),
                        n = e.pivotX;
                    i.addLabel("shake1", 0).to(e, {
                        rotation: e.rotation + 5
                    }, 50, null, 0).addLabel("shake2", 0).to(e, {
                        rotation: e.rotation - 6
                    }, 50, null, 0).addLabel("shake3", 0).to(e, {
                        rotation: e.rotation - 13
                    }, 50, null, 0).addLabel("shake4", 0).to(e, {
                        rotation: e.rotation + 3
                    }, 50, null, 0).addLabel("shake5", 0).to(e, {
                        rotation: e.rotation - 5
                    }, 50, null, 0).addLabel("shake6", 0).to(e, {
                        rotation: e.rotation + 2
                    }, 50, null, 0).addLabel("shake7", 0).to(e, {
                        rotation: e.rotation - 8
                    }, 50, null, 0).addLabel("shake8", 0).to(e, {
                        rotation: e.rotation + 3
                    }, 50, null, 0).addLabel("shake9", 0).to(e, {
                        rotation: 0
                    }, 50, null, 0), t ? Laya.timer.once(500, this, function() {
                        i.destroy(), e.rotation = 0, e.pivotX = n;
                    }) : i.on(Laya.Event.COMPLETE, this, function() {
                        i.destroy(), e.rotation = 0, e.pivotX = n;
                    }), i.play(0, !0);
                }
            }, {
                key: "tweenAlpha",
                value: function(e) {
                    e.scaleX = 1, e.scaleY = 1, Laya.Tween.to(e, {
                        alpha: .5
                    }, 500, null, Laya.Handler.create(this, this.tweenAlpha2, [e]));
                }
            }, {
                key: "tweenAlpha2",
                value: function(e) {
                    Laya.Tween.to(e, {
                        alpha: 1
                    }, 500, null, Laya.Handler.create(this, this.tweenAlpha, [e, null]));
                }
            }, {
                key: "tweenScale",
                value: function(e) {
                    e.scaleX = 1, e.scaleY = 1, Laya.Tween.to(e, {
                        scaleX: 1.15,
                        scaleY: 1.15
                    }, 400, null, Laya.Handler.create(this, this.tweenScale2, [e]));
                }
            }, {
                key: "tweenScale2",
                value: function(e) {
                    Laya.Tween.to(e, {
                        scaleX: 1,
                        scaleY: 1
                    }, 400, null, Laya.Handler.create(this, this.tweenScale, [e, null]));
                }
            }]), LayaUtils;
        }(),
        o = new(function() {
            function YLUIManager() {
                _classCallCheck(this, YLUIManager), this._worldClickBlockCount = 0;
            }
            return _createClass(YLUIManager, [{
                key: "setForceWorldCanClick",
                value: function() {
                    this._worldClickBlockCount = 0, this._boxModal.visible = !1;
                }
            }, {
                key: "deploy",
                value: function() {
                    this._layerRoot || (this._layerRoot = new Laya.Sprite(), this._layerRoot.name = "YLUIMgr_layerSplash",
                        Laya.stage.addChild(this._layerRoot), this._layerScene = this._layerRoot.addChild(new Laya.Sprite()),
                        this._layerScene.name = "YLUIMgr_layerScene", this.initWhiteMask(), this._layerPopup = this._layerRoot.addChild(new Laya.Sprite()),
                        this._layerPopup.name = "YLUIMgr_layerPopup", this._layerSplash = this._layerRoot.addChild(new Laya.Sprite()),
                        this._layerSplash.name = "YLUIMgr_layerSplash", this.initBoxModal(), tt.data.once("hasGameInit", this.onGameInit, this));
                }
            }, {
                key: "onGameInit",
                value: function() {
                    var e = this;
                    tt.data.hasGameInit && this._boxWhiteMask && Laya.Tween.to(this._boxWhiteMask, {
                        alpha: 0
                    }, 500, void 0, Laya.Handler.create(void 0, function() {
                        e._boxWhiteMask.destroy(), e._boxWhiteMask = void 0;
                    }));
                }
            }, {
                key: "initBoxModal",
                value: function() {
                    var e = this,
                        t = new Laya.Box();
                    t.name = "YLUIMgr_boxModal", t.mouseEnabled = !0, t.mouseThrough = !1, t.zOrder = 9999,
                        t.pos(-10, -10, !0), t.size(1e4, 1e4), t.visible = !1, t.on(Laya.Event.CLICK, void 0, function() {
                            return console.log("世界点击已被禁止，但是锁定次数：".concat(e._worldClickBlockCount));
                        }), this._boxModal = Laya.stage.addChild(t);
                }
            }, {
                key: "initWhiteMask",
                value: function() {
                    var e = new Laya.Box();
                    e.mouseEnabled = !0, e.mouseThrough = !1, e.pos(-10, -10, !0), e.size(1e4, 1e4),
                        e.bgColor = "#ffffff", this._boxWhiteMask = this.layerRoot.addChild(e), this._boxWhiteMask.name = "YLUIMgr_boxWhiteMask";
                }
            }, {
                key: "showCustomView",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee14() {
                        var t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, a.asyncLoadScene(e);

                                case 2:
                                    return t = i.sent, this._layerPopup.addChild(t), i.abrupt("return", t);

                                case 5:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee14, this);
                    }));
                }
            }, {
                key: "isWorldCanClick",
                set: function(e) {
                    var t = Math.max(0, this._worldClickBlockCount + (e ? -1 : 1));
                    this._worldClickBlockCount = t, this._boxModal.visible = t > 0;
                },
                get: function() {
                    return this._worldClickBlockCount <= 0;
                }
            }, {
                key: "layerScene",
                get: function() {
                    return this._layerScene;
                }
            }, {
                key: "layerRoot",
                get: function() {
                    return this._layerRoot;
                }
            }, {
                key: "layerPopup",
                get: function() {
                    return this._layerPopup;
                }
            }, {
                key: "layerSplash",
                get: function() {
                    return this._layerSplash;
                }
            }]), YLUIManager;
        }())(),
        s = function() {
            function AbstractPlatform() {
                _classCallCheck(this, AbstractPlatform);
            }
            return _createClass(AbstractPlatform, [{
                key: "playMusic",
                value: function(e) {
                    window.WebAudioEngine.playMusic(e);
                }
            }, {
                key: "cookServerRsp",
                value: function(e, t) {
                    return t;
                }
            }, {
                key: "playSoundEffect",
                value: function(e, t) {
                    // Laya.SoundManager.playSound(e, t);
                    window.WebAudioEngine.playSound(e, t);
                }
            }, {
                key: "stopSound",
                value: function(e) {
                    // Laya.SoundManager.stopSound(e);
                    window.WebAudioEngine.stopSound(e);
                }
            }, {
                key: "stopAllSound",
                value: function() {
                    // Laya.SoundManager.stopAll();
                    window.WebAudioEngine.stopAll(e);
                }
            }]), AbstractPlatform;
        }(),
        r = function() {
            function StringUtils() {
                _classCallCheck(this, StringUtils);
            }
            return _createClass(StringUtils, null, [{
                key: "compareVersion",
                value: function(e, t) {
                    for (var i = e.split("."), n = t.split("."), a = Math.max(i.length, n.length), o = 0; o < a; o++) {
                        var s = parseInt(i[o]) || 0,
                            r = parseInt(n[o]) || 0;
                        if (s > r) return 1;
                        if (s < r) return -1;
                    }
                    return 0;
                }
            }, {
                key: "truncate",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...",
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                        o = e.length;
                    if (o < t) return e;
                    var s = t - n.length;
                    if (0 === s) return n;
                    s < 0 && (n = ""), a = i.calValueBetween(a, 0, 1);
                    var r = [],
                        l = Math.round(t * a);
                    return r.push(e.substr(0, l)), l = o - (t - l), r.push(e.substr(l)), r.join(n);
                }
            }]), StringUtils;
        }();
    ! function(e) {
        e.Configuration = "Configuration", e.LoadRes = "LoadRes", e.ShowViewType = "ShowViewType",
            e.HideViewType = "HideViewType", e.ReqFriendRankData = "ReqFriendRankData", e.ReqMyInfo = "ReqMyInfo",
            e.WorldRankData = "WorldRankData", e.FirstFriendPlayerHead = "FirstFriendPlayerHead",
            e.SubmitScore = "SubmitScore", e.CheckOverPlayer = "CheckOverPlayer", e.Reset = "Reset";
    }(n || (n = {}));
    var l, c = function() {
            function BaseEventDispatcher() {
                _classCallCheck(this, BaseEventDispatcher), this._dispatcher = new Laya.EventDispatcher();
            }
            return _createClass(BaseEventDispatcher, [{
                key: "once",
                value: function(e, t, i) {
                    this._dispatcher && this._dispatcher.once(e.toString(), i, t);
                }
            }, {
                key: "on",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (this._dispatcher && (this._dispatcher.on(e.toString(), i, t), n)) {
                        t.call(i, {
                            event: e.toString(),
                            value: this[e]
                        });
                    }
                }
            }, {
                key: "off",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "all";
                    this._dispatcher && this._dispatcher.off(e.toString(), i, t, "once" === n);
                }
            }, {
                key: "offAllCaller",
                value: function(e) {
                    this._dispatcher && this._dispatcher.offAllCaller(e);
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    if (this.isValid) {
                        var i = e.toString();
                        if (this._dispatcher.hasListener(i)) {
                            var n = {
                                event: i,
                                value: t
                            };
                            this._dispatcher.event(n.event, n);
                        }
                    }
                }
            }, {
                key: "hasListener",
                value: function(e) {
                    var t;
                    return (null === (t = this._dispatcher) || void 0 === t ? void 0 : t.hasListener(e.toString())) || !1;
                }
            }, {
                key: "destroy",
                value: function() {
                    this._dispatcher && (this._dispatcher.offAll(), this._dispatcher = null);
                }
            }, {
                key: "isValid",
                get: function() {
                    return !!this._dispatcher;
                }
            }]), BaseEventDispatcher;
        }(),
        h = function() {
            function ArrayUtils() {
                _classCallCheck(this, ArrayUtils);
            }
            return _createClass(ArrayUtils, null, [{
                key: "uniq",
                value: function(e) {
                    for (var t = new Map(), i = e.length, n = 0; n < i; n++) {
                        var a = e[n];
                        t.get(a) ? (e.splice(n, 1), n--, i--) : t.set(a, !0);
                    }
                    return e;
                }
            }, {
                key: "randomOne",
                value: function(e, t) {
                    var i = e.length;
                    if (i && (null == t || !t.length || (i = (e = e.filter(function(e) {
                            return -1 !== t.indexOf(e);
                        })).length))) return e[Math.random() * i >> 0];
                }
            }, {
                key: "disturb",
                value: function(e) {
                    return e.sort(function() {
                        return Math.random() - .5;
                    }), e;
                }
            }, {
                key: "createNumberArrary",
                value: function(e, t) {
                    for (var i = [], n = e; n <= t; n++) i.push(n);
                    return i;
                }
            }, {
                key: "createBezierPoints",
                value: function(e, t) {
                    for (var i = [], n = 0; n < t; n++) i.push(this.multiPointBezier(e, n / t));
                    return i;
                }
            }, {
                key: "multiPointBezier",
                value: function(e, t) {
                    for (var i = e.length, n = 0, a = 0, o = 0; o < i; o++) {
                        var s = e[o];
                        n += s.x * Math.pow(1 - t, i - 1 - o) * Math.pow(t, o) * this.erxiangshi(i - 1, o),
                            a += s.y * Math.pow(1 - t, i - 1 - o) * Math.pow(t, o) * this.erxiangshi(i - 1, o);
                    }
                    return {
                        x: n,
                        y: a
                    };
                }
            }, {
                key: "erxiangshi",
                value: function(e, t) {
                    for (var i = 1, n = 1; t > 0;) i *= e, n *= t, e--, t--;
                    return i / n;
                }
            }, {
                key: "keys",
                value: function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t;
                }
            }, {
                key: "values",
                value: function(e) {
                    var t = [];
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.push(e[i]);
                    return t;
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    var i = e.indexOf(t);
                    return -1 !== i && e.splice(i, 1), i;
                }
            }, {
                key: "getChildrenByNameSection",
                value: function(e, t) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = [];;) {
                        var s = t + i,
                            r = a ? e.getChildByName(s) : e[s];
                        if (!r) break;
                        (!n || r instanceof n) && (o.push(r), i++);
                    }
                    return o;
                }
            }]), ArrayUtils;
        }();
    ! function(e) {
        e.login = "/auth/login", e.getAvatar = "/user/getAvatar", e.authorizeLogin = "/auth/saveWxUserInfo",
            e.recordShare = "/platform/recordShare", e.clickWxApp = "/platform/clickWxapp",
            e.viewVideo = "/platform/viewVideo", e.worldRank = "/user/worldRanking", e.pass = "/game/pass",
            e.getInitConfig = "/auth/getInitConfig", e.getActivityConfig = "/auth/getActivityConfig",
            e.adShowReport = "/platform/adShowReport";
    }(l || (l = {}));
    var u = function() {
        function MD5() {
            _classCallCheck(this, MD5);
        }
        return _createClass(MD5, null, [{
            key: "hex_md5",
            value: function(e) {
                return this.binl2hex(this.core_md5(this.str2binl(e), e.length * this.chrsz));
            }
        }, {
            key: "b64_md5",
            value: function(e) {
                return this.binl2b64(this.core_md5(this.str2binl(e), e.length * this.chrsz));
            }
        }, {
            key: "str_md5",
            value: function(e) {
                return this.binl2str(this.core_md5(this.str2binl(e), e.length * this.chrsz));
            }
        }, {
            key: "hex_hmac_md5",
            value: function(e, t) {
                return this.binl2hex(this.core_hmac_md5(e, t));
            }
        }, {
            key: "b64_hmac_md5",
            value: function(e, t) {
                return this.binl2b64(this.core_hmac_md5(e, t));
            }
        }, {
            key: "str_hmac_md5",
            value: function(e, t) {
                return this.binl2str(this.core_hmac_md5(e, t));
            }
        }, {
            key: "md5_vm_test",
            value: function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc");
            }
        }, {
            key: "core_md5",
            value: function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var i = 1732584193, n = -271733879, a = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
                    var r = i,
                        l = n,
                        c = a,
                        h = o;
                    i = this.md5_ff(i, n, a, o, e[s + 0], 7, -680876936), o = this.md5_ff(o, i, n, a, e[s + 1], 12, -389564586),
                        a = this.md5_ff(a, o, i, n, e[s + 2], 17, 606105819), n = this.md5_ff(n, a, o, i, e[s + 3], 22, -1044525330),
                        i = this.md5_ff(i, n, a, o, e[s + 4], 7, -176418897), o = this.md5_ff(o, i, n, a, e[s + 5], 12, 1200080426),
                        a = this.md5_ff(a, o, i, n, e[s + 6], 17, -1473231341), n = this.md5_ff(n, a, o, i, e[s + 7], 22, -45705983),
                        i = this.md5_ff(i, n, a, o, e[s + 8], 7, 1770035416), o = this.md5_ff(o, i, n, a, e[s + 9], 12, -1958414417),
                        a = this.md5_ff(a, o, i, n, e[s + 10], 17, -42063), n = this.md5_ff(n, a, o, i, e[s + 11], 22, -1990404162),
                        i = this.md5_ff(i, n, a, o, e[s + 12], 7, 1804603682), o = this.md5_ff(o, i, n, a, e[s + 13], 12, -40341101),
                        a = this.md5_ff(a, o, i, n, e[s + 14], 17, -1502002290), n = this.md5_ff(n, a, o, i, e[s + 15], 22, 1236535329),
                        i = this.md5_gg(i, n, a, o, e[s + 1], 5, -165796510), o = this.md5_gg(o, i, n, a, e[s + 6], 9, -1069501632),
                        a = this.md5_gg(a, o, i, n, e[s + 11], 14, 643717713), n = this.md5_gg(n, a, o, i, e[s + 0], 20, -373897302),
                        i = this.md5_gg(i, n, a, o, e[s + 5], 5, -701558691), o = this.md5_gg(o, i, n, a, e[s + 10], 9, 38016083),
                        a = this.md5_gg(a, o, i, n, e[s + 15], 14, -660478335), n = this.md5_gg(n, a, o, i, e[s + 4], 20, -405537848),
                        i = this.md5_gg(i, n, a, o, e[s + 9], 5, 568446438), o = this.md5_gg(o, i, n, a, e[s + 14], 9, -1019803690),
                        a = this.md5_gg(a, o, i, n, e[s + 3], 14, -187363961), n = this.md5_gg(n, a, o, i, e[s + 8], 20, 1163531501),
                        i = this.md5_gg(i, n, a, o, e[s + 13], 5, -1444681467), o = this.md5_gg(o, i, n, a, e[s + 2], 9, -51403784),
                        a = this.md5_gg(a, o, i, n, e[s + 7], 14, 1735328473), n = this.md5_gg(n, a, o, i, e[s + 12], 20, -1926607734),
                        i = this.md5_hh(i, n, a, o, e[s + 5], 4, -378558), o = this.md5_hh(o, i, n, a, e[s + 8], 11, -2022574463),
                        a = this.md5_hh(a, o, i, n, e[s + 11], 16, 1839030562), n = this.md5_hh(n, a, o, i, e[s + 14], 23, -35309556),
                        i = this.md5_hh(i, n, a, o, e[s + 1], 4, -1530992060), o = this.md5_hh(o, i, n, a, e[s + 4], 11, 1272893353),
                        a = this.md5_hh(a, o, i, n, e[s + 7], 16, -155497632), n = this.md5_hh(n, a, o, i, e[s + 10], 23, -1094730640),
                        i = this.md5_hh(i, n, a, o, e[s + 13], 4, 681279174), o = this.md5_hh(o, i, n, a, e[s + 0], 11, -358537222),
                        a = this.md5_hh(a, o, i, n, e[s + 3], 16, -722521979), n = this.md5_hh(n, a, o, i, e[s + 6], 23, 76029189),
                        i = this.md5_hh(i, n, a, o, e[s + 9], 4, -640364487), o = this.md5_hh(o, i, n, a, e[s + 12], 11, -421815835),
                        a = this.md5_hh(a, o, i, n, e[s + 15], 16, 530742520), n = this.md5_hh(n, a, o, i, e[s + 2], 23, -995338651),
                        i = this.md5_ii(i, n, a, o, e[s + 0], 6, -198630844), o = this.md5_ii(o, i, n, a, e[s + 7], 10, 1126891415),
                        a = this.md5_ii(a, o, i, n, e[s + 14], 15, -1416354905), n = this.md5_ii(n, a, o, i, e[s + 5], 21, -57434055),
                        i = this.md5_ii(i, n, a, o, e[s + 12], 6, 1700485571), o = this.md5_ii(o, i, n, a, e[s + 3], 10, -1894986606),
                        a = this.md5_ii(a, o, i, n, e[s + 10], 15, -1051523), n = this.md5_ii(n, a, o, i, e[s + 1], 21, -2054922799),
                        i = this.md5_ii(i, n, a, o, e[s + 8], 6, 1873313359), o = this.md5_ii(o, i, n, a, e[s + 15], 10, -30611744),
                        a = this.md5_ii(a, o, i, n, e[s + 6], 15, -1560198380), n = this.md5_ii(n, a, o, i, e[s + 13], 21, 1309151649),
                        i = this.md5_ii(i, n, a, o, e[s + 4], 6, -145523070), o = this.md5_ii(o, i, n, a, e[s + 11], 10, -1120210379),
                        a = this.md5_ii(a, o, i, n, e[s + 2], 15, 718787259), n = this.md5_ii(n, a, o, i, e[s + 9], 21, -343485551),
                        i = this.safe_add(i, r), n = this.safe_add(n, l), a = this.safe_add(a, c), o = this.safe_add(o, h);
                }
                return Array(i, n, a, o);
            }
        }, {
            key: "md5_cmn",
            value: function(e, t, i, n, a, o) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(n, o)), a), i);
            }
        }, {
            key: "md5_ff",
            value: function(e, t, i, n, a, o, s) {
                return this.md5_cmn(t & i | ~t & n, e, t, a, o, s);
            }
        }, {
            key: "md5_gg",
            value: function(e, t, i, n, a, o, s) {
                return this.md5_cmn(t & n | i & ~n, e, t, a, o, s);
            }
        }, {
            key: "md5_hh",
            value: function(e, t, i, n, a, o, s) {
                return this.md5_cmn(t ^ i ^ n, e, t, a, o, s);
            }
        }, {
            key: "md5_ii",
            value: function(e, t, i, n, a, o, s) {
                return this.md5_cmn(i ^ (t | ~n), e, t, a, o, s);
            }
        }, {
            key: "core_hmac_md5",
            value: function(e, t) {
                var i = this.str2binl(e);
                i.length > 16 && (i = this.core_md5(i, e.length * this.chrsz));
                for (var n = Array(16), a = Array(16), o = 0; o < 16; o++) n[o] = 909522486 ^ i[o],
                    a[o] = 1549556828 ^ i[o];
                var s = this.core_md5(n.concat(this.str2binl(t)), 512 + t.length * this.chrsz);
                return this.core_md5(a.concat(s), 640);
            }
        }, {
            key: "safe_add",
            value: function(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
            }
        }, {
            key: "bit_rol",
            value: function(e, t) {
                return e << t | e >>> 32 - t;
            }
        }, {
            key: "str2binl",
            value: function(e) {
                for (var t = Array(), i = (1 << this.chrsz) - 1, n = 0; n < e.length * this.chrsz; n += this.chrsz) t[n >> 5] |= (e.charCodeAt(n / this.chrsz) & i) << n % 32;
                return t;
            }
        }, {
            key: "binl2str",
            value: function(e) {
                for (var t = "", i = (1 << this.chrsz) - 1, n = 0; n < 32 * e.length; n += this.chrsz) t += String.fromCharCode(e[n >> 5] >>> n % 32 & i);
                return t;
            }
        }, {
            key: "binl2hex",
            value: function(e) {
                for (var t = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < 4 * e.length; n++) i += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
                return i;
            }
        }, {
            key: "binl2b64",
            value: function(e) {
                for (var t = "", i = 0; i < 4 * e.length; i += 3)
                    for (var n = (e[i >> 2] >> i % 4 * 8 & 255) << 16 | (e[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, a = 0; a < 4; a++) 8 * i + 6 * a > 32 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - a) & 63);
                return t;
            }
        }]), MD5;
    }();
    u.hexcase = 0, u.b64pad = "", u.chrsz = 8;
    var d, _, p, y = new(function() {
        function YLNetManager() {
            _classCallCheck(this, YLNetManager);
        }
        return _createClass(YLNetManager, [{
            key: "request",
            value: function(e, t) {
                return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee15() {
                    var i, n, o, s, r, l;
                    return regeneratorRuntime.wrap(function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = t || {}, n = tt.config.server, o = n.host.replace(/\/+$/, ""), s = n.apiversion.replace(/[\/\\]/g, ""),
                                    r = e.replace(/^\/+/, ""), c.prev = 5, l = "".concat(o, "/").concat(s, "/").concat(r),
                                    c.next = 9, a.asyncRequest(l, this.signParmas(t), "post");

                            case 9:
                                i = c.sent, i = C.cookServerRsp(e, i), c.next = 17;
                                break;

                            case 13:
                                c.prev = 13, c.t0 = c.catch(5), i = {
                                    code: 10086,
                                    msg: "请求出错，网络不稳定",
                                    result: void 0,
                                    path: e.replace(n.host, "")
                                }, console.log("请求出错，网络不稳定：".concat(e, "，").concat(c.t0));

                            case 17:
                                return c.abrupt("return", i);

                            case 18:
                            case "end":
                                return c.stop();
                        }
                    }, _callee15, this, [
                        [5, 13]
                    ]);
                }));
            }
        }, {
            key: "signParmas",
            value: function(e) {
                var t = Object.assign({}, e);
                t.apiKey = tt.config.server.apiKey, t.timestamp = Date.now() / 1e3, tt.data.token && (t.token = tt.data.token);
                var i = h.keys(t);
                i.sort();
                var n = "";
                return i.forEach(function(e) {
                    var i = void 0 === t[e] ? "" : t[e];
                    n += encodeURIComponent(i);
                }), t.apiSign = u.hex_hmac_md5(tt.config.server.apiSecret, n), t;
            }
        }, {
            key: "reqGetAvatar",
            value: function() {
                return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee16() {
                    var e;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (tt.config.needSearchPlayer) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                            case 2:
                                return t.next = 4, this.request(l.getAvatar);

                            case 4:
                                (e = t.sent).code || (tt.data.playerNamesPool = e.result.names || [], tt.data.playerHeadsPool = e.result.avatar);

                            case 6:
                            case "end":
                                return t.stop();
                        }
                    }, _callee16, this);
                }));
            }
        }, {
            key: "reqWorldRank",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee17() {
                    var t, i, a, o;
                    return regeneratorRuntime.wrap(function(s) {
                        for (;;) switch (s.prev = s.next) {
                            case 0:
                                return s.next = 2, this.request(l.worldRank, {
                                    page: e
                                });

                            case 2:
                                (t = s.sent).code || (i = t.result.list.map(function(e) {
                                    return {
                                        avatarUrl: e.avatar,
                                        nickName: e.user_nickname,
                                        score: e.score,
                                        rank: e.rank
                                    };
                                }), tt.data.worldRanks = i, a = t.result.userInfo, o = {
                                    avatarUrl: a.avatar,
                                    nickName: a.user_nickname,
                                    score: a.score,
                                    rank: a.rank
                                }, C.postMsg2OpenData(n.WorldRankData, {
                                    list: i,
                                    myRank: o
                                }));

                            case 4:
                            case "end":
                                return s.stop();
                        }
                    }, _callee17, this);
                }));
            }
        }, {
            key: "reqUpdateScore",
            value: function(e) {
                return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee18() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (tt.data.userInfo && !(e <= tt.data.userInfo.max_score)) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                            case 2:
                                return t.next = 4, this.request(l.pass, {
                                    score: e,
                                    use_time: tt.data.useTime
                                });

                            case 4:
                                t.sent.code || (tt.data.userInfo.max_score = e);

                            case 6:
                            case "end":
                                return t.stop();
                        }
                    }, _callee18, this);
                }));
            }
        }, {
            key: "getActiveConfig",
            value: function() {
                return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee19() {
                    var e;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2
                                // , 
                                // this.request(l.getActivityConfig);

                            case 2:
                                return e = t.sent, t.abrupt("return", e);

                            case 4:
                            case "end":
                                return t.stop();
                        }
                    }, _callee19, this);
                }));
            }
        }]), YLNetManager;
    }())();
    ! function(e) {
        e[e.HomeLeft = 0] = "HomeLeft", e[e.HomeRight = 1] = "HomeRight", e[e.CustomIDTreasureBox = 2] = "CustomIDTreasureBox";
    }(d || (d = {})),
    function(e) {
        e.BANNER_LOADED = "BANNER_LOADED";
    }(_ || (_ = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown", e[e.Reborn = 1] = "Reborn", e[e.Skin = 2] = "Skin",
            e[e.Coerce = 10] = "Coerce", e[e.Sign = 11] = "Sign", e[e.Lottery = 12] = "Lottery",
            e[e.Gold_Skin = 13] = "Gold_Skin", e[e.Glod_Double = 14] = "Glod_Double", e[e.Game = 15] = "Game";
    }(p || (p = {}));
    var f, g = new(function(e) {
            function YLADManager() {
                var e;
                return _classCallCheck(this, YLADManager), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADManager).apply(this, arguments))).AD_MAX = 9,
                    e._bannerPool = [], e._bannerQueue = [], e._bannerIndex = 0, e._curShowingBanner = void 0,
                    e._latestLoadAdTime = 0, e._loadAdInterval = 1e3, e._curShowingBannerId = 0, e._curShowingBlockId = 0,
                    e._curShowingBoxId = 0, e._normalBannerHegiht = 0, e._bannerShowIndex = 0, e._customPool = [],
                    e._curCreateCustomId = 0, e;
            }
            return _inherits(YLADManager, c), _createClass(YLADManager, [{
                key: "deploy",
                value: function() {
                    Laya.Browser.onQQMiniGame && (this.AD_MAX = 1), this._normalBannerHegiht = 77 / 568 * Laya.Browser.clientHeight,
                        C.isSupportBannerAd && (this.try2LoadBannerAd(), Laya.timer.loop(1e3 / 3, this, this.try2LoadBannerAd)),
                        this.createVideoAd(), this.createInterstitialAd(), this.try2LoadCustom();
                }
            }, {
                key: "createVideoAd",
                value: function() {
                    C.isSupportVideoAd && C.createVideoAd();
                }
            }, {
                key: "showVideo",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee20() {
                        return regeneratorRuntime.wrap(function(t) {


                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (C.isSupportVideoAd) {
                                        t.next = 8;
                                        break;
                                    }
                                    return C.toastMsg("操作失败：不支持视频广告！"), t.abrupt("return", -3);

                                case 5:
                                    if (!tt.data.isWatchingVidoeAd) {
                                        t.next = 8;
                                        break;
                                    }
                                    return C.toastMsg("操作失败，已有视频在播放！"), t.abrupt("return", -2);

                                case 8:
                                    return t.abrupt("return", new Promise(function(t) {
                                        y.request(l.viewVideo, {
                                            ad_type: e,
                                            type: 0
                                        }), tt.data.isWatchingVidoeAd = !0, C.showVideoAd(function(i) {
                                            // C.playBgm(!0),
                                            window.WebAudioEngine.playMusic("res/sound/bgm.mp3");
                                            tt.data.isWatchingVidoeAd = !1, i > 0 ? y.request(l.viewVideo, {
                                                ad_type: e,
                                                type: 1
                                            }) : 0 === i ? C.toastMsg("未观看完视频") : -1 === i && C.toastMsg("暂时没有视频，请稍后再试."), t(i);
                                        });
                                    }));

                                case 9:
                                case "end":
                                    return t.stop();
                            }


                        }, _callee20, this);
                    }));
                }
            }, {
                key: "try2LoadBannerAd",
                value: function() {
                    var e, t, i = this;
                    if (C.isSupportBannerAd)
                        if (this._bannerPool.length + this._bannerQueue.length > this.AD_MAX) this._loadAdInterval = Math.max((null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.banner_interval) || 1e3, 1e3);
                        else if (!(Date.now() - this._latestLoadAdTime < this._loadAdInterval)) {
                        var n = {
                            id: this._bannerIndex++,
                            banner: void 0
                        };
                        this._latestLoadAdTime = Date.now(), this._bannerQueue.push(n), null === (t = C.createBannerAd()) || void 0 === t || t.then(function(e) {
                            h.remove(i._bannerQueue, n), e && (n.banner = e, i._bannerPool.push(n), i.emit(_.BANNER_LOADED));
                        }, function() {
                            h.remove(i._bannerQueue, n);
                        });
                    }
                }
            }, {
                key: "showBanner",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    var e, t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
                    return 1 === (null === (t = null === (e = tt.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.delay) && Laya.timer.loop(3e3, this, this.showBannerLoop, [i]),
                        this.showBannerLoop(i);
                }
            }, {
                key: "showBannerLoop",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "none";
                    if (!(this._bannerPool.length <= 0)) {
                        this._bannerShowIndex === this._bannerPool.length && (this._bannerShowIndex = 0);
                        var t = this._bannerPool[this._bannerShowIndex];
                        this._curShowingBanner && this._curShowingBanner.banner.hide();
                        var n = e.split("/").pop().match(/(\S*).json/)[1];
                        return y.request(l.adShowReport, {
                                event: 1,
                                scene_id: n
                            }), t.banner.show(), this._curShowingBanner = t, this._curShowingBannerId = i.randomBetween(1, 1e7) >> 0,
                            this._bannerShowIndex++, this._curShowingBannerId;
                    }
                }
            }, {
                key: "reSetBanner",
                value: function() {
                    for (var e = 0; e < 3; ++e) this._bannerPool[e] && this._bannerPool[e].banner.hide(),
                        this._bannerPool[e] = null;
                    this._bannerPool = [], this.try2LoadBannerAd();
                }
            }, {
                key: "hideBanner",
                value: function(e, t) {
                    Laya.timer.clear(this, this.showBannerLoop);
                    for (var i = 0; i < this._bannerPool.length; i++) this._bannerPool[i] && this._bannerPool[i].banner.hide();
                }
            }, {
                key: "showBlock",
                value: function(e, t, n, a) {
                    var o = Laya.Browser.clientHeight / Laya.stage.displayHeight;
                    return e *= o, t *= o, this.hideBlock(0, !0), this._curShowingBlock = C.createBlockAd(e, t, n, a),
                        this._curShowingBlock ? (this._curShowingBlock.show(), this._curShowingBlockId = i.randomBetween(1, 1e5) >> 0,
                            this._curShowingBlockId) : 0;
                }
            }, {
                key: "changeBlockPos",
                value: function(e, t, i) {
                    if (e && this._curShowingBlockId && e === this._curShowingBlockId) {
                        var n = Laya.Browser.clientHeight / Laya.stage.displayHeight;
                        t *= n, i *= n, this._curShowingBlock.style.left = t, this._curShowingBlock.style.top = i;
                    }
                }
            }, {
                key: "hideBlock",
                value: function(e, t) {
                    var i, n;
                    (t || e && this._curShowingBlockId === e) && (null === (i = this._curShowingBlock) || void 0 === i || i.hide(),
                        null === (n = this._curShowingBlock) || void 0 === n || n.destroy(), this._curShowingBlockId = void 0,
                        this._curShowingBlock = void 0);
                }
            }, {
                key: "showBox",
                value: function(e) {
                    var t = this;
                    return this.hideBox(0, !0), this._curShowingBox = C.createBoxAd(function() {
                        t.hideBox(0, !0), e && e();
                    }), this._curShowingBox ? (this._curShowingBox.load().then(function() {
                        var e;
                        return null === (e = t._curShowingBox) || void 0 === e ? void 0 : e.show();
                    }), this._curShowingBoxId = i.randomBetween(1, 1e5) >> 0, this._curShowingBoxId) : 0;
                }
            }, {
                key: "hideBox",
                value: function(e, t) {
                    var i;
                    (t || e && this._curShowingBoxId === e) && (this._curShowingBoxId = void 0, null === (i = this._curShowingBox) || void 0 === i || i.destroy(),
                        this._curShowingBox = void 0);
                }
            }, {
                key: "try2LoadCustom",
                value: function() {
                    this.createCustom(d.HomeLeft, !0), this.createCustom(d.HomeRight, !0), this.createCustom(d.CustomIDTreasureBox, !0);
                }
            }, {
                key: "createCustom",
                value: function(e) {
                    var t, i = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = (Laya.Browser.clientHeight,
                            Laya.stage.displayHeight, 0),
                        o = .3,
                        s = "";
                    switch (e) {
                        case d.HomeLeft:
                            s = tt.config.ad.customIDHomeLeft, a = .03;
                            break;

                        case d.HomeRight:
                            s = tt.config.ad.customIDHomeRight, a = .8;
                            break;

                        case d.CustomIDTreasureBox:
                            s = tt.config.ad.customIDTreasureBox, a = .01, o = .2;
                    }
                    var r = {
                        id: this._curCreateCustomId,
                        type: e,
                        custom: void 0
                    };
                    this._customPool.push(r), null === (t = C.createCustomAd(a, o, s, n)) || void 0 === t || t.then(function(e) {
                        e ? (h.remove(i._customPool, r), r.custom = e, i._customPool.push(r)) : h.remove(i._customPool, r);
                    }, function() {
                        h.remove(i._customPool, r);
                    }), this._curCreateCustomId++;
                }
            }, {
                key: "showCustom",
                value: function(e) {
                    for (var t, i = this._curCreateCustomId, n = 0; n < this._customPool.length; n++)
                        if (this._customPool[n].type == e) {
                            t = this._customPool[n], n;
                            break;
                        }
                    return (null == t ? void 0 : t.custom) ? (null == t || t.custom.show(), t.id) : i;
                }
            }, {
                key: "hideCustom",
                value: function(e) {
                    for (var t, i, n, a = 0; a < this._customPool.length; a++) this._customPool[a].type == e && (n = this._customPool[a],
                        a);
                    n && (null === (t = n.custom) || void 0 === t || t.hide(), null === (i = n.custom) || void 0 === i || i.offLoad());
                }
            }, {
                key: "createInterstitialAd",
                value: function() {
                    C.isSupportInterstitialAd && C.createInterstitialAd();
                }
            }, {
                key: "showInterstitialAd",
                value: function() {
                    C.isSupportInterstitialAd && C.showInterstitialAd();
                }
            }, {
                key: "normalBannerHegiht",
                set: function(e) {
                    this._normalBannerHegiht = e;
                },
                get: function() {
                    return this._normalBannerHegiht;
                }
            }, {
                key: "curShowingBanner",
                get: function() {
                    return this._curShowingBanner;
                }
            }, {
                key: "hasBanner",
                get: function() {
                    return this._bannerPool.length > 0;
                }
            }]), YLADManager;
        }())(),
        m = function(e) {
            function WXMiniGamePlatform() {
                var e;
                return _classCallCheck(this, WXMiniGamePlatform), (e = _possibleConstructorReturn(this, _getPrototypeOf(WXMiniGamePlatform).apply(this, arguments)))._tencentApi = wx,
                    e._adIndex = 0, e._tercentAppName = "微信", e._preReqAuthorTime = 0, e._curBgmMusicUrl = "",
                    e;
            }
            return _inherits(WXMiniGamePlatform, s), _createClass(WXMiniGamePlatform, [{
                key: "sendJsonDataToDataContext",
                value: function(e) {
                    Laya.MiniAdpter.sendJsonDataToDataContext(e);
                }
            }, {
                key: "sendAtlasToOpenDataContext",
                value: function(e) {
                    Laya.MiniAdpter.sendAtlasToOpenDataContext(e);
                }
            }, {
                key: "submitScore",
                value: function(e) {
                    this.postMsg2OpenData({
                        event: n.SubmitScore,
                        score: e
                    });
                }
            }, {
                key: "toastMsg",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    this._tencentApi.showToast({
                        title: e,
                        icon: "none",
                        complete: void 0,
                        fail: void 0,
                        success: void 0,
                        image: void 0,
                        mask: void 0,
                        duration: t
                    });
                }
            }, {
                key: "postMsg2OpenData",
                value: function(e) {
                    this._tencentApi.getOpenDataContext().postMessage(e);
                }
            }, {
                key: "login",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee21() {
                        var e = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function(t, i) {
                                        e._tencentApi.login({
                                            success: function(n) {
                                                n.code ? (console.log("【".concat(e._tercentAppName, "】登录成功")), t(n)) : i("".concat(e._tercentAppName, "登录失败，code不存在！"));
                                            },
                                            fail: function() {
                                                return i("".concat(e._tercentAppName, "登录失败，接口调用失败！"));
                                            }
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee21, this);
                    }));
                }
            }, {
                key: "authorize",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee22() {
                        var e = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function(t) {
                                        var i = e._systemInfo,
                                            n = i.screenWidth,
                                            a = i.screenHeight,
                                            o = {
                                                left: 0,
                                                top: 0,
                                                width: n,
                                                height: a,
                                                lineHeight: a,
                                                backgroundColor: "#00000000",
                                                color: "#ffffffff",
                                                textAlign: "center",
                                                fontSize: 16,
                                                borderRadius: 4
                                            },
                                            s = e._tencentApi.createUserInfoButton({
                                                type: "text",
                                                text: "",
                                                style: o,
                                                withCredentials: !0
                                            });
                                        console.log("【".concat(e._tercentAppName, "】请求授权登录。")), s.show(), s.onTap(function(i) {
                                            var n = Date.now();
                                            n - e._preReqAuthorTime < 1e3 || (e._preReqAuthorTime = n, i.userInfo ? (console.log("【".concat(e._tercentAppName, "】用户授权登录。")),
                                                t(i)) : (console.log("【".concat(e._tercentAppName, "】授权取消。")), t(void 0)), s.destroy());
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee22, this);
                    }));
                }
            }, {
                key: "shareFriend",
                value: function(e, t) {
                    this._onShareFriend = function(e) {
                        return t && t(e);
                    }, this._shareFriendId = e.share_id, this._shareFriendBeginTime = Date.now();
                    var i = {
                        title: e.share_title,
                        imageUrl: e.share_img,
                        query: "share_id=".concat(e.share_id, "&share_type=").concat(e.share_type, "&id=").concat(tt.data.userInfo.id)
                    };
                    this._tencentApi.shareAppMessage(i);
                }
            }, {
                key: "deploy",
                value: function(e, t, i) {
                    this._systemInfo = this._tencentApi.getSystemInfoSync(), this._launchOptions = this._tencentApi.getLaunchOptionsSync(),
                        this._onShareAppMsg = i, this._onGameHide = e, this._onGameShow = t, this.addWxEvents();
                }
            }, {
                key: "addWxEvents",
                value: function() {
                    this._tencentApi.onShow(this.onGameShow.bind(this)), this._tencentApi.onHide(this.onGameHide.bind(this)),
                        this._tencentApi.onShareAppMessage(this.onShareAppMsg.bind(this)), this._tencentApi.showShareMenu({
                            withShareTicket: !0,
                            menus: ["shareAppMessage", "shareTimeline"]
                        });
                }
            }, {
                key: "onGameShow",
                value: function() {
                    if (this._onShareFriend) {
                        var e = Date.now() - this._shareFriendBeginTime > 2500;
                        this._onShareAppMsg && e && this._onShareAppMsg(this._shareFriendId), this._onShareFriend(e),
                            this._shareFriendId = void 0, this._shareFriendBeginTime = void 0, this._onShareFriend = void 0;
                    }
                    this._onGameShow && this._onGameShow();
                }
            }, {
                key: "onGameHide",
                value: function() {
                    this._onGameHide && this._onGameHide();
                }
            }, {
                key: "onShareAppMsg",
                value: function() {
                    if (tt.data.token) {
                        var e = tt.data.getShareContent(1);
                        return this._onShareAppMsg && this._onShareAppMsg(e.share_id), {
                            title: e.share_title,
                            imageUrl: e.share_img,
                            query: "share_id=".concat(e.share_id, "&share_type=").concat(e.share_type, "&id=").concat(tt.data.userInfo.id),
                            success: function() {},
                            fail: function() {}
                        };
                    }
                }
            }, {
                key: "getLaunchOptions",
                value: function() {
                    var e, t, i, n = this._launchOptions,
                        a = {};
                    if (!n) return a;
                    n.scene && (a.scene_id = n.scene), (null === (e = n.referrerInfo) || void 0 === e ? void 0 : e.appId) && (a.appid = n.referrerInfo.appId);
                    var o = n.query;
                    return o ? (o.id && (a.share_user_id = parseInt(o.id) || 0), o.share_id && (a.share_id = parseInt(o.share_id) || 0),
                            o.channel && (a.channel = o.channel), o.wxgamecid && (a.wxgamecid = o.wxgamecid)) : (null === (i = null === (t = n.referrerInfo) || void 0 === t ? void 0 : t.extraData) || void 0 === i ? void 0 : i.channel) && (a.channel = n.referrerInfo.extraData.channel),
                        a;
                }
            }, {
                key: "vibrate",
                value: function(e) {
                    var t = {
                        complete: function() {},
                        fail: function() {},
                        success: function() {}
                    };
                    e ? this._tencentApi.vibrateShort(t) : this._tencentApi.vibrateLong(t);
                }
            }, {
                key: "loadSubpackage",
                value: function(e, t) {
                    var i = this;
                    return new Promise(function(n, a) {
                        i._tencentApi.loadSubpackage({
                            name: e,
                            success: function() {
                                t(1), n();
                            },
                            fail: function(e) {
                                a(e);
                            }
                        }).onProgressUpdate(function(e) {
                            var i = Math.min(1, e.totalBytesWritten / e.totalBytesExpectedToWrite);
                            t(i);
                        });
                    });
                }
            }, {
                key: "playMusic",
                value: function(e) {
                    var t;
                    e && e !== this._curBgmMusicUrl && (null === (t = this._bgmMusicContext) || void 0 === t || t.destroy(),
                        this._bgmMusicContext = this._tencentApi.createInnerAudioContext(), this._bgmMusicContext.src = e,
                        this._bgmMusicContext.loop = !0, this._bgmMusicContext.play(), this._curBgmMusicUrl = e);
                }
            }, {
                key: "stopSound",
                value: function(e) {
                    var t;
                    e && (e === this._curBgmMusicUrl ? (null === (t = this._bgmMusicContext) || void 0 === t || t.destroy(),
                        this._bgmMusicContext = void 0, this._curBgmMusicUrl = void 0) : _get(_getPrototypeOf(WXMiniGamePlatform.prototype), "stopSound", this).call(this, e));
                }
            }, {
                key: "getRightUpFavouriteBtnPos",
                value: function() {
                    if (r.compareVersion(this._systemInfo.SDKVersion, "2.1.0") >= 0) {
                        var e = this._tencentApi.getMenuButtonBoundingClientRect(),
                            t = e.width,
                            i = e.height,
                            n = e.top,
                            a = e.left;
                        if (t || i || n || a) {
                            var o = new Laya.Point(a, n + .6 * i),
                                s = Laya.stage.displayWidth / Laya.Browser.clientWidth,
                                l = Laya.stage.displayHeight / Laya.Browser.clientHeight;
                            return o.x *= s, o.y *= l, o;
                        }
                    } else;
                }
            }, {
                key: "createBlockAd",
                value: function(e, t, i, n) {}
            }, {
                key: "createBoxAd",
                value: function(e) {}
            }, {
                key: "resetAdIndex",
                value: function() {
                    this._adIndex = 0;
                }
            }, {
                key: "createBannerAd",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee23() {
                        var t = this;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (this.isSupportBannerAd) {
                                        i.next = 2;
                                        break;
                                    }
                                    return i.abrupt("return");

                                case 2:
                                    return i.abrupt("return", new Promise(function(i) {
                                        var n = tt.config.ad.bannerAdID[e],
                                            a = t._tencentApi.createBannerAd({
                                                adIntervals: 30,
                                                adUnitId: n,
                                                style: {
                                                    left: 0,
                                                    top: .86 * t._systemInfo.screenHeight,
                                                    width: t._systemInfo.screenWidth
                                                }
                                            });
                                        a.onError(function(e) {
                                            y.request(l.adShowReport, {
                                                event: 3,
                                                err_code: e.errCode
                                            }), i(void 0);
                                        }), a.onLoad(function() {
                                            y.request(l.adShowReport, {
                                                event: 2,
                                                banner_id: n
                                            }), i(a);
                                        }), a.onResize(function(e) {
                                            if (e) a.style.realWidth = e.width, a.style.realHeight = e.height, g.normalBannerHegiht = e.height,
                                                a.style.top = t._systemInfo.screenHeight - e.height;
                                            else {
                                                var i = a.style.realHeight + .1;
                                                g.normalBannerHegiht || (g.normalBannerHegiht = i), a.style.top = t._systemInfo.screenHeight - i;
                                            }
                                        });
                                    }));

                                case 3:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee23, this);
                    }));
                }
            }, {
                key: "createVideoAd",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee24() {
                        var e = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function(t) {
                                        var i;
                                        null === (i = e._videoAd) || void 0 === i || i.destroy(), e._videoAd = e._tencentApi.createRewardedVideoAd({
                                            adUnitId: tt.config.ad.videoAdID
                                        });
                                        e._videoAd.onLoad(function onload() {
                                            e._videoAd && (e._videoAd.offLoad(onload), t(e._videoAd));
                                        }), e._videoAd.onError(function() {
                                            var i;
                                            console.log("视频加载失败"), null === (i = e._videoAd) || void 0 === i || i.destroy(),
                                                e._videoAd = void 0, t(void 0);
                                        }), e._videoAd.onClose(function(t) {
                                            e._onVideoCloseCallback && e._onVideoCloseCallback(t ? t.isEnded ? 1 : 0 : 1), e._onVideoCloseCallback = void 0,
                                                e._videoAd.load();
                                        }), e._videoAd.load();
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee24, this);
                    }));
                }
            }, {
                key: "createCustomAd",
                value: function(e, t, i, n) {
                    var a = this;
                    if (this.isSupportCustomAd) return new Promise(function(o) {
                        var s = a._systemInfo,
                            r = s.screenWidth,
                            l = s.screenHeight,
                            c = a._tencentApi.createCustomAd({
                                adUnitId: i,
                                adIntervals: 30,
                                style: {
                                    left: e * r,
                                    top: t * l
                                }
                            });
                        c.onError(function(e) {
                            console.log("【WX】custom广告加载失败：".concat(null == e ? void 0 : e.errCode, ":").concat(null == e ? void 0 : e.errMsg)),
                                o(void 0);
                        }), c.onLoad(function() {
                            console.log("【WX】custom广告加载成功！", c), o(c), n || c.show();
                        });
                    });
                }
            }, {
                key: "showVideoAd",
                value: function(e) {
                    var t;
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee25() {
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return this._onVideoCloseCallback = e, i.prev = 1, i.next = 4, this._videoAd.show();

                                case 4:
                                    i.next = 11;
                                    break;

                                case 6:
                                    i.prev = 6, i.t0 = i.catch(1), null === (t = this._videoAd) || void 0 === t || t.load(),
                                        this._onVideoCloseCallback = void 0, e && e(-1);

                                case 11:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee25, this, [
                            [1, 6]
                        ]);
                    }));
                }
            }, {
                key: "gotoApp",
                value: function(e) {
                    var t = this,
                        i = e.app_id,
                        n = e.app_path;
                    e.wx_id, e.ad_id;
                    return new Promise(function(e) {
                        t._tencentApi.navigateToMiniProgram({
                            appId: i,
                            path: n,
                            success: function() {
                                e(!0);
                            },
                            complete: function() {},
                            fail: function() {
                                e(!1);
                            },
                            envVersion: void 0,
                            extraData: void 0
                        });
                    });
                }
            }, {
                key: "requestSubscribeSystemMessage",
                value: function() {
                    var e = this,
                        t = "SYS_MSG_TYPE_RANK",
                        i = !1;
                    return this.checkRequestSubscribeSystemMessage(!0).then(function(e) {
                        i = e;
                    }), new Promise(function(n) {
                        if (i) return n(!0);
                        e._tencentApi.requestSubscribeSystemMessage({
                            msgTypeList: [t],
                            success: function(i) {
                                i[t] && "accept" === i[t] ? (e.toastMsg("排行榜好友超越提醒设置成功"), n(!0)) : (e.toastMsg("授权不再询问"),
                                    n(!0));
                            },
                            fail: function(e) {
                                n(!1), tt.data.hasRejectisSubscribeMessageAuthor = !0;
                            },
                            complete: function(e) {}
                        });
                    });
                }
            }, {
                key: "checkRequestSubscribeSystemMessage",
                value: function(e) {
                    var t = this;
                    return new Promise(function(i) {
                        if (!t.isSupportSetting) return i(!1);
                        t._tencentApi.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                var a;
                                if (null === (a = n.subscriptionsSetting) || void 0 === a ? void 0 : a.mainSwitch)
                                    if (null != n.subscriptionsSetting.itemSettings) {
                                        var o = n.subscriptionsSetting.itemSettings.SYS_MSG_TYPE_RANK;
                                        "accept" === o ? i(!0) : "reject" === o ? i(!0) : "ban" === o && i(!0);
                                    } else i(!1);
                                else i(!1), e && t.toastMsg("需先开启接受通知开关(设置-订阅消息-接受通知)");
                            }
                        });
                    });
                }
            }, {
                key: "createInterstitialAd",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee26() {
                        var e = this;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new Promise(function(t) {
                                        var i;
                                        null === (i = e._interstitialAd) || void 0 === i || i.destroy(), e._interstitialAd = e._tencentApi.createInterstitialAd({
                                            adUnitId: tt.config.ad.interAdID
                                        });
                                        e._interstitialAd.onLoad(function onload() {
                                            e._interstitialAd && (e._interstitialAd.offLoad(onload), t(e._interstitialAd));
                                        }), e._interstitialAd.onError(function(i) {
                                            var n;
                                            null === (n = e._interstitialAd) || void 0 === n || n.destroy(), e._interstitialAd = void 0,
                                                t(void 0);
                                        }), e._interstitialAd.onClose(function() {
                                            e._interstitialAd.load();
                                        }), e._interstitialAd.load();
                                    }));

                                case 1:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee26, this);
                    }));
                }
            }, {
                key: "showInterstitialAd",
                value: function() {
                    this._interstitialAd && this._interstitialAd.show();
                }
            }, {
                key: "isSupportBlockAd",
                get: function() {
                    return !1;
                }
            }, {
                key: "isSupportBoxAd",
                get: function() {
                    return !1;
                }
            }, {
                key: "isSupportBannerAd",
                get: function() {
                    return r.compareVersion(this._systemInfo.SDKVersion, "2.6.0") >= 0;
                }
            }, {
                key: "isSupportVideoAd",
                get: function() {
                    return r.compareVersion(this._systemInfo.SDKVersion, " 2.0.4") >= 0;
                }
            }, {
                key: "isSupportCustomAd",
                get: function() {
                    return r.compareVersion(this._systemInfo.SDKVersion, "2.11.1") >= 0;
                }
            }, {
                key: "statusBarHeight",
                get: function() {
                    var e = this._systemInfo.statusBarHeight;
                    return (e = e > 20 ? e : 0) * Laya.stage.displayHeight / Laya.Browser.clientHeight;
                }
            }, {
                key: "isSupportSetting",
                get: function() {
                    return r.compareVersion(this._systemInfo.SDKVersion, "1.2.0") >= 0;
                }
            }, {
                key: "isRequestSubscribeSystemMessage",
                get: function() {
                    if (!this.isSupportSetting) return !1;
                    this._tencentApi.getSetting({
                        withSubscriptions: !0,
                        success: function(e) {
                            var t;
                            if ((null === (t = e.subscriptionsSetting) || void 0 === t ? void 0 : t.mainSwitch) && null != e.subscriptionsSetting.itemSettings) {
                                var i = e.subscriptionsSetting.itemSettings.SYS_MSG_TYPE_RANK;
                                if ("accept" === i) return !0;
                                if ("reject" === i) return !1;
                                if ("ban" === i) return !1;
                            }
                        }
                    });
                }
            }, {
                key: "isSupportInterstitialAd",
                get: function() {
                    return r.compareVersion(this._systemInfo.SDKVersion, "2.6.0") >= 0;
                }
            }]), WXMiniGamePlatform;
        }(),
        v = function(e) {
            function AbstractModel() {
                return _classCallCheck(this, AbstractModel), _possibleConstructorReturn(this, _getPrototypeOf(AbstractModel).apply(this, arguments));
            }
            return _inherits(AbstractModel, c), _createClass(AbstractModel, [{
                key: "try2Set",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (this.isValid) {
                        var n = "_".concat(e);
                        (this[n] !== t || i) && (this[n] = t, this.emit(e, t));
                    }
                }
            }]), AbstractModel;
        }(),
        k = function() {
            function AsyncUtils() {
                _classCallCheck(this, AsyncUtils);
            }
            return _createClass(AsyncUtils, null, [{
                key: "sleep",
                value: function(e) {
                    return new Promise(function(t) {
                        Laya.timer.once(e, void 0, t);
                    });
                }
            }]), AsyncUtils;
        }(),
        S = function() {
            function YLLocalStorage() {
                _classCallCheck(this, YLLocalStorage), this._isDirty = !1;
            }
            return _createClass(YLLocalStorage, [{
                key: "deploy",
                value: function(e) {
                    this._storageKey = u.hex_md5(e), this._data = Laya.LocalStorage.getJSON(this._storageKey) || {},
                        Laya.timer.loop(1e3 / 3, this, this.tick2Flush);
                }
            }, {
                key: "tick2Flush",
                value: function() {
                    this._isDirty && (Laya.LocalStorage.setJSON(this._storageKey, this._data), this._isDirty = !1);
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this._data[e] !== t && (this._isDirty = !0, this._data[e] = t);
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._data[e];
                }
            }]), YLLocalStorage;
        }(),
        w = new(function() {
            function YLStorageManager() {
                _classCallCheck(this, YLStorageManager), this._storage = new S();
            }
            return _createClass(YLStorageManager, [{
                key: "deploy",
                value: function() {
                    var e = u.hex_md5(tt.config.gameName + "-ylsdk");
                    this._storage.deploy(e), this.updateDataModel();
                }
            }, {
                key: "updateDataModel",
                value: function() {
                    var e, t, i = tt.data;
                    i.gold = this.get("gold") || 0, i.storeItemIdInUse = this.get("storeItemIdInUse") || NaN,
                        i.ownStoreItemIds = (this.get("ownStoreItemIds") || "").split(",").filter(Boolean),
                        C.canVibrate = null === (e = this.get("canVibrate")) || void 0 === e || e,
                        i.signInDate = this.get("signInDate") || "", i.signInCount = this.get("signInCount") || 0,
                        i.signInVideoCount = null !== (t = this.get("signInVideoCount")) && void 0 !== t ? t : 1e3,
                        i.lotteryCount = this.get("lotteryCount") || 0, i.raffleNumber = this.get("raffleNumber") || 0,
                        i.freeNumber = this.get("freeNumber") || 0, i.lottertVideoNumber = this.get("lottertVideoNumber") || 0,
                        i.lotterDate = this.get("lotterDate") || "", i.allSignInCount = this.get("allSignInCount") || 0,
                        i.raffleDate = this.get("raffleDate") || [];
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this._storage.set(e, t);
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._storage.get(e);
                }
            }]), YLStorageManager;
        }())(),
        C = new(function(e) {
            function YLPlatformManager() {
                var e;
                return _classCallCheck(this, YLPlatformManager), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLPlatformManager).apply(this, arguments)))._subpackageNames = [],
                    e._subpackageProgresses = [], e._isMute = !1, e._canVibrate = !0, e._doLoadSubPackage = function(t, n) {
                        return __awaiter(_assertThisInitialized(e), void 0, void 0, regeneratorRuntime.mark(function _callee27() {
                            var e, a = this;
                            return regeneratorRuntime.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return o.prev = 0, e = function(e) {
                                            console.log("分包".concat(t, "下载进度：").concat(e)), a._subpackageProgresses[n] = i.calValueBetween(e, 0, 1),
                                                a.onSubPackageProgress();
                                        }, o.next = 4, this._platform.loadSubpackage(t, e);

                                    case 4:
                                        o.next = 11;
                                        break;

                                    case 6:
                                        return o.prev = 6, o.t0 = o.catch(0), console.log("分包加载 ".concat(t, " 失败，正重新加载。失败原因：").concat(o.t0)),
                                            o.next = 11, this._doLoadSubPackage(t, n);

                                    case 11:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee27, this, [
                                [0, 6]
                            ]);
                        }));
                    }, e._onGameShow = function() {
                        tt.data.isSleep = !1, console.log("app切换到前台"),
                            window.WebAudioEngine.playMusic("res/sound/bgm.mp3");
                    }, e._onGameHide = function() {
                        console.log("app切换到后台"), tt.data.isSleep = !0;
                    }, e._onShareAppMsg = function(e) {
                        y.request(l.recordShare, {
                            share_id: e
                        });
                    }, e;
            }
            return _inherits(YLPlatformManager, v), _createClass(YLPlatformManager, [{
                    key: "cookServerRsp",
                    value: function(e, t) {
                        return this._platform ? this._platform.cookServerRsp(e, t) : t;
                    }
                }, {
                    key: "sendJsonDataToDataContext",
                    value: function(e) {
                        var t;
                        null === (t = this._platform) || void 0 === t || t.sendJsonDataToDataContext(e);
                    }
                }, {
                    key: "sendAtlasToOpenDataContext",
                    value: function(e) {
                        var t;
                        null === (t = this._platform) || void 0 === t || t.sendAtlasToOpenDataContext(e);
                    }
                }, {
                    key: "submitScore",
                    value: function(e) {
                        var t;
                        !tt.data.userInfo || e <= tt.data.userInfo.max_score || null === (t = this._platform) || void 0 === t || t.submitScore(e);
                    }
                }, {
                    key: "shareFriend",
                    value: function(e, t) {
                        if (this._platform) {
                            if (!tt.data.userInfo) return this.toastMsg("分享失败，尚未登录！"), void(t && t(!1));
                            var i = tt.data.shareInfoDic[e] || [],
                                n = h.randomOne(i) || {
                                    share_title: "老铁快帮我点点，差一点就过关了",
                                    share_img: "",
                                    share_id: 1,
                                    share_type: e
                                };
                            this._platform.shareFriend(n, t);
                        }
                    }
                }, {
                    key: "postMsg2OpenData",
                    value: function(e, t) {
                        var i;
                        null === (i = this._platform) || void 0 === i || i.postMsg2OpenData(Object.assign({
                            event: e
                        }, t || {}));
                    }
                }, {
                    key: "vibrate",
                    value: function(e) {
                        this._platform && this.canVibrate && this._platform.vibrate(e);
                    }
                }, {
                    key: "playBgm",
                    value: function() {
                        window.WebAudioEngine.playMusic("res/sound/bgm.mp3");
                    }
                }, {
                    key: "playMusic",
                    value: function(e) {
                        var i = this.cookSoundUrlByName(e);
                        window.WebAudioEngine.playMusic(i);
                    }
                }, {
                    key: "playSoundEffect",
                    value: function(e) {
                        var i = this.cookSoundUrlByName(e);
                        window.WebAudioEngine.playSound(i, false);
                    }
                }, {
                    key: "stopSound",
                    value: function(e) {
                        if (tt.hasDeployed && e) {
                            var t = e === tt.config.sound.bgm;
                            t && (this._curPlayingBgmName = void 0);
                            var i = this.cookSoundUrlByName(e);
                            window.WebAudioEngine.stopSound(i);
                        }
                    }
                }, {
                    key: "stopAllSound",
                    value: function() {
                        window.WebAudioEngine.stopAll();
                    }
                },
                {
                    key: "cookSoundUrlByName",
                    value: function(e) {
                        var t = e.includes(".") ? e : e + ".mp3";
                        return "".concat(tt.config.sound.basePath, "/").concat(t);
                    }
                }, {
                    key: "toastMsg",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                        this._platform ? this._platform.toastMsg(e, t) : console.log("【飘字消息】".concat(e));
                    }
                }, {
                    key: "gotoApp",
                    value: function(e) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee28() {
                            var t;
                            return regeneratorRuntime.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        if (!this._platform || !e) {
                                            i.next = 11;
                                            break;
                                        }
                                        return i.next = 3, this._platform.gotoApp(e);

                                    case 3:
                                        if (!i.sent) {
                                            i.next = 7;
                                            break;
                                        }
                                        i.t0 = 1, i.next = 8;
                                        break;

                                    case 7:
                                        i.t0 = 0;

                                    case 8:
                                        return t = i.t0, y.request(l.clickWxApp, {
                                            wx_id: e.wx_id,
                                            ad_id: e.ad_id,
                                            type: t
                                        }), i.abrupt("return", t);

                                    case 11:
                                        return i.abrupt("return", -1);

                                    case 12:
                                    case "end":
                                        return i.stop();
                                }
                            }, _callee28, this);
                        }));
                    }
                }, {
                    key: "getRightUpFavouriteBtnPos",
                    value: function() {
                        var e, t = (null === (e = this._platform) || void 0 === e ? void 0 : e.getRightUpFavouriteBtnPos()) || new Laya.Point();
                        return t.x || t.y || (t.x = Laya.stage.displayWidth - 100, t.y = 100), t;
                    }
                }, {
                    key: "loadSubpackages",
                    value: function(e, t) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee29() {
                            var i;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (this._platform && e && e.length) {
                                            n.next = 2;
                                            break;
                                        }
                                        return n.abrupt("return", console.log("不用加载分包"));

                                    case 2:
                                        if (this._onSubpackageProgress = t, this._subpackageNames = e, this._subpackageProgresses = e.map(function() {
                                                return 0;
                                            }), !tt.config.load.isSubpackLoadPromiseAll) {
                                            n.next = 10;
                                            break;
                                        }
                                        return n.next = 8, Promise.all(this._subpackageNames.map(this._doLoadSubPackage));

                                    case 8:
                                        n.next = 17;
                                        break;

                                    case 10:
                                        i = 0;

                                    case 11:
                                        if (!(i < this._subpackageNames.length)) {
                                            n.next = 17;
                                            break;
                                        }
                                        return n.next = 14, this._doLoadSubPackage(this._subpackageNames[i], i);

                                    case 14:
                                        i++, n.next = 11;
                                        break;

                                    case 17:
                                    case "end":
                                        return n.stop();
                                }
                            }, _callee29, this);
                        }));
                    }
                }, {
                    key: "onSubPackageProgress",
                    value: function() {
                        if (this._onSubpackageProgress) {
                            var e = this._subpackageProgresses.reduce(function(e, t) {
                                return e + t;
                            }) / this._subpackageProgresses.length;
                            this._onSubpackageProgress(e);
                        }
                    }
                }, {
                    key: "getInitConfig",
                    value: function() {
                        var e;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee30() {
                            var t, i;
                            return regeneratorRuntime.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        // return i = null === (e = this._platform) || void 0 === e ? void 0 : e.getLaunchOptions(),
                                        //     console.log("getInitConfig param:", i), n.next = 4, y.request(l.getInitConfig, {
                                        //         scene_id: null == i ? void 0 : i.scene_id
                                        //     });
                                        // console.error("////////////////////////////////");
                                        n.next = 9;
                                        break;

                                    case 4:
                                        if ((t = n.sent).code) {
                                            n.next = 9;
                                            break;
                                        }
                                        return n.abrupt("return", t.result);

                                    case 9:
                                        return n.abrupt("return");

                                    case 10:
                                    case "end":
                                        return n.stop();
                                }
                            }, _callee30, this);
                        }));
                    }
                }, {
                    key: "login",
                    value: function() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee33() {
                            var e, t, i, n, a, o, s, r = this;
                            return regeneratorRuntime.wrap(function(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        if (this._platform) {
                                            c.next = 2;
                                            break;
                                        }
                                        return c.abrupt("return");

                                    case 2:
                                        e = 3, t = 0, i = "", a = function() {
                                            return __awaiter(r, void 0, void 0, regeneratorRuntime.mark(function _callee31() {
                                                var e;
                                                return regeneratorRuntime.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.prev = 0, t.next = 3, this._platform.login();

                                                        case 3:
                                                            e = t.sent, i = e.code, console.log("【登录】app登录成功：".concat(i)), t.next = 12;
                                                            break;

                                                        case 8:
                                                            return t.prev = 8, t.t0 = t.catch(0), i = "", t.abrupt("return", t.t0);

                                                        case 12:
                                                            return t.abrupt("return", "");

                                                        case 13:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                                }, _callee31, this, [
                                                    [0, 8]
                                                ]);
                                            }));
                                        }, o = function() {
                                            return __awaiter(r, void 0, void 0, regeneratorRuntime.mark(function _callee32() {
                                                var e;
                                                return regeneratorRuntime.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return (e = this._platform.getLaunchOptions()).code = i, e.late_version = tt.data.CUR_VERSION,
                                                                t.next = 5, y.request(l.login, e);

                                                        case 5:
                                                            n = t.sent, console.log(">>>>>>>>>>>>>>>>>>>", n);

                                                        case 7:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                                }, _callee32, this);
                                            }));
                                        };

                                    case 7:
                                        return c.next = 10, a();

                                    case 10:
                                        if (s = c.sent, i) {
                                            c.next = 15;
                                            break;
                                        }
                                        console.log("【登录】app登录失败：".concat(s, "，").concat(i)), c.next = 20;
                                        break;

                                    case 15:
                                        return c.next = 17, o();

                                    case 17:
                                        if (n.code) {
                                            c.next = 19;
                                            break;
                                        }
                                        return c.abrupt("return", n.result);

                                    case 19:
                                        console.log("【登录】后台失败，错误代码：".concat(n.code, "，原因：").concat(n.msg));

                                    case 20:
                                        if (!(++t < e)) {
                                            c.next = 26;
                                            break;
                                        }
                                        return c.next = 24, k.sleep(1e3);

                                    case 24:
                                        c.next = 28;
                                        break;

                                    case 26:
                                        return console.log("登录失败，已经超过最大重试次数（".concat(e, "次）。")), c.abrupt("return");

                                    case 28:
                                        c.next = 7;
                                        break;

                                    case 30:
                                    case "end":
                                        return c.stop();
                                }
                            }, _callee33, this);
                        }));
                    }
                }, {
                    key: "authorize",
                    value: function() {
                        var e, t;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee34() {
                            var i, n, a;
                            return regeneratorRuntime.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (!(null === (e = tt.data.userInfo) || void 0 === e ? void 0 : e.avatar)) {
                                            o.next = 2;
                                            break;
                                        }
                                        return o.abrupt("return", !0);

                                    case 2:
                                        return o.next = 4, null === (t = this._platform) || void 0 === t ? void 0 : t.authorize();

                                    case 4:
                                        if (i = o.sent) {
                                            o.next = 8;
                                            break;
                                        }
                                        return tt.data.hasRejectAuthor = !0, o.abrupt("return", !1);

                                    case 8:
                                        return n = {
                                            encrypted_data: i.encryptedData,
                                            iv: i.iv
                                        }, o.next = 11, y.request(l.authorizeLogin, n);

                                    case 11:
                                        if ((a = o.sent).code) {
                                            o.next = 17;
                                            break;
                                        }
                                        return tt.data.userInfo = a.result.userInfo, o.abrupt("return", !0);

                                    case 17:
                                        return o.abrupt("return", !1);

                                    case 18:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee34, this);
                        }));
                    }
                }, {
                    key: "deploy",
                    value: function() {
                        Laya.Browser.onMiniGame && (this._platform = new m()), this._platform && this._platform.deploy(this._onGameHide, this._onGameShow, this._onShareAppMsg);
                    }
                }, {
                    key: "showVideoAd",
                    value: function(e) {
                        this.isSupportVideoAd && (o.isWorldCanClick = !1, this._platform.showVideoAd(function(t) {
                            o.isWorldCanClick = !0, e && e(t);
                        }));
                    }
                }, {
                    key: "createVideoAd",
                    value: function() {
                        this.isSupportVideoAd && this._platform.createVideoAd();
                    }
                }, {
                    key: "resetAdIndex",
                    value: function() {
                        var e;
                        this.isSupportVideoAd && (null === (e = this._platform) || void 0 === e || e.resetAdIndex());
                    }
                }, {
                    key: "createBannerAd",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee35() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.isSupportBannerAd) {
                                            t.next = 2;
                                            break;
                                        }
                                        return t.abrupt("return");

                                    case 2:
                                        return t.next = 4, this._platform.createBannerAd(e);

                                    case 4:
                                        return t.abrupt("return", t.sent);

                                    case 5:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee35, this);
                        }));
                    }
                }, {
                    key: "createBlockAd",
                    value: function(e, t, i, n) {
                        if (this.isSupportBlockAd) return this._platform.createBlockAd(e, t, i, n);
                    }
                }, {
                    key: "createBoxAd",
                    value: function(e) {
                        var t;
                        if (this.isSupportBoxAd) return null === (t = this._platform) || void 0 === t ? void 0 : t.createBoxAd(e);
                    }
                }, {
                    key: "createCustomAd",
                    value: function(e, t, i) {
                        var n, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee36() {
                            return regeneratorRuntime.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (this.isSupportCustomAd) {
                                            o.next = 2;
                                            break;
                                        }
                                        return o.abrupt("return");

                                    case 2:
                                        return o.next = 4, null === (n = this._platform) || void 0 === n ? void 0 : n.createCustomAd(e, t, i, a);

                                    case 4:
                                        return o.abrupt("return", o.sent);

                                    case 5:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee36, this);
                        }));
                    }
                }, {
                    key: "createInterstitialAd",
                    value: function() {
                        this.isSupportInterstitialAd && this._platform.createInterstitialAd();
                    }
                }, {
                    key: "showInterstitialAd",
                    value: function() {
                        this.isSupportInterstitialAd && this._platform.showInterstitialAd();
                    }
                }, {
                    key: "getStatusBarHeight",
                    value: function() {
                        var e;
                        return (null === (e = this._platform) || void 0 === e ? void 0 : e.statusBarHeight) || 0;
                    }
                }, {
                    key: "checkSceneBlacklist",
                    value: function() {
                        var e, t;
                        if (this._platform) {
                            var i = null === (t = null === (e = tt.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.screen_scenes;
                            if (i) {
                                var n = this._platform.getLaunchOptions();
                                console.log("checkSceneBlacklist param:", n), -1 != i.indexOf(n.scene_id) && (tt.data.isSceneBlacklist = !0);
                            }
                        }
                    }
                }, {
                    key: "requestSubscribeSystemMessage",
                    value: function() {
                        var e;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee37() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", null === (e = this._platform) || void 0 === e ? void 0 : e.requestSubscribeSystemMessage());

                                    case 1:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee37, this);
                        }));
                    }
                }, {
                    key: "checkRequestSubscribeSystemMessage",
                    value: function() {
                        var e;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee38() {
                            var t;
                            return regeneratorRuntime.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return t = null === (e = this._platform) || void 0 === e ? void 0 : e.checkRequestSubscribeSystemMessage(),
                                            i.abrupt("return", t);

                                    case 2:
                                    case "end":
                                        return i.stop();
                                }
                            }, _callee38, this);
                        }));
                    }
                }, {
                    key: "canVibrate",
                    get: function() {
                        return this._canVibrate;
                    },
                    set: function(e) {
                        this.try2Set("canVibrate", e), w.set("canVibrate", e);
                    }
                }, {
                    key: "isIosWXMiniGame",
                    get: function() {
                        return Laya.Browser.onMiniGame && Laya.Browser.onIOS;
                    }
                }, {
                    key: "isQQWXMiniGame",
                    get: function() {
                        return Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame;
                    }
                }, {
                    key: "isSupportVideoAd",
                    get: function() {
                        var e;
                        return !!tt.config.ad.videoAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportVideoAd);
                    }
                }, {
                    key: "isSupportBannerAd",
                    get: function() {
                        var e;
                        return !!tt.config.ad.bannerAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBannerAd);
                    }
                }, {
                    key: "isSupportBlockAd",
                    get: function() {
                        var e;
                        return !!tt.config.ad.blockAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBannerAd);
                    }
                }, {
                    key: "isSupportBoxAd",
                    get: function() {
                        var e;
                        return !!tt.config.ad.boxAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportBoxAd);
                    }
                }, {
                    key: "isSupportCustomAd",
                    get: function() {
                        var e;
                        return null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportCustomAd;
                    }
                }, {
                    key: "isSupportInterstitialAd",
                    get: function() {
                        var e;
                        return !!tt.config.ad.interAdID && (null === (e = this._platform) || void 0 === e ? void 0 : e.isSupportInterstitialAd);
                    }
                }, {
                    key: "isRequestSubscribeSystemMessage",
                    get: function() {
                        var e;
                        return null === (e = this._platform) || void 0 === e ? void 0 : e.isRequestSubscribeSystemMessage;
                    }
                }
            ]), YLPlatformManager;
        }())(),
        b = function(e) {
            function ZoomButton() {
                var e;
                return _classCallCheck(this, ZoomButton), (e = _possibleConstructorReturn(this, _getPrototypeOf(ZoomButton).apply(this, arguments)))._scaleX = 1,
                    e._scaleY = 1, e._isPushingDown = !1, e.mouseDownScale = 1.03, e.notZoom = !1, e;
            }
            return _inherits(ZoomButton, Laya.Script), _createClass(ZoomButton, [{
                key: "onAwake",
                value: function() {
                    var e = this.owner;
                    e = this.owner, this._scaleX = e.scaleX, this._scaleY = e.scaleY, this._spOwner = e;
                }
            }, {
                key: "onMouseDown",
                value: function() {
                    this.isPushingDown = !0;
                }
            }, {
                key: "onMouseUp",
                value: function() {
                    if (this._isPushingDown) {
                        this.isPushingDown = !1;
                        var e = this.specifiedClickSound || tt.config.sound.click;
                        C.playSoundEffect(e);
                    }
                }
            }, {
                key: "onStageMouseUp",
                value: function() {
                    this.isPushingDown = !1;
                }
            }, {
                key: "isPushingDown",
                get: function() {
                    return this._isPushingDown;
                },
                set: function(e) {
                    if (this._isPushingDown !== e && (this._isPushingDown = e, !this.notZoom)) {
                        var t = this.zoomTarget || this._spOwner;
                        e ? Laya.Tween.to(t, {
                            scaleX: this._scaleX * this.mouseDownScale,
                            scaleY: this._scaleY * this.mouseDownScale
                        }, 50) : Laya.Tween.to(t, {
                            scaleX: this._scaleX,
                            scaleY: this._scaleY
                        }, 50);
                    }
                }
            }]), ZoomButton;
        }(),
        L = function(e) {
            function AbstractRuntimeView() {
                return _classCallCheck(this, AbstractRuntimeView), _possibleConstructorReturn(this, _getPrototypeOf(AbstractRuntimeView).apply(this, arguments));
            }
            return _inherits(AbstractRuntimeView, Laya.View), _createClass(AbstractRuntimeView, [{
                key: "deploy",
                value: function(e, t) {
                    for (var i in this._model = e, this._controller = t, this) {
                        var n = this[i];
                        n instanceof Laya.Node && 0 === i.indexOf("_btn") && (n.getComponent(b) || n.addComponent(b),
                            a.addClickListener(n, this.onBtnClick, this));
                    }
                }
            }, {
                key: "onBtnClick",
                value: function(e) {}
            }, {
                key: "onDeploy",
                value: function() {}
            }, {
                key: "onDestroy",
                value: function() {
                    this._model && (this._model.offAllCaller(this), this._model = void 0, this._controller = void 0);
                }
            }]), AbstractRuntimeView;
        }(),
        R = function(t) {
            function AbstractPopupView() {
                var e;
                return _classCallCheck(this, AbstractPopupView), (e = _possibleConstructorReturn(this, _getPrototypeOf(AbstractPopupView).apply(this, arguments)))._modalOrigAlpha = 1,
                    e._isShowing = !1, e._viewScaleXOrig = 1, e._viewScaleYOrig = 1, e._isClickModalClose = !0,
                    e._needPopupEffect = !0, e;
            }
            return _inherits(AbstractPopupView, L), _createClass(AbstractPopupView, [{
                key: "onCloseClick",
                value: function() {}
            }, {
                key: "onModalClick",
                value: function() {
                    this._isClickModalClose && this.onCloseClick();
                }
            }, {
                key: "deployPopup",
                value: function(e, t, i) {
                    this._needPopupEffect = i, this.deploy(e, t);
                }
            }, {
                key: "onDeploy",
                value: function() {
                    e.throwNot2BeNull(this._spView, "_spView"), this._viewScaleXOrig = this._spView.scaleX,
                        this._viewScaleYOrig = this._spView.scaleY, this._spModal && (this._modalOrigAlpha = this._spModal.alpha,
                            a.addClickListener(this._spModal, this.onModalClick, this)), this._btnClose && a.addClickListener(this._btnClose, this.onCloseClick, this),
                        _get(_getPrototypeOf(AbstractPopupView.prototype), "onDeploy", this).call(this);
                }
            }, {
                key: "clearTween",
                value: function() {
                    Laya.Tween.clearAll(this._spModal), Laya.Tween.clearAll(this._spView), Laya.timer.clear(this, this.checkHideComplete),
                        this._showTl && (this._showTl.destroy(), this._showTl = void 0);
                }
            }, {
                key: "show",
                value: function() {
                    if (!this._isShowing)
                        if (o.isWorldCanClick = !1, this._isShowing = !0, this.clearTween(),
                            this._needPopupEffect) {
                            var e = Laya,
                                t = e.Tween,
                                i = e.TimeLine;
                            this._spModal && (this._spModal.alpha = 0, t.to(this._spModal, {
                                    alpha: this._modalOrigAlpha
                                }, 200)), this._spView.alpha = 1, this._spView.scaleX = this._viewScaleXOrig, this._spView.scaleY = this._viewScaleYOrig,
                                o.layerPopup.addChild(this);
                            var n = new i();
                            n.to(this._spView, {
                                scaleX: 1.1 * this._viewScaleXOrig,
                                scaleY: 1.1 * this._viewScaleYOrig
                            }, 110).to(this._spView, {
                                scaleX: this._viewScaleXOrig,
                                scaleY: this._viewScaleYOrig
                            }, 110), n.play(0), n.on(Laya.Event.COMPLETE, this, this.onShowComplete), this._showTl = n;
                        } else o.layerPopup.addChild(this), this.onShowComplete();
                }
            }, {
                key: "checkHideComplete",
                value: function() {
                    this.parent && this.onHideComplete();
                }
            }, {
                key: "onShowComplete",
                value: function() {
                    this._spModal && (this._spModal.alpha = this._modalOrigAlpha), o.isWorldCanClick = !0;
                }
            }, {
                key: "hide",
                value: function() {
                    if (this._isShowing)
                        if (o.isWorldCanClick = !1, this._isShowing = !1, this.clearTween(),
                            this._needPopupEffect) {
                            var e = Laya.Tween;
                            this._spModal && e.to(this._spModal, {
                                alpha: 0
                            }, 150), e.to(this._spView, {
                                scaleX: .01,
                                scaleY: .01,
                                alpha: 0
                            }, 200, null, new Laya.Handler(this, this.onHideComplete)), Laya.timer.once(1e3, this, this.checkHideComplete);
                        } else this.onHideComplete();
                }
            }, {
                key: "onHideComplete",
                value: function() {
                    this.clearTween(), this.removeSelf(), o.isWorldCanClick = !0;
                }
            }, {
                key: "isShowing",
                get: function() {
                    return this._isShowing;
                }
            }]), AbstractPopupView;
        }(),
        P = function() {
            function AbstractView(e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                _classCallCheck(this, AbstractView), this._model = e, this._controller = t, this._sceneUrl = i,
                    this._viewZorder = n, this._specifiedParent = a, this._isShowing = !1, this._popupViewsDic = {};
            }
            return _createClass(AbstractView, [{
                key: "bindPopUpChildView",
                value: function(e, t) {
                    var i = this,
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    if (!(e in this._popupViewsDic)) {
                        var s = {
                                url: e,
                                state: "invalid",
                                modelEvent: t.toString(),
                                needPopupEffect: n,
                                zorder: a,
                                propEqualValue: o
                            },
                            r = function() {
                                i.onModelPropertyChanged(s);
                            };
                        s.eventHandler = r, this._model.on(t, r, null), this._popupViewsDic[e] = s;
                    }
                }
            }, {
                key: "onModelPropertyChanged",
                value: function(t) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee39() {
                        var i;
                        return regeneratorRuntime.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (!(this._model[t.modelEvent] === t.propEqualValue)) {
                                        n.next = 14;
                                        break;
                                    }
                                    if ("valid" !== t.state || !t.view) {
                                        n.next = 6;
                                        break;
                                    }
                                    this.try2ShowPopup(t), n.next = 12;
                                    break;

                                case 6:
                                    if ("invalid" !== t.state) {
                                        n.next = 12;
                                        break;
                                    }
                                    return t.state = "isLoading", n.next = 10, a.asyncLoadScene(t.url);

                                case 10:
                                    (i = n.sent) instanceof R ? (i.deployPopup(this._model, this._controller, t.needPopupEffect),
                                        i.onDeploy(), t.view = i, i.zOrder = t.zorder, t.state = "valid", this.try2ShowPopup(t)) : e.throwNormalError("弹窗界面必须继承AbstractPopupView：".concat(t.url));

                                case 12:
                                    n.next = 15;
                                    break;

                                case 14:
                                    "valid" === t.state && t.view && t.view.hide();

                                case 15:
                                case "end":
                                    return n.stop();
                            }
                        }, _callee39, this);
                    }));
                }
            }, {
                key: "try2ShowPopup",
                value: function(e) {
                    "valid" === e.state && e.view && this._model[e.modelEvent] && e.view.show();
                }
            }, {
                key: "deploy",
                value: function() {
                    this.bindPopupViews();
                }
            }, {
                key: "show",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee40() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 11;
                                        break;
                                    }
                                    if (this._isShowing = !0, this._viewAssset) {
                                        t.next = 8;
                                        break;
                                    }
                                    return t.next = 5, a.asyncLoadScene(this._sceneUrl, e);

                                case 5:
                                    this._viewAssset = t.sent, this._viewAssset.zOrder = this._viewZorder, this._viewAssset instanceof L && (this._viewAssset.deploy(this._model, this._controller),
                                        this._viewAssset.onDeploy());

                                case 8:
                                    (this._specifiedParent || o.layerScene).addChild(this._viewAssset), this.onShowComplete();

                                case 11:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee40, this);
                    }));
                }
            }, {
                key: "onShowComplete",
                value: function() {}
            }, {
                key: "hide",
                value: function() {
                    this.isShowing && this._viewAssset && (this._viewAssset.removeSelf(), this._isShowing = !1);
                }
            }, {
                key: "destroy",
                value: function() {
                    var e, t;
                    if (this._model) {
                        for (var i in this.hide(), null === (e = this._viewAssset) || void 0 === e || e.destroy(!0),
                                this._popupViewsDic) null === (t = this._popupViewsDic[i].view) || void 0 === t || t.destroy(!0);
                        this._model.offAllCaller(this), this._model = void 0, this._popupViewsDic = void 0;
                    }
                }
            }, {
                key: "isShowing",
                get: function() {
                    return this._isShowing;
                }
            }]), AbstractView;
        }(),
        A = function(e) {
            function YLSplashView(e, t) {
                return _classCallCheck(this, YLSplashView), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashView).call(this, e, t, "sdk_youling/base/view/YLSplash.json", 0, o.layerSplash));
            }
            return _inherits(YLSplashView, P), _createClass(YLSplashView, [{
                key: "bindPopupViews",
                value: function() {}
            }]), YLSplashView;
        }(),
        I = function() {
            function AbstractController() {
                _classCallCheck(this, AbstractController);
            }
            return _createClass(AbstractController, [{
                key: "destroy",
                value: function() {
                    this._model.offAllCaller(this);
                }
            }]), AbstractController;
        }(),
        x = function(e) {
            function YLSplashController(e) {
                var t;
                return _classCallCheck(this, YLSplashController), (t = _possibleConstructorReturn(this, _getPrototypeOf(YLSplashController).call(this)))._model = e,
                    t;
            }
            return _inherits(YLSplashController, I), _createClass(YLSplashController, [{
                key: "start",
                value: function() {
                    Laya.timer.frameLoop(1, this, this.onNProgressInc);
                }
            }, {
                key: "onNProgressInc",
                value: function() {
                    var e = 0,
                        t = this._model.percent;
                    e = 16 * (e = t >= 0 && t < .2 ? .1 : t >= .2 && t < .5 ? .04 : t >= .5 && t < .8 ? .02 : t >= .8 && t < .99 ? .005 : 0) / 200,
                        this._model.percent += e;
                }
            }, {
                key: "done",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee42() {
                        var t = this;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", new Promise(function(i) {
                                        var n = {
                                            value: 0
                                        };
                                        Laya.timer.clear(t, t.onNProgressInc), n.value = t._model.percent;
                                        Laya.Tween.to(n, {
                                            value: 1,
                                            update: new Laya.Handler(void 0, function() {
                                                return t._model.percent = n.value;
                                            })
                                        }, e, Laya.Ease.linearNone, Laya.Handler.create(void 0, function() {
                                            return __awaiter(t, void 0, void 0, regeneratorRuntime.mark(function _callee41() {
                                                return regeneratorRuntime.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, k.sleep(50);

                                                        case 2:
                                                            setTimeout(()=>{
                                                                V.destroy()
                                                            }, 4000);
                                                            setTimeout(()=>{
                                                                i();
                                                            }, 3000);
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                                }, _callee41, this);
                                            }));
                                        }));
                                    }));

                                case 1:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee42, this);
                    }));
                }
            }]), YLSplashController;
        }(),
        T = function(e) {
            function YLSplashModel() {
                var e;
                return _classCallCheck(this, YLSplashModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSplashModel).apply(this, arguments)))._percent = 0,
                    e;
            }
            return _inherits(YLSplashModel, v), _createClass(YLSplashModel, [{
                key: "percent",
                get: function() {
                    return this._percent;
                },
                set: function(e) {
                    this.try2Set("percent", e);
                }
            }]), YLSplashModel;
        }(),
        B = function() {
            function AbstractModule() {
                _classCallCheck(this, AbstractModule);
            }
            return _createClass(AbstractModule, [{
                key: "show",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee43() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 4;
                                        break;
                                    }
                                    return this._view || (this.initMVC(), this._view.deploy()), t.next = 4, this._view.show(e);

                                case 4:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee43, this);
                    }));
                }
            }, {
                key: "hide",
                value: function() {
                    this.isShowing && this._view.hide();
                }
            }, {
                key: "isShowing",
                get: function() {
                    return !!this._view && this._view.isShowing;
                }
            }]), AbstractModule;
        }(),
        V = new(function(e) {
            function YLSplashModule() {
                return _classCallCheck(this, YLSplashModule), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashModule).apply(this, arguments));
            }
            return _inherits(YLSplashModule, B), _createClass(YLSplashModule, [{
                key: "initMVC",
                value: function() {
                    this._model = new T(), this._controller = new x(this._model), this._view = new A(this._model, this._controller);
                }
            }, {
                key: "done",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee44() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.isShowing) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                case 2:
                                    return t.next = 4, this._controller.done(e);

                                case 4:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee44, this);
                    }));
                }
            }, {
                key: "destroy",
                value: function() {
                    this._model && (this._view.destroy(), this._controller.destroy(), this._model.destroy(),
                        this._view = void 0, this._controller = void 0, this._model = void 0);
                }
            }, {
                key: "curPercent",
                get: function() {
                    return this._model ? this._model.percent : 0;
                }
            }]), YLSplashModule;
        }())(),
        O = function(e) {
            function ShowSplashBean() {
                return _classCallCheck(this, ShowSplashBean), _possibleConstructorReturn(this, _getPrototypeOf(ShowSplashBean).call(this, "ShowSplashBean"));
            }
            return _inherits(ShowSplashBean, t), _createClass(ShowSplashBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee45() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return tt.data.splashShowTime = Date.now(), e.next = 3, V.show();

                                case 3:
                                    this.onGetActiveConfig(), C.getInitConfig().then(this.onGetInitConfig.bind(this));

                                case 5:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee45, this);
                    }));
                }
            }, {
                key: "onGetInitConfig",
                value: function(e) {
                    console.log("ShowSplashBean onGetInitConfig $versionConfig:", e), tt.config.isHideRd || (tt.data.versionConfig = e),
                        e && C.checkSceneBlacklist(), this.finish();
                }
            }, {
                key: "onGetActiveConfig",
                value: function() {
                    tt.data.ActiveConfig = tt.data.YLActiveLocalConfig, console.log(" YLSDK.data.ActiveConfig", tt.data.ActiveConfig);
                }
            }]), ShowSplashBean;
        }(),
        M = function(e) {
            function LoginBean() {
                return _classCallCheck(this, LoginBean), _possibleConstructorReturn(this, _getPrototypeOf(LoginBean).call(this, "LoginBean"));
            }
            return _inherits(LoginBean, t), _createClass(LoginBean, [{
                key: "start",
                value: function() {
                    C.login().then(this.onLoginResult.bind(this)), y.getActiveConfig().then(this.onGetActiveConfig.bind(this)),
                        this.finish();
                }
            }, {
                key: "onLoginResult",
                value: function(e) {
                    if (!e) return console.log("登录失败！");
                    console.log("登录成功，头像：", e.userInfo.avatar), tt.data.token = e.token, "loading" !== tt.config.authorTime || e.userInfo.avatar ? tt.data.userInfo = e.userInfo : C.authorize(),
                        this.cookLoginData(e), y.reqGetAvatar(), y.reqWorldRank(), C.postMsg2OpenData(n.ReqMyInfo),
                        C.postMsg2OpenData(n.ReqFriendRankData), C.checkSceneBlacklist();
                }
            }, {
                key: "cookLoginData",
                value: function(e) {
                    var t, i;
                    tt.data.versionConfig = e.versionConfig;
                    var n = {};
                    null === (t = e.shareContent) || void 0 === t || t.forEach(function(e) {
                        var t = n[e.share_type];
                        t || (n[e.share_type] = t = []), t.push(e);
                    }), tt.data.shareInfoDic = n;
                    var a = {};
                    null === (i = e.wxappList) || void 0 === i || i.forEach(function(e) {
                        var t = a[e.category];
                        t || (a[e.category] = t = []), t.push(e);
                    }), tt.data.appListDic = a;
                }
            }, {
                key: "onGetActiveConfig",
                value: function(e) {
                    console.log(" $versionConfig:", e), e && (null == e ? void 0 : e.result) && (tt.data.ActiveConfig = e.result.config ? e.result.config : tt.data.ActiveConfig,
                        tt.data.ActiveConfig.reward = e.result.reward ? e.result.reward : tt.data.ActiveConfig.reward,
                        tt.data.ActiveConfig.date = e.result.date ? e.result.date : tt.data.ActiveConfig.date,
                        console.log(" YLSDK.data.ActiveConfig", tt.data.ActiveConfig));
                }
            }]), LoginBean;
        }(),
        D = function(e) {
            function LoadSubPackagesBean() {
                return _classCallCheck(this, LoadSubPackagesBean), _possibleConstructorReturn(this, _getPrototypeOf(LoadSubPackagesBean).call(this, "LoadSubPackagesBean"));
            }
            return _inherits(LoadSubPackagesBean, t), _createClass(LoadSubPackagesBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee46() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C.loadSubpackages(tt.config.load.subpackages, void 0);

                                case 2:
                                    tt.data.isAllSubpackagesLoaded = !0, this.finish();

                                case 4:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee46, this);
                    }));
                }
            }]), LoadSubPackagesBean;
        }();
    ! function(e) {
        e.Unknown = "Unknown", e.VIEW_Main = "sdk_youling/lite/view/YLMain.json",
            e.VIEW_Home = "sdk_youling/lite/view/YLHome.json",
            e.VIEW_Game = "sdk_youling/common/view/YLGame.json", e.VIEW_Store = "sdk_youling/common/view/YLStore.json",
            e.POPUP_Favorite = "sdk_youling/common/view/YLFavorite.json", e.POPUP_MoreGame = "sdk_youling/lite/view/YLMoreGame.json",
            e.POPUP_Rank = "sdk_youling/common/view/YLRank.json", e.POPUP_SignIn = "sdk_youling/lite/view/YLSignIn.json",
            e.POPUP_SinginSkin = "sdk_youling/common/view/YLSinginSkin.json", e.POPUP_SinginReward = "sdk_youling/common/view/YLSignInReward.json",
            e.POPUP_RaffleReward = "sdk_youling/common/view/YLRaffleReward.json", e.POPUP_SingInSkinReward = "sdk_youling/common/view/YLSignInSinkReward.json",
            e.POPUP_Lottery = "sdk_youling/common/view/YLLottery.json", e.POPUP_Lottery_Reward = "sdk_youling/common/view/YLlotteryReward.json",
            e.VIEW_CrazyClick = "sdk_youling/common/view/YLCrazyClick.json", e.VIEW_BoxClick = "sdk_youling/common/view/YLTreasureBox.json",
            e.POPUP_Newbie = "sdk_youling/common/view/YLNewbie.json", e.VIEW_SearchPlayer = "sdk_youling/common/view/YLSearchPlayer.json",
            e.VIEW_SearchVSPlayer = "sdk_youling/common/view/YLSearchVSPlayer.json", e.VIEW_Skin = "sdk_youling/common/view/YLSkin.json",
            e.VIEW_Reborn = "sdk_youling/common/view/YLReborn.json", e.VIEW_SystemAppList = "sdk_youling/common/view/YLSystemAppList.json",
            e.VIEW_Result = "sdk_youling/common/view/YLResult.json", e.VIEW_Pass = "sdk_youling/common/view/YLPass.json",
            e.VIEW_BackHome = "sdk_youling/lite/view/YLBackHome.json", e.VIEW_BeginGame = "sdk_youling/lite/view/YLBeginGame.json";
    }(f || (f = {}));
    var E, Y = Object.assign({}, f),
        G = new c();
    ! function(e) {
        e.S2G_INIT_GAME_READY = "S2G_INIT_GAME_READY", e.G2S_INIT_GAME_READY_SUCCESS = "G2S_INIT_GAME_READY_SUCCESS",
            e.S2G_BEGIN_GAME = "S2G_BEGIN_GAME", e.G2S_GAME_FAIL = "G2S_GAME_FAIL", e.G2S_GAME_PASS = "G2S_GAME_PASS",
            e.S2G_REBORN_GAME_READY = "S2G_REBORN_GAME_READY", e.G2S_REBORN_GAME_READY_SUCCESS = "G2S_REBORN_GAME_READY_SUCCESS",
            e.S2G_RESET_GAME_READY = "S2G_RESET_GAME_READY", e.G2S_RESET_GAME_READY_SUCCESS = "G2S_RESET_GAME_READY_SUCCESS",
            e.S2G_USE_SKIN = "S2G_USE_SKIN", e.G2S_UPDATE_CUR_SCORE = "G2S_UPDATE_CUR_SCORE",
            e.S2G_PLAYER_SEARCHED = "S2G_PLAYER_SEARCHED", e.S2G_ON_CRAZY_CLICK = "S2G_ON_CRAZY_CLICK",
            e.S2G_STACK_VIEW_BEFORE_EACH = "S2G_STACK_VIEW_BEFORE_EACH", e.G2S_STACK_VIEW_BEFORE_EACH_SUCCESS = "G2S_STACK_VIEW_BEFORE_EACH_SUCCESS";
    }(E || (E = {}));
    var N, U = function(e) {
            function YLMainModel() {
                var e;
                return _classCallCheck(this, YLMainModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLMainModel).apply(this, arguments)))._isNewbieShowing = !1,
                    e._isFavoriteShowing = !1, e._isMoreGameShowing = !1, e._isVideoUseSkin = !0, e._rebornCount = 0,
                    e._playerHeads = [], e._playerNames = [], e._curSearchPlayerIndex = NaN, e._rankTabKey = "friend",
                    e._isRankShowing = !1, e._isShowingGamePlayerRank = !1, e._isShowingGamePlayerOver = !1,
                    e._hasGameBegan = !1, e._overWorldRankCached = {}, e._curStackView = Y.Unknown,
                    e._preStackView = Y.Unknown, e._hasCrazyClickFinish = !1, e._boxClickNumber = 0,
                    e._isSignInShowing = !1, e._isLotteryShowing = !1, e._isLotteryRewardShowing = !1,
                    e._isSignInVideoCheck = !0, e._isSignSkinShowing = !1, e._isSignRewardShowing = !1,
                    e._isRaffleRewardShowing = !1, e._isSignSkinRewardShowing = !1, e.singinReward = {
                        gold: 0,
                        raffle: 0,
                        fold: 0,
                        reward: [],
                        skin: ""
                    }, e.isAlreadyShowSkinView = !1, e._percentOnCrazyClick = 0, e.targetPercentOnCrazyClick = .8,
                    e._percentOnBoxClick = 0, e.targetPercentOnBoxClick = .8, e._gameListBanner = !1,
                    e._doChangeCurStackView = function(t, i) {
                        e.try2Set("curStackView", i), t !== i && (e._preStackView = t);
                    }, e;
            }
            return _inherits(YLMainModel, v), _createClass(YLMainModel, [{
                key: "reset",
                value: function() {
                    this._preStackView = Y.Unknown, this.hasCrazyClickFinish = !1, this.rebornCount = 0,
                        this.percentOnCrazyClick = 0, this.hasGameBegan = !1, this.isVideoUseSkin = !0,
                        this._overWorldRankCached = {}, this._curSearchPlayerIndex = NaN, this.isShowingGamePlayerRank = !1,
                        this.isShowingGamePlayerOver = !1;
                }
            }, {
                key: "setPreviewSkin",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.try2Set("previewShopItem", e, t);
                }
            }, {
                key: "hasCrazyClickFinish",
                get: function() {
                    return this._hasCrazyClickFinish;
                },
                set: function(e) {
                    this.try2Set("hasCrazyClickFinish", e);
                }
            }, {
                key: "percentOnCrazyClick",
                get: function() {
                    return this._percentOnCrazyClick;
                },
                set: function(e) {
                    this.try2Set("percentOnCrazyClick", e);
                }
            }, {
                key: "boxClickNumber",
                get: function() {
                    return this._boxClickNumber;
                },
                set: function(e) {
                    this.try2Set("boxClickNumber", e);
                }
            }, {
                key: "percentOnBoxClick",
                get: function() {
                    return this._percentOnBoxClick;
                },
                set: function(e) {
                    this.try2Set("percentOnBoxClick", e);
                }
            }, {
                key: "preStackView",
                get: function() {
                    return this._preStackView;
                }
            }, {
                key: "gameListBanner",
                get: function() {
                    return this._gameListBanner;
                },
                set: function(e) {
                    this.try2Set("gameListBanner", e, !0);
                }
            }, {
                key: "curStackView",
                get: function() {
                    return this._curStackView;
                },
                set: function(e) {
                    var t = this,
                        i = this._curStackView;
                    if (i !== e)
                        if (G.hasListener(E.S2G_STACK_VIEW_BEFORE_EACH)) {
                            G.once(E.G2S_STACK_VIEW_BEFORE_EACH_SUCCESS, function() {
                                t._doChangeCurStackView(i, e);
                            }, void 0), this.try2Set("curStackView", Y.Unknown);
                            var n = {
                                from: i,
                                to: e
                            };
                            G.emit(E.S2G_STACK_VIEW_BEFORE_EACH, n);
                        } else this._doChangeCurStackView(i, e);
                }
            }, {
                key: "overWorldRankCached",
                get: function() {
                    return this._overWorldRankCached;
                },
                set: function(e) {
                    this._overWorldRankCached = e;
                }
            }, {
                key: "hasGameBegan",
                get: function() {
                    return this._hasGameBegan;
                },
                set: function(e) {
                    this.try2Set("hasGameBegan", e);
                }
            }, {
                key: "storeUnlockResult",
                get: function() {
                    return this._storeUnlockResult;
                },
                set: function(e) {
                    this.try2Set("storeUnlockResult", e);
                }
            }, {
                key: "isShowingGamePlayerOver",
                get: function() {
                    return this._isShowingGamePlayerOver;
                },
                set: function(e) {
                    this.try2Set("isShowingGamePlayerOver", e);
                }
            }, {
                key: "isShowingGamePlayerRank",
                get: function() {
                    return this._isShowingGamePlayerRank;
                },
                set: function(e) {
                    this.try2Set("isShowingGamePlayerRank", e);
                }
            }, {
                key: "rankTabKey",
                get: function() {
                    return this._rankTabKey;
                },
                set: function(e) {
                    this.try2Set("rankTabKey", e);
                }
            }, {
                key: "isRankShowing",
                get: function() {
                    return this._isRankShowing;
                },
                set: function(e) {
                    this.try2Set("isRankShowing", e);
                }
            }, {
                key: "curSelectedInStore",
                get: function() {
                    return this._curSelectedInStore;
                },
                set: function(e) {
                    this.try2Set("curSelectedInStore", e);
                }
            }, {
                key: "previewShopItem",
                get: function() {
                    return this._previewShopItem;
                }
            }, {
                key: "curSearchPlayerIndex",
                get: function() {
                    return this._curSearchPlayerIndex;
                },
                set: function(e) {
                    this.try2Set("curSearchPlayerIndex", e);
                }
            }, {
                key: "playerNames",
                get: function() {
                    return this._playerNames;
                },
                set: function(e) {
                    this.try2Set("playerNames", e);
                }
            }, {
                key: "playerHeads",
                get: function() {
                    return this._playerHeads;
                },
                set: function(e) {
                    this.try2Set("playerHeads", e);
                }
            }, {
                key: "isVideoUseSkin",
                get: function() {
                    return this._isVideoUseSkin;
                },
                set: function(e) {
                    this.try2Set("isVideoUseSkin", e);
                }
            }, {
                key: "isMoreGameShowing",
                get: function() {
                    return this._isMoreGameShowing;
                },
                set: function(e) {
                    this.try2Set("isMoreGameShowing", e);
                }
            }, {
                key: "isFavoriteShowing",
                get: function() {
                    return this._isFavoriteShowing;
                },
                set: function(e) {
                    this.try2Set("isFavoriteShowing", e);
                }
            }, {
                key: "rebornCount",
                get: function() {
                    return this._rebornCount;
                },
                set: function(e) {
                    this.try2Set("rebornCount", e);
                }
            }, {
                key: "isNewbieShowing",
                get: function() {
                    return this._isNewbieShowing;
                },
                set: function(e) {
                    this.try2Set("isNewbieShowing", e);
                }
            }, {
                key: "signInRewardSelected",
                get: function() {
                    return this._signInRewardSelected;
                },
                set: function(e) {
                    this.try2Set("signInRewardSelected", e);
                }
            }, {
                key: "specialRewardSelected",
                get: function() {
                    return this._specialRewardSelected;
                },
                set: function(e) {
                    this.try2Set("specialRewardSelected", e);
                }
            }, {
                key: "isSignInShowing",
                get: function() {
                    return this._isSignInShowing;
                },
                set: function(e) {
                    this.try2Set("isSignInShowing", e);
                }
            }, {
                key: "isLotteryShowing",
                get: function() {
                    return this._isLotteryShowing;
                },
                set: function(e) {
                    this.try2Set("isLotteryShowing", e);
                }
            }, {
                key: "isLotteryRewardShowing",
                get: function() {
                    return this._isLotteryRewardShowing;
                },
                set: function(e) {
                    this.try2Set("isLotteryRewardShowing", e);
                }
            }, {
                key: "isSignSkinShowing",
                get: function() {
                    return this._isSignSkinShowing;
                },
                set: function(e) {
                    this.try2Set("isSignSkinShowing", e);
                }
            }, {
                key: "isSignRewardShowing",
                get: function() {
                    return this._isSignRewardShowing;
                },
                set: function(e) {
                    this.try2Set("isSignRewardShowing", e);
                }
            }, {
                key: "isSignInVideoCheck",
                get: function() {
                    return this._isSignInVideoCheck;
                },
                set: function(e) {
                    this.try2Set("isSignInVideoCheck", e);
                }
            }, {
                key: "isRaffleRewardShowing",
                get: function() {
                    return this._isRaffleRewardShowing;
                },
                set: function(e) {
                    this.try2Set("isRaffleRewardShowing", e);
                }
            }, {
                key: "isSignSkinRewardShowing",
                get: function() {
                    return this._isSignSkinRewardShowing;
                },
                set: function(e) {
                    this.try2Set("isSignSkinRewardShowing", e);
                }
            }]), YLMainModel;
        }(),
        H = function(e) {
            function YLMainController(e) {
                var t;
                return _classCallCheck(this, YLMainController), (t = _possibleConstructorReturn(this, _getPrototypeOf(YLMainController).call(this)))._model = e,
                    t.initEvents(), t;
            }
            return _inherits(YLMainController, I), _createClass(YLMainController, [{
                    key: "gotoApp",
                    value: function(e) {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee47() {
                            var t;
                            return regeneratorRuntime.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        if (!e) {
                                            i.next = 16;
                                            break;
                                        }
                                        return i.next = 3, C.gotoApp(e);

                                    case 3:
                                        if (i.sent) {
                                            i.next = 16;
                                            break;
                                        }
                                        if (t = this._model.curStackView, tt.data.isAllSubpackagesLoaded) {
                                            i.next = 8;
                                            break;
                                        }
                                        return i.abrupt("return");

                                    case 8:
                                        if (t !== Y.VIEW_Home) {
                                            i.next = 15;
                                            break;
                                        }
                                        if (!tt.config.isHideRd) {
                                            i.next = 11;
                                            break;
                                        }
                                        return i.abrupt("return");

                                    case 11:
                                        // this._model.isMoreGameShowing = !1, this._model.curStackView = Y.VIEW_BackHome, 
                                        i.next = 16;
                                        break;

                                    case 15:
                                        t === Y.VIEW_Reborn ? (this.submitScore(), this.try2ShowBackHome()) : t === Y.VIEW_Result && this.try2ShowBackHome();

                                    case 16:
                                    case "end":
                                        return i.stop();
                                }
                            }, _callee47, this);
                        }));
                    }
                }, {
                    key: "fixStoreItemInUse",
                    value: function() {
                        var e = tt.data,
                            t = tt.config,
                            i = e.storeItemIdInUse,
                            n = t.storeItems.find(function(e) {
                                return e.isDefault;
                            });
                        if (isNaN(i)) i = null == n ? void 0 : n.id;
                        else {
                            var a = t.storeItems.find(function(e) {
                                return e.id === i;
                            });
                            a && this.isStoreItemBought(a) || (i = null == n ? void 0 : n.id);
                        }
                        e.storeItemIdInUse = i;
                        var o = t.storeItems.find(function(e) {
                            return e.id === i;
                        });
                        o && (G.emit(E.S2G_USE_SKIN, o), this._model.curSelectedInStore = o);
                    }
                }, {
                    key: "closeStoreTry2UseSkin",
                    value: function() {
                        this._model.curStackView = Y.VIEW_Home;
                        var e = this._model.curSelectedInStore;
                        e && this.isStoreItemBought(e) && (tt.data.storeItemIdInUse = e.id, G.emit(E.S2G_USE_SKIN, e));
                    }
                }, {
                    key: "doUnlockStoreItem",
                    value: function(e) {
                        if (this.isStoreItemBought(e.item)) return C.toastMsg("操作失败，该商品已购买！");
                        if (tt.data.gold < e.cost) return C.toastMsg("操作失败，金币不足！");
                        this._model.curSelectedInStore = e.item, tt.data.gold -= e.cost;
                        var t = tt.data.ownStoreItemIds.concat();
                        t.push(e.item.id.toString()), tt.data.ownStoreItemIds = t, C.toastMsg("恭喜获得新皮肤！");
                    }
                }, {
                    key: "randomUnlockStoreItem",
                    value: function() {
                        var e = this.getStoreItemsCanBuy();
                        if (e.length <= 0)
                            platform.getInstance().prompt(window.isRussian ? "Операция не удалась, товара для покупки нет!":"The operation failed, there is no product to purchase!");
                        else {
                            var t = this.calStoreRandomUnlockGold();
                            t > tt.data.gold ? platform.getInstance().prompt(window.isRussian ? "Монет не хватает!":"Coins are not enough!") : this._model.storeUnlockResult = {
                                item: h.randomOne(e),
                                cost: t
                            };
                        }
                    }
                }, {
                    key: "lotteryBuySkin",
                    value: function() {
                        var e = this.getLotteryStoreItem();
                        console.log("shareSkin", e), e ? this.noGoldBuySkin(e) : C.toastMsg("操作失败，该商品已拥有！");
                    }
                }, {
                    key: "noGoldBuySkin",
                    value: function(e) {
                        var t = tt.data.ownStoreItemIds.concat();
                        t.push(e.id.toString()), tt.data.ownStoreItemIds = t, C.toastMsg("恭喜获得新皮肤！");
                    }
                }, {
                    key: "getStoreItemsCanBuy",
                    value: function() {
                        for (var e, t = this, i = tt.config.storeItems.filter(function(e) {
                                return !t.isStoreItemBought(e);
                            }), n = [], a = 0; a < i.length; a++) 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.lottery) && i[a].isLottery || n.push(i[a]);
                        return n;
                    }
                }, {
                    key: "getLotteryStoreItem",
                    value: function() {
                        for (var e, t = this, i = tt.config.storeItems.filter(function(e) {
                                return !t.isStoreItemBought(e);
                            }), n = 0; n < i.length; n++)
                            if (1 == i[n].isLottery && 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.lottery)) return i[n];
                    }
                }, {
                    key: "calStoreRandomUnlockGold",
                    value: function() {
                        var e, t = this.getStoreItemsCanBuy(),
                            i = 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.lottery) ? 1 : 0;
                        return console.log("lottery", i), tt.config.storeRandomUnlockGold(t.length + i);
                    }
                }, {
                    key: "isStoreItemBought",
                    value: function(e) {
                        return e.isDefault || -1 !== tt.data.ownStoreItemIds.indexOf(e.id.toString());
                    }
                }, {
                    key: "try2ShowBeginGame",
                    value: function() {
                        this._model.curStackView = tt.config.isHideRd ? Y.VIEW_Home : Y.VIEW_Home;
                    }
                }, {
                    key: "watchVideo2GetGold",
                    value: function() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee48() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g.showVideo(p.Gold_Skin);

                                    case 2:

                                        console.log("/////////////////////////////////");
                                        1 !== (e = t.sent) && -3 !== e || (tt.data.gold += tt.config.storeVideoUnlockGold);

                                    case 4:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee48, this);
                        }));
                    }
                }, {
                    key: "watchVideo2UseSkin",
                    value: function() {
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee49() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g.showVideo(p.Skin);

                                    case 2:
                                        1 !== (e = t.sent) && -3 !== e || G.emit(E.S2G_USE_SKIN, this._model.previewShopItem),
                                            this.try2ShowSearchPlayer();

                                    case 5:
                                    case "end":
                                        return t.stop();
                                }
                            }, _callee49, this);
                        }));
                    }
                }, {
                    key: "watchVideo2Reborn",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee50() {
                            var t;
                            return regeneratorRuntime.wrap(function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return i.next = 2, g.showVideo(p.Reborn);

                                    case 2:
                                        1 === (t = i.sent) || -3 === t ? this.doReborn() : e && this.onGameEnd();

                                    case 4:
                                    case "end":
                                        return i.stop();
                                }
                            }, _callee50, this);
                        }));
                    }
                }, {
                    key: "skipReborn",
                    value: function(e) {
                        var t = tt.data,
                            i = t.hasWrongClickOnBtnSkipReborn,
                            n = t.versionConfig;
                        !e && (null == n ? void 0 : n.skip_video) && !i ? (tt.data.hasWrongClickOnBtnSkipReborn = !0,
                            this.watchVideo2Reborn(!0)) : this.onGameEnd();
                    }
                }, {
                    key: "onGameEnd",
                    value: function() {
                        C.postMsg2OpenData(n.Reset), this.try2ShowResult();
                    }
                }, {
                    key: "onG2SGamePass",
                    value: function() {
                        tt.data.isPassGame = !0, this.try2ShowPass(); // this._model.curStackView = Y.VIEW_BackHome
                    }
                }, {
                    key: "try2ShowResult",
                    value: function() {

                        this._model.curStackView = Y.VIEW_Result, tt.data.isOnGame = !1;
                    }
                }, {
                    key: "try2ShowPass",
                    value: function() {

                        this._model.curStackView = Y.VIEW_Pass, tt.data.isOnGame = !1;
                    }
                }, {
                    key: "doReborn",
                    value: function() {
                        this._model.rebornCount++, G.emit(E.S2G_REBORN_GAME_READY), this.try2ShowNewbie();
                    }
                }, {
                    key: "try2Replay",
                    value: function() {
                        this._model.reset(),
                            this._model.curStackView === Y.VIEW_Result && G.emit(E.S2G_RESET_GAME_READY),
                            this.try2ShowSkin(!0);
                    }
                }, {
                    key: "try2SystemApp",
                    value: function() {
                        this.try2ShowBackHome();
                    }
                }, {
                    key: "try2ShowBackHome",
                    value: function() {
                        this._model.curStackView = Y.VIEW_Home,
                            G.emit(E.S2G_RESET_GAME_READY);
                    }
                }, {
                    key: "try2GotoHome",
                    value: function() {
                        this._model.reset(), this._model.curStackView = Y.VIEW_Home;
                    }
                }, {
                    key: "onG2SGameFail",
                    value: function() {
                        window.gameResult = false;
                        tt.data.isPassGame = !1;
                        tt.config.isHideRd ? this.doGameFail() : this.doGameFail();
                    }
                }, {
                    key: "doGameFail",
                    value: function() {
                        // y.reqGetAvatar(), this._model.rebornCount >= tt.config.rebornMax || tt.config.isHideRd ? this.onGameEnd() : this.onGameEnd();
                        this.onGameEnd();
                    }
                }, {
                    key: "try2ShowSkin",
                    value: function(e) {
                        var t;
                        return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee51() {
                            var i, n, a = this;
                            return regeneratorRuntime.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (tt.data.hasGameInit) {
                                            o.next = 2;
                                            break;
                                        }
                                        return o.abrupt("return", C.toastMsg("请耐心等待，游戏正在努力加载中"));

                                    case 2:
                                        if (tt.data.round++, i = function() {
                                                var e, t, i = a.getStoreItemsCanBuy(),
                                                    n = h.randomOne(i),
                                                    o = tt.data.getCanShowJump("VIEW_Skin");
                                                n && !tt.config.isVerify && !tt.config.noTrialSkin && o && (null === (t = null === (e = tt.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.skin_demo) ? (a._model.isVideoUseSkin = C.isSupportVideoAd,
                                                    a._model.setPreviewSkin(n), a._model.curStackView = Y.VIEW_Skin) : a.try2ShowSearchPlayer();
                                            }, n = function() {
                                                tt.data.isAfterBox = !0;
                                                var e = tt.data.round,
                                                    t = tt.data.versionConfig || {},
                                                    n = t.treasure_box,
                                                    o = t.treasure_box_num;
                                                n && (!(null == o ? void 0 : o.length) || 1 === o.length && 0 === o[0] || -1 !== o.indexOf(e)) ? a.try2ShowBoxClick() : i();
                                            }, !(e && (null === (t = tt.data.versionConfig) || void 0 === t ? void 0 : t.show_video))) {
                                            o.next = 11;
                                            break;
                                        }
                                        return o.next = 8, g.showVideo(p.Coerce);

                                    case 8:
                                        n(), o.next = 12;
                                        break;

                                    case 11:
                                        n();

                                    case 12:
                                    case "end":
                                        return o.stop();
                                }
                            }, _callee51, this);
                        }));
                    }
                }, {
                    key: "try2ShowSearchPlayer",
                    value: function() {
                        var e = tt.config,
                            t = e.needSearchPlayer,
                            i = e.searchPlayerMode;
                        this.cookPlayerHeads(), this.try2ShowNewbie();
                        // t ? (this.cookPlayerHeads(), 
                        // this._model.curStackView = 2 === i ? Y.VIEW_SearchVSPlayer : Y.VIEW_SearchPlayer) : this.try2ShowNewbie();
                    }
                }, {
                    key: "cookPlayerHeads",
                    value: function() {
                        if (tt.config.needSearchPlayer) {
                            var e = tt.data.playerNamesPool.concat();
                            h.disturb(e), this._model.playerNames = e.slice(0, tt.config.numSearchPlayer);
                            var t = tt.data.playerHeadsPool.concat();
                            h.disturb(t), this._model.playerHeads = t.slice(0, tt.config.numSearchPlayer);
                        }
                    }
                }, {
                    key: "try2ShowNewbie",
                    value: function() {
                        tt.config.noNewbie ? this.try2ShowCrazyClick() : (this._model.curStackView = Y.Unknown,
                            this._model.isNewbieShowing = !0);
                    }
                }, {
                    key: "tick2CoolDownBoxClick",
                    value: function() {
                        this._model.percentOnBoxClick = Math.max(this._model.percentOnBoxClick - .012, 0);
                    }
                }, {
                    key: "boxClick",
                    value: function() {
                        var e = this;
                        if (this._model.curStackView === Y.VIEW_BoxClick) {
                            this._model.percentOnBoxClick = i.calValueBetween(this._model.percentOnBoxClick + .1, 0, 1);
                            var t = this._model.boxClickNumber;
                            this._model.boxClickNumber = t + 1;
                            var n, a, o, s, r, l = 2 == this._model.boxClickNumber,
                                c = 7 == this._model.boxClickNumber,
                                u = this._model.percentOnBoxClick >= .9;
                            if (c)
                                if (2 === this.getBoxClicAdType()) {
                                    var _ = g.showBanner(0, this._model.curStackView);
                                    Laya.timer.once(2e3, this, function() {
                                        return g.hideBanner(_);
                                    });
                                } else {
                                    g.showCustom(d.CustomIDTreasureBox);
                                    Laya.timer.once(2e3, this, function() {
                                        return g.hideCustom(d.CustomIDTreasureBox);
                                    });
                                }
                            else if (l) Laya.timer.loop(1e3 / 60, this, this.tick2CoolDownBoxClick);
                            else if (u)
                                if (tt.data.gold += tt.config.BoxUnlockGold,
                                    tt.config.noGold || C.toastMsg("获得".concat(tt.config.BoxUnlockGold, "金币")), Laya.timer.clear(this, this.tick2CoolDownBoxClick),
                                    tt.data.isAfterBox) {
                                    o = e.getStoreItemsCanBuy(), s = h.randomOne(o), r = tt.data.getCanShowJump("VIEW_Skin"),
                                        s && !tt.config.isVerify && !tt.config.noTrialSkin && r && (null === (a = null === (n = tt.data) || void 0 === n ? void 0 : n.versionConfig) || void 0 === a ? void 0 : a.skin_demo) ? (e._model.isVideoUseSkin = C.isSupportVideoAd,
                                            e._model.setPreviewSkin(s), e._model.curStackView = Y.VIEW_Skin) : e.try2ShowSearchPlayer();
                                } else this.try2GotoHome();
                        }
                    }
                }, {
                    key: "getBoxClicAdType",
                    value: function() {
                        var e = tt.data.round,
                            t = (tt.data.versionConfig || {}).banner_type;
                        return t && t[e - 1] || 1;
                    }
                }, {
                    key: "try2ShowBoxClick",
                    value: function() {
                        this._model.curStackView = Y.VIEW_BoxClick, this._model.percentOnBoxClick = 0, this._model.targetPercentOnBoxClick = .8;
                    }
                }, {
                    key: "try2ShowCrazyClick",
                    value: function() {
                        this._model.isNewbieShowing = !1;
                        var e = tt.data.round,
                            t = tt.data.versionConfig || {},
                            n = t.show_quicken,
                            a = t.quicken_num;
                        !this._model.rebornCount && n && (!(null == a ? void 0 : a.length) || 1 === a.length && 0 === a[0] || -1 !== a.indexOf(e)) ? (this._model.curStackView = Y.VIEW_CrazyClick,
                            this._model.percentOnCrazyClick = 0, this._model.targetPercentOnCrazyClick = i.randomBetween(.4, .7),
                            Laya.timer.loop(1e3 / 60, this, this.tick2CoolDownCrazyClick)) : this.try2BeginGame();
                    }
                }, {
                    key: "tick2CoolDownCrazyClick",
                    value: function() {
                        this._model.percentOnCrazyClick = Math.max(this._model.percentOnCrazyClick - .01, 0);
                    }
                }, {
                    key: "crazyClick",
                    value: function() {
                        if (this._model.curStackView === Y.VIEW_CrazyClick) {
                            this._model.percentOnCrazyClick = i.calValueBetween(this._model.percentOnCrazyClick + .1, 0, 1);
                            var e = this._model.percentOnCrazyClick >= this._model.targetPercentOnCrazyClick,
                                t = {
                                    isFinish: e,
                                    percent: this._model.percentOnCrazyClick
                                };
                            if (G.emit(E.S2G_ON_CRAZY_CLICK, t), e && !this._model.hasCrazyClickFinish) {
                                this._model.hasCrazyClickFinish = !0;
                                var n = g.showBanner(1, this._model.curStackView);
                                Laya.timer.once(2e3, this, function() {
                                    return g.hideBanner(n);
                                }), Laya.timer.clear(this, this.tick2CoolDownCrazyClick), Laya.timer.once(1e3, this, this.try2BeginGame);
                            }
                        }
                    }
                }, {
                    key: "try2BeginGame",
                    value: function() {
                        this._model.hasCrazyClickFinish = !1, this._model.curStackView = Y.VIEW_Game, G.emit(E.S2G_BEGIN_GAME),
                            tt.data.isOnGame = !0, this._model.hasGameBegan || (this._model.isShowingGamePlayerRank = !0),
                            this._model.hasGameBegan = !0;
                    }
                }, {
                    key: "try2ContinueGame",
                    value: function() {
                        this._model.hasCrazyClickFinish = !1, this._model.curStackView = Y.VIEW_Game, G.emit(E.S2G_BEGIN_GAME),
                            tt.data.isOnGame = !0, this._model.hasGameBegan || (this._model.isShowingGamePlayerRank = !0),
                            this._model.hasGameBegan = !0;
                    }
                }, {
                    key: "submitScore",
                    value: function() {
                        var e;
                        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (tt.data.userInfo && (null === (e = tt.config.rank) || void 0 === e || !e.isCustomSubmitScore)) {
                            var t = tt.data.userInfo.max_score + tt.data.curScore;
                            C.submitScore(t), y.reqUpdateScore(t);
                        }
                    }
                }, {
                    key: "settlementGold",
                    value: function() {
                        var e = tt.data.curScore,
                            t = tt.config.score2Gold(e);
                        tt.data.gold += t;
                    }
                },
                {
                    key: "settlementShiBeieiGold",
                    value: function() {
                        var e = tt.data.curScore,
                            t = tt.config.score2Gold(e) * 10;
                        tt.data.gold += t;
                    }
                },
                {
                    key: "findCurSelectedSkinInStore",
                    value: function() {
                        if (!this._model.curSelectedInStore) {
                            var e = tt.config.storeItems.find(function(e) {
                                return e.isDefault;
                            });
                            this._model.curSelectedInStore = e;
                        }
                    }
                }, {
                    key: "onG2SCurScore",
                    value: function(e) {
                        var t = e.value.curScore;
                        if (tt.data.curScore !== t && (tt.data.curScore = t, tt.data.userInfo)) {
                            var i = tt.data.curScore + tt.data.userInfo.max_score;
                            if (this._model.isShowingGamePlayerOver) {
                                var a = this._model.overWorldRankCached,
                                    o = [],
                                    s = tt.config.overPlayerQueueMax;
                                tt.data.worldRanks.forEach(function(e) {
                                    e.avatarUrl && e.score < i && !a[e.avatarUrl] && (a[e.avatarUrl] = !0, o.length < 1 && o.push(e));
                                }), o.length && (o.reverse(), o.forEach(function(e) {
                                    var t = {
                                        score: e.score,
                                        playerUrl: e.avatarUrl,
                                        queueMax: s
                                    };
                                    C.postMsg2OpenData(n.CheckOverPlayer, {
                                        data: t
                                    });
                                }));
                                var r = {
                                    score: i,
                                    queueMax: s
                                };
                                C.postMsg2OpenData(n.CheckOverPlayer, {
                                    data: r
                                });
                            }
                        }
                    }
                }, {
                    key: "onG2SGameResetReadySuccess",
                    value: function() {
                        this.fixStoreItemInUse();
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        G.on(E.G2S_RESET_GAME_READY_SUCCESS, this.onG2SGameResetReadySuccess, this), G.on(E.G2S_GAME_FAIL, this.onG2SGameFail, this),
                            G.on(E.G2S_UPDATE_CUR_SCORE, this.onG2SCurScore, this), G.on(E.G2S_GAME_PASS, this.onG2SGamePass, this);
                    }
                }
            ]), _createClass(YLMainController, [{
                key: "isGetSpecial",
                value: function(e) {
                    return -1 != tt.data.raffleDate.indexOf(e.prop_number);
                }
            }, {
                key: "isFifstSign",
                value: function() {
                    var e = tt.data.ActiveConfig.reward;
                    return tt.data.allSignInCount < 7 ? e.firstsign : e.secondsign;
                }
            }, {
                key: "isFirstSpecial",
                value: function() {
                    var e, t = null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.reward;
                    return tt.data.allSignInCount < 7 ? t.firstspecial : t.secondspecial;
                }
            }, {
                key: "checkCurSignInSelectedItem",
                value: function() {
                    var e = (tt.data.signInCount + (this.hasSignIn ? 6 : 0)) % 7;
                    this._model.signInRewardSelected = this.isFifstSign()[e].prop_quantity;
                }
            }, {
                key: "specialSign",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee52() {
                        var t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, g.showVideo(p.Sign);

                                case 2:
                                    if (1 === (t = i.sent) || -3 === t) {
                                        i.next = 5;
                                        break;
                                    }
                                    return i.abrupt("return");

                                case 5:
                                    tt.data.raffleDate = tt.data.raffleDate.concat(e.prop_number), tt.data.raffleNumber += e.prop_quantity,
                                        this._model.singinReward.raffle = e.prop_quantity, this._model.isRaffleRewardShowing = !0;

                                case 9:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee52, this);
                    }));
                }
            }, {
                key: "signIn",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee53() {
                        var e, t, i, n, a, o, s;
                        return regeneratorRuntime.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if ((e = tt.data.ActiveConfig.date) === tt.data.signInDate) {
                                        r.next = 20;
                                        break;
                                    }
                                    if (!(t = this._model.isSignInVideoCheck)) {
                                        r.next = 9;
                                        break;
                                    }
                                    return r.next = 6, g.showVideo(p.Sign);

                                case 6:
                                    if (1 === (i = r.sent) || -3 === i) {
                                        r.next = 9;
                                        break;
                                    }
                                    return r.abrupt("return");

                                case 9:
                                    tt.data.signInDate = e, n = tt.data.signInCount % 7, a = this._model.singinReward,
                                        o = this.isFifstSign()[n], 6 == n && t && 0 != (s = this.signRandomeSkin()) && (this._model.singinReward.skin = s.previewPath,
                                            this.noGoldBuySkin(s), this._model.singinReward.reward.push("skin")), o && (tt.data.gold += o.prop_quantity * (t ? a.fold : 1),
                                            this._model.singinReward.gold = o.prop_quantity, this._model.singinReward.reward.push("gold")),
                                        tt.data.allSignInCount++, tt.data.signInCount = (n + 1) % 7, this._model.isSignRewardShowing = !0,
                                        r.next = 21;
                                    break;

                                case 20:
                                    C.toastMsg("领取失败，今天已签到！");

                                case 21:
                                    this._model.isSignInShowing = !1;

                                case 22:
                                case "end":
                                    return r.stop();
                            }
                        }, _callee53, this);
                    }));
                }
            }, {
                key: "signFold",
                value: function() {
                    var e = [],
                        t = tt.data.ActiveConfig,
                        i = null == t ? void 0 : t.sign_random_max,
                        n = null == t ? void 0 : t.sign_random_min;
                    0 != (null == t ? void 0 : t.sign_add_weight) && (1 - (null == t ? void 0 : t.sign_weight)) / (null == t ? void 0 : t.sign_add_weight) < tt.data.signInVideoCount && (tt.data.signInVideoCount = (1 - (null == t ? void 0 : t.sign_weight)) / (null == t ? void 0 : t.sign_add_weight));
                    for (var a = tt.data.signInVideoCount * (null == t ? void 0 : t.sign_add_weight) + (null == t ? void 0 : t.sign_weight), o = n; o < i; o++) e.push([o, (1 - a) * o / ((i - 1 + n) * (i - n) / 2)]);
                    return e.push([i, a]), console.log("wegiht", e), e;
                }
            }, {
                key: "lotteryWegiht",
                value: function() {
                    var e = [],
                        t = tt.data.ActiveConfig,
                        i = 0;
                    null != this.getLotteryStoreItem() && (console.log("this.getLotteryStoreItem", this.getLotteryStoreItem()),
                            i = tt.data.lotteryCount * (null == t ? void 0 : t.lottery_add_weight) + (null == t ? void 0 : t.lottery_weight)),
                        e.push([1, i]);
                    for (var n = 2; n < 7; n++) e.push([n, (1 - i) * (n - 1) / 15]);
                    return console.log("wegiht", e), e;
                }
            }, {
                key: "randomNumber",
                value: function(e) {
                    var t = [];
                    t.push(0);
                    var i = 0;
                    e.forEach(function(e) {
                        i += e[1], t.push(i);
                    });
                    for (var n = Math.random() * i, a = 0, o = t.length - 1; o > 0; o--)
                        if (n >= t[o]) {
                            a = o;
                            break;
                        }
                    return e[a][0];
                }
            }, {
                key: "drawLottery",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee54() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!(tt.data.freeNumber > 0)) {
                                        t.next = 5;
                                        break;
                                    }
                                    return tt.data.freeNumber--, t.abrupt("return", this.randomNumber(this.lotteryWegiht()));

                                case 5:
                                    if (!(tt.data.raffleNumber > 0)) {
                                        t.next = 10;
                                        break;
                                    }
                                    return tt.data.raffleNumber--, t.abrupt("return", this.randomNumber(this.lotteryWegiht()));

                                case 10:
                                    if (!(tt.data.lottertVideoNumber > 0)) {
                                        t.next = 22;
                                        break;
                                    }
                                    return tt.data.lottertVideoNumber--, t.next = 14, g.showVideo(p.Lottery);

                                case 14:
                                    if (1 !== (e = t.sent) && -3 !== e) {
                                        t.next = 19;
                                        break;
                                    }
                                    return t.abrupt("return", this.randomNumber(this.lotteryWegiht()));

                                case 19:
                                    return t.abrupt("return", 100);

                                case 20:
                                    t.next = 24;
                                    break;

                                case 22:
                                    return C.toastMsg("抽奖次数不足"), t.abrupt("return", 100);

                                case 24:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee54, this);
                    }));
                }
            }, {
                key: "rewardAngle",
                value: function(e) {
                    switch (this._model._lottrtyReward = e, e) {
                        case 1:
                            return 0;

                        case 2:
                            return 240;

                        case 3:
                            return 120;

                        case 4:
                            return 180;

                        case 5:
                            return 60;

                        case 6:
                            return 300;
                    }
                }
            }, {
                key: "initLontteryTime",
                value: function() {
                    var e, t, i = tt.data.ActiveConfig.date;
                    console.log("curDate", i), console.log("YLSDK.data.lotterDate", tt.data.lotterDate),
                        i !== tt.data.lotterDate && (console.log("111111111"), tt.data.lotterDate = i, tt.data.freeNumber = null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.lottery_free,
                            tt.data.lottertVideoNumber = null === (t = tt.data.ActiveConfig) || void 0 === t ? void 0 : t.lottery_video);
                }
            }, {
                key: "signRandomeSkin",
                value: function() {
                    var e = this.getStoreItemsCanBuy();
                    if (e.length <= 0) return 0;
                    var t = h.randomOne(e);
                    return console.log("randomPreview", t), t;
                }
            }, {
                key: "initSignReward",
                value: function() {
                    this._model.singinReward.gold = 0, this._model.singinReward.raffle = 0, this._model.singinReward.skin = "",
                        this._model.singinReward.reward = [];
                }
            }, {
                key: "cookTimesNum2String",
                value: function(e) {
                    return "零一双三四五六七八九十".charAt(e >>= 0) || e.toString();
                }
            }, {
                key: "randomFold",
                value: function() {
                    var e = this.randomNumber(this.signFold());
                    console.log("randomFold", e), this._model.singinReward.fold = e;
                }
            }, {
                key: "specialReward",
                value: function() {
                    if (this.hasSignIn && 0 == tt.data.signInCount) return this.isFirstSpecial()[6];
                    var e = this.hasSignIn ? -1 : 0;
                    console.log("isSign", e);
                    var t = tt.data.signInCount + e;
                    return this.isFirstSpecial()[t];
                }
            }, {
                key: "hasSignIn",
                get: function() {
                    return tt.data.ActiveConfig.date === tt.data.signInDate;
                }
            }]), YLMainController;
        }(),
        j = function(e) {
            function YLMainView(e, t) {
                return _classCallCheck(this, YLMainView), _possibleConstructorReturn(this, _getPrototypeOf(YLMainView).call(this, e, t, Y.VIEW_Main, 0));
            }
            return _inherits(YLMainView, P), _createClass(YLMainView, [{
                key: "bindPopupViews",
                value: function() {
                    this.bindPopUpChildView(Y.POPUP_Favorite, "isFavoriteShowing", !0), this.bindPopUpChildView(Y.POPUP_MoreGame, "isMoreGameShowing", !0),
                        this.bindPopUpChildView(Y.POPUP_Rank, "isRankShowing", !0), this.bindPopUpChildView(Y.POPUP_Newbie, "isNewbieShowing", !0),
                        this.bindPopUpChildView(Y.POPUP_SignIn, "isSignInShowing", !0, 1), this.bindPopUpChildView(Y.POPUP_Lottery, "isLotteryShowing", !0, 1),
                        this.bindPopUpChildView(Y.POPUP_Lottery_Reward, "isLotteryRewardShowing", !0, 2),
                        this.bindPopUpChildView(Y.POPUP_SinginSkin, "isSignSkinShowing", !0, 2), this.bindPopUpChildView(Y.POPUP_SinginReward, "isSignRewardShowing", !0, 2),
                        this.bindPopUpChildView(Y.POPUP_RaffleReward, "isRaffleRewardShowing", !0, 2), this.bindPopUpChildView(Y.POPUP_SingInSkinReward, "isSignSkinRewardShowing", !0, 2),
                        this.bindPopUpChildView(Y.VIEW_Home, "curStackView", !1, 0, Y.VIEW_Home), this.bindPopUpChildView(Y.VIEW_Game, "curStackView", !1, 0, Y.VIEW_Game),
                        this.bindPopUpChildView(Y.VIEW_Store, "curStackView", !1, 1, Y.VIEW_Store), this.bindPopUpChildView(Y.VIEW_BoxClick, "curStackView", !1, 1, Y.VIEW_BoxClick),
                        this.bindPopUpChildView(Y.VIEW_SearchPlayer, "curStackView", !0, 0, Y.VIEW_SearchPlayer),
                        this.bindPopUpChildView(Y.VIEW_SearchVSPlayer, "curStackView", !1, 0, Y.VIEW_SearchVSPlayer),
                        this.bindPopUpChildView(Y.VIEW_Skin, "curStackView", !0, 0, Y.VIEW_Skin), this.bindPopUpChildView(Y.VIEW_CrazyClick, "curStackView", !1, 1, Y.VIEW_CrazyClick),
                        this.bindPopUpChildView(Y.VIEW_Reborn, "curStackView", !0, 0, Y.VIEW_Reborn), this.bindPopUpChildView(Y.VIEW_SystemAppList, "curStackView", !1, 0, Y.VIEW_SystemAppList),
                        this.bindPopUpChildView(Y.VIEW_Result, "curStackView", !0, 0, Y.VIEW_Result), this.bindPopUpChildView(Y.VIEW_Pass, "curStackView", !0, 0, Y.VIEW_Pass),
                        this.bindPopUpChildView(Y.VIEW_BackHome, "curStackView", !1, 0, Y.VIEW_BackHome),
                        this.bindPopUpChildView(Y.VIEW_BeginGame, "curStackView", !1, 0, Y.VIEW_BeginGame);
                }
            }]), YLMainView;
        }(),
        W = new(function(e) {
            function YLMainModule() {
                return _classCallCheck(this, YLMainModule), _possibleConstructorReturn(this, _getPrototypeOf(YLMainModule).apply(this, arguments));
            }
            return _inherits(YLMainModule, B), _createClass(YLMainModule, [{
                key: "show",
                value: function(e) {
                    var t = this,
                        i = Object.create(null, {
                            show: {
                                get: function() {
                                    return _get(_getPrototypeOf(YLMainModule.prototype), "show", t);
                                }
                            }
                        });
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee55() {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, i.show.call(this, e);

                                case 2:
                                    platform.getInstance().showBanner();
                                    platform.getInstance().hideSplash();
                                    this.isShowing && (this._model.curStackView = tt.config.isHideRd ? Y.VIEW_Home : Y.VIEW_Home);

                                case 3:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee55, this);
                    }));
                }
            }, {
                key: "initMVC",
                value: function() {
                    this._model = new U(), this._controller = new H(this._model), this._view = new j(this._model, this._controller);
                }
            }, {
                key: "model",
                get: function() {
                    return this._model;
                }
            }, {
                key: "controller",
                get: function() {
                    return this._controller;
                }
            }]), YLMainModule;
        }())(),
        F = function(e) {
            function ShowMainBean() {
                return _classCallCheck(this, ShowMainBean), _possibleConstructorReturn(this, _getPrototypeOf(ShowMainBean).call(this, "ShowMainBean"));
            }
            return _inherits(ShowMainBean, t), _createClass(ShowMainBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee56() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, W.show();

                                case 2:
                                    this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee56, this);
                    }));
                }
            }]), ShowMainBean;
        }(),
        X = function() {
            function DateUtils() {
                _classCallCheck(this, DateUtils);
            }
            return _createClass(DateUtils, null, [{
                key: "toSecondStr",
                value: function(e) {
                    return (e / 1e3).toFixed(2);
                }
            }, {
                key: "date2Time",
                value: function(t) {
                    var i = new Date();
                    if (/(\d+)-(\d+)-(\d+) +(\d+):(\d+):(\d+)/g.test(t)) {
                        var n = RegExp.$1,
                            a = RegExp.$2,
                            o = RegExp.$3,
                            s = RegExp.$4,
                            r = RegExp.$5,
                            l = RegExp.$6;
                        return i.setFullYear(parseInt(n), parseInt(a) - 1, parseInt(o)), i.setHours(parseInt(s), parseInt(r), parseInt(l)),
                            i.getTime();
                    }
                    e.throwNormalError("日期格式不对：".concat(t));
                }
            }, {
                key: "getDateString",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "yyyy-MM-dd HH:mm:ss",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        i = {
                            "M+": (t = t || new Date()).getMonth() + 1,
                            "d+": t.getDate(),
                            "H+": t.getHours(),
                            "h+": t.getHours(),
                            "m+": t.getMinutes(),
                            "s+": t.getSeconds(),
                            "q+": Math.floor((t.getMonth() + 3) / 3),
                            S: t.getMilliseconds()
                        };
                    for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                            i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
                    return e;
                }
            }]), DateUtils;
        }(),
        z = new(function() {
            function YLMainManager() {
                _classCallCheck(this, YLMainManager);
            }
            return _createClass(YLMainManager, [{
                key: "deploy",
                value: function() {}
            }]), YLMainManager;
        }())(),
        K = function(e) {
            function InitAppBean() {
                return _classCallCheck(this, InitAppBean), _possibleConstructorReturn(this, _getPrototypeOf(InitAppBean).call(this, "InitAppBean"));
            }
            return _inherits(InitAppBean, t), _createClass(InitAppBean, [{
                key: "start",
                value: function() {
                    w.deploy(), C.deploy(), o.deploy(), g.deploy(), z.deploy(), this.finish();
                }
            }]), InitAppBean;
        }(),
        q = function(e) {
            function LoadResBean() {
                var e;
                return _classCallCheck(this, LoadResBean), (e = _possibleConstructorReturn(this, _getPrototypeOf(LoadResBean).call(this, "LoadResBean")))._curProgress = 0,
                    e;
            }
            return _inherits(LoadResBean, t), _createClass(LoadResBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee57() {
                        var e, t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if ((e = tt.config.load.reses2Load) && e.length) {
                                        i.next = 5;
                                        break;
                                    }
                                    return console.log("没有资源需要预加载"), this.finish(), i.abrupt("return");

                                case 5:
                                    return this._curProgress = V.curPercent, t = e.map(function(e) {
                                        return "string" == typeof e ? e : e.url;
                                    }), i.next = 9, a.asyncCreateRes(t);

                                case 9:
                                    e.map(function(e) {
                                        "string" != typeof e && e.needLock && (Laya.loader.getRes(e.url).lock = !0);
                                    }), this.finish();

                                case 11:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee57, this);
                    }));
                }
            }]), LoadResBean;
        }(),
        Z = function(e) {
            function InitGameBean() {
                return _classCallCheck(this, InitGameBean), _possibleConstructorReturn(this, _getPrototypeOf(InitGameBean).call(this, "InitGameBean"));
            }
            return _inherits(InitGameBean, t), _createClass(InitGameBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee58() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return G.once(E.G2S_INIT_GAME_READY_SUCCESS, this.onInitGameReadySuccess, this),
                                        t.next = 3, a.asyncLoadScene(tt.config.gameSceneUrl);

                                case 3:
                                    e = t.sent, o.layerScene.addChildAt(e, 0), G.emit(E.S2G_INIT_GAME_READY);

                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, _callee58, this);
                    }));
                }
            }, {
                key: "onInitGameReadySuccess",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee59() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    tt.data.hasGameInit = !0, window.WebAudioEngine.playMusic("res/sound/bgm.mp3"), this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee59, this);
                    }));
                }
            }]), InitGameBean;
        }(),
        J = function(e) {
            function LoadOpenDataResBean() {
                var e;
                return _classCallCheck(this, LoadOpenDataResBean), (e = _possibleConstructorReturn(this, _getPrototypeOf(LoadOpenDataResBean).call(this, "LoadOpenDataResBean")))._openDataRess = ["res/atlas/opendata/pic.atlas"],
                    e;
            }
            return _inherits(LoadOpenDataResBean, t), _createClass(LoadOpenDataResBean, [{
                key: "start",
                value: function() {
                    C.isQQWXMiniGame && Laya.loader.load(this._openDataRess, Laya.Handler.create(this, this.onResesLoaded)),
                        this.finish();
                }
            }, {
                key: "onResesLoaded",
                value: function() {
                    var e, t;
                    console.log("透传资源到开放域"), this._openDataRess.forEach(function(e) {
                        /\.atlas$/i.test(e) ? C.sendAtlasToOpenDataContext(e) : /\.json$/i.test(e) && C.sendJsonDataToDataContext(e);
                    }), C.postMsg2OpenData(n.Configuration, {
                        scorePattern: (null === (e = tt.config.rank) || void 0 === e ? void 0 : e.scorePattern) || "",
                        scoreArray: (null === (t = tt.config.rank) || void 0 === t ? void 0 : t.scoreArray) || ""
                    }), C.postMsg2OpenData(n.LoadRes);
                }
            }]), LoadOpenDataResBean;
        }(),
        Q = function(e) {
            function CheckStoreItemInUseBean() {
                return _classCallCheck(this, CheckStoreItemInUseBean), _possibleConstructorReturn(this, _getPrototypeOf(CheckStoreItemInUseBean).call(this, "CheckStoreItemInUseBean"));
            }
            return _inherits(CheckStoreItemInUseBean, t), _createClass(CheckStoreItemInUseBean, [{
                key: "start",
                value: function() {
                    W.controller.fixStoreItemInUse(), this.finish();
                }
            }]), CheckStoreItemInUseBean;
        }(),
        $ = function(e) {
            function LoadLiteSubPackageBean() {
                return _classCallCheck(this, LoadLiteSubPackageBean), _possibleConstructorReturn(this, _getPrototypeOf(LoadLiteSubPackageBean).call(this, "LoadLiteSubPackageBean"));
            }
            return _inherits(LoadLiteSubPackageBean, t), _createClass(LoadLiteSubPackageBean, [{
                key: "start",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee60() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, C.loadSubpackages([tt.config.load.liteSubpackage], void 0);

                                case 2:
                                    this.finish();

                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee60, this);
                    }));
                }
            }]), LoadLiteSubPackageBean;
        }(),
        ee = function(e) {
            function HideSplashBean() {
                return _classCallCheck(this, HideSplashBean), _possibleConstructorReturn(this, _getPrototypeOf(HideSplashBean).call(this, "HideSplashBean"));
            }
            return _inherits(HideSplashBean, t), _createClass(HideSplashBean, [{
                key: "start",
                value: function() {
                    V.done(200), console.log("【闪屏】闪屏显示时长：".concat(X.toSecondStr(Date.now() - tt.data.splashShowTime))),
                        this.finish();
                }
            }]), HideSplashBean;
        }(),
        te = function() {
            function YLBeanLauncher() {
                _classCallCheck(this, YLBeanLauncher), this._beans = [], this._curBeanIndex = 0,
                    this._beanStartTime = 0, this._beans = [K, O, M, $, F, ee, D, q, J, Z, Q];
            }
            return _createClass(YLBeanLauncher, [{
                key: "run",
                value: function() {
                    if (this._beanStartTime) {
                        var e = this._beans[this._curBeanIndex - 1];
                        console.log("[BEAN]执行 ".concat(e.name, " 完成，耗时：").concat(X.toSecondStr(Date.now() - this._beanStartTime), " 秒。"));
                    }
                    if (this._curBeanIndex < this._beans.length) {
                        this._beanStartTime = Date.now();
                        var t = new(0, this._beans[this._curBeanIndex])();
                        t.dispatcher.once(Laya.Event.COMPLETE, this, this.run), this._curBeanIndex++, console.log("[BEAN]正在执行bean：".concat(t.name)),
                            t.start();
                    } else console.log("[BEAN]所有bean全部执行完毕。");
                }
            }]), YLBeanLauncher;
        }(),
        ie = function(e) {
            function YLSplashRTView() {
                return _classCallCheck(this, YLSplashRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSplashRTView).apply(this, arguments));
            }
            return _inherits(YLSplashRTView, L), _createClass(YLSplashRTView, [{
                key: "onAwake",
                value: function() {
                    this._spView = this.getChildByName("_spView"), this._spView && (this.spLogo = this._spView.getChildByName("spLogo"),
                            this.spLogo && (this.spLogo.visible = !1)), this._imgLogo.skin = tt.config.homeLogoUrl,
                        this._spProgressBar.mask = this._spProgressBarMask, this._spProgressBarMask.removeSelf(),
                        this._model.on("percent", this.onPercent, this, !0), this._controller.start();
                }
            }, {
                key: "onPercent",
                value: function() {
                    var e = i.calValueBetween(this._model.percent, 0, 1),
                        t = this._spProgressBarMask.graphics;
                    t.clear(!0), t.drawRect(0, 0, this._spProgressBar.width * e, 29, "#ffffff", void 0, 0),
                        this._txtProgress.text = "".concat(100 * e >> 0, "%");
                }
            }]), YLSplashRTView;
        }(),
        ne = function(e) {
            function AlignWidget() {
                var e;
                return _classCallCheck(this, AlignWidget), (e = _possibleConstructorReturn(this, _getPrototypeOf(AlignWidget).apply(this, arguments))).stickMode = "center",
                    e.offsetX = "0", e.offsetY = "0", e.statusBarOffsetY = 0, e._p = new Laya.Point(0, 0),
                    e.isPause = !1, e;
            }
            return _inherits(AlignWidget, Laya.Script), _createClass(AlignWidget, [{
                key: "onWinResize4Repos",
                value: function() {
                    if (!this.isPause) {
                        var e = this.owner;
                        if (null == e ? void 0 : e.displayedInStage) {
                            var t = e.parent;
                            if (t instanceof Laya.Sprite) {
                                var i = this.stickMode,
                                    n = !1;
                                if ("none" !== i && (this.calPos(), this._p = t.globalToLocal(this._p), "v_middle" !== i && "bottom" !== i && "top" !== i && (e.x = this._p.x + this.cookOffsetValue(this.offsetX, !0),
                                        n = !0), "h_center" !== i && "right" !== i && (e.y = this._p.y + this.cookOffsetValue(this.offsetY, !1),
                                        n = !0), this.isAdaptStatusBar)) {
                                    var a = C.getStatusBarHeight();
                                    a && (a += this.statusBarOffsetY), e.y += a, n = !0;
                                }
                                n && e.event("Event_RePos");
                            }
                        }
                    }
                }
            }, {
                key: "cookOffsetValue",
                value: function(e, t) {
                    return -1 === e.indexOf("%") ? parseFloat(e) || 0 : (parseFloat(e.replace("%", "")) || 0) / 100 * (t ? Laya.stage.width : Laya.stage.height);
                }
            }, {
                key: "calPos",
                value: function() {
                    if (this.owner instanceof Laya.Sprite) {
                        var e = Laya.stage.width,
                            t = Laya.stage.height;
                        switch (this.stickMode) {
                            case "center":
                                this._p.x = e >> 1, this._p.y = t >> 1;
                                break;

                            case "h_center":
                                this._p.x = e >> 1;
                                break;

                            case "v_middle":
                                this._p.y = t >> 1;
                                break;

                            case "top":
                                this._p.y = 0;
                                break;

                            case "top_center":
                                this._p.x = e >> 1, this._p.y = 0;
                                break;

                            case "bottom":
                                this._p.y = t;
                                break;

                            case "bottom_center":
                                this._p.x = e >> 1, this._p.y = t;
                                break;

                            case "left_down":
                                this._p.x = 0, this._p.y = t;
                                break;

                            case "right":
                                this._p.x = e >> 0;
                                break;

                            case "right_middle":
                                this._p.x = e, this._p.y = t >> 1;
                                break;

                            case "right_down":
                                this._p.x = e, this._p.y = t;
                                break;

                            case "right_up":
                                this._p.x = e, this._p.y = 0;
                                break;

                            default:
                                return;
                        }
                    }
                }
            }, {
                key: "onEnable",
                value: function() {
                    Laya.stage.on(Laya.Event.RESIZE, this, this.onWinResize4Repos), this.owner.on(Laya.Event.DISPLAY, this, this.onWinResize4Repos),
                        this.onWinResize4Repos();
                }
            }, {
                key: "onStart",
                value: function() {
                    this.onWinResize4Repos();
                }
            }, {
                key: "onDisable",
                value: function() {
                    Laya.stage.off(Laya.Event.RESIZE, this, this.onWinResize4Repos), this.owner.off(Laya.Event.DISPLAY, this, this.onWinResize4Repos);
                }
            }, {
                key: "onDestroy",
                value: function() {
                    this.onDisable();
                }
            }]), AlignWidget;
        }(),
        ae = function(e) {
            function YLCrazyClickRTView() {
                return _classCallCheck(this, YLCrazyClickRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLCrazyClickRTView).apply(this, arguments));
            }
            return _inherits(YLCrazyClickRTView, R), _createClass(YLCrazyClickRTView, [{
                key: "onAwake",
                value: function() {
                    this._model.on("percentOnCrazyClick", this.onPercent, this), a.addClickListener(this._spHandClick, this.onHandClick, this);
                }
            }, {
                key: "onEnable",
                value: function() {
                    Laya.timer.once(100, this, function() {
                        g.showInterstitialAd();
                    }), this.onPercent();
                }
            }, {
                key: "onPercent",
                value: function() {
                    this._spProgressPane.percent = this._model.percentOnCrazyClick;
                }
            }, {
                key: "onHandClick",
                value: function() {
                    this._controller.crazyClick();
                }
            }]), YLCrazyClickRTView;
        }(),
        oe = function(e) {
            function YLProgressRTPane() {
                var e;
                return _classCallCheck(this, YLProgressRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLProgressRTPane).apply(this, arguments)))._percent = 0,
                    e;
            }
            return _inherits(YLProgressRTPane, Laya.Sprite), _createClass(YLProgressRTPane, [{
                key: "onAwake",
                value: function() {
                    this._spBar = this.getChildByName("imgBar"), this._spBarMask = this.getChildByName("spBarMask"),
                        this._spBar.mask = this._spBarMask, this._spBarMask.removeSelf(), this.onPercent();
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._spBar.mask = void 0, this._spBar.mask = this._spBarMask, this.onPercent();
                }
            }, {
                key: "onPercent",
                value: function() {
                    var e = i.calValueBetween(this._percent, 0, 1),
                        t = this._spBarMask,
                        n = t.graphics,
                        a = t.width,
                        o = t.height;
                    if (n.clear(!0), e) {
                        var s = o * e;
                        n.drawRect(0, o - s, a, s, "#ffffff", void 0, 0);
                    }
                }
            }, {
                key: "percent",
                get: function() {
                    return this._percent;
                },
                set: function(e) {
                    this._percent !== e && (this._percent = e, this.onPercent());
                }
            }]), YLProgressRTPane;
        }(),
        se = function(e) {
            function YLHandClickRTPane() {
                var e;
                return _classCallCheck(this, YLHandClickRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLHandClickRTPane).apply(this, arguments)))._tlMap = new Map(),
                    e;
            }
            return _inherits(YLHandClickRTPane, Laya.Sprite), _createClass(YLHandClickRTPane, [{
                key: "onAwake",
                value: function() {
                    this._spCircle1 = this.getChildByName("spCircle1"), this._spCircle2 = this.getChildByName("spCircle2"),
                        this._spCircle3 = this.getChildByName("spCircle3"), this._spHand = this.getChildByName("spHand"),
                        this._btnClickArea = this.getChildByName("btnClickArea"), a.addClickListener(this._btnClickArea, this.onClick, this);
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.tweenCircle(this._spCircle1, 0), this.tweenCircle(this._spCircle2, 1), this.tweenCircle(this._spCircle3, 2),
                        this.tweenHand();
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.resetAnimation(this._spCircle1), this.resetAnimation(this._spCircle2), this.resetAnimation(this._spCircle3),
                        this.resetAnimation(this._spHand);
                }
            }, {
                key: "tweenHand",
                value: function() {
                    this.resetAnimation(this._spHand);
                    this._spHand.scale(1.1, 1.1);
                    var e = new Laya.TimeLine();
                    e.to(this._spHand, {
                        scaleX: 1,
                        scaleY: 1
                    }, 400, Laya.Ease.sineIn), e.to(this._spHand, {
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, 400, Laya.Ease.sineOut), e.play(void 0, !0), this._tlMap.set(this._spHand, e);
                }
            }, {
                key: "tweenCircle",
                value: function(e, t) {
                    var i = this;
                    this.resetAnimation(e), e.scale(.01, .01);
                    var n = 300 * t;
                    Laya.timer.once(n, e, function tweenIt() {
                        e.scale(.01, .01), e.alpha = 1, Laya.Tween.to(e, {
                            alpha: 0,
                            scaleX: 3,
                            scaleY: 3
                        }, 1e3, Laya.Ease.sineIn, new Laya.Handler(i, function() {
                            Laya.timer.once(300, e, tweenIt);
                        }));
                    });
                }
            }, {
                key: "resetAnimation",
                value: function(e) {
                    var t = this._tlMap.get(e);
                    t && (t.destroy(), this._tlMap.delete(e)), Laya.Tween.clearAll(e), Laya.timer.clearAll(e);
                }
            }, {
                key: "onClick",
                value: function() {
                    this.event(Laya.Event.CLICK);
                }
            }]), YLHandClickRTPane;
        }(),
        re = function(e) {
            function YLFavoriteRTView() {
                return _classCallCheck(this, YLFavoriteRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLFavoriteRTView).apply(this, arguments));
            }
            return _inherits(YLFavoriteRTView, R), _createClass(YLFavoriteRTView, [{
                key: "onAwake",
                value: function() {
                    this._txtName1.text = this._txtName2.text = tt.config.gameName, this._imgIcon1.skin = this._imgIcon2.skin = tt.config.gameIconUrl;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isFavoriteShowing = !1;
                }
            }]), YLFavoriteRTView;
        }();
    ! function(e) {
        e[e.None = 0] = "None", e[e.RankFriend = 1] = "RankFriend", e[e.RankWorld = 2] = "RankWorld",
            e[e.FriendFirst = 3] = "FriendFirst", e[e.OverPlayer = 4] = "OverPlayer", e[e.All = 5] = "All";
    }(N || (N = {}));
    var le = function(e) {
            function YLGameRTView() {
                var e;
                return _classCallCheck(this, YLGameRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLGameRTView).apply(this, arguments)))._showBannerIndex = 0,
                    e._bannerIndex = 0, e;
            }
            return _inherits(YLGameRTView, R), _createClass(YLGameRTView, [{
                key: "onAwake",
                value: function() {
                    a.fixWxOpenDataViewer(this._wxOverHead), a.fixWxOpenDataViewer(this._wxRankHead),
                        this._panelRankParent = this._panelRank.parent, this._panelRank.removeSelf(), this._panelOverParent = this._panelOver.parent,
                        this._panelOver.removeSelf(), this._model.on("isShowingGamePlayerOver", this.onPlayerOverShowingChanged, this, !0),
                        this._model.on("isShowingGamePlayerRank", this.onPlayerRankShowingChanged, this, !0),
                        this._model.on("curStackView", this.onCurStackView, this, !0), tt.config.isHideScore && (this._fontScore.visible = !1);
                    this.Levellable.text = (window.isRussian ? "Уровень " : "Level ") + Tt.instance._mapIndex;
                }
            }, {
                key: "onPlayerOverShowingChanged",
                value: function() {
                    if (!tt.config.noOverPlayer)
                        if (this._model.isShowingGamePlayerOver) {
                            var e = tt.data.curScore;
                            tt.data.userInfo && (e = tt.data.curScore + tt.data.userInfo.max_score);
                            var t = {
                                score: e,
                                queueMax: tt.config.overPlayerQueueMax
                            };
                            C.postMsg2OpenData(n.ShowViewType, {
                                    viewType: N.OverPlayer
                                }), C.postMsg2OpenData(n.CheckOverPlayer, {
                                    data: t
                                }), Laya.Tween.clearAll(this._panelOver), this._panelOver.alpha = 0, this._panelOverParent.addChild(this._panelOver),
                                Laya.Tween.to(this._panelOver, {
                                    alpha: 1
                                }, 60, void 0, void 0, 100), this._wxOverHead.x = this._wxOverHead.x;
                        } else C.postMsg2OpenData(n.HideViewType, {
                            viewType: N.OverPlayer
                        }), this._panelOver.removeSelf();
                }
            }, {
                key: "onPlayerRankShowingChanged",
                value: function() {
                    this._model.isShowingGamePlayerRank ? (C.postMsg2OpenData(n.ShowViewType, {
                            viewType: N.FriendFirst
                        }), C.postMsg2OpenData(n.FirstFriendPlayerHead), this._panelRankParent.addChild(this._panelRank),
                        this._wxRankHead.x = this._wxRankHead.x, Laya.timer.once(3e3, this, this.onPlayerRankHideComplete)) : (C.postMsg2OpenData(n.HideViewType, {
                        viewType: N.FriendFirst
                    }), this._panelRank.removeSelf());
                }
            }, {
                key: "onPlayerRankHideComplete",
                value: function() {
                    this._model.isShowingGamePlayerRank = !1, this._model.hasGameBegan && (this._model.isShowingGamePlayerOver = !0);
                }
            }, {
                key: "checkAd",
                value: function() {
                    var e, t, i = tt.config.ad.gameViewAdMode;
                    1 !== i && (null === (e = this._panelAdCenter) || void 0 === e ? void 0 : e.parent) && (this._panelAdCenter.visible = !1),
                        2 !== i && (null === (t = this._panelAdBottom) || void 0 === t ? void 0 : t.parent) && (this._panelAdBottom.visible = !1);
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.Levellable.text = (window.isRussian ? "Уровень " : "Level ") + (Tt.instance._mapIndex + 1);
                    this.checkAd(), tt.data.on("curScore", this.onCurScore, this, !0), g.showCustom(d.HomeLeft),
                        g.showCustom(d.HomeRight);
                }
            }, {
                key: "onDisable",
                value: function() {
                    tt.data.off("curScore", this.onCurScore, this), g.hideCustom(d.HomeLeft), g.hideCustom(d.HomeRight);
                }
            }, {
                key: "checkBanner",
                value: function() {
                    var e, t;
                    (null === (t = null === (e = tt.data) || void 0 === e ? void 0 : e.versionConfig) || void 0 === t ? void 0 : t.banner_interval_switch) && (this._model.curStackView == Y.VIEW_Game ? this.showBanner() : (this.hideBanner(),
                        Laya.timer.clear(this, this.showBanner)));
                }
            }, {
                key: "showBanner",
                value: function() {
                    var e;
                    this.hideBanner();
                    var t = this._showBannerIndex % tt.config.ad.bannerAdID.length;
                    this._showBannerIndex++, this._bannerIndex = g.showBanner(t, this._model.curStackView),
                        Laya.timer.once((null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.banner_interval_game) || 1e4, this, this.showBanner);
                }
            }, {
                key: "hideBanner",
                value: function() {
                    g.hideBanner(this._bannerIndex);
                }
            }, {
                key: "onCurStackView",
                value: function() {
                    this.checkBanner();
                }
            }, {
                key: "onCurScore",
                value: function() {
                    this._fontScore.value = tt.data.curScore.toString();
                }
            }]), YLGameRTView;
        }(),
        ce = function(e) {
            function AbstractADGameRTPane(e) {
                var t;
                return _classCallCheck(this, AbstractADGameRTPane), (t = _possibleConstructorReturn(this, _getPrototypeOf(AbstractADGameRTPane).call(this)))._gridCategory = e,
                    t._grids = [], t._curIndex = 0, t._canShake = !0, t._updateIntervalMs = 2e3, t;
            }
            return _inherits(AbstractADGameRTPane, Laya.Sprite), _createClass(AbstractADGameRTPane, [{
                key: "onAwake",
                value: function() {
                    this.initUI();
                }
            }, {
                key: "onEnable",
                value: function() {
                    tt.data.on("appListDic", this.onAppListDic, this, !0), tt.data.activeAdNum++;
                }
            }, {
                key: "onDisable",
                value: function() {
                    tt.data.off("appListDic", this.onAppListDic, this), Laya.timer.clear(this, this.tick2Update),
                        tt.data.activeAdNum--;
                }
            }, {
                key: "onAppListDic",
                value: function() {
                    this.updateGrids(!1), Laya.timer.clear(this, this.tick2Update), Laya.timer.clear(this, this.onDelay2Update),
                        Laya.timer.once(i.randomBetween(0, 1e3), this, this.onDelay2Update);
                }
            }, {
                key: "onDelay2Update",
                value: function() {
                    Laya.timer.loop(this._updateIntervalMs, this, this.tick2Update);
                }
            }, {
                key: "tick2Update",
                value: function() {
                    this.updateGrids(!0);
                }
            }, {
                key: "updateGrids",
                value: function(e) {
                    var t = this;
                    this.visible && (e = e && this._canShake, this._applist && this._applist.length || (this._applist = (tt.data.appListDic[this._gridCategory] || []).concat(),
                        h.disturb(this._applist)), this._grids.forEach(function(i, n) {
                        var a = (t._curIndex + n) % t._applist.length;
                        i.setData(t._applist[a], e);
                    }), this._curIndex += this._grids.length);
                }
            }]), AbstractADGameRTPane;
        }(),
        he = function(e) {
            function YLADGameRTBanner0() {
                var e;
                return _classCallCheck(this, YLADGameRTBanner0), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTBanner0).call(this, 0)))._canShake = !1,
                    e;
            }
            return _inherits(YLADGameRTBanner0, ce), _createClass(YLADGameRTBanner0, [{
                key: "onAppListDic",
                value: function() {
                    var e = tt.data.appListDic[this._gridCategory] || [];
                    this._imgBg.visible = !!e.length, _get(_getPrototypeOf(YLADGameRTBanner0.prototype), "onAppListDic", this).call(this);
                }
            }, {
                key: "initUI",
                value: function() {
                    this._imgBg = this.getChildByName("imgBg");
                    for (var e = 0;;) {
                        var t = this.getChildByName("ad".concat(e));
                        if (!t) break;
                        this._grids.push(t), e++;
                    }
                }
            }]), YLADGameRTBanner0;
        }(),
        ue = function(e) {
            function YLAdGameRTGrid() {
                var e;
                return _classCallCheck(this, YLAdGameRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLAdGameRTGrid).apply(this, arguments)))._controller = W.controller,
                    e;
            }
            return _inherits(YLAdGameRTGrid, Laya.Sprite), _createClass(YLAdGameRTGrid, [{
                key: "setData",
                value: function(e, t) {
                    var i;
                    if (this._imgAd) {
                        this._data = e;
                        var n = (null == e ? void 0 : e.app_img) || "";
                        this._imgAd.skin = n, this.visible = !!n, null === (i = this._shakeTimeline) || void 0 === i || i.destroy(),
                            this._shakeTimeline = void 0, this._imgAd.rotation = 0, t && (this._shakeTimeline = new Laya.TimeLine(),
                                this._shakeTimeline.to(this._imgAd, {
                                    rotation: 15
                                }, 50).to(this._imgAd, {
                                    rotation: -15
                                }, 100).to(this._imgAd, {
                                    rotation: 15
                                }, 100).to(this._imgAd, {
                                    rotation: 0
                                }, 50), this._shakeTimeline.play());
                    }
                }
            }, {
                key: "onADClick",
                value: function() {
                    this._controller.gotoApp(this._data);
                }
            }, {
                key: "onAwake",
                value: function() {
                    this._imgAd = this.getChildByName("imgAd"), a.addClickListener(this._imgAd, this.onADClick, this);
                }
            }]), YLAdGameRTGrid;
        }(),
        de = function(e) {
            function YLADGameRTSquare0() {
                return _classCallCheck(this, YLADGameRTSquare0), _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTSquare0).call(this, 0));
            }
            return _inherits(YLADGameRTSquare0, ce), _createClass(YLADGameRTSquare0, [{
                key: "initUI",
                value: function() {
                    var e = this.getChildByName("paneLeft"),
                        t = this.getChildByName("paneRight");
                    this._grids.push(e.getChildByName("adL1")), this._grids.push(e.getChildByName("adL2")),
                        this._grids.push(t.getChildByName("adR1")), this._grids.push(t.getChildByName("adR2"));
                }
            }]), YLADGameRTSquare0;
        }(),
        _e = function(e) {
            function YLLotteryRTView() {
                return _classCallCheck(this, YLLotteryRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLLotteryRTView).apply(this, arguments));
            }
            return _inherits(YLLotteryRTView, R), _createClass(YLLotteryRTView, [{
                key: "onAwake",
                value: function() {
                    for (var e, t = [this._one, this._two, this._three, this._four, this._five], i = 0; i < t.length; i++) t[i].text = (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.reward.lotteryreward[i].prop_quantity) + "金币";
                    tt.data.on("raffleNumber", this.allNumber, this, !0), tt.data.on("freeNumber", this.allNumber, this, !0),
                        this.allNumber();
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.turnTable.rotation = 0, this.isNowTurn = !1, this.target.visible = !1, this.bubble.visible = !1,
                        this._titleTxt.text = tt.data.ActiveConfig.lottery_free.toString();
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee61() {
                        var t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    i.t0 = e.currentTarget, i.next = i.t0 === this._btnTurn ? 3 : i.t0 === this._btnRaffle ? 13 : 15;
                                    break;

                                case 3:
                                    if (0 != tt.data.lottertVideoNumber) {
                                        i.next = 5;
                                        break;
                                    }
                                    return i.abrupt("return", C.toastMsg("抽奖次数不足"));

                                case 5:
                                    if (!this.isNowTurn) {
                                        i.next = 7;
                                        break;
                                    }
                                    return i.abrupt("return");

                                case 7:
                                    return this.turnTable.rotation = 0, i.next = 10, this._controller.drawLottery();

                                case 10:
                                    return t = i.sent, this.LotteryAni(t), i.abrupt("break", 15);

                                case 13:
                                    return 0 == this.bubble.visible && (this.bubble.visible = !0, Laya.timer.once(5e3, this, this.hidebubble)),
                                        i.abrupt("break", 15);

                                case 15:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee61, this);
                    }));
                }
            }, {
                key: "LotteryAni",
                value: function(e) {
                    if (!(e > 10)) {
                        this.target.visible = !1, this.isNowTurn = !0;
                        var t = Math.floor(4 * Math.random() + 5);
                        Laya.Tween.to(this.turnTable, {
                            rotation: 360 * t + this._controller.rewardAngle(e)
                        }, 4e3, Laya.Ease.sineInOut, Laya.Handler.create(this, this.onEnd, [e]));
                    }
                }
            }, {
                key: "onEnd",
                value: function(e) {
                    this.target.visible = !0, Laya.timer.once(600, this, this.openReward), tt.data.lotteryCount++;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this.isNowTurn || (Laya.timer.clearAll(this), this._model.isLotteryShowing = !1);
                }
            }, {
                key: "allNumber",
                value: function() {
                    var e = tt.data.freeNumber + tt.data.raffleNumber;
                    this.allNum.text = e.toString(), this.freeTurn.visible = 0 != e, this.videoTurn.visible = 0 == e;
                }
            }, {
                key: "openReward",
                value: function() {
                    this._model.isLotteryRewardShowing = !0, this.isNowTurn = !1;
                }
            }, {
                key: "hidebubble",
                value: function() {
                    this.bubble.visible = !1;
                }
            }]), YLLotteryRTView;
        }(),
        pe = function(e) {
            function YLLotteryRewardRTView() {
                return _classCallCheck(this, YLLotteryRewardRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLLotteryRewardRTView).apply(this, arguments));
            }
            return _inherits(YLLotteryRewardRTView, R), _createClass(YLLotteryRewardRTView, [{
                key: "onAwake",
                value: function() {
                    this.skinTxt.visible = !1, this.awardTxt.visible = !1;
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._btnBack.visible = !1, this._btnVideoFold.visible = !1, this.reward(), Laya.timer.loop(50, this, this.turnLight);
                }
            }, {
                key: "reward",
                value: function() {
                    var e, t;
                    if (1 == this._model._lottrtyReward) {
                        if (!this._controller.getLotteryStoreItem()) return C.toastMsg("物品已解锁~");
                        this.award.skin = null === (e = this._controller.getLotteryStoreItem()) || void 0 === e ? void 0 : e.previewPath,
                            this.award.scaleX = 1, this.award.scaleY = 1, this.light.skin = "sdk_youling/lite/pic/box-di2-1.png",
                            this.awardTxt.visible = !1, this._btnBack.visible = !0, this.skinTxt.visible = !0,
                            this._controller.lotteryBuySkin();
                    } else {
                        this.awardTxt.visible = !0, this.skinTxt.visible = !1, this.award.scaleX = 2, this.award.scaleY = 2,
                            this.light.skin = "sdk_youling/lite/pic/box-di.png";
                        var i = [5, 4, 3, 2, 1];
                        this.award.skin = "sdk_youling/lite/pic/icon-jinbi-" + i[this._model._lottrtyReward - 2] + ".png",
                            this.rewardGold = null === (t = tt.data.ActiveConfig) || void 0 === t ? void 0 : t.reward.lotteryreward[i[this._model._lottrtyReward - 2] - 1].prop_quantity,
                            this.awardTxt.value = "x" + this.rewardGold, this._btnVideoFold.visible = !0;
                    }
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee62() {
                        var t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    i.t0 = e.currentTarget, i.next = i.t0 === this._btnVideoFold ? 3 : i.t0 === this._btnBack ? 8 : 10;
                                    break;

                                case 3:
                                    return i.next = 5, g.showVideo(p.Lottery);

                                case 5:
                                    return 1 !== (t = i.sent) && -3 !== t || (
                                        tt.data.gold += this.rewardGold,

                                        this.onCloseClick(),
                                        C.toastMsg("恭喜获得" + 2 * this.rewardGold + "金币~~")), i.abrupt("break", 10);

                                case 8:
                                    return this.onCloseClick(), i.abrupt("break", 10);

                                case 10:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee62, this);
                    }));
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    1 != this._model._lottrtyReward && (tt.data.gold += this.rewardGold),
                        this._model.isLotteryRewardShowing = !1,
                        this.light.rotation = 0, Laya.timer.clear(this, this.turnLight);
                }
            }, {
                key: "turnLight",
                value: function() {
                    this.light.rotation += 2;
                }
            }]), YLLotteryRewardRTView;
        }(),
        ye = function(e) {
            function YLNewbieRTView() {
                return _classCallCheck(this, YLNewbieRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLNewbieRTView).apply(this, arguments));
            }
            return _inherits(YLNewbieRTView, R), _createClass(YLNewbieRTView, [{
                key: "onAwake",
                value: function() {
                    this._spClickOther.visible = !1, this._imgMain.on(Laya.Event.LOADED, this, this.onNewbieMainComplete),
                        this._imgMain.skin = tt.config.newbieImgUrl || "", tt.config.newbieAniUrl && Laya.loader.load(tt.config.newbieAniUrl, Laya.Handler.create(this, this.onAniComplete)),
                        tt.config.newbieTextUrl && (this._spClickOther.visible = !0, Laya.loader.load(tt.config.newbieTextUrl, Laya.Handler.create(this, this.onTextTureComplete)));
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._ani && this._ani.play(0, !0);
                }
            }, {
                key: "onAniComplete",
                value: function() {
                    this._ani = new Laya.Animation(), this._ani.loadAnimation(tt.config.newbieAniUrl),
                        this._ani.play(0, !0), this._spView.addChild(this._ani), console.log("this.Ani", this._ani);
                }
            }, {
                key: "onTextTureComplete",
                value: function(e) {
                    this._spClickOther.texture = e;
                }
            }, {
                key: "onNewbieMainComplete",
                value: function() {
                    this._spClickOther.y = this._imgMain.y + .5 * this._imgMain.height + 80;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._controller.try2ShowCrazyClick();
                }
            }, {
                key: "onDisable",
                value: function() {
                    this._ani && this._ani.gotoAndStop(0);
                }
            }]), YLNewbieRTView;
        }(),
        fe = function(e) {
            function YLPassRTView() {
                return _classCallCheck(this, YLPassRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLPassRTView).apply(this, arguments));
            }
            return _inherits(YLPassRTView, R), _createClass(YLPassRTView, [{
                    key: "onBtnClick",
                    value: function(e) {
                        switch (e.currentTarget) {
                            case this._btnHome:
                                this._controller.try2SystemApp();
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                                break;

                            case this._btnPlay:
                            case this._btnPlayVerify:
                                console.log("_btnPlayVerify");
                                this._controller.try2SystemApp();
                                break;

                            case this._btnFight:
                                console.log("_btnFight");
                                C.shareFriend(2);
                                break;

                            case this._btnContinue:
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                                platform.getInstance().showInterstitial(() => {
                                    this._controller.submitScore();
                                    this._controller.settlementGold();
                                    this._controller.try2SystemApp();
                                });
                                break;
                            case this._btnShiBei:

                                platform.getInstance().showReward(() => {

                                    if (window.gameResult == false) {
                                        Tt.instance._mapIndex += 1;
                                        Laya.LocalStorage.setItem("Plug-Head-Level", Tt.instance._mapIndex)
                                        console.log("mapIndexmapIndexmapIndex " + Tt.instance._mapIndex);
                                    } else {
                                        this._controller.submitScore();
                                        this._controller.settlementShiBeieiGold();
                                    }
                                    this._controller.try2SystemApp();
                                })
                                break;

                        }
                    }
                }, {
                    key: "show",
                    value: function() {

                        if (window.gameResult == true) {
                            this.gameResultImage.skin = "sdk_youling/lite/pic/victory.png";
                            this._btnShiBei.getChildAt(0).texture = "sdk_youling/common/pic_wx/bth-yellow-ReceiveX10.png";
                            this._btnContinue.getChildAt(1).visible = true;
                            this._btnContinue.getChildAt(0).visible = false;
                            C.playSoundEffect(tt.config.sound.success);
                        } else {
                            this.gameResultImage.skin = "sdk_youling/lite/pic/lose.png";
                            this._btnShiBei.getChildAt(0).texture = window.isRussian ?
                            "sdk_youling/common/pic_wx/bth-yellow-Skip_ru.png" : 
                            "sdk_youling/common/pic_wx/bth-yellow-Skip.png";
                            this._btnContinue.getChildAt(1).visible = false;
                            this._btnContinue.getChildAt(0).visible = true;


                            C.playSoundEffect(tt.config.sound.fail);
                        }
                        this.isShowing || console.log("YLPassRTView显示"), _get(_getPrototypeOf(YLPassRTView.prototype), "show", this).call(this);
                    }
                }, {
                    key: "onShowComplete",
                    value: function() {
                        console.log("YLPassRTView显示完毕"), _get(_getPrototypeOf(YLPassRTView.prototype), "onShowComplete", this).call(this);
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isShowing && console.log("YLPassRTView隐藏"), _get(_getPrototypeOf(YLPassRTView.prototype), "hide", this).call(this);
                    }
                }, {
                    key: "onHideComplete",
                    value: function() {
                        console.log("YYLPassRTView隐藏完毕"), _get(_getPrototypeOf(YLPassRTView.prototype), "onHideComplete", this).call(this);
                    }
                }, {
                    key: "onEnable",
                    value: function() {
                        window.scrollList && (window.scrollList.visible = true);

                        // Laya.timer.once(1500, this, function () {
                        //     g.showInterstitialAd();
                        // });
                        var e = tt.config.score2Gold(tt.data.curScore);
                        this._fontScore.value = e.toString(),



                            _get(_getPrototypeOf(YLPassRTView.prototype), "onEnable", this).call(this), this._spTop.visible = !tt.config.noGold;
                    }
                },
                {
                    key: "onDisable",
                    value: function() {
                        window.scrollList && (window.scrollList.visible = false);
                    }
                }
            ]), YLPassRTView;
        }(),
        ge = function(e) {
            function YLGoldRTPane() {
                var e;
                return _classCallCheck(this, YLGoldRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLGoldRTPane).apply(this, arguments)))._goldTxt = "",
                    e;
            }
            return _inherits(YLGoldRTPane, Laya.Sprite), _createClass(YLGoldRTPane, [{
                key: "onAwake",
                value: function() {
                    this._fontClip = this.getChildByName("fontClip"),
                        this.visible = !tt.config.noGold;
                }
            }, {
                key: "goldTxt",
                get: function() {
                    return this._goldTxt;
                },
                set: function(e) {
                    this._goldTxt = e, this._fontClip.value = e;
                }
            }]), YLGoldRTPane;
        }(),
        me = function(e) {
            function YLGoldPane() {
                var e;
                return _classCallCheck(this, YLGoldPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLGoldPane).apply(this, arguments))).isHero = !1,
                    e;
            }
            return _inherits(YLGoldPane, Laya.Script), _createClass(YLGoldPane, [{
                key: "onAwake",
                value: function() {
                    this._owner = this.owner;
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.isHero && tt.data.on("gold", this.onHeroGold, this, !0);
                }
            }, {
                key: "onDisable",
                value: function() {
                    tt.data.off("gold", this.onHeroGold, this);
                }
            }, {
                key: "onHeroGold",
                value: function() {
                    this._owner.goldTxt = tt.data.gold.toString();
                }
            }]), YLGoldPane;
        }(),
        ve = function(e) {
            function YLADGameRTSquare3() {
                return _classCallCheck(this, YLADGameRTSquare3), _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTSquare3).call(this, 3));
            }
            return _inherits(YLADGameRTSquare3, ce), _createClass(YLADGameRTSquare3, [{
                key: "initUI",
                value: function() {
                    for (var e = 0;;) {
                        var t = this.getChildByName("ad".concat(e));
                        if (!t) break;
                        this._grids.push(t), e++;
                    }
                }
            }]), YLADGameRTSquare3;
        }(),
        ke = function(e) {
            function YLADRealBanner() {
                var e;
                return _classCallCheck(this, YLADRealBanner), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADRealBanner).apply(this, arguments))).hangMS = 0,
                    e.coverTargetToY = NaN, e.needFakeBanner = !1, e.isShare = !1, e.isDisableWhileNoDelay = !1,
                    e.showDelayMS = -1, e.AdIndex = 0, e._isTime2ShowAd = !1, e._isShowingBanner = !1,
                    e._isAdEnable = !1, e._curRealBannerId = 0, e._corverTargetOriPos = void 0, e._model = W.model,
                    e;
            }
            return _inherits(YLADRealBanner, Laya.Script), _createClass(YLADRealBanner, [{
                key: "onDisable",
                value: function() {
                    this.isAdEnable = !1;
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.isAdEnable = !0;
                }
            }, {
                key: "updateCoverTarget2PosYDirectly",
                value: function() {
                    if (this.coverTarget && !isNaN(this.coverTargetToY)) {
                        var e = this.coverTarget.getComponent(ne);
                        e && (e.isPause = !0), this.coverTarget.y = this.coverTargetToY;
                    }
                }
            }, {
                key: "onTime2Show",
                value: function() {
                    this._isTime2ShowAd = !0, this.try2ShowAd();
                }
            }, {
                key: "try2ShowAd",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee63() {
                        var e, t, i, n, o, s = this;
                        return regeneratorRuntime.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (e = tt.data.versionConfig, !this._isShowingBanner && this._isTime2ShowAd) {
                                        r.next = 3;
                                        break;
                                    }
                                    return r.abrupt("return");

                                case 3:
                                    if (this.isEnableWrongClick || !this.hangMS) {
                                        r.next = 5;
                                        break;
                                    }
                                    return r.abrupt("return");

                                case 5:
                                    if (!this.isDisableWhileNoDelay || 1 === (null == e ? void 0 : e.delay)) {
                                        r.next = 7;
                                        break;
                                    }
                                    return r.abrupt("return");

                                case 7:
                                    if (g.hasBanner) {
                                        r.next = 20;
                                        break;
                                    }
                                    if (g.once(_.BANNER_LOADED, this.try2ShowAd, this), !this.needFakeBanner) {
                                        r.next = 19;
                                        break;
                                    }
                                    if (this._fakeBanner) {
                                        r.next = 17;
                                        break;
                                    }
                                    return r.next = 13, a.asyncLoadRes("sdk_youling/common/prefab/YLADGameBanner2.prefab");

                                case 13:
                                    t = r.sent, this._fakeBanner = t.create(), this._fakeBanner.addComponent(ne).stickMode = "bottom_center";

                                case 17:
                                    r.next = 20;
                                    break;

                                case 19:
                                    return r.abrupt("return");

                                case 20:
                                    if (this.hangMS > 0 && Laya.timer.once(this.hangMS, this, this.onTime2HideAd), this._isShowingBanner = !0,
                                        this.doShowAd(), !this.coverTarget || this.hangMS || this.needUpdateTarget2PosYDirectly && e) {
                                        r.next = 40;
                                        break;
                                    }
                                    if (this._corverTargetOriPos || (this._corverTargetOriPos = new Laya.Point(this.coverTarget.x, this.coverTarget.y)),
                                        i = 0, !g.curShowingBanner) {
                                        r.next = 31;
                                        break;
                                    }
                                    n = g.curShowingBanner.banner.style.realHeight || g.normalBannerHegiht, i = (1 - n / Laya.Browser.clientHeight) * Laya.stage.displayHeight,
                                        r.next = 36;
                                    break;

                                case 31:
                                    if (!this._fakeBanner) {
                                        r.next = 35;
                                        break;
                                    }
                                    i = Laya.stage.height - this._fakeBanner.adHeight, r.next = 36;
                                    break;

                                case 35:
                                    return r.abrupt("return");

                                case 36:
                                    i = this.coverTarget.parent.globalToLocal(new Laya.Point(0, i)).y, isNaN(this.coverTargetToY) || (i = Math.min(i, this.coverTargetToY)),
                                        o = (null == e ? void 0 : e.move_time) || 1e3, Laya.Tween.to(this.coverTarget, {
                                            y: i
                                        }, 300, void 0, new Laya.Handler(this, function() {
                                            var e;
                                            return null === (e = s.owner) || void 0 === e ? void 0 : e.event("EVENT_BannerCoverTargetMoveComplete");
                                        }), o);

                                case 40:
                                case "end":
                                    return r.stop();
                            }
                        }, _callee63, this);
                    }));
                }
            }, {
                key: "doShowAd",
                value: function() {
                    g.hasBanner ? this._curRealBannerId = g.showBanner(this.AdIndex, this._model.curStackView) : this._fakeBanner && this.owner.addChild(this._fakeBanner);
                }
            }, {
                key: "onTime2HideAd",
                value: function() {
                    var e;
                    g.hideBanner(this._curRealBannerId), null === (e = this._fakeBanner) || void 0 === e || e.removeSelf(),
                        this._isShowingBanner = !1, this._curRealBannerId = 0;
                }
            }, {
                key: "isEnableWrongClick",
                get: function() {
                    var e = tt.data.versionConfig;
                    return 1 === (null == e ? void 0 : e.delay) && (!this.isShare || 1 === e.share);
                }
            }, {
                key: "needUpdateTarget2PosYDirectly",
                get: function() {
                    var e = tt.data.versionConfig;
                    return !this.isEnableWrongClick || this.isDisableWhileNoDelay && 1 !== (null == e ? void 0 : e.delay);
                }
            }, {
                key: "isAdEnable",
                get: function() {
                    return this._isAdEnable;
                },
                set: function(e) {
                    var t;
                    if (this._isAdEnable !== e)
                        if (this._isAdEnable = e, e) {
                            this.needUpdateTarget2PosYDirectly && this.updateCoverTarget2PosYDirectly();
                            var i = (null === (t = tt.data.versionConfig) || void 0 === t ? void 0 : t.latency_time) || 1e3;
                            this.showDelayMS > 0 ? i = this.showDelayMS : 0 === this.showDelayMS && (i = 200),
                                i > 0 ? Laya.timer.once(i, this, this.onTime2Show) : this.onTime2Show();
                        } else g.off(_.BANNER_LOADED, this.try2ShowAd, this), Laya.timer.clearAll(this),
                            this._isTime2ShowAd = !1, this._isShowingBanner && this.onTime2HideAd();
                }
            }]), YLADRealBanner;
        }(),
        Se = function(e) {
            function YLRaffleRewardRTView() {
                return _classCallCheck(this, YLRaffleRewardRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLRaffleRewardRTView).apply(this, arguments));
            }
            return _inherits(YLRaffleRewardRTView, R), _createClass(YLRaffleRewardRTView, [{
                key: "onEnable",
                value: function() {
                    Laya.timer.loop(50, this, this.turnLight), this.raffleNum.value = "x" + this._model.singinReward.raffle;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isRaffleRewardShowing = !1, Laya.timer.clear(this, this.turnLight);
                }
            }, {
                key: "turnLight",
                value: function() {
                    this.light.rotation += 2;
                }
            }]), YLRaffleRewardRTView;
        }(),
        we = function(e) {
            function YLRankRTView() {
                return _classCallCheck(this, YLRankRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLRankRTView).apply(this, arguments));
            }
            return _inherits(YLRankRTView, R), _createClass(YLRankRTView, [{
                key: "onAwake",
                value: function() {
                    a.fixWxOpenDataViewer(this._wxODViewer), this._wxODViewerOrginalPos = new Laya.Point(this._wxODViewer.x, this._wxODViewer.y),
                        this._wxODViewerParnet = this._wxODViewer.parent;
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e, t = this;
                    "rank" !== tt.config.authorTime || tt.data.hasRejectAuthor || (null === (e = tt.data.userInfo) || void 0 === e ? void 0 : e.avatar) || C.authorize().then(function(e) {
                            return e && t.onRanKeyChanged();
                        }), this._model.on("rankTabKey", this.onRanKeyChanged, this, !0), this._btnSubscribeMessage.visible = !1,
                        this.updateShakeTimeLine(!1), C.checkRequestSubscribeSystemMessage().then(function(e) {
                            e ? t.requestSubscribeSystemMessageSuccess() : t._btnSubscribeMessage.visible = !0;
                        }), tt.data.hasRejectisSubscribeMessageAuthor || this.updateShakeTimeLine(!0);
                }
            }, {
                key: "onDisable",
                value: function() {
                    this._model.off("rankTabKey", this.onRanKeyChanged, this);
                }
            }, {
                key: "updateShakeTimeLine",
                value: function(e) {
                    var t;
                    null === (t = this._shakeTimeline) || void 0 === t || t.destroy(), this._shakeTimeline = void 0,
                        this._btnSubscribeMessage.rotation = 0, e && (this._shakeTimeline = new Laya.TimeLine(),
                            this._shakeTimeline.to(this._btnSubscribeMessage, {
                                rotation: 15
                            }, 50).to(this._btnSubscribeMessage, {
                                rotation: -15
                            }, 100).to(this._btnSubscribeMessage, {
                                rotation: 15
                            }, 100).to(this._btnSubscribeMessage, {
                                rotation: 0
                            }, 50), this._shakeTimeline.play(0, !0));
                }
            }, {
                key: "requestSubscribeSystemMessageSuccess",
                value: function() {
                    this._btnSubscribeMessage.visible = !1, this.updateShakeTimeLine(!1);
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    var t = this;
                    switch (e.currentTarget) {
                        case this._btnSubscribeMessage:
                            C.requestSubscribeSystemMessage().then(function(e) {
                                e ? t.requestSubscribeSystemMessageSuccess() : t.updateShakeTimeLine(!1);
                            });
                    }
                }
            }, {
                key: "onShowComplete",
                value: function() {
                    var e = this._wxODViewerParnet.localToGlobal(this._wxODViewerOrginalPos, !0);
                    e = this.globalToLocal(e, !1), this.addChild(this._wxODViewer), this._wxODViewer.x = e.x,
                        this._wxODViewer.y = e.y, _get(_getPrototypeOf(YLRankRTView.prototype), "onShowComplete", this).call(this);
                }
            }, {
                key: "onHideComplete",
                value: function() {
                    C.postMsg2OpenData(n.HideViewType, {
                        viewType: "world" === this._model.rankTabKey ? N.RankWorld : N.RankFriend
                    }), _get(_getPrototypeOf(YLRankRTView.prototype), "onHideComplete", this).call(this);
                }
            }, {
                key: "hide",
                value: function() {
                    this.isShowing && this._wxODViewer.parent !== this._wxODViewerParnet && (this._wxODViewerParnet.addChild(this._wxODViewer),
                            this._wxODViewer.x = this._wxODViewerOrginalPos.x, this._wxODViewer.y = this._wxODViewerOrginalPos.y),
                        _get(_getPrototypeOf(YLRankRTView.prototype), "hide", this).call(this);
                }
            }, {
                key: "onRanKeyChanged",
                value: function() {
                    var e = this._model.rankTabKey;
                    e && C.isQQWXMiniGame && ("world" === e ? (C.postMsg2OpenData(n.ShowViewType, {
                        viewType: N.RankWorld
                    }), y.reqWorldRank()) : (C.postMsg2OpenData(n.ShowViewType, {
                        viewType: N.RankFriend
                    }), C.postMsg2OpenData(n.ReqFriendRankData)));
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isRankShowing = !1;
                }
            }]), YLRankRTView;
        }(),
        Ce = function(e) {
            function YLTab() {
                var e;
                return _classCallCheck(this, YLTab), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLTab).apply(this, arguments)))._isSelected = !1,
                    e;
            }
            return _inherits(YLTab, Laya.Script), _createClass(YLTab, [{
                key: "updateSelection",
                value: function() {
                    this._imgSelected.visible = this._isSelected, this._imgNormal.visible = !this._isSelected;
                }
            }, {
                key: "onAwake",
                value: function() {
                    this._imgSelected = this.owner.getChildByName("imgSelected"), this._imgNormal = this.owner.getChildByName("imgNormal"),
                        this._txtTitle = this.owner.getChildByName("txtTitle"), this.updateSelection();
                }
            }, {
                key: "isSelected",
                get: function() {
                    return this._isSelected;
                },
                set: function(e) {
                    this._isSelected !== e && (this._isSelected = e, this.updateSelection());
                }
            }]), YLTab;
        }(),
        be = function(e) {
            function YLTabGroup() {
                var e;
                return _classCallCheck(this, YLTabGroup), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLTabGroup).apply(this, arguments)))._tabComps = [],
                    e._tabs = [], e;
            }
            return _inherits(YLTabGroup, Laya.Script), _createClass(YLTabGroup, [{
                key: "addTabClick",
                value: function(e) {
                    this._onTabClick = e;
                }
            }, {
                key: "updateSelection",
                value: function(e) {
                    this._tabComps.forEach(function(t) {
                        return t.isSelected = e === t.tabKey;
                    });
                }
            }, {
                key: "onAwake",
                value: function() {
                    for (var e = this.tabParent || this.owner, t = e.numChildren, i = 0; i < t; i++) {
                        var n = e.getChildAt(i),
                            o = n.getComponent(Ce);
                        o && (this._tabComps.push(o), this._tabs.push(n), a.addClickListener(n, this.onTabClickChanged, this));
                    }
                }
            }, {
                key: "onStart",
                value: function() {
                    var e = this;
                    if (this.updateSelection(this.defaultTabKey), this.modelProperty) {
                        var t = this.owner,
                            i = t.model || t._model;
                        i instanceof v && (this._parentModel = i, i.on(this.modelProperty, this.onModelTabKeyChanged, this, !0),
                            this.addTabClick(function(t) {
                                return i[e.modelProperty] = t;
                            }));
                    }
                }
            }, {
                key: "onModelTabKeyChanged",
                value: function() {
                    this.updateSelection(this._parentModel[this.modelProperty]);
                }
            }, {
                key: "onTabClickChanged",
                value: function(e) {
                    var t = e.currentTarget,
                        i = this._tabs.indexOf(t);
                    if (-1 !== i) {
                        var n = this._tabComps[i];
                        this._onTabClick && this._onTabClick(n.tabKey), this.updateSelection(n.tabKey);
                    }
                }
            }, {
                key: "onDestroy",
                value: function() {
                    this._parentModel && this._parentModel.off(this.modelProperty, this.onModelTabKeyChanged, this),
                        this._tabComps = void 0, this._tabs = void 0, this._onTabClick = void 0;
                }
            }]), YLTabGroup;
        }(),
        Le = function(e) {
            function YLRebornRTView() {
                return _classCallCheck(this, YLRebornRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLRebornRTView).apply(this, arguments));
            }
            return _inherits(YLRebornRTView, R), _createClass(YLRebornRTView, [{
                key: "onAwake",
                value: function() {
                    this._btnVideo.visible = !tt.config.isVerify;
                }
            }, {
                key: "onEnable",
                value: function() {
                    Laya.timer.once(1e4, this, this.onTimer2Skip);
                }
            }, {
                key: "onDisable",
                value: function() {
                    Laya.timer.clear(this, this.onTimer2Skip);
                }
            }, {
                key: "onTimer2Skip",
                value: function() {
                    this._controller.skipReborn(!0);
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnVideo:
                            Laya.timer.clear(this, this.onTimer2Skip), this._controller.watchVideo2Reborn();
                            break;

                        case this._btnSkip:
                            Laya.timer.clear(this, this.onTimer2Skip), this._controller.skipReborn(!1);
                    }
                }
            }]), YLRebornRTView;
        }(),
        Re = function(e) {
            function YLADGameList() {
                var e;
                return _classCallCheck(this, YLADGameList), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameList).apply(this, arguments)))._controller = W.controller,
                    e._model = W.model, e.category = 0, e.rowArea = 3, e.hangDurationMS = 1e3, e.tweenDurationMSPerRaw = 4e3,
                    e.isAutoClickOneAppOnShow = !1, e._datas = [], e._bottomItemRelatedRowIndex = 0,
                    e._hasRandomClickApp = !1, e;
            }
            return _inherits(YLADGameList, Laya.Script), _createClass(YLADGameList, [{
                key: "onAwake",
                value: function() {
                    this._ownerList = this.owner, this._ownerList.vScrollBarSkin = "", this._ownerList.renderHandler = new Laya.Handler(this, this.updateItem);
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.clearMyTimers(), tt.data.on("appListDic", this.onAppListDic, this, !0), tt.data.activeAdNum++;
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function() {
                    var e;
                    if (this.isAutoClickOneAppOnShow && !this._hasRandomClickApp && (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.comple_derive)) {
                        var t = this._ownerList.dataSource || [];
                        t.length && (this._hasRandomClickApp = !0, this._controller.gotoApp(h.randomOne(t)));
                    }
                }
            }, {
                key: "onDisable",
                value: function() {
                    tt.data.off("appListDic", this.onAppListDic, this), this.clearMyTimers(), tt.data.activeAdNum--,
                        this._hasRandomClickApp = !1;
                }
            }, {
                key: "clearMyTimers",
                value: function() {
                    Laya.timer.clear(this, this.doTween2Top), Laya.timer.clear(this, this.doTween2Bottom),
                        Laya.timer.clear(this, this.checkAutoScroll);
                }
            }, {
                key: "onMouseDown",
                value: function() {
                    this.clearMyTimers();
                }
            }, {
                key: "onStageMouseUp",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(1e3, this, this.checkAutoScroll);
                }
            }, {
                key: "checkAutoScroll",
                value: function() {
                    this.calRow(this._ownerList.startIndex) >= .5 * this._bottomItemRelatedRowIndex ? this.doTween2Top() : this.doTween2Bottom();
                }
            }, {
                key: "updateItem",
                value: function(e) {
                    e.setData(e.dataSource, !1);
                }
            }, {
                key: "onAppListDic",
                value: function() {
                    var e = tt.data.appListDic[this.category] || [];
                    this._datas = this.exchange(e), this._bottomItemRelatedRowIndex = this.calRow(this._datas.length - 1) - this.rowArea + 2,
                        this._ownerList.dataSource = e, this.tween2Bottom(), this.try2AutoClickOneApp();
                }
            }, {
                key: "exchange",
                value: function(e) {
                    if (0 == e.length) return [];
                    for (var t = 0; t < e.length / 2 - 1; ++t) {
                        var n = e[t],
                            a = Math.floor(i.randomBetween(e.length / 2 - 1, e.length));
                        n = e[t], e[t] = e[a], e[a] = n;
                    }
                    for (; !e[0];) e.shift();
                    return e;
                }
            }, {
                key: "tween2Bottom",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(this.hangDurationMS, this, this.doTween2Bottom);
                }
            }, {
                key: "doTween2Bottom",
                value: function() {
                    var e = this._bottomItemRelatedRowIndex * this.rowArea;
                    this._ownerList.tweenTo(e, this.calAutoScrollDurationMS(this._bottomItemRelatedRowIndex), new Laya.Handler(this, this.tween2Top));
                }
            }, {
                key: "tween2Top",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(this.hangDurationMS, this, this.doTween2Top);
                }
            }, {
                key: "doTween2Top",
                value: function() {
                    var e = this.calRow(0);
                    this._ownerList.tweenTo(0, this.calAutoScrollDurationMS(e), new Laya.Handler(this, this.tween2Bottom));
                }
            }, {
                key: "calAutoScrollDurationMS",
                value: function(e) {
                    var t = this.calRow(this._ownerList.startIndex);
                    return (Math.abs(t - e) || 1) * this.tweenDurationMSPerRaw;
                }
            }, {
                key: "calRow",
                value: function(e) {
                    return e / this._ownerList.repeatX >> 0;
                }
            }, {
                key: "needAutoScroll",
                get: function() {
                    return this._datas.length > this._ownerList.repeatX * this.rowArea;
                }
            }]), YLADGameList;
        }(),
        Pe = function(e) {
            function YLResultRTView() {
                return _classCallCheck(this, YLResultRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLResultRTView).apply(this, arguments));
            }
            return _inherits(YLResultRTView, R), _createClass(YLResultRTView, [{
                    key: "onBtnClick",
                    value: function(e) {
                        switch (e.currentTarget) {
                            case this._btnHome:
                                console.log("_btnHome");
                                this._controller.try2SystemApp();
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                                break;

                            case this._btnPlay:
                                console.log("_btnPlay");
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                            case this._btnPlayVerify:
                                console.log("_btnPlayVerify");
                                this._controller.try2SystemApp();
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                                break;

                            case this._btnFight:
                                C.shareFriend(2);
                                break;

                            case this._btnContinue:
                                platform.getInstance().showInterstitial(() => {
                                    this._controller.submitScore();
                                    this._controller.settlementGold();
                                    this._controller.try2SystemApp();
                                });
                                setTimeout(()=>{
                                    ShowInter();
                                }, 500);
                                break;
                            case this._btnShiBei:

                                platform.getInstance().showReward(() => {

                                    if (window.gameResult == false) {
                                        Tt.instance._mapIndex += 1;
                                        Laya.LocalStorage.setItem("Plug-Head-Level", Tt.instance._mapIndex);
                                        console.log("mapIndexmapIndexmapIndex " + Tt.instance._mapIndex);
                                    } else {
                                        //存钱
                                        this._controller.submitScore();
                                        this._controller.settlementShiBeieiGold();
                                    }

                                    this._controller.try2SystemApp();
                                })
                                break;

                        }
                    }
                }, {
                    key: "show",
                    value: function() {
                        if (window.gameResult == true) {
                            this.gameResultImage.skin = "sdk_youling/lite/pic/victory.png";
                            C.playSoundEffect(tt.config.sound.success);
                        } else {
                            this._btnShiBei.getChildAt(0).texture = window.isRussian ?
                            "sdk_youling/common/pic_wx/bth-yellow-Skip_ru.png" : 
                            "sdk_youling/common/pic_wx/bth-yellow-Skip.png";
                            this.gameResultImage.skin = "sdk_youling/lite/pic/lose.png";
                            C.playSoundEffect(tt.config.sound.fail);
                        }
                        this.isShowing || console.log("YLResultRTView显示"), _get(_getPrototypeOf(YLResultRTView.prototype), "show", this).call(this);
                    }
                }, {
                    key: "onShowComplete",
                    value: function() {
                        console.log("YLResultRTView显示完毕"), _get(_getPrototypeOf(YLResultRTView.prototype), "onShowComplete", this).call(this);
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isShowing && console.log("YLResultRTView隐藏"), _get(_getPrototypeOf(YLResultRTView.prototype), "hide", this).call(this);
                    }
                }, {
                    key: "onHideComplete",
                    value: function() {
                        console.log("YLResultRTView隐藏完毕"), _get(_getPrototypeOf(YLResultRTView.prototype), "onHideComplete", this).call(this);
                    }
                }, {
                    key: "onEnable",
                    value: function() {
                        window.scrollList && (window.scrollList.visible = true);
                        Laya.timer.once(1500, this, function() {
                            g.showInterstitialAd();
                        });
                        var e = tt.config.score2Gold(tt.data.curScore);
                        this._fontScore.value = e.toString(),


                            _get(_getPrototypeOf(YLResultRTView.prototype), "onEnable", this).call(this), this._spTop.visible = !tt.config.noGold;
                    }
                }, {
                    key: "onDisable",
                    value: function() {
                        window.scrollList && (window.scrollList.visible = false);
                    }
                }

            ]), YLResultRTView;
        }(),
        Ae = function(e) {
            function YLPlayerHeadRTGrid() {
                var e;
                return _classCallCheck(this, YLPlayerHeadRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLPlayerHeadRTGrid).apply(this, arguments)))._isShowing = void 0,
                    e;
            }
            return _inherits(YLPlayerHeadRTGrid, Laya.Sprite), _createClass(YLPlayerHeadRTGrid, [{
                key: "onAwake",
                value: function() {
                    var e = this;
                    this._aniSpark = this.getChildByName("aniSpark");
                    var t = this.getChildByName("spHeadParent");
                    this._spHead = t.getChildByName("spHead"), this._aniSpark.on(Laya.Event.COMPLETE, void 0, function() {
                        return e._aniSpark.visible = !1;
                    });
                }
            }, {
                key: "isShowing",
                set: function(e) {
                    this._isShowing !== e && (this._isShowing = e, this.visible = e, e ? (this._aniSpark.visible = !0,
                        this._aniSpark.play(0, !1)) : this._aniSpark.stop());
                },
                get: function() {
                    return this._isShowing;
                }
            }, {
                key: "headUrl",
                get: function() {
                    return this._headUrl;
                },
                set: function(e) {
                    this._headUrl = e, e && this._spHead.loadImage(e);
                }
            }]), YLPlayerHeadRTGrid;
        }(),
        Ie = function(e) {
            function YLSearchPlayerRTView() {
                var e;
                return _classCallCheck(this, YLSearchPlayerRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSearchPlayerRTView).apply(this, arguments)))._tweeningProgress = {
                        value: 0
                    }, e._isSearching = !1, e._grids = [], e.DURATION_MS = 3e3, e.MAX = tt.config.numSearchPlayer,
                    e;
            }
            return _inherits(YLSearchPlayerRTView, R), _createClass(YLSearchPlayerRTView, [{
                key: "onAwake",
                value: function() {
                    this._grids = h.getChildrenByNameSection(this._spView, "head", 0, Ae, !0);
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e = this;
                    this.reset(), this._isSearching = !0, this._grids.forEach(function(t, i) {
                        t.headUrl = e._model.playerHeads[i], t.isShowing = !1;
                    }), Laya.Tween.to(this._tweeningProgress, {
                        value: this.MAX,
                        update: Laya.Handler.create(this, this.onTweenProgress, void 0, !1)
                    }, this.DURATION_MS, void 0, Laya.Handler.create(this, this.onSearchComplete));
                }
            }, {
                key: "onTweenProgress",
                value: function() {
                    var e = this._tweeningProgress.value;
                    this._progress.value = e / this.MAX;
                    var t = (e >> 0) - 1;
                    t > 0 && t >= this._grids.length || (this._model.curSearchPlayerIndex = t + 1, this._grids.forEach(function(e, i) {
                        var n = e.isShowing,
                            a = i <= t;
                        if (e.isShowing = a, n !== a) {
                            var o = {
                                index: i,
                                headUrl: e.headUrl
                            };
                            C.vibrate(!0), G.emit(E.S2G_PLAYER_SEARCHED, o);
                        }
                    }));
                }
            }, {
                key: "onSearchComplete",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee64() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this._tweeningProgress.value = this.MAX, this.onTweenProgress(), e.next = 4,
                                        k.sleep(1e3);

                                case 4:
                                    this._isSearching = !1, this.onCloseClick();

                                case 6:
                                case "end":
                                    return e.stop();
                            }
                        }, _callee64, this);
                    }));
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.reset();
                }
            }, {
                key: "reset",
                value: function() {
                    this._isSearching = !1, Laya.Tween.clearAll(this._tweeningProgress), this._tweeningProgress.value = 0;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._isSearching || this._controller.try2ShowNewbie();
                }
            }]), YLSearchPlayerRTView;
        }(),
        xe = function(e) {
            function YLSearchVSPlayerRTView() {
                return _classCallCheck(this, YLSearchVSPlayerRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSearchVSPlayerRTView).apply(this, arguments));
            }
            return _inherits(YLSearchVSPlayerRTView, R), _createClass(YLSearchVSPlayerRTView, [{
                key: "onAwake",
                value: function() {
                    this._spLeftPane.setTweenInfos(-375, -99), this._spRightPane.setTweenInfos(375, -69);
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e = tt.data.userInfo || {},
                        t = e.user_nickname,
                        i = e.avatar;
                    this._spLeftPane.setPlayerInfo(i, t, !0);
                    var n = this._model,
                        a = n.playerHeads,
                        o = n.playerNames;
                    this._spRightPane.setPlayerInfo(h.randomOne(a), h.randomOne(o), !1), this.tween2Show(),
                        this._spLeftPane.tween2Show(), this._spRightPane.tween2Show();
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.reset();
                }
            }, {
                key: "reset",
                value: function() {
                    var e;
                    Laya.timer.clear(this, this.beginTweenPiPei), Laya.timer.clear(this, this.tween2Hide),
                        Laya.Tween.clearAll(this._imgDuiZhan), Laya.Tween.clearAll(this._spPiPei), null === (e = this._tlPiPeiYoyo) || void 0 === e || e.destroy(),
                        this._tlPiPeiYoyo = void 0, this._spModal && (Laya.Tween.clearAll(this._spModal),
                            this._spModal.alpha = this._modalOrigAlpha);
                }
            }, {
                key: "tween2Show",
                value: function() {
                    this.reset(), this._imgDuiZhan.scale(2, 2), this._imgDuiZhan.alpha = 0, this._spPiPei.alpha = 0,
                        Laya.Tween.to(this._imgDuiZhan, {
                            scaleX: 1,
                            scaleY: 1,
                            alpha: 1
                        }, 300, Laya.Ease.expoIn, void 0, 200), Laya.timer.once(200, this, this.beginTweenPiPei),
                        Laya.timer.once(2e3, this, this.tween2Hide);
                }
            }, {
                key: "tween2Hide",
                value: function() {
                    this.reset(), this._spPiPei.alpha = 1, Laya.Tween.to(this._spModal, {
                        alpha: 0
                    }, 500, Laya.Ease.expoOut, Laya.Handler.create(this, this.onAllHideComplete)), Laya.Tween.to(this._spPiPei, {
                        alpha: 0
                    }, 300, Laya.Ease.expoOut), Laya.Tween.to(this._imgDuiZhan, {
                        alpha: 0,
                        scale: .1
                    }, 200, Laya.Ease.expoOut), this._spLeftPane.tween2Hide(), this._spRightPane.tween2Hide();
                }
            }, {
                key: "onAllHideComplete",
                value: function() {
                    this._controller.try2ShowNewbie();
                }
            }, {
                key: "beginTweenPiPei",
                value: function() {
                    var e = new Laya.TimeLine();
                    e.to(this._spPiPei, {
                        alpha: 1
                    }, 500, Laya.Ease.sineIn), e.to(this._spPiPei, {
                        alpha: 0
                    }, 500, Laya.Ease.sineOut), e.play(void 0, !0), this._tlPiPeiYoyo = e;
                }
            }]), YLSearchVSPlayerRTView;
        }(),
        Te = function(e) {
            function YLVSPlayerRTPane() {
                var e;
                return _classCallCheck(this, YLVSPlayerRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLVSPlayerRTPane).apply(this, arguments)))._headUrl = "",
                    e._name = "", e;
            }
            return _inherits(YLVSPlayerRTPane, Laya.Sprite), _createClass(YLVSPlayerRTPane, [{
                key: "setPlayerInfo",
                value: function(e, t, i) {
                    this._headUrl = e, this._name = t, this._isMe = i, this._head.headUrl = e, this._spName.visible = !!t,
                        t && (this._txtName.text = r.truncate(t, 7, ".."));
                }
            }, {
                key: "onAwake",
                value: function() {
                    this._initPos = {
                            x: this.x,
                            y: this.y
                        }, this._spPlayer = this.getChildByName("spPlayer"), this._spName = this._spPlayer.getChildByName("spName"),
                        this._txtName = this._spName.getChildByName("txtName"), this._head = this._spPlayer.getChildByName("spHead");
                }
            }, {
                key: "reset",
                value: function() {
                    var e;
                    Laya.timer.clear(this, this.onHit), null === (e = this._tlAppear) || void 0 === e || e.destroy(),
                        this._tlAppear = void 0, Laya.Tween.clearAll(this);
                }
            }, {
                key: "setTweenInfos",
                value: function(e, t) {
                    this._toPos = {
                        x: e,
                        y: t
                    };
                }
            }, {
                key: "tween2Hide",
                value: function() {
                    this.reset(), Laya.Tween.to(this, {
                        x: this._initPos.x
                    }, 200, Laya.Ease.expoOut);
                }
            }, {
                key: "tween2Show",
                value: function() {
                    this.reset(), this.x = this._initPos.x, this.y = this._initPos.y;
                    var e = new Laya.TimeLine();
                    Laya.timer.once(200, this, this.onHit), e.to(this, {
                        x: this._toPos.x
                    }, 200, Laya.Ease.expoIn), e.to(this, {
                        y: this._toPos.y
                    }, 100, void 0, 200), e.play();
                }
            }, {
                key: "onHit",
                value: function() {
                    if (!this._isMe) {
                        C.vibrate(!1);
                        var e = {
                            headUrl: this._headUrl,
                            index: 0,
                            name: this._name
                        };
                        G.emit(E.S2G_PLAYER_SEARCHED, e);
                    }
                }
            }]), YLVSPlayerRTPane;
        }(),
        Be = function(e) {
            function YLSignRewardRTView() {
                var e;
                return _classCallCheck(this, YLSignRewardRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSignRewardRTView).apply(this, arguments))).reward = [],
                    e;
            }
            return _inherits(YLSignRewardRTView, R), _createClass(YLSignRewardRTView, [{
                key: "onAwake",
                value: function() {
                    this.reward = [this._gold, this._skin, this._gold2];
                }
            }, {
                key: "onEnable",
                value: function() {
                    for (var e, t = 0; t < this.reward.length; t++) this.reward[t].visible = !1;
                    this._btnSkin.visible = this._controller.hasSignIn && 0 == tt.data.signInCount && -1 == this._model.singinReward.reward.indexOf("skin") && 0 != this._controller.signRandomeSkin(),
                        console.log("this._controller.specialReward()", this._controller.specialReward()),
                        this._btnGetRaffle.visible = 1 == this._controller.specialReward().prop_type && !this._controller.isGetSpecial(this._controller.specialReward()) && 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.sign_special),
                        this._raffleNum.text = "抽奖券x" + this._controller.specialReward().prop_quantity,
                        this.initUI(), Laya.timer.loop(50, this, this.turnLight), this._controller.initSignReward(),
                        this.uiPosition(), this._chooseReward.visible = this._btnSkin.visible && this._btnGetRaffle.visible;
                }
            }, {
                key: "initUI",
                value: function() {
                    var e = this._model.singinReward;
                    if (0 != (null == e ? void 0 : e.reward.length)) {
                        var t = this._model.isSignInVideoCheck;
                        if (e.gold && (this.goldNum.value = "x" + e.gold * (t ? e.fold : 1), this.goldNum2.value = "x" + e.gold * (t ? e.fold : 1)),
                            2 == e.reward.length && (this._skin.visible = !0), 2 == e.reward.length) this._skin.skin = e.skin,
                            this._skin.visible = !0, this._gold2.visible = !0;
                        else switch (e.reward[0]) {
                            case "skin":
                                this._skin.visible = !0, this._skin.skin = e.skin;
                                break;

                            case "gold":
                                this._gold.visible = !0;
                        }
                    }
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnGetRaffle:
                            this._controller.specialSign(this._controller.specialReward()), this._model.isSignRewardShowing = !1;
                            break;

                        case this._btnSkin:
                            this.buySkin(), this.onCloseClick();
                    }
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isSignRewardShowing = !1, this.light.rotation = 0, Laya.timer.clear(this, this.turnLight);
                }
            }, {
                key: "turnLight",
                value: function() {
                    this.light.rotation += 2;
                }
            }, {
                key: "uiPosition",
                value: function() {
                    this._btnSkin.visible && this._btnGetRaffle.visible ? (this._btnSkin.x = -120, this._btnGetRaffle.x = 120) : !this._btnSkin.visible && this._btnGetRaffle.visible ? this._btnGetRaffle.x = 0 : this._btnSkin.visible && !this._btnGetRaffle.visible && (this._btnSkin.x = 0);
                }
            }, {
                key: "buySkin",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee65() {
                        var e, t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, g.showVideo(p.Sign);

                                case 2:
                                    1 !== (e = i.sent) && -3 !== e || (t = this._controller.signRandomeSkin(), this._model.singinReward.skin = t.previewPath,
                                        this._controller.noGoldBuySkin(t), this._model.isSignSkinRewardShowing = !0);

                                case 4:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee65, this);
                    }));
                }
            }]), YLSignRewardRTView;
        }(),
        Ve = function(e) {
            function YLSignInSkinRewardRTView() {
                return _classCallCheck(this, YLSignInSkinRewardRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSignInSkinRewardRTView).apply(this, arguments));
            }
            return _inherits(YLSignInSkinRewardRTView, R), _createClass(YLSignInSkinRewardRTView, [{
                key: "onEnable",
                value: function() {
                    var e;
                    this._raffleNum.text = "抽奖券x" + this._controller.specialReward().prop_quantity,
                        Laya.timer.loop(50, this, this.turnLight), this._skin.skin = this._model.singinReward.skin,
                        this._btnGetRaffle.visible = 1 == this._controller.specialReward().prop_type && !this._controller.isGetSpecial(this._controller.specialReward()) && 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.sign_special),
                        this._controller.initSignReward();
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isSignSkinRewardShowing = !1, Laya.timer.clear(this, this.turnLight);
                }
            }, {
                key: "turnLight",
                value: function() {
                    this.light.rotation += 2;
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnGetRaffle:
                            this._controller.specialSign(this._controller.specialReward()), this._model.isSignSkinRewardShowing = !1;
                    }
                }
            }]), YLSignInSkinRewardRTView;
        }(),
        Oe = function(e) {
            function YLSiginSkinRTView() {
                return _classCallCheck(this, YLSiginSkinRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLSiginSkinRTView).apply(this, arguments));
            }
            return _inherits(YLSiginSkinRTView, R), _createClass(YLSiginSkinRTView, [{
                key: "onEnable",
                value: function() {
                    this.singinSkin = this._controller.signRandomeSkin(), this.award.skin = this.singinSkin.previewPath,
                        Laya.timer.loop(50, this, this.turnLight);
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnBuySkin:
                            this.signBuySkin();
                            break;

                        case this._btnBack:
                            Laya.timer.clear(this, this.turnLight), this._model.isSignSkinShowing = !1;
                    }
                }
            }, {
                key: "signBuySkin",
                value: function() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee66() {
                        var e, t;
                        return regeneratorRuntime.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2, g.showVideo(p.Sign);

                                case 2:
                                    1 !== (e = i.sent) && -3 !== e || (this._model.isSignSkinShowing = !1, this._model.singinReward.skin = this.singinSkin.previewPath,
                                        this._controller.noGoldBuySkin(this.singinSkin), Laya.timer.clear(this, this.turnLight),
                                        this._model.isSignSkinRewardShowing = !0, this._controller.hasSignIn || (tt.data.signInDate = tt.data.ActiveConfig.date,
                                            t = tt.data.signInCount % 7, tt.data.allSignInCount++, tt.data.signInCount = (t + 1) % 7));

                                case 4:
                                case "end":
                                    return i.stop();
                            }
                        }, _callee66, this);
                    }));
                }
            }, {
                key: "turnLight",
                value: function() {
                    this._light.rotation += 2;
                }
            }]), YLSiginSkinRTView;
        }(),
        Me = function() {
            function MvcUtils() {
                _classCallCheck(this, MvcUtils);
            }
            return _createClass(MvcUtils, null, [{
                key: "bindVisible",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
                    o = o || e;
                    t.on(i, function() {
                        var o = !!t[i];
                        void 0 !== a && (o = t[i] === a), n && (o = !o), e.visible = o;
                    }, o, !0);
                }
            }, {
                key: "bindFunctionNCall",
                value: function(e, t, i, n) {
                    e.on(t, i, n), i.call(n);
                }
            }]), MvcUtils;
        }(),
        De = function(e) {
            function YLSkinRTView() {
                var e;
                return _classCallCheck(this, YLSkinRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSkinRTView).apply(this, arguments)))._imgAvatarOrgPos = new Laya.Vector2(),
                    e;
            }
            return _inherits(YLSkinRTView, R), _createClass(YLSkinRTView, [{
                key: "onAwake",
                value: function() {
                    this._imgAvatarOrgPos.setValue(this._imgAvatar.x, this._imgAvatar.y), Me.bindVisible(this._spCheckVideoUseSkin, this._model, "isVideoUseSkin"),
                        Me.bindVisible(this._btnTempUse, this._model, "isVideoUseSkin"), Me.bindVisible(this._btnTempNotUse, this._model, "isVideoUseSkin", !0),
                        this._model.on("previewShopItem", this.onPreviewShopItem, this, !0);
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e = tt.data.getCanShowJump("VIEW_Skin");
                    this._spYLADGameBanner0 && (this._spYLADGameBanner0.visible = e);
                }
            }, {
                key: "onPreviewShopItem",
                value: function() {
                    var e = this._model.previewShopItem;
                    e && (this._imgAvatar.skin = e.previewPath, this._imgAvatar.x = this._imgAvatarOrgPos.x + (e.iconOffsetX || 0),
                        this._imgAvatar.y = this._imgAvatarOrgPos.y + (e.iconOffsetY || 0));
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnTempUse:
                        case this._btnVideoUse:

                            console.log("_btnVideoUse");
                            this._controller.watchVideo2UseSkin();
                            break;

                        case this._btnTempNotUse:
                            this._controller.try2ShowSearchPlayer();
                            break;

                        case this._btnCheckBoxVideo:
                            this._model.isVideoUseSkin = !this._model.isVideoUseSkin;
                    }
                }
            }]), YLSkinRTView;
        }(),
        Ee = function(e) {
            function YLStoreRTView() {
                var e;
                return _classCallCheck(this, YLStoreRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLStoreRTView).apply(this, arguments)))._imgAvatarOrgPos = new Laya.Vector2(),
                    e._tweenObj = {
                        value: 0
                    }, e;
            }
            return _inherits(YLStoreRTView, R), _createClass(YLStoreRTView, [{
                key: "onAwake",
                value: function() {
                    var e = tt.config,
                        t = e.isVerify,
                        i = e.storeItems,
                        n = e.storeVideoUnlockGold;
                    this._btnVideoUse.visible = !t, t && (this._btnRandom.x = 0), this._imgAvatarOrgPos.setValue(this._imgAvatar.x, this._imgAvatar.y),
                        this._list.dataSource = i, this._list.renderHandler = new Laya.Handler(this, this.updateItem),
                        this._goldPaneVideo.goldTxt = n.toString(), this._model.on("curSelectedInStore", this.onSelcted, this, !0),
                        this._model.on("storeUnlockResult", this.onStoreUnlockResult, this), tt.data.on("ownStoreItemIds", this.onOwnStoreItemIds, this, !0),
                        Laya.stage.on(Laya.Event.RESIZE, this, this.calListHeight), this._imgBg.once(Laya.Event.LOADED, this, this.onBgLoaded),
                        this._controller.findCurSelectedSkinInStore(), this.onBgLoaded(), this.calListHeight(),
                        this._btnGoLottery.visible = !1;

                }
            }, {
                key: "onBgLoaded",
                value: function() {
                    this._imgBg.height > 0 && Laya.stage.displayHeight > this._imgBg.height && (this._imgBg.height = Laya.stage.displayHeight);
                }
            }, {
                key: "onOwnStoreItemIds",
                value: function() {
                    var e = this._controller.calStoreRandomUnlockGold();
                    e < 0 && (e = 0), this._goldPaneRandom.goldTxt = e.toString();
                }
            }, {
                key: "onStoreUnlockResult",
                value: function() {
                    var e = this,
                        t = this._model.storeUnlockResult;
                    if (t) {
                        var i = this._controller.getStoreItemsCanBuy(),
                            n = i.length;
                        if (1 === n) this._controller.doUnlockStoreItem(t);
                        else {
                            h.remove(i, t.item), h.disturb(i), i.push(t.item), this._tweenObj.value = 0;
                            var a = 4;
                            n > 6 ? a = 2 : n > 3 && (a = 3);
                            for (var s = [], r = 0; r < a; r++) s = s.concat(i);
                            o.isWorldCanClick = !1, Laya.Tween.to(this._tweenObj, {
                                value: 100,
                                update: new Laya.Handler(this, function() {
                                    var t = Math.ceil(e._tweenObj.value) / 100;
                                    e._model.curSelectedInStore = s[s.length * t >> 0];
                                })
                            }, 3e3, Laya.Ease.sineInOut, Laya.Handler.create(void 0, function() {
                                o.isWorldCanClick = !0, e._controller.doUnlockStoreItem(t);
                            }));
                        }
                    }
                    this._btnRandom.visible = 0 != this._controller.getStoreItemsCanBuy().length, this._btnRandom.visible;
                }
            }, {
                key: "calListHeight",
                value: function() {
                    var e = this._spBottomBtns.getComponent(ne),
                        t = parseInt(e.offsetY) - 132,
                        i = this._list.globalToLocal(new Laya.Point(0, Laya.stage.displayHeight + t));
                    // this._list.height = i.y
                    // , this._listBottomDecorator.y = this._list.y + i.y + 4;
                }
            }, {
                key: "onSelcted",
                value: function() {
                    var e = this._model.curSelectedInStore;
                    e && (this._imgAvatar.skin = e.previewPath,
                        this._imgAvatar.x = this._imgAvatarOrgPos.x + (e.iconOffsetX || 0),
                        this._imgAvatar.y = this._imgAvatarOrgPos.y + (e.iconOffsetY || 0),
                        this._btnGoLottery.visible = null != this._controller.getLotteryStoreItem() && e.isLottery,
                        this._btnVideoUse.visible = !e.isLottery, 1 == tt.data.ActiveConfig.lottery ?
                        (this._btnVideoUse.visible = !e.isLottery && !tt.config.isVerify,
                            this._btnRandom.visible = 0 != this._controller.getStoreItemsCanBuy().length && !e.isLottery) :
                        (this._btnVideoUse.visible = !tt.config.isVerify,
                            this._btnRandom.visible = 0 != this._controller.getStoreItemsCanBuy().length));
                }
            }, {
                key: "updateItem",
                value: function(e) {
                    e.data = e.dataSource;
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnRandom:
                            this._controller.randomUnlockStoreItem();
                            break;

                        case this._btnVideoUse:
                            console.log("_btnVideoUse");
                            platform.getInstance().showReward(() => {
                                this._controller.watchVideo2GetGold();
                            })
                            break;

                        case this._btnGoLottery:
                            this.onCloseClick(), this._model.isLotteryShowing = !0;
                    }
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._controller.closeStoreTry2UseSkin();
                }
            }]), YLStoreRTView;
        }(),
        Ye = function(e) {
            function YLStoreRTGrid() {
                var e;
                return _classCallCheck(this, YLStoreRTGrid), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLStoreRTGrid).apply(this, arguments)))._isSelceted = !1,
                    e;
            }
            return _inherits(YLStoreRTGrid, Laya.Sprite), _createClass(YLStoreRTGrid, [{
                key: "onAwake",
                value: function() {
                    this._model = W.model, this._controller = W.controller;
                    var e = this.getChildByName("spView");
                    this._spFrameNormal = e.getChildByName("spFrameNormal"), this._spFrameSelected = e.getChildByName("spFrameSelected"),
                        this._imgIcon = e.getChildByName("imgIcon"), this._imgIconOrgPos = new Laya.Point(this._imgIcon.x, this._imgIcon.y),
                        this._spLock = e.getChildByName("spLock"), this.addComponent(b).zoomTarget = e,
                        a.setVisibleAndAlpha(this._spFrameSelected, !1), a.addClickListener(this, this.onGridClick, this),
                        this._model.on("curSelectedInStore", this.onSelectedChanged, this), tt.data.on("ownStoreItemIds", this.onOwnStoreItemIds, this);
                }
            }, {
                key: "onOwnStoreItemIds",
                value: function() {
                    var e;
                    this._spLock.visible = !!this.data && !this._controller.isStoreItemBought(this.data),
                        1 == (null === (e = this.data) || void 0 === e ? void 0 : e.isLottery) && 1 == tt.data.ActiveConfig.lottery && (this._spLock.skin = "sdk_youling/common/pic_wx/icon_zp.png");
                }
            }, {
                key: "onGridClick",
                value: function() {
                    this._model.curSelectedInStore = this._data;
                }
            }, {
                key: "onSelectedChanged",
                value: function() {
                    var e = this,
                        t = !!this._data && this._model.curSelectedInStore === this._data;
                    t !== this._isSelceted && (this._isSelceted = t, this._spFrameNormal.visible = !0,
                        this._spFrameSelected.visible = !0, Laya.Tween.to(this._spFrameSelected, {
                            alpha: t ? 1 : 0
                        }, 200, void 0, Laya.Handler.create(void 0, function() {
                            e._spFrameSelected.visible = e._isSelceted, e._spFrameNormal.visible = !e._isSelceted;
                        }), void 0, !0));
                }
            }, {
                key: "data",
                get: function() {
                    return this._data;
                },
                set: function(e) {
                    this._data = e, e && (this._imgIcon.skin = e.previewPath, this._imgIcon.x = this._imgIconOrgPos.x + (e.gridOffsetX || 0),
                            this._imgIcon.y = this._imgIconOrgPos.y + (e.gridOffsetY || 0), this.onOwnStoreItemIds()),
                        this.onSelectedChanged();
                }
            }]), YLStoreRTGrid;
        }(),
        Ge = function(e) {
            function YLSystemAppListRTView() {
                var e;
                return _classCallCheck(this, YLSystemAppListRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSystemAppListRTView).apply(this, arguments)))._hasRandomClickApp = !1,
                    e.category = 5, e._listScrollY = 0, e.tweenDurationMSPerRaw = 1e3, e._datas = [],
                    e._bottomItemRelatedRowIndex = 0, e._hangDurationMS = 2e3, e._rowArea = 10, e;
            }
            return _inherits(YLSystemAppListRTView, R), _createClass(YLSystemAppListRTView, [{
                key: "onCloseClick",
                value: function() {
                    this._controller.try2ShowBackHome();
                }
            }, {
                key: "onAwake",
                value: function() {
                    this._btnClose.getComponent(b).notZoom = !0, this._list.vScrollBarSkin = "",
                        this._listScrollBar = this._list.scrollBar,
                        this._list.dataSource = [], this._list.renderHandler = new Laya.Handler(this, this.updateItem);
                }
            }, {
                key: "onResize",
                value: function() {
                    var e = Laya.stage.displayHeight - this._list.y;
                    // this._list.height = e,
                    this._rowArea = e / 148 >> 0;
                }
            }, {
                key: "onAppListDic",
                value: function() {
                    var e = tt.data.appListDic[this.category] || [];
                    e.forEach(function(e) {
                            void 0 === e.__isStar && (e.__isStar = Math.random() > .5, e.__pplPlay = i.randomBetween(5e3, 1e5) >> 0);
                        }), this._list.dataSource = e, this._datas = e, this._bottomItemRelatedRowIndex = this.calRow(this._datas.length - 1) - this._rowArea + 2,
                        this.tween2Bottom(), this.try2AutoClickOneApp();
                }
            }, {
                key: "onScrollChanged",
                value: function() {
                    this._listScrollBar && !i.isEqual(this._listScrollY, this._listScrollBar.value) && (this._listScrollY = this._listScrollBar.value,
                        this._spListHeader.y = -this._listScrollY);
                }
            }, {
                key: "onEnable",
                value: function() {
                    tt.data.on("appListDic", this.onAppListDic, this, !0), Laya.stage.on(Laya.Event.RESIZE, this, this.onResize),
                        this._list.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onStageMouseUp),
                        this.onResize();
                }
            }, {
                key: "onDisable",
                value: function() {
                    tt.data.off("appListDic", this.onAppListDic, this), Laya.stage.off(Laya.Event.RESIZE, this, this.onResize),
                        this._list.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onStageMouseUp),
                        this._hasRandomClickApp = !1, this.clearMyTimers();
                }
            }, {
                key: "onMouseDown",
                value: function() {
                    this.clearMyTimers();
                }
            }, {
                key: "onStageMouseUp",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(1e3, this, this.checkAutoScroll);
                }
            }, {
                key: "clearMyTimers",
                value: function() {
                    Laya.timer.clear(this, this.doTween2Top), Laya.timer.clear(this, this.doTween2Bottom),
                        Laya.timer.clear(this, this.checkAutoScroll);
                }
            }, {
                key: "doTween2Bottom",
                value: function() {
                    var e = this._bottomItemRelatedRowIndex;
                    this._list.tweenTo(e, this.calAutoScrollDurationMS(this._bottomItemRelatedRowIndex), new Laya.Handler(this, this.tween2Top));
                }
            }, {
                key: "tween2Bottom",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(this._hangDurationMS, this, this.doTween2Bottom);
                }
            }, {
                key: "tween2Top",
                value: function() {
                    this.needAutoScroll && Laya.timer.once(this._hangDurationMS, this, this.doTween2Top);
                }
            }, {
                key: "doTween2Top",
                value: function() {
                    var e = this.calRow(0);
                    this._list.tweenTo(0, this.calAutoScrollDurationMS(e), new Laya.Handler(this, this.tween2Bottom));
                }
            }, {
                key: "calAutoScrollDurationMS",
                value: function(e) {
                    var t = this.calRow(this._list.startIndex);
                    return (Math.abs(t - e) || 1) * this.tweenDurationMSPerRaw;
                }
            }, {
                key: "checkAutoScroll",
                value: function() {
                    this.calRow(this._list.startIndex) >= .5 * this._bottomItemRelatedRowIndex ? this.doTween2Top() : this.doTween2Bottom();
                }
            }, {
                key: "calRow",
                value: function(e) {
                    return e / this._list.repeatX >> 0;
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function() {
                    var e;
                    if (!this._hasRandomClickApp && (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.push_video)) {
                        var t = this._list.dataSource || [];
                        t.length && (this._hasRandomClickApp = !0, this._controller.gotoApp(h.randomOne(t)));
                    }
                }
            }, {
                key: "updateItem",
                value: function(e, t) {
                    e.data = e.dataSource, e.index = t, e.zOrder = this._datas.length - t;
                }
            }, {
                key: "needAutoScroll",
                get: function() {
                    return this._datas.length > this._list.repeatX * this._rowArea;
                }
            }]), YLSystemAppListRTView;
        }(),
        Ne = function(e) {
            function YLSystemAppListRTItem() {
                var e;
                return _classCallCheck(this, YLSystemAppListRTItem), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSystemAppListRTItem).apply(this, arguments)))._controller = W.controller,
                    e._imgBgs = [], e._index = -1, e;
            }
            return _inherits(YLSystemAppListRTItem, Laya.Sprite), _createClass(YLSystemAppListRTItem, [{
                key: "onAwake",
                value: function() {
                    this._imgBgs = h.getChildrenByNameSection(this, "imgBg", 0, void 0, !0), this._spStar = this.getChildByName("spStar"),
                        this._txtName = this.getChildByName("txtName"), this._txtPpl = this.getChildByName("txtPpl"),
                        this._imgIcon = this.getChildByName("imgIcon"), a.addClickListener(this, this.onGridClick, this);
                }
            }, {
                key: "onGridClick",
                value: function() {
                    this._controller.gotoApp(this._data);
                }
            }, {
                key: "index",
                get: function() {
                    return this._index;
                },
                set: function(e) {
                    if (this._index !== e) {
                        this._index = e;
                        var t = this._imgBgs.length;
                        this._imgBgs.forEach(function(i, n) {
                            return i.visible = e % t === n;
                        });
                    }
                }
            }, {
                key: "data",
                get: function() {
                    return this._data;
                },
                set: function(e) {
                    if (this._data = e, e) {
                        var t = e.__isStar,
                            i = e.__pplPlay,
                            n = e.app_name,
                            a = e.app_img;
                        this._spStar.visible = t, this._txtName.text = n, this._txtPpl.text = "".concat(i, "人在玩"),
                            this._imgIcon.skin = a;
                    }
                }
            }]), YLSystemAppListRTItem;
        }(),
        Ue = function(e) {
            function YLTreasureBoxRTView() {
                return _classCallCheck(this, YLTreasureBoxRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLTreasureBoxRTView).apply(this, arguments));
            }
            return _inherits(YLTreasureBoxRTView, R), _createClass(YLTreasureBoxRTView, [{
                key: "onAwake",
                value: function() {
                    this._model.on("percentOnBoxClick", this.onPercent, this), a.addClickListener(this._spHandClick, this.onHandClick, this),
                        a.addClickListener(this._spBottomHandClick, this.onHandClick, this);
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e;
                    (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.box_view_video) && g.showVideo(p.Coerce),
                        this.onPercent(), this._model.boxClickNumber = 0;
                    var t = 2 === this._controller.getBoxClicAdType();
                    this._spHandClick.visible = !t, this.spBottom.visible = t;
                }
            }, {
                key: "onPercent",
                value: function() {
                    this._spProgressPane.percent = this._model.percentOnBoxClick;
                }
            }, {
                key: "onHandClick",
                value: function() {
                    var e = this;
                    this._controller.boxClick(), this._spBox.scale(1.4, 1.4), Laya.timer.once(200, this, function() {
                        e._spBox.scale(1.2, 1.2);
                    });
                }
            }]), YLTreasureBoxRTView;
        }(),
        He = function(e) {
            function YLBackHomeRTView() {
                var e;
                return _classCallCheck(this, YLBackHomeRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLBackHomeRTView).apply(this, arguments)))._clickBtnContinueCount = 0,
                    e;
            }
            return _inherits(YLBackHomeRTView, R), _createClass(YLBackHomeRTView, [{
                key: "onAwake",
                value: function() {
                    this._isClickModalClose = !1;
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e;
                    this._clickBtnContinueCount = 0, (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.into_game_video) && g.showVideo(p.Coerce),
                        this.height = Laya.stage.height, this.width = Laya.stage.width;
                    var t = tt.data.versionConfig;
                    null == t || t.control_ms;
                    this._btnRandomStart.visible = !1, this._btnContinue.visible = !0;
                }
            }, {
                key: "onShowComplete",
                value: function() {
                    _get(_getPrototypeOf(YLBackHomeRTView.prototype), "onShowComplete", this).call(this),
                        tt.data.getCanShowJump("VIEW_BackHome") || (this.onCloseClick(), o.setForceWorldCanClick());
                }
            }, {
                key: "switchBtn",
                value: function() {
                    this._btnRandomStart.visible = !this._btnRandomStart.visible, this._btnContinue.visible = !this._btnContinue.visible;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    tt.data.isOnGame ? this.try2Settlement() : this._controller.try2ShowBeginGame();
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    var t, i;
                    switch (e.currentTarget) {
                        case this._btnRandomStart:
                            this.try2AutoClickOneApp();
                            break;

                        case this._btnContinue:
                            if (this._clickBtnContinueCount++, 1 == this._clickBtnContinueCount) return void this.checkBanner();
                            tt.data.isOnGame ? this.try2Settlement() : 1 == (null === (i = null === (t = tt.data) || void 0 === t ? void 0 : t.versionConfig) || void 0 === i ? void 0 : i.derive_one) ? this.try2AutoClickOneApp() : this._controller.try2ShowBeginGame();
                    }
                }
            }, {
                key: "try2Settlement",
                value: function() {
                    tt.data.isPassGame ? this._controller.try2ShowPass() : this._controller.doGameFail();
                }
            }, {
                key: "checkBanner",
                value: function() {
                    var e = tt.data.versionConfig;
                    if (1 === (null == e ? void 0 : e.delay)) {
                        var t = g.showBanner(0, this._model.curStackView);
                        Laya.timer.once(2e3, this, function() {
                            return g.hideBanner(t);
                        });
                    }
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function() {
                    var e = this._list.dataSource || [];
                    e.length && this._controller.gotoApp(h.randomOne(e));
                }
            }]), YLBackHomeRTView;
        }(),
        je = function(e) {
            function YLBeginGameRTView() {
                var e;
                return _classCallCheck(this, YLBeginGameRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLBeginGameRTView).apply(this, arguments)))._clickBtnContinueCount = 0,
                    e;
            }
            return _inherits(YLBeginGameRTView, R), _createClass(YLBeginGameRTView, [{
                key: "onAwake",
                value: function() {
                    this._isClickModalClose = !1;
                }
            }, {
                key: "onEnable",
                value: function() {
                    var e;
                    this._clickBtnContinueCount = 0, (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.dao2_view_video) && g.showVideo(p.Coerce),
                        this.height = Laya.stage.height, this.width = Laya.stage.width;
                    var t = tt.data.versionConfig;
                    null == t || t.control_ms;
                    this._btnRandomStart.visible = !1, this._btnContinue.visible = !0, this._isShowbanner = !1,
                        this._model.on("gameListBanner", this.showDelayBanner, this);
                }
            }, {
                key: "onShowComplete",
                value: function() {
                    _get(_getPrototypeOf(YLBeginGameRTView.prototype), "onShowComplete", this).call(this),
                        tt.data.getCanShowJump("VIEW_BeginGame") || (this.onCloseClick(), o.setForceWorldCanClick());
                }
            }, {
                key: "showDelayBanner",
                value: function() {
                    var e;
                    1 != (null === (e = tt.data) || void 0 === e ? void 0 : e.versionConfig.derive_one) || this._isShowbanner || (this._isShowbanner = !0,
                        Laya.timer.once(1e3, this, this.showbanner));
                }
            }, {
                key: "showbanner",
                value: function() {
                    g.showBanner(1, this._model.curStackView), Laya.timer.once(1600, this, this.showbanner);
                }
            }, {
                key: "hidebanner",
                value: function() {
                    g.hideBanner();
                }
            }, {
                key: "switchBtn",
                value: function() {
                    this._btnRandomStart.visible = !this._btnRandomStart.visible, this._btnContinue.visible = !this._btnContinue.visible;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    Laya.timer.clear(this, this.showDelayBanner), Laya.timer.clear(this, this.hidebanner),
                        g.hideBanner(), this._controller.try2GotoHome();
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    var t, i;
                    switch (e.currentTarget) {
                        case this._btnBegin:
                            this._controller.try2Replay();
                            break;

                        case this._btnRandomStart:
                            this.try2AutoClickOneApp();
                            break;

                        case this._btnContinue:
                            if (this._clickBtnContinueCount++, 1 == this._clickBtnContinueCount) return void this.checkBanner();
                            1 == (null === (i = null === (t = tt.data) || void 0 === t ? void 0 : t.versionConfig) || void 0 === i ? void 0 : i.derive_two) ? this.try2AutoClickOneApp() : (g.hideBanner(),
                                this._controller.try2GotoHome());
                    }
                }
            }, {
                key: "try2AutoClickOneApp",
                value: function() {
                    var e = this._list.dataSource || [];
                    e.length && this._controller.gotoApp(h.randomOne(e));
                }
            }, {
                key: "checkBanner",
                value: function() {
                    var e = tt.data.versionConfig;
                    if (1 === (null == e ? void 0 : e.delay)) {
                        var t = g.showBanner(0, this._model.curStackView);
                        Laya.timer.once(2e3, this, function() {
                            return g.hideBanner(t);
                        });
                    }
                }
            }]), YLBeginGameRTView;
        }(),
        We = function(e) {
            function YLHomeRTView() {
                var e;
                return _classCallCheck(this, YLHomeRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLHomeRTView).apply(this, arguments))).btns = ["_btnSkin", "_btnRank", "_btnCollect", "_btnShare"],
                    e.stX = -1, e.stY = -1, e;
            }
            return _inherits(YLHomeRTView, R), _createClass(YLHomeRTView, [{
                key: "onDeploy",
                value: function() {
                    var e;
                    this._imgLogo.skin = tt.config.homeLogoUrl, console.log("YLHomeRTView onDeploy ", tt.config.homeLogoUrl),
                        Me.bindVisible(this._spVibrateOn, C, "canVibrate", !1, void 0, this), Me.bindVisible(this._spVibrateOff, C, "canVibrate", !0, void 0, this),
                        true && (this._btnRank.visible = !1,
                            this._btnShare.visible = !1, this._btnCollect.visible = !1, this._btnSignIn.visible = !1,
                            this._btnLottery.visible = !1), _get(_getPrototypeOf(YLHomeRTView.prototype), "onDeploy", this).call(this),
                        tt.data.on("signInCount", this.isShowDot, this, !0), tt.data.on("raffleDate", this.isShowDot, this, !0),
                        tt.data.on("raffleNumber", this.isShowDot2, this, !0), tt.data.on("freeNumber", this.isShowDot2, this, !0),
                        1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.sign_auto_open) && 0 == this._controller.hasSignIn && (this._model.isSignInShowing = !0),
                        this._controller.initLontteryTime(), this.isShowDot(), this.isShowDot2();

                    this._btnSound.getChildAt(1).visible = !window.WebAudioEngine.pause;
                    this._btnSound.getChildAt(2).visible = window.WebAudioEngine.pause;
                }
            }, {
                key: "onEnable",
                value: function() {

                    var e, t, i, n;
                    (null === (e = tt.data.versionConfig) || void 0 === e ? void 0 : e.home_view_video) && g.showVideo(p.Coerce),
                        tt.config.hideButtons.isOpen && this.btnsCentered();
                    var a = tt.data.getCanShowJump("VIEW_Home");
                    this._spYLADGameSquare0 && (this._spYLADGameSquare0.visible = a),
                        this._btnLottery.visible = 1 == (null === (t = tt.data.ActiveConfig) || void 0 === t ? void 0 : t.lottery),
                        this._btnSignIn.visible = 1 == (null === (i = tt.data.ActiveConfig) || void 0 === i ? void 0 : i.sign),
                        console.log("YLSDK.data.ActiveConfig?.lottery", null === (n = tt.data.ActiveConfig) || void 0 === n ? void 0 : n.lottery),
                        g.showCustom(d.HomeLeft), g.showCustom(d.HomeRight);
                    Laya.timer.once(0.4e3, this, () => {
                        window.box_adTwo && (window.box_adTwo.visible = true);
                    })


                }
            }, {
                key: "onDisable",
                value: function() {
                    window.box_adTwo && (window.box_adTwo.visible = false);
                    g.hideCustom(d.HomeLeft), g.hideCustom(d.HomeRight);
                }
            }, {
                key: "btnsCentered",
                value: function() {
                    -1 == this.stX && (this.stX = this._btnSkin.x), -1 == this.stY && (this.stY = this._btnShare.x);
                    for (var e = [], t = 0; t < 4; ++t) tt.config.hideButtons[this.btns[t]] ? this[this.btns[t]].visible = !1 : e.push(this.btns[t]);
                    if (1 == e.length) this[e[0]].x = (this.stX + this.stY) / 2;
                    else if (e.length > 1) {
                        this[e[0]].x = this.stX, this[e[e.length - 1]].x = this.stY;
                        for (var i = 1; i < e.length - 1; ++i) {
                            var n = (this.stY - this.stX) / (e.length - 1);
                            this[e[i]].x = this[e[i - 1]].x + n;
                        }
                    }
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    var t = [this._btnShare];
                    if (!tt.data.isAllSubpackagesLoaded && -1 === t.indexOf(e.currentTarget)) return C.toastMsg("请耐心等待，游戏正在努力加载中");
                    switch (e.currentTarget) {
                        case this._btnSound:
                            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                            this._btnSound.getChildAt(1).visible = !window.WebAudioEngine.pause;
                            this._btnSound.getChildAt(2).visible = window.WebAudioEngine.pause;
                            break;

                        case this._btnVibrate:
                            C.canVibrate = !C.canVibrate;
                            break;

                        case this._btnPlay:
                            platform.getInstance().showInterstitial(() => {
                                Laya.timer.once(0.2e3, this, () => {
                                    window['playerFinish'] = false;
                                    this._controller.try2ShowSkin(!0);
                                })
                            })
                            break;

                        case this._btnRank:
                            this._model.isRankShowing = !0;
                            break;

                        case this._btnSkin:
                            this._model.curStackView = Y.VIEW_Store;
                            break;

                        case this._btnShare:
                            C.shareFriend(1);
                            break;

                        case this._btnCollect:
                            this._model.isFavoriteShowing = !0;
                            break;

                        case this._btnSignIn:
                            this._model.isSignInShowing = !0;
                            break;

                        case this._btnLottery:
                            this._model.isLotteryShowing = !0;
                    }
                }
            }, {
                key: "onDestroy",
                value: function() {
                    C.offAllCaller(this);
                }
            }, {
                key: "isShowDot",
                value: function() {
                    var e;
                    this._controller.hasSignIn && (1 != (null === (e = this._controller.specialReward()) || void 0 === e ? void 0 : e.prop_type) || this._controller.isGetSpecial(this._controller.specialReward())) ? (this._dot.visible = !1,
                        Laya.timer.clear(this, this.shakeSign)) : (this._dot.visible = !0, Laya.timer.loop(1e3, this, this.shakeSign));
                }
            }, {
                key: "shakeSign",
                value: function() {
                    a.tweenShake(this._btnSignIn, null);
                }
            }, {
                key: "isShowDot2",
                value: function() {
                    0 == tt.data.freeNumber && 0 == tt.data.raffleNumber ? (this._dot2.visible = !1,
                        Laya.timer.clear(this, this.shakeLottery)) : (this._dot2.visible = !0, Laya.timer.loop(1e3, this, this.shakeLottery));
                }
            }, {
                key: "shakeLottery",
                value: function() {
                    a.tweenShake(this._btnLottery, null);
                }
            }]), YLHomeRTView;
        }(),
        Fe = function(e) {
            function YLAddGameRTSticker() {
                return _classCallCheck(this, YLAddGameRTSticker), _possibleConstructorReturn(this, _getPrototypeOf(YLAddGameRTSticker).apply(this, arguments));
            }
            return _inherits(YLAddGameRTSticker, Laya.Sprite), _createClass(YLAddGameRTSticker, [{
                key: "onAwake",
                value: function() {
                    this._img = this.getChildByName("img"), tt.config.isHideRd && (this.visible = !1);
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.displayedInStage ? this.onDisplay() : this.once(Laya.Event.DISPLAY, this, this.onDisplay);
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.off(Laya.Event.DISPLAY, this, this.onDisplay), this.reset();
                }
            }, {
                key: "onDisplay",
                value: function() {
                    var e = this.parent.globalToLocal(C.getRightUpFavouriteBtnPos());
                    this.pos(e.x, e.y), this.reset(), this._tl = new Laya.TimeLine(), this._tl.to(this._img, {
                        x: -30
                    }, 400, Laya.Ease.sineIn).to(this._img, {
                        x: 0
                    }, 400, Laya.Ease.sineOut), this._tl.play(void 0, !0);
                }
            }, {
                key: "reset",
                value: function() {
                    var e;
                    null === (e = this._tl) || void 0 === e || e.destroy(), this._tl = void 0, this._img.pos(0, 0);
                }
            }]), YLAddGameRTSticker;
        }(),
        Xe = function(e) {
            function YLMoreGameRTView() {
                return _classCallCheck(this, YLMoreGameRTView), _possibleConstructorReturn(this, _getPrototypeOf(YLMoreGameRTView).apply(this, arguments));
            }
            return _inherits(YLMoreGameRTView, R), _createClass(YLMoreGameRTView, [{
                key: "onCloseClick",
                value: function() {
                    this._model.isMoreGameShowing = !1;
                }
            }]), YLMoreGameRTView;
        }(),
        ze = function(e) {
            function YLSignInRTView() {
                var e;
                return _classCallCheck(this, YLSignInRTView), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSignInRTView).apply(this, arguments)))._items = [],
                    e._sprcialItem = [], e;
            }
            return _inherits(YLSignInRTView, R), _createClass(YLSignInRTView, [{
                key: "onAwake",
                value: function() {
                    var e;
                    this.special.visible = 1 == (null === (e = tt.data.ActiveConfig) || void 0 === e ? void 0 : e.sign_special),
                        this._isClickModalClose = !1, this._controller.randomFold(), this._items = h.getChildrenByNameSection(this, "_rewardItem", 0),
                        this._items.forEach(function(e, t) {
                            return e.dataIndex = t;
                        }), this._sprcialItem = h.getChildrenByNameSection(this, "_specialItem", 0), this._sprcialItem.forEach(function(e, t) {
                            return e.dataIndex = t;
                        }), tt.data.on("signInDate", this.onSignInDate, this, !0), this._controller.hasSignIn || 0 != tt.data.signInCount || (console.log("111"),
                            tt.data.raffleDate = []), this._checkboxVideo.deploy("isSignInVideoCheck", "".concat(this._controller.cookTimesNum2String(this._model.singinReward.fold)));
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._controller.checkCurSignInSelectedItem(), this.onSignInDate(), console.log("this._model.isAlreadyShowSkinView", this._model.isAlreadyShowSkinView);
                }
            }, {
                key: "onSignInDate",
                value: function() {
                    var e = this._controller.hasSignIn;
                    this._btnGet.visible = !e, this._btnGot.visible = e;
                }
            }, {
                key: "onCloseClick",
                value: function() {
                    this._model.isSignInShowing = !1;
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._btnGet:
                            this._model.singinReward.fold == tt.data.ActiveConfig.sign_random_max ? tt.data.signInVideoCount = 0 : tt.data.signInVideoCount++,
                                this._model.singinReward.reward = [];
                            var t = tt.data.signInCount % 7;
                            2 == this._controller.isFifstSign()[t].prop_type ? 0 != this._controller.signRandomeSkin() ? this._model.isSignSkinShowing = !0 : (tt.data.signInDate = tt.data.ActiveConfig.date,
                                tt.data.allSignInCount++, tt.data.signInCount = (t + 1) % 7, C.toastMsg("皮肤已全部解锁~")) : this._controller.signIn();
                            break;

                        case this._btnGot:
                            C.toastMsg("今天已领取，请明天继续操作~");
                            break;

                        case this._btnCheckBoxVideo:
                            this._model.isSignInVideoCheck = !this._model.isSignInVideoCheck;
                    }
                }
            }]), YLSignInRTView;
        }(),
        Ke = function(e) {
            function YLSignInRewardRTItem() {
                var e;
                return _classCallCheck(this, YLSignInRewardRTItem), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSignInRewardRTItem).apply(this, arguments)))._dataIndex = -1,
                    e;
            }
            return _inherits(YLSignInRewardRTItem, Laya.Sprite), _createClass(YLSignInRewardRTItem, [{
                key: "onAwake",
                value: function() {
                    this._model = W.model, this._controller = W.controller;
                    var e = this.getChildByName("btnView");
                    this._imgSelected = e.getChildByName("imgSelected"), this._txtIndex = e.getChildByName("txtIndex"),
                        this._txtNum = e.getChildByName("txtNum"), this._spGot = e.getChildByName("spGot"),
                        this.spIcon = e.getChildByName("spIcon"), a.addClickListener(e, this.onItemClick, this),
                        this._model.on("signInRewardSelected", this.onSelectionChanged, this, !0), this._model.on("isSignInVideoCheck", this.onSignInVideoCheck, this, !0),
                        tt.data.on("signInCount", this.onSignInCount, this, !0), a.tweenAlpha(this._imgSelected);
                }
            }, {
                key: "onSignInVideoCheck",
                value: function() {
                    if (this._data) {
                        var e = this._model.isSignInVideoCheck;
                        1 == this._data.prop_type ? this._txtNum.text = "x" + this._data.prop_quantity * (e ? this._model.singinReward.fold : 1) : this._txtNum.text = "x1";
                    }
                }
            }, {
                key: "onSignInCount",
                value: function() {
                    var e = tt.data.signInCount;
                    this._controller.hasSignIn && 0 === e && (e = 8), this._spGot.visible = e > this._dataIndex;
                }
            }, {
                key: "onSelectionChanged",
                value: function() {
                    var e = this._model.signInRewardSelected;
                    this._imgSelected.visible = !!e && e === this._data.prop_quantity;
                }
            }, {
                key: "onItemClick",
                value: function() {}
            }, {
                key: "dataIndex",
                get: function() {
                    return this._dataIndex;
                },
                set: function(e) {
                    this._dataIndex = e, this._data = this._controller.isFifstSign()[e], this.visible = !!this._data,
                        this.onSelectionChanged(), this._data && (this._txtIndex.text = (e + 1).toString(),
                            2 == this._data.prop_type && 6 != e ? (console.log(e), this.spIcon.skin = "sdk_youling/lite/pic/icon_pf.png") : this.spIcon.skin = "sdk_youling/lite/pic/icon-jinbi-" + [e + 1] + ".png",
                            this.onSignInCount(), this.onSignInVideoCheck());
                }
            }]), YLSignInRewardRTItem;
        }(),
        qe = function(e) {
            function YLMainCheckBoxRTPane() {
                var e;
                return _classCallCheck(this, YLMainCheckBoxRTPane), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLMainCheckBoxRTPane).apply(this, arguments)))._model = W.model,
                    e;
            }
            return _inherits(YLMainCheckBoxRTPane, Laya.Sprite), _createClass(YLMainCheckBoxRTPane, [{
                key: "onAwake",
                value: function() {
                    this._boxNormal = this.getChildByName("boxNormal"), this._spCheckNormal = this._boxNormal.getChildByName("spCheckNormal"),
                        this._txtCheckNormal = this._boxNormal.getChildByName("txtTimesNormal"), this._boxSmall = this.getChildByName("boxSmall"),
                        this._spCheckSmall = this._boxSmall.getChildByName("spCheckSmall"), this._txtCheckSmall = this._boxSmall.getChildByName("txtTimesSmall"),
                        a.addBtnsClickHandler([this._boxNormal, this._boxSmall], this.onBtnClick, this);
                }
            }, {
                key: "deploy",
                value: function(e, t) {
                    this._modelProperty = e, this._txtCheckSmall.text = this._txtCheckNormal.text = t,
                        this._model.on(this._modelProperty, this.onModelPropertyChanged, this, !0);
                }
            }, {
                key: "onBtnClick",
                value: function(e) {
                    switch (e.currentTarget) {
                        case this._boxNormal:
                        case this._boxSmall:
                            this.changeModelProperty();
                    }
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._boxNormal.visible = !0, this._boxSmall.visible = !1;
                }
            }, {
                key: "onModelPropertyChanged",
                value: function() {
                    this._spCheckNormal.visible = this._spCheckSmall.visible = !!this._model[this._modelProperty];
                }
            }, {
                key: "changeModelProperty",
                value: function() {
                    this._model[this._modelProperty] = !this._model[this._modelProperty];
                }
            }]), YLMainCheckBoxRTPane;
        }(),
        Ze = function(e) {
            function YLSpecialRewardRTItem() {
                var e;
                return _classCallCheck(this, YLSpecialRewardRTItem), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLSpecialRewardRTItem).apply(this, arguments)))._dataIndex = -1,
                    e;
            }
            return _inherits(YLSpecialRewardRTItem, Laya.Sprite), _createClass(YLSpecialRewardRTItem, [{
                key: "onAwake",
                value: function() {
                    this._model = W.model, this._controller = W.controller, this.btnView = this.getChildByName("btnView"),
                        this._txtNum = this.btnView.getChildByName("txtNum"), this.imgFrame = this.btnView.getChildByName("imgFrame"),
                        a.addClickListener(this.btnView, this.onItemClick, this), tt.data.on("raffleDate", this.upData, this, !0);
                }
            }, {
                key: "onSignInVideoCheck",
                value: function() {
                    this._data && (this._txtNum.text = "x" + 1 * this._data.prop_quantity);
                }
            }, {
                key: "onSignInCount",
                value: function() {
                    var e = tt.data.signInCount;
                    this._controller.hasSignIn && 0 === e && (e = 8);
                }
            }, {
                key: "onSelectionChanged",
                value: function() {}
            }, {
                key: "onItemClick",
                value: function() {
                    console.log("this._data", this._data), console.log("this._dataIndex", this._dataIndex);
                    var e = tt.data.signInCount;
                    this._controller.hasSignIn && 0 == e && (e = 8), e + (this._controller.hasSignIn ? 0 : 1) > this._dataIndex && 1 == this._data.prop_type && !this._controller.isGetSpecial(this._data) && this._controller.specialSign(this._data);
                }
            }, {
                key: "initUI",
                value: function() {
                    var e = tt.data.signInCount;
                    (this._controller.hasSignIn && 0 == e && (e = 8), console.log("signInCount", e),
                        this._data) && (e + (this._controller.hasSignIn ? 0 : 1) > this._dataIndex && 1 == this._data.prop_type && Laya.timer.loop(1e3, this, function() {
                        a.tweenShake(this.btnView, null);
                    }));
                }
            }, {
                key: "upData",
                value: function() {
                    this._data && (this.btnView.visible = !this._controller.isGetSpecial(this._data) && 0 != this._data.prop_type);
                }
            }, {
                key: "dataIndex",
                get: function() {
                    return this._dataIndex;
                },
                set: function(e) {
                    this._dataIndex = e, this._data = this._controller.isFirstSpecial()[e], this.visible = !!this._data,
                        this._data && (this.onSignInVideoCheck(), this.initUI(), this.upData());
                }
            }]), YLSpecialRewardRTItem;
        }(),
        Je = function(e) {
            function YLADGameRTBanner2() {
                var e;
                return _classCallCheck(this, YLADGameRTBanner2), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLADGameRTBanner2).call(this, 2)))._canShake = !1,
                    e._updateIntervalMs = 3e3, e;
            }
            return _inherits(YLADGameRTBanner2, ce), _createClass(YLADGameRTBanner2, [{
                key: "initUI",
                value: function() {
                    var e = this.getChildByName("ad");
                    this._grids.push(e);
                }
            }, {
                key: "adHeight",
                get: function() {
                    var e;
                    return (null === (e = this._grids[0]) || void 0 === e ? void 0 : e.height) || 260;
                }
            }]), YLADGameRTBanner2;
        }(),
        Qe = function() {
            function GameConfig() {
                _classCallCheck(this, GameConfig);
            }
            return _createClass(GameConfig, null, [{
                key: "init",
                value: function() {
                    var e = Laya.ClassUtils.regClass;
                    e("youling/splash/view/runtime/YLSplashRTView.ts", ie), e("youling/common/component/AlignWidget.ts", ne),
                        e("youling/main/view/runtime/YLCrazyClickRTView.ts", ae), e("youling/main/view/runtime/gadgets/YLProgressRTPane.ts", oe),
                        e("youling/main/view/runtime/gadgets/YLHandClickRTPane.ts", se), e("youling/main/view/runtime/YLFavoriteRTView.ts", re),
                        e("youling/main/view/runtime/YLGameRTView.ts", le), e("youling/common/component/ad/runtime/YLADGameRTBanner0.ts", he),
                        e("youling/common/component/ad/runtime/YLADGameRTGrid.ts", ue), e("youling/common/component/ad/runtime/YLADGameRTSquare0.ts", de),
                        e("youling/main/view/runtime/YLLotteryRTView.ts", _e), e("youling/main/view/runtime/YLLotteryRewardRTView.ts", pe),
                        e("youling/main/view/runtime/YLNewbieRTView.ts", ye), e("youling/main/view/runtime/YLPassRTView.ts", fe),
                        e("youling/common/component/runtime/YLGoldRTPane.ts", ge), e("youling/common/component/YLGoldPane.ts", me),
                        e("youling/common/component/ad/runtime/YLADGameRTSquare3.ts", ve), e("youling/common/component/ad/script/YLADRealBanner.ts", ke),
                        e("youling/main/view/runtime/YLRaffleRewardRTView.ts", Se), e("youling/main/view/runtime/YLRankRTView.ts", we),
                        e("youling/common/component/YLTabGroup.ts", be), e("youling/common/component/YLTab.ts", Ce),
                        e("youling/common/component/ZoomButton.ts", b), e("youling/main/view/runtime/YLRebornRTView.ts", Le),
                        e("youling/common/component/ad/script/YLADGameList.ts", Re), e("youling/main/view/runtime/YLResultRTView.ts", Pe),
                        e("youling/main/view/runtime/YLSearchPlayerRTView.ts", Ie), e("youling/common/component/runtime/YLPlayerHeadRTGrid.ts", Ae),
                        e("youling/main/view/runtime/YLSearchVSPlayerRTView.ts", xe), e("youling/main/view/runtime/gadgets/YLVSPlayerRTPane.ts", Te),
                        e("youling/main/view/runtime/YLSignRewardRTView.ts", Be), e("youling/main/view/runtime/YLSignInSkinRewardRTView.ts", Ve),
                        e("youling/main/view/runtime/YLSiginSkinRTView.ts", Oe), e("youling/main/view/runtime/YLSkinRTView.ts", De),
                        e("youling/main/view/runtime/YLStoreRTView.ts", Ee), e("youling/main/view/runtime/YLStoreRTGrid.ts", Ye),
                        e("youling/main/view/runtime/YLSystemAppListRTView.ts", Ge), e("youling/main/view/runtime/gadgets/YLSystemAppListRTItem.ts", Ne),
                        e("youling/main/view/runtime/YLTreasureBoxRTView.ts", Ue), e("youling/main/view/runtime/YLBackHomeRTView.ts", He),
                        e("youling/main/view/runtime/YLBeginGameRTView.ts", je), e("youling/main/view/runtime/YLHomeRTView.ts", We),
                        e("youling/common/component/runtime/YLAddGameRTSticker.ts", Fe), e("youling/main/view/runtime/YLMoreGameRTView.ts", Xe),
                        e("youling/main/view/runtime/YLSignInRTView.ts", ze), e("youling/main/view/runtime/gadgets/YLSignInRewardRTItem.ts", Ke),
                        e("youling/main/view/runtime/gadgets/YLMainCheckBoxRTPane.ts", qe), e("youling/main/view/runtime/gadgets/YLSpecialRewardRTItem.ts", Ze),
                        e("youling/common/component/ad/runtime/YLADGameRTBanner2.ts", Je);
                }
            }]), GameConfig;
        }();
    Qe.width = 750, Qe.height = 1335, Qe.scaleMode = "fixedheight", Qe.screenMode = "none",
        Qe.alignV = "middle", Qe.alignH = "center", Qe.startScene = "sdk_youling/base/view/YLSplash.scene",
        Qe.sceneRoot = "", Qe.debug = !1, Qe.stat = !1, Qe.physicsDebug = !1, Qe.exportSceneToJson = !0,
        Qe.init();
    var $e = function YLActiveLocalConfig() {
            _classCallCheck(this, YLActiveLocalConfig), this.sign_weight = .15, this.sign_add_weight = .15,
                this.sign = 0, this.sign_special = 0, this.lottery = 0, this.lottery_weight = .1,
                this.lottery_add_weight = .1, this.sign_random_max = 5, this.sign_random_min = 3,
                this.lottery_free = 2, this.lottery_video = 5, this.sign_auto_open = 0, this.date = X.getDateString("yyyy-MM-dd"),
                this.reward = {
                    firstsign: [{
                        prop_number: 1,
                        prop_quantity: 100,
                        prop_type: 1
                    }, {
                        prop_number: 2,
                        prop_quantity: 200,
                        prop_type: 1
                    }, {
                        prop_number: 3,
                        prop_quantity: 260,
                        prop_type: 1
                    }, {
                        prop_number: 4,
                        prop_quantity: 350,
                        prop_type: 1
                    }, {
                        prop_number: 5,
                        prop_quantity: 400,
                        prop_type: 1
                    }, {
                        prop_number: 6,
                        prop_quantity: 450,
                        prop_type: 1
                    }, {
                        prop_number: 7,
                        prop_quantity: 800,
                        prop_type: 1
                    }],
                    secondsign: [{
                        prop_number: 1,
                        prop_quantity: 50,
                        prop_type: 1
                    }, {
                        prop_number: 2,
                        prop_quantity: 100,
                        prop_type: 1
                    }, {
                        prop_number: 3,
                        prop_quantity: 150,
                        prop_type: 1
                    }, {
                        prop_number: 4,
                        prop_quantity: 200,
                        prop_type: 1
                    }, {
                        prop_number: 5,
                        prop_quantity: 300,
                        prop_type: 1
                    }, {
                        prop_number: 6,
                        prop_quantity: 400,
                        prop_type: 1
                    }, {
                        prop_number: 7,
                        prop_quantity: 500,
                        prop_type: 1
                    }],
                    firstspecial: [{
                        prop_number: 1,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 2,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 3,
                        prop_quantity: 3,
                        prop_type: 1
                    }, {
                        prop_number: 4,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 5,
                        prop_quantity: 5,
                        prop_type: 1
                    }, {
                        prop_number: 6,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 7,
                        prop_quantity: 8,
                        prop_type: 1
                    }],
                    secondspecial: [{
                        prop_number: 1,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 2,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 3,
                        prop_quantity: 1,
                        prop_type: 1
                    }, {
                        prop_number: 4,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 5,
                        prop_quantity: 2,
                        prop_type: 1
                    }, {
                        prop_number: 6,
                        prop_quantity: 0,
                        prop_type: 0
                    }, {
                        prop_number: 7,
                        prop_quantity: 5,
                        prop_type: 1
                    }],
                    lotteryreward: [{
                        prop_number: 1,
                        prop_quantity: 50,
                        prop_type: 1
                    }, {
                        prop_number: 2,
                        prop_quantity: 100,
                        prop_type: 1
                    }, {
                        prop_number: 3,
                        prop_quantity: 150,
                        prop_type: 1
                    }, {
                        prop_number: 4,
                        prop_quantity: 200,
                        prop_type: 1
                    }, {
                        prop_number: 5,
                        prop_quantity: 300,
                        prop_type: 1
                    }]
                };
        },
        et = function(e) {
            function YLDataModel() {
                var e;
                return _classCallCheck(this, YLDataModel), (e = _possibleConstructorReturn(this, _getPrototypeOf(YLDataModel).apply(this, arguments)))._isSleep = !1,
                    e.CUR_VERSION = "2",
                    e._token = "",
                    e._YLActiveLocalConfig = new $e(),
                    e._shareInfoDic = {},
                    e._appListDic = {},
                    e._playerHeadsPool = [],
                    e._playerNamesPool = [],
                    e._gold = 0,
                    e._curScore = 0,
                    e._isWatchingVidoeAd = !1,
                    e._worldRanks = [],
                    e._useTime = 1e3,
                    e._ownStoreItemIds = [],
                    e._storeItemIdInUse = NaN,
                    e.activeAdNum = 0,
                    e.splashShowTime = 0,
                    e._isAllSubpackagesLoaded = !1,
                    e._hasGameInit = !1,
                    e._round = 0,
                    e._hasWrongClickOnBtnSkipReborn = !1,
                    e._isOnGame = !1,
                    e._isPassGame = !1,
                    e._hasRejectAuthor = !1,
                    e._isShowBoxClick = !1,
                    e._isAfterBox = !1,
                    e._signInDate = "",
                    e._signInCount = 0,
                    e._signInVideoCount = 0,
                    e._lotteryCount = 0,
                    e._raffleNumber = 0,
                    e._freeNumber = 0,
                    e._lottertVideoNumber = 0,
                    e._lotterDate = "",
                    e._isSceneBlacklist = !1,
                    e._raffleDate = [],
                    e._backHomeDisplayCount = 0,
                    e._beginGameDisplayCount = 0,
                    e._homeDisplayCount = 0,
                    e._skinDisplayCount = 0,
                    e._allSignInCount = 0,
                    e._hasRejectisSubscribeMessageAuthor = !1, e;
            }
            return _inherits(YLDataModel, v), _createClass(YLDataModel, [{
                key: "getShareContent",
                value: function(e) {
                    var t, i = this._shareInfoDic[e];
                    return (null == i ? void 0 : i.length) && (t = h.randomOne(i)), t || (t = {
                        share_title: "老铁快帮我点点，差一点就过关了",
                        share_img: "",
                        share_id: 1,
                        share_type: e
                    }), t;
                }
            }, {
                key: "getCanShowJump",
                value: function(e) {
                    var t = !1,
                        i = 0;
                    switch (e) {
                        case "VIEW_BackHome":
                            i = this.backHomeDisplayCount, this.backHomeDisplayCount++;
                            break;

                        case "VIEW_BeginGame":
                            i = this.beginGameDisplayCount, this.beginGameDisplayCount++;
                            break;

                        case "VIEW_Home":
                            i = 0;
                            break;

                        case "VIEW_Skin":
                            i = this.skinDisplayCount, this.skinDisplayCount++;
                    }
                    return this._versionConfig && (this.isSceneBlacklist ? 1 == this.versionConfig.show_ad && (t = 1 == this.versionConfig.first_jump || 0 != i) : t = !0),
                        t;
                }
            }, {
                key: "hasWrongClickOnBtnSkipReborn",
                get: function() {
                    return this._hasWrongClickOnBtnSkipReborn;
                },
                set: function(e) {
                    this._hasWrongClickOnBtnSkipReborn = e;
                }
            }, {
                key: "hasRejectAuthor",
                get: function() {
                    return this._hasRejectAuthor;
                },
                set: function(e) {
                    this._hasRejectAuthor = e;
                }
            }, {
                key: "hasRejectisSubscribeMessageAuthor",
                get: function() {
                    return this._hasRejectisSubscribeMessageAuthor;
                },
                set: function(e) {
                    this._hasRejectisSubscribeMessageAuthor = e;
                }
            }, {
                key: "round",
                get: function() {
                    return this._round;
                },
                set: function(e) {
                    this.try2Set("round", e);
                }
            }, {
                key: "hasGameInit",
                get: function() {
                    return !tt.hasDeployed || this._hasGameInit;
                },
                set: function(e) {
                    this.try2Set("hasGameInit", e);
                }
            }, {
                key: "isOnGame",
                get: function() {
                    return this._isOnGame;
                },
                set: function(e) {
                    this.try2Set("isOnGame", e);
                }
            }, {
                key: "isPassGame",
                get: function() {
                    return this._isPassGame;
                },
                set: function(e) {
                    this.try2Set("isPassGame", e);
                }
            }, {
                key: "isShowBoxClick",
                get: function() {
                    return this._isShowBoxClick;
                },
                set: function(e) {
                    this.try2Set("isShowBoxClick", e);
                }
            }, {
                key: "isAfterBox",
                get: function() {
                    return this._isAfterBox;
                },
                set: function(e) {
                    this.try2Set("isAfterBox", e);
                }
            }, {
                key: "isAllSubpackagesLoaded",
                get: function() {
                    return !tt.hasDeployed || this._isAllSubpackagesLoaded;
                },
                set: function(e) {
                    this.try2Set("isAllSubpackagesLoaded", e);
                }
            }, {
                key: "storeItemIdInUse",
                get: function() {
                    return this._storeItemIdInUse;
                },
                set: function(e) {
                    this.try2Set("storeItemIdInUse", e), w.set("storeItemIdInUse", e);
                }
            }, {
                key: "ownStoreItemIds",
                get: function() {
                    return this._ownStoreItemIds;
                },
                set: function(e) {
                    e = e || [], h.uniq(e), this.try2Set("ownStoreItemIds", e), w.set("ownStoreItemIds", e.filter(Boolean).join(","));
                }
            }, {
                key: "useTime",
                get: function() {
                    return this._useTime;
                },
                set: function(e) {
                    this.try2Set("useTime", e);
                }
            }, {
                key: "worldRanks",
                get: function() {
                    return this._worldRanks;
                },
                set: function(e) {
                    this.try2Set("worldRanks", e);
                }
            }, {
                key: "isWatchingVidoeAd",
                get: function() {
                    return this._isWatchingVidoeAd;
                },
                set: function(e) {
                    this.try2Set("isWatchingVidoeAd", e);
                }
            }, {
                key: "curScore",
                get: function() {
                    return this._curScore;
                },
                set: function(e) {
                    this.try2Set("curScore", e);
                }
            }, {
                key: "gold",
                get: function() {
                    return this._gold;
                },
                set: function(e) {
                    this.try2Set("gold", e), w.set("gold", e);
                }
            }, {
                key: "playerHeadsPool",
                get: function() {
                    return this._playerHeadsPool;
                },
                set: function(e) {
                    this.try2Set("playerHeadsPool", e);
                }
            }, {
                key: "playerNamesPool",
                get: function() {
                    return this._playerNamesPool;
                },
                set: function(e) {
                    this.try2Set("playerNamesPool", e);
                }
            }, {
                key: "userInfo",
                get: function() {
                    return this._userInfo;
                },
                set: function(e) {
                    this.try2Set("userInfo", e);
                }
            }, {
                key: "appListDic",
                get: function() {
                    return this._appListDic;
                },
                set: function(e) {
                    this.try2Set("appListDic", e);
                }
            }, {
                key: "shareInfoDic",
                get: function() {
                    return this._shareInfoDic;
                },
                set: function(e) {
                    this.try2Set("shareInfoDic", e);
                }
            }, {
                key: "versionConfig",
                get: function() {
                    return this._versionConfig;
                },
                set: function(e) {
                    e && (e.banner_interval = e.banner_interval || 1e3, 1 !== e.delay && (e.latency_time = 0,
                        e.move_time = 0)), this.try2Set("versionConfig", e);
                }
            }, {
                key: "ActiveConfig",
                get: function() {
                    return this._ActiveConfig;
                },
                set: function(e) {
                    this.try2Set("ActiveConfig", e);
                }
            }, {
                key: "YLActiveLocalConfig",
                get: function() {
                    return this._YLActiveLocalConfig;
                },
                set: function(e) {
                    this.try2Set("YLActiveLocalConfig", e);
                }
            }, {
                key: "token",
                get: function() {
                    return this._token;
                },
                set: function(e) {
                    this.try2Set("token", e);
                }
            }, {
                key: "isSleep",
                get: function() {
                    return this._isSleep;
                },
                set: function(e) {
                    this.try2Set("isSleep", e);
                }
            }, {
                key: "isSceneBlacklist",
                get: function() {
                    return this._isSceneBlacklist;
                },
                set: function(e) {
                    this.try2Set("isSceneBlacklist", e);
                }
            }, {
                key: "backHomeDisplayCount",
                get: function() {
                    return this._backHomeDisplayCount;
                },
                set: function(e) {
                    this.try2Set("backHomeDisplayCount", e);
                }
            }, {
                key: "beginGameDisplayCount",
                get: function() {
                    return this._beginGameDisplayCount;
                },
                set: function(e) {
                    this.try2Set("beginGameDisplayCount", e);
                }
            }, {
                key: "homeDisplayCount",
                get: function() {
                    return this._homeDisplayCount;
                },
                set: function(e) {
                    this.try2Set("homeDisplayCount", e);
                }
            }, {
                key: "skinDisplayCount",
                get: function() {
                    return this._skinDisplayCount;
                },
                set: function(e) {
                    this.try2Set("skinDisplayCount", e);
                }
            }, {
                key: "signInDate",
                get: function() {
                    return this._signInDate;
                },
                set: function(e) {
                    this.try2Set("signInDate", e), w.set("signInDate", e);
                }
            }, {
                key: "signInCount",
                get: function() {
                    return this._signInCount;
                },
                set: function(e) {
                    e = Math.max(0, e) % 7, this.try2Set("signInCount", e), w.set("signInCount", e);
                }
            }, {
                key: "allSignInCount",
                get: function() {
                    return this._allSignInCount;
                },
                set: function(e) {
                    this.try2Set("allSignInCount", e), w.set("allSignInCount", e);
                }
            }, {
                key: "signInVideoCount",
                get: function() {
                    return this._signInVideoCount;
                },
                set: function(e) {
                    this.try2Set("signInVideoCount", e), w.set("signInVideoCount", e);
                }
            }, {
                key: "lotteryCount",
                get: function() {
                    return this._lotteryCount;
                },
                set: function(e) {
                    this.try2Set("lotteryCount", e), w.set("lotteryCount", e);
                }
            }, {
                key: "raffleNumber",
                get: function() {
                    return this._raffleNumber;
                },
                set: function(e) {
                    this.try2Set("raffleNumber", e), w.set("raffleNumber", e);
                }
            }, {
                key: "freeNumber",
                get: function() {
                    return this._freeNumber;
                },
                set: function(e) {
                    this.try2Set("freeNumber", e), w.set("freeNumber", e);
                }
            }, {
                key: "lottertVideoNumber",
                get: function() {
                    return this._lottertVideoNumber;
                },
                set: function(e) {
                    this.try2Set("lottertVideoNumber", e), w.set("lottertVideoNumber", e);
                }
            }, {
                key: "lotterDate",
                get: function() {
                    return this._lotterDate;
                },
                set: function(e) {
                    this.try2Set("lotterDate", e), w.set("lotterDate", e);
                }
            }, {
                key: "raffleDate",
                get: function() {
                    return this._raffleDate;
                },
                set: function(e) {
                    this.try2Set("raffleDate", e), w.set("raffleDate", e);
                }
            }]), YLDataModel;
        }(),
        tt = new(function() {
            function YLSDKClazz() {
                var e = this;
                _classCallCheck(this, YLSDKClazz),
                    this._data = new et(),
                    this._hasDeployed = !1,
                    this._defaultStoreRandomUnlockGold = function(t) {
                        if (e.config && t > 0) {
                            var i = [0, 1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3][e.config.storeItems.length - t];
                            return isNaN(i) ? 9999999 : i;
                        }
                        return -1;
                    }, this._defaultScore2Gold = function(e) {
                        return .1 * e >> 0;
                    }, this._defaultSignInRewards = [{
                        gold: 100
                    }, {
                        gold: 200
                    }, {
                        gold: 300
                    }, {
                        gold: 400
                    }, {
                        gold: 500
                    }, {
                        gold: 600
                    }, {
                        gold: 800
                    }], this._defaultSignInRewardsTwo = [{
                        gold: 100
                    }, {
                        gold: 200
                    }, {
                        gold: 500
                    }, {
                        gold: 700
                    }, {
                        gold: 1e3
                    }, {
                        gold: 1500
                    }, {
                        gold: 3e3
                    }], this._raffleReward = [{
                        raffle: 0
                    }, {
                        raffle: 0
                    }, {
                        raffle: 3
                    }, {
                        raffle: 0
                    }, {
                        raffle: 5
                    }, {
                        raffle: 0
                    }, {
                        raffle: 8
                    }], this._raffleRewardTwo = [{
                        raffle: 0
                    }, {
                        raffle: 0
                    }, {
                        raffle: 1
                    }, {
                        raffle: 0
                    }, {
                        raffle: 2
                    }, {
                        raffle: 0
                    }, {
                        raffle: 5
                    }], this._lotteryGold = [{
                        gold: 100
                    }, {
                        gold: 200
                    }, {
                        gold: 300
                    }, {
                        gold: 400
                    }, {
                        gold: 500
                    }];
            }
            return _createClass(YLSDKClazz, [{
                key: "configurate",
                value: function(e) {
                    var t, i, n, a, o, s, r;
                    e.load.liteSubpackage || (e.load.liteSubpackage = "sdk_youling_lite"), h.remove(e.load.subpackages, e.load.liteSubpackage),
                        e.numSearchPlayer = 16, e.overPlayerQueueMax = null !== (t = e.overPlayerQueueMax) && void 0 !== t ? t : 2,
                        e.score2Gold = e.score2Gold || this._defaultScore2Gold, e.storeRandomUnlockGold = e.storeRandomUnlockGold || this._defaultStoreRandomUnlockGold,
                        e.rebornMax = null !== (i = e.rebornMax) && void 0 !== i ? i : 2, e.searchPlayerMode = null !== (n = e.searchPlayerMode) && void 0 !== n ? n : 1,
                        e.authorTime = null !== (a = e.authorTime) && void 0 !== a ? a : "rank", e.storeVideoUnlockGold = null !== (o = e.storeVideoUnlockGold) && void 0 !== o ? o : 300,
                        e.BoxUnlockGold = null !== (s = e.BoxUnlockGold) && void 0 !== s ? s : 100, e.server.apiversion = e.server.apiversion || "v10",
                        e.signInItems = tt.data.allSignInCount < 7 ? this._defaultSignInRewards : this._defaultSignInRewardsTwo,
                        e.raffleNumber = tt.data.allSignInCount < 7 ? this._raffleReward : this._raffleRewardTwo,
                        e.lotteryGold = null !== (r = e.lotteryGold) && void 0 !== r ? r : this._lotteryGold,
                        this._config = e;
                }
            }, {
                key: "deploy",
                value: function() {
                    this._config ? (this._hasDeployed = !0, Qe.physicsDebug = !1, this._beanLauncher = new te(),
                        this._beanLauncher.run()) : e.throwNormalError("请先执行 YLSDK.configurate 进行配置！");


                }
            }, {
                key: "hasDeployed",
                get: function() {
                    return this._hasDeployed;
                }
            }, {
                key: "data",
                get: function() {
                    return this._data;
                }
            }, {
                key: "config",
                get: function() {
                    return this._config;
                }
            }]), YLSDKClazz;
        }())(),
        it = {
            hideButtons: {
                isOpen: !1
            },
            gameName: "疯狂小插座",
            gameSceneUrl: "views/GameMainScene.json",
            gameIconUrl: "",
            homeLogoUrl: "logo.png",
            noNewbie: !0,
            newbieImgUrl: "",
            needSearchPlayer: !0,
            searchPlayerMode: 2,
            storeItems: [{
                id: 1,
                previewPath: "ui/js_js_ui_01.png",
                isDefault: !0
            }, {
                id: 2,
                previewPath: "ui/js_js_ui_02.png"
            }, {
                id: 3,
                previewPath: "ui/js_js_ui_03.png"
            }, {
                id: 4,
                previewPath: "ui/js_js_ui_04.png"
            }, {
                id: 5,
                previewPath: "ui/js_js_ui_05.png"
            }, {
                id: 6,
                previewPath: "ui/js_js_ui_06.png"
            }, {
                id: 7,
                previewPath: "ui/js_js_ui_07.png"
            }, {
                id: 8,
                previewPath: "ui/js_js_ui_08.png"
            }, {
                id: 9,
                previewPath: "ui/js_js_ui_09.png"
            }],
            sound: {
                basePath: "res/sound",
                click: "click.mp3",
                bgm: "bgm",
                fail: "Fail.mp3",
                success: "success.mp3",
            },
            load: {
                subpackages: ["sdk_youling_common", "res_sound", "res_LayaScene_ModelScene", "res_LayaScene_SampleScene"],
                reses2Load: ["res/LayaScene_SampleScene/Conventional/SampleScene.ls", "res/LayaScene_ModelScene/Conventional/ModelScene.lh", "res/Export/map.json", "res/Export/shaderObj.json"]
            },
            server: {
                host: "",
                apiKey: "",
                apiSecret: "",
                apiversion: "v10"
            },
            ad: {
                gameViewAdMode: 0,
                bannerAdID: ["adunit-aabaf1838ae5f646"],
                videoAdID: "adunit-a8b842e6c7ae8168",
                interAdID: "adunit-7658dc9ffbe83238",
                customIDHomeLeft: "adunit-84a4190274be1167",
                customIDTreasureBox: "adunit-0cde4eb6ddf16a7c"
            }
        },
        nt = function() {
            function ObjPool3D() {
                _classCallCheck(this, ObjPool3D), this._prefabObjs = {}, this._recoveryParent = new Laya.Sprite3D();
            }
            return _createClass(ObjPool3D, [{
                key: "ImportObj",
                value: function(e) {
                    null != e && null == this._prefabObjs[e.name] ? this._prefabObjs[e.name] = e : console.warn("ObjPool3D 重复导入模型预制体 ", e);
                }
            }, {
                key: "ImportObjs",
                value: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        this.ImportObj(i);
                    }
                }
            }, {
                key: "ImportObjByParent",
                value: function(e) {
                    for (var t = e.numChildren, i = 0; i < t; i++) {
                        var n = e.getChildAt(i);
                        this.ImportObj(n);
                    }
                }
            }, {
                key: "getObj",
                value: function(e) {
                    var t = Laya.Pool.getItemByCreateFun(e, this.getObjByPrefab.bind(this, e), this);
                    return t.active = !0, t;
                }
            }, {
                key: "getObjByPrefab",
                value: function(e) {
                    var t;
                    return this._prefabObjs[e] ? (t = Laya.Sprite3D.instantiate(this._prefabObjs[e]), console.warn("ObjPool3D 成功找到模型预制体 ", e)) : console.warn("ObjPool3D 没有找到模型预制体 ", e),
                        t;
                }
            }, {
                key: "recoveryObj",
                value: function(e) {
                    e.active = !1, this._recoveryParent.addChild(e), Laya.Pool.recover(e.name, e);
                }
            }, {
                key: "prefabObjs",
                get: function() {
                    return this._prefabObjs;
                }
            }], [{
                key: "I",
                get: function() {
                    return null == ObjPool3D._instance && (ObjPool3D._instance = new ObjPool3D()), ObjPool3D._instance;
                }
            }]), ObjPool3D;
        }(),
        at = function(e) {
            function ObsracleBase() {
                var e;
                return _classCallCheck(this, ObsracleBase), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObsracleBase).apply(this, arguments))).isUsed = !1,
                    e.releaseSpeed = new Laya.Vector3(0, .2, 0), e.hijackAni = "beitaiqi_01", e;
            }
            return _inherits(ObsracleBase, Laya.Script3D), _createClass(ObsracleBase, [{
                key: "onAwake",
                value: function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform, this.onInit();
                }
            }, {
                key: "onInit",
                value: function() {}
            }, {
                key: "onEnable",
                value: function() {
                    this.isUsed = !1, this.role = null;
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.releaseRole();
                }
            }, {
                key: "hijackRole",
                value: function(e, t) {
                    this.isUsed || (this.isUsed = !0, this.role = e, this.hijackObj = t, this.role.hijack(t, this.hijackAni),
                        this.onHijackRole(t), this.hijackObj && "cj_dj_dct_01_mx" == this.hijackObj.name && (Tt.instance.playEffect("FX_FKXCZ_Plug", this.hijackObj),
                            "PlayerPos" == this.role.gameObject.name && C.playSoundEffect("putIn.mp3", 1)));
                }
            }, {
                key: "onHijackRole",
                value: function(e) {}
            }, {
                key: "releaseRole",
                value: function() {
                    this.role && 6 == this.role.fsm.GetCurStateId() && (this.role.endHijack(this.releaseSpeed),
                        this.onReleaseRole(), this.hijackObj && "cj_dj_dct_01_mx" == this.hijackObj.name && (Tt.instance.playEffect("FX_FKXCZ_BlackSmoke", this.hijackObj),
                            "PlayerPos" == this.role.gameObject.name && C.playSoundEffect("pullOut.mp3", 1)),
                        this.role = null, this.hijackObj = null);
                }
            }, {
                key: "onReleaseRole",
                value: function() {}
            }]), ObsracleBase;
        }(),
        ot = function(e) {
            function ObstacleBigWheel() {
                var e;
                return _classCallCheck(this, ObstacleBigWheel), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObstacleBigWheel).apply(this, arguments))).releaseSpeed = new Laya.Vector3(0, .3, 0),
                    e._defaultRotSpeed = 1, e._hijackRotSpeed = 2.5, e._dctList = new Array(), e._releaseAngles = 160,
                    e._curAngle = 0, e._curRotSpeed = 1, e._endAngle = 0, e._isHijackRole = !1, e;
            }
            return _inherits(ObstacleBigWheel, at), _createClass(ObstacleBigWheel, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis"), this._FX_FKXCZ_glGlow1 = this.rotAxis.getChildByName("FX_FKXCZ_glGlow2"),
                        this._FX_FKXCZ_glGlow1.active = !1;
                    for (var e = this.rotAxis.getChildByName("cj_dj_gl_02_mx"), t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        this._dctList.push(i);
                    }
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._curAngle = 0, this._curRotSpeed = this._defaultRotSpeed, this._isHijackRole = !1,
                        this.rotAxis.transform.localRotationEuler = new Laya.Vector3(this._curAngle, 0, 0),
                        _get(_getPrototypeOf(ObstacleBigWheel.prototype), "onEnable", this).call(this);
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.isUsed && !this._isHijackRole || (this._curAngle = (this._curAngle += this._curRotSpeed) % 360,
                            this.rotAxis.transform.localRotationEuler = new Laya.Vector3(this._curAngle, 0, 0)),
                        this._isHijackRole && (this._endAngle > 0 ? this._endAngle -= this._curRotSpeed : (this.releaseRole(),
                            this._isHijackRole = !1));
                }
            }, {
                key: "onHijackRole",
                value: function(e) {
                    this.curhijackObj = e, this._FX_FKXCZ_glGlow1.active = !0, this._curRotSpeed = this._hijackRotSpeed;
                    for (var t = 0; t < this._dctList.length; t++) {
                        if (this._dctList[t] == e) {
                            var i = 45 * t - this._curAngle + this._releaseAngles;
                            this._endAngle = i < 0 ? i + 360 : i;
                            break;
                        }
                    }
                    this._isHijackRole = !0;
                }
            }, {
                key: "onReleaseRole",
                value: function() {
                    this._FX_FKXCZ_glGlow1.active = !1;
                }
            }]), ObstacleBigWheel;
        }(),
        st = function(e) {
            function ObstacleBigWheel_1() {
                var e;
                return _classCallCheck(this, ObstacleBigWheel_1), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObstacleBigWheel_1).apply(this, arguments))).releaseSpeed = new Laya.Vector3(0, 2.2, .6),
                    e._releaseAngles = 110, e;
            }
            return _inherits(ObstacleBigWheel_1, ot), ObstacleBigWheel_1;
        }(),
        rt = function(e) {
            function ObstacleBridge() {
                return _classCallCheck(this, ObstacleBridge), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleBridge).apply(this, arguments));
            }
            return _inherits(ObstacleBridge, at), _createClass(ObstacleBridge, [{
                key: "onInit",
                value: function() {
                    this.hijackAni = "xialuotingdun_01", this.rotAxis = this.gameObject.getChildByName("rotAxis");
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(ObstacleBridge.prototype), "onEnable", this).call(this), this.isUsed = !1,
                        this.rotAxis.transform.localRotationEuler = new Laya.Vector3(3, 0, 0), this.idleLine && this.idleLine.clear(),
                        this.idleLine = new TimelineLite(), this.idleLine.add(TweenLite.to(this.rotAxis.transform, 1.5, {
                            localRotationEulerX: 20,
                            yoyo: !0,
                            repeat: -1,
                            ease: Linear.easeIn
                        })), this.idleLine.play(0);
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.idleLine && (this.idleLine.clear(!0), this.idleLine = null), this.hijackTween && (this.hijackTween.clear(),
                        this.hijackTween = null);
                }
            }, {
                key: "onHijackRole",
                value: function() {
                    this.idleLine.clear(), this.hijackTween = new Laya.Tween(), this.hijackTween.to(this.rotAxis.transform, {
                        localRotationEulerX: 85
                    }, 1500, null, new Laya.Handler(this, this.releaseRole));
                }
            }, {
                key: "onReleaseRole",
                value: function() {}
            }]), ObstacleBridge;
        }(),
        lt = function(e) {
            function ObstacleCircle() {
                return _classCallCheck(this, ObstacleCircle), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleCircle).apply(this, arguments));
            }
            return _inherits(ObstacleCircle, at), _createClass(ObstacleCircle, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis");
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(ObstacleCircle.prototype), "onEnable", this).call(this), this.idleLine || (this.rotAxis.transform.localRotationEuler = new Laya.Vector3(45, 0, 0),
                        this.idleLine = new TimelineLite(), this.idleLine.eventCallback("onComplete", this.idleLineComplete.bind(this)),
                        this.idleLine.eventCallback("onReverseComplete", this.idleLineReverseComplete.bind(this)),
                        this.idleLine.add(TweenLite.to(this.rotAxis.transform, 1.5, {
                            localRotationEulerX: -60,
                            ease: Quad.easeInOut
                        })), this.idleLine.play(0));
                }
            }, {
                key: "idleLineComplete",
                value: function() {
                    this.idleLine && this.idleLine.reverse(), this.releaseRole();
                }
            }, {
                key: "idleLineReverseComplete",
                value: function() {
                    this.idleLine && this.idleLine.play();
                }
            }, {
                key: "onHijackRole",
                value: function() {
                    "PlayerPos" == this.role.owner.name && Laya.stage.event("CameraDraw"), this.idleLine.clear(!0),
                        this.idleLine = null, this.hijackTween && this.hijackTween.clear(), this.hijackTween = new Laya.Tween(),
                        this.hijackTween.to(this.rotAxis.transform, {
                            localRotationEulerX: 300
                        }, 3e3, null, new Laya.Handler(this, this.hijackTweenOver));
                }
            }, {
                key: "hijackTweenOver",
                value: function() {
                    this.hijackTween.clear(), this.releaseRole();
                }
            }]), ObstacleCircle;
        }(),
        ct = function(e) {
            function ObstacleElevator() {
                var e;
                return _classCallCheck(this, ObstacleElevator), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObstacleElevator).apply(this, arguments))).releaseSpeed = new Laya.Vector3(0, .4, 0),
                    e.endPos = 5.95, e.lineDuration = .7, e;
            }
            return _inherits(ObstacleElevator, at), _createClass(ObstacleElevator, [{
                key: "initParam",
                value: function(e, t) {
                    this.endPos = e, this.lineDuration = t;
                }
            }, {
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis");
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(ObstacleElevator.prototype), "onEnable", this).call(this),
                        this.rotAxis.transform.localPosition = new Laya.Vector3(0, 1.4, 5.97), this.rotAxis.transform.localRotationEuler = new Laya.Vector3(0, -180, 0),
                        this.hijackLine && this.hijackLine.clear(!0), this.idleLine && this.idleLine.clear(!0),
                        this.idleLine = new TimelineLite(), this.idleLine.add(TweenLite.to(this.rotAxis.transform, .7, {
                            localPositionY: 4.5,
                            ease: Linear.easeIn
                        })), this.idleLine.repeat(-1).yoyo(!0), this.idleLine.play(0);
                }
            }, {
                key: "onDisable",
                value: function() {}
            }, {
                key: "onHijackRole",
                value: function(e) {
                    this.role && (this.idleLine.clear(), this.hijackLine && this.hijackLine.clear(!0),
                        this.hijackLine = new TimelineLite(), this.hijackLine.eventCallback("onComplete", this.onHijackLineComplete.bind(this)),
                        this.hijackLine.add(TweenLite.to(this.rotAxis.transform, this.lineDuration, {
                            localPositionY: this.endPos,
                            ease: Linear.easeIn
                        })), this.hijackLine.add(TweenLite.to(this.rotAxis.transform, .5, {
                            localRotationEulerX: -150,
                            ease: Linear.easeIn
                        })));
                }
            }, {
                key: "onHijackLineComplete",
                value: function() {
                    this.releaseRole();
                }
            }]), ObstacleElevator;
        }(),
        ht = function(e) {
            function ObstacleElevator_1() {
                var e;
                return _classCallCheck(this, ObstacleElevator_1), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObstacleElevator_1).apply(this, arguments))).endPos = 13.6,
                    e.lineDuration = 1.5, e.releaseSpeed = new Laya.Vector3(0, .8, 0), e;
            }
            return _inherits(ObstacleElevator_1, ct), ObstacleElevator_1;
        }(),
        ut = function(e) {
            function ObstacleEnd() {
                return _classCallCheck(this, ObstacleEnd), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleEnd).apply(this, arguments));
            }
            return _inherits(ObstacleEnd, at), _createClass(ObstacleEnd, [{
                key: "onHijackRole",
                value: function() {
                    if ("PlayerPos" == this.role.owner.name && 1 == Tt.instance.gameState) {
                        Tt.instance.playEffect("FX_FKXCZ_Ribbon", null, this.gameObject.transform.position, null, 1e4);
                        Tt.instance.changeScore(200);
                        console.log("胜利！！！！！！！！");
                        window.gameResult = true;
                        window['playerFinish'] = true;
                    } else {
                        console.log("Ai到达终点！");
                        if (!window['playerFinish'])
                            window.gameResult = false;

                    }
                    Tt.instance.onRoleCompleteGame(this.role);
                }
            }]), ObstacleEnd;
        }(),
        dt = function(e) {
            function ObstacleHammer() {
                return _classCallCheck(this, ObstacleHammer), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleHammer).apply(this, arguments));
            }
            return _inherits(ObstacleHammer, at), _createClass(ObstacleHammer, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis");
                }
            }, {
                key: "onEnable",
                value: function() {
                    if (_get(_getPrototypeOf(ObstacleHammer.prototype), "onEnable", this).call(this), !this.idleLineList) {
                        this.idleLineList = new Array();
                        for (var e = 0; e < this.rotAxis.numChildren; e++) {
                            var t = this.rotAxis.getChildAt(e).getChildByName("cj_dj_cz_01_mx");
                            t.transform.localRotationEuler = new Laya.Vector3(0, 0, -45);
                            var i = new TimelineLite();
                            i.add(TweenLite.to(t.transform, 1.2, {
                                localRotationEulerZ: 90,
                                delay: .4 * e,
                                ease: Quart.easeIn,
                                yoyo: !0,
                                repeat: -1
                            })), this.idleLineList.push(i);
                        }
                    }
                }
            }, {
                key: "OnReset",
                value: function() {}
            }]), ObstacleHammer;
        }(),
        _t = function(e) {
            function ObstacleJump() {
                return _classCallCheck(this, ObstacleJump), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleJump).apply(this, arguments));
            }
            return _inherits(ObstacleJump, at), _createClass(ObstacleJump, [{
                key: "onInit",
                value: function() {
                    this.Capsule = this.gameObject.getChildByName("Capsule");
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(ObstacleJump.prototype), "onEnable", this).call(this), this.idleLine || (this.idleLine = new TimelineLite(),
                        this.idleLine.add(TweenLite.to(this.Capsule.transform, .5, {
                            localPositionY: .5,
                            yoyo: !0,
                            repeat: -1,
                            ease: Linear.easeIn
                        })), this.idleLine.play(0));
                }
            }, {
                key: "OnReset",
                value: function() {}
            }, {
                key: "jumpRole",
                value: function(e) {
                    this.isUsed || (this.isUsed = !0, this.role = e, this.role.jump(new Laya.Vector3(0, 22, 0), "benpao_01"));
                }
            }]), ObstacleJump;
        }(),
        pt = function(e) {
            function ObstacleRotBoard() {
                return _classCallCheck(this, ObstacleRotBoard), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleRotBoard).apply(this, arguments));
            }
            return _inherits(ObstacleRotBoard, at), _createClass(ObstacleRotBoard, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis");
                }
            }, {
                key: "onEnable",
                value: function() {
                    if (_get(_getPrototypeOf(ObstacleRotBoard.prototype), "onEnable", this).call(this), !this.idleLine) {
                        this.idleLine = new TimelineLite();
                        for (var e = [], t = 0; t < this.rotAxis.numChildren; t++) {
                            var i = this.rotAxis.getChildAt(t);
                            e.push(TweenLite.to(i.transform, 4, {
                                localRotationEulerZ: 360,
                                ease: Back.easeOut,
                                delay: .2 * t
                            }));
                        }
                        this.idleLine.eventCallback("onComplete", this.idleLineComplete.bind(this)), this.idleLine.add(e),
                            this.idleLine.play(0);
                    }
                }
            }, {
                key: "OnReset",
                value: function() {}
            }, {
                key: "idleLineComplete",
                value: function() {
                    var e = this;
                    Laya.timer.once(2e3, this, function() {
                        e.idleLine.play(0);
                    });
                }
            }]), ObstacleRotBoard;
        }(),
        yt = function(e) {
            function ObstacleRotWheel() {
                return _classCallCheck(this, ObstacleRotWheel), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleRotWheel).apply(this, arguments));
            }
            return _inherits(ObstacleRotWheel, at), _createClass(ObstacleRotWheel, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis"), this.rotWheelR = this.rotAxis.getChildByName("rotWheelR"),
                        this.rotWheelL = this.rotAxis.getChildByName("rotWheelL");
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.rotAxis.transform.rotate(new Laya.Vector3(0, 1, 0), !0, !1), this.rotWheelR.transform.rotate(new Laya.Vector3(0, 0, 3), !0, !1),
                        this.rotWheelL.transform.rotate(new Laya.Vector3(0, 0, 3), !0, !1);
                }
            }]), ObstacleRotWheel;
        }(),
        ft = function(e) {
            function ObstacleSmallWheel() {
                var e;
                return _classCallCheck(this, ObstacleSmallWheel), (e = _possibleConstructorReturn(this, _getPrototypeOf(ObstacleSmallWheel).apply(this, arguments))).releaseSpeed = new Laya.Vector3(0, .3, 0),
                    e._defaultRotSpeed = 1, e._hijackRotSpeed = 2.5, e._dctList = new Array(), e._releaseAngles = 160,
                    e._curAngle = 0, e._curRotSpeed = 1, e._endAngle = 0, e._isHijackRole = !1, e;
            }
            return _inherits(ObstacleSmallWheel, at), _createClass(ObstacleSmallWheel, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis"), this._FX_FKXCZ_glGlow1 = this.rotAxis.getChildByName("FX_FKXCZ_glGlow1"),
                        this._FX_FKXCZ_glGlow1.active = !1;
                    for (var e = this.rotAxis.getChildByName("cj_dj_gl_01_mx"), t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        this._dctList.push(i);
                    }
                }
            }, {
                key: "onEnable",
                value: function() {
                    this._curAngle = 0, this._curRotSpeed = this._defaultRotSpeed, this._isHijackRole = !1,
                        this.rotAxis.transform.localRotationEuler = new Laya.Vector3(this._curAngle, 0, 0),
                        _get(_getPrototypeOf(ObstacleSmallWheel.prototype), "onEnable", this).call(this);
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.isUsed && !this._isHijackRole || (this._curAngle = (this._curAngle += this._curRotSpeed) % 360,
                            this.rotAxis.transform.localRotationEuler = new Laya.Vector3(this._curAngle, 0, 0)),
                        this._isHijackRole && (this._endAngle > 0 ? this._endAngle -= this._curRotSpeed : (this.releaseRole(),
                            this._isHijackRole = !1));
                }
            }, {
                key: "onHijackRole",
                value: function(e) {
                    this.curhijackObj = e, this._FX_FKXCZ_glGlow1.active = !0, this._curRotSpeed = this._hijackRotSpeed;
                    for (var t = 0; t < this._dctList.length; t++) {
                        if (this._dctList[t] == e) {
                            var i = 90 * t - this._curAngle + this._releaseAngles;
                            this._endAngle = i < 0 ? i + 360 : i;
                            break;
                        }
                    }
                    this._isHijackRole = !0;
                }
            }, {
                key: "onReleaseRole",
                value: function() {
                    this._FX_FKXCZ_glGlow1.active = !1;
                }
            }]), ObstacleSmallWheel;
        }(),
        gt = function(e) {
            function ObstacleSwing() {
                return _classCallCheck(this, ObstacleSwing), _possibleConstructorReturn(this, _getPrototypeOf(ObstacleSwing).apply(this, arguments));
            }
            return _inherits(ObstacleSwing, at), _createClass(ObstacleSwing, [{
                key: "onInit",
                value: function() {
                    this.rotAxis = this.gameObject.getChildByName("rotAxis"), this.cj_dj_dxcz_01_mx = this.rotAxis.getChildByName("cj_dj_dxcz_01_mx");
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(ObstacleSwing.prototype), "onEnable", this).call(this), this.idleLine || (this.rotAxis.transform.localRotationEuler = new Laya.Vector3(45, 0, 0),
                        this.idleLine = new TimelineLite(), this.idleLine.eventCallback("onComplete", this.idleLineComplete.bind(this)),
                        this.idleLine.eventCallback("onReverseComplete", this.idleLineReverseComplete.bind(this)),
                        this.idleLine.add(TweenLite.to(this.rotAxis.transform, 1.5, {
                            localRotationEulerX: -45,
                            ease: Quad.easeInOut
                        })), this.idleLine.play(0));
                }
            }, {
                key: "idleLineComplete",
                value: function() {
                    this.idleLine.reverse(), this.releaseRole();
                }
            }, {
                key: "idleLineReverseComplete",
                value: function() {
                    this.idleLine.play();
                }
            }]), ObstacleSwing;
        }(),
        mt = function(e) {
            function AiCheck() {
                return _classCallCheck(this, AiCheck), _possibleConstructorReturn(this, _getPrototypeOf(AiCheck).apply(this, arguments));
            }
            return _inherits(AiCheck, Laya.Script3D), _createClass(AiCheck, [{
                key: "onAwake",
                value: function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform;
                }
            }, {
                key: "OnInit",
                value: function(e) {
                    this.owerPlayer = e;
                }
            }, {
                key: "onTriggerEnter",
                value: function(e) {
                    this.owerPlayer.onCheck(e.owner.name);
                }
            }]), AiCheck;
        }(),
        vt = function() {
            function Tools() {
                _classCallCheck(this, Tools);
            }
            return _createClass(Tools, null, [{
                key: "getComOnAllParent",
                value: function(e, t) {
                    if (null == e) return null;
                    var i = e.getComponent(t);
                    return null != i ? i : Tools.getComOnAllParent(e.parent, t);
                }
            }, {
                key: "getCompOnParent",
                value: function(e, t) {
                    if (null == e) return null;
                    var i = e.getComponent(t);
                    return null != i ? i : null != e.parent ? e.parent.getComponent(t) : null;
                }
            }, {
                key: "linearModel",
                value: function(e, t, i) {
                    var n = new Laya.Vector3(),
                        a = new Laya.Vector3(),
                        o = new Laya.Vector3();
                    if (e instanceof Laya.MeshSprite3D)
                        for (var s = e, r = s.meshFilter.sharedMesh, l = r._vertexBuffers[0], c = l.getFloat32Data(), h = r.getIndices(), u = l.vertexDeclaration.vertexStride / 4, d = 0, _ = 0, p = 0; p < h.length; p += 3) d = 0,
                            _ = 0, n.x = c[h[p + d] * u + _++], n.y = c[h[p + d] * u + _++], n.z = c[h[p + d] * u + _++],
                            d++, _ = 0, a.x = c[h[p + d] * u + _++], a.y = c[h[p + d] * u + _++], a.z = c[h[p + d] * u + _++],
                            d++, _ = 0, o.x = c[h[p + d] * u + _++], o.y = c[h[p + d] * u + _++], o.z = c[h[p + d] * u + _++],
                            d++, Laya.Vector3.transformCoordinate(n, s.transform.worldMatrix, n), Laya.Vector3.transformCoordinate(a, s.transform.worldMatrix, a),
                            Laya.Vector3.transformCoordinate(o, s.transform.worldMatrix, o), t.addLine(n, a, i, i),
                            t.addLine(a, o, i, i), t.addLine(o, n, i, i);
                    p = 0;
                    for (var y = e.numChildren; p < y; p++) this.linearModel(e.getChildAt(p), t, i);
                }
            }, {
                key: "findChild",
                value: function(e, t) {
                    if (e.name == t) return e;
                    for (var i = 0; i < e.numChildren; i++) {
                        var n = e.getChildAt(i),
                            a = this.findChild(n, t);
                        if (a) return a;
                    }
                    return null;
                }
            }, {
                key: "getShaderData",
                value: function() {
                    for (var e = {}, t = new Array(), i = 0; i < Laya.Shader3D.debugShaderVariantCollection.variantCount; i++) {
                        var n = Laya.Shader3D.debugShaderVariantCollection.getByIndex(i),
                            a = n.shader.name;
                        e[a] || (e[a] = []), t = e[a];
                        var o = {};
                        o.defineNames = n.defineNames, o.passIndex = n.passIndex, o.subShaderIndex = n.subShaderIndex,
                            t.push(o);
                    }
                    return console.log("ShaderData: ", e), e;
                }
            }, {
                key: "compileShader",
                value: function(e) {
                    var t = e;
                    for (var i in console.log(e), t)
                        for (var n = t[i], a = 0; a < n.length; a++) {
                            var o = n[a];
                            Laya.Shader3D.compileShaderByDefineNames(i, o.subShaderIndex, o.passIndex, o.defineNames);
                        }
                }
            }]), Tools;
        }(),
        kt = function(e) {
            function HeadTrigger() {
                return _classCallCheck(this, HeadTrigger), _possibleConstructorReturn(this, _getPrototypeOf(HeadTrigger).apply(this, arguments));
            }
            return _inherits(HeadTrigger, Laya.Script3D), _createClass(HeadTrigger, [{
                key: "onAwake",
                value: function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform;
                }
            }, {
                key: "OnInit",
                value: function(e) {
                    this.owerPlayer = e;
                }
            }, {
                key: "OnReset",
                value: function() {}
            }, {
                key: "onTriggerEnter",
                value: function(e) {
                    this.owerPlayer && this.owerPlayer.onHeadTrigger(e.owner);
                }
            }]), HeadTrigger;
        }(),
        St = function() {
            function StateMachine() {
                _classCallCheck(this, StateMachine), this._curState = null, this._dictState = new Map();
            }
            return _createClass(StateMachine, [{
                key: "RegisterState",
                value: function(e) {
                    return null != e && (this._dictState.has(e.GetStateID()) ? (console.warn("状态已经存在，不需要重复注册,状态id=", e.GetStateID()), !1) : (this._dictState.set(e.GetStateID(), e), !0));
                }
            }, {
                key: "GetState",
                value: function(e) {
                    return this._dictState.get(e);
                }
            }, {
                key: "StopState",
                value: function(e) {
                    null != this._curState && (this._curState.OnLeave(null, e), this._curState = null);
                }
            }, {
                key: "CancelState",
                value: function(e) {
                    return !!this._dictState.has(e) && ((!this._curState || this._curState.GetStateID() != e) && this._dictState.delete(e));
                }
            }, {
                key: "SwitchState",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (this._curState && this._curState.GetStateID() == e) return !1;
                    var n = null;
                    if (!(n = this._dictState.get(e)) || void 0 === n) return !1;
                    var a = this._curState;
                    a && a.OnLeave(n, t), this.beTweenSwitchState && i && this.beTweenSwitchState.apply(i),
                        this._curState = n;
                    var o = [];
                    return o.push(this), o.push(a), o = o.concat(t), n && n.OnEnter.apply(n, o), !0;
                }
            }, {
                key: "GetCurState",
                value: function() {
                    return this._curState;
                }
            }, {
                key: "GetCurStateId",
                value: function() {
                    return this._curState.GetStateID();
                }
            }, {
                key: "IsInState",
                value: function(e) {
                    return !!this._curState && this._curState.GetStateID() == e;
                }
            }, {
                key: "OnUpdate",
                value: function() {
                    this._curState && this._curState.OnUpdate instanceof Function && this._curState.OnUpdate();
                }
            }]), StateMachine;
        }(),
        wt = function() {
            function StateDeath(e) {
                _classCallCheck(this, StateDeath), this.ower = e;
            }
            return _createClass(StateDeath, [{
                key: "GetStateID",
                value: function() {
                    return 5;
                }
            }, {
                key: "OnEnter",
                value: function(e, t, i) {
                    this.ower.playAni("daodi_01"), "PlayerPos" == this.ower.gameObject.name ? Tt.instance.onPlayerDeath() : this.ower.revive();
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {}
            }, {
                key: "OnUpdate",
                value: function() {}
            }]), StateDeath;
        }(),
        Ct = function() {
            function StateHijack(e) {
                _classCallCheck(this, StateHijack), this.ower = e;
            }
            return _createClass(StateHijack, [{
                key: "GetStateID",
                value: function() {
                    return 6;
                }
            }, {
                key: "OnEnter",
                value: function(e, t, i) {
                    this.ower.playAni(i.aniName), this.ower.character.enabled = !1, this.hijackObj = i.hijackObj,
                        this.HijackPos = this.hijackObj.getChildByName("HijackPos"), this.HijackPos.addChild(this.ower.player);
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {
                    this.ower.character.enabled = !0, this.ower.transform.position = this.HijackPos.transform.position.clone(),
                        this.ower.gameObject.addChild(this.ower.player), this.hijackObj = null, this.ower.player.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        this.ower.player.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                }
            }, {
                key: "OnUpdate",
                value: function() {
                    var e = this.HijackPos.transform.position;
                    Laya.Vector3.lerp(this.ower.transform.position, e, .2, e);
                    var t = this.HijackPos.transform.rotationEuler;
                    this.ower.transform.position = new Laya.Vector3(e.x, e.y, e.z), this.ower.player.transform.rotationEuler = new Laya.Vector3(t.x, t.y, t.z);
                }
            }]), StateHijack;
        }(),
        bt = function() {
            function StateIdle(e) {
                _classCallCheck(this, StateIdle), this.ower = e;
            }
            return _createClass(StateIdle, [{
                key: "GetStateID",
                value: function() {
                    return 0;
                }
            }, {
                key: "OnEnter",
                value: function(e, t, i) {
                    var n = i ? i.aniName : "yangtou_01";
                    this.ower.playAni(n);
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {}
            }, {
                key: "OnUpdate",
                value: function() {
                    if(Laya.timer.delta < 9)
                        Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
                    Laya.Vector3.lerp(this.ower._curSpeed, this.ower._idleSpeed, .1, this.ower._curSpeed),
                        this.ower.isKeyPress && this.ower.SwitchState(1, []);
                }
            }]), StateIdle;
        }(),
        Lt = function() {
            function StateJump(e) {
                _classCallCheck(this, StateJump), this.ower = e;
            }
            return _createClass(StateJump, [{
                key: "GetStateID",
                value: function() {
                    return 3;
                }
            }, {
                key: "OnEnter",
                value: function(e, t, i) {
                    var n = i && i.aniName ? i.aniName : "xialuo_01",
                        a = i && i.speed ? i.speed : new Laya.Vector3(0, .2, 0);
                    this.ower.playAni(n), "benpao_01" == n && this.ower.pauseAni(), this.ower.character.jump(a),
                        this._jumpTime = 0, this._jumpPos = this.ower.transform.position.clone();
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {}
            }, {
                key: "OnUpdate",
                value: function() {
                    this.ower._curSpeed = new Laya.Vector3(0, 0, .1), this.ower.character.isGrounded && this.ower.onLand();
                }
            }]), StateJump;
        }(),
        Rt = function() {
            function StateKnockback(e) {
                _classCallCheck(this, StateKnockback), this.curKnockbackTime = 0, this.ower = e;
            }
            return _createClass(StateKnockback, [{
                key: "GetStateID",
                value: function() {
                    return 2;
                }
            }, {
                key: "OnEnter",
                value: function(e, t, i) {
                    this.ower._curSpeed.setValue(this.ower._knockbackSpeed.x, this.ower._knockbackSpeed.y, this.ower._knockbackSpeed.z),
                        this.ower.playAni("shouji_01"), this.curKnockbackTime = this.ower._knockbackTime;
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {}
            }, {
                key: "OnUpdate",
                value: function() {
                    Laya.Vector3.lerp(this.ower._curSpeed, this.ower._idleSpeed, .1, this.ower._curSpeed),
                        this.curKnockbackTime -= Laya.timer.delta, this.curKnockbackTime < 0 && this.ower.SwitchState(0, []);
                }
            }]), StateKnockback;
        }(),
        Pt = function() {
            function StateRun(e) {
                _classCallCheck(this, StateRun), this.ower = e;
            }
            return _createClass(StateRun, [{
                key: "GetStateID",
                value: function() {
                    return 1;
                }
            }, {
                key: "OnEnter",
                value: function(e, t) {
                    this.ower.isSpeedUp ? this.ower.playEffectSystem(this.ower.FX_FKXCZ_Speed) : this.ower.playEffectSystem(this.ower.FX_FKXCZ_Move),
                        this.ower.playAni("benpao_01");
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {
                    this.ower.stopEffectSystem(this.ower.FX_FKXCZ_Speed), this.ower.stopEffectSystem(this.ower.FX_FKXCZ_Move);
                }
            }, {
                key: "OnUpdate",
                value: function() {
                    "ditou_01" == this.ower.curAniName && this.ower.ani.getCurrentAnimatorPlayState().normalizedTime >= 1 && this.ower.playAni("benpao_01");
                    var e = new Laya.Vector3();
                    e = this.ower.isSpeedUp ? this.ower._superSpeed : this.ower._moveSpeed, Laya.Vector3.lerp(this.ower._curSpeed, e, .1, this.ower._curSpeed),
                        this.ower.isKeyPress || this.ower.SwitchState(0, []), this.ower.character.isGrounded || this.ower.jump(new Laya.Vector3(0, .1, 0), "benpao_01");
                }
            }]), StateRun;
        }(),
        At = function() {
            function StateStandUp(e) {
                _classCallCheck(this, StateStandUp), this.curStandUpTime = 0, this.ower = e;
            }
            return _createClass(StateStandUp, [{
                key: "GetStateID",
                value: function() {
                    return 7;
                }
            }, {
                key: "OnEnter",
                value: function(e, t) {
                    this.ower.playAni("paqi_01"), this.curStandUpTime = this.ower._standUpTime;
                }
            }, {
                key: "OnLeave",
                value: function(e, t) {}
            }, {
                key: "OnUpdate",
                value: function() {
                    Laya.Vector3.lerp(this.ower._curSpeed, this.ower._idleSpeed, .2, this.ower._curSpeed),
                        this.curStandUpTime -= Laya.timer.delta, this.curStandUpTime < 0 && this.ower.SwitchState(0, []);
                }
            }]), StateStandUp;
        }(),
        It = function(e) {
            function PlayerContrl() {
                var e;
                return _classCallCheck(this, PlayerContrl), (e = _possibleConstructorReturn(this, _getPrototypeOf(PlayerContrl).apply(this, arguments)))._moveSpeed = new Laya.Vector3(0, 0, .15),
                    e._idleSpeed = new Laya.Vector3(0, 0, 0), e._knockbackSpeed = new Laya.Vector3(0, 0, -.25),
                    e._knockbackTime = 400, e._superSpeed = new Laya.Vector3(0, 0, .3), e._curSpeed = new Laya.Vector3(0, 0, 0),
                    e._standUpTime = 1e3, e._isKeyPress = !1, e.fsm = new St(), e.defaultState = 0,
                    e._forwardDirect = new Laya.Vector3(), e._curRoadNum = 0, e._oneFrameCheckPoint = 5,
                    e._restartPos = new Laya.Vector3(-.8, 0, 0), e._restartRot = new Laya.Vector3(0, 0, 0),
                    e._restartRoadNum = 0, e._curSkinId = -1, e;
            }
            return _inherits(PlayerContrl, Laya.Script3D), _createClass(PlayerContrl, [{
                key: "onAwake",
                value: function() {}
            }, {
                key: "onEnable",
                value: function() {
                    this.gameObject = this.owner, this.transform = this.gameObject.transform, this.character = this.owner.addComponent(Laya.CharacterController);
                    var e = new Laya.CapsuleColliderShape(.75, 2);
                    e.localOffset = new Laya.Vector3(0, 1, 0), this.character.colliderShape = e, this.player = this.owner.getChildByName("player"),
                        this.changeSkin(1), this.FX_FKXCZ_Move = this.owner.getChildByName("FX_FKXCZ_Move"),
                        this.FX_FKXCZ_Speed = this.owner.getChildByName("FX_FKXCZ_Speed"), this.stopEffectSystem(this.FX_FKXCZ_Move),
                        this.stopEffectSystem(this.FX_FKXCZ_Speed), this.fsm.RegisterState(new bt(this)),
                        this.fsm.RegisterState(new Rt(this)), this.fsm.RegisterState(new Pt(this)), this.fsm.RegisterState(new Lt(this)),
                        this.fsm.RegisterState(new Ct(this)), this.fsm.RegisterState(new At(this)), this.fsm.RegisterState(new wt(this)),
                        this.fsm.SwitchState(this.defaultState, {
                            aniName: "daiji_01"
                        }, this);
                }
            }, {
                key: "onDisable",
                value: function() {}
            }, {
                key: "onStartGame",
                value: function() {
                    this._curRoadNum = 0, Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.move),
                        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.stop),
                        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.move),
                        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stop);
                }
            }, {
                key: "onEndGame",
                value: function() {
                    this.stop(), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.move), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.stop);
                }
            }, {
                key: "resetRole",
                value: function() {
                    this.onEndGame(), this.fsm.SwitchState(this.defaultState, {
                            aniName: "daiji_01"
                        }, this), this._curSpeed = new Laya.Vector3(0, 0, 0), this.gameObject.transform.position = new Laya.Vector3(-.8, 0, 0),
                        this.gameObject.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this._curRoadNum = 0,
                        this.recordPlayerPoint();
                }
            }, {
                key: "onUpdate",
                value: function() {
                    if (this.fsm.OnUpdate(), 6 != this.fsm.GetCurState().GetStateID() && 5 != this.fsm.GetCurState().GetStateID() && (this.gameObject.transform.translate(this._curSpeed, !0),
                            this.rolePathPoint && this._curRoadNum < this.rolePathPoint.length - 1)) {
                        for (var e = new Laya.Vector2(this.rolePathPoint[this._curRoadNum].x - this.transform.position.x, this.rolePathPoint[this._curRoadNum].z - this.transform.position.z), t = Laya.Vector2.scalarLength(e), i = 1; i < this._oneFrameCheckPoint; i++) {
                            var n = this._curRoadNum + i;
                            if (!(this.rolePathPoint && n < this.rolePathPoint.length - 1)) break;
                            e = new Laya.Vector2(this.rolePathPoint[n].x - this.transform.position.x, this.rolePathPoint[n].z - this.transform.position.z);
                            var a = Laya.Vector2.scalarLength(e);
                            if (!(a < t)) break;
                            t = a, this._curRoadNum = n;
                        }
                        var o = this.rolePathPoint[this._curRoadNum + 1].x - this.transform.position.x,
                            s = this.rolePathPoint[this._curRoadNum + 1].z - this.transform.position.z,
                            r = 180 * Math.atan2(o, s) / Math.PI;
                        this.transform.localRotationEuler = new Laya.Vector3(0, r, 0);
                    }
                }
            }, {
                key: "SwitchState",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return this.fsm.SwitchState(e, t, i);
                }
            }, {
                key: "move",
                value: function() {
                    this._isKeyPress = !0;
                }
            }, {
                key: "stop",
                value: function() {
                    this._isKeyPress = !1;
                }
            }, {
                key: "knockback",
                value: function() {
                    6 != this.fsm.GetCurStateId() && this.SwitchState(2, [], this);
                }
            }, {
                key: "hijack",
                value: function(e, t) {
                    this.SwitchState(6, {
                        hijackObj: e,
                        aniName: t
                    }, this), "PlayerPos" == this.gameObject.name && Tt.instance.changeScore(50);
                }
            }, {
                key: "endHijack",
                value: function(e) {
                    this.jump(e);
                }
            }, {
                key: "onLand",
                value: function() {
                    3 == this.fsm.GetCurStateId() && this.SwitchState(0, [], this);
                }
            }, {
                key: "jump",
                value: function(e, t) {
                    this.SwitchState(3, {
                        speed: e,
                        aniName: t
                    }, this);
                }
            }, {
                key: "speedUp",
                value: function() {
                    var e = this;
                    this.isSpeedUp || (this.isSpeedUp = !0, "PlayerPos" == this.gameObject.name && Laya.stage.event("SpeedUp"),
                        1 == this.fsm.GetCurState().GetStateID() && (this.playEffectSystem(this.FX_FKXCZ_Speed),
                            this.stopEffectSystem(this.FX_FKXCZ_Move)), Laya.timer.once(3500, this, function() {
                            e.isSpeedUp = !1, "PlayerPos" == e.gameObject.name && Laya.stage.event("SpeedOver"),
                                1 == e.fsm.GetCurState().GetStateID() && (e.playEffectSystem(e.FX_FKXCZ_Move), e.stopEffectSystem(e.FX_FKXCZ_Speed));
                        }));
                }
            }, {
                key: "death",
                value: function() {
                    this.SwitchState(5, []);
                }
            }, {
                key: "revive",
                value: function() {
                    console.log("复活玩家 ", this.gameObject.name),
                        Laya.timer.once(1e3, this, () => {
                            this.transform.localPosition = new Laya.Vector3(this._restartPos.x, this._restartPos.y, this._restartPos.z),
                                this.transform.localRotationEuler = new Laya.Vector3(this._restartRot.x, this._restartRot.y, this._restartRot.z),
                                this._curRoadNum = this._restartRoadNum, this.SwitchState(0, []);
                        })

                }
            }, {
                key: "playAni",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                    this._ani && (this.curAniName = e, this._ani.speed = 1, this._ani.crossFade(e, t));
                }
            }, {
                key: "pauseAni",
                value: function() {
                    this._ani && (this._ani.speed = 0);
                }
            }, {
                key: "changeSkin",
                value: function(e) {
                    if (this._curSkinId != e && (this._ani = null, this.headTrigger && (this.headTrigger.owerPlayer = null),
                            this.headTrigger = null, null != this._curSkinModel && (nt.I.recoveryObj(this._curSkinModel),
                                this._curSkinModel = null), this._curSkinId = e, 0 != e)) {
                        var t = "js_js_0".concat(e, "_mx"),
                            i = nt.I.getObj(t);
                        if (i) {
                            this.player.addChild(i), this._curSkinModel = i, this._ani = this._curSkinModel.getComponent(Laya.Animator),
                                this.playAni("daiji_01");
                            var n = vt.findChild(this.player, "HeadTrigger");
                            this.headTrigger = n.getComponent(kt), null == this.headTrigger && (this.headTrigger = n.addComponent(kt)),
                                this.headTrigger.OnInit(this), this._curSkinId = e;
                        }
                    }
                }
            }, {
                key: "onHeadTrigger",
                value: function(e) {
                    switch (e.name) {
                        case "Capsule":
                            var t = vt.getComOnAllParent(e, _t);
                            t && t.jumpRole(this);
                            break;

                        case "cj_dj_sd_01_mx":
                        case "cj_dj_sd_02_mx":
                        case "cj_dj_cl_02_mx":
                        case "cj_dj_gl_01_mx":
                        case "cj_dj_gl_02_mx":
                            Tt.instance.playEffect("FX_FKXCZ_Duang", null, this.headTrigger.transform.position),
                                this.knockback(), "PlayerPos" == this.owner.name && (C.vibrate(!0), C.playSoundEffect("hit.mp3", 1));
                            break;

                        case "cj_dj_cz_01_mx":
                            Tt.instance.playEffect("FX_FKXCZ_Duang", null, this.headTrigger.transform.position),
                                this.death(), "PlayerPos" == this.owner.name && (C.vibrate(!0), C.playSoundEffect("hit.mp3", 1));
                            break;

                        case "cj_dj_dct_01_mx":
                            var i = vt.getComOnAllParent(e, at);
                            i && 2 != this.fsm.GetCurStateId() && i.hijackRole(this, e);
                            break;

                        case "cj_dj_dxcz_01_mx":
                            var n = vt.getComOnAllParent(e, at);
                            n && 2 != this.fsm.GetCurStateId() && n.hijackRole(this, e);
                            break;

                        case "cj_dj_js_01_mx":
                            this.speedUp(), e.active = !1, Tt.instance.playEffect("FX_FKXCZ_SpeedHit", null, e.transform.position);
                            break;

                        case "releaseCheck":
                            var a = vt.getComOnAllParent(e, at);
                            a && a.releaseRole();
                            break;

                        case "RestartPoint":
                            this.recordPlayerPoint();
                    }
                }
            }, {
                key: "onCollisionEnter",
                value: function(e) {
                    switch (e.other.owner.name) {
                        case "cj_sd_01_mx":
                        case "cj_sd_02_mx":
                        case "cj_sd_03_mx":
                        case "cj_sd_04_mx":
                        case "cj_sd_05_mx":
                        case "cj_sd_06_mx":
                        case "cj_zd_01_mx":
                        case "cj_zd_02_mx":
                        case "cj_zd_03_mx":
                            this.onLand();
                            break;

                        case "DeadZone":
                            this.death();
                    }
                }
            }, {
                key: "stopEffectSystem",
                value: function(e) {
                    e.particleSystem.stop();
                    for (var t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        i && i.particleSystem.stop();
                    }
                }
            }, {
                key: "playEffectSystem",
                value: function(e) {
                    e.particleSystem.play();
                    for (var t = 0; t < e.numChildren; t++) {
                        var i = e.getChildAt(t);
                        i && i.particleSystem.play();
                    }
                }
            }, {
                key: "recordPlayerPoint",
                value: function() {
                    this._restartPos = this.transform.localPosition.clone(), this._restartRot = this.transform.localRotationEuler.clone(),
                        this._restartRoadNum = this._curRoadNum;
                }
            }, {
                key: "isKeyPress",
                get: function() {
                    return this._isKeyPress;
                }
            }, {
                key: "ani",
                get: function() {
                    return this._ani;
                }
            }]), PlayerContrl;
        }(),
        xt = function(e) {
            function AIPlayerContrl() {
                var e;
                return _classCallCheck(this, AIPlayerContrl), (e = _possibleConstructorReturn(this, _getPrototypeOf(AIPlayerContrl).apply(this, arguments)))._isOrderMove = !1,
                    e._isPause = !1, e._restartPos = new Laya.Vector3(.8, .1, 0), e._restartRot = new Laya.Vector3(0, 0, 0),
                    e._restartRoadNum = 0, e;
            }
            return _inherits(AIPlayerContrl, It), _createClass(AIPlayerContrl, [{
                key: "onAwake",
                value: function() {
                    _get(_getPrototypeOf(AIPlayerContrl.prototype), "onAwake", this).call(this), Laya.stage.on("GamePause", this, this.onGamePause),
                        Laya.stage.on("GameRecovery", this, this.GameRecovery);
                }
            }, {
                key: "onEnable",
                value: function() {
                    _get(_getPrototypeOf(AIPlayerContrl.prototype), "onEnable", this).call(this);
                    var e = vt.findChild(this.player, "AiCheck");
                    e ? (this.AiCheck = e.addComponent(mt), this.AiCheck.OnInit(this)) : this._isOrderMove = !1;
                }
            }, {
                key: "onStartGame",
                value: function() {
                    Laya.timer.once(750, this, this.move), this._isPause = !1;
                }
            }, {
                key: "onEndGame",
                value: function() {
                    this._isPause = !1, this.stop();
                }
            }, {
                key: "onGamePause",
                value: function() {
                    console.log("AI暂停"), this._isOrderMove = !1, this.orderToStop(), this._isPause = !0;
                }
            }, {
                key: "GameRecovery",
                value: function() {
                    console.log("AI恢复"), this._isPause = !1, this._isOrderMove = !1, this.orderToMove();
                }
            }, {
                key: "onUpdate",
                value: function() {
                    _get(_getPrototypeOf(AIPlayerContrl.prototype), "onUpdate", this).call(this);
                }
            }, {
                key: "onCheck",
                value: function(e) {
                    switch (e) {
                        case "cube":
                            this.orderToStop();
                            break;

                        case "cj_dj_dct_01_mx":
                        case "cj_dj_dxcz_01_mx":
                            this.orderToMove();
                    }
                }
            }, {
                key: "orderToMove",
                value: function() {
                    this._isOrderMove || this._isPause || (this._isOrderMove = !0, this._isKeyPress = !0,
                        Laya.timer.once(1e3, this, this.onOrderMove));
                }
            }, {
                key: "orderToStop",
                value: function() {
                    this._isOrderMove || this._isPause || (this._isKeyPress = !1);
                }
            }, {
                key: "onOrderMove",
                value: function() {
                    this._isOrderMove = !1;
                }
            }, {
                key: "revive",
                value: function() {
                    _get(_getPrototypeOf(AIPlayerContrl.prototype), "revive", this).call(this), this.orderToStop(),
                        Laya.timer.once(1e3, this, this.orderToMove);
                }
            }, {
                key: "resetRole",
                value: function() {
                    this.fsm.SwitchState(this.defaultState, {
                            aniName: "daiji_01"
                        }, this), this.gameObject.transform.position = new Laya.Vector3(.8, 0, 0), this.gameObject.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                        this._curSpeed = new Laya.Vector3(0, 0, 0), this._curRoadNum = 0, this._restartPos = this.gameObject.transform.position.clone(),
                        this.recordPlayerPoint(), this.changeSkin(0);
                }
            }, {
                key: "changeSkin",
                value: function(e) {
                    0 != e && Tt.instance.playEffect("FX_FKXCZ_Plug", null, this.transform.position),
                        _get(_getPrototypeOf(AIPlayerContrl.prototype), "changeSkin", this).call(this, e);
                }
            }]), AIPlayerContrl;
        }(),
        Tt = function() {
            function GameManager() {
                _classCallCheck(this, GameManager),
                    this._mapIndex = 0,
                    this.gameState = 0,
                    this._score = 0,
                    this.shaderObj = {}, G.on(E.S2G_BEGIN_GAME, this.OnStartGame, this), G.on(E.S2G_INIT_GAME_READY, this.OnReadyGame, this),
                    G.on(E.S2G_REBORN_GAME_READY, this.OnRevive, this), G.on(E.S2G_USE_SKIN, this.OnChangeSkin, this),
                    G.on(E.S2G_RESET_GAME_READY, this.OnResetGame, this);
            }
            return _createClass(GameManager, [{
                key: "InitGame",
                value: function() {
                    console.log("首次进入游戏，初始化游戏!");
                    var e = new Laya.Image();
                    e.skin = "bg.jpg", Laya.stage.addChildAt(e, 0), e.left = e.right = e.top = e.bottom = 0,
                        this._mapDatas = Laya.loader.getRes("res/Export/map.json");
                    var t = Laya.Loader.getRes("res/LayaScene_ModelScene/Conventional/ModelScene.lh");
                    nt.I.ImportObjByParent(t),
                        this._scene3D = Laya.stage.addChildAt(Laya.Loader.getRes("res/LayaScene_SampleScene/Conventional/SampleScene.ls"), 1);
                    var i = Laya.loader.getRes("res/Export/shaderObj.json");
                    vt.compileShader(i), this._effectRoot = this._scene3D.addChild(new Laya.Sprite3D("effectRoot")),
                        this.CameraPos = this._scene3D.getChildByName("CameraPos"),
                        this.CameraPos.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        this.CameraPos.transform.localRotationEuler = new Laya.Vector3(0, -15, 0),
                        this.Camera = this.CameraPos.getChildByName("camerParent").getChildAt(0),
                        this.Camera.farPlane = 40, this.FX_FKXCZ_Wind = this.CameraPos.getChildByName("FX_FKXCZ_Wind"),
                        this.FX_FKXCZ_Wind.particleSystem.stop(), Laya.stage.on("SpeedUp", this, this.onWindEffectUp),
                        Laya.stage.on("SpeedOver", this, this.onWindEffectOver),
                        // this._mapIndex = 0,
                        this._mapIndex = Laya.LocalStorage.getItem("Plug-Head-Level") ? Laya.LocalStorage.getItem("Plug-Head-Level") : 0;

                        console.info("MAP");
                    this._curmapData = this._mapDatas.mapJsons[this._mapIndex],
                        console.log(),
                        window.currentLevel = this._mapIndex,
                        this.PlayerBase = this._scene3D.getChildByName("PlayerPos"), this.PlayerBase.active = !1,
                        this.AIPlayerBase = this._scene3D.getChildByName("AIPlayerPos"), this.AIPlayerBase.active = !1,
                        this.resetGameScene(), G.emit(E.G2S_INIT_GAME_READY_SUCCESS), Laya.stage.on("CameraDraw", this, this.cammeraDraw);

                }
            }, {
                key: "onKeyUp",
                value: function(e) {
                    if (e.keyCode == Laya.Keyboard.B && this.playEffect("FX_FKXCZ_BlackSmoke", null, new Laya.Vector3(0, 1, 0)),
                        e.keyCode == Laya.Keyboard.K && (Laya.stage.event("GameRecovery"), this.playerContrl.revive()),
                        e.keyCode == Laya.Keyboard.D && this.playerContrl.death(), e.keyCode == Laya.Keyboard.E && this.playerContrl.recordPlayerPoint(),
                        e.keyCode == Laya.Keyboard.T && vt.getShaderData(), e.keyCode == Laya.Keyboard.Y) {
                        var t = Laya.loader.getRes("res/Export/map.json");
                        vt.compileShader(t);
                    }
                    e.keyCode == Laya.Keyboard.P && this.playEffect("FX_FKXCZ_Duang");
                }
            }, {
                key: "resetGameScene",
                value: function() {
                    if (this._score = 0, G.emit(E.G2S_UPDATE_CUR_SCORE, {
                            curScore: this._score
                        }), null != this.Road) {
                        for (var e = new Array(), t = this.Road.numChildren, i = 0; i < t; i++) {
                            var n = this.Road.getChildAt(i);
                            e.push(n);
                        }
                        for (var a = 0; a < e.length; a++) {
                            var o = e[a];
                            nt.I.recoveryObj(o);
                        }
                    }

                    this._mapIndex = this._mapIndex % this._mapDatas.mapJsons.length,

                        // console.error("!!!!!!!!!!!!!!!+" + this._mapIndex),

                        this._curmapData = this._mapDatas.mapJsons[this._mapIndex],

                        // console.error("!!!!!!!!!!!!!!!+" + JSON.stringify(this._curmapData)),

                        console.log("加载地图序号 ", this._mapIndex),

                        this.Road = new Laya.Sprite3D(this._curmapData.mapName),
                        this._scene3D.addChild(this.Road), this.Road.active = !0;
                    for (var s = 0; s < this._curmapData.roadModels.length; s++) {
                        var r = this._curmapData.roadModels[s],
                            l = void 0;
                        l = nt.I.getObj(r.roadModelName), this.Road.addChild(l), l.transform.localPosition = new Laya.Vector3(-r.pos.x, r.pos.y, r.pos.z),
                            l.transform.localRotationEuler = new Laya.Vector3(r.rot.x, -r.rot.y, -r.rot.z),
                            l.transform.localScale = new Laya.Vector3(r.size.x, r.size.y, r.size.z);
                        for (var c = 0; c < l.numChildren; c++) {
                            var h = l.getChildAt(c);
                            if (!h.getComponent(at)) switch (h.name) {
                                case "ObstacleBridge":
                                    h.addComponent(rt);
                                    break;

                                case "ObstacleJump":
                                    h.addComponent(_t);
                                    break;

                                case "ObstacleRotWheel":
                                    h.addComponent(yt);
                                    break;

                                case "ObstacleSwing":
                                    h.addComponent(gt);
                                    break;

                                case "ObstacleCircle":
                                    h.addComponent(lt);
                                    break;

                                case "ObstacleRotBoard":
                                    h.addComponent(pt);
                                    break;

                                case "ObstacleHammer":
                                    h.addComponent(dt);
                                    break;

                                case "ObstacleBigWheel":
                                    h.addComponent(ot);
                                    break;

                                case "ObstacleBigWheel_1":
                                    h.addComponent(st);
                                    break;

                                case "ObstacleSmallWheel":
                                    h.addComponent(ft);
                                    break;

                                case "ObstacleElevator":
                                    h.addComponent(ct);
                                    break;

                                case "ObstacleElevator_1":
                                    h.addComponent(ht);
                                    break;

                                case "ObstacleEnd":
                                    h.addComponent(ut);
                                    break;

                                case "ComJiaSu":
                                    for (var u = 0; u < h.numChildren; u++) {
                                        h.getChildAt(u).active = !0;
                                    }
                            }
                        }
                    }
                    null == this.PlayerPos && (this.PlayerPos = this.PlayerBase.clone(), this._scene3D.addChild(this.PlayerPos),
                            this.PlayerPos.active = !0, this.PlayerPos.transform.localPosition = this.PlayerBase.transform.localPosition.clone(),
                            this.playerContrl = this.PlayerPos.addComponent(It)), this.playerContrl.rolePathPoint = this._curmapData.playerPath,
                        this.gameState = 0;
                }
            }, {
                key: "onRoleCompleteGame",
                value: function(e) {
                    "PlayerPos" == e.gameObject.name ? (this.gameState = 1 == this.gameState ? 3 : this.gameState,
                        Laya.timer.once(1000, this, this.GameOver)) : this.gameState = 1 == this.gameState ? 4 : this.gameState;
                }
            }, {
                key: "GameOver",
                value: function() {
                    if (window.gameResult == true) {
                        this._mapIndex++;
                        window.currentLevel = this._mapIndex;
                        Laya.LocalStorage.setItem("Plug-Head-Level", this._mapIndex)
                    }

                    Laya.timer.clear(this, this.cameraFollow),
                        this.playerContrl.onEndGame(),
                        this.AIplayerContrl.onEndGame(),
                        G.emit(E.G2S_GAME_PASS);
                }
            }, {
                key: "playEffect",
                value: function(e, t, i, n, a) {
                    var o = nt.I.getObj(e);
                    (t || this._effectRoot).addChild(o);
                    var s = i || new Laya.Vector3(0, 0, 0);
                    o.transform.localPosition = s;
                    var r = n || new Laya.Vector3(0, 0, 0);
                    o.transform.localRotationEuler = r;
                    var l = a || 2e3;
                    Laya.timer.once(l, this, this.endEffect, [o], !1);
                }
            }, {
                key: "endEffect",
                value: function(e) {
                    this._effectRoot.addChild(e), nt.I.recoveryObj(e);
                }
            }, {
                key: "onPlayerDeath",
                value: function() {
                    Laya.stage.event("GamePause"), Laya.timer.once(1e3, this, function() {
                        G.emit(E.G2S_GAME_FAIL);
                    });
                }
            }, {
                key: "changeScore",
                value: function(e) {
                    this._score += e, G.emit(E.G2S_UPDATE_CUR_SCORE, {
                        curScore: this._score
                    });
                }
            }, {
                key: "OnReadyGame",
                value: function() {
                    console.log("SDK调用 准备游戏 OnReadyGame!");
                }
            }, {
                key: "OnStartGame",
                value: function() {
                    console.log("SDK调用 开始游戏 OnStartGame!"),
                        Laya.timer.frameLoop(1, this, this.cameraFollow),
                        // null == this.AIPlayerPos && (

                        this.AIPlayerPos = this.AIPlayerBase.clone(),
                        this._scene3D.addChild(this.AIPlayerPos),
                        this.AIPlayerPos.active = !0, this.AIPlayerPos.transform.localPosition = this.AIPlayerBase.transform.localPosition.clone(),
                        this.AIplayerContrl = this.AIPlayerPos.addComponent(xt)
                    // ),
                    this.AIplayerContrl.rolePathPoint = this._curmapData.AIPath,
                        1 != this.gameState && 4 != this.gameState && (
                            this.AIplayerContrl.changeSkin(Math.ceil(9 * Math.random())),
                            this.gameState = 1,
                            this.AIplayerContrl.onStartGame()),
                        this.playerContrl.onStartGame();
                }
            }, {
                key: "OnResetGame",
                value: function() {
                    console.log("SDK调用 重置游戏场景，回到游戏准备阶段 OnResetGame!"),
                        this.playerContrl && this.playerContrl.resetRole(),
                        this.AIplayerContrl && this.AIplayerContrl.resetRole(),
                        this.CameraPos.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        this.CameraPos.transform.localRotationEuler = new Laya.Vector3(0, -15, 0),
                        this.resetGameScene();
                }
            }, {
                key: "OnRevive",
                value: function() {
                    console.log("SDK调用 游戏失败时，点击复活按钮继续游戏 OnRevive!"), Laya.stage.event("GameRecovery"),
                        this.playerContrl.revive();
                }
            }, {
                key: "OnChangeSkin",
                value: function(e) {
                    console.log("SDK调用 试用皮肤按钮时调用 ", e.value.id), this.playerContrl.changeSkin(e.value.id);
                }
            }, {
                key: "cameraFollow",
                value: function() {
                    var e = new Laya.Vector3();
                    Laya.Vector3.lerp(this.CameraPos.transform.position, this.PlayerPos.transform.position, .2, e),
                        this.CameraPos.transform.position = e;
                    var t = this.PlayerPos.transform.localRotationEuler.y,
                        i = this.CameraPos.transform.localRotationEuler.y;
                    t > i + 180 ? t -= 360 : t < i - 180 && (t += 360), Math.abs(t - i), i += .08 * (t - i),
                        this.CameraPos.transform.localRotationEuler = new Laya.Vector3(0, i, 0);
                }
            }, {
                key: "onWindEffectUp",
                value: function() {
                    this.FX_FKXCZ_Wind && this.FX_FKXCZ_Wind.particleSystem.play();
                }
            }, {
                key: "onWindEffectOver",
                value: function() {
                    this.FX_FKXCZ_Wind && this.FX_FKXCZ_Wind.particleSystem.stop();
                }
            }, {
                key: "cammeraDraw",
                value: function() {
                    var e = this.CameraPos.getChildByName("camerParent").getChildAt(0);
                    e.transform.localPosition = new Laya.Vector3(0, 0, 0);
                    var t = new TimelineLite();
                    t.add(TweenLite.to(e.transform, 1.5, {
                        localPositionZ: -8,
                        ease: Quad.easeIn
                    })), t.add(TweenLite.to(e.transform, 1.5, {
                        localPositionZ: 0,
                        ease: Quad.easeOut
                    })), t.play(0);
                }
            }, {
                key: "scene3D",
                get: function() {
                    return this._scene3D;
                }
            }, {
                key: "score",
                get: function() {
                    return this._score;
                }
            }], [{
                key: "instance",
                get: function() {
                    return this._instance || (this._instance = new GameManager());
                }
            }]), GameManager;
        }(),
        Bt = function(e) {
            function GameMainScene() {
                return _classCallCheck(this, GameMainScene), _possibleConstructorReturn(this, _getPrototypeOf(GameMainScene).call(this));
            }
            return _inherits(GameMainScene, Laya.Scene), _createClass(GameMainScene, [{
                key: "onEnable",
                value: function() {
                    Tt.instance.InitGame();
                }
            }]), GameMainScene;
        }(),
        Vt = function() {
            function GameConfig$1() {
                _classCallCheck(this, GameConfig$1);
            }
            return _createClass(GameConfig$1, null, [{
                key: "init",
                value: function() {
                    (0, Laya.ClassUtils.regClass)("script/src/game/GameMainScene.ts", Bt);
                }
            }]), GameConfig$1;
        }();
    Vt.width = 750, Vt.height = 1334, Vt.scaleMode = "fixedauto", Vt.screenMode = "none",
        Vt.alignV = "middle", Vt.alignH = "center", Vt.startScene = "views/GameMainScene.scene",
        Vt.sceneRoot = "", Vt.debug = !1, Vt.stat = !1, Vt.physicsDebug = !0, Vt.exportSceneToJson = !0,
        Vt.init(), new(function() {
            function Main() {
                const userAgent = window.navigator.userAgent;
                if (userAgent.indexOf("OS 15_1") > -1) {
                    Config.useWebGL2 = false;
                }

                _classCallCheck(this, Main), window.Laya3D ? Laya3D.init(Vt.width, Vt.height) : Laya.init(Vt.width, Vt.height, Laya.WebGL),
                    Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                    Laya.stage.frameRate = Laya.Stage.FRAME_FAST, Laya.stage.scaleMode = Vt.scaleMode,
                    Laya.stage.screenMode = Vt.screenMode, Laya.stage.alignV = Vt.alignV, Laya.stage.alignH = Vt.alignH,
                    Laya.URL.exportSceneToJson = Vt.exportSceneToJson, (Vt.debug || "true" === Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                    Vt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Vt.stat && Laya.Stat.show(void 0, 100),
                    Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return _createClass(Main, [{
                key: "onVersionLoaded",
                value: function() {
                    platform.getInstance().startup("Plug-Run-Race", () => {
                        var musicurl = [
                            "res/sound/bgm.mp3",
                            "di1.png",
                            "di2.png",
                            "logo.png"
                        ]
                        Laya.loader.load(musicurl, Laya.Handler.create(this, () => {
                            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                        }));
                    })

                }
            }, {
                key: "onConfigLoaded",
                value: function() {
                    Laya.loader.load("sdk_youling/lite/view/YLMain.json", Laya.Handler.create(this, (res) => {
                        tt.configurate(it),
                            tt.deploy();
                    }))
                }
            }]), Main;
        }())();
}();
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

! function(t) {
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    var e, i, r, n, s, a, o, u, h, l, f, p, _, c, d, m, g, v, y, T, w, x, b, M, O, k, C, A = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        P = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        D = 1e-8,
        S = 2 * Math.PI,
        z = S / 4,
        E = 0,
        R = Math.sqrt,
        F = Math.cos,
        B = Math.sin,
        I = function(t) {
            return "string" == typeof t;
        },
        L = function(t) {
            return "function" == typeof t;
        },
        Y = function(t) {
            return "number" == typeof t;
        },
        N = function(t) {
            return void 0 === t;
        },
        U = function(t) {
            return "object" === _typeof(t);
        },
        X = function(t) {
            return !1 !== t;
        },
        q = function() {
            return "undefined" != typeof window;
        },
        V = function(t) {
            return L(t) || I(t);
        },
        j = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Q = Array.isArray,
        G = /(?:-?\.?\d|\.)+/gi,
        W = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Z = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        $ = /[+-]=-?[\.\d]+/,
        J = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        K = {},
        tt = {},
        et = function(t) {
            return (tt = Ct(t, K)) && oi;
        },
        it = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        },
        rt = function(t, e) {
            return !e && console.warn(t);
        },
        nt = function(t, e) {
            return t && (K[t] = e) && tt && (tt[t] = e) || K;
        },
        st = function() {
            return 0;
        },
        at = {},
        ot = [],
        ut = {},
        ht = {},
        lt = {},
        ft = 30,
        pt = [],
        _t = "",
        ct = function(t) {
            var e, i, r = t[0];
            if (U(r) || L(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (i = pt.length; i-- && !pt[i].targetTest(r););
                e = pt[i];
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ee(t[i], e))) || t.splice(i, 1);
            return t;
        },
        dt = function(t) {
            return t._gsap || ct(te(t))[0]._gsap;
        },
        mt = function(t, e, i) {
            return (i = t[e]) && L(i) ? t[e]() : N(i) && t.getAttribute && t.getAttribute(e) || i;
        },
        gt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t;
        },
        vt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0;
        },
        yt = function(t, e) {
            for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
            return r < i;
        },
        Tt = function(t, e, i) {
            var r, n = Y(t[1]),
                s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
                a = t[s];
            if (n && (a.duration = t[1]), a.parent = i, e) {
                for (r = a; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = X(i.vars.inherit) && i.parent;
                a.immediateRender = X(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1];
            }
            return a;
        },
        wt = function() {
            var t, e, i = ot.length,
                r = ot.slice(0);
            for (ut = {}, ot.length = 0, t = 0; t < i; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        xt = function(t, e, i, r) {
            ot.length && wt(), t.render(e, i, r), ot.length && wt();
        },
        bt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(J).length < 2 ? e : I(t) ? t.trim() : t;
        },
        Mt = function(t) {
            return t;
        },
        Ot = function(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
        },
        kt = function(t, e) {
            for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
        },
        Ct = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        },
        At = function _mergeDeep(t, e) {
            for (var i in e) t[i] = U(e[i]) ? _mergeDeep(t[i] || (t[i] = {}), e[i]) : e[i];
            return t;
        },
        Pt = function(t, e) {
            var i, r = {};
            for (i in t) i in e || (r[i] = t[i]);
            return r;
        },
        Dt = function(t) {
            var i = t.parent || e,
                r = t.keyframes ? kt : Ot;
            if (X(t.inherit))
                for (; i;) r(t, i.vars.defaults), i = i.parent || i._dp;
            return t;
        },
        St = function(t, e, i, r) {
            void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
            var n = e._prev,
                s = e._next;
            n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n),
                e._next = e._prev = e.parent = null;
        },
        zt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
        },
        Et = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i;) i._dirty = 1,
                    i = i.parent;
            return t;
        },
        Rt = function _hasNoPausedAncestors(t) {
            return !t || t._ts && _hasNoPausedAncestors(t.parent);
        },
        Ft = function(t) {
            return t._repeat ? Bt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
        },
        Bt = function(t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
        },
        It = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        },
        Lt = function(t) {
            return t._end = vt(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0));
        },
        Yt = function(t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = vt(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
                Lt(t), i._dirty || Et(i, t)), t;
        },
        Nt = function(t, e) {
            var i;
            if ((e._time || e._initted && !e._dur) && (i = It(t.rawTime(), e), (!e._dur || Ht(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)),
                Et(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime),
                        i = i._dp;
                t._zTime = -D;
            }
        },
        Ut = function(t, e, i, r) {
            return e.parent && zt(e), e._start = vt(i + e._delay), e._end = vt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, i, r, n) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var s, a = t[r];
                    if (n)
                        for (s = e[n]; a && a[n] > s;) a = a._prev;
                    a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e,
                        e._prev = a, e.parent = e._dp = t;
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Nt(t, e),
                t;
        },
        Xt = function(t, e) {
            return (K.ScrollTrigger || it("scrollTrigger", e)) && K.ScrollTrigger.create(e, t);
        },
        qt = function(t, e, i, r) {
            return Ye(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && a !== Te.frame ? (ot.push(t),
                t._lazy = [e, r], 1) : void 0 : 1;
        },
        Vt = function(t, e, i, r) {
            var n = t._repeat,
                s = vt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : vt(s * (n + 1) + t._rDelay * n) : s,
                a && !r ? Yt(t, t._tTime = t._tDur * a) : t.parent && Lt(t), i || Et(t.parent, t),
                t;
        },
        jt = function(t) {
            return t instanceof Fe ? Et(t) : Vt(t, t._dur);
        },
        Qt = {
            _start: 0,
            endTime: st
        },
        Gt = function _parsePosition(t, e) {
            var i, r, n = t.labels,
                s = t._recent || Qt,
                a = t.duration() >= 1e8 ? s.endTime(!1) : t._dur;
            return I(e) && (isNaN(e) || e in n) ? "<" === (i = e.charAt(0)) || ">" === i ? ("<" === i ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) : (i = e.indexOf("=")) < 0 ? (e in n || (n[e] = a),
                n[e]) : (r = +(e.charAt(i - 1) + e.substr(i + 1)), i > 1 ? _parsePosition(t, e.substr(0, i - 1)) + r : a + r) : null == e ? a : +e;
        },
        Wt = function(t, e) {
            return t || 0 === t ? e(t) : e;
        },
        Ht = function(t, e, i) {
            return i < t ? t : i > e ? e : i;
        },
        Zt = function(t) {
            return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : "";
        },
        $t = [].slice,
        Jt = function(t, e) {
            return t && U(t) && "length" in t && (!e && !t.length || t.length - 1 in t && U(t[0])) && !t.nodeType && t !== i;
        },
        Kt = function(t, e, i) {
            return void 0 === i && (i = []), t.forEach(function(t) {
                var r;
                return I(t) && !e || Jt(t, 1) ? (r = i).push.apply(r, te(t)) : i.push(t);
            }) || i;
        },
        te = function(t, e) {
            return !I(t) || e || !r && we() ? Q(t) ? Kt(t, e) : Jt(t) ? $t.call(t, 0) : t ? [t] : [] : $t.call(n.querySelectorAll(t), 0);
        },
        ee = function(t) {
            return t.sort(function() {
                return .5 - Math.random();
            });
        },
        ie = function(t) {
            if (L(t)) return t;
            var e = U(t) ? t : {
                    each: t
                },
                i = Ae(e.ease),
                r = e.from || 0,
                n = parseFloat(e.base) || 0,
                s = {},
                a = r > 0 && r < 1,
                o = isNaN(r) || a,
                u = e.axis,
                h = r,
                l = r;
            return I(r) ? h = l = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[r] || 0 : !a && o && (h = r[0], l = r[1]),
                function(t, a, f) {
                    var p, _, c, d, m, g, v, y, T, w = (f || e).length,
                        x = s[w];
                    if (!x) {
                        if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = f[T++].getBoundingClientRect().left) && T < w;);
                            T--;
                        }
                        for (x = s[w] = [], p = o ? Math.min(T, w) * h - .5 : r % T, _ = o ? w * l / T - .5 : r / T | 0,
                            v = 0, y = 1e8, g = 0; g < w; g++) c = g % T - p, d = _ - (g / T | 0), x[g] = m = u ? Math.abs("y" === u ? d : c) : R(c * c + d * d),
                            m > v && (v = m), m < y && (y = m);
                        "random" === r && ee(x), x.max = v - y, x.min = y, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (T > w ? w - 1 : u ? "y" === u ? w / T : T : Math.max(T, w / T)) || 0) * ("edges" === r ? -1 : 1),
                            x.b = w < 0 ? n - w : n, x.u = Zt(e.amount || e.each) || 0, i = i && w < 0 ? ke(i) : i;
                    }
                    return w = (x[t] - x.min) / x.max || 0, vt(x.b + (i ? i(w) : w) * x.v) + x.u;
                };
        },
        re = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(i) {
                return Math.floor(Math.round(parseFloat(i) / t) * t * e) / e + (Y(i) ? 0 : Zt(i));
            };
        },
        ne = function(t, e) {
            var i, r, n = Q(t);
            return !n && U(t) && (i = n = t.radius || 1e8, t.values ? (t = te(t.values), (r = !Y(t[0])) && (i *= i)) : t = re(t.increment)),
                Wt(e, n ? L(t) ? function(e) {
                    return r = t(e), Math.abs(r - e) <= i ? r : e;
                } : function(e) {
                    for (var n, s, a = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), u = 1e8, h = 0, l = t.length; l--;)(n = r ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u && (u = n,
                        h = l);
                    return h = !i || u <= i ? t[h] : e, r || h === e || Y(e) ? h : h + Zt(e);
                } : re(t));
        },
        se = function(t, e, i, r) {
            return Wt(Q(t) ? !e : !0 === i ? !!(i = 0) : !r, function() {
                return Q(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * r) / r;
            });
        },
        ae = function(t, e, i) {
            return Wt(i, function(i) {
                return t[~~e(i)];
            });
        },
        oe = function(t) {
            for (var e, i, r, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) r = t.indexOf(")", e),
                n = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(n ? J : G), a += t.substr(s, e - s) + se(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5),
                s = r + 1;
            return a + t.substr(s, t.length - s);
        },
        ue = function(t, e, i, r, n) {
            var s = e - t,
                a = r - i;
            return Wt(n, function(e) {
                return i + ((e - t) / s * a || 0);
            });
        },
        he = function(t, e, i) {
            var r, n, s, a = t.labels,
                o = 1e8;
            for (r in a)(n = a[r] - e) < 0 == !!i && n && o > (n = Math.abs(n)) && (s = r,
                o = n);
            return s;
        },
        le = function(t, e, i) {
            var r, n, s = t.vars,
                a = s[e];
            if (a) return r = s[e + "Params"], n = s.callbackScope || t, i && ot.length && wt(),
                r ? a.apply(n, r) : a.call(n);
        },
        fe = function(t) {
            return zt(t), t.progress() < 1 && le(t, "onInterrupt"), t;
        },
        pe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        _e = function(t, e, i) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0;
        },
        ce = function(t, e, i) {
            var r, n, s, a, o, u, h, l, f, p, _ = t ? Y(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : pe.black;
            if (!_) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), pe[t]) _ = pe[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1),
                    n = t.charAt(2), s = t.charAt(3), t = "#" + r + r + n + n + s + s), _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (_ = p = t.match(G),
                        e) {
                        if (~t.indexOf("=")) return _ = t.match(W), i && _.length < 4 && (_[3] = 1), _;
                    } else a = +_[0] % 360 / 360, o = +_[1] / 100, r = 2 * (u = +_[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                        _.length > 3 && (_[3] *= 1), _[0] = _e(a + 1 / 3, r, n), _[1] = _e(a, r, n), _[2] = _e(a - 1 / 3, r, n);
                else _ = t.match(G) || pe.transparent;
                _ = _.map(Number);
            }
            return e && !p && (r = _[0] / 255, n = _[1] / 255, s = _[2] / 255, u = ((h = Math.max(r, n, s)) + (l = Math.min(r, n, s))) / 2,
                    h === l ? a = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), a = h === r ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - r) / f + 2 : (r - n) / f + 4,
                        a *= 60), _[0] = ~~(a + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)),
                i && _.length < 4 && (_[3] = 1), _;
        },
        de = function(t) {
            var e = [],
                i = [],
                r = -1;
            return t.split(ge).forEach(function(t) {
                var n = t.match(H) || [];
                e.push.apply(e, n), i.push(r += n.length + 1);
            }), e.c = i, e;
        },
        me = function(t, e, i) {
            var r, n, s, a, o = "",
                u = (t + o).match(ge),
                h = e ? "hsla(" : "rgba(",
                l = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = ce(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                }), i && (s = de(t), (r = i.c).join(o) !== s.c.join(o)))
                for (a = (n = t.replace(ge, "1").split(H)).length - 1; l < a; l++) o += n[l] + (~r.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
            if (!n)
                for (a = (n = t.split(ge)).length - 1; l < a; l++) o += n[l] + u[l];
            return o + n[a];
        },
        ge = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in pe) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
        }(),
        ve = /hsl[a]?\(/,
        ye = function(t) {
            var e, i = t.join(" ");
            if (ge.lastIndex = 0, ge.test(i)) return e = ve.test(i), t[1] = me(t[1], e), t[0] = me(t[0], e, de(t[1])), !0;
        },
        Te = (d = Date.now, m = 500, g = 33, v = d(), y = v, w = T = 1e3 / 240, b = function _tick(t) {
            var e, i, r, n, s = d() - y,
                a = !0 === t;
            if (s > m && (v += s - g), ((e = (r = (y += s) - v) - w) > 0 || a) && (n = ++p.frame,
                    _ = r - 1e3 * p.time, p.time = r /= 1e3, w += e + (e >= T ? 4 : T - e), i = 1),
                a || (h = l(_tick)), i)
                for (c = 0; c < x.length; c++) x[c](r, _, n, t);
        }, p = {
            time: 0,
            frame: 0,
            tick: function() {
                b(!0);
            },
            deltaRatio: function(t) {
                return _ / (1e3 / (t || 60));
            },
            wake: function() {
                s && (!r && q() && (i = r = window, n = i.document || {}, K.gsap = oi, (i.gsapVersions || (i.gsapVersions = [])).push(oi.version),
                        et(tt || i.GreenSockGlobals || !i.gsap && i || {}), f = i.requestAnimationFrame),
                    h && p.sleep(), l = f || function(t) {
                        return setTimeout(t, w - 1e3 * p.time + 1 | 0);
                    }, u = 1, b(2));
            },
            sleep: function() {
                (f ? i.cancelAnimationFrame : clearTimeout)(h), u = 0, l = st;
            },
            lagSmoothing: function(t, e) {
                m = t || 1 / D, g = Math.min(e, m, 0);
            },
            fps: function(t) {
                T = 1e3 / (t || 240), w = 1e3 * p.time + T;
            },
            add: function(t) {
                x.indexOf(t) < 0 && x.push(t), we();
            },
            remove: function(t) {
                var e;
                ~(e = x.indexOf(t)) && x.splice(e, 1) && c >= e && c--;
            },
            _listeners: x = []
        }),
        we = function() {
            return !u && Te.wake();
        },
        xe = {},
        be = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Oe = function(t) {
            for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) i = s[o],
                e = o !== u - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), n[a] = isNaN(r) ? r.replace(Me, "").trim() : +r,
                a = i.substr(e + 1).trim();
            return n;
        },
        ke = function(t) {
            return function(e) {
                return 1 - t(1 - e);
            };
        },
        Ce = function _propagateYoyoEase(t, e) {
            for (var i, r = t._first; r;) r instanceof Fe ? _propagateYoyoEase(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? _propagateYoyoEase(r.timeline, e) : (i = r._ease,
                r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
        },
        Ae = function(t, e) {
            return t && (L(t) ? t : xe[t] || function(t) {
                var e, i, r, n, s = (t + "").split("("),
                    a = xe[s[0]];
                return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Oe(s[1])] : (e = t,
                    i = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.indexOf("(", i), e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(bt)) : xe._CE && be.test(t) ? xe._CE("", t) : a;
            }(t)) || e;
        },
        Pe = function(t, e, i, r) {
            void 0 === i && (i = function(t) {
                return 1 - e(1 - t);
            }), void 0 === r && (r = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
            var n, s = {
                easeIn: e,
                easeOut: i,
                easeInOut: r
            };
            return gt(t, function(t) {
                for (var e in xe[t] = K[t] = s, xe[n = t.toLowerCase()] = i, s) xe[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = xe[t + "." + e] = s[e];
            }), s;
        },
        De = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2;
            };
        },
        Se = function _configElastic(t, e, i) {
            var r = e >= 1 ? e : 1,
                n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
                s = n / S * (Math.asin(1 / r) || 0),
                a = function(t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * B((t - s) * n) + 1;
                },
                o = "out" === t ? a : "in" === t ? function(t) {
                    return 1 - a(1 - t);
                } : De(a);
            return n = S / n, o.config = function(e, i) {
                return _configElastic(t, e, i);
            }, o;
        },
        ze = function _configBack(t, e) {
            void 0 === e && (e = 1.70158);
            var i = function(t) {
                    return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
                },
                r = "out" === t ? i : "in" === t ? function(t) {
                    return 1 - i(1 - t);
                } : De(i);
            return r.config = function(e) {
                return _configBack(t, e);
            }, r;
        };
    gt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
            var i = e < 5 ? e + 1 : e;
            Pe(t + ",Power" + (i - 1), e ? function(t) {
                return Math.pow(t, i);
            } : function(t) {
                return t;
            }, function(t) {
                return 1 - Math.pow(1 - t, i);
            }, function(t) {
                return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
            });
        }), xe.Linear.easeNone = xe.none = xe.Linear.easeIn, Pe("Elastic", Se("in"), Se("out"), Se()),
        M = 7.5625, k = 1 / (O = 2.75), Pe("Bounce", function(t) {
            return 1 - C(1 - t);
        }, C = function(t) {
            return t < k ? M * t * t : t < .7272727272727273 ? M * Math.pow(t - 1.5 / O, 2) + .75 : t < .9090909090909092 ? M * (t -= 2.25 / O) * t + .9375 : M * Math.pow(t - 2.625 / O, 2) + .984375;
        }), Pe("Expo", function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }), Pe("Circ", function(t) {
            return -(R(1 - t * t) - 1);
        }), Pe("Sine", function(t) {
            return 1 === t ? 1 : 1 - F(t * z);
        }), Pe("Back", ze("in"), ze("out"), ze()), xe.SteppedEase = xe.steps = K.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                    r = t + (e ? 0 : 1),
                    n = e ? 1 : 0,
                    s = 1 - D;
                return function(t) {
                    return ((r * Ht(0, s, t) | 0) + n) * i;
                };
            }
        }, P.ease = xe["quad.out"], gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
            return _t += t + "," + t + "Params,";
        });
    var Ee = function(t, e) {
            this.id = E++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt,
                this.set = e ? e.getSetter : We;
        },
        Re = function() {
            function Animation(t, i) {
                var r = t.parent || e;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                        this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Vt(this, +t.duration, 1, 1),
                    this.data = t.data, u || Te.wake(), r && Ut(r, this, i || 0 === i ? i : r._time, 1),
                    t.reversed && this.reverse(), t.paused && this.paused(!0);
            }
            var t = Animation.prototype;
            return t.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                    this._delay = t, this) : this._delay;
            }, t.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
            }, t.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Vt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
            }, t.totalTime = function(t, e) {
                if (we(), !arguments.length) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (Yt(this, t); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                        i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay);
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === D || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                    xt(this, t, e)), this;
            }, t.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ft(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ft(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            }, t.iteration = function(t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Bt(this._tTime, i) + 1 : 1;
            }, t.timeScale = function(t) {
                if (!arguments.length) return this._rts === -D ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? It(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || t === -D ? 0 : this._rts,
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t;
                    }(this.totalTime(Ht(-this._delay, this._tDur, e), !0));
            }, t.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                        this._ts = this._act = 0) : (we(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= D) && Math.abs(this._zTime) !== D))),
                    this) : this._ps;
            }, t.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this;
                }
                return this._start;
            }, t.endTime = function(t) {
                return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
            }, t.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? It(e.rawTime(t), this) : this._tTime : this._tTime;
            }, t.globalTime = function(t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1),
                    e = e._dp;
                return i;
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, jt(this)) : this._repeat;
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._rDelay = t, jt(this)) : this._rDelay;
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo;
            }, t.seek = function(t, e) {
                return this.totalTime(Gt(this, t), X(e));
            }, t.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, X(e));
            }, t.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }, t.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
            }, t.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
            }, t.resume = function() {
                return this.paused(!1);
            }, t.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -D : 0)),
                    this) : this._rts < 0;
            }, t.invalidate = function() {
                return this._initted = 0, this._zTime = -D, this;
            }, t.isActive = function() {
                var t, e = this.parent || this._dp,
                    i = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - D));
            }, t.eventCallback = function(t, e, i) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
                    this) : r[t];
            }, t.then = function(t) {
                var e = this;
                return new Promise(function(i) {
                    var r = L(t) ? t : Mt,
                        n = function() {
                            var t = e.then;
                            e.then = null, L(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r),
                                e.then = t;
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n;
                });
            }, t.kill = function() {
                fe(this);
            }, Animation;
        }();
    Ot(Re.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -D,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Fe = function(t) {
        function Timeline(e, i) {
            var r;
            return void 0 === e && (e = {}), (r = t.call(this, e, i) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming,
                r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = X(e.sortChildren), r.parent && Nt(r.parent, _assertThisInitialized(r)),
                e.scrollTrigger && Xt(_assertThisInitialized(r), e.scrollTrigger), r;
        }
        _inheritsLoose(Timeline, t);
        var i = Timeline.prototype;
        return i.to = function(t, e, i) {
            return new qe(t, Tt(arguments, 0, this), Gt(this, Y(e) ? arguments[3] : i)), this;
        }, i.from = function(t, e, i) {
            return new qe(t, Tt(arguments, 1, this), Gt(this, Y(e) ? arguments[3] : i)), this;
        }, i.fromTo = function(t, e, i, r) {
            return new qe(t, Tt(arguments, 2, this), Gt(this, Y(e) ? arguments[4] : r)), this;
        }, i.set = function(t, e, i) {
            return e.duration = 0, e.parent = this, Dt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender,
                new qe(t, e, Gt(this, i), 1), this;
        }, i.call = function(t, e, i) {
            return Ut(this, qe.delayedCall(0, t, e), Gt(this, i));
        }, i.staggerTo = function(t, e, i, r, n, s, a) {
            return i.duration = e, i.stagger = i.stagger || r, i.onComplete = s, i.onCompleteParams = a,
                i.parent = this, new qe(t, i, Gt(this, n)), this;
        }, i.staggerFrom = function(t, e, i, r, n, s, a) {
            return i.runBackwards = 1, Dt(i).immediateRender = X(i.immediateRender), this.staggerTo(t, e, i, r, n, s, a);
        }, i.staggerFromTo = function(t, e, i, r, n, s, a, o) {
            return r.startAt = i, Dt(r).immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, n, s, a, o);
        }, i.render = function(t, i, r) {
            var n, s, a, o, u, h, l, f, p, _, c, d, m = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = this !== e && t > g - D && t >= 0 ? g : t < D ? 0 : t,
                T = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || r || T) {
                if (m !== this._time && v && (y += this._time - m, t += this._time - m), n = y,
                    p = this._start, h = !(f = this._ts), T && (v || (m = this._zTime), (t || !i) && (this._zTime = t)),
                    this._repeat && (c = this._yoyo, u = v + this._rDelay, n = vt(y % u), y === g ? (o = this._repeat,
                        n = v) : ((o = ~~(y / u)) && o === y / u && (n = v, o--), n > v && (n = v)), _ = Bt(this._tTime, u), !m && this._tTime && _ !== o && (_ = o), c && 1 & o && (n = v - n, d = 1), o !== _ && !this._lock)) {
                    var w = c && 1 & _,
                        x = w === (c && 1 & o);
                    if (o < _ && (w = !w), m = w ? 0 : v, this._lock = 1, this.render(m || (d ? 0 : vt(o * u)), i, !v)._lock = 0, !i && this.parent && le(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                        m !== this._time || h !== !this._ts) return this;
                    if (v = this._dur, g = this._tDur, x && (this._lock = 2, m = w ? v : -1e-4, this.render(m, !0),
                            this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                    Ce(this, d);
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, i) {
                        var r;
                        if (i > e)
                            for (r = t._first; r && r._start <= i;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next;
                            } else
                                for (r = t._last; r && r._start >= i;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev;
                                }
                    }(this, vt(m), vt(n))) && (y -= n - (n = l._start)), this._tTime = y, this._time = n,
                    this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1,
                        this._zTime = t), !m && n && !i && le(this, "onStart"), n >= m && t >= 0)
                    for (s = this._first; s;) {
                        if (a = s._next, (s._act || n >= s._start) && s._ts && l !== s) {
                            if (s.parent !== this) return this.render(t, i, r);
                            if (s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, i, r),
                                n !== this._time || !this._ts && !h) {
                                l = 0, a && (y += this._zTime = -D);
                                break;
                            }
                        }
                        s = a;
                    } else {
                        s = this._last;
                        for (var b = t < 0 ? t : n; s;) {
                            if (a = s._prev, (s._act || b <= s._end) && s._ts && l !== s) {
                                if (s.parent !== this) return this.render(t, i, r);
                                if (s.render(s._ts > 0 ? (b - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (b - s._start) * s._ts, i, r),
                                    n !== this._time || !this._ts && !h) {
                                    l = 0, a && (y += this._zTime = b ? -D : D);
                                    break;
                                }
                            }
                            s = a;
                        }
                    }
                if (l && !i && (this.pause(), l.render(n >= m ? 0 : -D)._zTime = n >= m ? 1 : -1,
                        this._ts)) return this._start = p, Lt(this), this.render(t, i, r);
                this._onUpdate && !i && le(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (p !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && zt(this, 1),
                    i || t < 0 && !m || !y && !m || (le(this, y === g ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(y < g && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }, i.add = function(t, e) {
            var i = this;
            if (Y(e) || (e = Gt(this, e)), !(t instanceof Re)) {
                if (Q(t)) return t.forEach(function(t) {
                    return i.add(t, e);
                }), this;
                if (I(t)) return this.addLabel(t, e);
                if (!L(t)) return this;
                t = qe.delayedCall(0, t);
            }
            return this !== t ? Ut(this, t, e) : this;
        }, i.getChildren = function(t, e, i, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -1e8);
            for (var n = [], s = this._first; s;) s._start >= r && (s instanceof qe ? e && n.push(s) : (i && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, i)))), s = s._next;
            return n;
        }, i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i];
        }, i.remove = function(t) {
            return I(t) ? this.removeLabel(t) : L(t) ? this.killTweensOf(t) : (St(this, t),
                t === this._recent && (this._recent = this._last), Et(this));
        }, i.totalTime = function(e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = vt(Te.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime;
        }, i.addLabel = function(t, e) {
            return this.labels[t] = Gt(this, e), this;
        }, i.removeLabel = function(t) {
            return delete this.labels[t], this;
        }, i.addPause = function(t, e, i) {
            var r = qe.delayedCall(0, e || st, i);
            return r.data = "isPause", this._hasPause = 1, Ut(this, r, Gt(this, t));
        }, i.removePause = function(t) {
            var e = this._first;
            for (t = Gt(this, t); e;) e._start === t && "isPause" === e.data && zt(e), e = e._next;
        }, i.killTweensOf = function(t, e, i) {
            for (var r = this.getTweensOf(t, i), n = r.length; n--;) Be !== r[n] && r[n].kill(t, e);
            return this;
        }, i.getTweensOf = function(t, e) {
            for (var i, r = [], n = te(t), s = this._first, a = Y(e); s;) s instanceof qe ? yt(s._targets, n) && (a ? (!Be || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
                s = s._next;
            return r;
        }, i.tweenTo = function(t, e) {
            e = e || {};
            var i = this,
                r = Gt(i, t),
                n = e,
                s = n.startAt,
                a = n.onStart,
                o = n.onStartParams,
                u = qe.to(i, Ot(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || D,
                    onStart: function() {
                        i.pause();
                        var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                        u._dur !== t && Vt(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, o || []);
                    }
                }));
            return u;
        }, i.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, Ot({
                startAt: {
                    time: Gt(this, t)
                }
            }, i));
        }, i.recent = function() {
            return this._recent;
        }, i.nextLabel = function(t) {
            return void 0 === t && (t = this._time), he(this, Gt(this, t));
        }, i.previousLabel = function(t) {
            return void 0 === t && (t = this._time), he(this, Gt(this, t), 1);
        }, i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + D);
        }, i.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var r, n = this._first, s = this.labels; n;) n._start >= i && (n._start += t,
                n._end += t), n = n._next;
            if (e)
                for (r in s) s[r] >= i && (s[r] += t);
            return Et(this);
        }, i.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this);
        }, i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), Et(this);
        }, i.totalDuration = function(t) {
            var i, r, n, s = 0,
                a = this._last,
                o = 1e8;
            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (n = this.parent; a;) i = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && this._sort && a._ts && !this._lock ? (this._lock = 1,
                        Ut(this, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (s -= r, (!n && !this._dp || n && n.smoothChildTiming) && (this._start += r / this._ts,
                        this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), o = 0),
                    a._end > s && a._ts && (s = a._end), a = i;
                Vt(this, this === e && this._time > s ? this._time : s, 1, 1), this._dirty = 0;
            }
            return this._tDur;
        }, Timeline.updateRoot = function(t) {
            if (e._ts && (xt(e, It(t, e)), a = Te.frame), Te.frame >= ft) {
                ft += A.autoSleep || 120;
                var i = e._first;
                if ((!i || !i._ts) && A.autoSleep && Te._listeners.length < 2) {
                    for (; i && !i._ts;) i = i._next;
                    i || Te.sleep();
                }
            }
        }, Timeline;
    }(Re);
    Ot(Fe.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Be, Ie = function(t, e, i, r, n, s, a, o, u) {
            L(r) && (r = r(n || 0, t, s));
            var h, l = t[e],
                f = "get" !== i ? i : L(l) ? u ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
                p = L(l) ? u ? Qe : je : Ve;
            if (I(r) && (~r.indexOf("random(") && (r = oe(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Zt(f) || 0))),
                f !== r) return isNaN(f * r) ? (!l && !(e in t) && it(e, r), function(t, e, i, r, n, s, a) {
                var o, u, h, l, f, p, _, c, d = new ri(this._pt, t, e, 0, 1, $e, null, n),
                    m = 0,
                    g = 0;
                for (d.b = i, d.e = r, i += "", (_ = ~(r += "").indexOf("random(")) && (r = oe(r)),
                    s && (s(c = [i, r], t, e), i = c[0], r = c[1]), u = i.match(Z) || []; o = Z.exec(r);) l = o[0],
                    f = r.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                    l !== u[g++] && (p = parseFloat(u[g - 1]) || 0, d._pt = {
                        _next: d._pt,
                        p: f || 1 === g ? f : ",",
                        s: p,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - p,
                        m: h && h < 4 ? Math.round : 0
                    }, m = Z.lastIndex);
                return d.c = m < r.length ? r.substring(m, r.length) : "", d.fp = a, ($.test(r) || _) && (d.e = 0),
                    this._pt = d, d;
            }.call(this, t, e, f, r, p, o || A.stringFilter, u)) : (h = new ri(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof l ? Ze : He, 0, p),
                u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h);
        },
        Le = function(t, e, i, r, n, s) {
            var a, u, h, l;
            if (ht[t] && !1 !== (a = new ht[t]()).init(n, a.rawVars ? e[t] : function(t, e, i, r, n) {
                    if (L(t) && (t = Ne(t, n, e, i, r)), !U(t) || t.style && t.nodeType || Q(t) || j(t)) return I(t) ? Ne(t, n, e, i, r) : t;
                    var s, a = {};
                    for (s in t) a[s] = Ne(t[s], n, e, i, r);
                    return a;
                }(e[t], r, n, s, i), i, r, s) && (i._pt = u = new ri(i._pt, n, t, 0, 1, a.render, a, 0, a.priority),
                    i !== o))
                for (h = i._ptLookup[i._targets.indexOf(n)], l = a._props.length; l--;) h[a._props[l]] = u;
            return a;
        },
        Ye = function _initTween(t, i) {
            var r, n, s, a, o, u, h, l, f, p, _, c, d, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                w = m.onUpdate,
                x = m.onUpdateParams,
                b = m.callbackScope,
                M = m.runBackwards,
                O = m.yoyoEase,
                k = m.keyframes,
                C = m.autoRevert,
                A = t._dur,
                S = t._startAt,
                z = t._targets,
                E = t.parent,
                R = E && "nested" === E.data ? E.parent._targets : z,
                F = "auto" === t._overwrite,
                B = t.timeline;
            if (B && (!k || !g) && (g = "none"), t._ease = Ae(g, P.ease), t._yEase = O ? ke(Ae(!0 === O ? g : O, P.ease)) : 0,
                O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), !B) {
                if (c = (l = z[0] ? dt(z[0]).harness : 0) && m[l.prop], r = Pt(m, at), S && S.render(-1, !0).kill(),
                    v) {
                    if (zt(t._startAt = qe.set(z, Ot({
                            data: "isStart",
                            overwrite: !1,
                            parent: E,
                            immediateRender: !0,
                            lazy: X(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: x,
                            callbackScope: b,
                            stagger: 0
                        }, v))), y)
                        if (i > 0) C || (t._startAt = 0);
                        else if (A && !(i < 0 && S)) return void(i && (t._zTime = i));
                } else if (M && A)
                    if (S) !C && (t._startAt = 0);
                    else if (i && (y = !1), s = Ot({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && X(T),
                        immediateRender: y,
                        stagger: 0,
                        parent: E
                    }, r), c && (s[l.prop] = c), zt(t._startAt = qe.set(z, s)), y) {
                    if (!i) return;
                } else _initTween(t._startAt, D);
                for (t._pt = 0, T = A && X(T) || T && !A, n = 0; n < z.length; n++) {
                    if (h = (o = z[n])._gsap || ct(z)[n]._gsap, t._ptLookup[n] = p = {}, ut[h.id] && ot.length && wt(),
                        _ = R === z ? n : R.indexOf(o), l && !1 !== (f = new l()).init(o, c || r, t, _, R) && (t._pt = a = new ri(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority),
                            f._props.forEach(function(t) {
                                p[t] = a;
                            }), f.priority && (u = 1)), !l || c)
                        for (s in r) ht[s] && (f = Le(s, r, t, _, o, R)) ? f.priority && (u = 1) : p[s] = a = Ie.call(t, o, s, "get", r[s], _, R, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), F && t._pt && (Be = t, e.killTweensOf(o, p, t.globalTime(0)),
                        d = !t.parent, Be = 0), t._pt && T && (ut[h.id] = 1);
                }
                u && ii(t), t._onInit && t._onInit(t);
            }
            t._from = !B && !!m.runBackwards, t._onUpdate = w, t._initted = (!t._op || t._pt) && !d;
        },
        Ne = function(t, e, i, r, n) {
            return L(t) ? t.call(e, i, r, n) : I(t) && ~t.indexOf("random(") ? oe(t) : t;
        },
        Ue = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xe = (Ue + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        qe = function(t) {
            function Tween(i, r, n, s) {
                var a;
                "number" == typeof r && (n.duration = r, r = n, n = null);
                var o, u, h, l, f, p, _, c, d = (a = t.call(this, s ? r : Dt(r), n) || this).vars,
                    m = d.duration,
                    g = d.delay,
                    v = d.immediateRender,
                    y = d.stagger,
                    T = d.overwrite,
                    w = d.keyframes,
                    x = d.defaults,
                    b = d.scrollTrigger,
                    M = d.yoyoEase,
                    O = a.parent,
                    k = (Q(i) || j(i) ? Y(i[0]) : "length" in r) ? [i] : te(i);
                if (a._targets = k.length ? ct(k) : rt("GSAP target " + i + "", !A.nullTargetWarn) || [],
                    a._ptLookup = [], a._overwrite = T, w || y || V(m) || V(g)) {
                    if (r = a.vars, (o = a.timeline = new Fe({
                            data: "nested",
                            defaults: x || {}
                        })).kill(), o.parent = _assertThisInitialized(a), w) Ot(o.vars.defaults, {
                        ease: "none"
                    }), w.forEach(function(t) {
                        return o.to(k, t, ">");
                    });
                    else {
                        if (l = k.length, _ = y ? ie(y) : st, U(y))
                            for (f in y) ~Ue.indexOf(f) && (c || (c = {}),
                                c[f] = y[f]);
                        for (u = 0; u < l; u++) {
                            for (f in h = {}, r) Xe.indexOf(f) < 0 && (h[f] = r[f]);
                            h.stagger = 0, M && (h.yoyoEase = M), c && Ct(h, c), p = k[u], h.duration = +Ne(m, _assertThisInitialized(a), u, p, k),
                                h.delay = (+Ne(g, _assertThisInitialized(a), u, p, k) || 0) - a._delay, !y && 1 === l && h.delay && (a._delay = g = h.delay,
                                    a._start += g, h.delay = 0), o.to(p, h, _(u, p, k));
                        }
                        o.duration() ? m = g = 0 : a.timeline = 0;
                    }
                    m || a.duration(m = o.duration());
                } else a.timeline = 0;
                return !0 === T && (Be = _assertThisInitialized(a), e.killTweensOf(k), Be = 0),
                    O && Nt(O, _assertThisInitialized(a)), (v || !m && !w && a._start === vt(O._time) && X(v) && Rt(_assertThisInitialized(a)) && "nested" !== O.data) && (a._tTime = -D,
                        a.render(Math.max(0, -g))), b && Xt(_assertThisInitialized(a), b), a;
            }
            _inheritsLoose(Tween, t);
            var i = Tween.prototype;
            return i.render = function(t, e, i) {
                var r, n, s, a, o, u, h, l, f, p = this._time,
                    _ = this._tDur,
                    c = this._dur,
                    d = t > _ - D && t >= 0 ? _ : t < D ? 0 : t;
                if (c) {
                    if (d !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = d, l = this.timeline, this._repeat) {
                            if (a = c + this._rDelay, r = vt(d % a), d === _ ? (s = this._repeat, r = c) : ((s = ~~(d / a)) && s === d / a && (r = c,
                                    s--), r > c && (r = c)), (u = this._yoyo && 1 & s) && (f = this._yEase, r = c - r),
                                o = Bt(this._tTime, a), r === p && !i && this._initted) return this;
                            s !== o && (l && this._yEase && Ce(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1,
                                this.render(vt(a * s), !0).invalidate()._lock = 0));
                        }
                        if (!this._initted) {
                            if (qt(this, t < 0 ? t : r, i, e)) return this._tTime = 0, this;
                            if (c !== this._dur) return this.render(t, e, i);
                        }
                        for (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1,
                                this._lazy = 0), this.ratio = h = (f || this._ease)(r / c), this._from && (this.ratio = h = 1 - h),
                            r && !p && !e && le(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                        l && l.render(t < 0 ? t : !r && u ? -D : l._dur * h, e, i) || this._startAt && (this._zTime = t),
                            this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                                le(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && le(this, "onRepeat"),
                            d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                (t || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && zt(this, 1),
                                e || t < 0 && !p || !d && !p || (le(this, d === _ ? "onComplete" : "onReverseComplete", !0),
                                    this._prom && !(d < _ && this.timeScale() > 0) && this._prom()));
                    }
                } else ! function(t, e, i, r) {
                    var n, s, a = t.ratio,
                        o = e < 0 || !e && a && !t._start && t._zTime > D && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = Ht(0, t._tDur, e), Bt(h, u) !== (s = Bt(t._tTime, u)) && (a = 1 - o,
                            t.vars.repeatRefresh && t._initted && t.invalidate())), o !== a || r || t._zTime === D || !e && t._zTime) {
                        if (!t._initted && qt(t, e, r, i)) return;
                        for (s = t._zTime, t._zTime = e || (i ? D : 0), i || (i = e && !s), t.ratio = o,
                            t._from && (o = 1 - o), t._time = 0, t._tTime = h, i || le(t, "onStart"), n = t._pt; n;) n.r(o, n.d),
                            n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && le(t, "onUpdate"),
                            h && t._repeat && !i && t.parent && le(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && zt(t, 1),
                                i || (le(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                    } else t._zTime || (t._zTime = e);
                }(this, t, e, i);
                return this;
            }, i.targets = function() {
                return this._targets;
            }, i.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
                    this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
            }, i.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fe(this);
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Be && !0 !== Be.vars.overwrite)._first || fe(this),
                        this.parent && i !== this.timeline.totalDuration() && Vt(this, this._dur * this.timeline._tDur / i, 0, 1),
                        this;
                }
                var r, n, s, a, o, u, h, l = this._targets,
                    f = t ? te(t) : l,
                    p = this._ptLookup,
                    _ = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                        return i < 0;
                    }(l, f)) return "all" === e && (this._pt = 0), fe(this);
                for (r = this._op = this._op || [], "all" !== e && (I(e) && (o = {}, gt(e, function(t) {
                        return o[t] = 1;
                    }), e = o), e = function(t, e) {
                        var i, r, n, s, a = t[0] ? dt(t[0]).harness : 0,
                            o = a && a.aliases;
                        if (!o) return e;
                        for (r in i = Ct({}, e), o)
                            if (r in i)
                                for (n = (s = o[r].split(",")).length; n--;) i[s[n]] = i[r];
                        return i;
                    }(l, e)), h = l.length; h--;)
                    if (~f.indexOf(l[h]))
                        for (o in n = p[h], "all" === e ? (r[h] = e,
                                a = n, s = {}) : (s = r[h] = r[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || St(this, u, "_pt"),
                            delete n[o]), "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && _ && fe(this), this;
            }, Tween.to = function(t, e) {
                return new Tween(t, e, arguments[2]);
            }, Tween.from = function(t, e) {
                return new Tween(t, Tt(arguments, 1));
            }, Tween.delayedCall = function(t, e, i, r) {
                return new Tween(e, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: r
                });
            }, Tween.fromTo = function(t, e, i) {
                return new Tween(t, Tt(arguments, 2));
            }, Tween.set = function(t, e) {
                return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
            }, Tween.killTweensOf = function(t, i, r) {
                return e.killTweensOf(t, i, r);
            }, Tween;
        }(Re);
    Ot(qe.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), gt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        qe[t] = function() {
            var e = new Fe(),
                i = $t.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
        };
    });
    var Ve = function(t, e, i) {
            return t[e] = i;
        },
        je = function(t, e, i) {
            return t[e](i);
        },
        Qe = function(t, e, i, r) {
            return t[e](r.fp, i);
        },
        Ge = function(t, e, i) {
            return t.setAttribute(e, i);
        },
        We = function(t, e) {
            return L(t[e]) ? je : N(t[e]) && t.setAttribute ? Ge : Ve;
        },
        He = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        Ze = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        $e = function(t, e) {
            var i = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r,
                    i = i._next;
                r += e.c;
            }
            e.set(e.t, e.p, r, e);
        },
        Je = function(t, e) {
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
        },
        Ke = function(t, e, i, r) {
            for (var n, s = this._pt; s;) n = s._next, s.p === r && s.modifier(t, e, i), s = n;
        },
        ti = function(t) {
            for (var e, i, r = this._pt; r;) i = r._next, r.p === t && !r.op || r.op === t ? St(this, r, "_pt") : r.dep || (e = 1),
                r = i;
            return !e;
        },
        ei = function(t, e, i, r) {
            r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
        },
        ii = function(t) {
            for (var e, i, r, n, s = t._pt; s;) {
                for (e = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : n) ? s._prev._next = s: r = s, (s._next = i) ? i._prev = s : n = s,
                    s = e;
            }
            t._pt = r;
        },
        ri = function() {
            function PropTween(t, e, i, r, n, s, a, o, u) {
                this.t = e, this.s = r, this.c = n, this.p = i, this.r = s || He, this.d = a || this,
                    this.set = o || Ve, this.pr = u || 0, this._next = t, t && (t._prev = this);
            }
            return PropTween.prototype.modifier = function(t, e, i) {
                this.mSet = this.mSet || this.set, this.set = ei, this.m = t, this.mt = i, this.tween = e;
            }, PropTween;
        }();
    gt(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return at[t] = 1;
    }), K.TweenMax = K.TweenLite = qe, K.TimelineLite = K.TimelineMax = Fe, e = new Fe({
        sortChildren: !1,
        defaults: P,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), A.stringFilter = ye;
    var ni = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach(function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        i = L(t),
                        r = e && !i && t.init ? function() {
                            this._props = [];
                        } : t,
                        n = {
                            init: st,
                            render: Je,
                            add: Ie,
                            kill: ti,
                            modifier: Ke,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: We,
                            aliases: {},
                            register: 0
                        };
                    if (we(), t !== r) {
                        if (ht[e]) return;
                        Ot(r, Ot(Pt(t, n), s)), Ct(r.prototype, Ct(n, Pt(t, s))), ht[r.prop = e] = r, t.targetTest && (pt.push(r),
                            at[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
                    }
                    nt(e, r), t.register && t.register(oi, r, ri);
                }(t);
            });
        },
        timeline: function(t) {
            return new Fe(t);
        },
        getTweensOf: function(t, i) {
            return e.getTweensOf(t, i);
        },
        getProperty: function(t, e, i, r) {
            I(t) && (t = te(t)[0]);
            var n = dt(t || {}).get,
                s = i ? Mt : bt;
            return "native" === i && (i = ""), t ? e ? s((ht[e] && ht[e].get || n)(t, e, i, r)) : function(e, i, r) {
                return s((ht[e] && ht[e].get || n)(t, e, i, r));
            } : t;
        },
        quickSetter: function(t, e, i) {
            if ((t = te(t)).length > 1) {
                var r = t.map(function(t) {
                        return oi.quickSetter(t, e, i);
                    }),
                    n = r.length;
                return function(t) {
                    for (var e = n; e--;) r[e](t);
                };
            }
            t = t[0] || {};
            var s = ht[e],
                a = dt(t),
                u = a.harness && (a.harness.aliases || {})[e] || e,
                h = s ? function(e) {
                    var r = new s();
                    o._pt = 0, r.init(t, i ? e + i : e, o, 0, [t]), r.render(1, r), o._pt && Je(1, o);
                } : a.set(t, u);
            return s ? h : function(e) {
                return h(t, u, i ? e + i : e, a, 1);
            };
        },
        isTweening: function(t) {
            return e.getTweensOf(t, !0).length > 0;
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ae(t.ease, P.ease)), At(P, t || {});
        },
        config: function(t) {
            return At(A, t || {});
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                r = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
            (r || "").split(",").forEach(function(t) {
                return t && !ht[t] && !K[t] && rt(e + " effect requires " + t + " plugin.");
            }), lt[e] = function(t, e, r) {
                return i(te(t), Ot(e || {}, n), r);
            }, s && (Fe.prototype[e] = function(t, i, r) {
                return this.add(lt[e](t, U(i) ? i : (r = i) && {}, this), r);
            });
        },
        registerEase: function(t, e) {
            xe[t] = Ae(e);
        },
        parseEase: function(t, e) {
            return arguments.length ? Ae(t, e) : xe;
        },
        getById: function(t) {
            return e.getById(t);
        },
        exportRoot: function(t, i) {
            void 0 === t && (t = {});
            var r, n, s = new Fe(t);
            for (s.smoothChildTiming = X(t.smoothChildTiming), e.remove(s), s._dp = 0, s._time = s._tTime = e._time,
                r = e._first; r;) n = r._next, !i && !r._dur && r instanceof qe && r.vars.onComplete === r._targets[0] || Ut(s, r, r._start - r._delay),
                r = n;
            return Ut(e, s, 0), s;
        },
        utils: {
            wrap: function wrap(t, e, i) {
                var r = e - t;
                return Q(t) ? ae(t, wrap(0, t.length), e) : Wt(i, function(e) {
                    return (r + (e - t) % r) % r + t;
                });
            },
            wrapYoyo: function wrapYoyo(t, e, i) {
                var r = e - t,
                    n = 2 * r;
                return Q(t) ? ae(t, wrapYoyo(0, t.length - 1), e) : Wt(i, function(e) {
                    return t + ((e = (n + (e - t) % n) % n || 0) > r ? n - e : e);
                });
            },
            distribute: ie,
            random: se,
            snap: ne,
            normalize: function(t, e, i) {
                return ue(t, e, 0, 1, i);
            },
            getUnit: Zt,
            clamp: function(t, e, i) {
                return Wt(i, function(i) {
                    return Ht(t, e, i);
                });
            },
            splitColor: ce,
            toArray: te,
            mapRange: ue,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || Zt(i));
                };
            },
            interpolate: function interpolate(t, e, i, r) {
                var n = isNaN(t + e) ? 0 : function(i) {
                    return (1 - i) * t + i * e;
                };
                if (!n) {
                    var s, a, o, u, h, l = I(t),
                        f = {};
                    if (!0 === i && (r = 1) && (i = null), l) t = {
                        p: t
                    }, e = {
                        p: e
                    };
                    else if (Q(t) && !Q(e)) {
                        for (o = [], u = t.length, h = u - 2, a = 1; a < u; a++) o.push(interpolate(t[a - 1], t[a]));
                        u--, n = function(t) {
                            t *= u;
                            var e = Math.min(h, ~~t);
                            return o[e](t - e);
                        }, i = e;
                    } else r || (t = Ct(Q(t) ? [] : {}, t));
                    if (!o) {
                        for (s in e) Ie.call(f, t, s, "get", e[s]);
                        n = function(e) {
                            return Je(e, f) || (l ? t.p : t);
                        };
                    }
                }
                return Wt(i, n);
            },
            shuffle: ee
        },
        install: et,
        effects: lt,
        ticker: Te,
        updateRoot: Fe.updateRoot,
        plugins: ht,
        globalTimeline: e,
        core: {
            PropTween: ri,
            globals: nt,
            Tween: qe,
            Timeline: Fe,
            Animation: Re,
            getCache: dt,
            _removeLinkedListItem: St
        }
    };
    gt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ni[t] = qe[t];
    }), Te.add(Fe.updateRoot), o = ni.to({}, {
        duration: 0
    });
    var si = function(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
            return i;
        },
        ai = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, i, r) {
                    r._onInit = function(t) {
                        var r, n;
                        if (I(i) && (r = {}, gt(i, function(t) {
                                return r[t] = 1;
                            }), i = r), e) {
                            for (n in r = {}, i) r[n] = e(i[n]);
                            i = r;
                        }! function(t, e) {
                            var i, r, n, s = t._targets;
                            for (i in e)
                                for (r = s.length; r--;)(n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = si(n, i)),
                                    n && n.modifier && n.modifier(e[i], t, s[r], i));
                        }(t, i);
                    };
                }
            };
        },
        oi = ni.registerPlugin({
            name: "attr",
            init: function(t, e, i, r, n) {
                var s, a;
                for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], r, n, 0, 0, s)) && (a.op = s),
                    this._props.push(s);
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i]);
            }
        }, ai("roundProps", re), ai("modifiers"), ai("snap", ne)) || ni;
    qe.version = Fe.version = oi.version = "3.5.1", s = 1, q() && we();
    var ui, hi, li, fi, pi, _i, ci, di, mi = xe.Power0,
        gi = xe.Power1,
        vi = xe.Power2,
        yi = xe.Power3,
        Ti = xe.Power4,
        wi = xe.Linear,
        xi = xe.Quad,
        bi = xe.Cubic,
        Mi = xe.Quart,
        Oi = xe.Quint,
        ki = xe.Strong,
        Ci = xe.Elastic,
        Ai = xe.Back,
        Pi = xe.SteppedEase,
        Di = xe.Bounce,
        Si = xe.Sine,
        zi = xe.Expo,
        Ei = xe.Circ,
        Ri = {},
        Fi = 180 / Math.PI,
        Bi = Math.PI / 180,
        Ii = Math.atan2,
        Li = /([A-Z])/g,
        Yi = /(?:left|right|width|margin|padding|x)/i,
        Ni = /[\s,\(]\S/,
        Ui = {
            autoAlpha: "alpha,visible",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Xi = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        },
        qi = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        },
        Vi = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
        },
        ji = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e);
        },
        Qi = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Gi = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Wi = function(t, e, i) {
            return t.style[e] = i;
        },
        Hi = function(t, e, i) {
            return t.style.setProperty(e, i);
        },
        Zi = function(t, e, i) {
            return t._gsap[e] = i;
        },
        $i = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i;
        },
        Ji = function(t, e, i, r, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i, s.renderTransform(n, s);
        },
        Ki = function(t, e, i, r, n) {
            var s = t._gsap;
            s[e] = i, s.renderTransform(n, s);
        },
        tr = "transform",
        er = tr + "Origin",
        ir = function(t, e) {
            var i = hi.createElementNS ? hi.createElementNS((e || "").replace(/^https/, "http"), t) : hi.createElement(t);
            return i.style ? i : hi.createElement(t);
        },
        rr = function _getComputedProperty(t, e, i) {
            var r = getComputedStyle(t);
            return r[e] || r.getPropertyValue(e.replace(Li, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && _getComputedProperty(t, sr(e) || e, 1) || "";
        },
        nr = "O,Moz,ms,Ms,Webkit".split(","),
        sr = function(t, e, i) {
            var r = (e || pi).style,
                n = 5;
            if (t in r && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(nr[n] + t in r););
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? nr[n] : "") + t;
        },
        ar = function() {
            "undefined" != typeof window && window.document && (ui = window, hi = ui.document,
                li = hi.documentElement, pi = ir("div") || {
                    style: {}
                }, _i = ir("div"), tr = sr(tr), er = tr + "Origin", pi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
                di = !!sr("perspective"), fi = 1);
        },
        or = function _getBBoxHack(t) {
            var e, i = ir("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || ""),
                r = this.parentNode,
                n = this.nextSibling,
                s = this.style.cssText;
            if (li.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = _getBBoxHack;
            } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
            return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), li.removeChild(i),
                this.style.cssText = s, e;
        },
        ur = function(t, e) {
            for (var i = e.length; i--;)
                if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        },
        hr = function(t) {
            var e;
            try {
                e = t.getBBox();
            } catch (i) {
                e = or.call(t, !0);
            }
            return e && (e.width || e.height) || t.getBBox === or || (e = or.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +ur(t, ["x", "cx", "x1"]) || 0,
                y: +ur(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            };
        },
        lr = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !hr(t));
        },
        fr = function(t, e) {
            if (e) {
                var i = t.style;
                e in Ri && e !== er && (e = tr), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                    i.removeProperty(e.replace(Li, "-$1").toLowerCase())) : i.removeAttribute(e);
            }
        },
        pr = function(t, e, i, r, n, s) {
            var a = new ri(t._pt, e, i, 0, 1, s ? Gi : Qi);
            return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
        },
        _r = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        cr = function _convertToUnit(t, e, i, r) {
            var n, s, a, o, u = parseFloat(i) || 0,
                h = (i + "").trim().substr((u + "").length) || "px",
                l = pi.style,
                f = Yi.test(e),
                p = "svg" === t.tagName.toLowerCase(),
                _ = (p ? "client" : "offset") + (f ? "Width" : "Height"),
                c = "px" === r,
                d = "%" === r;
            return r === h || !u || _r[r] || _r[h] ? u : ("px" !== h && !c && (u = _convertToUnit(t, e, i, "px")),
                o = t.getCTM && lr(t), d && (Ri[e] || ~e.indexOf("adius")) ? vt(u / (o ? t.getBBox()[f ? "width" : "height"] : t[_]) * 100) : (l[f ? "width" : "height"] = 100 + (c ? h : r),
                    s = ~e.indexOf("adius") || "em" === r && t.appendChild && !p ? t : t.parentNode,
                    o && (s = (t.ownerSVGElement || {}).parentNode), s && s !== hi && s.appendChild || (s = hi.body),
                    (a = s._gsap) && d && a.width && f && a.time === Te.time ? vt(u / a.width * 100) : ((d || "%" === h) && (l.position = rr(t, "position")),
                        s === t && (l.position = "static"), s.appendChild(pi), n = pi[_], s.removeChild(pi),
                        l.position = "absolute", f && d && ((a = dt(s)).time = Te.time, a.width = s[_]),
                        vt(c ? n * u / 100 : n && u ? 100 / n * u : 0))));
        },
        dr = function(t, e, i, r) {
            var n;
            return fi || ar(), e in Ui && "transform" !== e && ~(e = Ui[e]).indexOf(",") && (e = e.split(",")[0]),
                Ri[e] && "transform" !== e ? (n = kr(t, r), n = "transformOrigin" !== e ? n[e] : Cr(rr(t, er)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = yr[e] && yr[e](t, e, i) || rr(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)),
                i && !~(n + "").indexOf(" ") ? cr(t, e, n, i) + i : n;
        },
        mr = function(t, e, i, r) {
            if (!i || "none" === i) {
                var n = sr(e, t, 1),
                    s = n && rr(t, n, 1);
                s && s !== i ? (e = n, i = s) : "borderColor" === e && (i = rr(t, "borderTopColor"));
            }
            var a, o, u, h, l, f, p, _, c, d, m, g, v = new ri(this._pt, t.style, e, 0, 1, $e),
                y = 0,
                T = 0;
            if (v.b = i, v.e = r, i += "", "auto" === (r += "") && (t.style[e] = r, r = rr(t, e) || r,
                    t.style[e] = i), ye(a = [i, r]), r = a[1], u = (i = a[0]).match(H) || [], (r.match(H) || []).length) {
                for (; o = H.exec(r);) p = o[0], c = r.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1),
                    p !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length),
                        (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), _ = parseFloat(p),
                        d = p.substr((_ + "").length), y = H.lastIndex - d.length, d || (d = d || A.units[e] || m,
                            y === r.length && (r += d, v.e += d)), m !== d && (h = cr(t, e, f, d) || 0), v._pt = {
                            _next: v._pt,
                            p: c || 1 === T ? c : ",",
                            s: h,
                            c: g ? g * _ : _ - h,
                            m: l && l < 4 ? Math.round : 0
                        });
                v.c = y < r.length ? r.substring(y, r.length) : "";
            } else v.r = "display" === e && "none" === r ? Gi : Qi;
            return $.test(r) && (v.e = 0), this._pt = v, v;
        },
        gr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        vr = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, r, n, s = e.t,
                    a = s.style,
                    o = e.u,
                    u = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", r = 1;
                else
                    for (n = (o = o.split(",")).length; --n > -1;) i = o[n],
                        Ri[i] && (r = 1, i = "transformOrigin" === i ? er : tr), fr(s, i);
                r && (fr(s, tr), u && (u.svg && s.removeAttribute("transform"), kr(s, 1), u.uncache = 1));
            }
        },
        yr = {
            clearProps: function(t, e, i, r, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new ri(t._pt, e, i, 0, 0, vr);
                    return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
                }
            }
        },
        Tr = [1, 0, 0, 1, 0, 0],
        wr = {},
        xr = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        br = function(t) {
            var e = rr(t, tr);
            return xr(e) ? Tr : e.substr(7).match(W).map(vt);
        },
        Mr = function(t, e) {
            var i, r, n, s, a = t._gsap || dt(t),
                o = t.style,
                u = br(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Tr : u : (u !== Tr || t.offsetParent || t === li || a.svg || (n = o.display,
                    o.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, r = t.nextSibling,
                        li.appendChild(t)), u = br(t), n ? o.display = n : fr(t, "display"), s && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : li.removeChild(t))),
                e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        Or = function(t, e, i, r, n, s) {
            var a, o, u, h = t._gsap,
                l = n || Mr(t, !0),
                f = h.xOrigin || 0,
                p = h.yOrigin || 0,
                _ = h.xOffset || 0,
                c = h.yOffset || 0,
                d = l[0],
                m = l[1],
                g = l[2],
                v = l[3],
                y = l[4],
                T = l[5],
                w = e.split(" "),
                x = parseFloat(w[0]) || 0,
                b = parseFloat(w[1]) || 0;
            i ? l !== Tr && (o = d * v - m * g) && (u = x * (-m / o) + b * (d / o) - (d * T - m * y) / o,
                    x = x * (v / o) + b * (-g / o) + (g * T - v * y) / o, b = u) : (x = (a = hr(t)).x + (~w[0].indexOf("%") ? x / 100 * a.width : x),
                    b = a.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * a.height : b)), r || !1 !== r && h.smooth ? (y = x - f,
                    T = b - p, h.xOffset = _ + (y * d + T * g) - y, h.yOffset = c + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
                h.xOrigin = x, h.yOrigin = b, h.smooth = !!r, h.origin = e, h.originIsAbsolute = !!i,
                t.style[er] = "0px 0px", s && (pr(s, h, "xOrigin", f, x), pr(s, h, "yOrigin", p, b),
                    pr(s, h, "xOffset", _, h.xOffset), pr(s, h, "yOffset", c, h.yOffset)), t.setAttribute("data-svg-origin", x + " " + b);
        },
        kr = function(t, e) {
            var i = t._gsap || new Ee(t);
            if ("x" in i && !e && !i.uncache) return i;
            var r, n, s, a, o, u, h, l, f, p, _, c, d, m, g, v, y, T, w, x, b, M, O, k, C, P, D, S, z, E, R, F, B = t.style,
                I = i.scaleX < 0,
                L = rr(t, er) || "0";
            return r = n = s = u = h = l = f = p = _ = 0, a = o = 1, i.svg = !(!t.getCTM || !lr(t)),
                m = Mr(t, i.svg), i.svg && (k = !i.uncache && t.getAttribute("data-svg-origin"),
                    Or(t, k || L, !!k || i.originIsAbsolute, !1 !== i.smooth, m)), c = i.xOrigin || 0,
                d = i.yOrigin || 0, m !== Tr && (T = m[0], w = m[1], x = m[2], b = m[3], r = M = m[4],
                    n = O = m[5], 6 === m.length ? (a = Math.sqrt(T * T + w * w), o = Math.sqrt(b * b + x * x),
                        u = T || w ? Ii(w, T) * Fi : 0, (f = x || b ? Ii(x, b) * Fi + u : 0) && (o *= Math.cos(f * Bi)),
                        i.svg && (r -= c - (c * T + d * x), n -= d - (c * w + d * b))) : (F = m[6], E = m[7],
                        D = m[8], S = m[9], z = m[10], R = m[11], r = m[12], n = m[13], s = m[14], h = (g = Ii(F, z)) * Fi,
                        g && (k = M * (v = Math.cos(-g)) + D * (y = Math.sin(-g)), C = O * v + S * y, P = F * v + z * y,
                            D = M * -y + D * v, S = O * -y + S * v, z = F * -y + z * v, R = E * -y + R * v,
                            M = k, O = C, F = P), l = (g = Ii(-x, z)) * Fi, g && (v = Math.cos(-g), R = b * (y = Math.sin(-g)) + R * v,
                            T = k = T * v - D * y, w = C = w * v - S * y, x = P = x * v - z * y), u = (g = Ii(w, T)) * Fi,
                        g && (k = T * (v = Math.cos(g)) + w * (y = Math.sin(g)), C = M * v + O * y, w = w * v - T * y,
                            O = O * v - M * y, T = k, M = C), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0,
                            l = 180 - l), a = vt(Math.sqrt(T * T + w * w + x * x)), o = vt(Math.sqrt(O * O + F * F)),
                        g = Ii(M, O), f = Math.abs(g) > 2e-4 ? g * Fi : 0, _ = R ? 1 / (R < 0 ? -R : R) : 0),
                    i.svg && (k = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !xr(rr(t, tr)),
                        k && t.setAttribute("transform", k))), Math.abs(f) > 90 && Math.abs(f) < 270 && (I ? (a *= -1,
                    f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)),
                i.x = ((i.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px",
                i.y = ((i.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px",
                i.z = s + "px", i.scaleX = vt(a), i.scaleY = vt(o), i.rotation = vt(u) + "deg",
                i.rotationX = vt(h) + "deg", i.rotationY = vt(l) + "deg", i.skewX = f + "deg", i.skewY = p + "deg",
                i.transformPerspective = _ + "px", (i.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (B[er] = Cr(L)),
                i.xOffset = i.yOffset = 0, i.force3D = A.force3D, i.renderTransform = i.svg ? Sr : di ? Dr : Pr,
                i.uncache = 0, i;
        },
        Cr = function(t) {
            return (t = t.split(" "))[0] + " " + t[1];
        },
        Ar = function(t, e, i) {
            var r = Zt(e);
            return vt(parseFloat(e) + parseFloat(cr(t, "x", i + "px", r))) + r;
        },
        Pr = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Dr(t, e);
        },
        Dr = function(t, e) {
            var i = e || this,
                r = i.xPercent,
                n = i.yPercent,
                s = i.x,
                a = i.y,
                o = i.z,
                u = i.rotation,
                h = i.rotationY,
                l = i.rotationX,
                f = i.skewX,
                p = i.skewY,
                _ = i.scaleX,
                c = i.scaleY,
                d = i.transformPerspective,
                m = i.force3D,
                g = i.target,
                v = i.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && ("0deg" !== l || "0deg" !== h)) {
                var w, x = parseFloat(h) * Bi,
                    b = Math.sin(x),
                    M = Math.cos(x);
                x = parseFloat(l) * Bi, w = Math.cos(x), s = Ar(g, s, b * w * -v), a = Ar(g, a, -Math.sin(x) * -v),
                    o = Ar(g, o, M * w * -v + v);
            }
            "0px" !== d && (y += "perspective(" + d + ") "), (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
                (T || "0px" !== s || "0px" !== a || "0px" !== o) && (y += "0px" !== o || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "),
                "0deg" !== u && (y += "rotate(" + u + ") "), "0deg" !== h && (y += "rotateY(" + h + ") "),
                "0deg" !== l && (y += "rotateX(" + l + ") "), "0deg" === f && "0deg" === p || (y += "skew(" + f + ", " + p + ") "),
                1 === _ && 1 === c || (y += "scale(" + _ + ", " + c + ") "), g.style[tr] = y || "translate(0, 0)";
        },
        Sr = function(t, e) {
            var i, r, n, s, a, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                p = o.rotation,
                _ = o.skewX,
                c = o.skewY,
                d = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                w = o.yOffset,
                x = o.forceCSS,
                b = parseFloat(l),
                M = parseFloat(f);
            p = parseFloat(p), _ = parseFloat(_), (c = parseFloat(c)) && (_ += c = parseFloat(c),
                    p += c), p || _ ? (p *= Bi, _ *= Bi, i = Math.cos(p) * d, r = Math.sin(p) * d, n = Math.sin(p - _) * -m,
                    s = Math.cos(p - _) * m, _ && (c *= Bi, a = Math.tan(_ - c), n *= a = Math.sqrt(1 + a * a),
                        s *= a, c && (a = Math.tan(c), i *= a = Math.sqrt(1 + a * a), r *= a)), i = vt(i),
                    r = vt(r), n = vt(n), s = vt(s)) : (i = d, s = m, r = n = 0), (b && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (b = cr(g, "x", l, "px"),
                    M = cr(g, "y", f, "px")), (v || y || T || w) && (b = vt(b + v - (v * i + y * n) + T),
                    M = vt(M + y - (v * r + y * s) + w)), (u || h) && (a = g.getBBox(), b = vt(b + u / 100 * a.width),
                    M = vt(M + h / 100 * a.height)), a = "matrix(" + i + "," + r + "," + n + "," + s + "," + b + "," + M + ")",
                g.setAttribute("transform", a), x && (g.style[tr] = a);
        },
        zr = function(t, e, i, r, n, s) {
            var a, o, u = I(n),
                h = parseFloat(n) * (u && ~n.indexOf("rad") ? Fi : 1),
                l = s ? h * s : h - r,
                f = r + l + "deg";
            return u && ("short" === (a = n.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360),
                    "cw" === a && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === a && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
                t._pt = o = new ri(t._pt, e, i, r, l, qi), o.e = f, o.u = "deg", t._props.push(i),
                o;
        },
        Er = function(t, e, i) {
            var r, n, s, a, o, u, h, l = _i.style,
                f = i._gsap;
            for (n in l.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;",
                l[tr] = e, hi.body.appendChild(_i), r = kr(_i, 1), Ri)(s = f[n]) !== (a = r[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Zt(s) !== (h = Zt(a)) ? cr(i, n, s, h) : parseFloat(s),
                u = parseFloat(a), t._pt = new ri(t._pt, f, n, o, u - o, Xi), t._pt.u = h || 0,
                t._props.push(n));
            hi.body.removeChild(_i);
        };
    gt("padding,margin,Width,Radius", function(t, e) {
        var i = "Top",
            r = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function(i) {
                return e < 2 ? t + i : "border" + i + t;
            });
        yr[e > 1 ? "border" + t : t] = function(t, e, i, r, n) {
            var s, o;
            if (arguments.length < 4) return s = a.map(function(e) {
                return dr(t, e, i);
            }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (r + "").split(" "), o = {}, a.forEach(function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0];
            }), t.init(e, o, n);
        };
    });
    var Rr, Fr, Br = {
        name: "css",
        register: ar,
        targetTest: function(t) {
            return t.style && t.nodeType;
        },
        init: function(t, e, i, r, n) {
            var s, a, o, u, h, l, f, p, _, c, d, m, g, v, y, T, w, x, b, M = this._props,
                O = t.style;
            for (f in fi || ar(), e)
                if ("autoRound" !== f && (a = e[f], !ht[f] || !Le(f, e, i, r, t, n)))
                    if (h = _typeof(a),
                        l = yr[f], "function" === h && (h = _typeof(a = a.call(i, r, t, n))), "string" === h && ~a.indexOf("random(") && (a = oe(a)),
                        l) l(this, t, f, a, i) && (y = 1);
                    else if ("--" === f.substr(0, 2)) this.add(O, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", a + "", r, n, 0, 0, f);
            else if ("undefined" !== h) {
                if (s = dr(t, f), u = parseFloat(s), (c = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                    o = parseFloat(a), f in Ui && ("autoAlpha" === f && (1 === u && "hidden" === dr(t, "visibility") && o && (u = 0),
                            pr(this, O, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = Ui[f]).indexOf(",") && (f = f.split(",")[0])),
                    d = f in Ri)
                    if (m || ((g = t._gsap).renderTransform || kr(t), v = !1 !== e.smoothOrigin && g.smooth,
                            (m = this._pt = new ri(this._pt, O, tr, 0, 1, g.renderTransform, g, 0, -1)).dep = 1),
                        "scale" === f) this._pt = new ri(this._pt, g, "scaleY", g.scaleY, c ? c * o : o - g.scaleY),
                        M.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            w = void 0, x = void 0, b = void 0, w = (T = a).split(" "), x = w[0], b = w[1] || "50%",
                                "top" !== x && "bottom" !== x && "left" !== b && "right" !== b || (T = x, x = b,
                                    b = T), w[0] = gr[x] || x, w[1] = gr[b] || b, a = w.join(" "), g.svg ? Or(t, a, 0, v, 0, this) : ((_ = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && pr(this, g, "zOrigin", g.zOrigin, _),
                                    pr(this, O, f, Cr(s), Cr(a)));
                            continue;
                        }
                        if ("svgOrigin" === f) {
                            Or(t, a, 1, v, 0, this);
                            continue;
                        }
                        if (f in wr) {
                            zr(this, g, f, u, a, c);
                            continue;
                        }
                        if ("smoothOrigin" === f) {
                            pr(this, g, "smooth", g.smooth, a);
                            continue;
                        }
                        if ("force3D" === f) {
                            g[f] = a;
                            continue;
                        }
                        if ("transform" === f) {
                            Er(this, a, t);
                            continue;
                        }
                    }
                else f in O || (f = sr(f) || f);
                if (d || (o || 0 === o) && (u || 0 === u) && !Ni.test(a) && f in O) o || (o = 0),
                    (p = (s + "").substr((u + "").length)) !== (_ = Zt(a) || (f in A.units ? A.units[f] : p)) && (u = cr(t, f, s, _)),
                    this._pt = new ri(this._pt, d ? g : O, f, u, c ? c * o : o - u, "px" !== _ || !1 === e.autoRound || d ? Xi : ji),
                    this._pt.u = _ || 0, p !== _ && (this._pt.b = s, this._pt.r = Vi);
                else if (f in O) mr.call(this, t, f, s, a);
                else {
                    if (!(f in t)) {
                        it(f, a);
                        continue;
                    }
                    this.add(t, f, t[f], a, r, n);
                }
                M.push(f);
            }
            y && ii(this);
        },
        get: dr,
        aliases: Ui,
        getSetter: function(t, e, i) {
            var r = Ui[e];
            return r && r.indexOf(",") < 0 && (e = r), e in Ri && e !== er && (t._gsap.x || dr(t, "x")) ? i && ci === i ? "scale" === e ? $i : Zi : (ci = i || {}) && ("scale" === e ? Ji : Ki) : t.style && !N(t.style[e]) ? Wi : ~e.indexOf("-") ? Hi : We(t, e);
        },
        core: {
            _removeProperty: fr,
            _getMatrix: Mr
        }
    };
    oi.utils.checkPrefix = sr, Fr = gt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Ri[t] = 1;
    }), gt(Rr, function(t) {
        A.units[t] = "deg", wr[t] = 1;
    }), Ui[Fr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Rr, gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Ui[e[1]] = Fr[e[0]];
    }), gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        A.units[t] = "px";
    }), oi.registerPlugin(Br);
    var Ir = oi.registerPlugin(Br) || oi,
        Lr = Ir.core.Tween;
    t.Back = Ai, t.Bounce = Di, t.CSSPlugin = Br, t.Circ = Ei, t.Cubic = bi, t.Elastic = Ci,
        t.Expo = zi, t.Linear = wi, t.Power0 = mi, t.Power1 = gi, t.Power2 = vi, t.Power3 = yi,
        t.Power4 = Ti, t.Quad = xi, t.Quart = Mi, t.Quint = Oi, t.Sine = Si, t.SteppedEase = Pi,
        t.Strong = ki, t.TimelineLite = Fe, t.TimelineMax = Fe, t.TweenLite = qe, t.TweenMax = Lr,
        t.default = Ir, t.gsap = Ir;
}(window);
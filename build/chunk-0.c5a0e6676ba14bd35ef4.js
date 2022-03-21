(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    555: function (t, e, r) {
      "use strict";
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function n(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      /*!
       * GSAP 3.9.1
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ r.d(e, "a", function () {
        return Di;
      });
      var s,
        a,
        o,
        u,
        h,
        f,
        l,
        p,
        c,
        _,
        d,
        m,
        g,
        v,
        y,
        x,
        T,
        w,
        b,
        O,
        M,
        k,
        A,
        C,
        D,
        P,
        S,
        z,
        R = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        F = { duration: 0.5, overwrite: !1, delay: 0 },
        E = 1e8,
        B = 2 * Math.PI,
        I = B / 4,
        L = 0,
        Y = Math.sqrt,
        U = Math.cos,
        X = Math.sin,
        N = function (t) {
          return "string" == typeof t;
        },
        q = function (t) {
          return "function" == typeof t;
        },
        V = function (t) {
          return "number" == typeof t;
        },
        j = function (t) {
          return void 0 === t;
        },
        G = function (t) {
          return "object" == typeof t;
        },
        W = function (t) {
          return !1 !== t;
        },
        Q = function () {
          return "undefined" != typeof window;
        },
        H = function (t) {
          return q(t) || N(t);
        },
        Z =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        J = Array.isArray,
        $ = /(?:-?\.?\d|\.)+/gi,
        K = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        rt = /[+-]=-?[.\d]+/,
        it = /[^,'"\[\]\s]+/gi,
        nt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        st = {},
        at = {},
        ot = function (t) {
          return (at = zt(t, st)) && gr;
        },
        ut = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        ht = function (t, e) {
          return !e && console.warn(t);
        },
        ft = function (t, e) {
          return (t && (st[t] = e) && at && (at[t] = e)) || st;
        },
        lt = function () {
          return 0;
        },
        pt = {},
        ct = [],
        _t = {},
        dt = {},
        mt = {},
        gt = 30,
        vt = [],
        yt = "",
        xt = function (t) {
          var e,
            r,
            i = t[0];
          if ((G(i) || q(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
            for (r = vt.length; r-- && !vt[r].targetTest(i); );
            e = vt[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Xe(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        Tt = function (t) {
          return t._gsap || xt(oe(t))[0]._gsap;
        },
        wt = function (t, e, r) {
          return (r = t[e]) && q(r)
            ? t[e]()
            : (j(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        bt = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        Ot = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        Mt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        kt = function (t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
          return i < r;
        },
        At = function () {
          var t,
            e,
            r = ct.length,
            i = ct.slice(0);
          for (_t = {}, ct.length = 0, t = 0; t < r; t++)
            (e = i[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        Ct = function (t, e, r, i) {
          ct.length && At(), t.render(e, r, i), ct.length && At();
        },
        Dt = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(it).length < 2
            ? e
            : N(t)
            ? t.trim()
            : t;
        },
        Pt = function (t) {
          return t;
        },
        St = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        zt = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Rt = function t(e, r) {
          for (var i in r)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (e[i] = G(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e;
        },
        Ft = function (t, e) {
          var r,
            i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i;
        },
        Et = function (t) {
          var e,
            r = t.parent || a,
            i = t.keyframes
              ? ((e = J(t.keyframes)),
                function (t, r) {
                  for (var i in r)
                    i in t ||
                      ("duration" === i && e) ||
                      "ease" === i ||
                      (t[i] = r[i]);
                })
              : St;
          if (W(t.inherit))
            for (; r; ) i(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        Bt = function (t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? (n._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = n) : t[i] === e && (t[i] = n),
            (e._next = e._prev = e.parent = null);
        },
        It = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        Lt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        Yt = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        Ut = function (t) {
          return t._repeat
            ? Xt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Xt = function (t, e) {
          var r = Math.floor((t /= e));
          return t && r === t ? r - 1 : r;
        },
        Nt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        qt = function (t) {
          return (t._end = Mt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        Vt = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = Mt(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              qt(t),
              r._dirty || Lt(r, t)),
            t
          );
        },
        jt = function (t, e) {
          var r;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((r = Nt(t.rawTime(), e)),
              (!e._dur || re(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        Gt = function (t, e, r, i) {
          return (
            e.parent && It(e),
            (e._start = Mt(
              (V(r) ? r : r || t !== a ? Kt(t, r, e) : t._time) + e._delay
            )),
            (e._end = Mt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            (function (t, e, r, i, n) {
              void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
              var s,
                a = t[i];
              if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
              a
                ? ((e._next = a._next), (a._next = e))
                : ((e._next = t[r]), (t[r] = e)),
                e._next ? (e._next._prev = e) : (t[i] = e),
                (e._prev = a),
                (e.parent = e._dp = t);
            })(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Ht(e) || (t._recent = e),
            i || jt(t, e),
            t
          );
        },
        Wt = function (t, e) {
          return (
            (st.ScrollTrigger || ut("scrollTrigger", e)) &&
            st.ScrollTrigger.create(e, t)
          );
        },
        Qt = function (t, e, r, i) {
          return (
            Qe(t, e),
            t._initted
              ? !r &&
                t._pt &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                l !== Ce.frame
                ? (ct.push(t), (t._lazy = [e, i]), 1)
                : void 0
              : 1
          );
        },
        Ht = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        Zt = function (t, e, r, i) {
          var n = t._repeat,
            s = Mt(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !i && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = n
              ? n < 0
                ? 1e10
                : Mt(s * (n + 1) + t._rDelay * n)
              : s),
            a > 0 && !i ? Vt(t, (t._tTime = t._tDur * a)) : t.parent && qt(t),
            r || Lt(t.parent, t),
            t
          );
        },
        Jt = function (t) {
          return t instanceof qe ? Lt(t) : Zt(t, t._dur);
        },
        $t = { _start: 0, endTime: lt, totalDuration: lt },
        Kt = function t(e, r, i) {
          var n,
            s,
            a,
            o = e.labels,
            u = e._recent || $t,
            h = e.duration() >= E ? u.endTime(!1) : e._dur;
          return N(r) && (isNaN(r) || r in o)
            ? ((s = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (n = r.indexOf("=")),
              "<" === s || ">" === s
                ? (n >= 0 && (r = r.replace(/=/, "")),
                  ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
                : n < 0
                ? (r in o || (o[r] = h), o[r])
                : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                  a && i && (s = (s / 100) * (J(i) ? i[0] : i).totalDuration()),
                  n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
            : null == r
            ? h
            : +r;
        },
        te = function (t, e, r) {
          var i,
            n,
            s = V(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if ((s && (o.duration = e[1]), (o.parent = r), t)) {
            for (i = o, n = r; n && !("immediateRender" in i); )
              (i = n.vars.defaults || {}), (n = W(n.vars.inherit) && n.parent);
            (o.immediateRender = W(i.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
          }
          return new Ke(e[0], o, e[a + 1]);
        },
        ee = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        re = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        ie = function (t, e) {
          return N(t) && (e = nt.exec(t))
            ? t.substr(e.index + e[0].length)
            : "";
        },
        ne = [].slice,
        se = function (t, e) {
          return (
            t &&
            G(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && G(t[0]))) &&
            !t.nodeType &&
            t !== o
          );
        },
        ae = function (t, e, r) {
          return (
            void 0 === r && (r = []),
            t.forEach(function (t) {
              var i;
              return (N(t) && !e) || se(t, 1)
                ? (i = r).push.apply(i, oe(t))
                : r.push(t);
            }) || r
          );
        },
        oe = function (t, e, r) {
          return !N(t) || r || (!u && De())
            ? J(t)
              ? ae(t, r)
              : se(t)
              ? ne.call(t, 0)
              : t
              ? [t]
              : []
            : ne.call((e || h).querySelectorAll(t), 0);
        },
        ue = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        he = function (t) {
          if (q(t)) return t;
          var e = G(t) ? t : { each: t },
            r = Be(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return (
            N(i)
              ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !a && o && ((h = i[0]), (f = i[1])),
            function (t, a, l) {
              var p,
                c,
                _,
                d,
                m,
                g,
                v,
                y,
                x,
                T = (l || e).length,
                w = s[T];
              if (!w) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, E])[1])) {
                  for (
                    v = -E;
                    v < (v = l[x++].getBoundingClientRect().left) && x < T;

                  );
                  x--;
                }
                for (
                  w = s[T] = [],
                    p = o ? Math.min(x, T) * h - 0.5 : i % x,
                    c = x === E ? 0 : o ? (T * f) / x - 0.5 : (i / x) | 0,
                    v = 0,
                    y = E,
                    g = 0;
                  g < T;
                  g++
                )
                  (_ = (g % x) - p),
                    (d = c - ((g / x) | 0)),
                    (w[g] = m =
                      u ? Math.abs("y" === u ? d : _) : Y(_ * _ + d * d)),
                    m > v && (v = m),
                    m < y && (y = m);
                "random" === i && ue(w),
                  (w.max = v - y),
                  (w.min = y),
                  (w.v = T =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (x > T
                          ? T - 1
                          : u
                          ? "y" === u
                            ? T / x
                            : x
                          : Math.max(x, T / x)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (w.b = T < 0 ? n - T : n),
                  (w.u = ie(e.amount || e.each) || 0),
                  (r = r && T < 0 ? Fe(r) : r);
              }
              return (
                (T = (w[t] - w.min) / w.max || 0),
                Mt(w.b + (r ? r(T) : T) * w.v) + w.u
              );
            }
          );
        },
        fe = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var i = Math.round(parseFloat(r) / t) * t * e;
            return (i - (i % 1)) / e + (V(r) ? 0 : ie(r));
          };
        },
        le = function (t, e) {
          var r,
            i,
            n = J(t);
          return (
            !n &&
              G(t) &&
              ((r = n = t.radius || E),
              t.values
                ? ((t = oe(t.values)), (i = !V(t[0])) && (r *= r))
                : (t = fe(t.increment))),
            ee(
              e,
              n
                ? q(t)
                  ? function (e) {
                      return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                    }
                  : function (e) {
                      for (
                        var n,
                          s,
                          a = parseFloat(i ? e.x : e),
                          o = parseFloat(i ? e.y : 0),
                          u = E,
                          h = 0,
                          f = t.length;
                        f--;

                      )
                        (n = i
                          ? (n = t[f].x - a) * n + (s = t[f].y - o) * s
                          : Math.abs(t[f] - a)) < u && ((u = n), (h = f));
                      return (
                        (h = !r || u <= r ? t[h] : e),
                        i || h === e || V(e) ? h : h + ie(e)
                      );
                    }
                : fe(t)
            )
          );
        },
        pe = function (t, e, r, i) {
          return ee(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
            return J(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      i
                  ) / i;
          });
        },
        ce = function (t, e, r) {
          return ee(r, function (r) {
            return t[~~e(r)];
          });
        },
        _e = function (t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
            (i = t.indexOf(")", e)),
              (n = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, i - e - 7).match(n ? it : $)),
              (a +=
                t.substr(s, e - s) +
                pe(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
              (s = i + 1);
          return a + t.substr(s, t.length - s);
        },
        de = function (t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return ee(n, function (e) {
            return r + (((e - t) / s) * a || 0);
          });
        },
        me = function (t, e, r) {
          var i,
            n,
            s,
            a = t.labels,
            o = E;
          for (i in a)
            (n = a[i] - e) < 0 == !!r &&
              n &&
              o > (n = Math.abs(n)) &&
              ((s = i), (o = n));
          return s;
        },
        ge = function (t, e, r) {
          var i,
            n,
            s = t.vars,
            a = s[e];
          if (a)
            return (
              (i = s[e + "Params"]),
              (n = s.callbackScope || t),
              r && ct.length && At(),
              i ? a.apply(n, i) : a.call(n)
            );
        },
        ve = function (t) {
          return (
            It(t),
            t.scrollTrigger && t.scrollTrigger.kill(!1),
            t.progress() < 1 && ge(t, "onInterrupt"),
            t
          );
        },
        ye = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = q(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: lt,
              render: ur,
              add: Ge,
              kill: fr,
              modifier: hr,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: nr,
              aliases: {},
              register: 0,
            };
          if ((De(), t !== i)) {
            if (dt[e]) return;
            St(i, St(Ft(t, n), s)),
              zt(i.prototype, zt(n, Ft(t, s))),
              (dt[(i.prop = e)] = i),
              t.targetTest && (vt.push(i), (pt[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          ft(e, i), t.register && t.register(gr, i, cr);
        },
        xe = {
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
          transparent: [255, 255, 255, 0],
        },
        Te = function (t, e, r) {
          return (
            (255 *
              (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) +
              0.5) |
            0
          );
        },
        we = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            p,
            c = t ? (V(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : xe.black;
          if (!c) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xe[t])
            )
              c = xe[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((i = t.charAt(1)),
                  (n = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    "#" +
                    i +
                    i +
                    n +
                    n +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (c = parseInt(t.substr(1, 6), 16)) >> 16,
                  (c >> 8) & 255,
                  255 & c,
                  parseInt(t.substr(7), 16) / 255,
                ];
              c = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ];
            } else if ("hsl" === t.substr(0, 3))
              if (((c = p = t.match($)), e)) {
                if (~t.indexOf("="))
                  return (c = t.match(K)), r && c.length < 4 && (c[3] = 1), c;
              } else
                (a = (+c[0] % 360) / 360),
                  (o = +c[1] / 100),
                  (i =
                    2 * (u = +c[2] / 100) -
                    (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                  c.length > 3 && (c[3] *= 1),
                  (c[0] = Te(a + 1 / 3, i, n)),
                  (c[1] = Te(a, i, n)),
                  (c[2] = Te(a - 1 / 3, i, n));
            else c = t.match($) || xe.transparent;
            c = c.map(Number);
          }
          return (
            e &&
              !p &&
              ((i = c[0] / 255),
              (n = c[1] / 255),
              (s = c[2] / 255),
              (u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2),
              h === f
                ? (a = o = 0)
                : ((l = h - f),
                  (o = u > 0.5 ? l / (2 - h - f) : l / (h + f)),
                  (a =
                    h === i
                      ? (n - s) / l + (n < s ? 6 : 0)
                      : h === n
                      ? (s - i) / l + 2
                      : (i - n) / l + 4),
                  (a *= 60)),
              (c[0] = ~~(a + 0.5)),
              (c[1] = ~~(100 * o + 0.5)),
              (c[2] = ~~(100 * u + 0.5))),
            r && c.length < 4 && (c[3] = 1),
            c
          );
        },
        be = function (t) {
          var e = [],
            r = [],
            i = -1;
          return (
            t.split(Me).forEach(function (t) {
              var n = t.match(tt) || [];
              e.push.apply(e, n), r.push((i += n.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        Oe = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o = "",
            u = (t + o).match(Me),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = we(t, e, 1)) &&
                h +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((s = be(t)), (i = r.c).join(o) !== s.c.join(o)))
          )
            for (a = (n = t.replace(Me, "1").split(tt)).length - 1; f < a; f++)
              o +=
                n[f] +
                (~i.indexOf(f)
                  ? u.shift() || h + "0,0,0,0)"
                  : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(Me)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a];
        },
        Me = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in xe) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ke = /hsl[a]?\(/,
        Ae = function (t) {
          var e,
            r = t.join(" ");
          if (((Me.lastIndex = 0), Me.test(r)))
            return (
              (e = ke.test(r)),
              (t[1] = Oe(t[1], e)),
              (t[0] = Oe(t[0], e, be(t[1]))),
              !0
            );
        },
        Ce =
          ((x = Date.now),
          (T = 500),
          (w = 33),
          (b = x()),
          (O = b),
          (k = M = 1e3 / 240),
          (C = function t(e) {
            var r,
              i,
              n,
              s,
              a = x() - O,
              o = !0 === e;
            if (
              (a > T && (b += a - w),
              ((r = (n = (O += a) - b) - k) > 0 || o) &&
                ((s = ++g.frame),
                (v = n - 1e3 * g.time),
                (g.time = n /= 1e3),
                (k += r + (r >= M ? 4 : M - r)),
                (i = 1)),
              o || (_ = d(t)),
              i)
            )
              for (y = 0; y < A.length; y++) A[y](n, v, s, e);
          }),
          (g = {
            time: 0,
            frame: 0,
            tick: function () {
              C(!0);
            },
            deltaRatio: function (t) {
              return v / (1e3 / (t || 60));
            },
            wake: function () {
              f &&
                (!u &&
                  Q() &&
                  ((o = u = window),
                  (h = o.document || {}),
                  (st.gsap = gr),
                  (o.gsapVersions || (o.gsapVersions = [])).push(gr.version),
                  ot(at || o.GreenSockGlobals || (!o.gsap && o) || {}),
                  (m = o.requestAnimationFrame)),
                _ && g.sleep(),
                (d =
                  m ||
                  function (t) {
                    return setTimeout(t, (k - 1e3 * g.time + 1) | 0);
                  }),
                (c = 1),
                C(2));
            },
            sleep: function () {
              (m ? o.cancelAnimationFrame : clearTimeout)(_), (c = 0), (d = lt);
            },
            lagSmoothing: function (t, e) {
              (T = t || 1 / 1e-8), (w = Math.min(e, T, 0));
            },
            fps: function (t) {
              (M = 1e3 / (t || 240)), (k = 1e3 * g.time + M);
            },
            add: function (t) {
              A.indexOf(t) < 0 && A.push(t), De();
            },
            remove: function (t, e) {
              ~(e = A.indexOf(t)) && A.splice(e, 1) && y >= e && y--;
            },
            _listeners: (A = []),
          })),
        De = function () {
          return !c && Ce.wake();
        },
        Pe = {},
        Se = /^[\d.\-M][\d.\-,\s]/,
        ze = /["']/g,
        Re = function (t) {
          for (
            var e,
              r,
              i,
              n = {},
              s = t.substr(1, t.length - 3).split(":"),
              a = s[0],
              o = 1,
              u = s.length;
            o < u;
            o++
          )
            (r = s[o]),
              (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
              (i = r.substr(0, e)),
              (n[a] = isNaN(i) ? i.replace(ze, "").trim() : +i),
              (a = r.substr(e + 1).trim());
          return n;
        },
        Fe = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Ee = function t(e, r) {
          for (var i, n = e._first; n; )
            n instanceof qe
              ? t(n, r)
              : !n.vars.yoyoEase ||
                (n._yoyo && n._repeat) ||
                n._yoyo === r ||
                (n.timeline
                  ? t(n.timeline, r)
                  : ((i = n._ease),
                    (n._ease = n._yEase),
                    (n._yEase = i),
                    (n._yoyo = r))),
              (n = n._next);
        },
        Be = function (t, e) {
          return (
            (t &&
              (q(t)
                ? t
                : Pe[t] ||
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      s = (t + "").split("("),
                      a = Pe[s[0]];
                    return a && s.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [Re(s[1])]
                            : ((e = t),
                              (r = e.indexOf("(") + 1),
                              (i = e.indexOf(")")),
                              (n = e.indexOf("(", r)),
                              e.substring(
                                r,
                                ~n && n < i ? e.indexOf(")", i + 1) : i
                              ))
                                .split(",")
                                .map(Dt)
                        )
                      : Pe._CE && Se.test(t)
                      ? Pe._CE("", t)
                      : a;
                  })(t))) ||
            e
          );
        },
        Ie = function (t, e, r, i) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === i &&
              (i = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var n,
            s = { easeIn: e, easeOut: r, easeInOut: i };
          return (
            bt(t, function (t) {
              for (var e in ((Pe[t] = st[t] = s),
              (Pe[(n = t.toLowerCase())] = r),
              s))
                Pe[
                  n +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = Pe[t + "." + e] = s[e];
            }),
            s
          );
        },
        Le = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Ye = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (s / B) * (Math.asin(1 / n) || 0),
            o = function (t) {
              return 1 === t
                ? 1
                : n * Math.pow(2, -10 * t) * X((t - a) * s) + 1;
            },
            u =
              "out" === e
                ? o
                : "in" === e
                ? function (t) {
                    return 1 - o(1 - t);
                  }
                : Le(o);
          return (
            (s = B / s),
            (u.config = function (r, i) {
              return t(e, r, i);
            }),
            u
          );
        },
        Ue = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            n =
              "out" === e
                ? i
                : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : Le(i);
          return (
            (n.config = function (r) {
              return t(e, r);
            }),
            n
          );
        };
      bt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        Ie(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (Pe.Linear.easeNone = Pe.none = Pe.Linear.easeIn),
        Ie("Elastic", Ye("in"), Ye("out"), Ye()),
        (D = 7.5625),
        (S = 1 / (P = 2.75)),
        Ie(
          "Bounce",
          function (t) {
            return 1 - z(1 - t);
          },
          (z = function (t) {
            return t < S
              ? D * t * t
              : t < 0.7272727272727273
              ? D * Math.pow(t - 1.5 / P, 2) + 0.75
              : t < 0.9090909090909092
              ? D * (t -= 2.25 / P) * t + 0.9375
              : D * Math.pow(t - 2.625 / P, 2) + 0.984375;
          })
        ),
        Ie("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Ie("Circ", function (t) {
          return -(Y(1 - t * t) - 1);
        }),
        Ie("Sine", function (t) {
          return 1 === t ? 1 : 1 - U(t * I);
        }),
        Ie("Back", Ue("in"), Ue("out"), Ue()),
        (Pe.SteppedEase =
          Pe.steps =
          st.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  i = t + (e ? 0 : 1),
                  n = e ? 1 : 0;
                return function (t) {
                  return (((i * re(0, 1 - 1e-8, t)) | 0) + n) * r;
                };
              },
            }),
        (F.ease = Pe["quad.out"]),
        bt(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (yt += t + "," + t + "Params,");
          }
        );
      var Xe = function (t, e) {
          (this.id = L++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : wt),
            (this.set = e ? e.getSetter : nr);
        },
        Ne = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Zt(this, +t.duration, 1, 1),
              (this.data = t.data),
              c || Ce.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Zt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((De(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  Vt(this, t), !r._dp || r.parent || jt(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Gt(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), Ct(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Ut(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Ut(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? Xt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Nt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                Yt(this.totalTime(re(-this._delay, this._tDur, e), !0)),
                qt(this),
                this
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (De(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Gt(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (W(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Nt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Jt(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), Jt(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Kt(this, t), W(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, W(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = q(t) ? t : Pt,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      q(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              ve(this);
            }),
            t
          );
        })();
      St(Ne.prototype, {
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
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var qe = (function (t) {
        function e(e, r) {
          var n;
          return (
            void 0 === e && (e = {}),
            ((n = t.call(this, e) || this).labels = {}),
            (n.smoothChildTiming = !!e.smoothChildTiming),
            (n.autoRemoveChildren = !!e.autoRemoveChildren),
            (n._sort = W(e.sortChildren)),
            a && Gt(e.parent || a, i(n), r),
            e.reversed && n.reverse(),
            e.paused && n.paused(!0),
            e.scrollTrigger && Wt(i(n), e.scrollTrigger),
            n
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return te(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return te(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, i) {
            return te(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              Et(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ke(t, e, Kt(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return Gt(this, Ke.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, i, n, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || i),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new Ke(t, r, Kt(this, n)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, i, n, s, a) {
            return (
              (r.runBackwards = 1),
              (Et(r).immediateRender = W(r.immediateRender)),
              this.staggerTo(t, e, r, i, n, s, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, i, n, s, a, o) {
            return (
              (i.startAt = r),
              (Et(i).immediateRender = W(i.immediateRender)),
              this.staggerTo(t, e, i, n, s, a, o)
            );
          }),
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              o,
              u,
              h,
              f,
              l,
              p,
              c,
              _,
              d,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = t <= 0 ? 0 : Mt(t),
              x = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== a && y > g && t >= 0 && (y = g),
              y !== this._tTime || r || x)
            ) {
              if (
                (m !== this._time &&
                  v &&
                  ((y += this._time - m), (t += this._time - m)),
                (i = y),
                (p = this._start),
                (h = !(l = this._ts)),
                x && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((_ = this._yoyo),
                  (u = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * u + t, e, r);
                if (
                  ((i = Mt(y % u)),
                  y === g
                    ? ((o = this._repeat), (i = v))
                    : ((o = ~~(y / u)) && o === y / u && ((i = v), o--),
                      i > v && (i = v)),
                  (c = Xt(this._tTime, u)),
                  !m && this._tTime && c !== o && (c = o),
                  _ && 1 & o && ((i = v - i), (d = 1)),
                  o !== c && !this._lock)
                ) {
                  var T = _ && 1 & c,
                    w = T === (_ && 1 & o);
                  if (
                    (o < c && (T = !T),
                    (m = T ? 0 : v),
                    (this._lock = 1),
                    (this.render(m || (d ? 0 : Mt(o * u)), e, !v)._lock = 0),
                    (this._tTime = y),
                    !e && this.parent && ge(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !d &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      h !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (g = this._tDur),
                    w &&
                      ((this._lock = 2),
                      (m = T ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !d && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !h)
                  )
                    return this;
                  Ee(this, d);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (f = (function (t, e, r) {
                    var i;
                    if (r > e)
                      for (i = t._first; i && i._start <= r; ) {
                        if ("isPause" === i.data && i._start > e) return i;
                        i = i._next;
                      }
                    else
                      for (i = t._last; i && i._start >= r; ) {
                        if ("isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                      }
                  })(this, Mt(m), Mt(i))) &&
                  (y -= i - (i = f._start)),
                (this._tTime = y),
                (this._time = i),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && i && !e && (ge(this, "onStart"), this._tTime !== y))
              )
                return this;
              if (i >= m && t >= 0)
                for (n = this._first; n; ) {
                  if (
                    ((s = n._next),
                    (n._act || i >= n._start) && n._ts && f !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (i - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (i - n._start) * n._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !h))
                    ) {
                      (f = 0), s && (y += this._zTime = -1e-8);
                      break;
                    }
                  }
                  n = s;
                }
              else {
                n = this._last;
                for (var b = t < 0 ? t : i; n; ) {
                  if (
                    ((s = n._prev), (n._act || b <= n._end) && n._ts && f !== n)
                  ) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (
                      (n.render(
                        n._ts > 0
                          ? (b - n._start) * n._ts
                          : (n._dirty ? n.totalDuration() : n._tDur) +
                              (b - n._start) * n._ts,
                        e,
                        r
                      ),
                      i !== this._time || (!this._ts && !h))
                    ) {
                      (f = 0), s && (y += this._zTime = b ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  n = s;
                }
              }
              if (
                f &&
                !e &&
                (this.pause(),
                (f.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = p), qt(this), this.render(t, e, r);
              this._onUpdate && !e && ge(this, "onUpdate", !0),
                ((y === g && g >= this.totalDuration()) || (!y && m)) &&
                  ((p !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                      It(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!y && !m && g) ||
                      (ge(
                        this,
                        y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(y < g && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((V(e) || (e = Kt(this, e, t)), !(t instanceof Ne))) {
              if (J(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (N(t)) return this.addLabel(t, e);
              if (!q(t)) return this;
              t = Ke.delayedCall(0, t);
            }
            return this !== t ? Gt(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, i) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === i && (i = -E);
            for (var n = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof Ke
                  ? e && n.push(s)
                  : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                (s = s._next);
            return n;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return N(t)
              ? this.removeLabel(t)
              : q(t)
              ? this.killTweensOf(t)
              : (Bt(this, t),
                t === this._recent && (this._recent = this._last),
                Lt(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Mt(
                    Ce.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = Kt(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var i = Ke.delayedCall(0, e || lt, r);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Gt(this, i, Kt(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = Kt(this, t); e; )
              e._start === t && "isPause" === e.data && It(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
              Ve !== i[n] && i[n].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, i = [], n = oe(t), s = this._first, a = V(e); s; )
              s instanceof Ke
                ? kt(s._targets, n) &&
                  (a
                    ? (!Ve || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  i.push(s)
                : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                (s = s._next);
            return i;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              i = this,
              n = Kt(i, t),
              s = e,
              a = s.startAt,
              o = s.onStart,
              u = s.onStartParams,
              h = s.immediateRender,
              f = Ke.to(
                i,
                St(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (n - (a && "time" in a ? a.time : i._time)) /
                          i.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((i.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (n - (a && "time" in a ? a.time : i._time)) /
                              i.timeScale()
                          );
                        f._dur !== t && Zt(f, t, 0, 1).render(f._time, !0, !0),
                          (r = 1);
                      }
                      o && o.apply(f, u || []);
                    },
                  },
                  e
                )
              );
            return h ? f.render(0) : f;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, St({ startAt: { time: Kt(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), me(this, Kt(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), me(this, Kt(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, s = this.labels; n; )
              n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
            if (e) for (i in s) s[i] >= r && (s[i] += t);
            return Lt(this);
          }),
          (r.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Lt(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              i,
              n = 0,
              s = this,
              o = s._last,
              u = E;
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -t : t)
              );
            if (s._dirty) {
              for (i = s.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (r = o._start) > u && s._sort && o._ts && !s._lock
                    ? ((s._lock = 1), (Gt(s, o, r - o._delay, 1)._lock = 0))
                    : (u = r),
                  r < 0 &&
                    o._ts &&
                    ((n -= r),
                    ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                      ((s._start += r / s._ts),
                      (s._time -= r),
                      (s._tTime -= r)),
                    s.shiftChildren(-r, !1, -Infinity),
                    (u = 0)),
                  o._end > n && o._ts && (n = o._end),
                  (o = e);
              Zt(s, s === a && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
            }
            return s._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((a._ts && (Ct(a, Nt(t, a)), (l = Ce.frame)), Ce.frame >= gt)) {
              gt += R.autoSleep || 120;
              var e = a._first;
              if ((!e || !e._ts) && R.autoSleep && Ce._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || Ce.sleep();
              }
            }
          }),
          e
        );
      })(Ne);
      St(qe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Ve,
        je = function (t, e, r, i, n, s, a) {
          var o,
            u,
            h,
            f,
            l,
            p,
            c,
            _,
            d = new cr(this._pt, t, e, 0, 1, or, null, n),
            m = 0,
            g = 0;
          for (
            d.b = r,
              d.e = i,
              r += "",
              (c = ~(i += "").indexOf("random(")) && (i = _e(i)),
              s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
              u = r.match(et) || [];
            (o = et.exec(i));

          )
            (f = o[0]),
              (l = i.substring(m, o.index)),
              h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
              f !== u[g++] &&
                ((p = parseFloat(u[g - 1]) || 0),
                (d._pt = {
                  _next: d._pt,
                  p: l || 1 === g ? l : ",",
                  s: p,
                  c:
                    "=" === f.charAt(1)
                      ? parseFloat(f.substr(2)) * ("-" === f.charAt(0) ? -1 : 1)
                      : parseFloat(f) - p,
                  m: h && h < 4 ? Math.round : 0,
                }),
                (m = et.lastIndex));
          return (
            (d.c = m < i.length ? i.substring(m, i.length) : ""),
            (d.fp = a),
            (rt.test(i) || c) && (d.e = 0),
            (this._pt = d),
            d
          );
        },
        Ge = function (t, e, r, i, n, s, a, o, u) {
          q(i) && (i = i(n || 0, t, s));
          var h,
            f = t[e],
            l =
              "get" !== r
                ? r
                : q(f)
                ? u
                  ? t[
                      e.indexOf("set") || !q(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : f,
            p = q(f) ? (u ? rr : er) : tr;
          if (
            (N(i) &&
              (~i.indexOf("random(") && (i = _e(i)),
              "=" === i.charAt(1) &&
                ((h =
                  parseFloat(l) +
                  parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                  (ie(l) || 0)) ||
                  0 === h) &&
                (i = h)),
            l !== i)
          )
            return isNaN(l * i) || "" === i
              ? (!f && !(e in t) && ut(e, i),
                je.call(this, t, e, l, i, p, o || R.stringFilter, u))
              : ((h = new cr(
                  this._pt,
                  t,
                  e,
                  +l || 0,
                  i - (l || 0),
                  "boolean" == typeof f ? ar : sr,
                  0,
                  p
                )),
                u && (h.fp = u),
                a && h.modifier(a, this, t),
                (this._pt = h));
        },
        We = function (t, e, r, i, n, s) {
          var a, o, u, h;
          if (
            dt[t] &&
            !1 !==
              (a = new dt[t]()).init(
                n,
                a.rawVars
                  ? e[t]
                  : (function (t, e, r, i, n) {
                      if (
                        (q(t) && (t = Ze(t, n, e, r, i)),
                        !G(t) || (t.style && t.nodeType) || J(t) || Z(t))
                      )
                        return N(t) ? Ze(t, n, e, r, i) : t;
                      var s,
                        a = {};
                      for (s in t) a[s] = Ze(t[s], n, e, r, i);
                      return a;
                    })(e[t], i, n, s, r),
                r,
                i,
                s
              ) &&
            ((r._pt = o =
              new cr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
            r !== p)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length;
              h--;

            )
              u[a._props[h]] = o;
          return a;
        },
        Qe = function t(e, r) {
          var i,
            n,
            o,
            u,
            h,
            f,
            l,
            p,
            c,
            _,
            d,
            m,
            g,
            v = e.vars,
            y = v.ease,
            x = v.startAt,
            T = v.immediateRender,
            w = v.lazy,
            b = v.onUpdate,
            O = v.onUpdateParams,
            M = v.callbackScope,
            k = v.runBackwards,
            A = v.yoyoEase,
            C = v.keyframes,
            D = v.autoRevert,
            P = e._dur,
            S = e._startAt,
            z = e._targets,
            R = e.parent,
            B = R && "nested" === R.data ? R.parent._targets : z,
            I = "auto" === e._overwrite && !s,
            L = e.timeline;
          if (
            (L && (!C || !y) && (y = "none"),
            (e._ease = Be(y, F.ease)),
            (e._yEase = A ? Fe(Be(!0 === A ? y : A, F.ease)) : 0),
            A &&
              e._yoyo &&
              !e._repeat &&
              ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !L && !!v.runBackwards),
            !L || (C && !v.stagger))
          ) {
            if (
              ((m = (p = z[0] ? Tt(z[0]).harness : 0) && v[p.prop]),
              (i = Ft(v, pt)),
              S && It(S.render(-1, !0)),
              x)
            )
              if (
                (It(
                  (e._startAt = Ke.set(
                    z,
                    St(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: W(w),
                        startAt: null,
                        delay: 0,
                        onUpdate: b,
                        onUpdateParams: O,
                        callbackScope: M,
                        stagger: 0,
                      },
                      x
                    )
                  ))
                ),
                r < 0 && !T && !D && e._startAt.render(-1, !0),
                T)
              ) {
                if ((r > 0 && !D && (e._startAt = 0), P && r <= 0))
                  return void (r && (e._zTime = r));
              } else !1 === D && (e._startAt = 0);
            else if (k && P)
              if (S) !D && (e._startAt = 0);
              else if (
                (r && (T = !1),
                (o = St(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && W(w),
                    immediateRender: T,
                    stagger: 0,
                    parent: R,
                  },
                  i
                )),
                m && (o[p.prop] = m),
                It((e._startAt = Ke.set(z, o))),
                r < 0 && e._startAt.render(-1, !0),
                (e._zTime = r),
                T)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8);
            for (
              e._pt = 0, w = (P && W(w)) || (w && !P), n = 0;
              n < z.length;
              n++
            ) {
              if (
                ((l = (h = z[n])._gsap || xt(z)[n]._gsap),
                (e._ptLookup[n] = _ = {}),
                _t[l.id] && ct.length && At(),
                (d = B === z ? n : B.indexOf(h)),
                p &&
                  !1 !== (c = new p()).init(h, m || i, e, d, B) &&
                  ((e._pt = u =
                    new cr(e._pt, h, c.name, 0, 1, c.render, c, 0, c.priority)),
                  c._props.forEach(function (t) {
                    _[t] = u;
                  }),
                  c.priority && (f = 1)),
                !p || m)
              )
                for (o in i)
                  dt[o] && (c = We(o, i, e, d, h, B))
                    ? c.priority && (f = 1)
                    : (_[o] = u =
                        Ge.call(e, h, o, "get", i[o], d, B, 0, v.stringFilter));
              e._op && e._op[n] && e.kill(h, e._op[n]),
                I &&
                  e._pt &&
                  ((Ve = e),
                  a.killTweensOf(h, _, e.globalTime(r)),
                  (g = !e.parent),
                  (Ve = 0)),
                e._pt && w && (_t[l.id] = 1);
            }
            f && pr(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = b),
            (e._initted = (!e._op || e._pt) && !g),
            C && r <= 0 && L.render(E, !0, !0);
        },
        He = function (t, e, r, i) {
          var n,
            s,
            a = e.ease || i || "power1.inOut";
          if (J(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (n in e)
              (s = r[n] || (r[n] = [])),
                "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
        },
        Ze = function (t, e, r, i, n) {
          return q(t)
            ? t.call(e, r, i, n)
            : N(t) && ~t.indexOf("random(")
            ? _e(t)
            : t;
        },
        Je = yt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        $e = {};
      bt(Je + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return ($e[t] = 1);
      });
      var Ke = (function (t) {
        function e(e, r, n, o) {
          var u;
          "number" == typeof r && ((n.duration = r), (r = n), (n = null));
          var h,
            f,
            l,
            p,
            c,
            _,
            d,
            m,
            g = (u = t.call(this, o ? r : Et(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            x = g.immediateRender,
            T = g.stagger,
            w = g.overwrite,
            b = g.keyframes,
            O = g.defaults,
            M = g.scrollTrigger,
            k = g.yoyoEase,
            A = r.parent || a,
            C = (J(e) || Z(e) ? V(e[0]) : "length" in r) ? [e] : oe(e);
          if (
            ((u._targets = C.length
              ? xt(C)
              : ht(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !R.nullTargetWarn
                ) || []),
            (u._ptLookup = []),
            (u._overwrite = w),
            b || T || H(v) || H(y))
          ) {
            if (
              ((r = u.vars),
              (h = u.timeline =
                new qe({ data: "nested", defaults: O || {} })).kill(),
              (h.parent = h._dp = i(u)),
              (h._start = 0),
              T || H(v) || H(y))
            ) {
              if (((p = C.length), (d = T && he(T)), G(T)))
                for (c in T) ~Je.indexOf(c) && (m || (m = {}), (m[c] = T[c]));
              for (f = 0; f < p; f++)
                ((l = Ft(r, $e)).stagger = 0),
                  k && (l.yoyoEase = k),
                  m && zt(l, m),
                  (_ = C[f]),
                  (l.duration = +Ze(v, i(u), f, _, C)),
                  (l.delay = (+Ze(y, i(u), f, _, C) || 0) - u._delay),
                  !T &&
                    1 === p &&
                    l.delay &&
                    ((u._delay = y = l.delay), (u._start += y), (l.delay = 0)),
                  h.to(_, l, d ? d(f, _, C) : 0),
                  (h._ease = Pe.none);
              h.duration() ? (v = y = 0) : (u.timeline = 0);
            } else if (b) {
              Et(St(h.vars.defaults, { ease: "none" })),
                (h._ease = Be(b.ease || r.ease || "none"));
              var D,
                P,
                S,
                z = 0;
              if (J(b))
                b.forEach(function (t) {
                  return h.to(C, t, ">");
                });
              else {
                for (c in ((l = {}), b))
                  "ease" === c ||
                    "easeEach" === c ||
                    He(c, b[c], l, b.easeEach);
                for (c in l)
                  for (
                    D = l[c].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      z = 0,
                      f = 0;
                    f < D.length;
                    f++
                  )
                    ((S = {
                      ease: (P = D[f]).e,
                      duration: ((P.t - (f ? D[f - 1].t : 0)) / 100) * v,
                    })[c] = P.v),
                      h.to(C, S, z),
                      (z += S.duration);
                h.duration() < v && h.to({}, { duration: v - h.duration() });
              }
            }
            v || u.duration((v = h.duration()));
          } else u.timeline = 0;
          return (
            !0 !== w || s || ((Ve = i(u)), a.killTweensOf(C), (Ve = 0)),
            Gt(A, i(u), n),
            r.reversed && u.reverse(),
            r.paused && u.paused(!0),
            (x ||
              (!v &&
                !b &&
                u._start === Mt(A._time) &&
                W(x) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(i(u)) &&
                "nested" !== A.data)) &&
              ((u._tTime = -1e-8), u.render(Math.max(0, -y))),
            M && Wt(i(u), M),
            u
          );
        }
        n(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              p = this._time,
              c = this._tDur,
              _ = this._dur,
              d = t > c - 1e-8 && t >= 0 ? c : t < 1e-8 ? 0 : t;
            if (_) {
              if (
                d !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((i = d), (f = this.timeline), this._repeat)) {
                  if (((a = _ + this._rDelay), this._repeat < -1 && t < 0))
                    return this.totalTime(100 * a + t, e, r);
                  if (
                    ((i = Mt(d % a)),
                    d === c
                      ? ((s = this._repeat), (i = _))
                      : ((s = ~~(d / a)) && s === d / a && ((i = _), s--),
                        i > _ && (i = _)),
                    (u = this._yoyo && 1 & s) &&
                      ((l = this._yEase), (i = _ - i)),
                    (o = Xt(this._tTime, a)),
                    i === p && !r && this._initted)
                  )
                    return this;
                  s !== o &&
                    (f && this._yEase && Ee(f, u),
                    !this.vars.repeatRefresh ||
                      u ||
                      this._lock ||
                      ((this._lock = r = 1),
                      (this.render(Mt(a * s), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Qt(this, t < 0 ? t : i, r, e))
                    return (this._tTime = 0), this;
                  if (_ !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = d),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = h = (l || this._ease)(i / _)),
                  this._from && (this.ratio = h = 1 - h),
                  i && !p && !e && (ge(this, "onStart"), this._tTime !== d))
                )
                  return this;
                for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                (f &&
                  f.render(
                    t < 0
                      ? t
                      : !i && u
                      ? -1e-8
                      : f._dur * f._ease(i / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    ge(this, "onUpdate")),
                  this._repeat &&
                    s !== o &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ge(this, "onRepeat"),
                  (d !== this._tDur && d) ||
                    this._tTime !== d ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (t || !_) &&
                      ((d === this._tDur && this._ts > 0) ||
                        (!d && this._ts < 0)) &&
                      It(this, 1),
                    e ||
                      (t < 0 && !p) ||
                      (!d && !p) ||
                      (ge(
                        this,
                        d === c ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(d < c && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, r, i) {
                var n,
                  s,
                  a,
                  o = t.ratio,
                  u =
                    e < 0 ||
                    (!e &&
                      ((!t._start &&
                        (function t(e) {
                          var r = e.parent;
                          return (
                            r &&
                            r._ts &&
                            r._initted &&
                            !r._lock &&
                            (r.rawTime() < 0 || t(r))
                          );
                        })(t) &&
                        (t._initted || !Ht(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Ht(t))))
                      ? 0
                      : 1,
                  h = t._rDelay,
                  f = 0;
                if (
                  (h &&
                    t._repeat &&
                    ((f = re(0, t._tDur, e)),
                    (s = Xt(f, h)),
                    t._yoyo && 1 & s && (u = 1 - u),
                    s !== Xt(t._tTime, h) &&
                      ((o = 1 - u),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  u !== o || i || 1e-8 === t._zTime || (!e && t._zTime))
                ) {
                  if (!t._initted && Qt(t, e, i, r)) return;
                  for (
                    a = t._zTime,
                      t._zTime = e || (r ? 1e-8 : 0),
                      r || (r = e && !a),
                      t.ratio = u,
                      t._from && (u = 1 - u),
                      t._time = 0,
                      t._tTime = f,
                      n = t._pt;
                    n;

                  )
                    n.r(u, n.d), (n = n._next);
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !r && ge(t, "onUpdate"),
                    f && t._repeat && !r && t.parent && ge(t, "onRepeat"),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === u &&
                      (u && It(t, 1),
                      r ||
                        (ge(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
              return (this._lazy = this._pt = 0), this.parent ? ve(this) : this;
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)
                  ._first || ve(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Zt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f = this._targets,
              l = t ? oe(t) : f,
              p = this._ptLookup,
              c = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var r = t.length, i = r === e.length;
                  i && r-- && t[r] === e[r];

                );
                return r < 0;
              })(f, l)
            )
              return "all" === e && (this._pt = 0), ve(this);
            for (
              i = this._op = this._op || [],
                "all" !== e &&
                  (N(e) &&
                    ((o = {}),
                    bt(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var r,
                      i,
                      n,
                      s,
                      a = t[0] ? Tt(t[0]).harness : 0,
                      o = a && a.aliases;
                    if (!o) return e;
                    for (i in ((r = zt({}, e)), o))
                      if ((i in r))
                        for (n = (s = o[i].split(",")).length; n--; )
                          r[s[n]] = r[i];
                    return r;
                  })(f, e))),
                h = f.length;
              h--;

            )
              if (~l.indexOf(f[h]))
                for (o in ((n = p[h]),
                "all" === e
                  ? ((i[h] = e), (a = n), (s = {}))
                  : ((s = i[h] = i[h] || {}), (a = e)),
                a))
                  (u = n && n[o]) &&
                    (("kill" in u.d && !0 !== u.d.kill(o)) ||
                      Bt(this, u, "_pt"),
                    delete n[o]),
                    "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && c && ve(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return te(1, arguments);
          }),
          (e.delayedCall = function (t, r, i, n) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: n,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return te(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return a.killTweensOf(t, e, r);
          }),
          e
        );
      })(Ne);
      St(Ke.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        bt("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ke[t] = function () {
            var e = new qe(),
              r = ne.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var tr = function (t, e, r) {
          return (t[e] = r);
        },
        er = function (t, e, r) {
          return t[e](r);
        },
        rr = function (t, e, r, i) {
          return t[e](i.fp, r);
        },
        ir = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        nr = function (t, e) {
          return q(t[e]) ? er : j(t[e]) && t.setAttribute ? ir : tr;
        },
        sr = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        ar = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        or = function (t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r; )
              (i =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                i),
                (r = r._next);
            i += e.c;
          }
          e.set(e.t, e.p, i, e);
        },
        ur = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        hr = function (t, e, r, i) {
          for (var n, s = this._pt; s; )
            (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
        },
        fr = function (t) {
          for (var e, r, i = this._pt; i; )
            (r = i._next),
              (i.p === t && !i.op) || i.op === t
                ? Bt(this, i, "_pt")
                : i.dep || (e = 1),
              (i = r);
          return !e;
        },
        lr = function (t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
        },
        pr = function (t) {
          for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
              (s._next = r) ? (r._prev = s) : (n = s),
              (s = e);
          }
          t._pt = i;
        },
        cr = (function () {
          function t(t, e, r, i, n, s, a, o, u) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || sr),
              (this.d = a || this),
              (this.set = o || tr),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = lr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      bt(
        yt +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (pt[t] = 1);
        }
      ),
        (st.TweenMax = st.TweenLite = Ke),
        (st.TimelineLite = st.TimelineMax = qe),
        (a = new qe({
          sortChildren: !1,
          defaults: F,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (R.stringFilter = Ae);
      var _r = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return ye(t);
          });
        },
        timeline: function (t) {
          return new qe(t);
        },
        getTweensOf: function (t, e) {
          return a.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          N(t) && (t = oe(t)[0]);
          var n = Tt(t || {}).get,
            s = r ? Pt : Dt;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((dt[e] && dt[e].get) || n)(t, e, r, i))
                : function (e, r, i) {
                    return s(((dt[e] && dt[e].get) || n)(t, e, r, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = oe(t)).length > 1) {
            var i = t.map(function (t) {
                return gr.quickSetter(t, e, r);
              }),
              n = i.length;
            return function (t) {
              for (var e = n; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var s = dt[e],
            a = Tt(t),
            o = (a.harness && (a.harness.aliases || {})[e]) || e,
            u = s
              ? function (e) {
                  var i = new s();
                  (p._pt = 0),
                    i.init(t, r ? e + r : e, p, 0, [t]),
                    i.render(1, i),
                    p._pt && ur(1, p);
                }
              : a.set(t, o);
          return s
            ? u
            : function (e) {
                return u(t, o, r ? e + r : e, a, 1);
              };
        },
        isTweening: function (t) {
          return a.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Be(t.ease, F.ease)), Rt(F, t || {});
        },
        config: function (t) {
          return Rt(R, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          (i || "").split(",").forEach(function (t) {
            return (
              t &&
              !dt[t] &&
              !st[t] &&
              ht(e + " effect requires " + t + " plugin.")
            );
          }),
            (mt[e] = function (t, e, i) {
              return r(oe(t), St(e || {}, n), i);
            }),
            s &&
              (qe.prototype[e] = function (t, r, i) {
                return this.add(mt[e](t, G(r) ? r : (i = r) && {}, this), i);
              });
        },
        registerEase: function (t, e) {
          Pe[t] = Be(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Be(t, e) : Pe;
        },
        getById: function (t) {
          return a.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            i,
            n = new qe(t);
          for (
            n.smoothChildTiming = W(t.smoothChildTiming),
              a.remove(n),
              n._dp = 0,
              n._time = n._tTime = a._time,
              r = a._first;
            r;

          )
            (i = r._next),
              (!e &&
                !r._dur &&
                r instanceof Ke &&
                r.vars.onComplete === r._targets[0]) ||
                Gt(n, r, r._start - r._delay),
              (r = i);
          return Gt(a, n, 0), n;
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return J(e)
              ? ce(e, t(0, e.length), r)
              : ee(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return J(e)
              ? ce(e, t(0, e.length - 1), r)
              : ee(i, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                  );
                });
          },
          distribute: he,
          random: pe,
          snap: le,
          normalize: function (t, e, r) {
            return de(t, e, 0, 1, r);
          },
          getUnit: ie,
          clamp: function (t, e, r) {
            return ee(r, function (r) {
              return re(t, e, r);
            });
          },
          splitColor: we,
          toArray: oe,
          selector: function (t) {
            return (
              (t = oe(t)[0] || ht("Invalid scope") || {}),
              function (e) {
                var r = t.current || t.nativeElement || t;
                return oe(
                  e,
                  r.querySelectorAll
                    ? r
                    : r === t
                    ? ht("Invalid scope") || h.createElement("div")
                    : t
                );
              }
            );
          },
          mapRange: de,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || ie(r));
            };
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var a,
                o,
                u,
                h,
                f,
                l = N(e),
                p = {};
              if ((!0 === i && (n = 1) && (i = null), l))
                (e = { p: e }), (r = { p: r });
              else if (J(e) && !J(r)) {
                for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++)
                  u.push(t(e[o - 1], e[o]));
                h--,
                  (s = function (t) {
                    t *= h;
                    var e = Math.min(f, ~~t);
                    return u[e](t - e);
                  }),
                  (i = r);
              } else n || (e = zt(J(e) ? [] : {}, e));
              if (!u) {
                for (a in r) Ge.call(p, e, a, "get", r[a]);
                s = function (t) {
                  return ur(t, p) || (l ? e.p : e);
                };
              }
            }
            return ee(i, s);
          },
          shuffle: ue,
        },
        install: ot,
        effects: mt,
        ticker: Ce,
        updateRoot: qe.updateRoot,
        plugins: dt,
        globalTimeline: a,
        core: {
          PropTween: cr,
          globals: ft,
          Tween: Ke,
          Timeline: qe,
          Animation: Ne,
          getCache: Tt,
          _removeLinkedListItem: Bt,
          suppressOverwrites: function (t) {
            return (s = t);
          },
        },
      };
      bt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (_r[t] = Ke[t]);
      }),
        Ce.add(qe.updateRoot),
        (p = _r.to({}, { duration: 0 }));
      var dr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        mr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, i) {
              i._onInit = function (t) {
                var i, n;
                if (
                  (N(r) &&
                    ((i = {}),
                    bt(r, function (t) {
                      return (i[t] = 1);
                    }),
                    (r = i)),
                  e)
                ) {
                  for (n in ((i = {}), r)) i[n] = e(r[n]);
                  r = i;
                }
                !(function (t, e) {
                  var r,
                    i,
                    n,
                    s = t._targets;
                  for (r in e)
                    for (i = s.length; i--; )
                      (n = t._ptLookup[i][r]) &&
                        (n = n.d) &&
                        (n._pt && (n = dr(n, r)),
                        n && n.modifier && n.modifier(e[r], t, s[i], r));
                })(t, r);
              };
            },
          };
        },
        gr =
          _r.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, i, n) {
                var s, a;
                for (s in e)
                  (a = this.add(
                    t,
                    "setAttribute",
                    (t.getAttribute(s) || 0) + "",
                    e[s],
                    i,
                    n,
                    0,
                    0,
                    s
                  )) && (a.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
              },
            },
            mr("roundProps", fe),
            mr("modifiers"),
            mr("snap", le)
          ) || _r;
      (Ke.version = qe.version = gr.version = "3.9.1"), (f = 1), Q() && De();
      Pe.Power0,
        Pe.Power1,
        Pe.Power2,
        Pe.Power3,
        Pe.Power4,
        Pe.Linear,
        Pe.Quad,
        Pe.Cubic,
        Pe.Quart,
        Pe.Quint,
        Pe.Strong,
        Pe.Elastic,
        Pe.Back,
        Pe.SteppedEase,
        Pe.Bounce,
        Pe.Sine,
        Pe.Expo,
        Pe.Circ;
      /*!
       * CSSPlugin 3.9.1
       * https://greensock.com
       *
       * Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var vr,
        yr,
        xr,
        Tr,
        wr,
        br,
        Or,
        Mr = {},
        kr = 180 / Math.PI,
        Ar = Math.PI / 180,
        Cr = Math.atan2,
        Dr = /([A-Z])/g,
        Pr = /(?:left|right|width|margin|padding|x)/i,
        Sr = /[\s,\(]\S/,
        zr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Rr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Fr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Er = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Br = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Ir = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Lr = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        Yr = function (t, e, r) {
          return (t.style[e] = r);
        },
        Ur = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        Xr = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        Nr = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        qr = function (t, e, r, i, n) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
        },
        Vr = function (t, e, r, i, n) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(n, s);
        },
        jr = "transform",
        Gr = jr + "Origin",
        Wr = function (t, e) {
          var r = yr.createElementNS
            ? yr.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : yr.createElement(t);
          return r.style ? r : yr.createElement(t);
        },
        Qr = function t(e, r, i) {
          var n = getComputedStyle(e);
          return (
            n[r] ||
            n.getPropertyValue(r.replace(Dr, "-$1").toLowerCase()) ||
            n.getPropertyValue(r) ||
            (!i && t(e, Zr(r) || r, 1)) ||
            ""
          );
        },
        Hr = "O,Moz,ms,Ms,Webkit".split(","),
        Zr = function (t, e, r) {
          var i = (e || wr).style,
            n = 5;
          if (t in i && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            n-- && !(Hr[n] + t in i);

          );
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Hr[n] : "") + t;
        },
        Jr = function () {
          "undefined" != typeof window &&
            window.document &&
            ((vr = window),
            (yr = vr.document),
            (xr = yr.documentElement),
            (wr = Wr("div") || { style: {} }),
            Wr("div"),
            (jr = Zr(jr)),
            (Gr = jr + "Origin"),
            (wr.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (Or = !!Zr("perspective")),
            (Tr = 1));
        },
        $r = function t(e) {
          var r,
            i = Wr(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            n = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (
            (xr.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (o) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
            xr.removeChild(i),
            (this.style.cssText = a),
            r
          );
        },
        Kr = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        ti = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = $r.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === $r ||
              (e = $r.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +Kr(t, ["x", "cx", "x1"]) || 0,
                  y: +Kr(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        ei = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ti(t));
        },
        ri = function (t, e) {
          if (e) {
            var r = t.style;
            e in Mr && e !== Gr && (e = jr),
              r.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  r.removeProperty(e.replace(Dr, "-$1").toLowerCase()))
                : r.removeAttribute(e);
          }
        },
        ii = function (t, e, r, i, n, s) {
          var a = new cr(t._pt, e, r, 0, 1, s ? Lr : Ir);
          return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
        },
        ni = { deg: 1, rad: 1, turn: 1 },
        si = function t(e, r, i, n) {
          var s,
            a,
            o,
            u,
            h = parseFloat(i) || 0,
            f = (i + "").trim().substr((h + "").length) || "px",
            l = wr.style,
            p = Pr.test(r),
            c = "svg" === e.tagName.toLowerCase(),
            _ = (c ? "client" : "offset") + (p ? "Width" : "Height"),
            d = "px" === n,
            m = "%" === n;
          return n === f || !h || ni[n] || ni[f]
            ? h
            : ("px" !== f && !d && (h = t(e, r, i, "px")),
              (u = e.getCTM && ei(e)),
              (!m && "%" !== f) || (!Mr[r] && !~r.indexOf("adius"))
                ? ((l[p ? "width" : "height"] = 100 + (d ? f : n)),
                  (a =
                    ~r.indexOf("adius") || ("em" === n && e.appendChild && !c)
                      ? e
                      : e.parentNode),
                  u && (a = (e.ownerSVGElement || {}).parentNode),
                  (a && a !== yr && a.appendChild) || (a = yr.body),
                  (o = a._gsap) && m && o.width && p && o.time === Ce.time
                    ? Ot((h / o.width) * 100)
                    : ((m || "%" === f) && (l.position = Qr(e, "position")),
                      a === e && (l.position = "static"),
                      a.appendChild(wr),
                      (s = wr[_]),
                      a.removeChild(wr),
                      (l.position = "absolute"),
                      p &&
                        m &&
                        (((o = Tt(a)).time = Ce.time), (o.width = a[_])),
                      Ot(d ? (s * h) / 100 : s && h ? (100 / s) * h : 0)))
                : ((s = u ? e.getBBox()[p ? "width" : "height"] : e[_]),
                  Ot(m ? (h / s) * 100 : (h / 100) * s)));
        },
        ai = function (t, e, r, i) {
          var n;
          return (
            Tr || Jr(),
            e in zr &&
              "transform" !== e &&
              ~(e = zr[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            Mr[e] && "transform" !== e
              ? ((n = gi(t, i)),
                (n =
                  "transformOrigin" !== e
                    ? n[e]
                    : n.svg
                    ? n.origin
                    : vi(Qr(t, Gr)) + " " + n.zOrigin + "px"))
              : (!(n = t.style[e]) ||
                  "auto" === n ||
                  i ||
                  ~(n + "").indexOf("calc(")) &&
                (n =
                  (fi[e] && fi[e](t, e, r)) ||
                  Qr(t, e) ||
                  wt(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? si(t, e, n, r) + r : n
          );
        },
        oi = function (t, e, r, i) {
          if (!r || "none" === r) {
            var n = Zr(e, t, 1),
              s = n && Qr(t, n, 1);
            s && s !== r
              ? ((e = n), (r = s))
              : "borderColor" === e && (r = Qr(t, "borderTopColor"));
          }
          var a,
            o,
            u,
            h,
            f,
            l,
            p,
            c,
            _,
            d,
            m,
            g,
            v = new cr(this._pt, t.style, e, 0, 1, or),
            y = 0,
            x = 0;
          if (
            ((v.b = r),
            (v.e = i),
            (r += ""),
            "auto" === (i += "") &&
              ((t.style[e] = i), (i = Qr(t, e) || i), (t.style[e] = r)),
            Ae((a = [r, i])),
            (i = a[1]),
            (u = (r = a[0]).match(tt) || []),
            (i.match(tt) || []).length)
          ) {
            for (; (o = tt.exec(i)); )
              (p = o[0]),
                (_ = i.substring(y, o.index)),
                f
                  ? (f = (f + 1) % 5)
                  : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) ||
                    (f = 1),
                p !== (l = u[x++] || "") &&
                  ((h = parseFloat(l) || 0),
                  (m = l.substr((h + "").length)),
                  (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
                    (p = p.substr(2)),
                  (c = parseFloat(p)),
                  (d = p.substr((c + "").length)),
                  (y = tt.lastIndex - d.length),
                  d ||
                    ((d = d || R.units[e] || m),
                    y === i.length && ((i += d), (v.e += d))),
                  m !== d && (h = si(t, e, l, d) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: _ || 1 === x ? _ : ",",
                    s: h,
                    c: g ? g * c : c - h,
                    m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            v.c = y < i.length ? i.substring(y, i.length) : "";
          } else v.r = "display" === e && "none" === i ? Lr : Ir;
          return rt.test(i) && (v.e = 0), (this._pt = v), v;
        },
        ui = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        hi = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              i,
              n,
              s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
            else
              for (n = (o = o.split(",")).length; --n > -1; )
                (r = o[n]),
                  Mr[r] && ((i = 1), (r = "transformOrigin" === r ? Gr : jr)),
                  ri(s, r);
            i &&
              (ri(s, jr),
              u &&
                (u.svg && s.removeAttribute("transform"),
                gi(s, 1),
                (u.uncache = 1)));
          }
        },
        fi = {
          clearProps: function (t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = (t._pt = new cr(t._pt, e, r, 0, 0, hi));
              return (
                (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
              );
            }
          },
        },
        li = [1, 0, 0, 1, 0, 0],
        pi = {},
        ci = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        _i = function (t) {
          var e = Qr(t, jr);
          return ci(e) ? li : e.substr(7).match(K).map(Ot);
        },
        di = function (t, e) {
          var r,
            i,
            n,
            s,
            a = t._gsap || Tt(t),
            o = t.style,
            u = _i(t);
          return a.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (n = t.transform.baseVal.consolidate().matrix).a,
                n.b,
                n.c,
                n.d,
                n.e,
                n.f,
              ]).join(",")
              ? li
              : u
            : (u !== li ||
                t.offsetParent ||
                t === xr ||
                a.svg ||
                ((n = o.display),
                (o.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (i = t.nextSibling), xr.appendChild(t)),
                (u = _i(t)),
                n ? (o.display = n) : ri(t, "display"),
                s &&
                  (i
                    ? r.insertBefore(t, i)
                    : r
                    ? r.appendChild(t)
                    : xr.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        mi = function (t, e, r, i, n, s) {
          var a,
            o,
            u,
            h = t._gsap,
            f = n || di(t, !0),
            l = h.xOrigin || 0,
            p = h.yOrigin || 0,
            c = h.xOffset || 0,
            _ = h.yOffset || 0,
            d = f[0],
            m = f[1],
            g = f[2],
            v = f[3],
            y = f[4],
            x = f[5],
            T = e.split(" "),
            w = parseFloat(T[0]) || 0,
            b = parseFloat(T[1]) || 0;
          r
            ? f !== li &&
              (o = d * v - m * g) &&
              ((u = w * (-m / o) + b * (d / o) - (d * x - m * y) / o),
              (w = w * (v / o) + b * (-g / o) + (g * x - v * y) / o),
              (b = u))
            : ((w =
                (a = ti(t)).x + (~T[0].indexOf("%") ? (w / 100) * a.width : w)),
              (b =
                a.y +
                (~(T[1] || T[0]).indexOf("%") ? (b / 100) * a.height : b))),
            i || (!1 !== i && h.smooth)
              ? ((y = w - l),
                (x = b - p),
                (h.xOffset = c + (y * d + x * g) - y),
                (h.yOffset = _ + (y * m + x * v) - x))
              : (h.xOffset = h.yOffset = 0),
            (h.xOrigin = w),
            (h.yOrigin = b),
            (h.smooth = !!i),
            (h.origin = e),
            (h.originIsAbsolute = !!r),
            (t.style[Gr] = "0px 0px"),
            s &&
              (ii(s, h, "xOrigin", l, w),
              ii(s, h, "yOrigin", p, b),
              ii(s, h, "xOffset", c, h.xOffset),
              ii(s, h, "yOffset", _, h.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + b);
        },
        gi = function (t, e) {
          var r = t._gsap || new Xe(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            p,
            c,
            _,
            d,
            m,
            g,
            v,
            y,
            x,
            T,
            w,
            b,
            O,
            M,
            k,
            A,
            C,
            D,
            P,
            S,
            z,
            F,
            E,
            B = t.style,
            I = r.scaleX < 0,
            L = Qr(t, Gr) || "0";
          return (
            (i = n = s = u = h = f = l = p = c = 0),
            (a = o = 1),
            (r.svg = !(!t.getCTM || !ei(t))),
            (m = di(t, r.svg)),
            r.svg &&
              ((k =
                (!r.uncache || "0px 0px" === L) &&
                !e &&
                t.getAttribute("data-svg-origin")),
              mi(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
            (_ = r.xOrigin || 0),
            (d = r.yOrigin || 0),
            m !== li &&
              ((x = m[0]),
              (T = m[1]),
              (w = m[2]),
              (b = m[3]),
              (i = O = m[4]),
              (n = M = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(x * x + T * T)),
                  (o = Math.sqrt(b * b + w * w)),
                  (u = x || T ? Cr(T, x) * kr : 0),
                  (l = w || b ? Cr(w, b) * kr + u : 0) &&
                    (o *= Math.abs(Math.cos(l * Ar))),
                  r.svg &&
                    ((i -= _ - (_ * x + d * w)), (n -= d - (_ * T + d * b))))
                : ((E = m[6]),
                  (z = m[7]),
                  (D = m[8]),
                  (P = m[9]),
                  (S = m[10]),
                  (F = m[11]),
                  (i = m[12]),
                  (n = m[13]),
                  (s = m[14]),
                  (h = (g = Cr(E, S)) * kr),
                  g &&
                    ((k = O * (v = Math.cos(-g)) + D * (y = Math.sin(-g))),
                    (A = M * v + P * y),
                    (C = E * v + S * y),
                    (D = O * -y + D * v),
                    (P = M * -y + P * v),
                    (S = E * -y + S * v),
                    (F = z * -y + F * v),
                    (O = k),
                    (M = A),
                    (E = C)),
                  (f = (g = Cr(-w, S)) * kr),
                  g &&
                    ((v = Math.cos(-g)),
                    (F = b * (y = Math.sin(-g)) + F * v),
                    (x = k = x * v - D * y),
                    (T = A = T * v - P * y),
                    (w = C = w * v - S * y)),
                  (u = (g = Cr(T, x)) * kr),
                  g &&
                    ((k = x * (v = Math.cos(g)) + T * (y = Math.sin(g))),
                    (A = O * v + M * y),
                    (T = T * v - x * y),
                    (M = M * v - O * y),
                    (x = k),
                    (O = A)),
                  h &&
                    Math.abs(h) + Math.abs(u) > 359.9 &&
                    ((h = u = 0), (f = 180 - f)),
                  (a = Ot(Math.sqrt(x * x + T * T + w * w))),
                  (o = Ot(Math.sqrt(M * M + E * E))),
                  (g = Cr(O, M)),
                  (l = Math.abs(g) > 2e-4 ? g * kr : 0),
                  (c = F ? 1 / (F < 0 ? -F : F) : 0)),
              r.svg &&
                ((k = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !ci(Qr(t, jr))),
                k && t.setAttribute("transform", k))),
            Math.abs(l) > 90 &&
              Math.abs(l) < 270 &&
              (I
                ? ((a *= -1),
                  (l += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (l += l <= 0 ? 180 : -180))),
            (r.x =
              i -
              ((r.xPercent =
                i &&
                (r.xPercent ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              n -
              ((r.yPercent =
                n &&
                (r.yPercent ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-n)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = s + "px"),
            (r.scaleX = Ot(a)),
            (r.scaleY = Ot(o)),
            (r.rotation = Ot(u) + "deg"),
            (r.rotationX = Ot(h) + "deg"),
            (r.rotationY = Ot(f) + "deg"),
            (r.skewX = l + "deg"),
            (r.skewY = p + "deg"),
            (r.transformPerspective = c + "px"),
            (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (B[Gr] = vi(L)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = R.force3D),
            (r.renderTransform = r.svg ? wi : Or ? Ti : xi),
            (r.uncache = 0),
            r
          );
        },
        vi = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        yi = function (t, e, r) {
          var i = ie(e);
          return Ot(parseFloat(e) + parseFloat(si(t, "x", r + "px", i))) + i;
        },
        xi = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            Ti(t, e);
        },
        Ti = function (t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            h = r.rotationY,
            f = r.rotationX,
            l = r.skewX,
            p = r.skewY,
            c = r.scaleX,
            _ = r.scaleY,
            d = r.transformPerspective,
            m = r.force3D,
            g = r.target,
            v = r.zOrigin,
            y = "",
            x = ("auto" === m && t && 1 !== t) || !0 === m;
          if (v && ("0deg" !== f || "0deg" !== h)) {
            var T,
              w = parseFloat(h) * Ar,
              b = Math.sin(w),
              O = Math.cos(w);
            (w = parseFloat(f) * Ar),
              (T = Math.cos(w)),
              (s = yi(g, s, b * T * -v)),
              (a = yi(g, a, -Math.sin(w) * -v)),
              (o = yi(g, o, O * T * -v + v));
          }
          "0px" !== d && (y += "perspective(" + d + ") "),
            (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
            (x || "0px" !== s || "0px" !== a || "0px" !== o) &&
              (y +=
                "0px" !== o || x
                  ? "translate3d(" + s + ", " + a + ", " + o + ") "
                  : "translate(" + s + ", " + a + ") "),
            "0deg" !== u && (y += "rotate(" + u + ") "),
            "0deg" !== h && (y += "rotateY(" + h + ") "),
            "0deg" !== f && (y += "rotateX(" + f + ") "),
            ("0deg" === l && "0deg" === p) ||
              (y += "skew(" + l + ", " + p + ") "),
            (1 === c && 1 === _) || (y += "scale(" + c + ", " + _ + ") "),
            (g.style[jr] = y || "translate(0, 0)");
        },
        wi = function (t, e) {
          var r,
            i,
            n,
            s,
            a,
            o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            l = o.y,
            p = o.rotation,
            c = o.skewX,
            _ = o.skewY,
            d = o.scaleX,
            m = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            x = o.xOffset,
            T = o.yOffset,
            w = o.forceCSS,
            b = parseFloat(f),
            O = parseFloat(l);
          (p = parseFloat(p)),
            (c = parseFloat(c)),
            (_ = parseFloat(_)) && ((c += _ = parseFloat(_)), (p += _)),
            p || c
              ? ((p *= Ar),
                (c *= Ar),
                (r = Math.cos(p) * d),
                (i = Math.sin(p) * d),
                (n = Math.sin(p - c) * -m),
                (s = Math.cos(p - c) * m),
                c &&
                  ((_ *= Ar),
                  (a = Math.tan(c - _)),
                  (n *= a = Math.sqrt(1 + a * a)),
                  (s *= a),
                  _ &&
                    ((a = Math.tan(_)),
                    (r *= a = Math.sqrt(1 + a * a)),
                    (i *= a))),
                (r = Ot(r)),
                (i = Ot(i)),
                (n = Ot(n)),
                (s = Ot(s)))
              : ((r = d), (s = m), (i = n = 0)),
            ((b && !~(f + "").indexOf("px")) ||
              (O && !~(l + "").indexOf("px"))) &&
              ((b = si(g, "x", f, "px")), (O = si(g, "y", l, "px"))),
            (v || y || x || T) &&
              ((b = Ot(b + v - (v * r + y * n) + x)),
              (O = Ot(O + y - (v * i + y * s) + T))),
            (u || h) &&
              ((a = g.getBBox()),
              (b = Ot(b + (u / 100) * a.width)),
              (O = Ot(O + (h / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              i +
              "," +
              n +
              "," +
              s +
              "," +
              b +
              "," +
              O +
              ")"),
            g.setAttribute("transform", a),
            w && (g.style[jr] = a);
        },
        bi = function (t, e, r, i, n, s) {
          var a,
            o,
            u = N(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? kr : 1),
            f = s ? h * s : h - i,
            l = i + f + "deg";
          return (
            u &&
              ("short" === (a = n.split("_")[1]) &&
                (f %= 360) !== f % 180 &&
                (f += f < 0 ? 360 : -360),
              "cw" === a && f < 0
                ? (f = ((f + 36e9) % 360) - 360 * ~~(f / 360))
                : "ccw" === a &&
                  f > 0 &&
                  (f = ((f - 36e9) % 360) - 360 * ~~(f / 360))),
            (t._pt = o = new cr(t._pt, e, r, i, f, Fr)),
            (o.e = l),
            (o.u = "deg"),
            t._props.push(r),
            o
          );
        },
        Oi = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        Mi = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f = Oi({}, r._gsap),
            l = r.style;
          for (n in (f.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (l[jr] = e),
              (i = gi(r, 1)),
              ri(r, jr),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[jr]),
              (l[jr] = e),
              (i = gi(r, 1)),
              (l[jr] = s)),
          Mr))
            (s = f[n]) !== (a = i[n]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
              ((o = ie(s) !== (h = ie(a)) ? si(r, n, s, h) : parseFloat(s)),
              (u = parseFloat(a)),
              (t._pt = new cr(t._pt, i, n, o, u - o, Rr)),
              (t._pt.u = h || 0),
              t._props.push(n));
          Oi(i, f);
        };
      bt("padding,margin,Width,Radius", function (t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
            function (r) {
              return e < 2 ? t + r : "border" + r + t;
            }
          );
        fi[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4)
            return (
              (s = a.map(function (e) {
                return ai(t, e, r);
              })),
              5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
            );
          (s = (i + "").split(" ")),
            (o = {}),
            a.forEach(function (t, e) {
              return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, n);
        };
      });
      var ki,
        Ai,
        Ci = {
          name: "css",
          register: Jr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, n) {
            var s,
              a,
              o,
              u,
              h,
              f,
              l,
              p,
              c,
              _,
              d,
              m,
              g,
              v,
              y,
              x,
              T,
              w,
              b,
              O = this._props,
              M = t.style,
              k = r.vars.startAt;
            for (l in (Tr || Jr(), e))
              if (
                "autoRound" !== l &&
                ((a = e[l]), !dt[l] || !We(l, e, r, i, t, n))
              )
                if (
                  ((h = typeof a),
                  (f = fi[l]),
                  "function" === h && (h = typeof (a = a.call(r, i, t, n))),
                  "string" === h && ~a.indexOf("random(") && (a = _e(a)),
                  f)
                )
                  f(this, t, l, a, r) && (y = 1);
                else if ("--" === l.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
                    (a += ""),
                    (Me.lastIndex = 0),
                    Me.test(s) || ((p = ie(s)), (c = ie(a))),
                    c ? p !== c && (s = si(t, l, s, c) + c) : p && (a += p),
                    this.add(M, "setProperty", s, a, i, n, 0, 0, l),
                    O.push(l);
                else if ("undefined" !== h) {
                  if (
                    (k && l in k
                      ? ((s =
                          "function" == typeof k[l]
                            ? k[l].call(r, i, t, n)
                            : k[l]),
                        N(s) && ~s.indexOf("random(") && (s = _e(s)),
                        ie(s + "") || (s += R.units[l] || ie(ai(t, l)) || ""),
                        "=" === (s + "").charAt(1) && (s = ai(t, l)))
                      : (s = ai(t, l)),
                    (u = parseFloat(s)),
                    (_ =
                      "string" === h && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (o = parseFloat(a)),
                    l in zr &&
                      ("autoAlpha" === l &&
                        (1 === u &&
                          "hidden" === ai(t, "visibility") &&
                          o &&
                          (u = 0),
                        ii(
                          this,
                          M,
                          "visibility",
                          u ? "inherit" : "hidden",
                          o ? "inherit" : "hidden",
                          !o
                        )),
                      "scale" !== l &&
                        "transform" !== l &&
                        ~(l = zr[l]).indexOf(",") &&
                        (l = l.split(",")[0])),
                    (d = l in Mr))
                  )
                    if (
                      (m ||
                        (((g = t._gsap).renderTransform && !e.parseTransform) ||
                          gi(t, e.parseTransform),
                        (v = !1 !== e.smoothOrigin && g.smooth),
                        ((m = this._pt =
                          new cr(
                            this._pt,
                            M,
                            jr,
                            0,
                            1,
                            g.renderTransform,
                            g,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === l)
                    )
                      (this._pt = new cr(
                        this._pt,
                        g,
                        "scaleY",
                        g.scaleY,
                        (_ ? _ * o : o - g.scaleY) || 0
                      )),
                        O.push("scaleY", l),
                        (l += "X");
                    else {
                      if ("transformOrigin" === l) {
                        (T = void 0),
                          (w = void 0),
                          (b = void 0),
                          (T = (x = a).split(" ")),
                          (w = T[0]),
                          (b = T[1] || "50%"),
                          ("top" !== w &&
                            "bottom" !== w &&
                            "left" !== b &&
                            "right" !== b) ||
                            ((x = w), (w = b), (b = x)),
                          (T[0] = ui[w] || w),
                          (T[1] = ui[b] || b),
                          (a = T.join(" ")),
                          g.svg
                            ? mi(t, a, 0, v, 0, this)
                            : ((c = parseFloat(a.split(" ")[2]) || 0) !==
                                g.zOrigin &&
                                ii(this, g, "zOrigin", g.zOrigin, c),
                              ii(this, M, l, vi(s), vi(a)));
                        continue;
                      }
                      if ("svgOrigin" === l) {
                        mi(t, a, 1, v, 0, this);
                        continue;
                      }
                      if (l in pi) {
                        bi(this, g, l, u, a, _);
                        continue;
                      }
                      if ("smoothOrigin" === l) {
                        ii(this, g, "smooth", g.smooth, a);
                        continue;
                      }
                      if ("force3D" === l) {
                        g[l] = a;
                        continue;
                      }
                      if ("transform" === l) {
                        Mi(this, a, t);
                        continue;
                      }
                    }
                  else l in M || (l = Zr(l) || l);
                  if (
                    d ||
                    ((o || 0 === o) && (u || 0 === u) && !Sr.test(a) && l in M)
                  )
                    o || (o = 0),
                      (p = (s + "").substr((u + "").length)) !==
                        (c = ie(a) || (l in R.units ? R.units[l] : p)) &&
                        (u = si(t, l, s, c)),
                      (this._pt = new cr(
                        this._pt,
                        d ? g : M,
                        l,
                        u,
                        _ ? _ * o : o - u,
                        d ||
                        ("px" !== c && "zIndex" !== l) ||
                        !1 === e.autoRound
                          ? Rr
                          : Br
                      )),
                      (this._pt.u = c || 0),
                      p !== c &&
                        "%" !== c &&
                        ((this._pt.b = s), (this._pt.r = Er));
                  else if (l in M) oi.call(this, t, l, s, a);
                  else {
                    if (!(l in t)) {
                      ut(l, a);
                      continue;
                    }
                    this.add(t, l, s || t[l], a, i, n);
                  }
                  O.push(l);
                }
            y && pr(this);
          },
          get: ai,
          aliases: zr,
          getSetter: function (t, e, r) {
            var i = zr[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in Mr && e !== Gr && (t._gsap.x || ai(t, "x"))
                ? r && br === r
                  ? "scale" === e
                    ? Nr
                    : Xr
                  : (br = r || {}) && ("scale" === e ? qr : Vr)
                : t.style && !j(t.style[e])
                ? Yr
                : ~e.indexOf("-")
                ? Ur
                : nr(t, e)
            );
          },
          core: { _removeProperty: ri, _getMatrix: di },
        };
      (gr.utils.checkPrefix = Zr),
        (Ai = bt(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
            (ki = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            Mr[t] = 1;
          }
        )),
        bt(ki, function (t) {
          (R.units[t] = "deg"), (pi[t] = 1);
        }),
        (zr[Ai[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ki),
        bt(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            zr[e[1]] = Ai[e[0]];
          }
        ),
        bt(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            R.units[t] = "px";
          }
        ),
        gr.registerPlugin(Ci);
      var Di = gr.registerPlugin(Ci) || gr;
      Di.core.Tween;
    },
  },
]);

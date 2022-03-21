(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    365: function (e, n) {
      var t,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function l() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          t = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : l;
        } catch (e) {
          r = l;
        }
      })();
      var u,
        s = [],
        c = !1,
        f = -1;
      function p() {
        c &&
          u &&
          ((c = !1), u.length ? (s = u.concat(s)) : (f = -1), s.length && d());
      }
      function d() {
        if (!c) {
          var e = a(p);
          c = !0;
          for (var n = s.length; n; ) {
            for (u = s, s = []; ++f < n; ) u && u[f].run();
            (f = -1), (n = s.length);
          }
          (u = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === l || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (n) {
                try {
                  return r.call(null, e);
                } catch (n) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, n) {
        (this.fun = e), (this.array = n);
      }
      function g() {}
      (o.nextTick = function (e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        s.push(new h(e, n)), 1 !== s.length || c || a(d);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = g),
        (o.addListener = g),
        (o.once = g),
        (o.off = g),
        (o.removeListener = g),
        (o.removeAllListeners = g),
        (o.emit = g),
        (o.prependListener = g),
        (o.prependOnceListener = g),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    532: function (e, n, t) {
      "use strict";
      var r = {};
      function o(e, n, t) {
        var i,
          l,
          a,
          u,
          s,
          c = "";
        for (
          "string" != typeof n && ((t = n), (n = o.defaultChars)),
            void 0 === t && (t = !0),
            s = (function (e) {
              var n,
                t,
                o = r[e];
              if (o) return o;
              for (o = r[e] = [], n = 0; n < 128; n++)
                (t = String.fromCharCode(n)),
                  /^[0-9a-z]$/i.test(t)
                    ? o.push(t)
                    : o.push(
                        "%" + ("0" + n.toString(16).toUpperCase()).slice(-2)
                      );
              for (n = 0; n < e.length; n++) o[e.charCodeAt(n)] = e[n];
              return o;
            })(n),
            i = 0,
            l = e.length;
          i < l;
          i++
        )
          if (
            ((a = e.charCodeAt(i)),
            t &&
              37 === a &&
              i + 2 < l &&
              /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3)))
          )
            (c += e.slice(i, i + 3)), (i += 2);
          else if (a < 128) c += s[a];
          else if (a >= 55296 && a <= 57343) {
            if (
              a >= 55296 &&
              a <= 56319 &&
              i + 1 < l &&
              (u = e.charCodeAt(i + 1)) >= 56320 &&
              u <= 57343
            ) {
              (c += encodeURIComponent(e[i] + e[i + 1])), i++;
              continue;
            }
            c += "%EF%BF%BD";
          } else c += encodeURIComponent(e[i]);
        return c;
      }
      (o.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (o.componentChars = "-_.!~*'()"),
        (e.exports = o);
    },
    583: function (e, n) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    584: function (e, n, t) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        o = Object.prototype.toString,
        i = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        a = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === o.call(e);
        },
        u = function (e) {
          if (!e || "[object Object]" !== o.call(e)) return !1;
          var n,
            t = r.call(e, "constructor"),
            i =
              e.constructor &&
              e.constructor.prototype &&
              r.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !t && !i) return !1;
          for (n in e);
          return void 0 === n || r.call(e, n);
        },
        s = function (e, n) {
          i && "__proto__" === n.name
            ? i(e, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0,
              })
            : (e[n.name] = n.newValue);
        },
        c = function (e, n) {
          if ("__proto__" === n) {
            if (!r.call(e, n)) return;
            if (l) return l(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var n,
          t,
          r,
          o,
          i,
          l,
          f = arguments[0],
          p = 1,
          d = arguments.length,
          h = !1;
        for (
          "boolean" == typeof f && ((h = f), (f = arguments[1] || {}), (p = 2)),
            (null == f || ("object" != typeof f && "function" != typeof f)) &&
              (f = {});
          p < d;
          ++p
        )
          if (null != (n = arguments[p]))
            for (t in n)
              (r = c(f, t)),
                f !== (o = c(n, t)) &&
                  (h && o && (u(o) || (i = a(o)))
                    ? (i
                        ? ((i = !1), (l = r && a(r) ? r : []))
                        : (l = r && u(r) ? r : {}),
                      s(f, { name: t, newValue: e(h, l, o) }))
                    : void 0 !== o && s(f, { name: t, newValue: o }));
        return f;
      };
    },
    585: function (e, n) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      e.exports = function (e) {
        return (
          null != e &&
          null != e.constructor &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      };
    },
    586: function (e, n, t) {
      "use strict";
      e.exports = t(587);
    },
    587: function (e, n, t) {
      "use strict";
      /** @license React v17.0.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = 60103,
        o = 60106,
        i = 60107,
        l = 60108,
        a = 60114,
        u = 60109,
        s = 60110,
        c = 60112,
        f = 60113,
        p = 60120,
        d = 60115,
        h = 60116,
        g = 60121,
        m = 60122,
        y = 60117,
        b = 60129,
        k = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var v = Symbol.for;
        (r = v("react.element")),
          (o = v("react.portal")),
          (i = v("react.fragment")),
          (l = v("react.strict_mode")),
          (a = v("react.profiler")),
          (u = v("react.provider")),
          (s = v("react.context")),
          (c = v("react.forward_ref")),
          (f = v("react.suspense")),
          (p = v("react.suspense_list")),
          (d = v("react.memo")),
          (h = v("react.lazy")),
          (g = v("react.block")),
          (m = v("react.server.block")),
          (y = v("react.fundamental")),
          (b = v("react.debug_trace_mode")),
          (k = v("react.legacy_hidden"));
      }
      function x(e) {
        if ("object" == typeof e && null !== e) {
          var n = e.$$typeof;
          switch (n) {
            case r:
              switch ((e = e.type)) {
                case i:
                case a:
                case l:
                case f:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case c:
                    case h:
                    case d:
                    case u:
                      return e;
                    default:
                      return n;
                  }
              }
            case o:
              return n;
          }
        }
      }
      var w = u,
        S = r,
        E = c,
        A = i,
        C = h,
        T = d,
        L = o,
        D = a,
        q = l,
        F = f;
      (n.ContextConsumer = s),
        (n.ContextProvider = w),
        (n.Element = S),
        (n.ForwardRef = E),
        (n.Fragment = A),
        (n.Lazy = C),
        (n.Memo = T),
        (n.Portal = L),
        (n.Profiler = D),
        (n.StrictMode = q),
        (n.Suspense = F),
        (n.isAsyncMode = function () {
          return !1;
        }),
        (n.isConcurrentMode = function () {
          return !1;
        }),
        (n.isContextConsumer = function (e) {
          return x(e) === s;
        }),
        (n.isContextProvider = function (e) {
          return x(e) === u;
        }),
        (n.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (n.isForwardRef = function (e) {
          return x(e) === c;
        }),
        (n.isFragment = function (e) {
          return x(e) === i;
        }),
        (n.isLazy = function (e) {
          return x(e) === h;
        }),
        (n.isMemo = function (e) {
          return x(e) === d;
        }),
        (n.isPortal = function (e) {
          return x(e) === o;
        }),
        (n.isProfiler = function (e) {
          return x(e) === a;
        }),
        (n.isStrictMode = function (e) {
          return x(e) === l;
        }),
        (n.isSuspense = function (e) {
          return x(e) === f;
        }),
        (n.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === a ||
            e === b ||
            e === l ||
            e === f ||
            e === p ||
            e === k ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === d ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === c ||
                e.$$typeof === y ||
                e.$$typeof === g ||
                e[0] === m))
          );
        }),
        (n.typeOf = x);
    },
    588: function (e, n, t) {
      var r = t(589);
      e.exports = function (e, n) {
        var t,
          o = null;
        if (!e || "string" != typeof e) return o;
        for (
          var i, l, a = r(e), u = "function" == typeof n, s = 0, c = a.length;
          s < c;
          s++
        )
          (i = (t = a[s]).property),
            (l = t.value),
            u ? n(i, l, t) : l && (o || (o = {}), (o[i] = l));
        return o;
      };
    },
    589: function (e, n) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        r = /\n/g,
        o = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        l = /^:\s*/,
        a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        u = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, n) {
        if ("string" != typeof e)
          throw new TypeError("First argument must be a string");
        if (!e) return [];
        n = n || {};
        var s = 1,
          f = 1;
        function p(e) {
          var n = e.match(r);
          n && (s += n.length);
          var t = e.lastIndexOf("\n");
          f = ~t ? e.length - t : f + e.length;
        }
        function d() {
          var e = { line: s, column: f };
          return function (n) {
            return (n.position = new h(e)), b(), n;
          };
        }
        function h(e) {
          (this.start = e),
            (this.end = { line: s, column: f }),
            (this.source = n.source);
        }
        h.prototype.content = e;
        var g = [];
        function m(t) {
          var r = new Error(n.source + ":" + s + ":" + f + ": " + t);
          if (
            ((r.reason = t),
            (r.filename = n.source),
            (r.line = s),
            (r.column = f),
            (r.source = e),
            !n.silent)
          )
            throw r;
          g.push(r);
        }
        function y(n) {
          var t = n.exec(e);
          if (t) {
            var r = t[0];
            return p(r), (e = e.slice(r.length)), t;
          }
        }
        function b() {
          y(o);
        }
        function k(e) {
          var n;
          for (e = e || []; (n = v()); ) !1 !== n && e.push(n);
          return e;
        }
        function v() {
          var n = d();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var t = 2;
              "" != e.charAt(t) &&
              ("*" != e.charAt(t) || "/" != e.charAt(t + 1));

            )
              ++t;
            if (((t += 2), "" === e.charAt(t - 1)))
              return m("End of comment missing");
            var r = e.slice(2, t - 2);
            return (
              (f += 2),
              p(r),
              (e = e.slice(t)),
              (f += 2),
              n({ type: "comment", comment: r })
            );
          }
        }
        function x() {
          var e = d(),
            n = y(i);
          if (n) {
            if ((v(), !y(l))) return m("property missing ':'");
            var r = y(a),
              o = e({
                type: "declaration",
                property: c(n[0].replace(t, "")),
                value: r ? c(r[0].replace(t, "")) : "",
              });
            return y(u), o;
          }
        }
        return (
          b(),
          (function () {
            var e,
              n = [];
            for (k(n); (e = x()); ) !1 !== e && (n.push(e), k(n));
            return n;
          })()
        );
      };
    },
    632: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return Jt;
      });
      var r = {};
      t.r(r),
        t.d(r, "document", function () {
          return rn;
        }),
        t.d(r, "contentInitial", function () {
          return on;
        }),
        t.d(r, "flowInitial", function () {
          return ln;
        }),
        t.d(r, "flow", function () {
          return an;
        }),
        t.d(r, "string", function () {
          return un;
        }),
        t.d(r, "text", function () {
          return sn;
        }),
        t.d(r, "insideSpan", function () {
          return cn;
        }),
        t.d(r, "attentionMarkers", function () {
          return fn;
        }),
        t.d(r, "disable", function () {
          return pn;
        });
      var o = {};
      t.r(o),
        t.d(o, "boolean", function () {
          return at;
        }),
        t.d(o, "booleanish", function () {
          return ut;
        }),
        t.d(o, "overloadedBoolean", function () {
          return st;
        }),
        t.d(o, "number", function () {
          return ct;
        }),
        t.d(o, "spaceSeparated", function () {
          return ft;
        }),
        t.d(o, "commaSeparated", function () {
          return pt;
        }),
        t.d(o, "commaOrSpaceSeparated", function () {
          return dt;
        });
      var i = t(1),
        l = t.n(i),
        a = t(585),
        u = t.n(a);
      function s(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? f(e.position)
            : "start" in e || "end" in e
            ? f(e)
            : "line" in e || "column" in e
            ? c(e)
            : ""
          : "";
      }
      function c(e) {
        return p(e && e.line) + ":" + p(e && e.column);
      }
      function f(e) {
        return c(e && e.start) + "-" + c(e && e.end);
      }
      function p(e) {
        return e && "number" == typeof e ? e : 1;
      }
      class d extends Error {
        constructor(e, n, t) {
          const r = [null, null];
          let o = {
            start: { line: null, column: null },
            end: { line: null, column: null },
          };
          if (
            (super(),
            "string" == typeof n && ((t = n), (n = void 0)),
            "string" == typeof t)
          ) {
            const e = t.indexOf(":");
            -1 === e
              ? (r[1] = t)
              : ((r[0] = t.slice(0, e)), (r[1] = t.slice(e + 1)));
          }
          n &&
            ("type" in n || "position" in n
              ? n.position && (o = n.position)
              : "start" in n || "end" in n
              ? (o = n)
              : ("line" in n || "column" in n) && (o.start = n)),
            (this.name = s(n) || "1:1"),
            (this.message = "object" == typeof e ? e.message : e),
            (this.stack = "object" == typeof e ? e.stack : ""),
            (this.reason = this.message),
            this.fatal,
            (this.line = o.start.line),
            (this.column = o.start.column),
            (this.source = r[0]),
            (this.ruleId = r[1]),
            (this.position = o),
            this.actual,
            this.expected,
            this.file,
            this.url,
            this.note;
        }
      }
      (d.prototype.file = ""),
        (d.prototype.name = ""),
        (d.prototype.reason = ""),
        (d.prototype.message = ""),
        (d.prototype.stack = ""),
        (d.prototype.fatal = null),
        (d.prototype.column = null),
        (d.prototype.line = null),
        (d.prototype.source = null),
        (d.prototype.ruleId = null),
        (d.prototype.position = null);
      const h = {
        basename: function (e, n) {
          if (void 0 !== n && "string" != typeof n)
            throw new TypeError('"ext" argument must be a string');
          g(e);
          let t,
            r = 0,
            o = -1,
            i = e.length;
          if (void 0 === n || 0 === n.length || n.length > e.length) {
            for (; i--; )
              if (47 === e.charCodeAt(i)) {
                if (t) {
                  r = i + 1;
                  break;
                }
              } else o < 0 && ((t = !0), (o = i + 1));
            return o < 0 ? "" : e.slice(r, o);
          }
          if (n === e) return "";
          let l = -1,
            a = n.length - 1;
          for (; i--; )
            if (47 === e.charCodeAt(i)) {
              if (t) {
                r = i + 1;
                break;
              }
            } else
              l < 0 && ((t = !0), (l = i + 1)),
                a > -1 &&
                  (e.charCodeAt(i) === n.charCodeAt(a--)
                    ? a < 0 && (o = i)
                    : ((a = -1), (o = l)));
          r === o ? (o = l) : o < 0 && (o = e.length);
          return e.slice(r, o);
        },
        dirname: function (e) {
          if ((g(e), 0 === e.length)) return ".";
          let n,
            t = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.charCodeAt(r)) {
              if (n) {
                t = r;
                break;
              }
            } else n || (n = !0);
          return t < 0
            ? 47 === e.charCodeAt(0)
              ? "/"
              : "."
            : 1 === t && 47 === e.charCodeAt(0)
            ? "//"
            : e.slice(0, t);
        },
        extname: function (e) {
          g(e);
          let n,
            t = e.length,
            r = -1,
            o = 0,
            i = -1,
            l = 0;
          for (; t--; ) {
            const a = e.charCodeAt(t);
            if (47 !== a)
              r < 0 && ((n = !0), (r = t + 1)),
                46 === a
                  ? i < 0
                    ? (i = t)
                    : 1 !== l && (l = 1)
                  : i > -1 && (l = -1);
            else if (n) {
              o = t + 1;
              break;
            }
          }
          if (
            i < 0 ||
            r < 0 ||
            0 === l ||
            (1 === l && i === r - 1 && i === o + 1)
          )
            return "";
          return e.slice(i, r);
        },
        join: function (...e) {
          let n,
            t = -1;
          for (; ++t < e.length; )
            g(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
          return void 0 === n
            ? "."
            : (function (e) {
                g(e);
                const n = 47 === e.charCodeAt(0);
                let t = (function (e, n) {
                  let t,
                    r,
                    o = "",
                    i = 0,
                    l = -1,
                    a = 0,
                    u = -1;
                  for (; ++u <= e.length; ) {
                    if (u < e.length) t = e.charCodeAt(u);
                    else {
                      if (47 === t) break;
                      t = 47;
                    }
                    if (47 === t) {
                      if (l === u - 1 || 1 === a);
                      else if (l !== u - 1 && 2 === a) {
                        if (
                          o.length < 2 ||
                          2 !== i ||
                          46 !== o.charCodeAt(o.length - 1) ||
                          46 !== o.charCodeAt(o.length - 2)
                        )
                          if (o.length > 2) {
                            if (
                              ((r = o.lastIndexOf("/")), r !== o.length - 1)
                            ) {
                              r < 0
                                ? ((o = ""), (i = 0))
                                : ((o = o.slice(0, r)),
                                  (i = o.length - 1 - o.lastIndexOf("/"))),
                                (l = u),
                                (a = 0);
                              continue;
                            }
                          } else if (o.length > 0) {
                            (o = ""), (i = 0), (l = u), (a = 0);
                            continue;
                          }
                        n && ((o = o.length > 0 ? o + "/.." : ".."), (i = 2));
                      } else
                        o.length > 0
                          ? (o += "/" + e.slice(l + 1, u))
                          : (o = e.slice(l + 1, u)),
                          (i = u - l - 1);
                      (l = u), (a = 0);
                    } else 46 === t && a > -1 ? a++ : (a = -1);
                  }
                  return o;
                })(e, !n);
                0 !== t.length || n || (t = ".");
                t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
                return n ? "/" + t : t;
              })(n);
        },
        sep: "/",
      };
      function g(e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      const m = {
        cwd: function () {
          return "/";
        },
      };
      function y(e) {
        return null !== e && "object" == typeof e && e.href && e.origin;
      }
      function b(e) {
        if ("string" == typeof e) e = new URL(e);
        else if (!y(e)) {
          const n = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`"
          );
          throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
        }
        if ("file:" !== e.protocol) {
          const e = new TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return (function (e) {
          if ("" !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin'
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
          }
          const n = e.pathname;
          let t = -1;
          for (; ++t < n.length; )
            if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
              const e = n.charCodeAt(t + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  "File URL path must not include encoded / characters"
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
              }
            }
          return decodeURIComponent(n);
        })(e);
      }
      const k = ["history", "path", "basename", "stem", "extname", "dirname"];
      class v {
        constructor(e) {
          let n;
          (n = e
            ? "string" == typeof e || u()(e)
              ? { value: e }
              : y(e)
              ? { path: e }
              : e
            : {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = m.cwd()),
            this.value,
            this.stored,
            this.result,
            this.map;
          let t,
            r = -1;
          for (; ++r < k.length; ) {
            const e = k[r];
            e in n &&
              void 0 !== n[e] &&
              (this[e] = "history" === e ? [...n[e]] : n[e]);
          }
          for (t in n) k.includes(t) || (this[t] = n[t]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          y(e) && (e = b(e)),
            w(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get dirname() {
          return "string" == typeof this.path ? h.dirname(this.path) : void 0;
        }
        set dirname(e) {
          S(this.basename, "dirname"),
            (this.path = h.join(e || "", this.basename));
        }
        get basename() {
          return "string" == typeof this.path ? h.basename(this.path) : void 0;
        }
        set basename(e) {
          w(e, "basename"),
            x(e, "basename"),
            (this.path = h.join(this.dirname || "", e));
        }
        get extname() {
          return "string" == typeof this.path ? h.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((x(e, "extname"), S(this.dirname, "extname"), e)) {
            if (46 !== e.charCodeAt(0))
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = h.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return "string" == typeof this.path
            ? h.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          w(e, "stem"),
            x(e, "stem"),
            (this.path = h.join(this.dirname || "", e + (this.extname || "")));
        }
        toString(e) {
          return (this.value || "").toString(e);
        }
        message(e, n, t) {
          const r = new d(e, n, t);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        info(e, n, t) {
          const r = this.message(e, n, t);
          return (r.fatal = null), r;
        }
        fail(e, n, t) {
          const r = this.message(e, n, t);
          throw ((r.fatal = !0), r);
        }
      }
      function x(e, n) {
        if (e && e.includes(h.sep))
          throw new Error(
            "`" + n + "` cannot be a path: did not expect `" + h.sep + "`"
          );
      }
      function w(e, n) {
        if (!e) throw new Error("`" + n + "` cannot be empty");
      }
      function S(e, n) {
        if (!e)
          throw new Error("Setting `" + n + "` requires `path` to be set too");
      }
      function E(e) {
        if (e) throw e;
      }
      var A = t(583),
        C = t.n(A),
        T = t(584),
        L = t.n(T);
      function D(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const n = Object.getPrototypeOf(e);
        return null === n || n === Object.prototype;
      }
      function q() {
        const e = [],
          n = {
            run: function (...n) {
              let t = -1;
              const r = n.pop();
              if ("function" != typeof r)
                throw new TypeError(
                  "Expected function as last argument, not " + r
                );
              !(function o(i, ...l) {
                const a = e[++t];
                let u = -1;
                if (i) r(i);
                else {
                  for (; ++u < n.length; )
                    (null !== l[u] && void 0 !== l[u]) || (l[u] = n[u]);
                  (n = l),
                    a
                      ? (function (e, n) {
                          let t;
                          return function (...n) {
                            const l = e.length > n.length;
                            let a;
                            l && n.push(r);
                            try {
                              a = e.apply(this, n);
                            } catch (i) {
                              const n = i;
                              if (l && t) throw n;
                              return r(n);
                            }
                            l ||
                              (a instanceof Promise
                                ? a.then(o, r)
                                : a instanceof Error
                                ? r(a)
                                : o(a));
                          };
                          function r(e, ...r) {
                            t || ((t = !0), n(e, ...r));
                          }
                          function o(e) {
                            r(null, e);
                          }
                        })(
                          a,
                          o
                        )(...l)
                      : r(null, ...l);
                }
              })(null, ...n);
            },
            use: function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  "Expected `middelware` to be a function, not " + t
                );
              return e.push(t), n;
            },
          };
        return n;
      }
      const F = (function e() {
          const n = q(),
            t = [];
          let r,
            o = {},
            i = -1;
          return (
            (l.data = function (e, n) {
              if ("string" == typeof e)
                return 2 === arguments.length
                  ? (B("data", r), (o[e] = n), l)
                  : (P.call(o, e) && o[e]) || null;
              if (e) return B("data", r), (o = e), l;
              return o;
            }),
            (l.Parser = void 0),
            (l.Compiler = void 0),
            (l.freeze = function () {
              if (r) return l;
              for (; ++i < t.length; ) {
                const [e, ...r] = t[i];
                if (!1 === r[0]) continue;
                !0 === r[0] && (r[1] = void 0);
                const o = e.call(l, ...r);
                "function" == typeof o && n.use(o);
              }
              return (r = !0), (i = Number.POSITIVE_INFINITY), l;
            }),
            (l.attachers = t),
            (l.use = function (e, ...n) {
              let i;
              if ((B("use", r), null == e));
              else if ("function" == typeof e) c(e, ...n);
              else {
                if ("object" != typeof e)
                  throw new TypeError("Expected usable value, not `" + e + "`");
                Array.isArray(e) ? s(e) : u(e);
              }
              i && (o.settings = Object.assign(o.settings || {}, i));
              return l;
              function a(e) {
                if ("function" == typeof e) c(e);
                else {
                  if ("object" != typeof e)
                    throw new TypeError(
                      "Expected usable value, not `" + e + "`"
                    );
                  if (Array.isArray(e)) {
                    const [n, ...t] = e;
                    c(n, ...t);
                  } else u(e);
                }
              }
              function u(e) {
                s(e.plugins),
                  e.settings && (i = Object.assign(i || {}, e.settings));
              }
              function s(e) {
                let n = -1;
                if (null == e);
                else {
                  if (!Array.isArray(e))
                    throw new TypeError(
                      "Expected a list of plugins, not `" + e + "`"
                    );
                  for (; ++n < e.length; ) {
                    a(e[n]);
                  }
                }
              }
              function c(e, n) {
                let r,
                  o = -1;
                for (; ++o < t.length; )
                  if (t[o][0] === e) {
                    r = t[o];
                    break;
                  }
                r
                  ? (D(r[1]) && D(n) && (n = L()(!0, r[1], n)), (r[1] = n))
                  : t.push([...arguments]);
              }
            }),
            (l.parse = function (e) {
              l.freeze();
              const n = M(e),
                t = l.Parser;
              if ((I("parse", t), O(t, "parse")))
                return new t(String(n), n).parse();
              return t(String(n), n);
            }),
            (l.stringify = function (e, n) {
              l.freeze();
              const t = M(n),
                r = l.Compiler;
              if ((R("stringify", r), z(e), O(r, "compile")))
                return new r(e, t).compile();
              return r(e, t);
            }),
            (l.run = function (e, t, r) {
              z(e),
                l.freeze(),
                r || "function" != typeof t || ((r = t), (t = void 0));
              if (!r) return new Promise(o);
              function o(o, i) {
                n.run(e, M(t), function (n, t, l) {
                  (t = t || e), n ? i(n) : o ? o(t) : r(null, t, l);
                });
              }
              o(null, r);
            }),
            (l.runSync = function (e, n) {
              let t, r;
              return (
                l.run(e, n, function (e, n) {
                  E(e), (t = n), (r = !0);
                }),
                N("runSync", "run", r),
                t
              );
            }),
            (l.process = function (e, n) {
              if (
                (l.freeze(),
                I("process", l.Parser),
                R("process", l.Compiler),
                !n)
              )
                return new Promise(t);
              function t(t, r) {
                const o = M(e);
                function i(e, o) {
                  e || !o ? r(e) : t ? t(o) : n(null, o);
                }
                l.run(l.parse(o), o, (e, n, t) => {
                  if (!e && n && t) {
                    const o = l.stringify(n, t);
                    null == o ||
                      ("string" == typeof (r = o) || C()(r)
                        ? (t.value = o)
                        : (t.result = o)),
                      i(e, t);
                  } else i(e);
                  var r;
                });
              }
              t(null, n);
            }),
            (l.processSync = function (e) {
              let n;
              l.freeze(),
                I("processSync", l.Parser),
                R("processSync", l.Compiler);
              const t = M(e);
              return (
                l.process(t, function (e) {
                  (n = !0), E(e);
                }),
                N("processSync", "process", n),
                t
              );
            }),
            l
          );
          function l() {
            const n = e();
            let r = -1;
            for (; ++r < t.length; ) n.use(...t[r]);
            return n.data(L()(!0, {}, o)), n;
          }
        })().freeze(),
        P = {}.hasOwnProperty;
      function O(e, n) {
        return (
          "function" == typeof e &&
          e.prototype &&
          ((function (e) {
            let n;
            for (n in e) if (P.call(e, n)) return !0;
            return !1;
          })(e.prototype) ||
            n in e.prototype)
        );
      }
      function I(e, n) {
        if ("function" != typeof n)
          throw new TypeError("Cannot `" + e + "` without `Parser`");
      }
      function R(e, n) {
        if ("function" != typeof n)
          throw new TypeError("Cannot `" + e + "` without `Compiler`");
      }
      function B(e, n) {
        if (n)
          throw new Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function z(e) {
        if (!D(e) || "string" != typeof e.type)
          throw new TypeError("Expected node, got `" + e + "`");
      }
      function N(e, n, t) {
        if (!t)
          throw new Error(
            "`" + e + "` finished async. Use `" + n + "` instead"
          );
      }
      function M(e) {
        return (function (e) {
          return Boolean(
            e && "object" == typeof e && "message" in e && "messages" in e
          );
        })(e)
          ? e
          : new v(e);
      }
      function U(e, n) {
        return (
          (e &&
            "object" == typeof e &&
            (e.value ||
              (n ? e.alt : "") ||
              ("children" in e && j(e.children, n)) ||
              (Array.isArray(e) && j(e, n)))) ||
          ""
        );
      }
      function j(e, n) {
        for (var t = [], r = -1; ++r < e.length; ) t[r] = U(e[r], n);
        return t.join("");
      }
      function H(e, n, t, r) {
        const o = e.length;
        let i,
          l = 0;
        if (
          ((n = n < 0 ? (-n > o ? 0 : o + n) : n > o ? o : n),
          (t = t > 0 ? t : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)), i.unshift(n, t), [].splice.apply(e, i);
        else
          for (t && [].splice.apply(e, [n, t]); l < r.length; )
            (i = r.slice(l, l + 1e4)),
              i.unshift(n, 0),
              [].splice.apply(e, i),
              (l += 1e4),
              (n += 1e4);
      }
      function V(e, n) {
        return e.length > 0 ? (H(e, e.length, 0, n), e) : n;
      }
      const _ = {}.hasOwnProperty;
      function G(e, n) {
        let t;
        for (t in n) {
          const r = (_.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            o = n[t];
          let i;
          for (i in o) {
            _.call(r, i) || (r[i] = []);
            const e = o[i];
            $(r[i], Array.isArray(e) ? e : e ? [e] : []);
          }
        }
      }
      function $(e, n) {
        let t = -1;
        const r = [];
        for (; ++t < n.length; ) ("after" === n[t].add ? e : r).push(n[t]);
        H(e, 0, 0, r);
      }
      const W = ie(/[A-Za-z]/),
        Q = ie(/\d/),
        Y = ie(/[\dA-Fa-f]/),
        K = ie(/[\dA-Za-z]/),
        J = ie(/[!-/:-@[-`{-~]/),
        Z = ie(/[#-'*+\--9=?A-Z^-~]/);
      function X(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      function ee(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function ne(e) {
        return null !== e && e < -2;
      }
      function te(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const re = ie(/\s/),
        oe = ie(
          /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
        );
      function ie(e) {
        return function (n) {
          return null !== n && e.test(String.fromCharCode(n));
        };
      }
      function le(e, n, t, r) {
        const o = r ? r - 1 : Number.POSITIVE_INFINITY;
        let i = 0;
        return function (r) {
          if (te(r)) return e.enter(t), l(r);
          return n(r);
        };
        function l(r) {
          return te(r) && i++ < o ? (e.consume(r), l) : (e.exit(t), n(r));
        }
      }
      const ae = {
        tokenize: function (e) {
          const n = e.attempt(
            this.parser.constructs.contentInitial,
            function (t) {
              if (null === t) return void e.consume(t);
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                le(e, n, "linePrefix")
              );
            },
            function (n) {
              return e.enter("paragraph"), r(n);
            }
          );
          let t;
          return n;
          function r(n) {
            const r = e.enter("chunkText", {
              contentType: "text",
              previous: t,
            });
            return t && (t.next = r), (t = r), o(n);
          }
          function o(n) {
            return null === n
              ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n))
              : ne(n)
              ? (e.consume(n), e.exit("chunkText"), r)
              : (e.consume(n), o);
          }
        },
      };
      const ue = {
          tokenize: function (e) {
            const n = this,
              t = [];
            let r,
              o,
              i,
              l = 0;
            return a;
            function a(r) {
              if (l < t.length) {
                const o = t[l];
                return (
                  (n.containerState = o[1]),
                  e.attempt(o[0].continuation, u, s)(r)
                );
              }
              return s(r);
            }
            function u(e) {
              if ((l++, n.containerState._closeFlow)) {
                (n.containerState._closeFlow = void 0), r && b();
                const t = n.events.length;
                let o,
                  i = t;
                for (; i--; )
                  if (
                    "exit" === n.events[i][0] &&
                    "chunkFlow" === n.events[i][1].type
                  ) {
                    o = n.events[i][1].end;
                    break;
                  }
                y(l);
                let a = t;
                for (; a < n.events.length; )
                  (n.events[a][1].end = Object.assign({}, o)), a++;
                return (
                  H(n.events, i + 1, 0, n.events.slice(t)),
                  (n.events.length = a),
                  s(e)
                );
              }
              return a(e);
            }
            function s(o) {
              if (l === t.length) {
                if (!r) return p(o);
                if (r.currentConstruct && r.currentConstruct.concrete)
                  return h(o);
                n.interrupt = Boolean(
                  r.currentConstruct && !r._gfmTableDynamicInterruptHack
                );
              }
              return (n.containerState = {}), e.check(se, c, f)(o);
            }
            function c(e) {
              return r && b(), y(l), p(e);
            }
            function f(e) {
              return (
                (n.parser.lazy[n.now().line] = l !== t.length),
                (i = n.now().offset),
                h(e)
              );
            }
            function p(t) {
              return (n.containerState = {}), e.attempt(se, d, h)(t);
            }
            function d(e) {
              return l++, t.push([n.currentConstruct, n.containerState]), p(e);
            }
            function h(t) {
              return null === t
                ? (r && b(), y(0), void e.consume(t))
                : ((r = r || n.parser.flow(n.now())),
                  e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: o,
                    _tokenizer: r,
                  }),
                  g(t));
            }
            function g(t) {
              return null === t
                ? (m(e.exit("chunkFlow"), !0), y(0), void e.consume(t))
                : ne(t)
                ? (e.consume(t),
                  m(e.exit("chunkFlow")),
                  (l = 0),
                  (n.interrupt = void 0),
                  a)
                : (e.consume(t), g);
            }
            function m(e, t) {
              const a = n.sliceStream(e);
              if (
                (t && a.push(null),
                (e.previous = o),
                o && (o.next = e),
                (o = e),
                r.defineSkip(e.start),
                r.write(a),
                n.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < i &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > i)
                  )
                    return;
                const t = n.events.length;
                let o,
                  a,
                  u = t;
                for (; u--; )
                  if (
                    "exit" === n.events[u][0] &&
                    "chunkFlow" === n.events[u][1].type
                  ) {
                    if (o) {
                      a = n.events[u][1].end;
                      break;
                    }
                    o = !0;
                  }
                for (y(l), e = t; e < n.events.length; )
                  (n.events[e][1].end = Object.assign({}, a)), e++;
                H(n.events, u + 1, 0, n.events.slice(t)), (n.events.length = e);
              }
            }
            function y(r) {
              let o = t.length;
              for (; o-- > r; ) {
                const r = t[o];
                (n.containerState = r[1]), r[0].exit.call(n, e);
              }
              t.length = r;
            }
            function b() {
              r.write([null]),
                (o = void 0),
                (r = void 0),
                (n.containerState._closeFlow = void 0);
            }
          },
        },
        se = {
          tokenize: function (e, n, t) {
            return le(
              e,
              e.attempt(this.parser.constructs.document, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      const ce = {
        tokenize: function (e, n, t) {
          return le(
            e,
            function (e) {
              return null === e || ne(e) ? n(e) : t(e);
            },
            "linePrefix"
          );
        },
        partial: !0,
      };
      function fe(e) {
        const n = {};
        let t,
          r,
          o,
          i,
          l,
          a,
          u,
          s = -1;
        for (; ++s < e.length; ) {
          for (; s in n; ) s = n[s];
          if (
            ((t = e[s]),
            s &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === e[s - 1][1].type &&
              ((a = t[1]._tokenizer.events),
              (o = 0),
              o < a.length && "lineEndingBlank" === a[o][1].type && (o += 2),
              o < a.length && "content" === a[o][1].type))
          )
            for (; ++o < a.length && "content" !== a[o][1].type; )
              "chunkText" === a[o][1].type &&
                ((a[o][1]._isInFirstContentOfListItem = !0), o++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(n, pe(e, s)), (s = n[s]), (u = !0));
          else if (t[1]._container) {
            for (
              o = s, r = void 0;
              o-- &&
              ((i = e[o]),
              "lineEnding" === i[1].type || "lineEndingBlank" === i[1].type);

            )
              "enter" === i[0] &&
                (r && (e[r][1].type = "lineEndingBlank"),
                (i[1].type = "lineEnding"),
                (r = o));
            r &&
              ((t[1].end = Object.assign({}, e[r][1].start)),
              (l = e.slice(r, s)),
              l.unshift(t),
              H(e, r, s - r + 1, l));
          }
        }
        return !u;
      }
      function pe(e, n) {
        const t = e[n][1],
          r = e[n][2];
        let o = n - 1;
        const i = [],
          l = t._tokenizer || r.parser[t.contentType](t.start),
          a = l.events,
          u = [],
          s = {};
        let c,
          f,
          p = -1,
          d = t,
          h = 0,
          g = 0;
        const m = [g];
        for (; d; ) {
          for (; e[++o][1] !== d; );
          i.push(o),
            d._tokenizer ||
              ((c = r.sliceStream(d)),
              d.next || c.push(null),
              f && l.defineSkip(d.start),
              d._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = !0),
              l.write(c),
              d._isInFirstContentOfListItem &&
                (l._gfmTasklistFirstContentOfListItem = void 0)),
            (f = d),
            (d = d.next);
        }
        for (d = t; ++p < a.length; )
          "exit" === a[p][0] &&
            "enter" === a[p - 1][0] &&
            a[p][1].type === a[p - 1][1].type &&
            a[p][1].start.line !== a[p][1].end.line &&
            ((g = p + 1),
            m.push(g),
            (d._tokenizer = void 0),
            (d.previous = void 0),
            (d = d.next));
        for (
          l.events = [],
            d ? ((d._tokenizer = void 0), (d.previous = void 0)) : m.pop(),
            p = m.length;
          p--;

        ) {
          const n = a.slice(m[p], m[p + 1]),
            t = i.pop();
          u.unshift([t, t + n.length - 1]), H(e, t, 2, n);
        }
        for (p = -1; ++p < u.length; )
          (s[h + u[p][0]] = h + u[p][1]), (h += u[p][1] - u[p][0] - 1);
        return s;
      }
      const de = {
          tokenize: function (e, n) {
            let t;
            return function (n) {
              return (
                e.enter("content"),
                (t = e.enter("chunkContent", { contentType: "content" })),
                r(n)
              );
            };
            function r(n) {
              return null === n
                ? o(n)
                : ne(n)
                ? e.check(he, i, o)(n)
                : (e.consume(n), r);
            }
            function o(t) {
              return e.exit("chunkContent"), e.exit("content"), n(t);
            }
            function i(n) {
              return (
                e.consume(n),
                e.exit("chunkContent"),
                (t.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: t,
                })),
                (t = t.next),
                r
              );
            }
          },
          resolve: function (e) {
            return fe(e), e;
          },
        },
        he = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                le(e, o, "linePrefix")
              );
            };
            function o(o) {
              if (null === o || ne(o)) return t(o);
              const i = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(o)
                : e.interrupt(r.parser.constructs.flow, t, n)(o);
            }
          },
          partial: !0,
        };
      const ge = {
        tokenize: function (e) {
          const n = this,
            t = e.attempt(
              ce,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter("lineEndingBlank"),
                  e.consume(r),
                  e.exit("lineEndingBlank"),
                  (n.currentConstruct = void 0),
                  t
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                le(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(de, r)),
                  "linePrefix"
                )
              )
            );
          return t;
          function r(r) {
            if (null !== r)
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (n.currentConstruct = void 0),
                t
              );
            e.consume(r);
          }
        },
      };
      const me = { resolveAll: ve() },
        ye = ke("string"),
        be = ke("text");
      function ke(e) {
        return {
          tokenize: function (n) {
            const t = this,
              r = this.parser.constructs[e],
              o = n.attempt(r, i, l);
            return i;
            function i(e) {
              return u(e) ? o(e) : l(e);
            }
            function l(e) {
              if (null !== e) return n.enter("data"), n.consume(e), a;
              n.consume(e);
            }
            function a(e) {
              return u(e) ? (n.exit("data"), o(e)) : (n.consume(e), a);
            }
            function u(e) {
              if (null === e) return !0;
              const n = r[e];
              let o = -1;
              if (n)
                for (; ++o < n.length; ) {
                  const e = n[o];
                  if (!e.previous || e.previous.call(t, t.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: ve("text" === e ? xe : void 0),
        };
      }
      function ve(e) {
        return function (n, t) {
          let r,
            o = -1;
          for (; ++o <= n.length; )
            void 0 === r
              ? n[o] && "data" === n[o][1].type && ((r = o), o++)
              : (n[o] && "data" === n[o][1].type) ||
                (o !== r + 2 &&
                  ((n[r][1].end = n[o - 1][1].end),
                  n.splice(r + 2, o - r - 2),
                  (o = r + 2)),
                (r = void 0));
          return e ? e(n, t) : n;
        };
      }
      function xe(e, n) {
        let t = 0;
        for (; ++t <= e.length; )
          if (
            (t === e.length || "lineEnding" === e[t][1].type) &&
            "data" === e[t - 1][1].type
          ) {
            const r = e[t - 1][1],
              o = n.sliceStream(r);
            let i,
              l = o.length,
              a = -1,
              u = 0;
            for (; l--; ) {
              const e = o[l];
              if ("string" == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) u++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (i = !0), u++;
              else if (-1 !== e) {
                l++;
                break;
              }
            }
            if (u) {
              const o = {
                type:
                  t === e.length || i || u < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - u,
                  offset: r.end.offset - u,
                  _index: r.start._index + l,
                  _bufferIndex: l ? a : r.start._bufferIndex + a,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, o.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, o)
                  : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), (t += 2));
            }
            t++;
          }
        return e;
      }
      function we(e, n, t) {
        const r = [];
        let o = -1;
        for (; ++o < e.length; ) {
          const i = e[o].resolveAll;
          i && !r.includes(i) && ((n = i(n, t)), r.push(i));
        }
        return n;
      }
      function Se(e, n, t) {
        let r = Object.assign(
          t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 },
          { _index: 0, _bufferIndex: -1 }
        );
        const o = {},
          i = [];
        let l = [],
          a = [],
          u = !0;
        const s = {
            consume: function (e) {
              ne(e)
                ? (r.line++,
                  (r.column = 1),
                  (r.offset += -3 === e ? 2 : 1),
                  v())
                : -1 !== e && (r.column++, r.offset++);
              r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++,
                  r._bufferIndex === l[r._index].length &&
                    ((r._bufferIndex = -1), r._index++));
              (c.previous = e), (u = !0);
            },
            enter: function (e, n) {
              const t = n || {};
              return (
                (t.type = e),
                (t.start = h()),
                c.events.push(["enter", t, c]),
                a.push(t),
                t
              );
            },
            exit: function (e) {
              const n = a.pop();
              return (n.end = h()), c.events.push(["exit", n, c]), n;
            },
            attempt: b(function (e, n) {
              k(e, n.from);
            }),
            check: b(y),
            interrupt: b(y, { interrupt: !0 }),
          },
          c = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: d,
            sliceSerialize: function (e, n) {
              return (function (e, n) {
                let t = -1;
                const r = [];
                let o;
                for (; ++t < e.length; ) {
                  const i = e[t];
                  let l;
                  if ("string" == typeof i) l = i;
                  else
                    switch (i) {
                      case -5:
                        l = "\r";
                        break;
                      case -4:
                        l = "\n";
                        break;
                      case -3:
                        l = "\r\n";
                        break;
                      case -2:
                        l = n ? " " : "\t";
                        break;
                      case -1:
                        if (!n && o) continue;
                        l = " ";
                        break;
                      default:
                        l = String.fromCharCode(i);
                    }
                  (o = -2 === i), r.push(l);
                }
                return r.join("");
              })(d(e), n);
            },
            now: h,
            defineSkip: function (e) {
              (o[e.line] = e.column), v();
            },
            write: function (e) {
              if (((l = V(l, e)), g(), null !== l[l.length - 1])) return [];
              return k(n, 0), (c.events = we(i, c.events, c)), c.events;
            },
          };
        let f,
          p = n.tokenize.call(c, s);
        return n.resolveAll && i.push(n), c;
        function d(e) {
          return (function (e, n) {
            const t = n.start._index,
              r = n.start._bufferIndex,
              o = n.end._index,
              i = n.end._bufferIndex;
            let l;
            t === o
              ? (l = [e[t].slice(r, i)])
              : ((l = e.slice(t, o)),
                r > -1 && (l[0] = l[0].slice(r)),
                i > 0 && l.push(e[o].slice(0, i)));
            return l;
          })(l, e);
        }
        function h() {
          return Object.assign({}, r);
        }
        function g() {
          let e;
          for (; r._index < l.length; ) {
            const n = l[r._index];
            if ("string" == typeof n)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < n.length;

              )
                m(n.charCodeAt(r._bufferIndex));
            else m(n);
          }
        }
        function m(e) {
          (u = void 0), (f = e), (p = p(e));
        }
        function y(e, n) {
          n.restore();
        }
        function b(e, n) {
          return function (t, o, i) {
            let l, f, p, d;
            return Array.isArray(t)
              ? m(t)
              : "tokenize" in t
              ? m([t])
              : ((g = t),
                function (e) {
                  const n = null !== e && g[e],
                    t = null !== e && g.null;
                  return m([
                    ...(Array.isArray(n) ? n : n ? [n] : []),
                    ...(Array.isArray(t) ? t : t ? [t] : []),
                  ])(e);
                });
            var g;
            function m(e) {
              return (l = e), (f = 0), 0 === e.length ? i : y(e[f]);
            }
            function y(e) {
              return function (t) {
                (d = (function () {
                  const e = h(),
                    n = c.previous,
                    t = c.currentConstruct,
                    o = c.events.length,
                    i = Array.from(a);
                  return {
                    restore: function () {
                      (r = e),
                        (c.previous = n),
                        (c.currentConstruct = t),
                        (c.events.length = o),
                        (a = i),
                        v();
                    },
                    from: o,
                  };
                })()),
                  (p = e),
                  e.partial || (c.currentConstruct = e);
                if (e.name && c.parser.constructs.disable.null.includes(e.name))
                  return k(t);
                return e.tokenize.call(
                  n ? Object.assign(Object.create(c), n) : c,
                  s,
                  b,
                  k
                )(t);
              };
            }
            function b(n) {
              return (u = !0), e(p, d), o;
            }
            function k(e) {
              return (u = !0), d.restore(), ++f < l.length ? y(l[f]) : i;
            }
          };
        }
        function k(e, n) {
          e.resolveAll && !i.includes(e) && i.push(e),
            e.resolve &&
              H(
                c.events,
                n,
                c.events.length - n,
                e.resolve(c.events.slice(n), c)
              ),
            e.resolveTo && (c.events = e.resolveTo(c.events, c));
        }
        function v() {
          r.line in o &&
            r.column < 2 &&
            ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
        }
      }
      const Ee = {
        name: "thematicBreak",
        tokenize: function (e, n, t) {
          let r,
            o = 0;
          return function (n) {
            return e.enter("thematicBreak"), (r = n), i(n);
          };
          function i(a) {
            return a === r
              ? (e.enter("thematicBreakSequence"), l(a))
              : te(a)
              ? le(e, i, "whitespace")(a)
              : o < 3 || (null !== a && !ne(a))
              ? t(a)
              : (e.exit("thematicBreak"), n(a));
          }
          function l(n) {
            return n === r
              ? (e.consume(n), o++, l)
              : (e.exit("thematicBreakSequence"), i(n));
          }
        },
      };
      const Ae = {
          name: "list",
          tokenize: function (e, n, t) {
            const r = this,
              o = r.events[r.events.length - 1];
            let i =
                o && "linePrefix" === o[1].type
                  ? o[2].sliceSerialize(o[1], !0).length
                  : 0,
              l = 0;
            return function (n) {
              const o =
                r.containerState.type ||
                (42 === n || 43 === n || 45 === n
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === o
                  ? !r.containerState.marker || n === r.containerState.marker
                  : Q(n)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = o),
                    e.enter(o, { _container: !0 })),
                  "listUnordered" === o)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === n || 45 === n ? e.check(Ee, t, u)(n) : u(n)
                  );
                if (!r.interrupt || 49 === n)
                  return (
                    e.enter("listItemPrefix"), e.enter("listItemValue"), a(n)
                  );
              }
              return t(n);
            };
            function a(n) {
              return Q(n) && ++l < 10
                ? (e.consume(n), a)
                : (!r.interrupt || l < 2) &&
                  (r.containerState.marker
                    ? n === r.containerState.marker
                    : 41 === n || 46 === n)
                ? (e.exit("listItemValue"), u(n))
                : t(n);
            }
            function u(n) {
              return (
                e.enter("listItemMarker"),
                e.consume(n),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || n),
                e.check(ce, r.interrupt ? t : s, e.attempt(Ce, f, c))
              );
            }
            function s(e) {
              return (r.containerState.initialBlankLine = !0), i++, f(e);
            }
            function c(n) {
              return te(n)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(n),
                  e.exit("listItemPrefixWhitespace"),
                  f)
                : t(n);
            }
            function f(t) {
              return (
                (r.containerState.size =
                  i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                n(t)
              );
            }
          },
          continuation: {
            tokenize: function (e, n, t) {
              const r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  ce,
                  function (t) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      le(e, n, "listItemIndent", r.containerState.size + 1)(t)
                    );
                  },
                  function (t) {
                    if (r.containerState.furtherBlankLines || !te(t))
                      return (
                        (r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        o(t)
                      );
                    return (
                      (r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      e.attempt(Te, n, o)(t)
                    );
                  }
                )
              );
              function o(o) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  le(
                    e,
                    e.attempt(Ae, n, t),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(o)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        Ce = {
          tokenize: function (e, n, t) {
            const r = this;
            return le(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return !te(e) && o && "listItemPrefixWhitespace" === o[1].type
                  ? n(e)
                  : t(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        Te = {
          tokenize: function (e, n, t) {
            const r = this;
            return le(
              e,
              function (e) {
                const o = r.events[r.events.length - 1];
                return o &&
                  "listItemIndent" === o[1].type &&
                  o[2].sliceSerialize(o[1], !0).length === r.containerState.size
                  ? n(e)
                  : t(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        };
      const Le = {
        name: "blockQuote",
        tokenize: function (e, n, t) {
          const r = this;
          return function (n) {
            if (62 === n) {
              const t = r.containerState;
              return (
                t.open ||
                  (e.enter("blockQuote", { _container: !0 }), (t.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(n),
                e.exit("blockQuoteMarker"),
                o
              );
            }
            return t(n);
          };
          function o(t) {
            return te(t)
              ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(t),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                n)
              : (e.exit("blockQuotePrefix"), n(t));
          }
        },
        continuation: {
          tokenize: function (e, n, t) {
            return le(
              e,
              e.attempt(Le, n, t),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        },
        exit: function (e) {
          e.exit("blockQuote");
        },
      };
      function De(e, n, t, r, o, i, l, a, u) {
        const s = u || Number.POSITIVE_INFINITY;
        let c = 0;
        return function (n) {
          if (60 === n)
            return (
              e.enter(r), e.enter(o), e.enter(i), e.consume(n), e.exit(i), f
            );
          if (null === n || 41 === n || X(n)) return t(n);
          return (
            e.enter(r),
            e.enter(l),
            e.enter(a),
            e.enter("chunkString", { contentType: "string" }),
            h(n)
          );
        };
        function f(t) {
          return 62 === t
            ? (e.enter(i), e.consume(t), e.exit(i), e.exit(o), e.exit(r), n)
            : (e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              p(t));
        }
        function p(n) {
          return 62 === n
            ? (e.exit("chunkString"), e.exit(a), f(n))
            : null === n || 60 === n || ne(n)
            ? t(n)
            : (e.consume(n), 92 === n ? d : p);
        }
        function d(n) {
          return 60 === n || 62 === n || 92 === n ? (e.consume(n), p) : p(n);
        }
        function h(o) {
          return 40 === o
            ? ++c > s
              ? t(o)
              : (e.consume(o), h)
            : 41 === o
            ? c--
              ? (e.consume(o), h)
              : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(o))
            : null === o || ee(o)
            ? c
              ? t(o)
              : (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(o))
            : X(o)
            ? t(o)
            : (e.consume(o), 92 === o ? g : h);
        }
        function g(n) {
          return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n);
        }
      }
      function qe(e, n, t, r, o, i) {
        const l = this;
        let a,
          u = 0;
        return function (n) {
          return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(i), s;
        };
        function s(f) {
          return null === f ||
            91 === f ||
            (93 === f && !a) ||
            (94 === f &&
              !u &&
              "_hiddenFootnoteSupport" in l.parser.constructs) ||
            u > 999
            ? t(f)
            : 93 === f
            ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), n)
            : ne(f)
            ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), s)
            : (e.enter("chunkString", { contentType: "string" }), c(f));
        }
        function c(n) {
          return null === n || 91 === n || 93 === n || ne(n) || u++ > 999
            ? (e.exit("chunkString"), s(n))
            : (e.consume(n), (a = a || !te(n)), 92 === n ? f : c);
        }
        function f(n) {
          return 91 === n || 92 === n || 93 === n
            ? (e.consume(n), u++, c)
            : c(n);
        }
      }
      function Fe(e, n, t, r, o, i) {
        let l;
        return function (n) {
          return (
            e.enter(r),
            e.enter(o),
            e.consume(n),
            e.exit(o),
            (l = 40 === n ? 41 : n),
            a
          );
        };
        function a(t) {
          return t === l
            ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n)
            : (e.enter(i), u(t));
        }
        function u(n) {
          return n === l
            ? (e.exit(i), a(l))
            : null === n
            ? t(n)
            : ne(n)
            ? (e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              le(e, u, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), s(n));
        }
        function s(n) {
          return n === l || null === n || ne(n)
            ? (e.exit("chunkString"), u(n))
            : (e.consume(n), 92 === n ? c : s);
        }
        function c(n) {
          return n === l || 92 === n ? (e.consume(n), s) : s(n);
        }
      }
      function Pe(e, n) {
        let t;
        return function r(o) {
          if (ne(o))
            return (
              e.enter("lineEnding"),
              e.consume(o),
              e.exit("lineEnding"),
              (t = !0),
              r
            );
          if (te(o)) return le(e, r, t ? "linePrefix" : "lineSuffix")(o);
          return n(o);
        };
      }
      function Oe(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      const Ie = {
          name: "definition",
          tokenize: function (e, n, t) {
            const r = this;
            let o;
            return function (n) {
              return (
                e.enter("definition"),
                qe.call(
                  r,
                  e,
                  i,
                  t,
                  "definitionLabel",
                  "definitionLabelMarker",
                  "definitionLabelString"
                )(n)
              );
            };
            function i(n) {
              return (
                (o = Oe(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === n
                  ? (e.enter("definitionMarker"),
                    e.consume(n),
                    e.exit("definitionMarker"),
                    Pe(
                      e,
                      De(
                        e,
                        e.attempt(
                          Re,
                          le(e, l, "whitespace"),
                          le(e, l, "whitespace")
                        ),
                        t,
                        "definitionDestination",
                        "definitionDestinationLiteral",
                        "definitionDestinationLiteralMarker",
                        "definitionDestinationRaw",
                        "definitionDestinationString"
                      )
                    ))
                  : t(n)
              );
            }
            function l(i) {
              return null === i || ne(i)
                ? (e.exit("definition"),
                  r.parser.defined.includes(o) || r.parser.defined.push(o),
                  n(i))
                : t(i);
            }
          },
        },
        Re = {
          tokenize: function (e, n, t) {
            return function (n) {
              return ee(n) ? Pe(e, r)(n) : t(n);
            };
            function r(n) {
              return 34 === n || 39 === n || 40 === n
                ? Fe(
                    e,
                    le(e, o, "whitespace"),
                    t,
                    "definitionTitle",
                    "definitionTitleMarker",
                    "definitionTitleString"
                  )(n)
                : t(n);
            }
            function o(e) {
              return null === e || ne(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      const Be = {
          name: "codeIndented",
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return e.enter("codeIndented"), le(e, o, "linePrefix", 5)(n);
            };
            function o(e) {
              const n = r.events[r.events.length - 1];
              return n &&
                "linePrefix" === n[1].type &&
                n[2].sliceSerialize(n[1], !0).length >= 4
                ? i(e)
                : t(e);
            }
            function i(n) {
              return null === n
                ? a(n)
                : ne(n)
                ? e.attempt(ze, i, a)(n)
                : (e.enter("codeFlowValue"), l(n));
            }
            function l(n) {
              return null === n || ne(n)
                ? (e.exit("codeFlowValue"), i(n))
                : (e.consume(n), l);
            }
            function a(t) {
              return e.exit("codeIndented"), n(t);
            }
          },
        },
        ze = {
          tokenize: function (e, n, t) {
            const r = this;
            return o;
            function o(n) {
              return r.parser.lazy[r.now().line]
                ? t(n)
                : ne(n)
                ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o)
                : le(e, i, "linePrefix", 5)(n);
            }
            function i(e) {
              const i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? n(e)
                : ne(e)
                ? o(e)
                : t(e);
            }
          },
          partial: !0,
        };
      const Ne = {
        name: "setextUnderline",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = r.events.length;
          for (; l--; )
            if (
              "lineEnding" !== r.events[l][1].type &&
              "linePrefix" !== r.events[l][1].type &&
              "content" !== r.events[l][1].type
            ) {
              i = "paragraph" === r.events[l][1].type;
              break;
            }
          return function (n) {
            if (!r.parser.lazy[r.now().line] && (r.interrupt || i))
              return (
                e.enter("setextHeadingLine"),
                e.enter("setextHeadingLineSequence"),
                (o = n),
                a(n)
              );
            return t(n);
          };
          function a(n) {
            return n === o
              ? (e.consume(n), a)
              : (e.exit("setextHeadingLineSequence"),
                le(e, u, "lineSuffix")(n));
          }
          function u(r) {
            return null === r || ne(r)
              ? (e.exit("setextHeadingLine"), n(r))
              : t(r);
          }
        },
        resolveTo: function (e, n) {
          let t,
            r,
            o,
            i = e.length;
          for (; i--; )
            if ("enter" === e[i][0]) {
              if ("content" === e[i][1].type) {
                t = i;
                break;
              }
              "paragraph" === e[i][1].type && (r = i);
            } else
              "content" === e[i][1].type && e.splice(i, 1),
                o || "definition" !== e[i][1].type || (o = i);
          const l = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          };
          (e[r][1].type = "setextHeadingText"),
            o
              ? (e.splice(r, 0, ["enter", l, n]),
                e.splice(o + 1, 0, ["exit", e[t][1], n]),
                (e[t][1].end = Object.assign({}, e[o][1].end)))
              : (e[t][1] = l);
          return e.push(["exit", l, n]), e;
        },
      };
      const Me = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "section",
          "source",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        Ue = ["pre", "script", "style", "textarea"],
        je = {
          name: "htmlFlow",
          tokenize: function (e, n, t) {
            const r = this;
            let o, i, l, a, u;
            return function (n) {
              return (
                e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), s
              );
            };
            function s(a) {
              return 33 === a
                ? (e.consume(a), c)
                : 47 === a
                ? (e.consume(a), d)
                : 63 === a
                ? (e.consume(a), (o = 3), r.interrupt ? n : I)
                : W(a)
                ? (e.consume(a), (l = String.fromCharCode(a)), (i = !0), h)
                : t(a);
            }
            function c(i) {
              return 45 === i
                ? (e.consume(i), (o = 2), f)
                : 91 === i
                ? (e.consume(i), (o = 5), (l = "CDATA["), (a = 0), p)
                : W(i)
                ? (e.consume(i), (o = 4), r.interrupt ? n : I)
                : t(i);
            }
            function f(o) {
              return 45 === o ? (e.consume(o), r.interrupt ? n : I) : t(o);
            }
            function p(o) {
              return o === l.charCodeAt(a++)
                ? (e.consume(o), a === l.length ? (r.interrupt ? n : C) : p)
                : t(o);
            }
            function d(n) {
              return W(n)
                ? (e.consume(n), (l = String.fromCharCode(n)), h)
                : t(n);
            }
            function h(a) {
              return null === a || 47 === a || 62 === a || ee(a)
                ? 47 !== a && i && Ue.includes(l.toLowerCase())
                  ? ((o = 1), r.interrupt ? n(a) : C(a))
                  : Me.includes(l.toLowerCase())
                  ? ((o = 6),
                    47 === a ? (e.consume(a), g) : r.interrupt ? n(a) : C(a))
                  : ((o = 7),
                    r.interrupt && !r.parser.lazy[r.now().line]
                      ? t(a)
                      : i
                      ? y(a)
                      : m(a))
                : 45 === a || K(a)
                ? (e.consume(a), (l += String.fromCharCode(a)), h)
                : t(a);
            }
            function g(o) {
              return 62 === o ? (e.consume(o), r.interrupt ? n : C) : t(o);
            }
            function m(n) {
              return te(n) ? (e.consume(n), m) : E(n);
            }
            function y(n) {
              return 47 === n
                ? (e.consume(n), E)
                : 58 === n || 95 === n || W(n)
                ? (e.consume(n), b)
                : te(n)
                ? (e.consume(n), y)
                : E(n);
            }
            function b(n) {
              return 45 === n || 46 === n || 58 === n || 95 === n || K(n)
                ? (e.consume(n), b)
                : k(n);
            }
            function k(n) {
              return 61 === n
                ? (e.consume(n), v)
                : te(n)
                ? (e.consume(n), k)
                : y(n);
            }
            function v(n) {
              return null === n || 60 === n || 61 === n || 62 === n || 96 === n
                ? t(n)
                : 34 === n || 39 === n
                ? (e.consume(n), (u = n), x)
                : te(n)
                ? (e.consume(n), v)
                : ((u = null), w(n));
            }
            function x(n) {
              return null === n || ne(n)
                ? t(n)
                : n === u
                ? (e.consume(n), S)
                : (e.consume(n), x);
            }
            function w(n) {
              return null === n ||
                34 === n ||
                39 === n ||
                60 === n ||
                61 === n ||
                62 === n ||
                96 === n ||
                ee(n)
                ? k(n)
                : (e.consume(n), w);
            }
            function S(e) {
              return 47 === e || 62 === e || te(e) ? y(e) : t(e);
            }
            function E(n) {
              return 62 === n ? (e.consume(n), A) : t(n);
            }
            function A(n) {
              return te(n)
                ? (e.consume(n), A)
                : null === n || ne(n)
                ? C(n)
                : t(n);
            }
            function C(n) {
              return 45 === n && 2 === o
                ? (e.consume(n), q)
                : 60 === n && 1 === o
                ? (e.consume(n), F)
                : 62 === n && 4 === o
                ? (e.consume(n), R)
                : 63 === n && 3 === o
                ? (e.consume(n), I)
                : 93 === n && 5 === o
                ? (e.consume(n), O)
                : !ne(n) || (6 !== o && 7 !== o)
                ? null === n || ne(n)
                  ? T(n)
                  : (e.consume(n), C)
                : e.check(He, R, T)(n);
            }
            function T(n) {
              return e.exit("htmlFlowData"), L(n);
            }
            function L(n) {
              return null === n
                ? B(n)
                : ne(n)
                ? e.attempt({ tokenize: D, partial: !0 }, L, B)(n)
                : (e.enter("htmlFlowData"), C(n));
            }
            function D(e, n, t) {
              return function (n) {
                return (
                  e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
                );
              };
              function o(e) {
                return r.parser.lazy[r.now().line] ? t(e) : n(e);
              }
            }
            function q(n) {
              return 45 === n ? (e.consume(n), I) : C(n);
            }
            function F(n) {
              return 47 === n ? (e.consume(n), (l = ""), P) : C(n);
            }
            function P(n) {
              return 62 === n && Ue.includes(l.toLowerCase())
                ? (e.consume(n), R)
                : W(n) && l.length < 8
                ? (e.consume(n), (l += String.fromCharCode(n)), P)
                : C(n);
            }
            function O(n) {
              return 93 === n ? (e.consume(n), I) : C(n);
            }
            function I(n) {
              return 62 === n
                ? (e.consume(n), R)
                : 45 === n && 2 === o
                ? (e.consume(n), I)
                : C(n);
            }
            function R(n) {
              return null === n || ne(n)
                ? (e.exit("htmlFlowData"), B(n))
                : (e.consume(n), R);
            }
            function B(t) {
              return e.exit("htmlFlow"), n(t);
            }
          },
          resolveTo: function (e) {
            let n = e.length;
            for (
              ;
              n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type);

            );
            n > 1 &&
              "linePrefix" === e[n - 2][1].type &&
              ((e[n][1].start = e[n - 2][1].start),
              (e[n + 1][1].start = e[n - 2][1].start),
              e.splice(n - 2, 2));
            return e;
          },
          concrete: !0,
        },
        He = {
          tokenize: function (e, n, t) {
            return function (r) {
              return (
                e.exit("htmlFlowData"),
                e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                e.attempt(ce, n, t)
              );
            };
          },
          partial: !0,
        };
      const Ve = {
        name: "codeFenced",
        tokenize: function (e, n, t) {
          const r = this,
            o = {
              tokenize: function (e, n, t) {
                let r = 0;
                return le(
                  e,
                  function (n) {
                    return (
                      e.enter("codeFencedFence"),
                      e.enter("codeFencedFenceSequence"),
                      o(n)
                    );
                  },
                  "linePrefix",
                  this.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                );
                function o(n) {
                  return n === u
                    ? (e.consume(n), r++, o)
                    : r < s
                    ? t(n)
                    : (e.exit("codeFencedFenceSequence"),
                      le(e, i, "whitespace")(n));
                }
                function i(r) {
                  return null === r || ne(r)
                    ? (e.exit("codeFencedFence"), n(r))
                    : t(r);
                }
              },
              partial: !0,
            },
            i = {
              tokenize: function (e, n, t) {
                const r = this;
                return function (n) {
                  return (
                    e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o
                  );
                };
                function o(e) {
                  return r.parser.lazy[r.now().line] ? t(e) : n(e);
                }
              },
              partial: !0,
            },
            l = this.events[this.events.length - 1],
            a =
              l && "linePrefix" === l[1].type
                ? l[2].sliceSerialize(l[1], !0).length
                : 0;
          let u,
            s = 0;
          return function (n) {
            return (
              e.enter("codeFenced"),
              e.enter("codeFencedFence"),
              e.enter("codeFencedFenceSequence"),
              (u = n),
              c(n)
            );
          };
          function c(n) {
            return n === u
              ? (e.consume(n), s++, c)
              : (e.exit("codeFencedFenceSequence"),
                s < 3 ? t(n) : le(e, f, "whitespace")(n));
          }
          function f(n) {
            return null === n || ne(n)
              ? g(n)
              : (e.enter("codeFencedFenceInfo"),
                e.enter("chunkString", { contentType: "string" }),
                p(n));
          }
          function p(n) {
            return null === n || ee(n)
              ? (e.exit("chunkString"),
                e.exit("codeFencedFenceInfo"),
                le(e, d, "whitespace")(n))
              : 96 === n && n === u
              ? t(n)
              : (e.consume(n), p);
          }
          function d(n) {
            return null === n || ne(n)
              ? g(n)
              : (e.enter("codeFencedFenceMeta"),
                e.enter("chunkString", { contentType: "string" }),
                h(n));
          }
          function h(n) {
            return null === n || ne(n)
              ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(n))
              : 96 === n && n === u
              ? t(n)
              : (e.consume(n), h);
          }
          function g(t) {
            return e.exit("codeFencedFence"), r.interrupt ? n(t) : m(t);
          }
          function m(n) {
            return null === n
              ? b(n)
              : ne(n)
              ? e.attempt(
                  i,
                  e.attempt(o, b, a ? le(e, m, "linePrefix", a + 1) : m),
                  b
                )(n)
              : (e.enter("codeFlowValue"), y(n));
          }
          function y(n) {
            return null === n || ne(n)
              ? (e.exit("codeFlowValue"), m(n))
              : (e.consume(n), y);
          }
          function b(t) {
            return e.exit("codeFenced"), n(t);
          }
        },
        concrete: !0,
      };
      const _e = {
          AEli: "Æ",
          AElig: "Æ",
          AM: "&",
          AMP: "&",
          Aacut: "Á",
          Aacute: "Á",
          Abreve: "Ă",
          Acir: "Â",
          Acirc: "Â",
          Acy: "А",
          Afr: "𝔄",
          Agrav: "À",
          Agrave: "À",
          Alpha: "Α",
          Amacr: "Ā",
          And: "⩓",
          Aogon: "Ą",
          Aopf: "𝔸",
          ApplyFunction: "⁡",
          Arin: "Å",
          Aring: "Å",
          Ascr: "𝒜",
          Assign: "≔",
          Atild: "Ã",
          Atilde: "Ã",
          Aum: "Ä",
          Auml: "Ä",
          Backslash: "∖",
          Barv: "⫧",
          Barwed: "⌆",
          Bcy: "Б",
          Because: "∵",
          Bernoullis: "ℬ",
          Beta: "Β",
          Bfr: "𝔅",
          Bopf: "𝔹",
          Breve: "˘",
          Bscr: "ℬ",
          Bumpeq: "≎",
          CHcy: "Ч",
          COP: "©",
          COPY: "©",
          Cacute: "Ć",
          Cap: "⋒",
          CapitalDifferentialD: "ⅅ",
          Cayleys: "ℭ",
          Ccaron: "Č",
          Ccedi: "Ç",
          Ccedil: "Ç",
          Ccirc: "Ĉ",
          Cconint: "∰",
          Cdot: "Ċ",
          Cedilla: "¸",
          CenterDot: "·",
          Cfr: "ℭ",
          Chi: "Χ",
          CircleDot: "⊙",
          CircleMinus: "⊖",
          CirclePlus: "⊕",
          CircleTimes: "⊗",
          ClockwiseContourIntegral: "∲",
          CloseCurlyDoubleQuote: "”",
          CloseCurlyQuote: "’",
          Colon: "∷",
          Colone: "⩴",
          Congruent: "≡",
          Conint: "∯",
          ContourIntegral: "∮",
          Copf: "ℂ",
          Coproduct: "∐",
          CounterClockwiseContourIntegral: "∳",
          Cross: "⨯",
          Cscr: "𝒞",
          Cup: "⋓",
          CupCap: "≍",
          DD: "ⅅ",
          DDotrahd: "⤑",
          DJcy: "Ђ",
          DScy: "Ѕ",
          DZcy: "Џ",
          Dagger: "‡",
          Darr: "↡",
          Dashv: "⫤",
          Dcaron: "Ď",
          Dcy: "Д",
          Del: "∇",
          Delta: "Δ",
          Dfr: "𝔇",
          DiacriticalAcute: "´",
          DiacriticalDot: "˙",
          DiacriticalDoubleAcute: "˝",
          DiacriticalGrave: "`",
          DiacriticalTilde: "˜",
          Diamond: "⋄",
          DifferentialD: "ⅆ",
          Dopf: "𝔻",
          Dot: "¨",
          DotDot: "⃜",
          DotEqual: "≐",
          DoubleContourIntegral: "∯",
          DoubleDot: "¨",
          DoubleDownArrow: "⇓",
          DoubleLeftArrow: "⇐",
          DoubleLeftRightArrow: "⇔",
          DoubleLeftTee: "⫤",
          DoubleLongLeftArrow: "⟸",
          DoubleLongLeftRightArrow: "⟺",
          DoubleLongRightArrow: "⟹",
          DoubleRightArrow: "⇒",
          DoubleRightTee: "⊨",
          DoubleUpArrow: "⇑",
          DoubleUpDownArrow: "⇕",
          DoubleVerticalBar: "∥",
          DownArrow: "↓",
          DownArrowBar: "⤓",
          DownArrowUpArrow: "⇵",
          DownBreve: "̑",
          DownLeftRightVector: "⥐",
          DownLeftTeeVector: "⥞",
          DownLeftVector: "↽",
          DownLeftVectorBar: "⥖",
          DownRightTeeVector: "⥟",
          DownRightVector: "⇁",
          DownRightVectorBar: "⥗",
          DownTee: "⊤",
          DownTeeArrow: "↧",
          Downarrow: "⇓",
          Dscr: "𝒟",
          Dstrok: "Đ",
          ENG: "Ŋ",
          ET: "Ð",
          ETH: "Ð",
          Eacut: "É",
          Eacute: "É",
          Ecaron: "Ě",
          Ecir: "Ê",
          Ecirc: "Ê",
          Ecy: "Э",
          Edot: "Ė",
          Efr: "𝔈",
          Egrav: "È",
          Egrave: "È",
          Element: "∈",
          Emacr: "Ē",
          EmptySmallSquare: "◻",
          EmptyVerySmallSquare: "▫",
          Eogon: "Ę",
          Eopf: "𝔼",
          Epsilon: "Ε",
          Equal: "⩵",
          EqualTilde: "≂",
          Equilibrium: "⇌",
          Escr: "ℰ",
          Esim: "⩳",
          Eta: "Η",
          Eum: "Ë",
          Euml: "Ë",
          Exists: "∃",
          ExponentialE: "ⅇ",
          Fcy: "Ф",
          Ffr: "𝔉",
          FilledSmallSquare: "◼",
          FilledVerySmallSquare: "▪",
          Fopf: "𝔽",
          ForAll: "∀",
          Fouriertrf: "ℱ",
          Fscr: "ℱ",
          GJcy: "Ѓ",
          G: ">",
          GT: ">",
          Gamma: "Γ",
          Gammad: "Ϝ",
          Gbreve: "Ğ",
          Gcedil: "Ģ",
          Gcirc: "Ĝ",
          Gcy: "Г",
          Gdot: "Ġ",
          Gfr: "𝔊",
          Gg: "⋙",
          Gopf: "𝔾",
          GreaterEqual: "≥",
          GreaterEqualLess: "⋛",
          GreaterFullEqual: "≧",
          GreaterGreater: "⪢",
          GreaterLess: "≷",
          GreaterSlantEqual: "⩾",
          GreaterTilde: "≳",
          Gscr: "𝒢",
          Gt: "≫",
          HARDcy: "Ъ",
          Hacek: "ˇ",
          Hat: "^",
          Hcirc: "Ĥ",
          Hfr: "ℌ",
          HilbertSpace: "ℋ",
          Hopf: "ℍ",
          HorizontalLine: "─",
          Hscr: "ℋ",
          Hstrok: "Ħ",
          HumpDownHump: "≎",
          HumpEqual: "≏",
          IEcy: "Е",
          IJlig: "Ĳ",
          IOcy: "Ё",
          Iacut: "Í",
          Iacute: "Í",
          Icir: "Î",
          Icirc: "Î",
          Icy: "И",
          Idot: "İ",
          Ifr: "ℑ",
          Igrav: "Ì",
          Igrave: "Ì",
          Im: "ℑ",
          Imacr: "Ī",
          ImaginaryI: "ⅈ",
          Implies: "⇒",
          Int: "∬",
          Integral: "∫",
          Intersection: "⋂",
          InvisibleComma: "⁣",
          InvisibleTimes: "⁢",
          Iogon: "Į",
          Iopf: "𝕀",
          Iota: "Ι",
          Iscr: "ℐ",
          Itilde: "Ĩ",
          Iukcy: "І",
          Ium: "Ï",
          Iuml: "Ï",
          Jcirc: "Ĵ",
          Jcy: "Й",
          Jfr: "𝔍",
          Jopf: "𝕁",
          Jscr: "𝒥",
          Jsercy: "Ј",
          Jukcy: "Є",
          KHcy: "Х",
          KJcy: "Ќ",
          Kappa: "Κ",
          Kcedil: "Ķ",
          Kcy: "К",
          Kfr: "𝔎",
          Kopf: "𝕂",
          Kscr: "𝒦",
          LJcy: "Љ",
          L: "<",
          LT: "<",
          Lacute: "Ĺ",
          Lambda: "Λ",
          Lang: "⟪",
          Laplacetrf: "ℒ",
          Larr: "↞",
          Lcaron: "Ľ",
          Lcedil: "Ļ",
          Lcy: "Л",
          LeftAngleBracket: "⟨",
          LeftArrow: "←",
          LeftArrowBar: "⇤",
          LeftArrowRightArrow: "⇆",
          LeftCeiling: "⌈",
          LeftDoubleBracket: "⟦",
          LeftDownTeeVector: "⥡",
          LeftDownVector: "⇃",
          LeftDownVectorBar: "⥙",
          LeftFloor: "⌊",
          LeftRightArrow: "↔",
          LeftRightVector: "⥎",
          LeftTee: "⊣",
          LeftTeeArrow: "↤",
          LeftTeeVector: "⥚",
          LeftTriangle: "⊲",
          LeftTriangleBar: "⧏",
          LeftTriangleEqual: "⊴",
          LeftUpDownVector: "⥑",
          LeftUpTeeVector: "⥠",
          LeftUpVector: "↿",
          LeftUpVectorBar: "⥘",
          LeftVector: "↼",
          LeftVectorBar: "⥒",
          Leftarrow: "⇐",
          Leftrightarrow: "⇔",
          LessEqualGreater: "⋚",
          LessFullEqual: "≦",
          LessGreater: "≶",
          LessLess: "⪡",
          LessSlantEqual: "⩽",
          LessTilde: "≲",
          Lfr: "𝔏",
          Ll: "⋘",
          Lleftarrow: "⇚",
          Lmidot: "Ŀ",
          LongLeftArrow: "⟵",
          LongLeftRightArrow: "⟷",
          LongRightArrow: "⟶",
          Longleftarrow: "⟸",
          Longleftrightarrow: "⟺",
          Longrightarrow: "⟹",
          Lopf: "𝕃",
          LowerLeftArrow: "↙",
          LowerRightArrow: "↘",
          Lscr: "ℒ",
          Lsh: "↰",
          Lstrok: "Ł",
          Lt: "≪",
          Map: "⤅",
          Mcy: "М",
          MediumSpace: " ",
          Mellintrf: "ℳ",
          Mfr: "𝔐",
          MinusPlus: "∓",
          Mopf: "𝕄",
          Mscr: "ℳ",
          Mu: "Μ",
          NJcy: "Њ",
          Nacute: "Ń",
          Ncaron: "Ň",
          Ncedil: "Ņ",
          Ncy: "Н",
          NegativeMediumSpace: "​",
          NegativeThickSpace: "​",
          NegativeThinSpace: "​",
          NegativeVeryThinSpace: "​",
          NestedGreaterGreater: "≫",
          NestedLessLess: "≪",
          NewLine: "\n",
          Nfr: "𝔑",
          NoBreak: "⁠",
          NonBreakingSpace: " ",
          Nopf: "ℕ",
          Not: "⫬",
          NotCongruent: "≢",
          NotCupCap: "≭",
          NotDoubleVerticalBar: "∦",
          NotElement: "∉",
          NotEqual: "≠",
          NotEqualTilde: "≂̸",
          NotExists: "∄",
          NotGreater: "≯",
          NotGreaterEqual: "≱",
          NotGreaterFullEqual: "≧̸",
          NotGreaterGreater: "≫̸",
          NotGreaterLess: "≹",
          NotGreaterSlantEqual: "⩾̸",
          NotGreaterTilde: "≵",
          NotHumpDownHump: "≎̸",
          NotHumpEqual: "≏̸",
          NotLeftTriangle: "⋪",
          NotLeftTriangleBar: "⧏̸",
          NotLeftTriangleEqual: "⋬",
          NotLess: "≮",
          NotLessEqual: "≰",
          NotLessGreater: "≸",
          NotLessLess: "≪̸",
          NotLessSlantEqual: "⩽̸",
          NotLessTilde: "≴",
          NotNestedGreaterGreater: "⪢̸",
          NotNestedLessLess: "⪡̸",
          NotPrecedes: "⊀",
          NotPrecedesEqual: "⪯̸",
          NotPrecedesSlantEqual: "⋠",
          NotReverseElement: "∌",
          NotRightTriangle: "⋫",
          NotRightTriangleBar: "⧐̸",
          NotRightTriangleEqual: "⋭",
          NotSquareSubset: "⊏̸",
          NotSquareSubsetEqual: "⋢",
          NotSquareSuperset: "⊐̸",
          NotSquareSupersetEqual: "⋣",
          NotSubset: "⊂⃒",
          NotSubsetEqual: "⊈",
          NotSucceeds: "⊁",
          NotSucceedsEqual: "⪰̸",
          NotSucceedsSlantEqual: "⋡",
          NotSucceedsTilde: "≿̸",
          NotSuperset: "⊃⃒",
          NotSupersetEqual: "⊉",
          NotTilde: "≁",
          NotTildeEqual: "≄",
          NotTildeFullEqual: "≇",
          NotTildeTilde: "≉",
          NotVerticalBar: "∤",
          Nscr: "𝒩",
          Ntild: "Ñ",
          Ntilde: "Ñ",
          Nu: "Ν",
          OElig: "Œ",
          Oacut: "Ó",
          Oacute: "Ó",
          Ocir: "Ô",
          Ocirc: "Ô",
          Ocy: "О",
          Odblac: "Ő",
          Ofr: "𝔒",
          Ograv: "Ò",
          Ograve: "Ò",
          Omacr: "Ō",
          Omega: "Ω",
          Omicron: "Ο",
          Oopf: "𝕆",
          OpenCurlyDoubleQuote: "“",
          OpenCurlyQuote: "‘",
          Or: "⩔",
          Oscr: "𝒪",
          Oslas: "Ø",
          Oslash: "Ø",
          Otild: "Õ",
          Otilde: "Õ",
          Otimes: "⨷",
          Oum: "Ö",
          Ouml: "Ö",
          OverBar: "‾",
          OverBrace: "⏞",
          OverBracket: "⎴",
          OverParenthesis: "⏜",
          PartialD: "∂",
          Pcy: "П",
          Pfr: "𝔓",
          Phi: "Φ",
          Pi: "Π",
          PlusMinus: "±",
          Poincareplane: "ℌ",
          Popf: "ℙ",
          Pr: "⪻",
          Precedes: "≺",
          PrecedesEqual: "⪯",
          PrecedesSlantEqual: "≼",
          PrecedesTilde: "≾",
          Prime: "″",
          Product: "∏",
          Proportion: "∷",
          Proportional: "∝",
          Pscr: "𝒫",
          Psi: "Ψ",
          QUO: '"',
          QUOT: '"',
          Qfr: "𝔔",
          Qopf: "ℚ",
          Qscr: "𝒬",
          RBarr: "⤐",
          RE: "®",
          REG: "®",
          Racute: "Ŕ",
          Rang: "⟫",
          Rarr: "↠",
          Rarrtl: "⤖",
          Rcaron: "Ř",
          Rcedil: "Ŗ",
          Rcy: "Р",
          Re: "ℜ",
          ReverseElement: "∋",
          ReverseEquilibrium: "⇋",
          ReverseUpEquilibrium: "⥯",
          Rfr: "ℜ",
          Rho: "Ρ",
          RightAngleBracket: "⟩",
          RightArrow: "→",
          RightArrowBar: "⇥",
          RightArrowLeftArrow: "⇄",
          RightCeiling: "⌉",
          RightDoubleBracket: "⟧",
          RightDownTeeVector: "⥝",
          RightDownVector: "⇂",
          RightDownVectorBar: "⥕",
          RightFloor: "⌋",
          RightTee: "⊢",
          RightTeeArrow: "↦",
          RightTeeVector: "⥛",
          RightTriangle: "⊳",
          RightTriangleBar: "⧐",
          RightTriangleEqual: "⊵",
          RightUpDownVector: "⥏",
          RightUpTeeVector: "⥜",
          RightUpVector: "↾",
          RightUpVectorBar: "⥔",
          RightVector: "⇀",
          RightVectorBar: "⥓",
          Rightarrow: "⇒",
          Ropf: "ℝ",
          RoundImplies: "⥰",
          Rrightarrow: "⇛",
          Rscr: "ℛ",
          Rsh: "↱",
          RuleDelayed: "⧴",
          SHCHcy: "Щ",
          SHcy: "Ш",
          SOFTcy: "Ь",
          Sacute: "Ś",
          Sc: "⪼",
          Scaron: "Š",
          Scedil: "Ş",
          Scirc: "Ŝ",
          Scy: "С",
          Sfr: "𝔖",
          ShortDownArrow: "↓",
          ShortLeftArrow: "←",
          ShortRightArrow: "→",
          ShortUpArrow: "↑",
          Sigma: "Σ",
          SmallCircle: "∘",
          Sopf: "𝕊",
          Sqrt: "√",
          Square: "□",
          SquareIntersection: "⊓",
          SquareSubset: "⊏",
          SquareSubsetEqual: "⊑",
          SquareSuperset: "⊐",
          SquareSupersetEqual: "⊒",
          SquareUnion: "⊔",
          Sscr: "𝒮",
          Star: "⋆",
          Sub: "⋐",
          Subset: "⋐",
          SubsetEqual: "⊆",
          Succeeds: "≻",
          SucceedsEqual: "⪰",
          SucceedsSlantEqual: "≽",
          SucceedsTilde: "≿",
          SuchThat: "∋",
          Sum: "∑",
          Sup: "⋑",
          Superset: "⊃",
          SupersetEqual: "⊇",
          Supset: "⋑",
          THOR: "Þ",
          THORN: "Þ",
          TRADE: "™",
          TSHcy: "Ћ",
          TScy: "Ц",
          Tab: "\t",
          Tau: "Τ",
          Tcaron: "Ť",
          Tcedil: "Ţ",
          Tcy: "Т",
          Tfr: "𝔗",
          Therefore: "∴",
          Theta: "Θ",
          ThickSpace: "  ",
          ThinSpace: " ",
          Tilde: "∼",
          TildeEqual: "≃",
          TildeFullEqual: "≅",
          TildeTilde: "≈",
          Topf: "𝕋",
          TripleDot: "⃛",
          Tscr: "𝒯",
          Tstrok: "Ŧ",
          Uacut: "Ú",
          Uacute: "Ú",
          Uarr: "↟",
          Uarrocir: "⥉",
          Ubrcy: "Ў",
          Ubreve: "Ŭ",
          Ucir: "Û",
          Ucirc: "Û",
          Ucy: "У",
          Udblac: "Ű",
          Ufr: "𝔘",
          Ugrav: "Ù",
          Ugrave: "Ù",
          Umacr: "Ū",
          UnderBar: "_",
          UnderBrace: "⏟",
          UnderBracket: "⎵",
          UnderParenthesis: "⏝",
          Union: "⋃",
          UnionPlus: "⊎",
          Uogon: "Ų",
          Uopf: "𝕌",
          UpArrow: "↑",
          UpArrowBar: "⤒",
          UpArrowDownArrow: "⇅",
          UpDownArrow: "↕",
          UpEquilibrium: "⥮",
          UpTee: "⊥",
          UpTeeArrow: "↥",
          Uparrow: "⇑",
          Updownarrow: "⇕",
          UpperLeftArrow: "↖",
          UpperRightArrow: "↗",
          Upsi: "ϒ",
          Upsilon: "Υ",
          Uring: "Ů",
          Uscr: "𝒰",
          Utilde: "Ũ",
          Uum: "Ü",
          Uuml: "Ü",
          VDash: "⊫",
          Vbar: "⫫",
          Vcy: "В",
          Vdash: "⊩",
          Vdashl: "⫦",
          Vee: "⋁",
          Verbar: "‖",
          Vert: "‖",
          VerticalBar: "∣",
          VerticalLine: "|",
          VerticalSeparator: "❘",
          VerticalTilde: "≀",
          VeryThinSpace: " ",
          Vfr: "𝔙",
          Vopf: "𝕍",
          Vscr: "𝒱",
          Vvdash: "⊪",
          Wcirc: "Ŵ",
          Wedge: "⋀",
          Wfr: "𝔚",
          Wopf: "𝕎",
          Wscr: "𝒲",
          Xfr: "𝔛",
          Xi: "Ξ",
          Xopf: "𝕏",
          Xscr: "𝒳",
          YAcy: "Я",
          YIcy: "Ї",
          YUcy: "Ю",
          Yacut: "Ý",
          Yacute: "Ý",
          Ycirc: "Ŷ",
          Ycy: "Ы",
          Yfr: "𝔜",
          Yopf: "𝕐",
          Yscr: "𝒴",
          Yuml: "Ÿ",
          ZHcy: "Ж",
          Zacute: "Ź",
          Zcaron: "Ž",
          Zcy: "З",
          Zdot: "Ż",
          ZeroWidthSpace: "​",
          Zeta: "Ζ",
          Zfr: "ℨ",
          Zopf: "ℤ",
          Zscr: "𝒵",
          aacut: "á",
          aacute: "á",
          abreve: "ă",
          ac: "∾",
          acE: "∾̳",
          acd: "∿",
          acir: "â",
          acirc: "â",
          acut: "´",
          acute: "´",
          acy: "а",
          aeli: "æ",
          aelig: "æ",
          af: "⁡",
          afr: "𝔞",
          agrav: "à",
          agrave: "à",
          alefsym: "ℵ",
          aleph: "ℵ",
          alpha: "α",
          amacr: "ā",
          amalg: "⨿",
          am: "&",
          amp: "&",
          and: "∧",
          andand: "⩕",
          andd: "⩜",
          andslope: "⩘",
          andv: "⩚",
          ang: "∠",
          ange: "⦤",
          angle: "∠",
          angmsd: "∡",
          angmsdaa: "⦨",
          angmsdab: "⦩",
          angmsdac: "⦪",
          angmsdad: "⦫",
          angmsdae: "⦬",
          angmsdaf: "⦭",
          angmsdag: "⦮",
          angmsdah: "⦯",
          angrt: "∟",
          angrtvb: "⊾",
          angrtvbd: "⦝",
          angsph: "∢",
          angst: "Å",
          angzarr: "⍼",
          aogon: "ą",
          aopf: "𝕒",
          ap: "≈",
          apE: "⩰",
          apacir: "⩯",
          ape: "≊",
          apid: "≋",
          apos: "'",
          approx: "≈",
          approxeq: "≊",
          arin: "å",
          aring: "å",
          ascr: "𝒶",
          ast: "*",
          asymp: "≈",
          asympeq: "≍",
          atild: "ã",
          atilde: "ã",
          aum: "ä",
          auml: "ä",
          awconint: "∳",
          awint: "⨑",
          bNot: "⫭",
          backcong: "≌",
          backepsilon: "϶",
          backprime: "‵",
          backsim: "∽",
          backsimeq: "⋍",
          barvee: "⊽",
          barwed: "⌅",
          barwedge: "⌅",
          bbrk: "⎵",
          bbrktbrk: "⎶",
          bcong: "≌",
          bcy: "б",
          bdquo: "„",
          becaus: "∵",
          because: "∵",
          bemptyv: "⦰",
          bepsi: "϶",
          bernou: "ℬ",
          beta: "β",
          beth: "ℶ",
          between: "≬",
          bfr: "𝔟",
          bigcap: "⋂",
          bigcirc: "◯",
          bigcup: "⋃",
          bigodot: "⨀",
          bigoplus: "⨁",
          bigotimes: "⨂",
          bigsqcup: "⨆",
          bigstar: "★",
          bigtriangledown: "▽",
          bigtriangleup: "△",
          biguplus: "⨄",
          bigvee: "⋁",
          bigwedge: "⋀",
          bkarow: "⤍",
          blacklozenge: "⧫",
          blacksquare: "▪",
          blacktriangle: "▴",
          blacktriangledown: "▾",
          blacktriangleleft: "◂",
          blacktriangleright: "▸",
          blank: "␣",
          blk12: "▒",
          blk14: "░",
          blk34: "▓",
          block: "█",
          bne: "=⃥",
          bnequiv: "≡⃥",
          bnot: "⌐",
          bopf: "𝕓",
          bot: "⊥",
          bottom: "⊥",
          bowtie: "⋈",
          boxDL: "╗",
          boxDR: "╔",
          boxDl: "╖",
          boxDr: "╓",
          boxH: "═",
          boxHD: "╦",
          boxHU: "╩",
          boxHd: "╤",
          boxHu: "╧",
          boxUL: "╝",
          boxUR: "╚",
          boxUl: "╜",
          boxUr: "╙",
          boxV: "║",
          boxVH: "╬",
          boxVL: "╣",
          boxVR: "╠",
          boxVh: "╫",
          boxVl: "╢",
          boxVr: "╟",
          boxbox: "⧉",
          boxdL: "╕",
          boxdR: "╒",
          boxdl: "┐",
          boxdr: "┌",
          boxh: "─",
          boxhD: "╥",
          boxhU: "╨",
          boxhd: "┬",
          boxhu: "┴",
          boxminus: "⊟",
          boxplus: "⊞",
          boxtimes: "⊠",
          boxuL: "╛",
          boxuR: "╘",
          boxul: "┘",
          boxur: "└",
          boxv: "│",
          boxvH: "╪",
          boxvL: "╡",
          boxvR: "╞",
          boxvh: "┼",
          boxvl: "┤",
          boxvr: "├",
          bprime: "‵",
          breve: "˘",
          brvba: "¦",
          brvbar: "¦",
          bscr: "𝒷",
          bsemi: "⁏",
          bsim: "∽",
          bsime: "⋍",
          bsol: "\\",
          bsolb: "⧅",
          bsolhsub: "⟈",
          bull: "•",
          bullet: "•",
          bump: "≎",
          bumpE: "⪮",
          bumpe: "≏",
          bumpeq: "≏",
          cacute: "ć",
          cap: "∩",
          capand: "⩄",
          capbrcup: "⩉",
          capcap: "⩋",
          capcup: "⩇",
          capdot: "⩀",
          caps: "∩︀",
          caret: "⁁",
          caron: "ˇ",
          ccaps: "⩍",
          ccaron: "č",
          ccedi: "ç",
          ccedil: "ç",
          ccirc: "ĉ",
          ccups: "⩌",
          ccupssm: "⩐",
          cdot: "ċ",
          cedi: "¸",
          cedil: "¸",
          cemptyv: "⦲",
          cen: "¢",
          cent: "¢",
          centerdot: "·",
          cfr: "𝔠",
          chcy: "ч",
          check: "✓",
          checkmark: "✓",
          chi: "χ",
          cir: "○",
          cirE: "⧃",
          circ: "ˆ",
          circeq: "≗",
          circlearrowleft: "↺",
          circlearrowright: "↻",
          circledR: "®",
          circledS: "Ⓢ",
          circledast: "⊛",
          circledcirc: "⊚",
          circleddash: "⊝",
          cire: "≗",
          cirfnint: "⨐",
          cirmid: "⫯",
          cirscir: "⧂",
          clubs: "♣",
          clubsuit: "♣",
          colon: ":",
          colone: "≔",
          coloneq: "≔",
          comma: ",",
          commat: "@",
          comp: "∁",
          compfn: "∘",
          complement: "∁",
          complexes: "ℂ",
          cong: "≅",
          congdot: "⩭",
          conint: "∮",
          copf: "𝕔",
          coprod: "∐",
          cop: "©",
          copy: "©",
          copysr: "℗",
          crarr: "↵",
          cross: "✗",
          cscr: "𝒸",
          csub: "⫏",
          csube: "⫑",
          csup: "⫐",
          csupe: "⫒",
          ctdot: "⋯",
          cudarrl: "⤸",
          cudarrr: "⤵",
          cuepr: "⋞",
          cuesc: "⋟",
          cularr: "↶",
          cularrp: "⤽",
          cup: "∪",
          cupbrcap: "⩈",
          cupcap: "⩆",
          cupcup: "⩊",
          cupdot: "⊍",
          cupor: "⩅",
          cups: "∪︀",
          curarr: "↷",
          curarrm: "⤼",
          curlyeqprec: "⋞",
          curlyeqsucc: "⋟",
          curlyvee: "⋎",
          curlywedge: "⋏",
          curre: "¤",
          curren: "¤",
          curvearrowleft: "↶",
          curvearrowright: "↷",
          cuvee: "⋎",
          cuwed: "⋏",
          cwconint: "∲",
          cwint: "∱",
          cylcty: "⌭",
          dArr: "⇓",
          dHar: "⥥",
          dagger: "†",
          daleth: "ℸ",
          darr: "↓",
          dash: "‐",
          dashv: "⊣",
          dbkarow: "⤏",
          dblac: "˝",
          dcaron: "ď",
          dcy: "д",
          dd: "ⅆ",
          ddagger: "‡",
          ddarr: "⇊",
          ddotseq: "⩷",
          de: "°",
          deg: "°",
          delta: "δ",
          demptyv: "⦱",
          dfisht: "⥿",
          dfr: "𝔡",
          dharl: "⇃",
          dharr: "⇂",
          diam: "⋄",
          diamond: "⋄",
          diamondsuit: "♦",
          diams: "♦",
          die: "¨",
          digamma: "ϝ",
          disin: "⋲",
          div: "÷",
          divid: "÷",
          divide: "÷",
          divideontimes: "⋇",
          divonx: "⋇",
          djcy: "ђ",
          dlcorn: "⌞",
          dlcrop: "⌍",
          dollar: "$",
          dopf: "𝕕",
          dot: "˙",
          doteq: "≐",
          doteqdot: "≑",
          dotminus: "∸",
          dotplus: "∔",
          dotsquare: "⊡",
          doublebarwedge: "⌆",
          downarrow: "↓",
          downdownarrows: "⇊",
          downharpoonleft: "⇃",
          downharpoonright: "⇂",
          drbkarow: "⤐",
          drcorn: "⌟",
          drcrop: "⌌",
          dscr: "𝒹",
          dscy: "ѕ",
          dsol: "⧶",
          dstrok: "đ",
          dtdot: "⋱",
          dtri: "▿",
          dtrif: "▾",
          duarr: "⇵",
          duhar: "⥯",
          dwangle: "⦦",
          dzcy: "џ",
          dzigrarr: "⟿",
          eDDot: "⩷",
          eDot: "≑",
          eacut: "é",
          eacute: "é",
          easter: "⩮",
          ecaron: "ě",
          ecir: "ê",
          ecirc: "ê",
          ecolon: "≕",
          ecy: "э",
          edot: "ė",
          ee: "ⅇ",
          efDot: "≒",
          efr: "𝔢",
          eg: "⪚",
          egrav: "è",
          egrave: "è",
          egs: "⪖",
          egsdot: "⪘",
          el: "⪙",
          elinters: "⏧",
          ell: "ℓ",
          els: "⪕",
          elsdot: "⪗",
          emacr: "ē",
          empty: "∅",
          emptyset: "∅",
          emptyv: "∅",
          emsp13: " ",
          emsp14: " ",
          emsp: " ",
          eng: "ŋ",
          ensp: " ",
          eogon: "ę",
          eopf: "𝕖",
          epar: "⋕",
          eparsl: "⧣",
          eplus: "⩱",
          epsi: "ε",
          epsilon: "ε",
          epsiv: "ϵ",
          eqcirc: "≖",
          eqcolon: "≕",
          eqsim: "≂",
          eqslantgtr: "⪖",
          eqslantless: "⪕",
          equals: "=",
          equest: "≟",
          equiv: "≡",
          equivDD: "⩸",
          eqvparsl: "⧥",
          erDot: "≓",
          erarr: "⥱",
          escr: "ℯ",
          esdot: "≐",
          esim: "≂",
          eta: "η",
          et: "ð",
          eth: "ð",
          eum: "ë",
          euml: "ë",
          euro: "€",
          excl: "!",
          exist: "∃",
          expectation: "ℰ",
          exponentiale: "ⅇ",
          fallingdotseq: "≒",
          fcy: "ф",
          female: "♀",
          ffilig: "ﬃ",
          fflig: "ﬀ",
          ffllig: "ﬄ",
          ffr: "𝔣",
          filig: "ﬁ",
          fjlig: "fj",
          flat: "♭",
          fllig: "ﬂ",
          fltns: "▱",
          fnof: "ƒ",
          fopf: "𝕗",
          forall: "∀",
          fork: "⋔",
          forkv: "⫙",
          fpartint: "⨍",
          frac1: "¼",
          frac12: "½",
          frac13: "⅓",
          frac14: "¼",
          frac15: "⅕",
          frac16: "⅙",
          frac18: "⅛",
          frac23: "⅔",
          frac25: "⅖",
          frac3: "¾",
          frac34: "¾",
          frac35: "⅗",
          frac38: "⅜",
          frac45: "⅘",
          frac56: "⅚",
          frac58: "⅝",
          frac78: "⅞",
          frasl: "⁄",
          frown: "⌢",
          fscr: "𝒻",
          gE: "≧",
          gEl: "⪌",
          gacute: "ǵ",
          gamma: "γ",
          gammad: "ϝ",
          gap: "⪆",
          gbreve: "ğ",
          gcirc: "ĝ",
          gcy: "г",
          gdot: "ġ",
          ge: "≥",
          gel: "⋛",
          geq: "≥",
          geqq: "≧",
          geqslant: "⩾",
          ges: "⩾",
          gescc: "⪩",
          gesdot: "⪀",
          gesdoto: "⪂",
          gesdotol: "⪄",
          gesl: "⋛︀",
          gesles: "⪔",
          gfr: "𝔤",
          gg: "≫",
          ggg: "⋙",
          gimel: "ℷ",
          gjcy: "ѓ",
          gl: "≷",
          glE: "⪒",
          gla: "⪥",
          glj: "⪤",
          gnE: "≩",
          gnap: "⪊",
          gnapprox: "⪊",
          gne: "⪈",
          gneq: "⪈",
          gneqq: "≩",
          gnsim: "⋧",
          gopf: "𝕘",
          grave: "`",
          gscr: "ℊ",
          gsim: "≳",
          gsime: "⪎",
          gsiml: "⪐",
          g: ">",
          gt: ">",
          gtcc: "⪧",
          gtcir: "⩺",
          gtdot: "⋗",
          gtlPar: "⦕",
          gtquest: "⩼",
          gtrapprox: "⪆",
          gtrarr: "⥸",
          gtrdot: "⋗",
          gtreqless: "⋛",
          gtreqqless: "⪌",
          gtrless: "≷",
          gtrsim: "≳",
          gvertneqq: "≩︀",
          gvnE: "≩︀",
          hArr: "⇔",
          hairsp: " ",
          half: "½",
          hamilt: "ℋ",
          hardcy: "ъ",
          harr: "↔",
          harrcir: "⥈",
          harrw: "↭",
          hbar: "ℏ",
          hcirc: "ĥ",
          hearts: "♥",
          heartsuit: "♥",
          hellip: "…",
          hercon: "⊹",
          hfr: "𝔥",
          hksearow: "⤥",
          hkswarow: "⤦",
          hoarr: "⇿",
          homtht: "∻",
          hookleftarrow: "↩",
          hookrightarrow: "↪",
          hopf: "𝕙",
          horbar: "―",
          hscr: "𝒽",
          hslash: "ℏ",
          hstrok: "ħ",
          hybull: "⁃",
          hyphen: "‐",
          iacut: "í",
          iacute: "í",
          ic: "⁣",
          icir: "î",
          icirc: "î",
          icy: "и",
          iecy: "е",
          iexc: "¡",
          iexcl: "¡",
          iff: "⇔",
          ifr: "𝔦",
          igrav: "ì",
          igrave: "ì",
          ii: "ⅈ",
          iiiint: "⨌",
          iiint: "∭",
          iinfin: "⧜",
          iiota: "℩",
          ijlig: "ĳ",
          imacr: "ī",
          image: "ℑ",
          imagline: "ℐ",
          imagpart: "ℑ",
          imath: "ı",
          imof: "⊷",
          imped: "Ƶ",
          in: "∈",
          incare: "℅",
          infin: "∞",
          infintie: "⧝",
          inodot: "ı",
          int: "∫",
          intcal: "⊺",
          integers: "ℤ",
          intercal: "⊺",
          intlarhk: "⨗",
          intprod: "⨼",
          iocy: "ё",
          iogon: "į",
          iopf: "𝕚",
          iota: "ι",
          iprod: "⨼",
          iques: "¿",
          iquest: "¿",
          iscr: "𝒾",
          isin: "∈",
          isinE: "⋹",
          isindot: "⋵",
          isins: "⋴",
          isinsv: "⋳",
          isinv: "∈",
          it: "⁢",
          itilde: "ĩ",
          iukcy: "і",
          ium: "ï",
          iuml: "ï",
          jcirc: "ĵ",
          jcy: "й",
          jfr: "𝔧",
          jmath: "ȷ",
          jopf: "𝕛",
          jscr: "𝒿",
          jsercy: "ј",
          jukcy: "є",
          kappa: "κ",
          kappav: "ϰ",
          kcedil: "ķ",
          kcy: "к",
          kfr: "𝔨",
          kgreen: "ĸ",
          khcy: "х",
          kjcy: "ќ",
          kopf: "𝕜",
          kscr: "𝓀",
          lAarr: "⇚",
          lArr: "⇐",
          lAtail: "⤛",
          lBarr: "⤎",
          lE: "≦",
          lEg: "⪋",
          lHar: "⥢",
          lacute: "ĺ",
          laemptyv: "⦴",
          lagran: "ℒ",
          lambda: "λ",
          lang: "⟨",
          langd: "⦑",
          langle: "⟨",
          lap: "⪅",
          laqu: "«",
          laquo: "«",
          larr: "←",
          larrb: "⇤",
          larrbfs: "⤟",
          larrfs: "⤝",
          larrhk: "↩",
          larrlp: "↫",
          larrpl: "⤹",
          larrsim: "⥳",
          larrtl: "↢",
          lat: "⪫",
          latail: "⤙",
          late: "⪭",
          lates: "⪭︀",
          lbarr: "⤌",
          lbbrk: "❲",
          lbrace: "{",
          lbrack: "[",
          lbrke: "⦋",
          lbrksld: "⦏",
          lbrkslu: "⦍",
          lcaron: "ľ",
          lcedil: "ļ",
          lceil: "⌈",
          lcub: "{",
          lcy: "л",
          ldca: "⤶",
          ldquo: "“",
          ldquor: "„",
          ldrdhar: "⥧",
          ldrushar: "⥋",
          ldsh: "↲",
          le: "≤",
          leftarrow: "←",
          leftarrowtail: "↢",
          leftharpoondown: "↽",
          leftharpoonup: "↼",
          leftleftarrows: "⇇",
          leftrightarrow: "↔",
          leftrightarrows: "⇆",
          leftrightharpoons: "⇋",
          leftrightsquigarrow: "↭",
          leftthreetimes: "⋋",
          leg: "⋚",
          leq: "≤",
          leqq: "≦",
          leqslant: "⩽",
          les: "⩽",
          lescc: "⪨",
          lesdot: "⩿",
          lesdoto: "⪁",
          lesdotor: "⪃",
          lesg: "⋚︀",
          lesges: "⪓",
          lessapprox: "⪅",
          lessdot: "⋖",
          lesseqgtr: "⋚",
          lesseqqgtr: "⪋",
          lessgtr: "≶",
          lesssim: "≲",
          lfisht: "⥼",
          lfloor: "⌊",
          lfr: "𝔩",
          lg: "≶",
          lgE: "⪑",
          lhard: "↽",
          lharu: "↼",
          lharul: "⥪",
          lhblk: "▄",
          ljcy: "љ",
          ll: "≪",
          llarr: "⇇",
          llcorner: "⌞",
          llhard: "⥫",
          lltri: "◺",
          lmidot: "ŀ",
          lmoust: "⎰",
          lmoustache: "⎰",
          lnE: "≨",
          lnap: "⪉",
          lnapprox: "⪉",
          lne: "⪇",
          lneq: "⪇",
          lneqq: "≨",
          lnsim: "⋦",
          loang: "⟬",
          loarr: "⇽",
          lobrk: "⟦",
          longleftarrow: "⟵",
          longleftrightarrow: "⟷",
          longmapsto: "⟼",
          longrightarrow: "⟶",
          looparrowleft: "↫",
          looparrowright: "↬",
          lopar: "⦅",
          lopf: "𝕝",
          loplus: "⨭",
          lotimes: "⨴",
          lowast: "∗",
          lowbar: "_",
          loz: "◊",
          lozenge: "◊",
          lozf: "⧫",
          lpar: "(",
          lparlt: "⦓",
          lrarr: "⇆",
          lrcorner: "⌟",
          lrhar: "⇋",
          lrhard: "⥭",
          lrm: "‎",
          lrtri: "⊿",
          lsaquo: "‹",
          lscr: "𝓁",
          lsh: "↰",
          lsim: "≲",
          lsime: "⪍",
          lsimg: "⪏",
          lsqb: "[",
          lsquo: "‘",
          lsquor: "‚",
          lstrok: "ł",
          l: "<",
          lt: "<",
          ltcc: "⪦",
          ltcir: "⩹",
          ltdot: "⋖",
          lthree: "⋋",
          ltimes: "⋉",
          ltlarr: "⥶",
          ltquest: "⩻",
          ltrPar: "⦖",
          ltri: "◃",
          ltrie: "⊴",
          ltrif: "◂",
          lurdshar: "⥊",
          luruhar: "⥦",
          lvertneqq: "≨︀",
          lvnE: "≨︀",
          mDDot: "∺",
          mac: "¯",
          macr: "¯",
          male: "♂",
          malt: "✠",
          maltese: "✠",
          map: "↦",
          mapsto: "↦",
          mapstodown: "↧",
          mapstoleft: "↤",
          mapstoup: "↥",
          marker: "▮",
          mcomma: "⨩",
          mcy: "м",
          mdash: "—",
          measuredangle: "∡",
          mfr: "𝔪",
          mho: "℧",
          micr: "µ",
          micro: "µ",
          mid: "∣",
          midast: "*",
          midcir: "⫰",
          middo: "·",
          middot: "·",
          minus: "−",
          minusb: "⊟",
          minusd: "∸",
          minusdu: "⨪",
          mlcp: "⫛",
          mldr: "…",
          mnplus: "∓",
          models: "⊧",
          mopf: "𝕞",
          mp: "∓",
          mscr: "𝓂",
          mstpos: "∾",
          mu: "μ",
          multimap: "⊸",
          mumap: "⊸",
          nGg: "⋙̸",
          nGt: "≫⃒",
          nGtv: "≫̸",
          nLeftarrow: "⇍",
          nLeftrightarrow: "⇎",
          nLl: "⋘̸",
          nLt: "≪⃒",
          nLtv: "≪̸",
          nRightarrow: "⇏",
          nVDash: "⊯",
          nVdash: "⊮",
          nabla: "∇",
          nacute: "ń",
          nang: "∠⃒",
          nap: "≉",
          napE: "⩰̸",
          napid: "≋̸",
          napos: "ŉ",
          napprox: "≉",
          natur: "♮",
          natural: "♮",
          naturals: "ℕ",
          nbs: " ",
          nbsp: " ",
          nbump: "≎̸",
          nbumpe: "≏̸",
          ncap: "⩃",
          ncaron: "ň",
          ncedil: "ņ",
          ncong: "≇",
          ncongdot: "⩭̸",
          ncup: "⩂",
          ncy: "н",
          ndash: "–",
          ne: "≠",
          neArr: "⇗",
          nearhk: "⤤",
          nearr: "↗",
          nearrow: "↗",
          nedot: "≐̸",
          nequiv: "≢",
          nesear: "⤨",
          nesim: "≂̸",
          nexist: "∄",
          nexists: "∄",
          nfr: "𝔫",
          ngE: "≧̸",
          nge: "≱",
          ngeq: "≱",
          ngeqq: "≧̸",
          ngeqslant: "⩾̸",
          nges: "⩾̸",
          ngsim: "≵",
          ngt: "≯",
          ngtr: "≯",
          nhArr: "⇎",
          nharr: "↮",
          nhpar: "⫲",
          ni: "∋",
          nis: "⋼",
          nisd: "⋺",
          niv: "∋",
          njcy: "њ",
          nlArr: "⇍",
          nlE: "≦̸",
          nlarr: "↚",
          nldr: "‥",
          nle: "≰",
          nleftarrow: "↚",
          nleftrightarrow: "↮",
          nleq: "≰",
          nleqq: "≦̸",
          nleqslant: "⩽̸",
          nles: "⩽̸",
          nless: "≮",
          nlsim: "≴",
          nlt: "≮",
          nltri: "⋪",
          nltrie: "⋬",
          nmid: "∤",
          nopf: "𝕟",
          no: "¬",
          not: "¬",
          notin: "∉",
          notinE: "⋹̸",
          notindot: "⋵̸",
          notinva: "∉",
          notinvb: "⋷",
          notinvc: "⋶",
          notni: "∌",
          notniva: "∌",
          notnivb: "⋾",
          notnivc: "⋽",
          npar: "∦",
          nparallel: "∦",
          nparsl: "⫽⃥",
          npart: "∂̸",
          npolint: "⨔",
          npr: "⊀",
          nprcue: "⋠",
          npre: "⪯̸",
          nprec: "⊀",
          npreceq: "⪯̸",
          nrArr: "⇏",
          nrarr: "↛",
          nrarrc: "⤳̸",
          nrarrw: "↝̸",
          nrightarrow: "↛",
          nrtri: "⋫",
          nrtrie: "⋭",
          nsc: "⊁",
          nsccue: "⋡",
          nsce: "⪰̸",
          nscr: "𝓃",
          nshortmid: "∤",
          nshortparallel: "∦",
          nsim: "≁",
          nsime: "≄",
          nsimeq: "≄",
          nsmid: "∤",
          nspar: "∦",
          nsqsube: "⋢",
          nsqsupe: "⋣",
          nsub: "⊄",
          nsubE: "⫅̸",
          nsube: "⊈",
          nsubset: "⊂⃒",
          nsubseteq: "⊈",
          nsubseteqq: "⫅̸",
          nsucc: "⊁",
          nsucceq: "⪰̸",
          nsup: "⊅",
          nsupE: "⫆̸",
          nsupe: "⊉",
          nsupset: "⊃⃒",
          nsupseteq: "⊉",
          nsupseteqq: "⫆̸",
          ntgl: "≹",
          ntild: "ñ",
          ntilde: "ñ",
          ntlg: "≸",
          ntriangleleft: "⋪",
          ntrianglelefteq: "⋬",
          ntriangleright: "⋫",
          ntrianglerighteq: "⋭",
          nu: "ν",
          num: "#",
          numero: "№",
          numsp: " ",
          nvDash: "⊭",
          nvHarr: "⤄",
          nvap: "≍⃒",
          nvdash: "⊬",
          nvge: "≥⃒",
          nvgt: ">⃒",
          nvinfin: "⧞",
          nvlArr: "⤂",
          nvle: "≤⃒",
          nvlt: "<⃒",
          nvltrie: "⊴⃒",
          nvrArr: "⤃",
          nvrtrie: "⊵⃒",
          nvsim: "∼⃒",
          nwArr: "⇖",
          nwarhk: "⤣",
          nwarr: "↖",
          nwarrow: "↖",
          nwnear: "⤧",
          oS: "Ⓢ",
          oacut: "ó",
          oacute: "ó",
          oast: "⊛",
          ocir: "ô",
          ocirc: "ô",
          ocy: "о",
          odash: "⊝",
          odblac: "ő",
          odiv: "⨸",
          odot: "⊙",
          odsold: "⦼",
          oelig: "œ",
          ofcir: "⦿",
          ofr: "𝔬",
          ogon: "˛",
          ograv: "ò",
          ograve: "ò",
          ogt: "⧁",
          ohbar: "⦵",
          ohm: "Ω",
          oint: "∮",
          olarr: "↺",
          olcir: "⦾",
          olcross: "⦻",
          oline: "‾",
          olt: "⧀",
          omacr: "ō",
          omega: "ω",
          omicron: "ο",
          omid: "⦶",
          ominus: "⊖",
          oopf: "𝕠",
          opar: "⦷",
          operp: "⦹",
          oplus: "⊕",
          or: "∨",
          orarr: "↻",
          ord: "º",
          order: "ℴ",
          orderof: "ℴ",
          ordf: "ª",
          ordm: "º",
          origof: "⊶",
          oror: "⩖",
          orslope: "⩗",
          orv: "⩛",
          oscr: "ℴ",
          oslas: "ø",
          oslash: "ø",
          osol: "⊘",
          otild: "õ",
          otilde: "õ",
          otimes: "⊗",
          otimesas: "⨶",
          oum: "ö",
          ouml: "ö",
          ovbar: "⌽",
          par: "¶",
          para: "¶",
          parallel: "∥",
          parsim: "⫳",
          parsl: "⫽",
          part: "∂",
          pcy: "п",
          percnt: "%",
          period: ".",
          permil: "‰",
          perp: "⊥",
          pertenk: "‱",
          pfr: "𝔭",
          phi: "φ",
          phiv: "ϕ",
          phmmat: "ℳ",
          phone: "☎",
          pi: "π",
          pitchfork: "⋔",
          piv: "ϖ",
          planck: "ℏ",
          planckh: "ℎ",
          plankv: "ℏ",
          plus: "+",
          plusacir: "⨣",
          plusb: "⊞",
          pluscir: "⨢",
          plusdo: "∔",
          plusdu: "⨥",
          pluse: "⩲",
          plusm: "±",
          plusmn: "±",
          plussim: "⨦",
          plustwo: "⨧",
          pm: "±",
          pointint: "⨕",
          popf: "𝕡",
          poun: "£",
          pound: "£",
          pr: "≺",
          prE: "⪳",
          prap: "⪷",
          prcue: "≼",
          pre: "⪯",
          prec: "≺",
          precapprox: "⪷",
          preccurlyeq: "≼",
          preceq: "⪯",
          precnapprox: "⪹",
          precneqq: "⪵",
          precnsim: "⋨",
          precsim: "≾",
          prime: "′",
          primes: "ℙ",
          prnE: "⪵",
          prnap: "⪹",
          prnsim: "⋨",
          prod: "∏",
          profalar: "⌮",
          profline: "⌒",
          profsurf: "⌓",
          prop: "∝",
          propto: "∝",
          prsim: "≾",
          prurel: "⊰",
          pscr: "𝓅",
          psi: "ψ",
          puncsp: " ",
          qfr: "𝔮",
          qint: "⨌",
          qopf: "𝕢",
          qprime: "⁗",
          qscr: "𝓆",
          quaternions: "ℍ",
          quatint: "⨖",
          quest: "?",
          questeq: "≟",
          quo: '"',
          quot: '"',
          rAarr: "⇛",
          rArr: "⇒",
          rAtail: "⤜",
          rBarr: "⤏",
          rHar: "⥤",
          race: "∽̱",
          racute: "ŕ",
          radic: "√",
          raemptyv: "⦳",
          rang: "⟩",
          rangd: "⦒",
          range: "⦥",
          rangle: "⟩",
          raqu: "»",
          raquo: "»",
          rarr: "→",
          rarrap: "⥵",
          rarrb: "⇥",
          rarrbfs: "⤠",
          rarrc: "⤳",
          rarrfs: "⤞",
          rarrhk: "↪",
          rarrlp: "↬",
          rarrpl: "⥅",
          rarrsim: "⥴",
          rarrtl: "↣",
          rarrw: "↝",
          ratail: "⤚",
          ratio: "∶",
          rationals: "ℚ",
          rbarr: "⤍",
          rbbrk: "❳",
          rbrace: "}",
          rbrack: "]",
          rbrke: "⦌",
          rbrksld: "⦎",
          rbrkslu: "⦐",
          rcaron: "ř",
          rcedil: "ŗ",
          rceil: "⌉",
          rcub: "}",
          rcy: "р",
          rdca: "⤷",
          rdldhar: "⥩",
          rdquo: "”",
          rdquor: "”",
          rdsh: "↳",
          real: "ℜ",
          realine: "ℛ",
          realpart: "ℜ",
          reals: "ℝ",
          rect: "▭",
          re: "®",
          reg: "®",
          rfisht: "⥽",
          rfloor: "⌋",
          rfr: "𝔯",
          rhard: "⇁",
          rharu: "⇀",
          rharul: "⥬",
          rho: "ρ",
          rhov: "ϱ",
          rightarrow: "→",
          rightarrowtail: "↣",
          rightharpoondown: "⇁",
          rightharpoonup: "⇀",
          rightleftarrows: "⇄",
          rightleftharpoons: "⇌",
          rightrightarrows: "⇉",
          rightsquigarrow: "↝",
          rightthreetimes: "⋌",
          ring: "˚",
          risingdotseq: "≓",
          rlarr: "⇄",
          rlhar: "⇌",
          rlm: "‏",
          rmoust: "⎱",
          rmoustache: "⎱",
          rnmid: "⫮",
          roang: "⟭",
          roarr: "⇾",
          robrk: "⟧",
          ropar: "⦆",
          ropf: "𝕣",
          roplus: "⨮",
          rotimes: "⨵",
          rpar: ")",
          rpargt: "⦔",
          rppolint: "⨒",
          rrarr: "⇉",
          rsaquo: "›",
          rscr: "𝓇",
          rsh: "↱",
          rsqb: "]",
          rsquo: "’",
          rsquor: "’",
          rthree: "⋌",
          rtimes: "⋊",
          rtri: "▹",
          rtrie: "⊵",
          rtrif: "▸",
          rtriltri: "⧎",
          ruluhar: "⥨",
          rx: "℞",
          sacute: "ś",
          sbquo: "‚",
          sc: "≻",
          scE: "⪴",
          scap: "⪸",
          scaron: "š",
          sccue: "≽",
          sce: "⪰",
          scedil: "ş",
          scirc: "ŝ",
          scnE: "⪶",
          scnap: "⪺",
          scnsim: "⋩",
          scpolint: "⨓",
          scsim: "≿",
          scy: "с",
          sdot: "⋅",
          sdotb: "⊡",
          sdote: "⩦",
          seArr: "⇘",
          searhk: "⤥",
          searr: "↘",
          searrow: "↘",
          sec: "§",
          sect: "§",
          semi: ";",
          seswar: "⤩",
          setminus: "∖",
          setmn: "∖",
          sext: "✶",
          sfr: "𝔰",
          sfrown: "⌢",
          sharp: "♯",
          shchcy: "щ",
          shcy: "ш",
          shortmid: "∣",
          shortparallel: "∥",
          sh: "­",
          shy: "­",
          sigma: "σ",
          sigmaf: "ς",
          sigmav: "ς",
          sim: "∼",
          simdot: "⩪",
          sime: "≃",
          simeq: "≃",
          simg: "⪞",
          simgE: "⪠",
          siml: "⪝",
          simlE: "⪟",
          simne: "≆",
          simplus: "⨤",
          simrarr: "⥲",
          slarr: "←",
          smallsetminus: "∖",
          smashp: "⨳",
          smeparsl: "⧤",
          smid: "∣",
          smile: "⌣",
          smt: "⪪",
          smte: "⪬",
          smtes: "⪬︀",
          softcy: "ь",
          sol: "/",
          solb: "⧄",
          solbar: "⌿",
          sopf: "𝕤",
          spades: "♠",
          spadesuit: "♠",
          spar: "∥",
          sqcap: "⊓",
          sqcaps: "⊓︀",
          sqcup: "⊔",
          sqcups: "⊔︀",
          sqsub: "⊏",
          sqsube: "⊑",
          sqsubset: "⊏",
          sqsubseteq: "⊑",
          sqsup: "⊐",
          sqsupe: "⊒",
          sqsupset: "⊐",
          sqsupseteq: "⊒",
          squ: "□",
          square: "□",
          squarf: "▪",
          squf: "▪",
          srarr: "→",
          sscr: "𝓈",
          ssetmn: "∖",
          ssmile: "⌣",
          sstarf: "⋆",
          star: "☆",
          starf: "★",
          straightepsilon: "ϵ",
          straightphi: "ϕ",
          strns: "¯",
          sub: "⊂",
          subE: "⫅",
          subdot: "⪽",
          sube: "⊆",
          subedot: "⫃",
          submult: "⫁",
          subnE: "⫋",
          subne: "⊊",
          subplus: "⪿",
          subrarr: "⥹",
          subset: "⊂",
          subseteq: "⊆",
          subseteqq: "⫅",
          subsetneq: "⊊",
          subsetneqq: "⫋",
          subsim: "⫇",
          subsub: "⫕",
          subsup: "⫓",
          succ: "≻",
          succapprox: "⪸",
          succcurlyeq: "≽",
          succeq: "⪰",
          succnapprox: "⪺",
          succneqq: "⪶",
          succnsim: "⋩",
          succsim: "≿",
          sum: "∑",
          sung: "♪",
          sup: "⊃",
          sup1: "¹",
          sup2: "²",
          sup3: "³",
          supE: "⫆",
          supdot: "⪾",
          supdsub: "⫘",
          supe: "⊇",
          supedot: "⫄",
          suphsol: "⟉",
          suphsub: "⫗",
          suplarr: "⥻",
          supmult: "⫂",
          supnE: "⫌",
          supne: "⊋",
          supplus: "⫀",
          supset: "⊃",
          supseteq: "⊇",
          supseteqq: "⫆",
          supsetneq: "⊋",
          supsetneqq: "⫌",
          supsim: "⫈",
          supsub: "⫔",
          supsup: "⫖",
          swArr: "⇙",
          swarhk: "⤦",
          swarr: "↙",
          swarrow: "↙",
          swnwar: "⤪",
          szli: "ß",
          szlig: "ß",
          target: "⌖",
          tau: "τ",
          tbrk: "⎴",
          tcaron: "ť",
          tcedil: "ţ",
          tcy: "т",
          tdot: "⃛",
          telrec: "⌕",
          tfr: "𝔱",
          there4: "∴",
          therefore: "∴",
          theta: "θ",
          thetasym: "ϑ",
          thetav: "ϑ",
          thickapprox: "≈",
          thicksim: "∼",
          thinsp: " ",
          thkap: "≈",
          thksim: "∼",
          thor: "þ",
          thorn: "þ",
          tilde: "˜",
          time: "×",
          times: "×",
          timesb: "⊠",
          timesbar: "⨱",
          timesd: "⨰",
          tint: "∭",
          toea: "⤨",
          top: "⊤",
          topbot: "⌶",
          topcir: "⫱",
          topf: "𝕥",
          topfork: "⫚",
          tosa: "⤩",
          tprime: "‴",
          trade: "™",
          triangle: "▵",
          triangledown: "▿",
          triangleleft: "◃",
          trianglelefteq: "⊴",
          triangleq: "≜",
          triangleright: "▹",
          trianglerighteq: "⊵",
          tridot: "◬",
          trie: "≜",
          triminus: "⨺",
          triplus: "⨹",
          trisb: "⧍",
          tritime: "⨻",
          trpezium: "⏢",
          tscr: "𝓉",
          tscy: "ц",
          tshcy: "ћ",
          tstrok: "ŧ",
          twixt: "≬",
          twoheadleftarrow: "↞",
          twoheadrightarrow: "↠",
          uArr: "⇑",
          uHar: "⥣",
          uacut: "ú",
          uacute: "ú",
          uarr: "↑",
          ubrcy: "ў",
          ubreve: "ŭ",
          ucir: "û",
          ucirc: "û",
          ucy: "у",
          udarr: "⇅",
          udblac: "ű",
          udhar: "⥮",
          ufisht: "⥾",
          ufr: "𝔲",
          ugrav: "ù",
          ugrave: "ù",
          uharl: "↿",
          uharr: "↾",
          uhblk: "▀",
          ulcorn: "⌜",
          ulcorner: "⌜",
          ulcrop: "⌏",
          ultri: "◸",
          umacr: "ū",
          um: "¨",
          uml: "¨",
          uogon: "ų",
          uopf: "𝕦",
          uparrow: "↑",
          updownarrow: "↕",
          upharpoonleft: "↿",
          upharpoonright: "↾",
          uplus: "⊎",
          upsi: "υ",
          upsih: "ϒ",
          upsilon: "υ",
          upuparrows: "⇈",
          urcorn: "⌝",
          urcorner: "⌝",
          urcrop: "⌎",
          uring: "ů",
          urtri: "◹",
          uscr: "𝓊",
          utdot: "⋰",
          utilde: "ũ",
          utri: "▵",
          utrif: "▴",
          uuarr: "⇈",
          uum: "ü",
          uuml: "ü",
          uwangle: "⦧",
          vArr: "⇕",
          vBar: "⫨",
          vBarv: "⫩",
          vDash: "⊨",
          vangrt: "⦜",
          varepsilon: "ϵ",
          varkappa: "ϰ",
          varnothing: "∅",
          varphi: "ϕ",
          varpi: "ϖ",
          varpropto: "∝",
          varr: "↕",
          varrho: "ϱ",
          varsigma: "ς",
          varsubsetneq: "⊊︀",
          varsubsetneqq: "⫋︀",
          varsupsetneq: "⊋︀",
          varsupsetneqq: "⫌︀",
          vartheta: "ϑ",
          vartriangleleft: "⊲",
          vartriangleright: "⊳",
          vcy: "в",
          vdash: "⊢",
          vee: "∨",
          veebar: "⊻",
          veeeq: "≚",
          vellip: "⋮",
          verbar: "|",
          vert: "|",
          vfr: "𝔳",
          vltri: "⊲",
          vnsub: "⊂⃒",
          vnsup: "⊃⃒",
          vopf: "𝕧",
          vprop: "∝",
          vrtri: "⊳",
          vscr: "𝓋",
          vsubnE: "⫋︀",
          vsubne: "⊊︀",
          vsupnE: "⫌︀",
          vsupne: "⊋︀",
          vzigzag: "⦚",
          wcirc: "ŵ",
          wedbar: "⩟",
          wedge: "∧",
          wedgeq: "≙",
          weierp: "℘",
          wfr: "𝔴",
          wopf: "𝕨",
          wp: "℘",
          wr: "≀",
          wreath: "≀",
          wscr: "𝓌",
          xcap: "⋂",
          xcirc: "◯",
          xcup: "⋃",
          xdtri: "▽",
          xfr: "𝔵",
          xhArr: "⟺",
          xharr: "⟷",
          xi: "ξ",
          xlArr: "⟸",
          xlarr: "⟵",
          xmap: "⟼",
          xnis: "⋻",
          xodot: "⨀",
          xopf: "𝕩",
          xoplus: "⨁",
          xotime: "⨂",
          xrArr: "⟹",
          xrarr: "⟶",
          xscr: "𝓍",
          xsqcup: "⨆",
          xuplus: "⨄",
          xutri: "△",
          xvee: "⋁",
          xwedge: "⋀",
          yacut: "ý",
          yacute: "ý",
          yacy: "я",
          ycirc: "ŷ",
          ycy: "ы",
          ye: "¥",
          yen: "¥",
          yfr: "𝔶",
          yicy: "ї",
          yopf: "𝕪",
          yscr: "𝓎",
          yucy: "ю",
          yum: "ÿ",
          yuml: "ÿ",
          zacute: "ź",
          zcaron: "ž",
          zcy: "з",
          zdot: "ż",
          zeetrf: "ℨ",
          zeta: "ζ",
          zfr: "𝔷",
          zhcy: "ж",
          zigrarr: "⇝",
          zopf: "𝕫",
          zscr: "𝓏",
          zwj: "‍",
          zwnj: "‌",
        },
        Ge = {}.hasOwnProperty;
      function $e(e) {
        return !!Ge.call(_e, e) && _e[e];
      }
      const We = {
        name: "characterReference",
        tokenize: function (e, n, t) {
          const r = this;
          let o,
            i,
            l = 0;
          return function (n) {
            return (
              e.enter("characterReference"),
              e.enter("characterReferenceMarker"),
              e.consume(n),
              e.exit("characterReferenceMarker"),
              a
            );
          };
          function a(n) {
            return 35 === n
              ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(n),
                e.exit("characterReferenceMarkerNumeric"),
                u)
              : (e.enter("characterReferenceValue"), (o = 31), (i = K), s(n));
          }
          function u(n) {
            return 88 === n || 120 === n
              ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(n),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                (o = 6),
                (i = Y),
                s)
              : (e.enter("characterReferenceValue"), (o = 7), (i = Q), s(n));
          }
          function s(a) {
            let u;
            return 59 === a && l
              ? ((u = e.exit("characterReferenceValue")),
                i !== K || $e(r.sliceSerialize(u))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(a),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    n)
                  : t(a))
              : i(a) && l++ < o
              ? (e.consume(a), s)
              : t(a);
          }
        },
      };
      const Qe = {
        name: "characterEscape",
        tokenize: function (e, n, t) {
          return function (n) {
            return (
              e.enter("characterEscape"),
              e.enter("escapeMarker"),
              e.consume(n),
              e.exit("escapeMarker"),
              r
            );
          };
          function r(r) {
            return J(r)
              ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                n)
              : t(r);
          }
        },
      };
      const Ye = {
        name: "lineEnding",
        tokenize: function (e, n) {
          return function (t) {
            return (
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              le(e, n, "linePrefix")
            );
          };
        },
      };
      const Ke = {
          name: "labelEnd",
          tokenize: function (e, n, t) {
            const r = this;
            let o,
              i,
              l = r.events.length;
            for (; l--; )
              if (
                ("labelImage" === r.events[l][1].type ||
                  "labelLink" === r.events[l][1].type) &&
                !r.events[l][1]._balanced
              ) {
                o = r.events[l][1];
                break;
              }
            return function (n) {
              if (!o) return t(n);
              return o._inactive
                ? u(n)
                : ((i = r.parser.defined.includes(
                    Oe(r.sliceSerialize({ start: o.end, end: r.now() }))
                  )),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  a);
            };
            function a(t) {
              return 40 === t
                ? e.attempt(Je, n, i ? n : u)(t)
                : 91 === t
                ? e.attempt(Ze, n, i ? e.attempt(Xe, n, u) : u)(t)
                : i
                ? n(t)
                : u(t);
            }
            function u(e) {
              return (o._balanced = !0), t(e);
            }
          },
          resolveTo: function (e, n) {
            let t,
              r,
              o,
              i,
              l = e.length,
              a = 0;
            for (; l--; )
              if (((t = e[l][1]), r)) {
                if (
                  "link" === t.type ||
                  ("labelLink" === t.type && t._inactive)
                )
                  break;
                "enter" === e[l][0] &&
                  "labelLink" === t.type &&
                  (t._inactive = !0);
              } else if (o) {
                if (
                  "enter" === e[l][0] &&
                  ("labelImage" === t.type || "labelLink" === t.type) &&
                  !t._balanced &&
                  ((r = l), "labelLink" !== t.type)
                ) {
                  a = 2;
                  break;
                }
              } else "labelEnd" === t.type && (o = l);
            const u = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              s = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[o][1].end),
              },
              c = {
                type: "labelText",
                start: Object.assign({}, e[r + a + 2][1].end),
                end: Object.assign({}, e[o - 2][1].start),
              };
            return (
              (i = [
                ["enter", u, n],
                ["enter", s, n],
              ]),
              (i = V(i, e.slice(r + 1, r + a + 3))),
              (i = V(i, [["enter", c, n]])),
              (i = V(
                i,
                we(
                  n.parser.constructs.insideSpan.null,
                  e.slice(r + a + 4, o - 3),
                  n
                )
              )),
              (i = V(i, [["exit", c, n], e[o - 2], e[o - 1], ["exit", s, n]])),
              (i = V(i, e.slice(o + 1))),
              (i = V(i, [["exit", u, n]])),
              H(e, r, e.length, i),
              e
            );
          },
          resolveAll: function (e) {
            let n,
              t = -1;
            for (; ++t < e.length; )
              (n = e[t][1]),
                ("labelImage" !== n.type &&
                  "labelLink" !== n.type &&
                  "labelEnd" !== n.type) ||
                  (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                  (n.type = "data"),
                  t++);
            return e;
          },
        },
        Je = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(n),
                e.exit("resourceMarker"),
                Pe(e, r)
              );
            };
            function r(n) {
              return 41 === n
                ? l(n)
                : De(
                    e,
                    o,
                    t,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(n);
            }
            function o(n) {
              return ee(n) ? Pe(e, i)(n) : l(n);
            }
            function i(n) {
              return 34 === n || 39 === n || 40 === n
                ? Fe(
                    e,
                    Pe(e, l),
                    t,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(n)
                : l(n);
            }
            function l(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  n)
                : t(r);
            }
          },
        },
        Ze = {
          tokenize: function (e, n, t) {
            const r = this;
            return function (n) {
              return qe.call(
                r,
                e,
                o,
                t,
                "reference",
                "referenceMarker",
                "referenceString"
              )(n);
            };
            function o(e) {
              return r.parser.defined.includes(
                Oe(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? n(e)
                : t(e);
            }
          },
        },
        Xe = {
          tokenize: function (e, n, t) {
            return function (n) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(n),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  n)
                : t(r);
            }
          },
        };
      function en(e) {
        return null === e || ee(e) || re(e) ? 1 : oe(e) ? 2 : void 0;
      }
      const nn = {
        name: "attention",
        tokenize: function (e, n) {
          const t = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            o = en(r);
          let i;
          return function (n) {
            return e.enter("attentionSequence"), (i = n), l(n);
          };
          function l(a) {
            if (a === i) return e.consume(a), l;
            const u = e.exit("attentionSequence"),
              s = en(a),
              c = !s || (2 === s && o) || t.includes(a),
              f = !o || (2 === o && s) || t.includes(r);
            return (
              (u._open = Boolean(42 === i ? c : c && (o || !f))),
              (u._close = Boolean(42 === i ? f : f && (s || !c))),
              n(a)
            );
          }
        },
        resolveAll: function (e, n) {
          let t,
            r,
            o,
            i,
            l,
            a,
            u,
            s,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            )
              for (t = c; t--; )
                if (
                  "exit" === e[t][0] &&
                  "attentionSequence" === e[t][1].type &&
                  e[t][1]._open &&
                  n.sliceSerialize(e[t][1]).charCodeAt(0) ===
                    n.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[t][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[t][1].end.offset -
                        e[t][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  a =
                    e[t][1].end.offset - e[t][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  const f = Object.assign({}, e[t][1].end),
                    p = Object.assign({}, e[c][1].start);
                  tn(f, -a),
                    tn(p, a),
                    (i = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[t][1].end),
                    }),
                    (l = {
                      type: a > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[c][1].start),
                      end: p,
                    }),
                    (o = {
                      type: a > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[t][1].end),
                      end: Object.assign({}, e[c][1].start),
                    }),
                    (r = {
                      type: a > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, i.start),
                      end: Object.assign({}, l.end),
                    }),
                    (e[t][1].end = Object.assign({}, i.start)),
                    (e[c][1].start = Object.assign({}, l.end)),
                    (u = []),
                    e[t][1].end.offset - e[t][1].start.offset &&
                      (u = V(u, [
                        ["enter", e[t][1], n],
                        ["exit", e[t][1], n],
                      ])),
                    (u = V(u, [
                      ["enter", r, n],
                      ["enter", i, n],
                      ["exit", i, n],
                      ["enter", o, n],
                    ])),
                    (u = V(
                      u,
                      we(
                        n.parser.constructs.insideSpan.null,
                        e.slice(t + 1, c),
                        n
                      )
                    )),
                    (u = V(u, [
                      ["exit", o, n],
                      ["enter", l, n],
                      ["exit", l, n],
                      ["exit", r, n],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((s = 2),
                        (u = V(u, [
                          ["enter", e[c][1], n],
                          ["exit", e[c][1], n],
                        ])))
                      : (s = 0),
                    H(e, t - 1, c - t + 3, u),
                    (c = t + u.length - s - 2);
                  break;
                }
          c = -1;
          for (; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
      };
      function tn(e, n) {
        (e.column += n), (e.offset += n), (e._bufferIndex += n);
      }
      const rn = {
          42: Ae,
          43: Ae,
          45: Ae,
          48: Ae,
          49: Ae,
          50: Ae,
          51: Ae,
          52: Ae,
          53: Ae,
          54: Ae,
          55: Ae,
          56: Ae,
          57: Ae,
          62: Le,
        },
        on = { 91: Ie },
        ln = { [-2]: Be, [-1]: Be, 32: Be },
        an = {
          35: {
            name: "headingAtx",
            tokenize: function (e, n, t) {
              const r = this;
              let o = 0;
              return function (n) {
                return (
                  e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(n)
                );
              };
              function i(a) {
                return 35 === a && o++ < 6
                  ? (e.consume(a), i)
                  : null === a || ee(a)
                  ? (e.exit("atxHeadingSequence"), r.interrupt ? n(a) : l(a))
                  : t(a);
              }
              function l(t) {
                return 35 === t
                  ? (e.enter("atxHeadingSequence"), a(t))
                  : null === t || ne(t)
                  ? (e.exit("atxHeading"), n(t))
                  : te(t)
                  ? le(e, l, "whitespace")(t)
                  : (e.enter("atxHeadingText"), u(t));
              }
              function a(n) {
                return 35 === n
                  ? (e.consume(n), a)
                  : (e.exit("atxHeadingSequence"), l(n));
              }
              function u(n) {
                return null === n || 35 === n || ee(n)
                  ? (e.exit("atxHeadingText"), l(n))
                  : (e.consume(n), u);
              }
            },
            resolve: function (e, n) {
              let t,
                r,
                o = e.length - 2,
                i = 3;
              "whitespace" === e[i][1].type && (i += 2);
              o - 2 > i && "whitespace" === e[o][1].type && (o -= 2);
              "atxHeadingSequence" === e[o][1].type &&
                (i === o - 1 ||
                  (o - 4 > i && "whitespace" === e[o - 2][1].type)) &&
                (o -= i + 1 === o ? 2 : 4);
              o > i &&
                ((t = {
                  type: "atxHeadingText",
                  start: e[i][1].start,
                  end: e[o][1].end,
                }),
                (r = {
                  type: "chunkText",
                  start: e[i][1].start,
                  end: e[o][1].end,
                  contentType: "text",
                }),
                H(e, i, o - i + 1, [
                  ["enter", t, n],
                  ["enter", r, n],
                  ["exit", r, n],
                  ["exit", t, n],
                ]));
              return e;
            },
          },
          42: Ee,
          45: [Ne, Ee],
          60: je,
          61: Ne,
          95: Ee,
          96: Ve,
          126: Ve,
        },
        un = { 38: We, 92: Qe },
        sn = {
          [-5]: Ye,
          [-4]: Ye,
          [-3]: Ye,
          33: {
            name: "labelStartImage",
            tokenize: function (e, n, t) {
              const r = this;
              return function (n) {
                return (
                  e.enter("labelImage"),
                  e.enter("labelImageMarker"),
                  e.consume(n),
                  e.exit("labelImageMarker"),
                  o
                );
              };
              function o(n) {
                return 91 === n
                  ? (e.enter("labelMarker"),
                    e.consume(n),
                    e.exit("labelMarker"),
                    e.exit("labelImage"),
                    i)
                  : t(n);
              }
              function i(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? t(e)
                  : n(e);
              }
            },
            resolveAll: Ke.resolveAll,
          },
          38: We,
          42: nn,
          60: [
            {
              name: "autolink",
              tokenize: function (e, n, t) {
                let r = 1;
                return function (n) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(n),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    o
                  );
                };
                function o(n) {
                  return W(n) ? (e.consume(n), i) : Z(n) ? u(n) : t(n);
                }
                function i(e) {
                  return 43 === e || 45 === e || 46 === e || K(e) ? l(e) : u(e);
                }
                function l(n) {
                  return 58 === n
                    ? (e.consume(n), a)
                    : (43 === n || 45 === n || 46 === n || K(n)) && r++ < 32
                    ? (e.consume(n), l)
                    : u(n);
                }
                function a(n) {
                  return 62 === n
                    ? (e.exit("autolinkProtocol"), p(n))
                    : null === n || 32 === n || 60 === n || X(n)
                    ? t(n)
                    : (e.consume(n), a);
                }
                function u(n) {
                  return 64 === n
                    ? (e.consume(n), (r = 0), s)
                    : Z(n)
                    ? (e.consume(n), u)
                    : t(n);
                }
                function s(e) {
                  return K(e) ? c(e) : t(e);
                }
                function c(n) {
                  return 46 === n
                    ? (e.consume(n), (r = 0), s)
                    : 62 === n
                    ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
                      p(n))
                    : f(n);
                }
                function f(n) {
                  return (45 === n || K(n)) && r++ < 63
                    ? (e.consume(n), 45 === n ? f : c)
                    : t(n);
                }
                function p(t) {
                  return (
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.exit("autolink"),
                    n
                  );
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, n, t) {
                const r = this;
                let o, i, l, a;
                return function (n) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(n),
                    u
                  );
                };
                function u(n) {
                  return 33 === n
                    ? (e.consume(n), s)
                    : 47 === n
                    ? (e.consume(n), w)
                    : 63 === n
                    ? (e.consume(n), v)
                    : W(n)
                    ? (e.consume(n), A)
                    : t(n);
                }
                function s(n) {
                  return 45 === n
                    ? (e.consume(n), c)
                    : 91 === n
                    ? (e.consume(n), (i = "CDATA["), (l = 0), g)
                    : W(n)
                    ? (e.consume(n), k)
                    : t(n);
                }
                function c(n) {
                  return 45 === n ? (e.consume(n), f) : t(n);
                }
                function f(n) {
                  return null === n || 62 === n
                    ? t(n)
                    : 45 === n
                    ? (e.consume(n), p)
                    : d(n);
                }
                function p(e) {
                  return null === e || 62 === e ? t(e) : d(e);
                }
                function d(n) {
                  return null === n
                    ? t(n)
                    : 45 === n
                    ? (e.consume(n), h)
                    : ne(n)
                    ? ((a = d), O(n))
                    : (e.consume(n), d);
                }
                function h(n) {
                  return 45 === n ? (e.consume(n), R) : d(n);
                }
                function g(n) {
                  return n === i.charCodeAt(l++)
                    ? (e.consume(n), l === i.length ? m : g)
                    : t(n);
                }
                function m(n) {
                  return null === n
                    ? t(n)
                    : 93 === n
                    ? (e.consume(n), y)
                    : ne(n)
                    ? ((a = m), O(n))
                    : (e.consume(n), m);
                }
                function y(n) {
                  return 93 === n ? (e.consume(n), b) : m(n);
                }
                function b(n) {
                  return 62 === n ? R(n) : 93 === n ? (e.consume(n), b) : m(n);
                }
                function k(n) {
                  return null === n || 62 === n
                    ? R(n)
                    : ne(n)
                    ? ((a = k), O(n))
                    : (e.consume(n), k);
                }
                function v(n) {
                  return null === n
                    ? t(n)
                    : 63 === n
                    ? (e.consume(n), x)
                    : ne(n)
                    ? ((a = v), O(n))
                    : (e.consume(n), v);
                }
                function x(e) {
                  return 62 === e ? R(e) : v(e);
                }
                function w(n) {
                  return W(n) ? (e.consume(n), S) : t(n);
                }
                function S(n) {
                  return 45 === n || K(n) ? (e.consume(n), S) : E(n);
                }
                function E(n) {
                  return ne(n)
                    ? ((a = E), O(n))
                    : te(n)
                    ? (e.consume(n), E)
                    : R(n);
                }
                function A(n) {
                  return 45 === n || K(n)
                    ? (e.consume(n), A)
                    : 47 === n || 62 === n || ee(n)
                    ? C(n)
                    : t(n);
                }
                function C(n) {
                  return 47 === n
                    ? (e.consume(n), R)
                    : 58 === n || 95 === n || W(n)
                    ? (e.consume(n), T)
                    : ne(n)
                    ? ((a = C), O(n))
                    : te(n)
                    ? (e.consume(n), C)
                    : R(n);
                }
                function T(n) {
                  return 45 === n || 46 === n || 58 === n || 95 === n || K(n)
                    ? (e.consume(n), T)
                    : L(n);
                }
                function L(n) {
                  return 61 === n
                    ? (e.consume(n), D)
                    : ne(n)
                    ? ((a = L), O(n))
                    : te(n)
                    ? (e.consume(n), L)
                    : C(n);
                }
                function D(n) {
                  return null === n ||
                    60 === n ||
                    61 === n ||
                    62 === n ||
                    96 === n
                    ? t(n)
                    : 34 === n || 39 === n
                    ? (e.consume(n), (o = n), q)
                    : ne(n)
                    ? ((a = D), O(n))
                    : te(n)
                    ? (e.consume(n), D)
                    : (e.consume(n), (o = void 0), P);
                }
                function q(n) {
                  return n === o
                    ? (e.consume(n), F)
                    : null === n
                    ? t(n)
                    : ne(n)
                    ? ((a = q), O(n))
                    : (e.consume(n), q);
                }
                function F(e) {
                  return 62 === e || 47 === e || ee(e) ? C(e) : t(e);
                }
                function P(n) {
                  return null === n ||
                    34 === n ||
                    39 === n ||
                    60 === n ||
                    61 === n ||
                    96 === n
                    ? t(n)
                    : 62 === n || ee(n)
                    ? C(n)
                    : (e.consume(n), P);
                }
                function O(n) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    le(
                      e,
                      I,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )
                  );
                }
                function I(n) {
                  return e.enter("htmlTextData"), a(n);
                }
                function R(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      n)
                    : t(r);
                }
              },
            },
          ],
          91: {
            name: "labelStartLink",
            tokenize: function (e, n, t) {
              const r = this;
              return function (n) {
                return (
                  e.enter("labelLink"),
                  e.enter("labelMarker"),
                  e.consume(n),
                  e.exit("labelMarker"),
                  e.exit("labelLink"),
                  o
                );
              };
              function o(e) {
                return 94 === e &&
                  "_hiddenFootnoteSupport" in r.parser.constructs
                  ? t(e)
                  : n(e);
              }
            },
            resolveAll: Ke.resolveAll,
          },
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, n, t) {
                return function (n) {
                  return (
                    e.enter("hardBreakEscape"),
                    e.enter("escapeMarker"),
                    e.consume(n),
                    r
                  );
                };
                function r(r) {
                  return ne(r)
                    ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r))
                    : t(r);
                }
              },
            },
            Qe,
          ],
          93: Ke,
          95: nn,
          96: {
            name: "codeText",
            tokenize: function (e, n, t) {
              let r,
                o,
                i = 0;
              return function (n) {
                return e.enter("codeText"), e.enter("codeTextSequence"), l(n);
              };
              function l(n) {
                return 96 === n
                  ? (e.consume(n), i++, l)
                  : (e.exit("codeTextSequence"), a(n));
              }
              function a(n) {
                return null === n
                  ? t(n)
                  : 96 === n
                  ? ((o = e.enter("codeTextSequence")), (r = 0), s(n))
                  : 32 === n
                  ? (e.enter("space"), e.consume(n), e.exit("space"), a)
                  : ne(n)
                  ? (e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    a)
                  : (e.enter("codeTextData"), u(n));
              }
              function u(n) {
                return null === n || 32 === n || 96 === n || ne(n)
                  ? (e.exit("codeTextData"), a(n))
                  : (e.consume(n), u);
              }
              function s(t) {
                return 96 === t
                  ? (e.consume(t), r++, s)
                  : r === i
                  ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t))
                  : ((o.type = "codeTextData"), u(t));
              }
            },
            resolve: function (e) {
              let n,
                t,
                r = e.length - 4,
                o = 3;
              if (
                !(
                  ("lineEnding" !== e[o][1].type && "space" !== e[o][1].type) ||
                  ("lineEnding" !== e[r][1].type && "space" !== e[r][1].type)
                )
              )
                for (n = o; ++n < r; )
                  if ("codeTextData" === e[n][1].type) {
                    (e[o][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (o += 2),
                      (r -= 2);
                    break;
                  }
              (n = o - 1), r++;
              for (; ++n <= r; )
                void 0 === t
                  ? n !== r && "lineEnding" !== e[n][1].type && (t = n)
                  : (n !== r && "lineEnding" !== e[n][1].type) ||
                    ((e[t][1].type = "codeTextData"),
                    n !== t + 2 &&
                      ((e[t][1].end = e[n - 1][1].end),
                      e.splice(t + 2, n - t - 2),
                      (r -= n - t - 2),
                      (n = t + 2)),
                    (t = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        cn = { null: [nn, me] },
        fn = { null: [42, 95] },
        pn = { null: [] };
      function dn(e = {}) {
        const n = {
          defined: [],
          lazy: {},
          constructs: (function (e) {
            const n = {};
            let t = -1;
            for (; ++t < e.length; ) G(n, e[t]);
            return n;
          })([r].concat(e.extensions || [])),
          content: t(ae),
          document: t(ue),
          flow: t(ge),
          string: t(ye),
          text: t(be),
        };
        return n;
        function t(e) {
          return function (t) {
            return Se(n, e, t);
          };
        }
      }
      const hn = /[\0\t\n\r]/g;
      function gn(e, n) {
        const t = Number.parseInt(e, n);
        return t < 9 ||
          11 === t ||
          (t > 13 && t < 32) ||
          (t > 126 && t < 160) ||
          (t > 55295 && t < 57344) ||
          (t > 64975 && t < 65008) ||
          65535 == (65535 & t) ||
          65534 == (65535 & t) ||
          t > 1114111
          ? "�"
          : String.fromCharCode(t);
      }
      const mn =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function yn(e, n, t) {
        if (n) return n;
        if (35 === t.charCodeAt(0)) {
          const e = t.charCodeAt(1),
            n = 120 === e || 88 === e;
          return gn(t.slice(n ? 2 : 1), n ? 16 : 10);
        }
        return $e(t) || e;
      }
      const bn = {}.hasOwnProperty,
        kn = function (e, n, t) {
          return (
            "string" != typeof n && ((t = n), (n = void 0)),
            (function (e = {}) {
              const n = (function e(n, t) {
                  let r = -1;
                  for (; ++r < t.length; ) {
                    const o = t[r];
                    Array.isArray(o) ? e(n, o) : vn(n, o);
                  }
                  return n;
                })(
                  {
                    transforms: [],
                    canContainEols: [
                      "emphasis",
                      "fragment",
                      "heading",
                      "paragraph",
                      "strong",
                    ],
                    enter: {
                      autolink: a(w),
                      autolinkProtocol: h,
                      autolinkEmail: h,
                      atxHeading: a(k),
                      blockQuote: a(function () {
                        return { type: "blockquote", children: [] };
                      }),
                      characterEscape: h,
                      characterReference: h,
                      codeFenced: a(b),
                      codeFencedFenceInfo: u,
                      codeFencedFenceMeta: u,
                      codeIndented: a(b, u),
                      codeText: a(function () {
                        return { type: "inlineCode", value: "" };
                      }, u),
                      codeTextData: h,
                      data: h,
                      codeFlowValue: h,
                      definition: a(function () {
                        return {
                          type: "definition",
                          identifier: "",
                          label: null,
                          title: null,
                          url: "",
                        };
                      }),
                      definitionDestinationString: u,
                      definitionLabelString: u,
                      definitionTitleString: u,
                      emphasis: a(function () {
                        return { type: "emphasis", children: [] };
                      }),
                      hardBreakEscape: a(v),
                      hardBreakTrailing: a(v),
                      htmlFlow: a(x, u),
                      htmlFlowData: h,
                      htmlText: a(x, u),
                      htmlTextData: h,
                      image: a(function () {
                        return {
                          type: "image",
                          title: null,
                          url: "",
                          alt: null,
                        };
                      }),
                      label: u,
                      link: a(w),
                      listItem: a(function (e) {
                        return {
                          type: "listItem",
                          spread: e._spread,
                          checked: null,
                          children: [],
                        };
                      }),
                      listItemValue: function (e) {
                        if (i("expectingFirstListItemValue")) {
                          (this.stack[this.stack.length - 2].start =
                            Number.parseInt(this.sliceSerialize(e), 10)),
                            o("expectingFirstListItemValue");
                        }
                      },
                      listOrdered: a(S, function () {
                        o("expectingFirstListItemValue", !0);
                      }),
                      listUnordered: a(S),
                      paragraph: a(function () {
                        return { type: "paragraph", children: [] };
                      }),
                      reference: function () {
                        o("referenceType", "collapsed");
                      },
                      referenceString: u,
                      resourceDestinationString: u,
                      resourceTitleString: u,
                      setextHeading: a(k),
                      strong: a(function () {
                        return { type: "strong", children: [] };
                      }),
                      thematicBreak: a(function () {
                        return { type: "thematicBreak" };
                      }),
                    },
                    exit: {
                      atxHeading: f(),
                      atxHeadingSequence: function (e) {
                        const n = this.stack[this.stack.length - 1];
                        if (!n.depth) {
                          const t = this.sliceSerialize(e).length;
                          n.depth = t;
                        }
                      },
                      autolink: f(),
                      autolinkEmail: function (e) {
                        g.call(this, e);
                        this.stack[this.stack.length - 1].url =
                          "mailto:" + this.sliceSerialize(e);
                      },
                      autolinkProtocol: function (e) {
                        g.call(this, e);
                        this.stack[this.stack.length - 1].url =
                          this.sliceSerialize(e);
                      },
                      blockQuote: f(),
                      characterEscapeValue: g,
                      characterReferenceMarkerHexadecimal: y,
                      characterReferenceMarkerNumeric: y,
                      characterReferenceValue: function (e) {
                        const n = this.sliceSerialize(e),
                          t = i("characterReferenceType");
                        let r;
                        t
                          ? ((r = gn(
                              n,
                              "characterReferenceMarkerNumeric" === t ? 10 : 16
                            )),
                            o("characterReferenceType"))
                          : (r = $e(n));
                        const a = this.stack.pop();
                        (a.value += r), (a.position.end = l(e.end));
                      },
                      codeFenced: f(function () {
                        const e = this.resume();
                        (this.stack[this.stack.length - 1].value = e.replace(
                          /^(\r?\n|\r)|(\r?\n|\r)$/g,
                          ""
                        )),
                          o("flowCodeInside");
                      }),
                      codeFencedFence: function () {
                        if (i("flowCodeInside")) return;
                        this.buffer(), o("flowCodeInside", !0);
                      },
                      codeFencedFenceInfo: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].lang = e;
                      },
                      codeFencedFenceMeta: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].meta = e;
                      },
                      codeFlowValue: g,
                      codeIndented: f(function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].value = e.replace(
                          /(\r?\n|\r)$/g,
                          ""
                        );
                      }),
                      codeText: f(function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].value = e;
                      }),
                      codeTextData: g,
                      data: g,
                      definition: f(),
                      definitionDestinationString: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].url = e;
                      },
                      definitionLabelString: function (e) {
                        const n = this.resume(),
                          t = this.stack[this.stack.length - 1];
                        (t.label = n),
                          (t.identifier = Oe(
                            this.sliceSerialize(e)
                          ).toLowerCase());
                      },
                      definitionTitleString: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].title = e;
                      },
                      emphasis: f(),
                      hardBreakEscape: f(m),
                      hardBreakTrailing: f(m),
                      htmlFlow: f(function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].value = e;
                      }),
                      htmlFlowData: g,
                      htmlText: f(function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].value = e;
                      }),
                      htmlTextData: g,
                      image: f(function () {
                        const e = this.stack[this.stack.length - 1];
                        i("inReference")
                          ? ((e.type += "Reference"),
                            (e.referenceType =
                              i("referenceType") || "shortcut"),
                            delete e.url,
                            delete e.title)
                          : (delete e.identifier, delete e.label);
                        o("referenceType");
                      }),
                      label: function () {
                        const e = this.stack[this.stack.length - 1],
                          n = this.resume(),
                          t = this.stack[this.stack.length - 1];
                        o("inReference", !0),
                          "link" === t.type
                            ? (t.children = e.children)
                            : (t.alt = n);
                      },
                      labelText: function (e) {
                        const n = this.stack[this.stack.length - 2],
                          t = this.sliceSerialize(e);
                        (n.label = (function (e) {
                          return e.replace(mn, yn);
                        })(t)),
                          (n.identifier = Oe(t).toLowerCase());
                      },
                      lineEnding: function (e) {
                        const t = this.stack[this.stack.length - 1];
                        if (i("atHardBreak")) {
                          return (
                            (t.children[t.children.length - 1].position.end = l(
                              e.end
                            )),
                            void o("atHardBreak")
                          );
                        }
                        !i("setextHeadingSlurpLineEnding") &&
                          n.canContainEols.includes(t.type) &&
                          (h.call(this, e), g.call(this, e));
                      },
                      link: f(function () {
                        const e = this.stack[this.stack.length - 1];
                        i("inReference")
                          ? ((e.type += "Reference"),
                            (e.referenceType =
                              i("referenceType") || "shortcut"),
                            delete e.url,
                            delete e.title)
                          : (delete e.identifier, delete e.label);
                        o("referenceType");
                      }),
                      listItem: f(),
                      listOrdered: f(),
                      listUnordered: f(),
                      paragraph: f(),
                      referenceString: function (e) {
                        const n = this.resume(),
                          t = this.stack[this.stack.length - 1];
                        (t.label = n),
                          (t.identifier = Oe(
                            this.sliceSerialize(e)
                          ).toLowerCase()),
                          o("referenceType", "full");
                      },
                      resourceDestinationString: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].url = e;
                      },
                      resourceTitleString: function () {
                        const e = this.resume();
                        this.stack[this.stack.length - 1].title = e;
                      },
                      resource: function () {
                        o("inReference");
                      },
                      setextHeading: f(function () {
                        o("setextHeadingSlurpLineEnding");
                      }),
                      setextHeadingLineSequence: function (e) {
                        this.stack[this.stack.length - 1].depth =
                          61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
                      },
                      setextHeadingText: function () {
                        o("setextHeadingSlurpLineEnding", !0);
                      },
                      strong: f(),
                      thematicBreak: f(),
                    },
                  },
                  e.mdastExtensions || []
                ),
                t = {};
              return function (e) {
                let t = { type: "root", children: [] };
                const a = [],
                  s = [],
                  f = {
                    stack: [t],
                    tokenStack: a,
                    config: n,
                    enter: c,
                    exit: p,
                    buffer: u,
                    resume: d,
                    setData: o,
                    getData: i,
                  };
                let h = -1;
                for (; ++h < e.length; )
                  if (
                    "listOrdered" === e[h][1].type ||
                    "listUnordered" === e[h][1].type
                  )
                    if ("enter" === e[h][0]) s.push(h);
                    else {
                      const n = s.pop();
                      h = r(e, n, h);
                    }
                h = -1;
                for (; ++h < e.length; ) {
                  const t = n[e[h][0]];
                  bn.call(t, e[h][1].type) &&
                    t[e[h][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[h][2].sliceSerialize },
                        f
                      ),
                      e[h][1]
                    );
                }
                if (a.length > 0) {
                  const e = a[a.length - 1];
                  (e[1] || xn).call(f, void 0, e[0]);
                }
                (t.position = {
                  start: l(
                    e.length > 0
                      ? e[0][1].start
                      : { line: 1, column: 1, offset: 0 }
                  ),
                  end: l(
                    e.length > 0
                      ? e[e.length - 2][1].end
                      : { line: 1, column: 1, offset: 0 }
                  ),
                }),
                  (h = -1);
                for (; ++h < n.transforms.length; ) t = n.transforms[h](t) || t;
                return t;
              };
              function r(e, n, t) {
                let r,
                  o,
                  i,
                  l,
                  a = n - 1,
                  u = -1,
                  s = !1;
                for (; ++a <= t; ) {
                  const n = e[a];
                  if (
                    ("listUnordered" === n[1].type ||
                    "listOrdered" === n[1].type ||
                    "blockQuote" === n[1].type
                      ? ("enter" === n[0] ? u++ : u--, (l = void 0))
                      : "lineEndingBlank" === n[1].type
                      ? "enter" === n[0] &&
                        (!r || l || u || i || (i = a), (l = void 0))
                      : "linePrefix" === n[1].type ||
                        "listItemValue" === n[1].type ||
                        "listItemMarker" === n[1].type ||
                        "listItemPrefix" === n[1].type ||
                        "listItemPrefixWhitespace" === n[1].type ||
                        (l = void 0),
                    (!u &&
                      "enter" === n[0] &&
                      "listItemPrefix" === n[1].type) ||
                      (-1 === u &&
                        "exit" === n[0] &&
                        ("listUnordered" === n[1].type ||
                          "listOrdered" === n[1].type)))
                  ) {
                    if (r) {
                      let l = a;
                      for (o = void 0; l--; ) {
                        const n = e[l];
                        if (
                          "lineEnding" === n[1].type ||
                          "lineEndingBlank" === n[1].type
                        ) {
                          if ("exit" === n[0]) continue;
                          o && ((e[o][1].type = "lineEndingBlank"), (s = !0)),
                            (n[1].type = "lineEnding"),
                            (o = l);
                        } else if (
                          "linePrefix" !== n[1].type &&
                          "blockQuotePrefix" !== n[1].type &&
                          "blockQuotePrefixWhitespace" !== n[1].type &&
                          "blockQuoteMarker" !== n[1].type &&
                          "listItemIndent" !== n[1].type
                        )
                          break;
                      }
                      i && (!o || i < o) && (r._spread = !0),
                        (r.end = Object.assign(
                          {},
                          o ? e[o][1].start : n[1].end
                        )),
                        e.splice(o || a, 0, ["exit", r, n[2]]),
                        a++,
                        t++;
                    }
                    "listItemPrefix" === n[1].type &&
                      ((r = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, n[1].start),
                      }),
                      e.splice(a, 0, ["enter", r, n[2]]),
                      a++,
                      t++,
                      (i = void 0),
                      (l = !0));
                  }
                }
                return (e[n][1]._spread = s), t;
              }
              function o(e, n) {
                t[e] = n;
              }
              function i(e) {
                return t[e];
              }
              function l(e) {
                return { line: e.line, column: e.column, offset: e.offset };
              }
              function a(e, n) {
                return function (t) {
                  c.call(this, e(t), t), n && n.call(this, t);
                };
              }
              function u() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function c(e, n, t) {
                return (
                  this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([n, t]),
                  (e.position = { start: l(n.start) }),
                  e
                );
              }
              function f(e) {
                return function (n) {
                  e && e.call(this, n);
                  p.call(this, n);
                };
              }
              function p(e, n) {
                const t = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (!r)
                  throw new Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      s({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                if (r[0].type !== e.type)
                  if (n) n.call(this, e, r[0]);
                  else {
                    (r[1] || xn).call(this, e, r[0]);
                  }
                return (t.position.end = l(e.end)), t;
              }
              function d() {
                return (function (e, n) {
                  var { includeImageAlt: t = !0 } = n || {};
                  return U(e, t);
                })(this.stack.pop());
              }
              function h(e) {
                const n = this.stack[this.stack.length - 1];
                let t = n.children[n.children.length - 1];
                (t && "text" === t.type) ||
                  ((t = { type: "text", value: "" }),
                  (t.position = { start: l(e.start) }),
                  n.children.push(t)),
                  this.stack.push(t);
              }
              function g(e) {
                const n = this.stack.pop();
                (n.value += this.sliceSerialize(e)),
                  (n.position.end = l(e.end));
              }
              function m() {
                o("atHardBreak", !0);
              }
              function y(e) {
                o("characterReferenceType", e.type);
              }
              function b() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function k() {
                return { type: "heading", depth: void 0, children: [] };
              }
              function v() {
                return { type: "break" };
              }
              function x() {
                return { type: "html", value: "" };
              }
              function w() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function S(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(t)(
              (function (e) {
                for (; !fe(e); );
                return e;
              })(
                dn(t)
                  .document()
                  .write(
                    (function () {
                      let e,
                        n = 1,
                        t = "",
                        r = !0;
                      return function (o, i, l) {
                        const a = [];
                        let u, s, c, f, p;
                        (o = t + o.toString(i)),
                          (c = 0),
                          (t = ""),
                          r && (65279 === o.charCodeAt(0) && c++, (r = void 0));
                        for (; c < o.length; ) {
                          if (
                            ((hn.lastIndex = c),
                            (u = hn.exec(o)),
                            (f = u && void 0 !== u.index ? u.index : o.length),
                            (p = o.charCodeAt(f)),
                            !u)
                          ) {
                            t = o.slice(c);
                            break;
                          }
                          if (10 === p && c === f && e)
                            a.push(-3), (e = void 0);
                          else
                            switch (
                              (e && (a.push(-5), (e = void 0)),
                              c < f && (a.push(o.slice(c, f)), (n += f - c)),
                              p)
                            ) {
                              case 0:
                                a.push(65533), n++;
                                break;
                              case 9:
                                for (
                                  s = 4 * Math.ceil(n / 4), a.push(-2);
                                  n++ < s;

                                )
                                  a.push(-1);
                                break;
                              case 10:
                                a.push(-4), (n = 1);
                                break;
                              default:
                                (e = !0), (n = 1);
                            }
                          c = f + 1;
                        }
                        l && (e && a.push(-5), t && a.push(t), a.push(null));
                        return a;
                      };
                    })()(e, n, !0)
                  )
              )
            )
          );
        };
      function vn(e, n) {
        let t;
        for (t in n)
          if (bn.call(n, t)) {
            const r = "canContainEols" === t || "transforms" === t,
              o = (bn.call(e, t) ? e[t] : void 0) || (e[t] = r ? [] : {}),
              i = n[t];
            i && (r ? (e[t] = [...o, ...i]) : Object.assign(o, i));
          }
      }
      function xn(e, n) {
        throw e
          ? new Error(
              "Cannot close `" +
                e.type +
                "` (" +
                s({ start: e.start, end: e.end }) +
                "): a different token (`" +
                n.type +
                "`, " +
                s({ start: n.start, end: n.end }) +
                ") is open"
            )
          : new Error(
              "Cannot close document, a token (`" +
                n.type +
                "`, " +
                s({ start: n.start, end: n.end }) +
                ") is still open"
            );
      }
      var wn = function (e) {
          Object.assign(this, {
            Parser: (n) => {
              const t = this.data("settings");
              return kn(
                n,
                Object.assign({}, t, e, {
                  extensions: this.data("micromarkExtensions") || [],
                  mdastExtensions: this.data("fromMarkdownExtensions") || [],
                })
              );
            },
          });
        },
        Sn = function (e, n, t) {
          var r = { type: String(e) };
          return (
            null != t || ("string" != typeof n && !Array.isArray(n))
              ? Object.assign(r, n)
              : (t = n),
            Array.isArray(t)
              ? (r.children = t)
              : null != t && (r.value = String(t)),
            r
          );
        };
      const En = function (e) {
        if (null == e) return Cn;
        if ("string" == typeof e)
          return (
            (n = e),
            An(function (e) {
              return e && e.type === n;
            })
          );
        var n;
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const n = [];
                let t = -1;
                for (; ++t < e.length; ) n[t] = En(e[t]);
                return An(function (...e) {
                  let t = -1;
                  for (; ++t < n.length; ) if (n[t].call(this, ...e)) return !0;
                  return !1;
                });
              })(e)
            : (function (e) {
                return An(function (n) {
                  let t;
                  for (t in e) if (n[t] !== e[t]) return !1;
                  return !0;
                });
              })(e);
        if ("function" == typeof e) return An(e);
        throw new Error("Expected function, string, or object as test");
      };
      function An(e) {
        return function (...n) {
          return Boolean(e.call(this, ...n));
        };
      }
      function Cn() {
        return !0;
      }
      const Tn = function (e, n, t, r) {
        "function" == typeof n &&
          "function" != typeof t &&
          ((r = t), (t = n), (n = null));
        const o = En(n),
          i = r ? -1 : 1;
        !(function e(l, a, u) {
          const s = "object" == typeof l && null !== l ? l : {};
          let c;
          "string" == typeof s.type &&
            ((c =
              "string" == typeof s.tagName
                ? s.tagName
                : "string" == typeof s.name
                ? s.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + s.type + (c ? "<" + c + ">" : "") + ")",
            }));
          return f;
          function f() {
            let s,
              c,
              f,
              p = [];
            if (
              (!n || o(l, a, u[u.length - 1] || null)) &&
              ((p = (function (e) {
                if (Array.isArray(e)) return e;
                if ("number" == typeof e) return [!0, e];
                return [e];
              })(t(l, u))),
              !1 === p[0])
            )
              return p;
            if (l.children && "skip" !== p[0])
              for (
                c = (r ? l.children.length : -1) + i, f = u.concat(l);
                c > -1 && c < l.children.length;

              ) {
                if (((s = e(l.children[c], c, f)()), !1 === s[0])) return s;
                c = "number" == typeof s[1] ? s[1] : c + i;
              }
            return p;
          }
        })(e, null, [])();
      };
      const Ln = function (e, n, t, r) {
        "function" == typeof n &&
          "function" != typeof t &&
          ((r = t), (t = n), (n = null)),
          Tn(
            e,
            n,
            function (e, n) {
              const r = n[n.length - 1];
              return t(e, r ? r.children.indexOf(e) : null, r);
            },
            r
          );
      };
      var Dn = Fn("start"),
        qn = Fn("end");
      function Fn(e) {
        return function (n) {
          var t = (n && n.position && n.position[e]) || {};
          return {
            line: t.line || null,
            column: t.column || null,
            offset: t.offset > -1 ? t.offset : null,
          };
        };
      }
      const Pn = function (e, n, t, r) {
        "function" == typeof n &&
          "function" != typeof t &&
          ((r = t), (t = n), (n = null));
        var o = En(n),
          i = r ? -1 : 1;
        !(function e(l, a, u) {
          var s,
            c = "object" == typeof l && null !== l ? l : {};
          "string" == typeof c.type &&
            ((s =
              "string" == typeof c.tagName
                ? c.tagName
                : "string" == typeof c.name
                ? c.name
                : void 0),
            Object.defineProperty(f, "name", {
              value: "node (" + c.type + (s ? "<" + s + ">" : "") + ")",
            }));
          return f;
          function f() {
            var s,
              c,
              f,
              p = [];
            if (
              (!n || o(l, a, u[u.length - 1] || null)) &&
              !1 ===
                (p = (function (e) {
                  if (Array.isArray(e)) return e;
                  if ("number" == typeof e) return [!0, e];
                  return [e];
                })(t(l, u)))[0]
            )
              return p;
            if (l.children && "skip" !== p[0])
              for (
                c = (r ? l.children.length : -1) + i, f = u.concat(l);
                c > -1 && c < l.children.length;

              ) {
                if (!1 === (s = e(l.children[c], c, f)())[0]) return s;
                c = "number" == typeof s[1] ? s[1] : c + i;
              }
            return p;
          }
        })(e, null, [])();
      };
      const On = {}.hasOwnProperty;
      function In(e) {
        const n = Object.create(null);
        if (!e || !e.type)
          throw new Error("mdast-util-definitions expected node");
        var t, r, o;
        return (
          (r = function (e) {
            const t = Rn(e.identifier);
            t && !On.call(n, t) && (n[t] = e);
          }),
          "function" == typeof (t = "definition") &&
            "function" != typeof r &&
            ((o = r), (r = t), (t = null)),
          Pn(
            e,
            t,
            function (e, n) {
              var t = n[n.length - 1];
              return r(e, t ? t.children.indexOf(e) : null, t);
            },
            o
          ),
          function (e) {
            const t = Rn(e);
            return t && On.call(n, t) ? n[t] : null;
          }
        );
      }
      function Rn(e) {
        return String(e || "").toUpperCase();
      }
      const Bn = {}.hasOwnProperty;
      function zn(e, n) {
        const t = n.data || {};
        return "value" in n &&
          !(
            Bn.call(t, "hName") ||
            Bn.call(t, "hProperties") ||
            Bn.call(t, "hChildren")
          )
          ? e.augment(n, Sn("text", n.value))
          : e(n, "div", Un(e, n));
      }
      function Nn(e, n, t) {
        const r = n && n.type;
        let o;
        if (!r) throw new Error("Expected node, got `" + n + "`");
        return (
          (o = Bn.call(e.handlers, r)
            ? e.handlers[r]
            : e.passThrough && e.passThrough.includes(r)
            ? Mn
            : e.unknownHandler),
          ("function" == typeof o ? o : zn)(e, n, t)
        );
      }
      function Mn(e, n) {
        return "children" in n ? { ...n, children: Un(e, n) } : n;
      }
      function Un(e, n) {
        const t = [];
        if ("children" in n) {
          const r = n.children;
          let o = -1;
          for (; ++o < r.length; ) {
            const i = Nn(e, r[o], n);
            if (i) {
              if (
                o &&
                "break" === r[o - 1].type &&
                (Array.isArray(i) ||
                  "text" !== i.type ||
                  (i.value = i.value.replace(/^\s+/, "")),
                !Array.isArray(i) && "element" === i.type)
              ) {
                const e = i.children[0];
                e &&
                  "text" === e.type &&
                  (e.value = e.value.replace(/^\s+/, ""));
              }
              Array.isArray(i) ? t.push(...i) : t.push(i);
            }
          }
        }
        return t;
      }
      const jn = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
      function Hn(e, n) {
        const t = (function (e) {
          return e.replace(/["&<>]/g, function (e) {
            return "&" + jn[e] + ";";
          });
        })(
          (function (e) {
            const n = [];
            let t = -1,
              r = 0,
              o = 0;
            for (; ++t < e.length; ) {
              const i = e.charCodeAt(t);
              let l = "";
              if (37 === i && K(e.charCodeAt(t + 1)) && K(e.charCodeAt(t + 2)))
                o = 2;
              else if (i < 128)
                /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
                  (l = String.fromCharCode(i));
              else if (i > 55295 && i < 57344) {
                const n = e.charCodeAt(t + 1);
                i < 56320 && n > 56319 && n < 57344
                  ? ((l = String.fromCharCode(i, n)), (o = 1))
                  : (l = "�");
              } else l = String.fromCharCode(i);
              l &&
                (n.push(e.slice(r, t), encodeURIComponent(l)),
                (r = t + o + 1),
                (l = "")),
                o && ((t += o), (o = 0));
            }
            return n.join("") + e.slice(r);
          })(e || "")
        );
        if (!n) return t;
        const r = t.indexOf(":"),
          o = t.indexOf("?"),
          i = t.indexOf("#"),
          l = t.indexOf("/");
        return r < 0 ||
          (l > -1 && r > l) ||
          (o > -1 && r > o) ||
          (i > -1 && r > i) ||
          n.test(t.slice(0, r))
          ? t
          : "";
      }
      function Vn(e, n) {
        const t = [];
        let r = -1;
        for (n && t.push(Sn("text", "\n")); ++r < e.length; )
          r && t.push(Sn("text", "\n")), t.push(e[r]);
        return n && e.length > 0 && t.push(Sn("text", "\n")), t;
      }
      function _n(e, n) {
        const t = String(n.identifier),
          r = Hn(t.toLowerCase()),
          o = e.footnoteOrder.indexOf(t);
        let i;
        -1 === o
          ? (e.footnoteOrder.push(t),
            (e.footnoteCounts[t] = 1),
            (i = e.footnoteOrder.length))
          : (e.footnoteCounts[t]++, (i = o + 1));
        const l = e.footnoteCounts[t];
        return e(n, "sup", [
          e(
            n.position,
            "a",
            {
              href: "#" + e.clobberPrefix + "fn-" + r,
              id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: "footnote-label",
            },
            [Sn("text", String(i))]
          ),
        ]);
      }
      var Gn = t(532),
        $n = t.n(Gn);
      function Wn(e, n) {
        const t = n.referenceType;
        let r = "]";
        if (
          ("collapsed" === t
            ? (r += "[]")
            : "full" === t && (r += "[" + (n.label || n.identifier) + "]"),
          "imageReference" === n.type)
        )
          return Sn("text", "![" + n.alt + r);
        const o = Un(e, n),
          i = o[0];
        i && "text" === i.type
          ? (i.value = "[" + i.value)
          : o.unshift(Sn("text", "["));
        const l = o[o.length - 1];
        return (
          l && "text" === l.type ? (l.value += r) : o.push(Sn("text", r)), o
        );
      }
      function Qn(e) {
        const n = e.spread;
        return null == n ? e.children.length > 1 : n;
      }
      const Yn = {
        blockquote: function (e, n) {
          return e(n, "blockquote", Vn(Un(e, n), !0));
        },
        break: function (e, n) {
          return [e(n, "br"), Sn("text", "\n")];
        },
        code: function (e, n) {
          const t = n.value ? n.value + "\n" : "",
            r = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
            o = {};
          r && (o.className = ["language-" + r]);
          const i = e(n, "code", o, [Sn("text", t)]);
          return (
            n.meta && (i.data = { meta: n.meta }), e(n.position, "pre", [i])
          );
        },
        delete: function (e, n) {
          return e(n, "del", Un(e, n));
        },
        emphasis: function (e, n) {
          return e(n, "em", Un(e, n));
        },
        footnoteReference: _n,
        footnote: function (e, n) {
          const t = e.footnoteById;
          let r = 1;
          for (; r in t; ) r++;
          const o = String(r);
          return (
            (t[o] = {
              type: "footnoteDefinition",
              identifier: o,
              children: [{ type: "paragraph", children: n.children }],
              position: n.position,
            }),
            _n(e, {
              type: "footnoteReference",
              identifier: o,
              position: n.position,
            })
          );
        },
        heading: function (e, n) {
          return e(n, "h" + n.depth, Un(e, n));
        },
        html: function (e, n) {
          return e.dangerous ? e.augment(n, Sn("raw", n.value)) : null;
        },
        imageReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Wn(e, n);
          const r = { src: $n()(t.url || ""), alt: n.alt };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "img", r)
          );
        },
        image: function (e, n) {
          const t = { src: $n()(n.url), alt: n.alt };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "img", t)
          );
        },
        inlineCode: function (e, n) {
          return e(n, "code", [Sn("text", n.value.replace(/\r?\n|\r/g, " "))]);
        },
        linkReference: function (e, n) {
          const t = e.definition(n.identifier);
          if (!t) return Wn(e, n);
          const r = { href: $n()(t.url || "") };
          return (
            null !== t.title && void 0 !== t.title && (r.title = t.title),
            e(n, "a", r, Un(e, n))
          );
        },
        link: function (e, n) {
          const t = { href: $n()(n.url) };
          return (
            null !== n.title && void 0 !== n.title && (t.title = n.title),
            e(n, "a", t, Un(e, n))
          );
        },
        listItem: function (e, n, t) {
          const r = Un(e, n),
            o = t
              ? (function (e) {
                  let n = e.spread;
                  const t = e.children;
                  let r = -1;
                  for (; !n && ++r < t.length; ) n = Qn(t[r]);
                  return Boolean(n);
                })(t)
              : Qn(n),
            i = {},
            l = [];
          if ("boolean" == typeof n.checked) {
            let t;
            r[0] && "element" === r[0].type && "p" === r[0].tagName
              ? (t = r[0])
              : ((t = e(null, "p", [])), r.unshift(t)),
              t.children.length > 0 && t.children.unshift(Sn("text", " ")),
              t.children.unshift(
                e(null, "input", {
                  type: "checkbox",
                  checked: n.checked,
                  disabled: !0,
                })
              ),
              (i.className = ["task-list-item"]);
          }
          let a = -1;
          for (; ++a < r.length; ) {
            const e = r[a];
            (o || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
              l.push(Sn("text", "\n")),
              "element" !== e.type || "p" !== e.tagName || o
                ? l.push(e)
                : l.push(...e.children);
          }
          const u = r[r.length - 1];
          return (
            !u ||
              (!o && "tagName" in u && "p" === u.tagName) ||
              l.push(Sn("text", "\n")),
            e(n, "li", i, l)
          );
        },
        list: function (e, n) {
          const t = {},
            r = n.ordered ? "ol" : "ul",
            o = Un(e, n);
          let i = -1;
          for (
            "number" == typeof n.start && 1 !== n.start && (t.start = n.start);
            ++i < o.length;

          ) {
            const e = o[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              t.className = ["contains-task-list"];
              break;
            }
          }
          return e(n, r, t, Vn(o, !0));
        },
        paragraph: function (e, n) {
          return e(n, "p", Un(e, n));
        },
        root: function (e, n) {
          return e.augment(n, Sn("root", Vn(Un(e, n))));
        },
        strong: function (e, n) {
          return e(n, "strong", Un(e, n));
        },
        table: function (e, n) {
          const t = n.children;
          let r = -1;
          const o = n.align || [],
            i = [];
          for (; ++r < t.length; ) {
            const l = t[r].children,
              a = 0 === r ? "th" : "td",
              u = [];
            let s = -1;
            const c = n.align ? o.length : l.length;
            for (; ++s < c; ) {
              const n = l[s];
              u.push(e(n, a, { align: o[s] }, n ? Un(e, n) : []));
            }
            i[r] = e(t[r], "tr", Vn(u, !0));
          }
          return e(
            n,
            "table",
            Vn(
              [e(i[0].position, "thead", Vn([i[0]], !0))].concat(
                i[1]
                  ? e(
                      { start: Dn(i[1]), end: qn(i[i.length - 1]) },
                      "tbody",
                      Vn(i.slice(1), !0)
                    )
                  : []
              ),
              !0
            )
          );
        },
        text: function (e, n) {
          return e.augment(
            n,
            Sn("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1"))
          );
        },
        thematicBreak: function (e, n) {
          return e(n, "hr");
        },
        toml: Kn,
        yaml: Kn,
        definition: Kn,
        footnoteDefinition: Kn,
      };
      function Kn() {
        return null;
      }
      const Jn = {}.hasOwnProperty;
      function Zn(e, n) {
        const t = (function (e, n) {
            const t = n || {},
              r = t.allowDangerousHtml || !1,
              o = {};
            return (
              (l.dangerous = r),
              (l.clobberPrefix =
                void 0 === t.clobberPrefix || null === t.clobberPrefix
                  ? "user-content-"
                  : t.clobberPrefix),
              (l.footnoteLabel = t.footnoteLabel || "Footnotes"),
              (l.footnoteBackLabel = t.footnoteBackLabel || "Back to content"),
              (l.definition = In(e)),
              (l.footnoteById = o),
              (l.footnoteOrder = []),
              (l.footnoteCounts = {}),
              (l.augment = i),
              (l.handlers = { ...Yn, ...t.handlers }),
              (l.unknownHandler = t.unknownHandler),
              (l.passThrough = t.passThrough),
              Ln(e, "footnoteDefinition", (e) => {
                const n = String(e.identifier).toUpperCase();
                Jn.call(o, n) || (o[n] = e);
              }),
              l
            );
            function i(e, n) {
              if (e && "data" in e && e.data) {
                const t = e.data;
                t.hName &&
                  ("element" !== n.type &&
                    (n = {
                      type: "element",
                      tagName: "",
                      properties: {},
                      children: [],
                    }),
                  (n.tagName = t.hName)),
                  "element" === n.type &&
                    t.hProperties &&
                    (n.properties = { ...n.properties, ...t.hProperties }),
                  "children" in n &&
                    n.children &&
                    t.hChildren &&
                    (n.children = t.hChildren);
              }
              if (e) {
                const r = "type" in e ? e : { position: e };
                (t = r) &&
                  t.position &&
                  t.position.start &&
                  t.position.start.line &&
                  t.position.start.column &&
                  t.position.end &&
                  t.position.end.line &&
                  t.position.end.column &&
                  (n.position = { start: Dn(r), end: qn(r) });
              }
              var t;
              return n;
            }
            function l(e, n, t, r) {
              return (
                Array.isArray(t) && ((r = t), (t = {})),
                i(e, {
                  type: "element",
                  tagName: n,
                  properties: t || {},
                  children: r || [],
                })
              );
            }
          })(e, n),
          r = Nn(t, e, null),
          o = (function (e) {
            let n = -1;
            const t = [];
            for (; ++n < e.footnoteOrder.length; ) {
              const r = e.footnoteById[e.footnoteOrder[n].toUpperCase()];
              if (!r) continue;
              const o = Un(e, r),
                i = String(r.identifier),
                l = Hn(i.toLowerCase());
              let a = 0;
              const u = [];
              for (; ++a <= e.footnoteCounts[i]; ) {
                const n = {
                  type: "element",
                  tagName: "a",
                  properties: {
                    href:
                      "#" +
                      e.clobberPrefix +
                      "fnref-" +
                      l +
                      (a > 1 ? "-" + a : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel,
                  },
                  children: [{ type: "text", value: "↩" }],
                };
                a > 1 &&
                  n.children.push({
                    type: "element",
                    tagName: "sup",
                    children: [{ type: "text", value: String(a) }],
                  }),
                  u.length > 0 && u.push({ type: "text", value: " " }),
                  u.push(n);
              }
              const s = o[o.length - 1];
              if (s && "element" === s.type && "p" === s.tagName) {
                const e = s.children[s.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : s.children.push({ type: "text", value: " " }),
                  s.children.push(...u);
              } else o.push(...u);
              const c = {
                type: "element",
                tagName: "li",
                properties: { id: e.clobberPrefix + "fn-" + l },
                children: Vn(o, !0),
              };
              r.position && (c.position = r.position), t.push(c);
            }
            return 0 === t.length
              ? null
              : {
                  type: "element",
                  tagName: "section",
                  properties: { dataFootnotes: !0, className: ["footnotes"] },
                  children: [
                    {
                      type: "element",
                      tagName: "h2",
                      properties: {
                        id: "footnote-label",
                        className: ["sr-only"],
                      },
                      children: [Sn("text", e.footnoteLabel)],
                    },
                    { type: "text", value: "\n" },
                    {
                      type: "element",
                      tagName: "ol",
                      properties: {},
                      children: Vn(t, !0),
                    },
                    { type: "text", value: "\n" },
                  ],
                };
          })(t);
        return (
          o && r.children.push(Sn("text", "\n"), o),
          Array.isArray(r) ? { type: "root", children: r } : r
        );
      }
      var Xn = function (e, n) {
        return e && "run" in e
          ? (function (e, n) {
              return (t, r, o) => {
                e.run(Zn(t, n), r, (e) => {
                  o(e);
                });
              };
            })(e, n)
          : (function (e) {
              return (n) => Zn(n, e);
            })(e || n);
      };
      var et = t(57),
        nt = t.n(et);
      class tt {
        constructor(e, n, t) {
          (this.property = e), (this.normal = n), t && (this.space = t);
        }
      }
      function rt(e, n) {
        const t = {},
          r = {};
        let o = -1;
        for (; ++o < e.length; )
          Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
        return new tt(t, r, n);
      }
      function ot(e) {
        return e.toLowerCase();
      }
      (tt.prototype.property = {}),
        (tt.prototype.normal = {}),
        (tt.prototype.space = null);
      class it {
        constructor(e, n) {
          (this.property = e), (this.attribute = n);
        }
      }
      (it.prototype.space = null),
        (it.prototype.boolean = !1),
        (it.prototype.booleanish = !1),
        (it.prototype.overloadedBoolean = !1),
        (it.prototype.number = !1),
        (it.prototype.commaSeparated = !1),
        (it.prototype.spaceSeparated = !1),
        (it.prototype.commaOrSpaceSeparated = !1),
        (it.prototype.mustUseProperty = !1),
        (it.prototype.defined = !1);
      let lt = 0;
      const at = ht(),
        ut = ht(),
        st = ht(),
        ct = ht(),
        ft = ht(),
        pt = ht(),
        dt = ht();
      function ht() {
        return 2 ** ++lt;
      }
      const gt = Object.keys(o);
      class mt extends it {
        constructor(e, n, t, r) {
          let i = -1;
          if ((super(e, n), yt(this, "space", r), "number" == typeof t))
            for (; ++i < gt.length; ) {
              const e = gt[i];
              yt(this, gt[i], (t & o[e]) === o[e]);
            }
        }
      }
      function yt(e, n, t) {
        t && (e[n] = t);
      }
      mt.prototype.defined = !0;
      const bt = {}.hasOwnProperty;
      function kt(e) {
        const n = {},
          t = {};
        let r;
        for (r in e.properties)
          if (bt.call(e.properties, r)) {
            const o = e.properties[r],
              i = new mt(r, e.transform(e.attributes || {}, r), o, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(r) &&
              (i.mustUseProperty = !0),
              (n[r] = i),
              (t[ot(r)] = r),
              (t[ot(i.attribute)] = r);
          }
        return new tt(n, t, e.space);
      }
      const vt = kt({
          space: "xlink",
          transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        xt = kt({
          space: "xml",
          transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function wt(e, n) {
        return n in e ? e[n] : n;
      }
      function St(e, n) {
        return wt(e, n.toLowerCase());
      }
      const Et = kt({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: St,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        At = kt({
          transform: (e, n) =>
            "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: ut,
            ariaAutoComplete: null,
            ariaBusy: ut,
            ariaChecked: ut,
            ariaColCount: ct,
            ariaColIndex: ct,
            ariaColSpan: ct,
            ariaControls: ft,
            ariaCurrent: null,
            ariaDescribedBy: ft,
            ariaDetails: null,
            ariaDisabled: ut,
            ariaDropEffect: ft,
            ariaErrorMessage: null,
            ariaExpanded: ut,
            ariaFlowTo: ft,
            ariaGrabbed: ut,
            ariaHasPopup: null,
            ariaHidden: ut,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: ft,
            ariaLevel: ct,
            ariaLive: null,
            ariaModal: ut,
            ariaMultiLine: ut,
            ariaMultiSelectable: ut,
            ariaOrientation: null,
            ariaOwns: ft,
            ariaPlaceholder: null,
            ariaPosInSet: ct,
            ariaPressed: ut,
            ariaReadOnly: ut,
            ariaRelevant: null,
            ariaRequired: ut,
            ariaRoleDescription: ft,
            ariaRowCount: ct,
            ariaRowIndex: ct,
            ariaRowSpan: ct,
            ariaSelected: ut,
            ariaSetSize: ct,
            ariaSort: null,
            ariaValueMax: ct,
            ariaValueMin: ct,
            ariaValueNow: ct,
            ariaValueText: null,
            role: null,
          },
        }),
        Ct = kt({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: St,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: pt,
            acceptCharset: ft,
            accessKey: ft,
            action: null,
            allow: null,
            allowFullScreen: at,
            allowPaymentRequest: at,
            allowUserMedia: at,
            alt: null,
            as: null,
            async: at,
            autoCapitalize: null,
            autoComplete: ft,
            autoFocus: at,
            autoPlay: at,
            capture: at,
            charSet: null,
            checked: at,
            cite: null,
            className: ft,
            cols: ct,
            colSpan: null,
            content: null,
            contentEditable: ut,
            controls: at,
            controlsList: ft,
            coords: ct | pt,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: at,
            defer: at,
            dir: null,
            dirName: null,
            disabled: at,
            download: st,
            draggable: ut,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: at,
            formTarget: null,
            headers: ft,
            height: ct,
            hidden: at,
            high: ct,
            href: null,
            hrefLang: null,
            htmlFor: ft,
            httpEquiv: ft,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: at,
            itemId: null,
            itemProp: ft,
            itemRef: ft,
            itemScope: at,
            itemType: ft,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: at,
            low: ct,
            manifest: null,
            max: null,
            maxLength: ct,
            media: null,
            method: null,
            min: null,
            minLength: ct,
            multiple: at,
            muted: at,
            name: null,
            nonce: null,
            noModule: at,
            noValidate: at,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: at,
            optimum: ct,
            pattern: null,
            ping: ft,
            placeholder: null,
            playsInline: at,
            poster: null,
            preload: null,
            readOnly: at,
            referrerPolicy: null,
            rel: ft,
            required: at,
            reversed: at,
            rows: ct,
            rowSpan: ct,
            sandbox: ft,
            scope: null,
            scoped: at,
            seamless: at,
            selected: at,
            shape: null,
            size: ct,
            sizes: null,
            slot: null,
            span: ct,
            spellCheck: ut,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: ct,
            step: null,
            style: null,
            tabIndex: ct,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: at,
            useMap: null,
            value: ut,
            width: ct,
            wrap: null,
            align: null,
            aLink: null,
            archive: ft,
            axis: null,
            background: null,
            bgColor: null,
            border: ct,
            borderColor: null,
            bottomMargin: ct,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: at,
            declare: at,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: ct,
            leftMargin: ct,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: ct,
            marginWidth: ct,
            noResize: at,
            noHref: at,
            noShade: at,
            noWrap: at,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: ct,
            rules: null,
            scheme: null,
            scrolling: ut,
            standby: null,
            summary: null,
            text: null,
            topMargin: ct,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: ct,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: at,
            disableRemotePlayback: at,
            prefix: null,
            property: null,
            results: ct,
            security: null,
            unselectable: null,
          },
        }),
        Tt = kt({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: wt,
          properties: {
            about: dt,
            accentHeight: ct,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: ct,
            amplitude: ct,
            arabicForm: null,
            ascent: ct,
            attributeName: null,
            attributeType: null,
            azimuth: ct,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: ct,
            by: null,
            calcMode: null,
            capHeight: ct,
            className: ft,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: ct,
            diffuseConstant: ct,
            direction: null,
            display: null,
            dur: null,
            divisor: ct,
            dominantBaseline: null,
            download: at,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: ct,
            enableBackground: null,
            end: null,
            event: null,
            exponent: ct,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: ct,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: pt,
            g2: pt,
            glyphName: pt,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: ct,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: ct,
            horizOriginX: ct,
            horizOriginY: ct,
            id: null,
            ideographic: ct,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: ct,
            k: ct,
            k1: ct,
            k2: ct,
            k3: ct,
            k4: ct,
            kernelMatrix: dt,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: ct,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: ct,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: ct,
            overlineThickness: ct,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: ct,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: ft,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: ct,
            pointsAtY: ct,
            pointsAtZ: ct,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: dt,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: dt,
            rev: dt,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: dt,
            requiredFeatures: dt,
            requiredFonts: dt,
            requiredFormats: dt,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: ct,
            specularExponent: ct,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: ct,
            strikethroughThickness: ct,
            string: null,
            stroke: null,
            strokeDashArray: dt,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: ct,
            strokeOpacity: ct,
            strokeWidth: null,
            style: null,
            surfaceScale: ct,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: dt,
            tabIndex: ct,
            tableValues: null,
            target: null,
            targetX: ct,
            targetY: ct,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: dt,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: ct,
            underlineThickness: ct,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: ct,
            values: null,
            vAlphabetic: ct,
            vMathematical: ct,
            vectorEffect: null,
            vHanging: ct,
            vIdeographic: ct,
            version: null,
            vertAdvY: ct,
            vertOriginX: ct,
            vertOriginY: ct,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: ct,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        Lt = rt([xt, vt, Et, At, Ct], "html"),
        Dt = rt([xt, vt, Et, At, Tt], "svg");
      function qt(e) {
        if (e.allowedElements && e.disallowedElements)
          throw new TypeError(
            "Only one of `allowedElements` and `disallowedElements` should be defined"
          );
        if (e.allowedElements || e.disallowedElements || e.allowElement)
          return (n) => {
            Ln(n, "element", (n, t, r) => {
              const o = r;
              let i;
              if (
                (e.allowedElements
                  ? (i = !e.allowedElements.includes(n.tagName))
                  : e.disallowedElements &&
                    (i = e.disallowedElements.includes(n.tagName)),
                !i &&
                  e.allowElement &&
                  "number" == typeof t &&
                  (i = !e.allowElement(n, t, o)),
                i && "number" == typeof t)
              )
                return (
                  e.unwrapDisallowed && n.children
                    ? o.children.splice(t, 1, ...n.children)
                    : o.children.splice(t, 1),
                  t
                );
            });
          };
      }
      const Ft = ["http", "https", "mailto", "tel"];
      var Pt = t(586),
        Ot = t.n(Pt);
      const It = /^data[-\w.:]+$/i,
        Rt = /-[a-z]/g,
        Bt = /[A-Z]/g;
      function zt(e) {
        return "-" + e.toLowerCase();
      }
      function Nt(e) {
        return e.charAt(1).toUpperCase();
      }
      const Mt = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var Ut = t(588),
        jt = t.n(Ut);
      const Ht = {}.hasOwnProperty,
        Vt = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
      function _t(e, n) {
        const t = [];
        let r,
          o = -1;
        for (; ++o < n.children.length; )
          (r = n.children[o]),
            "element" === r.type
              ? t.push(Gt(e, r, o, n))
              : "text" === r.type
              ? ("element" === n.type &&
                  Vt.has(n.tagName) &&
                  ((l = void 0),
                  "string" ==
                    typeof (l =
                      (i = r) && "object" == typeof i && "text" === i.type
                        ? i.value || ""
                        : i) && "" === l.replace(/[ \t\n\f\r]/g, ""))) ||
                t.push(r.value)
              : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
        var i, l;
        return t;
      }
      function Gt(e, n, t, r) {
        const o = e.options,
          i = e.schema,
          a = n.tagName,
          u = {};
        let s,
          c = i;
        if (
          ("html" === i.space && "svg" === a && ((c = Dt), (e.schema = c)),
          n.properties)
        )
          for (s in n.properties)
            Ht.call(n.properties, s) && Wt(u, s, n.properties[s], e);
        ("ol" !== a && "ul" !== a) || e.listDepth++;
        const f = _t(e, n);
        ("ol" !== a && "ul" !== a) || e.listDepth--, (e.schema = i);
        const p = n.position || {
            start: { line: null, column: null, offset: null },
            end: { line: null, column: null, offset: null },
          },
          d = o.components && Ht.call(o.components, a) ? o.components[a] : a,
          h = "string" == typeof d || d === l.a.Fragment;
        if (!Ot.a.isValidElementType(d))
          throw new TypeError(
            `Component for name \`${a}\` not defined or is not renderable`
          );
        if (
          ((u.key = [a, p.start.line, p.start.column, t].join("-")),
          "a" === a &&
            o.linkTarget &&
            (u.target =
              "function" == typeof o.linkTarget
                ? o.linkTarget(
                    String(u.href || ""),
                    n.children,
                    "string" == typeof u.title ? u.title : null
                  )
                : o.linkTarget),
          "a" === a &&
            o.transformLinkUri &&
            (u.href = o.transformLinkUri(
              String(u.href || ""),
              n.children,
              "string" == typeof u.title ? u.title : null
            )),
          h ||
            "code" !== a ||
            "element" !== r.type ||
            "pre" === r.tagName ||
            (u.inline = !0),
          h ||
            ("h1" !== a &&
              "h2" !== a &&
              "h3" !== a &&
              "h4" !== a &&
              "h5" !== a &&
              "h6" !== a) ||
            (u.level = Number.parseInt(a.charAt(1), 10)),
          "img" === a &&
            o.transformImageUri &&
            (u.src = o.transformImageUri(
              String(u.src || ""),
              String(u.alt || ""),
              "string" == typeof u.title ? u.title : null
            )),
          !h && "li" === a && "element" === r.type)
        ) {
          const e = (function (e) {
            let n = -1;
            for (; ++n < e.children.length; ) {
              const t = e.children[n];
              if ("element" === t.type && "input" === t.tagName) return t;
            }
            return null;
          })(n);
          (u.checked =
            e && e.properties ? Boolean(e.properties.checked) : null),
            (u.index = $t(r, n)),
            (u.ordered = "ol" === r.tagName);
        }
        var g;
        return (
          h ||
            ("ol" !== a && "ul" !== a) ||
            ((u.ordered = "ol" === a), (u.depth = e.listDepth)),
          ("td" !== a && "th" !== a) ||
            (u.align &&
              (u.style || (u.style = {}),
              (u.style.textAlign = u.align),
              delete u.align),
            h || (u.isHeader = "th" === a)),
          h ||
            "tr" !== a ||
            "element" !== r.type ||
            (u.isHeader = Boolean("thead" === r.tagName)),
          o.sourcePos &&
            (u["data-sourcepos"] = [
              (g = p).start.line,
              ":",
              g.start.column,
              "-",
              g.end.line,
              ":",
              g.end.column,
            ]
              .map((e) => String(e))
              .join("")),
          !h && o.rawSourcePos && (u.sourcePosition = n.position),
          !h &&
            o.includeElementIndex &&
            ((u.index = $t(r, n)), (u.siblingCount = $t(r))),
          h || (u.node = n),
          f.length > 0 ? l.a.createElement(d, u, f) : l.a.createElement(d, u)
        );
      }
      function $t(e, n) {
        let t = -1,
          r = 0;
        for (; ++t < e.children.length && e.children[t] !== n; )
          "element" === e.children[t].type && r++;
        return r;
      }
      function Wt(e, n, t, r) {
        const o = (function (e, n) {
          const t = ot(n);
          let r = n,
            o = it;
          if (t in e.normal) return e.property[e.normal[t]];
          if (t.length > 4 && "data" === t.slice(0, 4) && It.test(n)) {
            if ("-" === n.charAt(4)) {
              const e = n.slice(5).replace(Rt, Nt);
              r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
            } else {
              const e = n.slice(4);
              if (!Rt.test(e)) {
                let t = e.replace(Bt, zt);
                "-" !== t.charAt(0) && (t = "-" + t), (n = "data" + t);
              }
            }
            o = mt;
          }
          return new o(r, n);
        })(r.schema, n);
        let i = t;
        var l, a, u;
        null != i &&
          i == i &&
          (Array.isArray(i) &&
            (i = o.commaSeparated
              ? ((u = a || {}),
                "" === (l = i)[l.length - 1] && (l = l.concat("")),
                l
                  .join(
                    (u.padRight ? " " : "") +
                      "," +
                      (!1 === u.padLeft ? "" : " ")
                  )
                  .trim())
              : (function (e) {
                  return e.join(" ").trim();
                })(i)),
          "style" === o.property &&
            "string" == typeof i &&
            (i = (function (e) {
              const n = {};
              try {
                jt()(e, function (e, t) {
                  const r = "-ms-" === e.slice(0, 4) ? "ms-" + e.slice(4) : e;
                  n[r.replace(/-([a-z])/g, Qt)] = t;
                });
              } catch {}
              return n;
            })(i)),
          o.space && o.property
            ? (e[Ht.call(Mt, o.property) ? Mt[o.property] : o.property] = i)
            : o.attribute && (e[o.attribute] = i));
      }
      function Qt(e, n) {
        return n.toUpperCase();
      }
      const Yt = {}.hasOwnProperty,
        Kt = {
          plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
          renderers: { to: "components", id: "change-renderers-to-components" },
          astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
          allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
          escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
          source: { to: "children", id: "change-source-to-children" },
          allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
          },
          includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
        };
      function Jt(e) {
        for (const i in Kt)
          if (Yt.call(Kt, i) && Yt.call(e, i)) {
            const e = Kt[i];
            console.warn(
              `[react-markdown] Warning: please ${
                e.to ? `use \`${e.to}\` instead of` : "remove"
              } \`${i}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
                e.id
              }> for more info)`
            ),
              delete Kt[i];
          }
        const n = F()
            .use(wn)
            .use(e.remarkPlugins || [])
            .use(Xn, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(qt, e),
          t = new v();
        "string" == typeof e.children
          ? (t.value = e.children)
          : void 0 !== e.children &&
            null !== e.children &&
            console.warn(
              `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
            );
        const r = n.runSync(n.parse(t), t);
        if ("root" !== r.type) throw new TypeError("Expected a `root` node");
        let o = l.a.createElement(
          l.a.Fragment,
          {},
          _t({ options: e, schema: Lt, listDepth: 0 }, r)
        );
        return (
          e.className &&
            (o = l.a.createElement("div", { className: e.className }, o)),
          o
        );
      }
      (Jt.defaultProps = {
        transformLinkUri: function (e) {
          const n = (e || "").trim(),
            t = n.charAt(0);
          if ("#" === t || "/" === t) return n;
          const r = n.indexOf(":");
          if (-1 === r) return n;
          let o = -1;
          for (; ++o < Ft.length; ) {
            const e = Ft[o];
            if (r === e.length && n.slice(0, e.length).toLowerCase() === e)
              return n;
          }
          return (
            (o = n.indexOf("?")),
            -1 !== o && r > o
              ? n
              : ((o = n.indexOf("#")),
                -1 !== o && r > o ? n : "javascript:void(0)")
          );
        },
      }),
        (Jt.propTypes = {
          children: nt.a.string,
          className: nt.a.string,
          allowElement: nt.a.func,
          allowedElements: nt.a.arrayOf(nt.a.string),
          disallowedElements: nt.a.arrayOf(nt.a.string),
          unwrapDisallowed: nt.a.bool,
          remarkPlugins: nt.a.arrayOf(
            nt.a.oneOfType([
              nt.a.object,
              nt.a.func,
              nt.a.arrayOf(nt.a.oneOfType([nt.a.object, nt.a.func])),
            ])
          ),
          rehypePlugins: nt.a.arrayOf(
            nt.a.oneOfType([
              nt.a.object,
              nt.a.func,
              nt.a.arrayOf(nt.a.oneOfType([nt.a.object, nt.a.func])),
            ])
          ),
          sourcePos: nt.a.bool,
          rawSourcePos: nt.a.bool,
          skipHtml: nt.a.bool,
          includeElementIndex: nt.a.bool,
          transformLinkUri: nt.a.oneOfType([nt.a.func, nt.a.bool]),
          linkTarget: nt.a.oneOfType([nt.a.func, nt.a.string]),
          transformImageUri: nt.a.func,
          components: nt.a.object,
        });
    },
  },
]);

(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    369: function (n, e, t) {
      n.exports = t.p + "img/d931a92227a2f16728baabff0f699ace.png";
    },
    370: function (n, e, t) {
      n.exports = t.p + "img/dfd5298816cab6623710e16ce353328b.png";
    },
    371: function (n, e, t) {
      n.exports = t.p + "img/c37039c91572ebd494c8b44d30f2b181.png";
    },
    372: function (n, e, t) {
      n.exports = t.p + "img/464e58eb2268d6e0a5c80058510a7438.png";
    },
    373: function (n, e, t) {
      "use strict";
      (function (n) {
        t.d(e, "a", function () {
          return z;
        }),
          t.d(e, "b", function () {
            return W;
          });
        var i = t(1),
          o = t.n(i),
          a = t(106),
          r = t.n(a),
          A = t(632),
          l = (t(388), t(393)),
          s = t.n(l),
          c = t(151),
          f = t(369),
          p = t.n(f),
          B = t(370),
          d = t.n(B),
          m = t(371),
          C = t.n(m),
          u = t(372),
          g = t.n(u);
        function x(n) {
          return (x =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                })(n);
        }
        function b(n, e) {
          if (!(n instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function E(n, e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(n, i.key, i);
          }
        }
        function h(n, e, t) {
          return (
            e && E(n.prototype, e),
            t && E(n, t),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        }
        function y(n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && I(n, e);
        }
        function I(n, e) {
          return (I =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            })(n, e);
        }
        function v(n) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (n) {
              return !1;
            }
          })();
          return function () {
            var t,
              i = k(n);
            if (e) {
              var o = k(this).constructor;
              t = Reflect.construct(i, arguments, o);
            } else t = i.apply(this, arguments);
            return w(this, t);
          };
        }
        function w(n, e) {
          if (e && ("object" === x(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (n) {
            if (void 0 === n)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return n;
          })(n);
        }
        function k(n) {
          return (k = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              })(n);
        }
        var j = (function (n) {
            y(t, n);
            var e = v(t);
            function t(n) {
              return b(this, t), e.call(this, n);
            }
            return (
              h(t, [
                {
                  key: "resizeContent",
                  value: function () {
                    (this.lbDiv = document.getElementById("lightbox")),
                      (this.lbDiv.style.width = window.innerWidth + "px"),
                      (this.lbDiv.style.height = window.innerHeight + "px");
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    document.body.classList.add("fixed"),
                      this.resizeContent(),
                      window.addEventListener("resize", this.resizeContent);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.body.classList.remove("fixed"),
                      window.removeEventListener("resize", this.resizeContent);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return r.a.createPortal(this.props.children, document.body);
                  },
                },
              ]),
              t
            );
          })(o.a.Component),
          z = (function (e) {
            y(i, e);
            var t = v(i);
            function i() {
              return b(this, i), t.apply(this, arguments);
            }
            return (
              h(i, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.artist,
                      i = e.closeHandler;
                    return !0 === e.open
                      ? o.a.createElement(
                          j,
                          null,
                          o.a.createElement(
                            "div",
                            { id: "lightbox", className: "lightbox" },
                            o.a.createElement(
                              "div",
                              { className: "close" },
                              o.a.createElement(
                                "a",
                                { onClick: i },
                                o.a.createElement("img", { src: s.a })
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "content" },
                              o.a.createElement(
                                "div",
                                { className: "lightboxCols" },
                                o.a.createElement(
                                  "div",
                                  { className: "leftCol" },
                                  o.a.createElement("img", {
                                    className: "profileImg",
                                    src: ""
                                      .concat(n.env.API_URL)
                                      .concat(
                                        t.image.data.attributes.formats.medium
                                          .url
                                      ),
                                  }),
                                  o.a.createElement(
                                    "div",
                                    { className: "socialMedia" },
                                    t.facebook &&
                                      null !== t.facebook &&
                                      o.a.createElement(
                                        c.Link,
                                        { to: t.facebook },
                                        o.a.createElement("img", { src: d.a })
                                      ),
                                    t.twitter &&
                                      null !== t.twitter &&
                                      o.a.createElement(
                                        c.Link,
                                        { to: t.twitter },
                                        o.a.createElement("img", { src: p.a })
                                      ),
                                    t.youtube &&
                                      null !== t.youtube &&
                                      o.a.createElement(
                                        c.Link,
                                        { to: t.youtube },
                                        o.a.createElement("img", { src: C.a })
                                      ),
                                    t.instagram &&
                                      null !== t.instagram &&
                                      o.a.createElement(
                                        c.Link,
                                        { to: t.instagram },
                                        o.a.createElement("img", { src: g.a })
                                      )
                                  )
                                ),
                                o.a.createElement(
                                  "div",
                                  { className: "rightCol" },
                                  o.a.createElement("h2", null, t.name),
                                  o.a.createElement(A.a, {
                                    children: t.description,
                                  }),
                                  o.a.createElement(
                                    "div",
                                    { className: "info" },
                                    o.a.createElement(
                                      "div",
                                      { className: "label" },
                                      "LOCATION: "
                                    ),
                                    o.a.createElement(
                                      "div",
                                      { className: "description" },
                                      t.location
                                    )
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "info" },
                                    o.a.createElement(
                                      "div",
                                      { className: "label" },
                                      "WEBSITE: "
                                    ),
                                    o.a.createElement(
                                      "div",
                                      { className: "description" },
                                      o.a.createElement(
                                        "a",
                                        { href: t.website },
                                        t.website
                                      )
                                    )
                                  )
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "buttonRow" },
                                o.a.createElement(
                                  "button",
                                  { className: "blueButton", onClick: i },
                                  "CLOSE"
                                )
                              )
                            )
                          )
                        )
                      : null;
                  },
                },
              ]),
              i
            );
          })(o.a.Component),
          W = (function (e) {
            y(i, e);
            var t = v(i);
            function i() {
              return b(this, i), t.apply(this, arguments);
            }
            return (
              h(i, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.spotlight,
                      i = e.closeHandler;
                    return !0 === e.open
                      ? o.a.createElement(
                          j,
                          null,
                          o.a.createElement(
                            "div",
                            { id: "lightbox", className: "lightbox" },
                            o.a.createElement(
                              "div",
                              { className: "close" },
                              o.a.createElement(
                                "a",
                                { onClick: i },
                                o.a.createElement("img", { src: s.a })
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "content" },
                              o.a.createElement(
                                "div",
                                { className: "lightboxCols" },
                                o.a.createElement(
                                  "div",
                                  { className: "leftCol" },
                                  null !== t.videoURL &&
                                    o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement(
                                        "div",
                                        { className: "container" },
                                        o.a.createElement("iframe", {
                                          className: "responsive-iframe",
                                          src: t.videoURL,
                                          title: "YouTube video player",
                                          frameBorder: "0",
                                          allow:
                                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                          allowFullScreen: !0,
                                        })
                                      ),
                                      o.a.createElement(
                                        "div",
                                        { className: "tagline" },
                                        t.videoTagline
                                      )
                                    ),
                                  null === t.videoURL &&
                                    t.image.data.attributes.formats &&
                                    o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement("img", {
                                        src: ""
                                          .concat(n.env.API_URL)
                                          .concat(
                                            t.image.data.attributes.formats
                                              .medium.url
                                          ),
                                      }),
                                      o.a.createElement(
                                        "div",
                                        { className: "tagline" },
                                        t.tagline
                                      )
                                    )
                                ),
                                o.a.createElement(
                                  "div",
                                  { className: "rightCol" },
                                  o.a.createElement("h2", null, t.name),
                                  o.a.createElement(A.a, {
                                    children: t.description,
                                  }),
                                  o.a.createElement(
                                    "a",
                                    {
                                      className: "learnMore black",
                                      href: t.url,
                                    },
                                    "VISIT SITE"
                                  )
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "buttonRow" },
                                o.a.createElement(
                                  "button",
                                  { className: "blueButton", onClick: i },
                                  "CLOSE"
                                )
                              )
                            )
                          )
                        )
                      : null;
                  },
                },
              ]),
              i
            );
          })(o.a.Component);
      }.call(this, t(365)));
    },
    388: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(389),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    389: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(390),
        l = t(391),
        s = t(392),
        c = r()(o.a);
      c.i(A.a),
        c.i(l.a),
        c.i(s.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    390: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .lightbox {\n    position: absolute;\n    background: #fff;\n    color: #242124;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  .lightbox h2 {\n    font-family: "Libre Baskerville", serif;\n    font-size: 36px;\n    margin: 0;\n    color: #011526;\n  }\n\n  .lightbox p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 10px 0 30px 0;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n  }\n\n  .content .lightboxCols {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin: 30px 0;\n  }\n\n  .content .lightboxCols .leftCol img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n\n  .content .lightboxCols .rightCol {\n    margin-left: 40px;\n  }\n  .content .lightboxCols .leftCol {\n    width: 100%;\n  }\n  .content .lightboxCols .leftCol .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia a {\n    margin: 0 10px;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 50px;\n  }\n  .lightbox .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .lightbox .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,uCAAuC;IACvC,eAAe;IACf,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;EACb;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,+BAA+B;IAC/B,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .lightbox {\n    position: absolute;\n    background: #fff;\n    color: #242124;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  .lightbox h2 {\n    font-family: "Libre Baskerville", serif;\n    font-size: 36px;\n    margin: 0;\n    color: #011526;\n  }\n\n  .lightbox p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 10px 0 30px 0;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n  }\n\n  .content .lightboxCols {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin: 30px 0;\n  }\n\n  .content .lightboxCols .leftCol img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n\n  .content .lightboxCols .rightCol {\n    margin-left: 40px;\n  }\n  .content .lightboxCols .leftCol {\n    width: 100%;\n  }\n  .content .lightboxCols .leftCol .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia a {\n    margin: 0 10px;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 50px;\n  }\n  .lightbox .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .lightbox .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    391: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow-y: scroll;\n    padding: 40px;\n    box-sizing: border-box;\n  }\n\n  .lightbox .content {\n    display: flex;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n    vertical-align: top;\n    height: 100%;\n  }\n\n  .lightbox .content img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n  .lightbox .content p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 0 0 30px 0;\n    padding: 0;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n  .content .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  .content .socialMedia a {\n    margin: 0 10px;\n  }\n  .content .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,kBAAkB;IAClB,sBAAsB;IACtB,MAAM;IACN,OAAO;IACP,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,WAAW;IACX,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,YAAY;IACZ,WAAW;EACb;EACA;IACE,+BAA+B;IAC/B,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow-y: scroll;\n    padding: 40px;\n    box-sizing: border-box;\n  }\n\n  .lightbox .content {\n    display: flex;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n    vertical-align: top;\n    height: 100%;\n  }\n\n  .lightbox .content img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n  .lightbox .content p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 0 0 30px 0;\n    padding: 0;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n  .content .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  .content .socialMedia a {\n    margin: 0 10px;\n  }\n  .content .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    392: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "",
        "",
        { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
      ]),
        (e.a = r);
    },
    393: function (n, e, t) {
      n.exports = t.p + "img/bd46e24f89ca096d76b9cc818531d180.png";
    },
    396: function (n, e) {},
    543: function (n, e, t) {
      "use strict";
      (function (n) {
        var i = t(1),
          o = t.n(i),
          a = t(373),
          r = (t(544), t(549)),
          A = t.n(r);
        function l(n) {
          return (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                })(n);
        }
        function s(n, e, t, i, o, a, r) {
          try {
            var A = n[a](r),
              l = A.value;
          } catch (s) {
            return void t(s);
          }
          A.done ? e(l) : Promise.resolve(l).then(i, o);
        }
        function c(n, e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(n, i.key, i);
          }
        }
        function f(n, e) {
          return (f =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            })(n, e);
        }
        function p(n) {
          var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (n) {
              return !1;
            }
          })();
          return function () {
            var t,
              i = m(n);
            if (e) {
              var o = m(this).constructor;
              t = Reflect.construct(i, arguments, o);
            } else t = i.apply(this, arguments);
            return B(this, t);
          };
        }
        function B(n, e) {
          if (e && ("object" === l(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return d(n);
        }
        function d(n) {
          if (void 0 === n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n;
        }
        function m(n) {
          return (m = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              })(n);
        }
        function C(n, e, t) {
          return (
            e in n
              ? Object.defineProperty(n, e, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[e] = t),
            n
          );
        }
        var u = (function (e) {
          !(function (n, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (n.prototype = Object.create(e && e.prototype, {
              constructor: { value: n, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              e && f(n, e);
          })(B, e);
          var t,
            i,
            r,
            l = p(B);
          function B(n) {
            var e;
            return (
              (function (n, e) {
                if (!(n instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, B),
              C(
                d((e = l.call(this, n))),
                "fetchData",
                (function () {
                  var n,
                    e =
                      ((n = regeneratorRuntime.mark(function n(e) {
                        var t, i;
                        return regeneratorRuntime.wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (t = e),
                                  (n.next = 3),
                                  fetch(t, {
                                    method: "get",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  })
                                );
                              case 3:
                                return (i = n.sent), n.abrupt("return", i);
                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })),
                      function () {
                        var e = this,
                          t = arguments;
                        return new Promise(function (i, o) {
                          var a = n.apply(e, t);
                          function r(n) {
                            s(a, i, o, r, A, "next", n);
                          }
                          function A(n) {
                            s(a, i, o, r, A, "throw", n);
                          }
                          r(void 0);
                        });
                      });
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              C(d(e), "closeHandler", function () {
                e.setState({ openState: !1 });
              }),
              (e.state = { spotlight: [], openState: !1 }),
              e
            );
          }
          return (
            (t = B),
            (i = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.fetchData(
                    "".concat(n.env.API_URL, "/api/spotlights?populate=*")
                  )
                    .then(function (n) {
                      return n.json();
                    })
                    .then(function (n) {
                      e.setState({ spotlight: [n.data[0].attributes] });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: "spotlightBanner" },
                      this.state.spotlight &&
                        this.state.spotlight.length > 0 &&
                        this.state.spotlight.map(function (t) {
                          return o.a.createElement(
                            "div",
                            {
                              className: "bannerContent",
                              key: "spotlight".concat(t.id),
                            },
                            o.a.createElement(
                              "div",
                              { className: "leftCol" },
                              o.a.createElement(
                                "div",
                                { className: "slogan" },
                                "In the Spotlight"
                              ),
                              o.a.createElement(
                                "p",
                                { className: "tagline" },
                                t.name
                              ),
                              o.a.createElement(
                                "button",
                                {
                                  className: "blueButton",
                                  onClick: function () {
                                    return e.setState({ openState: !0 });
                                  },
                                },
                                "LEARN MORE"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "rightCol" },
                              o.a.createElement("img", {
                                src: ""
                                  .concat(n.env.API_URL)
                                  .concat(
                                    t.logo.data.attributes.formats.thumbnail.url
                                  ),
                              }),
                              o.a.createElement(
                                "div",
                                { className: "tagline" },
                                o.a.createElement(
                                  "a",
                                  { href: t.url },
                                  t.tagline
                                )
                              )
                            )
                          );
                        }),
                      o.a.createElement("img", { src: A.a })
                    ),
                    o.a.createElement(a.b, {
                      open: this.state.openState,
                      spotlight: this.state.spotlight[0],
                      closeHandler: this.closeHandler,
                    })
                  );
                },
              },
            ]) && c(t.prototype, i),
            r && c(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            B
          );
        })(o.a.Component);
        e.a = u;
      }.call(this, t(365)));
    },
    544: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(545),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    545: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(546),
        l = t(547),
        s = t(548),
        c = r()(o.a);
      c.i(A.a),
        c.i(l.a),
        c.i(s.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    546: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.spotlightBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.spotlightBanner img {\n  width: 100%;\n}\n\n.spotlightBanner .bannerContent {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n}\n.spotlightBanner .bannerContent .leftCol,\n.spotlightBanner .bannerContent .rightCol {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.spotlightBanner .bannerContent .leftCol {\n  padding: 0 80px 0 0;\n}\n\n.spotlightBanner .bannerContent .rightCol {\n  padding: 0 0 0 80px;\n}\n.spotlightBanner .bannerContent .rightCol a,\n.spotlightBanner .bannerContent .rightCol a:visited,\n.spotlightBanner .bannerContent .rightCol a:active {\n  color: #fff;\n}\n.spotlightBanner .bannerContent .rightCol img {\n  width: 100%;\n  max-width: 240px;\n}\n.spotlightBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 0.5em;\n}\n.spotlightBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n}\n.spotlightBanner .blueButton {\n  margin-top: 1em;\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,kBAAkB;AACpB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;AACb;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,uCAAuC;EACvC,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,WAAW;EACX,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB",
          sourcesContent: [
            '.spotlightBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.spotlightBanner img {\n  width: 100%;\n}\n\n.spotlightBanner .bannerContent {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n}\n.spotlightBanner .bannerContent .leftCol,\n.spotlightBanner .bannerContent .rightCol {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.spotlightBanner .bannerContent .leftCol {\n  padding: 0 80px 0 0;\n}\n\n.spotlightBanner .bannerContent .rightCol {\n  padding: 0 0 0 80px;\n}\n.spotlightBanner .bannerContent .rightCol a,\n.spotlightBanner .bannerContent .rightCol a:visited,\n.spotlightBanner .bannerContent .rightCol a:active {\n  color: #fff;\n}\n.spotlightBanner .bannerContent .rightCol img {\n  width: 100%;\n  max-width: 240px;\n}\n.spotlightBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 0.5em;\n}\n.spotlightBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n}\n.spotlightBanner .blueButton {\n  margin-top: 1em;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    547: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner img {\n    width: 100%;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0 20px 0 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    padding: 0 0 0 20px;\n  }\n\n  .spotlightBanner .bannerContent .rightCol img {\n    width: 100%;\n    max-width: 180px;\n  }\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.5em;\n  }\n  .spotlightBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,oBAAoB;EACtB;EACA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner img {\n    width: 100%;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0 20px 0 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    padding: 0 0 0 20px;\n  }\n\n  .spotlightBanner .bannerContent .rightCol img {\n    width: 100%;\n    max-width: 180px;\n  }\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.5em;\n  }\n  .spotlightBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    548: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    min-height: 180px;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    display: none;\n  }\n\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.3em;\n  }\n\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/600Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;EACnB;EACA;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    min-height: 180px;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    display: none;\n  }\n\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.3em;\n  }\n\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    549: function (n, e, t) {
      n.exports = t.p + "img/2ef9a56fa2b5ccd813806e850f5de24d.png";
    },
    550: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(551),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    551: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(552),
        l = t(553),
        s = t(554),
        c = r()(o.a);
      c.i(A.a),
        c.i(l.a),
        c.i(s.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    552: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.artists {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.artists section {\n  width: 100%;\n}\n.artistTiles {\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n.artistTiles h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  color: #242124;\n  font-weight: bold;\n  text-align: center;\n  margin: 30px 0;\n  width: 100%;\n}\n.artists .viewHeading {\n  font-family: "Lato", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  margin: 0 0 20px 20px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\naside.filterNav {\n  display: flex;\n  flex-direction: column;\n  margin: 0 20px 20px 0;\n  min-width: 240px;\n}\naside.filterNav .buttonBar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n}\naside.filterNav .navOption {\n  border: 1px solid #011526;\n  background-color: #fff;\n  text-align: left;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  color: #011526;\n  padding: 15px 8px;\n  cursor: pointer;\n}\naside.filterNav .navOption.selected {\n  background-color: #011526;\n  color: #fff;\n}\n\naside.filterNav .navOption a,\naside.filterNav .navOption a:visited,\naside.filterNav .navOption a:active {\n  color: #011526;\n  text-decoration: none;\n}\n\naside.filterNav .navOption a:hover {\n  color: #011526;\n  text-decoration: underline;\n}\n.genre {\n  display: flex;\n  flex-direction: column;\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  font-size: 14px;\n}\n.genre input {\n  background: #fff;\n  border: 1px solid #999;\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n.genre .formRow {\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.formHeader {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 0 0;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.formHeader h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n}\n.formHeader svg {\n  transition: all 200ms;\n}\n.formHeader svg.show {\n  margin-left: 10px;\n  transform: rotate(-90deg);\n}\n.formHeader svg.hide {\n  margin-left: 10px;\n  transform: rotate(0deg);\n}\n.contribute {\n  margin-bottom: 50px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.contribute form {\n  max-width: 600px;\n  box-sizing: border-box;\n  margin-left: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n}\n.contribute .formRow {\n  display: flex;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.contribute form input,\n.contribute form textarea {\n  background-color: #fff;\n  border: 1px solid #999;\n}\n.contribute input,\n.contribute textarea {\n  width: 100%;\n  padding: 5px;\n}\n\n.contribute form label {\n  width: 100px;\n  font-size: 14px;\n}\n.contribute .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  font-family: "Lato", sans-serif;\n}\n.contribute .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.instructions {\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  margin: 40px 20px;\n  font-size: 14px;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,WAAW;AACb;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,gBAAgB;EAChB,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,+BAA+B;EAC/B,cAAc;EACd,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,SAAS;EACT,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,+BAA+B;EAC/B,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB",
          sourcesContent: [
            '.artists {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.artists section {\n  width: 100%;\n}\n.artistTiles {\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n.artistTiles h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  color: #242124;\n  font-weight: bold;\n  text-align: center;\n  margin: 30px 0;\n  width: 100%;\n}\n.artists .viewHeading {\n  font-family: "Lato", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  margin: 0 0 20px 20px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\naside.filterNav {\n  display: flex;\n  flex-direction: column;\n  margin: 0 20px 20px 0;\n  min-width: 240px;\n}\naside.filterNav .buttonBar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n}\naside.filterNav .navOption {\n  border: 1px solid #011526;\n  background-color: #fff;\n  text-align: left;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  color: #011526;\n  padding: 15px 8px;\n  cursor: pointer;\n}\naside.filterNav .navOption.selected {\n  background-color: #011526;\n  color: #fff;\n}\n\naside.filterNav .navOption a,\naside.filterNav .navOption a:visited,\naside.filterNav .navOption a:active {\n  color: #011526;\n  text-decoration: none;\n}\n\naside.filterNav .navOption a:hover {\n  color: #011526;\n  text-decoration: underline;\n}\n.genre {\n  display: flex;\n  flex-direction: column;\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  font-size: 14px;\n}\n.genre input {\n  background: #fff;\n  border: 1px solid #999;\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n.genre .formRow {\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.formHeader {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 0 0;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.formHeader h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n}\n.formHeader svg {\n  transition: all 200ms;\n}\n.formHeader svg.show {\n  margin-left: 10px;\n  transform: rotate(-90deg);\n}\n.formHeader svg.hide {\n  margin-left: 10px;\n  transform: rotate(0deg);\n}\n.contribute {\n  margin-bottom: 50px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.contribute form {\n  max-width: 600px;\n  box-sizing: border-box;\n  margin-left: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n}\n.contribute .formRow {\n  display: flex;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.contribute form input,\n.contribute form textarea {\n  background-color: #fff;\n  border: 1px solid #999;\n}\n.contribute input,\n.contribute textarea {\n  width: 100%;\n  padding: 5px;\n}\n\n.contribute form label {\n  width: 100px;\n  font-size: 14px;\n}\n.contribute .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  font-family: "Lato", sans-serif;\n}\n.contribute .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.instructions {\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  margin: 40px 20px;\n  font-size: 14px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    553: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .artists {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n  .artists section {\n    width: 100%;\n  }\n\n  .artists .viewHeading {\n    font-family: "Lato", sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 10px;\n  }\n  aside.filterNav {\n    display: flex;\n    flex-direction: column;\n    margin: 0 0 20px 0;\n    min-width: 240px;\n  }\n  aside.filterNav .buttonBar {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  aside.filterNav .navOption {\n    text-align: center;\n  }\n  aside.filterNav .navOption.selected {\n    background-color: #011526;\n    color: #fff;\n  }\n\n  .genre {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: left;\n  }\n  .genre .rightCol {\n    margin-left: 40px;\n  }\n  .genre input {\n    background: #fff;\n    border: 1px solid #999;\n    margin-right: 5px;\n    width: 20px;\n    height: 20px;\n  }\n  .genre .formRow {\n    display: flex;\n    margin: 10px 0;\n    align-items: center;\n  }\n  h3.formHeader {\n    margin: 20px 0 0 0;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #ccc;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n  }\n  .contribute {\n    margin-bottom: 50px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .contribute form {\n    max-width: 600px;\n    box-sizing: border-box;\n    margin-left: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n  .contribute .formRow {\n    display: flex;\n    margin-top: 10px;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,WAAW;IACX,eAAe;IACf,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;EACvB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;IACb,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,oBAAoB;IACpB,6BAA6B;IAC7B,+BAA+B;IAC/B,eAAe;EACjB;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,sBAAsB;EACxB;EACA;IACE,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;IACjB,+BAA+B;IAC/B,eAAe;EACjB;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .artists {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n  .artists section {\n    width: 100%;\n  }\n\n  .artists .viewHeading {\n    font-family: "Lato", sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 10px;\n  }\n  aside.filterNav {\n    display: flex;\n    flex-direction: column;\n    margin: 0 0 20px 0;\n    min-width: 240px;\n  }\n  aside.filterNav .buttonBar {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  aside.filterNav .navOption {\n    text-align: center;\n  }\n  aside.filterNav .navOption.selected {\n    background-color: #011526;\n    color: #fff;\n  }\n\n  .genre {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: left;\n  }\n  .genre .rightCol {\n    margin-left: 40px;\n  }\n  .genre input {\n    background: #fff;\n    border: 1px solid #999;\n    margin-right: 5px;\n    width: 20px;\n    height: 20px;\n  }\n  .genre .formRow {\n    display: flex;\n    margin: 10px 0;\n    align-items: center;\n  }\n  h3.formHeader {\n    margin: 20px 0 0 0;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #ccc;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n  }\n  .contribute {\n    margin-bottom: 50px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .contribute form {\n    max-width: 600px;\n    box-sizing: border-box;\n    margin-left: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n  .contribute .formRow {\n    display: flex;\n    margin-top: 10px;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    554: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n\n  .artistTiles {\n    margin-left: 20px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n\n  .artistTiles {\n    margin-left: 20px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    631: function (n, e, t) {
      "use strict";
      t.r(e);
      var i = t(1),
        o = t.n(i),
        a = t(543),
        r = (t(395), t(550), t(366)),
        A = t(367);
      function l(n) {
        return (l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function s(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function f(n, e) {
        return (f =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function p(n) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var t,
            i = d(n);
          if (e) {
            var o = d(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return B(this, t);
        };
      }
      function B(n, e) {
        if (e && ("object" === l(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (n) {
          if (void 0 === n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n;
        })(n);
      }
      function d(n) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      var m = (function (n) {
        !(function (n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && f(n, e);
        })(B, n);
        var e,
          t,
          i,
          l = p(B);
        function B() {
          return s(this, B), l.apply(this, arguments);
        }
        return (
          (e = B),
          (t = [
            {
              key: "render",
              value: function () {
                var n = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(r.a, null),
                  o.a.createElement(a.a, null),
                  o.a.createElement("h1", null, "Artists"),
                  o.a.createElement(
                    "main",
                    { className: "artists" },
                    o.a.createElement(
                      "aside",
                      { className: "filterNav" },
                      o.a.createElement(
                        "div",
                        { className: "buttonBar" },
                        o.a.createElement(
                          "button",
                          {
                            className: "navOption",
                            onClick: function () {
                              return n.props.history.push("./viewartists");
                            },
                          },
                          "VIEW ARTISTS"
                        ),
                        o.a.createElement(
                          "button",
                          {
                            className: "navOption  selected",
                            onClick: function () {
                              return n.props.history.push("./contribute");
                            },
                          },
                          "CONTRIBUTE AS AN ARTIST"
                        )
                      )
                    ),
                    o.a.createElement(
                      "section",
                      { className: "contribute" },
                      o.a.createElement(
                        "h2",
                        { className: "viewHeading" },
                        "Contribute as an Artist"
                      ),
                      o.a.createElement(
                        "div",
                        { className: "instructions" },
                        o.a.createElement(
                          "p",
                          null,
                          "Thanks for your interest in Global Peace Rhythms. We look forward to listening to your music."
                        ),
                        o.a.createElement(
                          "p",
                          null,
                          "Please keep in mind that we do not host files on our site, but rather share links to any social media where you may have your music hosted (e.g. YouTube). You may also include links to sites that have more information about your music, including any personal sites that you may have."
                        ),
                        o.a.createElement(
                          "p",
                          null,
                          "If we post your profile on this site, we may reach out to you via email for images that best represent you or your band."
                        )
                      ),
                      o.a.createElement(
                        "form",
                        null,
                        o.a.createElement(
                          "div",
                          { className: "formRow" },
                          o.a.createElement(
                            "label",
                            { htmlFor: "name" },
                            "Name",
                            o.a.createElement("sup", null, "*"),
                            " "
                          ),
                          o.a.createElement("input", {
                            id: "name",
                            type: "text",
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "formRow" },
                          o.a.createElement(
                            "label",
                            { htmlFor: "email" },
                            "Email",
                            o.a.createElement("sup", null, "*"),
                            " "
                          ),
                          o.a.createElement("input", {
                            id: "email",
                            type: "text",
                            required: !0,
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "formRow" },
                          o.a.createElement(
                            "label",
                            { htmlFor: "subject" },
                            "Subject"
                          ),
                          o.a.createElement("input", {
                            id: "subject",
                            type: "text",
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "formRow" },
                          o.a.createElement(
                            "label",
                            { htmlFor: "message" },
                            "Message",
                            o.a.createElement("sup", null, "*"),
                            " "
                          ),
                          o.a.createElement("textarea", {
                            id: "message",
                            type: "text",
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "requiredFields" },
                          o.a.createElement("sup", null, "*"),
                          "Required fields"
                        ),
                        o.a.createElement(
                          "div",
                          { className: "buttonBar" },
                          o.a.createElement(
                            "button",
                            { className: "blueButton", type: "submit" },
                            "SUBMIT"
                          )
                        )
                      )
                    )
                  ),
                  o.a.createElement(A.a, null)
                );
              },
            },
          ]) && c(e.prototype, t),
          i && c(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          B
        );
      })(o.a.Component);
      e.default = m;
    },
  },
]);

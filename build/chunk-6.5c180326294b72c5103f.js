(window.webpackJsonp = window.webpackJsonp || []).push([
  [6, 1],
  {
    366: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        s = t.n(r),
        l = t(374),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(368)),
        d = t.n(c),
        p = t(555),
        u = t(378),
        f = t.n(u),
        m = t(379),
        B = t.n(m),
        C = function () {
          var n = !1,
            e = document.body,
            t = document.createElement("div");
          t.classList.add("overlay");
          var i = function () {
            n
              ? (e.classList.remove("fixed"),
                e.removeChild(t),
                (n = !1),
                p.a.to("#flyoutMenu", {
                  duration: 0.5,
                  right: "-100%",
                  onComplete: function () {
                    document.getElementById("rolloverMenuClose").style.opacity =
                      "0";
                  },
                }))
              : ((n = !0),
                e.classList.add("fixed"),
                e.appendChild(t),
                p.a.to("#flyoutMenu", {
                  duration: 0.3,
                  right: 0,
                  onComplete: function () {
                    var n = document.getElementById("rolloverMenuClose"),
                      e = window.innerWidth;
                    console.log(e),
                      (n.style.width = e - 100 + "px"),
                      (n.style.opacity = "1.0");
                  },
                }));
          };
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "topPage tablet" },
              o.a.createElement(
                "div",
                { className: "topRow" },
                o.a.createElement("img", { src: d.a, className: "logo" }),
                o.a.createElement(
                  "div",
                  { className: "topRight" },
                  o.a.createElement(
                    "button",
                    { className: "blueButton" },
                    "DONATE"
                  ),
                  o.a.createElement(
                    a.Link,
                    { onClick: i },
                    o.a.createElement("img", {
                      src: f.a,
                      className: "hamburgerMenu",
                      alt: "hamburger menu",
                    })
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "div",
                { id: "flyoutMenu" },
                o.a.createElement(
                  "div",
                  { className: "menuItems" },
                  o.a.createElement(
                    "div",
                    { className: "close", id: "rolloverMenuClose" },
                    o.a.createElement(
                      "a",
                      { onClick: i },
                      o.a.createElement("img", { src: B.a })
                    )
                  ),
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/about" }, "ABOUT")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      "ARTISTS",
                      o.a.createElement(
                        "ul",
                        null,
                        o.a.createElement(
                          "li",
                          null,
                          o.a.createElement(
                            a.Link,
                            { to: "/viewartists" },
                            "VIEW ALL ARTISTS"
                          )
                        ),
                        o.a.createElement(
                          "li",
                          null,
                          o.a.createElement(
                            a.Link,
                            { to: "/contribute" },
                            "CONTRIBUTE AS AN ARTIST"
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/news" }, "NEWS")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/events" }, "EVENTS")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/contact" }, "CONTACT")
                    )
                  )
                )
              )
            )
          );
        };
      e.a = function () {
        var n,
          e = !1;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "header",
            { className: "topPage desktop" },
            o.a.createElement(
              a.Link,
              { to: "/Home" },
              o.a.createElement("img", { src: d.a })
            ),
            o.a.createElement(
              "div",
              { className: "topRight" },
              o.a.createElement(
                "div",
                { className: "search" },
                o.a.createElement(
                  "button",
                  { className: "blueButton" },
                  "DONATE"
                )
              ),
              o.a.createElement(
                "div",
                { className: "topNav" },
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/About" }, "ABOUT")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      {
                        id: "artistsLink",
                        to: "viewartists",
                        onMouseOver: function (t) {
                          return (function (t, i) {
                            var o =
                                window.innerWidth > 1440
                                  ? Math.round((window.innerWidth - 1440) / 2)
                                  : 0,
                              a = t.target.getBoundingClientRect(),
                              r = document.getElementsByClassName(i)[0];
                            (r.style.left = Math.round(a.x) - o + "px"),
                              (r.style.top = Math.round(a.y + a.height) + "px"),
                              r.classList.add("showMenu"),
                              (e = !0),
                              (n = setTimeout(function () {
                                !0 === e && r.classList.remove("showMenu");
                              }, 1e3));
                          })(t, "artistsLink");
                        },
                      },
                      "ARTISTS"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/news" }, "NEWS")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/events" }, "EVENTS")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/contact" }, "CONTACT")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              {
                className: "pulldownMenu artistsLink",
                onMouseLeave: function (n) {
                  return (
                    (t = "artistsLink"),
                    void (
                      !0 === e &&
                      ((e = !1),
                      document
                        .getElementsByClassName(t)[0]
                        .classList.remove("showMenu"))
                    )
                  );
                  var t;
                },
                onMouseOver: function () {
                  return clearTimeout(n);
                },
              },
              o.a.createElement(
                "ul",
                null,
                o.a.createElement(
                  "li",
                  null,
                  o.a.createElement(
                    a.Link,
                    { to: "/viewartists" },
                    "VIEW ALL ARTISTS"
                  )
                ),
                o.a.createElement(
                  "li",
                  null,
                  o.a.createElement(
                    a.Link,
                    { to: "/contribute" },
                    "CONTRIBUTE AS AN ARTIST"
                  )
                )
              )
            )
          ),
          o.a.createElement(C, null)
        );
      };
    },
    367: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        s = t.n(r),
        l = t(380),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(384)),
        d = t.n(c),
        p = t(385),
        u = t.n(p),
        f = t(386),
        m = t.n(f),
        B = t(387),
        C = t.n(B);
      e.a = function () {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "footer",
            { className: "desktop" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "div",
                  { className: "multiColList" },
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Global Peace Media")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(
                        a.Link,
                        null,
                        "Farming and Sustainability"
                      )
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Free Education")
                    )
                  ),
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Free Music Progams")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "World Hunger")
                    )
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: "CTAs" },
                o.a.createElement(
                  "div",
                  { className: "newsLetter" },
                  o.a.createElement(
                    "label",
                    { htmlFor: "" },
                    "Sign up for our newsletter"
                  ),
                  o.a.createElement("input", {
                    type: "text",
                    placeholder: "Email",
                  }),
                  o.a.createElement(
                    "button",
                    { className: "blueHalfButton" },
                    "SUBSCRIBE"
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          ),
          o.a.createElement(
            "footer",
            { className: "tablet" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Global Peace Media")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      null,
                      "Farming and Sustainability"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Education")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Music Progams")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "World Hunger")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "bottom" },
              o.a.createElement(
                "div",
                { className: "newsLetter" },
                o.a.createElement(
                  "label",
                  { htmlFor: "footerEmail" },
                  "Sign up for our newsletter"
                ),
                o.a.createElement("input", {
                  id: "footerEmail",
                  type: "text",
                  placeholder: "Email",
                }),
                o.a.createElement(
                  "button",
                  { className: "blueHalfButton" },
                  "SUBSCRIBE"
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          ),
          o.a.createElement(
            "footer",
            { className: "mobile" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "bottom" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Global Peace Media")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      null,
                      "Farming and Sustainability"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Education")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Music Progams")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "World Hunger")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "div",
                { className: "newsLetter" },
                o.a.createElement(
                  "label",
                  { htmlFor: "" },
                  "Sign up for our newsletter"
                ),
                o.a.createElement("input", {
                  type: "text",
                  placeholder: "Email",
                }),
                o.a.createElement(
                  "button",
                  { className: "blueHalfButton" },
                  "SUBSCRIBE"
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          )
        );
      };
    },
    368: function (n, e, t) {
      n.exports = t.p + "img/fab535062748af9fe09ba06909e72e56.png";
    },
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
          return j;
        }),
          t.d(e, "b", function () {
            return z;
          });
        var i = t(1),
          o = t.n(i),
          a = t(106),
          r = t.n(a),
          s = t(632),
          l = (t(388), t(393)),
          A = t.n(l),
          c = t(151),
          d = t(369),
          p = t.n(d),
          u = t(370),
          f = t.n(u),
          m = t(371),
          B = t.n(m),
          C = t(372),
          E = t.n(C);
        function g(n) {
          return (g =
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
        function x(n, e) {
          if (!(n instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(n, e) {
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(n, i.key, i);
          }
        }
        function b(n, e, t) {
          return (
            e && h(n.prototype, e),
            t && h(n, t),
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
            e && v(n, e);
        }
        function v(n, e) {
          return (v =
            Object.setPrototypeOf ||
            function (n, e) {
              return (n.__proto__ = e), n;
            })(n, e);
        }
        function w(n) {
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
              i = _(n);
            if (e) {
              var o = _(this).constructor;
              t = Reflect.construct(i, arguments, o);
            } else t = i.apply(this, arguments);
            return I(this, t);
          };
        }
        function I(n, e) {
          if (e && ("object" === g(e) || "function" == typeof e)) return e;
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
        function _(n) {
          return (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (n) {
                return n.__proto__ || Object.getPrototypeOf(n);
              })(n);
        }
        var k = (function (n) {
            y(t, n);
            var e = w(t);
            function t(n) {
              return x(this, t), e.call(this, n);
            }
            return (
              b(t, [
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
          j = (function (e) {
            y(i, e);
            var t = w(i);
            function i() {
              return x(this, i), t.apply(this, arguments);
            }
            return (
              b(i, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.artist,
                      i = e.closeHandler;
                    return !0 === e.open
                      ? o.a.createElement(
                          k,
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
                                o.a.createElement("img", { src: A.a })
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
                                        o.a.createElement("img", { src: f.a })
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
                                        o.a.createElement("img", { src: B.a })
                                      ),
                                    t.instagram &&
                                      null !== t.instagram &&
                                      o.a.createElement(
                                        c.Link,
                                        { to: t.instagram },
                                        o.a.createElement("img", { src: E.a })
                                      )
                                  )
                                ),
                                o.a.createElement(
                                  "div",
                                  { className: "rightCol" },
                                  o.a.createElement("h2", null, t.name),
                                  o.a.createElement(s.a, {
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
          z = (function (e) {
            y(i, e);
            var t = w(i);
            function i() {
              return x(this, i), t.apply(this, arguments);
            }
            return (
              b(i, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.spotlight,
                      i = e.closeHandler;
                    return !0 === e.open
                      ? o.a.createElement(
                          k,
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
                                o.a.createElement("img", { src: A.a })
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
                                  o.a.createElement(s.a, {
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
    374: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(375),
        l = t(376),
        A = t(377),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    375: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .topPage.tablet {\n    display: none;\n  }\n  #flyoutMenu {\n    display: none;\n  }\n  .desktop.topPage {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n\n  .desktop.topPage img {\n    width: 200px;\n  }\n\n  .desktop.topPage .topRight {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n  }\n\n  .desktop.topPage .search {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .desktop.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n\n  .desktop.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n  }\n  .desktop.topPage .pulldownMenu {\n    display: none;\n    position: absolute;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    margin-left: -10px;\n    padding-top: 10px;\n  }\n  .desktop.topPage .pulldownMenu ul {\n    background-color: #011526;\n    margin: 0;\n    padding: 0;\n    opacity: 0.9;\n  }\n  .desktop.topPage .pulldownMenu ul li {\n    margin: 0;\n    padding: 10px 10px;\n    list-style: none;\n    cursor: pointer;\n  }\n  .desktop.topPage .pulldownMenu ul li a,\n  .desktop.topPage .pulldownMenu ul li a:visited,\n  .desktop.topPage .pulldownMenu ul li a:active,\n  .desktop.topPage .pulldownMenu ul li a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .desktop.topPage .pulldownMenu ul li:hover a,\n  .desktop.topPage .pulldownMenu ul li:hover a:visited,\n  .desktop.topPage .pulldownMenu ul li:hover a:active,\n  .desktop.topPage .pulldownMenu ul li:hover a:hover {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .desktop.topPage .pulldownMenu ul li:hover {\n    background-color: #fff;\n    color: #011526;\n  }\n  .desktop.topPage .pulldownMenu.showMenu {\n    display: block;\n  }\n  .topNav ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    margin: 15px 0 0 0;\n  }\n  .topNav ul li {\n    margin-left: 20px;\n  }\n\n  .topNav a {\n    color: #fff;\n    text-decoration: none;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,YAAY;EACd;EACA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;EACA;;;;IAIE,WAAW;IACX,qBAAqB;EACvB;EACA;;;;IAIE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,sBAAsB;IACtB,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,qBAAqB;IACrB,+BAA+B;IAC/B,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .topPage.tablet {\n    display: none;\n  }\n  #flyoutMenu {\n    display: none;\n  }\n  .desktop.topPage {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n\n  .desktop.topPage img {\n    width: 200px;\n  }\n\n  .desktop.topPage .topRight {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n  }\n\n  .desktop.topPage .search {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .desktop.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n\n  .desktop.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n  }\n  .desktop.topPage .pulldownMenu {\n    display: none;\n    position: absolute;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    margin-left: -10px;\n    padding-top: 10px;\n  }\n  .desktop.topPage .pulldownMenu ul {\n    background-color: #011526;\n    margin: 0;\n    padding: 0;\n    opacity: 0.9;\n  }\n  .desktop.topPage .pulldownMenu ul li {\n    margin: 0;\n    padding: 10px 10px;\n    list-style: none;\n    cursor: pointer;\n  }\n  .desktop.topPage .pulldownMenu ul li a,\n  .desktop.topPage .pulldownMenu ul li a:visited,\n  .desktop.topPage .pulldownMenu ul li a:active,\n  .desktop.topPage .pulldownMenu ul li a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .desktop.topPage .pulldownMenu ul li:hover a,\n  .desktop.topPage .pulldownMenu ul li:hover a:visited,\n  .desktop.topPage .pulldownMenu ul li:hover a:active,\n  .desktop.topPage .pulldownMenu ul li:hover a:hover {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .desktop.topPage .pulldownMenu ul li:hover {\n    background-color: #fff;\n    color: #011526;\n  }\n  .desktop.topPage .pulldownMenu.showMenu {\n    display: block;\n  }\n  .topNav ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    margin: 15px 0 0 0;\n  }\n  .topNav ul li {\n    margin-left: 20px;\n  }\n\n  .topNav a {\n    color: #fff;\n    text-decoration: none;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    376: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .topPage.desktop {\n    display: none;\n  }\n  .topNav ul {\n    display: none;\n  }\n\n  .tablet.topPage {\n    display: flex;\n    flex-direction: column;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    align-items: flex-start;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n  .tablet.topPage .topRow {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tablet.topPage .logo {\n    width: 150px;\n  }\n  .tablet.topPage .topRow .topRight {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .tablet.topPage .topRow .topRight button {\n    margin-right: 20px;\n  }\n  .tablet.topPage .topRow .topRight .hamburgerMenu {\n    width: 20px;\n  }\n  .tablet.topPage .bottomRow {\n    width: 100%;\n  }\n  .tablet.topPage .search {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .tablet.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n\n  .tablet.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n    width: 100%;\n  }\n  #flyoutMenu {\n    position: absolute;\n    display: flex;\n    top: 0;\n    right: -100%;\n    width: 90%;\n    height: 100%;\n    background-color: #011526;\n    z-index: 3000;\n    box-sizing: border-box;\n  }\n  #flyoutMenu ul {\n    padding: 0;\n    margin: 10px 0 0 10px;\n  }\n  #flyoutMenu ul li {\n    list-style: none;\n    margin-top: 20px;\n  }\n  #flyoutMenu ul li {\n    cursor: pointer;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n  }\n\n  #flyoutMenu h2 {\n    margin: 0 0 0 20px;\n    padding-top: 20px;\n  }\n  #flyoutMenu ul {\n    margin: 0 0 0 20px;\n    padding-top: 10px;\n  }\n  #flyoutMenu h2 {\n    font-family: montserrat-SemiBold;\n    font-size: 18px;\n  }\n  #flyoutMenu .menuItems {\n    position: relative;\n    width: 90%;\n  }\n  #flyoutMenu .menuItems a,\n  #flyoutMenu .menuItems a:visited,\n  #flyoutMenu .menuItems a:active,\n  #flyoutMenu .menuItems a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .overlay {\n    position: absolute;\n    background: rgba(1, 21, 38, 0.8);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n  }\n  #flyoutMenu .close {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 20px 0 20px 0;\n    z-index: 4000;\n    box-sizing: border-box;\n    opacity: 0;\n  }\n  #flyoutMenu .close img {\n    width: 60%;\n  }\n  .fixed {\n    position: fixed;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,YAAY;EACd;EACA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;EAChC;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,aAAa;IACb,MAAM;IACN,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,WAAW;IACX,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,gCAAgC;IAChC,eAAe;EACjB;EACA;IACE,kBAAkB;IAClB,UAAU;EACZ;EACA;;;;IAIE,WAAW;IACX,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,aAAa;EACf;EACA;IACE,aAAa;IACb,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .topPage.desktop {\n    display: none;\n  }\n  .topNav ul {\n    display: none;\n  }\n\n  .tablet.topPage {\n    display: flex;\n    flex-direction: column;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    align-items: flex-start;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n  .tablet.topPage .topRow {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tablet.topPage .logo {\n    width: 150px;\n  }\n  .tablet.topPage .topRow .topRight {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .tablet.topPage .topRow .topRight button {\n    margin-right: 20px;\n  }\n  .tablet.topPage .topRow .topRight .hamburgerMenu {\n    width: 20px;\n  }\n  .tablet.topPage .bottomRow {\n    width: 100%;\n  }\n  .tablet.topPage .search {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .tablet.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n\n  .tablet.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n    width: 100%;\n  }\n  #flyoutMenu {\n    position: absolute;\n    display: flex;\n    top: 0;\n    right: -100%;\n    width: 90%;\n    height: 100%;\n    background-color: #011526;\n    z-index: 3000;\n    box-sizing: border-box;\n  }\n  #flyoutMenu ul {\n    padding: 0;\n    margin: 10px 0 0 10px;\n  }\n  #flyoutMenu ul li {\n    list-style: none;\n    margin-top: 20px;\n  }\n  #flyoutMenu ul li {\n    cursor: pointer;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n  }\n\n  #flyoutMenu h2 {\n    margin: 0 0 0 20px;\n    padding-top: 20px;\n  }\n  #flyoutMenu ul {\n    margin: 0 0 0 20px;\n    padding-top: 10px;\n  }\n  #flyoutMenu h2 {\n    font-family: montserrat-SemiBold;\n    font-size: 18px;\n  }\n  #flyoutMenu .menuItems {\n    position: relative;\n    width: 90%;\n  }\n  #flyoutMenu .menuItems a,\n  #flyoutMenu .menuItems a:visited,\n  #flyoutMenu .menuItems a:active,\n  #flyoutMenu .menuItems a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .overlay {\n    position: absolute;\n    background: rgba(1, 21, 38, 0.8);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n  }\n  #flyoutMenu .close {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 20px 0 20px 0;\n    z-index: 4000;\n    box-sizing: border-box;\n    opacity: 0;\n  }\n  #flyoutMenu .close img {\n    width: 60%;\n  }\n  .fixed {\n    position: fixed;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    377: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .topNav ul {\n    display: none;\n  }\n\n  #flyoutMenu .close img {\n    width: 50%;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/600Max.css"],
          names: [],
          mappings: "AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .topNav ul {\n    display: none;\n  }\n\n  #flyoutMenu .close img {\n    width: 50%;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    378: function (n, e, t) {
      n.exports = t.p + "img/73312ec0bc36b0d13d6564556dd48b4c.png";
    },
    379: function (n, e, t) {
      n.exports = t.p + "img/c3108da5bfa82743d06de316baf22dfc.png";
    },
    380: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(381),
        l = t(382),
        A = t(383),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    381: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.tablet {\n    display: none;\n  }\n  footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n  footer .top div:nth-child(2) {\n    margin-left: 40px;\n  }\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 30px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,qBAAqB;EACvB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;;IAGE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.tablet {\n    display: none;\n  }\n  footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n  footer .top div:nth-child(2) {\n    margin-left: 40px;\n  }\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 30px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    382: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) and (min-width: 600px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;;IAGE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) and (min-width: 600px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    383: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  footer.tablet {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 20px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 8px 20px;\n    font-size: 14px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .blueButton {\n    border-radius: 30px;\n  }\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  footer.tablet {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 20px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 8px 20px;\n    font-size: 14px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .blueButton {\n    border-radius: 30px;\n  }\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    384: function (n, e, t) {
      n.exports = t.p + "img/88959800bb9253028d6ba5a62c21dea0.png";
    },
    385: function (n, e, t) {
      n.exports = t.p + "img/5ab20b563082f36527e23032115cf6b7.png";
    },
    386: function (n, e, t) {
      n.exports = t.p + "img/14257a9af5a7c3a35a8d212fd46e5ae2.png";
    },
    387: function (n, e, t) {
      n.exports = t.p + "img/87baee5488abe6d0af6c427bb0cf26df.png";
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
        s = t(390),
        l = t(391),
        A = t(392),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
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
    536: function (n, e, t) {
      "use strict";
      (function (n) {
        var i = t(1),
          o = t.n(i),
          a = t(151),
          r = (t(537), t(373)),
          s = t(369),
          l = t.n(s),
          A = t(370),
          c = t.n(A),
          d = t(371),
          p = t.n(d),
          u = t(372),
          f = t.n(u);
        function m(n, e) {
          return (
            (function (n) {
              if (Array.isArray(n)) return n;
            })(n) ||
            (function (n, e) {
              var t =
                null == n
                  ? null
                  : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                    n["@@iterator"];
              if (null == t) return;
              var i,
                o,
                a = [],
                r = !0,
                s = !1;
              try {
                for (
                  t = t.call(n);
                  !(r = (i = t.next()).done) &&
                  (a.push(i.value), !e || a.length !== e);
                  r = !0
                );
              } catch (l) {
                (s = !0), (o = l);
              } finally {
                try {
                  r || null == t.return || t.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            })(n, e) ||
            (function (n, e) {
              if (!n) return;
              if ("string" == typeof n) return B(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              "Object" === t && n.constructor && (t = n.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(n);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return B(n, e);
            })(n, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function B(n, e) {
          (null == e || e > n.length) && (e = n.length);
          for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
          return i;
        }
        e.a = function (e) {
          var t = e.artist,
            s = m(Object(i.useState)(!1), 2),
            A = s[0],
            d = s[1],
            u = t && t.description ? t.description.substr(0, 100) + " ..." : "";
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "artist" },
              t &&
                null !== t.image &&
                o.a.createElement("img", {
                  src: ""
                    .concat(n.env.API_URL)
                    .concat(t.image.data.attributes.formats.thumbnail.url),
                }),
              o.a.createElement(
                "div",
                { className: "description" },
                o.a.createElement("h3", { className: "name" }, t.name),
                o.a.createElement("p", { className: "teaser" }, u),
                o.a.createElement(
                  "button",
                  {
                    className: "blueButton",
                    onClick: function () {
                      return d(!0);
                    },
                  },
                  "LEARN MORE"
                )
              ),
              o.a.createElement(
                "div",
                { className: "socialMedia" },
                t.facebook &&
                  null !== t.facebook &&
                  o.a.createElement(
                    a.Link,
                    { to: t.facebook },
                    o.a.createElement("img", { src: c.a })
                  ),
                t.twitter &&
                  null !== t.twitter &&
                  o.a.createElement(
                    a.Link,
                    { to: t.twitter },
                    o.a.createElement("img", { src: l.a })
                  ),
                t.youtube &&
                  null !== t.youtube &&
                  o.a.createElement(
                    a.Link,
                    { to: t.youtube },
                    o.a.createElement("img", { src: p.a })
                  ),
                t.instagram &&
                  null !== t.instagram &&
                  o.a.createElement(
                    a.Link,
                    { to: t.instagram },
                    o.a.createElement("img", { src: f.a })
                  )
              )
            ),
            o.a.createElement(r.a, {
              open: A,
              artist: t,
              closeHandler: function () {
                d(!1);
              },
            })
          );
        };
      }.call(this, t(365)));
    },
    537: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(538),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    538: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(539),
        l = t(540),
        A = t(541),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    539: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.artist {\n  font-family: "Lato", sans-serif;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 300px;\n  margin: 0 20px 20px 0;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.artist img {\n  width: 100%;\n}\n\n.artist .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 0 10px;\n  width: inherit;\n  font-size: 14px;\n}\n\n.artist .description .teaser {\n  color: #242124;\n}\n\n.artist .description h3.name {\n  text-align: center;\n  color: #242124;\n  font-size: 21px;\n  color: #011526;\n  margin: 10px 0 0 0;\n  padding: 0;\n}\n\n.artist .description .blueButton {\n  text-align: center;\n  margin: 30px 0 30px 0;\n}\n\n.artist .info {\n  display: flex;\n  align-items: left;\n  font-size: 11px;\n  padding: 5px 10px 0 10px;\n}\n\n.artist .info .label {\n  width: 30%;\n}\n\n.artist .socialMedia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n.artist .socialMedia a {\n  margin: 0 10px;\n}\n.artist .socialMedia img {\n  height: 20px;\n  width: 20px;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,+BAA+B;EAC/B,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb",
          sourcesContent: [
            '.artist {\n  font-family: "Lato", sans-serif;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 300px;\n  margin: 0 20px 20px 0;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.artist img {\n  width: 100%;\n}\n\n.artist .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 0 10px;\n  width: inherit;\n  font-size: 14px;\n}\n\n.artist .description .teaser {\n  color: #242124;\n}\n\n.artist .description h3.name {\n  text-align: center;\n  color: #242124;\n  font-size: 21px;\n  color: #011526;\n  margin: 10px 0 0 0;\n  padding: 0;\n}\n\n.artist .description .blueButton {\n  text-align: center;\n  margin: 30px 0 30px 0;\n}\n\n.artist .info {\n  display: flex;\n  align-items: left;\n  font-size: 11px;\n  padding: 5px 10px 0 10px;\n}\n\n.artist .info .label {\n  width: 30%;\n}\n\n.artist .socialMedia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n.artist .socialMedia a {\n  margin: 0 10px;\n}\n.artist .socialMedia img {\n  height: 20px;\n  width: 20px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    540: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 14px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    font-size: 18px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n\n  .artist .socialMedia {\n    margin-top: 20px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,+BAA+B;IAC/B,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,wBAAwB;EAC1B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 14px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    font-size: 18px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n\n  .artist .socialMedia {\n    margin-top: 20px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    541: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 12px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    color: #242124;\n    font-size: 16px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n  .artist .socialMedia img {\n    height: 14px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,+BAA+B;IAC/B,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,wBAAwB;EAC1B;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 12px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    color: #242124;\n    font-size: 16px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n  .artist .socialMedia img {\n    height: 14px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    557: function (n, e, t) {
      var i = {
        "./af": 397,
        "./af.js": 397,
        "./ar": 398,
        "./ar-dz": 399,
        "./ar-dz.js": 399,
        "./ar-kw": 400,
        "./ar-kw.js": 400,
        "./ar-ly": 401,
        "./ar-ly.js": 401,
        "./ar-ma": 402,
        "./ar-ma.js": 402,
        "./ar-sa": 403,
        "./ar-sa.js": 403,
        "./ar-tn": 404,
        "./ar-tn.js": 404,
        "./ar.js": 398,
        "./az": 405,
        "./az.js": 405,
        "./be": 406,
        "./be.js": 406,
        "./bg": 407,
        "./bg.js": 407,
        "./bm": 408,
        "./bm.js": 408,
        "./bn": 409,
        "./bn-bd": 410,
        "./bn-bd.js": 410,
        "./bn.js": 409,
        "./bo": 411,
        "./bo.js": 411,
        "./br": 412,
        "./br.js": 412,
        "./bs": 413,
        "./bs.js": 413,
        "./ca": 414,
        "./ca.js": 414,
        "./cs": 415,
        "./cs.js": 415,
        "./cv": 416,
        "./cv.js": 416,
        "./cy": 417,
        "./cy.js": 417,
        "./da": 418,
        "./da.js": 418,
        "./de": 419,
        "./de-at": 420,
        "./de-at.js": 420,
        "./de-ch": 421,
        "./de-ch.js": 421,
        "./de.js": 419,
        "./dv": 422,
        "./dv.js": 422,
        "./el": 423,
        "./el.js": 423,
        "./en-au": 424,
        "./en-au.js": 424,
        "./en-ca": 425,
        "./en-ca.js": 425,
        "./en-gb": 426,
        "./en-gb.js": 426,
        "./en-ie": 427,
        "./en-ie.js": 427,
        "./en-il": 428,
        "./en-il.js": 428,
        "./en-in": 429,
        "./en-in.js": 429,
        "./en-nz": 430,
        "./en-nz.js": 430,
        "./en-sg": 431,
        "./en-sg.js": 431,
        "./eo": 432,
        "./eo.js": 432,
        "./es": 433,
        "./es-do": 434,
        "./es-do.js": 434,
        "./es-mx": 435,
        "./es-mx.js": 435,
        "./es-us": 436,
        "./es-us.js": 436,
        "./es.js": 433,
        "./et": 437,
        "./et.js": 437,
        "./eu": 438,
        "./eu.js": 438,
        "./fa": 439,
        "./fa.js": 439,
        "./fi": 440,
        "./fi.js": 440,
        "./fil": 441,
        "./fil.js": 441,
        "./fo": 442,
        "./fo.js": 442,
        "./fr": 443,
        "./fr-ca": 444,
        "./fr-ca.js": 444,
        "./fr-ch": 445,
        "./fr-ch.js": 445,
        "./fr.js": 443,
        "./fy": 446,
        "./fy.js": 446,
        "./ga": 447,
        "./ga.js": 447,
        "./gd": 448,
        "./gd.js": 448,
        "./gl": 449,
        "./gl.js": 449,
        "./gom-deva": 450,
        "./gom-deva.js": 450,
        "./gom-latn": 451,
        "./gom-latn.js": 451,
        "./gu": 452,
        "./gu.js": 452,
        "./he": 453,
        "./he.js": 453,
        "./hi": 454,
        "./hi.js": 454,
        "./hr": 455,
        "./hr.js": 455,
        "./hu": 456,
        "./hu.js": 456,
        "./hy-am": 457,
        "./hy-am.js": 457,
        "./id": 458,
        "./id.js": 458,
        "./is": 459,
        "./is.js": 459,
        "./it": 460,
        "./it-ch": 461,
        "./it-ch.js": 461,
        "./it.js": 460,
        "./ja": 462,
        "./ja.js": 462,
        "./jv": 463,
        "./jv.js": 463,
        "./ka": 464,
        "./ka.js": 464,
        "./kk": 465,
        "./kk.js": 465,
        "./km": 466,
        "./km.js": 466,
        "./kn": 467,
        "./kn.js": 467,
        "./ko": 468,
        "./ko.js": 468,
        "./ku": 469,
        "./ku.js": 469,
        "./ky": 470,
        "./ky.js": 470,
        "./lb": 471,
        "./lb.js": 471,
        "./lo": 472,
        "./lo.js": 472,
        "./lt": 473,
        "./lt.js": 473,
        "./lv": 474,
        "./lv.js": 474,
        "./me": 475,
        "./me.js": 475,
        "./mi": 476,
        "./mi.js": 476,
        "./mk": 477,
        "./mk.js": 477,
        "./ml": 478,
        "./ml.js": 478,
        "./mn": 479,
        "./mn.js": 479,
        "./mr": 480,
        "./mr.js": 480,
        "./ms": 481,
        "./ms-my": 482,
        "./ms-my.js": 482,
        "./ms.js": 481,
        "./mt": 483,
        "./mt.js": 483,
        "./my": 484,
        "./my.js": 484,
        "./nb": 485,
        "./nb.js": 485,
        "./ne": 486,
        "./ne.js": 486,
        "./nl": 487,
        "./nl-be": 488,
        "./nl-be.js": 488,
        "./nl.js": 487,
        "./nn": 489,
        "./nn.js": 489,
        "./oc-lnc": 490,
        "./oc-lnc.js": 490,
        "./pa-in": 491,
        "./pa-in.js": 491,
        "./pl": 492,
        "./pl.js": 492,
        "./pt": 493,
        "./pt-br": 494,
        "./pt-br.js": 494,
        "./pt.js": 493,
        "./ro": 495,
        "./ro.js": 495,
        "./ru": 496,
        "./ru.js": 496,
        "./sd": 497,
        "./sd.js": 497,
        "./se": 498,
        "./se.js": 498,
        "./si": 499,
        "./si.js": 499,
        "./sk": 500,
        "./sk.js": 500,
        "./sl": 501,
        "./sl.js": 501,
        "./sq": 502,
        "./sq.js": 502,
        "./sr": 503,
        "./sr-cyrl": 504,
        "./sr-cyrl.js": 504,
        "./sr.js": 503,
        "./ss": 505,
        "./ss.js": 505,
        "./sv": 506,
        "./sv.js": 506,
        "./sw": 507,
        "./sw.js": 507,
        "./ta": 508,
        "./ta.js": 508,
        "./te": 509,
        "./te.js": 509,
        "./tet": 510,
        "./tet.js": 510,
        "./tg": 511,
        "./tg.js": 511,
        "./th": 512,
        "./th.js": 512,
        "./tk": 513,
        "./tk.js": 513,
        "./tl-ph": 514,
        "./tl-ph.js": 514,
        "./tlh": 515,
        "./tlh.js": 515,
        "./tr": 516,
        "./tr.js": 516,
        "./tzl": 517,
        "./tzl.js": 517,
        "./tzm": 518,
        "./tzm-latn": 519,
        "./tzm-latn.js": 519,
        "./tzm.js": 518,
        "./ug-cn": 520,
        "./ug-cn.js": 520,
        "./uk": 521,
        "./uk.js": 521,
        "./ur": 522,
        "./ur.js": 522,
        "./uz": 523,
        "./uz-latn": 524,
        "./uz-latn.js": 524,
        "./uz.js": 523,
        "./vi": 525,
        "./vi.js": 525,
        "./x-pseudo": 526,
        "./x-pseudo.js": 526,
        "./yo": 527,
        "./yo.js": 527,
        "./zh-cn": 528,
        "./zh-cn.js": 528,
        "./zh-hk": 529,
        "./zh-hk.js": 529,
        "./zh-mo": 530,
        "./zh-mo.js": 530,
        "./zh-tw": 531,
        "./zh-tw.js": 531,
      };
      function o(n) {
        var e = a(n);
        return t(e);
      }
      function a(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (o.keys = function () {
        return Object.keys(i);
      }),
        (o.resolve = a),
        (n.exports = o),
        (o.id = 557);
    },
    570: function (n, e, t) {
      "use strict";
      (function (n) {
        var i = t(1),
          o = t.n(i),
          a = t(151);
        t(571);
        function r(n, e) {
          return (
            (function (n) {
              if (Array.isArray(n)) return n;
            })(n) ||
            (function (n, e) {
              var t =
                null == n
                  ? null
                  : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                    n["@@iterator"];
              if (null == t) return;
              var i,
                o,
                a = [],
                r = !0,
                s = !1;
              try {
                for (
                  t = t.call(n);
                  !(r = (i = t.next()).done) &&
                  (a.push(i.value), !e || a.length !== e);
                  r = !0
                );
              } catch (l) {
                (s = !0), (o = l);
              } finally {
                try {
                  r || null == t.return || t.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            })(n, e) ||
            (function (n, e) {
              if (!n) return;
              if ("string" == typeof n) return s(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              "Object" === t && n.constructor && (t = n.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(n);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return s(n, e);
            })(n, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function s(n, e) {
          (null == e || e > n.length) && (e = n.length);
          for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
          return i;
        }
        e.a = function () {
          var e = r(Object(i.useState)({}), 2),
            t = e[0],
            s = e[1];
          return (
            Object(i.useEffect)(function () {
              fetch("".concat(n.env.API_URL, "/api/spotlights?populate=*"), {
                method: "get",
                headers: { "Content-Type": "application/json" },
              })
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  try {
                    s(n.data[0].attributes);
                  } catch (e) {
                    console.log("error: ", e);
                  }
                });
              return function () {
                s([]);
              };
            }, []),
            o.a.createElement(
              "aside",
              { className: "sideBar" },
              o.a.createElement(
                "div",
                { className: "navOption" },
                o.a.createElement(
                  a.Link,
                  { to: "/viewartists" },
                  "VIEW ALL ARTISTS"
                )
              ),
              o.a.createElement(
                "div",
                { className: "navOption" },
                o.a.createElement(
                  a.Link,
                  { to: "/contribute" },
                  "CONTRIBUTE AS AN ARTIST"
                )
              ),
              t &&
                t.image &&
                o.a.createElement(
                  "div",
                  { className: "content" },
                  o.a.createElement("h2", null, "In The Spotlight"),
                  o.a.createElement(
                    "div",
                    { className: "media" },
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
                            .concat(t.image.data.attributes.formats.medium.url),
                        }),
                        o.a.createElement(
                          "div",
                          { className: "tagline" },
                          t.imageTagline
                        )
                      )
                  ),
                  o.a.createElement("div", { className: "title" }, t.name),
                  o.a.createElement("p", null, t.description),
                  o.a.createElement(
                    a.Link,
                    { className: "learnMore white", to: t.url },
                    "LEARN MORE"
                  ),
                  o.a.createElement("hr", { className: "whiteSeparator" }),
                  o.a.createElement(
                    "h3",
                    null,
                    "Stay up to do date with Global Peace Rhythms."
                  ),
                  o.a.createElement(
                    "div",
                    { className: "newsLetter" },
                    o.a.createElement(
                      "label",
                      { htmlFor: "newsletterSidebar" },
                      "Sign up for our newsletter"
                    ),
                    o.a.createElement("input", {
                      type: "text",
                      placeholder: "Email",
                      id: "newsletterSidebar",
                    }),
                    o.a.createElement(
                      "button",
                      { className: "sidebar blueButton" },
                      "SUBSCRIBE"
                    )
                  )
                )
            )
          );
        };
      }.call(this, t(365)));
    },
    571: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(572),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    572: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(573),
        l = t(574),
        A = t(575),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    573: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .sideBar {\n    max-width: 400px;\n    min-width: 250px;\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 21px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n\n  .sideBar .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,cAAc;IACd,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;IACzB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,aAAa;EACf;;EAEA;IACE,0BAA0B;IAC1B,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .sideBar {\n    max-width: 400px;\n    min-width: 250px;\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 21px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n\n  .sideBar .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    574: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: lato;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n\n  .sideBar {\n    max-width: 100%;\n    min-width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 50px;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n  .sideBar .newsLetter input {\n    font-family: lato;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,WAAW;EACb;;EAEA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,cAAc;IACd,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;IACzB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,aAAa;EACf;;EAEA;IACE,0BAA0B;IAC1B,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: lato;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n\n  .sideBar {\n    max-width: 100%;\n    min-width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 50px;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n  .sideBar .newsLetter input {\n    font-family: lato;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    575: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 900px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    576: function (n, e, t) {
      "use strict";
      (function (n) {
        var i = t(1),
          o = t.n(i),
          a = t(151),
          r = t(364),
          s = t.n(r);
        t(578);
        function l(n, e) {
          return (
            (function (n) {
              if (Array.isArray(n)) return n;
            })(n) ||
            (function (n, e) {
              var t =
                null == n
                  ? null
                  : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                    n["@@iterator"];
              if (null == t) return;
              var i,
                o,
                a = [],
                r = !0,
                s = !1;
              try {
                for (
                  t = t.call(n);
                  !(r = (i = t.next()).done) &&
                  (a.push(i.value), !e || a.length !== e);
                  r = !0
                );
              } catch (l) {
                (s = !0), (o = l);
              } finally {
                try {
                  r || null == t.return || t.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            })(n, e) ||
            (function (n, e) {
              if (!n) return;
              if ("string" == typeof n) return A(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              "Object" === t && n.constructor && (t = n.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(n);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return A(n, e);
            })(n, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function A(n, e) {
          (null == e || e > n.length) && (e = n.length);
          for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
          return i;
        }
        e.a = function () {
          var e = l(Object(i.useState)([]), 2),
            t = e[0],
            r = e[1],
            A = l(Object(i.useState)([]), 2),
            c = A[0],
            d = A[1];
          Object(i.useEffect)(function () {
            fetch(
              "".concat(
                n.env.API_URL,
                "/api/news-articles?sort[0]=date%3Aasc&populate=*"
              ),
              { method: "get", headers: { "Content-Type": "application/json" } }
            )
              .then(function (n) {
                return n.json();
              })
              .then(function (n) {
                try {
                  r(n.data);
                } catch (e) {
                  console.log("error: ", e);
                }
              });
            return function () {
              r([]);
            };
          }, []),
            Object(i.useEffect)(function () {
              fetch(
                "".concat(
                  n.env.API_URL,
                  "/api/events?sort[0]=date%3Aasc&populate=*"
                ),
                {
                  method: "get",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  try {
                    d(n.data);
                  } catch (e) {
                    console.log("error: ", e);
                  }
                });
              return function () {
                d([]);
              };
            }, []);
          return o.a.createElement(
            "section",
            { className: "eventsNews" },
            o.a.createElement("h1", null, "Events & News"),
            o.a.createElement(
              "div",
              { className: "eventsNewsCols" },
              c.length > 0 &&
                o.a.createElement(
                  "div",
                  { className: "eventsCol recentEventCol" },
                  o.a.createElement(
                    "div",
                    { className: "recentEventThumb" },
                    o.a.createElement("img", {
                      src: ""
                        .concat(n.env.API_URL)
                        .concat(
                          c[0].attributes.image.data.attributes.formats.medium
                            .url
                        ),
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { className: "title" },
                    c[0].attributes.name
                  ),
                  o.a.createElement(
                    "div",
                    { className: "date" },
                    " ",
                    s()(c[0].attributes.date)
                      .utc()
                      .format("MM/DD/YYYY,  h:mm a")
                  ),
                  o.a.createElement(
                    "div",
                    { className: "teaser" },
                    c[0].attributes.description.substr(0, 100) + " ..."
                  ),
                  o.a.createElement(
                    a.Link,
                    { className: "learnMore black" },
                    "LEARN MORE"
                  )
                ),
              o.a.createElement(
                "div",
                { className: "eventsCol middleCol" },
                o.a.createElement(
                  "h2",
                  null,
                  o.a.createElement(a.Link, null, "Events")
                ),
                c &&
                  c.map(function (n, e) {
                    if (e < 3) {
                      var t = n.attributes.description.substr(0, 100) + " ...";
                      return o.a.createElement(
                        "div",
                        { className: "eventNewsCol", key: n.id },
                        o.a.createElement(
                          "div",
                          { className: "title" },
                          n.attributes.name
                        ),
                        o.a.createElement(
                          "div",
                          { className: "date" },
                          s()(n.attributes.date)
                            .utc()
                            .format("MM/DD/YYYY,  h:mm a")
                        ),
                        o.a.createElement("div", { className: "teaser" }, t),
                        o.a.createElement(
                          a.Link,
                          { className: "learnMore black" },
                          "LEARN MORE"
                        )
                      );
                    }
                  })
              ),
              o.a.createElement(
                "div",
                { className: "eventsCol" },
                o.a.createElement(
                  "h2",
                  null,
                  o.a.createElement(a.Link, null, "News")
                ),
                t &&
                  t.map(function (n, e) {
                    if (e < 3) {
                      var t = n.attributes.description.substr(0, 100) + " ...";
                      return o.a.createElement(
                        "div",
                        { className: "eventNewsCol", key: n.id },
                        o.a.createElement(
                          "div",
                          { className: "title" },
                          n.attributes.title
                        ),
                        o.a.createElement("div", { className: "teaser" }, t),
                        o.a.createElement(
                          a.Link,
                          { className: "learnMore black" },
                          "LEARN MORE"
                        )
                      );
                    }
                  })
              )
            )
          );
        };
      }.call(this, t(365)));
    },
    578: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(579),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    579: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(580),
        l = t(581),
        A = t(582),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    580: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.eventsNews {\n  background-color: #fff;\n}\n.eventsNewsCols {\n  padding: 0 20px;\n}\n\n.eventsNewsCols {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 80px;\n}\n.eventsNewsCols h2 {\n  margin: 0 0 10px 0;\n}\n.eventsNewsCols h2 a:visited,\n.eventsNewsCols h2 a:active {\n  text-decoration: none;\n  color: #011526;\n}\n.eventsNewsCols h2 a:hover {\n  text-decoration: underline;\n}\n.eventsCol.middleCol {\n  padding: 0 30px;\n}\n.eventsCol h2 {\n  font-size: 28px;\n}\n.eventNewsCol .learnMore,\n.recentEventCol .learnMore {\n  margin-top: 10px;\n}\n.eventNewsCol {\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  height: 120px;\n  border-bottom: 1px solid #ccc;\n}\n.eventNewsCol:nth-last-child(1) {\n  border-bottom: none;\n}\n.eventNewsCol .title,\n.eventNewsCol .date,\n.recentEventCol .date {\n  font-weight: bold;\n}\n.eventNewsCol .title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .recentEventThumb img {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.eventNewsCol .teaser,\n.recentEventCol .teaser {\n  margin-top: 5px;\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;;EAEE,eAAe;AACjB",
          sourcesContent: [
            '.eventsNews {\n  background-color: #fff;\n}\n.eventsNewsCols {\n  padding: 0 20px;\n}\n\n.eventsNewsCols {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 80px;\n}\n.eventsNewsCols h2 {\n  margin: 0 0 10px 0;\n}\n.eventsNewsCols h2 a:visited,\n.eventsNewsCols h2 a:active {\n  text-decoration: none;\n  color: #011526;\n}\n.eventsNewsCols h2 a:hover {\n  text-decoration: underline;\n}\n.eventsCol.middleCol {\n  padding: 0 30px;\n}\n.eventsCol h2 {\n  font-size: 28px;\n}\n.eventNewsCol .learnMore,\n.recentEventCol .learnMore {\n  margin-top: 10px;\n}\n.eventNewsCol {\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  height: 120px;\n  border-bottom: 1px solid #ccc;\n}\n.eventNewsCol:nth-last-child(1) {\n  border-bottom: none;\n}\n.eventNewsCol .title,\n.eventNewsCol .date,\n.recentEventCol .date {\n  font-weight: bold;\n}\n.eventNewsCol .title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .recentEventThumb img {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.eventNewsCol .teaser,\n.recentEventCol .teaser {\n  margin-top: 5px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    581: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .eventsNews {\n    background-color: #fff;\n  }\n  .eventsNewsCols {\n    padding: 0 20px;\n  }\n  .eventsNewsCols {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 80px;\n  }\n\n  .eventsNewsCols h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .eventsNewsCols h2 a:visited,\n  .eventsNewsCols h2 a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .eventsNewsCols h2 a:hover {\n    text-decoration: underline;\n  }\n\n  .eventsCol {\n    padding: 0;\n  }\n\n  .eventNewsCol .learnMore,\n  .recentEventCol .learnMore {\n    margin-top: 10px;\n  }\n\n  .recentEventCol {\n    margin-bottom: 50px;\n  }\n  .eventNewsCol {\n    margin-bottom: 30px;\n  }\n\n  .eventNewsCol .title,\n  .eventNewsCol .date {\n    font-weight: bold;\n  }\n\n  .eventNewsCol .title {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .eventNewsCol.recentEventCol .title {\n    font-size: 21px;\n  }\n\n  .eventNewsCol.recentEventCol .recentEventThumb img {\n    width: 100%;\n  }\n\n  .eventNewsCol .teaser {\n    margin-top: 5px;\n  }\n  .eventsCol.middleCol {\n    padding: 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,eAAe;EACjB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,UAAU;EACZ;;EAEA;;IAEE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;EACA;IACE,UAAU;EACZ;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .eventsNews {\n    background-color: #fff;\n  }\n  .eventsNewsCols {\n    padding: 0 20px;\n  }\n  .eventsNewsCols {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 80px;\n  }\n\n  .eventsNewsCols h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .eventsNewsCols h2 a:visited,\n  .eventsNewsCols h2 a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .eventsNewsCols h2 a:hover {\n    text-decoration: underline;\n  }\n\n  .eventsCol {\n    padding: 0;\n  }\n\n  .eventNewsCol .learnMore,\n  .recentEventCol .learnMore {\n    margin-top: 10px;\n  }\n\n  .recentEventCol {\n    margin-bottom: 50px;\n  }\n  .eventNewsCol {\n    margin-bottom: 30px;\n  }\n\n  .eventNewsCol .title,\n  .eventNewsCol .date {\n    font-weight: bold;\n  }\n\n  .eventNewsCol .title {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .eventNewsCol.recentEventCol .title {\n    font-size: 21px;\n  }\n\n  .eventNewsCol.recentEventCol .recentEventThumb img {\n    width: 100%;\n  }\n\n  .eventNewsCol .teaser {\n    margin-top: 5px;\n  }\n  .eventsCol.middleCol {\n    padding: 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    582: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .eventsCol h2 {\n    font-size: 21px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/600Max.css",
          ],
          names: [],
          mappings: "AAAA;EACE;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .eventsCol h2 {\n    font-size: 21px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    590: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(591),
        l = t(592),
        A = t(593),
        c = t(594),
        d = r()(o.a);
      d.i(s.a),
        d.i(l.a),
        d.i(A.a),
        d.i(c.a),
        d.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = d);
    },
    591: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (min-width: 901px) {\n  .tablet.artistTiles {\n    display: none;\n  }\n\n  .desktop.artistTiles {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;EAC7B;AACF",
          sourcesContent: [
            "@media only screen and (min-width: 901px) {\n  .tablet.artistTiles {\n    display: none;\n  }\n\n  .desktop.artistTiles {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    592: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .desktop.artistTiles {\n    display: none;\n  }\n  .tablet.artistTiles {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-start;\n    margin-bottom: 50px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .desktop.artistTiles {\n    display: none;\n  }\n  .tablet.artistTiles {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-start;\n    margin-bottom: 50px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    593: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 900px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    594: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        ".splide__container {\n  box-sizing: border-box;\n  position: relative;\n}\n.splide__list {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform-style: preserve-3d;\n}\n.splide.is-initialized:not(.is-active) .splide__list {\n  display: block;\n}\n.splide__pagination {\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 0;\n  pointer-events: none;\n}\n.splide__pagination li {\n  display: inline-block;\n  line-height: 1;\n  list-style-type: none;\n  margin: 0;\n  pointer-events: auto;\n}\n.splide__progress__bar {\n  width: 0;\n}\n.splide {\n  outline: none;\n  position: relative;\n  visibility: hidden;\n}\n.splide.is-initialized,\n.splide.is-rendered {\n  visibility: visible;\n}\n.splide__slide {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  box-sizing: border-box;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  list-style-type: none !important;\n  margin: 0;\n  outline: none;\n  position: relative;\n}\n.splide__slide img {\n  vertical-align: bottom;\n}\n.splide__slider {\n  position: relative;\n}\n.splide__spinner {\n  animation: splide-loading 1s linear infinite;\n  border: 2px solid #999;\n  border-left-color: transparent;\n  border-radius: 50%;\n  bottom: 0;\n  contain: strict;\n  display: inline-block;\n  height: 20px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n}\n.splide__track {\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n}\n@keyframes splide-loading {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n.splide--draggable > .splide__slider > .splide__track,\n.splide--draggable > .splide__track {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.splide--fade > .splide__slider > .splide__track > .splide__list,\n.splide--fade > .splide__track > .splide__list {\n  display: block;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--fade > .splide__track > .splide__list > .splide__slide {\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--fade > .splide__track > .splide__list > .splide__slide.is-active {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n.splide--rtl {\n  direction: rtl;\n}\n.splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,\n.splide--ttb.is-active > .splide__track > .splide__list {\n  display: block;\n}\n.splide__arrow {\n  -ms-flex-align: center;\n  align-items: center;\n  background: #ccc;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2em;\n  -ms-flex-pack: center;\n  justify-content: center;\n  opacity: 0.7;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 2em;\n  z-index: 1;\n}\n.splide__arrow svg {\n  fill: #000;\n  height: 1.2em;\n  width: 1.2em;\n}\n.splide__arrow:hover {\n  opacity: 0.9;\n}\n.splide__arrow:focus {\n  outline: none;\n}\n.splide__arrow--prev {\n  left: 1em;\n}\n.splide__arrow--prev svg {\n  transform: scaleX(-1);\n}\n.splide__arrow--next {\n  right: 1em;\n}\n.splide__pagination {\n  bottom: -1em;\n  left: 0;\n  padding: 0 1em;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n.splide__pagination__page {\n  background: #011526;\n  border: 0;\n  border-radius: 50%;\n  display: inline-block;\n  height: 8px;\n  margin: 3px;\n  opacity: 0.7;\n  padding: 0;\n  transition: transform 0.2s linear;\n  width: 8px;\n}\n.splide__pagination__page.is-active {\n  background: #ccc;\n  transform: scale(1.4);\n}\n.splide__pagination__page:hover {\n  cursor: pointer;\n  opacity: 0.9;\n}\n.splide__pagination__page:focus {\n  outline: none;\n}\n.splide__progress__bar {\n  background: #ccc;\n  height: 3px;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--nav > .splide__track > .splide__list > .splide__slide {\n  border: 3px solid transparent;\n  cursor: pointer;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {\n  border: 3px solid #000;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide:focus,\n.splide--nav > .splide__track > .splide__list > .splide__slide:focus {\n  outline: none;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {\n  left: auto;\n  right: 1em;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: scaleX(1);\n}\n.splide--rtl > .splide__arrows .splide__arrow--next,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {\n  left: 1em;\n  right: auto;\n}\n.splide--rtl > .splide__arrows .splide__arrow--next svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: scaleX(-1);\n}\n.splide--ttb > .splide__arrows .splide__arrow,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow {\n  left: 50%;\n  transform: translate(-50%);\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {\n  top: 1em;\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: rotate(-90deg);\n}\n.splide--ttb > .splide__arrows .splide__arrow--next,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {\n  bottom: 1em;\n  top: auto;\n}\n.splide--ttb > .splide__arrows .splide__arrow--next svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: rotate(90deg);\n}\n.splide--ttb > .splide__pagination,\n.splide--ttb > .splide__slider > .splide__pagination {\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  left: auto;\n  padding: 1em 0;\n  right: 0.5em;\n  top: 0;\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/ArtistTiles/css/splide.min.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,uBAAuB;EACvB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,QAAQ;AACV;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,sBAAsB;EACtB,oBAAoB;EACpB,cAAc;EACd,gCAAgC;EAChC,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,4CAA4C;EAC5C,sBAAsB;EACtB,8BAA8B;EAC9B,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,wBAAwB;EAC1B;AACF;AACA;;EAEE,yBAAyB;EACzB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;;EAEE,cAAc;AAChB;AACA;;;;;;EAME,OAAO;EACP,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,UAAU;AACZ;AACA;;;;;;EAME,UAAU;EACV,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;;EAEE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,aAAa;EACb,WAAW;EACX,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,UAAU;AACZ;AACA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;AACX;AACA;EACE,qBAAqB;AACvB;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;EACZ,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;EACV,iCAAiC;EACjC,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;;;;;;EAME,6BAA6B;EAC7B,eAAe;AACjB;AACA;;;;;;EAME,sBAAsB;AACxB;AACA;;;;;;EAME,aAAa;AACf;AACA;;;;;;;EAOE,UAAU;EACV,UAAU;AACZ;AACA;;;;;;;;EAQE,oBAAoB;AACtB;AACA;;;;;;;EAOE,SAAS;EACT,WAAW;AACb;AACA;;;;;;;;EAQE,qBAAqB;AACvB;AACA;;;;;;;EAOE,SAAS;EACT,0BAA0B;AAC5B;AACA;;;;;;;EAOE,QAAQ;AACV;AACA;;;;;;;;EAQE,yBAAyB;AAC3B;AACA;;;;;;;EAOE,WAAW;EACX,SAAS;AACX;AACA;;;;;;;;EAQE,wBAAwB;AAC1B;AACA;;EAEE,SAAS;EACT,oBAAoB;EACpB,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;EACtB,UAAU;EACV,cAAc;EACd,YAAY;EACZ,MAAM;AACR",
          sourcesContent: [
            ".splide__container {\n  box-sizing: border-box;\n  position: relative;\n}\n.splide__list {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform-style: preserve-3d;\n}\n.splide.is-initialized:not(.is-active) .splide__list {\n  display: block;\n}\n.splide__pagination {\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 0;\n  pointer-events: none;\n}\n.splide__pagination li {\n  display: inline-block;\n  line-height: 1;\n  list-style-type: none;\n  margin: 0;\n  pointer-events: auto;\n}\n.splide__progress__bar {\n  width: 0;\n}\n.splide {\n  outline: none;\n  position: relative;\n  visibility: hidden;\n}\n.splide.is-initialized,\n.splide.is-rendered {\n  visibility: visible;\n}\n.splide__slide {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  box-sizing: border-box;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  list-style-type: none !important;\n  margin: 0;\n  outline: none;\n  position: relative;\n}\n.splide__slide img {\n  vertical-align: bottom;\n}\n.splide__slider {\n  position: relative;\n}\n.splide__spinner {\n  animation: splide-loading 1s linear infinite;\n  border: 2px solid #999;\n  border-left-color: transparent;\n  border-radius: 50%;\n  bottom: 0;\n  contain: strict;\n  display: inline-block;\n  height: 20px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n}\n.splide__track {\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n}\n@keyframes splide-loading {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n.splide--draggable > .splide__slider > .splide__track,\n.splide--draggable > .splide__track {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.splide--fade > .splide__slider > .splide__track > .splide__list,\n.splide--fade > .splide__track > .splide__list {\n  display: block;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--fade > .splide__track > .splide__list > .splide__slide {\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--fade > .splide__track > .splide__list > .splide__slide.is-active {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n.splide--rtl {\n  direction: rtl;\n}\n.splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,\n.splide--ttb.is-active > .splide__track > .splide__list {\n  display: block;\n}\n.splide__arrow {\n  -ms-flex-align: center;\n  align-items: center;\n  background: #ccc;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2em;\n  -ms-flex-pack: center;\n  justify-content: center;\n  opacity: 0.7;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 2em;\n  z-index: 1;\n}\n.splide__arrow svg {\n  fill: #000;\n  height: 1.2em;\n  width: 1.2em;\n}\n.splide__arrow:hover {\n  opacity: 0.9;\n}\n.splide__arrow:focus {\n  outline: none;\n}\n.splide__arrow--prev {\n  left: 1em;\n}\n.splide__arrow--prev svg {\n  transform: scaleX(-1);\n}\n.splide__arrow--next {\n  right: 1em;\n}\n.splide__pagination {\n  bottom: -1em;\n  left: 0;\n  padding: 0 1em;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n.splide__pagination__page {\n  background: #011526;\n  border: 0;\n  border-radius: 50%;\n  display: inline-block;\n  height: 8px;\n  margin: 3px;\n  opacity: 0.7;\n  padding: 0;\n  transition: transform 0.2s linear;\n  width: 8px;\n}\n.splide__pagination__page.is-active {\n  background: #ccc;\n  transform: scale(1.4);\n}\n.splide__pagination__page:hover {\n  cursor: pointer;\n  opacity: 0.9;\n}\n.splide__pagination__page:focus {\n  outline: none;\n}\n.splide__progress__bar {\n  background: #ccc;\n  height: 3px;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--nav > .splide__track > .splide__list > .splide__slide {\n  border: 3px solid transparent;\n  cursor: pointer;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {\n  border: 3px solid #000;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide:focus,\n.splide--nav > .splide__track > .splide__list > .splide__slide:focus {\n  outline: none;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {\n  left: auto;\n  right: 1em;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: scaleX(1);\n}\n.splide--rtl > .splide__arrows .splide__arrow--next,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {\n  left: 1em;\n  right: auto;\n}\n.splide--rtl > .splide__arrows .splide__arrow--next svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: scaleX(-1);\n}\n.splide--ttb > .splide__arrows .splide__arrow,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow {\n  left: 50%;\n  transform: translate(-50%);\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {\n  top: 1em;\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: rotate(-90deg);\n}\n.splide--ttb > .splide__arrows .splide__arrow--next,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {\n  bottom: 1em;\n  top: auto;\n}\n.splide--ttb > .splide__arrows .splide__arrow--next svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: rotate(90deg);\n}\n.splide--ttb > .splide__pagination,\n.splide--ttb > .splide__slider > .splide__pagination {\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  left: auto;\n  padding: 1em 0;\n  right: 0.5em;\n  top: 0;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    595: function (n, e, t) {
      n.exports = t.p + "img/d7aed5df3e1fa7810ce054fa4ecbf755.png";
    },
    596: function (n, e, t) {
      n.exports = t.p + "img/ffd4ef54b8c9f3dd71d5d04326325314.png";
    },
    597: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(598),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    598: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(599),
        l = t(600),
        A = t(601),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    599: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.newsLetter input {\n  margin-right: 3px;\n}\n\n.homeBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.homeBanner img {\n  width: 100%;\n}\n\n.homeBanner .bannerContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n}\n\n.homeBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 1em;\n  padding: 0 20px;\n}\n.homeBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 21px;\n  text-align: center;\n  padding: 0 20px;\n}\n.homeBanner .blueButton {\n  margin-top: 3em;\n}\n\ndiv.featuredArtists {\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,uCAAuC;EACvC,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sBAAsB;AACxB",
          sourcesContent: [
            '.newsLetter input {\n  margin-right: 3px;\n}\n\n.homeBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.homeBanner img {\n  width: 100%;\n}\n\n.homeBanner .bannerContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n}\n\n.homeBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 1em;\n  padding: 0 20px;\n}\n.homeBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 21px;\n  text-align: center;\n  padding: 0 20px;\n}\n.homeBanner .blueButton {\n  margin-top: 3em;\n}\n\ndiv.featuredArtists {\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    600: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    margin-bottom: 0.5em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 18px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 1em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    margin-bottom: 0.5em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 18px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 1em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    601: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n    min-height: 180px;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 28px;\n    text-align: center;\n    margin-bottom: 0.3em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 0.5em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n    min-height: 180px;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 28px;\n    text-align: center;\n    margin-bottom: 0.3em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 0.5em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    602: function (n, e, t) {
      n.exports = t.p + "img/d3cf498373a40ea44fdacc90c5da4073.png";
    },
    622: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(536),
        r = t(105),
        s = t.n(r),
        l = t(590),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(595)),
        d = t.n(c),
        p = t(596),
        u = t.n(p),
        f = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 };
      function m(n) {
        n.length = 0;
      }
      function B(n) {
        return !x(n) && "object" == typeof n;
      }
      function C(n) {
        return Array.isArray(n);
      }
      function E(n) {
        return "string" == typeof n;
      }
      function g(n) {
        return void 0 === n;
      }
      function x(n) {
        return null === n;
      }
      function h(n) {
        return n instanceof HTMLElement;
      }
      function b(n) {
        return C(n) ? n : [n];
      }
      function y(n, e) {
        b(n).forEach(e);
      }
      function v(n, e) {
        return n.indexOf(e) > -1;
      }
      function w(n, e) {
        return n.push(...b(e)), n;
      }
      var I = Array.prototype;
      function _(n, e, t) {
        return I.slice.call(n, e, t);
      }
      function k(n, e, t) {
        n &&
          y(e, (e) => {
            e && n.classList[t ? "add" : "remove"](e);
          });
      }
      function j(n, e) {
        k(n, E(e) ? e.split(" ") : e, !0);
      }
      function z(n, e) {
        y(e, n.appendChild.bind(n));
      }
      function L(n, e) {
        y(n, (n) => {
          const t = e.parentNode;
          t && t.insertBefore(n, e);
        });
      }
      function N(n, e) {
        return h(n) && (n.msMatchesSelector || n.matches).call(n, e);
      }
      function M(n, e) {
        return n ? _(n.children).filter((n) => N(n, e)) : [];
      }
      function W(n, e) {
        return e ? M(n, e)[0] : n.firstElementChild;
      }
      function S(n, e, t) {
        if (n) {
          let i = Object.keys(n);
          i = t ? i.reverse() : i;
          for (let t = 0; t < i.length; t++) {
            const o = i[t];
            if ("__proto__" !== o && !1 === e(n[o], o)) break;
          }
        }
        return n;
      }
      function P(n) {
        return (
          _(arguments, 1).forEach((e) => {
            S(e, (t, i) => {
              n[i] = e[i];
            });
          }),
          n
        );
      }
      function R(n, e) {
        return (
          S(e, (e, t) => {
            C(e)
              ? (n[t] = e.slice())
              : B(e)
              ? (n[t] = R(B(n[t]) ? n[t] : {}, e))
              : (n[t] = e);
          }),
          n
        );
      }
      function T(n, e) {
        n &&
          y(e, (e) => {
            n.removeAttribute(e);
          });
      }
      function O(n, e, t) {
        B(e)
          ? S(e, (e, t) => {
              O(n, t, e);
            })
          : x(t)
          ? T(n, e)
          : n.setAttribute(e, String(t));
      }
      function U(n, e, t) {
        const i = document.createElement(n);
        return e && (E(e) ? j(i, e) : O(i, e)), t && z(t, i), i;
      }
      function Y(n, e, t) {
        if (g(t)) return getComputedStyle(n)[e];
        if (!x(t)) {
          const { style: i } = n;
          (t = "" + t), i[e] !== t && (i[e] = t);
        }
      }
      function q(n, e) {
        Y(n, "display", e);
      }
      function X(n, e) {
        return n.getAttribute(e);
      }
      function F(n, e) {
        return n && n.classList.contains(e);
      }
      function D(n) {
        return n.getBoundingClientRect();
      }
      function H(n) {
        y(n, (n) => {
          n && n.parentNode && n.parentNode.removeChild(n);
        });
      }
      function Z(n) {
        return W(new DOMParser().parseFromString(n, "text/html").body);
      }
      function $(n, e) {
        n.preventDefault(),
          e && (n.stopPropagation(), n.stopImmediatePropagation());
      }
      function Q(n, e) {
        return n && n.querySelector(e);
      }
      function G(n, e) {
        return _(n.querySelectorAll(e));
      }
      function V(n, e) {
        k(n, e, !1);
      }
      function J(n) {
        return E(n) ? n : n ? n + "px" : "";
      }
      function K(n, e = "") {
        if (!n) throw new Error("[splide] " + e);
      }
      function nn(n) {
        setTimeout(n);
      }
      var en = () => {};
      function tn(n) {
        return requestAnimationFrame(n);
      }
      var { min: on, max: an, floor: rn, ceil: sn, abs: ln } = Math;
      function An(n, e, t, i) {
        const o = on(e, t),
          a = an(e, t);
        return i ? o < n && n < a : o <= n && n <= a;
      }
      function cn(n, e, t) {
        const i = on(e, t),
          o = an(e, t);
        return on(an(i, n), o);
      }
      function dn(n) {
        return +(n > 0) - +(n < 0);
      }
      function pn(n, e) {
        return (
          y(e, (e) => {
            n = n.replace("%s", "" + e);
          }),
          n
        );
      }
      function un(n) {
        return n < 10 ? "0" + n : "" + n;
      }
      var fn = {};
      function mn(n) {
        const { event: e } = n,
          t = {};
        let i = [];
        function o(n, e, t) {
          a(n, e, (n, e) => {
            i = i.filter(
              (i) =>
                !!(i[0] !== n || i[1] !== e || (t && i[2] !== t)) ||
                (n.removeEventListener(e, i[2], i[3]), !1)
            );
          });
        }
        function a(n, e, t) {
          y(n, (n) => {
            n && e.split(" ").forEach(t.bind(null, n));
          });
        }
        function r() {
          (i = i.filter((n) => o(n[0], n[1]))), e.offBy(t);
        }
        return (
          e.on("destroy", r, t),
          {
            on: function (n, i, o) {
              e.on(n, i, t, o);
            },
            off: function (n) {
              e.off(n, t);
            },
            emit: e.emit,
            bind: function (n, e, t, o) {
              a(n, e, (n, e) => {
                i.push([n, e, t, o]), n.addEventListener(e, t, o);
              });
            },
            unbind: o,
            destroy: r,
          }
        );
      }
      function Bn(n, e, t, i) {
        const { now: o } = Date;
        let a,
          r,
          s = 0,
          l = !0,
          A = 0;
        function c() {
          if (!l) {
            const r = o() - a;
            if (
              (r >= n ? ((s = 1), (a = o())) : (s = r / n),
              t && t(s),
              1 === s && (e(), i && ++A >= i))
            )
              return d();
            tn(c);
          }
        }
        function d() {
          l = !0;
        }
        function p() {
          cancelAnimationFrame(r), (s = 0), (r = 0), (l = !0);
        }
        return {
          start: function (e) {
            !e && p(), (a = o() - (e ? s * n : 0)), (l = !1), tn(c);
          },
          rewind: function () {
            (a = o()), (s = 0), t && t(s);
          },
          pause: d,
          cancel: p,
          set: function (e) {
            n = e;
          },
          isPaused: function () {
            return l;
          },
        };
      }
      function Cn(n, e) {
        let t;
        return function () {
          t ||
            ((t = Bn(
              e || 0,
              () => {
                n.apply(this, arguments), (t = null);
              },
              null,
              1
            )),
            t.start());
        };
      }
      var En = {
        marginRight: ["marginBottom", "marginLeft"],
        autoWidth: ["autoHeight"],
        fixedWidth: ["fixedHeight"],
        paddingLeft: ["paddingTop", "paddingRight"],
        paddingRight: ["paddingBottom", "paddingLeft"],
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: ["ArrowUp", "ArrowRight"],
        ArrowRight: ["ArrowDown", "ArrowLeft"],
      };
      var gn = ["is-active", "is-visible", "is-prev", "is-next", "is-loading"],
        xn = {
          slide: "splide__slide",
          clone: "splide__slide--clone",
          arrows: "splide__arrows",
          arrow: "splide__arrow",
          prev: "splide__arrow--prev",
          next: "splide__arrow--next",
          pagination: "splide__pagination",
          page: "splide__pagination__page",
          spinner: "splide__spinner",
        };
      var hn = [
        "role",
        "aria-controls",
        "aria-current",
        "aria-label",
        "aria-hidden",
        "aria-orientation",
        "tabindex",
        "disabled",
      ];
      function bn(n, e, t, i) {
        const { on: o, emit: a, bind: r, destroy: s } = mn(n),
          { Components: l, root: A, options: c } = n,
          { isNavigation: d, updateOnMove: p } = c,
          { resolve: u } = l.Direction,
          f = X(i, "style"),
          m = t > -1,
          B = W(i, ".splide__slide__container"),
          C = c.focusableNodes && G(i, c.focusableNodes);
        let E;
        function g() {
          const o = m ? t : e,
            a = pn(c.i18n.slideX, o + 1),
            r = n.splides.map((n) => n.splide.root.id).join(" ");
          O(i, "aria-label", a),
            O(i, "aria-controls", r),
            O(i, "role", "menuitem"),
            b(y());
        }
        function x() {
          E || h();
        }
        function h() {
          if (!E) {
            const { index: t } = n;
            b(y()),
              (function (n) {
                const e = !n && (!y() || m);
                O(i, "aria-hidden", e || null),
                  O(i, "tabindex", !e && c.slideFocus ? 0 : null),
                  C &&
                    C.forEach((n) => {
                      O(n, "tabindex", e ? -1 : null);
                    });
                n !== F(i, "is-visible") &&
                  (k(i, "is-visible", n), a(n ? "visible" : "hidden", v));
              })(
                (function () {
                  if (n.is("fade")) return y();
                  const e = D(l.Elements.track),
                    t = D(i),
                    o = u("left"),
                    a = u("right");
                  return rn(e[o]) <= sn(t[o]) && rn(t[a]) <= sn(e[a]);
                })()
              ),
              k(i, "is-prev", e === t - 1),
              k(i, "is-next", e === t + 1);
          }
        }
        function b(n) {
          n !== F(i, "is-active") &&
            (k(i, "is-active", n),
            d && O(i, "aria-current", n || null),
            a(n ? "active" : "inactive", v));
        }
        function y() {
          const { index: i } = n;
          return i === e || (c.cloneStatus && i === t);
        }
        const v = {
          index: e,
          slideIndex: t,
          slide: i,
          container: B,
          isClone: m,
          mount: function () {
            m || (i.id = `${A.id}-slide${un(e + 1)}`),
              r(i, "click keydown", (n) => {
                a("click" === n.type ? "click" : "slide:keydown", v, n);
              }),
              o(["refresh", "repositioned", "shifted", "moved", "scrolled"], h),
              o("navigation:mounted", g),
              p && o("move", x);
          },
          destroy: function () {
            (E = !0), s(), V(i, gn), T(i, hn), O(i, "style", f);
          },
          update: h,
          style: function (n, e, t) {
            Y((t && B) || i, n, e);
          },
          isWithin: function (t, i) {
            let o = ln(t - e);
            return (
              m || (!c.rewind && !n.is("loop")) || (o = on(o, n.length - o)),
              o <= i
            );
          },
        };
        return v;
      }
      var yn = { passive: !1, capture: !0 };
      var vn = ["Left", "Right", "Up", "Down"];
      var wn = [" ", "Enter", "Spacebar"];
      var In = Object.freeze({
          __proto__: null,
          Options: function (n, e, t) {
            const i = Cn(l);
            let o, a, r;
            function s(n) {
              n && removeEventListener("resize", i);
            }
            function l() {
              const e = ((i = (n) => n[1].matches), _(a).filter(i)[0] || []);
              var i;
              e[0] !== r &&
                (function (e) {
                  const i = t.breakpoints[e] || o;
                  i.destroy
                    ? ((n.options = o), n.destroy("completely" === i.destroy))
                    : (n.state.is(5) && (s(!0), n.mount()), (n.options = i));
                })((r = e[0]));
            }
            return {
              setup: function () {
                try {
                  R(t, JSON.parse(X(n.root, "data-splide")));
                } catch (i) {
                  K(!1, i.message);
                }
                o = R({}, t);
                const { breakpoints: e } = t;
                if (e) {
                  const n = "min" === t.mediaQuery;
                  (a = Object.keys(e)
                    .sort((e, t) => (n ? +t - +e : +e - +t))
                    .map((e) => [
                      e,
                      matchMedia(`(${n ? "min" : "max"}-width:${e}px)`),
                    ])),
                    l();
                }
              },
              mount: function () {
                a && addEventListener("resize", i);
              },
              destroy: s,
            };
          },
          Direction: function (n, e, t) {
            return {
              resolve: function (n, e) {
                const { direction: i } = t;
                return (
                  En[n]["rtl" !== i || e ? ("ttb" === i ? 0 : -1) : 1] || n
                );
              },
              orient: function (n) {
                return n * ("rtl" === t.direction ? 1 : -1);
              },
            };
          },
          Elements: function (n, e, t) {
            const { on: i } = mn(n),
              { root: o } = n,
              a = {},
              r = [];
            let s, l, A, c;
            function d() {
              !(function () {
                (l = W(o, ".splide__slider")),
                  (A = Q(o, ".splide__track")),
                  (c = W(A, ".splide__list")),
                  K(A && c, "A track/list element is missing."),
                  w(r, M(c, ".splide__slide:not(.splide__slide--clone)"));
                const n = B(".splide__autoplay"),
                  e = B(".splide__arrows");
                P(a, {
                  root: o,
                  slider: l,
                  track: A,
                  list: c,
                  slides: r,
                  arrows: e,
                  autoplay: n,
                  prev: Q(e, ".splide__arrow--prev"),
                  next: Q(e, ".splide__arrow--next"),
                  bar: Q(B(".splide__progress"), ".splide__progress__bar"),
                  play: Q(n, ".splide__play"),
                  pause: Q(n, ".splide__pause"),
                });
              })(),
                (function () {
                  const n =
                    o.id ||
                    ((e = "splide"), `${e}${un((fn[e] = (fn[e] || 0) + 1))}`);
                  var e;
                  (o.id = n),
                    (A.id = A.id || n + "-track"),
                    (c.id = c.id || n + "-list");
                })(),
                j(o, (s = C()));
            }
            function p() {
              [o, A, c].forEach((n) => {
                T(n, "style");
              }),
                m(r),
                V(o, s);
            }
            function u() {
              p(), d();
            }
            function f() {
              V(o, s), j(o, (s = C()));
            }
            function B(n) {
              return W(o, n) || W(l, n);
            }
            function C() {
              return [
                "splide--" + t.type,
                "splide--" + t.direction,
                t.drag && "splide--draggable",
                t.isNavigation && "splide--nav",
                "is-active",
              ];
            }
            return P(a, {
              setup: d,
              mount: function () {
                i("refresh", u, 8), i("updated", f);
              },
              destroy: p,
            });
          },
          Slides: function (n, e, t) {
            const { on: i, emit: o, bind: a } = mn(n),
              { slides: r, list: s } = e.Elements,
              l = [];
            function A() {
              r.forEach((n, e) => {
                p(n, e, -1);
              });
            }
            function c() {
              f((n) => {
                n.destroy();
              }),
                m(l);
            }
            function d() {
              c(), A();
            }
            function p(e, t, i) {
              const o = bn(n, t, i, e);
              o.mount(), l.push(o);
            }
            function u(n) {
              return n ? B((n) => !n.isClone) : l;
            }
            function f(n, e) {
              u(e).forEach(n);
            }
            function B(n) {
              return l.filter(
                "function" == typeof n
                  ? n
                  : (e) => (E(n) ? N(e.slide, n) : v(b(n), e.index))
              );
            }
            return {
              mount: function () {
                A(),
                  i("refresh", d),
                  i(["mounted", "refresh"], () => {
                    l.sort((n, e) => n.index - e.index);
                  });
              },
              destroy: c,
              update: function () {
                f((n) => {
                  n.update();
                });
              },
              register: p,
              get: u,
              getIn: function (n) {
                const { Controller: i } = e,
                  o = i.toIndex(n),
                  a = i.hasFocus() ? 1 : t.perPage;
                return B((n) => An(n.index, o, o + a - 1));
              },
              getAt: function (n) {
                return B(n)[0];
              },
              add: function (n, e) {
                y(n, (n) => {
                  if ((E(n) && (n = Z(n)), h(n))) {
                    const i = r[e];
                    i ? L(n, i) : z(s, n),
                      j(n, t.classes.slide),
                      (function (n, e) {
                        const t = G(n, "img");
                        let { length: i } = t;
                        i
                          ? t.forEach((n) => {
                              a(n, "load error", () => {
                                --i || e();
                              });
                            })
                          : e();
                      })(n, o.bind(null, "resize"));
                  }
                }),
                  o("refresh");
              },
              remove: function (n) {
                H(B(n).map((n) => n.slide)), o("refresh");
              },
              forEach: f,
              filter: B,
              style: function (n, e, t) {
                f((i) => {
                  i.style(n, e, t);
                });
              },
              getLength: function (n) {
                return n ? r.length : l.length;
              },
              isEnough: function () {
                return l.length > t.perPage;
              },
            };
          },
          Layout: function (n, e, t) {
            const { on: i, bind: o, emit: a } = mn(n),
              { Slides: r } = e,
              { resolve: s } = e.Direction,
              { root: l, track: A, list: c } = e.Elements,
              { getAt: d } = r;
            let p, u;
            function f() {
              (u = null),
                (p = "ttb" === t.direction),
                Y(l, "maxWidth", J(t.width)),
                Y(A, s("paddingLeft"), C(!1)),
                Y(A, s("paddingRight"), C(!0)),
                m();
            }
            function m() {
              const n = D(l);
              (u && u.width === n.width && u.height === n.height) ||
                (Y(
                  A,
                  "height",
                  (function () {
                    let n = "";
                    p &&
                      ((n = E()),
                      K(n, "height or heightRatio is missing."),
                      (n = `calc(${n} - ${C(!1)} - ${C(!0)})`));
                    return n;
                  })()
                ),
                r.style(s("marginRight"), J(t.gap)),
                r.style(
                  "width",
                  (t.autoWidth ? "" : J(t.fixedWidth) || (p ? "" : g())) || null
                ),
                r.style(
                  "height",
                  J(t.fixedHeight) ||
                    (p ? (t.autoHeight ? "" : g()) : E()) ||
                    null,
                  !0
                ),
                (u = n),
                a("resized"));
            }
            function C(n) {
              const { padding: e } = t,
                i = s(n ? "right" : "left");
              return (e && J(e[i] || (B(e) ? 0 : e))) || "0px";
            }
            function E() {
              return J(t.height || D(c).width * t.heightRatio);
            }
            function g() {
              const n = J(t.gap);
              return `calc((100%${n && " + " + n})/${t.perPage || 1}${
                n && " - " + n
              })`;
            }
            function x(n, e) {
              const t = d(n);
              if (t) {
                const n = D(t.slide)[s("right")],
                  i = D(c)[s("left")];
                return ln(n - i) + (e ? 0 : h());
              }
              return 0;
            }
            function h() {
              const n = d(0);
              return (n && parseFloat(Y(n.slide, s("marginRight")))) || 0;
            }
            return {
              mount: function () {
                f(),
                  o(window, "resize load", Cn(a.bind(this, "resize"))),
                  i(["updated", "refresh"], f),
                  i("resize", m);
              },
              listSize: function () {
                return D(c)[s("width")];
              },
              slideSize: function (n, e) {
                const t = d(n || 0);
                return t ? D(t.slide)[s("width")] + (e ? 0 : h()) : 0;
              },
              sliderSize: function () {
                return x(n.length - 1, !0) - x(-1, !0);
              },
              totalSize: x,
              getPadding: function (n) {
                return (
                  parseFloat(Y(A, s("padding" + (n ? "Right" : "Left")))) || 0
                );
              },
            };
          },
          Clones: function (n, e, t) {
            const { on: i, emit: o } = mn(n),
              { Elements: a, Slides: r } = e,
              { resolve: s } = e.Direction,
              l = [];
            let A;
            function c() {
              (A = f()) &&
                (!(function (e) {
                  const i = r.get().slice(),
                    { length: o } = i;
                  if (o) {
                    for (; i.length < e; ) w(i, i);
                    w(i.slice(-e), i.slice(0, e)).forEach((s, A) => {
                      const c = A < e,
                        d = (function (e, i) {
                          const o = e.cloneNode(!0);
                          return (
                            j(o, t.classes.clone),
                            (o.id = `${n.root.id}-clone${un(i + 1)}`),
                            o
                          );
                        })(s.slide, A);
                      c ? L(d, i[0].slide) : z(a.list, d),
                        w(l, d),
                        r.register(d, A - e + (c ? 0 : o), s.index);
                    });
                  }
                })(A),
                o("resize"));
            }
            function d() {
              H(l), m(l);
            }
            function p() {
              d(), c();
            }
            function u() {
              A < f() && o("refresh");
            }
            function f() {
              let { clones: e } = t;
              if (n.is("loop")) {
                if (!e) {
                  const i = (function (n, e) {
                    if (E(e)) {
                      const t = U(
                        "div",
                        { style: `width: ${e}; position: absolute;` },
                        n
                      );
                      (e = D(t).width), H(t);
                    }
                    return e;
                  })(a.list, t[s("fixedWidth")]);
                  e =
                    ((i && sn(D(a.track)[s("width")] / i)) ||
                      (t[s("autoWidth")] && n.length) ||
                      t.perPage) * (t.drag ? (t.flickMaxPages || 1) + 1 : 2);
                }
              } else e = 0;
              return e;
            }
            return {
              mount: function () {
                c(), i("refresh", p), i(["updated", "resize"], u);
              },
              destroy: d,
            };
          },
          Move: function (n, e, t) {
            const { on: i, emit: o } = mn(n),
              {
                slideSize: a,
                getPadding: r,
                totalSize: s,
                listSize: l,
                sliderSize: A,
              } = e.Layout,
              { resolve: c, orient: d } = e.Direction,
              { list: p, track: u } = e.Elements;
            let f;
            function m() {
              y() || (e.Scroll.cancel(), B(n.index), o("repositioned"));
            }
            function B(n) {
              C(x(n, !0));
            }
            function C(e, t) {
              if (!n.is("fade")) {
                const i = t
                  ? e
                  : (function (e) {
                      if (n.is("loop")) {
                        const n = d(e - h()),
                          t = v(!1, e) && n < 0,
                          i = v(!0, e) && n > 0;
                        (t || i) && (e = E(e, i));
                      }
                      return e;
                    })(e);
                (p.style.transform = `translate${c("X")}(${i}px)`),
                  e !== i && o("shifted");
              }
            }
            function E(n, e) {
              const t = n - b(e),
                i = A();
              return (n -= d(i * (sn(ln(t) / i) || 1)) * (e ? 1 : -1));
            }
            function x(e, i) {
              const o = d(
                s(e - 1) -
                  (function (n) {
                    const { focus: e } = t;
                    return "center" === e
                      ? (l() - a(n, !0)) / 2
                      : +e * a(n) || 0;
                  })(e)
              );
              return i
                ? (function (e) {
                    t.trimSpace &&
                      n.is("slide") &&
                      (e = cn(e, 0, d(A() - l())));
                    return e;
                  })(o)
                : o;
            }
            function h() {
              const n = c("left");
              return D(p)[n] - D(u)[n] + d(r(!1));
            }
            function b(n) {
              return x(n ? e.Controller.getEnd() : 0, !!t.trimSpace);
            }
            function y() {
              return n.state.is(4) && t.waitForTransition;
            }
            function v(n, e) {
              e = g(e) ? h() : e;
              const t = !0 !== n && d(e) < d(b(!1)),
                i = !1 !== n && d(e) > d(b(!0));
              return t || i;
            }
            return {
              mount: function () {
                (f = e.Transition),
                  i(["mounted", "resized", "updated", "refresh"], m);
              },
              destroy: function () {
                T(p, "style");
              },
              move: function (i, a, r, s) {
                if (!y()) {
                  const { set: l } = n.state,
                    A = h();
                  i !== a && (f.cancel(), C(E(A, i > a), !0)),
                    l(4),
                    o("move", a, r, i),
                    f.start(a, () => {
                      l(3),
                        o("moved", a, r, i),
                        "move" === t.trimSpace && i !== r && A === h()
                          ? e.Controller.go(i > r ? ">" : "<", !1, s)
                          : s && s();
                    });
                }
              },
              jump: B,
              translate: C,
              shift: E,
              cancel: function () {
                C(h()), f.cancel();
              },
              toIndex: function (n) {
                const t = e.Slides.get();
                let i = 0,
                  o = 1 / 0;
                for (let e = 0; e < t.length; e++) {
                  const a = t[e].index,
                    r = ln(x(a, !0) - n);
                  if (!(r <= o)) break;
                  (o = r), (i = a);
                }
                return i;
              },
              toPosition: x,
              getPosition: h,
              getLimit: b,
              isBusy: y,
              exceededLimit: v,
            };
          },
          Controller: function (n, e, t) {
            const { on: i } = mn(n),
              { Move: o } = e,
              { getPosition: a, getLimit: r } = o,
              { isEnough: s, getLength: l } = e.Slides,
              A = n.is("loop"),
              c = n.is("slide");
            let d,
              p,
              u,
              f = t.start || 0,
              m = f;
            function B() {
              (d = l(!0)),
                (p = t.perMove),
                (u = t.perPage),
                (f = cn(f, 0, d - 1));
            }
            function C(n, t, i, a, r) {
              const s = t ? n : k(n);
              e.Scroll.scroll(t || i ? o.toPosition(s, !0) : n, a, () => {
                j(o.toIndex(o.getPosition())), r && r();
              });
            }
            function x(n) {
              return b(!1, n);
            }
            function h(n) {
              return b(!0, n);
            }
            function b(n, e) {
              const t = p || (z() ? 1 : u),
                i = y(f + t * (n ? -1 : 1), f);
              return -1 !== i ||
                !c ||
                ((o = a()), (s = r(!n)), (l = 1), ln(o - s) < l)
                ? e
                  ? i
                  : w(i)
                : n
                ? 0
                : v();
              var o, s, l;
            }
            function y(n, e, i) {
              if (s()) {
                const o = v();
                n < 0 || n > o
                  ? (n =
                      An(0, n, e, !0) || An(o, e, n, !0)
                        ? I(_(n))
                        : A
                        ? p || z()
                          ? n
                          : n < 0
                          ? -(d % u || u)
                          : d
                        : t.rewind
                        ? n < 0
                          ? o
                          : 0
                        : -1)
                  : i || n === e || (n = p ? n : I(_(e) + (n < e ? -1 : 1)));
              } else n = -1;
              return n;
            }
            function v() {
              let n = d - u;
              return (z() || (A && p)) && (n = d - 1), an(n, 0);
            }
            function w(n) {
              return A ? (s() ? (n % d) + (n < 0 ? d : 0) : -1) : n;
            }
            function I(n) {
              return cn(z() ? n : u * n, 0, v());
            }
            function _(n) {
              return (
                z() || ((n = An(n, d - u, d - 1) ? d - 1 : n), (n = rn(n / u))),
                n
              );
            }
            function k(n) {
              const e = o.toIndex(n);
              return c ? cn(e, 0, v()) : e;
            }
            function j(n) {
              n !== f && ((m = f), (f = n));
            }
            function z() {
              return !g(t.focus) || t.isNavigation;
            }
            return {
              mount: function () {
                B(), i(["updated", "refresh"], B, 9);
              },
              go: function (n, e, i) {
                const a = (function (n) {
                  let e = f;
                  if (E(n)) {
                    const [, t, i] = n.match(/([+\-<>])(\d+)?/) || [];
                    "+" === t || "-" === t
                      ? (e = y(f + +`${t}${+i || 1}`, f, !0))
                      : ">" === t
                      ? (e = i ? I(+i) : x(!0))
                      : "<" === t && (e = h(!0));
                  } else e = A ? n : cn(n, 0, v());
                  return e;
                })(n);
                if (t.useScroll) C(a, !0, !0, t.speed, i);
                else {
                  const n = w(a);
                  n > -1 &&
                    !o.isBusy() &&
                    (e || n !== f) &&
                    (j(n), o.move(a, n, m, i));
                }
              },
              scroll: C,
              getNext: x,
              getPrev: h,
              getAdjacent: b,
              getEnd: v,
              setIndex: j,
              getIndex: function (n) {
                return n ? m : f;
              },
              toIndex: I,
              toPage: _,
              toDest: k,
              hasFocus: z,
            };
          },
          Arrows: function (n, e, t) {
            const { on: i, bind: o, emit: a } = mn(n),
              { classes: r, i18n: s } = t,
              { Elements: l, Controller: A } = e;
            let c,
              d = l.arrows,
              p = l.prev,
              u = l.next;
            const f = {};
            function m() {
              if (
                (t.arrows &&
                  ((p && u) ||
                    ((d = U("div", r.arrows)),
                    (p = B(!0)),
                    (u = B(!1)),
                    (c = !0),
                    z(d, [p, u]),
                    L(d, W(("slider" === t.arrows && l.slider) || n.root)))),
                p && u)
              )
                if (f.prev) q(d, !1 === t.arrows ? "none" : "");
                else {
                  const { id: n } = l.track;
                  O(p, "aria-controls", n),
                    O(u, "aria-controls", n),
                    (f.prev = p),
                    (f.next = u),
                    (function () {
                      const { go: n } = A;
                      i(
                        ["mounted", "moved", "updated", "refresh", "scrolled"],
                        C
                      ),
                        o(u, "click", () => {
                          n(">", !0);
                        }),
                        o(p, "click", () => {
                          n("<", !0);
                        });
                    })(),
                    a("arrows:mounted", p, u);
                }
            }
            function B(n) {
              return Z(
                `<button class="${r.arrow} ${
                  n ? r.prev : r.next
                }" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${
                  t.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                }" />`
              );
            }
            function C() {
              const e = n.index,
                t = A.getPrev(),
                i = A.getNext(),
                o = t > -1 && e < t ? s.last : s.prev,
                r = i > -1 && e > i ? s.first : s.next;
              (p.disabled = t < 0),
                (u.disabled = i < 0),
                O(p, "aria-label", o),
                O(u, "aria-label", r),
                a("arrows:updated", p, u, t, i);
            }
            return {
              arrows: f,
              mount: function () {
                m(), i("updated", m);
              },
              destroy: function () {
                c ? H(d) : (T(p, hn), T(u, hn));
              },
            };
          },
          Autoplay: function (n, e, t) {
            const { on: i, bind: o, emit: a } = mn(n),
              r = Bn(t.interval, n.go.bind(n, ">"), function (n) {
                const { bar: e } = l;
                e && Y(e, "width", 100 * n + "%"), a("autoplay:playing", n);
              }),
              { isPaused: s } = r,
              { Elements: l } = e;
            let A, c, d;
            function p(n) {
              const e = n ? "pause" : "play",
                i = l[e];
              i &&
                (O(i, "aria-controls", l.track.id),
                O(i, "aria-label", t.i18n[e]),
                o(i, "click", n ? f : u));
            }
            function u() {
              s() &&
                e.Slides.isEnough() &&
                (r.start(!t.resetProgress),
                (c = A = d = !1),
                a("autoplay:play"));
            }
            function f(n = !0) {
              s() || (r.pause(), a("autoplay:pause")), (d = n);
            }
            function m() {
              d || (A || c ? f(!1) : u());
            }
            function B() {
              const i = e.Slides.getAt(n.index);
              r.set((i && +X(i.slide, "data-splide-interval")) || t.interval);
            }
            return {
              mount: function () {
                const { autoplay: n } = t;
                n &&
                  (p(!0),
                  p(!1),
                  (function () {
                    const { root: n } = l;
                    t.pauseOnHover &&
                      o(n, "mouseenter mouseleave", (n) => {
                        (A = "mouseenter" === n.type), m();
                      });
                    t.pauseOnFocus &&
                      o(n, "focusin focusout", (n) => {
                        (c = "focusin" === n.type), m();
                      });
                    i(["move", "scroll", "refresh"], r.rewind), i("move", B);
                  })(),
                  "pause" !== n && u());
              },
              destroy: r.cancel,
              play: u,
              pause: f,
              isPaused: s,
            };
          },
          Cover: function (n, e, t) {
            const { on: i } = mn(n);
            function o(n) {
              e.Slides.forEach((e) => {
                const t = W(e.container || e.slide, "img");
                t && t.src && a(n, t, e);
              });
            }
            function a(n, e, t) {
              t.style(
                "background",
                n ? `center/cover no-repeat url("${e.src}")` : "",
                !0
              ),
                q(e, n ? "none" : "");
            }
            return {
              mount: function () {
                t.cover &&
                  (i("lazyload:loaded", (n, e) => {
                    a(!0, n, e);
                  }),
                  i(["mounted", "updated", "refresh"], o.bind(null, !0)));
              },
              destroy: function () {
                o(!1);
              },
            };
          },
          Scroll: function (n, e, t) {
            const { on: i, emit: o } = mn(n),
              { Move: a } = e,
              { getPosition: r, getLimit: s, exceededLimit: l } = a;
            let A, c;
            function d(e, i, f, m) {
              const B = r();
              let C = 1;
              var E;
              (i = i || ((E = ln(e - B)), an(E / 1.5, 800))),
                (c = f),
                u(),
                (A = Bn(
                  i,
                  p,
                  (i) => {
                    const o = r(),
                      A =
                        (B +
                          (e - B) *
                            (function (n) {
                              const { easingFunc: e } = t;
                              return e ? e(n) : 1 - Math.pow(1 - n, 4);
                            })(i) -
                          r()) *
                        C;
                    var c;
                    a.translate(o + A),
                      n.is("slide") &&
                        !m &&
                        l() &&
                        ((C *= 0.6),
                        ln(A) < 10 && ((c = l(!1)), d(s(!c), 600, null, !0)));
                  },
                  1
                )),
                o("scroll"),
                A.start();
            }
            function p() {
              const e = r(),
                t = a.toIndex(e);
              An(t, 0, n.length - 1) || a.translate(a.shift(e, t > 0), !0),
                c && c(),
                o("scrolled");
            }
            function u() {
              A && A.cancel();
            }
            function f() {
              A && !A.isPaused() && (u(), p());
            }
            return {
              mount: function () {
                i("move", u), i(["updated", "refresh"], f);
              },
              destroy: u,
              scroll: d,
              cancel: f,
            };
          },
          Drag: function (n, e, t) {
            const { on: i, emit: o, bind: a, unbind: r } = mn(n),
              { Move: s, Scroll: l, Controller: A } = e,
              { track: c } = e.Elements,
              { resolve: d, orient: p } = e.Direction,
              { getPosition: u, exceededLimit: f } = s;
            let m,
              C,
              E,
              g,
              x,
              h,
              b,
              y,
              v,
              w = !1;
            function I() {
              const { drag: n } = t;
              R(!n), (x = "free" === n);
            }
            function _(n) {
              if (!y) {
                const { noDrag: e } = t,
                  i = P(n),
                  o = !e || !N(n.target, e);
                (b = !1),
                  !o ||
                    (!i && n.button) ||
                    (s.isBusy()
                      ? $(n, !0)
                      : ((v = i ? c : window),
                        (E = null),
                        (g = null),
                        a(v, "touchmove mousemove", k, yn),
                        a(v, "touchend touchcancel mouseup", j, yn),
                        s.cancel(),
                        l.cancel(),
                        z(n)));
              }
            }
            function k(e) {
              if ((g || o("drag"), (g = e), e.cancelable)) {
                const i = W(e) - W(C);
                if (h) {
                  s.translate(
                    m +
                      (function (e) {
                        return e / (w && n.is("slide") ? 5 : 1);
                      })(i)
                  );
                  const t = S(e) - S(C) > 200,
                    a = w !== (w = f());
                  (t || a) && z(e), o("dragging"), (b = !0), $(e);
                } else {
                  let { dragMinThreshold: n } = t;
                  (n = B(n) ? n : { mouse: 0, touch: +n || 10 }),
                    (h = ln(i) > (P(e) ? n.touch : n.mouse)),
                    M() && $(e);
                }
              }
            }
            function j(i) {
              r(v, "touchmove mousemove", k),
                r(v, "touchend touchcancel mouseup", j);
              const { index: a } = n;
              if (g) {
                if (h || (i.cancelable && M())) {
                  const o = (function (e) {
                      if (n.is("loop") || !w) {
                        const n = (C === g && E) || C,
                          t = W(g) - W(n),
                          i = S(e) - S(n),
                          o = S(e) - S(g) < 200;
                        if (i && o) return t / i;
                      }
                      return 0;
                    })(i),
                    r = (function (n) {
                      return (
                        u() +
                        dn(n) *
                          on(
                            ln(n) * (t.flickPower || 600),
                            x
                              ? 1 / 0
                              : e.Layout.listSize() * (t.flickMaxPages || 1)
                          )
                      );
                    })(o);
                  x
                    ? A.scroll(r)
                    : n.is("fade")
                    ? A.go(a + p(dn(o)))
                    : A.go(A.toDest(r), !0),
                    $(i);
                }
                o("dragged");
              } else x || u() === s.toPosition(a) || A.go(a, !0);
              h = !1;
            }
            function z(n) {
              (E = C), (C = n), (m = u());
            }
            function L(n) {
              !y && b && $(n, !0);
            }
            function M() {
              return ln(W(g) - W(C)) > ln(W(g, !0) - W(C, !0));
            }
            function W(n, e) {
              return (P(n) ? n.touches[0] : n)["page" + d(e ? "Y" : "X")];
            }
            function S(n) {
              return n.timeStamp;
            }
            function P(n) {
              return (
                "undefined" != typeof TouchEvent && n instanceof TouchEvent
              );
            }
            function R(n) {
              y = n;
            }
            return {
              mount: function () {
                a(c, "touchmove mousemove", en, yn),
                  a(c, "touchend touchcancel mouseup", en, yn),
                  a(c, "touchstart mousedown", _, yn),
                  a(c, "click", L, { capture: !0 }),
                  a(c, "dragstart", $),
                  i(["mounted", "updated"], I);
              },
              disable: R,
              isDragging: function () {
                return h;
              },
            };
          },
          Keyboard: function (n, e, t) {
            const { on: i, bind: o, unbind: a } = mn(n),
              { root: r } = n,
              { resolve: s } = e.Direction;
            let l, A;
            function c() {
              const { keyboard: n } = t;
              n &&
                ("focused" === n
                  ? ((l = r), O(r, "tabindex", 0))
                  : (l = window),
                o(l, "keydown", f));
            }
            function d() {
              a(l, "keydown"), h(l) && T(l, "tabindex");
            }
            function p() {
              const n = A;
              (A = !0),
                nn(() => {
                  A = n;
                });
            }
            function u() {
              d(), c();
            }
            function f(e) {
              if (!A) {
                const { key: t } = e,
                  i = v(vn, t) ? "Arrow" + t : t;
                i === s("ArrowLeft")
                  ? n.go("<")
                  : i === s("ArrowRight") && n.go(">");
              }
            }
            return {
              mount: function () {
                c(), i("updated", u), i("move", p);
              },
              destroy: d,
              disable: function (n) {
                A = n;
              },
            };
          },
          LazyLoad: function (n, e, t) {
            const { on: i, off: o, bind: a, emit: r } = mn(n),
              s = "sequential" === t.lazyLoad;
            let l = [],
              A = 0;
            function c() {
              p(), d();
            }
            function d() {
              e.Slides.forEach((n) => {
                G(
                  n.slide,
                  "[data-splide-lazy], [data-splide-lazy-srcset]"
                ).forEach((e) => {
                  const i = X(e, "data-splide-lazy"),
                    o = X(e, "data-splide-lazy-srcset");
                  if (i !== e.src || o !== e.srcset) {
                    const a = t.classes.spinner,
                      r = e.parentElement,
                      s = W(r, "." + a) || U("span", a, r);
                    O(s, "role", "presentation"),
                      l.push({
                        _img: e,
                        _Slide: n,
                        src: i,
                        srcset: o,
                        _spinner: s,
                      }),
                      !e.src && q(e, "none");
                  }
                });
              }),
                s && m();
            }
            function p() {
              (A = 0), (l = []);
            }
            function u() {
              (l = l.filter((e) => {
                const i = t.perPage * ((t.preloadPages || 1) + 1) - 1;
                return !e._Slide.isWithin(n.index, i) || f(e);
              })),
                l.length || o("moved");
            }
            function f(n) {
              const { _img: e } = n;
              j(n._Slide.slide, "is-loading"),
                a(e, "load error", (e) => {
                  !(function (n, e) {
                    const { _Slide: t } = n;
                    V(t.slide, "is-loading"),
                      e ||
                        (H(n._spinner),
                        q(n._img, ""),
                        r("lazyload:loaded", n._img, t),
                        r("resize"));
                    s && m();
                  })(n, "error" === e.type);
                }),
                ["srcset", "src"].forEach((t) => {
                  n[t] &&
                    (O(e, t, n[t]),
                    T(
                      e,
                      "src" === t
                        ? "data-splide-lazy"
                        : "data-splide-lazy-srcset"
                    ));
                });
            }
            function m() {
              A < l.length && f(l[A++]);
            }
            return {
              mount: function () {
                t.lazyLoad &&
                  (d(),
                  i("refresh", c),
                  s || i(["mounted", "refresh", "moved", "scrolled"], u));
              },
              destroy: p,
            };
          },
          Pagination: function (n, e, t) {
            const { on: i, emit: o, bind: a, unbind: r } = mn(n),
              { Slides: s, Elements: l, Controller: A } = e,
              { hasFocus: c, getIndex: d } = A,
              p = [];
            let u;
            function f() {
              B(),
                t.pagination &&
                  s.isEnough() &&
                  (!(function () {
                    const { length: e } = n,
                      { classes: i, i18n: o, perPage: r } = t,
                      A = ("slider" === t.pagination && l.slider) || l.root,
                      d = c() ? e : sn(e / r);
                    u = U("ul", i.pagination, A);
                    for (let n = 0; n < d; n++) {
                      const e = U("li", null, u),
                        t = U("button", { class: i.page, type: "button" }, e),
                        l = s.getIn(n).map((n) => n.slide.id),
                        A = !c() && r > 1 ? o.pageX : o.slideX;
                      a(t, "click", C.bind(null, n)),
                        O(t, "aria-controls", l.join(" ")),
                        O(t, "aria-label", pn(A, n + 1)),
                        p.push({ li: e, button: t, page: n });
                    }
                  })(),
                  o("pagination:mounted", { list: u, items: p }, E(n.index)),
                  g());
            }
            function B() {
              u &&
                (H(u),
                p.forEach((n) => {
                  r(n.button, "click");
                }),
                m(p),
                (u = null));
            }
            function C(n) {
              A.go(">" + n, !0, () => {
                const e = s.getAt(A.toIndex(n));
                var t;
                e &&
                  (((t = e.slide).setActive && t.setActive()) ||
                    t.focus({ preventScroll: !0 }));
              });
            }
            function E(n) {
              return p[A.toPage(n)];
            }
            function g() {
              const n = E(d(!0)),
                e = E(d());
              n && (V(n.button, "is-active"), T(n.button, "aria-current")),
                e &&
                  (j(e.button, "is-active"), O(e.button, "aria-current", !0)),
                o("pagination:updated", { list: u, items: p }, n, e);
            }
            return {
              items: p,
              mount: function () {
                f(), i(["updated", "refresh"], f), i(["move", "scrolled"], g);
              },
              destroy: B,
              getAt: E,
              update: g,
            };
          },
          Sync: function (n, e, t) {
            const { list: i } = e.Elements,
              o = [];
            function a() {
              n.splides.forEach((e) => {
                var t;
                !e.isParent &&
                  ((t = e.splide),
                  [n, t].forEach((e) => {
                    const i = mn(e),
                      a = e === n ? t : n;
                    i.on("move", (n, e, t) => {
                      a.go(a.is("loop") ? t : n);
                    }),
                      o.push(i);
                  }));
              }),
                t.isNavigation &&
                  (function () {
                    const e = mn(n),
                      { on: t } = e;
                    t("click", l),
                      t("slide:keydown", A),
                      t(["mounted", "updated"], s),
                      O(i, "role", "menu"),
                      o.push(e),
                      e.emit("navigation:mounted", n.splides);
                  })();
            }
            function r() {
              T(i, hn),
                o.forEach((n) => {
                  n.destroy();
                }),
                m(o);
            }
            function s() {
              O(
                i,
                "aria-orientation",
                "ttb" !== t.direction ? "horizontal" : null
              );
            }
            function l(e) {
              n.go(e.index);
            }
            function A(n, e) {
              v(wn, e.key) && (l(n), $(e));
            }
            return {
              mount: a,
              destroy: r,
              remount: function () {
                r(), a();
              },
            };
          },
          Wheel: function (n, e, t) {
            const { bind: i } = mn(n);
            function o(i) {
              if (i.cancelable) {
                const { deltaY: o } = i;
                if (o) {
                  const a = o < 0;
                  n.go(a ? "<" : ">"),
                    (function (i) {
                      return (
                        !t.releaseWheel ||
                        n.state.is(4) ||
                        -1 !== e.Controller.getAdjacent(i)
                      );
                    })(a) && $(i);
                }
              }
            }
            return {
              mount: function () {
                t.wheel && i(e.Elements.track, "wheel", o, yn);
              },
            };
          },
        }),
        _n = {
          type: "slide",
          speed: 400,
          waitForTransition: !0,
          perPage: 1,
          cloneStatus: !0,
          arrows: !0,
          pagination: !0,
          interval: 5e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          resetProgress: !0,
          keyboard: !0,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          drag: !0,
          direction: "ltr",
          slideFocus: !0,
          trimSpace: !0,
          focusableNodes: "a, button, textarea, input, select, iframe",
          classes: xn,
          i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
          },
        };
      function kn(n, e, t) {
        const { on: i } = mn(n);
        return {
          mount: function () {
            i(["mounted", "refresh"], () => {
              nn(() => {
                e.Slides.style(
                  "transition",
                  `opacity ${t.speed}ms ${t.easing}`
                );
              });
            });
          },
          start: function (n, t) {
            const { track: i } = e.Elements;
            Y(i, "height", J(D(i).height)),
              nn(() => {
                t(), Y(i, "height", "");
              });
          },
          cancel: en,
        };
      }
      function jn(n, e, t) {
        const { bind: i } = mn(n),
          { Move: o, Controller: a } = e,
          { list: r } = e.Elements;
        let s;
        function l() {
          A("");
        }
        function A(n) {
          Y(r, "transition", n);
        }
        return {
          mount: function () {
            i(r, "transitionend", (n) => {
              n.target === r && s && (l(), s());
            });
          },
          start: function (e, i) {
            const r = o.toPosition(e, !0),
              l = o.getPosition(),
              c = (function (e) {
                const { rewindSpeed: i } = t;
                if (n.is("slide") && i) {
                  const n = a.getIndex(!0),
                    t = a.getEnd();
                  if ((0 === n && e >= t) || (n >= t && 0 === e)) return i;
                }
                return t.speed;
              })(e);
            ln(r - l) >= 1 && c >= 1
              ? (A(`transform ${c}ms ${t.easing}`), o.translate(r, !0), (s = i))
              : (o.jump(e), i());
          },
          cancel: l,
        };
      }
      var zn = class {
          constructor(n, e) {
            (this.event = (function () {
              let n = {};
              function e(e, i) {
                t(e, (e, t) => {
                  const o = n[e];
                  n[e] =
                    o &&
                    o.filter((n) =>
                      n._key ? n._key !== i : i || n._namespace !== t
                    );
                });
              }
              function t(n, e) {
                b(n)
                  .join(" ")
                  .split(" ")
                  .forEach((n) => {
                    const t = n.split(".");
                    e(t[0], t[1]);
                  });
              }
              return {
                on: function (e, i, o, a = 10) {
                  t(e, (e, t) => {
                    (n[e] = n[e] || []),
                      w(n[e], {
                        _event: e,
                        _callback: i,
                        _namespace: t,
                        _priority: a,
                        _key: o,
                      }).sort((n, e) => n._priority - e._priority);
                  });
                },
                off: e,
                offBy: function (t) {
                  S(n, (n, i) => {
                    e(i, t);
                  });
                },
                emit: function (e) {
                  (n[e] || []).forEach((n) => {
                    n._callback.apply(n, _(arguments, 1));
                  });
                },
                destroy: function () {
                  n = {};
                },
              };
            })()),
              (this.Components = {}),
              (this.state = (function (n) {
                let e = n;
                return {
                  set: function (n) {
                    e = n;
                  },
                  is: function (n) {
                    return v(b(n), e);
                  },
                };
              })(1)),
              (this.splides = []),
              (this._options = {}),
              (this._Extensions = {});
            const t = E(n) ? Q(document, n) : n;
            K(t, t + " is invalid."),
              (this.root = t),
              R(_n, zn.defaults),
              R(R(this._options, _n), e || {});
          }
          mount(n, e) {
            const { state: t, Components: i } = this;
            K(t.is([1, 5]), "Already mounted!"),
              t.set(1),
              (this._Components = i),
              (this._Transition =
                e || this._Transition || (this.is("fade") ? kn : jn)),
              (this._Extensions = n || this._Extensions);
            return (
              S(
                P({}, In, this._Extensions, { Transition: this._Transition }),
                (n, e) => {
                  const t = n(this, i, this._options);
                  (i[e] = t), t.setup && t.setup();
                }
              ),
              S(i, (n) => {
                n.mount && n.mount();
              }),
              this.emit("mounted"),
              j(this.root, "is-initialized"),
              t.set(3),
              this.emit("ready"),
              this
            );
          }
          sync(n) {
            return (
              this.splides.push({ splide: n }),
              n.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._Components.Sync.remount(), n.Components.Sync.remount()),
              this
            );
          }
          go(n) {
            return this._Components.Controller.go(n), this;
          }
          on(n, e) {
            return this.event.on(n, e, null, 20), this;
          }
          off(n) {
            return this.event.off(n), this;
          }
          emit(n) {
            return this.event.emit(n, ..._(arguments, 1)), this;
          }
          add(n, e) {
            return this._Components.Slides.add(n, e), this;
          }
          remove(n) {
            return this._Components.Slides.remove(n), this;
          }
          is(n) {
            return this._options.type === n;
          }
          refresh() {
            return this.emit("refresh"), this;
          }
          destroy(n = !0) {
            const { event: e, state: t } = this;
            return (
              t.is(1)
                ? e.on("ready", this.destroy.bind(this, n), this)
                : (S(
                    this._Components,
                    (e) => {
                      e.destroy && e.destroy(n);
                    },
                    !0
                  ),
                  e.emit("destroy"),
                  e.destroy(),
                  n && m(this.splides),
                  t.set(5)),
              this
            );
          }
          get options() {
            return this._options;
          }
          set options(n) {
            const { _options: e } = this;
            R(e, n), this.state.is(1) || this.emit("updated", e);
          }
          get length() {
            return this._Components.Slides.getLength(!0);
          }
          get index() {
            return this._Components.Controller.getIndex();
          }
        },
        Ln = zn;
      (Ln.defaults = {}), (Ln.STATES = f);
      var Nn = [
        ["mounted", "onMounted"],
        ["ready", "onReady"],
        ["move", "onMove"],
        ["moved", "onMoved"],
        ["click", "onClick"],
        ["active", "onActive"],
        ["inactive", "onInactive"],
        ["visible", "onVisible"],
        ["hidden", "onHidden"],
        ["refresh", "onRefresh"],
        ["updated", "onUpdated"],
        ["resize", "onResize"],
        ["resized", "onResized"],
        ["drag", "onDrag"],
        ["dragging", "onDragging"],
        ["dragged", "onDragged"],
        ["scroll", "onScroll"],
        ["scrolled", "onScrolled"],
        ["destroy", "onDestroy"],
        ["arrows:mounted", "onArrowsMounted"],
        ["arrows:updated", "onArrowsUpdated"],
        ["pagination:mounted", "onPaginationMounted"],
        ["pagination:updated", "onPaginationUpdated"],
        ["navigation:mounted", "onNavigationMounted"],
        ["autoplay:play", "onAutoplayPlay"],
        ["autoplay:playing", "onAutoplayPlaying"],
        ["autoplay:pause", "onAutoplayPause"],
        ["lazyload:loaded", "onLazyLoadLoaded"],
      ];
      function Mn(...n) {
        return n.filter(Boolean).join(" ");
      }
      function Wn(n) {
        return null !== n && "object" == typeof n;
      }
      function Sn(n, e) {
        const t = n;
        return (
          (function (n, e) {
            if (n) {
              const t = Object.keys(n);
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                if ("__proto__" !== o && !1 === e(n[o], o)) break;
              }
            }
          })(e, (n, e) => {
            Array.isArray(n)
              ? (t[e] = n.slice())
              : Wn(n)
              ? (t[e] = Sn(Wn(t[e]) ? t[e] : {}, n))
              : (t[e] = n);
          }),
          t
        );
      }
      var Pn = class extends o.a.Component {
          constructor() {
            super(...arguments),
              (this.splideRef = o.a.createRef()),
              (this.slides = []);
          }
          componentDidMount() {
            const { options: n, Extensions: e, Transition: t } = this.props,
              { current: i } = this.splideRef;
            i &&
              ((this.splide = new Ln(i, n)),
              this.bind(this.splide),
              this.splide.mount(e, t),
              (this.options = Sn({}, n || {})),
              (this.slides = this.getSlides()));
          }
          componentWillUnmount() {
            this.splide && (this.splide.destroy(), (this.splide = void 0)),
              (this.options = void 0),
              (this.slides.length = 0);
          }
          componentDidUpdate() {
            if (!this.splide) return;
            const { options: n } = this.props;
            n &&
              !(function n(e, t) {
                if (Array.isArray(e) && Array.isArray(t))
                  return (
                    e.length === t.length && !e.some((e, i) => !n(e, t[i]))
                  );
                if (Wn(e) && Wn(t)) {
                  const i = Object.keys(e),
                    o = Object.keys(t);
                  return (
                    i.length === o.length &&
                    !i.some(
                      (i) =>
                        !Object.prototype.hasOwnProperty.call(t, i) ||
                        !n(e[i], t[i])
                    )
                  );
                }
                return e === t;
              })(this.options, n) &&
              ((this.splide.options = n), (this.options = Sn({}, n)));
            const e = this.getSlides();
            var t, i;
            (t = this.slides),
              (i = e),
              (t.length !== i.length || t.some((n, e) => n !== i[e])) &&
                (this.splide.refresh(), (this.slides = e));
          }
          sync(n) {
            var e;
            null == (e = this.splide) || e.sync(n);
          }
          go(n) {
            var e;
            null == (e = this.splide) || e.go(n);
          }
          getSlides() {
            var n;
            if (this.splide) {
              const e =
                null == (n = this.splide.Components.Elements)
                  ? void 0
                  : n.list.children;
              return (e && Array.prototype.slice.call(e)) || [];
            }
            return [];
          }
          bind(n) {
            Nn.forEach(([e, t]) => {
              const i = this.props[t];
              "function" == typeof i &&
                n.on(e, (...e) => {
                  i(n, ...e);
                });
            });
          }
          renderTrack() {
            return o.a.createElement(
              "div",
              { className: "splide__track" },
              o.a.createElement(
                "ul",
                { className: "splide__list" },
                this.props.children
              )
            );
          }
          render() {
            const {
              id: n,
              className: e,
              hasSliderWrapper: t,
              hasAutoplayProgress: i,
              hasAutoplayControls: a,
              playButtonLabel: r = "Play",
              pauseButtonLabel: s = "Pause",
              renderControls: l,
            } = this.props;
            return o.a.createElement(
              "div",
              { id: n, className: Mn("splide", e), ref: this.splideRef },
              t
                ? o.a.createElement(
                    "div",
                    { className: "splide__slider" },
                    this.renderTrack()
                  )
                : this.renderTrack(),
              i &&
                o.a.createElement(
                  "div",
                  { className: "splide__progress" },
                  o.a.createElement("div", {
                    className: "splide__progress__bar",
                  })
                ),
              a &&
                o.a.createElement(
                  "div",
                  { className: "splide__autoplay" },
                  o.a.createElement("button", { className: "splide__play" }, r),
                  o.a.createElement("button", { className: "splide__pause" }, s)
                ),
              l && l()
            );
          }
        },
        Rn = ({ children: n, className: e, ...t }) =>
          o.a.createElement(
            "li",
            { className: Mn("splide__slide", e), ...t },
            n
          );
      e.a = function (n) {
        var e = n.artists;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "section",
            { className: "artistTiles desktop" },
            e.map(function (n, e) {
              return (
                e < 5 &&
                o.a.createElement(a.a, {
                  key: "artist".concat(e),
                  artist: n.attributes,
                })
              );
            })
          ),
          o.a.createElement(
            "section",
            { className: "artistTiles tablet" },
            o.a.createElement(
              Pn,
              {
                options: {
                  width: "100vw",
                  gap: "1rem",
                  focus: "center",
                  pagination: !0,
                  keyboard: "focused",
                  arrows: !0,
                  speed: 400,
                  waitForTransition: !1,
                  easing: "ease",
                  padding: 10,
                  perPage: 2,
                },
                renderControls: function () {
                  return o.a.createElement(
                    "div",
                    { className: "splide__arrows" },
                    o.a.createElement(
                      "button",
                      { class: "splide__arrow splide__arrow--prev" },
                      o.a.createElement("img", { src: u.a })
                    ),
                    o.a.createElement(
                      "button",
                      { class: "splide__arrow splide__arrow--next" },
                      o.a.createElement("img", { src: d.a })
                    )
                  );
                },
              },
              e.map(function (n, e) {
                return (
                  e < 5 &&
                  o.a.createElement(
                    Rn,
                    { key: "splide".concat(e) },
                    o.a.createElement(a.a, {
                      key: "artist".concat(e),
                      artist: n.attributes,
                    })
                  )
                );
              })
            )
          )
        );
      };
    },
    627: function (n, e, t) {
      "use strict";
      t.r(e),
        function (n) {
          var i = t(1),
            o = t.n(i),
            a = t(395),
            r = t.n(a),
            s = t(366),
            l = t(570),
            A = t(367),
            c = t(576),
            d = t(622),
            p = (t(597), t(602)),
            u = t.n(p);
          function f(n) {
            return (f =
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
          function m(n, e, t, i, o, a, r) {
            try {
              var s = n[a](r),
                l = s.value;
            } catch (A) {
              return void t(A);
            }
            s.done ? e(l) : Promise.resolve(l).then(i, o);
          }
          function B(n) {
            return function () {
              var e = this,
                t = arguments;
              return new Promise(function (i, o) {
                var a = n.apply(e, t);
                function r(n) {
                  m(a, i, o, r, s, "next", n);
                }
                function s(n) {
                  m(a, i, o, r, s, "throw", n);
                }
                r(void 0);
              });
            };
          }
          function C(n, e) {
            for (var t = 0; t < e.length; t++) {
              var i = e[t];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i);
            }
          }
          function E(n, e) {
            return (E =
              Object.setPrototypeOf ||
              function (n, e) {
                return (n.__proto__ = e), n;
              })(n, e);
          }
          function g(n) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
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
                i = b(n);
              if (e) {
                var o = b(this).constructor;
                t = Reflect.construct(i, arguments, o);
              } else t = i.apply(this, arguments);
              return x(this, t);
            };
          }
          function x(n, e) {
            if (e && ("object" === f(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return h(n);
          }
          function h(n) {
            if (void 0 === n)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return n;
          }
          function b(n) {
            return (b = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                })(n);
          }
          var y = (function (e) {
            !(function (n, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (n.prototype = Object.create(e && e.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                e && E(n, e);
            })(f, e);
            var t,
              i,
              a,
              p = g(f);
            function f(e) {
              var t, i, o, a;
              return (
                (function (n, e) {
                  if (!(n instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, f),
                (t = p.call(this, e)),
                (i = h(t)),
                (o = "fetchData"),
                (a = B(
                  regeneratorRuntime.mark(function e() {
                    var t, i, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = r.a.stringify({
                                filters: { featured: { $eq: !0 } },
                              })),
                              (i = ""
                                .concat(n.env.API_URL, "/api/artists?")
                                .concat(t, "&populate=*")),
                              (e.next = 4),
                              fetch(i, {
                                method: "get",
                                headers: { "Content-Type": "application/json" },
                              })
                            );
                          case 4:
                            return (o = e.sent), e.abrupt("return", o);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                o in i
                  ? Object.defineProperty(i, o, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (i[o] = a),
                (t.state = { artists: [] }),
                t
              );
            }
            return (
              (t = f),
              (i = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var n = this;
                    this.fetchData()
                      .then(function (n) {
                        return n.json();
                      })
                      .then(function (e) {
                        console.log(e.data), n.setState({ artists: e.data });
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var n = this;
                    return o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(s.a, null),
                      o.a.createElement(
                        "div",
                        { className: "homeBanner" },
                        o.a.createElement(
                          "div",
                          { className: "bannerContent" },
                          o.a.createElement(
                            "div",
                            { className: "slogan" },
                            "Create a Better World Through Music"
                          ),
                          o.a.createElement(
                            "p",
                            { className: "tagline" },
                            "Global Peace Rhythms features artists who are making positive changes on earth."
                          ),
                          o.a.createElement(
                            "button",
                            {
                              className: "blueButton",
                              onClick: function () {
                                return n.props.history.push("./about");
                              },
                            },
                            "LEARN MORE"
                          )
                        ),
                        o.a.createElement("img", { src: u.a })
                      ),
                      o.a.createElement(
                        "main",
                        null,
                        o.a.createElement("h1", null, "Featured Artists"),
                        o.a.createElement(
                          "div",
                          { className: "featuredArtists" },
                          this.state.artists &&
                            this.state.artists.length > 0 &&
                            o.a.createElement(d.a, {
                              artists: this.state.artists,
                            }),
                          o.a.createElement(l.a, null)
                        ),
                        o.a.createElement(c.a, null)
                      ),
                      o.a.createElement(A.a, null)
                    );
                  },
                },
              ]) && C(t.prototype, i),
              a && C(t, a),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              f
            );
          })(o.a.Component);
          e.default = y;
        }.call(this, t(365));
    },
  },
]);

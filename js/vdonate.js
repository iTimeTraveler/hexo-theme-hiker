! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Donate", [], e) : "object" == typeof exports ? exports.Donate = e() : t.Donate = e()
}(this, function () {
    return function (t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var a = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(a.exports, a, a.exports, e), a.l = !0, a.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t
        }, e.d = function (t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "./", e(e.s = 5)
    }([
        function (t, e, n) {
            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function (e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }();
            n(2);
            var r = {
                    title: "如果觉得我的文章对您有用，请随意打赏。您的支持将鼓励我继续创作!",
                    btnText: "打赏支持"
                },
                // d = document.body,
                d = document.getElementById('donation_div'),
                s = !1,
                l = function () {
                    function t(e) {
                        if (o(this, t), arguments[0] && "object" === a(arguments[0]) && (this.options = Object.assign({}, r, e)), !this.options.wechatImage) throw new Error("wechatImage is required");
                        if (!this.options.alipayImage) throw new Error("alipayImage is required");
                        this.el = this.options.el && this.options.el, this.render(), this.bind()
                    }
                    return i(t, [{
                        key: "render",
                        value: function () {
                            var t = '\n      <div class="donate-modal-background">\n        <div class="donate-modal">\n          <p class="donate-quote">\n            <i class="donate-quote-left"></i>\n            <span class="donate-quote-word">' + this.options.title + '</span>\n            <i class="donate-quote-right"></i>\n          </p>\n          <div class="donate-tab">\n            <a href="javascript:;" class="donate-wechat active" data-index="0">微信</a>\n            <a href="javascript:;" class="donate-alipay" data-index="1">支付宝</a>\n            <img src="' + this.options.wechatImage + '" alt="wechat" class="donate-image active">\n            <img src="' + this.options.alipayImage + '" alt="alipay" class="donate-image">\n          </div>\n        </div>\n      </div>\n    ',
                                e = '\n      <a href="javascript:;" class="donate-btn"><i class="donate-qrcode"></i>' + this.options.btnText + "</a>\n    ";
                            this.el && (this.el.innerHTML = e), this.modal = document.createElement("div"), this.modal.innerHTML = t, this.modal.id = "donate-modal-container", d.appendChild(this.modal)
                        }
                    }, {
                        key: "bind",
                        value: function () {
                            var t = this;
                            this.btns = this.modal.querySelectorAll(".donate-tab a"), 
                            this.images = this.modal.querySelectorAll(".donate-tab .donate-image"), 
                            this.modal.addEventListener("click", this._modalEvent.bind(t), !1), 
                            this.el && this.el.addEventListener("click", this._donateBtnEvent.bind(t), !1)
                        }
                    }, {
                        key: "_modalEvent",
                        value: function (t) {
                            if (t.stopPropagation(), t.target.dataset.index) 
                                return [].slice.call(this.btns).forEach(function (t) {
                                    t.classList.toggle("active")
                                }), void[].slice.call(this.images).forEach(function (t) {
                                    t.classList.toggle("active")
                                });
                            this.hide()
                        }
                    }, {
                        key: "_donateBtnEvent",
                        value: function (t) {
                            "donate-btn" === t.target.className && (s ? this.hide() : this.show())
                        }
                    }, {
                        key: "show",
                        value: function () {
                            s || (this.modal.classList.add("active"), s = !0)
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            this.modal.classList.remove("active"), s = !1
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            this.modal.removeEventListener("click", this._modalEvent.bind(t), !1), this.el.removeEventListener("click", this._donateBtnEvent.bind(t), !1), d.removeChild(this.modal)
                        }
                    }]), t
                }();
            t.exports = l
        },
        function (t, e) {
            function n(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        a = p[o.id];
                    if (a) {
                        a.refs++;
                        for (var i = 0; i < a.parts.length; i++) a.parts[i](o.parts[i]);
                        for (; i < o.parts.length; i++) a.parts.push(s(o.parts[i], e))
                    } else {
                        for (var r = [], i = 0; i < o.parts.length; i++) r.push(s(o.parts[i], e));
                        p[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: r
                        }
                    }
                }
            }

            function o(t) {
                for (var e = [], n = {}, o = 0; o < t.length; o++) {
                    var a = t[o],
                        i = a[0],
                        r = a[1],
                        d = a[2],
                        s = a[3],
                        l = {
                            css: r,
                            media: d,
                            sourceMap: s
                        };
                    n[i] ? n[i].parts.push(l) : e.push(n[i] = {
                        id: i,
                        parts: [l]
                    })
                }
                return e
            }

            function a(t, e) {
                var n = m(),
                    o = g[g.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e);
                else {
                    if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e)
                }
            }

            function i(t) {
                t.parentNode.removeChild(t);
                var e = g.indexOf(t);
                e >= 0 && g.splice(e, 1)
            }

            function r(t) {
                var e = document.createElement("style");
                return e.type = "text/css", a(t, e), e
            }

            function d(t) {
                var e = document.createElement("link");
                return e.rel = "stylesheet", a(t, e), e
            }

            function s(t, e) {
                var n, o, a;
                if (e.singleton) {
                    var s = v++;
                    n = b || (b = r(e)), o = l.bind(null, n, s, !1), a = l.bind(null, n, s, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = d(e), o = u.bind(null, n), a = function () {
                    i(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = r(e), o = c.bind(null, n), a = function () {
                    i(n)
                });
                return o(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else a()
                    }
            }

            function l(t, e, n, o) {
                var a = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = y(e, a);
                else {
                    var i = document.createTextNode(a),
                        r = t.childNodes;
                    r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(i, r[e]) : t.appendChild(i)
                }
            }

            function c(t, e) {
                var n = e.css,
                    o = e.media;
                if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }

            function u(t, e) {
                var n = e.css,
                    o = e.sourceMap;
                o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([n], {
                        type: "text/css"
                    }),
                    i = t.href;
                t.href = URL.createObjectURL(a), i && URL.revokeObjectURL(i)
            }
            var p = {},
                f = function (t) {
                    var e;
                    return function () {
                        return void 0 === e && (e = t.apply(this, arguments)), e
                    }
                },
                h = f(function () {
                    return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
                }),
                m = f(function () {
                    return document.head || document.getElementsByTagName("head")[0]
                }),
                b = null,
                v = 0,
                g = [];
            t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                e = e || {}, void 0 === e.singleton && (e.singleton = h()), void 0 === e.insertAt && (e.insertAt = "bottom");
                var a = o(t);
                return n(a, e),
                    function (t) {
                        for (var i = [], r = 0; r < a.length; r++) {
                            var d = a[r],
                                s = p[d.id];
                            s.refs--, i.push(s)
                        }
                        if (t) {
                            n(o(t), e)
                        }
                        for (var r = 0; r < i.length; r++) {
                            var s = i[r];
                            if (0 === s.refs) {
                                for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                                delete p[s.id]
                            }
                        }
                    }
            };
            var y = function () {
                var t = [];
                return function (e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n")
                }
            }()
        },
        function (t, e, n) {
            var o = n(3);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]);
            n(1)(o, {});
            o.locals && (t.exports = o.locals)
        },
        function (t, e, n) {
            e = t.exports = n(4)(), e.push([t.i, 'body,html{height:100%}', ""])
        },
        function (t, e) {
            t.exports = function () {
                var t = [];
                return t.toString = function () {
                    for (var t = [], e = 0; e < this.length; e++) {
                        var n = this[e];
                        n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                    }
                    return t.join("")
                }, t.i = function (e, n) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    for (var o = {}, a = 0; a < this.length; a++) {
                        var i = this[a][0];
                        "number" == typeof i && (o[i] = !0)
                    }
                    for (a = 0; a < e.length; a++) {
                        var r = e[a];
                        "number" == typeof r[0] && o[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"), t.push(r))
                    }
                }, t
            }
        },
        function (t, e, n) {
            t.exports = n(0)
        }
    ])
});
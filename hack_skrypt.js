!function (a) {
    function c(d) {
        if (b[d]) return b[d].exports;
        var e = b[d] = {i: d, l: !1, exports: {}};
        return a[d].call(e.exports, e, e.exports, c), e.l = !0, e.exports
    }

    var b = {};
    c.m = a, c.c = b, c.d = function (a, b, d) {
        c.o(a, b) || Object.defineProperty(a, b, {configurable: !1, enumerable: !0, get: d})
    }, c.n = function (a) {
        var b = a && a.__esModule ? function () {
            return a.default
        } : function () {
            return a
        };
        return c.d(b, "a", b), b
    }, c.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, c.p = "", c(c.s = 2)
}
({
    2: function (a, b, c) {
        a.exports = c("a9nB")
    }, DuR2: function (a) {
        var c;
        c = function () {
            return this
        }();
        try {
            c = c || Function("return this")() || (0, eval)("this")
        } catch (a) {
            "object" == typeof window && (c = window)
        }
        a.exports = c
    }, a9nB: function (a, b, c) {
        function e() {
            d.exitFullscreen(), d.pause(), setTimeout(function () {
                d.pause()
            }, 100), setTimeout(function () {
                d.pause()
            }, 1e3), document.getElementById("block").classList.remove("off"), document.getElementById("player").classList.add("blocked")
        }

        window.videojs = c("mMaS");
        var d = videojs("#player");
        d.ready(function () {
            this.on("play", function () {
                var a = document.getElementById("player").dataset.blockTimeout;
                a && setTimeout(e, 1e3 * a), setTimeout(function () {
                    0 === d.readyState() && e()
                }, 3e3)
            }), this.on("ended", e), this.on("error", e)
        })
    }, mMaS: function (a, b, c) {
        (function (d) {
            var e, f, g, h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                return typeof a
            } : function (a) {
                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };
            g = function () {
                function c(a, b) {
                    return a(b = {exports: {}}, b.exports), b.exports
                }

                function R(a, b) {
                    Q(a).forEach(function (c) {
                        return b(a[c], c)
                    })
                }

                function S(a) {
                    for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                    return Object.assign ? Object.assign.apply(Object, [a].concat(c)) : (c.forEach(function (b) {
                        b && R(b, function (b, c) {
                            a[c] = b
                        })
                    }), a)
                }

                function T(a) {
                    return !!a && "object" === (void 0 === a ? "undefined" : K(a))
                }

                function U(a) {
                    return T(a) && "[object Object]" === P.call(a) && a.constructor === Object
                }

                function $(a) {
                    return a.replace(/\n\r?\s*/g, "")
                }

                function ab(a, b) {
                    if (!a || !b) return "";
                    if ("function" == typeof f.getComputedStyle) {
                        var c = f.getComputedStyle(a);
                        return c ? c[b] : ""
                    }
                    return a.currentStyle[b] || ""
                }

                function cb(a) {
                    return "string" == typeof a && /\S/.test(a)
                }

                function db(a) {
                    if (/\s/.test(a)) throw new Error("class has illegal whitespace characters")
                }

                function eb() {
                    return m === f.document && void 0 !== m.createElement
                }

                function fb(a) {
                    return T(a) && 1 === a.nodeType
                }

                function gb() {
                    try {
                        return f.parent !== f.self
                    } catch (a) {
                        return !0
                    }
                }

                function hb(a) {
                    return function (b, c) {
                        if (!cb(b)) return m[a](null);
                        cb(c) && (c = m.querySelector(c));
                        var d = fb(c) ? c : m;
                        return d[a] && d[a](b)
                    }
                }

                function ib() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                        b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = arguments[3],
                        e = m.createElement(a);
                    return Object.getOwnPropertyNames(b).forEach(function (a) {
                        var c = b[a];
                        -1 !== a.indexOf("aria-") || "role" === a || "type" === a ? (Z.warn(_(bb, a, c)), e.setAttribute(a, c)) : "textContent" === a ? jb(e, c) : e[a] = c
                    }), Object.getOwnPropertyNames(c).forEach(function (a) {
                        e.setAttribute(a, c[a])
                    }), d && Cb(e, d), e
                }

                function jb(a, b) {
                    return void 0 === a.textContent ? a.innerText = b : a.textContent = b, a
                }

                function kb(a, b) {
                    b.firstChild ? b.insertBefore(a, b.firstChild) : b.appendChild(a)
                }

                function lb(a, b) {
                    return db(b), a.classList ? a.classList.contains(b) : (c = b, new RegExp("(^|\\s)" + c + "($|\\s)")).test(a.className);
                    var c
                }

                function mb(a, b) {
                    return a.classList ? a.classList.add(b) : lb(a, b) || (a.className = (a.className + " " + b).trim()), a
                }

                function nb(a, b) {
                    return a.classList ? a.classList.remove(b) : (db(b), a.className = a.className.split(/\s+/).filter(function (a) {
                        return a !== b
                    }).join(" ")), a
                }

                function ob(a, b, c) {
                    var d = lb(a, b);
                    return "function" == typeof c && (c = c(a, b)), "boolean" != typeof c && (c = !d), c !== d ? (c ? mb(a, b) : nb(a, b), a) : void 0
                }

                function pb(a, b) {
                    Object.getOwnPropertyNames(b).forEach(function (c) {
                        var d = b[c];
                        null === d || void 0 === d || !1 === d ? a.removeAttribute(c) : a.setAttribute(c, !0 === d ? "" : d)
                    })
                }

                function qb(a) {
                    var b = {}, c = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
                    if (a && a.attributes && a.attributes.length > 0) for (var d = a.attributes, e = d.length - 1; e >= 0; e--) {
                        var f = d[e].name, g = d[e].value;
                        "boolean" != typeof a[f] && -1 === c.indexOf("," + f + ",") || (g = null !== g), b[f] = g
                    }
                    return b
                }

                function rb(a, b) {
                    return a.getAttribute(b)
                }

                function sb(a, b, c) {
                    a.setAttribute(b, c)
                }

                function tb(a, b) {
                    a.removeAttribute(b)
                }

                function ub() {
                    m.body.focus(), m.onselectstart = function () {
                        return !1
                    }
                }

                function vb() {
                    m.onselectstart = function () {
                        return !0
                    }
                }

                function wb(a) {
                    if (a && a.getBoundingClientRect && a.parentNode) {
                        var b = a.getBoundingClientRect(), c = {};
                        return ["bottom", "height", "left", "right", "top", "width"].forEach(function (a) {
                            void 0 !== b[a] && (c[a] = b[a])
                        }), c.height || (c.height = parseFloat(ab(a, "height"))), c.width || (c.width = parseFloat(ab(a, "width"))), c
                    }
                }

                function xb(a) {
                    var b = void 0;
                    if (a.getBoundingClientRect && a.parentNode && (b = a.getBoundingClientRect()), !b) return {
                        left: 0,
                        top: 0
                    };
                    var c = m.documentElement, d = m.body, e = c.clientLeft || d.clientLeft || 0,
                        g = f.pageXOffset || d.scrollLeft, h = b.left + g - e, i = c.clientTop || d.clientTop || 0,
                        j = f.pageYOffset || d.scrollTop, k = b.top + j - i;
                    return {left: Math.round(h), top: Math.round(k)}
                }

                function yb(a, b) {
                    var c = {}, d = xb(a), e = a.offsetWidth, f = a.offsetHeight, g = d.top, h = d.left, i = b.pageY,
                        j = b.pageX;
                    return b.changedTouches && (j = b.changedTouches[0].pageX, i = b.changedTouches[0].pageY), c.y = Math.max(0, Math.min(1, (g - i + f) / f)), c.x = Math.max(0, Math.min(1, (j - h) / e)), c
                }

                function zb(a) {
                    return T(a) && 3 === a.nodeType
                }

                function Ab(a) {
                    for (; a.firstChild;) a.removeChild(a.firstChild);
                    return a
                }

                function Bb(a) {
                    return "function" == typeof a && (a = a()), (Array.isArray(a) ? a : [a]).map(function (a) {
                        return "function" == typeof a && (a = a()), fb(a) || zb(a) ? a : "string" == typeof a && /\S/.test(a) ? m.createTextNode(a) : void 0
                    }).filter(function (a) {
                        return a
                    })
                }

                function Cb(a, b) {
                    return Bb(b).forEach(function (b) {
                        return a.appendChild(b)
                    }), a
                }

                function Db(a, b) {
                    return Cb(Ab(a), b)
                }

                function Eb(a) {
                    return void 0 === a.button && void 0 === a.buttons || 0 === a.button && void 0 === a.buttons || 9 === E || 0 === a.button && 1 === a.buttons
                }

                function Jb() {
                    return Ib++
                }

                function Mb(a) {
                    var b = a[Lb];
                    return b || (b = a[Lb] = Jb()), Kb[b] || (Kb[b] = {}), Kb[b]
                }

                function Nb(a) {
                    var b = a[Lb];
                    return !!b && !!Object.getOwnPropertyNames(Kb[b]).length
                }

                function Ob(a) {
                    var b = a[Lb];
                    if (b) {
                        delete Kb[b];
                        try {
                            delete a[Lb]
                        } catch (b) {
                            a.removeAttribute ? a.removeAttribute(Lb) : a[Lb] = null
                        }
                    }
                }

                function Pb(a, b) {
                    var c = Mb(a);
                    0 === c.handlers[b].length && (delete c.handlers[b], a.removeEventListener ? a.removeEventListener(b, c.dispatcher, !1) : a.detachEvent && a.detachEvent("on" + b, c.dispatcher)), Object.getOwnPropertyNames(c.handlers).length <= 0 && (delete c.handlers, delete c.dispatcher, delete c.disabled), 0 === Object.getOwnPropertyNames(c).length && Ob(a)
                }

                function Qb(a, b, c, d) {
                    c.forEach(function (c) {
                        a(b, c, d)
                    })
                }

                function Rb(a) {
                    function b() {
                        return !0
                    }

                    function c() {
                        return !1
                    }

                    if (!a || !a.isPropagationStopped) {
                        var d = a || f.event;
                        for (var e in a = {}, d) "layerX" !== e && "layerY" !== e && "keyLocation" !== e && "webkitMovementX" !== e && "webkitMovementY" !== e && ("returnValue" === e && d.preventDefault || (a[e] = d[e]));
                        if (a.target || (a.target = a.srcElement || m), a.relatedTarget || (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), a.preventDefault = function () {
                            d.preventDefault && d.preventDefault(), a.returnValue = !1, d.returnValue = !1, a.defaultPrevented = !0
                        }, a.defaultPrevented = !1, a.stopPropagation = function () {
                            d.stopPropagation && d.stopPropagation(), a.cancelBubble = !0, d.cancelBubble = !0, a.isPropagationStopped = b
                        }, a.isPropagationStopped = c, a.stopImmediatePropagation = function () {
                            d.stopImmediatePropagation && d.stopImmediatePropagation(), a.isImmediatePropagationStopped = b, a.stopPropagation()
                        }, a.isImmediatePropagationStopped = c, null !== a.clientX && void 0 !== a.clientX) {
                            var g = m.documentElement, h = m.body;
                            a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0), a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
                        }
                        a.which = a.charCode || a.keyCode, null !== a.button && void 0 !== a.button && (a.button = 1 & a.button ? 0 : 4 & a.button ? 1 : 2 & a.button ? 2 : 0)
                    }
                    return a
                }

                function Ub(a, b, c) {
                    if (Array.isArray(b)) return Qb(Ub, a, b, c);
                    var d = Mb(a);
                    if (d.handlers || (d.handlers = {}), d.handlers[b] || (d.handlers[b] = []), c.guid || (c.guid = Jb()), d.handlers[b].push(c), d.dispatcher || (d.disabled = !1, d.dispatcher = function (a, b) {
                        if (!d.disabled) {
                            a = Rb(a);
                            var c = d.handlers[a.type];
                            if (c) for (var e = c.slice(0), f = 0, g = e.length; f < g && !a.isImmediatePropagationStopped(); f++) try {
                                e[f].call(h, a, b)
                            } catch (h) {
                                Z.error(h)
                            }
                        }
                    }), 1 === d.handlers[b].length) if (a.addEventListener) {
                        var e = !1;
                        Sb && Tb.indexOf(b) > -1 && (e = {passive: !0}), a.addEventListener(b, d.dispatcher, e)
                    } else a.attachEvent && a.attachEvent("on" + b, d.dispatcher)
                }

                function Vb(a, b, c) {
                    if (Nb(a)) {
                        var d = Mb(a);
                        if (d.handlers) {
                            if (Array.isArray(b)) return Qb(Vb, a, b, c);
                            var e = function (a, b) {
                                d.handlers[b] = [], Pb(a, b)
                            };
                            if (void 0 !== b) {
                                var f = d.handlers[b];
                                if (f) if (c) {
                                    if (c.guid) for (var g = 0; g < f.length; g++) f[g].guid === c.guid && f.splice(g--, 1);
                                    Pb(a, b)
                                } else e(a, b)
                            } else for (var h in d.handlers) Object.prototype.hasOwnProperty.call(d.handlers || {}, h) && e(a, h)
                        }
                    }
                }

                function Wb(a, b, c) {
                    var d = Nb(a) ? Mb(a) : {}, e = a.parentNode || a.ownerDocument;
                    if ("string" == typeof b ? b = {
                        type: b,
                        target: a
                    } : b.target || (b.target = a), b = Rb(b), d.dispatcher && d.dispatcher.call(a, b, c), e && !b.isPropagationStopped() && !0 === b.bubbles) Wb.call(null, e, b, c); else if (!e && !b.defaultPrevented) {
                        var f = Mb(b.target);
                        b.target[b.type] && (f.disabled = !0, "function" == typeof b.target[b.type] && b.target[b.type](), f.disabled = !1)
                    }
                    return !b.defaultPrevented
                }

                function Xb(a, b, c) {
                    if (Array.isArray(b)) return Qb(Xb, a, b, c);
                    var d = function e() {
                        Vb(a, b, e), c.apply(this, arguments)
                    };
                    d.guid = c.guid = c.guid || Jb(), Ub(a, b, d)
                }

                function ac(a, b) {
                    b && ($b = b), f.setTimeout(_b, a)
                }

                function pc(a) {
                    var b = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
                    if (b) {
                        if (!a[b].nodeName) throw new Error('The eventBusKey "' + b + '" does not refer to an element.');
                        a.eventBusEl_ = a[b]
                    } else a.eventBusEl_ = ib("span", {className: "vjs-event-bus"});
                    return S(a, oc), a.on("dispose", function () {
                        a.off(), f.setTimeout(function () {
                            a.eventBusEl_ = null
                        }, 0)
                    }), a
                }

                function rc(a, b) {
                    return S(a, qc), a.state = S({}, a.state, b), "function" == typeof a.handleStateChanged && hc(a) && a.on("statechanged", a.handleStateChanged), a
                }

                function sc(a) {
                    return "string" != typeof a ? a : a.charAt(0).toUpperCase() + a.slice(1)
                }

                function tc() {
                    for (var a = {}, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                    return c.forEach(function (b) {
                        b && R(b, function (b, c) {
                            U(b) ? (U(a[c]) || (a[c] = {}), a[c] = tc(a[c], b)) : a[c] = b
                        })
                    }), a
                }

                function vc(a, b, c, d) {
                    return function (a, b, c) {
                        if ("number" != typeof b || b < 0 || b > c) throw new Error("Failed to execute '" + a + "' on 'TimeRanges': The index provided (" + b + ") is non-numeric or out of bounds (0-" + c + ").")
                    }(a, d, c.length - 1), c[d][b]
                }

                function wc(a) {
                    return void 0 === a || 0 === a.length ? {
                        length: 0, start: function () {
                            throw new Error("This TimeRanges object is empty")
                        }, end: function () {
                            throw new Error("This TimeRanges object is empty")
                        }
                    } : {length: a.length, start: vc.bind(null, "start", 0, a), end: vc.bind(null, "end", 1, a)}
                }

                function xc(a, b) {
                    return Array.isArray(a) ? wc(a) : void 0 === a || void 0 === b ? wc() : wc([[a, b]])
                }

                function yc(a, b) {
                    var c = 0, d = void 0, e = void 0;
                    if (!b) return 0;
                    a && a.length || (a = xc(0, 0));
                    for (var f = 0; f < a.length; f++) d = a.start(f), (e = a.end(f)) > b && (e = b), c += e - d;
                    return c / b
                }

                function Fc(a) {
                    return a instanceof Fc ? a : ("number" == typeof a ? this.code = a : "string" == typeof a ? this.message = a : T(a) && ("number" == typeof a.code && (this.code = a.code), S(this, a)), void (this.message || (this.message = Fc.defaultMessages[this.code] || "")))
                }

                function Ic(a) {
                    return void 0 !== a && null !== a && "function" == typeof a.then
                }

                function Jc(a) {
                    Ic(a) && a.then(null, function () {
                    })
                }

                function qd(a, b, c) {
                    var d = a;
                    return gd(b) ? (c = b, "string" == typeof a && (d = {uri: a})) : d = nd(b, {uri: a}), d.callback = c, d
                }

                function rd(a, b, c) {
                    return sd(b = qd(a, b, c))
                }

                function sd(a) {
                    function d(a) {
                        return clearTimeout(i), a instanceof Error || (a = new Error("" + (a || "Unknown XMLHttpRequest Error"))), a.statusCode = 0, c(a, p)
                    }

                    function e() {
                        if (!g) {
                            var b;
                            clearTimeout(i), b = a.useXDR && void 0 === h.status ? 200 : 1223 === h.status ? 204 : h.status;
                            var d = p, e = null;
                            return 0 !== b ? (d = {
                                body: function () {
                                    var a = void 0;
                                    if (a = h.response ? h.response : h.responseText || function (a) {
                                        if ("document" === a.responseType) return a.responseXML;
                                        var b = a.responseXML && "parsererror" === a.responseXML.documentElement.nodeName;
                                        return "" !== a.responseType || b ? null : a.responseXML
                                    }(h), o) try {
                                        a = JSON.parse(a)
                                    } catch (a) {
                                    }
                                    return a
                                }(), statusCode: b, method: k, headers: {}, url: j, rawRequest: h
                            }, h.getAllResponseHeaders && (d.headers = md(h.getAllResponseHeaders()))) : e = new Error("Internal XMLHttpRequest Error"), c(e, d, d.body)
                        }
                    }

                    if (void 0 === a.callback) throw new Error("callback argument missing");
                    var f, g, b = !1, c = function (c, d, e) {
                        b || (b = !0, a.callback(c, d, e))
                    }, h = a.xhr || null;
                    h || (h = a.cors || a.useXDR ? new rd.XDomainRequest : new rd.XMLHttpRequest);
                    var i, j = h.url = a.uri || a.url, k = h.method = a.method || "GET", l = a.body || a.data,
                        m = h.headers = a.headers || {}, n = !!a.sync, o = !1,
                        p = {body: void 0, headers: {}, statusCode: 0, method: k, url: j, rawRequest: h};
                    if ("json" in a && !1 !== a.json && (o = !0, m.accept || m.Accept || (m.Accept = "application/json"), "GET" !== k && "HEAD" !== k && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"), l = JSON.stringify(!0 === a.json ? l : a.json))), h.onreadystatechange = function () {
                        4 === h.readyState && setTimeout(e, 0)
                    }, h.onload = e, h.onerror = d, h.onprogress = function () {
                    }, h.onabort = function () {
                        g = !0
                    }, h.ontimeout = d, h.open(k, j, !n, a.username, a.password), n || (h.withCredentials = !!a.withCredentials), !n && a.timeout > 0 && (i = setTimeout(function () {
                        if (!g) {
                            g = !0, h.abort("timeout");
                            var a = new Error("XMLHttpRequest timeout");
                            a.code = "ETIMEDOUT", d(a)
                        }
                    }, a.timeout)), h.setRequestHeader) for (f in m) m.hasOwnProperty(f) && h.setRequestHeader(f, m[f]); else if (a.headers && !function (a) {
                        for (var b in a) if (a.hasOwnProperty(b)) return !1;
                        return !0
                    }(a.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                    return "responseType" in a && (h.responseType = a.responseType), "beforeSend" in a && "function" == typeof a.beforeSend && a.beforeSend(h), h.send(l || null), h
                }

                function Fd(a, b) {
                    this.name = "ParsingError", this.code = a.code, this.message = b || a.message
                }

                function Gd(a) {
                    function b(a, b, c, d) {
                        return 3600 * (0 | a) + 60 * (0 | b) + (0 | c) + (0 | d) / 1e3
                    }

                    var c = a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return c ? c[3] ? b(c[1], c[2], c[3].replace(":", ""), c[4]) : c[1] > 59 ? b(c[1], c[2], 0, c[4]) : b(0, c[1], c[2], c[4]) : null
                }

                function Hd() {
                    this.values = Ed(null)
                }

                function Id(a, b, c, d) {
                    var e = d ? a.split(d) : [a];
                    for (var f in e) if ("string" == typeof e[f]) {
                        var g = e[f].split(c);
                        2 === g.length && b(g[0], g[1])
                    }
                }

                function Jd(a, b, c) {
                    function e() {
                        var b = Gd(a);
                        if (null === b) throw new Fd(Fd.Errors.BadTimeStamp, "Malformed timestamp: " + d);
                        return a = a.replace(/^[^\sa-zA-Z-]+/, ""), b
                    }

                    function f() {
                        a = a.replace(/^\s+/, "")
                    }

                    var d = a;
                    if (f(), b.startTime = e(), f(), "-->" !== a.substr(0, 3)) throw new Fd(Fd.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + d);
                    a = a.substr(3), f(), b.endTime = e(), f(), function (a, b) {
                        var d = new Hd;
                        Id(a, function (a, b) {
                            switch (a) {
                                case"region":
                                    for (var e = c.length - 1; e >= 0; e--) if (c[e].id === b) {
                                        d.set(a, c[e].region);
                                        break
                                    }
                                    break;
                                case"vertical":
                                    d.alt(a, b, ["rl", "lr"]);
                                    break;
                                case"line":
                                    var f = b.split(","), g = f[0];
                                    d.integer(a, g), d.percent(a, g) && d.set("snapToLines", !1), d.alt(a, g, ["auto"]), 2 === f.length && d.alt("lineAlign", f[1], ["start", "middle", "end"]);
                                    break;
                                case"position":
                                    f = b.split(","), d.percent(a, f[0]), 2 === f.length && d.alt("positionAlign", f[1], ["start", "middle", "end"]);
                                    break;
                                case"size":
                                    d.percent(a, b);
                                    break;
                                case"align":
                                    d.alt(a, b, ["start", "middle", "end", "left", "right"])
                            }
                        }, /:/, /\s/), b.region = d.get("region", null), b.vertical = d.get("vertical", ""), b.line = d.get("line", "auto"), b.lineAlign = d.get("lineAlign", "start"), b.snapToLines = d.get("snapToLines", !0), b.size = d.get("size", 100), b.align = d.get("align", "middle"), b.position = d.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        }, b.align), b.positionAlign = d.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        }, b.align)
                    }(a, b)
                }

                function Od(a, b) {
                    function c() {
                        if (!b) return null;
                        var a, c = b.match(/^([^<]*)(<[^>]*>?)?/);
                        return a = c[1] ? c[1] : c[2], b = b.substr(a.length), a
                    }

                    function d(a) {
                        return Kd[a]
                    }

                    function e(a) {
                        for (; n = a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) a = a.replace(n[0], d);
                        return a
                    }

                    function f(a, b) {
                        return !Nd[b.localName] || Nd[b.localName] === a.localName
                    }

                    function g(b, c) {
                        var d = Ld[b];
                        if (!d) return null;
                        var e = a.document.createElement(d);
                        e.localName = d;
                        var f = Md[b];
                        return f && c && (e[f] = c.trim()), e
                    }

                    for (var h, i = a.document.createElement("div"), j = i, k = []; null !== (h = c());) if ("<" !== h[0]) j.appendChild(a.document.createTextNode(e(h))); else {
                        if ("/" === h[1]) {
                            k.length && k[k.length - 1] === h.substr(2).replace(">", "") && (k.pop(), j = j.parentNode);
                            continue
                        }
                        var l, m = Gd(h.substr(1, h.length - 2));
                        if (m) {
                            l = a.document.createProcessingInstruction("timestamp", m), j.appendChild(l);
                            continue
                        }
                        var n = h.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!n) continue;
                        if (!(l = g(n[1], n[3]))) continue;
                        if (!f(j, l)) continue;
                        n[2] && (l.className = n[2].substr(1).replace(".", " ")), k.push(n[1]), j.appendChild(l), j = l
                    }
                    return i
                }

                function Qd(a) {
                    for (var b = 0; b < Pd.length; b++) {
                        var c = Pd[b];
                        if (a >= c[0] && a <= c[1]) return !0
                    }
                    return !1
                }

                function Rd() {
                }

                function Sd(a, b, c) {
                    var d = /MSIE\s8\.0/.test(navigator.userAgent), e = "rgba(255, 255, 255, 1)",
                        f = "rgba(0, 0, 0, 0.8)";
                    d && (e = "rgb(255, 255, 255)", f = "rgb(0, 0, 0)"), Rd.call(this), this.cue = b, this.cueDiv = Od(a, b.text);
                    var g = {
                        color: e,
                        backgroundColor: f,
                        position: "relative",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        display: "inline"
                    };
                    d || (g.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl", g.unicodeBidi = "plaintext"), this.applyStyles(g, this.cueDiv), this.div = a.document.createElement("div"), g = {
                        textAlign: "middle" === b.align ? "center" : b.align,
                        font: c.font,
                        whiteSpace: "pre-line",
                        position: "absolute"
                    }, d || (g.direction = function (a) {
                        function d(a, b) {
                            for (var c = b.childNodes.length - 1; c >= 0; c--) a.push(b.childNodes[c])
                        }

                        function e(a) {
                            if (!a || !a.length) return null;
                            var b = a.pop(), c = b.textContent || b.innerText;
                            if (c) {
                                var f = c.match(/^.*(\n|\r)/);
                                return f ? (a.length = 0, f[0]) : c
                            }
                            return "ruby" === b.tagName ? e(a) : b.childNodes ? (d(a, b), e(a)) : void 0
                        }

                        var b = [], c = "";
                        if (!a || !a.childNodes) return "ltr";
                        for (d(b, a); c = e(b);) for (var f = 0; f < c.length; f++) if (Qd(c.charCodeAt(f))) return "rtl";
                        return "ltr"
                    }(this.cueDiv), g.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(g), this.div.appendChild(this.cueDiv);
                    var h = 0;
                    switch (b.positionAlign) {
                        case"start":
                            h = b.position;
                            break;
                        case"middle":
                            h = b.position - b.size / 2;
                            break;
                        case"end":
                            h = b.position - b.size
                    }
                    this.applyStyles("" === b.vertical ? {
                        left: this.formatStyle(h, "%"),
                        width: this.formatStyle(b.size, "%")
                    } : {
                        top: this.formatStyle(h, "%"),
                        height: this.formatStyle(b.size, "%")
                    }), this.move = function (a) {
                        this.applyStyles({
                            top: this.formatStyle(a.top, "px"),
                            bottom: this.formatStyle(a.bottom, "px"),
                            left: this.formatStyle(a.left, "px"),
                            right: this.formatStyle(a.right, "px"),
                            height: this.formatStyle(a.height, "px"),
                            width: this.formatStyle(a.width, "px")
                        })
                    }
                }

                function Td(a) {
                    var b, c, d, e, f = /MSIE\s8\.0/.test(navigator.userAgent);
                    if (a.div) {
                        c = a.div.offsetHeight, d = a.div.offsetWidth, e = a.div.offsetTop;
                        var g = (g = a.div.childNodes) && (g = g[0]) && g.getClientRects && g.getClientRects();
                        a = a.div.getBoundingClientRect(), b = g ? Math.max(g[0] && g[0].height || 0, a.height / g.length) : 0
                    }
                    this.left = a.left, this.right = a.right, this.top = a.top || e, this.height = a.height || c, this.bottom = a.bottom || e + (a.height || c), this.width = a.width || d, this.lineHeight = void 0 !== b ? b : a.lineHeight, f && !this.lineHeight && (this.lineHeight = 13)
                }

                function Ud(a, b, c, d) {
                    var e = new Td(b), f = b.cue, g = function (a) {
                        if ("number" == typeof a.line && (a.snapToLines || a.line >= 0 && a.line <= 100)) return a.line;
                        if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement) return -1;
                        for (var b = a.track, c = b.textTrackList, d = 0, e = 0; e < c.length && c[e] !== b; e++) "showing" === c[e].mode && d++;
                        return -1 * ++d
                    }(f), h = [];
                    if (f.snapToLines) {
                        var i;
                        switch (f.vertical) {
                            case"":
                                h = ["+y", "-y"], i = "height";
                                break;
                            case"rl":
                                h = ["+x", "-x"], i = "width";
                                break;
                            case"lr":
                                h = ["-x", "+x"], i = "width"
                        }
                        var j = e.lineHeight, k = j * Math.round(g), l = c[i] + j, m = h[0];
                        Math.abs(k) > l && (k = k < 0 ? -1 : 1, k *= Math.ceil(l / j) * j), g < 0 && (k += "" === f.vertical ? c.height : c.width, h = h.reverse()), e.move(m, k)
                    } else {
                        var n = e.lineHeight / c.height * 100;
                        switch (f.lineAlign) {
                            case"middle":
                                g -= n / 2;
                                break;
                            case"end":
                                g -= n
                        }
                        switch (f.vertical) {
                            case"":
                                b.applyStyles({top: b.formatStyle(g, "%")});
                                break;
                            case"rl":
                                b.applyStyles({left: b.formatStyle(g, "%")});
                                break;
                            case"lr":
                                b.applyStyles({right: b.formatStyle(g, "%")})
                        }
                        h = ["+y", "-x", "+x", "-y"], e = new Td(b)
                    }
                    var o = function (a, b) {
                        for (var e, f = new Td(a), g = 1, h = 0; h < b.length; h++) {
                            for (; a.overlapsOppositeAxis(c, b[h]) || a.within(c) && a.overlapsAny(d);) a.move(b[h]);
                            if (a.within(c)) return a;
                            var i = a.intersectPercentage(c);
                            g > i && (e = new Td(a), g = i), a = new Td(f)
                        }
                        return e || f
                    }(e, h);
                    b.move(o.toCSSCompatValues(c))
                }

                function Vd() {
                }

                function $d(a) {
                    return "string" == typeof a && !!Zd[a.toLowerCase()] && a.toLowerCase()
                }

                function _d(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b];
                        for (var d in c) a[d] = c[d]
                    }
                    return a
                }

                function ae(a, b, c) {
                    var d = this, e = /MSIE\s8\.0/.test(navigator.userAgent), f = {};
                    e ? d = document.createElement("custom") : f.enumerable = !0, d.hasBeenReset = !1;
                    var g = "", h = !1, i = a, j = b, k = c, l = null, m = "", n = !0, o = "auto", p = "start", q = 50,
                        r = "middle", s = 50, t = "middle";
                    return Object.defineProperty(d, "id", _d({}, f, {
                        get: function () {
                            return g
                        }, set: function (a) {
                            g = "" + a
                        }
                    })), Object.defineProperty(d, "pauseOnExit", _d({}, f, {
                        get: function () {
                            return h
                        }, set: function (a) {
                            h = !!a
                        }
                    })), Object.defineProperty(d, "startTime", _d({}, f, {
                        get: function () {
                            return i
                        }, set: function (a) {
                            if ("number" != typeof a) throw new TypeError("Start time must be set to a number.");
                            i = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "endTime", _d({}, f, {
                        get: function () {
                            return j
                        }, set: function (a) {
                            if ("number" != typeof a) throw new TypeError("End time must be set to a number.");
                            j = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "text", _d({}, f, {
                        get: function () {
                            return k
                        }, set: function (a) {
                            k = "" + a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "region", _d({}, f, {
                        get: function () {
                            return l
                        }, set: function (a) {
                            l = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "vertical", _d({}, f, {
                        get: function () {
                            return m
                        }, set: function (a) {
                            var b = function (a) {
                                return "string" == typeof a && !!Yd[a.toLowerCase()] && a.toLowerCase()
                            }(a);
                            if (!1 === b) throw new SyntaxError("An invalid or illegal string was specified.");
                            m = b, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "snapToLines", _d({}, f, {
                        get: function () {
                            return n
                        }, set: function (a) {
                            n = !!a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "line", _d({}, f, {
                        get: function () {
                            return o
                        }, set: function (a) {
                            if ("number" != typeof a && a !== Xd) throw new SyntaxError("An invalid number or illegal string was specified.");
                            o = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "lineAlign", _d({}, f, {
                        get: function () {
                            return p
                        }, set: function (a) {
                            var b = $d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            p = b, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "position", _d({}, f, {
                        get: function () {
                            return q
                        }, set: function (a) {
                            if (a < 0 || a > 100) throw new Error("Position must be between 0 and 100.");
                            q = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "positionAlign", _d({}, f, {
                        get: function () {
                            return r
                        }, set: function (a) {
                            var b = $d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            r = b, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "size", _d({}, f, {
                        get: function () {
                            return s
                        }, set: function (a) {
                            if (a < 0 || a > 100) throw new Error("Size must be between 0 and 100.");
                            s = a, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(d, "align", _d({}, f, {
                        get: function () {
                            return t
                        }, set: function (a) {
                            var b = $d(a);
                            if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
                            t = b, this.hasBeenReset = !0
                        }
                    })), d.displayState = void 0, e ? d : void 0
                }

                function de(a) {
                    return "number" == typeof a && a >= 0 && a <= 100
                }

                function ke(a, b, c) {
                    a.setTimeout(function () {
                        return function d() {
                            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                c = arguments[2], e = arguments[3],
                                f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                                g = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], h = b[0],
                                i = b.slice(1);
                            if ("string" == typeof h) d(a, he[h], c, e, f, g); else if (h) {
                                var j = function (a, b) {
                                    var c = ie[a.id()], d = null;
                                    if (void 0 === c || null === c) return d = b(a), ie[a.id()] = [[b, d]], d;
                                    for (var e = 0; e < c.length; e++) {
                                        var f = c[e], g = f[0], h = f[1];
                                        g === b && (d = h)
                                    }
                                    return null === d && (d = b(a), c.push([b, d])), d
                                }(e, h);
                                if (!j.setSource) return f.push(j), d(a, i, c, e, f, g);
                                j.setSource(S({}, a), function (b, h) {
                                    return b ? d(a, i, c, e, f, g) : (f.push(j), void d(h, a.type === h.type ? i : he[h.type], c, e, f, g))
                                })
                            } else i.length ? d(a, i, c, e, f, g) : g ? c(a, f) : d(a, he["*"], c, e, f, !0)
                        }(b, he[b.type], c, a)
                    }, 1)
                }

                function le(a, b, c) {
                    var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, e = "call" + sc(c),
                        f = a.reduce(pe(e), d), g = f === je, h = g ? null : b[c](f);
                    return function (a, b, c, d) {
                        for (var e = a.length - 1; e >= 0; e--) {
                            var f = a[e];
                            f[b] && f[b](d, c)
                        }
                    }(a, c, h, g), h
                }

                function pe(a) {
                    return function (b, c) {
                        return b === je ? je : c[a] ? c[a](b) : b
                    }
                }

                function se(a) {
                    var b = re(a.src);
                    return !a.type && b && (a.type = b), a
                }

                function xe(a, b) {
                    var c = void 0;
                    if (4 === a.length) c = a[1] + a[1] + a[2] + a[2] + a[3] + a[3]; else {
                        if (7 !== a.length) throw new Error("Invalid color code provided, " + a + "; must be formatted as e.g. #f0e or #f604e2.");
                        c = a.slice(1)
                    }
                    return "rgba(" + parseInt(c.slice(0, 2), 16) + "," + parseInt(c.slice(2, 4), 16) + "," + parseInt(c.slice(4, 6), 16) + "," + b + ")"
                }

                function ye(a, b, c) {
                    try {
                        a.style[b] = c
                    } catch (a) {
                        return
                    }
                }

                function Lf(a, b) {
                    return b && (a = b(a)), a && "none" !== a ? a : void 0
                }

                function lg(a, b, c) {
                    var d = lg.getPlayer(a);
                    if (d) return b && Z.warn('Player "' + a + '" is already initialised. Options will not be applied.'), c && d.ready(c), d;
                    var e = "string" == typeof a ? Fb("#" + kg(a)) : a;
                    if (!fb(e)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                    m.body.contains(e) || Z.warn("The element supplied is not included in the DOM"), b = b || {}, lg.hooks("beforesetup").forEach(function (a) {
                        var c = a(e, tc(b));
                        T(c) && !Array.isArray(c) ? b = tc(b, c) : Z.error("please return an object in beforesetup hooks")
                    });
                    var f = uc.getComponent("Player");
                    return d = new f(e, b, c), lg.hooks("setup").forEach(function (a) {
                        return a(d)
                    }), d
                }

                var e, a = "6.11.0",
                    b = "undefined" != typeof window ? window : void 0 !== d ? d : "undefined" != typeof self ? self : {},
                    f = "undefined" != typeof window ? window : void 0 !== b ? b : "undefined" != typeof self ? self : {},
                    g = {}, i = (Object.freeze || Object)({"default": g}), j = i && g || i,
                    k = void 0 !== b ? b : "undefined" != typeof window ? window : {};
                "undefined" != typeof document ? e = document : (e = k["__GLOBAL_DOCUMENT_CACHE@4"]) || (e = k["__GLOBAL_DOCUMENT_CACHE@4"] = j);
                var l, m = e, n = f.navigator && f.navigator.userAgent || "", o = /AppleWebKit\/([\d.]+)/i.exec(n),
                    p = o ? parseFloat(o.pop()) : null, q = /iPad/i.test(n), r = /iPhone/i.test(n) && !q,
                    s = /iPod/i.test(n), t = r || q || s, u = (l = n.match(/OS (\d+)_/i)) && l[1] ? l[1] : null,
                    v = /Android/i.test(n), w = function () {
                        var a = n.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                        if (!a) return null;
                        var b = a[1] && parseFloat(a[1]), c = a[2] && parseFloat(a[2]);
                        return b && c ? parseFloat(a[1] + "." + a[2]) : b || null
                    }(), x = v && /webkit/i.test(n) && w < 2.3, y = v && w < 5 && p < 537, z = /Firefox/i.test(n),
                    A = /Edge/i.test(n), B = !A && (/Chrome/i.test(n) || /CriOS/i.test(n)), C = function () {
                        var a = n.match(/(Chrome|CriOS)\/(\d+)/);
                        return a && a[2] ? parseFloat(a[2]) : null
                    }(), D = /MSIE\s8\.0/.test(n), E = function () {
                        var a = /MSIE\s(\d+)\.\d/.exec(n), b = a && parseFloat(a[1]);
                        return !b && /Trident\/7.0/i.test(n) && /rv:11.0/.test(n) && (b = 11), b
                    }(), F = /Safari/i.test(n) && !B && !v && !A, G = (F || t) && !B,
                    H = eb() && ("ontouchstart" in f || f.navigator.maxTouchPoints || f.DocumentTouch && f.document instanceof f.DocumentTouch),
                    I = eb() && "backgroundSize" in f.document.createElement("video").style,
                    J = (Object.freeze || Object)({
                        IS_IPAD: q,
                        IS_IPHONE: r,
                        IS_IPOD: s,
                        IS_IOS: t,
                        IOS_VERSION: u,
                        IS_ANDROID: v,
                        ANDROID_VERSION: w,
                        IS_OLD_ANDROID: x,
                        IS_NATIVE_ANDROID: y,
                        IS_FIREFOX: z,
                        IS_EDGE: A,
                        IS_CHROME: B,
                        CHROME_VERSION: C,
                        IS_IE8: D,
                        IE_VERSION: E,
                        IS_SAFARI: F,
                        IS_ANY_SAFARI: G,
                        TOUCH_ENABLED: H,
                        BACKGROUND_SIZE_SUPPORTED: I
                    }), K = "function" == typeof Symbol && "symbol" === h(Symbol.iterator) ? function (a) {
                        return void 0 === a ? "undefined" : h(a)
                    } : function (a) {
                        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : void 0 === a ? "undefined" : h(a)
                    }, L = function (a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
                    }, M = function (a, b) {
                        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : h(b)));
                        a.prototype = Object.create(b && b.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
                    }, N = function (a, b) {
                        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !b || "object" !== (void 0 === b ? "undefined" : h(b)) && "function" != typeof b ? a : b
                    }, O = function (a, b) {
                        return a.raw = b, a
                    }, P = Object.prototype.toString, Q = function (a) {
                        return T(a) ? Object.keys(a) : []
                    }, V = void 0, W = "info", X = [], Y = function (a, b) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!E && E < 11,
                            d = V.levels[W], e = new RegExp("^(" + d + ")$");
                        if ("log" !== a && b.unshift(a.toUpperCase() + ":"), X && X.push([].concat(b)), b.unshift("VIDEOJS:"), f.console) {
                            var g = f.console[a];
                            g || "debug" !== a || (g = f.console.info || f.console.log), g && d && e.test(a) && (c && (b = b.map(function (a) {
                                if (T(a) || Array.isArray(a)) try {
                                    return JSON.stringify(a)
                                } catch (b) {
                                    return String(a)
                                }
                                return String(a)
                            }).join(" ")), g.apply ? g[Array.isArray(b) ? "apply" : "call"](f.console, b) : g(b))
                        }
                    };
                (V = function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    Y("log", b)
                }).levels = {
                    all: "debug|log|warn|error",
                    off: "",
                    debug: "debug|log|warn|error",
                    info: "log|warn|error",
                    warn: "warn|error",
                    error: "error",
                    DEFAULT: W
                }, V.level = function (a) {
                    if ("string" == typeof a) {
                        if (!V.levels.hasOwnProperty(a)) throw new Error('"' + a + '" in not a valid log level');
                        W = a
                    }
                    return W
                }, V.history = function () {
                    return X ? [].concat(X) : []
                }, V.history.clear = function () {
                    X && (X.length = 0)
                }, V.history.disable = function () {
                    null !== X && (X.length = 0, X = null)
                }, V.history.enable = function () {
                    null === X && (X = [])
                }, V.error = function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return Y("error", b)
                }, V.warn = function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return Y("warn", b)
                }, V.debug = function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return Y("debug", b)
                };
                var Z = V, _ = function (a) {
                        for (var b = "", c = 0; c < arguments.length; c++) b += $(a[c]) + (arguments[c + 1] || "");
                        return b
                    },
                    bb = O(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
                    Fb = hb("querySelector"), Gb = hb("querySelectorAll"), Hb = (Object.freeze || Object)({
                        isReal: eb,
                        isEl: fb,
                        isInFrame: gb,
                        createEl: ib,
                        textContent: jb,
                        prependTo: kb,
                        hasClass: lb,
                        addClass: mb,
                        removeClass: nb,
                        toggleClass: ob,
                        setAttributes: pb,
                        getAttributes: qb,
                        getAttribute: rb,
                        setAttribute: sb,
                        removeAttribute: tb,
                        blockTextSelection: ub,
                        unblockTextSelection: vb,
                        getBoundingClientRect: wb,
                        findPosition: xb,
                        getPointerPosition: yb,
                        isTextNode: zb,
                        emptyEl: Ab,
                        normalizeContent: Bb,
                        appendContent: Cb,
                        insertContent: Db,
                        isSingleLeftClick: Eb,
                        $: Fb,
                        $$: Gb
                    }), Ib = 1, Kb = {}, Lb = "vdata" + (new Date).getTime(), Sb = !1;
                !function () {
                    try {
                        var a = Object.defineProperty({}, "passive", {
                            get: function () {
                                Sb = !0
                            }
                        });
                        f.addEventListener("test", null, a), f.removeEventListener("test", null, a)
                    } catch (a) {
                    }
                }();
                var Tb = ["touchstart", "touchmove"],
                    Yb = (Object.freeze || Object)({fixEvent: Rb, on: Ub, off: Vb, trigger: Wb, one: Xb}), Zb = !1,
                    $b = void 0, _b = function () {
                        if (eb() && !1 !== $b.options.autoSetup) {
                            var a = m.getElementsByTagName("video"), b = m.getElementsByTagName("audio"),
                                c = m.getElementsByTagName("video-js"), d = [];
                            if (a && a.length > 0) for (var e = 0, f = a.length; e < f; e++) d.push(a[e]);
                            if (b && b.length > 0) for (var g = 0, h = b.length; g < h; g++) d.push(b[g]);
                            if (c && c.length > 0) for (var i = 0, j = c.length; i < j; i++) d.push(c[i]);
                            if (d && d.length > 0) for (var k = 0, l = d.length; k < l; k++) {
                                var n = d[k];
                                if (!n || !n.getAttribute) {
                                    ac(1);
                                    break
                                }
                                void 0 === n.player && null !== n.getAttribute("data-setup") && $b(n)
                            } else Zb || ac(1)
                        }
                    };
                eb() && "complete" === m.readyState ? Zb = !0 : Xb(f, "load", function () {
                    Zb = !0
                });
                var bc = function (a) {
                    var b = m.createElement("style");
                    return b.className = a, b
                }, cc = function (a, b) {
                    a.styleSheet ? a.styleSheet.cssText = b : a.textContent = b
                }, dc = function (a, b, c) {
                    b.guid || (b.guid = Jb());
                    var d = function () {
                        return b.apply(a, arguments)
                    };
                    return d.guid = c ? c + "_" + b.guid : b.guid, d
                }, ec = function (a, b) {
                    var c = Date.now();
                    return function () {
                        var d = Date.now();
                        d - c >= b && (a.apply(void 0, arguments), c = d)
                    }
                }, fc = function (a, b, c) {
                    var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : f, e = void 0;
                    return function () {
                        var f = this, g = arguments, h = function () {
                            e = null, h = null, c || a.apply(f, g)
                        };
                        !e && c && a.apply(f, g), d.clearTimeout(e), e = d.setTimeout(h, b)
                    }
                }, gc = function () {
                };
                gc.prototype.allowedEvents_ = {}, gc.prototype.on = function (a, b) {
                    var c = this.addEventListener;
                    this.addEventListener = function () {
                    }, Ub(this, a, b), this.addEventListener = c
                }, gc.prototype.addEventListener = gc.prototype.on, gc.prototype.off = function (a, b) {
                    Vb(this, a, b)
                }, gc.prototype.removeEventListener = gc.prototype.off, gc.prototype.one = function (a, b) {
                    var c = this.addEventListener;
                    this.addEventListener = function () {
                    }, Xb(this, a, b), this.addEventListener = c
                }, gc.prototype.trigger = function (a) {
                    var b = a.type || a;
                    "string" == typeof a && (a = {type: b}), a = Rb(a), this.allowedEvents_[b] && this["on" + b] && this["on" + b](a), Wb(this, a)
                }, gc.prototype.dispatchEvent = gc.prototype.trigger;
                var hc = function (a) {
                    return a instanceof gc || !!a.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (b) {
                        return "function" == typeof a[b]
                    })
                }, ic = function (a) {
                    return "string" == typeof a && /\S/.test(a) || Array.isArray(a) && !!a.length
                }, jc = function (a) {
                    if (!a.nodeName && !hc(a)) throw new Error("Invalid target; must be a DOM node or evented object.")
                }, kc = function (a) {
                    if (!ic(a)) throw new Error("Invalid event type; must be a non-empty string or array.")
                }, lc = function (a) {
                    if ("function" != typeof a) throw new Error("Invalid listener; must be a function.")
                }, mc = function (a, b) {
                    var c = b.length < 3 || b[0] === a || b[0] === a.eventBusEl_, d = void 0, e = void 0, f = void 0;
                    return c ? (d = a.eventBusEl_, b.length >= 3 && b.shift(), e = b[0], f = b[1]) : (d = b[0], e = b[1], f = b[2]), jc(d), kc(e), lc(f), {
                        isTargetingSelf: c,
                        target: d,
                        type: e,
                        listener: f = dc(a, f)
                    }
                }, nc = function (a, b, c, d) {
                    jc(a), a.nodeName ? Yb[b](a, c, d) : a[b](c, d)
                }, oc = {
                    on: function () {
                        for (var a = this, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                        var e = mc(this, c), f = e.isTargetingSelf, g = e.target, h = e.type, i = e.listener;
                        if (nc(g, "on", h, i), !f) {
                            var j = function () {
                                return a.off(g, h, i)
                            };
                            j.guid = i.guid;
                            var k = function () {
                                return a.off("dispose", j)
                            };
                            k.guid = i.guid, nc(this, "on", "dispose", j), nc(g, "on", "dispose", k)
                        }
                    }, one: function () {
                        for (var a = this, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                        var e = mc(this, c), f = e.isTargetingSelf, g = e.target, h = e.type, i = e.listener;
                        if (f) nc(g, "one", h, i); else {
                            var j = function k() {
                                for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                                a.off(g, h, k), i.apply(null, c)
                            };
                            j.guid = i.guid, nc(g, "one", h, j)
                        }
                    }, off: function (a, b, c) {
                        if (!a || ic(a)) Vb(this.eventBusEl_, a, b); else {
                            var d = a, e = b;
                            jc(d), kc(e), lc(c), c = dc(this, c), this.off("dispose", c), d.nodeName ? (Vb(d, e, c), Vb(d, "dispose", c)) : hc(d) && (d.off(e, c), d.off("dispose", c))
                        }
                    }, trigger: function (a, b) {
                        return Wb(this.eventBusEl_, a, b)
                    }
                }, qc = {
                    state: {}, setState: function (a) {
                        var b = this;
                        "function" == typeof a && (a = a());
                        var c = void 0;
                        return R(a, function (a, d) {
                            b.state[d] !== a && ((c = c || {})[d] = {from: b.state[d], to: a}), b.state[d] = a
                        }), c && hc(this) && this.trigger({changes: c, type: "statechanged"}), c
                    }
                }, uc = function () {
                    function a(b, c, d) {
                        if (L(this, a), this.player_ = !b && this.play ? b = this : b, this.options_ = tc({}, this.options_), c = this.options_ = tc(this.options_, c), this.id_ = c.id || c.el && c.el.id, !this.id_) {
                            var e = b && b.id && b.id() || "no_player";
                            this.id_ = e + "_component_" + Jb()
                        }
                        this.name_ = c.name || null, c.el ? this.el_ = c.el : !1 !== c.createEl && (this.el_ = this.createEl()), !1 !== c.evented && pc(this, {eventBusKey: this.el_ ? "el_" : null}), rc(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== c.initChildren && this.initChildren(), this.ready(d), !1 !== c.reportTouchActivity && this.enableTouchActivity()
                    }

                    return a.prototype.dispose = function () {
                        if (this.trigger({
                            type: "dispose",
                            bubbles: !1
                        }), this.children_) for (var a = this.children_.length - 1; a >= 0; a--) this.children_[a].dispose && this.children_[a].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), Ob(this.el_), this.el_ = null), this.player_ = null
                    }, a.prototype.player = function () {
                        return this.player_
                    }, a.prototype.options = function (a) {
                        return Z.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), a ? (this.options_ = tc(this.options_, a), this.options_) : this.options_
                    }, a.prototype.el = function () {
                        return this.el_
                    }, a.prototype.createEl = function (a, b, c) {
                        return ib(a, b, c)
                    }, a.prototype.localize = function (a, b) {
                        var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
                            d = this.player_.language && this.player_.language(),
                            e = this.player_.languages && this.player_.languages(), f = e && e[d],
                            g = d && d.split("-")[0], h = e && e[g], i = c;
                        return f && f[a] ? i = f[a] : h && h[a] && (i = h[a]), b && (i = i.replace(/\{(\d+)\}/g, function (a, c) {
                            var d = b[c - 1], e = d;
                            return void 0 === d && (e = a), e
                        })), i
                    }, a.prototype.contentEl = function () {
                        return this.contentEl_ || this.el_
                    }, a.prototype.id = function () {
                        return this.id_
                    }, a.prototype.name = function () {
                        return this.name_
                    }, a.prototype.children = function () {
                        return this.children_
                    }, a.prototype.getChildById = function (a) {
                        return this.childIndex_[a]
                    }, a.prototype.getChild = function (a) {
                        return a ? (a = sc(a), this.childNameIndex_[a]) : void 0
                    }, a.prototype.addChild = function (b) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            e = void 0, f = void 0;
                        if ("string" == typeof b) {
                            f = sc(b);
                            var g = c.componentClass || f;
                            c.name = f;
                            var h = a.getComponent(g);
                            if (!h) throw new Error("Component " + g + " does not exist");
                            if ("function" != typeof h) return null;
                            e = new h(this.player_ || this, c)
                        } else e = b;
                        if (this.children_.splice(d, 0, e), "function" == typeof e.id && (this.childIndex_[e.id()] = e), (f = f || e.name && sc(e.name())) && (this.childNameIndex_[f] = e), "function" == typeof e.el && e.el()) {
                            var i = this.contentEl().children[d] || null;
                            this.contentEl().insertBefore(e.el(), i)
                        }
                        return e
                    }, a.prototype.removeChild = function (a) {
                        if ("string" == typeof a && (a = this.getChild(a)), a && this.children_) {
                            for (var b = !1, c = this.children_.length - 1; c >= 0; c--) if (this.children_[c] === a) {
                                b = !0, this.children_.splice(c, 1);
                                break
                            }
                            if (b) {
                                this.childIndex_[a.id()] = null, this.childNameIndex_[a.name()] = null;
                                var d = a.el();
                                d && d.parentNode === this.contentEl() && this.contentEl().removeChild(a.el())
                            }
                        }
                    }, a.prototype.initChildren = function () {
                        var b = this, c = this.options_.children;
                        if (c) {
                            var d = this.options_, e = void 0, f = a.getComponent("Tech");
                            (e = Array.isArray(c) ? c : Object.keys(c)).concat(Object.keys(this.options_).filter(function (a) {
                                return !e.some(function (b) {
                                    return "string" == typeof b ? a === b : a === b.name
                                })
                            })).map(function (a) {
                                var d = void 0, e = void 0;
                                return "string" == typeof a ? e = c[d = a] || b.options_[d] || {} : (d = a.name, e = a), {
                                    name: d,
                                    opts: e
                                }
                            }).filter(function (b) {
                                var c = a.getComponent(b.opts.componentClass || sc(b.name));
                                return c && !f.isTech(c)
                            }).forEach(function (a) {
                                var c = a.name, e = a.opts;
                                if (void 0 !== d[c] && (e = d[c]), !1 !== e) {
                                    !0 === e && (e = {}), e.playerOptions = b.options_.playerOptions;
                                    var f = b.addChild(c, e);
                                    f && (b[c] = f)
                                }
                            })
                        }
                    }, a.prototype.buildCSSClass = function () {
                        return ""
                    }, a.prototype.ready = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return a ? this.isReady_ ? void (b ? a.call(this) : this.setTimeout(a, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(a)) : void 0
                    }, a.prototype.triggerReady = function () {
                        this.isReady_ = !0, this.setTimeout(function () {
                            var a = this.readyQueue_;
                            this.readyQueue_ = [], a && a.length > 0 && a.forEach(function (a) {
                                a.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, a.prototype.$ = function (a, b) {
                        return Fb(a, b || this.contentEl())
                    }, a.prototype.$$ = function (a, b) {
                        return Gb(a, b || this.contentEl())
                    }, a.prototype.hasClass = function (a) {
                        return lb(this.el_, a)
                    }, a.prototype.addClass = function (a) {
                        mb(this.el_, a)
                    }, a.prototype.removeClass = function (a) {
                        nb(this.el_, a)
                    }, a.prototype.toggleClass = function (a, b) {
                        ob(this.el_, a, b)
                    }, a.prototype.show = function () {
                        this.removeClass("vjs-hidden")
                    }, a.prototype.hide = function () {
                        this.addClass("vjs-hidden")
                    }, a.prototype.lockShowing = function () {
                        this.addClass("vjs-lock-showing")
                    }, a.prototype.unlockShowing = function () {
                        this.removeClass("vjs-lock-showing")
                    }, a.prototype.getAttribute = function (a) {
                        return rb(this.el_, a)
                    }, a.prototype.setAttribute = function (a, b) {
                        sb(this.el_, a, b)
                    }, a.prototype.removeAttribute = function (a) {
                        tb(this.el_, a)
                    }, a.prototype.width = function (a, b) {
                        return this.dimension("width", a, b)
                    }, a.prototype.height = function (a, b) {
                        return this.dimension("height", a, b)
                    }, a.prototype.dimensions = function (a, b) {
                        this.width(a, !0), this.height(b)
                    }, a.prototype.dimension = function (a, b, c) {
                        if (void 0 !== b) return null !== b && b == b || (b = 0), this.el_.style[a] = -1 !== ("" + b).indexOf("%") || -1 !== ("" + b).indexOf("px") ? b : "auto" === b ? "" : b + "px", void (c || this.trigger("componentresize"));
                        if (!this.el_) return 0;
                        var d = this.el_.style[a], e = d.indexOf("px");
                        return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(this.el_["offset" + sc(a)], 10)
                    }, a.prototype.currentDimension = function (a) {
                        var b = 0;
                        if ("width" !== a && "height" !== a) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof f.getComputedStyle) {
                            var c = f.getComputedStyle(this.el_);
                            b = c.getPropertyValue(a) || c[a]
                        }
                        if (0 === (b = parseFloat(b))) {
                            var d = "offset" + sc(a);
                            b = this.el_[d]
                        }
                        return b
                    }, a.prototype.currentDimensions = function () {
                        return {width: this.currentDimension("width"), height: this.currentDimension("height")}
                    }, a.prototype.currentWidth = function () {
                        return this.currentDimension("width")
                    }, a.prototype.currentHeight = function () {
                        return this.currentDimension("height")
                    }, a.prototype.focus = function () {
                        this.el_.focus()
                    }, a.prototype.blur = function () {
                        this.el_.blur()
                    }, a.prototype.emitTapEvents = function () {
                        var a = 0, b = null, c = void 0;
                        this.on("touchstart", function (d) {
                            1 === d.touches.length && (b = {
                                pageX: d.touches[0].pageX,
                                pageY: d.touches[0].pageY
                            }, a = (new Date).getTime(), c = !0)
                        }), this.on("touchmove", function (a) {
                            if (a.touches.length > 1) c = !1; else if (b) {
                                var d = a.touches[0].pageX - b.pageX, e = a.touches[0].pageY - b.pageY;
                                Math.sqrt(d * d + e * e) > 10 && (c = !1)
                            }
                        });
                        var d = function () {
                            c = !1
                        };
                        this.on("touchleave", d), this.on("touchcancel", d), this.on("touchend", function (d) {
                            b = null, !0 === c && (new Date).getTime() - a < 200 && (d.preventDefault(), this.trigger("tap"))
                        })
                    }, a.prototype.enableTouchActivity = function () {
                        if (this.player() && this.player().reportUserActivity) {
                            var a = dc(this.player(), this.player().reportUserActivity), b = void 0;
                            this.on("touchstart", function () {
                                a(), this.clearInterval(b), b = this.setInterval(a, 250)
                            });
                            var c = function () {
                                a(), this.clearInterval(b)
                            };
                            this.on("touchmove", a), this.on("touchend", c), this.on("touchcancel", c)
                        }
                    }, a.prototype.setTimeout = function (a, b) {
                        var c, d, e = this;
                        return a = dc(this, a), c = f.setTimeout(function () {
                            e.off("dispose", d), a()
                        }, b), (d = function () {
                            return e.clearTimeout(c)
                        }).guid = "vjs-timeout-" + c, this.on("dispose", d), c
                    }, a.prototype.clearTimeout = function (a) {
                        f.clearTimeout(a);
                        var b = function () {
                        };
                        return b.guid = "vjs-timeout-" + a, this.off("dispose", b), a
                    }, a.prototype.setInterval = function (a, b) {
                        var c = this;
                        a = dc(this, a);
                        var d = f.setInterval(a, b), e = function () {
                            return c.clearInterval(d)
                        };
                        return e.guid = "vjs-interval-" + d, this.on("dispose", e), d
                    }, a.prototype.clearInterval = function (a) {
                        f.clearInterval(a);
                        var b = function () {
                        };
                        return b.guid = "vjs-interval-" + a, this.off("dispose", b), a
                    }, a.prototype.requestAnimationFrame = function (a) {
                        var b, c, d = this;
                        return this.supportsRaf_ ? (a = dc(this, a), b = f.requestAnimationFrame(function () {
                            d.off("dispose", c), a()
                        }), (c = function () {
                            return d.cancelAnimationFrame(b)
                        }).guid = "vjs-raf-" + b, this.on("dispose", c), b) : this.setTimeout(a, 1e3 / 60)
                    }, a.prototype.cancelAnimationFrame = function (a) {
                        if (this.supportsRaf_) {
                            f.cancelAnimationFrame(a);
                            var b = function () {
                            };
                            return b.guid = "vjs-raf-" + a, this.off("dispose", b), a
                        }
                        return this.clearTimeout(a)
                    }, a.registerComponent = function (b, c) {
                        if ("string" != typeof b || !b) throw new Error('Illegal component name, "' + b + '"; must be a non-empty string.');
                        var d = a.getComponent("Tech"), e = d && d.isTech(c),
                            f = a === c || a.prototype.isPrototypeOf(c.prototype);
                        if (e || !f) {
                            var g = void 0;
                            throw g = e ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + b + '"; ' + g + ".")
                        }
                        b = sc(b), a.components_ || (a.components_ = {});
                        var h = a.getComponent("Player");
                        if ("Player" === b && h && h.players) {
                            var i = h.players, j = Object.keys(i);
                            if (i && j.length > 0 && j.map(function (a) {
                                return i[a]
                            }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                        }
                        return a.components_[b] = c, c
                    }, a.getComponent = function (b) {
                        return b ? (b = sc(b), a.components_ && a.components_[b] ? a.components_[b] : void 0) : void 0
                    }, a
                }();
                uc.prototype.supportsRaf_ = "function" == typeof f.requestAnimationFrame && "function" == typeof f.cancelAnimationFrame, uc.registerComponent("Component", uc);
                for (var zc = {}, Ac = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], Bc = Ac[0], Cc = void 0, Dc = 0; Dc < Ac.length; Dc++) if (Ac[Dc][1] in m) {
                    Cc = Ac[Dc];
                    break
                }
                if (Cc) for (var Ec = 0; Ec < Cc.length; Ec++) zc[Bc[Ec]] = Cc[Ec];
                Fc.prototype.code = 0, Fc.prototype.message = "", Fc.prototype.status = null, Fc.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Fc.defaultMessages = {
                    1: "You aborted the media playback",
                    2: "A network error caused the media download to fail part-way.",
                    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                    5: "The media is encrypted and we do not have the keys to decrypt it."
                };
                for (var Gc = 0; Gc < Fc.errorTypes.length; Gc++) Fc[Fc.errorTypes[Gc]] = Gc, Fc.prototype[Fc.errorTypes[Gc]] = Gc;
                var Hc = function (a, b) {
                    var c, d = null;
                    try {
                        c = JSON.parse(a, b)
                    } catch (a) {
                        d = a
                    }
                    return [d, c]
                }, Kc = function (a) {
                    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (b, c) {
                        return a[c] && (b[c] = a[c]), b
                    }, {
                        cues: a.cues && Array.prototype.map.call(a.cues, function (a) {
                            return {startTime: a.startTime, endTime: a.endTime, text: a.text, id: a.id}
                        })
                    })
                }, Lc = function (a) {
                    var b = a.$$("track"), c = Array.prototype.map.call(b, function (a) {
                        return a.track
                    });
                    return Array.prototype.map.call(b, function (a) {
                        var b = Kc(a.track);
                        return a.src && (b.src = a.src), b
                    }).concat(Array.prototype.filter.call(a.textTracks(), function (a) {
                        return -1 === c.indexOf(a)
                    }).map(Kc))
                }, Mc = function (a, b) {
                    return a.forEach(function (a) {
                        var c = b.addRemoteTextTrack(a).track;
                        !a.src && a.cues && a.cues.forEach(function (a) {
                            return c.addCue(a)
                        })
                    }), b.textTracks()
                }, Nc = "vjs-modal-dialog", Oc = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.opened_ = e.hasBeenOpened_ = e.hasBeenFilled_ = !1, e.closeable(!e.options_.uncloseable), e.content(e.options_.content), e.contentEl_ = ib("div", {className: Nc + "-content"}, {role: "document"}), e.descEl_ = ib("p", {
                            className: Nc + "-description vjs-control-text",
                            id: e.el().getAttribute("aria-describedby")
                        }), jb(e.descEl_, e.description()), e.el_.appendChild(e.descEl_), e.el_.appendChild(e.contentEl_), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, b.prototype.dispose = function () {
                        this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.buildCSSClass = function () {
                        return Nc + " vjs-hidden " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleKeyPress = function (a) {
                        27 === a.which && this.closeable() && this.close()
                    }, b.prototype.label = function () {
                        return this.localize(this.options_.label || "Modal Window")
                    }, b.prototype.description = function () {
                        var a = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (a += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), a
                    }, b.prototype.open = function () {
                        if (!this.opened_) {
                            var a = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !a.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && a.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", dc(this, this.handleKeyPress)), this.hadControls_ = a.controls(), a.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                    }, b.prototype.opened = function (a) {
                        return "boolean" == typeof a && this[a ? "open" : "close"](), this.opened_
                    }, b.prototype.close = function () {
                        if (this.opened_) {
                            var a = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && a.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", dc(this, this.handleKeyPress)), this.hadControls_ && a.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                        }
                    }, b.prototype.closeable = function (a) {
                        if ("boolean" == typeof a) {
                            var b = this.closeable_ = !!a, c = this.getChild("closeButton");
                            if (b && !c) {
                                var d = this.contentEl_;
                                this.contentEl_ = this.el_, c = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = d, this.on(c, "close", this.close)
                            }
                            !b && c && (this.off(c, "close", this.close), this.removeChild(c), c.dispose())
                        }
                        return this.closeable_
                    }, b.prototype.fill = function () {
                        this.fillWith(this.content())
                    }, b.prototype.fillWith = function (a) {
                        var b = this.contentEl(), c = b.parentNode, d = b.nextSibling;
                        this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, c.removeChild(b), this.empty(), Db(b, a), this.trigger("modalfill"), d ? c.insertBefore(b, d) : c.appendChild(b);
                        var e = this.getChild("closeButton");
                        e && c.appendChild(e.el_)
                    }, b.prototype.empty = function () {
                        this.trigger("beforemodalempty"), Ab(this.contentEl()), this.trigger("modalempty")
                    }, b.prototype.content = function (a) {
                        return void 0 !== a && (this.content_ = a), this.content_
                    }, b.prototype.conditionalFocus_ = function () {
                        var a = m.activeElement, b = this.player_.el_;
                        this.previouslyActiveEl_ = null, (b.contains(a) || b === a) && (this.previouslyActiveEl_ = a, this.focus(), this.on(m, "keydown", this.handleKeyDown))
                    }, b.prototype.conditionalBlur_ = function () {
                        this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(m, "keydown", this.handleKeyDown)
                    }, b.prototype.handleKeyDown = function (a) {
                        if (9 === a.which) {
                            for (var b = this.focusableEls_(), c = this.el_.querySelector(":focus"), d = void 0, e = 0; e < b.length; e++) if (c === b[e]) {
                                d = e;
                                break
                            }
                            m.activeElement === this.el_ && (d = 0), a.shiftKey && 0 === d ? (b[b.length - 1].focus(), a.preventDefault()) : a.shiftKey || d !== b.length - 1 || (b[0].focus(), a.preventDefault())
                        }
                    }, b.prototype.focusableEls_ = function () {
                        var a = this.el_.querySelectorAll("*");
                        return Array.prototype.filter.call(a, function (a) {
                            return (a instanceof f.HTMLAnchorElement || a instanceof f.HTMLAreaElement) && a.hasAttribute("href") || (a instanceof f.HTMLInputElement || a instanceof f.HTMLSelectElement || a instanceof f.HTMLTextAreaElement || a instanceof f.HTMLButtonElement) && !a.hasAttribute("disabled") || a instanceof f.HTMLIFrameElement || a instanceof f.HTMLObjectElement || a instanceof f.HTMLEmbedElement || a.hasAttribute("tabindex") && -1 !== a.getAttribute("tabindex") || a.hasAttribute("contenteditable")
                        })
                    }, b
                }(uc);
                Oc.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, uc.registerComponent("ModalDialog", Oc);
                var Pc = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        L(this, b);
                        var e = N(this, a.call(this));
                        if (!d && (d = e, D)) for (var f in d = m.createElement("custom"), b.prototype) "constructor" !== f && (d[f] = b.prototype[f]);
                        d.tracks_ = [], Object.defineProperty(d, "length", {
                            get: function () {
                                return this.tracks_.length
                            }
                        });
                        for (var g = 0; g < c.length; g++) d.addTrack(c[g]);
                        return N(e, d)
                    }

                    return M(b, a), b.prototype.addTrack = function (a) {
                        var b = this.tracks_.length;
                        "" + b in this || Object.defineProperty(this, b, {
                            get: function () {
                                return this.tracks_[b]
                            }
                        }), -1 === this.tracks_.indexOf(a) && (this.tracks_.push(a), this.trigger({
                            track: a,
                            type: "addtrack"
                        }))
                    }, b.prototype.removeTrack = function (a) {
                        for (var b = void 0, c = 0, d = this.length; c < d; c++) if (this[c] === a) {
                            (b = this[c]).off && b.off(), this.tracks_.splice(c, 1);
                            break
                        }
                        b && this.trigger({track: b, type: "removetrack"})
                    }, b.prototype.getTrackById = function (a) {
                        for (var b = null, c = 0, d = this.length; c < d; c++) {
                            var e = this[c];
                            if (e.id === a) {
                                b = e;
                                break
                            }
                        }
                        return b
                    }, b
                }(gc);
                for (var Qc in Pc.prototype.allowedEvents_ = {
                    change: "change",
                    addtrack: "addtrack",
                    removetrack: "removetrack"
                }, Pc.prototype.allowedEvents_) Pc.prototype["on" + Qc] = null;
                var Rc = function (a, b) {
                    for (var c = 0; c < a.length; c++) Object.keys(a[c]).length && b.id !== a[c].id && (a[c].enabled = !1)
                }, Sc = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        L(this, b);
                        for (var e = void 0, f = d.length - 1; f >= 0; f--) if (d[f].enabled) {
                            Rc(d, d[f]);
                            break
                        }
                        if (D) {
                            for (var g in e = m.createElement("custom"), Pc.prototype) "constructor" !== g && (e[g] = Pc.prototype[g]);
                            for (var h in b.prototype) "constructor" !== h && (e[h] = b.prototype[h])
                        }
                        return (e = c = N(this, a.call(this, d, e))).changing_ = !1, N(c, e)
                    }

                    return M(b, a), b.prototype.addTrack = function (b) {
                        var c = this;
                        b.enabled && Rc(this, b), a.prototype.addTrack.call(this, b), b.addEventListener && b.addEventListener("enabledchange", function () {
                            c.changing_ || (c.changing_ = !0, Rc(c, b), c.changing_ = !1, c.trigger("change"))
                        })
                    }, b
                }(Pc), Tc = function (a, b) {
                    for (var c = 0; c < a.length; c++) Object.keys(a[c]).length && b.id !== a[c].id && (a[c].selected = !1)
                }, Uc = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        L(this, b);
                        for (var e = void 0, f = d.length - 1; f >= 0; f--) if (d[f].selected) {
                            Tc(d, d[f]);
                            break
                        }
                        if (D) {
                            for (var g in e = m.createElement("custom"), Pc.prototype) "constructor" !== g && (e[g] = Pc.prototype[g]);
                            for (var h in b.prototype) "constructor" !== h && (e[h] = b.prototype[h])
                        }
                        return (e = c = N(this, a.call(this, d, e))).changing_ = !1, Object.defineProperty(e, "selectedIndex", {
                            get: function () {
                                for (var a = 0; a < this.length; a++) if (this[a].selected) return a;
                                return -1
                            }, set: function () {
                            }
                        }), N(c, e)
                    }

                    return M(b, a), b.prototype.addTrack = function (b) {
                        var c = this;
                        b.selected && Tc(this, b), a.prototype.addTrack.call(this, b), b.addEventListener && b.addEventListener("selectedchange", function () {
                            c.changing_ || (c.changing_ = !0, Tc(c, b), c.changing_ = !1, c.trigger("change"))
                        })
                    }, b
                }(Pc), Vc = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        L(this, b);
                        var e = void 0;
                        if (D) {
                            for (var f in e = m.createElement("custom"), Pc.prototype) "constructor" !== f && (e[f] = Pc.prototype[f]);
                            for (var g in b.prototype) "constructor" !== g && (e[g] = b.prototype[g])
                        }
                        return c = N(this, a.call(this, d, e)), N(c, e = c)
                    }

                    return M(b, a), b.prototype.addTrack = function (b) {
                        a.prototype.addTrack.call(this, b), b.addEventListener("modechange", dc(this, function () {
                            this.trigger("change")
                        })), -1 === ["metadata", "chapters"].indexOf(b.kind) && b.addEventListener("modechange", dc(this, function () {
                            this.trigger("selectedlanguagechange")
                        }))
                    }, b
                }(Pc), Wc = function () {
                    function a() {
                        var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        L(this, a);
                        var c = this;
                        if (D) for (var d in c = m.createElement("custom"), a.prototype) "constructor" !== d && (c[d] = a.prototype[d]);
                        c.trackElements_ = [], Object.defineProperty(c, "length", {
                            get: function () {
                                return this.trackElements_.length
                            }
                        });
                        for (var e = 0, f = b.length; e < f; e++) c.addTrackElement_(b[e]);
                        return D ? c : void 0
                    }

                    return a.prototype.addTrackElement_ = function (a) {
                        var b = this.trackElements_.length;
                        "" + b in this || Object.defineProperty(this, b, {
                            get: function () {
                                return this.trackElements_[b]
                            }
                        }), -1 === this.trackElements_.indexOf(a) && this.trackElements_.push(a)
                    }, a.prototype.getTrackElementByTrack_ = function (a) {
                        for (var b = void 0, c = 0, d = this.trackElements_.length; c < d; c++) if (a === this.trackElements_[c].track) {
                            b = this.trackElements_[c];
                            break
                        }
                        return b
                    }, a.prototype.removeTrackElement_ = function (a) {
                        for (var b = 0, c = this.trackElements_.length; b < c; b++) if (a === this.trackElements_[b]) {
                            this.trackElements_.splice(b, 1);
                            break
                        }
                    }, a
                }(), Xc = function () {
                    function a(b) {
                        L(this, a);
                        var c = this;
                        if (D) for (var d in c = m.createElement("custom"), a.prototype) "constructor" !== d && (c[d] = a.prototype[d]);
                        return a.prototype.setCues_.call(c, b), Object.defineProperty(c, "length", {
                            get: function () {
                                return this.length_
                            }
                        }), D ? c : void 0
                    }

                    return a.prototype.setCues_ = function (a) {
                        var b = this.length || 0, c = 0, d = a.length;
                        this.cues_ = a, this.length_ = a.length;
                        var e = function (a) {
                            "" + a in this || Object.defineProperty(this, "" + a, {
                                get: function () {
                                    return this.cues_[a]
                                }
                            })
                        };
                        if (b < d) for (c = b; c < d; c++) e.call(this, c)
                    }, a.prototype.getCueById = function (a) {
                        for (var b = null, c = 0, d = this.length; c < d; c++) {
                            var e = this[c];
                            if (e.id === a) {
                                b = e;
                                break
                            }
                        }
                        return b
                    }, a
                }(), Yc = {
                    alternative: "alternative",
                    captions: "captions",
                    main: "main",
                    sign: "sign",
                    subtitles: "subtitles",
                    commentary: "commentary"
                }, Zc = {
                    alternative: "alternative",
                    descriptions: "descriptions",
                    main: "main",
                    "main-desc": "main-desc",
                    translation: "translation",
                    commentary: "commentary"
                }, $c = {
                    subtitles: "subtitles",
                    captions: "captions",
                    descriptions: "descriptions",
                    chapters: "chapters",
                    metadata: "metadata"
                }, _c = {disabled: "disabled", hidden: "hidden", showing: "showing"}, ad = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        L(this, b);
                        var d = N(this, a.call(this)), e = d;
                        if (D) for (var f in e = m.createElement("custom"), b.prototype) "constructor" !== f && (e[f] = b.prototype[f]);
                        var g = {
                            id: c.id || "vjs_track_" + Jb(),
                            kind: c.kind || "",
                            label: c.label || "",
                            language: c.language || ""
                        }, h = function (a) {
                            Object.defineProperty(e, a, {
                                get: function () {
                                    return g[a]
                                }, set: function () {
                                }
                            })
                        };
                        for (var i in g) h(i);
                        return N(d, e)
                    }

                    return M(b, a), b
                }(gc), bd = function (a) {
                    var b = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        c = m.createElement("a");
                    c.href = a;
                    var d = "" === c.host && "file:" !== c.protocol, e = void 0;
                    d && ((e = m.createElement("div")).innerHTML = '<a href="' + a + '"></a>', c = e.firstChild, e.setAttribute("style", "display:none; position:absolute;"), m.body.appendChild(e));
                    for (var g = {}, h = 0; h < b.length; h++) g[b[h]] = c[b[h]];
                    return "http:" === g.protocol && (g.host = g.host.replace(/:80$/, "")), "https:" === g.protocol && (g.host = g.host.replace(/:443$/, "")), g.protocol || (g.protocol = f.location.protocol), d && m.body.removeChild(e), g
                }, cd = function (a) {
                    if (!a.match(/^https?:\/\//)) {
                        var b = m.createElement("div");
                        b.innerHTML = '<a href="' + a + '">x</a>', a = b.firstChild.href
                    }
                    return a
                }, dd = function (a) {
                    if ("string" == typeof a) {
                        var b = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(a);
                        if (b) return b.pop().toLowerCase()
                    }
                    return ""
                }, ed = function (a) {
                    var b = f.location, c = bd(a);
                    return (":" === c.protocol ? b.protocol : c.protocol) + c.host !== b.protocol + b.host
                }, fd = (Object.freeze || Object)({
                    parseUrl: bd,
                    getAbsoluteURL: cd,
                    getFileExtension: dd,
                    isCrossOrigin: ed
                }), gd = function (a) {
                    var b = hd.call(a);
                    return "[object Function]" === b || "function" == typeof a && "[object RegExp]" !== b || "undefined" != typeof window && (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt)
                }, hd = Object.prototype.toString, id = c(function (a, b) {
                    (b = a.exports = function (a) {
                        return a.replace(/^\s*|\s*$/g, "")
                    }).left = function (a) {
                        return a.replace(/^\s*/, "")
                    }, b.right = function (a) {
                        return a.replace(/\s*$/, "")
                    }
                }), jd = function (a, b, c) {
                    if (!gd(b)) throw new TypeError("iterator must be a function");
                    arguments.length < 3 && (c = this), "[object Array]" === kd.call(a) ? function (a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++) ld.call(a, d) && b.call(c, a[d], d, a)
                    }(a, b, c) : "string" == typeof a ? function (a, b, c) {
                        for (var d = 0, e = a.length; d < e; d++) b.call(c, a.charAt(d), d, a)
                    }(a, b, c) : function (a, b, c) {
                        for (var d in a) ld.call(a, d) && b.call(c, a[d], d, a)
                    }(a, b, c)
                }, kd = Object.prototype.toString, ld = Object.prototype.hasOwnProperty, md = function (a) {
                    if (!a) return {};
                    var b = {};
                    return jd(id(a).split("\n"), function (a) {
                        var c, d = a.indexOf(":"), e = id(a.slice(0, d)).toLowerCase(), f = id(a.slice(d + 1));
                        void 0 === b[e] ? b[e] = f : (c = b[e], "[object Array]" === Object.prototype.toString.call(c) ? b[e].push(f) : b[e] = [b[e], f])
                    }), b
                }, nd = function () {
                    for (var a = {}, b = 0; b < arguments.length; b++) {
                        var c = arguments[b];
                        for (var d in c) od.call(c, d) && (a[d] = c[d])
                    }
                    return a
                }, od = Object.prototype.hasOwnProperty, pd = rd;
                rd.XMLHttpRequest = f.XMLHttpRequest || function () {
                }, rd.XDomainRequest = "withCredentials" in new rd.XMLHttpRequest ? rd.XMLHttpRequest : f.XDomainRequest, function (a, b) {
                    for (var c = 0; c < a.length; c++) b(a[c])
                }(["get", "put", "post", "patch", "head", "delete"], function (a) {
                    rd["delete" === a ? "del" : a] = function (b, c, d) {
                        return (c = qd(b, c, d)).method = a.toUpperCase(), sd(c)
                    }
                });
                var td = function (a, b) {
                    var c = new f.WebVTT.Parser(f, f.vttjs, f.WebVTT.StringDecoder()), d = [];
                    c.oncue = function (a) {
                        b.addCue(a)
                    }, c.onparsingerror = function (a) {
                        d.push(a)
                    }, c.onflush = function () {
                        b.trigger({type: "loadeddata", target: b})
                    }, c.parse(a), d.length > 0 && (f.console && f.console.groupCollapsed && f.console.groupCollapsed("Text Track parsing errors for " + b.src), d.forEach(function (a) {
                        return Z.error(a)
                    }), f.console && f.console.groupEnd && f.console.groupEnd()), c.flush()
                }, ud = function (a, b) {
                    var c = {uri: a}, d = ed(a);
                    d && (c.cors = d), pd(c, dc(this, function (a, c, d) {
                        if (a) return Z.error(a, c);
                        if (b.loaded_ = !0, "function" != typeof f.WebVTT) {
                            if (b.tech_) {
                                var e = function () {
                                    return td(d, b)
                                };
                                b.tech_.on("vttjsloaded", e), b.tech_.on("vttjserror", function () {
                                    Z.error("vttjs failed to load, stopping trying to process " + b.src), b.tech_.off("vttjsloaded", e)
                                })
                            }
                        } else td(d, b)
                    }))
                }, vd = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (L(this, b), !d.tech) throw new Error("A tech was not provided.");
                        var e = tc(d, {kind: $c[d.kind] || "subtitles", language: d.language || d.srclang || ""}),
                            f = _c[e.mode] || "disabled", g = e.default;
                        "metadata" !== e.kind && "chapters" !== e.kind || (f = "hidden");
                        var h = c = N(this, a.call(this, e));
                        if (h.tech_ = e.tech, D) for (var i in b.prototype) "constructor" !== i && (h[i] = b.prototype[i]);
                        h.cues_ = [], h.activeCues_ = [];
                        var j = new Xc(h.cues_), k = new Xc(h.activeCues_), l = !1, m = dc(h, function () {
                            this.activeCues, l && (this.trigger("cuechange"), l = !1)
                        });
                        return "disabled" !== f && h.tech_.ready(function () {
                            h.tech_.on("timeupdate", m)
                        }, !0), Object.defineProperty(h, "default", {
                            get: function () {
                                return g
                            }, set: function () {
                            }
                        }), Object.defineProperty(h, "mode", {
                            get: function () {
                                return f
                            }, set: function (a) {
                                var b = this;
                                _c[a] && ("showing" === (f = a) && this.tech_.ready(function () {
                                    b.tech_.on("timeupdate", m)
                                }, !0), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(h, "cues", {
                            get: function () {
                                return this.loaded_ ? j : null
                            }, set: function () {
                            }
                        }), Object.defineProperty(h, "activeCues", {
                            get: function () {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return k;
                                for (var a = this.tech_.currentTime(), b = [], c = 0, d = this.cues.length; c < d; c++) {
                                    var e = this.cues[c];
                                    e.startTime <= a && e.endTime >= a ? b.push(e) : e.startTime === e.endTime && e.startTime <= a && e.startTime + .5 >= a && b.push(e)
                                }
                                if (l = !1, b.length !== this.activeCues_.length) l = !0; else for (var f = 0; f < b.length; f++) -1 === this.activeCues_.indexOf(b[f]) && (l = !0);
                                return this.activeCues_ = b, k.setCues_(this.activeCues_), k
                            }, set: function () {
                            }
                        }), e.src ? (h.src = e.src, ud(e.src, h)) : h.loaded_ = !0, N(c, h)
                    }

                    return M(b, a), b.prototype.addCue = function (a) {
                        var b = a;
                        if (f.vttjs && !(a instanceof f.vttjs.VTTCue)) {
                            for (var c in b = new f.vttjs.VTTCue(a.startTime, a.endTime, a.text), a) c in b || (b[c] = a[c]);
                            b.id = a.id, b.originalCue_ = a
                        }
                        for (var d = this.tech_.textTracks(), e = 0; e < d.length; e++) d[e] !== this && d[e].removeCue(b);
                        this.cues_.push(b), this.cues.setCues_(this.cues_)
                    }, b.prototype.removeCue = function (a) {
                        for (var b = this.cues_.length; b--;) {
                            var c = this.cues_[b];
                            if (c === a || c.originalCue_ && c.originalCue_ === a) {
                                this.cues_.splice(b, 1), this.cues.setCues_(this.cues_);
                                break
                            }
                        }
                    }, b
                }(ad);
                vd.prototype.allowedEvents_ = {cuechange: "cuechange"};
                var wd = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        L(this, b);
                        var e = tc(d, {kind: Zc[d.kind] || ""}), f = c = N(this, a.call(this, e)), g = !1;
                        if (D) for (var h in b.prototype) "constructor" !== h && (f[h] = b.prototype[h]);
                        return Object.defineProperty(f, "enabled", {
                            get: function () {
                                return g
                            }, set: function (a) {
                                "boolean" == typeof a && a !== g && (g = a, this.trigger("enabledchange"))
                            }
                        }), e.enabled && (f.enabled = e.enabled), f.loaded_ = !0, N(c, f)
                    }

                    return M(b, a), b
                }(ad), xd = function (a) {
                    function b() {
                        var c, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        L(this, b);
                        var e = tc(d, {kind: Yc[d.kind] || ""}), f = c = N(this, a.call(this, e)), g = !1;
                        if (D) for (var h in b.prototype) "constructor" !== h && (f[h] = b.prototype[h]);
                        return Object.defineProperty(f, "selected", {
                            get: function () {
                                return g
                            }, set: function (a) {
                                "boolean" == typeof a && a !== g && (g = a, this.trigger("selectedchange"))
                            }
                        }), e.selected && (f.selected = e.selected), N(c, f)
                    }

                    return M(b, a), b
                }(ad), yd = 0, zd = 2, Ad = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        L(this, b);
                        var d = N(this, a.call(this)), e = void 0, f = d;
                        if (D) for (var g in f = m.createElement("custom"), b.prototype) "constructor" !== g && (f[g] = b.prototype[g]);
                        var h = new vd(c);
                        return f.kind = h.kind, f.src = h.src, f.srclang = h.language, f.label = h.label, f.default = h.default, Object.defineProperty(f, "readyState", {
                            get: function () {
                                return e
                            }
                        }), Object.defineProperty(f, "track", {
                            get: function () {
                                return h
                            }
                        }), e = yd, h.addEventListener("loadeddata", function () {
                            e = zd, f.trigger({type: "load", target: f})
                        }), D ? N(d, f) : d
                    }

                    return M(b, a), b
                }(gc);
                Ad.prototype.allowedEvents_ = {load: "load"}, Ad.NONE = yd, Ad.LOADING = 1, Ad.LOADED = zd, Ad.ERROR = 3;
                var Bd = {
                    audio: {ListClass: Sc, TrackClass: wd, capitalName: "Audio"},
                    video: {ListClass: Uc, TrackClass: xd, capitalName: "Video"},
                    text: {ListClass: Vc, TrackClass: vd, capitalName: "Text"}
                };
                Object.keys(Bd).forEach(function (a) {
                    Bd[a].getterName = a + "Tracks", Bd[a].privateName = a + "Tracks_"
                });
                var Cd = {
                    remoteText: {
                        ListClass: Vc,
                        TrackClass: vd,
                        capitalName: "RemoteText",
                        getterName: "remoteTextTracks",
                        privateName: "remoteTextTracks_"
                    },
                    remoteTextEl: {
                        ListClass: Wc,
                        TrackClass: Ad,
                        capitalName: "RemoteTextTrackEls",
                        getterName: "remoteTextTrackEls",
                        privateName: "remoteTextTrackEls_"
                    }
                }, Dd = tc(Bd, Cd);
                Cd.names = Object.keys(Cd), Bd.names = Object.keys(Bd), Dd.names = [].concat(Cd.names).concat(Bd.names);
                var Ed = Object.create || function () {
                    function a() {
                    }

                    return function (b) {
                        if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                        return a.prototype = b, new a
                    }
                }();
                Fd.prototype = Ed(Error.prototype), Fd.prototype.constructor = Fd, Fd.Errors = {
                    BadSignature: {
                        code: 0,
                        message: "Malformed WebVTT signature."
                    }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
                }, Hd.prototype = {
                    set: function (a, b) {
                        this.get(a) || "" === b || (this.values[a] = b)
                    }, get: function (a, b, c) {
                        return c ? this.has(a) ? this.values[a] : b[c] : this.has(a) ? this.values[a] : b
                    }, has: function (a) {
                        return a in this.values
                    }, alt: function (a, b, c) {
                        for (var d = 0; d < c.length; ++d) if (b === c[d]) {
                            this.set(a, b);
                            break
                        }
                    }, integer: function (a, b) {
                        /^-?\d+$/.test(b) && this.set(a, parseInt(b, 10))
                    }, percent: function (a, b) {
                        return !!(b.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (b = parseFloat(b)) >= 0 && b <= 100) && (this.set(a, b), !0)
                    }
                };
                var Kd = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&lrm;": "\xe2\x80\x8e",
                        "&rlm;": "\xe2\x80\x8f",
                        "&nbsp;": "\xc2 "
                    }, Ld = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
                    Md = {v: "title", lang: "lang"}, Nd = {rt: "ruby"},
                    Pd = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
                Rd.prototype.applyStyles = function (a, b) {
                    for (var c in b = b || this.div, a) a.hasOwnProperty(c) && (b.style[c] = a[c])
                }, Rd.prototype.formatStyle = function (a, b) {
                    return 0 === a ? 0 : a + b
                }, Sd.prototype = Ed(Rd.prototype), Sd.prototype.constructor = Sd, Td.prototype.move = function (a, b) {
                    switch (b = void 0 !== b ? b : this.lineHeight, a) {
                        case"+x":
                            this.left += b, this.right += b;
                            break;
                        case"-x":
                            this.left -= b, this.right -= b;
                            break;
                        case"+y":
                            this.top += b, this.bottom += b;
                            break;
                        case"-y":
                            this.top -= b, this.bottom -= b
                    }
                }, Td.prototype.overlaps = function (a) {
                    return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top
                }, Td.prototype.overlapsAny = function (a) {
                    for (var b = 0; b < a.length; b++) if (this.overlaps(a[b])) return !0;
                    return !1
                }, Td.prototype.within = function (a) {
                    return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right
                }, Td.prototype.overlapsOppositeAxis = function (a, b) {
                    switch (b) {
                        case"+x":
                            return this.left < a.left;
                        case"-x":
                            return this.right > a.right;
                        case"+y":
                            return this.top < a.top;
                        case"-y":
                            return this.bottom > a.bottom
                    }
                }, Td.prototype.intersectPercentage = function (a) {
                    return Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left)) * Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top)) / (this.height * this.width)
                }, Td.prototype.toCSSCompatValues = function (a) {
                    return {
                        top: this.top - a.top,
                        bottom: a.bottom - this.bottom,
                        left: this.left - a.left,
                        right: a.right - this.right,
                        height: this.height,
                        width: this.width
                    }
                }, Td.getSimpleBoxPosition = function (a) {
                    var b = a.div ? a.div.offsetHeight : a.tagName ? a.offsetHeight : 0,
                        c = a.div ? a.div.offsetWidth : a.tagName ? a.offsetWidth : 0,
                        d = a.div ? a.div.offsetTop : a.tagName ? a.offsetTop : 0;
                    return {
                        left: (a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a).left,
                        right: a.right,
                        top: a.top || d,
                        height: a.height || b,
                        bottom: a.bottom || d + (a.height || b),
                        width: a.width || c
                    }
                }, Vd.StringDecoder = function () {
                    return {
                        decode: function (a) {
                            if (!a) return "";
                            if ("string" != typeof a) throw new Error("Error - expected string data.");
                            return decodeURIComponent(encodeURIComponent(a))
                        }
                    }
                }, Vd.convertCueToDOMTree = function (a, b) {
                    return a && b ? Od(a, b) : null
                }, Vd.processCues = function (a, b, c) {
                    if (!a || !b || !c) return null;
                    for (; c.firstChild;) c.removeChild(c.firstChild);
                    var d = a.document.createElement("div");
                    if (d.style.position = "absolute", d.style.left = "0", d.style.right = "0", d.style.top = "0", d.style.bottom = "0", d.style.margin = "1.5%", c.appendChild(d), function (a) {
                        for (var b = 0; b < a.length; b++) if (a[b].hasBeenReset || !a[b].displayState) return !0;
                        return !1
                    }(b)) {
                        var e = [], f = Td.getSimpleBoxPosition(d),
                            g = {font: Math.round(.05 * f.height * 100) / 100 + "px sans-serif"};
                        !function () {
                            for (var c, h, i = 0; i < b.length; i++) h = b[i], c = new Sd(a, h, g), d.appendChild(c.div), Ud(0, c, f, e), h.displayState = c.div, e.push(Td.getSimpleBoxPosition(c))
                        }()
                    } else for (var h = 0; h < b.length; h++) d.appendChild(b[h].displayState)
                }, Vd.Parser = function (a, b, c) {
                    c || (c = b, b = {}), b || (b = {}), this.window = a, this.vttjs = b, this.state = "INITIAL", this.buffer = "", this.decoder = c || new TextDecoder("utf8"), this.regionList = []
                }, Vd.Parser.prototype = {
                    reportOrThrowError: function (a) {
                        if (!(a instanceof Fd)) throw a;
                        this.onparsingerror && this.onparsingerror(a)
                    }, parse: function (a) {
                        function c() {
                            for (var a = b.buffer, c = 0; c < a.length && "\r" !== a[c] && "\n" !== a[c];) ++c;
                            var d = a.substr(0, c);
                            return "\r" === a[c] && ++c, "\n" === a[c] && ++c, b.buffer = a.substr(c), d
                        }

                        function d(a) {
                            a.match(/X-TIMESTAMP-MAP/) ? Id(a, function (a, c) {
                                switch (a) {
                                    case"X-TIMESTAMP-MAP":
                                        d = c, e = new Hd, Id(d, function (a, b) {
                                            switch (a) {
                                                case"MPEGT":
                                                    e.integer(a + "S", b);
                                                    break;
                                                case"LOCA":
                                                    e.set(a + "L", Gd(b))
                                            }
                                        }, /[^\d]:/, /,/), b.ontimestampmap && b.ontimestampmap({
                                            MPEGTS: e.get("MPEGTS"),
                                            LOCAL: e.get("LOCAL")
                                        })
                                }
                                var d, e
                            }, /=/) : Id(a, function (a, c) {
                                switch (a) {
                                    case"Region":
                                        !function (a) {
                                            var c = new Hd;
                                            if (Id(a, function (a, b) {
                                                switch (a) {
                                                    case"id":
                                                        c.set(a, b);
                                                        break;
                                                    case"width":
                                                        c.percent(a, b);
                                                        break;
                                                    case"lines":
                                                        c.integer(a, b);
                                                        break;
                                                    case"regionanchor":
                                                    case"viewportanchor":
                                                        var d = b.split(",");
                                                        if (2 !== d.length) break;
                                                        var e = new Hd;
                                                        if (e.percent("x", d[0]), e.percent("y", d[1]), !e.has("x") || !e.has("y")) break;
                                                        c.set(a + "X", e.get("x")), c.set(a + "Y", e.get("y"));
                                                        break;
                                                    case"scroll":
                                                        c.alt(a, b, ["up"])
                                                }
                                            }, /=/, /\s/), c.has("id")) {
                                                var d = new (b.vttjs.VTTRegion || b.window.VTTRegion);
                                                d.width = c.get("width", 100), d.lines = c.get("lines", 3), d.regionAnchorX = c.get("regionanchorX", 0), d.regionAnchorY = c.get("regionanchorY", 100), d.viewportAnchorX = c.get("viewportanchorX", 0), d.viewportAnchorY = c.get("viewportanchorY", 100), d.scroll = c.get("scroll", ""), b.onregion && b.onregion(d), b.regionList.push({
                                                    id: c.get("id"),
                                                    region: d
                                                })
                                            }
                                        }(c)
                                }
                            }, /:/)
                        }

                        var b = this;
                        a && (b.buffer += b.decoder.decode(a, {stream: !0}));
                        try {
                            var e;
                            if ("INITIAL" === b.state) {
                                if (!/\r\n|\n/.test(b.buffer)) return this;
                                var f = (e = c()).match(/^WEBVTT([ \t].*)?$/);
                                if (!f || !f[0]) throw new Fd(Fd.Errors.BadSignature);
                                b.state = "HEADER"
                            }
                            for (var g = !1; b.buffer;) {
                                if (!/\r\n|\n/.test(b.buffer)) return this;
                                switch (g ? g = !1 : e = c(), b.state) {
                                    case"HEADER":
                                        /:/.test(e) ? d(e) : e || (b.state = "ID");
                                        continue;
                                    case"NOTE":
                                        e || (b.state = "ID");
                                        continue;
                                    case"ID":
                                        if (/^NOTE($|[ \t])/.test(e)) {
                                            b.state = "NOTE";
                                            break
                                        }
                                        if (!e) continue;
                                        if (b.cue = new (b.vttjs.VTTCue || b.window.VTTCue)(0, 0, ""), b.state = "CUE", -1 === e.indexOf("-->")) {
                                            b.cue.id = e;
                                            continue
                                        }
                                    case"CUE":
                                        try {
                                            Jd(e, b.cue, b.regionList)
                                        } catch (a) {
                                            b.reportOrThrowError(a), b.cue = null, b.state = "BADCUE";
                                            continue
                                        }
                                        b.state = "CUETEXT";
                                        continue;
                                    case"CUETEXT":
                                        var h = -1 !== e.indexOf("-->");
                                        if (!e || h && (g = !0)) {
                                            b.oncue && b.oncue(b.cue), b.cue = null, b.state = "ID";
                                            continue
                                        }
                                        b.cue.text && (b.cue.text += "\n"), b.cue.text += e;
                                        continue;
                                    case"BADCUE":
                                        e || (b.state = "ID");
                                        continue
                                }
                            }
                        } catch (a) {
                            b.reportOrThrowError(a), "CUETEXT" === b.state && b.cue && b.oncue && b.oncue(b.cue), b.cue = null, b.state = "INITIAL" === b.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    }, flush: function () {
                        try {
                            if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Fd(Fd.Errors.BadSignature)
                        } catch (a) {
                            this.reportOrThrowError(a)
                        }
                        return this.onflush && this.onflush(), this
                    }
                };
                var Wd = Vd, Xd = "auto", Yd = {"": !0, lr: !0, rl: !0},
                    Zd = {start: !0, middle: !0, end: !0, left: !0, right: !0};
                ae.prototype.getCueAsHTML = function () {
                    return WebVTT.convertCueToDOMTree(window, this.text)
                };
                var be = ae, ce = {"": !0, up: !0}, ee = function () {
                    var a = 100, b = 3, c = 0, d = 100, e = 0, f = 100, g = "";
                    Object.defineProperties(this, {
                        width: {
                            enumerable: !0, get: function () {
                                return a
                            }, set: function (b) {
                                if (!de(b)) throw new Error("Width must be between 0 and 100.");
                                a = b
                            }
                        }, lines: {
                            enumerable: !0, get: function () {
                                return b
                            }, set: function (a) {
                                if ("number" != typeof a) throw new TypeError("Lines must be set to a number.");
                                b = a
                            }
                        }, regionAnchorY: {
                            enumerable: !0, get: function () {
                                return d
                            }, set: function (a) {
                                if (!de(a)) throw new Error("RegionAnchorX must be between 0 and 100.");
                                d = a
                            }
                        }, regionAnchorX: {
                            enumerable: !0, get: function () {
                                return c
                            }, set: function (a) {
                                if (!de(a)) throw new Error("RegionAnchorY must be between 0 and 100.");
                                c = a
                            }
                        }, viewportAnchorY: {
                            enumerable: !0, get: function () {
                                return f
                            }, set: function (a) {
                                if (!de(a)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                                f = a
                            }
                        }, viewportAnchorX: {
                            enumerable: !0, get: function () {
                                return e
                            }, set: function (a) {
                                if (!de(a)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                                e = a
                            }
                        }, scroll: {
                            enumerable: !0, get: function () {
                                return g
                            }, set: function (a) {
                                var b = function (a) {
                                    return "string" == typeof a && !!ce[a.toLowerCase()] && a.toLowerCase()
                                }(a);
                                if (!1 === b) throw new SyntaxError("An invalid or illegal string was specified.");
                                g = b
                            }
                        }
                    })
                }, fe = c(function (a) {
                    var b = a.exports = {WebVTT: Wd, VTTCue: be, VTTRegion: ee};
                    f.vttjs = b, f.WebVTT = b.WebVTT;
                    var c = b.VTTCue, d = b.VTTRegion, e = f.VTTCue, g = f.VTTRegion;
                    b.shim = function () {
                        f.VTTCue = c, f.VTTRegion = d
                    }, b.restore = function () {
                        f.VTTCue = e, f.VTTRegion = g
                    }, f.VTTCue || b.shim()
                }), ge = function (a) {
                    function b() {
                        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                            };
                        L(this, b), c.reportTouchActivity = !1;
                        var e = N(this, a.call(this, null, c, d));
                        return e.hasStarted_ = !1, e.on("playing", function () {
                            this.hasStarted_ = !0
                        }), e.on("loadstart", function () {
                            this.hasStarted_ = !1
                        }), Dd.names.forEach(function (a) {
                            var b = Dd[a];
                            c && c[b.getterName] && (e[b.privateName] = c[b.getterName])
                        }), e.featuresProgressEvents || e.manualProgressOn(), e.featuresTimeupdateEvents || e.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (a) {
                            !1 === c["native" + a + "Tracks"] && (e["featuresNative" + a + "Tracks"] = !1)
                        }), !1 === c.nativeCaptions || !1 === c.nativeTextTracks ? e.featuresNativeTextTracks = !1 : !0 !== c.nativeCaptions && !0 !== c.nativeTextTracks || (e.featuresNativeTextTracks = !0), e.featuresNativeTextTracks || e.emulateTextTracks(), e.autoRemoteTextTracks_ = new Dd.text.ListClass, e.initTrackListeners(), c.nativeControlsForTouch || e.emitTapEvents(), e.constructor && (e.name_ = e.constructor.name || "Unknown Tech"), e
                    }

                    return M(b, a), b.prototype.triggerSourceset = function (a) {
                        var b = this;
                        this.isReady_ || this.one("ready", function () {
                            return b.setTimeout(function () {
                                return b.triggerSourceset(a)
                            }, 1)
                        }), this.trigger({src: a, type: "sourceset"})
                    }, b.prototype.manualProgressOn = function () {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, b.prototype.manualProgressOff = function () {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, b.prototype.trackProgress = function () {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(dc(this, function () {
                            var a = this.bufferedPercent();
                            this.bufferedPercent_ !== a && this.trigger("progress"), this.bufferedPercent_ = a, 1 === a && this.stopTrackingProgress()
                        }), 500)
                    }, b.prototype.onDurationChange = function () {
                        this.duration_ = this.duration()
                    }, b.prototype.buffered = function () {
                        return xc(0, 0)
                    }, b.prototype.bufferedPercent = function () {
                        return yc(this.buffered(), this.duration_)
                    }, b.prototype.stopTrackingProgress = function () {
                        this.clearInterval(this.progressInterval)
                    }, b.prototype.manualTimeUpdatesOn = function () {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, b.prototype.manualTimeUpdatesOff = function () {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, b.prototype.trackCurrentTime = function () {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                            this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
                        }, 250)
                    }, b.prototype.stopTrackingCurrentTime = function () {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, b.prototype.dispose = function () {
                        this.clearTracks(Bd.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), a.prototype.dispose.call(this)
                    }, b.prototype.clearTracks = function (a) {
                        var b = this;
                        (a = [].concat(a)).forEach(function (a) {
                            for (var c = b[a + "Tracks"]() || [], d = c.length; d--;) {
                                var e = c[d];
                                "text" === a && b.removeRemoteTextTrack(e), c.removeTrack(e)
                            }
                        })
                    }, b.prototype.cleanupAutoTextTracks = function () {
                        for (var a = this.autoRemoteTextTracks_ || [], b = a.length; b--;) {
                            var c = a[b];
                            this.removeRemoteTextTrack(c)
                        }
                    }, b.prototype.reset = function () {
                    }, b.prototype.error = function (a) {
                        return void 0 !== a && (this.error_ = new Fc(a), this.trigger("error")), this.error_
                    }, b.prototype.played = function () {
                        return this.hasStarted_ ? xc(0, 0) : xc()
                    }, b.prototype.setCurrentTime = function () {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, b.prototype.initTrackListeners = function () {
                        var a = this;
                        Bd.names.forEach(function (b) {
                            var c = Bd[b], d = function () {
                                a.trigger(b + "trackchange")
                            }, e = a[c.getterName]();
                            e.addEventListener("removetrack", d), e.addEventListener("addtrack", d), a.on("dispose", function () {
                                e.removeEventListener("removetrack", d), e.removeEventListener("addtrack", d)
                            })
                        })
                    }, b.prototype.addWebVttScript_ = function () {
                        var a = this;
                        if (!f.WebVTT) if (m.body.contains(this.el())) {
                            if (!this.options_["vtt.js"] && U(fe) && Object.keys(fe).length > 0) return void this.trigger("vttjsloaded");
                            var b = m.createElement("script");
                            b.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js", b.onload = function () {
                                a.trigger("vttjsloaded")
                            }, b.onerror = function () {
                                a.trigger("vttjserror")
                            }, this.on("dispose", function () {
                                b.onload = null, b.onerror = null
                            }), f.WebVTT = !0, this.el().parentNode.appendChild(b)
                        } else this.ready(this.addWebVttScript_)
                    }, b.prototype.emulateTextTracks = function () {
                        var a = this, b = this.textTracks(), c = this.remoteTextTracks(), d = function (a) {
                            return b.addTrack(a.track)
                        }, e = function (a) {
                            return b.removeTrack(a.track)
                        };
                        c.on("addtrack", d), c.on("removetrack", e), this.addWebVttScript_();
                        var f = function () {
                            return a.trigger("texttrackchange")
                        }, g = function () {
                            f();
                            for (var a = 0; a < b.length; a++) {
                                var c = b[a];
                                c.removeEventListener("cuechange", f), "showing" === c.mode && c.addEventListener("cuechange", f)
                            }
                        };
                        g(), b.addEventListener("change", g), b.addEventListener("addtrack", g), b.addEventListener("removetrack", g), this.on("dispose", function () {
                            c.off("addtrack", d), c.off("removetrack", e), b.removeEventListener("change", g), b.removeEventListener("addtrack", g), b.removeEventListener("removetrack", g);
                            for (var a = 0; a < b.length; a++) b[a].removeEventListener("cuechange", f)
                        })
                    }, b.prototype.addTextTrack = function (a, b, c) {
                        if (!a) throw new Error("TextTrack kind is required but was not provided");
                        return function (a, b, c, d) {
                            var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                                f = a.textTracks();
                            e.kind = b, c && (e.label = c), d && (e.language = d), e.tech = a;
                            var g = new Dd.text.TrackClass(e);
                            return f.addTrack(g), g
                        }(this, a, b, c)
                    }, b.prototype.createRemoteTextTrack = function (a) {
                        var b = tc(a, {tech: this});
                        return new Cd.remoteTextEl.TrackClass(b)
                    }, b.prototype.addRemoteTextTrack = function () {
                        var a = this, b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            c = arguments[1], d = this.createRemoteTextTrack(b);
                        return !0 !== c && !1 !== c && (Z.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), c = !0), this.remoteTextTrackEls().addTrackElement_(d), this.remoteTextTracks().addTrack(d.track), !0 !== c && this.ready(function () {
                            return a.autoRemoteTextTracks_.addTrack(d.track)
                        }), d
                    }, b.prototype.removeRemoteTextTrack = function (a) {
                        var b = this.remoteTextTrackEls().getTrackElementByTrack_(a);
                        this.remoteTextTrackEls().removeTrackElement_(b), this.remoteTextTracks().removeTrack(a), this.autoRemoteTextTracks_.removeTrack(a)
                    }, b.prototype.getVideoPlaybackQuality = function () {
                        return {}
                    }, b.prototype.setPoster = function () {
                    }, b.prototype.playsinline = function () {
                    }, b.prototype.setPlaysinline = function () {
                    }, b.prototype.canPlayType = function () {
                        return ""
                    }, b.canPlayType = function () {
                        return ""
                    }, b.canPlaySource = function (a) {
                        return b.canPlayType(a.type)
                    }, b.isTech = function (a) {
                        return a.prototype instanceof b || a instanceof b || a === b
                    }, b.registerTech = function (a, c) {
                        if (b.techs_ || (b.techs_ = {}), !b.isTech(c)) throw new Error("Tech " + a + " must be a Tech");
                        if (!b.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                        if (!b.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                        return a = sc(a), b.techs_[a] = c, "Tech" !== a && b.defaultTechOrder_.push(a), c
                    }, b.getTech = function (a) {
                        return a ? (a = sc(a), b.techs_ && b.techs_[a] ? b.techs_[a] : f && f.videojs && f.videojs[a] ? (Z.warn("The " + a + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), f.videojs[a]) : void 0) : void 0
                    }, b
                }(uc);
                Dd.names.forEach(function (a) {
                    var b = Dd[a];
                    ge.prototype[b.getterName] = function () {
                        return this[b.privateName] = this[b.privateName] || new b.ListClass, this[b.privateName]
                    }
                }), ge.prototype.featuresVolumeControl = !0, ge.prototype.featuresMuteControl = !0, ge.prototype.featuresFullscreenResize = !1, ge.prototype.featuresPlaybackRate = !1, ge.prototype.featuresProgressEvents = !1, ge.prototype.featuresSourceset = !1, ge.prototype.featuresTimeupdateEvents = !1, ge.prototype.featuresNativeTextTracks = !1, ge.withSourceHandlers = function (a) {
                    a.registerSourceHandler = function (b, c) {
                        var d = a.sourceHandlers;
                        d || (d = a.sourceHandlers = []), void 0 === c && (c = d.length), d.splice(c, 0, b)
                    }, a.canPlayType = function (b) {
                        for (var c = a.sourceHandlers || [], d = void 0, e = 0; e < c.length; e++) if (d = c[e].canPlayType(b)) return d;
                        return ""
                    }, a.selectSourceHandler = function (b, c) {
                        for (var d = a.sourceHandlers || [], e = 0; e < d.length; e++) if (d[e].canHandleSource(b, c)) return d[e];
                        return null
                    }, a.canPlaySource = function (b, c) {
                        var d = a.selectSourceHandler(b, c);
                        return d ? d.canHandleSource(b, c) : ""
                    }, ["seekable", "seeking", "duration"].forEach(function (a) {
                        var b = this[a];
                        "function" == typeof b && (this[a] = function () {
                            return this.sourceHandler_ && this.sourceHandler_[a] ? this.sourceHandler_[a].apply(this.sourceHandler_, arguments) : b.apply(this, arguments)
                        })
                    }, a.prototype), a.prototype.setSource = function (b) {
                        var c = a.selectSourceHandler(b, this.options_);
                        c || (a.nativeSourceHandler ? c = a.nativeSourceHandler : Z.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), c !== a.nativeSourceHandler && (this.currentSource_ = b), this.sourceHandler_ = c.handleSource(b, this, this.options_), this.on("dispose", this.disposeSourceHandler)
                    }, a.prototype.disposeSourceHandler = function () {
                        this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                    }
                }, uc.registerComponent("Tech", ge), ge.registerTech("Tech", ge), ge.defaultTechOrder_ = [];
                var he = {}, ie = {}, je = {},
                    me = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1},
                    ne = {setCurrentTime: 1}, oe = {play: 1, pause: 1}, qe = {
                        opus: "video/ogg",
                        ogv: "video/ogg",
                        mp4: "video/mp4",
                        mov: "video/mp4",
                        m4v: "video/mp4",
                        mkv: "video/x-matroska",
                        mp3: "audio/mpeg",
                        aac: "audio/aac",
                        oga: "audio/ogg",
                        m3u8: "application/x-mpegURL"
                    }, re = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", b = dd(a);
                        return qe[b.toLowerCase()] || ""
                    }, te = function (a) {
                        function b(c, d, e) {
                            L(this, b);
                            var f = tc({createEl: !1}, d), g = N(this, a.call(this, c, f, e));
                            if (d.playerOptions.sources && 0 !== d.playerOptions.sources.length) c.src(d.playerOptions.sources); else for (var h = 0, i = d.playerOptions.techOrder; h < i.length; h++) {
                                var j = sc(i[h]), k = ge.getTech(j);
                                if (j || (k = uc.getComponent(j)), k && k.isSupported()) {
                                    c.loadTech_(j);
                                    break
                                }
                            }
                            return g
                        }

                        return M(b, a), b
                    }(uc);
                uc.registerComponent("MediaLoader", te);
                var ue = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.emitTapEvents(), e.enable(), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        c = S({
                            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, c), "button" === b && Z.error("Creating a ClickableComponent with an HTML element of " + b + " is not supported; use a Button instead."), d = S({role: "button"}, d), this.tabIndex_ = c.tabIndex;
                        var e = a.prototype.createEl.call(this, b, c, d);
                        return this.createControlTextEl(e), e
                    }, b.prototype.dispose = function () {
                        this.controlTextEl_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.createControlTextEl = function (a) {
                        return this.controlTextEl_ = ib("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), a && a.appendChild(this.controlTextEl_), this.controlText(this.controlText_, a), this.controlTextEl_
                    }, b.prototype.controlText = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                        if (void 0 === a) return this.controlText_ || "Need Text";
                        var c = this.localize(a);
                        this.controlText_ = a, jb(this.controlTextEl_, c), this.nonIconControl || b.setAttribute("title", c)
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-control vjs-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.enable = function () {
                        this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
                    }, b.prototype.disable = function () {
                        this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
                    }, b.prototype.handleClick = function () {
                    }, b.prototype.handleFocus = function () {
                        Ub(m, "keydown", dc(this, this.handleKeyPress))
                    }, b.prototype.handleKeyPress = function (b) {
                        32 === b.which || 13 === b.which ? (b.preventDefault(), this.trigger("click")) : a.prototype.handleKeyPress && a.prototype.handleKeyPress.call(this, b)
                    }, b.prototype.handleBlur = function () {
                        Vb(m, "keydown", dc(this, this.handleKeyPress))
                    }, b
                }(uc);
                uc.registerComponent("ClickableComponent", ue);
                var ve = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.update(), c.on("posterchange", dc(e, e.update)), e
                    }

                    return M(b, a), b.prototype.dispose = function () {
                        this.player().off("posterchange", this.update), a.prototype.dispose.call(this)
                    }, b.prototype.createEl = function () {
                        var a = ib("div", {className: "vjs-poster", tabIndex: -1});
                        return I || (this.fallbackImg_ = ib("img"), a.appendChild(this.fallbackImg_)), a
                    }, b.prototype.update = function () {
                        var b = this.player().poster();
                        this.setSrc(b), b ? this.show() : this.hide()
                    }, b.prototype.setSrc = function (a) {
                        if (this.fallbackImg_) this.fallbackImg_.src = a; else {
                            var b = "";
                            a && (b = 'url("' + a + '")'), this.el_.style.backgroundImage = b
                        }
                    }, b.prototype.handleClick = function () {
                        this.player_.controls() && (this.player_.paused() ? Jc(this.player_.play()) : this.player_.pause())
                    }, b
                }(ue);
                uc.registerComponent("PosterImage", ve);
                var we = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                }, ze = function (a) {
                    function b(c, d, e) {
                        L(this, b);
                        var f = N(this, a.call(this, c, d, e));
                        return c.on("loadstart", dc(f, f.toggleDisplay)), c.on("texttrackchange", dc(f, f.updateDisplay)), c.on("loadstart", dc(f, f.preselectTrack)), c.ready(dc(f, function () {
                            if (c.tech_ && c.tech_.featuresNativeTextTracks) this.hide(); else {
                                c.on("fullscreenchange", dc(this, this.updateDisplay));
                                for (var a = this.options_.playerOptions.tracks || [], b = 0; b < a.length; b++) this.player_.addRemoteTextTrack(a[b], !0);
                                this.preselectTrack()
                            }
                        })), f
                    }

                    return M(b, a), b.prototype.preselectTrack = function () {
                        for (var a = {
                            captions: 1,
                            subtitles: 1
                        }, b = this.player_.textTracks(), c = this.player_.cache_.selectedLanguage, d = void 0, e = void 0, f = void 0, g = 0; g < b.length; g++) {
                            var h = b[g];
                            c && c.enabled && c.language === h.language ? h.kind === c.kind ? f = h : f || (f = h) : c && !c.enabled ? (f = null, d = null, e = null) : h.default && ("descriptions" !== h.kind || d ? h.kind in a && !e && (e = h) : d = h)
                        }
                        f ? f.mode = "showing" : e ? e.mode = "showing" : d && (d.mode = "showing")
                    }, b.prototype.toggleDisplay = function () {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
                            "aria-live": "off",
                            "aria-atomic": "true"
                        })
                    }, b.prototype.clearDisplay = function () {
                        "function" == typeof f.WebVTT && f.WebVTT.processCues(f, [], this.el_)
                    }, b.prototype.updateDisplay = function () {
                        var a = this.player_.textTracks();
                        this.clearDisplay();
                        for (var b = null, c = null, d = a.length; d--;) {
                            var e = a[d];
                            "showing" === e.mode && ("descriptions" === e.kind ? b = e : c = e)
                        }
                        c ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(c)) : b && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(b))
                    }, b.prototype.updateForTrack = function (a) {
                        if ("function" == typeof f.WebVTT && a.activeCues) {
                            for (var b = [], c = 0; c < a.activeCues.length; c++) b.push(a.activeCues[c]);
                            if (f.WebVTT.processCues(f, b, this.el_), this.player_.textTrackSettings) for (var d = this.player_.textTrackSettings.getValues(), e = b.length; e--;) {
                                var g = b[e];
                                if (g) {
                                    var h = g.displayState;
                                    if (d.color && (h.firstChild.style.color = d.color), d.textOpacity && ye(h.firstChild, "color", xe(d.color || "#fff", d.textOpacity)), d.backgroundColor && (h.firstChild.style.backgroundColor = d.backgroundColor), d.backgroundOpacity && ye(h.firstChild, "backgroundColor", xe(d.backgroundColor || "#000", d.backgroundOpacity)), d.windowColor && (d.windowOpacity ? ye(h, "backgroundColor", xe(d.windowColor, d.windowOpacity)) : h.style.backgroundColor = d.windowColor), d.edgeStyle && ("dropshadow" === d.edgeStyle ? h.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === d.edgeStyle ? h.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === d.edgeStyle ? h.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === d.edgeStyle && (h.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), d.fontPercent && 1 !== d.fontPercent) {
                                        var i = f.parseFloat(h.style.fontSize);
                                        h.style.fontSize = i * d.fontPercent + "px", h.style.height = "auto", h.style.top = "auto", h.style.bottom = "2px"
                                    }
                                    d.fontFamily && "default" !== d.fontFamily && ("small-caps" === d.fontFamily ? h.firstChild.style.fontVariant = "small-caps" : h.firstChild.style.fontFamily = we[d.fontFamily])
                                }
                            }
                        }
                    }, b
                }(uc);
                uc.registerComponent("TextTrackDisplay", ze);
                var Ae = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = this.player_.isAudio(), c = this.localize(b ? "Audio Player" : "Video Player"),
                            d = ib("span", {
                                className: "vjs-control-text",
                                innerHTML: this.localize("{1} is loading.", [c])
                            }),
                            e = a.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
                        return e.appendChild(d), e
                    }, b
                }(uc);
                uc.registerComponent("LoadingSpinner", Ae);
                var Be = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        b = S({
                            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                            className: this.buildCSSClass()
                        }, b), c = S({type: "button"}, c);
                        var d = uc.prototype.createEl.call(this, "button", b, c);
                        return this.createControlTextEl(d), d
                    }, b.prototype.addChild = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            c = this.constructor.name;
                        return Z.warn("Adding an actionable (user controllable) child to a Button (" + c + ") is not supported; use a ClickableComponent instead."), uc.prototype.addChild.call(this, a, b)
                    }, b.prototype.enable = function () {
                        a.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                    }, b.prototype.disable = function () {
                        a.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                    }, b.prototype.handleKeyPress = function (b) {
                        32 !== b.which && 13 !== b.which && a.prototype.handleKeyPress.call(this, b)
                    }, b
                }(ue);
                uc.registerComponent("Button", Be);
                var Ce = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.mouseused_ = !1, e.on("mousedown", e.handleMouseDown), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-big-play-button"
                    }, b.prototype.handleClick = function (a) {
                        var b = this.player_.play();
                        if (this.mouseused_ && a.clientX && a.clientY) Jc(b); else {
                            var c = this.player_.getChild("controlBar"), d = c && c.getChild("playToggle");
                            if (d) {
                                var e = function () {
                                    return d.focus()
                                };
                                Ic(b) ? b.then(e, function () {
                                }) : this.setTimeout(e, 1)
                            } else this.player_.focus()
                        }
                    }, b.prototype.handleKeyPress = function (b) {
                        this.mouseused_ = !1, a.prototype.handleKeyPress.call(this, b)
                    }, b.prototype.handleMouseDown = function () {
                        this.mouseused_ = !0
                    }, b
                }(Be);
                Ce.prototype.controlText_ = "Play Video", uc.registerComponent("BigPlayButton", Ce);
                var De = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.controlText(d && d.controlText || e.localize("Close")), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-close-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function () {
                        this.trigger({type: "close", bubbles: !1})
                    }, b
                }(Be);
                uc.registerComponent("CloseButton", De);
                var Ee = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "play", e.handlePlay), e.on(c, "pause", e.handlePause), e.on(c, "ended", e.handleEnded), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-play-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function () {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, b.prototype.handleSeeked = function (a) {
                        this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(a) : this.handlePlay(a)
                    }, b.prototype.handlePlay = function () {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, b.prototype.handlePause = function () {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, b.prototype.handleEnded = function () {
                        this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
                    }, b
                }(Be);
                Ee.prototype.controlText_ = "Play", uc.registerComponent("PlayToggle", Ee);
                var Fe = function (a, b) {
                    a = a < 0 ? 0 : a;
                    var c = Math.floor(a % 60), d = Math.floor(a / 60 % 60), e = Math.floor(a / 3600),
                        f = Math.floor(b / 60 % 60), g = Math.floor(b / 3600);
                    return (isNaN(a) || a === 1 / 0) && (e = d = c = "-"), (e = e > 0 || g > 0 ? e + ":" : "") + (d = ((e || f >= 10) && d < 10 ? "0" + d : d) + ":") + (c = c < 10 ? "0" + c : c)
                }, Ge = Fe, He = function (a) {
                    var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                    return Ge(a, b)
                }, Ie = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.throttledUpdateContent = ec(dc(e, e.updateContent), 25), e.on(c, "timeupdate", e.throttledUpdateContent), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var c = this.buildCSSClass(), d = a.prototype.createEl.call(this, "div", {
                            className: c + " vjs-time-control vjs-control",
                            innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + "\xc2 </span>"
                        });
                        return this.contentEl_ = ib("span", {className: c + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), d.appendChild(this.contentEl_), d
                    }, b.prototype.dispose = function () {
                        this.contentEl_ = null, this.textNode_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.updateTextNode_ = function () {
                        if (this.contentEl_) {
                            for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                            this.textNode_ = m.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
                        }
                    }, b.prototype.formatTime_ = function (a) {
                        return He(a)
                    }, b.prototype.updateFormattedTime_ = function (a) {
                        var b = this.formatTime_(a);
                        b !== this.formattedTime_ && (this.formattedTime_ = b, this.requestAnimationFrame(this.updateTextNode_))
                    }, b.prototype.updateContent = function () {
                    }, b
                }(uc);
                Ie.prototype.labelText_ = "Time", Ie.prototype.controlText_ = "Time", uc.registerComponent("TimeDisplay", Ie);
                var Je = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "ended", e.handleEnded), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-current-time"
                    }, b.prototype.updateContent = function () {
                        var b = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.updateFormattedTime_(b)
                    }, b.prototype.handleEnded = function () {
                        this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
                    }, b
                }(Ie);
                Je.prototype.labelText_ = "Current Time", Je.prototype.controlText_ = "Current Time", uc.registerComponent("CurrentTimeDisplay", Je);
                var Ke = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "durationchange", e.updateContent), e.on(c, "loadedmetadata", e.throttledUpdateContent), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-duration"
                    }, b.prototype.updateContent = function () {
                        var b = this.player_.duration();
                        b && this.duration_ !== b && (this.duration_ = b, this.updateFormattedTime_(b))
                    }, b
                }(Ie);
                Ke.prototype.labelText_ = "Duration", Ke.prototype.controlText_ = "Duration", uc.registerComponent("DurationDisplay", Ke);
                var Le = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, b
                }(uc);
                uc.registerComponent("TimeDivider", Le);
                var Me = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "durationchange", e.throttledUpdateContent), e.on(c, "ended", e.handleEnded), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-remaining-time"
                    }, b.prototype.formatTime_ = function (b) {
                        return "-" + a.prototype.formatTime_.call(this, b)
                    }, b.prototype.updateContent = function () {
                        this.player_.duration() && this.updateFormattedTime_(this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime())
                    }, b.prototype.handleEnded = function () {
                        this.player_.duration() && this.updateFormattedTime_(0)
                    }, b
                }(Ie);
                Me.prototype.labelText_ = "Remaining Time", Me.prototype.controlText_ = "Remaining Time", uc.registerComponent("RemainingTimeDisplay", Me);
                var Ne = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.updateShowing(), e.on(e.player(), "durationchange", e.updateShowing), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
                        return this.contentEl_ = ib("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "\xc2 </span>" + this.localize("LIVE")
                        }, {"aria-live": "off"}), b.appendChild(this.contentEl_), b
                    }, b.prototype.dispose = function () {
                        this.contentEl_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.updateShowing = function () {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, b
                }(uc);
                uc.registerComponent("LiveDisplay", Ne);
                var Oe = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.bar = e.getChild(e.options_.barName), e.vertical(!!e.options_.vertical), e.enable(), e
                    }

                    return M(b, a), b.prototype.enabled = function () {
                        return this.enabled_
                    }, b.prototype.enable = function () {
                        this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                    }, b.prototype.disable = function () {
                        if (this.enabled()) {
                            var a = this.bar.el_.ownerDocument;
                            this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(a, "mousemove", this.handleMouseMove), this.off(a, "mouseup", this.handleMouseUp), this.off(a, "touchmove", this.handleMouseMove), this.off(a, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                        }
                    }, b.prototype.createEl = function (b) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return c.className = c.className + " vjs-slider", c = S({tabIndex: 0}, c), d = S({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, d), a.prototype.createEl.call(this, b, c, d)
                    }, b.prototype.handleMouseDown = function (a) {
                        var b = this.bar.el_.ownerDocument;
                        "mousedown" === a.type && a.preventDefault(), "touchstart" !== a.type || B || a.preventDefault(), ub(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(b, "mousemove", this.handleMouseMove), this.on(b, "mouseup", this.handleMouseUp), this.on(b, "touchmove", this.handleMouseMove), this.on(b, "touchend", this.handleMouseUp), this.handleMouseMove(a)
                    }, b.prototype.handleMouseMove = function () {
                    }, b.prototype.handleMouseUp = function () {
                        var a = this.bar.el_.ownerDocument;
                        vb(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(a, "mousemove", this.handleMouseMove), this.off(a, "mouseup", this.handleMouseUp), this.off(a, "touchmove", this.handleMouseMove), this.off(a, "touchend", this.handleMouseUp), this.update()
                    }, b.prototype.update = function () {
                        if (this.el_) {
                            var a = this.getPercent(), b = this.bar;
                            if (b) {
                                ("number" != typeof a || a != a || a < 0 || a === 1 / 0) && (a = 0);
                                var c = (100 * a).toFixed(2) + "%", d = b.el().style;
                                return this.vertical() ? d.height = c : d.width = c, a
                            }
                        }
                    }, b.prototype.calculateDistance = function (a) {
                        var b = yb(this.el_, a);
                        return this.vertical() ? b.y : b.x
                    }, b.prototype.handleFocus = function () {
                        this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, b.prototype.handleKeyPress = function (a) {
                        37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepBack()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepForward())
                    }, b.prototype.handleBlur = function () {
                        this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, b.prototype.handleClick = function (a) {
                        a.stopImmediatePropagation(), a.preventDefault()
                    }, b.prototype.vertical = function (a) {
                        return void 0 === a ? this.vertical_ || !1 : (this.vertical_ = !!a, void this.addClass(this.vertical_ ? "vjs-slider-vertical" : "vjs-slider-horizontal"))
                    }, b
                }(uc);
                uc.registerComponent("Slider", Oe);
                var Pe = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.partEls_ = [], e.on(c, "progress", e.update), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, b.prototype.dispose = function () {
                        this.partEls_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.update = function () {
                        var b = this.player_.buffered(), c = this.player_.duration(), d = this.player_.bufferedEnd(),
                            e = this.partEls_, f = function (a, b) {
                                var c = a / b || 0;
                                return 100 * (c >= 1 ? 1 : c) + "%"
                            };
                        this.el_.style.width = f(d, c);
                        for (var g = 0; g < b.length; g++) {
                            var h = b.start(g), i = b.end(g), j = e[g];
                            j || (j = this.el_.appendChild(ib()), e[g] = j), j.style.left = f(h, d), j.style.width = f(i - h, d)
                        }
                        for (var k = e.length; k > b.length; k--) this.el_.removeChild(e[k - 1]);
                        e.length = b.length
                    }, b
                }(uc);
                uc.registerComponent("LoadProgressBar", Pe);
                var Qe = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
                    }, b.prototype.update = function (a, b, c) {
                        var d = wb(this.el_), e = wb(this.player_.el()), f = a.width * b;
                        if (e && d) {
                            var g = a.left - e.left + f, h = a.width - f + (e.right - a.right), i = d.width / 2;
                            g < i ? i += i - g : h < i && (i = h), i < 0 ? i = 0 : i > d.width && (i = d.width), this.el_.style.right = "-" + i + "px", jb(this.el_, c)
                        }
                    }, b
                }(uc);
                uc.registerComponent("TimeTooltip", Qe);
                var Re = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, b.prototype.update = function (a, b) {
                        var c = this;
                        this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                            var d = c.player_.scrubbing() ? c.player_.getCache().currentTime : c.player_.currentTime(),
                                e = He(d, c.player_.duration()), f = c.getChild("timeTooltip");
                            f && f.update(a, b, e)
                        })
                    }, b
                }(uc);
                Re.prototype.options_ = {children: []}, E && !(E > 8) || t || v || Re.prototype.options_.children.push("timeTooltip"), uc.registerComponent("PlayProgressBar", Re);
                var Se = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.update = ec(dc(e, e.update), 25), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
                    }, b.prototype.update = function (a, b) {
                        var c = this;
                        this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
                            var d = c.player_.duration(), e = He(b * d, d);
                            c.el_.style.left = a.width * b + "px", c.getChild("timeTooltip").update(a, b, e)
                        })
                    }, b
                }(uc);
                Se.prototype.options_ = {children: ["timeTooltip"]}, uc.registerComponent("MouseTimeDisplay", Se);
                var Te = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.setEventHandlers_(), e
                    }

                    return M(b, a), b.prototype.setEventHandlers_ = function () {
                        var a = this;
                        this.update = ec(dc(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
                            a.clearInterval(a.updateInterval), a.updateInterval = a.setInterval(function () {
                                a.requestAnimationFrame(function () {
                                    a.update()
                                })
                            }, 30)
                        }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
                            a.clearInterval(a.updateInterval)
                        }), this.on(this.player_, ["timeupdate", "ended"], this.update)
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
                    }, b.prototype.update_ = function (a, b) {
                        var c = this.player_.duration();
                        this.el_.setAttribute("aria-valuenow", (100 * b).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [He(a, c), He(c, c)], "{1} of {2}")), this.bar.update(wb(this.el_), b)
                    }, b.prototype.update = function () {
                        var c = a.prototype.update.call(this);
                        return this.update_(this.getCurrentTime_(), c), c
                    }, b.prototype.getCurrentTime_ = function () {
                        return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
                    }, b.prototype.handleEnded = function () {
                        this.update_(this.player_.duration(), 1)
                    }, b.prototype.getPercent = function () {
                        var a = this.getCurrentTime_() / this.player_.duration();
                        return a >= 1 ? 1 : a
                    }, b.prototype.handleMouseDown = function (b) {
                        Eb(b) && (b.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), a.prototype.handleMouseDown.call(this, b))
                    }, b.prototype.handleMouseMove = function (a) {
                        if (Eb(a)) {
                            var b = this.calculateDistance(a) * this.player_.duration();
                            b === this.player_.duration() && (b -= .1), this.player_.currentTime(b)
                        }
                    }, b.prototype.enable = function () {
                        a.prototype.enable.call(this);
                        var b = this.getChild("mouseTimeDisplay");
                        b && b.show()
                    }, b.prototype.disable = function () {
                        a.prototype.disable.call(this);
                        var b = this.getChild("mouseTimeDisplay");
                        b && b.hide()
                    }, b.prototype.handleMouseUp = function (b) {
                        a.prototype.handleMouseUp.call(this, b), b && b.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        }), this.videoWasPlaying && Jc(this.player_.play())
                    }, b.prototype.stepForward = function () {
                        this.player_.currentTime(this.player_.currentTime() + 5)
                    }, b.prototype.stepBack = function () {
                        this.player_.currentTime(this.player_.currentTime() - 5)
                    }, b.prototype.handleAction = function () {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, b.prototype.handleKeyPress = function (b) {
                        32 === b.which || 13 === b.which ? (b.preventDefault(), this.handleAction(b)) : a.prototype.handleKeyPress && a.prototype.handleKeyPress.call(this, b)
                    }, b
                }(Oe);
                Te.prototype.options_ = {
                    children: ["loadProgressBar", "playProgressBar"],
                    barName: "playProgressBar"
                }, E && !(E > 8) || t || v || Te.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Te.prototype.playerEvent = "timeupdate", uc.registerComponent("SeekBar", Te);
                var Ue = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.handleMouseMove = ec(dc(e, e.handleMouseMove), 25), e.throttledHandleMouseSeek = ec(dc(e, e.handleMouseSeek), 25), e.enable(), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
                    }, b.prototype.handleMouseMove = function (a) {
                        var b = this.getChild("seekBar");
                        if (b) {
                            var c = b.getChild("mouseTimeDisplay"), d = b.el(), e = wb(d), f = yb(d, a).x;
                            f > 1 ? f = 1 : f < 0 && (f = 0), c && c.update(e, f)
                        }
                    }, b.prototype.handleMouseSeek = function (a) {
                        var b = this.getChild("seekBar");
                        b && b.handleMouseMove(a)
                    }, b.prototype.enabled = function () {
                        return this.enabled_
                    }, b.prototype.disable = function () {
                        this.children().forEach(function (a) {
                            return a.disable && a.disable()
                        }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
                    }, b.prototype.enable = function () {
                        this.children().forEach(function (a) {
                            return a.enable && a.enable()
                        }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                    }, b.prototype.handleMouseDown = function (a) {
                        var b = this.el_.ownerDocument, c = this.getChild("seekBar");
                        c && c.handleMouseDown(a), this.on(b, "mousemove", this.throttledHandleMouseSeek), this.on(b, "touchmove", this.throttledHandleMouseSeek), this.on(b, "mouseup", this.handleMouseUp), this.on(b, "touchend", this.handleMouseUp)
                    }, b.prototype.handleMouseUp = function (a) {
                        var b = this.el_.ownerDocument, c = this.getChild("seekBar");
                        c && c.handleMouseUp(a), this.off(b, "mousemove", this.throttledHandleMouseSeek), this.off(b, "touchmove", this.throttledHandleMouseSeek), this.off(b, "mouseup", this.handleMouseUp), this.off(b, "touchend", this.handleMouseUp)
                    }, b
                }(uc);
                Ue.prototype.options_ = {children: ["seekBar"]}, uc.registerComponent("ProgressControl", Ue);
                var Ve = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "fullscreenchange", e.handleFullscreenChange), !1 === m[zc.fullscreenEnabled] && e.disable(), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-fullscreen-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleFullscreenChange = function () {
                        this.controlText(this.player_.isFullscreen() ? "Non-Fullscreen" : "Fullscreen")
                    }, b.prototype.handleClick = function () {
                        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                    }, b
                }(Be);
                Ve.prototype.controlText_ = "Fullscreen", uc.registerComponent("FullscreenToggle", Ve);
                var We = function (a, b) {
                    b.tech_ && !b.tech_.featuresVolumeControl && a.addClass("vjs-hidden"), a.on(b, "loadstart", function () {
                        b.tech_.featuresVolumeControl ? a.removeClass("vjs-hidden") : a.addClass("vjs-hidden")
                    })
                }, Xe = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, b
                }(uc);
                uc.registerComponent("VolumeLevel", Xe);
                var Ye = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on("slideractive", e.updateLastVolume_), e.on(c, "volumechange", e.updateARIAAttributes), c.ready(function () {
                            return e.updateARIAAttributes()
                        }), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                            "aria-label": this.localize("Volume Level"),
                            "aria-live": "polite"
                        })
                    }, b.prototype.handleMouseDown = function (b) {
                        Eb(b) && a.prototype.handleMouseDown.call(this, b)
                    }, b.prototype.handleMouseMove = function (a) {
                        Eb(a) && (this.checkMuted(), this.player_.volume(this.calculateDistance(a)))
                    }, b.prototype.checkMuted = function () {
                        this.player_.muted() && this.player_.muted(!1)
                    }, b.prototype.getPercent = function () {
                        return this.player_.muted() ? 0 : this.player_.volume()
                    }, b.prototype.stepForward = function () {
                        this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                    }, b.prototype.stepBack = function () {
                        this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                    }, b.prototype.updateARIAAttributes = function () {
                        var b = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                        this.el_.setAttribute("aria-valuenow", b), this.el_.setAttribute("aria-valuetext", b + "%")
                    }, b.prototype.volumeAsPercentage_ = function () {
                        return Math.round(100 * this.player_.volume())
                    }, b.prototype.updateLastVolume_ = function () {
                        var a = this, b = this.player_.volume();
                        this.one("sliderinactive", function () {
                            0 === a.player_.volume() && a.player_.lastVolume_(b)
                        })
                    }, b
                }(Oe);
                Ye.prototype.options_ = {
                    children: ["volumeLevel"],
                    barName: "volumeLevel"
                }, Ye.prototype.playerEvent = "volumechange", uc.registerComponent("VolumeBar", Ye);
                var Ze = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        L(this, b), d.vertical = d.vertical || !1, (void 0 === d.volumeBar || U(d.volumeBar)) && (d.volumeBar = d.volumeBar || {}, d.volumeBar.vertical = d.vertical);
                        var e = N(this, a.call(this, c, d));
                        return We(e, c), e.throttledHandleMouseMove = ec(dc(e, e.handleMouseMove), 25), e.on("mousedown", e.handleMouseDown), e.on("touchstart", e.handleMouseDown), e.on(e.volumeBar, ["focus", "slideractive"], function () {
                            e.volumeBar.addClass("vjs-slider-active"), e.addClass("vjs-slider-active"), e.trigger("slideractive")
                        }), e.on(e.volumeBar, ["blur", "sliderinactive"], function () {
                            e.volumeBar.removeClass("vjs-slider-active"), e.removeClass("vjs-slider-active"), e.trigger("sliderinactive")
                        }), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = "vjs-volume-horizontal";
                        return this.options_.vertical && (b = "vjs-volume-vertical"), a.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + b})
                    }, b.prototype.handleMouseDown = function () {
                        var b = this.el_.ownerDocument;
                        this.on(b, "mousemove", this.throttledHandleMouseMove), this.on(b, "touchmove", this.throttledHandleMouseMove), this.on(b, "mouseup", this.handleMouseUp), this.on(b, "touchend", this.handleMouseUp)
                    }, b.prototype.handleMouseUp = function () {
                        var b = this.el_.ownerDocument;
                        this.off(b, "mousemove", this.throttledHandleMouseMove), this.off(b, "touchmove", this.throttledHandleMouseMove), this.off(b, "mouseup", this.handleMouseUp), this.off(b, "touchend", this.handleMouseUp)
                    }, b.prototype.handleMouseMove = function (a) {
                        this.volumeBar.handleMouseMove(a)
                    }, b
                }(uc);
                Ze.prototype.options_ = {children: ["volumeBar"]}, uc.registerComponent("VolumeControl", Ze);
                var $e = function (a, b) {
                    b.tech_ && !b.tech_.featuresMuteControl && a.addClass("vjs-hidden"), a.on(b, "loadstart", function () {
                        b.tech_.featuresMuteControl ? a.removeClass("vjs-hidden") : a.addClass("vjs-hidden")
                    })
                }, _e = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return $e(e, c), e.on(c, ["loadstart", "volumechange"], e.update), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-mute-control " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.handleClick = function () {
                        var b = this.player_.volume(), c = this.player_.lastVolume_();
                        if (0 === b) {
                            var d = c < .1 ? .1 : c;
                            this.player_.volume(d), this.player_.muted(!1)
                        } else this.player_.muted(!this.player_.muted())
                    }, b.prototype.update = function () {
                        this.updateIcon_(), this.updateControlText_()
                    }, b.prototype.updateIcon_ = function () {
                        var a = this.player_.volume(), b = 3;
                        t && this.player_.muted(this.player_.tech_.el_.muted), 0 === a || this.player_.muted() ? b = 0 : a < .33 ? b = 1 : a < .67 && (b = 2);
                        for (var c = 0; c < 4; c++) nb(this.el_, "vjs-vol-" + c);
                        mb(this.el_, "vjs-vol-" + b)
                    }, b.prototype.updateControlText_ = function () {
                        var a = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
                        this.controlText() !== a && this.controlText(a)
                    }, b
                }(Be);
                _e.prototype.controlText_ = "Mute", uc.registerComponent("MuteToggle", _e);
                var af = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        L(this, b), d.inline = void 0 !== d.inline ? d.inline : !0, (void 0 === d.volumeControl || U(d.volumeControl)) && (d.volumeControl = d.volumeControl || {}, d.volumeControl.vertical = !d.inline);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, ["loadstart"], e.volumePanelState_), e.on(e.volumeControl, ["slideractive"], e.sliderActive_), e.on(e.volumeControl, ["sliderinactive"], e.sliderInactive_), e
                    }

                    return M(b, a), b.prototype.sliderActive_ = function () {
                        this.addClass("vjs-slider-active")
                    }, b.prototype.sliderInactive_ = function () {
                        this.removeClass("vjs-slider-active")
                    }, b.prototype.volumePanelState_ = function () {
                        this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
                    }, b.prototype.createEl = function () {
                        var b = "vjs-volume-panel-horizontal";
                        return this.options_.inline || (b = "vjs-volume-panel-vertical"), a.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + b})
                    }, b
                }(uc);
                af.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, uc.registerComponent("VolumePanel", af);
                var bf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return d && (e.menuButton_ = d.menuButton), e.focusedChild_ = -1, e.on("keydown", e.handleKeyPress), e
                    }

                    return M(b, a), b.prototype.addItem = function (a) {
                        this.addChild(a), a.on("click", dc(this, function () {
                            this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== a.name() && this.menuButton_.focus())
                        }))
                    }, b.prototype.createEl = function () {
                        var b = this.options_.contentElType || "ul";
                        this.contentEl_ = ib(b, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
                        var c = a.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return c.appendChild(this.contentEl_), Ub(c, "click", function (a) {
                            a.preventDefault(), a.stopImmediatePropagation()
                        }), c
                    }, b.prototype.dispose = function () {
                        this.contentEl_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.handleKeyPress = function (a) {
                        37 === a.which || 40 === a.which ? (a.preventDefault(), this.stepForward()) : 38 !== a.which && 39 !== a.which || (a.preventDefault(), this.stepBack())
                    }, b.prototype.stepForward = function () {
                        var a = 0;
                        void 0 !== this.focusedChild_ && (a = this.focusedChild_ + 1), this.focus(a)
                    }, b.prototype.stepBack = function () {
                        var a = 0;
                        void 0 !== this.focusedChild_ && (a = this.focusedChild_ - 1), this.focus(a)
                    }, b.prototype.focus = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            b = this.children().slice();
                        b.length && b[0].className && /vjs-menu-title/.test(b[0].className) && b.shift(), b.length > 0 && (a < 0 ? a = 0 : a >= b.length && (a = b.length - 1), this.focusedChild_ = a, b[a].el_.focus())
                    }, b
                }(uc);
                uc.registerComponent("Menu", bf);
                var cf = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        e.menuButton_ = new Be(c, d), e.menuButton_.controlText(e.controlText_), e.menuButton_.el_.setAttribute("aria-haspopup", "true");
                        var f = Be.prototype.buildCSSClass();
                        return e.menuButton_.el_.className = e.buildCSSClass() + " " + f, e.menuButton_.removeClass("vjs-control"), e.addChild(e.menuButton_), e.update(), e.enabled_ = !0, e.on(e.menuButton_, "tap", e.handleClick), e.on(e.menuButton_, "click", e.handleClick), e.on(e.menuButton_, "focus", e.handleFocus), e.on(e.menuButton_, "blur", e.handleBlur), e.on("keydown", e.handleSubmenuKeyPress), e
                    }

                    return M(b, a), b.prototype.update = function () {
                        var a = this.createMenu();
                        this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = a, this.addChild(a), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
                    }, b.prototype.createMenu = function () {
                        var a = new bf(this.player_, {menuButton: this});
                        if (this.hideThreshold_ = 0, this.options_.title) {
                            var b = ib("li", {
                                className: "vjs-menu-title",
                                innerHTML: sc(this.options_.title),
                                tabIndex: -1
                            });
                            this.hideThreshold_ += 1, a.children_.unshift(b), kb(b, a.contentEl())
                        }
                        if (this.items = this.createItems(), this.items) for (var c = 0; c < this.items.length; c++) a.addItem(this.items[c]);
                        return a
                    }, b.prototype.createItems = function () {
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
                    }, b.prototype.buildWrapperCSSClass = function () {
                        var b = "vjs-menu-button";
                        return b += !0 === this.options_.inline ? "-inline" : "-popup", "vjs-menu-button " + b + " " + Be.prototype.buildCSSClass() + " " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildCSSClass = function () {
                        var b = "vjs-menu-button";
                        return b += !0 === this.options_.inline ? "-inline" : "-popup", "vjs-menu-button " + b + " " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.controlText = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
                        return this.menuButton_.controlText(a, b)
                    }, b.prototype.handleClick = function () {
                        this.one(this.menu.contentEl(), "mouseleave", dc(this, function () {
                            this.unpressButton(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, b.prototype.focus = function () {
                        this.menuButton_.focus()
                    }, b.prototype.blur = function () {
                        this.menuButton_.blur()
                    }, b.prototype.handleFocus = function () {
                        Ub(m, "keydown", dc(this, this.handleKeyPress))
                    }, b.prototype.handleBlur = function () {
                        Vb(m, "keydown", dc(this, this.handleKeyPress))
                    }, b.prototype.handleKeyPress = function (a) {
                        27 === a.which || 9 === a.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== a.which && (a.preventDefault(), this.menuButton_.el_.focus())) : 38 !== a.which && 40 !== a.which || this.buttonPressed_ || (this.pressButton(), a.preventDefault())
                    }, b.prototype.handleSubmenuKeyPress = function (a) {
                        27 !== a.which && 9 !== a.which || (this.buttonPressed_ && this.unpressButton(), 9 !== a.which && (a.preventDefault(), this.menuButton_.el_.focus()))
                    }, b.prototype.pressButton = function () {
                        if (this.enabled_) {
                            if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), t && gb()) return;
                            this.menu.focus()
                        }
                    }, b.prototype.unpressButton = function () {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                    }, b.prototype.disable = function () {
                        this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                    }, b.prototype.enable = function () {
                        this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                    }, b
                }(uc);
                uc.registerComponent("MenuButton", cf);
                var df = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.tracks, f = N(this, a.call(this, c, d));
                        if (f.items.length <= 1 && f.hide(), !e) return N(f);
                        var g = dc(f, f.update);
                        return e.addEventListener("removetrack", g), e.addEventListener("addtrack", g), f.player_.on("ready", g), f.player_.on("dispose", function () {
                            e.removeEventListener("removetrack", g), e.removeEventListener("addtrack", g)
                        }), f
                    }

                    return M(b, a), b
                }(cf);
                uc.registerComponent("TrackButton", df);
                var ef = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.selectable = d.selectable, e.isSelected_ = d.selected || !1, e.multiSelectable = d.multiSelectable, e.selected(e.isSelected_), e.selectable ? e.multiSelectable ? e.el_.setAttribute("role", "menuitemcheckbox") : e.el_.setAttribute("role", "menuitemradio") : e.el_.setAttribute("role", "menuitem"), e
                    }

                    return M(b, a), b.prototype.createEl = function (b, c, d) {
                        return this.nonIconControl = !0, a.prototype.createEl.call(this, "li", S({
                            className: "vjs-menu-item",
                            innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                            tabIndex: -1
                        }, c), d)
                    }, b.prototype.handleClick = function () {
                        this.selected(!0)
                    }, b.prototype.selected = function (a) {
                        this.selectable && (a ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
                    }, b
                }(ue);
                uc.registerComponent("MenuItem", ef);
                var ff = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.track, g = c.textTracks();
                        d.label = e.label || e.language || "Unknown", d.selected = "showing" === e.mode;
                        var h = N(this, a.call(this, c, d));
                        h.track = e;
                        var i = function () {
                            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                            h.handleTracksChange.apply(h, b)
                        }, j = function () {
                            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                            h.handleSelectedLanguageChange.apply(h, b)
                        };
                        if (c.on(["loadstart", "texttrackchange"], i), g.addEventListener("change", i), g.addEventListener("selectedlanguagechange", j), h.on("dispose", function () {
                            c.off(["loadstart", "texttrackchange"], i), g.removeEventListener("change", i), g.removeEventListener("selectedlanguagechange", j)
                        }), void 0 === g.onchange) {
                            var k = void 0;
                            h.on(["tap", "click"], function () {
                                if ("object" !== K(f.Event)) try {
                                    k = new f.Event("change")
                                } catch (a) {
                                }
                                k || (k = m.createEvent("Event")).initEvent("change", !0, !0), g.dispatchEvent(k)
                            })
                        }
                        return h.handleTracksChange(), h
                    }

                    return M(b, a), b.prototype.handleClick = function (b) {
                        var c = this.track.kind, d = this.track.kinds, e = this.player_.textTracks();
                        if (d || (d = [c]), a.prototype.handleClick.call(this, b), e) for (var f = 0; f < e.length; f++) {
                            var g = e[f];
                            g === this.track && d.indexOf(g.kind) > -1 ? "showing" !== g.mode && (g.mode = "showing") : "disabled" !== g.mode && (g.mode = "disabled")
                        }
                    }, b.prototype.handleTracksChange = function () {
                        var b = "showing" === this.track.mode;
                        b !== this.isSelected_ && this.selected(b)
                    }, b.prototype.handleSelectedLanguageChange = function () {
                        if ("showing" === this.track.mode) {
                            var b = this.player_.cache_.selectedLanguage;
                            if (b && b.enabled && b.language === this.track.language && b.kind !== this.track.kind) return;
                            this.player_.cache_.selectedLanguage = {
                                enabled: !0,
                                language: this.track.language,
                                kind: this.track.kind
                            }
                        }
                    }, b.prototype.dispose = function () {
                        this.track = null, a.prototype.dispose.call(this)
                    }, b
                }(ef);
                uc.registerComponent("TextTrackMenuItem", ff);
                var gf = function (a) {
                    function b(c, d) {
                        return L(this, b), d.track = {
                            player: c,
                            kind: d.kind,
                            kinds: d.kinds,
                            "default": !1,
                            mode: "disabled"
                        }, d.kinds || (d.kinds = [d.kind]), d.track.label = d.label ? d.label : d.kinds.join(" and ") + " off", d.selectable = !0, d.multiSelectable = !1, N(this, a.call(this, c, d))
                    }

                    return M(b, a), b.prototype.handleTracksChange = function () {
                        for (var b = this.player().textTracks(), c = !0, d = 0, e = b.length; d < e; d++) {
                            var f = b[d];
                            if (this.options_.kinds.indexOf(f.kind) > -1 && "showing" === f.mode) {
                                c = !1;
                                break
                            }
                        }
                        c !== this.isSelected_ && this.selected(c)
                    }, b.prototype.handleSelectedLanguageChange = function () {
                        for (var b = this.player().textTracks(), c = !0, d = 0, e = b.length; d < e; d++) {
                            var f = b[d];
                            if (["captions", "descriptions", "subtitles"].indexOf(f.kind) > -1 && "showing" === f.mode) {
                                c = !1;
                                break
                            }
                        }
                        c && (this.player_.cache_.selectedLanguage = {enabled: !1})
                    }, b
                }(ff);
                uc.registerComponent("OffTextTrackMenuItem", gf);
                var hf = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return L(this, b), d.tracks = c.textTracks(), N(this, a.call(this, c, d))
                    }

                    return M(b, a), b.prototype.createItems = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ff, c = void 0;
                        this.label_ && (c = this.label_ + " off"), a.push(new gf(this.player_, {
                            kinds: this.kinds_,
                            kind: this.kind_,
                            label: c
                        })), this.hideThreshold_ += 1;
                        var d = this.player_.textTracks();
                        Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            if (this.kinds_.indexOf(f.kind) > -1) {
                                var g = new b(this.player_, {track: f, selectable: !0, multiSelectable: !1});
                                g.addClass("vjs-" + f.kind + "-menu-item"), a.push(g)
                            }
                        }
                        return a
                    }, b
                }(df);
                uc.registerComponent("TextTrackButton", hf);
                var jf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.track, f = d.cue, g = c.currentTime();
                        d.selectable = !0, d.multiSelectable = !1, d.label = f.text, d.selected = f.startTime <= g && g < f.endTime;
                        var h = N(this, a.call(this, c, d));
                        return h.track = e, h.cue = f, e.addEventListener("cuechange", dc(h, h.update)), h
                    }

                    return M(b, a), b.prototype.handleClick = function () {
                        a.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, b.prototype.update = function () {
                        var b = this.cue, c = this.player_.currentTime();
                        this.selected(b.startTime <= c && c < b.endTime)
                    }, b
                }(ef);
                uc.registerComponent("ChaptersTrackMenuItem", jf);
                var kf = function (a) {
                    function b(c, d, e) {
                        return L(this, b), N(this, a.call(this, c, d, e))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-chapters-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-chapters-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b.prototype.update = function (b) {
                        this.track_ && (!b || "addtrack" !== b.type && "removetrack" !== b.type) || this.setTrack(this.findChaptersTrack()), a.prototype.update.call(this)
                    }, b.prototype.setTrack = function (a) {
                        if (this.track_ !== a) {
                            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                                var b = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                b && b.removeEventListener("load", this.updateHandler_), this.track_ = null
                            }
                            if (this.track_ = a, this.track_) {
                                this.track_.mode = "hidden";
                                var c = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                c && c.addEventListener("load", this.updateHandler_)
                            }
                        }
                    }, b.prototype.findChaptersTrack = function () {
                        for (var a = this.player_.textTracks() || [], b = a.length - 1; b >= 0; b--) {
                            var c = a[b];
                            if (c.kind === this.kind_) return c
                        }
                    }, b.prototype.getMenuCaption = function () {
                        return this.track_ && this.track_.label ? this.track_.label : this.localize(sc(this.kind_))
                    }, b.prototype.createMenu = function () {
                        return this.options_.title = this.getMenuCaption(), a.prototype.createMenu.call(this)
                    }, b.prototype.createItems = function () {
                        var a = [];
                        if (!this.track_) return a;
                        var b = this.track_.cues;
                        if (!b) return a;
                        for (var c = 0, d = b.length; c < d; c++) {
                            var e = b[c], f = new jf(this.player_, {track: this.track_, cue: e});
                            a.push(f)
                        }
                        return a
                    }, b
                }(hf);
                kf.prototype.kind_ = "chapters", kf.prototype.controlText_ = "Chapters", uc.registerComponent("ChaptersButton", kf);
                var lf = function (a) {
                    function b(c, d, e) {
                        L(this, b);
                        var f = N(this, a.call(this, c, d, e)), g = c.textTracks(), h = dc(f, f.handleTracksChange);
                        return g.addEventListener("change", h), f.on("dispose", function () {
                            g.removeEventListener("change", h)
                        }), f
                    }

                    return M(b, a), b.prototype.handleTracksChange = function () {
                        for (var b = this.player().textTracks(), c = !1, d = 0, e = b.length; d < e; d++) {
                            var f = b[d];
                            if (f.kind !== this.kind_ && "showing" === f.mode) {
                                c = !0;
                                break
                            }
                        }
                        c ? this.disable() : this.enable()
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-descriptions-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b
                }(hf);
                lf.prototype.kind_ = "descriptions", lf.prototype.controlText_ = "Descriptions", uc.registerComponent("DescriptionsButton", lf);
                var mf = function (a) {
                    function b(c, d, e) {
                        return L(this, b), N(this, a.call(this, c, d, e))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-subtitles-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-subtitles-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b
                }(hf);
                mf.prototype.kind_ = "subtitles", mf.prototype.controlText_ = "Subtitles", uc.registerComponent("SubtitlesButton", mf);
                var nf = function (a) {
                    function b(c, d) {
                        L(this, b), d.track = {
                            player: c,
                            kind: d.kind,
                            label: d.kind + " settings",
                            selectable: !1,
                            "default": !1,
                            mode: "disabled"
                        }, d.selectable = !1, d.name = "CaptionSettingsMenuItem";
                        var e = N(this, a.call(this, c, d));
                        return e.addClass("vjs-texttrack-settings"), e.controlText(", opens " + d.kind + " settings dialog"), e
                    }

                    return M(b, a), b.prototype.handleClick = function () {
                        this.player().getChild("textTrackSettings").open()
                    }, b
                }(ff);
                uc.registerComponent("CaptionSettingsMenuItem", nf);
                var of = function (a) {
                    function b(c, d, e) {
                        return L(this, b), N(this, a.call(this, c, d, e))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-captions-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-captions-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b.prototype.createItems = function () {
                        var b = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (b.push(new nf(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), a.prototype.createItems.call(this, b)
                    }, b
                }(hf);
                of.prototype.kind_ = "captions", of.prototype.controlText_ = "Captions", uc.registerComponent("CaptionsButton", of);
                var pf = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function (b, c, d) {
                        var e = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                        return "captions" === this.options_.track.kind && (e += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), e += "</span>", a.prototype.createEl.call(this, b, S({innerHTML: e}, c), d)
                    }, b
                }(ff);
                uc.registerComponent("SubsCapsMenuItem", pf);
                var qf = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(e.player_.language_) > -1 && (e.label_ = "captions"), e.menuButton_.controlText(sc(e.label_)), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-subs-caps-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-subs-caps-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b.prototype.createItems = function () {
                        var b = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (b.push(new nf(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), b = a.prototype.createItems.call(this, b, pf)
                    }, b
                }(hf);
                qf.prototype.kinds_ = ["captions", "subtitles"], qf.prototype.controlText_ = "Subtitles", uc.registerComponent("SubsCapsButton", qf);
                var rf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.track, f = c.audioTracks();
                        d.label = e.label || e.language || "Unknown", d.selected = e.enabled;
                        var g = N(this, a.call(this, c, d));
                        g.track = e, g.addClass("vjs-" + e.kind + "-menu-item");
                        var h = function () {
                            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                            g.handleTracksChange.apply(g, b)
                        };
                        return f.addEventListener("change", h), g.on("dispose", function () {
                            f.removeEventListener("change", h)
                        }), g
                    }

                    return M(b, a), b.prototype.createEl = function (b, c, d) {
                        var e = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                        return "main-desc" === this.options_.track.kind && (e += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), e += "</span>", a.prototype.createEl.call(this, b, S({innerHTML: e}, c), d)
                    }, b.prototype.handleClick = function (b) {
                        var c = this.player_.audioTracks();
                        a.prototype.handleClick.call(this, b);
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            e.enabled = e === this.track
                        }
                    }, b.prototype.handleTracksChange = function () {
                        this.selected(this.track.enabled)
                    }, b
                }(ef);
                uc.registerComponent("AudioTrackMenuItem", rf);
                var sf = function (a) {
                    function b(c) {
                        var d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return L(this, b), d.tracks = c.audioTracks(), N(this, a.call(this, c, d))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-audio-button " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-audio-button " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b.prototype.createItems = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        this.hideThreshold_ = 1;
                        for (var b = this.player_.audioTracks(), c = 0; c < b.length; c++) {
                            var d = b[c];
                            a.push(new rf(this.player_, {track: d, selectable: !0, multiSelectable: !1}))
                        }
                        return a
                    }, b
                }(df);
                sf.prototype.controlText_ = "Audio Track", uc.registerComponent("AudioTrackButton", sf);
                var tf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.rate, f = parseFloat(e, 10);
                        d.label = e, d.selected = 1 === f, d.selectable = !0, d.multiSelectable = !1;
                        var g = N(this, a.call(this, c, d));
                        return g.label = e, g.rate = f, g.on(c, "ratechange", g.update), g
                    }

                    return M(b, a), b.prototype.handleClick = function () {
                        a.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, b.prototype.update = function () {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, b
                }(ef);
                tf.prototype.contentElType = "button", uc.registerComponent("PlaybackRateMenuItem", tf);
                var uf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.updateVisibility(), e.updateLabel(), e.on(c, "loadstart", e.updateVisibility), e.on(c, "ratechange", e.updateLabel), e
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this);
                        return this.labelEl_ = ib("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: "1x"
                        }), b.appendChild(this.labelEl_), b
                    }, b.prototype.dispose = function () {
                        this.labelEl_ = null, a.prototype.dispose.call(this)
                    }, b.prototype.buildCSSClass = function () {
                        return "vjs-playback-rate " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.buildWrapperCSSClass = function () {
                        return "vjs-playback-rate " + a.prototype.buildWrapperCSSClass.call(this)
                    }, b.prototype.createMenu = function () {
                        var a = new bf(this.player()), b = this.playbackRates();
                        if (b) for (var c = b.length - 1; c >= 0; c--) a.addChild(new tf(this.player(), {rate: b[c] + "x"}));
                        return a
                    }, b.prototype.updateARIAAttributes = function () {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, b.prototype.handleClick = function () {
                        for (var b = this.player().playbackRate(), c = this.playbackRates(), d = c[0], e = 0; e < c.length; e++) if (c[e] > b) {
                            d = c[e];
                            break
                        }
                        this.player().playbackRate(d)
                    }, b.prototype.playbackRates = function () {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, b.prototype.playbackRateSupported = function () {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, b.prototype.updateVisibility = function () {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, b.prototype.updateLabel = function () {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, b
                }(cf);
                uf.prototype.controlText_ = "Playback Rate", uc.registerComponent("PlaybackRateMenuButton", uf);
                var vf = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-spacer " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
                    }, b
                }(uc);
                uc.registerComponent("Spacer", vf);
                var wf = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-custom-control-spacer " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.createEl = function () {
                        var b = a.prototype.createEl.call(this, {className: this.buildCSSClass()});
                        return b.innerHTML = "\xc2 ", b
                    }, b
                }(vf);
                uc.registerComponent("CustomControlSpacer", wf);
                var xf = function (a) {
                    function b() {
                        return L(this, b), N(this, a.apply(this, arguments))
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
                    }, b
                }(uc);
                xf.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, uc.registerComponent("ControlBar", xf);
                var yf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = N(this, a.call(this, c, d));
                        return e.on(c, "error", e.open), e
                    }

                    return M(b, a), b.prototype.buildCSSClass = function () {
                        return "vjs-error-display " + a.prototype.buildCSSClass.call(this)
                    }, b.prototype.content = function () {
                        var a = this.player().error();
                        return a ? this.localize(a.message) : ""
                    }, b
                }(Oc);
                yf.prototype.options_ = tc(Oc.prototype.options_, {
                    pauseOnOpen: !1,
                    fillAlways: !0,
                    temporary: !1,
                    uncloseable: !0
                }), uc.registerComponent("ErrorDisplay", yf);
                var zf = ["#000", "Black"], Af = ["#00F", "Blue"], Bf = ["#0FF", "Cyan"], Cf = ["#0F0", "Green"],
                    Df = ["#F0F", "Magenta"], Ef = ["#F00", "Red"], Ff = ["#FFF", "White"], Gf = ["#FF0", "Yellow"],
                    Hf = ["1", "Opaque"], If = ["0.5", "Semi-Transparent"], Jf = ["0", "Transparent"], Kf = {
                        backgroundColor: {
                            selector: ".vjs-bg-color > select",
                            id: "captions-background-color-%s",
                            label: "Color",
                            options: [zf, Ff, Ef, Cf, Af, Gf, Df, Bf]
                        },
                        backgroundOpacity: {
                            selector: ".vjs-bg-opacity > select",
                            id: "captions-background-opacity-%s",
                            label: "Transparency",
                            options: [Hf, If, Jf]
                        },
                        color: {
                            selector: ".vjs-fg-color > select",
                            id: "captions-foreground-color-%s",
                            label: "Color",
                            options: [Ff, zf, Ef, Cf, Af, Gf, Df, Bf]
                        },
                        edgeStyle: {
                            selector: ".vjs-edge-style > select",
                            id: "%s",
                            label: "Text Edge Style",
                            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
                        },
                        fontFamily: {
                            selector: ".vjs-font-family > select",
                            id: "captions-font-family-%s",
                            label: "Font Family",
                            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
                        },
                        fontPercent: {
                            selector: ".vjs-font-percent > select",
                            id: "captions-font-size-%s",
                            label: "Font Size",
                            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
                            "default": 2,
                            parser: function (a) {
                                return "1.00" === a ? null : Number(a)
                            }
                        },
                        textOpacity: {
                            selector: ".vjs-text-opacity > select",
                            id: "captions-foreground-opacity-%s",
                            label: "Transparency",
                            options: [Hf, If]
                        },
                        windowColor: {
                            selector: ".vjs-window-color > select",
                            id: "captions-window-color-%s",
                            label: "Color"
                        },
                        windowOpacity: {
                            selector: ".vjs-window-opacity > select",
                            id: "captions-window-opacity-%s",
                            label: "Transparency",
                            options: [Jf, If, Hf]
                        }
                    };
                Kf.windowColor.options = Kf.backgroundColor.options;
                var Mf = function (a) {
                    function b(c, d) {
                        L(this, b), d.temporary = !1;
                        var e = N(this, a.call(this, c, d));
                        return e.updateDisplay = dc(e, e.updateDisplay), e.fill(), e.hasBeenOpened_ = e.hasBeenFilled_ = !0, e.endDialog = ib("p", {
                            className: "vjs-control-text",
                            textContent: e.localize("End of dialog window.")
                        }), e.el().appendChild(e.endDialog), e.setDefaults(), void 0 === d.persistTextTrackSettings && (e.options_.persistTextTrackSettings = e.options_.playerOptions.persistTextTrackSettings), e.on(e.$(".vjs-done-button"), "click", function () {
                            e.saveSettings(), e.close()
                        }), e.on(e.$(".vjs-default-button"), "click", function () {
                            e.setDefaults(), e.updateDisplay()
                        }), R(Kf, function (a) {
                            e.on(e.$(a.selector), "change", e.updateDisplay)
                        }), e.options_.persistTextTrackSettings && e.restoreSettings(), e
                    }

                    return M(b, a), b.prototype.dispose = function () {
                        this.endDialog = null, a.prototype.dispose.call(this)
                    }, b.prototype.createElSelect_ = function (a) {
                        var b = this, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "label", e = Kf[a],
                            f = e.id.replace("%s", this.id_), g = [c, f].join(" ").trim();
                        return ["<" + d + ' id="' + f + '" class="' + ("label" === d ? "vjs-label" : "") + '">', this.localize(e.label), "</" + d + ">", '<select aria-labelledby="' + g + '">'].concat(e.options.map(function (a) {
                            var c = f + "-" + a[1].replace(/\W+/g, "");
                            return ['<option id="' + c + '" value="' + a[0] + '" ', 'aria-labelledby="' + g + " " + c + '">', b.localize(a[1]), "</option>"].join("")
                        })).concat("</select>").join("")
                    }, b.prototype.createElFgColor_ = function () {
                        var a = "captions-text-legend-" + this.id_;
                        return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + a + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", a), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", a), "</span>", "</fieldset>"].join("")
                    }, b.prototype.createElBgColor_ = function () {
                        var a = "captions-background-" + this.id_;
                        return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + a + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", a), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", a), "</span>", "</fieldset>"].join("")
                    }, b.prototype.createElWinColor_ = function () {
                        var a = "captions-window-" + this.id_;
                        return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + a + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", a), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", a), "</span>", "</fieldset>"].join("")
                    }, b.prototype.createElColors_ = function () {
                        return ib("div", {
                            className: "vjs-track-settings-colors",
                            innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                        })
                    }, b.prototype.createElFont_ = function () {
                        return ib("div", {
                            className: "vjs-track-settings-font",
                            innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                        })
                    }, b.prototype.createElControls_ = function () {
                        var a = this.localize("restore all settings to the default values");
                        return ib("div", {
                            className: "vjs-track-settings-controls",
                            innerHTML: ['<button class="vjs-default-button" title="' + a + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + a + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                        })
                    }, b.prototype.content = function () {
                        return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
                    }, b.prototype.label = function () {
                        return this.localize("Caption Settings Dialog")
                    }, b.prototype.description = function () {
                        return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                    }, b.prototype.buildCSSClass = function () {
                        return a.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
                    }, b.prototype.getValues = function () {
                        var a = this;
                        return function (a, b) {
                            var c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return Q(a).reduce(function (c, d) {
                                return b(c, a[d], d)
                            }, c)
                        }(Kf, function (b, c, d) {
                            var e, f,
                                g = (e = a.$(c.selector), f = c.parser, Lf(e.options[e.options.selectedIndex].value, f));
                            return void 0 !== g && (b[d] = g), b
                        }, {})
                    }, b.prototype.setValues = function (a) {
                        var b = this;
                        R(Kf, function (c, d) {
                            !function (a, b, c) {
                                if (b) for (var d = 0; d < a.options.length; d++) if (Lf(a.options[d].value, c) === b) {
                                    a.selectedIndex = d;
                                    break
                                }
                            }(b.$(c.selector), a[d], c.parser)
                        })
                    }, b.prototype.setDefaults = function () {
                        var a = this;
                        R(Kf, function (b) {
                            var c = b.hasOwnProperty("default") ? b.default : 0;
                            a.$(b.selector).selectedIndex = c
                        })
                    }, b.prototype.restoreSettings = function () {
                        var a = void 0;
                        try {
                            a = JSON.parse(f.localStorage.getItem("vjs-text-track-settings"))
                        } catch (a) {
                            Z.warn(a)
                        }
                        a && this.setValues(a)
                    }, b.prototype.saveSettings = function () {
                        if (this.options_.persistTextTrackSettings) {
                            var a = this.getValues();
                            try {
                                Object.keys(a).length ? f.localStorage.setItem("vjs-text-track-settings", JSON.stringify(a)) : f.localStorage.removeItem("vjs-text-track-settings")
                            } catch (a) {
                                Z.warn(a)
                            }
                        }
                    }, b.prototype.updateDisplay = function () {
                        var a = this.player_.getChild("textTrackDisplay");
                        a && a.updateDisplay()
                    }, b.prototype.conditionalBlur_ = function () {
                        this.previouslyActiveEl_ = null, this.off(m, "keydown", this.handleKeyDown);
                        var a = this.player_.controlBar, b = a && a.subsCapsButton, c = a && a.captionsButton;
                        b ? b.focus() : c && c.focus()
                    }, b
                }(Oc);
                uc.registerComponent("TextTrackSettings", Mf);
                var Nf = function (a) {
                    function b(c, d) {
                        L(this, b);
                        var e = d.ResizeObserver || f.ResizeObserver;
                        null === d.ResizeObserver && (e = !1);
                        var g = tc({createEl: !e}, d), h = N(this, a.call(this, c, g));
                        return h.ResizeObserver = d.ResizeObserver || f.ResizeObserver, h.loadListener_ = null, h.resizeObserver_ = null, h.debouncedHandler_ = fc(function () {
                            h.resizeHandler()
                        }, 100, !1, c), e ? (h.resizeObserver_ = new h.ResizeObserver(h.debouncedHandler_), h.resizeObserver_.observe(c.el())) : (h.loadListener_ = function () {
                            h.el_.contentWindow && Ub(h.el_.contentWindow, "resize", h.debouncedHandler_), h.off("load", h.loadListener_)
                        }, h.on("load", h.loadListener_)), h
                    }

                    return M(b, a), b.prototype.createEl = function () {
                        return a.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
                    }, b.prototype.resizeHandler = function () {
                        this.player_.trigger("playerresize")
                    }, b.prototype.dispose = function () {
                        this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && Vb(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
                    }, b
                }(uc);
                uc.registerComponent("ResizeManager", Nf);
                var Of = function (a) {
                    var b = a.el();
                    if (b.hasAttribute("src")) return a.triggerSourceset(b.src), !0;
                    var c = a.$$("source"), d = [], e = "";
                    if (!c.length) return !1;
                    for (var f = 0; f < c.length; f++) {
                        var g = c[f].src;
                        g && -1 === d.indexOf(g) && d.push(g)
                    }
                    return !!d.length && (1 === d.length && (e = d[0]), a.triggerSourceset(e), !0)
                }, Pf = {};
                D || (Pf = Object.defineProperty({}, "innerHTML", {
                    get: function () {
                        return this.cloneNode(!0).innerHTML
                    }, set: function (a) {
                        var b = m.createElement(this.nodeName.toLowerCase());
                        b.innerHTML = a;
                        for (var c = m.createDocumentFragment(); b.childNodes.length;) c.appendChild(b.childNodes[0]);
                        return this.innerText = "", f.Element.prototype.appendChild.call(this, c), this.innerHTML
                    }
                }));
                var Qf = function (a, b) {
                    for (var c = {}, d = 0; d < a.length && !((c = Object.getOwnPropertyDescriptor(a[d], b)) && c.set && c.get); d++) ;
                    return c.enumerable = !0, c.configurable = !0, c
                }, Rf = function (a) {
                    var b = a.el();
                    if (!b.resetSourceWatch_) {
                        var c = {}, d = function (a) {
                            return Qf([a.el(), f.HTMLMediaElement.prototype, f.Element.prototype, Pf], "innerHTML")
                        }(a), e = function (c) {
                            return function () {
                                for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                                var g = c.apply(b, e);
                                return Of(a), g
                            }
                        };
                        ["append", "appendChild", "insertAdjacentHTML"].forEach(function (a) {
                            b[a] && (c[a] = b[a], b[a] = e(c[a]))
                        }), Object.defineProperty(b, "innerHTML", tc(d, {set: e(d.set)})), b.resetSourceWatch_ = function () {
                            b.resetSourceWatch_ = null, Object.keys(c).forEach(function (a) {
                                b[a] = c[a]
                            }), Object.defineProperty(b, "innerHTML", d)
                        }, a.one("sourceset", b.resetSourceWatch_)
                    }
                }, Sf = {};
                D || (Sf = Object.defineProperty({}, "src", {
                    get: function () {
                        return this.hasAttribute("src") ? cd(f.Element.prototype.getAttribute.call(this, "src")) : ""
                    }, set: function (a) {
                        return f.Element.prototype.setAttribute.call(this, "src", a), a
                    }
                }));
                var Tf = function (a) {
                        if (a.featuresSourceset) {
                            var b = a.el();
                            if (!b.resetSourceset_) {
                                var c = function (a) {
                                    return Qf([a.el(), f.HTMLMediaElement.prototype, Sf], "src")
                                }(a), d = b.setAttribute, e = b.load;
                                Object.defineProperty(b, "src", tc(c, {
                                    set: function (d) {
                                        var e = c.set.call(b, d);
                                        return a.triggerSourceset(b.src), e
                                    }
                                })), b.setAttribute = function (c, e) {
                                    var f = d.call(b, c, e);
                                    return /src/i.test(c) && a.triggerSourceset(b.src), f
                                }, b.load = function () {
                                    var c = e.call(b);
                                    return Of(a) || (a.triggerSourceset(""), Rf(a)), c
                                }, b.currentSrc ? a.triggerSourceset(b.currentSrc) : Of(a) || Rf(a), b.resetSourceset_ = function () {
                                    b.resetSourceset_ = null, b.load = e, b.setAttribute = d, Object.defineProperty(b, "src", c), b.resetSourceWatch_ && b.resetSourceWatch_()
                                }
                            }
                        }
                    },
                    Uf = O(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                    Vf = function (a) {
                        function b(c, d) {
                            L(this, b);
                            var e = N(this, a.call(this, c, d)), f = c.source, g = !1;
                            if (f && (e.el_.currentSrc !== f.src || c.tag && 3 === c.tag.initNetworkState_) ? e.setSource(f) : e.handleLateInit_(e.el_), c.enableSourceset && e.setupSourcesetHandling_(), e.el_.hasChildNodes()) {
                                for (var h = e.el_.childNodes, i = h.length, j = []; i--;) {
                                    var k = h[i];
                                    "track" === k.nodeName.toLowerCase() && (e.featuresNativeTextTracks ? (e.remoteTextTrackEls().addTrackElement_(k), e.remoteTextTracks().addTrack(k.track), e.textTracks().addTrack(k.track), g || e.el_.hasAttribute("crossorigin") || !ed(k.src) || (g = !0)) : j.push(k))
                                }
                                for (var l = 0; l < j.length; l++) e.el_.removeChild(j[l])
                            }
                            return e.proxyNativeTracks_(), e.featuresNativeTextTracks && g && Z.warn(_(Uf)), e.restoreMetadataTracksInIOSNativePlayer_(), (H || r || y) && !0 === c.nativeControlsForTouch && e.setControls(!0), e.proxyWebkitFullscreen_(), e.triggerReady(), e
                        }

                        return M(b, a), b.prototype.dispose = function () {
                            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), b.disposeMediaElement(this.el_), this.options_ = null, a.prototype.dispose.call(this)
                        }, b.prototype.setupSourcesetHandling_ = function () {
                            Tf(this)
                        }, b.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
                            var a = this.textTracks(), b = void 0, c = function () {
                                b = [];
                                for (var c = 0; c < a.length; c++) {
                                    var d = a[c];
                                    "metadata" === d.kind && b.push({track: d, storedMode: d.mode})
                                }
                            };
                            c(), a.addEventListener("change", c), this.on("dispose", function () {
                                return a.removeEventListener("change", c)
                            });
                            var d = function e() {
                                for (var c = 0; c < b.length; c++) {
                                    var d = b[c];
                                    "disabled" === d.track.mode && d.track.mode !== d.storedMode && (d.track.mode = d.storedMode)
                                }
                                a.removeEventListener("change", e)
                            };
                            this.on("webkitbeginfullscreen", function () {
                                a.removeEventListener("change", c), a.removeEventListener("change", d), a.addEventListener("change", d)
                            }), this.on("webkitendfullscreen", function () {
                                a.removeEventListener("change", c), a.addEventListener("change", c), a.removeEventListener("change", d)
                            })
                        }, b.prototype.proxyNativeTracks_ = function () {
                            var a = this;
                            Bd.names.forEach(function (b) {
                                var c = Bd[b], d = a.el()[c.getterName], e = a[c.getterName]();
                                if (a["featuresNative" + c.capitalName + "Tracks"] && d && d.addEventListener) {
                                    var f = {
                                        change: function () {
                                            e.trigger({type: "change", target: e, currentTarget: e, srcElement: e})
                                        }, addtrack: function (a) {
                                            e.addTrack(a.track)
                                        }, removetrack: function (a) {
                                            e.removeTrack(a.track)
                                        }
                                    }, g = function () {
                                        for (var a = [], b = 0; b < e.length; b++) {
                                            for (var c = !1, f = 0; f < d.length; f++) if (d[f] === e[b]) {
                                                c = !0;
                                                break
                                            }
                                            c || a.push(e[b])
                                        }
                                        for (; a.length;) e.removeTrack(a.shift())
                                    };
                                    Object.keys(f).forEach(function (b) {
                                        var c = f[b];
                                        d.addEventListener(b, c), a.on("dispose", function () {
                                            return d.removeEventListener(b, c)
                                        })
                                    }), a.on("loadstart", g), a.on("dispose", function () {
                                        return a.off("loadstart", g)
                                    })
                                }
                            })
                        }, b.prototype.createEl = function () {
                            var a = this.options_.tag;
                            if (!a || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                                if (a) {
                                    var c = a.cloneNode(!0);
                                    a.parentNode && a.parentNode.insertBefore(c, a), b.disposeMediaElement(a), a = c
                                } else {
                                    a = m.createElement("video");
                                    var d = tc({}, this.options_.tag && qb(this.options_.tag));
                                    H && !0 === this.options_.nativeControlsForTouch || delete d.controls, pb(a, S(d, {
                                        id: this.options_.techId,
                                        "class": "vjs-tech"
                                    }))
                                }
                                a.playerId = this.options_.playerId
                            }
                            void 0 !== this.options_.preload && sb(a, "preload", this.options_.preload);
                            for (var e = ["loop", "muted", "playsinline", "autoplay"], f = 0; f < e.length; f++) {
                                var g = e[f], h = this.options_[g];
                                void 0 !== h && (h ? sb(a, g, g) : tb(a, g), a[g] = h)
                            }
                            return a
                        }, b.prototype.handleLateInit_ = function (a) {
                            if (0 !== a.networkState && 3 !== a.networkState) {
                                if (0 === a.readyState) {
                                    var b = !1, c = function () {
                                        b = !0
                                    };
                                    this.on("loadstart", c);
                                    var d = function () {
                                        b || this.trigger("loadstart")
                                    };
                                    return this.on("loadedmetadata", d), void this.ready(function () {
                                        this.off("loadstart", c), this.off("loadedmetadata", d), b || this.trigger("loadstart")
                                    })
                                }
                                var e = ["loadstart"];
                                e.push("loadedmetadata"), a.readyState >= 2 && e.push("loadeddata"), a.readyState >= 3 && e.push("canplay"), a.readyState >= 4 && e.push("canplaythrough"), this.ready(function () {
                                    e.forEach(function (a) {
                                        this.trigger(a)
                                    }, this)
                                })
                            }
                        }, b.prototype.setCurrentTime = function (a) {
                            if (a > this.el_.duration) this.trigger("ended"); else try {
                                this.el_.currentTime = a
                            } catch (a) {
                                Z(a, "Video is not ready. (Video.js)")
                            }
                        }, b.prototype.duration = function () {
                            var a = this;
                            return this.el_.duration === 1 / 0 && v && B && 0 === this.el_.currentTime ? (this.on("timeupdate", function b() {
                                a.el_.currentTime > 0 && (a.el_.duration === 1 / 0 && a.trigger("durationchange"), a.off("timeupdate", b))
                            }), 0 / 0) : this.el_.dataset.customDuration > 1 ? this.el_.dataset.customDuration : this.el_.duration || 0 / 0
                        }, b.prototype.width = function () {
                            return this.el_.offsetWidth
                        }, b.prototype.height = function () {
                            return this.el_.offsetHeight
                        }, b.prototype.proxyWebkitFullscreen_ = function () {
                            var a = this;
                            if ("webkitDisplayingFullscreen" in this.el_) {
                                var b = function () {
                                    this.trigger("fullscreenchange", {isFullscreen: !1})
                                }, c = function () {
                                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", b), this.trigger("fullscreenchange", {isFullscreen: !0}))
                                };
                                this.on("webkitbeginfullscreen", c), this.on("dispose", function () {
                                    a.off("webkitbeginfullscreen", c), a.off("webkitendfullscreen", b)
                                })
                            }
                        }, b.prototype.supportsFullScreen = function () {
                            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                                var a = f.navigator && f.navigator.userAgent || "";
                                if (/Android/.test(a) || !/Chrome|Mac OS X 10.5/.test(a)) return !0
                            }
                            return !1
                        }, b.prototype.enterFullScreen = function () {
                            var a = this.el_;
                            a.paused && a.networkState <= a.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
                                a.pause(), a.webkitEnterFullScreen()
                            }, 0)) : a.webkitEnterFullScreen()
                        }, b.prototype.exitFullScreen = function () {
                            this.el_.webkitExitFullScreen()
                        }, b.prototype.src = function (a) {
                            return void 0 === a ? this.el_.src : void this.setSrc(a)
                        }, b.prototype.reset = function () {
                            b.resetMediaElement(this.el_)
                        }, b.prototype.currentSrc = function () {
                            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                        }, b.prototype.setControls = function (a) {
                            this.el_.controls = !!a
                        }, b.prototype.addTextTrack = function (b, c, d) {
                            return this.featuresNativeTextTracks ? this.el_.addTextTrack(b, c, d) : a.prototype.addTextTrack.call(this, b, c, d)
                        }, b.prototype.createRemoteTextTrack = function (b) {
                            if (!this.featuresNativeTextTracks) return a.prototype.createRemoteTextTrack.call(this, b);
                            var c = m.createElement("track");
                            return b.kind && (c.kind = b.kind), b.label && (c.label = b.label), (b.language || b.srclang) && (c.srclang = b.language || b.srclang), b.default && (c.default = b.default), b.id && (c.id = b.id), b.src && (c.src = b.src), c
                        }, b.prototype.addRemoteTextTrack = function (b, c) {
                            var d = a.prototype.addRemoteTextTrack.call(this, b, c);
                            return this.featuresNativeTextTracks && this.el().appendChild(d), d
                        }, b.prototype.removeRemoteTextTrack = function (b) {
                            if (a.prototype.removeRemoteTextTrack.call(this, b), this.featuresNativeTextTracks) for (var c = this.$$("track"), d = c.length; d--;) b !== c[d] && b !== c[d].track || this.el().removeChild(c[d])
                        }, b.prototype.getVideoPlaybackQuality = function () {
                            if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                            var a = {};
                            return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (a.droppedVideoFrames = this.el().webkitDroppedFrameCount, a.totalVideoFrames = this.el().webkitDecodedFrameCount), f.performance && "function" == typeof f.performance.now ? a.creationTime = f.performance.now() : f.performance && f.performance.timing && "number" == typeof f.performance.timing.navigationStart && (a.creationTime = f.Date.now() - f.performance.timing.navigationStart), a
                        }, b
                    }(ge);
                if (eb()) {
                    Vf.TEST_VID = m.createElement("video");
                    var Wf = m.createElement("track");
                    Wf.kind = "captions", Wf.srclang = "en", Wf.label = "English", Vf.TEST_VID.appendChild(Wf)
                }
                Vf.isSupported = function () {
                    try {
                        Vf.TEST_VID.volume = .5
                    } catch (a) {
                        return !1
                    }
                    return !(!Vf.TEST_VID || !Vf.TEST_VID.canPlayType)
                }, Vf.canPlayType = function (a) {
                    return Vf.TEST_VID.canPlayType(a)
                }, Vf.canPlaySource = function (a) {
                    return Vf.canPlayType(a.type)
                }, Vf.canControlVolume = function () {
                    try {
                        var a = Vf.TEST_VID.volume;
                        return Vf.TEST_VID.volume = a / 2 + .1, a !== Vf.TEST_VID.volume
                    } catch (a) {
                        return !1
                    }
                }, Vf.canMuteVolume = function () {
                    try {
                        var a = Vf.TEST_VID.muted;
                        return Vf.TEST_VID.muted = !a, Vf.TEST_VID.muted ? sb(Vf.TEST_VID, "muted", "muted") : tb(Vf.TEST_VID, "muted"), a !== Vf.TEST_VID.muted
                    } catch (a) {
                        return !1
                    }
                }, Vf.canControlPlaybackRate = function () {
                    if (v && B && C < 58) return !1;
                    try {
                        var a = Vf.TEST_VID.playbackRate;
                        return Vf.TEST_VID.playbackRate = a / 2 + .1, a !== Vf.TEST_VID.playbackRate
                    } catch (a) {
                        return !1
                    }
                }, Vf.canOverrideAttributes = function () {
                    if (D) return !1;
                    try {
                        var a = function () {
                        };
                        Object.defineProperty(m.createElement("video"), "src", {
                            get: a,
                            set: a
                        }), Object.defineProperty(m.createElement("audio"), "src", {
                            get: a,
                            set: a
                        }), Object.defineProperty(m.createElement("video"), "innerHTML", {
                            get: a,
                            set: a
                        }), Object.defineProperty(m.createElement("audio"), "innerHTML", {get: a, set: a})
                    } catch (a) {
                        return !1
                    }
                    return !0
                }, Vf.supportsNativeTextTracks = function () {
                    return G || t && B
                }, Vf.supportsNativeVideoTracks = function () {
                    return !(!Vf.TEST_VID || !Vf.TEST_VID.videoTracks)
                }, Vf.supportsNativeAudioTracks = function () {
                    return !(!Vf.TEST_VID || !Vf.TEST_VID.audioTracks)
                }, Vf.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Vf.prototype.featuresVolumeControl = Vf.canControlVolume(), Vf.prototype.featuresMuteControl = Vf.canMuteVolume(), Vf.prototype.featuresPlaybackRate = Vf.canControlPlaybackRate(), Vf.prototype.featuresSourceset = Vf.canOverrideAttributes(), Vf.prototype.movingMediaElementInDOM = !t, Vf.prototype.featuresFullscreenResize = !0, Vf.prototype.featuresProgressEvents = !0, Vf.prototype.featuresTimeupdateEvents = !0, Vf.prototype.featuresNativeTextTracks = Vf.supportsNativeTextTracks(), Vf.prototype.featuresNativeVideoTracks = Vf.supportsNativeVideoTracks(), Vf.prototype.featuresNativeAudioTracks = Vf.supportsNativeAudioTracks();
                var Xf = Vf.TEST_VID && Vf.TEST_VID.constructor.prototype.canPlayType,
                    Yf = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, Zf = /^video\/mp4/i;
                Vf.patchCanPlayType = function () {
                    w >= 4 && !z && !B ? Vf.TEST_VID.constructor.prototype.canPlayType = function (a) {
                        return a && Yf.test(a) ? "maybe" : Xf.call(this, a)
                    } : x && (Vf.TEST_VID.constructor.prototype.canPlayType = function (a) {
                        return a && Zf.test(a) ? "maybe" : Xf.call(this, a)
                    })
                }, Vf.unpatchCanPlayType = function () {
                    var a = Vf.TEST_VID.constructor.prototype.canPlayType;
                    return Vf.TEST_VID.constructor.prototype.canPlayType = Xf, a
                }, Vf.patchCanPlayType(), Vf.disposeMediaElement = function (a) {
                    if (a) {
                        for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
                        a.removeAttribute("src"), "function" == typeof a.load && function () {
                            try {
                                a.load()
                            } catch (a) {
                            }
                        }()
                    }
                }, Vf.resetMediaElement = function (a) {
                    if (a) {
                        for (var b = a.querySelectorAll("source"), c = b.length; c--;) a.removeChild(b[c]);
                        a.removeAttribute("src"), "function" == typeof a.load && function () {
                            try {
                                a.load()
                            } catch (a) {
                            }
                        }()
                    }
                }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (a) {
                    Vf.prototype[a] = function () {
                        return this.el_[a] || this.el_.hasAttribute(a)
                    }
                }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (a) {
                    Vf.prototype["set" + sc(a)] = function (b) {
                        this.el_[a] = b, b ? this.el_.setAttribute(a, a) : this.el_.removeAttribute(a)
                    }
                }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (a) {
                    Vf.prototype[a] = function () {
                        return this.el_[a]
                    }
                }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (a) {
                    Vf.prototype["set" + sc(a)] = function (b) {
                        this.el_[a] = b
                    }
                }), ["pause", "load", "play"].forEach(function (a) {
                    Vf.prototype[a] = function () {
                        return this.el_[a]()
                    }
                }), ge.withSourceHandlers(Vf), Vf.nativeSourceHandler = {}, Vf.nativeSourceHandler.canPlayType = function (a) {
                    try {
                        return Vf.TEST_VID.canPlayType(a)
                    } catch (a) {
                        return ""
                    }
                }, Vf.nativeSourceHandler.canHandleSource = function (a) {
                    if (a.type) return Vf.nativeSourceHandler.canPlayType(a.type);
                    if (a.src) {
                        var c = dd(a.src);
                        return Vf.nativeSourceHandler.canPlayType("video/" + c)
                    }
                    return ""
                }, Vf.nativeSourceHandler.handleSource = function (a, b) {
                    b.setSrc(a.src)
                }, Vf.nativeSourceHandler.dispose = function () {
                }, Vf.registerSourceHandler(Vf.nativeSourceHandler), ge.registerTech("Html5", Vf);
                var $f = O(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
                    _f = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
                    ag = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
                    bg = function (b) {
                        function c(d, e, f) {
                            if (L(this, c), d.id = d.id || e.id || "vjs_video_" + Jb(), (e = S(c.getTagSettings(d), e)).initChildren = !1, e.createEl = !1, e.evented = !1, e.reportTouchActivity = !1, !e.language) if ("function" == typeof d.closest) {
                                var g = d.closest("[lang]");
                                g && g.getAttribute && (e.language = g.getAttribute("lang"))
                            } else for (var h = d; h && 1 === h.nodeType;) {
                                if (qb(h).hasOwnProperty("lang")) {
                                    e.language = h.getAttribute("lang");
                                    break
                                }
                                h = h.parentNode
                            }
                            var i = N(this, b.call(this, null, e, f));
                            if (i.isPosterFromTech_ = !1, i.queuedCallbacks_ = [], i.isReady_ = !1, i.hasStarted_ = !1, i.userActive_ = !1, !i.options_ || !i.options_.techOrder || !i.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                            if (i.tag = d, i.tagAttributes = d && qb(d), i.language(i.options_.language), e.languages) {
                                var j = {};
                                Object.getOwnPropertyNames(e.languages).forEach(function (a) {
                                    j[a.toLowerCase()] = e.languages[a]
                                }), i.languages_ = j
                            } else i.languages_ = c.prototype.options_.languages;
                            i.cache_ = {}, i.poster_ = e.poster || "", i.controls_ = !!e.controls, i.cache_.lastVolume = 1, d.controls = !1, d.removeAttribute("controls"), d.hasAttribute("autoplay") ? i.options_.autoplay = !0 : i.autoplay(i.options_.autoplay), i.scrubbing_ = !1, i.el_ = i.createEl(), i.cache_.lastPlaybackRate = i.defaultPlaybackRate(), pc(i, {eventBusKey: "el_"});
                            var k = tc(i.options_);
                            if (e.plugins) {
                                var l = e.plugins;
                                Object.keys(l).forEach(function (a) {
                                    if ("function" != typeof this[a]) throw new Error('plugin "' + a + '" does not exist');
                                    this[a](l[a])
                                }, i)
                            }
                            i.options_.playerOptions = k, i.middleware_ = [], i.initChildren(), i.isAudio("audio" === d.nodeName.toLowerCase()), i.addClass(i.controls() ? "vjs-controls-enabled" : "vjs-controls-disabled"), i.el_.setAttribute("role", "region"), i.isAudio() ? i.el_.setAttribute("aria-label", i.localize("Audio Player")) : i.el_.setAttribute("aria-label", i.localize("Video Player")), i.isAudio() && i.addClass("vjs-audio"), i.flexNotSupported_() && i.addClass("vjs-no-flex"), t || i.addClass("vjs-workinghover"), c.players[i.id_] = i;
                            var m = a.split(".")[0];
                            return i.addClass("vjs-v" + m), i.userActive(!0), i.reportUserActivity(), i.one("play", i.listenForUserActivity_), i.on("fullscreenchange", i.handleFullscreenChange_), i.on("stageclick", i.handleStageClick_), i.changingSrc_ = !1, i.playWaitingForReady_ = !1, i.playOnLoadstart_ = null, i
                        }

                        return M(c, b), c.prototype.dispose = function () {
                            this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), c.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), ie[this.id()] = null, b.prototype.dispose.call(this)
                        }, c.prototype.createEl = function () {
                            var a = this.tag, c = void 0,
                                d = this.playerElIngest_ = a.parentNode && a.parentNode.hasAttribute && a.parentNode.hasAttribute("data-vjs-player"),
                                e = "video-js" === this.tag.tagName.toLowerCase();
                            d ? c = this.el_ = a.parentNode : e || (c = this.el_ = b.prototype.createEl.call(this, "div"));
                            var g = qb(a);
                            if (e) {
                                for (c = this.el_ = a, a = this.tag = m.createElement("video"); c.children.length;) a.appendChild(c.firstChild);
                                lb(c, "video-js") || mb(c, "video-js"), c.appendChild(a), d = this.playerElIngest_ = c, ["autoplay", "controls", "crossOrigin", "defaultMuted", "defaultPlaybackRate", "loop", "muted", "playbackRate", "src", "volume"].forEach(function (b) {
                                    void 0 !== c[b] && (a[b] = c[b])
                                })
                            }
                            if (a.setAttribute("tabindex", "-1"), E && a.setAttribute("role", "application"), a.removeAttribute("width"), a.removeAttribute("height"), Object.getOwnPropertyNames(g).forEach(function (b) {
                                "class" === b ? (c.className += " " + g[b], e && (a.className += " " + g[b])) : (c.setAttribute(b, g[b]), e && a.setAttribute(b, g[b]))
                            }), a.playerId = a.id, a.id += "_html5_api", a.className = "vjs-tech", a.player = c.player = this, this.addClass("vjs-paused"), !0 !== f.VIDEOJS_NO_DYNAMIC_STYLE) {
                                this.styleEl_ = bc("vjs-styles-dimensions");
                                var h = Fb(".vjs-styles-defaults"), i = Fb("head");
                                i.insertBefore(this.styleEl_, h ? h.nextSibling : i.firstChild)
                            }
                            this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                            for (var j = a.getElementsByTagName("a"), k = 0; k < j.length; k++) {
                                var l = j.item(k);
                                mb(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                            }
                            return a.initNetworkState_ = a.networkState, a.parentNode && !d && a.parentNode.insertBefore(c, a), kb(a, c), this.children_.unshift(a), this.el_.setAttribute("lang", this.language_), this.el_ = c, c
                        }, c.prototype.width = function (a) {
                            return this.dimension("width", a)
                        }, c.prototype.height = function (a) {
                            return this.dimension("height", a)
                        }, c.prototype.dimension = function (a, b) {
                            var c = a + "_";
                            if (void 0 === b) return this[c] || 0;
                            if ("" === b) return this[c] = void 0, void this.updateStyleEl_();
                            var d = parseFloat(b);
                            isNaN(d) ? Z.error('Improper value "' + b + '" supplied for for ' + a) : (this[c] = d, this.updateStyleEl_())
                        }, c.prototype.fluid = function (a) {
                            return void 0 === a ? !!this.fluid_ : (this.fluid_ = !!a, a ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_(), void 0)
                        }, c.prototype.aspectRatio = function (a) {
                            if (void 0 === a) return this.aspectRatio_;
                            if (!/^\d+\:\d+$/.test(a)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                            this.aspectRatio_ = a, this.fluid(!0), this.updateStyleEl_()
                        }, c.prototype.updateStyleEl_ = function () {
                            if (!0 !== f.VIDEOJS_NO_DYNAMIC_STYLE) {
                                var a = void 0, b = void 0, c = void 0,
                                    d = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                                    e = d[1] / d[0];
                                a = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / e : this.videoWidth() || 300, b = void 0 !== this.height_ ? this.height_ : a * e, c = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(c), cc(this.styleEl_, "\n      ." + c + " {\n        width: " + a + "px;\n        height: " + b + "px;\n      }\n\n      ." + c + ".vjs-fluid {\n        padding-top: " + 100 * e + "%;\n      }\n    ")
                            } else {
                                var g = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                    h = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                    i = this.tech_ && this.tech_.el();
                                i && (g >= 0 && (i.width = g), h >= 0 && (i.height = h))
                            }
                        }, c.prototype.loadTech_ = function (a, b) {
                            var c = this;
                            this.tech_ && this.unloadTech_();
                            var d = sc(a), e = a.charAt(0).toLowerCase() + a.slice(1);
                            "Html5" !== d && this.tag && (ge.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = d, this.isReady_ = !1;
                            var f = {
                                source: b,
                                autoplay: "string" != typeof this.autoplay() && this.autoplay(),
                                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                                playerId: this.id(),
                                techId: this.id() + "_" + d + "_api",
                                playsinline: this.options_.playsinline,
                                preload: this.options_.preload,
                                loop: this.options_.loop,
                                muted: this.options_.muted,
                                poster: this.poster(),
                                language: this.language(),
                                playerElIngest: this.playerElIngest_ || !1,
                                "vtt.js": this.options_["vtt.js"],
                                canOverridePoster: !!this.options_.techCanOverridePoster,
                                enableSourceset: this.options_.enableSourceset
                            };
                            Dd.names.forEach(function (a) {
                                var b = Dd[a];
                                f[b.getterName] = c[b.privateName]
                            }), S(f, this.options_[d]), S(f, this.options_[e]), S(f, this.options_[a.toLowerCase()]), this.tag && (f.tag = this.tag), b && b.src === this.cache_.src && this.cache_.currentTime > 0 && (f.startTime = this.cache_.currentTime);
                            var g = ge.getTech(a);
                            if (!g) throw new Error("No Tech named '" + d + "' exists! '" + d + "' should be registered using videojs.registerTech()'");
                            this.tech_ = new g(f), this.tech_.ready(dc(this, this.handleTechReady_), !0), Mc(this.textTracksJson_ || [], this.tech_), _f.forEach(function (a) {
                                c.on(c.tech_, a, c["handleTech" + sc(a) + "_"])
                            }), Object.keys(ag).forEach(function (a) {
                                c.on(c.tech_, a, function (b) {
                                    0 === c.tech_.playbackRate() && c.tech_.seeking() ? c.queuedCallbacks_.push({
                                        callback: c["handleTech" + ag[a] + "_"].bind(c),
                                        event: b
                                    }) : c["handleTech" + ag[a] + "_"](b)
                                })
                            }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === d && this.tag || kb(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                        }, c.prototype.unloadTech_ = function () {
                            var a = this;
                            Dd.names.forEach(function (b) {
                                var c = Dd[b];
                                a[c.privateName] = a[c.getterName]()
                            }), this.textTracksJson_ = Lc(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                        }, c.prototype.tech = function (a) {
                            return void 0 === a && Z.warn(_($f)), this.tech_
                        }, c.prototype.addTechControlsListeners_ = function () {
                            this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                        }, c.prototype.removeTechControlsListeners_ = function () {
                            this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                        }, c.prototype.handleTechReady_ = function () {
                            if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
                                delete this.tag.poster
                            } catch (a) {
                                Z("deleting tag.poster throws in some browsers", a)
                            }
                        }, c.prototype.handleTechLoadStart_ = function () {
                            this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
                        }, c.prototype.manualAutoplay_ = function (a) {
                            var b = this;
                            if (this.tech_ && "string" == typeof a) {
                                var c = function () {
                                    var a = b.muted();
                                    b.muted(!0);
                                    var c = b.play();
                                    return c && c.then && c.catch ? c.catch(function () {
                                        b.muted(a)
                                    }) : void 0
                                }, d = void 0;
                                if ("any" === a ? (d = this.play()) && d.then && d.catch && d.catch(function () {
                                    return c()
                                }) : d = "muted" === a ? c() : this.play(), d && d.then && d.catch) return d.then(function () {
                                    b.trigger({type: "autoplay-success", autoplay: a})
                                }).catch(function () {
                                    b.trigger({type: "autoplay-failure", autoplay: a})
                                })
                            }
                        }, c.prototype.updateSourceCaches_ = function () {
                            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", b = a, c = "";
                            "string" != typeof b && (b = a.src, c = a.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], b && !c && (c = function (a, b) {
                                if (!b) return "";
                                if (a.cache_.source.src === b && a.cache_.source.type) return a.cache_.source.type;
                                var c = a.cache_.sources.filter(function (a) {
                                    return a.src === b
                                });
                                if (c.length) return c[0].type;
                                for (var d = a.$$("source"), e = 0; e < d.length; e++) {
                                    var f = d[e];
                                    if (f.type && f.src && f.src === b) return f.type
                                }
                                return re(b)
                            }(this, b)), this.cache_.source = tc({}, a, {src: b, type: c});
                            for (var d = this.cache_.sources.filter(function (a) {
                                return a.src && a.src === b
                            }), e = [], f = this.$$("source"), g = [], h = 0; h < f.length; h++) {
                                var i = qb(f[h]);
                                e.push(i), i.src && i.src === b && g.push(i.src)
                            }
                            g.length && !d.length ? this.cache_.sources = e : d.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = b
                        }, c.prototype.handleTechSourceset_ = function (a) {
                            var b = this;
                            this.changingSrc_ || (this.updateSourceCaches_(a.src), a.src) || this.tech_.one(["sourceset", "loadstart"], function c(a) {
                                "sourceset" !== a.type && b.updateSourceCaches_(b.techGet_("currentSrc")), b.tech_.off(["sourceset", "loadstart"], c)
                            }), this.trigger({src: a.src, type: "sourceset"})
                        }, c.prototype.hasStarted = function (a) {
                            return void 0 === a ? this.hasStarted_ : void (a !== this.hasStarted_ && (this.hasStarted_ = a, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")))
                        }, c.prototype.handleTechPlay_ = function () {
                            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                        }, c.prototype.handleTechRateChange_ = function () {
                            this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (a) {
                                return a.callback(a.event)
                            }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                        }, c.prototype.handleTechWaiting_ = function () {
                            var a = this;
                            this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
                                return a.removeClass("vjs-waiting")
                            })
                        }, c.prototype.handleTechCanPlay_ = function () {
                            this.removeClass("vjs-waiting"), this.trigger("canplay")
                        }, c.prototype.handleTechCanPlayThrough_ = function () {
                            this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                        }, c.prototype.handleTechPlaying_ = function () {
                            this.removeClass("vjs-waiting"), this.trigger("playing")
                        }, c.prototype.handleTechSeeking_ = function () {
                            this.addClass("vjs-seeking"), this.trigger("seeking")
                        }, c.prototype.handleTechSeeked_ = function () {
                            this.removeClass("vjs-seeking"), this.trigger("seeked")
                        }, c.prototype.handleTechFirstPlay_ = function () {
                            this.options_.starttime && (Z.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                        }, c.prototype.handleTechPause_ = function () {
                            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                        }, c.prototype.handleTechEnded_ = function () {
                            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                        }, c.prototype.handleTechDurationChange_ = function () {
                            this.duration(this.techGet_("duration"))
                        }, c.prototype.handleTechClick_ = function (a) {
                            Eb(a) && this.controls_ && (this.paused() ? Jc(this.play()) : this.pause())
                        }, c.prototype.handleTechTap_ = function () {
                            this.userActive(!this.userActive())
                        }, c.prototype.handleTechTouchStart_ = function () {
                            this.userWasActive = this.userActive()
                        }, c.prototype.handleTechTouchMove_ = function () {
                            this.userWasActive && this.reportUserActivity()
                        }, c.prototype.handleTechTouchEnd_ = function (a) {
                            a.preventDefault()
                        }, c.prototype.handleFullscreenChange_ = function () {
                            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                        }, c.prototype.handleStageClick_ = function () {
                            this.reportUserActivity()
                        }, c.prototype.handleTechFullscreenChange_ = function (a, b) {
                            b && this.isFullscreen(b.isFullscreen), this.trigger("fullscreenchange")
                        }, c.prototype.handleTechError_ = function () {
                            var a = this.tech_.error();
                            this.error(a)
                        }, c.prototype.handleTechTextData_ = function () {
                            var a = null;
                            arguments.length > 1 && (a = arguments[1]), this.trigger("textdata", a)
                        }, c.prototype.getCache = function () {
                            return this.cache_
                        }, c.prototype.techCall_ = function (a, b) {
                            this.ready(function () {
                                if (a in ne) return function (a, b, c, d) {
                                    return b[c](a.reduce(pe(c), d))
                                }(this.middleware_, this.tech_, a, b);
                                if (a in oe) return le(this.middleware_, this.tech_, a, b);
                                try {
                                    this.tech_ && this.tech_[a](b)
                                } catch (a) {
                                    throw Z(a), a
                                }
                            }, !0)
                        }, c.prototype.techGet_ = function (a) {
                            if (this.tech_ && this.tech_.isReady_) {
                                if (a in me) return function (a, b, c) {
                                    return a.reduceRight(pe(c), b[c]())
                                }(this.middleware_, this.tech_, a);
                                if (a in oe) return le(this.middleware_, this.tech_, a);
                                try {
                                    return this.tech_[a]()
                                } catch (b) {
                                    if (void 0 === this.tech_[a]) throw Z("Video.js: " + a + " method not defined for " + this.techName_ + " playback technology.", b), b;
                                    if ("TypeError" === b.name) throw Z("Video.js: " + a + " unavailable on " + this.techName_ + " playback technology element.", b), this.tech_.isReady_ = !1, b;
                                    throw Z(b), b
                                }
                            }
                        }, c.prototype.play = function () {
                            var a = this;
                            if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
                                if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
                                this.playOnLoadstart_ = function () {
                                    a.playOnLoadstart_ = null, Jc(a.play())
                                }, this.one("loadstart", this.playOnLoadstart_)
                            } else {
                                if (this.playWaitingForReady_) return;
                                this.playWaitingForReady_ = !0, this.ready(function () {
                                    a.playWaitingForReady_ = !1, Jc(a.play())
                                })
                            }
                        }, c.prototype.pause = function () {
                            this.techCall_("pause")
                        }, c.prototype.paused = function () {
                            return !1 !== this.techGet_("paused")
                        }, c.prototype.played = function () {
                            return this.techGet_("played") || xc(0, 0)
                        }, c.prototype.scrubbing = function (a) {
                            return void 0 === a ? this.scrubbing_ : (this.scrubbing_ = !!a, void (a ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")))
                        }, c.prototype.currentTime = function (a) {
                            return void 0 !== a ? (a < 0 && (a = 0), void this.techCall_("setCurrentTime", a)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                        }, c.prototype.duration = function (a) {
                            return void 0 === a ? void 0 !== this.cache_.duration ? this.cache_.duration : 0 / 0 : ((a = parseFloat(a)) < 0 && (a = 1 / 0), void (a !== this.cache_.duration && (this.cache_.duration = a, a === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))))
                        }, c.prototype.remainingTime = function () {
                            return this.duration() - this.currentTime()
                        }, c.prototype.remainingTimeDisplay = function () {
                            return Math.floor(this.duration()) - Math.floor(this.currentTime())
                        }, c.prototype.buffered = function () {
                            var a = this.techGet_("buffered");
                            return a && a.length || (a = xc(0, 0)), a
                        }, c.prototype.bufferedPercent = function () {
                            return yc(this.buffered(), this.duration())
                        }, c.prototype.bufferedEnd = function () {
                            var a = this.buffered(), b = this.duration(), c = a.end(a.length - 1);
                            return c > b && (c = b), c
                        }, c.prototype.volume = function (a) {
                            var b = void 0;
                            return void 0 !== a ? (b = Math.max(0, Math.min(1, parseFloat(a))), this.cache_.volume = b, this.techCall_("setVolume", b), void (b > 0 && this.lastVolume_(b))) : (b = parseFloat(this.techGet_("volume")), isNaN(b) ? 1 : b)
                        }, c.prototype.muted = function (a) {
                            return void 0 === a ? this.techGet_("muted") || !1 : void this.techCall_("setMuted", a)
                        }, c.prototype.defaultMuted = function (a) {
                            return void 0 !== a ? this.techCall_("setDefaultMuted", a) : this.techGet_("defaultMuted") || !1
                        }, c.prototype.lastVolume_ = function (a) {
                            return void 0 === a || 0 === a ? this.cache_.lastVolume : void (this.cache_.lastVolume = a)
                        }, c.prototype.supportsFullScreen = function () {
                            return this.techGet_("supportsFullScreen") || !1
                        }, c.prototype.isFullscreen = function (a) {
                            return void 0 === a ? !!this.isFullscreen_ : void (this.isFullscreen_ = !!a)
                        }, c.prototype.requestFullscreen = function () {
                            var a = zc;
                            this.isFullscreen(!0), a.requestFullscreen ? (Ub(m, a.fullscreenchange, dc(this, function b() {
                                this.isFullscreen(m[a.fullscreenElement]), !1 === this.isFullscreen() && Vb(m, a.fullscreenchange, b), this.trigger("fullscreenchange")
                            })), this.el_[a.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
                        }, c.prototype.exitFullscreen = function () {
                            var a = zc;
                            this.isFullscreen(!1), a.requestFullscreen ? m[a.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
                        }, c.prototype.enterFullWindow = function () {
                            this.isFullWindow = !0, this.docOrigOverflow = m.documentElement.style.overflow, Ub(m, "keydown", dc(this, this.fullWindowOnEscKey)), m.documentElement.style.overflow = "hidden", mb(m.body, "vjs-full-window"), this.trigger("enterFullWindow")
                        }, c.prototype.fullWindowOnEscKey = function (a) {
                            27 === a.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                        }, c.prototype.exitFullWindow = function () {
                            this.isFullWindow = !1, Vb(m, "keydown", this.fullWindowOnEscKey), m.documentElement.style.overflow = this.docOrigOverflow, nb(m.body, "vjs-full-window"), this.trigger("exitFullWindow")
                        }, c.prototype.canPlayType = function (a) {
                            for (var b = void 0, c = 0, d = this.options_.techOrder; c < d.length; c++) {
                                var e = d[c], f = ge.getTech(e);
                                if (f || (f = uc.getComponent(e)), f) {
                                    if (f.isSupported() && (b = f.canPlayType(a))) return b
                                } else Z.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.')
                            }
                            return ""
                        }, c.prototype.selectSource = function (a) {
                            var b, c = this, d = this.options_.techOrder.map(function (a) {
                                return [a, ge.getTech(a)]
                            }).filter(function (a) {
                                var b = a[0], c = a[1];
                                return c ? c.isSupported() : (Z.error('The "' + b + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }), e = function (a, b, c) {
                                var d = void 0;
                                return a.some(function (a) {
                                    return b.some(function (b) {
                                        return (d = c(a, b)) ? !0 : void 0
                                    })
                                }), d
                            }, f = function (a, b) {
                                var d = a[0];
                                return a[1].canPlaySource(b, c.options_[d.toLowerCase()]) ? {
                                    source: b,
                                    tech: d
                                } : void 0
                            };
                            return (this.options_.sourceOrder ? e(a, d, (b = f, function (a, c) {
                                return b(c, a)
                            })) : e(d, a, f)) || !1
                        }, c.prototype.src = function (a) {
                            var b = this;
                            if (void 0 === a) return this.cache_.src || "";
                            var c = function d(a) {
                                if (Array.isArray(a)) {
                                    var b = [];
                                    a.forEach(function (a) {
                                        a = d(a), Array.isArray(a) ? b = b.concat(a) : T(a) && b.push(a)
                                    }), a = b
                                } else a = "string" == typeof a && a.trim() ? [se({src: a})] : T(a) && "string" == typeof a.src && a.src && a.src.trim() ? [se(a)] : [];
                                return a
                            }(a);
                            c.length ? (this.changingSrc_ = !0, this.cache_.sources = c, this.updateSourceCaches_(c[0]), ke(this, c[0], function (a, d) {
                                var e, f;
                                return b.middleware_ = d, b.cache_.sources = c, b.updateSourceCaches_(a), b.src_(a) ? c.length > 1 ? b.src(c.slice(1)) : (b.changingSrc_ = !1, b.setTimeout(function () {
                                    this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                                }, 0), void b.triggerReady()) : (e = d, f = b.tech_, e.forEach(function (a) {
                                    return a.setTech && a.setTech(f)
                                }), void 0)
                            })) : this.setTimeout(function () {
                                this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
                            }, 0)
                        }, c.prototype.src_ = function (a) {
                            var b, c, d = this, e = this.selectSource([a]);
                            return !e || (b = e.tech, c = this.techName_, sc(b) !== sc(c) ? (this.changingSrc_ = !0, this.loadTech_(e.tech, e.source), this.tech_.ready(function () {
                                d.changingSrc_ = !1
                            }), !1) : (this.ready(function () {
                                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", a) : this.techCall_("src", a.src), this.changingSrc_ = !1
                            }, !0), !1))
                        }, c.prototype.load = function () {
                            this.techCall_("load")
                        }, c.prototype.reset = function () {
                            this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
                        }, c.prototype.currentSources = function () {
                            var a = this.currentSource(), b = [];
                            return 0 !== Object.keys(a).length && b.push(a), this.cache_.sources || b
                        }, c.prototype.currentSource = function () {
                            return this.cache_.source || {}
                        }, c.prototype.currentSrc = function () {
                            return this.currentSource() && this.currentSource().src || ""
                        }, c.prototype.currentType = function () {
                            return this.currentSource() && this.currentSource().type || ""
                        }, c.prototype.preload = function (a) {
                            return void 0 !== a ? (this.techCall_("setPreload", a), void (this.options_.preload = a)) : this.techGet_("preload")
                        }, c.prototype.autoplay = function (a) {
                            if (void 0 === a) return this.options_.autoplay || !1;
                            var b = void 0;
                            "string" == typeof a && /(any|play|muted)/.test(a) ? (this.options_.autoplay = a, this.manualAutoplay_(a), b = !1) : this.options_.autoplay = !!a, b = b || this.options_.autoplay, this.tech_ && this.techCall_("setAutoplay", b)
                        }, c.prototype.playsinline = function (a) {
                            return void 0 !== a ? (this.techCall_("setPlaysinline", a), this.options_.playsinline = a, this) : this.techGet_("playsinline")
                        }, c.prototype.loop = function (a) {
                            return void 0 !== a ? (this.techCall_("setLoop", a), void (this.options_.loop = a)) : this.techGet_("loop")
                        }, c.prototype.poster = function (a) {
                            return void 0 === a ? this.poster_ : (a || (a = ""), void (a !== this.poster_ && (this.poster_ = a, this.techCall_("setPoster", a), this.isPosterFromTech_ = !1, this.trigger("posterchange"))))
                        }, c.prototype.handleTechPosterChange_ = function () {
                            if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                                var a = this.tech_.poster() || "";
                                a !== this.poster_ && (this.poster_ = a, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                            }
                        }, c.prototype.controls = function (a) {
                            return void 0 === a ? !!this.controls_ : (a = !!a, void (this.controls_ !== a && (this.controls_ = a, this.usingNativeControls() && this.techCall_("setControls", a), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))))
                        }, c.prototype.usingNativeControls = function (a) {
                            return void 0 === a ? !!this.usingNativeControls_ : (a = !!a, void (this.usingNativeControls_ !== a && (this.usingNativeControls_ = a, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))))
                        }, c.prototype.error = function (a) {
                            return void 0 === a ? this.error_ || null : null === a ? (this.error_ = a, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Fc(a), this.addClass("vjs-error"), Z.error("(CODE:" + this.error_.code + " " + Fc.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
                        }, c.prototype.reportUserActivity = function () {
                            this.userActivity_ = !0
                        }, c.prototype.userActive = function (a) {
                            if (void 0 === a) return this.userActive_;
                            if ((a = !!a) !== this.userActive_) {
                                if (this.userActive_ = a, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                                this.tech_ && this.tech_.one("mousemove", function (a) {
                                    a.stopPropagation(), a.preventDefault()
                                }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                            }
                        }, c.prototype.listenForUserActivity_ = function () {
                            var a = void 0, b = void 0, c = void 0, d = dc(this, this.reportUserActivity);
                            this.on("mousedown", function () {
                                d(), this.clearInterval(a), a = this.setInterval(d, 250)
                            }), this.on("mousemove", function (a) {
                                a.screenX === b && a.screenY === c || (b = a.screenX, c = a.screenY, d())
                            }), this.on("mouseup", function () {
                                d(), this.clearInterval(a)
                            }), this.on("keydown", d), this.on("keyup", d);
                            var e = void 0;
                            this.setInterval(function () {
                                if (this.userActivity_) {
                                    this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(e);
                                    var a = this.options_.inactivityTimeout;
                                    a <= 0 || (e = this.setTimeout(function () {
                                        this.userActivity_ || this.userActive(!1)
                                    }, a))
                                }
                            }, 250)
                        }, c.prototype.playbackRate = function (a) {
                            return void 0 === a ? this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1 : void this.techCall_("setPlaybackRate", a)
                        }, c.prototype.defaultPlaybackRate = function (a) {
                            return void 0 !== a ? this.techCall_("setDefaultPlaybackRate", a) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                        }, c.prototype.isAudio = function (a) {
                            return void 0 === a ? !!this.isAudio_ : void (this.isAudio_ = !!a)
                        }, c.prototype.addTextTrack = function (a, b, c) {
                            return this.tech_ ? this.tech_.addTextTrack(a, b, c) : void 0
                        }, c.prototype.addRemoteTextTrack = function (a, b) {
                            return this.tech_ ? this.tech_.addRemoteTextTrack(a, b) : void 0
                        }, c.prototype.removeRemoteTextTrack = function () {
                            var a = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).track,
                                b = void 0 === a ? arguments[0] : a;
                            return this.tech_ ? this.tech_.removeRemoteTextTrack(b) : void 0
                        }, c.prototype.getVideoPlaybackQuality = function () {
                            return this.techGet_("getVideoPlaybackQuality")
                        }, c.prototype.videoWidth = function () {
                            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                        }, c.prototype.videoHeight = function () {
                            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                        }, c.prototype.language = function (a) {
                            return void 0 === a ? this.language_ : void (this.language_ = String(a).toLowerCase())
                        }, c.prototype.languages = function () {
                            return tc(c.prototype.options_.languages, this.languages_)
                        },c.prototype.toJSON = function () {
                            var a = tc(this.options_), b = a.tracks;
                            a.tracks = [];
                            for (var c = 0; c < b.length; c++) {
                                var d = b[c];
                                (d = tc(d)).player = void 0, a.tracks[c] = d
                            }
                            return a
                        },c.prototype.createModal = function (a, b) {
                            var c = this;
                            (b = b || {}).content = a || "";
                            var d = new Oc(this, b);
                            return this.addChild(d), d.on("dispose", function () {
                                c.removeChild(d)
                            }), d.open(), d
                        },c.getTagSettings = function (a) {
                            var b = {sources: [], tracks: []}, c = qb(a), d = c["data-setup"];
                            if (lb(a, "vjs-fluid") && (c.fluid = !0), null !== d) {
                                var e = Hc(d || "{}"), f = e[0], g = e[1];
                                f && Z.error(f), S(c, g)
                            }
                            if (S(b, c), a.hasChildNodes()) for (var h = a.childNodes, i = 0, j = h.length; i < j; i++) {
                                var k = h[i], l = k.nodeName.toLowerCase();
                                "source" === l ? b.sources.push(qb(k)) : "track" === l && b.tracks.push(qb(k))
                            }
                            return b
                        },c.prototype.flexNotSupported_ = function () {
                            var a = m.createElement("i");
                            return !("flexBasis" in a.style || "webkitFlexBasis" in a.style || "mozFlexBasis" in a.style || "msFlexBasis" in a.style || "msFlexOrder" in a.style)
                        },c
                    }(uc);
                Dd.names.forEach(function (a) {
                    var b = Dd[a];
                    bg.prototype[b.getterName] = function () {
                        return this.tech_ ? this.tech_[b.getterName]() : (this[b.privateName] = this[b.privateName] || new b.ListClass, this[b.privateName])
                    }
                }), bg.players = {};
                var cg = f.navigator;
                bg.prototype.options_ = {
                    techOrder: ge.defaultTechOrder_,
                    html5: {},
                    flash: {},
                    inactivityTimeout: 2e3,
                    playbackRates: [],
                    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                    language: cg && (cg.languages && cg.languages[0] || cg.userLanguage || cg.language) || "en",
                    languages: {},
                    notSupportedMessage: "No compatible source was found for this media."
                }, D || bg.prototype.options_.children.push("resizeManager"), ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (a) {
                    bg.prototype[a] = function () {
                        return this.techGet_(a)
                    }
                }), _f.forEach(function (a) {
                    bg.prototype["handleTech" + sc(a) + "_"] = function () {
                        return this.trigger(a)
                    }
                }), uc.registerComponent("Player", bg);
                var dg = {}, eg = function (a) {
                    return dg.hasOwnProperty(a)
                }, fg = function (a) {
                    return eg(a) ? dg[a] : void 0
                }, gg = function (a, b) {
                    a.activePlugins_ = a.activePlugins_ || {}, a.activePlugins_[b] = !0
                }, hg = function (a, b, c) {
                    var d = (c ? "before" : "") + "pluginsetup";
                    a.trigger(d, b), a.trigger(d + ":" + b.name, b)
                }, ig = function (a, b) {
                    return b.prototype.name = a, function () {
                        hg(this, {name: a, plugin: b, instance: null}, !0);
                        for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                        var f = new (Function.prototype.bind.apply(b, [null].concat([this].concat(d))));
                        return this[a] = function () {
                            return f
                        }, hg(this, f.getEventHash()), f
                    }
                }, jg = function () {
                    function a(b) {
                        if (L(this, a), this.constructor === a) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                        this.player = b, pc(this), delete this.trigger, rc(this, this.constructor.defaultState), gg(b, this.name), this.dispose = dc(this, this.dispose), b.on("dispose", this.dispose)
                    }

                    return a.prototype.version = function () {
                        return this.constructor.VERSION
                    }, a.prototype.getEventHash = function () {
                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return a.name = this.name, a.plugin = this.constructor, a.instance = this, a
                    }, a.prototype.trigger = function (a) {
                        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Wb(this.eventBusEl_, a, this.getEventHash(b))
                    }, a.prototype.handleStateChanged = function () {
                    }, a.prototype.dispose = function () {
                        var a = this.name, b = this.player;
                        this.trigger("dispose"), this.off(), b.off("dispose", this.dispose), b.activePlugins_[a] = !1, this.player = this.state = null, b[a] = ig(a, dg[a])
                    }, a.isBasic = function (b) {
                        var c = "string" == typeof b ? fg(b) : b;
                        return "function" == typeof c && !a.prototype.isPrototypeOf(c.prototype)
                    }, a.registerPlugin = function (b, c) {
                        if ("string" != typeof b) throw new Error('Illegal plugin name, "' + b + '", must be a string, was ' + (void 0 === b ? "undefined" : K(b)) + ".");
                        if (eg(b)) Z.warn('A plugin named "' + b + '" already exists. You may want to avoid re-registering plugins!'); else if (bg.prototype.hasOwnProperty(b)) throw new Error('Illegal plugin name, "' + b + '", cannot share a name with an existing player method!');
                        if ("function" != typeof c) throw new Error('Illegal plugin for "' + b + '", must be a function, was ' + (void 0 === c ? "undefined" : K(c)) + ".");
                        return dg[b] = c, "plugin" !== b && (bg.prototype[b] = a.isBasic(c) ? function (a, b) {
                            var c = function () {
                                hg(this, {name: a, plugin: b, instance: null}, !0);
                                var c = b.apply(this, arguments);
                                return gg(this, a), hg(this, {name: a, plugin: b, instance: c}), c
                            };
                            return Object.keys(b).forEach(function (a) {
                                c[a] = b[a]
                            }), c
                        }(b, c) : ig(b, c)), c
                    }, a.deregisterPlugin = function (a) {
                        if ("plugin" === a) throw new Error("Cannot de-register base plugin.");
                        eg(a) && (delete dg[a], delete bg.prototype[a])
                    }, a.getPlugins = function () {
                        var a = void 0;
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.keys(dg)).forEach(function (b) {
                            var c = fg(b);
                            c && ((a = a || {})[b] = c)
                        }), a
                    }, a.getPluginVersion = function (a) {
                        var b = fg(a);
                        return b && b.VERSION || ""
                    }, a
                }();
                jg.getPlugin = fg, jg.BASE_PLUGIN_NAME = "plugin", jg.registerPlugin("plugin", jg), bg.prototype.usingPlugin = function (a) {
                    return !!this.activePlugins_ && !0 === this.activePlugins_[a]
                }, bg.prototype.hasPlugin = function (a) {
                    return !!eg(a)
                }, "undefined" == typeof HTMLVideoElement && eb() && (m.createElement("video"), m.createElement("audio"), m.createElement("track"), m.createElement("video-js"));
                var kg = function (a) {
                    return 0 === a.indexOf("#") ? a.slice(1) : a
                };
                if (lg.hooks_ = {}, lg.hooks = function (a, b) {
                    return lg.hooks_[a] = lg.hooks_[a] || [], b && (lg.hooks_[a] = lg.hooks_[a].concat(b)), lg.hooks_[a]
                }, lg.hook = function (a, b) {
                    lg.hooks(a, b)
                }, lg.hookOnce = function (a, b) {
                    lg.hooks(a, [].concat(b).map(function (b) {
                        return function c() {
                            return lg.removeHook(a, c), b.apply(void 0, arguments)
                        }
                    }))
                }, lg.removeHook = function (a, b) {
                    var c = lg.hooks(a).indexOf(b);
                    return !(c <= -1) && (lg.hooks_[a] = lg.hooks_[a].slice(), lg.hooks_[a].splice(c, 1), !0)
                }, !0 !== f.VIDEOJS_NO_DYNAMIC_STYLE && eb()) {
                    var mg = Fb(".vjs-styles-defaults");
                    if (!mg) {
                        mg = bc("vjs-styles-defaults");
                        var ng = Fb("head");
                        ng && ng.insertBefore(mg, ng.firstChild), cc(mg, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                    }
                }
                return ac(1, lg), lg.VERSION = a, lg.options = bg.prototype.options_, lg.getPlayers = function () {
                    return bg.players
                }, lg.getPlayer = function (a) {
                    var b = bg.players, c = void 0;
                    if ("string" == typeof a) {
                        var d = kg(a), e = b[d];
                        if (e) return e;
                        c = Fb("#" + d)
                    } else c = a;
                    if (fb(c)) {
                        var f = c, g = f.player, h = f.playerId;
                        if (g || b[h]) return g || b[h]
                    }
                }, lg.getAllPlayers = function () {
                    return Object.keys(bg.players).map(function (a) {
                        return bg.players[a]
                    }).filter(Boolean)
                }, lg.players = bg.players, lg.getComponent = uc.getComponent, lg.registerComponent = function (a, b) {
                    ge.isTech(b) && Z.warn("The " + a + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), uc.registerComponent.call(uc, a, b)
                }, lg.getTech = ge.getTech, lg.registerTech = ge.registerTech, lg.use = function (a, b) {
                    he[a] = he[a] || [], he[a].push(b)
                }, !D && Object.defineProperty ? (Object.defineProperty(lg, "middleware", {
                    value: {},
                    writeable: !1,
                    enumerable: !0
                }), Object.defineProperty(lg.middleware, "TERMINATOR", {
                    value: je,
                    writeable: !1,
                    enumerable: !0
                })) : lg.middleware = {TERMINATOR: je}, lg.browser = J, lg.TOUCH_ENABLED = H, lg.extend = function (a) {
                    var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = function () {
                        a.apply(this, arguments)
                    }, d = {};
                    for (var e in "object" === (void 0 === b ? "undefined" : K(b)) ? (b.constructor !== Object.prototype.constructor && (c = b.constructor), d = b) : "function" == typeof b && (c = b), function (a, b) {
                        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === b ? "undefined" : K(b)));
                        a.prototype = Object.create(b && b.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), b && (a.super_ = b)
                    }(c, a), d) d.hasOwnProperty(e) && (c.prototype[e] = d[e]);
                    return c
                }, lg.mergeOptions = tc, lg.bind = dc, lg.registerPlugin = jg.registerPlugin, lg.plugin = function (a, b) {
                    return Z.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), jg.registerPlugin(a, b)
                }, lg.getPlugins = jg.getPlugins, lg.getPlugin = jg.getPlugin, lg.getPluginVersion = jg.getPluginVersion, lg.addLanguage = function (a, b) {
                    var c;
                    return a = ("" + a).toLowerCase(), lg.options.languages = tc(lg.options.languages, ((c = {})[a] = b, c)), lg.options.languages[a]
                }, lg.log = Z, lg.createTimeRange = lg.createTimeRanges = xc, lg.formatTime = He, lg.setFormatTime = function (a) {
                    Ge = a
                }, lg.resetFormatTime = function () {
                    Ge = Fe
                }, lg.parseUrl = bd, lg.isCrossOrigin = ed, lg.EventTarget = gc, lg.on = Ub, lg.one = Xb, lg.off = Vb, lg.trigger = Wb, lg.xhr = pd, lg.TextTrack = vd, lg.AudioTrack = wd, lg.VideoTrack = xd, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (a) {
                    lg[a] = function () {
                        return Z.warn("videojs." + a + "() is deprecated; use videojs.dom." + a + "() instead"), Hb[a].apply(null, arguments)
                    }
                }), lg.computedStyle = ab, lg.dom = Hb, lg.url = fd, lg
            }, "object" === h(b) && void 0 !== a ? a.exports = g() : void 0 === (f = "function" == typeof (e = g) ? e.call(b, c, b, a) : e) || (a.exports = f)
        }).call(b, c("DuR2"))
    }
});

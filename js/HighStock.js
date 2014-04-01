﻿/*
 Highstock JS v1.3.9 (2014-01-15)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function () {
    function u(a, b) { var c; a || (a = {}); for (c in b) a[c] = b[c]; return a } function w() { var a, b = arguments, c, d = {}, e = function (a, b) { var c, d; typeof a !== "object" && (a = {}); for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]); return a }; b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2)); c = b.length; for (a = 0; a < c; a++) d = e(d, b[a]); return d } function gb() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a <
        c; a++) d[b[a++]] = b[a]; return d
    } function E(a, b) { return parseInt(a, b || 10) } function ma(a) { return typeof a === "string" } function aa(a) { return typeof a === "object" } function Pa(a) { return Object.prototype.toString.call(a) === "[object Array]" } function ua(a) { return typeof a === "number" } function Ea(a) { return T.log(a) / T.LN10 } function na(a) { return T.pow(10, a) } function oa(a, b) { for (var c = a.length; c--;) if (a[c] === b) { a.splice(c, 1); break } } function t(a) { return a !== r && a !== null } function H(a, b, c) {
        var d, e; if (ma(b)) t(c) ? a.setAttribute(b,
        c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (t(b) && aa(b)) for (d in b) a.setAttribute(d, b[d]); return e
    } function ja(a) { return Pa(a) ? a : [a] } function o() { var a = arguments, b, c, d = a.length; for (b = 0; b < d; b++) if (c = a[b], typeof c !== "undefined" && c !== null) return c } function z(a, b) { if (Fa && b && b.opacity !== r) b.filter = "alpha(opacity=" + b.opacity * 100 + ")"; u(a.style, b) } function Z(a, b, c, d, e) { a = F.createElement(a); b && u(a, b); e && z(a, { padding: 0, border: ba, margin: 0 }); c && z(a, c); d && d.appendChild(a); return a } function ea(a, b) {
        var c =
        function () { }; c.prototype = new a; u(c.prototype, b); return c
    } function Ga(a, b, c, d) { var e = L.lang, a = +a || 0, f = b === -1 ? (a.toString().split(".")[1] || "").length : isNaN(b = O(b)) ? 2 : b, b = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = a < 0 ? "-" : "", c = String(E(a = O(a).toFixed(f))), g = c.length > 3 ? c.length % 3 : 0; return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + O(a - c).toFixed(f).slice(2) : "") } function Qa(a, b) { return Array((b || 2) + 1 - String(a).length).join(0) + a } function U(a, b, c) {
        var d = a[b];
        a[b] = function () { var a = Array.prototype.slice.call(arguments); a.unshift(d); return c.apply(this, a) }
    } function Ha(a, b) { for (var c = "{", d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1;) { e = a.slice(0, c); if (d) { f = e.split(":"); g = f.shift().split("."); i = g.length; e = b; for (h = 0; h < i; h++) e = e[g[h]]; if (f.length) f = f.join(":"), g = /\.([0-9])/, h = L.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e = Ga(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : "")) : e = ra(f, e) } j.push(e); a = a.slice(c + 1); c = (d = !d) ? "}" : "{" } j.push(a); return j.join("") }
    function tb(a) { return T.pow(10, Q(T.log(a) / T.LN10)) } function ub(a, b, c, d) { var e, c = o(c, 1); e = a / c; b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c]))); for (d = 0; d < b.length; d++) if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) break; a *= c; return a } function Kb() { this.symbol = this.color = 0 } function vb(a, b) { var c = a.length, d, e; for (e = 0; e < c; e++) a[e].ss_i = e; a.sort(function (a, c) { d = b(a, c); return d === 0 ? a.ss_i - c.ss_i : d }); for (e = 0; e < c; e++) delete a[e].ss_i } function Ra(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] <
        c && (c = a[b]); return c
    } function va(a) { for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]); return c } function Ia(a, b) { for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c] } function Sa(a) { hb || (hb = Z(Ta)); a && hb.appendChild(a); hb.innerHTML = "" } function pa(a, b) { var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a; if (b) throw c; else V.console && console.log(c) } function ga(a) { return parseFloat(a.toPrecision(14)) } function Xa(a, b) { wa = o(a, b.animation) } function Lb() {
        var a = L.global.useUTC, b = a ?
        "getUTC" : "get", c = a ? "setUTC" : "set"; Ja = (a && L.global.timezoneOffset || 0) * 6E4; ib = a ? Date.UTC : function (a, b, c, g, h, i) { return (new Date(a, b, o(c, 1), o(g, 0), o(h, 0), o(i, 0))).getTime() }; wb = b + "Minutes"; xb = b + "Hours"; yb = b + "Day"; Ua = b + "Date"; jb = b + "Month"; kb = b + "FullYear"; Mb = c + "Minutes"; Nb = c + "Hours"; zb = c + "Date"; Ob = c + "Month"; Pb = c + "FullYear"
    } function xa() { } function Ya(a, b, c, d) { this.axis = a; this.pos = b; this.type = c || ""; this.isNew = !0; !c && !d && this.addLabel() } function Qb(a, b, c, d, e, f) {
        var g = a.chart.inverted; this.axis = a; this.isNegative =
        c; this.options = b; this.x = d; this.total = null; this.points = {}; this.stack = e; this.percent = f === "percent"; this.alignOptions = { align: b.align || (g ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (g ? "middle" : c ? "bottom" : "top"), y: o(b.y, g ? 4 : c ? 14 : -6), x: o(b.x, g ? c ? -6 : 6 : 0) }; this.textAlign = b.textAlign || (g ? c ? "right" : "left" : "center")
    } function W() { this.init.apply(this, arguments) } function Ab() { this.init.apply(this, arguments) } function ya() { this.init.apply(this, arguments) } function Bb(a) {
        var b = a.options, c = b.navigator,
        d = c.enabled, b = b.scrollbar, e = b.enabled, f = d ? c.height : 0, g = e ? b.height : 0; this.handles = []; this.scrollbarButtons = []; this.elementsToDestroy = []; this.chart = a; this.setBaseSeries(); this.height = f; this.scrollbarHeight = g; this.scrollbarEnabled = e; this.navigatorEnabled = d; this.navigatorOptions = c; this.scrollbarOptions = b; this.outlineHeight = f + g; this.init()
    } function Cb(a) { this.init(a) } var r, F = document, V = window, T = Math, v = T.round, Q = T.floor, Va = T.ceil, s = T.max, y = T.min, O = T.abs, ca = T.cos, ha = T.sin, Ka = T.PI, La = Ka * 2 / 360, za = navigator.userAgent,
    Rb = V.opera, Fa = /msie/i.test(za) && !Rb, lb = F.documentMode === 8, mb = /AppleWebKit/.test(za), bb = /Firefox/.test(za), cb = /(Mobile|Android|Windows Phone)/.test(za), Ma = "http://www.w3.org/2000/svg", da = !!F.createElementNS && !!F.createElementNS(Ma, "svg").createSVGRect, Yb = bb && parseInt(za.split("Firefox/")[1], 10) < 4, ka = !da && !Fa && !!F.createElement("canvas").getContext, Za, db = F.documentElement.ontouchstart !== r, Sb = {}, Db = 0, hb, L, ra, wa, Eb, B, la = function () { }, Wa = [], Ta = "div", ba = "none", Zb = /^[0-9]+$/, Tb = "rgba(192,192,192," + (da ? 1.0E-4 :
    0.002) + ")", Ub = "stroke-width", ib, Ja, wb, xb, yb, Ua, jb, kb, Mb, Nb, zb, Ob, Pb, D = {}; V.Highcharts = V.Highcharts ? pa(16, !0) : {}; ra = function (a, b, c) {
        if (!t(b) || isNaN(b)) return "Invalid date"; var a = o(a, "%Y-%m-%d %H:%M:%S"), d = new Date(b - Ja), e, f = d[xb](), g = d[yb](), h = d[Ua](), i = d[jb](), j = d[kb](), k = L.lang, l = k.weekdays, d = u({
            a: l[g].substr(0, 3), A: l[g], d: Qa(h), e: h, b: k.shortMonths[i], B: k.months[i], m: Qa(i + 1), y: j.toString().substr(2, 2), Y: j, H: Qa(f), I: Qa(f % 12 || 12), l: f % 12 || 12, M: Qa(d[wb]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: Qa(d.getSeconds()),
            L: Qa(v(b % 1E3), 3)
        }, Highcharts.dateFormats); for (e in d) for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]); return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    }; Kb.prototype = { wrapColor: function (a) { if (this.color >= a) this.color = 0 }, wrapSymbol: function (a) { if (this.symbol >= a) this.symbol = 0 } }; B = gb("millisecond", 1, "second", 1E3, "minute", 6E4, "hour", 36E5, "day", 864E5, "week", 6048E5, "month", 26784E5, "year", 31556952E3); Eb = {
        init: function (a, b, c) {
            var b = b || "", d = a.shift, e = b.indexOf("C") > -1,
            f = e ? 7 : 3, g, b = b.split(" "), c = [].concat(c), h, i, j = function (a) { for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]) }; e && (j(b), j(c)); a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6)); if (d <= c.length / f && b.length === c.length) for (; d--;) c = [].concat(c).splice(0, f).concat(c); a.shift = 0; if (b.length) for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d); h && (b = b.concat(h), c = c.concat(i)); return [b, c]
        }, step: function (a, b, c, d) {
            var e =
            [], f = a.length; if (c === 1) e = d; else if (f === b.length && c < 1) for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b; return e
        }
    }; (function (a) {
        V.HighchartsAdapter = V.HighchartsAdapter || a && {
            init: function (b) {
                var c = a.fx, d = c.step, e, f = a.Tween, g = f && f.propHooks; e = a.cssHooks.opacity; a.extend(a.easing, { easeOutQuad: function (a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c } }); a.each(["cur", "_default", "width", "height", "opacity"], function (a, b) {
                    var e = d, k; b === "cur" ? e = c.prototype : b === "_default" && f && (e = g[b], b = "set");
                    (k = e[b]) && (e[b] = function (c) { var d, c = a ? c : this; if (c.prop !== "align") return d = c.elem, d.attr ? d.attr(c.prop, b === "cur" ? r : c.now) : k.apply(this, arguments) })
                }); U(e, "get", function (a, b, c) { return b.attr ? b.opacity || 0 : a.call(this, b, c) }); e = function (a) { var c = a.elem, d; if (!a.started) d = b.init(c, c.d, c.toD), a.start = d[0], a.end = d[1], a.started = !0; c.attr("d", b.step(a.start, a.end, a.pos, c.toD)) }; f ? g.d = { set: e } : d.d = e; this.each = Array.prototype.forEach ? function (a, b) { return Array.prototype.forEach.call(a, b) } : function (a, b) {
                    for (var c =
                    0, d = a.length; c < d; c++) if (b.call(a[c], a[c], c, a) === !1) return c
                }; a.fn.highcharts = function () { var a = "Chart", b = arguments, c, d; ma(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)); c = b[0]; if (c !== r) c.chart = c.chart || {}, c.chart.renderTo = this[0], new Highcharts[a](c, b[1]), d = this; c === r && (d = Wa[H(this[0], "data-highcharts-chart")]); return d }
            }, getScript: a.getScript, inArray: a.inArray, adapterRun: function (b, c) { return a(b)[c]() }, grep: a.grep, map: function (a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            }, offset: function (b) { return a(b).offset() }, addEvent: function (b, c, d) { a(b).bind(c, d) }, removeEvent: function (b, c, d) { var e = F.removeEventListener ? "removeEventListener" : "detachEvent"; F[e] && b && !b[e] && (b[e] = function () { }); a(b).unbind(c, d) }, fireEvent: function (b, c, d, e) {
                var f = a.Event(c), g = "detached" + c, h; !Fa && d && (delete d.layerX, delete d.layerY); u(f, d); b[c] && (b[g] = b[c], b[c] = null); a.each(["preventDefault", "stopPropagation"], function (a, b) {
                    var c = f[b]; f[b] = function () {
                        try { c.call(f) } catch (a) {
                            b === "preventDefault" &&
                            (h = !0)
                        }
                    }
                }); a(b).trigger(f); b[g] && (b[c] = b[g], b[g] = null); e && !f.isDefaultPrevented() && !h && e(f)
            }, washMouseEvent: function (a) { var c = a.originalEvent || a; if (c.pageX === r) c.pageX = a.pageX, c.pageY = a.pageY; return c }, animate: function (b, c, d) { var e = a(b); if (!b.style) b.style = {}; if (c.d) b.toD = c.d, c.d = 1; e.stop(); c.opacity !== r && b.attr && (c.opacity += "px"); e.animate(c, d) }, stop: function (b) { a(b).stop() }
        }
    })(V.jQuery); var R = V.HighchartsAdapter, K = R || {}; R && R.init.call(R, Eb); var nb = K.adapterRun, $b = K.getScript, Aa = K.inArray, q = K.each,
    Fb = K.grep, ac = K.offset, Na = K.map, A = K.addEvent, X = K.removeEvent, N = K.fireEvent, bc = K.washMouseEvent, ob = K.animate, eb = K.stop, K = { enabled: !0, x: 0, y: 15, style: { color: "#666", cursor: "default", fontSize: "11px" } }; L = {
        colors: "#2f7ed8,#0d233a,#8bbc21,#910000,#1aadce,#492970,#f28f43,#77a1e5,#c42525,#a6c96a".split(","), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
            loading: "Loading...", months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), decimalPoint: ".", numericSymbols: "k,M,G,T,P,E".split(","), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","
        }, global: { useUTC: !0, canvasToolsURL: "http://code.highcharts.com/stock/1.3.9/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com/stock/1.3.9/gfx/vml-radial-gradient.png" }, chart: {
            borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10,
            10, 15, 10], style: { fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px" }, backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }
        }, title: { text: "Chart title", align: "center", margin: 15, style: { color: "#274b6d", fontSize: "16px" } }, subtitle: { text: "", align: "center", style: { color: "#4d759e" } }, plotOptions: {
            line: {
                allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2,
                marker: { enabled: !0, lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: { hover: { enabled: !0 }, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: w(K, { align: "center", enabled: !1, formatter: function () { return this.y === null ? "" : Ga(this.y, -1) }, verticalAlign: "bottom", y: 0 }), cropThreshold: 300, pointRange: 0, states: { hover: { marker: {} }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3
            }
        }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: {
            enabled: !0, align: "center",
            layout: "horizontal", labelFormatter: function () { return this.name }, borderWidth: 1, borderColor: "#909090", borderRadius: 5, navigation: { activeColor: "#274b6d", inactiveColor: "#CCC" }, shadow: !1, itemStyle: { cursor: "pointer", color: "#274b6d", fontSize: "12px" }, itemHoverStyle: { color: "#000" }, itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
        }, loading: {
            labelStyle: {
                fontWeight: "bold", position: "relative",
                top: "1em"
            }, style: { position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center" }
        }, tooltip: {
            enabled: !0, animation: da, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: !0, snap: cb ? 25 : 10, style: { color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap" }
        }, credits: { enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#909090", fontSize: "9px" } }
    }; var S = L.plotOptions, R = S.line; Lb(); var cc = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, dc = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, ec =
    /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, Ba = function (a) {
        var b = [], c, d; (function (a) { a && a.stops ? d = Na(a.stops, function (a) { return Ba(a[1]) }) : (c = cc.exec(a)) ? b = [E(c[1]), E(c[2]), E(c[3]), parseFloat(c[4], 10)] : (c = dc.exec(a)) ? b = [E(c[1], 16), E(c[2], 16), E(c[3], 16), 1] : (c = ec.exec(a)) && (b = [E(c[1]), E(c[2]), E(c[3]), 1]) })(a); return {
            get: function (c) {
                var f; d ? (f = w(a), f.stops = [].concat(f.stops), q(d, function (a, b) { f.stops[b] = [f.stops[b][0], a.get(c)] })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] +
                "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a; return f
            }, brighten: function (a) { if (d) q(d, function (b) { b.brighten(a) }); else if (ua(a) && a !== 0) { var c; for (c = 0; c < 3; c++) b[c] += E(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255) } return this }, rgba: b, setOpacity: function (a) { b[3] = a; return this }
        }
    }; xa.prototype = {
        init: function (a, b) { this.element = b === "span" ? Z(b) : F.createElementNS(Ma, b); this.renderer = a; this.attrSetters = {} }, opacity: 1, animate: function (a, b, c) {
            b = o(b, wa, !0); eb(this); if (b) {
                b = w(b); if (c) b.complete = c; ob(this, a,
                b)
            } else this.attr(a), c && c()
        }, attr: function (a, b) {
            var c, d, e, f, g = this.element, h = g.nodeName.toLowerCase(), i = this.renderer, j, k = this.attrSetters, l = this.shadows, m, p, n = this; ma(a) && t(b) && (c = a, a = {}, a[c] = b); if (ma(a)) c = a, h === "circle" ? c = { x: "cx", y: "cy" }[c] || c : c === "strokeWidth" && (c = "stroke-width"), n = H(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && c !== "fill" && (n = parseFloat(n)); else {
                for (c in a) if (j = !1, d = a[c], e = k[c] && k[c].call(this, d, c), e !== !1) {
                    e !== r && (d = e); if (c === "d") d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) &&
                    (d = "M 0 0"); else if (c === "x" && h === "text") for (e = 0; e < g.childNodes.length; e++) f = g.childNodes[e], H(f, "x") === H(g, "x") && H(f, "x", d); else if (this.rotation && (c === "x" || c === "y")) p = !0; else if (c === "fill") d = i.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y")) c = { x: "cx", y: "cy" }[c] || c; else if (h === "rect" && c === "r") H(g, { rx: d, ry: d }), j = !0; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign" || c === "scaleX" || c === "scaleY") j = p = !0; else if (c === "stroke") d = i.color(d, g, c); else if (c === "dashstyle") if (c =
                    "stroke-dasharray", d = d && d.toLowerCase(), d === "solid") d = ba; else { if (d) { d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (e = d.length; e--;) d[e] = E(d[e]) * o(a["stroke-width"], this["stroke-width"]); d = d.join(",") } } else if (c === "width") d = E(d); else if (c === "align") c = "text-anchor", d = { left: "start", center: "middle", right: "end" }[d];
                    else if (c === "title") e = g.getElementsByTagName("title")[0], e || (e = F.createElementNS(Ma, "title"), g.appendChild(e)), e.textContent = d; c === "strokeWidth" && (c = "stroke-width"); if (c === "stroke-width" || c === "stroke") { this[c] = d; if (this.stroke && this["stroke-width"]) H(g, "stroke", this.stroke), H(g, "stroke-width", this["stroke-width"]), this.hasStroke = !0; else if (c === "stroke-width" && d === 0 && this.hasStroke) g.removeAttribute("stroke"), this.hasStroke = !1; j = !0 } this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) &&
                    (m || (this.symbolAttr(a), m = !0), j = !0); if (l && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)) for (e = l.length; e--;) H(l[e], c, c === "height" ? s(d - (l[e].cutHeight || 0), 0) : d); if ((c === "width" || c === "height") && h === "rect" && d < 0) d = 0; this[c] = d; c === "text" ? (d !== this.textStr && delete this.bBox, this.textStr = d, this.added && i.buildText(this)) : j || H(g, c, d)
                } p && this.updateTransform()
            } return n
        }, addClass: function (a) { var b = this.element, c = H(b, "class") || ""; c.indexOf(a) === -1 && H(b, "class", c + " " + a); return this }, symbolAttr: function (a) {
            var b =
            this; q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) { b[c] = o(a[c], b[c]) }); b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) })
        }, clip: function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : ba) }, crisp: function (a, b, c, d, e) {
            var f, g = {}, h = {}, i, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0; i = v(a) % 2 / 2; h.x = Q(b || this.x || 0) + i; h.y = Q(c || this.y || 0) + i; h.width = Q((d || this.width || 0) - 2 * i); h.height = Q((e || this.height || 0) - 2 * i);
            h.strokeWidth = a; for (f in h) this[f] !== h[f] && (this[f] = g[f] = h[f]); return g
        }, css: function (a) { var b = this.element, c = this.textWidth = a && a.width && b.nodeName.toLowerCase() === "text" && E(a.width), d, e = "", f = function (a, b) { return "-" + b.toLowerCase() }; if (a && a.color) a.fill = a.color; this.styles = a = u(this.styles, a); c && delete a.width; if (Fa && !da) z(this.element, a); else { for (d in a) e += d.replace(/([A-Z])/g, f) + ":" + a[d] + ";"; H(b, "style", e) } c && this.added && this.renderer.buildText(this); return this }, on: function (a, b) {
            var c = this, d = c.element;
            db && a === "click" ? (d.ontouchstart = function (a) { c.touchEventFired = Date.now(); a.preventDefault(); b.call(d, a) }, d.onclick = function (a) { (za.indexOf("Android") === -1 || Date.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a) }) : d["on" + a] = b; return this
        }, setRadialReference: function (a) { this.element.radialReference = a; return this }, translate: function (a, b) { return this.attr({ translateX: a, translateY: b }) }, invert: function () { this.inverted = !0; this.updateTransform(); return this }, updateTransform: function () {
            var a = this.translateX ||
            0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation; e && (a += this.attr("width"), b += this.attr("height")); a = ["translate(" + a + "," + b + ")"]; e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (this.x || 0) + " " + (this.y || 0) + ")"); (t(c) || t(d)) && a.push("scale(" + o(c, 1) + " " + o(d, 1) + ")"); a.length && H(this.element, "transform", a.join(" "))
        }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a, b, c) {
            var d, e, f, g, h = {}; e = this.renderer; f = e.alignedObjects;
            if (a) { if (this.alignOptions = a, this.alignByTranslate = b, !c || ma(c)) this.alignTo = d = c || "renderer", oa(f, this), f.push(this), c = null } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo; c = o(c, e[d], e); d = a.align; e = a.verticalAlign; f = (c.x || 0) + (a.x || 0); g = (c.y || 0) + (a.y || 0); if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d]; h[b ? "translateX" : "x"] = v(f); if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1); h[b ? "translateY" : "y"] = v(g); this[this.placed ?
            "animate" : "attr"](h); this.placed = !0; this.alignAttr = h; return this
        }, getBBox: function () {
            var a = this.bBox, b = this.renderer, c, d, e = this.rotation; c = this.element; var f = this.styles, g = e * La; d = this.textStr; var h; if (d === "" || Zb.test(d)) h = d.length + "|" + f.fontSize + "|" + f.fontFamily, a = b.cache[h]; if (!a) {
                if (c.namespaceURI === Ma || b.forExport) { try { a = c.getBBox ? u({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight } } catch (i) { } if (!a || a.width < 0) a = { width: 0, height: 0 } } else a = this.htmlGetBBox(); if (b.isSVG) {
                    c = a.width; d = a.height;
                    if (Fa && f && f.fontSize === "11px" && d.toPrecision(3) === "16.9") a.height = d = 14; if (e) a.width = O(d * ha(g)) + O(c * ca(g)), a.height = O(d * ca(g)) + O(c * ha(g))
                } this.bBox = a; h && (b.cache[h] = a)
            } return a
        }, show: function () { return this.attr({ visibility: "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var b = this; b.animate({ opacity: 0 }, { duration: a || 150, complete: function () { b.hide() } }) }, add: function (a) {
            var b = this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = H(f, "zIndex"),
            h; if (a) this.parentGroup = a; this.parentInverted = a && a.inverted; this.textStr !== void 0 && b.buildText(this); if (g) c.handleZ = !0, g = E(g); if (c.handleZ) for (c = 0; c < e.length; c++) if (a = e[c], b = H(a, "zIndex"), a !== f && (E(b) > g || !t(g) && t(b))) { d.insertBefore(f, a); h = !0; break } h || d.appendChild(f); this.added = !0; N(this, "add"); return this
        }, safeRemoveChild: function (a) { var b = a.parentNode; b && b.removeChild(a) }, destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup, e, f; b.onclick =
            b.onmouseout = b.onmouseover = b.onmousemove = b.point = null; eb(a); if (a.clipPath) a.clipPath = a.clipPath.destroy(); if (a.stops) { for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy(); a.stops = null } a.safeRemoveChild(b); for (c && q(c, function (b) { a.safeRemoveChild(b) }) ; d && d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b; a.alignTo && oa(a.renderer.alignedObjects, a); for (e in a) delete a[e]; return null
        }, shadow: function (a, b, c) {
            var d = [], e, f, g = this.element, h, i, j, k; if (a) {
                i = o(a.width,
                3); j = (a.opacity || 0.15) / i; k = this.parentInverted ? "(-1,-1)" : "(" + o(a.offsetX, 1) + ", " + o(a.offsetY, 1) + ")"; for (e = 1; e <= i; e++) { f = g.cloneNode(0); h = i * 2 + 1 - 2 * e; H(f, { isShadow: "true", stroke: a.color || "black", "stroke-opacity": j * e, "stroke-width": h, transform: "translate" + k, fill: ba }); if (c) H(f, "height", s(H(f, "height") - h, 0)), f.cutHeight = h; b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g); d.push(f) } this.shadows = d
            } return this
        }
    }; var sa = function () { this.init.apply(this, arguments) }; sa.prototype = {
        Element: xa, init: function (a,
        b, c, d) {
            var e = location, f, g; f = this.createElement("svg").attr({ version: "1.1" }); g = f.element; a.appendChild(g); a.innerHTML.indexOf("xmlns") === -1 && H(g, "xmlns", Ma); this.isSVG = !0; this.box = g; this.boxWrapper = f; this.alignedObjects = []; this.url = (bb || mb) && F.getElementsByTagName("base").length ? e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(F.createTextNode("Created with Highstock 1.3.9")); this.defs = this.createElement("defs").add();
            this.forExport = d; this.gradients = {}; this.cache = {}; this.setSize(b, c, !1); var h; if (bb && a.getBoundingClientRect) this.subPixelFix = b = function () { z(a, { left: 0, top: 0 }); h = a.getBoundingClientRect(); z(a, { left: Va(h.left) - h.left + "px", top: Va(h.top) - h.top + "px" }) }, b(), A(V, "resize", b)
        }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () {
            var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); Ia(this.gradients || {}); this.gradients = null; if (a) this.defs = a.destroy(); this.subPixelFix &&
            X(V, "resize", this.subPixelFix); return this.alignedObjects = null
        }, createElement: function (a) { var b = new this.Element; b.init(this, a); return b }, draw: function () { }, buildText: function (a) {
            for (var b = a.element, c = this, d = c.forExport, e = o(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), f = b.childNodes, g = /style="([^"]+)"/, h = /href="(http[^"]+)"/,
            i = H(b, "x"), j = a.styles, k = a.textWidth, l = j && j.lineHeight, m = f.length, p = function (a) { return l ? E(l) : c.fontMetrics(/px$/.test(a && a.style.fontSize) ? a.style.fontSize : j.fontSize || 11).h }; m--;) b.removeChild(f[m]); k && !a.added && this.box.appendChild(b); e[e.length - 1] === "" && e.pop(); q(e, function (e, f) {
                var l, m = 0, e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"); l = e.split("|||"); q(l, function (e) {
                    if (e !== "" || l.length === 1) {
                        var n = {}, o = F.createElementNS(Ma, "tspan"), q; g.test(e) && (q = e.match(g)[1].replace(/(;| |^)color([ :])/,
                        "$1fill$2"), H(o, "style", q)); h.test(e) && !d && (H(o, "onclick", 'location.href="' + e.match(h)[1] + '"'), z(o, { cursor: "pointer" })); e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"); if (e !== " " && (o.appendChild(F.createTextNode(e)), m ? n.dx = 0 : n.x = i, H(o, n), !m && f && (!da && d && z(o, { display: "block" }), H(o, "dy", p(o), mb && o.offsetHeight)), b.appendChild(o), m++, k)) for (var e = e.replace(/([^\^])-/g, "$1- ").split(" "), n = e.length > 1 && j.whiteSpace !== "nowrap", r, s, v = a._clipHeight, t = [], u = p(), fa = 1; n && (e.length ||
                        t.length) ;) delete a.bBox, r = a.getBBox(), s = r.width, !da && c.forExport && (s = c.measureSpanWidth(o.firstChild.data, a.styles)), r = s > k, !r || e.length === 1 ? (e = t, t = [], e.length && (fa++, v && fa * u > v ? (e = ["..."], a.attr("title", a.textStr)) : (o = F.createElementNS(Ma, "tspan"), H(o, { dy: u, x: i }), q && H(o, "style", q), b.appendChild(o), s > k && (k = s)))) : (o.removeChild(o.firstChild), t.unshift(e.pop())), e.length && o.appendChild(F.createTextNode(e.join(" ").replace(/- /g, "-")))
                    }
                })
            })
        }, button: function (a, b, c, d, e, f, g, h, i) {
            var j = this.label(a, b, c, i,
            null, null, null, null, "button"), k = 0, l, m, p, n, $, o, a = { x1: 0, y1: 0, x2: 0, y2: 1 }, e = w({ "stroke-width": 1, stroke: "#CCCCCC", fill: { linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]] }, r: 2, padding: 5, style: { color: "black" } }, e); p = e.style; delete e.style; f = w(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]] } }, f); n = f.style; delete f.style; g = w(e, { stroke: "#68A", fill: { linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]] } }, g); $ = g.style; delete g.style; h = w(e, { style: { color: "#CCC" } }, h); o = h.style; delete h.style; A(j.element,
            Fa ? "mouseover" : "mouseenter", function () { k !== 3 && j.attr(f).css(n) }); A(j.element, Fa ? "mouseout" : "mouseleave", function () { k !== 3 && (l = [e, f, g][k], m = [p, n, $][k], j.attr(l).css(m)) }); j.setState = function (a) { (j.state = k = a) ? a === 2 ? j.attr(g).css($) : a === 3 && j.attr(h).css(o) : j.attr(e).css(p) }; return j.on("click", function () { k !== 3 && d.call(j) }).attr(e).css(u({ cursor: "default" }, p))
        }, crispLine: function (a, b) { a[1] === a[4] && (a[1] = a[4] = v(a[1]) - b % 2 / 2); a[2] === a[5] && (a[2] = a[5] = v(a[2]) + b % 2 / 2); return a }, path: function (a) {
            var b = { fill: ba };
            Pa(a) ? b.d = a : aa(a) && u(b, a); return this.createElement("path").attr(b)
        }, circle: function (a, b, c) { a = aa(a) ? a : { x: a, y: b, r: c }; return this.createElement("circle").attr(a) }, arc: function (a, b, c, d, e, f) { if (aa(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x; a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 }); a.r = c; return a }, rect: function (a, b, c, d, e, f) { e = aa(a) ? a.r : e; e = this.createElement("rect").attr({ rx: e, ry: e, fill: ba }); return e.attr(aa(a) ? a : e.crisp(f, a, b, s(c, 0), s(d, 0))) }, setSize: function (a,
        b, c) { var d = this.alignedObjects, e = d.length; this.width = a; this.height = b; for (this.boxWrapper[o(c, !0) ? "animate" : "attr"]({ width: a, height: b }) ; e--;) d[e].align() }, g: function (a) { var b = this.createElement("g"); return t(a) ? b.attr({ "class": "highcharts-" + a }) : b }, image: function (a, b, c, d, e) {
            var f = { preserveAspectRatio: ba }; arguments.length > 1 && u(f, { x: b, y: c, width: d, height: e }); f = this.createElement("image").attr(f); f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href",
            a); return f
        }, symbol: function (a, b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(v(b), v(c), d, e, f), i = /^url\((.*?)\)$/, j, k; if (h) g = this.path(h), u(g, { symbolName: a, x: b, y: c, width: d, height: e }), f && u(g, f); else if (i.test(a)) k = function (a, b) { a.element && (a.attr({ width: b[0], height: b[1] }), a.alignByTranslate || a.translate(v((d - b[0]) / 2), v((e - b[1]) / 2))) }, j = a.match(i)[1], a = Sb[j], g = this.image(j).attr({ x: b, y: c }), g.isImg = !0, a ? k(g, a) : (g.attr({ width: 0, height: 0 }), Z("img", { onload: function () { k(g, Sb[j] = [this.width, this.height]) }, src: j }));
            return g
        }, symbols: {
            circle: function (a, b, c, d) { var e = 0.166 * c; return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"] }, square: function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"] }, triangle: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"] }, "triangle-down": function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"] }, diamond: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"] }, arc: function (a, b, c, d, e) {
                var f = e.start, c = e.r || c || d, g = e.end - 0.001,
                d = e.innerR, h = e.open, i = ca(f), j = ha(f), k = ca(g), g = ha(g), e = e.end - f < Ka ? 0 : 1; return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"]
            }
        }, clipRect: function (a, b, c, d) { var e = "highcharts-" + Db++, f = this.createElement("clipPath").attr({ id: e }).add(this.defs), a = this.rect(a, b, c, d, 0).add(f); a.id = e; a.clipPath = f; return a }, color: function (a, b, c) {
            var d = this, e, f = /^rgba/, g, h, i, j, k, l, m, p = []; a && a.linearGradient ? g = "linearGradient" : a && a.radialGradient && (g = "radialGradient"); if (g) {
                c =
                a[g]; h = d.gradients; j = a.stops; b = b.radialReference; Pa(c) && (a[g] = c = { x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse" }); g === "radialGradient" && b && !t(c.gradientUnits) && (c = w(c, { cx: b[0] - b[2] / 2 + c.cx * b[2], cy: b[1] - b[2] / 2 + c.cy * b[2], r: c.r * b[2], gradientUnits: "userSpaceOnUse" })); for (m in c) m !== "id" && p.push(m, c[m]); for (m in j) p.push(j[m]); p = p.join(","); h[p] ? a = h[p].id : (c.id = a = "highcharts-" + Db++, h[p] = i = d.createElement(g).attr(c).add(d.defs), i.stops = [], q(j, function (a) {
                    f.test(a[1]) ? (e = Ba(a[1]), k = e.get("rgb"),
                    l = e.get("a")) : (k = a[1], l = 1); a = d.createElement("stop").attr({ offset: a[0], "stop-color": k, "stop-opacity": l }).add(i); i.stops.push(a)
                })); return "url(" + d.url + "#" + a + ")"
            } else return f.test(a) ? (e = Ba(a), H(b, c + "-opacity", e.get("a")), e.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
        }, text: function (a, b, c, d) {
            var e = L.chart.style, f = ka || !da && this.forExport; if (d && !this.forExport) return this.html(a, b, c); b = v(o(b, 0)); c = v(o(c, 0)); a = this.createElement("text").attr({ x: b, y: c, text: a }).css({ fontFamily: e.fontFamily, fontSize: e.fontSize });
            f && a.css({ position: "absolute" }); a.x = b; a.y = c; return a
        }, fontMetrics: function (a) { var a = E(a || 11), a = a < 24 ? a + 4 : v(a * 1.2), b = v(a * 0.8); return { h: a, b: b } }, label: function (a, b, c, d, e, f, g, h, i) {
            function j() {
                var a, b; a = o.element.style; x = (Ca === void 0 || I === void 0 || n.styles.textAlign) && o.getBBox(); n.width = (Ca || x.width || 0) + 2 * s + qb; n.height = (I || x.height || 0) + 2 * s; fa = s + p.fontMetrics(a && a.fontSize).b; if (Hb) {
                    if (!J) a = v(-pb * s), b = h ? -fa : 0, n.box = J = d ? p.symbol(d, a, b, n.width, n.height, P) : p.rect(a, b, n.width, n.height, 0, P[Ub]), J.add(n); J.isImg ||
                    J.attr(w({ width: n.width, height: n.height }, P)); P = null
                }
            } function k() { var a = n.styles, a = a && a.textAlign, b = qb + s * (1 - pb), c; c = h ? 0 : fa; if (t(Ca) && (a === "center" || a === "right")) b += { center: 0.5, right: 1 }[a] * (Ca - x.width); (b !== o.x || c !== o.y) && o.attr({ x: b, y: c }); o.x = b; o.y = c } function l(a, b) { J ? J.attr(a, b) : P[a] = b } function m() { o.add(n); n.attr({ text: a, x: b, y: c }); J && t(e) && n.attr({ anchorX: e, anchorY: f }) } var p = this, n = p.g(i), o = p.text("", 0, 0, g).attr({ zIndex: 1 }), J, x, pb = 0, s = 3, qb = 0, Ca, I, Gb, G, C = 0, P = {}, fa, g = n.attrSetters, Hb; A(n, "add", m);
            g.width = function (a) { Ca = a; return !1 }; g.height = function (a) { I = a; return !1 }; g.padding = function (a) { t(a) && a !== s && (s = a, k()); return !1 }; g.paddingLeft = function (a) { t(a) && a !== qb && (qb = a, k()); return !1 }; g.align = function (a) { pb = { left: 0, center: 0.5, right: 1 }[a]; return !1 }; g.text = function (a, b) { o.attr(b, a); j(); k(); return !1 }; g[Ub] = function (a, b) { Hb = !0; C = a % 2 / 2; l(b, a); return !1 }; g.stroke = g.fill = g.r = function (a, b) { b === "fill" && (Hb = !0); l(b, a); return !1 }; g.anchorX = function (a, b) { e = a; l(b, a + C - Gb); return !1 }; g.anchorY = function (a, b) {
                f = a;
                l(b, a - G); return !1
            }; g.x = function (a) { n.x = a; a -= pb * ((Ca || x.width) + s); Gb = v(a); n.attr("translateX", Gb); return !1 }; g.y = function (a) { G = n.y = v(a); n.attr("translateY", G); return !1 }; var y = n.css; return u(n, {
                css: function (a) { if (a) { var b = {}, a = w(a); q("fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow".split(","), function (c) { a[c] !== r && (b[c] = a[c], delete a[c]) }); o.css(b) } return y.call(n, a) }, getBBox: function () { return { width: x.width + 2 * s, height: x.height + 2 * s, x: x.x - s, y: x.y - s } }, shadow: function (a) {
                    J &&
                    J.shadow(a); return n
                }, destroy: function () { X(n, "add", m); X(n.element, "mouseenter"); X(n.element, "mouseleave"); o && (o = o.destroy()); J && (J = J.destroy()); xa.prototype.destroy.call(n); n = p = j = k = l = m = null }
            })
        }
    }; Za = sa; u(xa.prototype, {
        htmlCss: function (a) { var b = this.element; if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform(); this.styles = u(this.styles, a); z(this.element, a); return this }, htmlGetBBox: function () {
            var a = this.element, b = this.bBox; if (!b) {
                if (a.nodeName === "text") a.style.position =
                "absolute"; b = this.bBox = { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight }
            } return b
        }, htmlUpdateTransform: function () {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = { left: 0, center: 0.5, right: 1 }[g], i = this.shadows; z(b, { marginLeft: c, marginTop: d }); i && q(i, function (a) { z(a, { marginLeft: c + 1, marginTop: d + 1 }) }); this.inverted && q(b.childNodes, function (c) { a.invertChild(c, b) }); if (b.tagName === "SPAN") {
                    var j =
                    this.rotation, k, l = E(this.textWidth), m = [j, g, b.innerHTML, this.textWidth].join(","); if (m !== this.cTT) { k = a.fontMetrics(b.style.fontSize).b; t(j) && this.setSpanRotation(j, h, k); i = o(this.elemWidth, b.offsetWidth); if (i > l && /[ \-]/.test(b.textContent || b.innerText)) z(b, { width: l + "px", display: "block", whiteSpace: "normal" }), i = l; this.getSpanCorrection(i, k, h, j, g) } z(b, { left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px" }); if (mb) k = b.offsetHeight; this.cTT = m
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function (a, b, c) {
            var d =
            {}, e = Fa ? "-ms-transform" : mb ? "-webkit-transform" : bb ? "MozTransform" : Rb ? "-o-transform" : ""; d[e] = d.transform = "rotate(" + a + "deg)"; d[e + (bb ? "Origin" : "-origin")] = b * 100 + "% " + c + "px"; z(this.element, d)
        }, getSpanCorrection: function (a, b, c) { this.xCorr = -a * c; this.yCorr = -b }
    }); u(sa.prototype, {
        html: function (a, b, c) {
            var d = L.chart.style, e = this.createElement("span"), f = e.attrSetters, g = e.element, h = e.renderer; f.text = function (a) { a !== g.innerHTML && delete this.bBox; g.innerHTML = a; return !1 }; f.x = f.y = f.align = f.rotation = function (a, b) {
                b ===
                "align" && (b = "textAlign"); e[b] = a; e.htmlUpdateTransform(); return !1
            }; e.attr({ text: a, x: v(b), y: v(c) }).css({ position: "absolute", whiteSpace: "nowrap", fontFamily: d.fontFamily, fontSize: d.fontSize }); e.css = e.htmlCss; if (h.isSVG) e.add = function (a) {
                var b, c = h.box.parentNode, d = []; if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) d.push(a), a = a.parentGroup; q(d.reverse(), function (a) {
                            var d; b = a.div = a.div || Z(Ta, { className: H(a.element, "class") }, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px" }, b || c);
                            d = b.style; u(a.attrSetters, { translateX: function (a) { d.left = a + "px" }, translateY: function (a) { d.top = a + "px" }, visibility: function (a, b) { d[b] = a } })
                        })
                    }
                } else b = c; b.appendChild(g); e.added = !0; e.alignOnAdd && e.htmlUpdateTransform(); return e
            }; return e
        }
    }); var rb, qa; if (!da && !ka) Highcharts.VMLElement = qa = {
        init: function (a, b) {
            var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", "absolute", ";"], e = b === Ta; (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;"); d.push("visibility: ", e ? "hidden" : "visible"); c.push(' style="',
            d.join(""), '"/>'); if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = Z(c); this.renderer = a; this.attrSetters = {}
        }, add: function (a) { var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d; a && a.inverted && b.invertChild(c, d); d.appendChild(c); this.added = !0; this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(); N(this, "add"); return this }, updateTransform: xa.prototype.htmlUpdateTransform, setSpanRotation: function () {
            var a = this.rotation, b = ca(a * La), c = ha(a * La); z(this.element, {
                filter: a ?
                ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : ba
            })
        }, getSpanCorrection: function (a, b, c, d, e) { var f = d ? ca(d * La) : 1, g = d ? ha(d * La) : 0, h = o(this.elemHeight, this.element.offsetHeight), i; this.xCorr = f < 0 && -a; this.yCorr = g < 0 && -h; i = f * g < 0; this.xCorr += g * b * (i ? 1 - c : c); this.yCorr -= f * b * (d ? i ? c : 1 - c : 1); e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), z(this.element, { textAlign: e })) }, pathToVML: function (a) {
            for (var b = a.length,
            c = []; b--;) if (ua(a[b])) c[b] = v(a[b] * 10) - 5; else if (a[b] === "Z") c[b] = "x"; else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1); return c.join(" ") || "x"
        }, attr: function (a, b) {
            var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, i = this.renderer, j = this.symbolName, k, l = this.shadows, m, p = this.attrSetters, n = this; ma(a) && t(b) && (c = a, a = {}, a[c] = b); if (ma(a)) c = a, n = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]; else for (c in a) if (d =
            a[c], m = !1, e = p[c] && p[c].call(this, d, c), e !== !1 && d !== null) {
                e !== r && (d = e); if (j && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) k || (this.symbolAttr(a), k = !0), m = !0; else if (c === "d") { d = d || []; this.d = d.join(" "); f.path = d = this.pathToVML(d); if (l) for (e = l.length; e--;) l[e].path = l[e].cutOff ? this.cutOffPath(d, l[e].cutOff) : d; m = !0 } else if (c === "visibility") { if (l) for (e = l.length; e--;) l[e].style[c] = d; h === "DIV" && (d = d === "hidden" ? "-999em" : 0, lb || (g[c] = d ? "visible" : "hidden"), c = "top"); g[c] = d; m = !0 } else if (c === "zIndex") d &&
                (g[c] = d), m = !0; else if (Aa(c, ["x", "y", "width", "height"]) !== -1) this[c] = d, c === "x" || c === "y" ? c = { x: "left", y: "top" }[c] : d = s(0, d), this.updateClipping ? (this[c] = d, this.updateClipping()) : g[c] = d, m = !0; else if (c === "class" && h === "DIV") f.className = d; else if (c === "stroke") d = i.color(d, f, c), c = "strokecolor"; else if (c === "stroke-width" || c === "strokeWidth") f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, ua(d) && (d += "px"); else if (c === "dashstyle") (f.getElementsByTagName("stroke")[0] || Z(i.prepVML(["<stroke/>"]), null, null, f))[c] = d ||
                "solid", this.dashstyle = d, m = !0; else if (c === "fill") if (h === "SPAN") g.color = d; else { if (h !== "IMG") f.filled = d !== ba ? !0 : !1, d = i.color(d, f, c, this), c = "fillcolor" } else if (c === "opacity") m = !0; else if (h === "shape" && c === "rotation") this[c] = f.style[c] = d, f.style.left = -v(ha(d * La) + 1) + "px", f.style.top = v(ca(d * La)) + "px"; else if (c === "translateX" || c === "translateY" || c === "rotation") this[c] = d, this.updateTransform(), m = !0; m || (lb ? f[c] = d : H(f, c, d))
            } return n
        }, clip: function (a) {
            var b = this, c; a ? (c = a.members, oa(c, b), c.push(b), b.destroyClip =
            function () { oa(c, b) }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = { clip: lb ? "inherit" : "rect(auto)" }); return b.css(a)
        }, css: xa.prototype.htmlCss, safeRemoveChild: function (a) { a.parentNode && Sa(a) }, destroy: function () { this.destroyClip && this.destroyClip(); return xa.prototype.destroy.apply(this) }, on: function (a, b) { this.element["on" + a] = function () { var a = V.event; a.target = a.srcElement; b(a) }; return this }, cutOffPath: function (a, b) {
            var c, a = a.split(/[ ,]/); c = a.length; if (c === 9 || c === 11) a[c - 4] = a[c - 2] = E(a[c - 2]) - 10 * b;
            return a.join(" ")
        }, shadow: function (a, b, c) {
            var d = [], e, f = this.element, g = this.renderer, h, i = f.style, j, k = f.path, l, m, p, n; k && typeof k.value !== "string" && (k = "x"); m = k; if (a) {
                p = o(a.width, 3); n = (a.opacity || 0.15) / p; for (e = 1; e <= 3; e++) {
                    l = p * 2 + 1 - 2 * e; c && (m = this.cutOffPath(k.value, l + 0.5)); j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />']; h = Z(g.prepVML(j), null, { left: E(i.left) + o(a.offsetX, 1), top: E(i.top) + o(a.offsetY, 1) }); if (c) h.cutOff = l + 1; j = ['<stroke color="',
                    a.color || "black", '" opacity="', n * e, '"/>']; Z(g.prepVML(j), null, null, h); b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f); d.push(h)
                } this.shadows = d
            } return this
        }
    }, qa = ea(xa, qa), qa = {
        Element: qa, isIE8: za.indexOf("MSIE 8.0") > -1, init: function (a, b, c) {
            var d, e; this.alignedObjects = []; d = this.createElement(Ta); e = d.element; e.style.position = "relative"; a.appendChild(d.element); this.isVML = !0; this.box = e; this.boxWrapper = d; this.cache = {}; this.setSize(b, c, !1); if (!F.namespaces.hcv) {
                F.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                try { F.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } " } catch (f) { F.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } " }
            }
        }, isHidden: function () { return !this.box.offsetWidth }, clipRect: function (a, b, c, d) {
            var e = this.createElement(), f = aa(a); return u(e, {
                members: [], left: (f ? a.x : a) + 1, top: (f ? a.y : b) + 1, width: (f ? a.width : c) - 1, height: (f ? a.height : d) - 1, getCSS: function (a) {
                    var b =
                    a.element, c = b.nodeName, a = a.inverted, d = this.top - (c === "shape" ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = { clip: "rect(" + v(a ? e : d) + "px," + v(a ? f : b) + "px," + v(a ? b : f) + "px," + v(a ? d : e) + "px)" }; !a && lb && c === "DIV" && u(d, { width: b + "px", height: f + "px" }); return d
                }, updateClipping: function () { q(e.members, function (a) { a.css(e.getCSS(a)) }) }
            })
        }, color: function (a, b, c, d) {
            var e = this, f, g = /^rgba/, h, i, j = ba; a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern"); if (i) {
                var k, l, m = a.linearGradient || a.radialGradient,
                p, n, o, J, x, s = "", a = a.stops, r, t = [], v = function () { h = ['<fill colors="' + t.join(",") + '" opacity="', o, '" o:opacity2="', n, '" type="', i, '" ', s, 'focus="100%" method="any" />']; Z(e.prepVML(h), null, null, b) }; p = a[0]; r = a[a.length - 1]; p[0] > 0 && a.unshift([0, p[1]]); r[0] < 1 && a.push([1, r[1]]); q(a, function (a, b) { g.test(a[1]) ? (f = Ba(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1); t.push(a[0] * 100 + "% " + k); b ? (o = l, J = k) : (n = l, x = k) }); if (c === "fill") if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, p = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, s = 'angle="' +
                (90 - T.atan((m - a) / (p - c)) * 180 / Ka) + '"', v(); else { var j = m.r, u = j * 2, w = j * 2, G = m.cx, C = m.cy, P = b.radialReference, fa, j = function () { P && (fa = d.getBBox(), G += (P[0] - fa.x) / fa.width - 0.5, C += (P[1] - fa.y) / fa.height - 0.5, u *= P[2] / fa.width, w *= P[2] / fa.height); s = 'src="' + L.global.VMLRadialGradientURL + '" size="' + u + "," + w + '" origin="0.5,0.5" position="' + G + "," + C + '" color2="' + x + '" '; v() }; d.added ? j() : A(d, "add", j); j = J } else j = k
            } else if (g.test(a) && b.tagName !== "IMG") f = Ba(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], Z(this.prepVML(h), null, null,
            b), j = f.get("rgb"); else { j = b.getElementsByTagName(c); if (j.length) j[0].opacity = 1, j[0].type = "solid"; j = a } return j
        }, prepVML: function (a) { var b = this.isIE8, a = a.join(""); b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:"); return a }, text: sa.prototype.html, path: function (a) {
            var b = { coordsize: "10 10" };
            Pa(a) ? b.d = a : aa(a) && u(b, a); return this.createElement("shape").attr(b)
        }, circle: function (a, b, c) { var d = this.symbol("circle"); if (aa(a)) c = a.r, b = a.y, a = a.x; d.isCircle = !0; d.r = c; return d.attr({ x: a, y: b }) }, g: function (a) { var b; a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a }); return this.createElement(Ta).attr(b) }, image: function (a, b, c, d, e) { var f = this.createElement("img").attr({ src: a }); arguments.length > 1 && f.attr({ x: b, y: c, width: d, height: e }); return f }, rect: function (a, b, c, d, e, f) {
            var g = this.symbol("rect");
            g.r = aa(a) ? a.r : e; return g.attr(aa(a) ? a : g.crisp(f, a, b, s(c, 0), s(d, 0)))
        }, invertChild: function (a, b) { var c = b.style; z(a, { flip: "x", left: E(c.width) - 1, top: E(c.height) - 1, rotation: -90 }) }, symbols: {
            arc: function (a, b, c, d, e) { var f = e.start, g = e.end, h = e.r || c || d, c = e.innerR, d = ca(f), i = ha(f), j = ca(g), k = ha(g); if (g - f === 0) return ["x"]; f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k]; e.open && !c && f.push("e", "M", a, b); f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e"); f.isArc = !0; return f }, circle: function (a, b, c, d, e) {
                e &&
                (c = d = 2 * e.r); e && e.isCircle && (a -= c / 2, b -= d / 2); return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
            }, rect: function (a, b, c, d, e) { var f = a + c, g = b + d, h; !t(e) || !e.r ? f = sa.prototype.symbols.square.apply(0, arguments) : (h = y(e.r, c, d), f = ["M", a + h, b, "L", f - h, b, "wa", f - 2 * h, b, f, b + 2 * h, f - h, b, f, b + h, "L", f, g - h, "wa", f - 2 * h, g - 2 * h, f, g, f, g - h, f - h, g, "L", a + h, g, "wa", a, g - 2 * h, a + 2 * h, g, a + h, g, a, g - h, "L", a, b + h, "wa", a, b, a + 2 * h, b + 2 * h, a, b + h, a + h, b, "x", "e"]); return f }
        }
    }, Highcharts.VMLRenderer = rb = function () { this.init.apply(this, arguments) }, rb.prototype =
    w(sa.prototype, qa), Za = rb; sa.prototype.measureSpanWidth = function (a, b) { var c = F.createElement("span"), d; d = F.createTextNode(a); c.appendChild(d); z(c, b); this.box.appendChild(c); d = c.offsetWidth; Sa(c); return d }; var Vb; if (ka) Highcharts.CanVGRenderer = qa = function () { Ma = "http://www.w3.org/1999/xhtml" }, qa.prototype.symbols = {}, Vb = function () { function a() { var a = b.length, d; for (d = 0; d < a; d++) b[d](); b = [] } var b = []; return { push: function (c, d) { b.length === 0 && $b(d, a); b.push(c) } } }(), Za = qa; Ya.prototype = {
        addLabel: function () {
            var a =
            this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = a.names, g = this.pos, h = b.labels, i = a.tickPositions, d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / i.length || !d && (c.margin[3] || c.chartWidth * 0.33), j = g === i[0], k = g === i[i.length - 1], l, f = e ? o(e[g], f[g], g) : g, e = this.label, m = i.info; a.isDatetimeAxis && m && (l = b.dateTimeLabelFormats[m.higherRanks[g] || m.unitName]); this.isFirst = j; this.isLast = k; b = a.labelFormatter.call({
                axis: a, chart: c, isFirst: j, isLast: k, dateTimeLabelFormat: l, value: a.isLog ? ga(na(f)) :
                f
            }); g = d && { width: s(1, v(d - 2 * (h.padding || 10))) + "px" }; g = u(g, h.style); if (t(e)) e && e.attr({ text: b }).css(g); else { l = { align: a.labelAlign }; if (ua(h.rotation)) l.rotation = h.rotation; if (d && h.ellipsis) l._clipHeight = a.len / i.length; this.label = t(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(l).css(g).add(a.labelGroup) : null }
        }, getLabelSize: function () { var a = this.label, b = this.axis; return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0 }, getLabelSides: function () {
            var a = this.label.getBBox(), b = this.axis, c = b.horiz, d = b.options.labels,
            a = c ? a.width : a.height, b = c ? a * { left: 0, center: 0.5, right: 1 }[b.labelAlign] - d.x : a; return [-b, a - b]
        }, handleOverflow: function (a, b) {
            var x; var c = !0, d = this.axis, e = this.isFirst, f = this.isLast, g = d.horiz ? b.x : b.y, h = d.reversed, i = d.tickPositions, j = this.getLabelSides(), k = j[0], j = j[1], l = d.pos, m = l + d.len, p = this.label.line || 0, n = d.labelEdge, o = d.justifyLabels && (e || f); n[p] === r || g + k > n[p] ? n[p] = g + j : o || (c = !1); if (o) x = (d = d.ticks[i[a + (e ? 1 : -1)]]) && d.label.xy && d.label.xy.x + d.getLabelSides()[e ? 0 : 1], i = x, e && !h || f && h ? g + k < l && (g = l - k, d && g + j >
            i && (c = !1)) : g + j > m && (g = m - j, d && g + k < i && (c = !1)), b.x = g; return c
        }, getPosition: function (a, b, c, d) { var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight; return { x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB } }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var i = this.axis, j = i.transA, k = i.reversed, l = i.staggerLines, m = i.chart.renderer.fontMetrics(e.style.fontSize).b,
            p = e.rotation, a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0); p && i.side === 2 && (b -= m - m * ca(p * La)); !t(e.y) && !p && (b += m - c.getBBox().height / 2); if (l) c.line = g / (h || 1) % l, b += c.line * (i.labelOffset / l); return { x: a, y: b }
        }, getMarkPath: function (a, b, c, d, e, f) { return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d) }, render: function (a, b, c) {
            var d = this.axis, e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, i = this.label, j = this.pos, k = e.labels, l = this.gridLine, m = h ? h + "Grid" : "grid", p = h ? h + "Tick" : "tick", n = e[m + "LineWidth"],
            q = e[m + "LineColor"], J = e[m + "LineDashStyle"], x = e[p + "Length"], m = e[p + "Width"] || 0, s = e[p + "Color"], t = e[p + "Position"], p = this.mark, v = k.step, u = !0, I = d.tickmarkOffset, w = this.getPosition(g, j, I, b), G = w.x, w = w.y, C = g && G === d.pos + d.len || !g && w === d.pos ? -1 : 1; this.isActive = !0; if (n) { j = d.getPlotLinePath(j + I, n * C, b, !0); if (l === r) { l = { stroke: q, "stroke-width": n }; if (J) l.dashstyle = J; if (!h) l.zIndex = 1; if (b) l.opacity = 0; this.gridLine = l = n ? f.path(j).attr(l).add(d.gridGroup) : null } if (!b && l && j) l[this.isNew ? "attr" : "animate"]({ d: j, opacity: c }) } if (m &&
            x) t === "inside" && (x = -x), d.opposite && (x = -x), h = this.getMarkPath(G, w, x, m * C, g, f), p ? p.animate({ d: h, opacity: c }) : this.mark = f.path(h).attr({ stroke: s, "stroke-width": m, opacity: c }).add(d.axisGroup); if (i && !isNaN(G)) i.xy = w = this.getLabelPosition(G, w, i, g, k, I, a, v), this.isFirst && !this.isLast && !o(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !o(e.showLastLabel, 1) ? u = !1 : !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && (u = this.handleOverflow(a, w)), v && a % v && (u = !1), u && !isNaN(w.y) ? (w.opacity = c, i[this.isNew ? "attr" : "animate"](w),
            this.isNew = !1) : i.attr("y", -9999)
        }, destroy: function () { Ia(this, this.axis) }
    }; Qb.prototype = {
        destroy: function () { Ia(this, this.axis) }, render: function (a) { var b = this.options, c = b.format, c = c ? Ha(c, this) : b.formatter.call(this); this.label ? this.label.attr({ text: c, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(c, 0, 0, b.useHTML).css(b.style).attr({ align: this.textAlign, rotation: b.rotation, visibility: "hidden" }).add(a) }, setOffset: function (a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = this.isNegative, g =
            c.translate(this.percent ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = O(g - c), h = d.xAxis[0].translate(this.x) + a, i = d.plotHeight, f = { x: e ? f ? g : g - c : h, y: e ? i - h - b : f ? i - g - c : i - g, width: e ? c : b, height: e ? b : c }; if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e.attr({ visibility: this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? da ? "inherit" : "visible" : "hidden" })
        }
    }; var Ib = function (a, b) { this.axis = a; if (b) this.options = b, this.id = b.id }; Ib.prototype = {
        render: function () {
            var a = this, b = a.axis, c = b.horiz, d = (b.pointRange ||
            0) / 2, e = a.options, f = e.label, g = a.label, h = e.width, i = e.to, j = e.from, k = t(j) && t(i), l = e.value, m = e.dashStyle, p = a.svgElem, n = [], q, J = e.color, x = e.zIndex, r = e.events, v = b.chart.renderer; b.isLog && (j = Ea(j), i = Ea(i), l = Ea(l)); if (h) { if (n = b.getPlotLinePath(l, h), d = { stroke: J, "stroke-width": h }, m) d.dashstyle = m } else if (k) { if (j = s(j, b.min - d), i = y(i, b.max + d), n = b.getPlotBandPath(j, i, e), d = { fill: J }, e.borderWidth) d.stroke = e.borderColor, d["stroke-width"] = e.borderWidth } else return; if (t(x)) d.zIndex = x; if (p) if (n) p.animate({ d: n }, null, p.onGetPath);
            else { if (p.hide(), p.onGetPath = function () { p.show() }, g) a.label = g = g.destroy() } else if (n && n.length && (a.svgElem = p = v.path(n).attr(d).add(), r)) for (q in e = function (b) { p.on(b, function (c) { r[b].apply(a, [c]) }) }, r) e(q); if (f && t(f.text) && n && n.length && b.width > 0 && b.height > 0) {
                f = w({ align: c && k && "center", x: c ? !k && 4 : 10, verticalAlign: !c && k && "middle", y: c ? k ? 16 : 10 : k ? 6 : -4, rotation: c && !k && 90 }, f); if (!g) a.label = g = v.text(f.text, 0, 0, f.useHTML).attr({ align: f.textAlign || f.align, rotation: f.rotation, zIndex: x }).css(f.style).add(); b = [n[1],
                n[4], o(n[6], n[1])]; n = [n[2], n[5], o(n[7], n[2])]; c = Ra(b); k = Ra(n); g.align(f, !1, { x: c, y: k, width: va(b) - c, height: va(n) - k }); g.show()
            } else g && g.hide(); return a
        }, destroy: function () { oa(this.axis.plotLinesAndBands, this); delete this.axis; Ia(this) }
    }; W.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, gridLineColor: "#C0C0C0", labels: K, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01,
            maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: { align: "middle", style: { color: "#4d759e", fontWeight: "bold" } }, type: "linear"
        }, defaultYAxisOptions: {
            endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8, y: 3 }, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05,
            startOnTick: !0, tickWidth: 0, title: { rotation: 270, text: "Values" }, stackLabels: { enabled: !1, formatter: function () { return Ga(this.total, -1) }, style: K.style }
        }, defaultLeftAxisOptions: { labels: { x: -8, y: null }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 8, y: null }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { x: 0, y: 14 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { x: 0, y: -5 }, title: { rotation: 0 } }, init: function (a, b) {
            var c = b.isX; this.horiz = a.inverted ? !c : c; this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite; this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(b); var d = this.options, e = d.type; this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter; this.userOptions = b; this.minPixelPadding = 0; this.chart = a; this.reversed = d.reversed; this.zoomEnabled = d.zoomEnabled !== !1; this.categories = d.categories || e === "category"; this.names = []; this.isLog = e === "logarithmic"; this.isDatetimeAxis = e === "datetime"; this.isLinked = t(d.linkedTo); this.tickmarkOffset = this.categories &&
            d.tickmarkPlacement === "between" ? 0.5 : 0; this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = d.minRange || d.maxZoom; this.range = d.range; this.offset = d.offset || 0; this.stacks = {}; this.oldStacks = {}; this.stackExtremes = {}; this.min = this.max = null; this.crosshair = o(d.crosshair, ja(a.options.tooltip.crosshairs)[c ? 0 : 1], !1); var f, d = this.options.events; Aa(this, a.axes) === -1 && (a.axes.push(this), a[this.coll].push(this)); this.series =
            this.series || []; if (a.inverted && c && this.reversed === r) this.reversed = !0; this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; for (f in d) A(this, f, d[f]); if (this.isLog) this.val2lin = Ea, this.lin2val = na
        }, setOptions: function (a) { this.options = w(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], w(L[this.coll], a)) }, defaultLabelFormatter: function () {
            var a = this.axis,
            b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = L.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval; if (h) g = Ha(h, this); else if (c) g = b; else if (d) g = ra(d, b); else if (f && a >= 1E3) for (; f-- && g === r;) c = Math.pow(1E3, f + 1), a >= c && e[f] !== null && (g = Ga(b / c, -1) + e[f]); g === r && (g = b >= 1E4 ? Ga(b, 0) : Ga(b, -1, r, "")); return g
        }, getSeriesExtremes: function () {
            var a = this, b = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = null; a.stackExtremes = {}; a.buildStacks(); q(a.series, function (c) {
                if (c.visible ||
                !b.options.chart.ignoreHiddenSeries) { var d; d = c.options.threshold; var e; a.hasVisibleSeries = !0; a.isLog && d <= 0 && (d = null); if (a.isXAxis) { if (d = c.xData, d.length) a.dataMin = y(o(a.dataMin, d[0]), Ra(d)), a.dataMax = s(o(a.dataMax, d[0]), va(d)) } else { c.getExtremes(); e = c.dataMax; c = c.dataMin; if (t(c) && t(e)) a.dataMin = y(o(a.dataMin, c), c), a.dataMax = s(o(a.dataMax, e), e); if (t(d)) if (a.dataMin >= d) a.dataMin = d, a.ignoreMinPadding = !0; else if (a.dataMax < d) a.dataMax = d, a.ignoreMaxPadding = !0 } }
            })
        }, translate: function (a, b, c, d, e, f) {
            var g =
            this.len, h = 1, i = 0, j = d ? this.oldTransA : this.transA, d = d ? this.oldMin : this.min, k = this.minPixelPadding, e = (this.options.ordinal || this.isLog && e) && this.lin2val; if (!j) j = this.transA; c && (h *= -1, i = g); this.reversed && (h *= -1, i -= h * g); b ? (a = a * h + i, a -= k, a = a / j + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), f === "between" && (f = 0.5), a = h * (a - d) * j + i + h * k + (ua(f) ? j * f * this.pointRange : 0)); return a
        }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) {
            return this.translate(a -
            (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        }, getPlotLinePath: function (a, b, c, d, e) { var f = this.chart, g = this.left, h = this.top, i, j, k = c && f.oldChartHeight || f.chartHeight, l = c && f.oldChartWidth || f.chartWidth, m; i = this.transB; e = o(e, this.translate(a, null, null, c)); a = c = v(e + i); i = j = v(k - e - i); if (isNaN(e)) m = !0; else if (this.horiz) { if (i = h, j = k - this.bottom, a < g || a > g + this.width) m = !0 } else if (a = g, c = l - this.right, i < h || i > h + this.height) m = !0; return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1) }, getLinearTickPositions: function (a,
        b, c) { for (var d, b = ga(Q(b / a) * a), c = ga(Va(c / a) * a), e = []; b <= c;) { e.push(b); b = ga(b + a); if (b === d) break; d = b } return e }, getMinorTickPositions: function () {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e; if (this.isLog) { e = b.length; for (a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0)) } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift(); else for (b = this.min +
            (b[0] - this.min) % c; b <= this.max; b += c) d.push(b); return d
        }, adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, j; if (this.isXAxis && this.minRange === r && !this.isLog) t(a.min) || t(a.max) ? this.minRange = null : (q(this.series, function (a) { i = a.xData; for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) if (h = i[g] - i[g - 1], f === r || h < f) f = h }), this.minRange = y(f * 5, this.dataMax - this.dataMin)); if (c - b < this.minRange) {
                var k = this.minRange; d = (k - c + b) / 2; d = [b - d, o(a.min, b - d)];
                if (e) d[2] = this.dataMin; b = va(d); c = [b + k, o(a.max, b + k)]; if (e) c[2] = this.dataMax; c = Ra(c); c - b < k && (d[0] = c - k, d[1] = o(a.min, c - k), b = va(d))
            } this.min = b; this.max = c
        }, setAxisTranslation: function (a) {
            var b = this.max - this.min, c = 0, d, e = 0, f = 0, g = this.linkedParent, h = !!this.categories, i = this.transA; if (this.isXAxis || h) g ? (e = g.minPointOffset, f = g.pointRangePadding) : q(this.series, function (a) {
                var g = s(a.pointRange, +h), i = a.options.pointPlacement, m = a.closestPointRange; g > b && (g = 0); c = s(c, g); e = s(e, ma(i) ? 0 : g / 2); f = s(f, i === "on" ? 0 : g); !a.noSharedTooltip &&
                t(m) && (d = t(d) ? y(d, m) : m)
            }), g = this.ordinalSlope && d ? this.ordinalSlope / d : 1, this.minPointOffset = e *= g, this.pointRangePadding = f *= g, this.pointRange = y(c, b), this.closestPointRange = d; if (a) this.oldTransA = i; this.translationSlope = this.transA = i = this.len / (b + f || 1); this.transB = this.horiz ? this.left : this.bottom; this.minPixelPadding = i * e
        }, setTickPositions: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, i = b.options.tickPositioner, j = d.maxPadding, k = d.minPadding, l = d.tickInterval,
            m = d.minTickInterval, p = d.tickPixelInterval, n, $ = b.categories; h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = o(c.min, c.dataMin), b.max = o(c.max, c.dataMax), d.type !== b.linkedParent.options.type && pa(11, 1)) : (b.min = o(b.userMin, d.min, b.dataMin), b.max = o(b.userMax, d.max, b.dataMax)); if (e) !a && y(b.min, o(b.dataMin, b.min)) <= 0 && pa(10, 1), b.min = ga(Ea(b.min)), b.max = ga(Ea(b.max)); if (b.range && t(b.max)) b.userMin = b.min = s(b.min, b.max - b.range), b.userMax = b.max, b.range = null; b.beforePadding && b.beforePadding();
            b.adjustForMinRange(); if (!$ && !b.usePercentage && !h && t(b.min) && t(b.max) && (c = b.max - b.min)) { if (!t(d.min) && !t(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding)) b.min -= c * k; if (!t(d.max) && !t(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding)) b.max += c * j } b.min === b.max || b.min === void 0 || b.max === void 0 ? b.tickInterval = 1 : h && !l && p === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = o(l, $ ? 1 : (b.max - b.min) * p / s(b.len, p)), !t(l) && b.len < p && !this.isRadial && !$ && d.startOnTick &&
            d.endOnTick && (n = !0, b.tickInterval /= 4)); g && !a && q(b.series, function (a) { a.processData(b.min !== b.oldMin || b.max !== b.oldMax) }); b.setAxisTranslation(!0); b.beforeSetTickPositions && b.beforeSetTickPositions(); if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval); if (b.pointRange) b.tickInterval = s(b.pointRange, b.tickInterval); if (!l && b.tickInterval < m) b.tickInterval = m; if (!f && !e && !l) b.tickInterval = ub(b.tickInterval, null, tb(b.tickInterval), d); b.minorTickInterval = d.minorTickInterval ===
            "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval; b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : i && i.apply(b, [b.min, b.max]); if (!a) !b.ordinalPositions && (b.max - b.min) / b.tickInterval > s(2 * b.len, 200) && pa(19, !0), a = f ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), n && a.splice(1, a.length - 2),
            b.tickPositions = a; if (!h) e = a[0], f = a[a.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && a.shift(), d.endOnTick ? b.max = f : b.max + h < f && a.pop(), a.length === 1 && (b.min -= 0.001, b.max += 0.001)
        }, setMaxTicks: function () { var a = this.chart, b = a.maxTicks || {}, c = this.tickPositions, d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-"); if (!this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && this.options.alignTicks !== !1) b[d] = c.length; a.maxTicks = b }, adjustTickAmount: function () {
            var a = this._maxTicksKey,
            b = this.tickPositions, c = this.chart.maxTicks; if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1 && this.min !== r) { var d = this.tickAmount, e = b.length; this.tickAmount = a = c[a]; if (e < a) { for (; b.length < a;) b.push(ga(b[b.length - 1] + this.tickInterval)); this.transA *= (e - 1) / (a - 1); this.max = b[b.length - 1] } if (t(d) && a !== d) this.isDirty = !0 }
        }, setScale: function () {
            var a = this.stacks, b, c, d, e; this.oldMin = this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); e = this.len !==
            this.oldAxisLength; q(this.series, function (a) { if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0 }); if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) { if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0; this.forceRedraw = !1; this.getSeriesExtremes(); this.setTickPositions(); this.oldUserMin = this.userMin; this.oldUserMax = this.userMax; if (!this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax } else if (!this.isXAxis) {
                if (this.oldStacks) a =
                this.stacks = this.oldStacks; for (b in a) for (c in a[b]) a[b][c].cum = a[b][c].total
            } this.setMaxTicks()
        }, setExtremes: function (a, b, c, d, e) { var f = this, g = f.chart, c = o(c, !0), e = u(e, { min: a, max: b }); N(f, "setExtremes", e, function () { f.userMin = a; f.userMax = b; f.eventArgs = e; f.isDirtyExtremes = !0; c && g.redraw(d) }) }, zoom: function (a, b) { this.allowZoomOutside || (t(this.dataMin) && a <= this.dataMin && (a = r), t(this.dataMax) && b >= this.dataMax && (b = r)); this.displayBtn = a !== r || b !== r; this.setExtremes(a, b, !1, r, { trigger: "zoom" }); return !0 }, setAxisSize: function () {
            var a =
            this.chart, b = this.options, c = b.offsetLeft || 0, d = b.offsetRight || 0, e = this.horiz, f, g; this.left = g = o(b.left, a.plotLeft + c); this.top = f = o(b.top, a.plotTop); this.width = c = o(b.width, a.plotWidth - c + d); this.height = b = o(b.height, a.plotHeight); this.bottom = a.chartHeight - b - f; this.right = a.chartWidth - c - g; this.len = s(e ? c : b, 0); this.pos = e ? g : f
        }, getExtremes: function () { var a = this.isLog; return { min: a ? ga(na(this.min)) : this.min, max: a ? ga(na(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } },
        getThreshold: function (a) { var b = this.isLog, c = b ? na(this.min) : this.min, b = b ? na(this.max) : this.max; c > a || a === null ? a = c : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, autoLabelAlign: function (a) { a = (o(a, 0) - this.side * 90 + 720) % 360; return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center" }, getOffset: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i = b.inverted ? [1, 0, 3, 2][h] : h, j, k = 0, l, m = 0, p = d.title, n = d.labels, $ = 0, J = b.axisOffset, x = b.clipOffset, v = [-1, 1, 1, -1][h], u,
            w = 1, Ca = o(n.maxStaggerLines, 5), I, y, G, C; a.hasData = j = a.hasVisibleSeries || t(a.min) && t(a.max) && !!e; a.showAxis = b = j || o(d.showEmpty, !0); a.staggerLines = a.horiz && n.staggerLines; if (!a.axisGroup) a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(), a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 2 }).add(), a.labelGroup = c.g("axis-labels").attr({ zIndex: n.zIndex || 7 }).add(); if (j || a.isLinked) {
                a.labelAlign = o(n.align || a.autoLabelAlign(n.rotation)); q(e, function (b) { f[b] ? f[b].addLabel() : f[b] = new Ya(a, b) }); if (a.horiz &&
                !a.staggerLines && Ca && !n.rotation) { for (u = a.reversed ? [].concat(e).reverse() : e; w < Ca;) { j = []; I = !1; for (n = 0; n < u.length; n++) y = u[n], G = (G = f[y].label && f[y].label.getBBox()) ? G.width : 0, C = n % w, G && (y = a.translate(y), j[C] !== r && y < j[C] && (I = !0), j[C] = y + G); if (I) w++; else break } if (w > 1) a.staggerLines = w } q(e, function (b) { if (h === 0 || h === 2 || { 1: "left", 3: "right" }[h] === a.labelAlign) $ = s(f[b].getLabelSize(), $) }); if (a.staggerLines) $ *= a.staggerLines, a.labelOffset = $
            } else for (u in f) f[u].destroy(), delete f[u]; if (p && p.text && p.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle =
                c.text(p.text, 0, 0, p.useHTML).attr({ zIndex: 7, rotation: p.rotation || 0, align: p.textAlign || { low: "left", middle: "center", high: "right" }[p.align] }).css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0; if (b) k = a.axisTitle.getBBox()[g ? "height" : "width"], m = o(p.margin, g ? 5 : 10), l = p.offset; a.axisTitle[b ? "show" : "hide"]()
            } a.offset = v * o(d.offset, J[h]); a.axisTitleMargin = o(l, $ + m + (h !== 2 && $ && v * d.labels[g ? "y" : "x"])); J[h] = s(J[h], a.axisTitleMargin + k + v * a.offset); x[i] = s(x[i], Q(d.lineWidth / 2) * 2)
        }, getLinePath: function (a) {
            var b = this.chart,
            c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d; c && (a *= -1); return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        }, getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, i = E(e.style.fontSize || 12), d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align], b = (a ? c + this.height : b) +
            (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0); return { x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0), y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0) }
        }, render: function () {
            var a = this, b = a.horiz, c = a.reversed, d = a.chart, e = d.renderer, f = a.options, g = a.isLog, h = a.isLinked, i = a.tickPositions, j, k = a.axisTitle, l = a.stacks, m = a.ticks, p = a.minorTicks, n = a.alternateBands, o = f.stackLabels, J = f.alternateGridColor, x = a.tickmarkOffset, s = f.lineWidth, v = d.hasRendered && t(a.oldMin) && !isNaN(a.oldMin), u = a.hasData, w = a.showAxis, I, y = a.justifyLabels =
            !a.staggerLines && b && f.labels.overflow === "justify", G; a.labelEdge.length = 0; q([m, p, n], function (a) { for (var b in a) a[b].isActive = !1 }); if (u || h) if (a.minorTickInterval && !a.categories && q(a.getMinorTickPositions(), function (b) { p[b] || (p[b] = new Ya(a, b, "minor")); v && p[b].isNew && p[b].render(null, !0); p[b].render(null, !1, 1) }), i.length && (j = i.slice(), (b && c || !b && !c) && j.reverse(), y && (j = j.slice(1).concat([j[0]])), q(j, function (b, c) {
            y && (c = c === j.length - 1 ? 0 : c + 1); if (!h || b >= a.min && b <= a.max) m[b] || (m[b] = new Ya(a, b)), v && m[b].isNew &&
            m[b].render(c, !0, 0.1), m[b].render(c, !1, 1)
            }), x && a.min === 0 && (m[-1] || (m[-1] = new Ya(a, -1, null, !0)), m[-1].render(-1))), J && q(i, function (b, c) { if (c % 2 === 0 && b < a.max) n[b] || (n[b] = new Ib(a)), I = b + x, G = i[c + 1] !== r ? i[c + 1] + x : a.max, n[b].options = { from: g ? na(I) : I, to: g ? na(G) : G, color: J }, n[b].render(), n[b].isActive = !0 }), !a._addedPlotLB) q((f.plotLines || []).concat(f.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0; q([m, p, n], function (a) {
                var b, c, e = [], f = wa ? wa.duration || 500 : 0, g = function () {
                    for (c = e.length; c--;) a[e[c]] &&
                    !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
                }; for (b in a) if (!a[b].isActive) a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b); a === n || !d.hasRendered || !f ? g() : f && setTimeout(g, f)
            }); if (s) b = a.getLinePath(s), a.axisLine ? a.axisLine.animate({ d: b }) : a.axisLine = e.path(b).attr({ stroke: f.lineColor, "stroke-width": s, zIndex: 7 }).add(a.axisGroup), a.axisLine[w ? "show" : "hide"](); if (k && w) k[k.isNew ? "attr" : "animate"](a.getTitlePosition()), k.isNew = !1; if (o && o.enabled) {
                var C, P, f = a.stackTotalGroup; if (!f) a.stackTotalGroup =
                f = e.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add(); f.translate(d.plotLeft, d.plotTop); for (C in l) for (P in e = l[C], e) e[P].render(f)
            } a.isDirty = !1
        }, redraw: function () { var a = this.chart.pointer; a.reset && a.reset(!0); this.render(); q(this.plotLinesAndBands, function (a) { a.render() }); q(this.series, function (a) { a.isDirty = !0 }) }, buildStacks: function () { var a = this.series, b = a.length; if (!this.isXAxis) { for (; b--;) a[b].setStackedPoints(); if (this.usePercentage) for (b = 0; b < a.length; b++) a[b].setPercentStacks() } },
        destroy: function (a) { var b = this, c = b.stacks, d, e = b.plotLinesAndBands; a || X(b); for (d in c) Ia(c[d]), c[d] = null; q([b.ticks, b.minorTicks, b.alternateBands], function (a) { Ia(a) }); for (a = e.length; a--;) e[a].destroy(); q("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function (a) { b[a] && (b[a] = b[a].destroy()) }); this.cross && this.cross.destroy() }, drawCrosshair: function (a, b) {
            if (this.crosshair) if ((t(b) || !o(this.crosshair.snap, !0)) === !1) this.hideCrosshair(); else {
                var c, d = this.crosshair,
                e = d.animation; o(d.snap, !0) ? t(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos; c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : o(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c); if (c === null) this.hideCrosshair(); else if (this.cross) this.cross.attr({ visibility: "visible" })[e ? "animate" : "attr"]({ d: c }, e); else {
                    e = { "stroke-width": d.width || 1, stroke: d.color || "#C0C0C0", zIndex: d.zIndex || 2 }; if (d.dashStyle) e.dashstyle = d.dashStyle;
                    this.cross = this.chart.renderer.path(c).attr(e).add()
                }
            }
        }, hideCrosshair: function () { this.cross && this.cross.hide() }
    }; u(W.prototype, {
        getPlotBandPath: function (a, b) { var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a); d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null; return d }, addPlotBand: function (a) { this.addPlotBandOrLine(a, "plotBands") }, addPlotLine: function (a) { this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (a, b) {
            var c = (new Ib(this, a)).render(), d = this.userOptions; c && (b && (d[b] = d[b] || [], d[b].push(a)),
            this.plotLinesAndBands.push(c)); return c
        }, removePlotBandOrLine: function (a) { for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy(); q([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) { for (e = b.length; e--;) b[e].id === a && oa(b, b[e]) }) }
    }); W.prototype.getTimeTicks = function (a, b, c, d) {
        var e = [], f = {}, g = L.global.useUTC, h, i = new Date(b - Ja), j = a.unitRange, k = a.count; if (t(b)) {
            j >= B.second && (i.setMilliseconds(0), i.setSeconds(j >= B.minute ?
            0 : k * Q(i.getSeconds() / k))); if (j >= B.minute) i[Mb](j >= B.hour ? 0 : k * Q(i[wb]() / k)); if (j >= B.hour) i[Nb](j >= B.day ? 0 : k * Q(i[xb]() / k)); if (j >= B.day) i[zb](j >= B.month ? 1 : k * Q(i[Ua]() / k)); j >= B.month && (i[Ob](j >= B.year ? 0 : k * Q(i[jb]() / k)), h = i[kb]()); j >= B.year && (h -= h % k, i[Pb](h)); if (j === B.week) i[zb](i[Ua]() - i[yb]() + o(d, 1)); b = 1; Ja && (i = new Date(i.getTime() + Ja)); h = i[kb](); for (var d = i.getTime(), l = i[jb](), m = i[Ua](), p = g ? Ja : (864E5 + i.getTimezoneOffset() * 6E4) % 864E5; d < c;) e.push(d), j === B.year ? d = ib(h + b * k, 0) : j === B.month ? d = ib(h, l + b * k) :
            !g && (j === B.day || j === B.week) ? d = ib(h, l, m + b * k * (j === B.day ? 1 : 7)) : d += j * k, b++; e.push(d); q(Fb(e, function (a) { return j <= B.hour && a % B.day === p }), function (a) { f[a] = "day" })
        } e.info = u(a, { higherRanks: f, totalRange: j * k }); return e
    }; W.prototype.normalizeTimeTickInterval = function (a, b) {
        var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = B[d[0]], f = d[1],
        g; for (g = 0; g < c.length; g++) if (d = c[g], e = B[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + B[c[g + 1][0]]) / 2) break; e === B.year && a < 5 * e && (f = [1, 2, 5]); c = ub(a / e, f, d[0] === "year" ? s(tb(a / e), 1) : 1); return { unitRange: e, count: c, unitName: d[0] }
    }; W.prototype.getLogTickPositions = function (a, b, c, d) {
        var e = this.options, f = this.len, g = []; if (!d) this._minorAutoInterval = null; if (a >= 0.5) a = v(a), g = this.getLinearTickPositions(a, b, c); else if (a >= 0.08) for (var f = Q(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
            i =
            e.length; for (h = 0; h < i && !l; h++) j = Ea(na(f) * e[h]), j > b && (!d || k <= c) && g.push(k), k > c && (l = !0), k = j
        } else if (b = na(b), c = na(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = o(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = ub(a, null, tb(a)), g = Na(this.getLinearTickPositions(a, b, c), Ea), !d) this._minorAutoInterval = a / 5; if (!d) this.tickInterval = a; return g
    }; Ab.prototype = {
        init: function (a, b) {
            var c = b.borderWidth, d = b.style, e = E(d.padding); this.chart = a; this.options =
            b; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.label = a.renderer.label("", 0, 0, b.shape, null, null, b.useHTML, null, "tooltip").attr({ padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8 }).css(d).css({ padding: 0 }).add().attr({ y: -999 }); ka || this.label.shadow(b.shadow); this.shared = b.shared
        }, destroy: function () { if (this.label) this.label = this.label.destroy(); clearTimeout(this.hideTimer); clearTimeout(this.tooltipTimeout) }, move: function (a, b, c, d) {
            var e = this, f = e.now, g = e.options.animation !==
            !1 && !e.isHidden; u(f, { x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: g ? (2 * f.anchorX + c) / 3 : c, anchorY: g ? (f.anchorY + d) / 2 : d }); e.label.attr(f); if (g && (O(a - f.x) > 1 || O(b - f.y) > 1)) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { e && e.move(a, b, c, d) }, 32)
        }, hide: function () {
            var a = this, b; clearTimeout(this.hideTimer); if (!this.isHidden) b = this.chart.hoverPoints, this.hideTimer = setTimeout(function () { a.label.fadeOut(); a.isHidden = !0 }, o(this.options.hideDelay, 500)), b && q(b, function (a) { a.setState() }), this.chart.hoverPoints =
            null
        }, getAnchor: function (a, b) { var c, d = this.chart, e = d.inverted, f = d.plotTop, g = 0, h = 0, i, a = ja(a); c = a[0].tooltipPos; this.followPointer && b && (b.chartX === r && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]); c || (q(a, function (a) { i = a.series.yAxis; g += a.plotX; h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && i ? i.top - f : 0) }), g /= a.length, h /= a.length, c = [e ? d.plotWidth - h : g, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - g : h]); return Na(c, v) }, getPosition: function (a, b, c) {
            var d = this.chart, e = d.plotLeft,
            f = d.plotTop, g = d.plotWidth, h = d.plotHeight, i = o(this.options.distance, 12), j = c.plotX, c = c.plotY, d = j + e + (d.inverted ? i : -a - i), k = c - b + f + 15, l; d < 7 && (d = e + s(j, 0) + i); d + a > e + g && (d -= d + a - (e + g), k = c - b + f - i, l = !0); k < f + 5 && (k = f + 5, l && c >= k && c <= k + b && (k = c + f + i)); k + b > f + h && (k = s(f, f + h - b - i)); return { x: d, y: k }
        }, defaultFormatter: function (a) {
            var b = this.points || ja(this), c = b[0].series, d; d = [c.tooltipHeaderFormatter(b[0])]; q(b, function (a) { c = a.series; d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat)) });
            d.push(a.options.footerFormat || ""); return d.join("")
        }, refresh: function (a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h = {}, i, j = []; i = e.formatter || this.defaultFormatter; var h = c.hoverPoints, k, l = this.shared; clearTimeout(this.hideTimer); this.followPointer = ja(a)[0].series.tooltipOptions.followPointer; g = this.getAnchor(a, b); f = g[0]; g = g[1]; l && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, h && q(h, function (a) { a.setState() }), q(a, function (a) { a.setState("hover"); j.push(a.getLabelConfig()) }), h = {
                x: a[0].category,
                y: a[0].y
            }, h.points = j, a = a[0]) : h = a.getLabelConfig(); i = i.call(h, this); h = a.series; i === !1 ? this.hide() : (this.isHidden && (eb(d), d.attr("opacity", 1).show()), d.attr({ text: i }), k = e.borderColor || a.color || h.color || "#606060", d.attr({ stroke: k }), this.updatePosition({ plotX: f, plotY: g }), this.isHidden = !1); N(c, "tooltipRefresh", { text: i, x: f + c.plotLeft, y: g + c.plotTop, borderColor: k })
        }, updatePosition: function (a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a); this.move(v(c.x),
            v(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }
    }; var $a = Highcharts.Pointer = function (a, b) { this.init(a, b) }; $a.prototype = {
        init: function (a, b) { var c = b.chart, d = c.events, e = ka ? "" : c.zoomType, c = a.inverted, f; this.options = b; this.chart = a; this.zoomX = f = /x/.test(e); this.zoomY = e = /y/.test(e); this.zoomHor = f && !c || e && c; this.zoomVert = e && !c || f && c; this.runChartClick = d && !!d.click; this.pinchDown = []; this.lastValidTouch = {}; if (b.tooltip.enabled) a.tooltip = new Ab(a, b.tooltip); this.setDOMEvents() }, normalize: function (a, b) {
            var c, d,
            a = a || V.event; if (!a.target) a.target = a.srcElement; a = bc(a); d = a.touches ? a.touches.item(0) : a; if (!b) this.chartPosition = b = ac(this.chart.container); d.pageX === r ? (c = s(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top); return u(a, { chartX: v(c), chartY: v(d) })
        }, getCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }; q(this.chart.axes, function (c) { b[c.isXAxis ? "xAxis" : "yAxis"].push({ axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"]) }) }); return b }, getIndex: function (a) {
            var b = this.chart; return b.inverted ?
            b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        }, runPointActions: function (a) {
            var b = this, c = b.chart, d = c.series, e = c.tooltip, f, g, h = c.hoverPoint, i = c.hoverSeries, j, k, l = c.chartWidth, m = b.getIndex(a); if (e && b.options.tooltip.shared && (!i || !i.noSharedTooltip)) {
                g = []; j = d.length; for (k = 0; k < j; k++) if (d[k].visible && d[k].options.enableMouseTracking !== !1 && !d[k].noSharedTooltip && d[k].tooltipPoints.length && (f = d[k].tooltipPoints[m]) && f.series) f._dist = O(m - f.clientX), l = y(l, f._dist), g.push(f); for (j = g.length; j--;) g[j]._dist >
                l && g.splice(j, 1); if (g.length && g[0].clientX !== b.hoverX) e.refresh(g, a), b.hoverX = g[0].clientX
            } if (i && i.tracker) { if ((f = i.tooltipPoints[m]) && f !== h) f.onMouseOver(a) } else e && e.followPointer && !e.isHidden && (d = e.getAnchor([{}], a), e.updatePosition({ plotX: d[0], plotY: d[1] })); if (e && !b._onDocumentMouseMove) b._onDocumentMouseMove = function (a) { b.onDocumentMouseMove(a) }, A(F, "mousemove", b._onDocumentMouseMove); q(c.axes, function (b) { b.drawCrosshair(a, o(f, h)) })
        }, reset: function (a) {
            var b = this.chart, c = b.hoverSeries, d = b.hoverPoint,
            e = b.tooltip, f = e && e.shared ? b.hoverPoints : d; (a = a && e && f) && ja(f)[0].plotX === r && (a = !1); if (a) e.refresh(f), d && d.setState(d.state, !0); else { if (d) d.onMouseOut(); if (c) c.onMouseOut(); e && e.hide(); if (this._onDocumentMouseMove) X(F, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null; q(b.axes, function (a) { a.hideCrosshair() }); this.hoverX = null }
        }, scaleGroups: function (a, b) {
            var c = this.chart, d; q(c.series, function (e) {
                d = a || e.getPlotBox(); e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d),
                e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            }); c.clipRect.attr(b || c.clipBox)
        }, pinchTranslate: function (a, b, c, d, e, f, g, h) { a && this.pinchTranslateDirection(!0, c, d, e, f, g, h); b && this.pinchTranslateDirection(!1, c, d, e, f, g, h) }, pinchTranslateDirection: function (a, b, c, d, e, f, g, h) {
            var i = this.chart, j = a ? "x" : "y", k = a ? "X" : "Y", l = "chart" + k, m = a ? "width" : "height", p = i["plot" + (a ? "Left" : "Top")], n, o, q = h || 1, x = i.inverted, s = i.bounds[a ? "h" : "v"], r = b.length === 1, v = b[0][l], t = c[0][l], u = !r && b[1][l],
            w = !r && c[1][l], y, c = function () { !r && O(v - u) > 20 && (q = h || O(t - w) / O(v - u)); o = (p - t) / q + v; n = i["plot" + (a ? "Width" : "Height")] / q }; c(); b = o; b < s.min ? (b = s.min, y = !0) : b + n > s.max && (b = s.max - n, y = !0); y ? (t -= 0.8 * (t - g[j][0]), r || (w -= 0.8 * (w - g[j][1])), c()) : g[j] = [t, w]; x || (f[j] = o - p, f[m] = n); f = x ? 1 / q : q; e[m] = n; e[j] = b; d[x ? a ? "scaleY" : "scaleX" : "scale" + k] = q; d["translate" + k] = f * p + (t - f * v)
        }, pinch: function (a) {
            var b = this, c = b.chart, d = b.pinchDown, e = c.tooltip && c.tooltip.options.followTouchMove, f = a.touches, g = f.length, h = b.lastValidTouch, i = b.zoomHor ||
            b.pinchHor, j = b.zoomVert || b.pinchVert, k = i || j, l = b.selectionMarker, m = {}, p = g === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || c.runChartClick), n = {}; (k || e) && !p && a.preventDefault(); Na(f, function (a) { return b.normalize(a) }); if (a.type === "touchstart") q(f, function (a, b) { d[b] = { chartX: a.chartX, chartY: a.chartY } }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY, d[1] && d[1].chartY], q(c.axes, function (a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(a.dataMin),
                    f = a.toPixels(a.dataMax), g = y(e, f), e = s(e, f); b.min = y(a.pos, g - d); b.max = s(a.pos + a.len, e + d)
                }
            }); else if (d.length) { if (!l) b.selectionMarker = l = u({ destroy: la }, c.plotBox); b.pinchTranslate(i, j, d, f, m, l, n, h); b.hasPinched = k; b.scaleGroups(m, n); !k && e && g === 1 && this.runPointActions(b.normalize(a)) }
        }, dragStart: function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }, drag: function (a) {
            var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY,
            f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, i = b.plotTop, j = b.plotWidth, k = b.plotHeight, l, m = this.mouseDownX, p = this.mouseDownY; d < h ? d = h : d > h + j && (d = h + j); e < i ? e = i : e > i + k && (e = i + k); this.hasDragged = Math.sqrt(Math.pow(m - d, 2) + Math.pow(p - e, 2)); if (this.hasDragged > 10) {
                l = b.isInsidePlot(m - h, p - i); if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker) this.selectionMarker = b.renderer.rect(h, i, f ? 1 : j, g ? 1 : k, 0).attr({ fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7 }).add(); this.selectionMarker &&
                f && (d -= m, this.selectionMarker.attr({ width: O(d), x: (d > 0 ? 0 : d) + m })); this.selectionMarker && g && (d = e - p, this.selectionMarker.attr({ height: O(d), y: (d > 0 ? 0 : d) + p })); l && !this.selectionMarker && c.panning && b.pan(a, c.panning)
            }
        }, drop: function (a) {
            var b = this.chart, c = this.hasPinched; if (this.selectionMarker) {
                var d = { xAxis: [], yAxis: [], originalEvent: a.originalEvent || a }, e = this.selectionMarker, f = e.x, g = e.y, h; if (this.hasDragged || c) q(b.axes, function (a) {
                    if (a.zoomEnabled) {
                        var b = a.horiz, c = a.toValue(b ? f : g), b = a.toValue(b ? f + e.width :
                        g + e.height); !isNaN(c) && !isNaN(b) && (d[a.coll].push({ axis: a, min: y(c, b), max: s(c, b) }), h = !0)
                    }
                }), h && N(b, "selection", d, function (a) { b.zoom(u(a, c ? { animation: !1 } : null)) }); this.selectionMarker = this.selectionMarker.destroy(); c && this.scaleGroups()
            } if (b) z(b.container, { cursor: b._cursor }), b.cancelClick = this.hasDragged > 10, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        }, onContainerMouseDown: function (a) { a = this.normalize(a); a.preventDefault && a.preventDefault(); this.dragStart(a) }, onDocumentMouseUp: function (a) { this.drop(a) },
        onDocumentMouseMove: function (a) { var b = this.chart, c = this.chartPosition, d = b.hoverSeries, a = this.normalize(a, c); c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset() }, onContainerMouseLeave: function () { this.reset(); this.chartPosition = null }, onContainerMouseMove: function (a) {
            var b = this.chart, a = this.normalize(a); b.mouseIsDown === "mousedown" && this.drag(a); (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY -
            b.plotTop)) && !b.openMenu && this.runPointActions(a)
        }, inClass: function (a, b) { for (var c; a;) { if (c = H(a, "class")) if (c.indexOf(b) !== -1) return !0; else if (c.indexOf("highcharts-container") !== -1) return !1; a = a.parentNode } }, onTrackerMouseOut: function (a) { var b = this.chart.hoverSeries, c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series; if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b) b.onMouseOut() }, onContainerClick: function (a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop,
            f = b.inverted, g, h, i, a = this.normalize(a); a.cancelBubble = !0; if (!b.cancelClick) c && this.inClass(a.target, "highcharts-tracker") ? (g = this.chartPosition, h = c.plotX, i = c.plotY, u(c, { pageX: g.left + d + (f ? b.plotWidth - i : h), pageY: g.top + e + (f ? b.plotHeight - h : i) }), N(c.series, "click", u(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (u(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && N(b, "click", a))
        }, onContainerTouchStart: function (a) {
            var b = this.chart; a.touches.length === 1 ? (a = this.normalize(a), b.isInsidePlot(a.chartX -
            b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : a.touches.length === 2 && this.pinch(a)
        }, onContainerTouchMove: function (a) { (a.touches.length === 1 || a.touches.length === 2) && this.pinch(a) }, onDocumentTouchEnd: function (a) { this.drop(a) }, setDOMEvents: function () {
            var a = this, b = a.chart.container, c; this._events = c = [[b, "onmousedown", "onContainerMouseDown"], [b, "onmousemove", "onContainerMouseMove"], [b, "onclick", "onContainerClick"], [b, "mouseleave", "onContainerMouseLeave"], [F, "mouseup",
            "onDocumentMouseUp"]]; db && c.push([b, "ontouchstart", "onContainerTouchStart"], [b, "ontouchmove", "onContainerTouchMove"], [F, "touchend", "onDocumentTouchEnd"]); q(c, function (b) { a["_" + b[2]] = function (c) { a[b[2]](c) }; b[1].indexOf("on") === 0 ? b[0][b[1]] = a["_" + b[2]] : A(b[0], b[1], a["_" + b[2]]) })
        }, destroy: function () { var a = this; q(a._events, function (b) { b[1].indexOf("on") === 0 ? b[0][b[1]] = null : X(b[0], b[1], a["_" + b[2]]) }); delete a._events; clearInterval(a.tooltipTimeout) }
    }; var fb = Highcharts.TrackerMixin = {
        drawTrackerPoint: function () {
            var a =
            this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && { cursor: d }, f = function (c) { var d = c.target, e; if (b.hoverSeries !== a) a.onMouseOver(); for (; d && !e;) e = d.point, d = d.parentNode; if (e !== r && e !== b.hoverPoint) e.onMouseOver(c) }; q(a.points, function (a) { if (a.graphic) a.graphic.element.point = a; if (a.dataLabel) a.dataLabel.element.point = a }); if (!a._hasTracking) q(a.trackerGroups, function (b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (a) { c.onTrackerMouseOut(a) }).css(e), db)) a[b].on("touchstart",
                f)
            }), a._hasTracking = !0
        }, drawTrackerGraph: function () {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.pointer, h = f.renderer, i = f.options.tooltip.snap, j = a.tracker, k = b.cursor, l = k && { cursor: k }, k = a.singlePoints, m, p = function () { if (f.hoverSeries !== a) a.onMouseOver() }; if (e && !c) for (m = e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]); for (m = 0; m < k.length; m++) e = k[m], d.push("M", e.plotX - i, e.plotY, "L",
            e.plotX + i, e.plotY); j ? j.attr({ d: d }) : (a.tracker = h.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: Tb, fill: c ? Tb : ba, "stroke-width": b.lineWidth + (c ? 0 : 2 * i), zIndex: 2 }).add(a.group), q([a.tracker, a.markerGroup], function (a) { a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) { g.onTrackerMouseOut(a) }).css(l); if (db) a.on("touchstart", p) }))
        }
    }; if (V.PointerEvent || V.MSPointerEvent) {
        var ta = {}; $a.prototype.getWebkitTouches = function () {
            var a, b = []; b.item = function (a) { return this[a] };
            for (a in ta) ta.hasOwnProperty(a) && b.push({ pageX: ta[a].pageX, pageY: ta[a].pageY, target: ta[a].target }); return b
        }; U($a.prototype, "init", function (a, b, c) { b.container.style["-ms-touch-action"] = b.container.style["touch-action"] = "none"; a.call(this, b, c) }); U($a.prototype, "setDOMEvents", function (a) {
            var b = this; a.apply(this, Array.prototype.slice.call(arguments, 1)); q([[this.chart.container, "PointerDown", "touchstart", "onContainerTouchStart", function (a) { ta[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } }],
            [this.chart.container, "PointerMove", "touchmove", "onContainerTouchMove", function (a) { ta[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; if (!ta[a.pointerId].target) ta[a.pointerId].target = a.currentTarget }], [document, "PointerUp", "touchend", "onDocumentTouchEnd", function (a) { delete ta[a.pointerId] }]], function (a) {
                A(a[0], window.PointerEvent ? a[1].toLowerCase() : "MS" + a[1], function (d) {
                    d = d.originalEvent; if (d.pointerType === "touch" || d.pointerType === d.MSPOINTER_TYPE_TOUCH) a[4](d), b[a[3]]({
                        type: a[2], target: d.currentTarget,
                        preventDefault: la, touches: b.getWebkitTouches()
                    })
                })
            })
        })
    } var Jb = Highcharts.Legend = function (a, b) { this.init(a, b) }; Jb.prototype = {
        init: function (a, b) {
            var c = this, d = b.itemStyle, e = o(b.padding, 8), f = b.itemMarginTop || 0; this.options = b; if (b.enabled) c.baseline = E(d.fontSize) + 3 + f, c.itemStyle = d, c.itemHiddenStyle = w(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = o(b.symbolWidth, 16), c.pages = [], c.render(),
            A(c.chart, "endResize", function () { c.positionCheckboxes() })
        }, colorizeItem: function (a, b) { var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color : g, g = a.options && a.options.marker, i = { stroke: h, fill: h }, j; d && d.css({ fill: c, color: c }); e && e.attr({ stroke: h }); if (f) { if (g && f.isMarker) for (j in g = a.convertAttribs(g), g) d = g[j], d !== r && (i[j] = d); f.attr(i) } }, positionItem: function (a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos,
            e = d[0], d = d[1], f = a.checkbox; a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d); if (f) f.x = e, f.y = d
        }, destroyItem: function (a) { var b = a.checkbox; q(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); b && Sa(a.checkbox) }, destroy: function () { var a = this.group, b = this.box; if (b) this.box = b.destroy(); if (a) this.group = a.destroy() }, positionCheckboxes: function (a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight; if (b) c = b.translateY, q(this.allItems,
            function (e) { var f = e.checkbox, g; f && (g = c + f.y + (a || 0) + 3, z(f, { left: b.translateX + e.legendItemWidth + f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : ba })) })
        }, renderTitle: function () { var a = this.padding, b = this.options.title, c = 0; if (b.text) { if (!this.title) this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group); a = this.title.getBBox(); c = a.height; this.offsetWidth = a.width; this.contentGroup.attr({ translateY: c }) } this.titleHeight = c },
        renderItem: function (a) {
            var C; var b = this, c = b.chart, d = c.renderer, e = b.options, f = e.layout === "horizontal", g = b.symbolWidth, h = e.symbolPadding, i = b.itemStyle, j = b.itemHiddenStyle, k = b.padding, l = f ? o(e.itemDistance, 8) : 0, m = !e.rtl, p = e.width, n = e.itemMarginBottom || 0, q = b.itemMarginTop, J = b.initialItemX, x = a.legendItem, r = a.series && a.series.drawLegendSymbol ? a.series : a, t = r.options, t = t && t.showCheckbox, u = e.useHTML; if (!x && (a.legendGroup = d.g("legend-item").attr({ zIndex: 1 }).add(b.scrollGroup), r.drawLegendSymbol(b, a), a.legendItem =
            x = d.text(e.labelFormat ? Ha(e.labelFormat, a) : e.labelFormatter.call(a), m ? g + h : -h, b.baseline, u).css(w(a.visible ? i : j)).attr({ align: m ? "left" : "right", zIndex: 2 }).add(a.legendGroup), (u ? x : a.legendGroup).on("mouseover", function () { a.setState("hover"); x.css(b.options.itemHoverStyle) }).on("mouseout", function () { x.css(a.visible ? i : j); a.setState() }).on("click", function (b) { var c = function () { a.setVisible() }, b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : N(a, "legendItemClick", b, c) }), b.colorizeItem(a,
            a.visible), t)) a.checkbox = Z("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, e.itemCheckboxStyle, c.container), A(a.checkbox, "click", function (b) { N(a, "checkboxClick", { checked: b.target.checked }, function () { a.select() }) }); d = x.getBBox(); C = a.legendItemWidth = e.itemWidth || a.legendItemWidth || g + h + d.width + l + (t ? 20 : 0), e = C; b.itemHeight = g = v(a.legendItemHeight || d.height); if (f && b.itemX - J + e > (p || c.chartWidth - 2 * k - J)) b.itemX = J, b.itemY += q + b.lastLineHeight + n, b.lastLineHeight = 0; b.maxItemWidth = s(b.maxItemWidth,
            e); b.lastItemY = q + b.itemY + n; b.lastLineHeight = s(g, b.lastLineHeight); a._legendItemPos = [b.itemX, b.itemY]; f ? b.itemX += e : (b.itemY += q + g + n, b.lastLineHeight = g); b.offsetWidth = p || s((f ? b.itemX - J - l : e) + k, b.offsetWidth)
        }, getAllItems: function () { var a = []; q(this.chart.series, function (b) { var c = b.options; if (o(c.showInLegend, !t(c.linkedTo) ? r : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b)) }); return a }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, j = a.options, k = a.padding,
            l = j.borderWidth, m = j.backgroundColor; a.itemX = a.initialItemX; a.itemY = a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; if (!d) a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup); a.renderTitle(); e = a.getAllItems(); vb(e, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); j.reversed && e.reverse(); a.allItems = e; a.display = f = !!e.length; q(e, function (b) { a.renderItem(b) }); g = j.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight; h = a.handleOverflow(h); if (l || m) { g += k; h += k; if (i) { if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp(null, null, null, g, h)), i.isNew = !1 } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({ stroke: j.borderColor, "stroke-width": l || 0, fill: m || ba }).add(d).shadow(j.shadow), i.isNew = !0; i[f ? "show" : "hide"]() } a.legendWidth = g; a.legendHeight = h; q(e, function (b) { a.positionItem(b) }); f && d.align(u({ width: g, height: h }, j), !0, "spacingBox"); b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b =
            this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h, i = this.clipRect, j = e.navigation, k = o(j.animation, !0), l = j.arrowSize || 12, m = this.nav, p = this.pages, n, $ = this.allItems; e.layout === "horizontal" && (f /= 2); g && (f = y(f, g)); p.length = 0; if (a > f && !e.useHTML) {
                this.clipHeight = h = f - 20 - this.titleHeight - this.padding; this.currentPage = o(this.currentPage, 1); this.fullHeight = a; q($, function (a, b) {
                    var c = a._legendItemPos[1], d = v(a.legendItem.bBox.height),
                    e = p.length; if (!e || c - p[e - 1] > h) p.push(n || c); b === $.length - 1 && c + d - p[e - 1] > h && p.push(c); c !== n && (n = c)
                }); if (!i) i = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(i); i.attr({ height: h }); if (!m) this.nav = m = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function () { b.scroll(-1, k) }).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function () { b.scroll(1, k) }).add(m); b.scroll(0); a = f
            } else if (m) i.attr({ height: c.chartHeight }),
            m.hide(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0; return a
        }, scroll: function (a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, i = this.pager, j = this.padding; e > d && (e = d); if (e > 0) b !== r && Xa(b, this.chart), this.nav.attr({ translateX: j, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ fill: e === 1 ? g : h }).css({ cursor: e === 1 ? "default" : "pointer" }), i.attr({ text: e + "/" + d }), this.down.attr({
                x: 18 +
                this.pager.getBBox().width, fill: e === d ? g : h
            }).css({ cursor: e === d ? "default" : "pointer" }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: c }), this.currentPage = e, this.positionCheckboxes(c)
        }
    }; K = Highcharts.LegendSymbolMixin = {
        drawRectangle: function (a, b) { var c = a.options.symbolHeight || 12; b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, o(a.options.symbolRadius, 2)).attr({ zIndex: 3 }).add(b.legendGroup) }, drawLineMarker: function (a) {
            var b = this.options, c = b.marker, d; d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup, a = a.baseline - v(e.fontMetrics(a.options.itemStyle.fontSize).b * 0.3), g; if (b.lineWidth) { g = { "stroke-width": b.lineWidth }; if (b.dashStyle) g.dashstyle = b.dashStyle; this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f) } if (c && c.enabled) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    }; /Trident\/7\.0/.test(za) && U(Jb.prototype, "positionItem", function (a, b) {
        var c = this, d = function () { b._legendItemPos && a.call(c, b) }; c.chart.renderer.forExport ?
        d() : setTimeout(d)
    }); ya.prototype = {
        init: function (a, b) {
            var c, d = a.series; a.series = null; c = w(L, a); c.series = a.series = d; this.userOptions = a; d = c.chart; this.margin = this.splashArray("margin", d); this.spacing = this.splashArray("spacing", d); var e = d.events; this.bounds = { h: {}, v: {} }; this.callback = b; this.isResizing = 0; this.options = c; this.axes = []; this.series = []; this.hasCartesianSeries = d.showAxes; var f = this, g; f.index = Wa.length; Wa.push(f); d.reflow !== !1 && A(f, "load", function () { f.initReflow() }); if (e) for (g in e) A(f, g, e[g]);
            f.xAxis = []; f.yAxis = []; f.animation = ka ? !1 : o(d.animation, !0); f.pointCount = 0; f.counters = new Kb; f.firstRender()
        }, initSeries: function (a) { var b = this.options.chart; (b = D[a.type || b.type || b.defaultSeriesType]) || pa(17, !0); b = new b; b.init(this, a); return b }, isInsidePlot: function (a, b, c) { var d = c ? b : a, a = c ? a : b; return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight }, adjustTickAmounts: function () { this.options.chart.alignTicks !== !1 && q(this.axes, function (a) { a.adjustTickAmount() }); this.maxTicks = null }, redraw: function (a) {
            var b =
            this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, i = this.isDirtyBox, j = c.length, k = j, l = this.renderer, m = l.isHidden(), p = []; Xa(a, this); m && this.cloneRenderTo(); for (this.layOutTitles() ; k--;) if (a = c[k], a.options.stacking && (g = !0, a.isDirty)) { h = !0; break } if (h) for (k = j; k--;) if (a = c[k], a.options.stacking) a.isDirty = !0; q(c, function (a) { a.isDirty && a.options.legendType === "point" && (f = !0) }); if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1; g && this.getStacks(); if (this.hasCartesianSeries) {
                if (!this.isResizing) this.maxTicks =
                null, q(b, function (a) { a.setScale() }); this.adjustTickAmounts(); this.getMargins(); q(b, function (a) { a.isDirty && (i = !0) }); q(b, function (a) { if (a.isDirtyExtremes) a.isDirtyExtremes = !1, p.push(function () { N(a, "afterSetExtremes", u(a.eventArgs, a.getExtremes())); delete a.eventArgs }); (i || g) && a.redraw() })
            } i && this.drawChartBox(); q(c, function (a) { a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw() }); d && d.reset && d.reset(!0); l.draw(); N(this, "redraw"); m && this.cloneRenderTo(!0); q(p, function (a) { a.call() })
        }, get: function (a) {
            var b =
            this.axes, c = this.series, d, e; for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d]; for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d]; for (d = 0; d < c.length; d++) { e = c[d].points || []; for (b = 0; b < e.length; b++) if (e[b].id === a) return e[b] } return null
        }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = ja(b.xAxis || {}), b = b.yAxis = ja(b.yAxis || {}); q(c, function (a, b) { a.index = b; a.isX = !0 }); q(b, function (a, b) { a.index = b }); c = c.concat(b); q(c, function (b) { new W(a, b) }); a.adjustTickAmounts() }, getSelectedPoints: function () {
            var a =
            []; q(this.series, function (b) { a = a.concat(Fb(b.points || [], function (a) { return a.selected })) }); return a
        }, getSelectedSeries: function () { return Fb(this.series, function (a) { return a.selected }) }, getStacks: function () { var a = this; q(a.yAxis, function (a) { if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks }); q(a.series, function (b) { if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1)) b.stackKey = b.type + o(b.options.stack, "") }) }, showResetZoom: function () {
            var a = this, b = L.lang, c = a.options.chart.resetZoomButton,
            d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : "plotBox"; this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).add().align(c.position, !1, f)
        }, zoomOut: function () { var a = this; N(a, "selection", { resetSelection: !0 }, function () { a.zoom() }) }, zoom: function (a) {
            var b, c = this.pointer, d = !1, e; !a || a.resetSelection ? q(this.axes, function (a) { b = a.zoom() }) : q(a.xAxis.concat(a.yAxis), function (a) {
                var e = a.axis, h = e.isXAxis; if (c[h ?
                "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            }); e = this.resetZoomButton; if (d && !e) this.showResetZoom(); else if (!d && aa(e)) this.resetZoomButton = e.destroy(); b && this.redraw(o(this.options.chart.animation, a && a.animation, this.pointCount < 100))
        }, pan: function (a, b) {
            var c = this, d = c.hoverPoints, e; d && q(d, function (a) { a.setState() }); q(b === "xy" ? [1, 0] : [1], function (b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], i = c[b ? "mouseDownX" : "mouseDownY"], j = (h.pointRange || 0) / 2, k = h.getExtremes(),
                l = h.toValue(i - d, !0) + j, i = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j; h.series.length && l > y(k.dataMin, k.min) && i < s(k.dataMax, k.max) && (h.setExtremes(l, i, !1, !1, { trigger: "pan" }), e = !0); c[b ? "mouseDownX" : "mouseDownY"] = d
            }); e && c.redraw(!1); z(c.container, { cursor: "move" })
        }, setTitle: function (a, b) {
            var f; var c = this, d = c.options, e; e = d.title = w(d.title, a); f = d.subtitle = w(d.subtitle, b), d = f; q([["title", a, e], ["subtitle", b, d]], function (a) {
                var b = a[0], d = c[b], e = a[1], a = a[2]; d && e && (c[b] = d = d.destroy()); a && a.text && !d && (c[b] =
                c.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add())
            }); c.layOutTitles()
        }, layOutTitles: function () {
            var a = 0, b = this.title, c = this.subtitle, d = this.options, e = d.title, d = d.subtitle, f = this.spacingBox.width - 44; if (b && (b.css({ width: (e.width || f) + "px" }).align(u({ y: 15 }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign)) a = b.getBBox().height, a >= 18 && a <= 25 && (a = 15); c && (c.css({ width: (d.width || f) + "px" }).align(u({ y: a + e.margin }, d), !1, "spacingBox"), !d.floating &&
            !d.verticalAlign && (a = Va(a + c.getBBox().height))); this.titleOffset = a
        }, getChartSize: function () { var a = this.options.chart, b = this.renderToClone || this.renderTo; this.containerWidth = nb(b, "width"); this.containerHeight = nb(b, "height"); this.chartWidth = s(0, a.width || this.containerWidth || 600); this.chartHeight = s(0, o(a.height, this.containerHeight > 19 ? this.containerHeight : 400)) }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container; a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c &&
            c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), z(b, { position: "absolute", top: "-9999px", display: "block" }), F.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options.chart, c, d, e; this.renderTo = a = b.renderTo; e = "highcharts-" + Db++; if (ma(a)) this.renderTo = a = F.getElementById(a); a || pa(13, !0); c = E(H(a, "data-highcharts-chart")); !isNaN(c) && Wa[c] && Wa[c].destroy(); H(a, "data-highcharts-chart", this.index); a.innerHTML = ""; a.offsetWidth ||
            this.cloneRenderTo(); this.getChartSize(); c = this.chartWidth; d = this.chartHeight; this.container = a = Z(Ta, { className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e }, u({ position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, b.style), this.renderToClone || a); this._cursor = a.style.cursor; this.renderer = b.forExport ? new sa(a, c, d, !0) : new Za(a, c, d); ka && this.renderer.create(this, a, c, d)
        }, getMargins: function () {
            var a =
            this.spacing, b, c = this.legend, d = this.margin, e = this.options.legend, f = o(e.margin, 10), g = e.x, h = e.y, i = e.align, j = e.verticalAlign, k = this.titleOffset; this.resetMargins(); b = this.axisOffset; if (k && !t(d[0])) this.plotTop = s(this.plotTop, k + this.options.title.margin + a[0]); if (c.display && !e.floating) if (i === "right") { if (!t(d[1])) this.marginRight = s(this.marginRight, c.legendWidth - g + f + a[1]) } else if (i === "left") { if (!t(d[3])) this.plotLeft = s(this.plotLeft, c.legendWidth + g + f + a[3]) } else if (j === "top") {
                if (!t(d[0])) this.plotTop = s(this.plotTop,
                c.legendHeight + h + f + a[0])
            } else if (j === "bottom" && !t(d[2])) this.marginBottom = s(this.marginBottom, c.legendHeight - h + f + a[2]); this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin); this.extraTopMargin && (this.plotTop += this.extraTopMargin); this.hasCartesianSeries && q(this.axes, function (a) { a.getOffset() }); t(d[3]) || (this.plotLeft += b[3]); t(d[0]) || (this.plotTop += b[0]); t(d[2]) || (this.marginBottom += b[2]); t(d[1]) || (this.marginRight += b[1]); this.setChartSize()
        }, reflow: function (a) {
            var b = this, c = b.options.chart,
            d = b.renderTo, e = c.width || nb(d, "width"), f = c.height || nb(d, "height"), c = a ? a.target : V, d = function () { if (b.container) b.setSize(e, f, !1), b.hasUserSize = null }; if (!b.hasUserSize && e && f && (c === V || c === F)) { if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d(); b.containerWidth = e; b.containerHeight = f }
        }, initReflow: function () { var a = this, b = function (b) { a.reflow(b) }; A(V, "resize", b); A(a, "destroy", function () { X(V, "resize", b) }) }, setSize: function (a, b, c) {
            var d = this, e,
            f, g; d.isResizing += 1; g = function () { d && N(d, "endResize", null, function () { d.isResizing -= 1 }) }; Xa(c, d); d.oldChartHeight = d.chartHeight; d.oldChartWidth = d.chartWidth; if (t(a)) d.chartWidth = e = s(0, v(a)), d.hasUserSize = !!e; if (t(b)) d.chartHeight = f = s(0, v(b)); (wa ? ob : z)(d.container, { width: e + "px", height: f + "px" }, wa); d.setChartSize(!0); d.renderer.setSize(e, f, c); d.maxTicks = null; q(d.axes, function (a) { a.isDirty = !0; a.setScale() }); q(d.series, function (a) { a.isDirty = !0 }); d.isDirtyLegend = !0; d.isDirtyBox = !0; d.getMargins(); d.redraw(c);
            d.oldChartHeight = null; N(d, "resize"); wa === !1 ? g() : setTimeout(g, wa && wa.duration || 500)
        }, setChartSize: function (a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, i, j, k, l; this.plotLeft = i = v(this.plotLeft); this.plotTop = j = v(this.plotTop); this.plotWidth = k = s(0, v(d - i - this.marginRight)); this.plotHeight = l = s(0, v(e - j - this.marginBottom)); this.plotSizeX = b ? l : k; this.plotSizeY = b ? k : l; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox =
            c.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2] }; this.plotBox = c.plotBox = { x: i, y: j, width: k, height: l }; d = 2 * Q(this.plotBorderWidth / 2); b = Va(s(d, h[3]) / 2); c = Va(s(d, h[0]) / 2); this.clipBox = { x: b, y: c, width: Q(this.plotSizeX - s(d, h[1]) / 2 - b), height: Q(this.plotSizeY - s(d, h[2]) / 2 - c) }; a || q(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
        }, resetMargins: function () {
            var a = this.spacing, b = this.margin; this.plotTop = o(b[0], a[0]); this.marginRight = o(b[1], a[1]); this.marginBottom = o(b[2], a[2]); this.plotLeft =
            o(b[3], a[3]); this.axisOffset = [0, 0, 0, 0]; this.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, j = a.backgroundColor, k = a.plotBackgroundColor, l = a.plotBackgroundImage, m = a.plotBorderWidth || 0, p, n = this.plotLeft, o = this.plotTop, q = this.plotWidth, x = this.plotHeight, s = this.plotBox, r = this.clipRect, v = this.clipBox; p = i + (a.shadow ? 8 : 0); if (i || j) if (e) e.animate(e.crisp(null,
            null, null, c - p, d - p)); else { e = { fill: j || ba }; if (i) e.stroke = a.borderColor, e["stroke-width"] = i; this.chartBackground = b.rect(p / 2, p / 2, c - p, d - p, a.borderRadius, i).attr(e).add().shadow(a.shadow) } if (k) f ? f.animate(s) : this.plotBackground = b.rect(n, o, q, x, 0).attr({ fill: k }).add().shadow(a.plotShadow); if (l) h ? h.animate(s) : this.plotBGImage = b.image(l, n, o, q, x).add(); r ? r.animate({ width: v.width, height: v.height }) : this.clipRect = b.clipRect(v); if (m) g ? g.animate(g.crisp(null, n, o, q, x)) : this.plotBorder = b.rect(n, o, q, x, 0, -m).attr({
                stroke: a.plotBorderColor,
                "stroke-width": m, zIndex: 1
            }).add(); this.isDirtyBox = !1
        }, propFromSeries: function () { var a = this, b = a.options.chart, c, d = a.options.series, e, f; q(["inverted", "angular", "polar"], function (g) { c = D[b.type || b.defaultSeriesType]; f = a[g] || b[g] || c && c.prototype[g]; for (e = d && d.length; !f && e--;) (c = D[d[e].type]) && c.prototype[g] && (f = !0); a[g] = f }) }, linkSeries: function () {
            var a = this, b = a.series; q(b, function (a) { a.linkedSeries.length = 0 }); q(b, function (b) {
                var d = b.options.linkedTo; if (ma(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b),
                b.linkedParent = d
            })
        }, render: function () {
            var a = this, b = a.axes, c = a.renderer, d = a.options, e = d.labels, f = d.credits, g; a.setTitle(); a.legend = new Jb(a, d.legend); a.getStacks(); q(b, function (a) { a.setScale() }); a.getMargins(); a.maxTicks = null; q(b, function (a) { a.setTickPositions(!0); a.setMaxTicks() }); a.adjustTickAmounts(); a.getMargins(); a.drawChartBox(); a.hasCartesianSeries && q(b, function (a) { a.render() }); if (!a.seriesGroup) a.seriesGroup = c.g("series-group").attr({ zIndex: 3 }).add(); q(a.series, function (a) {
                a.translate(); a.setTooltipPoints();
                a.render()
            }); e.items && q(e.items, function (b) { var d = u(e.style, b.style), f = E(d.left) + a.plotLeft, g = E(d.top) + a.plotTop + 12; delete d.left; delete d.top; c.text(b.html, f, g).attr({ zIndex: 2 }).css(d).add() }); if (f.enabled && !a.credits) g = f.href, a.credits = c.text(f.text, 0, 0).on("click", function () { if (g) location.href = g }).attr({ align: f.position.align, zIndex: 8 }).css(f.style).add().align(f.position); a.hasRendered = !0
        }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode; N(a, "destroy"); Wa[a.index] =
            r; a.renderTo.removeAttribute("data-highcharts-chart"); X(a); for (e = b.length; e--;) b[e] = b[e].destroy(); for (e = c.length; e--;) c[e] = c[e].destroy(); q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function (b) { var c = a[b]; c && c.destroy && (a[b] = c.destroy()) }); if (d) d.innerHTML = "", X(d), f && Sa(d); for (e in a) delete a[e]
        }, isReadyToRender: function () {
            var a = this; return !da && V == V.top && F.readyState !==
            "complete" || ka && !V.canvg ? (ka ? Vb.push(function () { a.firstRender() }, a.options.global.canvasToolsURL) : F.attachEvent("onreadystatechange", function () { F.detachEvent("onreadystatechange", a.firstRender); F.readyState === "complete" && a.firstRender() }), !1) : !0
        }, firstRender: function () {
            var a = this, b = a.options, c = a.callback; if (a.isReadyToRender()) a.getContainer(), N(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), q(b.series || [], function (b) { a.initSeries(b) }), a.linkSeries(), N(a, "beforeRender"),
            a.pointer = new $a(a, b), a.render(), a.renderer.draw(), c && c.apply(a, [a]), q(a.callbacks, function (b) { b.apply(a, [a]) }), a.cloneRenderTo(!0), N(a, "load")
        }, splashArray: function (a, b) { var c = b[a], c = aa(c) ? c : [c, c, c, c]; return [o(b[a + "Top"], c[0]), o(b[a + "Right"], c[1]), o(b[a + "Bottom"], c[2]), o(b[a + "Left"], c[3])] }
    }; ya.prototype.callbacks = []; qa = Highcharts.CenteredSeriesMixin = {
        getCenter: function () {
            var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d, e = b.plotWidth - 2 * c, f = b.plotHeight - 2 * c, b = a.center, a = [o(b[0], "50%"), o(b[1],
            "50%"), a.size || "100%", a.innerSize || 0], g = y(e, f), h; return Na(a, function (a, b) { h = /%$/.test(a); d = b < 2 || b === 2 && h; return (h ? [e, f, g, g][b] * E(a) / 100 : a) + (d ? c : 0) })
        }
    }; var Da = function () { }; Da.prototype = {
        init: function (a, b, c) { this.series = a; this.applyOptions(b, c); this.pointAttr = {}; if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0; a.chart.pointCount++; return this }, applyOptions: function (a, b) {
            var c = this.series, d =
            c.pointValKey, a = Da.prototype.optionsToObject.call(this, a); u(this, a); this.options = this.options ? u(this.options, a) : a; if (d) this.y = this[d]; if (this.x === r && c) this.x = b === r ? c.autoIncrement() : b; return this
        }, optionsToObject: function (a) {
            var b = {}, c = this.series, d = c.pointArrayMap || ["y"], e = d.length, f = 0, g = 0; if (typeof a === "number" || a === null) b[d[0]] = a; else if (Pa(a)) { if (a.length > e) { c = typeof a[0]; if (c === "string") b.name = a[0]; else if (c === "number") b.x = a[0]; f++ } for (; g < e;) b[d[g++]] = a[f++] } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0; if (a.marker) c._hasPointMarkers = !0
            } return b
        }, destroy: function () { var a = this.series.chart, b = a.hoverPoints, c; a.pointCount--; if (b && (this.setState(), oa(b, this), !b.length)) a.hoverPoints = null; if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) X(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (c in this) this[c] = null }, destroyElements: function () {
            for (var a = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),
            b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function () { return { x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }, select: function (a, b) {
            var c = this, d = c.series, e = d.chart, a = o(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                c.selected = c.options.selected = a; d.options.data[Aa(c, d.data)] = c.options; c.setState(a && "select"); b || q(e.getSelectedPoints(), function (a) {
                    if (a.selected &&
                    a !== c) a.selected = a.options.selected = !1, d.options.data[Aa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        }, onMouseOver: function (a) { var b = this.series, c = b.chart, d = c.tooltip, e = c.hoverPoint; if (e && e !== this) e.onMouseOut(); this.firePointEvent("mouseOver"); d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a); this.setState("hover"); c.hoverPoint = this }, onMouseOut: function () {
            var a = this.series.chart, b = a.hoverPoints; if (!b || Aa(this, b) === -1) this.firePointEvent("mouseOut"), this.setState(), a.hoverPoint =
            null
        }, tooltipFormatter: function (a) { var b = this.series, c = b.tooltipOptions, d = o(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || ""; q(b.pointArrayMap || ["y"], function (b) { b = "{point." + b; if (e || f) a = a.replace(b + "}", e + b + "}" + f); a = a.replace(b + "}", b + ":,." + d + "f}") }); return Ha(a, { point: this, series: this.series }) }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options; (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents(); a === "click" && e.allowPointSelect && (c = function (a) {
                d.select(null,
                a.ctrlKey || a.metaKey || a.shiftKey)
            }); N(this, a, b, c)
        }, importEvents: function () { if (!this.hasImportedEvents) { var a = w(this.series.options.point, this.options).events, b; this.events = a; for (b in a) A(this, b, a[b]); this.hasImportedEvents = !0 } }, setState: function (a, b) {
            var c = this.plotX, d = this.plotY, e = this.series, f = e.options.states, g = S[e.type].marker && e.options.marker, h = g && !g.enabled, i = g && g.states[a], j = i && i.enabled === !1, k = e.stateMarkerGraphic, l = this.marker || {}, m = e.chart, p = this.pointAttr, a = a || "", b = b && k; if (!(a === this.state &&
            !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && !i.enabled) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
                if (this.graphic) f = g && this.graphic.symbolName && p[a].r, this.graphic.attr(w(p[a], f ? { x: c - f, y: d - f, width: 2 * f, height: 2 * f } : {})); else {
                    if (a && i) if (f = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({ x: c - f, y: d - f }); else e.stateMarkerGraphic = k = m.renderer.symbol(l, c - f, d - f, 2 * f, 2 * f).attr(p[a]).add(e.markerGroup), k.currentSymbol = l; if (k) k[a &&
                    m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"]()
                } this.state = a
            }
        }
    }; var M = function () { }; M.prototype = {
        isCartesian: !0, type: "line", pointClass: Da, sorted: !0, requireSorting: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function (a, b) {
            var c = this, d, e, f = a.series, g = function (a, b) { return o(a.options.index, a._i) - o(b.options.index, b._i) }; c.chart = a; c.options = b = c.setOptions(b); c.linkedSeries = [];
            c.bindAxes(); u(c, { name: b.name, state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0 }); if (ka) b.animation = !1; e = b.events; for (d in e) A(c, d, e[d]); if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; c.getColor(); c.getSymbol(); q(c.parallelArrays, function (a) { c[a + "Data"] = [] }); c.setData(b.data, !1); if (c.isCartesian) a.hasCartesianSeries = !0; f.push(c); c._i = f.length - 1; vb(f, g); this.yAxis && vb(this.yAxis.series, g); q(f, function (a, b) {
                a.index = b; a.name =
                a.name || "Series " + (b + 1)
            })
        }, bindAxes: function () { var a = this, b = a.options, c = a.chart, d; q(a.axisTypes || [], function (e) { q(c[e], function (c) { d = c.options; if (b[e] === d.index || b[e] !== r && b[e] === d.id || b[e] === r && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0 }); !a[e] && a.optionalAxis !== e && pa(18, !0) }) }, updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments; q(c.parallelArrays, typeof b === "number" ? function (d) { var f = d === "y" && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = f } : function (a) {
                Array.prototype[b].apply(c[a +
                "Data"], Array.prototype.slice.call(d, 2))
            })
        }, autoIncrement: function () { var a = this.options, b = this.xIncrement, b = o(b, a.pointStart, 0); this.pointInterval = o(this.pointInterval, a.pointInterval, 1); this.xIncrement = b + this.pointInterval; return b }, getSegments: function () {
            var a = -1, b = [], c, d = this.points, e = d.length; if (e) if (this.options.connectNulls) { for (c = e; c--;) d[c].y === null && d.splice(c, 1); d.length && (b = [d]) } else q(d, function (c, g) { c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1)) }); this.segments =
            b
        }, setOptions: function (a) { var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type]; this.userOptions = a; c = w(e, c.series, a); this.tooltipOptions = w(L.tooltip, L.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip); e.marker === null && delete c.marker; return c }, getColor: function () {
            var a = this.options, b = this.userOptions, c = this.chart.options.colors, d = this.chart.counters, e; e = a.color || S[this.type].color; if (!e && !a.colorByPoint) t(b._colorIndex) ?
            a = b._colorIndex : (b._colorIndex = d.color, a = d.color++), e = c[a]; this.color = e; d.wrapColor(c.length)
        }, getSymbol: function () { var a = this.userOptions, b = this.options.marker, c = this.chart, d = c.options.symbols, c = c.counters; this.symbol = b.symbol; if (!this.symbol) t(a._symbolIndex) ? a = a._symbolIndex : (a._symbolIndex = c.symbol, a = c.symbol++), this.symbol = d[a]; if (/^url/.test(this.symbol)) b.radius = 0; c.wrapSymbol(d.length) }, drawLegendSymbol: K.drawLineMarker, setData: function (a, b) {
            var c = this, d = c.points, e = c.options, f = c.chart, g = null,
            h = c.xAxis, i = h && !!h.categories, j; c.xIncrement = null; c.pointRange = i ? 1 : e.pointRange; c.colorCounter = 0; var a = a || [], k = a.length; j = e.turboThreshold; var l = this.xData, m = this.yData, p = c.pointArrayMap, p = p && p.length; q(this.parallelArrays, function (a) { c[a + "Data"].length = 0 }); if (j && k > j) {
                for (j = 0; g === null && j < k;) g = a[j], j++; if (ua(g)) { i = o(e.pointStart, 0); e = o(e.pointInterval, 1); for (j = 0; j < k; j++) l[j] = i, m[j] = a[j], i += e; c.xIncrement = i } else if (Pa(g)) if (p) for (j = 0; j < k; j++) e = a[j], l[j] = e[0], m[j] = e.slice(1, p + 1); else for (j = 0; j < k; j++) e =
                a[j], l[j] = e[0], m[j] = e[1]; else pa(12)
            } else for (j = 0; j < k; j++) if (a[j] !== r && (e = { series: c }, c.pointClass.prototype.applyOptions.apply(e, [a[j]]), c.updateParallelArrays(e, j), i && e.name)) h.names[e.x] = e.name; ma(m[0]) && pa(14, !0); c.data = []; c.options.data = a; for (j = d && d.length || 0; j--;) d[j] && d[j].destroy && d[j].destroy(); if (h) h.minRange = h.userMinRange; c.isDirty = c.isDirtyData = f.isDirtyBox = !0; o(b, !0) && f.redraw(!1)
        }, processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e; e = 0; var f, g, h = this.xAxis, i = this.options,
            j = i.cropThreshold, k = this.isCartesian; if (k && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1; if (k && this.sorted && (!j || d > j || this.forceCrop)) if (a = h.min, h = h.max, b[d - 1] < a || b[0] > h) b = [], c = []; else if (b[0] < a || b[d - 1] > h) e = this.cropData(this.xData, this.yData, a, h), b = e.xData, c = e.yData, e = e.start, f = !0; for (h = b.length - 1; h >= 0; h--) d = b[h] - b[h - 1], d > 0 && (g === r || d < g) ? g = d : d < 0 && this.requireSorting && pa(15); this.cropped = f; this.cropStart = e; this.processedXData = b; this.processedYData = c; if (i.pointRange === null) this.pointRange =
            g || 1; this.closestPointRange = g
        }, cropData: function (a, b, c, d) { var e = a.length, f = 0, g = e, h = o(this.cropShoulder, 1), i; for (i = 0; i < e; i++) if (a[i] >= c) { f = s(0, i - h); break } for (; i < e; i++) if (a[i] > d) { g = i + h; break } return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g } }, generatePoints: function () {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, j = this.hasGroupedData, k, l = [], m; if (!b && !j) b = [], b.length = a.length, b = this.data = b; for (m = 0; m < g; m++) i =
            h + m, j ? l[m] = (new f).init(this, [d[m]].concat(ja(e[m]))) : (b[i] ? k = b[i] : a[i] !== r && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k); if (b && (g !== (c = b.length) || j)) for (m = 0; m < c; m++) if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = r; this.data = b; this.points = l
        }, setStackedPoints: function () {
            if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
                var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.stack, e = e.stacking, h = this.stackKey,
                i = "-" + h, j = this.negStacks, k = this.yAxis, l = k.stacks, m = k.oldStacks, p, n, o, q, x; for (o = 0; o < d; o++) {
                    q = a[o]; x = b[o]; n = (p = j && x < f) ? i : h; l[n] || (l[n] = {}); if (!l[n][q]) m[n] && m[n][q] ? (l[n][q] = m[n][q], l[n][q].total = null) : l[n][q] = new Qb(k, k.options.stackLabels, p, q, g, e); n = l[n][q]; n.points[this.index] = [n.cum || 0]; e === "percent" ? (p = p ? h : i, j && l[p] && l[p][q] ? (p = l[p][q], n.total = p.total = s(p.total, n.total) + O(x) || 0) : n.total = ga(n.total + (O(x) || 0))) : n.total = ga(n.total + (x || 0)); n.cum = (n.cum || 0) + (x || 0); n.points[this.index].push(n.cum); c[o] =
                    n.cum
                } if (e === "percent") k.usePercentage = !0; this.stackedYData = c; k.oldStacks = {}
            }
        }, setPercentStacks: function () { var a = this, b = a.stackKey, c = a.yAxis.stacks; q([b, "-" + b], function (b) { var d; for (var e = a.xData.length, f, g; e--;) if (f = a.xData[e], d = (g = c[b] && c[b][f]) && g.points[a.index], f = d) g = g.total ? 100 / g.total : 0, f[0] = ga(f[0] * g), f[1] = ga(f[1] * g), a.stackedYData[e] = f[1] }) }, getExtremes: function (a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0; d = this.xAxis.getExtremes(); var g = d.min, h = d.max, i, j, k, l, a = a || this.stackedYData ||
            this.processedYData; d = a.length; for (l = 0; l < d; l++) if (j = c[l], k = a[l], i = k !== null && k !== r && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j) if (i = k.length) for (; i--;) k[i] !== null && (e[f++] = k[i]); else e[f++] = k; this.dataMin = o(void 0, Ra(e)); this.dataMax = o(void 0, va(e))
        }, translate: function () {
            this.processedXData || this.processData(); this.generatePoints(); for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue,
            i = a.pointPlacement, j = i === "between" || ua(i), k = a.threshold, a = 0; a < g; a++) {
                var l = f[a], m = l.x, p = l.y, n = l.low, q = b && e.stacks[(this.negStacks && p < k ? "-" : "") + this.stackKey]; if (e.isLog && p <= 0) l.y = p = null; l.plotX = c.translate(m, 0, 0, 0, 1, i, this.type === "flags"); if (b && this.visible && q && q[m]) q = q[m], p = q.points[this.index], n = p[0], p = p[1], n === 0 && (n = o(k, e.min)), e.isLog && n <= 0 && (n = null), l.total = l.stackTotal = q.total, l.percentage = b === "percent" && l.y / q.total * 100, l.stackY = p, q.setOffset(this.pointXOffset || 0, this.barW || 0); l.yBottom = t(n) ?
                e.translate(n, 0, 1, 0, 1) : null; h && (p = this.modifyValue(p, l)); l.plotY = typeof p === "number" && p !== Infinity ? e.translate(p, 0, 1, 0, 1) : r; l.clientX = j ? c.translate(m, 0, 0, 0, 1) : l.plotX; l.negative = l.y < (k || 0); l.category = d && d[l.x] !== r ? d[l.x] : l.x
            } this.getSegments()
        }, setTooltipPoints: function (a) {
            var b = [], c, d, e = this.xAxis, f = e && e.getExtremes(), g = e ? e.tooltipLen || e.len : this.chart.plotSizeX, h, i, j = []; if (this.options.enableMouseTracking !== !1) {
                if (a) this.tooltipPoints = null; q(this.segments || this.points, function (a) { b = b.concat(a) });
                e && e.reversed && (b = b.reverse()); this.orderTooltipPoints && this.orderTooltipPoints(b); a = b.length; for (i = 0; i < a; i++) if (e = b[i], c = e.x, c >= f.min && c <= f.max) { h = b[i + 1]; c = d === r ? 0 : d + 1; for (d = b[i + 1] ? y(s(0, Q((e.clientX + (h ? h.wrappedClientX || h.clientX : g)) / 2)), g) : g; c >= 0 && c <= d;) j[c++] = e } this.tooltipPoints = j
            }
        }, tooltipHeaderFormatter: function (a) {
            var b = this.tooltipOptions, c = b.dateTimeLabelFormats, d = b.xDateFormat, e = this.xAxis, f = e && e.options.type === "datetime", b = b.headerFormat, e = e && e.closestPointRange, g; if (f && !d) {
                if (e) for (g in B) {
                    if (B[g] >=
                    e) { d = c[g]; break }
                } else d = c.day; d = d || c.year
            } f && d && ua(a.key) && (b = b.replace("{point.key}", "{point.key:" + d + "}")); return Ha(b, { point: a, series: this })
        }, onMouseOver: function () { var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && N(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }, onMouseOut: function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; if (d) d.onMouseOut(); this && a.events.mouseOut && N(this, "mouseOut"); c && !a.stickyTracking && (!c.shared ||
            this.noSharedTooltip) && c.hide(); this.setState(); b.hoverSeries = null
        }, animate: function (a) {
            var b = this, c = b.chart, d = c.renderer, e; e = b.options.animation; var f = c.clipBox, g = c.inverted, h; if (e && !aa(e)) e = S[b.type].animation; h = "_sharedClip" + e.duration + e.easing; if (a) a = c[h], e = c[h + "m"], a || (c[h] = a = d.clipRect(u(f, { width: 0 })), c[h + "m"] = e = d.clipRect(-99, g ? -c.plotLeft : -c.plotTop, 99, g ? c.chartWidth : c.chartHeight)), b.group.clip(a), b.markerGroup.clip(e), b.sharedClipKey = h; else {
                if (a = c[h]) a.animate({ width: c.plotSizeX }, e), c[h +
                "m"].animate({ width: c.plotSizeX + 99 }, e); b.animate = null; b.animationTimeout = setTimeout(function () { b.afterAnimate() }, e.duration)
            }
        }, afterAnimate: function () { var a = this.chart, b = this.sharedClipKey, c = this.group; c && this.options.clip !== !1 && (c.clip(a.clipRect), this.markerGroup.clip()); setTimeout(function () { b && a[b] && (a[b] = a[b].destroy(), a[b + "m"] = a[b + "m"].destroy()) }, 100) }, drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, i, j, k, l = this.options.marker, m, p = this.markerGroup; if (l.enabled || this._hasPointMarkers) for (f =
            b.length; f--;) if (g = b[f], d = Q(g.plotX), e = g.plotY, k = g.graphic, i = g.marker || {}, a = l.enabled && i.enabled === r || i.enabled, m = c.isInsidePlot(v(d), e, c.inverted), a && e !== r && !isNaN(e) && g.y !== null) if (a = g.pointAttr[g.selected ? "select" : ""], h = a.r, i = o(i.symbol, this.symbol), j = i.indexOf("url") === 0, k) k.attr({ visibility: m ? da ? "inherit" : "visible" : "hidden" }).animate(u({ x: d - h, y: e - h }, k.symbolName ? { width: 2 * h, height: 2 * h } : {})); else { if (m && (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(p) } else if (k) g.graphic = k.destroy()
        },
        convertAttribs: function (a, b, c, d) { var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {}; for (f in e) g = e[f], h[f] = o(a[g], b[f], c[f], d[f]); return h }, getAttribs: function () {
            var a = this, b = a.options, c = S[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = { stroke: g, fill: g }, i = a.points || [], j = [], k, l = a.pointAttrToOptions, m = b.negativeColor, p = c.lineColor, n = c.fillColor, o; b.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color || Ba(e.color || g).brighten(e.brightness).get();
            j[""] = a.convertAttribs(c, h); q(["hover", "select"], function (b) { j[b] = a.convertAttribs(d[b], j[""]) }); a.pointAttr = j; for (g = i.length; g--;) {
                h = i[g]; if ((c = h.options && h.options.marker || h.options) && c.enabled === !1) c.radius = 0; if (h.negative && m) h.color = h.fillColor = m; k = b.colorByPoint || h.color; if (h.options) for (o in l) t(c[l[o]]) && (k = !0); if (k) {
                    c = c || {}; k = []; d = c.states || {}; f = d.hover = d.hover || {}; if (!b.marker) f.color = Ba(f.color || h.color).brighten(f.brightness || e.brightness).get(); f = { color: h.color }; if (!n) f.fillColor = h.color;
                    if (!p) f.lineColor = h.color; k[""] = a.convertAttribs(u(f, c), j[""]); k.hover = a.convertAttribs(d.hover, j.hover, k[""]); k.select = a.convertAttribs(d.select, j.select, k[""])
                } else k = j; h.pointAttr = k
            }
        }, destroy: function () {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(za), d, e, f = a.data || [], g, h, i; N(a, "destroy"); X(a); q(a.axisTypes || [], function (b) { if (i = a[b]) oa(i.series, a), i.isDirty = i.forceRedraw = !0 }); a.legendItem && a.chart.legend.destroyItem(a); for (e = f.length; e--;) (g = f[e]) && g.destroy && g.destroy(); a.points = null; clearTimeout(a.animationTimeout);
            q("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function (b) { a[b] && (d = c && b === "group" ? "hide" : "destroy", a[b][d]()) }); if (b.hoverSeries === a) b.hoverSeries = null; oa(b.series, a); for (h in a) delete a[h]
        }, getSegmentPath: function (a) {
            var b = this, c = [], d = b.options.step; q(a, function (e, f) {
                var g = e.plotX, h = e.plotY, i; b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h) : d === "center" ? c.push((i.plotX +
                g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), c.push(e.plotX, e.plotY))
            }); return c
        }, getGraphPath: function () { var a = this, b = [], c, d = []; q(a.segments, function (e) { c = a.getSegmentPath(e); e.length > 1 ? b = b.concat(c) : d.push(e[0]) }); a.singlePoints = d; return a.graphPath = b }, drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color]], d = b.lineWidth, e = b.dashStyle, f = b.linecap !== "square", g = this.getGraphPath(), h = b.negativeColor; h && c.push(["graphNeg", h]); q(c, function (c, h) {
                var k = c[0], l = a[k]; if (l) eb(l),
                l.animate({ d: g }); else if (d && g.length) l = { stroke: c[1], "stroke-width": d, zIndex: 1 }, e ? l.dashstyle = e : f && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), a[k] = a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h && b.shadow)
            })
        }, clipNeg: function () {
            var a = this.options, b = this.chart, c = b.renderer, d = a.negativeColor || a.negativeFillColor, e, f = this.graph, g = this.area, h = this.posClip, i = this.negClip; e = b.chartWidth; var j = b.chartHeight, k = s(e, j), l = this.yAxis; if (d && (f || g)) {
                d = v(l.toPixels(a.threshold || 0, !0)); d < 0 && (k -= d);
                a = { x: 0, y: 0, width: k, height: d }; k = { x: 0, y: d, width: k, height: k }; if (b.inverted) a.height = k.y = b.plotWidth - d, c.isVML && (a = { x: b.plotWidth - d - b.plotLeft, y: 0, width: e, height: j }, k = { x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e }); l.reversed ? (b = k, e = a) : (b = a, e = k); h ? (h.animate(b), i.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = i = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(i)), g && (g.clip(h), this.areaNeg.clip(i)))
            }
        }, invertGroups: function () {
            function a() {
                var a = { width: b.yAxis.len, height: b.xAxis.len };
                q(["group", "markerGroup"], function (c) { b[c] && b[c].attr(a).invert() })
            } var b = this, c = b.chart; if (b.xAxis) A(c, "resize", a), A(b, "destroy", function () { X(c, "resize", a) }), a(), b.invertGroups = a
        }, plotGroup: function (a, b, c, d, e) { var f = this[a], g = !f; g && (this[a] = f = this.chart.renderer.g(b).attr({ visibility: c, zIndex: d || 0.1 }).add(e)); f[g ? "attr" : "animate"](this.getPlotBox()); return f }, getPlotBox: function () {
            return {
                translateX: this.xAxis ? this.xAxis.left : this.chart.plotLeft, translateY: this.yAxis ? this.yAxis.top : this.chart.plotTop,
                scaleX: 1, scaleY: 1
            }
        }, render: function () {
            var a = this.chart, b, c = this.options, d = c.animation && !!this.animate && a.renderer.isSVG, e = this.visible ? "visible" : "hidden", f = c.zIndex, g = this.hasRendered, h = a.seriesGroup; b = this.plotGroup("group", "series", e, f, h); this.markerGroup = this.plotGroup("markerGroup", "markers", e, f, h); d && this.animate(!0); this.getAttribs(); b.inverted = this.isCartesian ? a.inverted : !1; this.drawGraph && (this.drawGraph(), this.clipNeg()); this.drawDataLabels && this.drawDataLabels(); this.visible && this.drawPoints();
            this.options.enableMouseTracking !== !1 && this.drawTracker(); a.inverted && this.invertGroups(); c.clip !== !1 && !this.sharedClipKey && !g && b.clip(a.clipRect); d ? this.animate() : g || this.afterAnimate(); this.isDirty = this.isDirtyData = !1; this.hasRendered = !0
        }, redraw: function () {
            var a = this.chart, b = this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: o(d && d.left, a.plotLeft), translateY: o(e && e.top, a.plotTop) })); this.translate(); this.setTooltipPoints(!0);
            this.render(); b && N(this, "updatedData")
        }, setState: function (a) { var b = this.options, c = this.graph, d = this.graphNeg, e = b.states, b = b.lineWidth, a = a || ""; if (this.state !== a) this.state = a, e[a] && e[a].enabled === !1 || (a && (b = e[a].lineWidth || b + 1), c && !c.dashstyle && (a = { "stroke-width": b }, c.attr(a), d && d.attr(a))) }, setVisible: function (a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible; f = (c.visible = a = c.userOptions.visible = a === r ? !h : a) ? "show" : "hide"; q(["group", "dataLabelsGroup", "markerGroup",
            "tracker"], function (a) { if (c[a]) c[a][f]() }); if (d.hoverSeries === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && q(d.series, function (a) { if (a.options.stacking && a.visible) a.isDirty = !0 }); q(c.linkedSeries, function (b) { b.setVisible(a, !1) }); if (g) d.isDirtyBox = !0; b !== !1 && d.redraw(); N(c, f)
        }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) {
            this.selected = a = a === r ? !this.selected : a; if (this.checkbox) this.checkbox.checked = a; N(this, a ? "select" :
            "unselect")
        }, drawTracker: fb.drawTrackerGraph
    }; u(ya.prototype, {
        addSeries: function (a, b, c) { var d, e = this; a && (b = o(b, !0), N(e, "addSeries", { options: a }, function () { d = e.initSeries(a); e.isDirtyLegend = !0; e.linkSeries(); b && e.redraw(c) })); return d }, addAxis: function (a, b, c, d) { var e = b ? "xAxis" : "yAxis", f = this.options; new W(this, w(a, { index: this[e].length, isX: b })); f[e] = ja(f[e] || {}); f[e].push(a); o(c, !0) && this.redraw(d) }, showLoading: function (a) {
            var b = this.options, c = this.loadingDiv, d = b.loading; if (!c) this.loadingDiv = c = Z(Ta,
            { className: "highcharts-loading" }, u(d.style, { zIndex: 10, display: ba }), this.container), this.loadingSpan = Z("span", null, d.labelStyle, c); this.loadingSpan.innerHTML = a || b.lang.loading; if (!this.loadingShown) z(c, { opacity: 0, display: "", left: this.plotLeft + "px", top: this.plotTop + "px", width: this.plotWidth + "px", height: this.plotHeight + "px" }), ob(c, { opacity: d.style.opacity }, { duration: d.showDuration || 0 }), this.loadingShown = !0
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv; b && ob(b, { opacity: 0 }, {
                duration: a.loading.hideDuration ||
                100, complete: function () { z(b, { display: ba }) }
            }); this.loadingShown = !1
        }
    }); u(Da.prototype, {
        update: function (a, b, c) {
            var d = this, e = d.series, f = d.graphic, g, h = e.data, i = e.chart, j = e.options, b = o(b, !0); d.firePointEvent("update", { options: a }, function () {
                d.applyOptions(a); if (aa(a)) { e.getAttribs(); if (f) a && a.marker && a.marker.symbol ? d.graphic = f.destroy() : f.attr(d.pointAttr[d.state || ""]); if (a && a.dataLabels && d.dataLabel) d.dataLabel = d.dataLabel.destroy() } g = Aa(d, h); e.updateParallelArrays(d, g); j.data[g] = d.options; e.isDirty = e.isDirtyData =
                !0; if (!e.fixedBox && e.hasCartesianSeries) i.isDirtyBox = !0; j.legendType === "point" && i.legend.destroyItem(d); b && i.redraw(c)
            })
        }, remove: function (a, b) { var c = this, d = c.series, e = d.points, f = d.chart, g, h = d.data; Xa(b, f); a = o(a, !0); c.firePointEvent("remove", null, function () { g = Aa(c, h); h.length === e.length && e.splice(g, 1); h.splice(g, 1); d.options.data.splice(g, 1); d.updateParallelArrays(c, "splice", g, 1); c.destroy(); d.isDirty = !0; d.isDirtyData = !0; a && f.redraw() }) }
    }); u(M.prototype, {
        addPoint: function (a, b, c, d) {
            var e = this.options,
            f = this.data, g = this.graph, h = this.area, i = this.chart, j = this.xAxis && this.xAxis.names, k = g && g.shift || 0, l = e.data, m, p = this.xData; Xa(d, i); c && q([g, h, this.graphNeg, this.areaNeg], function (a) { if (a) a.shift = k + 1 }); if (h) h.isArea = !0; b = o(b, !0); d = { series: this }; this.pointClass.prototype.applyOptions.apply(d, [a]); g = d.x; h = p.length; if (this.requireSorting && g < p[h - 1]) for (m = !0; h && p[h - 1] > g;) h--; this.updateParallelArrays(d, "splice", h, 0, 0); this.updateParallelArrays(d, h); if (j) j[g] = d.name; l.splice(h, 0, a); m && (this.data.splice(h, 0,
            null), this.processData()); e.legendType === "point" && this.generatePoints(); c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), l.shift())); this.isDirtyData = this.isDirty = !0; b && (this.getAttribs(), i.redraw())
        }, remove: function (a, b) { var c = this, d = c.chart, a = o(a, !0); if (!c.isRemoving) c.isRemoving = !0, N(c, "remove", null, function () { c.destroy(); d.isDirtyLegend = d.isDirtyBox = !0; d.linkSeries(); a && d.redraw(b) }); c.isRemoving = !1 }, update: function (a, b) {
            var c = this.chart, d = this.type, e = D[d].prototype,
            f, a = w(this.userOptions, { animation: !1, index: this.index, pointStart: this.xData[0] }, { data: this.options.data }, a); this.remove(!1); for (f in e) e.hasOwnProperty(f) && (this[f] = r); u(this, D[a.type || d].prototype); this.init(c, a); o(b, !0) && c.redraw(!1)
        }
    }); u(W.prototype, {
        update: function (a, b) { var c = this.chart, a = c.options[this.coll][this.options.index] = w(this.userOptions, a); this.destroy(!0); this._addedPlotLB = this.userMin = this.userMax = r; this.init(c, u(a, { events: r })); c.isDirtyBox = !0; o(b, !0) && c.redraw() }, remove: function (a) {
            var b =
            this.chart, c = this.coll; q(this.series, function (a) { a.remove(!1) }); oa(b.axes, this); oa(b[c], this); b.options[c].splice(this.options.index, 1); q(b[c], function (a, b) { a.options.index = b }); this.destroy(); b.isDirtyBox = !0; o(a, !0) && b.redraw()
        }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
    }); var ia = ea(M); D.line = ia; S.area = w(R, { threshold: 0 }); var ab = ea(M, {
        type: "area", getSegments: function () {
            var a = [], b = [], c = [], d = this.xAxis, e = this.yAxis, f = e.stacks[this.stackKey],
            g = {}, h, i, j = this.points, k = this.options.connectNulls, l, m, p; if (this.options.stacking && !this.cropped) { for (m = 0; m < j.length; m++) g[j[m].x] = j[m]; for (p in f) f[p].total !== null && c.push(+p); c.sort(function (a, b) { return a - b }); q(c, function (a) { if (!k || g[a] && g[a].y !== null) g[a] ? b.push(g[a]) : (h = d.translate(a), l = f[a].percent ? f[a].total ? f[a].cum * 100 / f[a].total : 0 : f[a].cum, i = e.toPixels(l, !0), b.push({ y: null, plotX: h, clientX: h, plotY: i, yBottom: i, onMouseOver: la })) }); b.length && a.push(b) } else M.prototype.getSegments.call(this),
            a = this.segments; this.segments = a
        }, getSegmentPath: function (a) { var b = M.prototype.getSegmentPath.call(this, a), c = [].concat(b), d, e = this.options; d = b.length; var f = this.yAxis.getThreshold(e.threshold), g; d === 3 && c.push("L", b[1], b[2]); if (e.stacking && !this.closedStacks) for (d = a.length - 1; d >= 0; d--) g = o(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g); else this.closeSegment(c, a, f); this.areaPath = this.areaPath.concat(c); return b }, closeSegment: function (a, b, c) {
            a.push("L", b[b.length - 1].plotX,
            c, "L", b[0].plotX, c)
        }, drawGraph: function () { this.areaPath = []; M.prototype.drawGraph.apply(this); var a = this, b = this.areaPath, c = this.options, d = c.negativeColor, e = c.negativeFillColor, f = [["area", this.color, c.fillColor]]; (d || e) && f.push(["areaNeg", d, e]); q(f, function (d) { var e = d[0], f = a[e]; f ? f.animate({ d: b }) : a[e] = a.chart.renderer.path(b).attr({ fill: o(d[2], Ba(d[1]).setOpacity(o(c.fillOpacity, 0.75)).get()), zIndex: 0 }).add(a.group) }) }, drawLegendSymbol: K.drawRectangle
    }); D.area = ab; S.spline = w(R); ia = ea(M, {
        type: "spline",
        getPointSpline: function (a, b, c) { var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, j, k; if (f && g) { a = f.plotY; j = g.plotX; var g = g.plotY, l; h = (1.5 * d + f.plotX) / 2.5; i = (1.5 * e + a) / 2.5; j = (1.5 * d + j) / 2.5; k = (1.5 * e + g) / 2.5; l = (k - i) * (j - d) / (j - h) + e - k; i += l; k += l; i > a && i > e ? (i = s(a, e), k = 2 * e - i) : i < a && i < e && (i = y(a, e), k = 2 * e - i); k > g && k > e ? (k = s(g, e), i = 2 * e - k) : k < g && k < e && (k = y(g, e), i = 2 * e - k); b.rightContX = j; b.rightContY = k } c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e]; return b }
    }); D.spline =
    ia; S.areaspline = w(S.area); ab = ab.prototype; ia = ea(ia, { type: "areaspline", closedStacks: !0, getSegmentPath: ab.getSegmentPath, closeSegment: ab.closeSegment, drawGraph: ab.drawGraph, drawLegendSymbol: K.drawRectangle }); D.areaspline = ia; S.column = w(R, {
        borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { brightness: 0.1, shadow: !1 }, select: { color: "#C0C0C0", borderColor: "#000000", shadow: !1 } }, dataLabels: {
            align: null,
            verticalAlign: null, y: null
        }, stickyTracking: !1, threshold: 0
    }); ia = ea(M, {
        type: "column", pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", r: "borderRadius" }, cropShoulder: 0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () { M.prototype.init.apply(this, arguments); var a = this, b = a.chart; b.hasRendered && q(b.series, function (b) { if (b.type === a.type) b.isDirty = !0 }) }, getColumnMetrics: function () {
            var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h, i = 0; b.grouping ===
            !1 ? i = 1 : q(a.chart.series, function (b) { var c = b.options, e = b.yAxis; if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === r && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h }); var c = y(O(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || 1), c.len), j = c * b.groupPadding, k = (c - 2 * j) / i, l = b.pointWidth, b = t(l) ? (k - l) / 2 : k * b.pointPadding, l = o(l, k - 2 * b); return a.columnMetrics = { width: l, offset: b + (j + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * k - c / 2) * (e ? -1 : 1) }
        }, translate: function () {
            var a =
            this.chart, b = this.options, c = b.borderWidth, d = this.yAxis, e = this.translatedThreshold = d.getThreshold(b.threshold), f = o(b.minPointLength, 5), b = this.getColumnMetrics(), g = b.width, h = this.barW = Va(s(g, 1 + 2 * c)), i = this.pointXOffset = b.offset, j = -(c % 2 ? 0.5 : 0), k = c % 2 ? 0.5 : 1; a.renderer.isVML && a.inverted && (k += 1); M.prototype.translate.apply(this); q(this.points, function (a) {
                var b = o(a.yBottom, e), c = y(s(-999 - b, a.plotY), d.len + 999 + b), n = a.plotX + i, q = h, r = y(c, b), x, c = s(c, b) - r; O(c) < f && f && (c = f, r = v(O(r - e) > f ? b - f : e - (d.translate(a.y, 0, 1, 0,
                1) <= e ? f : 0))); a.barX = n; a.pointWidth = g; b = O(n) < 0.5; q = v(n + q) + j; n = v(n) + j; q -= n; x = O(r) < 0.5; c = v(r + c) + k; r = v(r) + k; c -= r; b && (n += 1, q -= 1); x && (r -= 1, c += 1); a.shapeType = "rect"; a.shapeArgs = { x: n, y: r, width: q, height: c }
            })
        }, getSymbol: la, drawLegendSymbol: K.drawRectangle, drawGraph: la, drawPoints: function () {
            var a = this, b = this.chart, c = a.options, d = b.renderer, e = b.options.animationLimit || 250, f; q(a.points, function (g) {
                var h = g.plotY, i = g.graphic; if (h !== r && !isNaN(h) && g.y !== null) f = g.shapeArgs, i ? (eb(i), i[b.pointCount < e ? "animate" : "attr"](w(f))) :
                g.graphic = d[g.shapeType](f).attr(g.pointAttr[g.selected ? "select" : ""]).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius); else if (i) g.graphic = i.destroy()
            })
        }, drawTracker: fb.drawTrackerPoint, animate: function (a) {
            var b = this.yAxis, c = this.options, d = this.chart.inverted, e = {}; if (da) a ? (e.scaleY = 0.001, a = y(b.pos + b.len, s(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation),
            this.animate = null)
        }, remove: function () { var a = this, b = a.chart; b.hasRendered && q(b.series, function (b) { if (b.type === a.type) b.isDirty = !0 }); M.prototype.remove.apply(a, arguments) }
    }); D.column = ia; S.bar = w(S.column); ia = ea(ia, { type: "bar", inverted: !0 }); D.bar = ia; S.scatter = w(R, { lineWidth: 0, tooltip: { headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>", followPointer: !0 }, stickyTracking: !1 }); ia = ea(M, {
        type: "scatter", sorted: !1,
        requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["markerGroup"], takeOrdinalPosition: !1, drawTracker: fb.drawTrackerPoint, drawGraph: function () { this.options.lineWidth && M.prototype.drawGraph.call(this) }, setTooltipPoints: la
    }); D.scatter = ia; S.pie = w(R, {
        borderColor: "#FFFFFF", borderWidth: 1, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function () { return this.point.name } }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10,
        states: { hover: { brightness: 0.1, shadow: !1 } }, stickyTracking: !1, tooltip: { followPointer: !0 }
    }); R = {
        type: "pie", isCartesian: !1, pointClass: ea(Da, {
            init: function () { Da.prototype.init.apply(this, arguments); var a = this, b; if (a.y < 0) a.y = null; u(a, { visible: a.visible !== !1, name: o(a.name, "Slice") }); b = function (b) { a.slice(b.type === "select") }; A(a, "select", b); A(a, "unselect", b); return a }, setVisible: function (a) {
                var b = this, c = b.series, d = c.chart, e; b.visible = b.options.visible = a = a === r ? !b.visible : a; c.options.data[Aa(b, c.data)] = b.options;
                e = a ? "show" : "hide"; q(["graphic", "dataLabel", "connector", "shadowGroup"], function (a) { if (b[a]) b[a][e]() }); b.legendItem && d.legend.colorizeItem(b, a); if (!c.isDirty && c.options.ignoreHiddenPoint) c.isDirty = !0, d.redraw()
            }, slice: function (a, b, c) { var d = this.series; Xa(c, d.chart); o(b, !0); this.sliced = this.options.sliced = a = t(a) ? a : !this.sliced; d.options.data[Aa(this, d.data)] = this.options; a = a ? this.slicedTranslation : { translateX: 0, translateY: 0 }; this.graphic.animate(a); this.shadowGroup && this.shadowGroup.animate(a) }
        }), requireSorting: !1,
        noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth", fill: "color" }, getColor: la, animate: function (a) { var b = this, c = b.points, d = b.startAngleRad; if (!a) q(c, function (a) { var c = a.graphic, a = a.shapeArgs; c && (c.attr({ r: b.center[3] / 2, start: d, end: d }), c.animate({ r: a.r, start: a.start, end: a.end }, b.options.animation)) }), b.animate = null }, setData: function (a, b) {
            M.prototype.setData.call(this, a, !1); this.processData(); this.generatePoints();
            o(b, !0) && this.chart.redraw()
        }, generatePoints: function () { var a, b = 0, c, d, e, f = this.options.ignoreHiddenPoint; M.prototype.generatePoints.call(this); c = this.points; d = c.length; for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y; this.total = b; for (a = 0; a < d; a++) e = c[a], e.percentage = b > 0 ? e.y / b * 100 : 0, e.total = b }, translate: function (a) {
            this.generatePoints(); var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, i = c.startAngle || 0, j = this.startAngleRad = Ka / 180 * (i - 90), i = (this.endAngleRad = Ka / 180 * ((c.endAngle || i + 360) - 90)) -
            j, k = this.points, l = c.dataLabels.distance, c = c.ignoreHiddenPoint, m, p = k.length, n; if (!a) this.center = a = this.getCenter(); this.getX = function (b, c) { h = T.asin((b - a[1]) / (a[2] / 2 + l)); return a[0] + (c ? -1 : 1) * ca(h) * (a[2] / 2 + l) }; for (m = 0; m < p; m++) {
                n = k[m]; f = j + b * i; if (!c || n.visible) b += n.percentage / 100; g = j + b * i; n.shapeType = "arc"; n.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: v(f * 1E3) / 1E3, end: v(g * 1E3) / 1E3 }; h = (g + f) / 2; h > 0.75 * i && (h -= 2 * Ka); n.slicedTranslation = { translateX: v(ca(h) * d), translateY: v(ha(h) * d) }; f = ca(h) * a[2] / 2; g =
                ha(h) * a[2] / 2; n.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7]; n.half = h < -Ka / 2 || h > Ka / 2 ? 1 : 0; n.angle = h; e = y(e, l / 2); n.labelPos = [a[0] + f + ca(h) * l, a[1] + g + ha(h) * l, a[0] + f + ca(h) * e, a[1] + g + ha(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : n.half ? "right" : "left", h]
            }
        }, setTooltipPoints: la, drawGraph: null, drawPoints: function () {
            var a = this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g; if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group); q(a.points, function (h) {
                d = h.graphic; g = h.shapeArgs; f = h.shadowGroup; if (e && !f) f = h.shadowGroup = b.g("shadow").add(a.shadowGroup);
                c = h.sliced ? h.slicedTranslation : { translateX: 0, translateY: 0 }; f && f.attr(c); d ? d.animate(u(g, c)) : h.graphic = d = b.arc(g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({ "stroke-linejoin": "round" }).attr(c).add(a.group).shadow(e, f); h.visible !== void 0 && h.setVisible(h.visible)
            })
        }, sortByAngle: function (a, b) { a.sort(function (a, d) { return a.angle !== void 0 && (d.angle - a.angle) * b }) }, drawTracker: fb.drawTrackerPoint, drawLegendSymbol: K.drawRectangle, getCenter: qa.getCenter, getSymbol: la
    }; R = ea(M,
    R); D.pie = R; M.prototype.drawDataLabels = function () {
        var a = this, b = a.options, c = b.cursor, d = b.dataLabels, b = a.points, e, f, g, h; if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), h = a.plotGroup("dataLabelsGroup", "data-labels", a.visible ? "visible" : "hidden", d.zIndex || 6), f = d, q(b, function (b) {
            var j, k = b.dataLabel, l, m, p = b.connector, n = !0; e = b.options && b.options.dataLabels; j = o(e && e.enabled, f.enabled); if (k && !j) b.dataLabel = k.destroy(); else if (j) {
                d = w(f, e); j = d.rotation; l = b.getLabelConfig(); g = d.format ?
                Ha(d.format, l) : d.formatter.call(l, d); d.style.color = o(d.color, d.style.color, a.color, "black"); if (k) if (t(g)) k.attr({ text: g }), n = !1; else { if (b.dataLabel = k = k.destroy(), p) b.connector = p.destroy() } else if (t(g)) { k = { fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: j, padding: d.padding, zIndex: 1 }; for (m in k) k[m] === r && delete k[m]; k = b.dataLabel = a.chart.renderer[j ? "text" : "label"](g, 0, -999, null, null, null, d.useHTML).attr(k).css(u(d.style, c && { cursor: c })).add(h).shadow(d.shadow) } k &&
                a.alignDataLabel(b, k, d, null, n)
            }
        })
    }; M.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = o(a.plotX, -999), i = o(a.plotY, -999), j = b.getBBox(); if (a = this.visible && (a.series.forceDL || f.isInsidePlot(a.plotX, a.plotY, g))) d = u({ x: g ? f.plotWidth - i : h, y: v(g ? f.plotHeight - h : i), width: 0, height: 0 }, d), u(c, { width: j.width, height: j.height }), c.rotation ? (g = { align: c.align, x: d.x + c.x + d.width / 2, y: d.y + c.y + d.height / 2 }, b[e ? "attr" : "animate"](g)) : (b.align(c, null, d), g = b.alignAttr, o(c.overflow, "justify") === "justify" ?
        this.justifyDataLabel(b, c, g, j, d, e) : o(c.crop, !0) && (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height))); if (!a) b.attr({ y: -999 }), b.placed = !1
    }; M.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
        var g = this.chart, h = b.align, i = b.verticalAlign, j, k; j = c.x; if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0; j = c.x + d.width; if (j > g.plotWidth) h === "left" ? b.align = "right" : b.x = g.plotWidth - j, k = !0; j = c.y; if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0; j = c.y + d.height; if (j > g.plotHeight) i === "top" ? b.verticalAlign =
        "bottom" : b.y = g.plotHeight - j, k = !0; if (k) a.placed = !f, a.align(b, null, e)
    }; if (D.pie) D.pie.prototype.drawDataLabels = function () {
        var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = o(e.connectorPadding, 10), g = o(e.connectorWidth, 1), h = d.plotWidth, d = d.plotHeight, i, j, k = o(e.softConnector, !0), l = e.distance, m = a.center, p = m[2] / 2, n = m[1], r = l > 0, t, x, u, w, y = [[], []], A, I, E, G, C, P = [0, 0, 0, 0], H = function (a, b) { return b.y - a.y }; if (a.visible && (e.enabled || a._hasPointLabels)) {
            M.prototype.drawDataLabels.apply(a); q(b, function (a) {
                a.dataLabel &&
                a.visible && y[a.half].push(a)
            }); for (G = 0; !w && b[G];) w = b[G] && b[G].dataLabel && (b[G].dataLabel.getBBox().height || 21), G++; for (G = 2; G--;) {
                var b = [], F = [], D = y[G], B = D.length, z; a.sortByAngle(D, G - 0.5); if (l > 0) {
                    for (C = n - p - l; C <= n + p + l; C += w) b.push(C); x = b.length; if (B > x) { c = [].concat(D); c.sort(H); for (C = B; C--;) c[C].rank = C; for (C = B; C--;) D[C].rank >= x && D.splice(C, 1); B = D.length } for (C = 0; C < B; C++) {
                        c = D[C]; u = c.labelPos; c = 9999; var L, K; for (K = 0; K < x; K++) L = O(b[K] - u[1]), L < c && (c = L, z = K); if (z < C && b[C] !== null) z = C; else for (x < B - C + z && b[C] !== null &&
                        (z = x - B + C) ; b[z] === null;) z++; F.push({ i: z, y: b[z] }); b[z] = null
                    } F.sort(H)
                } for (C = 0; C < B; C++) {
                    c = D[C]; u = c.labelPos; t = c.dataLabel; E = c.visible === !1 ? "hidden" : "visible"; c = u[1]; if (l > 0) { if (x = F.pop(), z = x.i, I = x.y, c > I && b[z + 1] !== null || c < I && b[z - 1] !== null) I = c } else I = c; A = e.justify ? m[0] + (G ? -1 : 1) * (p + l) : a.getX(z === 0 || z === b.length - 1 ? c : I, G); t._attr = { visibility: E, align: u[6] }; t._pos = { x: A + e.x + ({ left: f, right: -f }[u[6]] || 0), y: I + e.y - 10 }; t.connX = A; t.connY = I; if (this.options.size === null) x = t.width, A - x < f ? P[3] = s(v(x - A + f), P[3]) : A + x > h - f &&
                    (P[1] = s(v(A + x - h + f), P[1])), I - w / 2 < 0 ? P[0] = s(v(-I + w / 2), P[0]) : I + w / 2 > d && (P[2] = s(v(I + w / 2 - d), P[2]))
                }
            } if (va(P) === 0 || this.verifyDataLabelOverflow(P)) this.placeDataLabels(), r && g && q(this.points, function (b) {
                i = b.connector; u = b.labelPos; if ((t = b.dataLabel) && t._pos) E = t._attr.visibility, A = t.connX, I = t.connY, j = k ? ["M", A + (u[6] === "left" ? 5 : -5), I, "C", A, I, 2 * u[2] - u[4], 2 * u[3] - u[5], u[2], u[3], "L", u[4], u[5]] : ["M", A + (u[6] === "left" ? 5 : -5), I, "L", u[2], u[3], "L", u[4], u[5]], i ? (i.animate({ d: j }), i.attr("visibility", E)) : b.connector = i = a.chart.renderer.path(j).attr({
                    "stroke-width": g,
                    stroke: e.connectorColor || b.color || "#606060", visibility: E
                }).add(a.group); else if (i) b.connector = i.destroy()
            })
        }
    }, D.pie.prototype.placeDataLabels = function () { q(this.points, function (a) { var a = a.dataLabel, b; if (a) (b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({ y: -999 }) }) }, D.pie.prototype.alignDataLabel = la, D.pie.prototype.verifyDataLabelOverflow = function (a) {
        var b = this.center, c = this.options, d = c.center, e = c = c.minSize || 80, f; d[0] !== null ? e = s(b[2] - s(a[1], a[3]), c) : (e = s(b[2] - a[1] - a[3],
        c), b[0] += (a[3] - a[1]) / 2); d[1] !== null ? e = s(y(e, b[2] - s(a[0], a[2])), c) : (e = s(y(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2); e < b[2] ? (b[2] = e, this.translate(b), q(this.points, function (a) { if (a.dataLabel) a.dataLabel._pos = null }), this.drawDataLabels && this.drawDataLabels()) : f = !0; return f
    }; if (D.column) D.column.prototype.alignDataLabel = function (a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = a.dlBox || a.shapeArgs, i = a.below || a.plotY > o(this.translatedThreshold, f.plotSizeY), j = o(c.inside, !!this.options.stacking); if (h && (d = w(h),
        g && (d = { x: f.plotWidth - d.y - d.height, y: f.plotHeight - d.x - d.width, width: d.height, height: d.width }), !j)) g ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0); c.align = o(c.align, !g || j ? "center" : i ? "right" : "left"); c.verticalAlign = o(c.verticalAlign, g || j ? "middle" : i ? "top" : "bottom"); M.prototype.alignDataLabel.call(this, a, b, c, d, e)
    }; U(M.prototype, "init", function (a) { var b; a.apply(this, Array.prototype.slice.call(arguments, 1)); (b = this.xAxis) && b.options.ordinal && A(this, "updatedData", function () { delete b.ordinalIndex }) });
    U(W.prototype, "getTimeTicks", function (a, b, c, d, e, f, g, h) {
        var i = 0, j = 0, k, l = {}, m, p, n, o = [], q = -Number.MAX_VALUE, x = this.options.tickPixelInterval; if (!this.options.ordinal || !f || f.length < 3 || c === r) return a.call(this, b, c, d, e); for (p = f.length; j < p; j++) { n = j && f[j - 1] > d; f[j] < c && (i = j); if (j === p - 1 || f[j + 1] - f[j] > g * 5 || n) { if (f[j] > q) { for (k = a.call(this, b, f[i], f[j], e) ; k.length && k[0] <= q;) k.shift(); k.length && (q = k[k.length - 1]); o = o.concat(k) } i = j + 1 } if (n) break } a = k.info; if (h && a.unitRange <= B.hour) {
            j = o.length - 1; for (i = 1; i < j; i++) (new Date(o[i] -
            Ja))[Ua]() !== (new Date(o[i - 1] - Ja))[Ua]() && (l[o[i]] = "day", m = !0); m && (l[o[0]] = "day"); a.higherRanks = l
        } o.info = a; if (h && t(x)) { var h = a = o.length, j = [], s; for (m = []; h--;) i = this.translate(o[h]), s && (m[h] = s - i), j[h] = s = i; m.sort(); m = m[Q(m.length / 2)]; m < x * 0.6 && (m = null); h = o[a - 1] > d ? a - 1 : a; for (s = void 0; h--;) i = j[h], d = s - i, s && d < x * 0.8 && (m === null || d < m * 0.8) ? (l[o[h]] && !l[o[h + 1]] ? (d = h + 1, s = i) : d = h, o.splice(d, 1)) : s = i } return o
    }); u(W.prototype, {
        beforeSetTickPositions: function () {
            var a, b = [], c = !1, d, e = this.getExtremes(), f = e.min, e = e.max, g;
            if (this.options.ordinal) {
                q(this.series, function (c, d) { if (c.visible !== !1 && c.takeOrdinalPosition !== !1 && (b = b.concat(c.processedXData), a = b.length, b.sort(function (a, b) { return a - b }), a)) for (d = a - 1; d--;) b[d] === b[d + 1] && b.splice(d, 1) }); a = b.length; if (a > 2) { d = b[1] - b[0]; for (g = a - 1; g-- && !c;) b[g + 1] - b[g] !== d && (c = !0); if (!this.options.keepOrdinalPadding && (b[0] - f > d || e - b[b.length - 1] > d)) c = !0 } c ? (this.ordinalPositions = b, c = this.val2lin(s(f, b[0]), !0), d = this.val2lin(y(e, b[b.length - 1]), !0), this.ordinalSlope = e = (e - f) / (d - c), this.ordinalOffset =
                f - c * e) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = r
            } this.groupIntervalFactor = null
        }, val2lin: function (a, b) { var c = this.ordinalPositions; if (c) { var d = c.length, e, f; for (e = d; e--;) if (c[e] === a) { f = e; break } for (e = d - 1; e--;) if (a > c[e] || e === 0) { c = (a - c[e]) / (c[e + 1] - c[e]); f = e + c; break } return b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset } else return a }, lin2val: function (a, b) {
            var c = this.ordinalPositions; if (c) {
                var d = this.ordinalSlope, e = this.ordinalOffset, f = c.length - 1, g, h; if (b) a < 0 ? a = c[0] : a > f ? a = c[f] : (f = Q(a),
                h = a - f); else for (; f--;) if (g = d * f + e, a >= g) { d = d * (f + 1) + e; h = (a - g) / (d - g); break } return h !== r && c[f] !== r ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a
            } else return a
        }, getExtendedPositions: function () {
            var a = this.chart, b = this.series[0].currentDataGrouping, c = this.ordinalIndex, d = b ? b.count + b.unitName : "raw", e = this.getExtremes(), f, g; if (!c) c = this.ordinalIndex = {}; if (!c[d]) f = { series: [], getExtremes: function () { return { min: e.dataMin, max: e.dataMax } }, options: { ordinal: !0 }, val2lin: W.prototype.val2lin }, q(this.series, function (c) {
                g = {
                    xAxis: f, xData: c.xData,
                    chart: a, destroyGroupedData: la
                }; g.options = { dataGrouping: b ? { enabled: !0, forced: !0, approximation: "open", units: [[b.unitName, [b.count]]] } : { enabled: !1 } }; c.processData.apply(g); f.series.push(g)
            }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions; return c[d]
        }, getGroupIntervalFactor: function (a, b, c) {
            var d = 0, c = c.processedXData, e = c.length, f = [], g = this.groupIntervalFactor; if (!g) {
                for (; d < e - 1; d++) f[d] = c[d + 1] - c[d]; f.sort(function (a, b) { return a - b }); d = f[Q(e / 2)]; a = s(a, c[0]); b = y(b, c[e - 1]); this.groupIntervalFactor =
                g = e * d / (b - a)
            } return g
        }, postProcessTickInterval: function (a) { var b = this.ordinalSlope; return b ? a / (b / this.closestPointRange) : a }
    }); U(ya.prototype, "pan", function (a, b) {
        var c = this.xAxis[0], d = b.chartX, e = !1; if (c.options.ordinal && c.series.length) {
            var f = this.mouseDownX, g = c.getExtremes(), h = g.dataMax, i = g.min, j = g.max, k = this.hoverPoints, l = c.closestPointRange, f = (f - d) / (c.translationSlope * (c.ordinalSlope || l)), m = { ordinalPositions: c.getExtendedPositions() }, l = c.lin2val, p = c.val2lin, n; if (m.ordinalPositions) {
                if (O(f) > 1) k &&
                q(k, function (a) { a.setState() }), f < 0 ? (k = m, n = c.ordinalPositions ? c : m) : (k = c.ordinalPositions ? c : m, n = m), m = n.ordinalPositions, h > m[m.length - 1] && m.push(h), f = c.toFixedRange(null, null, l.apply(k, [p.apply(k, [i, !0]) + f, !0]), l.apply(n, [p.apply(n, [j, !0]) + f, !0])), f.min >= y(g.dataMin, i) && f.max <= s(h, j) && c.setExtremes(f.min, f.max, !0, !1, { trigger: "pan" }), this.mouseDownX = d, z(this.container, { cursor: "move" })
            } else e = !0
        } else e = !0; e && a.apply(this, Array.prototype.slice.call(arguments, 1))
    }); U(M.prototype, "getSegments", function (a) {
        var b,
        c = this.options.gapSize, d = this.xAxis; a.apply(this, Array.prototype.slice.call(arguments, 1)); if (c) b = this.segments, q(b, function (a, f) { for (var g = a.length - 1; g--;) a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f + 1, 0, a.splice(g + 1, a.length - g)) })
    }); var Y = M.prototype, fc = Y.processData, gc = Y.generatePoints, hc = Y.destroy, ic = Y.tooltipHeaderFormatter, jc = {
        approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: gb("millisecond", ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], "second", ["%A, %b %e, %H:%M:%S",
        "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], "minute", ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], "hour", ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], "day", ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], "week", ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], "month", ["%B %Y", "%B", "-%B %Y"], "year", ["%Y", "%Y", "-%Y"])
    }, Wb = {
        line: {}, spline: {}, area: {}, areaspline: {}, column: { approximation: "sum", groupPixelWidth: 10 }, arearange: { approximation: "range" }, areasplinerange: { approximation: "range" }, columnrange: {
            approximation: "range",
            groupPixelWidth: 10
        }, candlestick: { approximation: "ohlc", groupPixelWidth: 10 }, ohlc: { approximation: "ohlc", groupPixelWidth: 5 }
    }, Xb = [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]], Oa = {
        sum: function (a) { var b = a.length, c; if (!b && a.hasNulls) c = null; else if (b) for (c = 0; b--;) c += a[b]; return c }, average: function (a) { var b = a.length, a = Oa.sum(a); typeof a === "number" && b && (a /= b); return a },
        open: function (a) { return a.length ? a[0] : a.hasNulls ? null : r }, high: function (a) { return a.length ? va(a) : a.hasNulls ? null : r }, low: function (a) { return a.length ? Ra(a) : a.hasNulls ? null : r }, close: function (a) { return a.length ? a[a.length - 1] : a.hasNulls ? null : r }, ohlc: function (a, b, c, d) { a = Oa.open(a); b = Oa.high(b); c = Oa.low(c); d = Oa.close(d); if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d] }, range: function (a, b) {
            a = Oa.low(a); b = Oa.high(b); if (typeof a === "number" || typeof b === "number") return [a,
            b]
        }
    }; Y.groupData = function (a, b, c, d) {
        var e = this.data, f = this.options.data, g = [], h = [], i = a.length, j, k, l = !!b, m = [[], [], [], []], d = typeof d === "function" ? d : Oa[d], p = this.pointArrayMap, n = p && p.length, o; for (o = 0; o <= i; o++) {
            for (; c[1] !== r && a[o] >= c[1] || o === i;) if (j = c.shift(), k = d.apply(0, m), k !== r && (g.push(j), h.push(k)), m[0] = [], m[1] = [], m[2] = [], m[3] = [], o === i) break; if (o === i) break; if (p) {
                j = this.cropStart + o; j = e && e[j] || this.pointClass.prototype.applyOptions.apply({ series: this }, [f[j]]); var q; for (k = 0; k < n; k++) if (q = j[p[k]], typeof q ===
                "number") m[k].push(q); else if (q === null) m[k].hasNulls = !0
            } else if (j = l ? b[o] : null, typeof j === "number") m[0].push(j); else if (j === null) m[0].hasNulls = !0
        } return [g, h]
    }; Y.processData = function () {
        var a = this.chart, b = this.options, c = b.dataGrouping, d = c && o(c.enabled, a.options._stock), e; this.forceCrop = d; this.groupPixelWidth = null; if (fc.apply(this, arguments) !== !1 && d) {
            this.destroyGroupedData(); var f = this.processedXData, g = this.processedYData, h = a.plotSizeX, i = this.xAxis, j = i.options.ordinal, k = this.groupPixelWidth = i.getGroupPixelWidth &&
            i.getGroupPixelWidth(), a = this.pointRange; if (k) {
                e = !0; this.points = null; d = i.getExtremes(); a = d.min; d = d.max; j = j && i.getGroupIntervalFactor(a, d, this) || 1; h = k * (d - a) / h * j; i = i.getTimeTicks(i.normalizeTimeTickInterval(h, c.units || Xb), a, d, null, f, this.closestPointRange); g = Y.groupData.apply(this, [f, g, i, c.approximation]); f = g[0]; g = g[1]; if (c.smoothed) { c = f.length - 1; for (f[c] = d; c-- && c > 0;) f[c] += h / 2; f[0] = a } this.currentDataGrouping = i.info; if (b.pointRange === null) this.pointRange = i.info.totalRange; this.closestPointRange = i.info.totalRange;
                this.processedXData = f; this.processedYData = g
            } else this.currentDataGrouping = null, this.pointRange = a; this.hasGroupedData = e
        }
    }; Y.destroyGroupedData = function () { var a = this.groupedData; q(a || [], function (b, c) { b && (a[c] = b.destroy ? b.destroy() : null) }); this.groupedData = null }; Y.generatePoints = function () { gc.apply(this); this.destroyGroupedData(); this.groupedData = this.hasGroupedData ? this.points : null }; Y.tooltipHeaderFormatter = function (a) {
        var b = this.tooltipOptions, c = this.options.dataGrouping, d = b.xDateFormat, e, f = this.xAxis,
        g, h; if (f && f.options.type === "datetime" && c && ua(a.key)) { g = this.currentDataGrouping; c = c.dateTimeLabelFormats; if (g) f = c[g.unitName], g.count === 1 ? d = f[0] : (d = f[1], e = f[2]); else if (!d && c) for (h in B) if (B[h] >= f.closestPointRange) { d = c[h][0]; break } d = ra(d, a.key); e && (d += ra(e, a.key + g.totalRange - 1)); a = b.headerFormat.replace("{point.key}", d) } else a = ic.call(this, a); return a
    }; Y.destroy = function () { for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy(); hc.apply(this) }; U(Y, "setOptions", function (a, b) {
        var c = a.call(this,
        b), d = this.type, e = this.chart.options.plotOptions, f = S[d].dataGrouping; if (Wb[d]) f || (f = w(jc, Wb[d])), c.dataGrouping = w(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping); if (this.chart.options._stock) this.requireSorting = !0; return c
    }); W.prototype.getGroupPixelWidth = function () {
        var a = this.series, b = a.length, c, d = 0, e = !1, f; for (c = b; c--;) (f = a[c].options.dataGrouping) && (d = s(d, f.groupPixelWidth)); for (c = b; c--;) if (f = a[c].options.dataGrouping) if (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth ||
        b > this.chart.plotSizeX / d || b && f.forced) e = !0; return e ? d : 0
    }; S.ohlc = w(S.column, { lineWidth: 1, tooltip: { pointFormat: '<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' }, states: { hover: { lineWidth: 3 } }, threshold: null }); R = ea(D.column, {
        type: "ohlc", pointArrayMap: ["open", "high", "low", "close"], toYData: function (a) { return [a.open, a.high, a.low, a.close] }, pointValKey: "high", pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        }, upColorProp: "stroke", getAttribs: function () { D.column.prototype.getAttribs.apply(this, arguments); var a = this.options, b = a.states, a = a.upColor || this.color, c = w(this.pointAttr), d = this.upColorProp; c[""][d] = a; c.hover[d] = b.hover.upColor || a; c.select[d] = b.select.upColor || a; q(this.points, function (a) { if (a.open < a.close) a.pointAttr = c }) }, translate: function () {
            var a = this.yAxis; D.column.prototype.translate.apply(this); q(this.points, function (b) {
                if (b.open !== null) b.plotOpen = a.translate(b.open,
                0, 1, 0, 1); if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1)
            })
        }, drawPoints: function () { var a = this, b = a.chart, c, d, e, f, g, h, i, j; q(a.points, function (k) { if (k.plotY !== r) i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""], f = c["stroke-width"] % 2 / 2, j = v(k.plotX) + f, g = v(k.shapeArgs.width / 2), h = ["M", j, v(k.yBottom), "L", j, v(k.plotY)], k.open !== null && (d = v(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = v(k.plotClose) + f, h.push("M", j, e, "L", j + g, e)), i ? i.animate({ d: h }) : k.graphic = b.renderer.path(h).attr(c).add(a.group) }) },
        animate: null
    }); D.ohlc = R; S.candlestick = w(S.column, { lineColor: "black", lineWidth: 1, states: { hover: { lineWidth: 2 } }, tooltip: S.ohlc.tooltip, threshold: null, upColor: "white" }); R = ea(R, {
        type: "candlestick", pointAttrToOptions: { fill: "color", stroke: "lineColor", "stroke-width": "lineWidth" }, upColorProp: "fill", getAttribs: function () {
            D.ohlc.prototype.getAttribs.apply(this, arguments); var a = this.options, b = a.states, c = a.upLineColor || a.lineColor, d = b.hover.upLineColor || c, e = b.select.upLineColor || c; q(this.points, function (a) {
                if (a.open <
                a.close) a.pointAttr[""].stroke = c, a.pointAttr.hover.stroke = d, a.pointAttr.select.stroke = e
            })
        }, drawPoints: function () {
            var a = this, b = a.chart, c, d, e, f, g, h, i, j, k, l, m, p; q(a.points, function (n) {
                l = n.graphic; if (n.plotY !== r) c = n.pointAttr[n.selected ? "selected" : ""], j = c["stroke-width"] % 2 / 2, k = v(n.plotX) + j, d = n.plotOpen, e = n.plotClose, f = T.min(d, e), g = T.max(d, e), p = v(n.shapeArgs.width / 2), h = v(f) !== v(n.plotY), i = g !== n.yBottom, f = v(f) + j, g = v(g) + j, m = ["M", k - p, g, "L", k - p, f, "L", k + p, f, "L", k + p, g, "L", k - p, g, "M", k, f, "L", k, h ? v(n.plotY) : f,
                "M", k, g, "L", k, i ? v(n.yBottom) : g, "Z"], l ? l.animate({ d: m }) : n.graphic = b.renderer.path(m).attr(c).add(a.group).shadow(a.options.shadow)
            })
        }
    }); D.candlestick = R; var sb = sa.prototype.symbols; S.flags = w(S.column, { dataGrouping: null, fillColor: "white", lineWidth: 1, pointRange: 0, shape: "flag", stackDistance: 12, states: { hover: { lineColor: "black", fillColor: "#FCFFC5" } }, style: { fontSize: "11px", fontWeight: "bold", textAlign: "center" }, tooltip: { pointFormat: "{point.text}<br/>" }, threshold: null, y: -30 }); D.flags = ea(D.column, {
        type: "flags",
        sorted: !1, noSharedTooltip: !0, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: M.prototype.init, pointAttrToOptions: { fill: "fillColor", stroke: "color", "stroke-width": "lineWidth", r: "radius" }, translate: function () {
            D.column.prototype.translate.apply(this); var a = this.chart, b = this.points, c = b.length - 1, d, e, f = this.options.onSeries, f = (d = f && a.get(f)) && d.options.step, g = d && d.points, h = g && g.length, i = this.xAxis, j = i.getExtremes(), k, l, m; if (d && d.visible && h) {
                d = d.currentDataGrouping; l = g[h - 1].x + (d ? d.totalRange :
                0); for (b.sort(function (a, b) { return a.x - b.x }) ; h-- && b[c];) if (d = b[c], k = g[h], k.x <= d.x && k.plotY !== r) { if (d.x <= l) d.plotY = k.plotY, k.x < d.x && !f && (m = g[h + 1]) && m.plotY !== r && (d.plotY += (d.x - k.x) / (m.x - k.x) * (m.plotY - k.plotY)); c--; h++; if (c < 0) break }
            } q(b, function (c, d) { if (c.plotY === r) c.x >= j.min && c.x <= j.max ? c.plotY = a.chartHeight - i.bottom - (i.opposite ? i.height : 0) + i.offset - a.plotTop : c.shapeArgs = {}; if ((e = b[d - 1]) && e.plotX === c.plotX) { if (e.stackIndex === r) e.stackIndex = 0; c.stackIndex = e.stackIndex + 1 } })
        }, drawPoints: function () {
            var a,
            b = this.points, c = this.chart.renderer, d, e, f = this.options, g = f.y, h, i, j, k, l = f.lineWidth % 2 / 2, m, p; for (i = b.length; i--;) if (j = b[i], a = j.plotX > this.xAxis.len, d = j.plotX + (a ? l : -l), k = j.stackIndex, h = j.options.shape || f.shape, e = j.plotY, e !== r && (e = j.plotY + g + l - (k !== r && k * f.stackDistance)), m = k ? r : j.plotX + l, p = k ? r : j.plotY, k = j.graphic, e !== r && d >= 0 && !a) a = j.pointAttr[j.selected ? "select" : ""], k ? k.attr({ x: d, y: e, r: a.r, anchorX: m, anchorY: p }) : j.graphic = c.label(j.options.title || f.title || "A", d, e, h, m, p, f.useHTML).css(w(f.style, j.style)).attr(a).attr({
                align: h ===
                "flag" ? "left" : "center", width: f.width, height: f.height
            }).add(this.markerGroup).shadow(f.shadow), j.tooltipPos = [d, e]; else if (k) j.graphic = k.destroy()
        }, drawTracker: function () { var a = this.points; fb.drawTrackerPoint.apply(this); q(a, function (b) { var c = b.graphic; c && A(c.element, "mouseover", function () { if (b.stackIndex > 0 && !b.raised) b._y = c.y, c.attr({ y: b._y - 8 }), b.raised = !0; q(a, function (a) { if (a !== b && a.raised && a.graphic) a.graphic.attr({ y: a._y }), a.raised = !1 }) }) }) }, animate: la
    }); sb.flag = function (a, b, c, d, e) {
        var f = e && e.anchorX ||
        a, e = e && e.anchorY || b; return ["M", f, e, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"]
    }; q(["circle", "square"], function (a) { sb[a + "pin"] = function (b, c, d, e, f) { var g = f && f.anchorX, f = f && f.anchorY, b = sb[a](b, c, d, e); g && f && b.push("M", g, c > f ? c : c + e, "L", g, f); return b } }); Za === Highcharts.VMLRenderer && q(["flag", "circlepin", "squarepin"], function (a) { rb.prototype.symbols[a] = sb[a] }); R = gb("linearGradient", { x1: 0, y1: 0, x2: 0, y2: 1 }, "stops", [[0, "#FFF"], [1, "#CCC"]]); K = [].concat(Xb); K[4] = ["day", [1, 2, 3, 4]]; K[5] = ["week", [1, 2, 3]]; u(L, {
        navigator: {
            handles: {
                backgroundColor: "#FFF",
                borderColor: "#666"
            }, height: 40, margin: 10, maskFill: "rgba(255, 255, 255, 0.75)", outlineColor: "#444", outlineWidth: 1, series: { type: D.areaspline === r ? "line" : "areaspline", color: "#4572A7", compare: null, fillOpacity: 0.4, dataGrouping: { approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: K }, dataLabels: { enabled: !1, zIndex: 2 }, id: "highcharts-navigator-series", lineColor: "#4572A7", lineWidth: 1, marker: { enabled: !1 }, pointRange: 0, shadow: !1, threshold: null }, xAxis: {
                tickWidth: 0, lineWidth: 0, gridLineWidth: 1, tickPixelInterval: 200,
                labels: { align: "left", x: 3, y: -4 }, crosshair: { label: { enabled: !1 } }
            }, yAxis: { gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: 0.1, maxPadding: 0.1, labels: { enabled: !1 }, crosshair: { enabled: !1, label: { enabled: !1 } }, title: { text: null }, tickWidth: 0 }
        }, scrollbar: {
            height: cb ? 20 : 14, barBackgroundColor: R, barBorderRadius: 2, barBorderWidth: 1, barBorderColor: "#666", buttonArrowColor: "#666", buttonBackgroundColor: R, buttonBorderColor: "#666", buttonBorderRadius: 2, buttonBorderWidth: 1, minWidth: 6, rifleColor: "#666", trackBackgroundColor: gb("linearGradient",
            { x1: 0, y1: 0, x2: 0, y2: 1 }, "stops", [[0, "#EEE"], [1, "#FFF"]]), trackBorderColor: "#CCC", trackBorderWidth: 1, liveRedraw: da && !cb
        }
    }); Bb.prototype = {
        drawHandle: function (a, b) {
            var c = this.chart, d = c.renderer, e = this.elementsToDestroy, f = this.handles, g = this.navigatorOptions.handles, g = { fill: g.backgroundColor, stroke: g.borderColor, "stroke-width": 1 }, h; this.rendered || (f[b] = d.g().css({ cursor: "e-resize" }).attr({ zIndex: 4 - b }).add(), h = d.rect(-4.5, 0, 9, 16, 3, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4,
            "L", 0.5, 12]).attr(g).add(f[b]), e.push(h)); f[b][c.isResizing ? "animate" : "attr"]({ translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), translateY: this.top + this.height / 2 - 8 })
        }, drawScrollbarButton: function (a) {
            var b = this.chart.renderer, c = this.elementsToDestroy, d = this.scrollbarButtons, e = this.scrollbarHeight, f = this.scrollbarOptions, g; this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor, "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({ fill: f.buttonArrowColor }).add(d[a]), c.push(g)); a && d[a].attr({ translateX: this.scrollerWidth - e })
        }, render: function (a, b, c, d) {
            var e = this.chart, f = e.renderer, g, h, i, j, k = this.scrollbarGroup, l = this.navigatorGroup, m = this.scrollbar, l = this.xAxis, p = this.scrollbarTrack, n = this.scrollbarHeight, q = this.scrollbarEnabled, r = this.navigatorOptions, x = this.scrollbarOptions, t = x.minWidth, u = this.height,
            w = this.top, A = this.navigatorEnabled, I = r.outlineWidth, z = I / 2, G = 0, C = this.outlineHeight, E = x.barBorderRadius, D = x.barBorderWidth, B = w + z, F; if (!isNaN(a)) {
                this.navigatorLeft = g = o(l.left, e.plotLeft + n); this.navigatorWidth = h = o(l.len, e.plotWidth - 2 * n); this.scrollerLeft = i = g - n; this.scrollerWidth = j = j = h + 2 * n; l.getExtremes && (F = this.getUnionExtremes(!0)) && (F.dataMin !== l.min || F.dataMax !== l.max) && l.setExtremes(F.dataMin, F.dataMax, !0, !1); c = o(c, l.translate(a)); d = o(d, l.translate(b)); if (isNaN(c) || O(c) === Infinity) c = 0, d = j; this.zoomedMax =
                y(s(c, d), h); this.zoomedMin = s(this.fixedWidth ? this.zoomedMax - this.fixedWidth : y(c, d), 0); this.range = this.zoomedMax - this.zoomedMin; c = v(this.zoomedMax); b = v(this.zoomedMin); a = c - b; if (!this.rendered) {
                    if (A) this.navigatorGroup = l = f.g("navigator").attr({ zIndex: 3 }).add(), this.leftShade = f.rect().attr({ fill: r.maskFill }).add(l), this.rightShade = f.rect().attr({ fill: r.maskFill }).add(l), this.outline = f.path().attr({ "stroke-width": I, stroke: r.outlineColor }).add(l); if (q) this.scrollbarGroup = k = f.g("scrollbar").add(), m = x.trackBorderWidth,
                    this.scrollbarTrack = p = f.rect().attr({ y: -m % 2 / 2, fill: x.trackBackgroundColor, stroke: x.trackBorderColor, "stroke-width": m, r: x.trackBorderRadius || 0, height: n }).add(k), this.scrollbar = m = f.rect().attr({ y: -D % 2 / 2, height: n, fill: x.barBackgroundColor, stroke: x.barBorderColor, "stroke-width": D, r: E }).add(k), this.scrollbarRifles = f.path().attr({ stroke: x.rifleColor, "stroke-width": 1 }).add(k)
                } e = e.isResizing ? "animate" : "attr"; A && (this.leftShade[e]({ x: g, y: w, width: b, height: u }), this.rightShade[e]({ x: g + c, y: w, width: h - c, height: u }),
                this.outline[e]({ d: ["M", i, B, "L", g + b + z, B, g + b + z, B + C - n, "M", g + c - z, B + C - n, "L", g + c - z, B, i + j, B] }), this.drawHandle(b + z, 0), this.drawHandle(c + z, 1)); if (q && k) this.drawScrollbarButton(0), this.drawScrollbarButton(1), k[e]({ translateX: i, translateY: v(B + u) }), p[e]({ width: j }), g = n + b, h = a - D, h < t && (G = (t - h) / 2, h = t, g -= G), this.scrollbarPad = G, m[e]({ x: Q(g) + D % 2 / 2, width: h }), t = n + b + a / 2 - 0.5, this.scrollbarRifles.attr({ visibility: a > 12 ? "visible" : "hidden" })[e]({ d: ["M", t - 3, n / 4, "L", t - 3, 2 * n / 3, "M", t, n / 4, "L", t, 2 * n / 3, "M", t + 3, n / 4, "L", t + 3, 2 * n / 3] });
                this.scrollbarPad = G; this.rendered = !0
            }
        }, addEvents: function () { var a = this.chart.container, b = this.mouseDownHandler, c = this.mouseMoveHandler, d = this.mouseUpHandler, e; e = [[a, "mousedown", b], [a, "mousemove", c], [document, "mouseup", d]]; db && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]); q(e, function (a) { A.apply(null, a) }); this._events = e }, removeEvents: function () {
            q(this._events, function (a) { X.apply(null, a) }); this._events = r; this.navigatorEnabled && this.baseSeries && X(this.baseSeries, "updatedData",
            this.updatedDataHandler)
        }, init: function () {
            var a = this, b = a.chart, c, d, e = a.scrollbarHeight, f = a.navigatorOptions, g = a.height, h = a.top, i, j, k = document.body.style, l, m = a.baseSeries; a.mouseDownHandler = function (d) {
                var d = b.pointer.normalize(d), e = a.zoomedMin, f = a.zoomedMax, h = a.top, j = a.scrollbarHeight, m = a.scrollerLeft, n = a.scrollerWidth, p = a.navigatorLeft, o = a.navigatorWidth, q = a.scrollbarPad, r = a.range, s = d.chartX, t = d.chartY, d = b.xAxis[0], u, v = cb ? 10 : 7; if (t > h && t < h + g + j) if ((h = !a.scrollbarEnabled || t < h + g) && T.abs(s - e - p) < v) a.grabbedLeft =
                !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null; else if (h && T.abs(s - f - p) < v) a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null; else if (s > p + e - q && s < p + f + q) { a.grabbedCenter = s; a.fixedWidth = r; if (b.renderer.isSVG) l = k.cursor, k.cursor = "ew-resize"; i = s - e } else if (s > m && s < m + n) { f = h ? s - p - r / 2 : s < p ? e - r * 0.2 : s > m + n - j ? e + r * 0.2 : s < p + e ? e - r : f; if (f < 0) f = 0; else if (f + r >= o) f = o - r, u = c.dataMax; if (f !== e) a.fixedWidth = r, e = c.toFixedRange(f, f + r, null, u), d.setExtremes(e.min, e.max, !0, !1, { trigger: "navigator" }) }
            };
            a.mouseMoveHandler = function (c) { var d = a.scrollbarHeight, e = a.navigatorLeft, f = a.navigatorWidth, g = a.scrollerLeft, h = a.scrollerWidth, k = a.range, l; if (c.pageX !== 0) c = b.pointer.normalize(c), l = c.chartX, l < e ? l = e : l > g + h - d && (l = g + h - d), a.grabbedLeft ? (j = !0, a.render(0, 0, l - e, a.otherHandlePos)) : a.grabbedRight ? (j = !0, a.render(0, 0, a.otherHandlePos, l - e)) : a.grabbedCenter && (j = !0, l < i ? l = i : l > f + i - k && (l = f + i - k), a.render(0, 0, l - i, l - i + k)), j && a.scrollbarOptions.liveRedraw && setTimeout(function () { a.mouseUpHandler(c) }, 0) }; a.mouseUpHandler =
            function (d) { var e, f; if (j) { if (a.zoomedMin === a.otherHandlePos) e = a.fixedExtreme; else if (a.zoomedMax === a.otherHandlePos) f = a.fixedExtreme; if (a.zoomedMax === a.navigatorWidth) f = c.dataMax; e = c.toFixedRange(a.zoomedMin, a.zoomedMax, e, f); b.xAxis[0].setExtremes(e.min, e.max, !0, !1, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: d }) } if (d.type !== "mousemove") a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = j = i = null, k.cursor = l || "" }; var p = b.xAxis.length, n = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin; a.navigatorEnabled ? (a.xAxis = c = new W(b, w({ ordinal: m && m.xAxis.options.ordinal }, f.xAxis, { id: "navigator-x-axis", isX: !0, type: "datetime", index: p, height: g, offset: 0, offsetLeft: e, offsetRight: -e, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1 })), a.yAxis = d = new W(b, w(f.yAxis, { id: "navigator-y-axis", alignTicks: !1, height: g, offset: 0, index: n, zoomEnabled: !1 })), m || f.series.data ? a.addBaseSeries() : b.series.length === 0 && U(b, "redraw",
            function (c, d) { if (b.series.length > 0 && !a.series) a.setBaseSeries(), b.redraw = c; c.call(b, d) })) : a.xAxis = c = { translate: function (a, c) { var d = b.xAxis[0].getExtremes(), f = b.plotWidth - 2 * e, g = d.dataMin, d = d.dataMax - g; return c ? a * d / f + g : f * (a - g) / d }, toFixedRange: W.prototype.toFixedRange }; U(b, "getMargins", function (b) {
                var e = this.legend, f = e.options; b.call(this); a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign === "bottom" && f.enabled && !f.floating ? e.legendHeight + o(f.margin,
                10) : 0); if (c && d) c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize()
            }); a.addEvents()
        }, getUnionExtremes: function (a) { var b = this.chart.xAxis[0], c = this.xAxis, d = c.options; if (!a || b.dataMin !== null) return { dataMin: o(d && d.min, (t(b.dataMin) && t(c.dataMin) ? y : o)(b.dataMin, c.dataMin)), dataMax: o(d && d.max, (t(b.dataMax) && t(c.dataMax) ? s : o)(b.dataMax, c.dataMax)) } }, setBaseSeries: function (a) {
            var b = this.chart, a = a || b.options.navigator.baseSeries; this.series && this.series.remove(); this.baseSeries = b.series[a] || typeof a ===
            "string" && b.get(a) || b.series[0]; this.xAxis && this.addBaseSeries()
        }, addBaseSeries: function () {
            var a = this.baseSeries, b = a ? a.options : {}, c = b.data, d = this.navigatorOptions.series, e; e = d.data; this.hasNavigatorData = !!e; b = w(b, d, { clip: !1, enableMouseTracking: !1, group: "nav", padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", name: "Navigator", showInLegend: !1, isInternal: !0, visible: !0 }); b.data = e || c; this.series = this.chart.initSeries(b); if (a && this.navigatorOptions.adaptToUpdatedData !== !1) A(a, "updatedData", this.updatedDataHandler),
            a.userOptions.events = u(a.userOptions.event, { updatedData: this.updatedDataHandler })
        }, updatedDataHandler: function () {
            var a = this.chart.scroller, b = a.baseSeries, c = b.xAxis, d = c.getExtremes(), e = d.min, f = d.max, g = d.dataMin, d = d.dataMax, h = f - e, i, j, k, l, m, p = a.series; i = p.xData; var n = !!c.setExtremes; j = f >= i[i.length - 1] - (this.closestPointRange || 0); i = e <= g; if (!a.hasNavigatorData) p.options.pointStart = b.xData[0], p.setData(b.options.data, !1), m = !0; i && (l = g, k = l + h); j && (k = d, i || (l = s(k - h, p.xData[0]))); n && (i || j) ? isNaN(l) || c.setExtremes(l,
            k, !0, !1, { trigger: "updatedData" }) : (m && this.chart.redraw(!1), a.render(s(e, g), y(f, d)))
        }, destroy: function () {
            this.removeEvents(); q([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function (a) { a && a.destroy && a.destroy() }); this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null; q([this.scrollbarButtons, this.handles, this.elementsToDestroy],
            function (a) { Ia(a) })
        }
    }; Highcharts.Scroller = Bb; U(W.prototype, "zoom", function (a, b, c) { var d = this.chart, e = d.options, f = e.chart.zoomType, g = e.navigator, e = e.rangeSelector, h; if (this.isXAxis && (g && g.enabled || e && e.enabled)) if (f === "x") d.resetZoomButton = "blocked"; else if (f === "y") h = !1; else if (f === "xy") d = this.previousZoom, t(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom); return h !== r ? h : a.call(this, b, c) }); U(ya.prototype, "init", function (a, b, c) {
        A(this, "beforeRender", function () {
            var a =
            this.options; if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new Bb(this)
        }); a.call(this, b, c)
    }); U(M.prototype, "addPoint", function (a, b, c, d, e) { var f = this.options.turboThreshold; f && this.xData.length > f && aa(b) && !Pa(b) && this.chart.scroller && pa(20, !0); a.call(this, b, c, d, e) }); u(L, { rangeSelector: { buttonTheme: { width: 28, height: 16, padding: 1, r: 0, stroke: "#68A", zIndex: 7 }, inputPosition: { align: "right" }, labelStyle: { color: "#666" } } }); L.lang = w(L.lang, { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "From", rangeSelectorTo: "To" });
    Cb.prototype = {
        clickButton: function (a, b) {
            var c = this, d = c.selected, e = c.chart, f = c.buttons, g = c.buttonOptions[a], h = e.xAxis[0], i = e.scroller && e.scroller.getUnionExtremes() || h || {}, j = i.dataMin, k = i.dataMax, l, m = h && v(y(h.max, o(k, h.max))), p = new Date(m), n = g.type, t = g.count, i = g._range, u; if (!(j === null || k === null || a === c.selected)) {
                if (n === "month" || n === "year") l = { month: "Month", year: "FullYear" }[n], p["set" + l](p["get" + l]() - t), l = p.getTime(), j = o(j, Number.MIN_VALUE), isNaN(l) || l < j ? (l = j, m = y(l + i, k)) : i = m - l; else if (i) l = s(m - i, j), m =
                y(l + i, k); else if (n === "ytd") if (h) { if (k === r) j = Number.MAX_VALUE, k = Number.MIN_VALUE, q(e.series, function (a) { a = a.xData; j = y(a[0], j); k = s(a[a.length - 1], k) }), b = !1; m = new Date(k); u = m.getFullYear(); l = u = s(j || 0, Date.UTC(u, 0, 1)); m = m.getTime(); m = y(k || m, m) } else { A(e, "beforeRender", function () { c.clickButton(a) }); return } else n === "all" && h && (l = j, m = k); f[d] && f[d].setState(0); f[a] && f[a].setState(2); e.fixedRange = i; h ? h.setExtremes(l, m, o(b, 1), 0, { trigger: "rangeSelectorButton", rangeSelectorButton: g }) : (d = e.options.xAxis, d[0] = w(d[0],
                { range: i, min: u })); c.setSelected(a)
            }
        }, setSelected: function (a) { this.selected = this.options.selected = a }, defaultButtons: [{ type: "month", count: 1, text: "1m" }, { type: "month", count: 3, text: "3m" }, { type: "month", count: 6, text: "6m" }, { type: "ytd", text: "YTD" }, { type: "year", count: 1, text: "1y" }, { type: "all", text: "All" }], init: function (a) {
            var b = this, c = a.options.rangeSelector, d = c.buttons || [].concat(b.defaultButtons), e = c.selected, f = b.blurInputs = function () { var a = b.minInput, c = b.maxInput; a && a.blur(); c && c.blur() }; b.chart = a; b.options =
            c; b.buttons = []; a.extraTopMargin = 25; b.buttonOptions = d; A(a.container, "mousedown", f); A(a, "resize", f); q(d, b.computeButtonRange); e !== r && d[e] && this.clickButton(e, !1); A(a, "load", function () { A(a.xAxis[0], "afterSetExtremes", function () { b.updateButtonStates(!0) }) })
        }, updateButtonStates: function (a) {
            var b = this, c = this.chart, d = c.xAxis[0], e = c.scroller && c.scroller.getUnionExtremes() || d, f = e.dataMin, g = e.dataMax, h = b.selected, i = b.buttons; a && c.fixedRange !== v(d.max - d.min) && (i[h] && i[h].setState(0), b.setSelected(null)); q(b.buttonOptions,
            function (a, c) { var e = a._range, m = e > g - f, p = e < d.minRange, n = a.type === "all" && d.max - d.min >= g - f && i[c].state !== 2, o = a.type === "ytd" && ra("%Y", f) === ra("%Y", g); e === v(d.max - d.min) && c !== h ? (b.setSelected(c), i[c].setState(2)) : m || p || n || o ? i[c].setState(3) : i[c].state === 3 && i[c].setState(0) })
        }, computeButtonRange: function (a) { var b = a.type, c = a.count || 1, d = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5 }; if (d[b]) a._range = d[b] * c; else if (b === "month" || b === "year") a._range = { month: 30, year: 365 }[b] * 864E5 * c }, setInputValue: function (a,
        b) { var c = this.chart.options.rangeSelector; if (t(b)) this[a + "Input"].HCTime = b; this[a + "Input"].value = ra(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime); this[a + "DateBox"].attr({ text: ra(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime) }) }, drawInput: function (a) {
            var b = this, c = b.chart, d = c.options.chart.style, e = c.renderer, f = c.options.rangeSelector, g = b.div, h = a === "min", i, j, k, l = this.inputGroup; this[a + "Label"] = j = e.label(L.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({ padding: 1 }).css(w(d,
            f.labelStyle)).add(l); l.offset += j.width + 5; this[a + "DateBox"] = k = e.label("", l.offset).attr({ padding: 1, width: f.inputBoxWidth || 90, height: f.inputBoxHeight || 16, stroke: f.inputBoxBorderColor || "silver", "stroke-width": 1 }).css(w({ textAlign: "center" }, d, f.inputStyle)).on("click", function () { b[a + "Input"].focus() }).add(l); l.offset += k.width + (h ? 10 : 0); this[a + "Input"] = i = Z("input", { name: a, className: "highcharts-range-selector", type: "text" }, u({
                position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, textAlign: "center",
                fontSize: d.fontSize, fontFamily: d.fontFamily, top: c.plotTop + "px"
            }, f.inputStyle), g); i.onfocus = function () { z(this, { left: l.translateX + k.x + "px", top: l.translateY + "px", width: k.width - 2 + "px", height: k.height - 2 + "px", border: "2px solid silver" }) }; i.onblur = function () { z(this, { border: 0, width: "1px", height: "1px" }); b.setInputValue(a) }; i.onchange = function () {
                var a = i.value, d = (f.inputDateParser || Date.parse)(a), e = c.xAxis[0], g = e.dataMin, j = e.dataMax; isNaN(d) && (d = a.split("-"), d = Date.UTC(E(d[0]), E(d[1]) - 1, E(d[2]))); isNaN(d) ||
                (L.global.useUTC || (d += (new Date).getTimezoneOffset() * 6E4), h ? d > b.maxInput.HCTime ? d = r : d < g && (d = g) : d < b.minInput.HCTime ? d = r : d > j && (d = j), d !== r && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, r, r, { trigger: "rangeSelectorInput" }))
            }
        }, render: function (a, b) {
            var c = this, d = c.chart, e = d.renderer, f = d.container, g = d.options, h = g.exporting && g.navigation && g.navigation.buttonOptions, i = g.rangeSelector, j = c.buttons, g = L.lang, k = c.div, k = c.inputGroup, l = i.buttonTheme, m = i.inputEnabled !== !1, o = l && l.states, n = d.plotLeft, r; if (!c.rendered &&
            (c.zoomText = e.text(g.rangeSelectorZoom, n, d.plotTop - 10).css(i.labelStyle).add(), r = n + c.zoomText.getBBox().width + 5, q(c.buttonOptions, function (a, b) { j[b] = e.button(a.text, r, d.plotTop - 25, function () { c.clickButton(b); c.isActive = !0 }, l, o && o.hover, o && o.select).css({ textAlign: "center" }).add(); r += j[b].width + (i.buttonSpacing || 0); c.selected === b && j[b].setState(2) }), c.updateButtonStates(), m)) c.div = k = Z("div", null, { position: "relative", height: 0, zIndex: 1 }), f.parentNode.insertBefore(k, f), c.inputGroup = k = e.g("input-group").add(),
            k.offset = 0, c.drawInput("min"), c.drawInput("max"); m && (f = d.plotTop - 35, k.align(u({ y: f, width: k.offset, x: h && f < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0 }, i.inputPosition), !0, d.spacingBox), c.setInputValue("min", a), c.setInputValue("max", b)); c.rendered = !0
        }, destroy: function () {
            var a = this.minInput, b = this.maxInput, c = this.chart, d = this.blurInputs, e; X(c.container, "mousedown", d); X(c, "resize", d); Ia(this.buttons); if (a) a.onfocus = a.onblur = a.onchange = null; if (b) b.onfocus = b.onblur = b.onchange = null; for (e in this) this[e] && e !== "chart" &&
            (this[e].destroy ? this[e].destroy() : this[e].nodeType && Sa(this[e])), this[e] = null
        }
    }; W.prototype.toFixedRange = function (a, b, c, d) { var e = this.chart && this.chart.fixedRange, a = o(c, this.translate(a, !0)), b = o(d, this.translate(b, !0)), c = e && (b - a) / e; c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e); return { min: a, max: b } }; U(ya.prototype, "init", function (a, b, c) { A(this, "init", function () { if (this.options.rangeSelector.enabled) this.rangeSelector = new Cb(this) }); a.call(this, b, c) }); Highcharts.RangeSelector = Cb; ya.prototype.callbacks.push(function (a) {
        function b() {
            f =
            a.xAxis[0].getExtremes(); g.render(f.min, f.max)
        } function c() { f = a.xAxis[0].getExtremes(); isNaN(f.min) || h.render(f.min, f.max) } function d(a) { a.triggerOp !== "navigator-drag" && g.render(a.min, a.max) } function e(a) { h.render(a.min, a.max) } var f, g = a.scroller, h = a.rangeSelector; g && (A(a.xAxis[0], "afterSetExtremes", d), U(a, "drawChartBox", function (a) { var c = this.isDirtyBox; a.call(this); c && b() }), b()); h && (A(a.xAxis[0], "afterSetExtremes", e), A(a, "resize", c), c()); A(a, "destroy", function () {
            g && X(a.xAxis[0], "afterSetExtremes",
            d); h && (X(a, "resize", c), X(a.xAxis[0], "afterSetExtremes", e))
        })
    }); Highcharts.StockChart = function (a, b) {
        var c = a.series, d, e = o(a.navigator && a.navigator.enabled, !0) ? { startOnTick: !1, endOnTick: !1 } : null, f = { marker: { enabled: !1, states: { hover: { radius: 5 } } }, states: { hover: { lineWidth: 2 } } }, g = { shadow: !1, borderWidth: 0 }; a.xAxis = Na(ja(a.xAxis || {}), function (a) { return w({ minPadding: 0, maxPadding: 0, ordinal: !0, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: !0 }, a, { type: "datetime", categories: null }, e) }); a.yAxis = Na(ja(a.yAxis ||
        {}), function (a) { d = a.opposite; return w({ labels: { align: d ? "right" : "left", x: d ? -2 : 2, y: -2 }, showLastLabel: !1, title: { text: null } }, a) }); a.series = null; a = w({ chart: { panning: !0, pinchType: "x" }, navigator: { enabled: !0 }, scrollbar: { enabled: !0 }, rangeSelector: { enabled: !0 }, title: { text: null }, tooltip: { shared: !0, crosshairs: !0 }, legend: { enabled: !1 }, plotOptions: { line: f, spline: f, area: f, areaspline: f, arearange: f, areasplinerange: f, column: g, columnrange: g, candlestick: g, ohlc: g } }, a, { _stock: !0, chart: { inverted: !1 } }); a.series = c; return new ya(a,
        b)
    }; U($a.prototype, "init", function (a, b, c) { var d = c.chart.pinchType || ""; a.call(this, b, c); this.pinchX = this.pinchHor = d.indexOf("x") !== -1; this.pinchY = this.pinchVert = d.indexOf("y") !== -1 }); U(W.prototype, "hideCrosshair", function (a, b, c) { a.call(this, b, c); this.crossLabel && this.crossLabel.hide() }); U(W.prototype, "drawCrosshair", function (a, b, c) {
        var d, e; a.call(this, b, c); if (t(this.crosshair.label) && this.crosshair.label.enabled && t(c)) {
            var a = this.chart, f = this.options.crosshair.label, g = this.isXAxis ? "x" : "y", b = this.horiz,
            h = this.opposite, i = this.left, j = this.top, k = this.crossLabel, l, m, p = f.format, n = ""; if (!k) k = this.crossLabel = a.renderer.label().attr({ align: f.align || b ? "center" : h ? this.labelAlign === "right" ? "right" : "center" : this.labelAlign === "left" ? "left" : "center", zIndex: 12, height: b ? 16 : r, fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray", padding: o(f.padding, 2), stroke: f.borderColor || null, "stroke-width": f.borderWidth || 0 }).css(u({ color: "white", fontWeight: "normal", fontSize: "11px", textAlign: "center" }, f.style)).add();
            b ? (l = c.plotX + i, m = j + (h ? 0 : this.height)) : (l = h ? this.width + i : 0, m = c.plotY + j); if (m < j || m > j + this.height) this.hideCrosshair(); else {
                !p && !f.formatter && (this.isDatetimeAxis && (n = "%b %d, %Y"), p = "{value" + (n ? ":" + n : "") + "}"); k.attr({ x: l, y: m, text: p ? Ha(p, { value: c[g] }) : f.formatter.call(this, c[g]), visibility: "visible" }); c = k.box; if (b) { if (this.options.tickPosition === "inside" && !h || this.options.tickPosition !== "inside" && h) m = k.y - c.height } else m = k.y - c.height / 2; b ? (d = i - c.x, e = i + this.width - c.x) : (d = this.labelAlign === "left" ? i : 0, e = this.labelAlign ===
                "right" ? i + this.width : a.chartWidth); k.translateX < d && (l += d - k.translateX); k.translateX + c.width >= e && (l -= k.translateX + c.width - e); k.attr({ x: l, y: m, visibility: "visible" })
            }
        }
    }); var kc = Y.init, lc = Y.processData, mc = Da.prototype.tooltipFormatter; Y.init = function () { kc.apply(this, arguments); this.setCompare(this.options.compare) }; Y.setCompare = function (a) {
        this.modifyValue = a === "value" || a === "percent" ? function (b, c) { var d = this.compareValue, b = a === "value" ? b - d : b = 100 * (b / d) - 100; if (c) c.change = b; return b } : null; if (this.chart.hasRendered) this.isDirty =
        !0
    }; Y.processData = function () { var a = 0, b, c, d; lc.apply(this, arguments); if (this.xAxis && this.processedYData) { b = this.processedXData; c = this.processedYData; for (d = c.length; a < d; a++) if (typeof c[a] === "number" && b[a] >= this.xAxis.min) { this.compareValue = c[a]; break } } }; U(Y, "getExtremes", function (a) { a.call(this); if (this.modifyValue) this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin) }); W.prototype.setCompare = function (a, b) {
        this.isXAxis || (q(this.series, function (b) { b.setCompare(a) }),
        o(b, !0) && this.chart.redraw())
    }; Da.prototype.tooltipFormatter = function (a) { a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + Ga(this.change, o(this.series.tooltipOptions.changeDecimals, 2))); return mc.apply(this, [a]) }; u(Highcharts, {
        Axis: W, Chart: ya, Color: Ba, Point: Da, Tick: Ya, Tooltip: Ab, Renderer: Za, Series: M, SVGElement: xa, SVGRenderer: sa, arrayMin: Ra, arrayMax: va, charts: Wa, dateFormat: ra, format: Ha, pathAnim: Eb, getOptions: function () { return L }, hasBidiBug: Yb, isTouchDevice: cb, numberFormat: Ga, seriesTypes: D, setOptions: function (a) {
            L =
            w(!0, L, a); Lb(); return L
        }, addEvent: A, removeEvent: X, createElement: Z, discardElement: Sa, css: z, each: q, extend: u, map: Na, merge: w, pick: o, splat: ja, extendClass: ea, pInt: E, wrap: U, svg: da, canvas: ka, vml: !da && !ka, product: "Highstock", version: "1.3.9"
    })
})();
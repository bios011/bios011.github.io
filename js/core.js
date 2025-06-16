/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "1.12.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                    f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                    g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            n.isFunction(a) ? (c = e.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || n.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]),
            f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1,
                this[0] = f
            }
            return this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
            D.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = !0,
                c || j.disable(),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
        a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
        n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(),
            "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K),
                a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(),
                        n.ready()
                    }
                }()
            }
        return I.promise(b)
    }
    ,
    n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0],
        c && c.style && (b = d.createElement("div"),
        e = d.createElement("div"),
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(e).appendChild(b),
        "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(e))
    }),
    function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }),
                "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[n.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[n.camelCase(b)])) : f = g,
                f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f),
                1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = n._data(a, b),
            c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    }),
    function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0],
            c && c.style ? (b = d.createElement("div"),
            e = d.createElement("div"),
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(e).appendChild(b),
            "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(d.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(e),
            a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$","i")
      , V = ["Top", "Right", "Bottom", "Left"]
      , W = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Z = /^(?:checkbox|radio)$/i
      , $ = /<([\w:-]+)/
      , _ = /^$|\/(?:java|ecma)script/i
      , aa = /^\s+/
      , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div")
          , b = d.createDocumentFragment()
          , c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === a.firstChild.nodeType,
        l.tbody = !a.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!a.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        b.appendChild(c),
        l.appendChecked = c.checked,
        a.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        b.appendChild(a),
        c = d.createElement("input"),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !!a.addEventListener,
        a[n.expando] = 1,
        l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/
      , ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r],
            g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")),
                    j = ($.exec(g) || ["", ""])[1].toLowerCase(),
                    m = da[j] || da._default,
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
                    f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
                    !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
                        f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes),
                    i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g),
            i = ea(p.appendChild(g), "script"),
            h && fa(i),
            c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null,
        p
    }
    !function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (l[b] = c in a) || (e.setAttribute(c, "t"),
            l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i
      , la = /^key/
      , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , na = /^(?:focusinfocus|focusoutblur)$/
      , oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(G) || [""],
                h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = n.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = n.event.special[o] || {},
                    l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (m = g[o]) || (m = g[o] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length;
                        while (f--)
                            g = m[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle,
                n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            h = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            l = n.event.special[q] || {},
            f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q,
                    na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i),
                        m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q,
                    g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                    g && g.apply(i, c),
                    g = h && i[h],
                    g && g.apply && M(i) && (b.result = g.apply(i, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = q,
                !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                    m && (e[h] = null),
                    n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0,
                    m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
                f = e.documentElement,
                c = e.body,
                a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa,
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }),
                n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble,
            this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }),
            n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                n.event.simulate("change", this, a)
            })),
            !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }),
                n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !ka.test(this.nodeName)
        }
    }),
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
                n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = qa),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g
      , ua = new RegExp("<(?:" + ba + ")[\\s/>]","i")
      , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , wa = /<script|<style|<link/i
      , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ya = /^true\/(.*)/
      , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Aa = ca(d)
      , Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text,
            Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
        e = k.firstChild,
        1 === k.childNodes.length && (k = e),
        e || d)) {
            for (i = n.map(ea(k, "script"), Da),
            h = i.length; o > m; m++)
                g = k,
                m !== p && (g = n.clone(g, !0, !0),
                h && n.merge(i, ea(g, "script"))),
                c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument,
                n.map(i, Ea),
                m = 0; h > m; m++)
                    g = i[m],
                    _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
            Ba.removeChild(f = Ba.firstChild)),
            !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f),
                h = ea(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a),
                    d = d || ea(f),
                    g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"),
            d.length > 0 && fa(d, !i && ea(a, "script")),
            d = h = e = null,
            f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
                    c.push(f))
                }
        }
    }),
    n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(ea(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                n(f[d])[b](c),
                g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function Ma(a) {
        var b = d
          , c = Ka[a];
        return c || (c = La(a, b),
        "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
        b.write(),
        b.close(),
        c = La(a, b),
        Ja.detach()),
        Ka[a] = c),
        c
    }
    var Na = /^margin/
      , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$","i")
      , Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Qa = d.documentElement;
    !function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === j.style.opacity,
            l.cssFloat = !!j.style.cssFloat,
            j.style.backgroundClip = "content-box",
            j.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === j.style.backgroundClip,
            i = d.createElement("div"),
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            j.innerHTML = "",
            i.appendChild(j),
            l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
            n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(),
                    f
                },
                boxSizingReliable: function() {
                    return null == b && k(),
                    e
                },
                pixelMarginRight: function() {
                    return null == b && k(),
                    c
                },
                pixelPosition: function() {
                    return null == b && k(),
                    b
                },
                reliableMarginRight: function() {
                    return null == b && k(),
                    g
                },
                reliableMarginLeft: function() {
                    return null == b && k(),
                    h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                b = e = h = !1,
                c = g = !0,
                a.getComputedStyle && (l = a.getComputedStyle(j),
                b = "1%" !== (l || {}).top,
                h = "2px" === (l || {}).marginLeft,
                e = "4px" === (l || {
                    width: "4px"
                }).width,
                j.style.marginRight = "50%",
                c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight,
                k = j.appendChild(d.createElement("div")),
                k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                k.style.marginRight = k.style.width = "0",
                j.style.width = "1px",
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
                j.removeChild(k)),
                j.style.display = "none",
                f = 0 === j.getClientRects().length,
                f && (j.style.display = "",
                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                j.childNodes[0].style.borderCollapse = "separate",
                k = j.getElementsByTagName("td"),
                k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                f = 0 === k[0].offsetHeight,
                f && (k[0].style.display = "",
                k[1].style.display = "none",
                f = 0 === k[0].offsetHeight)),
                m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 === g ? g : g + ""
    }
    ) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Oa.test(g) && !Ta.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i
      , Wa = /opacity\s*=\s*([^)]*)/i
      , Xa = /^(none|table(?!-c[ea]).+)/
      , Ya = new RegExp("^(" + T + ")(.*)$","i")
      , Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _a = ["Webkit", "O", "Moz", "ms"]
      , ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1)
          , c = _a.length;
        while (c--)
            if (a = _a[c] + b,
            a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = n._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
            (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ra(a)
          , g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Sa(a, b, d)),
            "normal" === f && b in $a && (f = $a[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }),
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Na.test(a) || (n.cssHooks[a + b].set = db)
    }),
    n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a,b,c,d,e)
    }
    n.Tween = gb,
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
        }
    },
    gb.prototype.init.prototype = gb.prototype,
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = gb.prototype.init,
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }),
        hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            jb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                qb.tweeners[c] = qb.tweeners[c] || [],
                qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        hb = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(ib),
        ib = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"),
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== c.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = f.selected,
        l.enctype = !!d.createElement("form").enctype,
        e.disabled = !0,
        l.optDisabled = !f.disabled,
        b = d.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value
    }();
    var rb = /\r/g
      , sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        n.inArray(n.valHooks.option.get(d), f) > -1)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
                    a.removeAttribute(xb ? c : d)
        }
    }),
    ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b],
            vb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            vb[b] = f),
            e
        }
        : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }),
    xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i
      , Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this),
                    b && n._data(this, "__className__", b),
                    n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location
      , Eb = n.now()
      , Fb = /\?/
      , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }
    ,
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var Hb = /#.*$/
      , Ib = /([?&])_=[^&]*/
      , Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Lb = /^(?:GET|HEAD)$/
      , Mb = /^\/\//
      , Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ob = {}
      , Pb = {}
      , Qb = "*/".concat("*")
      , Rb = Db.href
      , Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}
          , f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a,
                    s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    y(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add,
            w.success = w.done,
            w.error = w.fail,
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
            l.type = c.method || c.type || l.method || l.type,
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
            null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
            Ub(Ob, l, c, w),
            2 === u)
                return w;
            i = n.event && l.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Lb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
            l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1,
                i && o.trigger("ajaxSend", [w, l]),
                2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1,
                    j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2,
                h && a.clearTimeout(h),
                j = void 0,
                g = e || "",
                w.readyState = b > 0 ? 4 : 0,
                k = b >= 200 && 300 > b || 304 === b,
                d && (v = Wb(l, w, d)),
                v = Xb(l, v, w, k),
                k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (n.lastModified[f] = x),
                x = w.getResponseHeader("etag"),
                x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
                s = v.data,
                t = v.error,
                k = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                w.status = b,
                w.statusText = (c || y) + "",
                k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                w.statusCode(r),
                r = void 0,
                i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                q.fireWith(m, [w, y]),
                i && (o.trigger("ajaxComplete", [w, l]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var $b = /%20/g
      , _b = /\[\]$/
      , ac = /\r?\n/g
      , bc = /^(?:submit|button|image|reset|file)$/i
      , cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    }
    : hc;
    var ec = 0
      , fc = {}
      , gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }),
    l.cors = !!gc && "withCredentials"in gc,
    gc = l.ajax = !!gc,
    gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(), h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null),
                    c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h],
                            c = void 0,
                            g.onreadystatechange = n.noop,
                            d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {},
                                f = g.status,
                                "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }
                    ,
                    b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || f(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = []
      , kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            jc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                c = mc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (c = a.offset()),
                c.top += n.css(a[0], "borderTopWidth", !0),
                c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b),
            Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery
      , oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc),
        b && a.jQuery === n && (a.jQuery = nc),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});

/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0,
        a.migrateWarnings.push(c),
        d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c),
        a.migrateTrace && d.trace && d.trace()))
    }
    function e(b, c, e, f) {
        if (Object.defineProperty)
            try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f),
                        e
                    },
                    set: function(a) {
                        d(f),
                        e = a
                    }
                })
            } catch (g) {}
        a._definePropertyBroken = !0,
        b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [],
    b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion),
    a.migrateTrace === c && (a.migrateTrace = !0),
    a.migrateReset = function() {
        f = {},
        a.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
    }).attr("size") && a.attrFn
      , h = a.attr
      , i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
    }
      , j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
    }
      , k = /^(?:input|button)$/i
      , l = /^[238]$/
      , m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
    a.attr = function(b, e, f, i) {
        var j = e.toLowerCase()
          , o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
        b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"),
        !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function(b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            },
            set: function(b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d,
                e in b && (b[e] = !0),
                b.setAttribute(d, d.toLowerCase())),
                d
            }
        },
        n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")),
        h.call(a, b, e, f))
    }
    ,
    a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"),
            b in a ? a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"),
            void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"),
        g[3] && d("$(html) HTML text after last tag is ignored"),
        "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"),
        a.error("JQMIGRATE: Invalid selector string (XSS)")),
        e && e.context && e.context.nodeType && (e = e.context),
        a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments),
        b && b.selector !== c ? (h.selector = b.selector,
        h.context = b.context) : (h.selector = "string" == typeof b ? b : "",
        b && (h.context = b.nodeType ? b : e || document)),
        h)
    }
    ,
    a.fn.init.prototype = a.fn,
    a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
            try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a),
                    d("Attribute selector with '#' must be quoted: " + b[0]),
                    b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
        return r.apply(this, b)
    }
    ;
    var x;
    for (x in r)
        Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ,
    a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    }
    ,
    a.browser || (o = a.uaMatch(navigator.userAgent),
    p = {},
    o.browser && (p[o.browser] = !0,
    p.version = o.version),
    p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0),
    a.browser = p),
    e(a, "browser", a.browser, "jQuery.browser is deprecated"),
    a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode,
    e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
    e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"),
    a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a,c)
        }
        a.extend(!0, b, this),
        b.superclass = this,
        b.fn = b.prototype = this(),
        b.fn.constructor = b,
        b.sub = this.sub,
        b.fn.init = function(d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }
        ,
        b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"),
        b
    }
    ,
    a.fn.size = function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"),
        this.length
    }
    ;
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return y = !0,
            a = d.apply(this, arguments),
            y = !1,
            a
        }
        )
    }),
    a.swap = function(a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b)
            h[g] = a.style[g],
            a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b)
            a.style[g] = h[g];
        return f
    }
    ,
    a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b),
        f = a._data(g, b),
        e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"),
        f)
    }
    ;
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
        c = c || document,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes),
        e)
            for (i = function(a) {
                return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
            }
            ,
            g = 0; null != (h = k[g]); g++)
                a.nodeName(h, "script") && i(h) || (e.appendChild(h),
                "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i),
                k.splice.apply(k, [g + 1, 0].concat(j)),
                g += j.length));
        return k
    }
    );
    var B = a.event.add
      , C = a.event.remove
      , D = a.event.trigger
      , E = a.fn.toggle
      , F = a.fn.live
      , G = a.fn.die
      , H = a.fn.load
      , I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess"
      , J = new RegExp("\\b(?:" + I + ")\\b")
      , K = /(?:^|\s)hover(\.\S+|)\b/
      , L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        b && b.replace(K, "mouseenter$1 mouseleave$1"))
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"),
    a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"),
    a.event.add = function(a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b),
        B.call(this, a, L(b || ""), c, e, f)
    }
    ,
    a.event.remove = function(a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }
    ,
    a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"),
            a.splice(0, 0, c),
            arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a),
            this))
        }
    }),
    a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
            return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments
          , f = b.guid || a.guid++
          , g = 0
          , h = function(c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1),
            c.preventDefault(),
            e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length; )
            e[g++].guid = f;
        return this.click(h)
    }
    ,
    a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"),
        F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e),
        this)
    }
    ,
    a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"),
        G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c),
        this)
    }
    ,
    a.event.trigger = function(a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"),
        D.call(this, a, b, c || document, e)
    }
    ,
    a.each(I.split("|"), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }),
                a._data(this, c, a.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)),
                !1
            }
        }
    }),
    a.event.special.ready = {
        setup: function() {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack
      , N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        M.apply(this, arguments)
    }
    ,
    a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context,
        b.selector = this.selector ? this.selector + " " + a : a,
        b
    }
    ,
    a.Callbacks) {
        var O = a.Deferred
          , P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function(b) {
            var c = O()
              , e = c.promise();
            return c.pipe = e.pipe = function() {
                var b = arguments;
                return d("deferred.pipe() is deprecated"),
                a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }),
                    b = null
                }).promise()
            }
            ,
            c.isResolved = function() {
                return d("deferred.isResolved is deprecated"),
                "resolved" === c.state()
            }
            ,
            c.isRejected = function() {
                return d("deferred.isRejected is deprecated"),
                "rejected" === c.state()
            }
            ,
            b && b.call(c, c),
            c
        }
    }
}(jQuery, window);

/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t, e, i, s) {
    "use strict";
    function n(t) {
        return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")),
        t
    }
    function a(t) {
        this.selector = t,
        this.query = ""
    }
    var o = function(e) {
        var i = t("head");
        i.prepend(t.map(e, function(t) {
            return 0 === i.has("." + t).length ? '<meta class="' + t + '" />' : void 0
        }))
    };
    o(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]),
    t(function() {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var r = function(e, s) {
        if ("string" == typeof e) {
            if (s) {
                var n;
                if (s.jquery) {
                    if (n = s[0],
                    !n)
                        return s
                } else
                    n = s;
                return t(n.querySelectorAll(e))
            }
            return t(i.querySelectorAll(e))
        }
        return t(e, s)
    }
      , l = function(t) {
        var e = [];
        return t || e.push("data"),
        this.namespace.length > 0 && e.push(this.namespace),
        e.push(this.name),
        e.join("-")
    }
      , d = function(t) {
        for (var e = t.split("-"), i = e.length, s = []; i--; )
            0 !== i ? s.push(e[i]) : this.namespace.length > 0 ? s.push(this.namespace, e[i]) : s.push(e[i]);
        return s.reverse().join("-")
    }
      , c = function(e, i) {
        var s = this
          , n = function() {
            var n = r(this)
              , a = !n.data(s.attr_name(!0) + "-init");
            n.data(s.attr_name(!0) + "-init", t.extend({}, s.settings, i || e, s.data_options(n))),
            a && s.events(this)
        };
        return r(this.scope).is("[" + this.attr_name() + "]") ? n.call(this.scope) : r("[" + this.attr_name() + "]", this.scope).each(n),
        "string" == typeof e ? this[e].call(this, i) : void 0
    }
      , h = function(t, e) {
        function i() {
            e(t[0])
        }
        function s() {
            if (this.one("load", i),
            /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var t = this.attr("src")
                  , e = t.match(/\?/) ? "&" : "?";
                e += "random=" + (new Date).getTime(),
                this.attr("src", t + e)
            }
        }
        return t.attr("src") ? void (t[0].complete || 4 === t[0].readyState ? i() : s.call(t)) : void i()
    };
    /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
    e.matchMedia || (e.matchMedia = function() {
        var t = e.styleMedia || e.media;
        if (!t) {
            var s = i.createElement("style")
              , n = i.getElementsByTagName("script")[0]
              , a = null;
            s.type = "text/css",
            s.id = "matchmediajs-test",
            n.parentNode.insertBefore(s, n),
            a = "getComputedStyle"in e && e.getComputedStyle(s, null) || s.currentStyle,
            t = {
                matchMedium: function(t) {
                    var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return s.styleSheet ? s.styleSheet.cssText = e : s.textContent = e,
                    "1px" === a.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()),
    /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
    function(t) {
        function i() {
            s && (o(i),
            l && t.fx.tick())
        }
        for (var s, n = 0, a = ["webkit", "moz"], o = e.requestAnimationFrame, r = e.cancelAnimationFrame, l = "undefined" != typeof t.fx; n < a.length && !o; n++)
            o = e[a[n] + "RequestAnimationFrame"],
            r = r || e[a[n] + "CancelAnimationFrame"] || e[a[n] + "CancelRequestAnimationFrame"];
        o ? (e.requestAnimationFrame = o,
        e.cancelAnimationFrame = r,
        l && (t.fx.timer = function(e) {
            e() && t.timers.push(e) && !s && (s = !0,
            i())
        }
        ,
        t.fx.stop = function() {
            s = !1
        }
        )) : (e.requestAnimationFrame = function(t) {
            var i = (new Date).getTime()
              , s = Math.max(0, 16 - (i - n))
              , a = e.setTimeout(function() {
                t(i + s)
            }, s);
            return n = i + s,
            a
        }
        ,
        e.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        }
        )
    }(t),
    a.prototype.toString = function() {
        return this.query || (this.query = r(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""))
    }
    ,
    e.Foundation = {
        name: "Foundation",
        version: "5.5.3",
        media_queries: {
            small: new a(".foundation-mq-small"),
            "small-only": new a(".foundation-mq-small-only"),
            medium: new a(".foundation-mq-medium"),
            "medium-only": new a(".foundation-mq-medium-only"),
            large: new a(".foundation-mq-large"),
            "large-only": new a(".foundation-mq-large-only"),
            xlarge: new a(".foundation-mq-xlarge"),
            "xlarge-only": new a(".foundation-mq-xlarge-only"),
            xxlarge: new a(".foundation-mq-xxlarge")
        },
        stylesheet: t("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: s
        },
        init: function(t, i, s, n, a) {
            var o = [t, s, n, a]
              , l = [];
            if (this.rtl = /rtl/i.test(r("html").attr("dir")),
            this.scope = t || this.scope,
            this.set_namespace(),
            i && "string" == typeof i && !/reflow/i.test(i))
                this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, o));
            else
                for (var d in this.libs)
                    l.push(this.init_lib(d, i));
            return r(e).load(function() {
                r(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            }),
            t
        },
        init_lib: function(e, i) {
            return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]),
            i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]),
            this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i),
            this.libs[e].init.apply(this.libs[e], i))) : function() {}
        },
        patch: function(t) {
            t.scope = this.scope,
            t.namespace = this.global.namespace,
            t.rtl = this.rtl,
            t.data_options = this.utils.data_options,
            t.attr_name = l,
            t.add_namespace = d,
            t.bindings = c,
            t.S = this.utils.S
        },
        inherit: function(t, e) {
            for (var i = e.split(" "), s = i.length; s--; )
                this.utils.hasOwnProperty(i[s]) && (t[i[s]] = this.utils[i[s]])
        },
        set_namespace: function() {
            var e = this.global.namespace === s ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = e === s || /false/i.test(e) ? "" : e
        },
        libs: {},
        utils: {
            S: r,
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var s = this
                      , n = arguments;
                    null == i && (i = setTimeout(function() {
                        t.apply(s, n),
                        i = null
                    }, e))
                }
            },
            debounce: function(t, e, i) {
                var s, n;
                return function() {
                    var a = this
                      , o = arguments
                      , r = function() {
                        s = null,
                        i || (n = t.apply(a, o))
                    }
                      , l = i && !s;
                    return clearTimeout(s),
                    s = setTimeout(r, e),
                    l && (n = t.apply(a, o)),
                    n
                }
            },
            data_options: function(e, i) {
                function s(t) {
                    return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                }
                function n(e) {
                    return "string" == typeof e ? t.trim(e) : e
                }
                i = i || "options";
                var a, o, r, l = {}, d = function(t) {
                    var e = Foundation.global.namespace;
                    return t.data(e.length > 0 ? e + "-" + i : i)
                }, c = d(e);
                if ("object" == typeof c)
                    return c;
                for (r = (c || ":").split(";"),
                a = r.length; a--; )
                    o = r[a].split(":"),
                    o = [o[0], o.slice(1).join(":")],
                    /true/i.test(o[1]) && (o[1] = !0),
                    /false/i.test(o[1]) && (o[1] = !1),
                    s(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])),
                    2 === o.length && o[0].length > 0 && (l[n(o[0])] = n(o[1]));
                return l
            },
            register_media: function(e, i) {
                Foundation.media_queries[e] === s && (t("head").append('<meta class="' + i + '"/>'),
                Foundation.media_queries[e] = n(t("." + i).css("font-family")))
            },
            add_custom_rule: function(t, e) {
                if (e === s && Foundation.stylesheet)
                    Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                else {
                    var i = Foundation.media_queries[e];
                    i !== s && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }", Foundation.stylesheet.cssRules.length)
                }
            },
            image_loaded: function(t, e) {
                function i(t) {
                    for (var e = t.length, i = e - 1; i >= 0; i--)
                        if (t.attr("height") === s)
                            return !1;
                    return !0
                }
                var n = this
                  , a = t.length;
                (0 === a || i(t)) && e(t),
                t.each(function() {
                    h(n.S(this), function() {
                        a -= 1,
                        0 === a && e(t)
                    })
                })
            },
            random_str: function() {
                return this.fidx || (this.fidx = 0),
                this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"),
                this.prefix + (this.fidx++).toString(36)
            },
            match: function(t) {
                return e.matchMedia(t).matches
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small)
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium)
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large)
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge)
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge)
            },
            is_small_only: function() {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    },
    t.fn.foundation = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [this].concat(t)),
            this
        })
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.3",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: 2,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"),
            this.bindings(e, i),
            this.reflow()
        },
        events: function() {
            var i = this;
            t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                i.cache.active || (e.preventDefault(),
                i.set_active_slider(t(e.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(s) {
                if (i.cache.active)
                    if (s.preventDefault(),
                    t.data(i.cache.active[0], "settings").vertical) {
                        var n = 0;
                        s.pageY || (n = e.scrollY),
                        i.calculate_position(i.cache.active, i.get_cursor_position(s, "y") + n)
                    } else
                        i.calculate_position(i.cache.active, i.get_cursor_position(s, "x"))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function(s) {
                if (!i.cache.active) {
                    var n = "slider" === t(s.target).attr("role") ? t(s.target) : t(s.target).closest(".range-slider").find("[role='slider']");
                    if (n.length && !n.parent().hasClass("disabled") && !n.parent().attr("disabled"))
                        if (i.set_active_slider(n),
                        t.data(i.cache.active[0], "settings").vertical) {
                            var a = 0;
                            s.pageY || (a = e.scrollY),
                            i.calculate_position(i.cache.active, i.get_cursor_position(s, "y") + a)
                        } else
                            i.calculate_position(i.cache.active, i.get_cursor_position(s, "x"))
                }
                i.remove_active_slider()
            }).on("change.fndtn.slider", function() {
                i.settings.on_change()
            }),
            i.S(e).on("resize.fndtn.slider", i.throttle(function() {
                i.reflow()
            }, 300)),
            this.S("[" + this.attr_name() + "]").each(function() {
                var e = t(this)
                  , s = e.children(".range-slider-handle")[0]
                  , n = i.initialize_settings(s);
                "" != n.display_selector && t(n.display_selector).each(function() {
                    t(this).attr("value") && t(this).off("change").on("change", function() {
                        e.foundation("slider", "set_value", t(this).val())
                    })
                })
            })
        },
        get_cursor_position: function(t, e) {
            var i, s = "page" + e.toUpperCase(), n = "client" + e.toUpperCase();
            return "undefined" != typeof t[s] ? i = t[s] : "undefined" != typeof t.originalEvent[n] ? i = t.originalEvent[n] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0][n] ? i = t.originalEvent.touches[0][n] : t.currentPoint && "undefined" != typeof t.currentPoint[e] && (i = t.currentPoint[e]),
            i
        },
        set_active_slider: function(t) {
            this.cache.active = t
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(e, i) {
            var s = this
              , n = t.data(e[0], "settings")
              , a = (t.data(e[0], "handle_l"),
            t.data(e[0], "handle_o"),
            t.data(e[0], "bar_l"))
              , o = t.data(e[0], "bar_o");
            requestAnimationFrame(function() {
                var t;
                t = Foundation.rtl && !n.vertical ? s.limit_to((o + a - i) / a, 0, 1) : s.limit_to((i - o) / a, 0, 1),
                t = n.vertical ? 1 - t : t;
                var r = s.normalized_value(t, n.start, n.end, n.step, n.precision);
                s.set_ui(e, r)
            })
        },
        set_ui: function(e, i) {
            var s = t.data(e[0], "settings")
              , n = t.data(e[0], "handle_l")
              , a = t.data(e[0], "bar_l")
              , o = this.normalized_percentage(i, s.start, s.end)
              , r = o * (a - n) - 1
              , l = 100 * o
              , d = e.parent()
              , c = e.parent().children("input[type=hidden]");
            Foundation.rtl && !s.vertical && (r = -r),
            r = s.vertical ? -r + a - n + 1 : r,
            this.set_translate(e, r, s.vertical),
            s.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"),
            d.attr(this.attr_name(), i).trigger("change.fndtn.slider"),
            c.val(i),
            s.trigger_input_change && c.trigger("change.fndtn.slider"),
            e[0].hasAttribute("aria-valuemin") || e.attr({
                "aria-valuemin": s.start,
                "aria-valuemax": s.end
            }),
            e.attr("aria-valuenow", i),
            "" != s.display_selector && t(s.display_selector).each(function() {
                this.hasAttribute("value") ? t(this).val(i) : t(this).text(i)
            })
        },
        normalized_percentage: function(t, e, i) {
            return Math.min(1, (t - e) / (i - e))
        },
        normalized_value: function(t, e, i, s, n) {
            var a = i - e
              , o = t * a
              , r = (o - o % s) / s
              , l = o % s
              , d = l >= .5 * s ? s : 0;
            return (r * s + d + e).toFixed(n)
        },
        set_translate: function(e, i, s) {
            s ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
        },
        limit_to: function(t, e, i) {
            return Math.min(Math.max(t, e), i)
        },
        initialize_settings: function(e) {
            var i, s = t.extend({}, this.settings, this.data_options(t(e).parent()));
            return null === s.precision && (i = ("" + s.step).match(/\.([\d]*)/),
            s.precision = i && i[1] ? i[1].length : 0),
            s.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top),
            t.data(e, "bar_l", t(e).parent().outerHeight()),
            t.data(e, "handle_o", t(e).offset().top),
            t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left),
            t.data(e, "bar_l", t(e).parent().outerWidth()),
            t.data(e, "handle_o", t(e).offset().left),
            t.data(e, "handle_l", t(e).outerWidth())),
            t.data(e, "bar", t(e).parent()),
            t.data(e, "settings", s)
        },
        set_initial_position: function(e) {
            var i = t.data(e.children(".range-slider-handle")[0], "settings")
              , s = "number" != typeof i.initial || isNaN(i.initial) ? Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start : i.initial
              , n = e.children(".range-slider-handle");
            this.set_ui(n, s)
        },
        set_value: function(e) {
            var i = this;
            t("[" + i.attr_name() + "]", this.scope).each(function() {
                t(this).attr(i.attr_name(), e)
            }),
            t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e),
            i.reflow()
        },
        reflow: function() {
            var e = this;
            e.S("[" + this.attr_name() + "]").each(function() {
                var i = t(this).children(".range-slider-handle")[0]
                  , s = t(this).attr(e.attr_name());
                e.initialize_settings(i),
                s ? e.set_ui(t(i), parseFloat(s)) : e.set_initial_position(t(this))
            })
        }
    }
}(jQuery, window, window.document),
function(t, e, i, s) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.5.3",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(e, i, s) {
            Foundation.inherit(this, "throttle random_str"),
            this.settings = this.settings || t.extend({}, this.defaults, s || i),
            this.bindings(i, s)
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate),
            this.hide(),
            this.show(),
            this.startTimer()) : (this.hide(),
            this.show())
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate),
            this.hide(),
            this.show(null, !0),
            this.startTimer()) : (this.hide(),
            this.show(null, !0)))
        },
        events: function() {
            var i = this;
            t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(t) {
                t.preventDefault(),
                this.go_next()
            }
            .bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(t) {
                t.preventDefault(),
                this.go_prev()
            }
            .bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(t) {
                t.preventDefault(),
                this.end(this.settings.abort_on_close)
            }
            .bind(this)).on("keyup.fndtn.joyride", function(t) {
                if (this.settings.keyboard && this.settings.riding)
                    switch (t.which) {
                    case 39:
                        t.preventDefault(),
                        this.go_next();
                        break;
                    case 37:
                        t.preventDefault(),
                        this.go_prev();
                        break;
                    case 27:
                        t.preventDefault(),
                        this.end(this.settings.abort_on_close)
                    }
            }
            .bind(this)),
            t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function() {
                if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip && i.settings.riding) {
                    if (i.settings.exposed.length > 0) {
                        var e = t(i.settings.exposed);
                        e.each(function() {
                            var e = t(this);
                            i.un_expose(e),
                            i.expose(e)
                        })
                    }
                    i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var e = this
              , i = t("[" + this.attr_name() + "]", this.scope)
              , s = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"]
              , n = s.length;
            !i.length > 0 || (this.settings.init || this.events(),
            this.settings = i.data(this.attr_name(!0) + "-init"),
            this.settings.$content_el = i,
            this.settings.$body = t(this.settings.tip_container),
            this.settings.body_offset = t(this.settings.tip_container).position(),
            this.settings.$tip_content = this.settings.$content_el.find("> li"),
            this.settings.paused = !1,
            this.settings.attempts = 0,
            this.settings.riding = !0,
            "function" != typeof t.cookie && (this.settings.cookie_monster = !1),
            (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(i) {
                var a = t(this);
                this.settings = t.extend({}, e.defaults, e.data_options(a));
                for (var o = n; o--; )
                    e.settings[s[o]] = parseInt(e.settings[s[o]], 10);
                e.create({
                    $li: a,
                    index: i
                })
            }),
            !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"),
            this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(),
            this.show()
        },
        tip_template: function(e) {
            var i, s;
            return e.tip_class = e.tip_class || "",
            i = t(this.settings.template.tip).addClass(e.tip_class),
            s = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index),
            i.append(t(this.settings.template.wrapper)),
            i.first().attr(this.add_namespace("data-index"), e.index),
            t(".joyride-content-wrapper", i).append(s),
            i[0]
        },
        timer_instance: function(e) {
            var i;
            return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(e) {
            return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next",
            e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "",
            e
        },
        prev_button_text: function(e, i) {
            return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous",
            e = 0 == i ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "",
            e
        },
        create: function(e) {
            this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
            var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text"))
              , s = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text"))
              , n = e.$li.attr("class")
              , a = t(this.tip_template({
                tip_class: n,
                index: e.index,
                button_text: i,
                prev_button_text: s,
                li: e.$li
            }));
            t(this.settings.tip_container).append(a)
        },
        show: function(e, i) {
            var n = null;
            if (this.settings.$li === s || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after))
                if (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, i),
                this.settings.attempts = 0,
                this.settings.$li.length && this.settings.$target.length > 0) {
                    if (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip),
                    this.settings.modal && this.show_modal()),
                    this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip),
                    this.settings.modal && this.settings.expose && this.expose(),
                    this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)),
                    this.settings.timer = parseInt(this.settings.timer, 10),
                    this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],
                    !/body/i.test(this.settings.$target.selector) && !this.settings.expose) {
                        var a = t(".joyride-modal-bg");
                        /pop/i.test(this.settings.tipAnimation) ? a.hide() : a.fadeOut(this.settings.tipAnimationFadeSpeed),
                        this.scroll_to()
                    }
                    this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
                    n = this.settings.$next_tip.find(".joyride-timer-indicator"),
                    /pop/i.test(this.settings.tip_animation) ? (n.width(0),
                    this.settings.timer > 0 ? (this.settings.$next_tip.show(),
                    setTimeout(function() {
                        n.animate({
                            width: n.parent().width()
                        }, this.settings.timer, "linear")
                    }
                    .bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (n.width(0),
                    this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),
                    setTimeout(function() {
                        n.animate({
                            width: n.parent().width()
                        }, this.settings.timer, "linear")
                    }
                    .bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),
                    this.settings.$current_tip = this.settings.$next_tip
                } else
                    this.settings.$li && this.settings.$target.length < 1 ? this.show(e, i) : this.end();
            else
                this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(),
            this.settings.modal || t(".joyride-modal-bg").hide(),
            this.settings.$current_tip.css("visibility", "hidden"),
            setTimeout(t.proxy(function() {
                this.hide(),
                this.css("visibility", "visible")
            }, this.settings.$current_tip), 0),
            this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(t, e) {
            t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset),
            this.set_next_tip(),
            this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(),
            this.set_next_tip()),
            this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()),
            this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var e = this.settings.$li.attr(this.add_namespace("data-class"))
              , s = this.settings.$li.attr(this.add_namespace("data-id"))
              , n = function() {
                return s ? t(i.getElementById(s)) : e ? t("." + e).first() : t("body")
            };
            this.settings.$target = n()
        },
        scroll_to: function() {
            var i, s;
            i = t(e).height() / 2,
            s = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()),
            0 != s && t("html, body").stop().animate({
                scrollTop: s
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function() {
            this.hide(),
            this.settings.$li = s,
            this.show("init")
        },
        pos_default: function(t) {
            var e = this.settings.$next_tip.find(".joyride-nub")
              , i = Math.ceil(e.outerWidth() / 2)
              , s = Math.ceil(e.outerHeight() / 2)
              , n = t || !1;
            if (n && (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
            /body/i.test(this.settings.$target.selector))
                this.settings.$li.length && this.pos_modal(e);
            else {
                var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0
                  , o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                } : {
                    top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight() + a,
                    left: this.settings.$target.offset().left + o
                }),
                this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s + a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s + a,
                    left: this.settings.$target.offset().left + o
                }),
                this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + o
                }),
                this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + o
                }),
                this.nub_position(e, this.settings.tip_settings.nub_position, "right")),
                !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),
                this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts],
                this.settings.attempts++,
                this.pos_default())
            }
            n && (this.settings.$next_tip.hide(),
            this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(e) {
            var i = this.settings.$next_tip.outerHeight()
              , s = (this.settings.$next_tip.offset(),
            this.settings.$target.outerHeight())
              , n = t(".joyride-nub", this.settings.$next_tip)
              , a = Math.ceil(n.outerHeight() / 2)
              , o = e || !1;
            n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),
            o && (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
            /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - i - a
            }),
            n.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + s + a
            }),
            n.addClass("top")),
            o && (this.settings.$next_tip.hide(),
            this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(t) {
            this.center(),
            t.hide(),
            this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var e = t(".joyride-modal-bg");
                if (e.length < 1) {
                    var e = t(this.settings.template.modal);
                    e.appendTo("body")
                }
                /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var i, s, n, a, o, r = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0]instanceof t)
                n = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return !1;
                n = this.settings.$target
            }
            return n.length < 1 ? (e.console && console.error("element not valid", n),
            !1) : (i = t(this.settings.template.expose),
            this.settings.$body.append(i),
            i.css({
                top: n.offset().top,
                left: n.offset().left,
                width: n.outerWidth(!0),
                height: n.outerHeight(!0)
            }),
            s = t(this.settings.template.expose_cover),
            a = {
                zIndex: n.css("z-index"),
                position: n.css("position")
            },
            o = null == n.attr("class") ? "" : n.attr("class"),
            n.css("z-index", parseInt(i.css("z-index")) + 1),
            "static" == a.position && n.css("position", "relative"),
            n.data("expose-css", a),
            n.data("orig-class", o),
            n.attr("class", o + " " + this.settings.expose_add_class),
            s.css({
                top: n.offset().top,
                left: n.offset().left,
                width: n.outerWidth(!0),
                height: n.outerHeight(!0)
            }),
            this.settings.modal && this.show_modal(),
            this.settings.$body.append(s),
            i.addClass(r),
            s.addClass(r),
            n.data("expose", r),
            this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, n),
            void this.add_exposed(n))
        },
        un_expose: function() {
            var i, s, n, a, o, r = !1;
            if (arguments.length > 0 && arguments[0]instanceof t)
                s = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return !1;
                s = this.settings.$target
            }
            return s.length < 1 ? (e.console && console.error("element not valid", s),
            !1) : (i = s.data("expose"),
            n = t("." + i),
            arguments.length > 1 && (r = arguments[1]),
            r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : n.remove(),
            a = s.data("expose-css"),
            "auto" == a.zIndex ? s.css("z-index", "") : s.css("z-index", a.zIndex),
            a.position != s.css("position") && ("static" == a.position ? s.css("position", "") : s.css("position", a.position)),
            o = s.data("orig-class"),
            s.attr("class", o),
            s.removeData("orig-classes"),
            s.removeData("expose"),
            s.removeData("expose-z-index"),
            void this.remove_exposed(s))
        },
        add_exposed: function(e) {
            this.settings.exposed = this.settings.exposed || [],
            e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
        },
        remove_exposed: function(e) {
            var i, s;
            for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e),
            this.settings.exposed = this.settings.exposed || [],
            s = this.settings.exposed.length; s--; )
                if (this.settings.exposed[s] == i)
                    return void this.settings.exposed.splice(s, 1)
        },
        center: function() {
            var i = t(e);
            return this.settings.$next_tip.css({
                top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
            }),
            !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(i) {
            if (0 === i.length)
                return [!1, !1, !1, !1];
            var s = t(e)
              , n = s.height() / 2
              , a = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight())
              , o = s.width() + s.scrollLeft()
              , r = s.height() + a
              , l = s.height() + s.scrollTop()
              , d = s.scrollTop();
            return d > a && (d = 0 > a ? 0 : a),
            r > l && (l = r),
            [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), s.scrollLeft() > i.offset().left]
        },
        visible: function(t) {
            for (var e = t.length; e--; )
                if (t[e])
                    return !1;
            return !0
        },
        nub_position: function(t, e, i) {
            t.addClass("auto" === e ? i : e)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(),
                this.show(),
                this.startTimer()
            }
            .bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(e) {
            this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }),
            this.settings.timer > 0 && clearTimeout(this.settings.automate),
            this.settings.modal && this.settings.expose && this.un_expose(),
            t(this.scope).off("keyup.joyride"),
            this.settings.$next_tip.data("closed", !0),
            this.settings.riding = !1,
            t(".joyride-modal-bg").hide(),
            this.settings.$current_tip.hide(),
            ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip),
            this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)),
            t(".joyride-tip-guide").remove()
        },
        off: function() {
            t(this.scope).off(".joyride"),
            t(e).off(".joyride"),
            t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),
            t(".joyride-tip-guide, .joyride-modal-bg").remove(),
            clearTimeout(this.settings.automate)
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.3",
        settings: {
            use_tallest: !0,
            before_height_change: t.noop,
            after_height_change: t.noop,
            equalize_on_stack: !1,
            act_on_hidden_el: !1
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "image_loaded"),
            this.bindings(e, i),
            this.reflow()
        },
        events: function() {
            this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow()
            }
            .bind(this))
        },
        equalize: function(e) {
            var i, s, n = !1, a = e.data("equalizer"), o = e.data(this.attr_name(!0) + "-init") || this.settings;
            if (i = e.find(o.act_on_hidden_el ? a ? "[" + this.attr_name() + '-watch="' + a + '"]' : "[" + this.attr_name() + "-watch]" : a ? "[" + this.attr_name() + '-watch="' + a + '"]:visible' : "[" + this.attr_name() + "-watch]:visible"),
            0 !== i.length && (o.before_height_change(),
            e.trigger("before-height-change.fndth.equalizer"),
            i.height("inherit"),
            o.equalize_on_stack !== !1 || (s = i.first().offset().top,
            i.each(function() {
                return t(this).offset().top !== s ? (n = !0,
                !1) : void 0
            }),
            !n))) {
                var r = i.map(function() {
                    return t(this).outerHeight(!1)
                }).get();
                if (o.use_tallest) {
                    var l = Math.max.apply(null, r);
                    i.css("height", l)
                } else {
                    var d = Math.min.apply(null, r);
                    i.css("height", d)
                }
                o.after_height_change(),
                e.trigger("after-height-change.fndtn.equalizer")
            }
        },
        reflow: function() {
            var e = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var i = t(this)
                  , s = i.data("equalizer-mq")
                  , n = !0;
                s && (s = "is_" + s.replace(/-/g, "_"),
                Foundation.utils.hasOwnProperty(s) && (n = !1)),
                e.image_loaded(e.S("img", this), function() {
                    if (n || Foundation.utils[s]())
                        e.equalize(i);
                    else {
                        var t = i.find("[" + e.attr_name() + "-watch]:visible");
                        t.css("height", "auto")
                    }
                })
            })
        }
    }
}(jQuery, window, window.document),
function(t, e, i) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.3",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(e, i, s) {
            Foundation.inherit(this, "throttle"),
            t.extend(!0, this.settings, i, s),
            this.bindings(i, s)
        },
        events: function() {
            var s = this
              , n = s.S;
            n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(e) {
                var i = n(this).data(s.attr_name(!0) + "-init") || s.settings;
                (!i.is_hover || Modernizr.touch) && (e.preventDefault(),
                n(this).parent("[data-reveal-id]").length && e.stopPropagation(),
                s.toggle(t(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                var e, i, a = n(this);
                clearTimeout(s.timeout),
                a.data(s.data_attr()) ? (e = n("#" + a.data(s.data_attr())),
                i = a) : (e = a,
                i = n("[" + s.attr_name() + '="' + e.attr("id") + '"]'));
                var o = i.data(s.attr_name(!0) + "-init") || s.settings;
                n(t.currentTarget).data(s.data_attr()) && o.is_hover && s.closeall.call(s),
                o.is_hover && s.open.apply(s, [e, i])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var t, e = n(this);
                if (e.data(s.data_attr()))
                    t = e.data(s.data_attr(!0) + "-init") || s.settings;
                else
                    var i = n("[" + s.attr_name() + '="' + n(this).attr("id") + '"]')
                      , t = i.data(s.attr_name(!0) + "-init") || s.settings;
                s.timeout = setTimeout(function() {
                    e.data(s.data_attr()) ? t.is_hover && s.close.call(s, n("#" + e.data(s.data_attr()))) : t.is_hover && s.close.call(s, e)
                }
                .bind(this), t.hover_timeout)
            }).on("click.fndtn.dropdown", function(e) {
                var a = n(e.target).closest("[" + s.attr_name() + "-content]")
                  , o = a.find("a");
                return o.length > 0 && "false" !== a.attr("aria-autoclose") && s.close.call(s, n("[" + s.attr_name() + "-content]")),
                e.target !== i && !t.contains(i.documentElement, e.target) || n(e.target).closest("[" + s.attr_name() + "]").length > 0 ? void 0 : !n(e.target).data("revealId") && a.length > 0 && (n(e.target).is("[" + s.attr_name() + "-content]") || t.contains(a.first()[0], e.target)) ? void e.stopPropagation() : void s.close.call(s, n("[" + s.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + s.attr_name() + "-content]", function() {
                s.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + s.attr_name() + "-content]", function() {
                s.settings.closed.call(this)
            }),
            n(e).off(".dropdown").on("resize.fndtn.dropdown", s.throttle(function() {
                s.resize.call(s)
            }, 50)),
            this.resize()
        },
        close: function(e) {
            var i = this;
            e.each(function(s) {
                var n = t("[" + i.attr_name() + "=" + e[s].id + "]") || t("aria-controls=" + e[s].id + "]");
                n.attr("aria-expanded", "false"),
                i.S(this).hasClass(i.settings.active_class) && (i.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(i.settings.active_class).prev("[" + i.attr_name() + "]").removeClass(i.settings.active_class).removeData("target"),
                i.S(this).trigger("closed.fndtn.dropdown", [e]))
            }),
            e.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function() {
            var e = this;
            t.each(e.S(".f-open-" + this.attr_name(!0)), function() {
                e.close.call(e, e.S(this))
            })
        },
        open: function(t, e) {
            this.css(t.addClass(this.settings.active_class), e),
            t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class),
            t.data("target", e.get(0)).trigger("opened.fndtn.dropdown", [t, e]),
            t.attr("aria-hidden", "false"),
            e.attr("aria-expanded", "true"),
            t.focus(),
            t.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(t) {
            if (!t.hasClass(this.settings.disabled_class)) {
                var e = this.S("#" + t.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)),
                e.hasClass(this.settings.active_class) ? (this.close.call(this, e),
                e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
            }
        },
        resize: function() {
            var e = this.S("[" + this.attr_name() + "-content].open")
              , i = t(e.data("target"));
            e.length && i.length && this.css(e, i)
        },
        css: function(t, e) {
            var i = Math.max((e.width() - t.width()) / 2, 8)
              , s = e.data(this.attr_name(!0) + "-init") || this.settings
              , n = t.parent().css("overflow-y") || t.parent().css("overflow");
            if (this.clear_idx(),
            this.small()) {
                var a = this.dirs.bottom.call(t, e, s);
                t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: a.top
                }),
                t.css(Foundation.rtl ? "right" : "left", i)
            } else if ("visible" !== n) {
                var o = e[0].offsetTop + e[0].offsetHeight;
                t.attr("style", "").css({
                    position: "absolute",
                    top: o
                }),
                t.css(Foundation.rtl ? "right" : "left", i)
            } else
                this.style(t, e, s);
            return t
        },
        style: function(e, i, s) {
            var n = t.extend({
                position: "absolute"
            }, this.dirs[s.align].call(e, i, s));
            e.attr("style", "").css(n)
        },
        dirs: {
            _base: function(t, s) {
                var n = this.offsetParent()
                  , a = n.offset()
                  , o = t.offset();
                o.top -= a.top,
                o.left -= a.left,
                o.missRight = !1,
                o.missTop = !1,
                o.missLeft = !1,
                o.leftRightFlag = !1;
                var r, l = e.innerWidth;
                r = i.getElementsByClassName("row")[0] ? i.getElementsByClassName("row")[0].clientWidth : l;
                var d = (l - r) / 2
                  , c = r;
                if (!this.hasClass("mega") && !s.ignore_repositioning) {
                    var h = this.outerWidth()
                      , u = t.offset().left;
                    t.offset().top <= this.outerHeight() && (o.missTop = !0,
                    c = l - d,
                    o.leftRightFlag = !0),
                    u + h > u + d && u - d > h && (o.missRight = !0,
                    o.missLeft = !1),
                    0 >= u - h && (o.missLeft = !0,
                    o.missRight = !1)
                }
                return o
            },
            top: function(t, e) {
                var i = Foundation.libs.dropdown
                  , s = i.dirs._base.call(this, t, e);
                return this.addClass("drop-top"),
                1 == s.missTop && (s.top = s.top + t.outerHeight() + this.outerHeight(),
                this.removeClass("drop-top")),
                1 == s.missRight && (s.left = s.left - this.outerWidth() + t.outerWidth()),
                (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, s),
                Foundation.rtl ? {
                    left: s.left - this.outerWidth() + t.outerWidth(),
                    top: s.top - this.outerHeight()
                } : {
                    left: s.left,
                    top: s.top - this.outerHeight()
                }
            },
            bottom: function(t, e) {
                var i = Foundation.libs.dropdown
                  , s = i.dirs._base.call(this, t, e);
                return 1 == s.missRight && (s.left = s.left - this.outerWidth() + t.outerWidth()),
                (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, s),
                i.rtl ? {
                    left: s.left - this.outerWidth() + t.outerWidth(),
                    top: s.top + t.outerHeight()
                } : {
                    left: s.left,
                    top: s.top + t.outerHeight()
                }
            },
            left: function(t, e) {
                var i = Foundation.libs.dropdown.dirs._base.call(this, t, e);
                return this.addClass("drop-left"),
                1 == i.missLeft && (i.left = i.left + this.outerWidth(),
                i.top = i.top + t.outerHeight(),
                this.removeClass("drop-left")),
                {
                    left: i.left - this.outerWidth(),
                    top: i.top
                }
            },
            right: function(t, e) {
                var i = Foundation.libs.dropdown.dirs._base.call(this, t, e);
                this.addClass("drop-right"),
                1 == i.missRight ? (i.left = i.left - this.outerWidth(),
                i.top = i.top + t.outerHeight(),
                this.removeClass("drop-right")) : i.triggeredRight = !0;
                var s = Foundation.libs.dropdown;
                return (t.outerWidth() < this.outerWidth() || s.small() || this.hasClass(e.mega_menu)) && s.adjust_pip(this, t, e, i),
                {
                    left: i.left + t.outerWidth(),
                    top: i.top
                }
            }
        },
        adjust_pip: function(t, e, i, s) {
            var n = Foundation.stylesheet
              , a = 8;
            t.hasClass(i.mega_class) ? a = s.left + e.outerWidth() / 2 - 8 : this.small() && (a += s.left - 8),
            this.rule_idx = n.cssRules.length;
            var o = ".f-dropdown.open:before"
              , r = ".f-dropdown.open:after"
              , l = "left: " + a + "px;"
              , d = "left: " + (a - 1) + "px;";
            1 == s.missRight && (a = t.outerWidth() - 23,
            o = ".f-dropdown.open:before",
            r = ".f-dropdown.open:after",
            l = "left: " + a + "px;",
            d = "left: " + (a - 1) + "px;"),
            1 == s.triggeredRight && (o = ".f-dropdown.open:before",
            r = ".f-dropdown.open:after",
            l = "left:-12px;",
            d = "left:-14px;"),
            n.insertRule ? (n.insertRule([o, "{", l, "}"].join(" "), this.rule_idx),
            n.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1)) : (n.addRule(o, l, this.rule_idx),
            n.addRule(r, d, this.rule_idx + 1))
        },
        clear_idx: function() {
            var t = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx),
            t.deleteRule(this.rule_idx),
            delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"),
            this.S("html, body").off(".fndtn.dropdown"),
            this.S(e).off(".fndtn.dropdown"),
            this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i, s) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.3",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(t, e, i) {
            var s = this;
            Foundation.inherit(this, "throttle image_loaded"),
            this.bindings(e, i),
            s.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(s.S("li", this.scope)) : s.S("[" + this.attr_name() + "]", this.scope).each(function() {
                s.assemble(s.S("li", this))
            })
        },
        events: function(s) {
            var n = this
              , a = n.S
              , o = t(".scroll-container");
            o.length > 0 && (this.scope = o),
            a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(t, e, i) {
                var e = e || a(this)
                  , i = i || e
                  , s = e.next("li")
                  , o = e.closest("[" + n.attr_name() + "]").data(n.attr_name(!0) + "-init")
                  , r = a(t.target);
                t.preventDefault(),
                o || (n.init(),
                o = e.closest("[" + n.attr_name() + "]").data(n.attr_name(!0) + "-init")),
                i.hasClass("visible") && e[0] === i[0] && s.length > 0 && n.is_open(e) && (i = s,
                r = a("img", i)),
                n.open(r, e, i),
                n.update_paddles(i)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(t) {
                n.nav(t, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(t) {
                n.nav(t, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(t) {
                Foundation.libs.clearing.close(t, this)
            }),
            t(i).on("keydown.fndtn.clearing", function(t) {
                n.keydown(t)
            }),
            a(e).off(".clearing").on("resize.fndtn.clearing", function() {
                n.resize()
            }),
            this.swipe_events(s)
        },
        swipe_events: function() {
            var t = this
              , e = t.S;
            e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                t.touches || (t = t.originalEvent);
                var i = {
                    start_page_x: t.touches[0].pageX,
                    start_page_y: t.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: s
                };
                e(this).data("swipe-transition", i),
                t.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(i) {
                if (i.touches || (i = i.originalEvent),
                !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                    var s = e(this).data("swipe-transition");
                    if ("undefined" == typeof s && (s = {}),
                    s.delta_x = i.touches[0].pageX - s.start_page_x,
                    Foundation.rtl && (s.delta_x = -s.delta_x),
                    "undefined" == typeof s.is_scrolling && (s.is_scrolling = !!(s.is_scrolling || Math.abs(s.delta_x) < Math.abs(i.touches[0].pageY - s.start_page_y))),
                    !s.is_scrolling && !s.active) {
                        i.preventDefault();
                        var n = s.delta_x < 0 ? "next" : "prev";
                        s.active = !0,
                        t.nav(i, n)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                e(this).data("swipe-transition", {}),
                t.stopPropagation()
            })
        },
        assemble: function(e) {
            var i = e.parent();
            if (!i.parent().hasClass("carousel")) {
                i.after('<div id="foundationClearingHolder"></div>');
                var s = i.detach()
                  , n = "";
                if (null != s[0]) {
                    n = s[0].outerHTML;
                    var a = this.S("#foundationClearingHolder")
                      , o = i.data(this.attr_name(!0) + "-init")
                      , r = {
                        grid: '<div class="carousel">' + n + "</div>",
                        viewing: o.templates.viewing
                    }
                      , l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>"
                      , d = this.settings.touch_label;
                    Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(d).end()),
                    a.after(l).remove()
                }
            }
        },
        open: function(e, s, n) {
            function a() {
                setTimeout(function() {
                    this.image_loaded(u, function() {
                        1 !== u.outerWidth() || p ? o.call(this, u) : a.call(this)
                    }
                    .bind(this))
                }
                .bind(this), 100)
            }
            function o(e) {
                var i = t(e);
                i.css("visibility", "visible"),
                i.trigger("imageVisible"),
                l.css("overflow", "hidden"),
                d.addClass("clearing-blackout"),
                c.addClass("clearing-container"),
                h.show(),
                this.fix_height(n).caption(r.S(".clearing-caption", h), r.S("img", n)).center_and_label(e, f).shift(s, n, function() {
                    n.closest("li").siblings().removeClass("visible"),
                    n.closest("li").addClass("visible")
                }),
                h.trigger("opened.fndtn.clearing")
            }
            var r = this
              , l = t(i.body)
              , d = n.closest(".clearing-assembled")
              , c = r.S("div", d).first()
              , h = r.S(".visible-img", c)
              , u = r.S("img", h).not(e)
              , f = r.S(".clearing-touch-label", c)
              , p = !1
              , g = {};
            t("body").on("touchmove", function(t) {
                t.preventDefault()
            }),
            u.error(function() {
                p = !0
            }),
            this.locked() || (h.trigger("open.fndtn.clearing"),
            g = this.load(e),
            g.interchange ? u.attr("data-interchange", g.interchange).foundation("interchange", "reflow") : u.attr("src", g.src).attr("data-interchange", ""),
            u.css("visibility", "hidden"),
            a.call(this))
        },
        close: function(e, s) {
            e.preventDefault();
            var n, a, o = function(t) {
                return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
            }(t(s)), r = t(i.body);
            return s === e.target && o && (r.css("overflow", ""),
            n = t("div", o).first(),
            a = t(".visible-img", n),
            a.trigger("close.fndtn.clearing"),
            this.settings.prev_index = 0,
            t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"),
            n.removeClass("clearing-container"),
            a.hide(),
            a.trigger("closed.fndtn.clearing")),
            t("body").off("touchmove"),
            !1
        },
        is_open: function(t) {
            return t.parent().prop("style").length > 0
        },
        keydown: function(e) {
            var i = t(".clearing-blackout ul[" + this.attr_name() + "]")
              , s = this.rtl ? 37 : 39
              , n = this.rtl ? 39 : 37
              , a = 27;
            e.which === s && this.go(i, "next"),
            e.which === n && this.go(i, "prev"),
            e.which === a && this.S("a.clearing-close").trigger("click.fndtn.clearing")
        },
        nav: function(e, i) {
            var s = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
            e.preventDefault(),
            this.go(s, i)
        },
        resize: function() {
            var e = t("img", ".clearing-blackout .visible-img")
              , i = t(".clearing-touch-label", ".clearing-blackout");
            e.length && (this.center_and_label(e, i),
            e.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(t) {
            var e = t.parent().children()
              , i = this;
            return e.each(function() {
                var t = i.S(this)
                  , e = t.find("img");
                t.height() > e.outerHeight() && t.addClass("fix-height")
            }).closest("ul").width(100 * e.length + "%"),
            this
        },
        update_paddles: function(t) {
            t = t.closest("li");
            var e = t.closest(".carousel").siblings(".visible-img");
            t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"),
            t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
        },
        center_and_label: function(t, e) {
            return e.css(!this.rtl && e.length > 0 ? {
                marginLeft: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
            } : {
                marginRight: -(e.outerWidth() / 2),
                marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }),
            this
        },
        load: function(t) {
            var e, i, s;
            return "A" === t[0].nodeName ? (e = t.attr("href"),
            i = t.data("clearing-interchange")) : (s = t.closest("a"),
            e = s.attr("href"),
            i = s.data("clearing-interchange")),
            this.preload(t),
            {
                src: e ? e : t.attr("src"),
                interchange: e ? i : t.data("clearing-interchange")
            }
        },
        preload: function(t) {
            this.img(t.closest("li").next(), "next").img(t.closest("li").prev(), "prev")
        },
        img: function(e, i) {
            if (e.length) {
                var s, n, a, o = t(".clearing-preload-" + i), r = this.S("a", e);
                r.length ? (s = r.attr("href"),
                n = r.data("clearing-interchange")) : (a = this.S("img", e),
                s = a.attr("src"),
                n = a.data("clearing-interchange")),
                n ? o.attr("data-interchange", n) : (o.attr("src", s),
                o.attr("data-interchange", ""))
            }
            return this
        },
        caption: function(t, e) {
            var i = e.attr("data-caption");
            if (i) {
                var s = t.get(0);
                s.innerHTML = i,
                t.show()
            } else
                t.text("").hide();
            return this
        },
        go: function(t, e) {
            var i = this.S(".visible", t)
              , s = i[e]();
            this.settings.skip_selector && 0 != s.find(this.settings.skip_selector).length && (s = s[e]()),
            s.length && this.S("img", s).trigger("click.fndtn.clearing", [i, s]).trigger("change.fndtn.clearing")
        },
        shift: function(t, e, i) {
            var s, n = e.parent(), a = this.settings.prev_index || e.index(), o = this.direction(n, t, e), r = this.rtl ? "right" : "left", l = parseInt(n.css("left"), 10), d = e.outerWidth(), c = {};
            e.index() === a || /skip/.test(o) ? /skip/.test(o) && (s = e.index() - this.settings.up_count,
            this.lock(),
            s > 0 ? (c[r] = -(s * d),
            n.animate(c, 300, this.unlock())) : (c[r] = 0,
            n.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(),
            c[r] = l + d,
            n.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(),
            c[r] = l - d,
            n.animate(c, 300, this.unlock())),
            i()
        },
        direction: function(t, e, i) {
            var s, n = this.S("li", t), a = n.outerWidth() + n.outerWidth() / 4, o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1, r = n.index(i);
            return this.settings.up_count = o,
            s = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip",
            this.settings.prev_index = r,
            s
        },
        adjacent: function(t, e) {
            for (var i = e + 1; i >= e - 1; i--)
                if (i === t)
                    return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"),
            this.S(e).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document),
function(t, e, i, s) {
    "use strict";
    var n = function() {}
      , a = function(n, a) {
        if (n.hasClass(a.slides_container_class))
            return this;
        var d, c, h, u, f, p, g = this, _ = n, m = 0, v = !1;
        g.slides = function() {
            return _.children(a.slide_selector)
        }
        ,
        g.slides().first().addClass(a.active_slide_class),
        g.update_slide_number = function(e) {
            a.slide_number && (c.find("span:first").text(parseInt(e) + 1),
            c.find("span:last").text(g.slides().length)),
            a.bullets && (h.children().removeClass(a.bullets_active_class),
            t(h.children().get(e)).addClass(a.bullets_active_class))
        }
        ,
        g.update_active_link = function(e) {
            var i = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
            i.siblings().removeClass(a.bullets_active_class),
            i.addClass(a.bullets_active_class)
        }
        ,
        g.build_markup = function() {
            _.wrap('<div class="' + a.container_class + '"></div>'),
            d = _.parent(),
            _.addClass(a.slides_container_class),
            a.stack_on_small && d.addClass(a.stack_on_small_class),
            a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)),
            d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))),
            a.timer && (u = t("<div>").addClass(a.timer_container_class),
            u.append("<span>"),
            u.append(t("<div>").addClass(a.timer_progress_class)),
            u.addClass(a.timer_paused_class),
            d.append(u)),
            a.slide_number && (c = t("<div>").addClass(a.slide_number_class),
            c.append("<span></span> " + a.slide_number_text + " <span></span>"),
            d.append(c)),
            a.bullets && (h = t("<ol>").addClass(a.bullets_container_class),
            d.append(h),
            h.wrap('<div class="orbit-bullets-container"></div>'),
            g.slides().each(function(e) {
                var i = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                h.append(i)
            }))
        }
        ,
        g._goto = function(e, i) {
            if (e === m)
                return !1;
            "object" == typeof p && p.restart();
            var s = g.slides()
              , n = "next";
            if (v = !0,
            m > e && (n = "prev"),
            e >= s.length) {
                if (!a.circular)
                    return !1;
                e = 0
            } else if (0 > e) {
                if (!a.circular)
                    return !1;
                e = s.length - 1
            }
            var o = t(s.get(m))
              , r = t(s.get(e));
            o.css("zIndex", 2),
            o.removeClass(a.active_slide_class),
            r.css("zIndex", 4).addClass(a.active_slide_class),
            _.trigger("before-slide-change.fndtn.orbit"),
            a.before_slide_change(),
            g.update_active_link(e);
            var l = function() {
                var t = function() {
                    m = e,
                    v = !1,
                    i === !0 && (p = g.create_timer(),
                    p.start()),
                    g.update_slide_number(m),
                    _.trigger("after-slide-change.fndtn.orbit", [{
                        slide_number: m,
                        total_slides: s.length
                    }]),
                    a.after_slide_change(m, s.length)
                };
                _.outerHeight() != r.outerHeight() && a.variable_height ? _.animate({
                    height: r.outerHeight()
                }, 250, "linear", t) : t()
            };
            if (1 === s.length)
                return l(),
                !1;
            var d = function() {
                "next" === n && f.next(o, r, l),
                "prev" === n && f.prev(o, r, l)
            };
            r.outerHeight() > _.outerHeight() && a.variable_height ? _.animate({
                height: r.outerHeight()
            }, 250, "linear", d) : d()
        }
        ,
        g.next = function(t) {
            t.stopImmediatePropagation(),
            t.preventDefault(),
            g._goto(m + 1)
        }
        ,
        g.prev = function(t) {
            t.stopImmediatePropagation(),
            t.preventDefault(),
            g._goto(m - 1)
        }
        ,
        g.link_custom = function(e) {
            e.preventDefault();
            var i = t(this).attr("data-orbit-link");
            if ("string" == typeof i && "" != (i = t.trim(i))) {
                var s = d.find("[data-orbit-slide=" + i + "]");
                -1 != s.index() && g._goto(s.index())
            }
        }
        ,
        g.link_bullet = function() {
            var e = t(this).attr("data-orbit-slide");
            if ("string" == typeof e && "" != (e = t.trim(e)))
                if (isNaN(parseInt(e))) {
                    var i = d.find("[data-orbit-slide=" + e + "]");
                    -1 != i.index() && g._goto(i.index() + 1)
                } else
                    g._goto(parseInt(e))
        }
        ,
        g.timer_callback = function() {
            g._goto(m + 1, !0)
        }
        ,
        g.compute_dimensions = function() {
            var e = t(g.slides().get(m))
              , i = e.outerHeight();
            a.variable_height || g.slides().each(function() {
                t(this).outerHeight() > i && (i = t(this).outerHeight())
            }),
            _.height(i)
        }
        ,
        g.create_timer = function() {
            var t = new o(d.find("." + a.timer_container_class),a,g.timer_callback);
            return t
        }
        ,
        g.stop_timer = function() {
            "object" == typeof p && p.stop()
        }
        ,
        g.toggle_timer = function() {
            var t = d.find("." + a.timer_container_class);
            t.hasClass(a.timer_paused_class) ? ("undefined" == typeof p && (p = g.create_timer()),
            p.start()) : "object" == typeof p && p.stop()
        }
        ,
        g.init = function() {
            g.build_markup(),
            a.timer && (p = g.create_timer(),
            Foundation.utils.image_loaded(this.slides().children("img"), p.start)),
            f = new l(a,_),
            "slide" === a.animation && (f = new r(a,_)),
            d.on("click", "." + a.next_class, g.next),
            d.on("click", "." + a.prev_class, g.prev),
            a.next_on_click && d.on("click", "." + a.slides_container_class + " [data-orbit-slide]", g.link_bullet),
            d.on("click", g.toggle_timer),
            a.swipe && d.on("touchstart.fndtn.orbit", function(t) {
                t.touches || (t = t.originalEvent);
                var e = {
                    start_page_x: t.touches[0].pageX,
                    start_page_y: t.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: s
                };
                d.data("swipe-transition", e),
                t.stopPropagation()
            }).on("touchmove.fndtn.orbit", function(t) {
                if (t.touches || (t = t.originalEvent),
                !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                    var e = d.data("swipe-transition");
                    if ("undefined" == typeof e && (e = {}),
                    e.delta_x = t.touches[0].pageX - e.start_page_x,
                    "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))),
                    !e.is_scrolling && !e.active) {
                        t.preventDefault();
                        var i = e.delta_x < 0 ? m + 1 : m - 1;
                        e.active = !0,
                        g._goto(i)
                    }
                }
            }).on("touchend.fndtn.orbit", function(t) {
                d.data("swipe-transition", {}),
                t.stopPropagation()
            }),
            d.on("mouseenter.fndtn.orbit", function() {
                a.timer && a.pause_on_hover && g.stop_timer()
            }).on("mouseleave.fndtn.orbit", function() {
                a.timer && a.resume_on_mouseout && p.start()
            }),
            t(i).on("click", "[data-orbit-link]", g.link_custom),
            t(e).on("load resize", g.compute_dimensions),
            Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions),
            Foundation.utils.image_loaded(this.slides().children("img"), function() {
                d.prev("." + a.preloader_class).css("display", "none"),
                g.update_slide_number(0),
                g.update_active_link(0),
                _.trigger("ready.fndtn.orbit")
            })
        }
        ,
        g.init()
    }
      , o = function(t, e, i) {
        var s, n, a = this, o = e.timer_speed, r = t.find("." + e.timer_progress_class), l = -1;
        this.update_progress = function(t) {
            var e = r.clone();
            e.attr("style", ""),
            e.css("width", t + "%"),
            r.replaceWith(e),
            r = e
        }
        ,
        this.restart = function() {
            clearTimeout(n),
            t.addClass(e.timer_paused_class),
            l = -1,
            a.update_progress(0)
        }
        ,
        this.start = function() {
            return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l,
            t.removeClass(e.timer_paused_class),
            s = (new Date).getTime(),
            r.animate({
                width: "100%"
            }, l, "linear"),
            n = setTimeout(function() {
                a.restart(),
                i()
            }, l),
            void t.trigger("timer-started.fndtn.orbit")) : !0
        }
        ,
        this.stop = function() {
            if (t.hasClass(e.timer_paused_class))
                return !0;
            clearTimeout(n),
            t.addClass(e.timer_paused_class);
            var i = (new Date).getTime();
            l -= i - s;
            var r = 100 - l / o * 100;
            a.update_progress(r),
            t.trigger("timer-stopped.fndtn.orbit")
        }
    }
      , r = function(e) {
        var i = e.animation_speed
          , s = 1 === t("html[dir=rtl]").length
          , n = s ? "marginRight" : "marginLeft"
          , a = {};
        a[n] = "0%",
        this.next = function(t, e, s) {
            t.animate({
                marginLeft: "-100%"
            }, i),
            e.animate(a, i, function() {
                t.css(n, "100%"),
                s()
            })
        }
        ,
        this.prev = function(t, e, s) {
            t.animate({
                marginLeft: "100%"
            }, i),
            e.css(n, "-100%"),
            e.animate(a, i, function() {
                t.css(n, "100%"),
                s()
            })
        }
    }
      , l = function(e) {
        {
            var i = e.animation_speed;
            1 === t("html[dir=rtl]").length
        }
        this.next = function(t, e, s) {
            e.css({
                margin: "0%",
                opacity: "0.01"
            }),
            e.animate({
                opacity: "1"
            }, i, "linear", function() {
                t.css("margin", "100%"),
                s()
            })
        }
        ,
        this.prev = function(t, e, s) {
            e.css({
                margin: "0%",
                opacity: "0.01"
            }),
            e.animate({
                opacity: "1"
            }, i, "linear", function() {
                t.css("margin", "100%"),
                s()
            })
        }
    };
    Foundation.libs = Foundation.libs || {},
    Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.3",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: n,
            after_slide_change: n
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function(t) {
            var e = new a(this.S(t),this.S(t).data("orbit-init"));
            this.S(t).data(this.name + "-instance", e)
        },
        reflow: function() {
            var t = this;
            if (t.S(t.scope).is("[data-orbit]")) {
                var e = t.S(t.scope)
                  , i = e.data(t.name + "-instance");
                i.compute_dimensions()
            } else
                t.S("[data-orbit]", t.scope).each(function(e, i) {
                    var s = t.S(i)
                      , n = (t.data_options(s),
                    s.data(t.name + "-instance"));
                    n.compute_dimensions()
                })
        }
    }
}(jQuery, window, window.document),
function(t) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.3",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var e = this
              , i = e.S
              , s = ""
              , n = ""
              , a = ""
              , o = ""
              , r = "";
            "move" === this.settings.open_method ? (s = "move-",
            n = "right",
            a = "left",
            o = "top",
            r = "bottom") : "overlap_single" === this.settings.open_method ? (s = "offcanvas-overlap-",
            n = "right",
            a = "left",
            o = "top",
            r = "bottom") : "overlap" === this.settings.open_method && (s = "offcanvas-overlap"),
            i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(a) {
                e.click_toggle_class(a, s + n),
                "overlap" !== e.settings.open_method && i(".left-submenu").removeClass(s + n),
                t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(a) {
                var o = e.get_settings(a)
                  , r = i(this).parent();
                !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (a.preventDefault(),
                i(this).siblings(".left-submenu").toggleClass(s + n)) : r.hasClass("back") && (a.preventDefault(),
                r.parent().removeClass(s + n)) : (e.hide.call(e, s + n, e.get_wrapper(a)),
                r.parent().removeClass(s + n)),
                t(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(n) {
                e.click_toggle_class(n, s + a),
                "overlap" !== e.settings.open_method && i(".right-submenu").removeClass(s + a),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(n) {
                var o = e.get_settings(n)
                  , r = i(this).parent();
                !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (n.preventDefault(),
                i(this).siblings(".right-submenu").toggleClass(s + a)) : r.hasClass("back") && (n.preventDefault(),
                r.parent().removeClass(s + a)) : (e.hide.call(e, s + a, e.get_wrapper(n)),
                r.parent().removeClass(s + a)),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".top-off-canvas-toggle", function(n) {
                e.click_toggle_class(n, s + r),
                "overlap" !== e.settings.open_method && i(".top-submenu").removeClass(s + r),
                t(".top-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".top-off-canvas-menu a", function(n) {
                var a = e.get_settings(n)
                  , o = i(this).parent();
                !a.close_on_click || o.hasClass("has-submenu") || o.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (n.preventDefault(),
                i(this).siblings(".top-submenu").toggleClass(s + r)) : o.hasClass("back") && (n.preventDefault(),
                o.parent().removeClass(s + r)) : (e.hide.call(e, s + r, e.get_wrapper(n)),
                o.parent().removeClass(s + r)),
                t(".top-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".bottom-off-canvas-toggle", function(n) {
                e.click_toggle_class(n, s + o),
                "overlap" !== e.settings.open_method && i(".bottom-submenu").removeClass(s + o),
                t(".bottom-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".bottom-off-canvas-menu a", function(n) {
                var a = e.get_settings(n)
                  , r = i(this).parent();
                !a.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (n.preventDefault(),
                i(this).siblings(".bottom-submenu").toggleClass(s + o)) : r.hasClass("back") && (n.preventDefault(),
                r.parent().removeClass(s + o)) : (e.hide.call(e, s + o, e.get_wrapper(n)),
                r.parent().removeClass(s + o)),
                t(".bottom-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(o) {
                e.click_remove_class(o, s + a),
                i(".right-submenu").removeClass(s + a),
                n && (e.click_remove_class(o, s + n),
                i(".left-submenu").removeClass(s + a)),
                t(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(i) {
                e.click_remove_class(i, s + a),
                t(".left-off-canvas-toggle").attr("aria-expanded", "false"),
                n && (e.click_remove_class(i, s + n),
                t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(n) {
                e.click_remove_class(n, s + o),
                i(".bottom-submenu").removeClass(s + o),
                r && (e.click_remove_class(n, s + r),
                i(".top-submenu").removeClass(s + o)),
                t(".bottom-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(i) {
                e.click_remove_class(i, s + o),
                t(".top-off-canvas-toggle").attr("aria-expanded", "false"),
                r && (e.click_remove_class(i, s + r),
                t(".bottom-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(t, e) {
            e = e || this.get_wrapper(),
            e.is("." + t) ? this.hide(t, e) : this.show(t, e)
        },
        show: function(t, e) {
            e = e || this.get_wrapper(),
            e.trigger("open.fndtn.offcanvas"),
            e.addClass(t)
        },
        hide: function(t, e) {
            e = e || this.get_wrapper(),
            e.trigger("close.fndtn.offcanvas"),
            e.removeClass(t)
        },
        click_toggle_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.toggle(e, i)
        },
        click_remove_class: function(t, e) {
            t.preventDefault();
            var i = this.get_wrapper(t);
            this.hide(e, i)
        },
        get_settings: function(t) {
            var e = this.S(t.target).closest("[" + this.attr_name() + "]");
            return e.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(t) {
            var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
            return 0 === e.length && (e = this.S(".off-canvas-wrap")),
            e
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.3",
        settings: {
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function() {
            var e = this
              , i = this.S;
            t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(t) {
                var s = i(this).closest("[" + e.attr_name() + "]")
                  , n = s.data(e.attr_name(!0) + "-init") || e.settings;
                t.preventDefault(),
                Modernizr.csstransitions ? (s.addClass("alert-close"),
                s.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    i(this).trigger("close.fndtn.alert").remove(),
                    n.callback()
                })) : s.fadeOut(300, function() {
                    i(this).trigger("close.fndtn.alert").remove(),
                    n.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i, s) {
    "use strict";
    function n(t) {
        var e = /fade/i.test(t)
          , i = /pop/i.test(t);
        return {
            animate: e || i,
            pop: i,
            fade: e
        }
    }
    var a = [];
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            on_ajax_error: t.noop,
            bg: t(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(e, i, s) {
            t.extend(!0, this.settings, i, s),
            this.bindings(i, s)
        },
        events: function() {
            var t = this
              , e = t.S;
            return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(i) {
                if (i.preventDefault(),
                !t.locked) {
                    var s = e(this)
                      , n = s.data(t.data_attr("reveal-ajax"))
                      , a = s.data(t.data_attr("reveal-replace-content"));
                    if (t.locked = !0,
                    "undefined" == typeof n)
                        t.open.call(t, s);
                    else {
                        var o = n === !0 ? s.attr("href") : n;
                        t.open.call(t, s, {
                            url: o
                        }, {
                            replaceContentSel: a
                        })
                    }
                }
            }),
            e(i).on("click.fndtn.reveal", this.close_targets(), function(i) {
                if (i.preventDefault(),
                !t.locked) {
                    var s = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init") || t.settings
                      , n = e(i.target)[0] === e("." + s.bg_class)[0];
                    if (n) {
                        if (!s.close_on_background_click)
                            return;
                        i.stopPropagation()
                    }
                    t.locked = !0,
                    t.close.call(t, n ? e("[" + t.attr_name() + "].open:not(.toback)") : e(this).closest("[" + t.attr_name() + "]"))
                }
            }),
            e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video),
            !0
        },
        key_up_on: function() {
            var t = this;
            return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                var i = t.S("[" + t.attr_name() + "].open")
                  , s = i.data(t.attr_name(!0) + "-init") || t.settings;
                s && 27 === e.which && s.close_on_esc && !t.locked && t.close.call(t, i)
            }),
            !0
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"),
            !0
        },
        open: function(i, n) {
            var o, r = this;
            i ? "undefined" != typeof i.selector ? o = r.S("#" + i.data(r.data_attr("reveal-id"))).first() : (o = r.S(this.scope),
            n = i) : o = r.S(this.scope);
            var l = o.data(r.attr_name(!0) + "-init");
            if (l = l || this.settings,
            o.hasClass("open") && i !== s && i.attr("data-reveal-id") == o.attr("id"))
                return r.close(o);
            if (!o.hasClass("open")) {
                var d = r.S("[" + r.attr_name() + "].open");
                "undefined" == typeof o.data("css-top") && o.data("css-top", parseInt(o.css("top"), 10)).data("offset", this.cache_offset(o)),
                o.attr("tabindex", "0").attr("aria-hidden", "false"),
                this.key_up_on(o),
                o.on("open.fndtn.reveal", function(t) {
                    "fndtn.reveal" !== t.namespace
                }),
                o.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),
                d.length < 1 && this.toggle_bg(o, !0),
                "string" == typeof n && (n = {
                    url: n
                });
                var c = function() {
                    d.length > 0 && (l.multiple_opened ? r.to_back(d) : r.hide(d, l.css.close)),
                    l.multiple_opened && a.push(o),
                    r.show(o, l.css.open)
                };
                if ("undefined" != typeof n && n.url) {
                    var h = "undefined" != typeof n.success ? n.success : null;
                    t.extend(n, {
                        success: function(e, i, s) {
                            if (t.isFunction(h)) {
                                var n = h(e, i, s);
                                "string" == typeof n && (e = n)
                            }
                            "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? o.find(options.replaceContentSel).html(e) : o.html(e),
                            r.S(o).foundation("section", "reflow"),
                            r.S(o).children().foundation(),
                            c()
                        }
                    }),
                    l.on_ajax_error !== t.noop && t.extend(n, {
                        error: l.on_ajax_error
                    }),
                    t.ajax(n)
                } else
                    c()
            }
            r.S(e).trigger("resize")
        },
        close: function(e) {
            var e = e && e.length ? e : this.S(this.scope)
              , i = this.S("[" + this.attr_name() + "].open")
              , s = e.data(this.attr_name(!0) + "-init") || this.settings
              , n = this;
            if (i.length > 0)
                if (e.removeAttr("tabindex", "0").attr("aria-hidden", "true"),
                this.locked = !0,
                this.key_up_off(e),
                e.trigger("close.fndtn.reveal"),
                (s.multiple_opened && 1 === i.length || !s.multiple_opened || e.length > 1) && (n.toggle_bg(e, !1),
                n.to_front(e)),
                s.multiple_opened) {
                    var o = e.is(":not(.toback)");
                    n.hide(e, s.css.close, s),
                    o ? a.pop() : a = t.grep(a, function(t) {
                        var i = t[0] === e[0];
                        return i && n.to_front(e),
                        !i
                    }),
                    a.length > 0 && n.to_front(a[a.length - 1])
                } else
                    n.hide(i, s.css.close, s)
        },
        close_targets: function() {
            var t = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
        },
        toggle_bg: function(e, i) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var n = this.settings.bg.filter(":visible").length > 0;
            i != n && ((i == s ? n : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(i, s) {
            if (s) {
                var a = i.data(this.attr_name(!0) + "-init") || this.settings
                  , o = a.root_element
                  , r = this;
                if (0 === i.parent(o).length) {
                    var l = i.wrap('<div style="display: none;" />').parent();
                    i.on("closed.fndtn.reveal.wrapped", function() {
                        i.detach().appendTo(l),
                        i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }),
                    i.detach().appendTo(o)
                }
                var d = n(a.animation);
                if (d.animate || (this.locked = !1),
                d.pop) {
                    s.top = t(e).scrollTop() - i.data("offset") + "px";
                    var c = {
                        top: t(e).scrollTop() + i.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return i.css(s).animate(c, a.animation_speed, "linear", function() {
                            r.locked = !1,
                            i.trigger("opened.fndtn.reveal")
                        }).addClass("open")
                    }, a.animation_speed / 2)
                }
                if (s.top = t(e).scrollTop() + i.data("css-top") + "px",
                d.fade) {
                    var c = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return i.css(s).animate(c, a.animation_speed, "linear", function() {
                            r.locked = !1,
                            i.trigger("opened.fndtn.reveal")
                        }).addClass("open")
                    }, a.animation_speed / 2)
                }
                return i.css(s).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened.fndtn.reveal")
            }
            var a = this.settings;
            return n(a.animation).fade ? i.fadeIn(a.animation_speed / 2) : (this.locked = !1,
            i.show())
        },
        to_back: function(t) {
            t.addClass("toback")
        },
        to_front: function(t) {
            t.removeClass("toback")
        },
        hide: function(i, s) {
            if (s) {
                var a = i.data(this.attr_name(!0) + "-init")
                  , o = this;
                a = a || this.settings;
                var r = n(a.animation);
                if (r.animate || (this.locked = !1),
                r.pop) {
                    var l = {
                        top: -t(e).scrollTop() - i.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return i.animate(l, a.animation_speed, "linear", function() {
                            o.locked = !1,
                            i.css(s).trigger("closed.fndtn.reveal")
                        }).removeClass("open")
                    }, a.animation_speed / 2)
                }
                if (r.fade) {
                    var l = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return i.animate(l, a.animation_speed, "linear", function() {
                            o.locked = !1,
                            i.css(s).trigger("closed.fndtn.reveal")
                        }).removeClass("open")
                    }, a.animation_speed / 2)
                }
                return i.hide().css(s).removeClass("open").trigger("closed.fndtn.reveal")
            }
            var a = this.settings;
            return n(a.animation).fade ? i.fadeOut(a.animation_speed / 2) : i.hide()
        },
        close_video: function(e) {
            var i = t(".flex-video", e.target)
              , s = t("iframe", i);
            s.length > 0 && (s.attr("data-src", s[0].src),
            s.attr("src", s.attr("src")),
            i.hide())
        },
        open_video: function(e) {
            var i = t(".flex-video", e.target)
              , n = i.find("iframe");
            if (n.length > 0) {
                var a = n.attr("data-src");
                if ("string" == typeof a)
                    n[0].src = n.attr("data-src");
                else {
                    var o = n[0].src;
                    n[0].src = s,
                    n[0].src = o
                }
                i.show()
            }
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        cache_offset: function(t) {
            var e = t.show().height() + parseInt(t.css("top"), 10) + t.scrollY;
            return t.hide(),
            e
        },
        off: function() {
            t(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.3",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(e, i, s) {
                    if (null !== e && /IMG/.test(e[0].nodeName)) {
                        var n = t.each(e, function() {
                            this.src = i
                        });
                        if (new RegExp(i,"i").test(n))
                            return;
                        return e.attr("src", i),
                        s(e[0].src)
                    }
                    var a = e.data(this.data_attr + "-last-path")
                      , o = this;
                    if (a != i)
                        return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"),
                        e.data("interchange-last-path", i),
                        s(i)) : t.get(i, function(t) {
                            e.html(t),
                            e.data(o.data_attr + "-last-path", i),
                            s()
                        })
                }
            }
        },
        init: function(e, i, s) {
            Foundation.inherit(this, "throttle random_str"),
            this.data_attr = this.set_data_attr(),
            t.extend(!0, this.settings, i, s),
            this.bindings(i, s),
            this.reflow()
        },
        get_media_hash: function() {
            var t = "";
            for (var e in this.settings.named_queries)
                t += matchMedia(this.settings.named_queries[e]).matches.toString();
            return t
        },
        events: function() {
            var i, s = this;
            return t(e).off(".interchange").on("resize.fndtn.interchange", s.throttle(function() {
                var t = s.get_media_hash();
                t !== i && s.resize(),
                i = t
            }, 50)),
            this
        },
        resize: function() {
            var e = this.cache;
            if (!this.images_loaded || !this.nodes_loaded)
                return void setTimeout(t.proxy(this.resize, this), 50);
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var s = this.results(i, e[i]);
                    s && this.settings.directives[s.scenario[1]].call(this, s.el, s.scenario[0], function(t) {
                        if (arguments[0]instanceof Array)
                            var e = arguments[0];
                        else
                            var e = Array.prototype.slice.call(arguments, 0);
                        return function() {
                            t.el.trigger(t.scenario[1], e)
                        }
                    }(s))
                }
        },
        results: function(t, e) {
            var i = e.length;
            if (i > 0)
                for (var s = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--; ) {
                    var n, a = e[i][2];
                    if (n = matchMedia(this.settings.named_queries.hasOwnProperty(a) ? this.settings.named_queries[a] : a),
                    n.matches)
                        return {
                            el: s,
                            scenario: e[i]
                        }
                }
            return !1
        },
        load: function(t, e) {
            return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](),
            this["cached_" + t]
        },
        update_images: function() {
            var t = this.S("img[" + this.data_attr + "]")
              , e = t.length
              , i = e
              , s = 0
              , n = this.data_attr;
            for (this.cache = {},
            this.cached_images = [],
            this.images_loaded = 0 === e; i--; ) {
                if (s++,
                t[i]) {
                    var a = t[i].getAttribute(n) || "";
                    a.length > 0 && this.cached_images.push(t[i])
                }
                s === e && (this.images_loaded = !0,
                this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var t = this.S("[" + this.data_attr + "]").not("img")
              , e = t.length
              , i = e
              , s = 0
              , n = this.data_attr;
            for (this.cached_nodes = [],
            this.nodes_loaded = 0 === e; i--; ) {
                s++;
                var a = t[i].getAttribute(n) || "";
                a.length > 0 && this.cached_nodes.push(t[i]),
                s === e && (this.nodes_loaded = !0,
                this.enhance("nodes"))
            }
            return this
        },
        enhance: function(i) {
            for (var s = this["cached_" + i].length; s--; )
                this.object(t(this["cached_" + i][s]));
            return t(e).trigger("resize.fndtn.interchange")
        },
        convert_directive: function(t) {
            var e = this.trim(t);
            return e.length > 0 ? e : "replace"
        },
        parse_scenario: function(t) {
            var e = t[0].match(/(.+),\s*(\w+)\s*$/)
              , i = t[1].match(/(.*)\)/);
            if (e)
                var s = e[1]
                  , n = e[2];
            else
                var a = t[0].split(/,\s*$/)
                  , s = a[0]
                  , n = "";
            return [this.trim(s), this.convert_directive(n), this.trim(i[1])]
        },
        object: function(t) {
            var e = this.parse_data_attr(t)
              , i = []
              , s = e.length;
            if (s > 0)
                for (; s--; ) {
                    var n = e[s].split(/,\s?\(/);
                    if (n.length > 1) {
                        var a = this.parse_scenario(n);
                        i.push(a)
                    }
                }
            return this.store(t, i)
        },
        store: function(t, e) {
            var i = this.random_str()
              , s = t.data(this.add_namespace("uuid", !0));
            return this.cache[s] ? this.cache[s] : (t.attr(this.add_namespace("data-uuid"), i),
            this.cache[i] = e)
        },
        trim: function(e) {
            return "string" == typeof e ? t.trim(e) : e
        },
        set_data_attr: function(t) {
            return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(t) {
            for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, s = []; i--; )
                e[i].replace(/[\W\d]+/, "").length > 4 && s.push(e[i]);
            return s
        },
        reflow: function() {
            this.load("images", !0),
            this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.3",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(t, e, i) {
            Foundation.inherit(this, "throttle"),
            this.bindings(e, i)
        },
        events: function() {
            var e = this
              , i = e.S
              , s = e.settings;
            e.set_expedition_position(),
            i(e.scope).off(".magellan").on("click.fndtn.magellan", "[" + e.add_namespace("data-magellan-arrival") + "] a[href*=#]", function(i) {
                var s = this.hostname === location.hostname || !this.hostname
                  , n = e.filterPathname(location.pathname) === e.filterPathname(this.pathname)
                  , a = this.hash.replace(/(:|\.|\/)/g, "\\$1")
                  , o = this;
                if (s && n && a) {
                    i.preventDefault();
                    var r = t(this).closest("[" + e.attr_name() + "]")
                      , l = r.data("magellan-expedition-init")
                      , d = this.hash.split("#").join("")
                      , c = t('a[name="' + d + '"]');
                    0 === c.length && (c = t("#" + d));
                    var h = c.offset().top - l.destination_threshold + 1;
                    l.offset_by_height && (h -= r.outerHeight()),
                    t("html, body").stop().animate({
                        scrollTop: h
                    }, l.duration, l.easing, function() {
                        history.pushState ? history.pushState(null, null, o.pathname + o.search + "#" + d) : location.hash = o.pathname + o.search + "#" + d
                    })
                }
            }).on("scroll.fndtn.magellan", e.throttle(this.check_for_arrivals.bind(this), s.throttle_delay))
        },
        check_for_arrivals: function() {
            var t = this;
            t.update_arrivals(),
            t.update_expedition_positions()
        },
        set_expedition_position: function() {
            var e = this;
            t("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                var i, s, n = t(this), a = n.data("magellan-expedition-init"), o = n.attr("styles");
                n.attr("style", ""),
                i = n.offset().top + a.threshold,
                s = parseInt(n.data("magellan-fixed-top")),
                isNaN(s) || (e.settings.fixed_top = s),
                n.data(e.data_attr("magellan-top-offset"), i),
                n.attr("style", o)
            })
        },
        update_expedition_positions: function() {
            var i = this
              , s = t(e).scrollTop();
            t("[" + this.attr_name() + "=fixed]", i.scope).each(function() {
                var e = t(this)
                  , n = e.data("magellan-expedition-init")
                  , a = e.attr("style")
                  , o = e.data("magellan-top-offset");
                if (s + i.settings.fixed_top >= o) {
                    var r = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === r.length && (r = e.clone(),
                    r.removeAttr(i.attr_name()),
                    r.attr(i.add_namespace("data-magellan-expedition-clone"), ""),
                    e.before(r)),
                    e.css({
                        position: "fixed",
                        top: n.fixed_top
                    }).addClass("fixed")
                } else
                    e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(),
                    e.attr("style", a).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var i = this
              , s = t(e).scrollTop();
            t("[" + this.attr_name() + "]", i.scope).each(function() {
                var e = t(this)
                  , n = e.data(i.attr_name(!0) + "-init")
                  , a = i.offsets(e, s)
                  , o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]")
                  , r = !1;
                a.each(function(t, s) {
                    if (s.viewport_offset >= s.top_offset) {
                        var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                        return a.not(s.arrival).removeClass(n.active_class),
                        s.arrival.addClass(n.active_class),
                        r = !0,
                        !0
                    }
                }),
                r || o.removeClass(n.active_class)
            })
        },
        offsets: function(e, i) {
            var s = this
              , n = e.data(s.attr_name(!0) + "-init")
              , a = i;
            return e.find("[" + s.add_namespace("data-magellan-arrival") + "]").map(function() {
                var i = t(this).data(s.data_attr("magellan-arrival"))
                  , o = t("[" + s.add_namespace("data-magellan-destination") + "=" + i + "]");
                if (o.length > 0) {
                    var r = o.offset().top - n.destination_threshold;
                    return n.offset_by_height && (r -= e.outerHeight()),
                    r = Math.floor(r),
                    {
                        destination: o,
                        arrival: t(this),
                        top_offset: r,
                        viewport_offset: a
                    }
                }
            }).sort(function(t, e) {
                return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
            })
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {
            this.S(this.scope).off(".magellan"),
            this.S(e).off(".magellan")
        },
        filterPathname: function(t) {
            return t = t || "",
            t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        },
        reflow: function() {
            var e = this;
            t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
        }
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.3",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function(e) {
            var i = this
              , s = this.S;
            i.create(this.S(e)),
            s(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function(e) {
                var n = s(this).closest("[" + i.attr_name() + "]")
                  , a = i.attr_name() + "=" + n.attr(i.attr_name())
                  , o = n.data(i.attr_name(!0) + "-init") || i.settings
                  , r = s("#" + this.href.split("#")[1])
                  , l = t("> dd, > li", n)
                  , d = l.children("." + o.content_class)
                  , c = d.filter("." + o.active_class);
                return e.preventDefault(),
                n.attr(i.attr_name()) && (d = d.add("[" + a + "] dd > ." + o.content_class + ", [" + a + "] li > ." + o.content_class),
                l = l.add("[" + a + "] dd, [" + a + "] li")),
                o.toggleable && r.is(c) ? (r.parent("dd, li").toggleClass(o.active_class, !1),
                r.toggleClass(o.active_class, !1),
                s(this).attr("aria-expanded", function(t, e) {
                    return "true" === e ? "false" : "true"
                }),
                o.callback(r),
                r.triggerHandler("toggled", [n]),
                void n.triggerHandler("toggled", [r])) : (o.multi_expand || (d.removeClass(o.active_class),
                l.removeClass(o.active_class),
                l.children("a").attr("aria-expanded", "false")),
                r.addClass(o.active_class).parent().addClass(o.active_class),
                o.callback(r),
                r.triggerHandler("toggled", [n]),
                n.triggerHandler("toggled", [r]),
                void s(this).attr("aria-expanded", "true"))
            })
        },
        create: function(e) {
            var i = this
              , s = e
              , n = t("> .accordion-navigation", s)
              , a = s.data(i.attr_name(!0) + "-init") || i.settings;
            n.children("a").attr("aria-expanded", "false"),
            n.has("." + a.content_class + "." + a.active_class).addClass(a.active_class).children("a").attr("aria-expanded", "true"),
            a.multi_expand
        },
        toggle: function(t) {
            var t = "undefined" != typeof t ? t : {}
              , i = "undefined" != typeof t.selector ? t.selector : ""
              , s = "undefined" != typeof t.toggle_state ? t.toggle_state : ""
              , n = "undefined" != typeof t.$accordion ? t.$accordion : this.S(this.scope).closest("[" + this.attr_name() + "]")
              , a = n.find("> dd" + i + ", > li" + i);
            if (a.length < 1)
                return e.console && console.error("Selection not found.", i),
                !1;
            var o = this.S
              , r = this.settings.active_class;
            a.each(function() {
                var t = o(this)
                  , e = t.hasClass(r);
                (e && "close" === s || !e && "open" === s || "" === s) && t.find("> a").trigger("click.fndtn.accordion")
            })
        },
        open: function(t) {
            var t = "undefined" != typeof t ? t : {};
            t.toggle_state = "open",
            this.toggle(t)
        },
        close: function(t) {
            var t = "undefined" != typeof t ? t : {};
            t.toggle_state = "close",
            this.toggle(t)
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.3",
        settings: {
            index: 0,
            start_offset: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all",
            dropdown_autoclose: !0
        },
        init: function(e, i, s) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var n = this;
            n.register_media("topbar", "foundation-mq-topbar"),
            this.bindings(i, s),
            n.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var e = t(this)
                      , i = e.data(n.attr_name(!0) + "-init");
                    n.S("section, .top-bar-section", this)
                }
                e.data("index", 0);
                var s = e.parent();
                s.hasClass("fixed") || n.is_sticky(e, s, i) ? (n.settings.sticky_class = i.sticky_class,
                n.settings.sticky_topbar = e,
                e.data("height", s.outerHeight()),
                e.data("stickyoffset", s.offset().top)) : e.data("height", e.outerHeight()),
                i.assembled || n.assemble(e),
                i.is_hover ? n.S(".has-dropdown", e).addClass("not-click") : n.S(".has-dropdown", e).removeClass("not-click"),
                n.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"),
                s.hasClass("fixed") && n.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(t, e, i) {
            var s = e.hasClass(i.sticky_class)
              , n = matchMedia(Foundation.media_queries.small).matches
              , a = matchMedia(Foundation.media_queries.medium).matches
              , o = matchMedia(Foundation.media_queries.large).matches;
            return s && "all" === i.sticky_on ? !0 : s && this.small() && -1 !== i.sticky_on.indexOf("small") && n && !a && !o ? !0 : s && this.medium() && -1 !== i.sticky_on.indexOf("medium") && n && a && !o ? !0 : s && this.large() && -1 !== i.sticky_on.indexOf("large") && n && a && o ? !0 : !1
        },
        toggle: function(i) {
            var s, n = this;
            s = i ? n.S(i).closest("[" + this.attr_name() + "]") : n.S("[" + this.attr_name() + "]");
            var a = s.data(this.attr_name(!0) + "-init")
              , o = n.S("section, .top-bar-section", s);
            n.breakpoint() && (n.rtl ? (o.css({
                right: "0%"
            }),
            t(">.name", o).css({
                right: "100%"
            })) : (o.css({
                left: "0%"
            }),
            t(">.name", o).css({
                left: "100%"
            })),
            n.S("li.moved", o).removeClass("moved"),
            s.data("index", 0),
            s.toggleClass("expanded").css("height", "")),
            a.scrolltop ? s.hasClass("expanded") ? s.parent().hasClass("fixed") && (a.scrolltop ? (s.parent().removeClass("fixed"),
            s.addClass("fixed"),
            n.S("body").removeClass("f-topbar-fixed"),
            e.scrollTo(0, 0)) : s.parent().removeClass("expanded")) : s.hasClass("fixed") && (s.parent().addClass("fixed"),
            s.removeClass("fixed"),
            n.S("body").addClass("f-topbar-fixed")) : (n.is_sticky(s, s.parent(), a) && s.parent().addClass("fixed"),
            s.parent().hasClass("fixed") && (s.hasClass("expanded") ? (s.addClass("fixed"),
            s.parent().addClass("expanded"),
            n.S("body").addClass("f-topbar-fixed")) : (s.removeClass("fixed"),
            s.parent().removeClass("expanded"),
            n.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var i = this
              , s = this.S;
            s(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                t.preventDefault(),
                i.toggle(this)
            }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var e = t(this).closest("li")
                  , s = e.closest("[" + i.attr_name() + "]")
                  , n = s.data(i.attr_name(!0) + "-init");
                if (n.dropdown_autoclose && n.is_hover) {
                    var a = t(this).closest(".hover");
                    a.removeClass("hover")
                }
                !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(e) {
                var n = s(this)
                  , a = s(e.target)
                  , o = n.closest("[" + i.attr_name() + "]")
                  , r = o.data(i.attr_name(!0) + "-init");
                return a.data("revealId") ? void i.toggle() : void (i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(),
                n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"),
                n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"),
                t(n).siblings().removeClass("hover"),
                "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && e.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                if (i.breakpoint()) {
                    t.preventDefault();
                    var e = s(this)
                      , n = e.closest("[" + i.attr_name() + "]")
                      , a = n.find("section, .top-bar-section")
                      , o = (e.next(".dropdown").outerHeight(),
                    e.closest("li"));
                    n.data("index", n.data("index") + 1),
                    o.addClass("moved"),
                    i.rtl ? (a.css({
                        right: -(100 * n.data("index")) + "%"
                    }),
                    a.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * n.data("index")) + "%"
                    }),
                    a.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })),
                    n.css("height", e.siblings("ul").outerHeight(!0) + n.data("height"))
                }
            }),
            s(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function() {
                i.resize.call(i)
            }, 50)).trigger("resize.fndtn.topbar").load(function() {
                s(this).trigger("resize.fndtn.topbar")
            }),
            s("body").off(".topbar").on("click.fndtn.topbar", function(t) {
                var e = s(t.target).closest("li").closest("li.hover");
                e.length > 0 || s("[" + i.attr_name() + "] li.hover").removeClass("hover")
            }),
            s(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                t.preventDefault();
                var e = s(this)
                  , n = e.closest("[" + i.attr_name() + "]")
                  , a = n.find("section, .top-bar-section")
                  , o = (n.data(i.attr_name(!0) + "-init"),
                e.closest("li.moved"))
                  , r = o.parent();
                n.data("index", n.data("index") - 1),
                i.rtl ? (a.css({
                    right: -(100 * n.data("index")) + "%"
                }),
                a.find(">.name").css({
                    right: 100 * n.data("index") + "%"
                })) : (a.css({
                    left: -(100 * n.data("index")) + "%"
                }),
                a.find(">.name").css({
                    left: 100 * n.data("index") + "%"
                })),
                0 === n.data("index") ? n.css("height", "") : n.css("height", r.outerHeight(!0) + n.data("height")),
                setTimeout(function() {
                    o.removeClass("moved")
                }, 300)
            }),
            s(this.scope).find(".dropdown a").focus(function() {
                t(this).parents(".has-dropdown").addClass("hover")
            }).blur(function() {
                t(this).parents(".has-dropdown").removeClass("hover")
            })
        },
        resize: function() {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function() {
                var e, s = t.S(this), n = s.data(t.attr_name(!0) + "-init"), a = s.parent("." + t.settings.sticky_class);
                if (!t.breakpoint()) {
                    var o = s.hasClass("expanded");
                    s.css("height", "").removeClass("expanded").find("li").removeClass("hover"),
                    o && t.toggle(s)
                }
                t.is_sticky(s, a, n) && (a.hasClass("fixed") ? (a.removeClass("fixed"),
                e = a.offset().top,
                t.S(i.body).hasClass("f-topbar-fixed") && (e -= s.data("height")),
                s.data("stickyoffset", e),
                a.addClass("fixed")) : (e = a.offset().top,
                s.data("stickyoffset", e)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(e) {
            var i = this
              , s = e.data(this.attr_name(!0) + "-init")
              , n = i.S("section, .top-bar-section", e);
            n.detach(),
            i.S(".has-dropdown>a", n).each(function() {
                var e, n = i.S(this), a = n.siblings(".dropdown"), o = n.attr("href");
                a.find(".title.back").length || (e = t(1 == s.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + o + '">' + n.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),
                t("h5>a", e).html(1 == s.custom_back_text ? s.back_text : "&laquo; " + n.html()),
                a.prepend(e))
            }),
            n.appendTo(e),
            this.sticky(),
            this.assembled(e)
        },
        assembled: function(e) {
            e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(e) {
            var i = 0
              , s = this;
            return t("> li", e).each(function() {
                i += s.S(this).outerHeight(!0)
            }),
            i
        },
        sticky: function() {
            var t = this;
            this.S(e).on("scroll", function() {
                t.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var t = "." + this.settings.sticky_class
              , i = this.S(e)
              , s = this;
            if (s.settings.sticky_topbar && s.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var n = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                s.S(t).hasClass("expanded") || (i.scrollTop() > n ? s.S(t).hasClass("fixed") || (s.S(t).addClass("fixed"),
                s.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= n && s.S(t).hasClass("fixed") && (s.S(t).removeClass("fixed"),
                s.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"),
            this.S(e).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i, s) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.3",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(t, e, i) {
            var s = this
              , n = this.S;
            n("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                s.default_tab_hashes.push(this.hash)
            }),
            this.bindings(e, i),
            this.handle_location_hash_change()
        },
        events: function() {
            var t = this
              , i = this.S
              , s = function(e, s) {
                var n = i(s).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                if (!n.is_hover || Modernizr.touch) {
                    var a = e.keyCode || e.which;
                    9 !== a && (e.preventDefault(),
                    e.stopPropagation()),
                    t.toggle_active_tab(i(s).parent())
                }
            };
            i(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                var e = t.keyCode || t.which;
                if (13 === e || 32 === e) {
                    var i = this;
                    s(t, i)
                }
            }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                var e = this;
                s(t, e)
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var e = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                e.is_hover && t.toggle_active_tab(i(this).parent())
            }),
            i(e).on("hashchange.fndtn.tab", function(e) {
                e.preventDefault(),
                t.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var e = this
              , i = this.S;
            i("[" + this.attr_name() + "]", this.scope).each(function() {
                var n = i(this).data(e.attr_name(!0) + "-init");
                if (n.deep_linking) {
                    var a;
                    if (a = n.scroll_to_content ? e.scope.location.hash : e.scope.location.hash.replace("fndtn-", ""),
                    "" != a) {
                        var o = i(a);
                        if (o.hasClass("content") && o.parent().hasClass("tabs-content"))
                            e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent());
                        else {
                            var r = o.closest(".content").attr("id");
                            r != s && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), a)
                        }
                    } else
                        for (var l = 0; l < e.default_tab_hashes.length; l++)
                            e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(n, a) {
            var o = this
              , r = o.S
              , l = n.closest("[" + this.attr_name() + "]")
              , d = n.find("a")
              , c = n.children("a").first()
              , h = "#" + c.attr("href").split("#")[1]
              , u = r(h)
              , f = n.siblings()
              , p = l.data(this.attr_name(!0) + "-init")
              , g = function(e) {
                var s, n = t(this), a = t(this).parents("li").prev().children('[role="tab"]'), o = t(this).parents("li").next().children('[role="tab"]');
                switch (e.keyCode) {
                case 37:
                    s = a;
                    break;
                case 39:
                    s = o;
                    break;
                default:
                    s = !1
                }
                s.length && (n.attr({
                    tabindex: "-1",
                    "aria-selected": null
                }),
                s.attr({
                    tabindex: "0",
                    "aria-selected": !0
                }).focus()),
                t('[role="tabpanel"]').attr("aria-hidden", "true"),
                t("#" + t(i.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
            }
              , _ = function(t) {
                var i = p.scroll_to_content ? o.default_tab_hashes[0] : "fndtn-" + o.default_tab_hashes[0].replace("#", "");
                (t !== i || e.location.hash) && (e.location.hash = t)
            };
            c.data("tab-content") && (h = "#" + c.data("tab-content").split("#")[1],
            u = r(h)),
            p.deep_linking && (p.scroll_to_content ? (_(a || h),
            a == s || a == h ? n.parent()[0].scrollIntoView() : r(h)[0].scrollIntoView()) : _(a != s ? "fndtn-" + a.replace("#", "") : "fndtn-" + h.replace("#", ""))),
            n.addClass(p.active_class).triggerHandler("opened"),
            d.attr({
                "aria-selected": "true",
                tabindex: 0
            }),
            f.removeClass(p.active_class),
            f.find("a").attr({
                "aria-selected": "false"
            }),
            u.siblings().removeClass(p.active_class).attr({
                "aria-hidden": "true"
            }),
            u.addClass(p.active_class).attr("aria-hidden", "false").removeAttr("tabindex"),
            p.callback(n),
            u.triggerHandler("toggled", [u]),
            l.triggerHandler("toggled", [n]),
            d.off("keydown").on("keydown", g)
        },
        data_attr: function(t) {
            return this.namespace.length > 0 ? this.namespace + "-" + t : t
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(t, e, i) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.5.3",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(t) {
                    var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value
                      , s = t.value
                      , n = e === s;
                    return n
                }
            }
        },
        timer: null,
        init: function(t, e, i) {
            this.bindings(e, i)
        },
        events: function(e) {
            function i(t, e) {
                clearTimeout(s.timer),
                s.timer = setTimeout(function() {
                    s.validate([t], e)
                }
                .bind(t), a.timeout)
            }
            var s = this
              , n = s.S(e).attr("novalidate", "novalidate")
              , a = n.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"),
            n.off(".abide").on("submit.fndtn.abide", function(t) {
                var e = /ajax/i.test(s.S(this).attr(s.attr_name()));
                return s.validate(s.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), t, e)
            }).on("validate.fndtn.abide", function(t) {
                "manual" === a.validate_on && s.validate([t.target], t)
            }).on("reset", function(e) {
                return s.reset(t(this), e)
            }).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(t) {
                var e = this.getAttribute("id")
                  , s = n.find('[data-equalto="' + e + '"]');
                a.validate_on_blur && a.validate_on_blur === !0 && i(this, t),
                "undefined" != typeof s.get(0) && s.val().length && i(s.get(0), t),
                "change" === a.validate_on && i(this, t)
            }).on("keydown.fndtn.abide", function(t) {
                var e = this.getAttribute("id")
                  , s = n.find('[data-equalto="' + e + '"]');
                a.live_validate && a.live_validate === !0 && 9 != t.which && i(this, t),
                "undefined" != typeof s.get(0) && s.val().length && i(s.get(0), t),
                "tab" === a.validate_on && 9 === t.which ? i(this, t) : "change" === a.validate_on && i(this, t)
            }).on("focus", function(e) {
                navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && t("html, body").animate({
                    scrollTop: t(e.target).offset().top
                }, 100)
            })
        },
        reset: function(e) {
            var i = this;
            e.removeAttr(i.invalid_attr),
            t("[" + i.invalid_attr + "]", e).removeAttr(i.invalid_attr),
            t("." + i.settings.error_class, e).not("small").removeClass(i.settings.error_class),
            t(":input", e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)
        },
        validate: function(t, e, i) {
            for (var s = this.parse_patterns(t), n = s.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; n > r; r++)
                if (!s[r] && (o || i))
                    return this.settings.focus_on_invalid && t[r].focus(),
                    a.trigger("invalid.fndtn.abide"),
                    this.S(t[r]).closest("form").attr(this.invalid_attr, ""),
                    !1;
            return (o || i) && a.trigger("valid.fndtn.abide"),
            a.removeAttr(this.invalid_attr),
            i ? !1 : !0
        },
        parse_patterns: function(t) {
            for (var e = t.length, i = []; e--; )
                i.push(this.pattern(t[e]));
            return this.check_validation_and_apply_styles(i)
        },
        pattern: function(t) {
            var e = t.getAttribute("type")
              , i = "string" == typeof t.getAttribute("required")
              , s = t.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(s) && s.length > 0 ? [t, this.settings.patterns[s], i] : s.length > 0 ? [t, new RegExp(s), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (s = /.*/,
            [t, s, i])
        },
        check_validation_and_apply_styles: function(e) {
            var i = e.length
              , s = [];
            if (0 == i)
                return s;
            var n = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (n.data(this.attr_name(!0) + "-init") || {}; i--; ) {
                var a, o, r = e[i][0], l = e[i][2], d = r.value.trim(), c = this.S(r).parent(), h = r.getAttribute(this.add_namespace("data-abide-validator")), u = "radio" === r.type, f = "checkbox" === r.type, p = this.S('label[for="' + r.getAttribute("id") + '"]'), g = l ? r.value.length > 0 : !0, _ = [];
                if (r.getAttribute(this.add_namespace("data-equalto")) && (h = "equalTo"),
                a = c.is("label") ? c.parent() : c,
                u && l)
                    _.push(this.valid_radio(r, l));
                else if (f && l)
                    _.push(this.valid_checkbox(r, l));
                else if (h) {
                    for (var m = h.split(" "), v = !0, b = !0, x = 0; x < m.length; x++)
                        o = this.settings.validators[m[x]].apply(this, [r, l, a]),
                        _.push(o),
                        b = o && v,
                        v = o;
                    b ? (this.S(r).removeAttr(this.invalid_attr),
                    a.removeClass("error"),
                    p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"),
                    t(r).triggerHandler("valid")) : (this.S(r).attr(this.invalid_attr, ""),
                    a.addClass("error"),
                    p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"),
                    t(r).triggerHandler("invalid"))
                } else if (_.push(e[i][1].test(d) && g || !l && r.value.length < 1 || t(r).attr("disabled") ? !0 : !1),
                _ = [_.every(function(t) {
                    return t
                })],
                _[0])
                    this.S(r).removeAttr(this.invalid_attr),
                    r.setAttribute("aria-invalid", "false"),
                    r.removeAttribute("aria-describedby"),
                    a.removeClass(this.settings.error_class),
                    p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"),
                    t(r).triggerHandler("valid");
                else {
                    this.S(r).attr(this.invalid_attr, ""),
                    r.setAttribute("aria-invalid", "true");
                    var y = a.find("small." + this.settings.error_class, "span." + this.settings.error_class)
                      , w = y.length > 0 ? y[0].id : "";
                    w.length > 0 && r.setAttribute("aria-describedby", w),
                    a.addClass(this.settings.error_class),
                    p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"),
                    t(r).triggerHandler("invalid")
                }
                s = s.concat(_)
            }
            return s
        },
        valid_checkbox: function(e, i) {
            var e = this.S(e)
              , s = e.is(":checked") || !i || e.get(0).getAttribute("disabled");
            return s ? (e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),
            t(e).triggerHandler("valid")) : (e.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class),
            t(e).triggerHandler("invalid")),
            s
        },
        valid_radio: function(e) {
            for (var i = e.getAttribute("name"), s = this.S(e).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + i + "']"), n = s.length, a = !1, o = !1, r = 0; n > r; r++)
                s[r].getAttribute("disabled") ? (o = !0,
                a = !0) : s[r].checked ? a = !0 : o && (a = !1);
            for (var r = 0; n > r; r++)
                a ? (this.S(s[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),
                t(s[r]).triggerHandler("valid")) : (this.S(s[r]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class),
                t(s[r]).triggerHandler("invalid"));
            return a
        },
        valid_equal: function(t, e, s) {
            var n = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value
              , a = t.value
              , o = n === a;
            return o ? (this.S(t).removeAttr(this.invalid_attr),
            s.removeClass(this.settings.error_class),
            label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(t).attr(this.invalid_attr, ""),
            s.addClass(this.settings.error_class),
            label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)),
            o
        },
        valid_oneof: function(t, e, i, s) {
            var t = this.S(t)
              , n = this.S("[" + this.add_namespace("data-oneof") + "]")
              , a = n.filter(":checked").length > 0;
            if (a ? t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class),
            !s) {
                var o = this;
                n.each(function() {
                    o.valid_oneof.call(o, this, null, null, !0)
                })
            }
            return a
        },
        reflow: function() {
            var t = this
              , e = t.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
            t.S(e).each(function(e, i) {
                t.events(i)
            })
        }
    }
}(jQuery, window, window.document),
function(t, e) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            fade_in_duration: 150,
            fade_out_duration: 150,
            show_on: "all",
            tip_template: function(t, e) {
                return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(t, e, i) {
            Foundation.inherit(this, "random_str"),
            this.bindings(e, i)
        },
        should_show: function(e) {
            var i = t.extend({}, this.settings, this.data_options(e));
            return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(e) {
            function i(t, e, i) {
                t.timer || (i ? (t.timer = null,
                n.showTip(e)) : t.timer = setTimeout(function() {
                    t.timer = null,
                    n.showTip(e)
                }
                .bind(t), n.settings.hover_delay))
            }
            function s(t, e) {
                t.timer && (clearTimeout(t.timer),
                t.timer = null),
                n.hide(e)
            }
            var n = this
              , a = n.S;
            n.create(this.S(e)),
            t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(e) {
                var o = a(this)
                  , r = t.extend({}, n.settings, n.data_options(o))
                  , l = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && a(e.target).is("a"))
                    return !1;
                if (/mouse/i.test(e.type) && n.ie_touch(e))
                    return !1;
                if (o.hasClass("open"))
                    Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(),
                    n.hide(o);
                else {
                    if (r.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type))
                        return;
                    if (!r.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(),
                    a(r.tooltip_class + ".open").hide(),
                    l = !0,
                    t(".open[" + n.attr_name() + "]").length > 0)) {
                        var d = a(t(".open[" + n.attr_name() + "]")[0]);
                        n.hide(d)
                    }
                    /enter|over/i.test(e.type) ? i(this, o) : "mouseout" === e.type || "mouseleave" === e.type ? s(this, o) : i(this, o, !0)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(e) {
                return /mouse/i.test(e.type) && n.ie_touch(e) ? !1 : void (("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? n.convert_to_touch(t(this)) : s(this, t(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                s(this, a(this))
            })
        },
        ie_touch: function() {
            return !1
        },
        showTip: function(t) {
            var e = this.getTip(t);
            return this.should_show(t, e) ? this.show(t) : void 0
        },
        getTip: function(e) {
            var i = this.selector(e)
              , s = t.extend({}, this.settings, this.data_options(e))
              , n = null;
            return i && (n = this.S('span[data-selector="' + i + '"]' + s.tooltip_class)),
            "object" == typeof n ? n : !1
        },
        selector: function(t) {
            var e = t.attr(this.attr_name()) || t.attr("data-selector");
            return "string" != typeof e && (e = this.random_str(6),
            t.attr("data-selector", e).attr("aria-describedby", e)),
            e
        },
        create: function(i) {
            var s = this
              , n = t.extend({}, this.settings, this.data_options(i))
              , a = this.settings.tip_template;
            "string" == typeof n.tip_template && e.hasOwnProperty(n.tip_template) && (a = e[n.tip_template]);
            var o = t(a(this.selector(i), t("<div></div>").html(i.attr("title")).html()))
              , r = this.inheritable_classes(i);
            o.addClass(r).appendTo(n.append_to),
            Modernizr.touch && (o.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"),
            o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                s.hide(i)
            })),
            i.removeAttr("title").attr("title", "")
        },
        reposition: function(e, i, s) {
            var n, a, o, r, l;
            i.css("visibility", "hidden").show(),
            n = e.data("width"),
            a = i.children(".nub"),
            o = a.outerHeight(),
            r = a.outerWidth(),
            i.css(this.small() ? {
                width: "100%"
            } : {
                width: n ? n : "auto"
            }),
            l = function(t, e, i, s, n) {
                return t.css({
                    top: e ? e : "auto",
                    bottom: s ? s : "auto",
                    left: n ? n : "auto",
                    right: i ? i : "auto"
                }).end()
            }
            ;
            var d = e.offset().top
              , c = e.offset().left
              , h = e.outerHeight();
            if (l(i, d + h + 10, "auto", "auto", c),
            this.small())
                l(i, d + h + 10, "auto", "auto", 12.5, t(this.scope).width()),
                i.addClass("tip-override"),
                l(a, -o, "auto", "auto", c);
            else {
                Foundation.rtl && (a.addClass("rtl"),
                c = c + e.outerWidth() - i.outerWidth()),
                l(i, d + h + 10, "auto", "auto", c),
                a.attr("style") && a.removeAttr("style"),
                i.removeClass("tip-override");
                var u = i.outerHeight();
                s && s.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"),
                l(i, d - u, "auto", "auto", c).removeClass("tip-override")) : s && s.indexOf("tip-left") > -1 ? (l(i, d + h / 2 - u / 2, "auto", "auto", c - i.outerWidth() - o).removeClass("tip-override"),
                a.removeClass("rtl")) : s && s.indexOf("tip-right") > -1 && (l(i, d + h / 2 - u / 2, "auto", "auto", c + e.outerWidth() + o).removeClass("tip-override"),
                a.removeClass("rtl"))
            }
            i.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(e) {
            var i = t.extend({}, this.settings, this.data_options(e))
              , s = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes)
              , n = e.attr("class")
              , a = n ? t.map(n.split(" "), function(e) {
                return -1 !== t.inArray(e, s) ? e : void 0
            }).join(" ") : "";
            return t.trim(a)
        },
        convert_to_touch: function(e) {
            var i = this
              , s = i.getTip(e)
              , n = t.extend({}, i.settings, i.data_options(e));
            0 === s.find(".tap-to-close").length && (s.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"),
            s.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                i.hide(e)
            })),
            e.data("tooltip-open-event-type", "touch")
        },
        show: function(t) {
            var e = this.getTip(t);
            "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t),
            this.reposition(t, e, t.attr("class")),
            t.addClass("open"),
            e.fadeIn(this.settings.fade_in_duration)
        },
        hide: function(t) {
            var e = this.getTip(t);
            e.fadeOut(this.settings.fade_out_duration, function() {
                e.find(".tap-to-close").remove(),
                e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),
                t.removeClass("open")
            })
        },
        off: function() {
            var e = this;
            this.S(this.scope).off(".fndtn.tooltip"),
            this.S(this.settings.tooltip_class).each(function(i) {
                t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document);

/* BIOS CORE Scripts (minified) */
$(document).foundation({
    equalizer: {
        act_on_hidden_el: !0,
        equalize_on_stack: !0
    },
    accordion: {
        multi_expand: !0
    }
}),
$(window).load(function() {
    $("body").removeClass("preload"),
    $("a#website-feedback").attr("href", $("a#website-feedback").attr("href") + "&element_5=" + document.URL)
}),
$(".top-bar .nav-links li").length < 1 && $(".header-grid-menu li").length < 1 && ($(".top-bar").remove(),
$("#menu").remove(),
$(".site-header").addClass("no-nav")),
$(".side-nav-label").click(function(e) {
    $(".side-nav").slideToggle()
}),
$("nav .sub-nav li a").click(function(e) {
    $(window).width() < 640 && $(this).parent().parent().slideToggle()
}),
$(document).keyup(function(e) {
    "27" == e.keyCode && 1 == $(".overlay-container.show").length && $(".overlay-container.show").find(".close-button").trigger("click")
}),
$("#menu,#search").keypress(function(e) {
    "0" != e.keyCode && "32" != e.keyCode && "13" != e.keyCode || (e.preventDefault(),
    $(this).trigger("click"))
});
var animating = !1;
function openOverlay(e) {
    var a = $(e).attr("id");
    "undefined" !== a && "search-again" !== a || (a = "search"),
    $(".overlay-container." + a).removeClass("hide"),
    $(".overlay-container." + a).width(),
    $(".overlay-container." + a).addClass("show"),
    $("body").css("overflow", "hidden").css("position", "fixed"),
    "search" === a ? $("#gsc-i-id1").focus() : ($(".overlay-container." + a + " .close-button").focus(),
    $("#mobile-menu .current").hasClass("open") || $("#mobile-menu .current").find("button:first").trigger("click")),
    $(".overlay-container." + a).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
        animating = !1,
        $("header,main,footer,#banner,#banner-video").addClass("hide"),
        $(".overlay-container." + a).unbind()
    })
}
$("#menu, #menu + span, #search, #search-again").on("click", function(e) {
    e.preventDefault(),
    animating || (animating = !0,
    openOverlay($(this)))
}),
$(".close-button").keyup(function(e) {
    "0" != e.keyCode && "32" != e.keyCode && "13" != e.keyCode || (e.preventDefault(),
    $(this).trigger("click")),
    "40" != e.keyCode && "39" != e.keyCode || (e.preventDefault(),
    $(this).closest(".row").next().find("a:first").focus()),
    "38" != e.keyCode && "37" != e.keyCode || (e.preventDefault(),
    $(this).closest(".row").next().find("a:last").focus())
}),
$(".close-button").click(function(e, a) {
    if (e.preventDefault(),
    e.stopImmediatePropagation(),
    animating)
        return !1;
    animating = !0,
    $("header,main,footer,#banner,#banner-video").removeClass("hide");
    var t = $(this).closest(".overlay-container");
    $(t).removeClass("show"),
    $("body").css("overflow-y", "auto").css("position", "static"),
    (void 0 !== a && $(t).hasClass("menu") ? $("#mega-menu").find("a:first") : $(t).hasClass("search") ? $("#search") : $("#menu")).focus(),
    setTimeout(function() {
        $(t).addClass("hide"),
        animating = !1,
        $(t).unbind()
    }, 500)
}),
$(document).on("click", function(e) {
    $("#main-menu .has-dropdown").removeClass("open").removeClass("hover"),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"),
    biosubnav.close()
}),
$("#main-menu .nav-links > li").on("keydown", function(e) {
    e.stopImmediatePropagation(),
    "37" != e.keyCode && "38" != e.keyCode && "39" != e.keyCode && "40" != e.keyCode && "32" != e.keyCode || e.preventDefault(),
    "27" == e.keyCode && 0 < $("#main-menu .has-dropdown.open").length && ($("#main-menu .has-dropdown.open > button").trigger("click").focus(),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"))
}),
$("#main-menu .top-bar-section a:first").on("keyup", function(e) {
    "37" == e.keyCode && $("#main-menu .nav-links > li:last button,#main-menu .nav-links > li:last a").focus(),
    "39" == e.keyCode && $("#main-menu .nav-links > li:first button,#main-menu .nav-links > li:first a").focus()
}),
$("#main-menu .nav-links > li, #main-menu .nav-links > li").on("keyup", function(e) {
    var a;
    e.stopImmediatePropagation(),
    "37" == e.keyCode && (a = !1,
    $(this).hasClass("open") && (a = !0),
    $("#main-menu .has-dropdown").removeClass("hover").removeClass("open"),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"),
    0 == $(this).prev().find("button:first,a:first").focus().length && $("#main-menu .nav-links > li:last button,#main-menu .nav-links > li:last a").focus() && $("#main-menu .top-bar-section a:first").focus(),
    a && $(this).prev().find("button:first").trigger("click", [{
        focusFirst: !1
    }])),
    "39" == e.keyCode && (a = !1,
    $(this).hasClass("open") && (a = !0),
    $("#main-menu .has-dropdown").removeClass("hover").removeClass("open"),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"),
    0 == $(this).next().find("button:first,a:first").focus().length && $("#main-menu .nav-links > li:first button,#main-menu .nav-links > li:first a").focus() && $("#main-menu .top-bar-section a:first").focus(),
    a && $(this).next().find("button:first").trigger("click", [{
        focusFirst: !1
    }])),
    "40" != e.keyCode && "32" != e.keyCode || ($(this).hasClass("open") ? $("#main-menu .open .dropdown  a:first ").focus() : $(this).trigger("click"))
}),
$("#main-menu .nav-links > li > a").on("focus", function(e) {
    e.stopImmediatePropagation(),
    $(this).parent().hasClass("open") || ($("#main-menu .has-dropdown").removeClass("open").removeClass("hover"),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"))
}),
$("#main-menu .dropdown a").on("keyup", function(e) {
    e.stopImmediatePropagation(),
    "39" != e.keyCode && "40" != e.keyCode || $(this).parent().next("li").find("a:first").focus().length || $(this).closest(".columns").next().find("a:first").focus().length || $("#main-menu .has-dropdown.open .dropdown a:first").focus(),
    "37" != e.keyCode && "38" != e.keyCode || $(this).parent().prev("li").find("a:last").focus().length || $(this).closest(".columns").prev().find("a:last").focus().length || $("#main-menu .has-dropdown.open .dropdown a:last").focus()
}),
$("#main-menu .dropdown a:last").on("keydown", function(e) {
    "9" == e.keyCode && ($("#main-menu .has-dropdown ").removeClass("open").removeClass("hover"),
    $("#main-menu .has-dropdown button").attr("aria-expanded", "false"))
}),
$("#main-menu .has-dropdown").on("click", function(e, a) {
    e.stopImmediatePropagation();
    var t, n = $(this)[0];
    $("#main-menu .has-dropdown").each(function() {
        n !== $(this)[0] && $(this).hasClass("open") && $(this).removeClass("open")
    }),
    $(this).toggleClass("open"),
    $(this).hasClass("open") || (t = $(this),
    setTimeout(function() {
        $(t).removeClass("hover")
    }, 100)),
    $(this).hasClass("open") && "false" == $(this).find("button").attr("aria-expanded") && $(this).find("button").attr("aria-expanded", "true")
}),
$("#mobile-menu .mobile-dropdown .dropdown-items").slideUp(),
$("#mobile-menu .mobile-dropdown > button").on("click", function(e) {
    e.preventDefault(),
    e.stopImmediatePropagation();
    var a = $(this);
    "false" == $(this).attr("aria-expanded") ? ($("#mobile-menu .mobile-dropdown").removeClass("open"),
    $("#mobile-menu .mobile-dropdown > button").attr("aria-expanded", "false"),
    $("#mobile-menu .mobile-dropdown .dropdown-items").slideUp(),
    $(this).parent().addClass("open"),
    $(this).attr("aria-expanded", "true"),
    $(this).next("ul").slideDown(300)) : ($(this).attr("aria-expanded", "false"),
    $(this).next("ul").slideUp(300).promise().done(function() {
        a.parent().removeClass("open")
    }))
}),
$("#mobile-menu > ul > li > button, #mobile-menu > ul > li > a").on("keyup", function(e) {
    e.preventDefault();
    $(this);
    "32" == e.keyCode && $(this).trigger("click")
}),
$("#mobile-menu .dropdown-items a").on("keyup", function(e) {
    e.preventDefault()
}),
$(document).on("click", function(e) {
    $("#portals").hasClass("open") && ($("#portals").removeClass("open").removeClass("hover"),
    $("#portals > a").attr("aria-expanded", "false"))
}),
$("#search,.global-header a:first").on("focusin", function(e) {
    $("#portals").hasClass("open") && ($("#portals").removeClass("open").removeClass("hover"),
    $("#portals > a").attr("aria-expanded", "false"))
}),
$("#portals > a").on("focusin", function(e) {
    e.stopImmediatePropagation(),
    $(this).parent().hasClass("open") && $("#portals > a").trigger("click")
}),
$("#portals").on("keydown", function(e) {
    e.stopImmediatePropagation(),
    "40" != e.keyCode || $("#portals").hasClass("open") ? "40" == e.keyCode && $("#portals").hasClass("open") ? $("#portals-dropdown a[role='menuitem']:first").focus() : "32" == e.keyCode && (e.preventDefault(),
    $("#portals > a").trigger("click")) : (e.preventDefault(),
    $("#portals > a").trigger("click"))
}),
$("#portals-dropdown a").on("keydown", function(e) {
    e.stopImmediatePropagation(),
    "40" == e.keyCode && (e.preventDefault(),
    0 == $(this).parent().next().find("a[role='menuitem']").focus().length && $("#portals-dropdown a[role='menuitem']:first").focus()),
    "38" == e.keyCode && (e.preventDefault(),
    0 == $(this).parent().prev().find("a[role='menuitem']").focus().length && $("#portals-dropdown a[role='menuitem']:last").focus()),
    "36" == e.keyCode && (e.preventDefault(),
    $("#portals-dropdown a[role='menuitem']:first").focus()),
    "35" == e.keyCode && (e.preventDefault(),
    $("#portals-dropdown a[role='menuitem']:last").focus()),
    "9" == e.keyCode && 0 == $(this).parent().next().find("a[role='menuitem']").length && ($("#portals > a").attr("aria-expanded", "false"),
    $("#portals").removeClass("open")),
    "27" == e.keyCode && ($("#portals").removeClass("hover").removeClass("open"),
    $("#portals > a").attr("aria-expanded", "false").focus())
}),
$("#portals > a").on("click", function(e) {
    var a = $(this);
    a.parent().hasClass("open") ? (a.parent().removeClass("open"),
    a.attr("aria-expanded", "false"),
    $("#portals > a").focus()) : (a.parent().addClass("open"),
    setTimeout(function() {
        $("#portals-dropdown a[role='menuitem']:first").focus(),
        a.attr("aria-expanded", "true")
    }, 50))
}),
$(window).on("resize", Foundation.utils.throttle(function(e) {
    var a;
    Foundation.utils.is_large_up() && 1 == $(".overlay-container.show").length && ($(".overlay-container.show").find(".close-button").trigger("click", [{
        noFocus: !0
    }]),
    void 0 !== (a = $("#banner-video").data("vide")) && a.resize())
}, 100));
var GSEReady = function() {
    "complete" == document.readyState ? renderSearch() : google.setOnLoadCallback(function() {
        renderSearch()
    }, !0)
}
  , renderSearch = function() {
    $(".overlay-container td.gsc-input").parent().prepend($(".overlay-container td.gsc-input")),
    $("input.gsc-input").attr("placeholder", "Search").attr("aria-label", "Search"),
    $(".gsc-search-button input").attr("src", "../search-dark.png").attr("alt", "Submit search").removeAttr("title"),
    $("#gsc-i-id1").removeAttr("title"),
    $(".gsc-branding").remove(),
    $("table").removeAttr("cellspacing").removeAttr("cellpadding"),
    $(".overlay-container table").attr("role", "presentation"),
    $(".gsst_a").attr("aria-label", "Clear search").attr("role", "button")
};
window.__gcse = {
    callback: GSEReady
},
$(function() {
    $("a[href*=\\#]:not([href=\\#]):not([href*=\\#panel])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
                return $("html,body").animate({
                    scrollTop: e.offset().top
                }, 1e3),
                $(this).hasClass("skip-main-content") && $("#main-content").attr("tabindex", -1).focus(),
                !1
        }
    })
}),
$(".search-results-page").on("DOMNodeInserted", function(e) {
    var a;
    $(e.target).hasClass("gsc-result") && ($($(e.target)).find("img").attr("role", "presentation").attr("alt", ""),
    a = $($(e.target)).find(".gs-snippet").text(),
    $($(e.target)).find(".gs-snippet").html("" + a),
    a = $($(e.target)).find(".gsc-url-top .gs-visibleUrl-long").text(),
    $($(e.target)).find(".gsc-url-top .gs-visibleUrl-long").html("" + a),
    a = $($(e.target)).find(".gsc-thumbnail-inside a.gs-title").text(),
    $($(e.target)).find(".gsc-thumbnail-inside a.gs-title").html("" + a))
}),
$(".search-wrapper form").on("submit", function(e) {
    e.preventDefault(),
    window.location.href = $("#search-box").closest("form").attr("action") + "?q=" + $("#search-box").val()
});
var biosubnav = {
    max: 0,
    current: 0,
    nav: 0,
    navOffsetTop: 0,
    init: function() {
        if (3 < $(".bio-sub-nav > ul > li").length) {
            if ($(".bio-sub-nav-wrapper, #bio-sub-nav").removeClass("hide"),
            $("#more").width(76),
            this.hideItems(),
            $(window).on("resize", Foundation.utils.throttle(function(e) {
                biosubnav.resize()
            }, 600)),
            $(".bio-sub-nav-button").click(function() {
                $(".bio-sub-nav > ul").slideToggle(250),
                $(".bio-sub-nav-button .icon").toggleClass("close")
            }),
            $("#bio-sub-nav").on("keydown", function(e) {
                "27" == e.keyCode && 0 < $("#bio-sub-nav >nav >ul >li.open").length && (0 < $("#bio-sub-nav a.active").length ? $("#bio-sub-nav a.active").last() : $("#bio-sub-nav >nav >ul >li.open")).focus().trigger("click")
            }),
            $(".bio-sub-nav > ul > li > a.has-dropdown").click(function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation(),
                $(this).parent().hasClass("open") ? $(this).parent().removeClass("open") : ($(".bio-sub-nav .open").removeClass("open"),
                $(this).parent().addClass("open")),
                $("#bio-sub-nav a").removeClass("active open")
            }),
            $("#bio-sub-nav ul li ul li:last-child a").on("keydown", function(e) {
                "9" == e.keyCode && $(this).closest(".open").removeClass("open").prev().removeClass("active")
            }),
            $("#bio-sub-nav ul").on("click", "ul a", function(e) {
                e.stopPropagation(),
                $(this).hasClass("has-dropdown") && (e.preventDefault(),
                $(this).parent().toggleClass("open"),
                $(this).toggleClass("active").next().toggleClass("open")),
                $(this).parent().siblings().children("a").removeClass("active").next().removeClass("open")
            }),
            this.nav = document.getElementById("bio-sub-nav"),
            this.navPosition = document.getElementById("bio-sub-nav").offsetTop,
            this.navHeight = document.getElementById("bio-sub-nav").offsetHeight - 16,
            "undefined" != typeof biosubnavsticky && ($("#bio-sub-nav").addClass("ready"),
            addEventListener("scroll", () => {
                biosubnav.toggleSticky()
            }
            ),
            !document.querySelector(".bio-sub-nav-wrapper"))) {
                let e = document.createElement("div");
                e.classList.add("bio-sub-nav-wrapper"),
                this.nav.parentNode.insertBefore(e, this.nav),
                e.appendChild(this.nav)
            }
        } else
            $(".bio-sub-nav-wrapper").removeClass("hide-for-large-up")
    },
    toggleSticky: function() {
        $(document).foundation({
            "magellan-expedition": {
                fixed_top: 0
            }
        }),
        Foundation.utils.is_large_up() && (window.scrollY >= this.navPosition && "undefined" != typeof biosubnavsticky ? (this.nav.classList.add("sticky"),
        $(document).foundation({
            "magellan-expedition": {
                fixed_top: this.navHeight
            }
        })) : this.nav.classList.remove("sticky"))
    },
    hideItems: function() {
        this.calculate(),
        $("#bio-sub-nav nav").removeClass("loaded"),
        Foundation.utils.is_large_up() ? ($(".bio-sub-nav-wrapper, #bio-sub-nav").removeClass("hide"),
        $("#bio-sub-nav a").removeClass("active open"),
        $("#bio-sub-nav > nav > ul").show(),
        $(".bio-sub-nav > ul > li ").each(function() {
            biosubnav.current += $(this).width(),
            biosubnav.current >= biosubnav.max && ($(this).attr("id") || $(this).addClass("hide"))
        }),
        this.showMore()) : $("#bio-sub-nav > nav > ul ").hide(),
        $("#bio-sub-nav nav").addClass("loaded")
    },
    calculate: function() {
        this.max = $(".bio-sub-nav").width(),
        this.current = $("#more").width()
    },
    resize: function() {
        $("#more").width(76),
        $(".bio-sub-nav-button .icon").removeClass("close"),
        $("#more").hide(),
        this.hideItems(),
        biosubnav.toggleSticky()
    },
    showMore: function() {
        Foundation.utils.is_large_up() ? 1 <= $(".bio-sub-nav > ul > li[class*=hide]").length && ($("#more ul").empty(),
        $(".bio-sub-nav > ul > li[class*=hide]").each(function(e, a) {
            $(a).clone().appendTo("#more > ul").removeClass("hide")
        }),
        $("#more").show()) : $("#more").hide()
    },
    close: function() {
        $("#bio-sub-nav .open").removeClass("open"),
        $("#bio-sub-nav .active").removeClass("active")
    }
};
biosubnav.init(),
$("#page-schema").length && (document.documentElement.lang = JSON.parse($("#page-schema").text())["@graph"][1].inLanguage),
$('[class*="energize-media"]').each(function() {
    var e = this.className.split(" ")
      , a = [];
    e.forEach(function(e) {
        e.startsWith("energize-media--") && (a = e.split("--"))
    }),
    a.shift(),
    $(this).removeClass().wrap("<div class='energized-media " + a.join(" ") + "'></div>")
});
var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function videoSwapSource(e) {
    void 0 !== $(e).attr("data-src") && ($(e).attr("src", $(e).data("src")).removeAttr("data-src"),
    $(e).parent().next().find("span.fa").removeClass("fa-spin fa-circle-o-notch").addClass("fa fa-play"))
}
function toggleVideoState(e) {
    e.isIntersecting ? reducedMotion.matches || $(e.target).data("pause") || buttonPlay(e.target) : buttonPause(e.target)
}
function videoStart(e) {
    void 0 === e || void 0 !== (e = e.play()) && e.catch(function() {})
}
function buttonPlay(e) {
    var a = $(e).parent().next().find(".video-control");
    a.attr("aria-pressed", "false").attr("aria-label", "Video is playing. Select to Pause Video."),
    a.find("span").removeClass().addClass("fa fa-pause"),
    videoStart(e)
}
function buttonPause(e) {
    var a = $(e).parent().next().find(".video-control");
    a.attr("aria-pressed", "true").attr("aria-label", "Video is paused. Select to Play Video."),
    a.find("span").removeClass().addClass("fa fa-play"),
    e.pause()
}
function expandAccordionTabs(e) {
    accordion = e.target.closest(".content-block"),
    e.stopPropagation(),
    console.log(e);
    let a = e.target.closest("a");
    e = accordion.querySelectorAll(".accordion .accordion-navigation");
    const t = a.firstElementChild;
    console.log(a),
    "open" === a.dataset.status ? (e.forEach(function(e) {
        e.classList.add("active"),
        e.firstElementChild.setAttribute("aria-expanded", !0),
        e.lastElementChild.classList.add("active")
    }),
    a.firstChild.textContent = "Collapse all",
    a.dataset.status = "close",
    t.classList.add("expanded")) : (e.forEach(function(e) {
        e.classList.remove("active"),
        e.firstElementChild.setAttribute("aria-expanded", !1),
        e.lastElementChild.classList.remove("active")
    }),
    a.dataset.status = "open",
    a.firstChild.textContent = "Expand all",
    t.classList.remove("expanded"))
}
$(document).ready(function() {
    var a = new IntersectionObserver(function(e, a) {
        e.forEach(e => {
            e.isIntersecting && (videoSwapSource(e.target),
            a.unobserve(e.target)),
            toggleVideoState(e)
        }
        )
    }
    ,{})
      , t = new IntersectionObserver(function(e) {
        e.forEach(e => {
            toggleVideoState(e)
        }
        )
    }
    ,{
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    });
    document.querySelectorAll(".content-block .video-wrapper video, #banner-video video").forEach(e => {
        a.observe(e),
        t.observe(e)
    }
    )
}),
$("#videoBannerPause, .multimedia-bg .video-control").on("click", function(e) {
    var a = $(this).closest(".banner-flex,.multimedia-bg").find("video");
    a[0].paused ? (buttonPlay(a[0]),
    $(a).data("pause", !1)) : (buttonPause(a[0]),
    $(a).data("pause", !0))
});
const newsFeedLinks = document.querySelectorAll(".cards.news a");
newsFeedLinks.forEach(e => {
    e.href.includes(window.location.hostname) && (e.target = "_self")
}
);

function znReady(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
window.znStorage = {
    _storage: new WeakMap,
    put: function(e, t, n) {
        this._storage.has(e) || this._storage.set(e, new Map), this._storage.get(e).set(t, n)
    },
    get: function(e, t) {
        return this._storage.get(e).get(t)
    },
    has: function(e, t) {
        return this._storage.has(e) && this._storage.get(e).has(t)
    },
    remove: function(e, t) {
        var n = this._storage.get(e).delete(t);
        return 0 === !this._storage.get(e).size && this._storage.delete(e), n
    }
};
(function(e, t) {
    e.znAnimate = t(e)
})(window, (function(e) {
    var t, n = {},
        i = function(e) {},
        a = function(e) {
            return null === e.offsetParent
        },
        o = function(e, t) {
            if (a(e)) return !1;
            var n = e.getBoundingClientRect();
            return n.bottom >= t.t && n.top <= t.b
        };
    return n.init = function(a) {
        a = a || {};
        var o = a.offset || 0,
            r = function(e, t) {
                return parseInt(e || t, 10)
            };
        t = {
            t: r(a.offsetTop, o),
            b: r(a.offsetBottom, o)
        }, i = a.callback || i, n.update(), document.addEventListener ? (e.addEventListener("scroll", n.update, !1), e.addEventListener("load", n.update, !1)) : (e.attachEvent("onscroll", n.update), e.attachEvent("onload", n.update))
    }, n.update = function() {
        for (var n, a = document.querySelectorAll('[data-scroll-animation]:not([data-scroll-animation=""]):not(.zn-animate)'), r = a.length, s = {
                t: 0 - t.t,
                b: (e.innerHeight || document.documentElement.clientHeight) + t.b
            }, l = 0; l < r; l++) n = a[l], o(n, s) && (n.classList.add("zn-animate"), i(n))
    }, n.detach = function() {
        document.removeEventListener ? e.removeEventListener("scroll", n.update) : e.detachEvent("onscroll", n.update)
    }, n
}));
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
    var t = this;
    do {
        if (Element.prototype.matches.call(t, e)) return t;
        t = t.parentElement || t.parentNode
    } while (null !== t && 1 === t.nodeType);
    return null
});
window.znRespondToVisibility = function(e, t) {
    var n = {
            root: null,
            threshold: .01
        },
        i = new IntersectionObserver((function(e, n) {
            var i = e.map((function(e) {
                    return e.isIntersecting
                })),
                a = i.includes(!0);
            t(a)
        }), n);
    i.observe(e)
};
znReady(function() {
    window.znAnimate.init({
        offset: 0
    });
    (function() {
        (function() {
            var e, t = "znid-102814219905",
                n = document.getElementById(t),
                i = n.querySelector(".zn-countdown > .zn-countdown-wrapper"),
                a = i.querySelector(".zn-day-number"),
                o = i.querySelector(".zn-hour-number"),
                r = i.querySelector(".zn-minute-number"),
                s = i.querySelector(".zn-second-number"),
                l = null != document.querySelector(".zn-container.editing"),
                c = "true",
                p = "false",
                d = "false",
                u = "datetime",
                g = "",
                m = "3",
                h = "0",
                b = "0",
                x = "2022-04-15 12:00 AM +07:00",
                f = "datetime",
                v = "03:00 PM",
                y = "true" == c,
                z = "true" == p,
                w = "true" == d,
                _ = 86400,
                k = 3600,
                E = 60;
            function C() {
                try {
                    var t = parseInt(m) * _ + parseInt(h) * k + parseInt(b) * E;
                    e = Date.now() + 1e3 * t
                } catch (n) {}
            }
            function S(e) {
                function t(e, t) {
                    var n = e.split(":");
                    return 2 == n.length && n.push("00"), "PM" == t && (n[0] = (+n[0] + 12).toString()), n.join(":")
                }
                var n = e.split(" "),
                    i = t(n[1], n[2]);
                return "".concat(n[0], "T").concat(i).concat(n[3])
            }
            function R() {
                var t = 0,
                    n = 0,
                    c = 0,
                    p = 0;
                switch (u) {
                    case "datetime":
                    case "fixed":
                        var d = Date.parse(S(x)),
                            m = "fixed" == f;
                        if (m && (d = e), !d) break;
                        var h = Date.now(),
                            b = parseInt((d - h) / 1e3);
                        if (b <= 0) break;
                        t = parseInt(b / _), n = parseInt(b % _ / k), c = parseInt(b % k / E), p = b % E;
                        break;
                    case "daily":
                        try {
                            h = new Date;
                            var R = h.getHours() * k + h.getMinutes() * E + h.getSeconds(),
                                L = v.split(" ")[0],
                                O = v.toUpperCase().indexOf("PM") > -1,
                                I = parseInt(L.split(":")[0]);
                            O || 12 != I ? O && 12 != I && (I += 12) : I = 24;
                            var F = parseInt(L.split(":")[1]),
                                j = I * k + F * E;
                            b = j - R;
                            if (b <= 0) break;
                            n = parseInt(b / k), c = parseInt(b % k / E), p = b % E
                        } catch (A) {}
                        break
                }
                0 == t && 0 == n && 0 == c && 0 == p && ("fixed" == u && z ? C() : !l && y && i.classList.add("hide"), !l && w && (window.location.href = g)), a.innerHTML = t, o.innerHTML = n, r.innerHTML = c, s.innerHTML = p
            }
            C(), R();
            var L = "znCountDown-" + t;
            window[L] && clearInterval(window[L]), window[L] = setInterval(R, 1e3)
        })();
    })();
    (function() {
        (function() {
            for (var e = document.getElementById("znid-673399074364"), t = e.querySelectorAll(":scope > .zn-element > .zn-accordion > .zn-accordion-section > .zn-accordion-handle"), n = "multiple", i = 0; i < t.length; i++) t[i].addEventListener("click", (function() {
                var e = this.nextElementSibling;
                if (this.classList.contains("active")) this.classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0;
                else if (this.classList.add("active"), e.style.maxHeight = null, e.style.paddingTop = null, e.style.paddingBottom = null, "single" == n)
                    for (var i = 0; i < t.length; i++)
                        if (t[i] != this) {
                            e = t[i].nextElementSibling;
                            t[i].classList.remove("active"), e.style.maxHeight = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0
                        }
            }))
        })();
    })();
    (function() {
        (function() {
            var e = document.getElementsByTagName("head")[0];
            function t() {
                e.querySelectorAll("script").forEach((function(t) {
                    t.hasAttribute("src") && t.getAttribute("src").includes("https://connect.facebook.net/en_US/sdk.js") && e.removeChild(t)
                })), e.querySelectorAll("style").forEach((function(t) {
                    t.hasAttribute("data-fbcssmodules") && e.removeChild(t)
                }))
            }
            function n() {
                window.FB = null;
                var t = document.createElement("script");
                t.setAttribute("async", ""), t.setAttribute("defer", ""), t.setAttribute("crossorigin", "anonymous"), t.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0", e.appendChild(t)
            }
            t(), n()
        })();
    })();
    (function() {
        var e = "",
            t = null != document.querySelector(".zn-container.editing");
        e && !t && (window.fbAsyncInit = function() {
            FB.init({
                appId: "912333495590130",
                autoLogAppEvents: !0,
                xfbml: !0,
                version: "v2.11"
            })
        }, function(e, t, n) {
            var i, a = e.getElementsByTagName(t)[0];
            e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(i, a))
        }(document, "script", "facebook-jssdk"))
    })();
    (function() {
        var e = null != document.querySelector(".zn-container.editing"),
            t = document.body;
        p();
        var n = "false",
            i = "true",
            a = "false",
            o = "true",
            r = "false",
            s = "true" == n && (e || "true" != r || !localStorage.znHideAnnouncementBar);
        if (s) {
            var l = document.createElement("div");
            if (l.classList.add("zn-announcement-bar"), "true" == o && l.classList.add("pad-right"), l.innerHTML = '\n        <div class="zn-announcement-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n        '.concat("true" == i ? '\n          <a class="zn-announcement-button" href="" target="'.concat("true" == a ? "_blank" : "", '">\n            <button>Click me</button>\n          </a>\n        ') : "", "\n        ").concat("true" == o ? '<i class="material-icons-outlined zn-annoucement-close">close</i>' : "", "\n      "), t.prepend(l), !e && "true" == o) {
                var c = l.querySelector(".zn-annoucement-close");
                c.addEventListener("click", (function() {
                    p(), "true" == r && (localStorage.znHideAnnouncementBar = !0)
                }))
            }
        }
        function p() {
            var e = t.querySelector(".zn-announcement-bar");
            e && e.parentNode.removeChild(e)
        }
    })();
});
! function() {
    let e = !1,
        t = !1,
        n = !1;
    try {
        e = !window.ReactNativeWebView && window.self === window.top, t = window.self?.location?.host && (window.self.location.host.includes(".netlify.app") || window.self.location.host.includes(".public.builtwithrocket.new")), n = navigator?.userAgent?.includes("Puppeteer")
    } catch (e) {}
    let o = "",
        i = "";
    try {
        const e = function() {
                const e = document.getElementsByTagName("script");
                for (let t of e)
                    if (t.src.includes("rocket-web.js")) return t.src;
                return null
            }(),
            t = new URL(e),
            n = new URLSearchParams(t?.search);
        o = n.get("_cfg") || "", i = n.get("_be") || ""
    } catch (e) {}

    function a(t) {
        e || n || fetch(`${o}/log-error`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        }).catch(e => {})
    }

    function r(t) {
        e || n || fetch(`${o}/logs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        }).catch(e => {})
    }

    function s(o) {
        e && t && !n && function(e, t) {
            i && fetch(`${i}/preview/v1/track`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            }).then(e => {
                if (!e.ok) throw new Error("Bad response");
                return e.json()
            }).then(e => {
                t(e)
            }).catch(e => {})
        }({
            event: "Public Preview Viewed",
            baseUrl: window.location.origin,
            previewUrl: window.location.href
        }, e => {
            "function" == typeof o && e?.isPublic && o()
        })
    }

    function d() {
        e || window.parent.postMessage({
            type: "WEB_IFRAME_PATHNAME_CHANGE",
            pathname: window.location.pathname
        }, "*")
    }

    function c() {
        e || window.parent.postMessage({
            type: "WEB_IFRAME_DOCUMENT_LOADED"
        }, "*")
    }

    function l() {
        try {
            const e = document.createElement("link");
            e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap", document.head.appendChild(e);
            const t = document.createElement("div");
            t.style.position = "fixed", t.style.right = "0", t.style.bottom = "0", t.style.zIndex = "100000", t.style.transform = "scale(0.7)", t.style.display = "block", t.style.cursor = "pointer", t.onclick = () => window.open("https://www.rocket.new", "_blank"), t.innerHTML = '\n          <div style="\n            border-radius: 6px;\n            background: #fff;\n            box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.20);\n            display: flex;\n            padding: 4px;\n            justify-content: center;\n            align-items: center;\n            gap: 8px;\n            flex-direction: column;\n          ">\n            <div style="\n              border: 2px solid #000;\n              border-radius: 6px;\n              display: flex;\n              flex-direction: column;\n              padding: 10px;\n            ">\n              <img src="https://strapi.rocket.new/uploads/rocket_mono_e0dedcb10b.png" style="\n                width: 30px;\n                margin: auto auto 8px auto;\n              ">\n              <h3 style="\n                text-align: center;\n                font-family: Inter, sans-serif;\n                font-size: 12px;\n                font-style: normal;\n                font-weight: 500;\n                line-height: 20px;\n                color: #777777;\n                margin: 0;\n              ">Built with</h3>\n              <h3 style="\n                font-family: Inter, sans-serif;\n                font-size: 14px;\n                font-style: normal;\n                font-weight: 500;\n                line-height: 20px;\n                color: #000;\n                margin-top: -4px;\n                margin-bottom: 0;\n              ">Rocket.new</h3>\n            </div>\n          </div>\n        ', document.body.appendChild(t)
        } catch (e) {}
    }
    if (e || window.parent.postMessage({
            type: "WEB_IFRAME_LOADING"
        }, "*"), d(), document.addEventListener("DOMContentLoaded", () => {
            c(), s(l)
        }), document.addEventListener("readystatechange", () => {
            "complete" === document.readyState && c()
        }), window.history && window.history.pushState) {
        const e = window.history.pushState;
        window.history.pushState = function() {
            e.apply(this, arguments), d(), s()
        };
        const t = window.history.replaceState;
        window.history.replaceState = function() {
            t.apply(this, arguments), d(), s()
        }, window.addEventListener("popstate", function() {
            d(), s()
        })
    }
    window.addEventListener("hashchange", function() {
        d(), s()
    }), window.__COMPONENT_ERROR__ = function(e, t) {
        let n = e?.stack || null,
            o = !1;
        n && n.includes(e.message) && (o = !0);
        let i = n ? o ? n : `${e.message}\n\n${n}` : e.message;
        t.componentStack && (i += t.componentStack), a({
            errorType: "RUNTIME_ERROR",
            message: i,
            timestamp: (new Date).toISOString()
        })
    }, window.onerror = function(e, t, n, o, i) {
        const s = i?.stack || null,
            d = s ? `${e}\n\n${s}` : e;
        r({
            type: "CONSOLE_ERROR",
            message: d,
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), a({
            errorType: "RUNTIME_ERROR",
            message: d,
            timestamp: (new Date).toISOString()
        })
    }, window.onunhandledrejection = function(e) {
        const t = e.reason?.message || String(e.reason),
            n = e.reason?.stack || null,
            o = n ? `${t}\n\n${n}` : t;
        r({
            type: "CONSOLE_ERROR",
            message: o,
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), a({
            errorType: "RUNTIME_ERROR",
            message: o,
            timestamp: (new Date).toISOString()
        })
    };
    const u = console.error,
        p = console.log,
        m = console.warn,
        h = console.info,
        g = console.debug;

    function f(e) {
        return e?.map(e => {
            if (e instanceof Error) {
                const t = e?.stack || null;
                return t ? `${e.message}\n\n${t}` : e.message
            }
            return e instanceof HTMLElement ? e.outerHTML : "object" == typeof e && null !== e ? JSON.stringify(e, null, 2) : String(e)
        }).join(" ")
    }
    console.error = function(...e) {
        setTimeout(() => {
            const t = e.some(e => !0 === e.__ErrorBoundary);
            r({
                type: "CONSOLE_ERROR",
                message: f(e),
                timestamp: (new Date).toISOString(),
                url: window.location.href
            }), t || a({
                errorType: "RUNTIME_ERROR",
                message: f(e),
                timestamp: (new Date).toISOString()
            }), u.apply(console, e)
        }, 100)
    }, console.log = function(...e) {
        r({
            type: "CONSOLE_LOG",
            message: f(e),
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), p.apply(console, e)
    }, console.warn = function(...e) {
        r({
            type: "CONSOLE_WARN",
            message: f(e),
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), m.apply(console, e)
    }, console.info = function(...e) {
        r({
            type: "CONSOLE_INFO",
            message: f(e),
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), h.apply(console, e)
    }, console.debug = function(...e) {
        r({
            type: "CONSOLE_DEBUG",
            message: f(e),
            timestamp: (new Date).toISOString(),
            url: window.location.href
        }), g.apply(console, e)
    };
    let w = null,
        E = null;
    const y = {
        MARGIN_TOP: "margin-top",
        MARGIN_RIGHT: "margin-right",
        MARGIN_BOTTOM: "margin-bottom",
        MARGIN_LEFT: "margin-left",
        PADDING_TOP: "padding-top",
        PADDING_RIGHT: "padding-right",
        PADDING_BOTTOM: "padding-bottom",
        PADDING_LEFT: "padding-left",
        BACKGROUND_COLOR: "background-color",
        BORDER_RADIUS_TOP_LEFT: "border-top-left-radius",
        BORDER_RADIUS_TOP_RIGHT: "border-top-right-radius",
        BORDER_RADIUS_BOTTOM_RIGHT: "border-bottom-right-radius",
        BORDER_RADIUS_BOTTOM_LEFT: "border-bottom-left-radius",
        FONT_SIZE: "font-size",
        FONT_WEIGHT: "font-weight",
        TEXT_ALIGN: "text-align",
        TEXT_COLOR: "color",
        LINE_HEIGHT: "line-height",
        TEXT_TRANSFORM: "text-transform",
        LETTER_SPACING: "letter-spacing",
        BORDER_STYLE: "border-style",
        BORDER_COLOR: "border-color",
        BORDER_RIGHT_WIDTH: "border-right-width",
        BORDER_BOTTOM_WIDTH: "border-bottom-width",
        BORDER_LEFT_WIDTH: "border-left-width",
        BORDER_TOP_WIDTH: "border-top-width",
        TEXT_CONTENT: "text-content",
        OBJECT_FIT: "object-fit",
        IMAGE_SRC: "image-src",
        DISPLAY: "display",
        FLEX_DIRECTION: "flex-direction",
        JUSTIFY_CONTENT: "justify-content",
        ALIGN_ITEMS: "align-items",
        GRID_TEMPLATE_COLUMNS: "grid-template-columns",
        GRID_TEMPLATE_ROWS: "grid-template-rows",
        GRID_COLUMN_GAP: "grid-column-gap",
        GRID_ROW_GAP: "grid-row-gap",
        PLACE_ITEMS: "place-items",
        FLEX_GAP: "gap"
    };

    function v() {
        if (E) try {
            E.abort()
        } catch (e) {} finally {
            E = null
        }
    }

    function T(e) {
        if (!e) return !1;
        const t = e.tagName?.toLowerCase?.();
        return "input" === t || "textarea" === t || "select" === t
    }

    function O(e) {
        const t = e.target;
        t && t instanceof HTMLElement && T(t) && e.preventDefault()
    }

    function b(e) {
        const t = e.target;
        t && t instanceof HTMLElement && T(t) && (e.preventDefault(), e.stopPropagation(), "function" == typeof t.blur && t.blur())
    }

    function _(e) {
        e.stopPropagation(), e.preventDefault();
        const t = e.target;
        if (!t.ownerSVGElement && "BODY" !== t.tagName && "HTML" !== t.tagName) {
            const e = t.dataset.componentId;
            e && document.querySelectorAll(`[data-component-id="${e}"]`).forEach(e => {
                e.setAttribute("data-component-hovered", "true")
            });
            const n = t.getBoundingClientRect(),
                o = document.getElementById("highlighter");
            o && (o.style.display = "block", o.innerText = t.tagName?.toLowerCase(), function(e, t) {
                try {
                    if (!e || !t) return;
                    const n = window.innerWidth || document.documentElement.clientWidth || 0,
                        o = window.innerHeight || document.documentElement.clientHeight || 0;
                    if (n <= 0 || o <= 0) return;
                    e.style.top = "-9999px", e.style.left = "-9999px", e.offsetHeight;
                    const i = e.getBoundingClientRect(),
                        a = i.height || 0,
                        r = i.width || 0;
                    if (a <= 0 || r <= 0) return;
                    const s = t.top || 0,
                        d = o - (t.bottom || 0),
                        c = (t.left, 5),
                        l = 2;
                    let u;
                    u = s >= a + c ? t.top - a - c : d >= a + l ? t.bottom + l : Math.max(5, t.top || 0), u = Math.max(0, u);
                    let p = t.left || 0;
                    p + r > n && (p = Math.max(5, n - r - 5)), p < 0 && (p = 5), p = Math.max(0, p), e.style.top = `${u}px`, e.style.left = `${p}px`
                } catch (e) {}
            }(o, n))
        }
    }

    function S(e) {
        e.stopPropagation(), e.preventDefault();
        const t = document.getElementById("highlighter");
        t && (t.style.display = "none");
        const n = e.target.dataset?.componentId;
        n ? document.querySelectorAll(`[data-component-id="${n}"]`).forEach(e => {
            e.removeAttribute("data-component-hovered")
        }) : e.target.removeAttribute("data-component-hovered")
    }

    function R(e) {
        const {
            target: t
        } = e;
        (function(e) {
            if (!e) return !1;
            const t = e.closest("nav"),
                n = e.closest('[role="tablist"]'),
                o = e.closest('[role="tab"]'),
                i = "BUTTON" === e.tagName;
            return !(!(t || n || o) || !i)
        })(t) || (e.preventDefault(), e.stopPropagation());
        const n = function(e) {
            if (!e) return {};
            const t = window.getComputedStyle(e),
                n = {};
            return Object.keys(y).forEach(e => {
                n[y[e]] = t.getPropertyValue(y[e])
            }), n
        }(t);
        document.querySelectorAll('[data-component-selected="true"]').forEach(e => {
            e.removeAttribute("data-component-selected")
        });
        const o = t.dataset.componentId;
        o && document.querySelectorAll(`[data-component-id="${o}"]`).forEach(e => {
            e.setAttribute("data-component-selected", "true")
        });
        const i = 0 === t?.children.length && t?.childNodes.length > 0,
            a = t instanceof HTMLImageElement;
        w = o;
        const r = t.dataset?.componentLine ?? "0",
            s = t.dataset?.componentEndLine ?? "0",
            d = Number(r),
            c = Number(s),
            l = {
                filePath: t.dataset?.componentPath ?? "",
                lineNumber: Number.isNaN(d) ? 0 : d,
                ...!Number.isNaN(c) && {
                    endLineNumber: c
                },
                content: t.dataset?.componentContent ?? "",
                elementName: t.tagName?.toLocaleLowerCase() ?? "",
                componentId: o ?? ""
            },
            u = {
                styles: n,
                browserClassNames: t.className?.trim?.() || "",
                metaData: l
            };
        i && Object.assign(u, {
            textData: {
                textContent: e.target?.innerText ?? ""
            }
        }), a && Object.assign(u, {
            imageData: {
                imageSrc: e.target.src ?? ""
            }
        }), window.parent.postMessage({
            type: "SET_INITIAL_DATA",
            payload: u
        }, "*")
    }
    window.addEventListener("message", function(e) {
            try {
                const t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
                if ("SET_EDIT_MODE" === t.type && window.toggleEditMode(t.payload), "NAVIGATION_REQUEST" === t.type && (window?.next && window.next?.router ? window.next.router.push(t.url) : (history.pushState({}, "", t.url), window.dispatchEvent(new PopStateEvent("popstate")))), !w) return;
                if ("UPDATE_STYLES" === t.type) {
                    const e = t.payload;
                    document.querySelectorAll(`[data-component-id="${w}"]`).forEach(t => {
                        Object.assign(t.style, e)
                    })
                }
                if ("UPDATE_TEXT" === t.type) {
                    const e = t.payload?.textContent;
                    "string" == typeof e && (document.querySelector(`[data-component-id="${w}"]`).innerText = e)
                }
                if ("UPDATE_IMAGE_SRC" === t.type) {
                    const e = t.payload?.imageSrc;
                    "string" == typeof e && document.querySelectorAll(`[data-component-id="${w}"]`).forEach(t => {
                        t.src = e
                    })
                }
                if ("UPDATE_CLASSNAMES" === t.type) {
                    const e = t.payload;
                    "string" == typeof e?.classNames && document.querySelectorAll(`[data-component-id="${w}"]`).forEach(t => {
                        t.className = e.classNames
                    })
                }
                "DELETE_ELEMENT" === t.type && document.querySelectorAll(`[data-component-id="${w}"]`).forEach(e => {
                    e.remove()
                })
            } catch (e) {}
        }), window.toggleEditMode = function(e) {
            e ? function() {
                v();
                try {
                    E = new AbortController;
                    const e = E.signal;
                    (function() {
                        if (function() {
                                const e = document.createElement("style");
                                e.innerHTML = '\n            #highlighter {\n                position: fixed;\n                z-index: 10000;\n                pointer-events: none;\n                background-color: #0da2e7;\n                color: white;\n                padding: 4px 8px;\n                border-radius: 4px;\n                font-size: 14px;\n                font-weight: bold;\n                line-height: 1;\n                white-space: nowrap;\n                display: none;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n                transition: opacity 0.2s ease-in-out;\n                margin: 0;\n            }\n            /* Highlight styling for hovered components */\n            [data-component-hovered] {\n                position: relative;\n            }\n            [data-component-hovered]::before {\n                content: \'\';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border-radius: 0px;\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 2px !important;\n                z-index: 10000;\n                pointer-events: none;\n            }\n            /* Highlight styling for selected components */\n            [data-component-selected] {\n                position: relative;\n            }\n            [data-component-selected]::before {\n                content: \'\';\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border-radius: 0px;\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 0 !important;\n                z-index: 10000;\n                pointer-events: none;\n            }\n            /* Direct outline styling for form controls and media elements that don\'t support pseudo-elements */\n            :is(input, img, textarea, select, video, audio, iframe, canvas, svg)[data-component-hovered] {\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 2px !important;\n            }\n            :is(input, img, textarea, select, video, audio, iframe, canvas, svg)[data-component-selected] {\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 0 !important;\n            }\n            /* Disable outline on editable content to prevent visual conflicts */\n            [data-component-selected][contenteditable] {\n                outline: none !important;\n            }\n            /* Adjust outline position for full-width components */\n            [data-component-hovered][data-full-width]::before,\n            [data-component-selected][data-full-width]::before {\n                outline-offset: -5px !important;\n            }\n            :is(input, img, textarea, select, video, audio, iframe, canvas, svg):is([data-component-hovered], [data-component-selected])[data-full-width] {\n                outline-offset: -5px !important;\n            }\n            /* Handle elements that are clipped by parent overflow containers */\n            :is([class*="overflow-hidden"], [class*="overflow-clip"]) > :is(img, video, iframe, canvas):is([data-component-hovered], [data-component-selected]) {\n                outline: none !important;\n            }\n            /* Style the overflow container parent when it contains highlighted media elements */\n            :is([class*="overflow-hidden"], [class*="overflow-clip"]):has(> :is(img, video, iframe, canvas)[data-component-hovered]) {\n                outline: 1px dashed #0da2e7 !important;\n                outline-offset: 2px !important;\n            }\n            :is([class*="overflow-hidden"], [class*="overflow-clip"]):has(> :is(img, video, iframe, canvas)[data-component-selected]) {\n                outline: 1px dashed #0da2e7 !important;\n            }\n        ';
                                const t = document.head.querySelectorAll('link[rel="stylesheet"]');
                                if (t.length > 0) document.head.insertBefore(e, t[0]);
                                else {
                                    const t = document.head.querySelectorAll("style");
                                    t.length > 0 ? document.head.insertBefore(e, t[0]) : document.head.appendChild(e)
                                }
                            }(), !document.getElementById("highlighter")) {
                            const e = document.createElement("div");
                            e.id = "highlighter";
                            const t = document.body || document.getElementsByTagName("body")[0];
                            t && t.appendChild(e)
                        }
                    })(), document.addEventListener("mouseover", _, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("mouseout", S, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("click", R, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("mousedown", b, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("focusin", b, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("beforeinput", O, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("keydown", O, {
                        capture: !0,
                        signal: e
                    }), document.addEventListener("paste", O, {
                        capture: !0,
                        signal: e
                    })
                } catch (e) {}
            }() : v()
        },
        function() {
            const t = (t, o) => {
                    try {
                        if (e || n) return;
                        const i = ((e, t) => {
                            try {
                                const n = e === window || e === document || e === document.documentElement,
                                    o = window.innerWidth || document.documentElement.clientWidth,
                                    i = window.innerHeight || document.documentElement.clientHeight,
                                    a = window.scrollX,
                                    r = window.scrollY;
                                let s = null;
                                if (t) {
                                    const o = t.clientX || t.touches?.[0]?.clientX,
                                        i = t.clientY || t.touches?.[0]?.clientY;
                                    if (void 0 !== o && void 0 !== i && (s = {
                                            viewport: {
                                                x: Math.round(o),
                                                y: Math.round(i)
                                            },
                                            page: {
                                                x: Math.round(o + a),
                                                y: Math.round(i + r)
                                            }
                                        }, !n && e?.getBoundingClientRect)) {
                                        const t = e.getBoundingClientRect();
                                        s.element = {
                                            x: Math.round(o - t.left),
                                            y: Math.round(i - t.top)
                                        }
                                    }
                                }
                                if (n) return {
                                    tag: "document",
                                    id: "",
                                    position: {
                                        x: a,
                                        y: r,
                                        width: o,
                                        height: i
                                    },
                                    viewport: {
                                        width: o,
                                        height: i
                                    },
                                    scroll: {
                                        x: a,
                                        y: r
                                    },
                                    mouse: s
                                };
                                if (!e?.getBoundingClientRect) return null;
                                const d = e.getBoundingClientRect();
                                return {
                                    tag: e.tagName?.toLowerCase() || "",
                                    id: e.id || "",
                                    position: {
                                        x: Math.round(d.left + a),
                                        y: Math.round(d.top + r),
                                        width: Math.round(d.width),
                                        height: Math.round(d.height)
                                    },
                                    viewport: {
                                        width: o,
                                        height: i
                                    },
                                    scroll: {
                                        x: a,
                                        y: r
                                    },
                                    mouse: s
                                }
                            } catch (e) {
                                return null
                            }
                        })(o.target || o.srcElement, o);
                        if (!i) return;
                        const a = {
                            eventType: t,
                            timestamp: (new Date).toISOString(),
                            element: i,
                            page: window.location.pathname
                        };
                        window.parent.postMessage({
                            type: "USER_INTERACTION",
                            payload: a
                        }, "*")
                    } catch (e) {}
                },
                o = (() => {
                    let e;
                    return function(...n) {
                        clearTimeout(e), e = setTimeout(() => {
                            clearTimeout(e), (e => {
                                t("mousemove", e)
                            })(...n)
                        }, 10)
                    }
                })();
            document.addEventListener("mousemove", o), document.addEventListener("click", e => t("click", e)), document.addEventListener("dblclick", e => t("dblclick", e)), document.addEventListener("mouseenter", e => t("mouseenter", e)), document.addEventListener("mouseleave", e => t("mouseleave", e)), document.addEventListener("touchstart", e => t("touchstart", e)), document.addEventListener("touchmove", e => t("touchmove", e)), document.addEventListener("touchend", e => t("touchend", e)), document.addEventListener("keydown", e => t("keydown", e));
            const i = ["input", "textarea", "select", "button", '[contenteditable="true"]'];
            document.addEventListener("focusin", e => {
                i.some(t => e.target.matches(t)) && t("focus", e)
            }), document.addEventListener("focusout", e => {
                i.some(t => e.target.matches(t)) && t("blur", e)
            });
            const a = e => n => {
                    var o;
                    (o = n.target) && (o === document || o === document.documentElement || o === window || o.scrollHeight > o.clientHeight || o.scrollWidth > o.clientWidth) && t(e, n)
                },
                r = a("scroll"),
                s = a("scrollend"),
                d = () => {
                    try {
                        window.addEventListener("scroll", r, {
                            passive: !0
                        }), window.addEventListener("scrollend", s, {
                            passive: !0
                        }), document.querySelectorAll("*").forEach(e => {
                            (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) && (e.addEventListener("scroll", r, {
                                passive: !0
                            }), e.addEventListener("scrollend", s, {
                                passive: !0
                            }))
                        })
                    } catch (e) {}
                };
            d();
            const c = new MutationObserver(() => {
                    d()
                }),
                l = () => {
                    document.body && c.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                };
            document.body ? l() : (document.addEventListener("DOMContentLoaded", l), document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && l()
            }))
        }()
}();
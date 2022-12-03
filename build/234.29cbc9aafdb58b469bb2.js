"use strict";
(self.webpackChunkpayload_template_ts_blog =
    self.webpackChunkpayload_template_ts_blog || []).push([
    [234],
    {
        77070: (e, t, a) => {
            a.d(t, { Z: () => s });
            var l = a(67294),
                n = a(26793),
                r = a(12049),
                o = a(28960);
            a(14120);
            const i = "field-description",
                s = (e) => {
                    const { className: t, description: a, value: s } = e, { i18n: c } = (0, n.$)();
                    if ((0, r.isComponent)(a)) {
                        const e = a;
                        return l.createElement(e, { value: s });
                    }
                    return a ?
                        l.createElement(
                            "div", { className: [i, t].filter(Boolean).join(" ") },
                            "function" == typeof a ? a({ value: s }) : (0, o.i)(a, c)
                        ) :
                        null;
                };
        },
        12049: function(e, t, a) {
            var l =
                (this && this.__importDefault) ||
                function(e) {
                    return e && e.__esModule ? e : { default: e };
                };
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.isComponent = void 0);
            const n = l(a(67294));
            t.isComponent = function(e) {
                return n.default.isValidElement(e);
            };
        },
        28571: (e, t, a) => {
            a.d(t, { Z: () => p });
            var l = a(67294),
                n = a(26793),
                r = a(90546),
                o = a.n(r),
                i = a(48170),
                s = a(953),
                c = a(90666),
                m = a(77070),
                d = a(35193),
                u = a(28960);
            a(25786);
            const p = o()((e) => {
                const {
                    name: t,
                    path: a,
                    required: r,
                    validate: o = d.email,
                    admin: {
                        readOnly: p,
                        style: C,
                        className: g,
                        width: E,
                        placeholder: h,
                        autoComplete: Z,
                        description: f,
                        condition: v,
                    } = {},
                    label: y,
                } = e, { i18n: w } = (0, n.$)(),
                _ = a || t,
                    b = (0, l.useCallback)((e, t) => o(e, {...t, required: r }), [o, r]),
                    L = (0, i.Z)({ path: _, validate: b, condition: v }), { value: H, showError: V, setValue: k, errorMessage: M } = L,
                    $ = ["field-type", "email", g, V && "error", p && "read-only"]
                    .filter(Boolean)
                    .join(" ");
                return l.createElement(
                    "div", { className: $, style: {...C, width: E } },
                    l.createElement(c.Z, { showError: V, message: M }),
                    l.createElement(s.Z, {
                        htmlFor: `field-${_.replace(/\./gi, "__")}`,
                        label: y,
                        required: r,
                    }),
                    l.createElement("input", {
                        id: `field-${_.replace(/\./gi, "__")}`,
                        value: H || "",
                        onChange: k,
                        disabled: Boolean(p),
                        placeholder: (0, u.i)(h, w),
                        type: "email",
                        name: _,
                        autoComplete: Z,
                    }),
                    l.createElement(m.Z, { value: H, description: f })
                );
            });
        },
        76067: (e, t, a) => {
            a.d(t, { Z: () => m });
            var l = a(67294),
                n = a(48170),
                r = a(953),
                o = a(90666),
                i = a(90546),
                s = a.n(i),
                c = a(35193);
            a(8108);
            const m = s()((e) => {
                const {
                    path: t,
                    name: a,
                    required: i,
                    validate: s = c.password,
                    style: m,
                    className: d,
                    width: u,
                    autoComplete: p,
                    label: C,
                } = e,
                g = t || a,
                    E = (0, l.useCallback)((e, t) => s(e, {...t, required: i }), [s, i]), {
                        value: h,
                        showError: Z,
                        formProcessing: f,
                        setValue: v,
                        errorMessage: y,
                    } = (0, n.Z)({ path: g, validate: E }),
                    w = ["field-type", "password", d, Z && "error"]
                    .filter(Boolean)
                    .join(" ");
                return l.createElement(
                    "div", { className: w, style: {...m, width: u } },
                    l.createElement(o.Z, { showError: Z, message: y }),
                    l.createElement(r.Z, {
                        htmlFor: `field-${g.replace(/\./gi, "__")}`,
                        label: C,
                        required: i,
                    }),
                    l.createElement("input", {
                        id: `field-${g.replace(/\./gi, "__")}`,
                        value: h || "",
                        onChange: v,
                        disabled: f,
                        type: "password",
                        autoComplete: p,
                        name: g,
                    })
                );
            });
        },
        68874: (e, t, a) => {
            a.d(t, { Z: () => i });
            var l = a(67294),
                n = a(9980),
                r = a(2143);
            const o = () =>
                l.createElement(
                    "svg", {
                        width: "180",
                        height: "50",
                        viewBox: "0 0 180 50",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "graphic-logo",
                    },
                ),
                i = () => {
                    const {
                        admin: {
                            components: { graphics: { Logo: e } = { Logo: void 0 } } = {},
                        } = {},
                    } = (0, n.Z)();
                    return l.createElement(r.Z, {
                        CustomComponent: e,
                        DefaultComponent: o,
                    });
                };
        },
        99234: (e, t, a) => {
            a.r(t), a.d(t, { default: () => f });
            var l = a(67294),
                n = a(16550),
                r = a(73727),
                o = a(26793),
                i = a(89116),
                s = a(9980),
                c = a(28630),
                m = a(68874),
                d = a(39599),
                u = a(26644),
                p = a(28571),
                C = a(76067),
                g = a(46268),
                E = a(77329),
                h = a(37276);
            a(14889);
            const Z = "login",
                f = () => {
                    const e = (0, n.k6)(),
                        { t } = (0, o.$)("authentication"),
                        { user: a, setToken: f } = (0, c.a)(),
                        v = (0, s.Z)(),
                        {
                            admin: {
                                user: y,
                                logoutRoute: w,
                                components: { beforeLogin: _, afterLogin: b, logout: L } = {},
                            },
                            serverURL: H,
                            routes: { admin: V, api: k },
                            collections: M,
                        } = v,
                        $ = M.find(({ slug: e }) => e === y);
                    return a ?
                        l.createElement(
                            d.Z, { className: Z },
                            l.createElement(h.Z, {
                                title: t("login"),
                                description: t("loginUser"),
                                keywords: t("login"),
                            }),
                            l.createElement(
                                "div", { className: "login__wrap" },
                                l.createElement("h1", null, t("alreadyLoggedIn")),
                                l.createElement(
                                    "p",
                                    null,
                                    l.createElement(
                                        i.c, { i18nKey: "loggedIn", t },
                                        l.createElement(r.Link, { to: `${V}${w}` }, t("logOut"))
                                    )
                                ),
                                l.createElement("br", null),
                                l.createElement(
                                    E.Z, { el: "link", buttonStyle: "secondary", to: V },
                                    t("general:backToDashboard")
                                )
                            )
                        ) :
                        l.createElement(
                            d.Z, { className: Z },
                            l.createElement(h.Z, {
                                title: t("login"),
                                description: t("loginUser"),
                                keywords: t("login"),
                            }),
                            l.createElement(
                                "div", { className: "login__brand" },
                                l.createElement(m.Z, null)
                            ),
                            Array.isArray(_) &&
                            _.map((e, t) => l.createElement(e, { key: t })), !$.auth.disableLocalStrategy &&
                            l.createElement(
                                u.Z, {
                                    disableSuccessStatus: !0,
                                    waitForAutocomplete: !0,
                                    onSuccess: (t) => {
                                        t.token && (f(t.token), e.push(V));
                                    },
                                    method: "post",
                                    action: `${H}${k}/${y}/login`,
                                },
                                l.createElement(p.Z, {
                                    label: t("general:email"),
                                    name: "email",
                                    admin: { autoComplete: "email" },
                                    required: !0,
                                }),
                                l.createElement(C.Z, {
                                    label: t("general:password"),
                                    name: "password",
                                    autoComplete: "off",
                                    required: !0,
                                }),
                                l.createElement(
                                    r.Link, { to: `${V}/forgot` },
                                    t("forgotPasswordQuestion")
                                ),
                                l.createElement(g.Z, null, t("login"))
                            ),
                            Array.isArray(b) &&
                            b.map((e, t) => l.createElement(e, { key: t }))
                        );
                };
        },
    },
]);
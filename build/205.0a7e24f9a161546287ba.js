"use strict";
(self.webpackChunkpayload_template_ts_blog =
    self.webpackChunkpayload_template_ts_blog || []).push([
    [205, 234],
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
                d = a(77070),
                m = a(35193),
                u = a(28960);
            a(25786);
            const p = o()((e) => {
                const {
                    name: t,
                    path: a,
                    required: r,
                    validate: o = m.email,
                    admin: {
                        readOnly: p,
                        style: C,
                        className: g,
                        width: E,
                        placeholder: h,
                        autoComplete: f,
                        description: v,
                        condition: Z,
                    } = {},
                    label: y,
                } = e, { i18n: w } = (0, n.$)(),
                b = a || t,
                    _ = (0, l.useCallback)((e, t) => o(e, {...t, required: r }), [o, r]),
                    L = (0, i.Z)({ path: b, validate: _, condition: Z }), { value: k, showError: $, setValue: V, errorMessage: H } = L,
                    M = ["field-type", "email", g, $ && "error", p && "read-only"]
                    .filter(Boolean)
                    .join(" ");
                return l.createElement(
                    "div", { className: M, style: {...C, width: E } },
                    l.createElement(c.Z, { showError: $, message: H }),
                    l.createElement(s.Z, {
                        htmlFor: `field-${b.replace(/\./gi, "__")}`,
                        label: y,
                        required: r,
                    }),
                    l.createElement("input", {
                        id: `field-${b.replace(/\./gi, "__")}`,
                        value: k || "",
                        onChange: V,
                        disabled: Boolean(p),
                        placeholder: (0, u.i)(h, w),
                        type: "email",
                        name: b,
                        autoComplete: f,
                    }),
                    l.createElement(d.Z, { value: k, description: v })
                );
            });
        },
        76067: (e, t, a) => {
            a.d(t, { Z: () => d });
            var l = a(67294),
                n = a(48170),
                r = a(953),
                o = a(90666),
                i = a(90546),
                s = a.n(i),
                c = a(35193);
            a(8108);
            const d = s()((e) => {
                const {
                    path: t,
                    name: a,
                    required: i,
                    validate: s = c.password,
                    style: d,
                    className: m,
                    width: u,
                    autoComplete: p,
                    label: C,
                } = e,
                g = t || a,
                    E = (0, l.useCallback)((e, t) => s(e, {...t, required: i }), [s, i]), {
                        value: h,
                        showError: f,
                        formProcessing: v,
                        setValue: Z,
                        errorMessage: y,
                    } = (0, n.Z)({ path: g, validate: E }),
                    w = ["field-type", "password", m, f && "error"]
                    .filter(Boolean)
                    .join(" ");
                return l.createElement(
                    "div", { className: w, style: {...d, width: u } },
                    l.createElement(o.Z, { showError: f, message: y }),
                    l.createElement(r.Z, {
                        htmlFor: `field-${g.replace(/\./gi, "__")}`,
                        label: C,
                        required: i,
                    }),
                    l.createElement("input", {
                        id: `field-${g.replace(/\./gi, "__")}`,
                        value: h || "",
                        onChange: Z,
                        disabled: v,
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
            a.r(t), a.d(t, { default: () => v });
            var l = a(67294),
                n = a(16550),
                r = a(73727),
                o = a(26793),
                i = a(89116),
                s = a(9980),
                c = a(28630),
                d = a(68874),
                m = a(39599),
                u = a(26644),
                p = a(28571),
                C = a(76067),
                g = a(46268),
                E = a(77329),
                h = a(37276);
            a(14889);
            const f = "login",
                v = () => {
                    const e = (0, n.k6)(),
                        { t } = (0, o.$)("authentication"),
                        { user: a, setToken: v } = (0, c.a)(),
                        Z = (0, s.Z)(),
                        {
                            admin: {
                                user: y,
                                logoutRoute: w,
                                components: { beforeLogin: b, afterLogin: _, logout: L } = {},
                            },
                            serverURL: k,
                            routes: { admin: $, api: V },
                            collections: H,
                        } = Z,
                        M = H.find(({ slug: e }) => e === y);
                    return a ?
                        l.createElement(
                            m.Z, { className: f },
                            l.createElement(h.Z, {
                                title: t("login"),
                                description: t("loginUser"),
                                keywords: t("login"),
                            }),
                            l.createElement(
                                "div", { className: `${f}__wrap` },
                                l.createElement("h1", null, t("alreadyLoggedIn")),
                                l.createElement(
                                    "p",
                                    null,
                                    l.createElement(
                                        i.c, { i18nKey: "loggedIn", t },
                                        l.createElement(r.Link, { to: `${$}${w}` }, t("logOut"))
                                    )
                                ),
                                l.createElement("br", null),
                                l.createElement(
                                    E.Z, { el: "link", buttonStyle: "secondary", to: $ },
                                    t("general:backToDashboard")
                                )
                            )
                        ) :
                        l.createElement(
                            m.Z, { className: f },
                            l.createElement(h.Z, {
                                title: t("login"),
                                description: t("loginUser"),
                                keywords: t("login"),
                            }),
                            l.createElement(
                                "div", { className: `${f}__brand` },
                                l.createElement(d.Z, null)
                            ),
                            Array.isArray(b) &&
                            b.map((e, t) => l.createElement(e, { key: t })), !M.auth.disableLocalStrategy &&
                            l.createElement(
                                u.Z, {
                                    disableSuccessStatus: !0,
                                    waitForAutocomplete: !0,
                                    onSuccess: (t) => {
                                        t.token && (v(t.token), e.push($));
                                    },
                                    method: "post",
                                    action: `${k}${V}/${y}/login`,
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
                                    r.Link, { to: `${$}/forgot` },
                                    t("forgotPasswordQuestion")
                                ),
                                l.createElement(g.Z, null, t("login"))
                            ),
                            Array.isArray(_) &&
                            _.map((e, t) => l.createElement(e, { key: t }))
                        );
                };
        },
        15205: (e, t, a) => {
            a.r(t), a.d(t, { default: () => C });
            var l = a(67294),
                n = a(26793),
                r = a(16550),
                o = a(9980),
                i = a(28630),
                s = a(68874),
                c = a(39599),
                d = a(77329),
                m = a(37276),
                u = a(99234);
            a(85);
            const p = "verify",
                C = ({ collection: e }) => {
                    const { slug: t } = e, { user: a } = (0, i.a)(), { token: C } = (0, r.UO)(), {
                        serverURL: g,
                        routes: { admin: E },
                        admin: { user: h },
                    } = (0, o.Z)(), { t: f, i18n: v } = (0, n.$)("authentication"),
                    Z = t === h, [y, w] = (0, l.useState)(null);
                    if (
                        ((0, l.useEffect)(() => {
                                !(async function() {
                                    const e = await fetch(`${g}/api/${t}/verify/${C}`, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: { "Accept-Language": v.language },
                                    });
                                    w(e);
                                })();
                            }, [w, t, g, C, v]),
                            a)
                    )
                        return l.createElement(u.default, null);
                    return l.createElement(
                        c.Z, { className: p },
                        l.createElement(m.Z, {
                            title: f("verify"),
                            description: f("verifyUser"),
                            keywords: f("verify"),
                        }),
                        l.createElement(
                            "div", { className: `${p}__brand` },
                            l.createElement(s.Z, null)
                        ),
                        l.createElement(
                            "h2",
                            null,
                            200 === (null == y ? void 0 : y.status) ?
                            f("verifiedSuccessfully") :
                            202 === (null == y ? void 0 : y.status) ?
                            f("alreadyActivated") :
                            f("unableToVerify")
                        ),
                        Z &&
                        200 === (null == y ? void 0 : y.status) &&
                        l.createElement(
                            d.Z, { el: "link", buttonStyle: "secondary", to: `${E}/login` },
                            f("login")
                        )
                    );
                };
        },
    },
]);
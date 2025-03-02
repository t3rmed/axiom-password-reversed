/* this javascript was found on the site at 
https://axiom.trade/_next/static/chunks/8668-ca4155b1854f344f.js

we only need the very last part of the file, at line 1475
*/

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8668], {
    73195: (e, t, r) => {
        r.d(t, {
            Fx: () => i,
            NI: () => n,
            bl: () => l,
            gF: () => s,
            nT: () => a
        });
        let a = "https://discord.gg/axiomtrade"
          , n = "https://x.com/AxiomExchange"
          , s = "https://docs.axiom.trade"
          , l = "mailto:founders@axiom.trading"
          , i = ["Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"]
    }
    ,
    73004: (e, t, r) => {
        r.d(t, {
            A: () => h
        });
        var a = r(95155)
          , n = r(80022)
          , s = r(51064)
          , l = r(94928)
          , i = r(61591)
          , o = r(32673)
          , c = r(19953)
          , x = r(36846)
          , p = r(43828)
          , d = r(12115)
          , u = r(6249)
          , f = r(5565);
        let m = () => {
            let e = window.navigator.userAgent.toLowerCase();
            return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e)
        }
          , h = e => {
            var t;
            let {onSuccess: r, loadingMessage: h="Logging in...", successMessage: g="Logged in", text: y="continue_with", allowRegistration: w=!0, isVerify: j=!1} = e
              , v = "311699522805-ule1kgj57j4dq2qo8qr6ih7d0ejb6mv6.apps.googleusercontent.com";
            if (!v)
                throw Error("Google OAuth client ID is not set");
            let[b,N] = (0,
            d.useState)(null)
              , [S,k] = (0,
            d.useState)(!1)
              , A = (0,
            l.Xr)(i.Oc)
              , P = (0,
            l.md)(i.LM)
              , C = null === (t = (0,
            l.md)(i.ZT)) || void 0 === t ? void 0 : t.trim().toLowerCase()
              , T = (0,
            d.useRef)(!1);
            (0,
            d.useEffect)( () => {
                let e = (0,
                u.CD)();
                N({
                    publicKey: e.publicKeyUncompressed,
                    privateKey: e.privateKey
                })
            }
            , []),
            (0,
            d.useEffect)( () => {
                k(m())
            }
            , []);
            let E = b ? (0,
            s.s)(b.publicKey).replace(/^0x/, "") : null
              , _ = (0,
            x.Vb)()
              , B = async e => {
                if (T.current)
                    return p.A.error("Please complete the verification process with Google in the popup");
                T.current = !0;
                try {
                    if (P && !j)
                        return p.A.error("You are already signed in");
                    let t = p.A.loading(h, {
                        duration: 1 / 0
                    });
                    if (!b) {
                        p.A.error("Failed Google OAuth: No auth keys", {
                            toastId: t
                        });
                        return
                    }
                    try {
                        if (e.credential) {
                            let {credentialBundle: a, orgId: n, userId: s} = await c.ho.post("/google-oauth", {
                                credential: e.credential,
                                sessionPublicKey: b.publicKey,
                                referrer: C,
                                allowRegistration: w
                            });
                            await _({
                                type: "bundle",
                                turnkeyCredentialBundle: a,
                                authPrivateKey: b.privateKey
                            }, n, s, "google", r),
                            p.A.success(g, {
                                toastId: t
                            })
                        } else
                            p.A.error("Failed Google OAuth: No credential provided", {
                                toastId: t
                            })
                    } catch (e) {
                        p.A.error("Failed Google OAuth: " + (0,
                        o.u1)(e), {
                            toastId: t
                        })
                    }
                } finally {
                    T.current = !1
                }
            }
            ;
            return E ? (0,
            a.jsx)(n.G_, {
                clientId: v,
                children: (0,
                a.jsxs)("div", {
                    className: "w-full",
                    children: [(0,
                    a.jsxs)("button", {
                        onClick: S ? () => {
                            if (T.current)
                                return p.A.error("Please wait for google to redirect");
                            T.current = !0;
                            try {
                                if (!E || !b)
                                    throw Error("Failed to initialize Google login");
                                A({
                                    publicKey: b.publicKey,
                                    privateKey: b.privateKey,
                                    allowRegistration: w,
                                    referrer: C
                                });
                                let e = new URLSearchParams({
                                    client_id: v,
                                    redirect_uri: "".concat(window.location.origin, "/google-oauth"),
                                    response_type: "code",
                                    scope: "email profile",
                                    nonce: E,
                                    prompt: "consent"
                                });
                                window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?".concat(e.toString())
                            } catch (e) {
                                p.A.error("Failed Google OAuth: " + (0,
                                o.u1)(e))
                            } finally {
                                T.current = !1
                            }
                        }
                        : () => {
                            let e = document.querySelector('[role="button"]');
                            e && e.click()
                        }
                        ,
                        className: "bg-secondaryStroke hover:bg-secondaryStroke/80 flex flex-row w-full h-[32px] px-[16px] gap-[8px] justify-center items-center rounded-full transition-all duration-125",
                        children: [(0,
                        a.jsx)(f.default, {
                            src: "/images/google-logo.svg",
                            alt: "Google logo",
                            width: 16,
                            height: 16
                        }), (0,
                        a.jsx)("span", {
                            className: "text-[14px] font-medium text-textPrimary",
                            children: "Continue with Google"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "hidden",
                        children: (0,
                        a.jsx)(n.j, {
                            nonce: E,
                            theme: "filled_black",
                            shape: "pill",
                            size: "large",
                            text: y,
                            useOneTap: !1,
                            auto_select: !1,
                            onSuccess: B
                        })
                    })]
                })
            }) : null
        }
    }
    ,
    65725: (e, t, r) => {
        r.d(t, {
            A: () => h
        });
        var a = r(95155)
          , n = r(12115)
          , s = r(89229)
          , l = r(36846)
          , i = r(67438)
          , o = r(32673)
          , c = r(19953)
          , x = r(7108)
          , p = r(73004)
          , d = r(43828)
          , u = r(4996)
          , f = r(94928)
          , m = r(61591);
        function h(e) {
            let {onClose: t, onSwitchToSignUp: r, onSuccess: h} = e
              , [g,y] = (0,
            n.useState)("")
              , [w,j] = (0,
            n.useState)("")
              , [v,b] = (0,
            n.useState)("")
              , [N,S] = (0,
            n.useState)(!1)
              , k = (0,
            n.useRef)(null)
              , A = (0,
            l.Vb)()
              , P = (0,
            f.md)(m.LM)
              , [C,T] = (0,
            n.useState)(!1)
              , E = e => {
                C && e.target === e.currentTarget && t()
            }
              , _ = () => {
                t(),
                null == h || h()
            }
              , B = async () => {
                if (P)
                    return d.A.error("You are already signed in");
                let e = d.A.loading("Logging in...");
                try {
                    let t = await (0,
                    i.E)(v)
                      , {orgId: r, clientSecret: a, userId: n} = await c.ho.post("/login-password", {
                        email: w,
                        b64Password: t
                    })
                      , {privateKey: s} = await (0,
                    x.X)(v, a);
                    A({
                        type: "api",
                        apiPrivateKey: s
                    }, r, n, "email", _),
                    d.A.success("Logged in", {
                        toastId: e
                    })
                } catch (t) {
                    y((0,
                    o.u1)(t)),
                    d.A.error("Failed logging in: " + (0,
                    o.u1)(t), {
                        toastId: e
                    })
                }
            }
            ;
            return (0,
            a.jsxs)(s.P.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .15,
                    ease: "easeInOut"
                },
                className: "fixed inset-0 flex items-center justify-center z-50",
                children: [(0,
                a.jsx)(s.P.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .15,
                        ease: "easeInOut"
                    },
                    className: "absolute inset-0 bg-[#090909]/80 backdrop-blur-[2px]",
                    onClick: e => E(e),
                    onMouseDown: e => {
                        e.target === e.currentTarget && T(!0)
                    }
                    ,
                    onMouseUp: () => {
                        requestAnimationFrame( () => {
                            T(!1)
                        }
                        )
                    }
                }), (0,
                a.jsxs)(s.P.div, {
                    initial: {
                        scale: .98,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .98,
                        opacity: 0
                    },
                    transition: {
                        duration: .15,
                        ease: "easeInOut"
                    },
                    className: "flex flex-col w-full max-w-[312px] pt-[16px] pb-[20px] gap-[16px] bg-backgroundTertiary border border-secondaryStroke rounded-[4px] justify-center items-center z-50 shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex flex-row w-full gap-[16px]justify-center items-center px-[16px]",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex flex-row flex-1 gap-[4px] justify-start items-center"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-row flex-1 gap-[4px] justify-center items-center",
                            children: (0,
                            a.jsx)("span", {
                                className: "whitespace-nowrap text-textSecondary text-[16px] leading-[21px] font-normal tracking-[-0.02em]",
                                children: "Login"
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-row flex-1 gap-[4px] justify-end items-center",
                            children: (0,
                            a.jsx)("button", {
                                className: "flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-primaryStroke/60 rounded-[4px]",
                                onClick: t,
                                children: (0,
                                a.jsx)("i", {
                                    className: "ri-close-line text-textSecondary text-[16px]"
                                })
                            })
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-col w-full gap-[4px] justify-start items-start",
                            children: [(0,
                            a.jsx)("span", {
                                className: "text-textTertiary text-[12px] leading-[16px] font-normal",
                                children: "Email"
                            }), (0,
                            a.jsx)("input", {
                                placeholder: "Enter email",
                                value: w,
                                onChange: e => j(e.target.value),
                                onKeyDown: e => {
                                    if ("Enter" === e.key) {
                                        var t;
                                        null === (t = k.current) || void 0 === t || t.focus()
                                    }
                                }
                                ,
                                className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col w-full gap-[4px] justify-start items-start",
                            children: [(0,
                            a.jsx)("span", {
                                className: "text-textTertiary text-[12px] leading-[16px] font-normal",
                                children: "Password"
                            }), (0,
                            a.jsxs)("div", {
                                className: "relative w-full",
                                children: [(0,
                                a.jsx)("input", {
                                    ref: k,
                                    type: N ? "text" : "password",
                                    placeholder: "Enter password",
                                    value: v,
                                    onChange: e => b(e.target.value),
                                    onKeyDown: e => {
                                        "Enter" === e.key && B()
                                    }
                                    ,
                                    className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] pr-[36px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                                }), (0,
                                a.jsx)("button", {
                                    onClick: () => S(!N),
                                    className: "absolute right-[12px] top-1/2 -translate-y-1/2",
                                    children: (0,
                                    a.jsx)("i", {
                                        className: "ri-".concat(N ? "eye-line" : "eye-off-line", " text-textTertiary text-[14px] hover:text-textSecondary")
                                    })
                                })]
                            })]
                        }), g && (0,
                        a.jsx)("span", {
                            className: "text-decrease text-[12px] leading-[16px] font-normal",
                            children: g
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                        children: (0,
                        a.jsx)("button", {
                            onClick: B,
                            className: "bg-primaryBlue flex flex-row w-full h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-[150ms] cursor-pointer",
                            children: (0,
                            a.jsx)("span", {
                                className: "text-[14px] font-bold text-background",
                                children: "Login"
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-center w-full px-[16px]",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex-grow h-[1px] bg-secondaryStroke"
                        }), (0,
                        a.jsx)("span", {
                            className: "px-3 text-textTertiary text-[12px] leading-[16px] font-normal",
                            children: "OR"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex-grow h-[1px] bg-secondaryStroke"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                        children: (0,
                        a.jsx)(p.A, {
                            onSuccess: _,
                            allowRegistration: !1
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                        children: (0,
                        a.jsx)(u.A, {
                            onSuccess: _,
                            allowRegistration: !1
                        })
                    }), (0,
                    a.jsxs)("span", {
                        className: "text-textTertiary text-[12px] leading-[16px] font-normal text-center px-[16px]",
                        children: ["Don't have an account?", " ", (0,
                        a.jsx)("button", {
                            className: "text-primaryBlue hover:brightness-110 transition-colors",
                            onClick: r,
                            children: "Sign up"
                        })]
                    })]
                })]
            })
        }
    }
    ,
    4996: (e, t, r) => {
        r.d(t, {
            A: () => w
        });
        var a = r(95155)
          , n = r(32673)
          , s = r(43828);
        let l = async () => {
            if ("phantom"in window) {
                var e;
                let t = null === (e = window.phantom) || void 0 === e ? void 0 : e.solana;
                if (null == t ? void 0 : t.isPhantom)
                    try {
                        return await t.connect(),
                        t
                    } catch (e) {
                        s.A.error("Failed to connect to Phantom: " + (0,
                        n.u1)(e))
                    }
                else
                    s.A.error("Phantom is not installed")
            }
            return null
        }
        ;
        var i = r(51529)
          , o = r(19953)
          , c = r(94928)
          , x = r(24644)
          , p = r(28788)
          , d = r(51512)
          , u = r(49300)
          , f = r(6249)
          , m = r(36846)
          , h = r(31583)
          , g = r(12115)
          , y = r(75927).Buffer;
        let w = e => {
            let {onSuccess: t, allowRegistration: r=!0, skipCreateSession: w=!1, successMessage: j="Logged in", isVerify: v=!1} = e
              , b = (0,
            c.md)(x.ZT)
              , N = (0,
            m.Vb)()
              , S = (0,
            c.md)(x.LM)
              , [k,A] = (0,
            g.useState)(!1)
              , P = () => {
                let e = window.navigator.userAgent.toLowerCase();
                return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e)
            }
              , C = async () => {
                if (k)
                    return s.A.error("Please wait for the verification to complete");
                A(!0);
                try {
                    if (S && !v)
                        return s.A.error("You are already signed in");
                    let a = s.A.loading("Continue in Phantom...", {
                        duration: 1 / 0
                    })
                      , i = await l();
                    if (i)
                        try {
                            var e;
                            let n = i.publicKey;
                            if (!n)
                                throw Error("Failed to get Phantom public key");
                            let l = n.toBase58();
                            s.A.loading("Fetching nonce...", {
                                toastId: a,
                                duration: 1 / 0
                            });
                            let c = await o.ho.post("/wallet-nonce", {
                                walletAddress: l
                            });
                            s.A.loading("Sign message in Phantom...", {
                                toastId: a,
                                duration: 1 / 0
                            });
                            let x = new TextEncoder().encode("By signing, you agree to Axiom's Terms of Use & Privacy Policy (axiom.trade/legal).\n\nNonce: ".concat(c))
                              , m = await i.signMessage(x, "utf8")
                              , g = p.A.encode(m.signature);
                            s.A.loading("Verifying signature...", {
                                toastId: a,
                                duration: 1 / 0
                            });
                            let {orgId: v, userId: S, turnkeyUserId: k} = await o.ho.post("/verify-wallet", {
                                walletAddress: l,
                                signature: g,
                                nonce: c,
                                referrer: b,
                                allowRegistration: r
                            });
                            if (w) {
                                s.A.success(j, {
                                    toastId: a
                                }),
                                null == t || t();
                                return
                            }
                            let A = new d.Yr({
                                type: d.S4.Solana,
                                getPublicKey: async () => y.from(p.A.decode(n.toBase58())).toString("hex"),
                                signMessage: async e => {
                                    let t = new TextEncoder().encode(e)
                                      , r = await i.signMessage(t, "utf8");
                                    return y.from(r.signature).toString("hex")
                                }
                            })
                              , P = new u.WL({
                                baseUrl: "https://api.turnkey.com"
                            },A)
                              , C = (0,
                            f.CD)();
                            s.A.loading("Sign message in Phantom...", {
                                toastId: a,
                                duration: 1 / 0
                            });
                            let T = (0,
                            h.gW)({
                                client: P,
                                requestFn: P.createReadWriteSession,
                                refreshIntervalMs: 2e3
                            })
                              , E = await T({
                                type: "ACTIVITY_TYPE_CREATE_READ_WRITE_SESSION_V2",
                                timestampMs: Date.now().toString(),
                                organizationId: v,
                                parameters: {
                                    apiKeyName: "Axiom Nonce: ".concat(c),
                                    targetPublicKey: C.publicKeyUncompressed,
                                    userId: k,
                                    expirationSeconds: "2592000"
                                }
                            })
                              , _ = null === (e = E.result.createReadWriteSessionResultV2) || void 0 === e ? void 0 : e.credentialBundle;
                            if (!_)
                                throw Error("Failed to create read/write session");
                            await N({
                                type: "bundle",
                                turnkeyCredentialBundle: _,
                                authPrivateKey: C.privateKey
                            }, v, S, "phantom", t),
                            s.A.success(j, {
                                toastId: a
                            })
                        } catch (e) {
                            s.A.error("Failed to connect: " + (0,
                            n.u1)(e), {
                                toastId: a
                            })
                        }
                    else
                        P() && s.A.warn("You must use the Phantom browser to sign in on mobile with Phantom"),
                        s.A.error("Failed to connect to Phantom", {
                            toastId: a
                        })
                } finally {
                    A(!1)
                }
            }
            ;
            return (0,
            a.jsxs)("button", {
                onClick: C,
                className: "bg-secondaryStroke flex flex-row w-full h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80 transition-all duration-125 cursor-pointer",
                children: [(0,
                a.jsx)(i.A, {
                    src: "/images/phantom-purple.svg",
                    alt: "Phantom logo",
                    width: 16,
                    height: 16
                }), (0,
                a.jsx)("span", {
                    className: "text-[14px] text-textPrimary",
                    children: "Connect with Phantom"
                })]
            })
        }
    }
    ,
    51514: (e, t, r) => {
        r.d(t, {
            A: () => j
        });
        var a = r(95155)
          , n = r(12115)
          , s = r(89229)
          , l = r(61591)
          , i = r(94928)
          , o = r(67438)
          , c = r(12603)
          , x = r.n(c)
          , p = r(43828)
          , d = r(32673)
          , u = r(73004)
          , f = r(7108)
          , m = r(36846)
          , h = r(19953)
          , g = r(4996)
          , y = r(48173)
          , w = r.n(y);
        function j(e) {
            let {onSwitchToLogin: t, onSuccess: r, onClose: o} = e
              , [c,f] = (0,
            n.useState)(1)
              , [m,y] = (0,
            n.useState)("")
              , j = (0,
            n.useRef)(null)
              , [N,S] = (0,
            i.fp)(l.ZT)
              , k = (0,
            i.Xr)(l.XQ)
              , [A,P] = (0,
            n.useState)(!1)
              , C = (0,
            i.md)(l.LM)
              , [T,E] = (0,
            n.useState)(!1)
              , _ = (0,
            i.Xr)(l.JX)
              , B = (0,
            i.Xr)(l._Q);
            async function K() {
                if (C)
                    return p.A.error("You are already signed in");
                if (T)
                    return p.A.error("Please wait for the signup to complete");
                E(!0);
                try {
                    if (!x()(m, {
                        domain_specific_validation: !0
                    }))
                        throw Error("Invalid email");
                    await h.ho.post("/register-email", {
                        email: m
                    }),
                    f(2)
                } catch (e) {
                    p.A.error((0,
                    d.u1)(e))
                } finally {
                    E(!1)
                }
            }
            let F = () => {
                k(!1),
                null == o || o()
            }
              , D = e => {
                A && e.target === e.currentTarget && F()
            }
            ;
            return (0,
            a.jsxs)(s.P.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .15,
                    ease: "easeInOut"
                },
                className: "fixed inset-0 flex items-center justify-center z-50",
                children: [(0,
                a.jsx)(s.P.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .15,
                        ease: "easeInOut"
                    },
                    className: "absolute inset-0 bg-[#090909]/80 backdrop-blur-[2px]",
                    onClick: 2 === c || 3 === c ? () => {}
                    : e => D(e),
                    onMouseDown: e => {
                        e.target === e.currentTarget && P(!0)
                    }
                    ,
                    onMouseUp: () => {
                        requestAnimationFrame( () => P(!1))
                    }
                }), (0,
                a.jsx)(s.P.div, {
                    initial: {
                        scale: .98,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: .98,
                        opacity: 0
                    },
                    transition: {
                        duration: .15,
                        ease: "easeInOut"
                    },
                    className: "flex flex-col w-full max-w-[312px] pt-[16px] pb-[20px] gap-[16px] bg-backgroundTertiary border border-secondaryStroke rounded-[4px] justify-center items-center z-50 shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]",
                    children: 1 === c ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex flex-row w-full gap-[16px]justify-center items-center px-[16px]",
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex flex-row flex-1 gap-[4px] justify-start items-center"
                            }), (0,
                            a.jsx)("div", {
                                className: "flex flex-row flex-1 gap-[4px] justify-center items-center",
                                children: (0,
                                a.jsx)("span", {
                                    className: "whitespace-nowrap text-textSecondary text-[16px] leading-[21px] font-normal tracking-[-0.02em]",
                                    children: "Sign up"
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "flex flex-row flex-1 gap-[4px] justify-end items-center",
                                children: (0,
                                a.jsx)("button", {
                                    className: "flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-primaryStroke/60 rounded-[4px]",
                                    onClick: F,
                                    children: (0,
                                    a.jsx)("i", {
                                        className: "ri-close-line text-textSecondary text-[16px]"
                                    })
                                })
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex flex-col w-full gap-[4px] justify-start items-start",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-textTertiary text-[12px] leading-[16px] font-normal",
                                    children: "Email"
                                }), (0,
                                a.jsx)("input", {
                                    placeholder: "Enter email",
                                    value: m,
                                    onChange: e => y(e.target.value),
                                    onKeyDown: e => {
                                        if ("Enter" === e.key) {
                                            var t;
                                            null === (t = j.current) || void 0 === t || t.focus()
                                        }
                                    }
                                    ,
                                    className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "flex flex-col w-full gap-[4px] justify-start items-start",
                                children: (0,
                                a.jsx)("input", {
                                    ref: j,
                                    placeholder: "Invite code (required)",
                                    value: N || "",
                                    onChange: e => S(e.target.value),
                                    onKeyDown: e => {
                                        "Enter" === e.key && K()
                                    }
                                    ,
                                    className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                                })
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                            children: (0,
                            a.jsx)("button", {
                                onClick: K,
                                className: "bg-primaryBlue flex flex-row w-full h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-[150ms] cursor-pointer",
                                children: (0,
                                a.jsx)("span", {
                                    className: "text-[14px] font-bold text-background",
                                    children: "Sign up"
                                })
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex items-center w-full px-[16px]",
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex-grow h-[1px] bg-secondaryStroke"
                            }), (0,
                            a.jsx)("span", {
                                className: "px-3 text-textTertiary text-[12px] leading-[16px] font-normal",
                                children: "OR"
                            }), (0,
                            a.jsx)("div", {
                                className: "flex-grow h-[1px] bg-secondaryStroke"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                            children: (0,
                            a.jsx)(u.A, {
                                onSuccess: () => {
                                    k(!1),
                                    _(!0),
                                    B(!0),
                                    null == r || r()
                                }
                                ,
                                loadingMessage: "Signing up with Google...",
                                successMessage: "Signed up with Google!"
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                            children: (0,
                            a.jsx)(g.A, {
                                onSuccess: () => {
                                    k(!1),
                                    _(!0),
                                    B(!0),
                                    null == r || r()
                                }
                            })
                        }), (0,
                        a.jsxs)("span", {
                            className: "text-textTertiary text-[12px] leading-[16px] font-normal text-center px-[16px]",
                            children: ["Already have an account?", " ", (0,
                            a.jsx)("button", {
                                className: "text-primaryBlue hover:brightness-110 transition-colors",
                                onClick: () => {
                                    k(!1),
                                    null == t || t()
                                }
                                ,
                                children: "Login"
                            })]
                        }), (0,
                        a.jsxs)("span", {
                            className: "text-textTertiary text-[12px] leading-[16px] font-normal text-center px-[16px]",
                            children: ["By creating an account, you agree to Axiom's", " ", (0,
                            a.jsx)(w(), {
                                href: "/privacy",
                                className: "text-primaryBlue hover:brightness-110 transition-colors",
                                children: "Privacy Policy"
                            }), " ", "and", " ", (0,
                            a.jsx)(w(), {
                                href: "/terms",
                                className: "text-primaryBlue hover:brightness-110 transition-colors",
                                children: "Terms of Service"
                            })]
                        })]
                    }) : 2 === c ? (0,
                    a.jsx)(v, {
                        email: m,
                        onBack: () => f(1),
                        onSuccess: () => f(3),
                        onClose: F
                    }) : 3 === c ? (0,
                    a.jsx)(b, {
                        email: m,
                        setStep: f,
                        onSuccess: r,
                        onClose: F
                    }) : (0,
                    a.jsx)("div", {
                        children: (0,
                        a.jsx)("span", {
                            children: "Step 4"
                        })
                    })
                })]
            })
        }
        function v(e) {
            let {email: t, onBack: r, onSuccess: s, onClose: l} = e
              , [i,o] = (0,
            n.useState)(["", "", "", "", "", ""])
              , [c,x] = (0,
            n.useState)("")
              , u = (0,
            n.useRef)([])
              , [f,m] = (0,
            n.useState)(60)
              , g = (0,
            n.useRef)()
              , [y,j] = (0,
            n.useState)(!1);
            (0,
            n.useEffect)( () => (v(),
            () => clearInterval(g.current)), []);
            let v = () => {
                g.current && clearInterval(g.current),
                g.current = setInterval( () => {
                    m(e => e <= 1 ? (clearInterval(g.current),
                    0) : e - 1)
                }
                , 1e3)
            }
              , b = async e => {
                if (y)
                    return p.A.error("Please wait for the verification to complete");
                if (j(!0),
                e.every(e => "" !== e)) {
                    let a = e.join("");
                    try {
                        await h.ho.post("/verify-otp", {
                            code: a,
                            email: t
                        }),
                        x(""),
                        s()
                    } catch (e) {
                        var r;
                        x("Invalid verification code"),
                        o(["", "", "", "", "", ""]),
                        null === (r = u.current[0]) || void 0 === r || r.focus()
                    } finally {
                        j(!1)
                    }
                }
            }
            ;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-row w-full gap-[16px] justify-center items-center px-[16px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-start items-center",
                        children: (0,
                        a.jsx)("button", {
                            onClick: r,
                            className: "flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-primaryStroke/60 rounded-[4px]",
                            children: (0,
                            a.jsx)("i", {
                                className: "ri-arrow-left-line text-textSecondary text-[16px]"
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-center items-center tracking-[-0.02em]",
                        children: (0,
                        a.jsx)("span", {
                            className: "whitespace-nowrap text-textSecondary text-[16px] leading-[21px] text-center font-normal",
                            children: "Confirmation Code"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-end items-center",
                        children: (0,
                        a.jsx)("button", {
                            className: "flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-primaryStroke/60 rounded-[4px]",
                            onClick: l,
                            children: (0,
                            a.jsx)("i", {
                                className: "ri-close-line text-textSecondary text-[16px]"
                            })
                        })
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                    children: (0,
                    a.jsxs)("span", {
                        className: "text-textSecondary text-center text-[12px] leading-[16px] font-normal",
                        children: ["We've sent a verification code to ", t]
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col w-full gap-[16px] justify-center items-center px-[16px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "flex flex-row w-full h-[56px] gap-[8px] justify-start items-start",
                        children: [0, 1, 2, 3, 4, 5].map(e => (0,
                        a.jsx)("input", {
                            ref: t => {
                                u.current[e] = t
                            }
                            ,
                            type: "text",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            maxLength: 1,
                            value: i[e],
                            onChange: t => {
                                let r = t.target.value.replace(/[^0-9]/g, "")
                                  , a = [...i];
                                if (a[e] = r,
                                o(a),
                                r) {
                                    if (e < 5) {
                                        var n;
                                        null === (n = u.current[e + 1]) || void 0 === n || n.focus()
                                    } else
                                        b(a)
                                }
                            }
                            ,
                            onKeyDown: t => {
                                if ("Backspace" === t.key) {
                                    t.preventDefault();
                                    let a = [...i];
                                    if (a[e] = "",
                                    o(a),
                                    e > 0) {
                                        var r;
                                        null === (r = u.current[e - 1]) || void 0 === r || r.focus(),
                                        a[e - 1] = "",
                                        o(a)
                                    }
                                }
                            }
                            ,
                            onPaste: e => {
                                var t;
                                e.preventDefault();
                                let r = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6)
                                  , a = [...i];
                                r.split("").forEach( (e, t) => {
                                    t < 6 && (a[t] = e)
                                }
                                ),
                                o(a);
                                let n = Math.min(r.length - 1, 5);
                                null === (t = u.current[n]) || void 0 === t || t.focus(),
                                a.every(e => "" !== e) && b(a)
                            }
                            ,
                            className: "bg-transparent text-white placeholder:text-textTertiary text-center text-[14px] leading-[21px] font-normal flex flex-row flex-1 w-full h-[56px] px-[12px] gap-[4px] justify-start items-center rounded-[4px] border border-secondaryStroke outline-none"
                        }, e))
                    }), c && (0,
                    a.jsx)("span", {
                        className: "text-decrease text-[12px] leading-[16px] font-normal",
                        children: c
                    }), f > 0 ? (0,
                    a.jsxs)("span", {
                        className: "text-textTertiary text-[12px] leading-[16px] font-normal",
                        children: ["You can resend a new code in", " ", (0,
                        a.jsx)("span", {
                            className: "text-textSecondary",
                            children: f
                        }), " seconds"]
                    }) : (0,
                    a.jsx)("button", {
                        onClick: async () => {
                            try {
                                var e;
                                await h.ho.post("/register-email", {
                                    email: t
                                }),
                                m(60),
                                v(),
                                o(["", "", "", "", "", ""]),
                                null === (e = u.current[0]) || void 0 === e || e.focus()
                            } catch (e) {
                                p.A.error((0,
                                d.u1)(e))
                            }
                        }
                        ,
                        className: "text-primaryBlue hover:brightness-110 text-[12px] leading-[16px] font-normal transition-all",
                        children: "Resend code"
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "bg-secondaryStroke flex flex-row w-full h-[1px] justify-center items-center"
                }), (0,
                a.jsxs)("span", {
                    className: "text-textTertiary text-[12px] leading-[16px] font-normal text-center px-[16px]",
                    children: ["By creating an account, you agree to Axiom's", " ", (0,
                    a.jsx)(w(), {
                        href: "/privacy",
                        className: "text-primaryBlue hover:brightness-110 transition-colors",
                        children: "Privacy Policy"
                    }), " ", "and", " ", (0,
                    a.jsx)(w(), {
                        href: "/terms",
                        className: "text-primaryBlue hover:brightness-110 transition-colors",
                        children: "Terms of Service"
                    })]
                })]
            })
        }
        function b(e) {
            var t;
            let {email: r, setStep: s, onSuccess: c, onClose: x} = e
              , [u,g] = (0,
            n.useState)(!1)
              , [y,j] = (0,
            n.useState)(!1)
              , [v,b] = (0,
            n.useState)("")
              , [N,S] = (0,
            n.useState)("")
              , [k,A] = (0,
            n.useState)("")
              , P = (0,
            n.useRef)(null)
              , C = null === (t = (0,
            i.md)(l.ZT)) || void 0 === t ? void 0 : t.trim().toLowerCase()
              , T = (0,
            i.Xr)(l._Q)
              , E = (0,
            i.Xr)(l.JX)
              , _ = (0,
            m.Vb)()
              , [B,K] = (0,
            n.useState)(!1)
              , F = () => {
                null == c || c(),
                E(!0),
                T(!0),
                x()
            }
            ;
            async function D() {
                if (v.length < 8) {
                    A("Password must be at least 8 characters");
                    return
                }
                if (v.length > 128) {
                    A("Password must be less than 128 characters");
                    return
                }
                if (!v || !N) {
                    A("Please fill in both password fields");
                    return
                }
                if (v !== N) {
                    A("Passwords do not match");
                    return
                }
                if (B)
                    return p.A.error("Please wait for the signup to complete");
                K(!0);
                let e = p.A.loading("Signing up...", {
                    duration: 1 / 0
                })
                  , t = await (0,
                o.E)(v)
                  , {privateKey: a, clientSecret: n, publicKey: s} = await (0,
                f.X)(v);
                try {
                    let {orgId: l, userId: i} = await h.ho.post("/register-password", {
                        email: r,
                        b64Password: t,
                        referrer: C,
                        apiPublicKey: s,
                        clientSecret: n
                    });
                    _({
                        type: "api",
                        apiPrivateKey: a
                    }, l, i, "email", F),
                    p.A.success("Signed up", {
                        toastId: e
                    })
                } catch (t) {
                    p.A.error("Failed signing up: " + (0,
                    d.u1)(t), {
                        toastId: e
                    }),
                    A((0,
                    d.u1)(t));
                    return
                } finally {
                    K(!1)
                }
            }
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-row w-full gap-[16px] justify-center items-center px-[16px]",
                    children: [(0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-start items-center",
                        children: (0,
                        a.jsx)("button", {
                            onClick: () => s(1),
                            className: "flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-primaryStroke/60 rounded-[4px]",
                            children: (0,
                            a.jsx)("i", {
                                className: "ri-arrow-left-line text-textSecondary text-[16px]"
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-center items-center",
                        children: (0,
                        a.jsx)("span", {
                            className: "whitespace-nowrap text-textSecondary text-[16px] leading-[21px] font-normal",
                            children: "Create password"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-row flex-1 gap-[4px] justify-end items-center"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex flex-col w-full gap-[4px] justify-start items-start",
                        children: [(0,
                        a.jsx)("span", {
                            className: "text-textTertiary text-[12px] leading-[16px] font-normal",
                            children: "Password"
                        }), (0,
                        a.jsxs)("div", {
                            className: "relative w-full",
                            children: [(0,
                            a.jsx)("input", {
                                type: u ? "text" : "password",
                                placeholder: "Enter password",
                                value: v,
                                onChange: e => {
                                    b(e.target.value),
                                    A("")
                                }
                                ,
                                onKeyDown: e => {
                                    if ("Enter" === e.key) {
                                        var t;
                                        null === (t = P.current) || void 0 === t || t.focus()
                                    }
                                }
                                ,
                                autoComplete: "new-password",
                                className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] pr-[36px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                            }), (0,
                            a.jsx)("button", {
                                onClick: () => g(!u),
                                className: "absolute right-[12px] top-1/2 -translate-y-1/2",
                                children: (0,
                                a.jsx)("i", {
                                    className: "ri-".concat(u ? "eye-line" : "eye-off-line", " text-textTertiary text-[14px] hover:text-textSecondary")
                                })
                            })]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col w-full gap-[4px] justify-start items-start",
                        children: (0,
                        a.jsxs)("div", {
                            className: "relative w-full",
                            children: [(0,
                            a.jsx)("input", {
                                ref: P,
                                type: y ? "text" : "password",
                                placeholder: "Confirm password",
                                value: N,
                                onChange: e => {
                                    S(e.target.value),
                                    A("")
                                }
                                ,
                                onKeyDown: e => {
                                    "Enter" === e.key && D()
                                }
                                ,
                                autoComplete: "new-password",
                                className: "bg-transparent text-white placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[12px] pr-[36px] gap-[4px] justify-start items-center rounded-[999px] border border-secondaryStroke outline-none"
                            }), (0,
                            a.jsx)("button", {
                                onClick: () => j(!y),
                                className: "absolute right-[12px] top-1/2 -translate-y-1/2",
                                children: (0,
                                a.jsx)("i", {
                                    className: "ri-".concat(y ? "eye-line" : "eye-off-line", " text-textTertiary text-[14px] hover:text-textSecondary")
                                })
                            })]
                        })
                    }), k && (0,
                    a.jsx)("span", {
                        className: "text-decrease text-[12px] leading-[16px] font-normal",
                        children: k
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "flex flex-col w-full gap-[8px] justify-center items-center px-[16px]",
                    children: (0,
                    a.jsx)("button", {
                        onClick: D,
                        className: "bg-primaryBlue flex flex-row w-full h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-[150ms] cursor-pointer",
                        children: (0,
                        a.jsx)("span", {
                            className: "text-[14px] font-bold text-background",
                            children: "Continue"
                        })
                    })
                }), (0,
                a.jsx)("div", {
                    className: "bg-secondaryStroke flex flex-row w-full h-[1px] justify-center items-center"
                }), (0,
                a.jsxs)("span", {
                    className: "text-textTertiary text-[12px] leading-[16px] font-normal text-center px-[16px]",
                    children: ["By creating an account, you agree to Axiom's", " ", (0,
                    a.jsx)(w(), {
                        href: "/privacy",
                        className: "text-primaryBlue hover:brightness-110 transition-colors",
                        children: "Privacy Policy"
                    }), " ", "and", " ", (0,
                    a.jsx)(w(), {
                        href: "/terms",
                        className: "text-primaryBlue hover:brightness-110 transition-colors",
                        children: "Terms of Service"
                    })]
                })]
            })
        }
    }
    ,
    51529: (e, t, r) => {
        r.d(t, {
            A: () => i
        });
        var a = r(95155)
          , n = r(12115)
          , s = r(5565);
        let l = /^https?:\/\/.+/
          , i = (0,
        n.memo)(e => {
            let {tokenTicker: t, src: r, alt: i, width: o, height: c, className: x} = e
              , [p,d] = (0,
            n.useState)(!1);
            return (0,
            a.jsx)(s.default, {
                src: !p && r && (l.test(r) || r.startsWith("/images/")) ? ["file://", "C:\\"].some(e => r.startsWith(e)) ? "/pfps/Question_pfp.webp" : r : t && /^[a-zA-Z]$/.test(t[0]) ? "/pfps/".concat(t[0].toUpperCase(), "_pfp.webp") : "/pfps/Question_pfp.webp",
                alt: null != i ? i : "",
                width: o,
                height: c,
                style: {
                    objectFit: "cover"
                },
                onError: () => d(!0),
                className: x
            })
        }
        )
    }
    ,
    7108: (e, t, r) => {
        r.d(t, {
            X: () => o
        });
        var a = r(6249)
          , n = r(5852)
          , s = r.n(n)
          , l = r(75927).Buffer;
        let i = new (s())("ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632550",16);
        async function o(e, t) {
            for (; ; ) {
                let r = t ? Uint8Array.from(atob(t), e => e.charCodeAt(0)) : crypto.getRandomValues(new Uint8Array(32))
                  , n = await window.crypto.subtle.importKey("raw", new TextEncoder().encode(e), "PBKDF2", !1, ["deriveBits"])
                  , o = await window.crypto.subtle.deriveBits({
                    name: "PBKDF2",
                    salt: r,
                    iterations: 6e5,
                    hash: "SHA-256"
                }, n, 256)
                  , c = l.from(o).toString("hex");
                if (new (s())(c,16).lt(i)) {
                    let e = l.from((0,
                    a.lG)(c)).toString("hex");
                    return {
                        privateKey: c,
                        publicKey: e,
                        clientSecret: l.from(r).toString("base64")
                    }
                }
                if (t)
                    throw Error("Failed to generate API key")
            }
        }
    }
    ,
    67438: (e, t, r) => {
        r.d(t, {
            E: () => s
        });
        var a = r(75927).Buffer;
        let n = new Uint8Array([217, 3, 161, 123, 53, 200, 206, 36, 143, 2, 220, 252, 240, 109, 204, 23, 217, 174, 79, 158, 18, 76, 149, 117, 73, 40, 207, 77, 34, 194, 196, 163])
          , s = async e => {
            let t = new TextEncoder().encode(e)
              , r = await window.crypto.subtle.importKey("raw", t, "PBKDF2", !1, ["deriveBits"])
              , s = await window.crypto.subtle.deriveBits({
                name: "PBKDF2",
                salt: n,
                iterations: 6e5,
                hash: "SHA-256"
            }, r, 256);
            return a.from(s).toString("base64")
        }
    }
}]);

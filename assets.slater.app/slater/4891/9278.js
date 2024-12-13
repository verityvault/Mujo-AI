function attr(e, t) {
    if ("string" != typeof t || "" === t.trim()) return e;
    switch (typeof e) {
        case "boolean":
            return "true" === t || "false" !== t && e;
        case "number":
            return isNaN(t) ? e : +t;
        case "string":
            return t;
        default:
            return e
    }
}

function setupScrollScrub(e, t) {
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate(r) {
            if (t.scrollDirection && e.timeScale() !== r.direction && e.timeScale(r.direction), t.scrollScrub) {
                let t = gsap.utils.clamp(-60, 60, .006 * r.getVelocity());
                gsap.to(e, {
                    timeScale: t,
                    duration: .5,
                    overwrite: !0
                })
            }
        }
    })
}

function setupPauseControl(e, t, r) {
    window.matchMedia("(pointer: fine)").matches && e.on("mouseenter mouseleave", (function(e) {
        let a = "mouseenter" === e.type;
        r.timeScale(a ? 0 : 1), t.toggleClass("is-paused", a)
    })), t.on("click", (function() {
        let e = $(this).hasClass("is-paused");
        r.timeScale(e ? 1 : 0), $(this).toggleClass("is-paused")
    }))
}
$("[tr-marquee-element='component']").each((function() {
    let e = $(this),
        t = e.find("[tr-marquee-element='panel']"),
        r = e.find("[tr-marquee-element='triggerhover']"),
        a = e.find("[tr-marquee-element='triggerclick']"),
        i = {
            speed: attr(100, e.attr("tr-marquee-speed")),
            vertical: attr(!1, e.attr("tr-marquee-vertical")),
            reverse: attr(!1, e.attr("tr-marquee-reverse")),
            scrollDirection: attr(!1, e.attr("tr-marquee-scrolldirection")),
            scrollScrub: attr(!1, e.attr("tr-marquee-scrollscrub"))
        },
        s = i.reverse ? 100 : -100;
    i.speed = (i.vertical ? t.first().height() : t.first().width()) / i.speed;
    let l = gsap.timeline({
        repeat: -1
    }).fromTo(t, i.vertical ? {
        yPercent: 0
    } : {
        xPercent: 0
    }, {
        [i.vertical ? "yPercent" : "xPercent"]: s,
        ease: "none",
        duration: i.speed
    });
    i.scrollScrub && setupScrollScrub(l, i), setupPauseControl(r, a, l)
}));
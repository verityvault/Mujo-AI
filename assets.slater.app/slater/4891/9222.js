document.querySelectorAll("[scramble]").forEach((t => {
    gsap.timeline({
        scrollTrigger: {
            trigger: t,
            start: "top bottom-=15%"
        }
    }).to(t, {
        scrambleText: {
            text: t.textContent,
            chars: "+?84564XERSHKZN",
            speed: 1,
            tweenLength: !0
        },
        duration: 2
    })
}));
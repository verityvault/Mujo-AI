function createAnimation(t, e, i = "") {
    gsap.from(typeSplit.chars, {
        opacity: 0,
        duration: .2,
        ease: "power3.inOut",
        stagger: t,
        scrollTrigger: {
            trigger: "[animate]",
            start: e,
            end: i,
            scrub: !0
        }
    })
}
gsap.registerPlugin(SplitText, ScrollTrigger);
let typeSplit = new SplitText("[animate]", {
    types: "lines, words, chars",
    tagName: "span"
});
ScrollTrigger.saveStyles(typeSplit.chars), ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {
        createAnimation(.1, "top bottom-=10%")
    },
    "(max-width: 991px)": function() {
        createAnimation(.1, "top bottom-=5%", "top center")
    }
});
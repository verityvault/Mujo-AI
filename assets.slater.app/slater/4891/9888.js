gsap.to(".load_grid-item", {
    opacity: 0,
    duration: .001,
    stagger: {
        amount: .5,
        from: "random"
    },
    onComplete: () => $(".load_grid").hide()
}), $("a:not(.next_theme_link)").on("click", (function(o) {
    if (this.hostname === window.location.hostname && !this.href.includes("#") && "_blank" !== this.target) {
        o.preventDefault();
        let t = this.href;
        $(".load_grid").css("display", "grid"), gsap.fromTo(".load_grid-item", {
            opacity: 0
        }, {
            opacity: 1,
            duration: .001,
            stagger: {
                amount: .5,
                from: "random"
            },
            onComplete: () => window.location = t
        })
    }
})), window.onpageshow = function(o) {
    o.persisted && window.location.reload()
};
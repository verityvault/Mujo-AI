$(".next_theme_link").on("click", (function(e) {
    e.preventDefault();
    let t = Flip.getState(".next_wrap");
    gsap.set(".next_wrap", {
        position: "absolute"
    }), gsap.timeline({
        onComplete: function() {
            gsap.set(".load_grid", {
                display: "grid"
            }), gsap.fromTo(".load_grid-item", {
                opacity: 0
            }, {
                opacity: 1,
                duration: .001,
                stagger: {
                    amount: .5,
                    from: "random"
                },
                onComplete: () => window.location = $(".next_theme_link").attr("href")
            })
        }
    }).to(".next_item", {
        width: "100%",
        height: "100vh",
        duration: 1.4,
        ease: "power3.inOut"
    }).to([".next_theme_visual", ".next_theme_img"], {
        clipPath: "polygon(0 0%, 0% 0, 100% 0, 100% 0%, 100% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 100%, 0% 100%, 0 100%)",
        duration: 1.4,
        ease: "power3.inOut"
    }, "<").to(".next_theme_visual", {
        padding: 0,
        duration: 1.4,
        ease: "power3.inOut"
    }, "<"), $(".fixed-container").append($(".next_wrap")), Flip.from(t, {
        duration: 1.4,
        ease: "power3.inOut",
        absolute: !0
    })
})), window.onpageshow = function(e) {
    e.persisted && window.location.reload()
};
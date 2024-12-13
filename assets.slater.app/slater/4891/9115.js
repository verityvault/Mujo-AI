function applyViewChange(e) {
    let i = Flip.getState(".ugc_visual, .ugc_content");
    $(".ugc_list, .ugc_item, .ugc_visual").toggleClass("list-view", e), Flip.from(i, {
        duration: e ? 1 : .8,
        ease: e ? "power4.inOut" : "expo.out",
        nested: !0
    }), $(".view_button").removeClass("pressed").css("opacity", "0.3"), $(e ? ".view_button.list_view" : ".view_button.grid_view").addClass("pressed").css("opacity", "1")
}

function setViewBasedOnWidth() {
    applyViewChange(767 >= $(window).width())
}
let resizeTimer;
$(".view_button").on("click", (function() {
    applyViewChange($(this).hasClass("list_view"))
})), setViewBasedOnWidth(), $(window).resize((function() {
    clearTimeout(resizeTimer), resizeTimer = setTimeout(setViewBasedOnWidth, 250)
}));
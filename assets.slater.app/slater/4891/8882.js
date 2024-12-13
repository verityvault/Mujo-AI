let music = new Howl({
    src: ["https://cdn.jsdelivr.net/gh/madebykin/neocultural/healing-forest_Cut.mp3"],
    loop: !0,
    html5: !0
});
$(".audio_wrap").one("click", (function() {
    music.play(), $(this).on("click", (function() {
        $(this).toggleClass("muted"), Howler.mute($(this).hasClass("muted"))
    }))
})), $("#trigger-button").on("click", (function() {
    $(".audio_wrap").trigger("click")
}));
/* menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-md:top-[74px] max-md:top-0 max-md:-translate-y-full")
    $("#overlay").toggleClass("hidden")
})
/* menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-md:top-[129px] max-md:top-0 max-md:-translate-y-full")
    $("#overlay").toggleClass("hidden")
})


/* subway */
$(".subwayToggler").each((i,el) => {
    $(el).click(() => {
        $("#subway, #overlay").show(300)
    })
})
$("#overlay").click(() => {
    $("#subway, #overlay").hide(300)
})


/* nav-slider */
const swiper = new Swiper('.nav-slider', {
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },    
    spaceBetween: 20,
    breakpoints: {
        320: {
          slidesPerView: 1,        
        },
        375: {
          slidesPerView: 2,        
        },
        768: {
          slidesPerView: 4,         
        },
        1024: {
          slidesPerView: 8,         
        },
        1280: {
          slidesPerView: 10,         
        }
    }
});
/* card-slider */
const swiper2 = new Swiper('.card-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1
});


/* likeButton */
$(".likeButton").each((i, el) => {
    $(el).click(() => {
        $(el).find("svg").toggleClass("fill-white fill-[#EE5253]")
    })
})


/* filters */
$(".filtersList").each((i, el) => {
    $(el).find(".toggler").click(() => {
        $(el).find(".list").slideToggle()
    })
})
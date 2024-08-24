/* menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-md:top-[129px] max-md:top-0 max-md:-translate-y-full")
    $("#overlay").toggle(500)
    $("header").toggleClass("z-[6]")
})


/* subway */
$("#subwayToggler").click(() => {
    $("#subway, #overlay").show(300)
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
/* card-page-slider */
const swiper3 = new Swiper('.girlPage-slider2', {
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        }
    },
    freeMode: true,
    watchSlidesProgress: true
});
const swiper4 = new Swiper('.girlPage-slider', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: swiper3,
    }
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
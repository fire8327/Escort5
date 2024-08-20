/* menu */
$("#toggler, #overlay").click(() => {
    $("#menu").toggleClass("max-md:top-[129px] max-md:top-0 max-md:-translate-y-full")
    $("#overlay").toggleClass("hidden")
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
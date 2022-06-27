window.addEventListener("scroll", function () {
    var x = document.querySelector(".header");
    x.classList.toggle("sticky", window.scrollY > 100);
})
function show_menu() {

    var menu = document.querySelector(".nav-menu");
    if (menu.style.top == "0px") {
        menu.style.top = "-300px";
    }
    else {
        menu.style.top = "0px";
    }

}
function behaviour(evt)
{
    evt.style.transition = "all 0.5s ease";
    evt.style.fill = "rgb(25, 194, 56)";
}
function remove_behaviour(evt)
{
    evt.style.transition = "all 0.5s ease";
    evt.style.fill = "#fff";
    
}

var swiper = new Swiper(".category", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      810: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
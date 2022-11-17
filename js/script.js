let navbar = document.querySelector(".header .navbar");

let contactInfo = document.querySelector(".contact-info");
let langMenu = document.querySelector(".lang-menu");
let langbtn = document.querySelector(".lang-btn");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  langbtn.classList.remove("clicked");
  langMenu.classList.remove("activee");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
  navbar.classList.remove("active");
  langbtn.classList.remove("clicked");
  langMenu.classList.remove("activee");

};
document.querySelector("#info-btnn").onclick = () => {
  contactInfo.classList.add("active");
  navbar.classList.remove("active");
  langbtn.classList.remove("clicked");
  langMenu.classList.remove("activee");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

document.querySelector("#lang-btn").onclick = () => {
  langbtn.classList.toggle("clicked")
  langMenu.classList.toggle("activee");
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
  langbtn.classList.remove("clicked");
  langMenu.classList.remove("activee");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
});

// var swiper = new Swiper(".reviews-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".blogs-slider", {
//    loop:true,
//    grabCursor:true,
//    spaceBetween: 20,
//    breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//    },
// });

// var swiper = new Swiper(".logo-slider", {
//    loop:true,
//    grabCursor:true,
//    autoplay:{delay:800,disableOnInteraction: false},
//    spaceBetween: 10,
//    breakpoints: {
//       450: {
//          slidesPerView: 3,
//        },
//       640: {
//         slidesPerView: 3,
//       },
//       768: {
//         slidesPerView: 4,
//       },
//       1000: {
//         slidesPerView: 5,
//       },
//    },
// });

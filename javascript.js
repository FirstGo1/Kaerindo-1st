
// -------JavaScript for toggle Menu------

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

//  Swiper for  tampilan depan
let swiperTampilanDepan = new Swiper(".swiper-tampilan-depan", {
  loop: true,
  // effect: 'fade',
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

// ---------- galeri --------- 
var index = new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 17,
  autoplay: {
    delay: 2000,
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  breakpoints: {
    800: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});




//  ONCLICK zoom
document.querySelectorAll("#swiper-2 .swiper-slide img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

const popupImage = document.querySelector('.popup-image');
const img = document.querySelector('.onclick-img-jpg');
const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');

img.addEventListener('click', () => {
  popupImage.style.display = 'block';
});

zoomIn.addEventListener('click', () => {
  img.style.width = '80%';
});

zoomOut.addEventListener('click', () => {
  img.style.width = '50%';
});







// ----------------- GALERI HTML ---------- 
const container = document.querySelector(".rows")
const likeBtns = document.querySelector(".like-btn")

var swiper = new Swiper(".rows .swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 2500,
  freeMode: true,
  allowTouchMove: true,
  lazyLoading: true,
  autoplay: {
    delay: 0,
  },
});

// function stopAutoplay() {
//   const swiperTranslate = swiper.getTranslate();
//   swiper.setTranslate(swiperTranslate);
//   swiper.autoplay.stop();
// }

// function startAutoplay() {
//   swiper.slideTo(swiper.activeIndex, 3000, false);
//   swiper.autoplay.start();
// }

// container.addEventListener("mouseenter", () => stopAutoplay());
// container.addEventListener("mouseleave", () => startAutoplay());

// likeBtns.forEach((likeBtn) => {
//   likeBtn.addEventListener("click", () => {
//     likeBtn.classList.toggle("active");
//     likeBtn.classList.toggle("pulse");
//   });
// });

// -------------- ZOOOM ONCLICK -------- 

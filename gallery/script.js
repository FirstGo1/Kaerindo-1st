// -------JavaScript for toggle Menu------

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}












// ---------- galeri 1 ----------- 
// ---------- galeri --------- 
var index = new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
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
    300: {
      slidesPerView: 2,
      spaceBetween: 2,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});

// ------------ onclick zoom img --------- 

document.querySelectorAll("#swiper-2 .swiper-slide img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

// ✅ Klik di luar gambar = close popup
document.querySelector(".popup-image").addEventListener("click", function (e) {
  // jika yang diklik adalah popup-image langsung (bukan img atau span)
  if (e.target === this) {
    this.style.display = "none";
  }
});


// ----------------- GALERI HTML ----------
const container = document.querySelector(".myGallery");
const likeBtns = document.querySelectorAll(".like-btn");

var swiper = new Swiper(".myGallery .swiper", {
  spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,
  speed: 6000,
  freeMode: true,
  allowTouchMove: true,
  lazyLoading: true,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    300: { spaceBetween: 10},
    768: { spaceBetween: 12},
    1024: { spaceBetween: 15 },
  },
});

function stopAutoplay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}

function startAutoplay() {
  swiper.slideTo(swiper.activeIndex, 1000, false);
  swiper.autoplay.start();
}

container.addEventListener("mouseenter", () => stopAutoplay());
container.addEventListener("mouseleave", () => startAutoplay());

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("active");
    likeBtn.classList.toggle("pulse");
  });
});









// ----------- test ----------
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex',
  sidebar.classList.add('show')
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// --------------- scroll ------------- 
window.addEventListener('scroll', function() {
  var navBawah = document.querySelector('.nav-bawah');
  var scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    navBawah.classList.add('show');
  } else {
    navBawah.classList.remove('show');
  }
});


const swipers = new Swiper('.logo-swiper', {
  wrapperClass: 'logo-wrapper',
  slideClass: 'logo-slide',
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  speed: 20000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    320: { slidesPerView: 3 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
});


// ----------------------- fadeinDown ----------
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInDown'); // Animasi hanya ini
        observer.unobserve(entry.target); // animasi hanya 1x
      }
    });
  }, {
    threshold: 0.3
  });

  // Ubah selector di bawah ini sesuai elemen yang mau kamu animasikan
  const elementsToAnimate = document.querySelectorAll('.judult');
  elementsToAnimate.forEach(el => observer.observe(el));
});

// ----------------------- fadeinupcustom ----------

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeInUpCustom'); // Animasi hanya ini
        observer.unobserve(entry.target); // animasi hanya 1x
      }
    });
  }, {
    threshold: 0.3
  });

  // Ubah selector di bawah ini sesuai elemen yang mau kamu animasikan
  const elementsToAnimate = document.querySelectorAll('hero-btn, .tim1, .abuabu, .kaerindo-col, .para' );
  elementsToAnimate.forEach(el => observer.observe(el));
});













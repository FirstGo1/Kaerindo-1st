function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  (sidebar.style.display = "flex"), sidebar.classList.add("show");
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// --------------- scroll -------------
window.addEventListener("scroll", function () {
  var navBawah = document.querySelector(".nav-bawah");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 1000) {
    navBawah.classList.add("show");
  } else {
    navBawah.classList.remove("show");
  }
});




// -------JavaScript for toggle Menu------

// var navLinks = document.getElementById("navLinks");

// function showMenu() {
//   navLinks.style.right = "0";
// }
// function hideMenu() {
//   navLinks.style.right = "-200px";
// }

//  Swiper for  tampilan depan
let swiperTampilanDepan = new Swiper(".swiper-tampilan-depan", {
  loop: true,
  // effect: 'fade',
  // autoplay: {
  //   delay: 8000,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },
});

// ---------- galeri --------- 
var index = new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
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
      centeredSlides: true,
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




//  ONCLICK zoom


document.querySelectorAll("#swiper-2 .swiper-slide img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image .close-button").onclick = () => {
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





// --------- KR RUN categories  ------------

const categories = document.querySelectorAll('.category');

function checkCategories() {
  const triggerBottom = window.innerHeight * 0.85;

  categories.forEach(category => {
    const boxTop = category.getBoundingClientRect().top;
    const boxBottom = category.getBoundingClientRect().bottom;

    if (boxTop < triggerBottom && boxBottom > 0) {
      category.classList.add('show');
    } else {
      category.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkCategories);
window.addEventListener('load', checkCategories);




// Set target date
const eventDate = new Date("September 28, 2025 06:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
};

// Run countdown every second
setInterval(countdown, 1000);
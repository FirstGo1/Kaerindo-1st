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
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },

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


// ------------ nav - tentang maintenance -------
const tentangKamiLinks = document.querySelectorAll('.nav-tentang');

tentangKamiLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Maintenance',
      text: 'Halaman Tentang Kami sedang dalam perbaikan. Mohon tunggu ya!',
      confirmButtonText: 'Oke',
      confirmButtonColor: '#3085d6'
    });
  });
});
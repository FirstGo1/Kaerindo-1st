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
    // type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },
});


function toggleDescription(id) {
  const description = document.getElementById(id);
  if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block";
  } else {
      description.style.display = "none";
  }
}

document.querySelectorAll('.rule-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active'); // toggle + dan -
    const content = title.nextElementSibling;
    content.classList.toggle('show'); // show/hide konten
  });
});

// ------------- transisi scroll -------
function checkScrollFadeDirection() {
  const triggerBottom = window.innerHeight * 0.85;
  const elements = document.querySelectorAll(
    '.scroll-fade-up, .scroll-fade-down, .scroll-fade-left, .scroll-fade-right'
  );

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const inView = top < triggerBottom && bottom > 0;

    el.classList.toggle('show', inView);
  });
}

window.addEventListener('scroll', checkScrollFadeDirection);
window.addEventListener('load', checkScrollFadeDirection);



// ----------------- faq---------------



document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('open');

    // Tutup yang lain
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== parent) i.classList.remove('open');
    });
  });
});



// -------countdown utama ----------


// Set target date
const eventDate = new Date("September 28, 2025 05:30:00").getTime();

const updateTime = (id, value) => {
  const element = document.getElementById(id);
  if (element.textContent !== value) {
    element.classList.add("animate");
    element.textContent = value;
    setTimeout(() => {
      element.classList.remove("animate");
    }, 300);
  }
};

const countdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    updateTime("days", "00");
    updateTime("hours", "00");
    updateTime("minutes", "00");
    updateTime("seconds", "00");
    return;
  }

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

  updateTime("days", days);
  updateTime("hours", hours);
  updateTime("minutes", minutes);
  updateTime("seconds", seconds);
};

setInterval(countdown, 1000);




  document.querySelector('.team-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Hindari reload
    Swal.fire({
      title: ' Registrasi KR RUN',
      text: 'Akan dibuka pada hari Sabtu, 5 Juli 2025, pukul 15:30 WIB.',
      icon: 'warning',
      confirmButtonText: 'Oke, siap!',
      confirmButtonColor: '#d00000', // warna tombol merah
      iconColor: '#d00000', // warna ikon merah juga
    });
  });


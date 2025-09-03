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




  // Tambah class 'loading' agar halaman tidak scroll
  window.addEventListener('load', () => {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const preloader = document.getElementById('preloader');
    const logo = document.querySelector('.logo-center');
  
    setTimeout(() => {
      // ✨ Fade out logo dulu
      logo.classList.add('fade-out');
  
      // 🕐 Delay sedikit sebelum buka pintu
      setTimeout(() => {
        leftDoor.classList.add('open-left');
        rightDoor.classList.add('open-right');
  
        // ⏳ Hapus preloader setelah pintu buka
        setTimeout(() => {
          preloader.style.opacity = '0';
          preloader.style.transition = 'opacity 0.5s ease';
          document.body.classList.remove('loading');
  
          setTimeout(() => {
            preloader.remove();
          }, 500);
        }, 1000);
  
      }, 300); // Waktu logo fade out duluan
    }, 1800);
  });





  function showCommunityTerms() {
    Swal.fire({
      title: 'Syarat Pendaftaran Komunitas',
      html: `
        <style>
           .swal2-title {
           font-size: 20px !important;
           font-weight: 600;
           font-family: 'Poppins', sans-serif;
           } 
          .swal2-checkbox-group {
            text-align: left;
            font-size: 15px;
            line-height: 1.6;
            animation: fadeSlide 0.5s ease forwards;
          }

          .swal2-checkbox-label {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
             font-size: 14px;
             line-height: 1.4;
            opacity: 0;
            animation: fadeSlide 0.4s ease forwards;
          }
            .swal2-checkbox-label span {
            flex: 1;
            }
          .swal2-checkbox-label:nth-child(1) { animation-delay: 0.1s; }
          .swal2-checkbox-label:nth-child(2) { animation-delay: 0.2s; }
          .swal2-checkbox-label:nth-child(3) { animation-delay: 0.3s; }

          .swal2-checkbox-label input[type="checkbox"] {
            margin-top: 5px;
            width: 18px;
            height: 18px;
            accent-color: #d00000;
            cursor: pointer;
          }

          .swal2-checkbox-label span::after {
            content: '';
            margin-left: 8px;
            color: #d00000;
            font-weight: bold;
            transition: opacity 0.3s ease;
          }

          .swal2-checkbox-label input[type="checkbox"]:checked + span::after {
            content: '🏃‍♂️';
          }

          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        </style>

        <div class="swal2-checkbox-group">
          <label class="swal2-checkbox-label">
            <input type="checkbox" id="c1">
            <span>Beli <strong>10</strong> tiket gratis <strong>1</strong> tiket</span>
          </label>
          <label class="swal2-checkbox-label">
            <input type="checkbox" id="c2">
            <span>10 orang yang di daftarkan wajib memilih <strong>kategori</strong> dan <strong>asuransi</strong> yang sama termasuk tiket gratisnya.</span>
          </label>

        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Setuju',
      confirmButtonColor: '#d00000',
      cancelButtonText: 'Tidak Setuju',
      showCancelButton: true,
      focusConfirm: true,
      preConfirm: () => {
        const c1 = document.getElementById('c1').checked;
        const c2 = document.getElementById('c2').checked;

        if (!c1 || !c2) {
          Swal.showValidationMessage('Harap centang semua syarat terlebih dahulu.');
          return false;
        }

        window.location.href = "https://krrun.titipbayar.id/pendaftaran/komunitas";
      }
    });
  }

  


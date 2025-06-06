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


// --------- categories  ------------

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




const eventDate = new Date("2025-09-27T06:00:00").getTime();
const countdown = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.innerHTML = `🕒 Event dimulai ${days} hari lagi!`;
}, 1000);




// ----------------- faq---------------


const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Tutup semua
    items.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = '0';
    });

    // Kalau tadinya belum terbuka → buka dia
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });

  // Setelah selesai transisi buka, reset height supaya responsif
  answer.addEventListener('transitionend', () => {
    if (item.classList.contains('open')) {
      answer.style.maxHeight = 'none';
    }
  });
});




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
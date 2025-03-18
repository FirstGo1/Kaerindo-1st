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

//   ------------------- klik diluar element ------------
// const menu = document.querySelector('menu-button');

// document.addEventListener('click', function (e) {
//     if (!menu.contains(e.target) && !sidebar.contains(e.target)) {
//       navbarNav.classList.remove('active');
//     }
// });




// ---------- bagian form------------ 
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[required], select[required]');
const button = form.querySelector('.formbold-btn');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const allFilled = Array.from(inputs).every((input) => input.value !== '');
    if (allFilled) {
      button.classList.remove('disabled');
      button.disabled = false;
    } else {
      button.classList.add('disabled');
      button.disabled = true;
    }
  });
});




// ---------- pop-up syarat ----------
const syaratKetentuanLink = document.querySelector('.syarat-ketentuan-link');
const syaratKetentuanPopup = document.querySelector('.syarat-ketentuan-popup');
const syaratKetentuanPopupClose = document.querySelector('.syarat-ketentuan-popup-close');

syaratKetentuanLink.addEventListener('click', () => {
  syaratKetentuanPopup.style.display = 'block';
});

syaratKetentuanPopupClose.addEventListener('click', () => {
  syaratKetentuanPopup.style.display = 'none';
});

syaratKetentuanLink.addEventListener('click', (e) => {
    e.preventDefault();
    syaratKetentuanPopup.style.display = 'block';
});   


const riwayatKesehatanSelect = document.getElementById('riwayat_kesehatan');
const riwayatKesehatanLainnyaInput = document.getElementById('riwayat_kesehatan_lainnya');

riwayatKesehatanSelect.addEventListener('change', () => {
    if (riwayatKesehatanSelect.value === 'Lainnya') {
      riwayatKesehatanSelect.style.display = 'none';
      riwayatKesehatanLainnyaInput.style.display = 'block';
    } else {
      riwayatKesehatanSelect.style.display = 'block';
      riwayatKesehatanLainnyaInput.style.display = 'none';
    }
  });








  // ---------- midtrans ----------- 









  // ----------- translator manual --------
  const translation = {
    id: {
      element_1 : "Apa yang akan kamu dapatkan?",
      element_2 : "Bisa mengikuti acara kegiatan didalam kaerindo jaya komunikasi",
      // element_3 : ,
      // element_4 : ,
      // element_5 : ,
    },
    en: {
      element_1 : "What will you get?",
      element_2 : "Can participate in events and activities within Kaerindo Jaya Komunikasi",
      // element_3 : ,
      // element_4 : ,
      // element_5 : ,
    }
  }
  const languageSelector = document.querySelector("#language-switcher-mobile");

let elements_1 = document.getElementsByClassName("element_1");

  languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value)
  })

const setLanguage = (language) => {
  if (language == "en"){
    console.log(language);
  }else if(language == "id"){
    console.log(language)
  }
}

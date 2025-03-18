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




// --------- Mengaktifkan Tombol "Beli Tiket" ------ 

// const form = document.querySelector('form');
// const inputs = form.querySelectorAll('input[required]');
// const button = form.querySelector('button');

// inputs.forEach((input) => {
//   input.addEventListener('input', () => {
//     const allFilled = Array.from(inputs).every((input) => input.value !== '');
//     button.disabled = !allFilled;
//   });
// });

// --------- tombol asterisk merah ---------
// const form = document.querySelector('form');
// const inputs = form.querySelectorAll('input[required]');
// const labels = form.querySelectorAll('.formbold-form-label');

// inputs.forEach((input) => {
//   input.addEventListener('input', () => {
//     const label = input.nextElementSibling;
//     if (input.value !== '') {
//       label.classList.remove('required');
//       label.classList.add('filled');
//     } else {
//       label.classList.remove('filled');
//       label.classList.add('required');
//     }
//   });
// });

// ------------- form validation submit not allowed----------
// const formboldBtn = document.querySelector('#formboldButton');
// formboldBtn.disabled = true;

// form.addEventListener('keyup', function () {
//     for (let i = 0; i < form.elements.length; i++) {
//         if (form.elements[i].value.length !== 0) {
//            formboldBtn.classList.remove('disabled'); 
//            formboldBtn.classList.add('disabled'); 
//         } else {
//             return false;
//         }
//     }
//     formboldBtn.disabled = false;
//     formboldBtn.classList.remove('disabled');
// })

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
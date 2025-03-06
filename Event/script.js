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
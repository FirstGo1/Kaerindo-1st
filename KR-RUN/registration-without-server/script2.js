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
  if (scrollPosition > 200) {
    navBawah.classList.add("show");
  } else {
    navBawah.classList.remove("show");
  }
});

// ---------- bagian form------------
// const form = document.querySelector("form");
// const inputs = form.querySelectorAll("input[required], select[required]");
// const button = form.querySelector(".formbold-btn");

// inputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     const allFilled = Array.from(inputs).every((input) => input.value !== "");
//     if (allFilled) {
//       button.classList.remove("disabled");
//       button.disabled = false;
//     } else {
//       button.classList.add("disabled");
//       button.disabled = true;
//     }
//   });
// });



// ------------ popup syarat 2------------
const formboldBtn = document.querySelector(".formbold-btn");
const termsBox = document.querySelector(".terms-box");
const termsBoxClose = document.querySelector(".terms-box-close");
const formboldPolicyCheckbox = document.querySelector('#syarat-ketentuan');

formboldPolicyCheckbox.addEventListener('change', () => {
  if (formboldPolicyCheckbox.checked) {
    termsBox.classList.add('show');
  } else {
    termsBox.classList.remove('show');
  }
});



termsBoxClose.addEventListener("click", () => {
  termsBox.classList.remove("show");
});

// ----- disabled button accept ---
document
  .getElementById("terms-checkbox")
  .addEventListener("change", function () {
    if (this.checked) {
      document.getElementById("accept-btn").disabled = false;
    } else {
      document.getElementById("accept-btn").disabled = true;
    }
  });

// ----------accept & decline button close popup-----------
const declineBtn = document.querySelector(".gray-btn");
declineBtn.addEventListener("click", () => {
  termsBox.classList.remove("show");
});
const acceptBtn = document.querySelector(".red-btn");
acceptBtn.addEventListener("click", () => {
  termsBox.classList.remove("show");
});


// --------------- form riwayat kesehatan = pilihan lainnya ----------
const riwayatKesehatanSelect = document.getElementById("riwayat_kesehatan");
const riwayatKesehatanLainnyaInput = document.getElementById(
  "riwayat_kesehatan_lainnya"
);

riwayatKesehatanSelect.addEventListener("change", () => {
  if (riwayatKesehatanSelect.value === "Lainnya") {
    riwayatKesehatanSelect.style.display = "none";
    riwayatKesehatanLainnyaInput.style.display = "block";
  } else {
    riwayatKesehatanSelect.style.display = "block";
    riwayatKesehatanLainnyaInput.style.display = "none";
  }
});


// -------- sweet alert button --------
document.getElementById('formboldButton').addEventListener('click', function (e) {
  e.preventDefault();

  const requiredFields = [
    'nama_lengkap',
    'jenis_kelamin',
    'tanggal_lahir',
    'nomor_telepon',
    //'negara',
    //'wilayah',
    //'provinsi',
    //'kota',
    'email',
    'kategori_lomba',
    'komunitas_lari',
    'ukuran_kaos',
    'riwayat_kesehatan',
    'golongan_darah',
    'tipe_nomor',
    'nomor_identitas',
    'asuransi',
    'alamat_domisili',
    'nama_kontak_darurat',
    'number_kontak_darurat'
  ];

  let errors = [];

  requiredFields.forEach(function(id) {
    const field = document.getElementById(id);
    if (field && field.value.trim() === '') {
      errors.push(field);
      field.classList.add('error-field');
    } else if (field) {
      field.classList.remove('error-field');
    }
  });

  const syaratCheckbox = document.getElementById('syarat-ketentuan');
  if (!syaratCheckbox.checked) {
    errors.push({ type: 'checkbox', field: syaratCheckbox });
    syaratCheckbox.classList.add('error-checkbox');
  } else {
    syaratCheckbox.classList.remove('error-checkbox');
  }

  if (errors.length > 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Lengkapi Formulir!',
      html: `
        <div style="text-align:left;">
          ${errors.map(err => {
            let label = '';
            if (err.type === 'checkbox') {
              label = 'Persetujuan Syarat dan Ketentuan';
            } else if (err.previousElementSibling && err.previousElementSibling.innerText.trim() !== '') {
              label = err.previousElementSibling.innerText;
            } else {
              switch (err.name) {
                case 'nama_kontak_darurat':
                  label = 'Nama Kontak Darurat';
                  break;
                case 'number_kontak_darurat':
                  label = 'Nomor Kontak Darurat';
                  break;
                default:
                  label = err.name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              }
            }
            return `<div style="margin-bottom:5px;">⚠️ ${label}</div>`;
          }).join('')}
        </div>
      `,
      confirmButtonText: 'Oke, Saya Lengkapi',
    });

    if (errors[0].scrollIntoView) {
      errors[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

  } else {
    Swal.fire({
      icon: 'success',
      title: 'Semua Data Lengkap!',
      text: 'Silakan lanjutkan ke pembayaran.',
      showCancelButton: true,
      confirmButtonText: 'Bayar Sekarang',
      cancelButtonText: 'Nanti Saja',
      confirmButtonColor: '#28a745',
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          nama_lengkap: document.getElementById('nama_lengkap').value.trim(),
          email: document.getElementById('email').value.trim(),
          nomor_telepon: document.getElementById('nomor_telepon').value.trim()
        };

        fetch('/create-transaction', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          if (data.token) {
            if (typeof window.snap === 'undefined') {
              Swal.fire('Error', 'Midtrans Snap belum dimuat. Cek client-key atau koneksi.', 'error');
              return;
            }

            window.snap.pay(data.token, {
              onSuccess: function (result) {
                Swal.fire('Sukses!', 'Pembayaran berhasil.', 'success');
                console.log(result);
              },
              onPending: function (result) {
                Swal.fire('Menunggu Pembayaran', 'Transaksi belum selesai.', 'info');
                console.log(result);
              },
              onError: function (result) {
                Swal.fire('Gagal', 'Pembayaran gagal.', 'error');
                console.log(result);
              }
            });
          } else {
            Swal.fire('Gagal', 'Terlalu banyak permintaan. Coba lagi dalam 15 menit nanti.', 'error');
          }
        })
        .catch(err => {
          console.error('Gagal mendapatkan token:', err);
          Swal.fire('Oops!', 'Gagal membuat transaksi. Coba lagi nanti.', 'error');
        });
      }
    });
  }
});


fetch('/midtrans-client-key')
  .then(res => res.json())
  .then(data => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', data.clientKey);
    document.head.appendChild(script);
  })
  .catch(err => {
    console.error('Gagal memuat Midtrans client key:', err);
  });








// ------ maintenance tentang kami--------
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


document.addEventListener('DOMContentLoaded', () => {
  const wilayah = document.getElementById('wilayah');
  const provinsi = document.getElementById('provinsi');
  const kota = document.getElementById('kota');

  const wilayahChoice = new Choices(wilayah, { searchEnabled: true });
  const provinsiChoice = new Choices(provinsi, { searchEnabled: true });
  const kotaChoice = new Choices(kota, { searchEnabled: true });

  // Ambil data wilayah
  fetch('/api/wilayah')
    .then(res => res.json())
    .then(data => {
      wilayahChoice.clearChoices();
      wilayahChoice.setChoices(
        data.map(w => ({ value: w, label: format(w) })),
        'value',
        'label',
        true
      );
    });

  // Saat wilayah dipilih, muat provinsi
  wilayah.addEventListener('change', () => {
    const selectedWilayah = wilayah.value;
    provinsiChoice.clearChoices();
    kotaChoice.clearChoices();
    provinsi.setAttribute('disabled', true);
    provinsiChoice.disable();
    kota.setAttribute('disabled', true);
    kotaChoice.disable();

    fetch(`/api/provinsi?wilayah=${selectedWilayah}`)
      .then(res => res.json())
      .then(data => {
        provinsiChoice.setChoices(
          data.map(p => ({ value: p, label: format(p) })),
          'value',
          'label',
          true
        );
        provinsi.removeAttribute('disabled');
        provinsiChoice.enable();
      });
  });

  // Saat provinsi dipilih, muat kota
  provinsi.addEventListener('change', () => {
    const selectedWilayah = wilayah.value;
    const selectedProvinsi = provinsi.value;
    kotaChoice.clearChoices();
    kota.setAttribute('disabled', true);
    kotaChoice.disable();

    fetch(`/api/kota?wilayah=${selectedWilayah}&provinsi=${selectedProvinsi}`)
      .then(res => res.json())
      .then(data => {
        kotaChoice.setChoices(
          data.map(k => ({ value: k, label: format(k) })),
          'value',
          'label',
          true
        );
        kota.removeAttribute('disabled');
        kotaChoice.enable();
      });
  });

  // Format label jadi kapital dan spasi
  function format(str) {
    return str.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
});



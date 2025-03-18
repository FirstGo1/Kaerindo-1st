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


  const translations = {
    id: {
      formTitle: "Registrasi sekarang",
      nameLabel: "Nama Lengkap",
      jenisKelaminLabel: "Jenis Kelamin",
      tanggalLahirLabel: "Tanggal Lahir",
      nomorIdentitasLabel: "Nomor Identitas",
      alamatDomisiliLabel: "Alamat Domisili",
      nomorTeleponLabel: "Nomor Whatsapp",
      emailLabel: "Email",
      kategoriLombaLabel: "Kategori Lomba",
      komunitasLariLabel: "Komunitas Lari",
      ukuranKaosLabel: "Ukuran Baju",
      riwayatKesehatanLabel: "Riwayat Kesehatan",
      golonganDarahLabel: "Golongan Darah",
      kontakDaruratLabel: "Kontak Darurat (Nama / No Telepon)",
      syaratKetentuan: "Saya telah membaca dan menyetujui syarat dan ketentuan",
      beliTiket: "Beli Tiket"
    },
    en: {
      formTitle: "Register now",
      nameLabel: "Full Name",
      jenisKelaminLabel: "Gender",
      tanggalLahirLabel: "Date of Birth",
      nomorIdentitasLabel: "Identity Number",
      alamatDomisiliLabel: "Residential Address",
      nomorTeleponLabel: "Whatsapp Number",
      emailLabel: "Email",
      kategoriLombaLabel: "Competition Category",
      komunitasLariLabel: "Running Community",
      ukuranKaosLabel: "Shirt Size",
      riwayatKesehatanLabel: "Health History",
      golonganDarahLabel: "Blood Type",
      kontakDaruratLabel: "Emergency Contact (Name / Phone Number)",
      syaratKetentuan: "I have read and agree to the terms and conditions",
      beliTiket: "Buy Ticket"
    }
  };
  
  function setLanguage(language) {
    const formTitle = document.querySelector(".formbold-form-title");
    const nameLabel = document.querySelector("label[for='nama_lengkap']");
    const jenisKelaminLabel = document.querySelector("label[for='jenis_kelamin']");
    const tanggalLahirLabel = document.querySelector("label[for='tanggal_lahir']");
    const nomorIdentitasLabel = document.querySelector("label[for='nomor_identitas']");
    const alamatDomisiliLabel = document.querySelector("label[for='alamat_domisili']");
    const nomorTeleponLabel = document.querySelector("label[for='nomor_telepon']");
    const emailLabel = document.querySelector("label[for='email']");
    const kategoriLombaLabel = document.querySelector("label[for='kategori_lomba']");
    const komunitasLariLabel = document.querySelector("label[for='komunitas_lari']");
    const ukuranKaosLabel = document.querySelector("label[for='ukuran_kaos']");
    const riwayatKesehatanLabel = document.querySelector("label[for='riwayat_kesehatan']");
    const golonganDarahLabel = document.querySelector("label[for='golongan_darah']");
    const kontakDaruratLabel = document.querySelector("label[for='kontak_darurat']");
    const syaratKetentuanLabel = document.querySelector("label[for='syarat-ketentuan']");
    const beliTiketButton = document.querySelector(".formbold-btn");
  
    if (language == "en"){
      formTitle.innerText = translations.en.formTitle;
      nameLabel.innerText = translations.en.nameLabel;
      jenisKelaminLabel.innerText = translations.en.jenisKelaminLabel;
      tanggalLahirLabel.innerText = translations.en.tanggalLahirLabel;
      nomorIdentitasLabel.innerText = translations.en.nomorIdentitasLabel;
      alamatDomisiliLabel.innerText = translations.en.alamatDomisiliLabel;
      nomorTeleponLabel.innerText = translations.en.nomorTeleponLabel;
      emailLabel.innerText = translations.en.emailLabel;
      kategoriLombaLabel.innerText = translations.en.kategoriLombaLabel;
      komunitasLariLabel.innerText = translations.en.komunitasLariLabel;
      ukuranKaosLabel.innerText = translations.en.ukuranKaosLabel;
      riwayatKesehatanLabel.innerText = translations.en.riwayatKesehatanLabel;
      golonganDarahLabel.innerText = translations.en.golonganDarahLabel;
      kontakDaruratLabel.innerText = translations.en.kontakDaruratLabel;
      syaratKetentuanLabel.innerText = translations.en.syaratKetentuan;
      beliTiketButton.innerText = translations.en.beliTiket;
    } else if(language == "id"){
      formTitle.innerText = translations.id.formTitle;
      nameLabel.innerText = translations.id.nameLabel;
      jenisKelaminLabel.innerText = translations.id.jenisKelaminLabel;
      tanggalLahirLabel.innerText = translations.id.tanggalLahirLabel;
      nomorIdentitasLabel.innerText = translations.id.nomorIdentitasLabel;
      alamatDomisiliLabel.innerText = translations.id.alamatDomisiliLabel;
      nomorTeleponLabel.innerText = translations.id.nomorTeleponLabel;
      emailLabel.innerText = translations.id.emailLabel;
      kategoriLombaLabel.innerText = translations.id.kategoriLombaLabel;
      komunitasLariLabel.innerText = translations.id.komunitasLariLabel;
      ukuranKaosLabel.innerText = translations.id.ukuranKaosLabel;
      riwayatKesehatanLabel.innerText = translations.id.riwayatKesehatanLabel;
      golonganDarahLabel.innerText = translations.id.golonganDarahLabel;
      kontakDaruratLabel.innerText = translations.id.kontakDaruratLabel;
      syaratKetentuanLabel.innerText = translations.id.syaratKetentuan;
      beliTiketButton.innerText = translations.id.beliTiket;
    }
  }
  
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  
  languageSwitchers.forEach((languageSwitcher) => {
    languageSwitcher.addEventListener('change', (event) => {
      setLanguage(event.target.value)
    });
  });


// -------------- translations manual ---------

  // -----------------------------INDONESIA--------------------------
  $(function() {
    $(".id").click(function(){
      $(".language-selected").text("ID");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").addClass("change-id");
      $(".language-selected:before").css("background-image", "url(https://flagsapi.com/ID/flat/64.png)");
  
       // Translate nav
      $(".nav-beranda").text("Beranda");
      $(".nav-tentang").text("Tentang");
      $(".nav-galeri").text("Galeri");
      $(".nav-registrasi").text("Registrasi");
      $(".nav-hubungi").text("Hubungi");
  
          
        // ------ Utama --------
  
      // ----- Detail Acara ------
      $(".formbold-event-details h5").text("Detail acara");
      $(".formbold-event-details ul li:nth-child(1)").text("27 September, 2025");
      $(".formbold-event-details ul li:nth-child(2)").text("08:30am - 06:00pm");
      $(".formbold-event-details ul li:nth-child(3)").text("Yogyakarta, Yogyakarta");
      $(".formbold-event-details ul li:nth-child(4)").text("Informasi tambahan");
  
  
      // Translate isi form
      $(".form-title").text("Registrasi sekarang");
      $(".name-label").text("Nama Lengkap");
      $(".jenis-kelamin-label").text("Jenis Kelamin");
      $(".tanggal-lahir-label").text("Tanggal Lahir");
      $(".nomor-identitas-label").text("Nomor Identitas");
      $(".alamat-domisili-label").text("Alamat Domisili");
      $(".nomor-telepon-label").text("Nomor Whatsapp");
      $(".email-label").text("Email");
      $(".kategori-lomba-label").text("Kategori Lomba");
      $(".komunitas-lari-label").text("Komunitas Lari");
      $(".ukuran-kaos-label").text("Ukuran Baju");
      $(".riwayat-kesehatan-label").text("Riwayat Kesehatan");
      $(".golongan-darah-label").text("Golongan Darah");
      $(".kontak-darurat-label").text("Kontak Darurat (Nama / No Telepon)");
      $(".syarat-ketentuan-label").text("Saya telah membaca dan menyetujui syarat dan ketentuan");
      $(".syarat-ketentuan-link").text("Lihat syarat dan ketentuan");
      $(".beli-tiket-button").text("Beli Tiket");
  
      // ---------syarat popup------------
      $(".syarat-ketentuan-popup h2").text("Pemesanan/Pembelian Tiket");
      $(".syarat-ketentuan-popup ul li:nth-child(1)").text("Pemesanan/pembelian tiket dianggap berhasil atau selesai setelah Anda melakukan pelunasan pembayaran dan kaerindojaya.com menerbitkan dan mengirim e-ticket ke Anda. Apabila terjadi perselisihan atau permasalahan, maka data yang terdapat pada kaerindojaya.com akan menjadi acuan utama dan dianggap sah.");
      $(".syarat-ketentuan-popup ul li:nth-child(2)").text("Dengan menyelesaikan pemesanan/pembelian, maka Anda dianggap setuju untuk menerima: email yang memberikan informasi tentang tiket yang Anda beli, dan menyediakan Anda informasi dan penawaran tertentu (termasuk penawaran Pihak Penyelenggara Event) yang terkait dengan pemesanan Anda.");
      $(".syarat-ketentuan-popup ul li:nth-child(3)").text("Masa berlaku e-ticket adalah sebagaimana ditentukan oleh Pihak Penyelenggara Event kami.");
      $(".syarat-ketentuan-popup ul li:nth-child(4)").text("Kecuali ditentukan lain oleh Pihak Penyelenggara Event, e-ticket hanya dapat digunakan oleh yang namanya tercantum pada e-ticket.");
  
    });
  
          // ---------------------English----------------
  
    $(".en").click(function(){
      $(".language-selected").text("EN");
      $(".language-selected").removeClass("change-id");
      $(".language-selected").addClass("change-en");
      $(".language-selected:before").css("background-image", "url(https://flagsapi.com/US/flat/64.png)");
  
      // Translate nav
      $(".nav-beranda").text("Home");
      $(".nav-tentang").text("About");
      $(".nav-galeri").text("Gallery");
      $(".nav-registrasi").text("Registration");
      $(".nav-hubungi").text("Contact");
  
      // ------ Utama --------
      $(".formbold-event-wrapper span").text("Kaerindo Jaya Komunikasi");
      $(".formbold-event-wrapper h3").text("Jelajah Kedaulatan Rakyat");
      $(".formbold-event-wrapper h4").text("What will you get?");
      $(".formbold-event-wrapper p").text("Can participate in events within kaerindo jaya communication");
      // ----- Detail Acara ------
      $(".formbold-event-details h5").text("Event details");
      $(".formbold-event-details ul li:nth-child(1)").text("September 27, 2025");
      $(".formbold-event-details ul li:nth-child(2)").text("08:30am - 06:00pm");
      $(".formbold-event-details ul li:nth-child(3)").text("Yogyakarta, Indonesia");
      $(".formbold-event-details ul li:nth-child(4)").text("Additional information");
  
        // Translate isi form
      $(".form-title").text("Register now");
      $(".name-label").text("Full Name");
      $(".jenis-kelamin-label").text("Gender");
      $(".tanggal-lahir-label").text("Date of Birth");
      $(".nomor-identitas-label").text("Identity Number");
      $(".alamat-domisili-label").text("Residential Address");
      $(".nomor-telepon-label").text("Whatsapp Number");
      $(".email-label").text("Email");
      $(".kategori-lomba-label").text("Competition Category");
      $(".komunitas-lari-label").text("Running Community");
      $(".ukuran-kaos-label").text("Shirt Size");
      $(".riwayat-kesehatan-label").text("Health History");
      $(".golongan-darah-label").text("Blood Type");
      $(".kontak-darurat-label").text("Emergency Contact (Name / Phone Number)");
      $(".syarat-ketentuan-label").text("I have read and agree to the terms and conditions");
      $(".syarat-ketentuan-link").text("View terms and conditions");
      $(".beli-tiket-button").text("Buy Ticket");
  
      // ----------Popup Syarat------------
      $(".syarat-ketentuan-popup h2").text("Ticket Purchase");
      $(".syarat-ketentuan-popup ul li:nth-child(1)").text("The purchase of tickets is considered successful or completed after you have made payment and kaerindojaya.com has issued and sent an e-ticket to you. If there is a dispute or problem, then the data contained on kaerindojaya.com will be the primary reference and considered valid.");
      $(".syarat-ketentuan-popup ul li:nth-child(2)").text("By completing the purchase, you are deemed to agree to receive: email that provides information about the ticket you purchased, and provides you with information and certain offers (including offers from the Event Organizer) related to your purchase.");
      $(".syarat-ketentuan-popup ul li:nth-child(3)").text("The validity period of the e-ticket is as determined by the Event Organizer.");
      $(".syarat-ketentuan-popup ul li:nth-child(4)").text("Unless otherwise specified by the Event Organizer, the e-ticket can only be used by the person whose name is listed on the e-ticket.");
  
    });
  });
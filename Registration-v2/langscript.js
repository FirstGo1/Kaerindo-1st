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
      $(".registrasi").text("Registrasi Sekarang !");
      $(".1 ").text("Nama Lengkap");
      $(".2").text("Jenis Kelamin");
      $(".3").text("Tanggal Lahir");
      $(".4").text("Nomor Identitas");
      $(".5").text("Nomor Telepon");
      $(".6").text("Kontak Darurat");
      $(".7").text("Email");
      $(".8").text("Komunitas Lari");
      $(".9").text("Kategori Lomba");
      $(".10").text("Ukuran Baju");
      $(".11").text("Riwayat Kesehatan");
      $(".12").text("Golongan Darah");
      $(".13").text("Alamat Domisili");
      $(".14").text("Asuransi BPJS");
      $(".15").val("Beli Tiket");

      
  
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
  

      // ----- Detail Acara ------
      $(".formbold-event-details h5").text("Event details");
      $(".formbold-event-details ul li:nth-child(1)").text("27 September, 2025");
      $(".formbold-event-details ul li:nth-child(2)").text("08:30am - 06:00pm");
      $(".formbold-event-details ul li:nth-child(3)").text("Yogyakarta, Yogyakarta");
      $(".formbold-event-details ul li:nth-child(4)").text("Additional information");
  
        // Translate isi form
        $(".registrasi").text("Registration Now !");
      $(".1 ").text("Full Name");
      $(".2").text("Gender");
      $(".3").text("Date of Birth");
      $(".4").text("Identity Number");
      $(".5").text("Phone Number");
      $(".6").text("Emergency Contact");
      $(".7").text("Email");
      $(".8").text("Running Community");
      $(".9").text("Competition Categories");
      $(".10").text("Clothes Size");
      $(".11").text("Health History");
      $(".12").text("Blood Type");
      $(".13").text("Domicile Address");
      $(".14").text("BPJS Insurance");
      $(".15").val("Buy Tickets");
  
      // ----------Popup Syarat------------
      $(".syarat-ketentuan-popup h2").text("Ticket Purchase");
      $(".syarat-ketentuan-popup ul li:nth-child(1)").text("The purchase of tickets is considered successful or completed after you have made payment and kaerindojaya.com has issued and sent an e-ticket to you. If there is a dispute or problem, then the data contained on kaerindojaya.com will be the primary reference and considered valid.");
      $(".syarat-ketentuan-popup ul li:nth-child(2)").text("By completing the purchase, you are deemed to agree to receive: email that provides information about the ticket you purchased, and provides you with information and certain offers (including offers from the Event Organizer) related to your purchase.");
      $(".syarat-ketentuan-popup ul li:nth-child(3)").text("The validity period of the e-ticket is as determined by the Event Organizer.");
      $(".syarat-ketentuan-popup ul li:nth-child(4)").text("Unless otherwise specified by the Event Organizer, the e-ticket can only be used by the person whose name is listed on the e-ticket.");
  
    });
  });
// -------------- translations manual ---------

// -----------------------------INDONESIA--------------------------
$(function () {
  $(".id").click(function () {
    $(".language-selected").text("ID");
    $(".language-selected").removeClass("change-en");
    $(".language-selected").addClass("change-id");
    $(".language-selected:before").css(
      "background-image",
      "url(https://flagsapi.com/ID/flat/64.png)"
    );

    //Nav
    $(".nav-beranda").text("Beranda");
    $(".nav-tentang").text("Tentang");
    $(".nav-galeri").text("Galeri");
    $(".nav-tim").text("Tim");
    $(".nav-registrasi").text("Registrasi");
    $(".nav-hubungi").text("Hubungi");

    //main
    $(".container h2").text("Hubungi Kami");
    $(".depan").text("Nama Depan");
    $(".belakang").text("Nama Belakang");
    $(".email").text("Email");
    $(".no-hp").text("Nomor Hp");
    $(".pesan").text("Tinggalkan Pesanmu disini ...");
    $(".kirim").val("Kirim");
  });

  // ---------------------English----------------

  $(".en").click(function () {
    $(".language-selected").text("EN");
    $(".language-selected").removeClass("change-id");
    $(".language-selected").addClass("change-en");
    $(".language-selected:before").css(
      "background-image",
      "url(https://flagsapi.com/US/flat/64.png)"
    );

    // Translate nav
    $(".nav-beranda").text("Home");
    $(".nav-tentang").text("About");
    $(".nav-galeri").text("Gallery");
    $(".nav-tim").text("Tim");
    $(".nav-registrasi").text("Registration");
    $(".nav-hubungi").text("Contact");

    $(".container h2").text("Contact Us");
    $(".depan").text("First Name");
    $(".belakang").text("Last Name");
    $(".email").text("Email");
    $(".no-hp").text("Phone Number");
    $(".pesan").text("Leave Your Message ...");
    $(".kirim").val("Send");
  });
});

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
      $(".nav-tim").text("Tim");
      $(".nav-registrasi").text("Registrasi");
      $(".nav-hubungi").text("Hubungi");
  
          


      
  
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
      $(".nav-tim").text("Team");
      $(".nav-registrasi").text("Registration");
      $(".nav-hubungi").text("Contact");
  

     
    });
  });
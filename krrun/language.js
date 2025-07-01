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
      
        // Container
      $(".tambahanDalam").text("Tentang KR RUN 2025");
      $(".card h3.card-1").text("Mengapa KR RUN ?");
      $(".card p.para-1").text("Sebagai koran tertua di Indonesia, Kedaulatan Rakyat tidak hanya memulai sejarah, tapi juga terus bergerak bersama zaman. KR Run 2025 digelar sebagai bagian dari perayaan perjalanan panjang 8 windu Kedaulatan Rakyat dalam mengawal informasi sejak era perjuangan kemerdekaan hingga hari ini. Bukan sekadar event lari, KR Run dimaksudkan menghadirkan energi baru dari generasi muda untuk mengenang sejarah lewat langkah kaki yang berlari menyusuri jejak-jejak bersejarah di Kota Yogyakarta.");
      $(".card-2").text("Pengalaman Berlari yang Unik");
      $(".para-2").text("Dengan rute yang melewati ikon-ikon heritage Yogyakarta, KR Run 2025 mengajak peserta untuk berlari sambil menyerap atmosfer sejarah kota ini. Bayangkan berlari melintasi kawasan bersejarah, menyapa bangunan tua, dan merasakan denyut perjalanan kota yang penuh cerita. Ini bukan hanya tentang siapa yang tercepat, tapi tentang merayakan perjalanan, menghormati sejarah, dan membawa semangat Kedaulatan Rakyat terus hidup, dari lembaran koran ke langkah kehidupan nyata.");

      // Categories
      $(".marathon-categories h1").text("Kategori");
      $(".badge.numb-1").text("🌟 Cocok untuk Pemula");
      $(".marathon-categories p").text("Lari jarak pendek untuk pemula atau keluarga.");
      $(".category.delay-1 p").text("Lari jarak pendek untuk pemula atau keluarga.");
      $(".category ul .strong-1").text("Usia");
      $(".category ul .strong-2").text("Waktu");
      $(".category ul .strong-2").text("Biaya");
      $(".category ul .strong-2").text("Keuntungan");
      $(".category ul .strong-2").text("Rute");
  
      // $(".category ul .li-1").text(" Semua umur");
      // $(".category ul .li-2").text(" 06.30 WIB");
      // $(".category ul .li-3").text(" Tidak diketahui");
      // $(".category ul .li-4").text(" Jersey, BIB, Snack, Medali Finisher");
      // $(".category ul .li-5").text("Sekitar pusat kota Yogyakarta dengan view taman kota");

      $(".btn-register").text("Registrasi Sekarang");
      $(".").text("");
      $(".").text("");
      $(".").text("");
      $(".").text("");
      $(".").text("");
      $(".").text("");


      
  
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
  
      // Container
       $(".tambahanDalam").text("About KR RUN 2025");
       $(".card h3.card-1").text("Why KR RUN ?");
       $(".card p.para-1").text("As the oldest newspaper in Indonesia, Kedaulatan Rakyat not only marks the beginning of history, but also continues to evolve with the times. KR Run 2025 is held as part of the celebration of Kedaulatan Rakyat’s eight-decade journey in delivering information—from the era of Indonesia's struggle for independence to the present day. More than just a running event, KR Run is designed to ignite a new spirit among the younger generation, inviting them to honor history by running through the historic landmarks of Yogyakarta City.");
       $(".card-2").text("Run with a Story");
       $(".para-2").text("With a route that passes through Yogyakarta’s iconic heritage sites, KR Run 2025 invites participants to run while soaking in the city’s rich historical atmosphere. Imagine running through historic districts, greeting century-old buildings, and feeling the heartbeat of a city filled with stories. This event is not just about who runs the fastest — it’s about celebrating a journey, honoring history, and keeping the spirit of Kedaulatan Rakyat alive — from the printed page to every real-life stride.");

        // Categories

       $(".marathon-categories h1").text("Categories");
       $(".badge.numb-1").text("🌟 Beginner & Friendly");
       $(".marathon-categories p").text("An easy and enjoyable short run for first timers and families.");
       $(".category.delay-1 p").text("A short-distance run, perfect for beginners and families.");

       $(".category ul .strong-1").text("Age");
       $(".category ul .strong-2").text("Time");
       $(".category ul .strong-3").text("Cost");
       $(".category ul .strong-4").text("Benefit");
       $(".category ul .strong-5").text("Route");
       
      //  $(".category ul .li-1").text(" Fun for All Ages");
      //  $(".category ul .li-2").text(" 06.30 WIB");
      //  $(".category ul .li-3").text(" Unknown");
      //  $(".category ul .li-4").text(" Jersey, BIB, Snack, Medali Finisher");
      //  $(".category ul .li-5").text(" Around downtown Yogyakarta with views of the city park.");
    });

    $(".btn-register").text("Registration Now");
  });
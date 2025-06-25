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

// ------------ contact us to email send --------


let lastSubmitTime = 0; // Untuk rate limiting

function sendMail() {
  // Honeypot anti-bot
  const honeypot = document.getElementById("honeypot").value;
  if (honeypot !== "") {
    console.warn("Bot detected!");
    return;
  }

  // Rate limiting: 10 detik jeda antar kirim
  const now = Date.now();
  const cooldown = 60000; // 30 detik
  if (now - lastSubmitTime < cooldown) {
    Swal.fire({
      title: "Tunggu sebentar!",
      icon: "warning",
      text: "Kamu sudah mengirim, tunggu 1 menit sebelum kirim lagi.",
    });
    return;
  }

  // Ambil nilai input form
  const name = document.getElementById("name_1").value;
  const lastName = document.getElementById("name_2").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Validasi input
  if (name && lastName && email && phone && message) {
    const parms = {
      name,
      lastName,
      email,
      phone,
      message,
    };

    // Kirim via EmailJS
    emailjs.send("service_ci3dv2a", "template_6c9rqwq", parms)
      .then((result) => {
        Swal.fire({
          title: "Berhasil!",
          icon: "success",
          text: "Pesan kamu berhasil dikirim!",
        });
        lastSubmitTime = now; // Update waktu submit terakhir
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal!",
          icon: "error",
          text: error.message,
        });
      });
  } else {
    Swal.fire({
      title: "Form belum lengkap!",
      icon: "error",
      text: "Mohon isi semua field sebelum mengirim.",
    });
  }
}


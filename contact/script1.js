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


/* ========= CONFIG — ganti ini ========== */
const EMAILJS_PUBLIC_KEY = "McH9NmxG3zdc2KN7L";    // dari EmailJS > Account > API Keys (Public Key)
const EMAILJS_SERVICE_ID = "service_ci3dv2a";    // kamu bilang ini
const EMAILJS_TEMPLATE_ID = "template_scftm98";  // kamu bilang ini
const COOLDOWN_SECONDS = 60;                     // 60 detik
/* ======================================== */

/* Init EmailJS */
(function(){
  if(!window.emailjs){
    console.error("EmailJS SDK belum dimuat.");
  } else {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initialized");
  }
})();

/* Utility: validate email simple */
function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Cooldown persistence (ke localStorage supaya tetap walau page reload) */
const COOLDOWN_KEY = "contact_last_sent_at";

function getLastSentAt(){
  const v = localStorage.getItem(COOLDOWN_KEY);
  return v ? Number(v) : 0;
}
function setLastSentAt(ts){
  localStorage.setItem(COOLDOWN_KEY, String(ts));
}
function secondsLeft(){
  const last = getLastSentAt();
  const diff = Math.max(0, COOLDOWN_SECONDS - Math.floor((Date.now() - last)/1000));
  return diff;
}

/* Dom refs */
const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const inputName = document.getElementById("name_1");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const honeypot = document.getElementById("honeypot");

/* when page loads, if cooldown active, disable button and start timer */
(function initCooldownUI(){
  const left = secondsLeft();
  if(left > 0){
    startCooldownUI(left);
  }
})();

let cooldownTimerId = null;
function startCooldownUI(seconds){
  btn.disabled = true;
  const original = btn.value;
  let s = seconds;
  btn.value = `Sent (${s}s)`;
  cooldownTimerId = setInterval(() => {
    s--;
    if(s <= 0){
      clearInterval(cooldownTimerId);
      btn.disabled = false;
      btn.value = original;
      localStorage.removeItem(COOLDOWN_KEY);
    } else {
      btn.value = `Sent (${s}s)`;
    }
  }, 1000);
}

/* Scroll helper to make sure swal visible (fallback) */
function scrollToTopOfViewport() {
  // Scroll the container to try and show the Swal (center)
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Main submit handler */
form.addEventListener("submit", function(e){
  e.preventDefault(); // prevent native submit/reload

  // Honeypot check (bot trap)
  if(honeypot && honeypot.value.trim() !== ""){
    console.warn("Honeypot filled => spam blocked");
    return;
  }

  // Basic validation
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const message = inputMessage.value.trim();

  if(!name || !email || !message){
    Swal.fire({
      icon: "warning",
      title: "Form belum lengkap",
      text: "Mohon lengkapi Nama, Email, dan Pesan.",
      confirmButtonColor: "#ff4655",
      position: "center"
    }).then(() => {
      // focus first empty
      if(!name) inputName.focus();
      else if(!email) inputEmail.focus();
      else inputMessage.focus();
      document.querySelector("form").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    return;
  }

  if(!isValidEmail(email)){
    Swal.fire({
      icon: "error",
      title: "Email tidak valid",
      text: "Tolong masukkan alamat email yang benar.",
      confirmButtonColor: "#ff4655",
      position: "center"
    }).then(()=> inputEmail.focus());
    return;
  }

  // cooldown check
  const last = getLastSentAt();
  if(last && (Date.now() - last) < COOLDOWN_SECONDS * 1000){
    const left = secondsLeft();
    Swal.fire({
      icon: "info",
      title: "Tunggu sebentar",
      text: `Kamu baru mengirim pesan. Coba lagi setelah ${left}s.`,
      confirmButtonColor: "#ff4655",
      position: "center"
    });
    return;
  }

  // Show loading Swal
  Swal.fire({
    title: 'Mengirim pesan...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  // Prepare params; IMPORTANT: keys must match your EmailJS template placeholders {{name}} {{email}} {{message}}
  const params = {
    name: name,
    email: email,
    message: message
  };

  // send with emailjs
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(function(response){
      Swal.close(); // close loading
      // success popup centered & visible
      Swal.fire({
        icon: "success",
        title: "Pesan terkirim!",
        text: "Terima kasih — pesanmu sudah kami terima.",
        confirmButtonColor: "#ff4655",
        position: "center"
      }).then(() => {
        form.reset();
        // set cooldown
        setLastSentAt(Date.now());
        startCooldownUI(COOLDOWN_SECONDS);
        // scroll form (optional)
        document.querySelector(".card").scrollIntoView({ behavior: "smooth", block: "center" });
      });
      console.log("EmailJS success", response);
    }, function(error){
      Swal.close();
      console.error("EmailJS error:", error);
      // Show error (put details in console)
      Swal.fire({
        icon: "error",
        title: "Gagal mengirim",
        text: "Terjadi error saat mengirim. Cek console untuk detail.",
        confirmButtonColor: "#ff4655",
        position: "center"
      });
    });
}); // end submit listener
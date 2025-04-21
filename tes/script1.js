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
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input[required], select[required]");
const button = form.querySelector(".formbold-btn");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(inputs).every((input) => input.value !== "");
    if (allFilled) {
      button.classList.remove("disabled");
      button.disabled = false;
    } else {
      button.classList.add("disabled");
      button.disabled = true;
    }
  });
});



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

// formboldBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   termsBox.classList.add("show");
// });

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







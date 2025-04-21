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

function sendMail() {
  const name = document.getElementById("name_1").value;
  const lastName = document.getElementById("name_2").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name && lastName && email && phone && message) {
    const parms = {
      name,
      lastName,
      email,
      phone,
      message,
    };

    emailjs.send("service_ci3dv2a", "template_6c9rqwq", parms)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.message,
        });
      });
  } else {
    Swal.fire({
      title: "Error!",
      icon: "error",
      text: "Please fill in all fields",
    });
  }
};

let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (var i = 0; i < imgBx.length; i++){
  imgBx[i].addEventListener('mouseover', function(){
    for(var i = 0; i < contentBx.length; i++){
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).
    className = 'contentBx active';

    for(var i = 0; i < imgBx.length; i++){
      imgBx[i].className = 'imgBx';
    }
    this.className = 'imgBx active'
  })
}


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
  if (scrollPosition > 1000) {
    navBawah.classList.add("show");
  } else {
    navBawah.classList.remove("show");
  }
});


// ------------ nav - tentang maintenance -------
const tentangKamiLinks = document.querySelectorAll('.nav-tentang');

tentangKamiLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Maintenance',
      text: 'Halaman Tentang Kami sedang dalam perbaikan. Mohon tunggu ya!',
      confirmButtonText: 'Oke',
      confirmButtonColor: '#3085d6'
    });
  });
});
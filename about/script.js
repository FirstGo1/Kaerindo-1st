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
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

  // ------------- transisi scroll -------
function checkScrollFadeDirection() {
  const triggerBottom = window.innerHeight * 0.85;
  const elements = document.querySelectorAll(
    '.scroll-fade-up, .scroll-fade-down, .scroll-fade-left, .scroll-fade-right'
  );

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const inView = top < triggerBottom && bottom > 0;

    el.classList.toggle('show', inView);
  });
}

window.addEventListener('scroll', checkScrollFadeDirection);
window.addEventListener('load', checkScrollFadeDirection);
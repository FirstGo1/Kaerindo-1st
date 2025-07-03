const eventDate = new Date("July 05, 2025 15:00:00").getTime();

const updateTime = (id, value) => {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.classList.add("animate");
    el.textContent = value;
    setTimeout(() => {
      el.classList.remove("animate");
    }, 300);
  }
};

const countdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => updateTime(id, "00"));
    return;
  }

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
  const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

  updateTime("days", days);
  updateTime("hours", hours);
  updateTime("minutes", minutes);
  updateTime("seconds", seconds);
};

setInterval(countdown, 1000);
countdown(); 

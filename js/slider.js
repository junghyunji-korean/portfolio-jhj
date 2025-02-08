document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".slide-track");
    const items = document.querySelectorAll(".slider-item");
    
    items.forEach(items => {
      const clone = items.cloneNode(true);
      track.appendChild(clone);
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".fade-in");
  images.forEach((img) => {
    img.onload = () => {
      img.classList.add("loaded");
    };
    if (img.complete) {
      // For cached billeder
      img.classList.add("loaded");
    }
  });
});

console.log("Script kører!");

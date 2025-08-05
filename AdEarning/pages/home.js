document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  let current = 0;
  let nextIndex = 1;

  function slideTransition() {
    const currentSlide = slides[current];
    const nextSlide = slides[nextIndex];

    // নতুন স্লাইড ডান পাশ থেকে আসবে (left: 100%)
    nextSlide.style.left = "100%";
    nextSlide.classList.add("active-slide");

    // পরের animation শুরু করতে একটু সময় দাও (next tick)
    requestAnimationFrame(() => {
      currentSlide.style.left = "-100%"; // আগের স্লাইড বামে চলে যাবে
      nextSlide.style.left = "0";         // নতুন স্লাইড আসবে
    });

    // animation শেষ হলে ক্লাস ও অবস্থান রিসেট করো এবং ইনডেক্স আপডেট করো
    setTimeout(() => {
      currentSlide.classList.remove("active-slide");
      currentSlide.style.left = "100%";  // reset করে ডান পাশে নিয়ে যাওয়া

      current = nextIndex;
      nextIndex = (nextIndex + 1) % slides.length;
    }, 800); // CSS transition duration এর সমান
  }

  // প্রতি 3 সেকেন্ডে স্লাইড বদলাবে
  setInterval(slideTransition, 3000);
});

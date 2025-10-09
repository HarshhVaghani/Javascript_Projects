{
    const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      let index = 0;

      function showSlide(i) {
        slides.forEach((slide, idx) => {
          slide.classList.toggle('opacity-100', idx === i);
          slide.classList.toggle('opacity-0', idx !== i);
        });
        dots.forEach((dot, idx) => {
          dot.classList.toggle('bg-white', idx === i);
          dot.classList.toggle('bg-white/50', idx !== i);
        });
        index = i;
      }

      function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
      }

      function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      }

      // Buttons
      document.getElementById('next').addEventListener('click', nextSlide);
      document.getElementById('prev').addEventListener('click', prevSlide);

      // Dots
      dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

      // Initialize
      showSlide(index);
}
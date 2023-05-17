let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  showSlide(0); // İlk slaytın görüntülenmesi

  setInterval(() => {
    nextSlide();
  }, 7000); // Her 3 saniyede bir otomatik geçiş

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }
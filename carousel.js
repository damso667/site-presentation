/* ============================================
   CAROUSEL.JS — Carousel moderne unifié
   Vision Mobile Studio
   ============================================ */

class Carousel {
  constructor(element, options = {}) {
    this.carousel = element;
    this.track = element.querySelector(".carousel-track");
    this.slides = [...element.querySelectorAll(".carousel-slide")];
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;

    // Options
    this.autoPlay = options.autoPlay !== undefined ? options.autoPlay : true;
    this.interval = options.interval || 4000;
    this.pauseOnHover =
      options.pauseOnHover !== undefined ? options.pauseOnHover : true;

    this.autoPlayTimer = null;
    this.isTransitioning = false;

    // Touch support
    this.startX = 0;
    this.isDragging = false;

    this.init();
  }

  init() {
    if (this.totalSlides <= 1) return;

    this.createControls();
    this.createDots();
    this.createProgressBar();
    this.bindEvents();
    this.goToSlide(0);

    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  createControls() {
    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("carousel-btn", "prev");
    prevBtn.innerHTML = "‹";
    prevBtn.setAttribute("aria-label", "Précédent");
    this.carousel.appendChild(prevBtn);

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("carousel-btn", "next");
    nextBtn.innerHTML = "›";
    nextBtn.setAttribute("aria-label", "Suivant");
    this.carousel.appendChild(nextBtn);

    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
  }

  createDots() {
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");

    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement("button");
      dot.classList.add("carousel-dot");
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }

    this.carousel.appendChild(dotsContainer);
    this.dots = [...dotsContainer.querySelectorAll(".carousel-dot")];
  }

  createProgressBar() {
    const progress = document.createElement("div");
    progress.classList.add("carousel-progress");
    this.carousel.appendChild(progress);
    this.progressBar = progress;
  }

  bindEvents() {
    // Navigation buttons
    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    // Dots
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.goToSlide(parseInt(dot.dataset.index));
        this.resetAutoPlay();
      });
    });

    // Pause on hover
    if (this.pauseOnHover) {
      this.carousel.addEventListener("mouseenter", () => this.stopAutoPlay());
      this.carousel.addEventListener("mouseleave", () => {
        if (this.autoPlay) this.startAutoPlay();
      });
    }

    // Touch events for swipe
    this.carousel.addEventListener("touchstart", (e) => this.onTouchStart(e), {
      passive: true,
    });
    this.carousel.addEventListener("touchmove", (e) => this.onTouchMove(e), {
      passive: true,
    });
    this.carousel.addEventListener("touchend", () => this.onTouchEnd());

    // Transition end
    this.track.addEventListener("transitionend", () => {
      this.isTransitioning = false;
    });
  }

  goToSlide(index) {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    // Move track
    const offset = -index * 100;
    this.track.style.transform = `translateX(${offset}%)`;

    // Update dots
    this.dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // Reset progress
    this.resetProgress();
  }

  next() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
    this.resetAutoPlay();
  }

  prev() {
    const prevIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => this.next(), this.interval);
    this.startProgress();
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
    this.stopProgress();
  }

  resetAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  startProgress() {
    if (!this.progressBar) return;
    this.progressBar.style.transition = "none";
    this.progressBar.style.width = "0%";

    requestAnimationFrame(() => {
      this.progressBar.style.transition = `width ${this.interval}ms linear`;
      this.progressBar.style.width = "100%";
    });
  }

  stopProgress() {
    if (!this.progressBar) return;
    this.progressBar.style.transition = "none";
    this.progressBar.style.width = "0%";
  }

  resetProgress() {
    if (this.autoPlay && this.autoPlayTimer) {
      this.startProgress();
    }
  }

  // Touch support
  onTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(e) {
    if (!this.isDragging) return;
    this.endX = e.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;

    const diff = this.startX - (this.endX || this.startX);
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
}

// --- Auto-init all carousels on page ---
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((el) => {
    new Carousel(el, {
      autoPlay: true,
      interval: 4000,
      pauseOnHover: true,
    });
  });
});

# Featured Cars Carousel Implementation Guide

## Overview
This guide will help you add an interactive carousel to the Featured Cars section on your homepage.

## Files to Modify

### 1. index.html

**Location:** Line 8 (in the `<head>` section)

**Add this line after `<link rel="stylesheet" href="style.css" />`:**
```html
<link rel="stylesheet" href="carousel.css" />
```

**Location:** Lines 73-85 (Featured Cars Section)

**Replace the entire Featured Cars section with:**
```html
<!-- Featured Cars Section -->
<section class="featured-cars-section">
  <div class="container">
    <h2>Featured Cars</h2>
    <p class="section-subtitle">Explore our most popular vehicles</p>
    <div class="carousel-container">
      <button class="carousel-btn carousel-btn-prev" id="carouselPrev">
        <span>‹</span>
      </button>
      <div class="featured-cars-carousel" id="featuredCars">
        <!-- Will be populated by JavaScript -->
      </div>
      <button class="carousel-btn carousel-btn-next" id="carouselNext">
        <span>›</span>
      </button>
    </div>
    <div class="carousel-dots" id="carouselDots">
      <!-- Will be populated by JavaScript -->
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a href="cars.html" class="btn btn-primary">View All Cars</a>
    </div>
  </div>
</section>
```

### 2. script.js

**Location:** After the `loadFeaturedCars()` function (around line 199)

**Replace the `loadFeaturedCars()` function with:**
```javascript
// Load Featured Cars on Homepage with Carousel
function loadFeaturedCars() {
    const featuredCarousel = document.getElementById('featuredCars');
    if (!featuredCarousel) return;

    // Show all 6 cars in carousel
    featuredCarousel.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" />
            </div>
            <div class="car-details">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <span class="spec">👥 ${car.seats} Seats</span>
                    <span class="spec">⚙️ ${car.transmission}</span>
                    <span class="spec">⛽ ${car.fuel}</span>
                </div>
                <div class="car-price">₹${car.price}/day</div>
                <div class="car-features">
                    <ul>${car.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
                </div>
                <button class="btn btn-primary btn-full-width" onclick="window.location.href='booking.html'">Book Now</button>
            </div>
        </div>
    `).join('');

    // Initialize carousel
    initCarousel();
}

// Carousel functionality
function initCarousel() {
    const carousel = document.getElementById('featuredCars');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carousel || !prevBtn || !nextBtn) return;

    const cards = carousel.querySelectorAll('.car-card');
    const cardWidth = 340 + 32; // card width + gap
    let currentIndex = 0;
    let autoScrollInterval;

    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToIndex(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function scrollToIndex(index) {
        currentIndex = index;
        carousel.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });
        updateDots();
        resetAutoScroll();
    }

    function scrollNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        scrollToIndex(currentIndex);
    }

    function scrollPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        scrollToIndex(currentIndex);
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(scrollNext, 4000); // Auto-scroll every 4 seconds
    }

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }

    // Event listeners
    prevBtn.addEventListener('click', scrollPrev);
    nextBtn.addEventListener('click', scrollNext);

    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    carousel.addEventListener('mouseleave', startAutoScroll);

    // Start auto-scroll
    startAutoScroll();
}
```

## Features Added

✅ **Navigation Arrows** - Left/Right buttons to manually scroll
✅ **Dot Indicators** - Shows current position in carousel
✅ **Auto-Scroll** - Automatically scrolls every 4 seconds
✅ **Pause on Hover** - Auto-scroll pauses when hovering
✅ **Smooth Transitions** - CSS transitions for smooth scrolling
✅ **Responsive Design** - Works on all screen sizes
✅ **Dark Mode Support** - Styled for both light and dark themes

## Testing

1. Save all files
2. Refresh your browser (Ctrl + F5)
3. The Featured Cars section should now be a carousel
4. Test the arrow buttons
5. Test clicking on the dots
6. Watch the auto-scroll feature

## Note

The `carousel.css` file has already been created with all necessary styles.

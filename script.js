// Car database with images
const cars = [
    { name: 'Honda City', price: 1500, seats: 5, transmission: 'Automatic', fuel: 'Petrol', features: ['AC', 'Power Steering', 'Music System', 'Airbags'], image: 'image/honda-city.png', category: 'standard' },
    { name: 'Maruti Swift', price: 1200, seats: 5, transmission: 'Manual', fuel: 'Petrol', features: ['AC', 'Power Steering', 'Music System'], image: 'image/maruti-swift.png', category: 'standard' },
    { name: 'Hyundai Creta', price: 2500, seats: 7, transmission: 'Automatic', fuel: 'Diesel', features: ['AC', 'Sunroof', 'Leather Seats'], image: 'image/hyundai-creta.png', category: 'standard' },
    { name: 'Toyota Innova', price: 3000, seats: 7, transmission: 'Manual', fuel: 'Diesel', features: ['AC', 'Spacious', 'GPS'], image: 'image/toyota-innova.png', category: 'standard' },
    { name: 'Tata Nexon', price: 1800, seats: 5, transmission: 'Manual', fuel: 'Diesel', features: ['AC', 'Safety Rated', 'Modern Design'], image: 'image/tata-nexon.png', category: 'standard' },
    { name: 'Kia Seltos', price: 2800, seats: 5, transmission: 'Automatic', fuel: 'Diesel', features: ['AC', 'Sunroof', 'Connected Tech'], image: 'image/kia-seltos.png', category: 'standard' }
];

// Premium Luxury Cars
const premiumCars = [
    { name: 'Range Rover Vogue', price: 15000, seats: 5, transmission: 'Automatic', fuel: 'Petrol', features: ['Premium Leather', 'Panoramic Sunroof', 'Massage Seats', 'Advanced Driver Assist'], image: 'image/range rover vogue.webp', category: 'premium' },
    { name: 'Rolls Royce Phantom', price: 60000, seats: 5, transmission: 'Automatic', fuel: 'Petrol', features: ['Starlight Headliner', 'Champagne Cooler', 'Rear Entertainment', 'Bespoke Interior'], image: 'image/Rolls-Royce Phantom Tempus-11.webp', category: 'premium' },
    { name: 'Mercedes S-Class', price: 25000, seats: 5, transmission: 'Automatic', fuel: 'Petrol', features: ['Executive Seats', 'Burmester Sound', 'Air Suspension', 'Night Vision'], image: 'image/mercedes s class.webp', category: 'premium' },
    { name: 'BMW 7 Series', price: 20000, seats: 5, transmission: 'Automatic', fuel: 'Diesel', features: ['Gesture Control', 'Laser Headlights', 'Sky Lounge', 'Executive Lounge'], image: 'image/BMW 7 series.webp', category: 'premium' }
];

// Load cars into carGrid element in cars.html  
function loadCars() {
    const grid = document.getElementById('carGrid');
    if (!grid) return;
    grid.innerHTML = cars.map(car => `
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
}

// Booking form handlers (booking.html)
window.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    const pickupDate = document.getElementById('pickupDate');
    const returnDate = document.getElementById('returnDate');
    const carSelect = document.getElementById('carSelect');
    const studentDiscount = document.getElementById('studentDiscount');

    const pricingSummary = document.getElementById('pricingSummary');
    const discountRow = document.getElementById('discountRow');
    const durationDays = document.getElementById('durationDays');
    const basePrice = document.getElementById('basePrice');
    const discountAmount = document.getElementById('discountAmount');
    const totalPrice = document.getElementById('totalPrice');

    function calculatePrice() {
        if (!pickupDate.value || !returnDate.value || !carSelect.value) return;

        const d1 = new Date(pickupDate.value);
        const d2 = new Date(returnDate.value);
        const days = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));

        if (days < 1) {
            alert('Return date must be after pickup date');
            returnDate.value = '';
            return;
        }

        const daily = Number(carSelect.value);
        const base = daily * days;
        const discount = studentDiscount.checked ? base * 0.2 : 0;
        const total = base - discount;

        durationDays.textContent = `${days} day${days > 1 ? 's' : ''}`;
        basePrice.textContent = `₹${base}`;
        discountAmount.textContent = `-₹${discount}`;
        totalPrice.textContent = `₹${total}`;

        if (studentDiscount.checked) discountRow.style.display = 'flex';
        else discountRow.style.display = 'none';

        pricingSummary.style.display = 'block';
    }

    pickupDate.min = new Date().toISOString().split('T')[0];
    returnDate.min = new Date().toISOString().split('T')[0];

    pickupDate.addEventListener('change', calculatePrice);
    returnDate.addEventListener('change', calculatePrice);
    carSelect.addEventListener('change', calculatePrice);
    studentDiscount.addEventListener('change', calculatePrice);

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const bookingId = 'BK' + Math.floor(Math.random() * 100000);
        const name = document.getElementById('fullName').value;
        const car = carSelect.options[carSelect.selectedIndex].text;
        const pickup = pickupDate.value;
        const ret = returnDate.value;
        const total = totalPrice.textContent;

        const detailsHtml = `
            <p><b>Booking ID:</b> ${bookingId}</p>
            <p><b>Name:</b> ${name}</p>
            <p><b>Car:</b> ${car}</p>
            <p><b>Pickup Date:</b> ${pickup}</p>
            <p><b>Return Date:</b> ${ret}</p>
            <p><b>Total Amount:</b> ${total}</p>
        `;

        alert('Booking Confirmed!\n' + detailsHtml.replace(/<[^>]+>/g, '\n'));

        bookingForm.reset();
        pricingSummary.style.display = 'none';
    });
});

// ===============================
// HOMEPAGE ENHANCEMENTS
// ===============================

// Animated Statistics Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.parentElement.querySelector('.stat-label').textContent.includes('%') ? '' : '+');
        }
    };

    updateCounter();
}

// Intersection Observer for stats animation
if (document.querySelector('.stats-section')) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    if (stat.textContent === '0') {
                        animateCounter(stat);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Load Featured Cars on Homepage
function loadFeaturedCars() {
    const featuredGrid = document.getElementById('featuredCars');
    if (!featuredGrid) return;

    // Show first 3 cars as featured
    const featuredCars = cars.slice(0, 3);

    featuredGrid.innerHTML = featuredCars.map(car => `
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
}

// Load Premium Luxury Cars on Homepage
function loadPremiumCars() {
    const premiumGrid = document.getElementById('premiumCars');
    if (!premiumGrid) return;

    premiumGrid.innerHTML = premiumCars.map(car => `
        <div class="car-card premium-car-card">
            <div class="premium-badge">LUXURY</div>
            <div class="car-image premium-car-image">
                <img src="${car.image}" alt="${car.name}" />
            </div>
            <div class="car-details">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-specs">
                    <span class="spec">👥 ${car.seats} Seats</span>
                    <span class="spec">⚙️ ${car.transmission}</span>
                    <span class="spec">⛽ ${car.fuel}</span>
                </div>
                <div class="car-price premium-price">₹${car.price.toLocaleString()}/day</div>
                <div class="car-features">
                    <ul>${car.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
                </div>
                <button class="btn btn-primary btn-full-width premium-btn" onclick="window.location.href='booking.html'">Book Luxury Car</button>
            </div>
        </div>
    `).join('');
}

// Initialize homepage features
window.addEventListener('DOMContentLoaded', () => {
    loadFeaturedCars();
    loadPremiumCars();
});

// ===============================
// DARK MODE FUNCTIONALITY
// ===============================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.checked = true;
        const icon = document.querySelector('.slider-icon');
        if (icon) icon.textContent = '☀️';
    }
}

// Dark mode toggle
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        const icon = document.querySelector('.slider-icon');
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            if (icon) icon.textContent = '☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            if (icon) icon.textContent = '🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

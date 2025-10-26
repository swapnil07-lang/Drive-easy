// Car database
const cars = [
    { name: 'Honda City', price: 1500, seats: 5, transmission: 'Automatic', fuel: 'Petrol', features: ['AC', 'Power Steering', 'Music System', 'Airbags'] },
    { name: 'Maruti Swift', price: 1200, seats: 5, transmission: 'Manual', fuel: 'Petrol', features: ['AC', 'Power Steering', 'Music System'] },
    { name: 'Hyundai Creta', price: 2500, seats: 7, transmission: 'Automatic', fuel: 'Diesel', features: ['AC', 'Sunroof', 'Leather Seats'] },
    { name: 'Toyota Innova', price: 3000, seats: 7, transmission: 'Manual', fuel: 'Diesel', features: ['AC', 'Spacious', 'GPS'] },
    { name: 'Tata Nexon', price: 1800, seats: 5, transmission: 'Manual', fuel: 'Diesel', features: ['AC', 'Safety Rated', 'Modern Design'] },
    { name: 'Kia Seltos', price: 2800, seats: 5, transmission: 'Automatic', fuel: 'Diesel', features: ['AC', 'Sunroof', 'Connected Tech'] }
];

// Load cars into carGrid element in cars.html  
function loadCars() {
    const grid = document.getElementById('carGrid');
    grid.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-image">🚗</div>
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
        const days = Math.ceil((d2 - d1) / (1000*60*60*24));

        if (days < 1) {
            alert('Return date must be after pickup date');
            returnDate.value = '';
            return;
        }

        const daily = Number(carSelect.value);
        const base = daily * days;
        const discount = studentDiscount.checked ? base * 0.2 : 0;
        const total = base - discount;

        durationDays.textContent = `${days} day${days>1?'s':''}`;
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

        const bookingId = 'BK' + Math.floor(Math.random()*100000);
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

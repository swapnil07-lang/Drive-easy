const cars = [
  {name: "Honda City", price: 1500, seats: 5, transmission: "Automatic", fuel: "Petrol", features: ["AC", "Power Steering", "Music System", "Airbags"]},
  {name: "Maruti Swift", price: 1200, seats: 5, transmission: "Manual", fuel: "Petrol", features: ["AC", "Power Steering", "Music System"]},
  {name: "Hyundai Creta", price: 2500, seats: 7, transmission: "Automatic", fuel: "Diesel", features: ["AC", "Sunroof", "Leather Seats"]},
  {name: "Toyota Innova", price: 3000, seats: 7, transmission: "Manual", fuel: "Diesel", features: ["AC", "Spacious", "GPS"]},
];

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
        <button class="btn btn-primary btn-full-width" onclick="location.href='booking.html'">Book Now</button>
      </div>
    </div>
  `).join('');
}

window.addEventListener("load", () => {
  if(document.getElementById("carGrid")) loadCars();

  const form = document.getElementById("bookingForm");
  if(form) {
    const pickupDate = form.querySelector("#pickupDate");
    const returnDate = form.querySelector("#returnDate");
    const carSelect = form.querySelector("#carSelect");
    const studentDiscount = form.querySelector("#studentDiscount");
    
    const pricingSummary = document.getElementById("pricingSummary");
    const discountRow = document.getElementById("discountRow");
    const durationDays = document.getElementById("durationDays");
    const basePrice = document.getElementById("basePrice");
    const discountAmount = document.getElementById("discountAmount");
    const totalPrice = document.getElementById("totalPrice");
    
    function calculatePrice() {
      if(!pickupDate.value || !returnDate.value || !carSelect.value) return;
      const days = Math.ceil((new Date(returnDate.value) - new Date(pickupDate.value))/(1000*60*60*24));
      if(days < 1) {
        alert("Return date must be after pickup date");
        returnDate.value = "";
        return;
      }
      const daily = Number(carSelect.value);
      const base = daily * days;
      const discount = studentDiscount.checked ? base * .2 : 0;
      const total = base - discount;
      durationDays.textContent = days + (days > 1 ? " days" : " day");
      basePrice.textContent = `₹${base}`;
      discountAmount.textContent = `-₹${discount}`;
      totalPrice.textContent = `₹${total}`;
      discountRow.style.display = studentDiscount.checked ? "flex" : "none";
      pricingSummary.style.display = "block";
    }
    
    pickupDate.min = new Date().toISOString().split("T")[0];
    returnDate.min = new Date().toISOString().split("T")[0];
    pickupDate.addEventListener("change", calculatePrice);
    returnDate.addEventListener("change", calculatePrice);
    carSelect.addEventListener("change", calculatePrice);
    studentDiscount.addEventListener("change", calculatePrice);

    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Booking confirmed! We'll contact you soon.");
      form.reset();
      pricingSummary.style.display = "none";
    });
  }
});

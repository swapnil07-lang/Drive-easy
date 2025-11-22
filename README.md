# 🚗 DriveEasy - Modern Car Rental Website

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://swapnil07-lang.github.io/Drive-easy/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://swapnil07-lang.github.io/Drive-easy/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern, feature-rich car rental website built with HTML, CSS, and JavaScript. Features a stunning UI with dark mode, premium luxury cars section, and smooth animations.

## ✨ Features

### 🎨 Modern Design
- **Premium UI/UX** with Google Fonts (Inter)
- **Glassmorphism effects** on navigation and cards
- **Smooth animations** and transitions throughout
- **Gradient backgrounds** and modern color palette
- **Fully responsive** design for all devices

### 🌙 Dark Mode
- **Toggle switch** for seamless theme switching
- **Persistent preference** saved in localStorage
- **Smooth transitions** between light and dark themes
- **Optimized colors** for both modes

### 🚗 Car Categories

#### Standard Cars (₹1,200 - ₹3,000/day)
- Honda City
- Maruti Swift
- Hyundai Creta
- Toyota Innova
- Tata Nexon
- Kia Seltos

#### Premium Luxury Cars (₹9,500 - ₹15,000/day)
- Range Rover Vogue
- Rolls Royce Phantom
- Mercedes S-Class
- BMW 7 Series

### 📊 Interactive Sections
- **Animated Statistics Counter** - Real-time counting animation
- **Featured Cars Showcase** - Top 3 popular vehicles
- **How It Works** - 3-step rental process guide
- **Customer Testimonials** - 5-star reviews with avatars
- **Call-to-Action** - Prominent booking section

### 💎 Premium Features
- Student discount (20% off)
- Instant booking confirmation
- Real-time price calculation
- Professional car images
- Secure booking form

## 🚀 Live Demo

Visit the live website: **[DriveEasy](https://swapnil07-lang.github.io/Drive-easy/)**

## 📸 Screenshots

### Light Mode
![Homepage Light Mode](screenshots/light-mode.png)

### Dark Mode
![Homepage Dark Mode](screenshots/dark-mode.png)

### Premium Cars Section
![Premium Cars](screenshots/premium-cars.png)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Inter font family
- **LocalStorage API** - Theme persistence
- **Intersection Observer API** - Scroll animations

## 📁 Project Structure

```
Drive-easy/
├── index.html              # Homepage
├── cars.html              # Browse cars page
├── booking.html           # Booking form page
├── about.html             # About us page
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── image/                 # Images directory
│   ├── logo.png.png      # Website logo
│   ├── hero-bg.png       # Hero background
│   ├── honda-city.png    # Car images
│   ├── maruti-swift.png
│   ├── hyundai-creta.png
│   ├── toyota-innova.png
│   ├── tata-nexon.png
│   └── kia-seltos.png
└── README.md             # This file
```

## 🎯 Key Highlights

### Design Philosophy
- **Mobile-first** responsive design
- **Accessibility** focused with ARIA labels
- **Performance** optimized with minimal dependencies
- **SEO friendly** with proper meta tags and semantic HTML

### CSS Features
- CSS Custom Properties (Variables)
- Flexbox & Grid layouts
- CSS Animations & Transitions
- Media queries for responsiveness
- Glassmorphism effects
- Gradient backgrounds

### JavaScript Features
- Modular code structure
- Event-driven architecture
- LocalStorage for persistence
- Dynamic content loading
- Form validation
- Price calculation logic

## 💻 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for modifications)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/swapnil07-lang/Drive-easy.git
cd Drive-easy
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **Or use Live Server (VS Code)**
- Install Live Server extension
- Right-click on `index.html`
- Select "Open with Live Server"

## 🎨 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --primary-light: #818cf8;
    --primary-hover: #4f46e5;
    /* ... more variables */
}
```

### Adding New Cars
Edit the `cars` array in `script.js`:
```javascript
const cars = [
    {
        name: 'Your Car Name',
        price: 2000,
        seats: 5,
        transmission: 'Automatic',
        fuel: 'Petrol',
        features: ['Feature 1', 'Feature 2'],
        image: 'image/your-car.png',
        category: 'standard'
    }
];
```

### Modifying Dark Mode Colors
Edit dark mode styles in `style.css`:
```css
body.dark-mode {
    --bg-primary: #1a1a2e;
    --text-dark: #ffffff;
    /* ... customize colors */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Brave (latest)
## 📈 Performance

- **Lighthouse Score**: 95+
- **Page Load Time**: < 2 seconds
- **First Contentful Paint**: < 1 second
- **No external dependencies** (except Google Fonts)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Backend integration for real bookings
- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Car availability calendar
- [ ] Review and rating system
- [ ] Multi-language support

## 👨‍💻 Author

**Swapnil Gaur**
- GitHub: [@swapnil07-lang](https://github.com/swapnil07-lang)
- Project: [Drive-easy](https://github.com/swapnil07-lang/Drive-easy)

## 🎓 Academic Project

This project was developed as a **B.Tech Mini Project** to demonstrate:
- Modern web development practices
- Responsive design principles
- JavaScript programming
- UI/UX design skills
- Version control with Git/GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Fonts for the Inter font family
- Inspiration from modern car rental platforms
- Icons and emojis from Unicode standard

## 📞 Support

For support, email driveeasy@example.com or open an issue in the GitHub repository.

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ by Swapnil**

[Live Demo](https://swapnil07-lang.github.io/Drive-easy/) • [Report Bug](https://github.com/swapnil07-lang/Drive-easy/issues) • [Request Feature](https://github.com/swapnil07-lang/Drive-easy/issues)

</div>

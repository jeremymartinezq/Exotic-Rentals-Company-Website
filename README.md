# Exotic Rides Miami - Luxury Car Rental Website

A modern, sleek, and interactive website for a luxury exotic car and sprinter van rental company based in Miami, Florida. The website features a Miami Vice-inspired design with a neon color scheme, interactive elements, and a responsive layout.

## Features

- **Modern Miami Vice Theme**: Utilizes a sleek color palette of Jet Black, Neon Pink, Turquoise Blue, and Electric Purple
- **Fully Responsive Design**: Optimized for all devices from mobile phones to large desktop screens
- **Interactive Elements**: 
  - Subtle parallax scrolling effects
  - Dynamic hover animations
  - Modern cursor interactions
  - Smooth transitions and animations
- **Multiple Pages**:
  - Home page with featured vehicles
  - Exotic Cars catalog with filtering options
  - Luxury Sprinter Vans page
  - Contact page with form
  - Additional pages for pricing, about, etc.
- **Booking System**: Multi-step booking form with interactive elements
- **Performance Optimized**: Fast loading and lightweight code

## Technologies Used

- HTML5
- CSS3 with CSS Variables for theming
- Vanilla JavaScript (no frameworks)
- Google Fonts (Montserrat and Poppins)
- Font Awesome icons

## Getting Started

### Prerequisites

- Any modern web browser
- Basic HTTP server (optional for local development)

### Installation

1. Clone or download this repository
2. No build process required - it's pure HTML, CSS, and JavaScript
3. Open `index.html` in your browser to view the website
4. Alternatively, serve the files using any HTTP server

### Structure

```
├── index.html               # Homepage
├── exotic-cars.html         # Exotic cars catalog page
├── sprinter-vans.html       # Sprinter vans page
├── contact.html             # Contact page
├── css/
│   └── styles.css           # Main stylesheet
├── js/
│   └── main.js              # Main JavaScript file
└── assets/                  # Images and other assets
    ├── images/
    │   ├── cars/            # Car images
    │   ├── vans/            # Sprinter van images
    │   └── instagram/       # Instagram feed images
    └── videos/              # Video content
```

## Customization

### Changing the Color Scheme

The website uses CSS variables for easy theming. To change the color scheme, modify the variables in the `:root` selector in `css/styles.css`:

```css
:root {
    /* Color Palette */
    --jet-black: #121212;
    --neon-pink: #ff0099;
    --turquoise-blue: #00e6e6;
    --electric-purple: #9900ff;
    /* Other variables... */
}
```

### Adding New Vehicles

To add new vehicles to the catalog:

1. Add vehicle images to the appropriate folder in `assets/images/`
2. Follow the existing HTML structure in `exotic-cars.html` or `sprinter-vans.html`
3. Update the vehicle details including name, price, specifications, etc.

## Production Deployment

For production deployment:

1. Replace placeholder images with real high-quality vehicle photos
2. Add a real video for the hero section background
3. Configure the contact form to send emails or connect to a backend service
4. Replace Google Maps embed with an actual API key
5. Implement real booking functionality or connect to a reservation system
6. Consider adding additional SEO optimizations
7. Set up proper analytics tracking

## License

This project is available for personal and commercial use.

## Credits

- Fonts: Google Fonts (Montserrat, Poppins)
- Icons: Font Awesome
- Design Inspiration: Miami Vice theme and modern luxury car rental websites 
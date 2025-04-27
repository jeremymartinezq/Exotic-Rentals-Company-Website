![Screenshot 2025-04-27 165838](https://github.com/user-attachments/assets/fae72feb-2ca4-4070-8e9b-03d7da8f5c92)
![Screenshot 2025-04-27 165855](https://github.com/user-attachments/assets/0e432e46-e553-4760-ac52-a85c1b8c8773)
![Screenshot 2025-04-27 165911](https://github.com/user-attachments/assets/f7df7b9a-9207-4d72-be62-54d6daf237c4)
![Screenshot 2025-04-27 165933](https://github.com/user-attachments/assets/0b8a7aee-5ed9-4077-907d-2af086a31d73)
![Screenshot 2025-04-27 170000](https://github.com/user-attachments/assets/9730b012-fc83-48fe-a7e3-9c5520aebed4)
![Screenshot 2025-04-27 170025](https://github.com/user-attachments/assets/f6928da4-0410-48a2-9f87-9ea2b6c3501a)
![Screenshot 2025-04-27 170046](https://github.com/user-attachments/assets/e5d5a503-b556-4d4a-920b-50883b1768a8)
![Screenshot 2025-04-27 170105](https://github.com/user-attachments/assets/28095707-ac9c-4b89-8a8c-18cf4d165885)
![Screenshot 2025-04-27 170233](https://github.com/user-attachments/assets/8e585eb8-e169-48d5-a283-a1008889917b)
![Screenshot 2025-04-27 170441](https://github.com/user-attachments/assets/23cbfce1-5126-41a6-a099-1d326be5eab8)
![Screenshot 2025-04-27 171516](https://github.com/user-attachments/assets/2d03cb9d-1726-4f17-a702-ef2173c14f7f)
![Screenshot 2025-04-27 170911](https://github.com/user-attachments/assets/d60801e1-c927-4c77-8c82-d648bb479999)
![Screenshot 2025-04-27 170927](https://github.com/user-attachments/assets/74c3ad3c-9cae-427c-8073-0987aa232216)
![Screenshot 2025-04-27 170948](https://github.com/user-attachments/assets/4779fb89-da78-4a33-a69c-08f14896c37d)
![Screenshot 2025-04-27 171030](https://github.com/user-attachments/assets/fbc63d45-c294-4154-8f22-3b47458071f3)


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

## Author
Developed by Jeremy Martinez-Quinones.

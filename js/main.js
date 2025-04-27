// Exotic Rides Miami - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll down button in hero section
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            const featuredCarsSection = document.getElementById('featured-cars');
            if (featuredCarsSection) {
                window.scrollTo({
                    top: featuredCarsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlides.length > 0 && dots.length > 0) {
        let currentSlide = 0;
        
        // Hide all slides except the first one
        testimonialSlides.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        // Function to show a specific slide
        const showSlide = (n) => {
            // Hide all slides
            testimonialSlides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the current slide and activate the corresponding dot
            testimonialSlides[n].style.display = 'block';
            dots[n].classList.add('active');
            
            // Animate the slide
            testimonialSlides[n].style.animation = 'fadeIn 0.5s ease forwards';
        };
        
        // Event listeners for previous and next buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = testimonialSlides.length - 1;
                }
                showSlide(currentSlide);
            });
            
            nextBtn.addEventListener('click', () => {
                currentSlide++;
                if (currentSlide >= testimonialSlides.length) {
                    currentSlide = 0;
                }
                showSlide(currentSlide);
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Auto slide every 5 seconds
        setInterval(() => {
            currentSlide++;
            if (currentSlide >= testimonialSlides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }, 5000);
    }

    // Multi-step booking form
    const bookingSteps = document.querySelectorAll('.booking-step');
    const nextStepBtns = document.querySelectorAll('.next-step-btn');
    const prevStepBtns = document.querySelectorAll('.prev-step-btn');
    
    if (bookingSteps.length > 0) {
        // Function to show a specific step
        const showStep = (stepNumber) => {
            bookingSteps.forEach((step, index) => {
                if (index + 1 === stepNumber) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        };
        
        // Event listeners for next step buttons
        nextStepBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const nextStep = parseInt(this.getAttribute('data-step'));
                showStep(nextStep);
                
                // Scroll to top of form
                const bookingForm = document.querySelector('.booking-form');
                if (bookingForm) {
                    window.scrollTo({
                        top: bookingForm.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Event listeners for previous step buttons
        prevStepBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const prevStep = parseInt(this.getAttribute('data-step'));
                showStep(prevStep);
            });
        });
        
        // Vehicle selection - toggle between cars and vans
        const exoticCarRadio = document.getElementById('exotic-car');
        const sprinterVanRadio = document.getElementById('sprinter-van');
        
        if (exoticCarRadio && sprinterVanRadio) {
            // Show/hide vehicle options based on type selection
            exoticCarRadio.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelectorAll('.vehicle-option').forEach(option => {
                        if (option.querySelector('label span').textContent.includes('Ferrari') || 
                            option.querySelector('label span').textContent.includes('Lamborghini') || 
                            option.querySelector('label span').textContent.includes('Rolls-Royce') || 
                            option.querySelector('label span').textContent.includes('McLaren')) {
                            option.style.display = 'block';
                        } else {
                            option.style.display = 'none';
                        }
                    });
                }
            });
            
            sprinterVanRadio.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelectorAll('.vehicle-option').forEach(option => {
                        if (option.querySelector('label span').textContent.includes('Sprinter')) {
                            option.style.display = 'block';
                        } else {
                            option.style.display = 'none';
                        }
                    });
                }
            });
        }
        
        // Update booking summary
        const vehicleOptions = document.querySelectorAll('input[name="vehicle"]');
        const summaryVehicle = document.getElementById('summary-vehicle');
        const summaryPickup = document.getElementById('summary-pickup');
        const summaryReturn = document.getElementById('summary-return');
        const summaryTotal = document.getElementById('summary-total');
        
        const pickupDate = document.getElementById('pickup-date');
        const pickupTime = document.getElementById('pickup-time');
        const returnDate = document.getElementById('return-date');
        const returnTime = document.getElementById('return-time');
        
        if (vehicleOptions.length > 0 && summaryVehicle && summaryPickup && summaryReturn && summaryTotal) {
            // Update vehicle in summary
            vehicleOptions.forEach(option => {
                option.addEventListener('change', function() {
                    if (this.checked) {
                        const vehicleName = this.nextElementSibling.querySelector('span').textContent;
                        summaryVehicle.textContent = vehicleName;
                        
                        // Update total based on vehicle
                        let price = 0;
                        if (vehicleName.includes('Ferrari')) {
                            price = 2499;
                        } else if (vehicleName.includes('Lamborghini')) {
                            price = 1999;
                        } else if (vehicleName.includes('Rolls-Royce')) {
                            price = 2799;
                        } else if (vehicleName.includes('McLaren')) {
                            price = 1899;
                        } else if (vehicleName.includes('Executive')) {
                            price = 999;
                        } else if (vehicleName.includes('Luxury')) {
                            price = 1299;
                        }
                        
                        updateTotal(price);
                    }
                });
            });
            
            // Update dates in summary
            if (pickupDate && pickupTime && returnDate && returnTime) {
                const updateDates = () => {
                    if (pickupDate.value && pickupTime.value) {
                        const pickupDateTime = new Date(`${pickupDate.value}T${pickupTime.value}`);
                        summaryPickup.textContent = pickupDateTime.toLocaleString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        });
                    }
                    
                    if (returnDate.value && returnTime.value) {
                        const returnDateTime = new Date(`${returnDate.value}T${returnTime.value}`);
                        summaryReturn.textContent = returnDateTime.toLocaleString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        });
                    }
                    
                    calculateDays();
                };
                
                pickupDate.addEventListener('change', updateDates);
                pickupTime.addEventListener('change', updateDates);
                returnDate.addEventListener('change', updateDates);
                returnTime.addEventListener('change', updateDates);
            }
            
            // Calculate number of days and update total
            const calculateDays = () => {
                if (pickupDate.value && returnDate.value) {
                    const pickup = new Date(pickupDate.value);
                    const returnD = new Date(returnDate.value);
                    const timeDiff = returnD - pickup;
                    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    
                    if (daysDiff > 0) {
                        let basePrice = 0;
                        const vehicleName = summaryVehicle.textContent;
                        
                        if (vehicleName.includes('Ferrari')) {
                            basePrice = 2499;
                        } else if (vehicleName.includes('Lamborghini')) {
                            basePrice = 1999;
                        } else if (vehicleName.includes('Rolls-Royce')) {
                            basePrice = 2799;
                        } else if (vehicleName.includes('McLaren')) {
                            basePrice = 1899;
                        } else if (vehicleName.includes('Executive')) {
                            basePrice = 999;
                        } else if (vehicleName.includes('Luxury')) {
                            basePrice = 1299;
                        }
                        
                        updateTotal(basePrice * daysDiff);
                    }
                }
            };
            
            // Update total price
            const updateTotal = (price) => {
                summaryTotal.textContent = `$${price.toLocaleString()}`;
            };
        }
        
        // Form submission
        const bookingForm = document.querySelector('.booking-steps');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simple validation
                const requiredFields = this.querySelectorAll('input[required]');
                let isValid = true;
                
                requiredFields.forEach(field => {
                    if (!field.value) {
                        isValid = false;
                        field.style.border = '2px solid red';
                    } else {
                        field.style.border = 'none';
                    }
                });
                
                if (isValid) {
                    // In a real application, this would send data to the server
                    alert('Booking submitted successfully! We will contact you shortly to confirm your reservation.');
                    bookingForm.reset();
                    showStep(1);
                } else {
                    alert('Please fill out all required fields.');
                }
            });
        }
    }

    // REMOVED: Parallax effect on scroll
    // The parallax scrolling effect has been removed as requested
}); 
 // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Tab functionality
        const benefitTabs = document.querySelectorAll('.benefit-tab');
        const benefitContents = document.querySelectorAll('.benefit-content');
        
        benefitTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                benefitTabs.forEach(b => b.classList.remove('active'));
                benefitContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Testimonial Slider
        const sliderTrack = document.querySelector('.testimonial-track');
        const sliderDots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        
        sliderDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                currentSlide = slideIndex;
                updateSlider();
            });
        });
        
        function updateSlider() {
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            sliderDots.forEach(dot => {
                dot.classList.remove('active');
                if (parseInt(dot.getAttribute('data-slide')) === currentSlide) {
                    dot.classList.add('active');
                }
            });
        }
        
        // Auto slide testimonials
        setInterval(() => {
            currentSlide = (currentSlide + 1) % sliderDots.length;
            updateSlider();
        }, 6000);

        // Animated chart bars
        function animateChartBars() {
            const bars = document.querySelectorAll('.chart-bar');
            bars.forEach(bar => {
                // Set random heights for bars if not already set
                if (!bar.style.getPropertyValue('--target-height')) {
                    const randomHeight = 150 + Math.random() * 130;
                    bar.style.setProperty('--target-height', `${randomHeight}px`);
                }
            });
        }

        // Initialize chart bars when in viewport
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateChartBars();
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        const chartContainer = document.querySelector('.chart-container');
        if (chartContainer) {
            chartObserver.observe(chartContainer);
        }

        // Card stack hover effect
        const cardItems = document.querySelectorAll('.card-item');
        cardItems.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Bring hovered card to front
                card.style.zIndex = '10';
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset z-index after delay
                setTimeout(() => {
                    if (!card.matches(':hover')) {
                        card.style.zIndex = '';
                    }
                }, 300);
            });
        });

        
        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.management-card, .strategies-container, .global-content, .benefit-grid, .experience-container, .insights-container, .testimonial-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state for animated elements
        document.querySelectorAll('.management-card, .strategies-container, .global-content, .benefit-grid, .experience-container, .insights-container, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        animateOnScroll();
        
        // Map point animation
        const mapPoints = document.querySelectorAll('.map-point');
        mapPoints.forEach((point, index) => {
            point.style.animationDelay = `${index * 0.4}s`;
        });
        
        // Floating elements animation
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((el, index) => {
            el.style.animationDuration = `${15 + index * 3}s`;
        });
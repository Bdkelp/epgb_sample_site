// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    lastScroll = currentScroll;
});

// Contact form submission with better handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        itemType: formData.get('itemType'),
        message: formData.get('message') || 'N/A'
    };
    
    const emailBody = `
New Quote Request from El Paso Gold Buyers Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Item Type: ${data.itemType}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:compramos@aol.com?subject=Quote Request from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert('Thank you for your interest! Opening your email client to send your quote request. If your email client doesn\'t open automatically, please call us at (915) 626-5661 or email compramos@aol.com directly.');
    
    // Reset form
    this.reset();
});

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for fade-in animation
document.querySelectorAll('.item-card, .feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Click-to-call tracking (for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Google Analytics event tracking (if GA is installed)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'call_initiated', {
                'event_category': 'engagement',
                'event_label': 'Phone Call',
                'value': this.getAttribute('href')
            });
        }
    });
});

// Email link tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_initiated', {
                'event_category': 'engagement',
                'event_label': 'Email Contact'
            });
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Exit Intent Popup
let exitIntentShown = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        const popup = document.getElementById('exitPopup');
        if (popup) {
            popup.classList.add('show');
            exitIntentShown = true;
        }
    }
});

function closeExitPopup() {
    const popup = document.getElementById('exitPopup');
    if (popup) {
        popup.classList.remove('show');
    }
}

// Close popup on background click
document.addEventListener('click', function(e) {
    const popup = document.getElementById('exitPopup');
    if (popup && e.target === popup) {
        closeExitPopup();
    }
});

// Floating CTA - Show after scroll
window.addEventListener('scroll', function() {
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        if (window.pageYOffset > 800) {
            floatingCta.classList.add('show');
        } else {
            floatingCta.classList.remove('show');
        }
    }
});

// ========================================
// LANGUAGE TRANSLATION SYSTEM
// ========================================

const translations = {
    en: {
        // Navigation
        'nav-items': 'What We Buy',
        'nav-process': 'Our Process',
        'nav-why': 'Why Choose Us',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-badge': 'El Paso Times: Best Gold Buyer in El Paso',
        'hero-title-1': 'We Pay',
        'hero-title-2': 'Top Dollar',
        'hero-title-3': 'for Your Valuables',
        'hero-description': 'BBB Accredited with 5-star Google reviews. We pay the highest cash prices in El Paso for gold jewelry, diamonds, Rolex watches, coins, and precious metals. Fast, secure, and discreet service.',
        'hero-btn-call': 'Call (915) 626-5661',
        'hero-btn-quote': 'Get Free Quote',
        'hero-stat-value': '$2.5M+',
        'hero-stat-label': 'Paid to El Paso Customers',
        
        // Trust Badges
        'badge-1-label': 'BBB Rating',
        'badge-1-value': 'A+ Accredited',
        'badge-2-label': 'Customer Rating',
        'badge-2-value': '5-Star Google',
        'badge-3-label': 'Recognition',
        'badge-3-value': 'El Paso Times #1',
        
        // Section Headers
        'items-label': 'WHAT WE BUY',
        'items-title': 'Top Cash for Your Valuables',
        'items-description': 'We purchase all types of precious metals and luxury items. Get instant cash today.',
        
        'process-label': 'HOW IT WORKS',
        'process-title': 'Three Easy Steps to Cash',
        'process-description': 'Fast, transparent, and secure. Get paid in minutes.',
        
        'features-label': 'WHY CHOOSE US',
        'features-title': 'El Paso\'s Most Trusted Gold Buyer',
        'features-description': 'Family-owned and operated since 2005. BBB A+ rated with hundreds of 5-star reviews.',
        
        'contact-label': 'GET IN TOUCH',
        'contact-title': 'Visit Our Store Today',
        'contact-description': 'Stop by our secure facility or call for a quote. Walk-ins welcome!',
        
        // Contact Widget
        'contact-widget-title': '💎 Contact Us',
        'contact-widget-status': '● We\'re Here to Help',
        'contact-call-label': 'Call Now',
        'contact-sms-label': 'Text Us',
        'contact-sms-value': 'Send SMS',
        'contact-email-label': 'Email Us',
        'contact-directions-label': 'Get Directions',
        'contact-ai-divider': 'Or Ask Our AI Assistant',
        'chat-input-placeholder': 'Type your message...',
        
        // Footer
        'footer-tagline': 'El Paso\'s most trusted gold buyer since 2005',
        'footer-hours-title': 'Business Hours',
        'footer-contact-title': 'Contact Info'
    },
    es: {
        // Navigation
        'nav-items': 'Qué Compramos',
        'nav-process': 'Nuestro Proceso',
        'nav-why': 'Por Qué Elegirnos',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-badge': 'El Paso Times: Mejor Comprador de Oro en El Paso',
        'hero-title-1': 'Pagamos',
        'hero-title-2': 'Más Dinero',
        'hero-title-3': 'por Sus Objetos de Valor',
        'hero-description': 'Acreditados por BBB con reseñas de 5 estrellas en Google. Pagamos los precios más altos en efectivo en El Paso por joyería de oro, diamantes, relojes Rolex, monedas y metales preciosos. Servicio rápido, seguro y discreto.',
        'hero-btn-call': 'Llame (915) 626-5661',
        'hero-btn-quote': 'Cotización Gratis',
        'hero-stat-value': '$2.5M+',
        'hero-stat-label': 'Pagado a Clientes de El Paso',
        
        // Trust Badges
        'badge-1-label': 'Calificación BBB',
        'badge-1-value': 'A+ Acreditado',
        'badge-2-label': 'Calificación Cliente',
        'badge-2-value': '5 Estrellas Google',
        'badge-3-label': 'Reconocimiento',
        'badge-3-value': 'El Paso Times #1',
        
        // Section Headers
        'items-label': 'QUÉ COMPRAMOS',
        'items-title': 'Máximo Efectivo por Sus Objetos de Valor',
        'items-description': 'Compramos todo tipo de metales preciosos y artículos de lujo. Obtenga efectivo al instante hoy.',
        
        'process-label': 'CÓMO FUNCIONA',
        'process-title': 'Tres Pasos Fáciles al Efectivo',
        'process-description': 'Rápido, transparente y seguro. Le pagamos en minutos.',
        
        'features-label': 'POR QUÉ ELEGIRNOS',
        'features-title': 'El Comprador de Oro Más Confiable de El Paso',
        'features-description': 'De propiedad y operación familiar desde 2005. Calificación A+ de BBB con cientos de reseñas de 5 estrellas.',
        
        'contact-label': 'CONTÁCTENOS',
        'contact-title': 'Visite Nuestra Tienda Hoy',
        'contact-description': '¡Pase por nuestras instalaciones seguras o llame para una cotización. Aceptamos sin cita!',
        
        // Contact Widget
        'contact-widget-title': '💎 Contáctenos',
        'contact-widget-status': '● Estamos Aquí Para Ayudar',
        'contact-call-label': 'Llame Ahora',
        'contact-sms-label': 'Envíe Texto',
        'contact-sms-value': 'Enviar SMS',
        'contact-email-label': 'Envíe Email',
        'contact-directions-label': 'Cómo Llegar',
        'contact-ai-divider': 'O Pregunte a Nuestro Asistente IA',
        'chat-input-placeholder': 'Escriba su mensaje...',
        
        // Footer
        'footer-tagline': 'El comprador de oro más confiable de El Paso desde 2005',
        'footer-hours-title': 'Horario de Atención',
        'footer-contact-title': 'Información de Contacto'
    }
};

// Language Switcher
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Remove active class from all buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Apply translations
    applyTranslations(lang);
    
    console.log('Language switched to:', lang);
}

function applyTranslations(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if it's an input/textarea (placeholder)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.toLowerCase().includes(currentLang)) {
            btn.classList.add('active');
        }
    });
    
    // Apply saved language if not English
    if (currentLang === 'es') {
        applyTranslations('es');
    }
});

// Gold Price Updates (Simulated - replace with real API)
function updateGoldPrices() {
    // In production, fetch from actual gold price API
    // Example: https://api.metals.live/v1/spot/gold
    const prices = {
        gold: (Math.random() * 10 + 2040).toFixed(2),
        silver: (Math.random() * 2 + 24).toFixed(2)
    };
    
    const goldElement = document.getElementById('goldPrice');
    const silverElement = document.getElementById('silverPrice');
    
    if (goldElement) goldElement.textContent = `$${prices.gold}`;
    if (silverElement) silverElement.textContent = `$${prices.silver}`;
}

// Update prices every 5 minutes
if (document.querySelector('.gold-price-banner')) {
    updateGoldPrices();
    setInterval(updateGoldPrices, 300000);
}

// Testimonial Star Rating Generator
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

// Add pulse animation to CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.classList.add('pulse-animation');
    });
    btn.addEventListener('animationend', function() {
        this.classList.remove('pulse-animation');
    });
});

// Track outbound links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'outbound_click', {
                'event_category': 'engagement',
                'event_label': this.getAttribute('href')
            });
        }
    });
});

// Form validation enhancement
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#f87171';
            } else {
                this.style.borderColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value) {
                this.style.borderColor = '#4ade80';
            }
        });
    });
}

// Lazy loading for images (modern browser support)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Schema.org structured data injection for better SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "El Paso Gold Buyers",
    "image": window.location.origin + "/assets/images/gb_rs=h_1000,cg_true.webp",
    "@id": window.location.origin,
    "url": window.location.origin,
    "telephone": "+19156265661",
    "priceRange": "$$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "4716 Montana Ave",
        "addressLocality": "El Paso",
        "addressRegion": "TX",
        "postalCode": "79903",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.7619,
        "longitude": -106.4850
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "16:00"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/elpasogoldbuyers",
        "https://www.google.com/maps/place/El+Paso+Gold+Buyers"
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "150"
    }
};

// Inject structured data
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

// ========================================
// ALL-IN-ONE CONTACT WIDGET
// ========================================

let contactOpen = false;

function toggleContactWidget() {
    const contactBox = document.getElementById('contact-box');
    const contactToggle = document.getElementById('contact-toggle');
    contactOpen = !contactOpen;
    
    if (contactOpen) {
        contactBox.classList.add('show');
        contactToggle.classList.add('active');
        document.getElementById('chat-input').focus();
    } else {
        contactBox.classList.remove('show');
        contactToggle.classList.remove('active');
    }
}

function trackContact(method) {
    console.log(`Contact method used: ${method}`);
    // Track with analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_initiated', {
            'method': method,
            'event_category': 'Contact',
            'event_label': method.toUpperCase()
        });
    }
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Simulate bot response after delay
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 800);
    }
}

function sendQuickReply(message) {
    addMessage(message, 'user');
    
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 600);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'bot' ? '🤖' : '👤';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    const p = document.createElement('p');
    p.textContent = text;
    content.appendChild(p);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom smoothly
    messagesContainer.scrollTo({
        top: messagesContainer.scrollHeight,
        behavior: 'smooth'
    });
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Knowledge base responses
    if (lowerMessage.includes('buy') || lowerMessage.includes('accept')) {
        return "We buy gold jewelry (10K-24K), diamonds, Rolex watches, coins, silver, platinum, and all precious metals. Broken items welcome!";
    }
    
    if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
        return "We're open Monday-Friday 9am-6pm, Saturday 10am-4pm. Call (915) 626-5661 or visit us at 4716 Montana Ave, El Paso.";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('much') || lowerMessage.includes('pay')) {
        return "We pay the highest cash prices in El Paso! Current gold prices: 10K ($25-30/gram), 14K ($35-42/gram), 18K ($45-55/gram). Call for today's rates: (915) 626-5661";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
        return "We're located at 4716 Montana Ave, El Paso, TX 79903. Easy parking available! Need directions? Call (915) 626-5661";
    }
    
    if (lowerMessage.includes('appointment') || lowerMessage.includes('visit')) {
        return "No appointment needed! Walk-ins welcome. We provide fast, secure service with cash payment on the spot.";
    }
    
    if (lowerMessage.includes('broken') || lowerMessage.includes('damaged')) {
        return "Yes! We buy broken, damaged, or unwanted jewelry. The gold value is what matters, not the condition.";
    }
    
    if (lowerMessage.includes('diamond')) {
        return "We're certified diamond buyers! We purchase loose diamonds, diamond jewelry, and engagement rings. Free appraisal in minutes.";
    }
    
    if (lowerMessage.includes('rolex') || lowerMessage.includes('watch')) {
        return "We specialize in Rolex and luxury watches! Bring in your watch for a free evaluation. We pay top dollar for authentic timepieces.";
    }
    
    if (lowerMessage.includes('quote') || lowerMessage.includes('estimate')) {
        return "I can help you get started! For an accurate quote, please bring your items to our store or call (915) 626-5661. We provide free appraisals with no obligation.";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return "You're welcome! Feel free to call us at (915) 626-5661 with any other questions. We look forward to serving you!";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! How can I help you today? Ask me about our services, hours, or what we buy!";
    }
    
    // Default response
    return "Great question! For detailed information, please call us at (915) 626-5661 or visit us at 4716 Montana Ave. Our expert team is ready to help!";
}

console.log('El Paso Gold Buyers - Site loaded successfully');

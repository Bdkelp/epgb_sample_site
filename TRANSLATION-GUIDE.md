# 🌐 Translation Guide - El Paso Gold Buyers

## Overview
The site has a bilingual EN/ES language toggle, but requires adding translation keys to HTML elements.

## Current Status
✅ **JavaScript translations ready** - Full EN/ES dictionary in `js/main.js`  
⏳ **HTML needs update** - Add `data-i18n` attributes to elements

## How It Works

### 1. Translation Dictionary (`js/main.js`)
```javascript
const translations = {
    en: {
        'hero-title-1': 'El Paso\'s',
        'hero-title-2': 'Highest Paying',
        // ... more keys
    },
    es: {
        'hero-title-1': 'El Comprador de Oro',
        'hero-title-2': 'Que Paga Más',
        // ... more keys
    }
};
```

### 2. HTML Markup Pattern
Add `data-i18n="key"` to any element you want translated:

**Before:**
```html
<h2>Top Cash for Your Valuables</h2>
```

**After:**
```html
<h2 data-i18n="items-title">Top Cash for Your Valuables</h2>
```

### 3. Auto-Translation
When user clicks EN/ES toggle:
- JavaScript finds all `[data-i18n]` elements
- Looks up translation key in dictionary
- Updates text content automatically

## Implementation Steps

### Step 1: Add to Navigation (index.html lines ~95-99)
```html
<ul class="nav-links">
    <li><a href="#items" data-i18n="nav-items">What We Buy</a></li>
    <li><a href="#process" data-i18n="nav-process">Our Process</a></li>
    <li><a href="#why-us" data-i18n="nav-why">Why Choose Us</a></li>
    <li><a href="#contact" data-i18n="nav-contact">Contact</a></li>
</ul>
```

### Step 2: Add to Hero Section (index.html lines ~141-154)
```html
<div class="hero-text">
    <span class="hero-badge" data-i18n="hero-badge">BBB A+ Accredited • 5-Star Google Reviews</span>
    
    <h2>
        <span data-i18n="hero-title-1">El Paso's</span>
        <span class="gold-text" data-i18n="hero-title-2">Highest Paying</span>
        <span data-i18n="hero-title-3">Gold Buyer</span>
    </h2>
    
    <p data-i18n="hero-description">BBB Accredited with 5-star Google reviews...</p>

    <div class="hero-buttons">
        <a href="tel:9156265661" class="btn-primary" data-i18n="hero-btn-call">Call (915) 626-5661</a>
        <a href="#contact" class="btn-secondary" data-i18n="hero-btn-quote">Get Free Quote</a>
    </div>
</div>
```

### Step 3: Add to Trust Badges (index.html lines ~157-168)
```html
<div class="trust-badges">
    <div class="badge">
        <div class="badge-label" data-i18n="badge-1-label">BBB Rating</div>
        <div class="badge-value" data-i18n="badge-1-value">A+ Accredited</div>
    </div>
    <div class="badge">
        <div class="badge-label" data-i18n="badge-2-label">Customer Rating</div>
        <div class="badge-value" data-i18n="badge-2-value">5-Star Google</div>
    </div>
    <div class="badge">
        <div class="badge-label" data-i18n="badge-3-label">Recognition</div>
        <div class="badge-value" data-i18n="badge-3-value">El Paso Times #1</div>
    </div>
</div>
```

### Step 4: Add to Section Headers (Pattern for all sections)
```html
<div class="section-header">
    <div class="section-label" data-i18n="items-label">WHAT WE BUY</div>
    <h2 data-i18n="items-title">Top Cash for Your Valuables</h2>
    <p data-i18n="items-description">We purchase all types of precious metals...</p>
</div>
```

### Step 5: Add to Contact Widget (index.html lines ~735-760)
```html
<div class="contact-header-info">
    <h4 data-i18n="contact-widget-title">💎 Contact Us</h4>
    <span class="contact-status" data-i18n="contact-widget-status">● We're Here to Help</span>
</div>

<!-- Quick Contact Buttons -->
<a href="tel:9156265661" class="quick-contact-btn call-btn">
    <div class="quick-contact-icon">📞</div>
    <div class="quick-contact-info">
        <div class="quick-contact-label" data-i18n="contact-call-label">Call Now</div>
        <div class="quick-contact-value">(915) 626-5661</div>
    </div>
</a>
```

### Step 6: Add to Form Placeholders
For input fields, use the same attribute but it updates `placeholder`:
```html
<input 
    type="text" 
    id="chat-input" 
    class="chat-input" 
    placeholder="Type your message..."
    data-i18n="chat-input-placeholder"
/>
```

## Available Translation Keys

### Navigation
- `nav-items`, `nav-process`, `nav-why`, `nav-contact`

### Hero Section
- `hero-badge`, `hero-title-1`, `hero-title-2`, `hero-title-3`
- `hero-description`, `hero-btn-call`, `hero-btn-quote`
- `hero-stat-value`, `hero-stat-label`

### Trust Badges
- `badge-1-label`, `badge-1-value` (BBB)
- `badge-2-label`, `badge-2-value` (Google Reviews)
- `badge-3-label`, `badge-3-value` (El Paso Times)

### Section Headers (All)
- `items-label`, `items-title`, `items-description`
- `process-label`, `process-title`, `process-description`
- `features-label`, `features-title`, `features-description`
- `contact-label`, `contact-title`, `contact-description`

### Contact Widget
- `contact-widget-title`, `contact-widget-status`
- `contact-call-label`, `contact-sms-label`, `contact-sms-value`
- `contact-email-label`, `contact-directions-label`
- `contact-ai-divider`, `chat-input-placeholder`

### Footer
- `footer-tagline`, `footer-hours-title`, `footer-contact-title`

## Testing

1. **Add data-i18n attributes** to HTML elements
2. **Open browser console** (F12)
3. **Click ES button** in header
4. **Watch for:** `Language switched to: es`
5. **Verify:** Text changes to Spanish
6. **Click EN button**
7. **Verify:** Text changes back to English

## Advanced: Adding New Translations

### Step 1: Add to Dictionary (`js/main.js`)
```javascript
const translations = {
    en: {
        // ... existing keys
        'new-key': 'English text'
    },
    es: {
        // ... existing keys
        'new-key': 'Texto en español'
    }
};
```

### Step 2: Add to HTML
```html
<div data-i18n="new-key">English text</div>
```

## Notes

- **Preserves formatting:** Phone numbers, prices stay the same
- **SEO friendly:** Search engines see default English on page load
- **User preference saved:** Uses `localStorage` to remember language choice
- **Progressive enhancement:** Works without breaking existing functionality
- **Easy maintenance:** All translations in one centralized dictionary

## Quick Fix for Common Sections

If you want to translate just the most visible parts first, prioritize:

1. ✅ **Navigation** (4 links)
2. ✅ **Hero section** (title + description + buttons)
3. ✅ **Trust badges** (3 badges)
4. ✅ **Section headers** (4 sections × 3 elements = 12 elements)
5. ✅ **Contact widget** (header + 4 buttons + chat)

This covers ~30 key elements that users see first!

## Full Implementation

For complete bilingual site, add `data-i18n` to ~100-150 elements across:
- All navigation links
- All headings (h1-h6)
- All button labels
- All section descriptions
- All form labels/placeholders
- Footer text

**Estimated time:** 1-2 hours for full implementation
**Impact:** Professional bilingual experience for El Paso's Hispanic market (70%+ of population)

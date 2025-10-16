# 💰 El Paso Gold Buyers - Premium Landing Page

> Professional, conversion-optimized landing page for El Paso's premier gold buying business.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Premium Design
- **Champagne Gold Palette** - Sophisticated color system with gradients and shadows
- **Full-Width Hero** - Stunning background image with soft glow effect
- **Responsive Layout** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Scroll-triggered animations for engaging UX
- **Professional Typography** - Inter font family with carefully tuned hierarchy

### 🚀 Conversion Optimization
- **All-in-One Contact Widget** - Call, text, email, directions, and AI chatbot
- **Exit-Intent Popup** - Capture abandoning visitors
- **Trust Signals** - Google Reviews integration, testimonials, ratings
- **FAQ Accordion** - Schema.org structured data for rich snippets
- **Multiple CTAs** - Strategic placement throughout the page

### 🌍 Bilingual Support
- **EN/ES Toggle** - Language switcher with localStorage persistence
- **Translation System** - `data-i18n` attribute-based translation
- **Ready for Expansion** - Follow `TRANSLATION-GUIDE.md` to complete

### 🔍 SEO Optimized
- **Schema.org Markup** - LocalBusiness, FAQPage structured data
- **Meta Tags** - Complete Open Graph, Twitter Cards, local SEO
- **Sitemap & Robots.txt** - Search engine crawler optimization
- **Google Business Profile** - Direct review and maps integration
- **Image Optimization** - WebP format, lazy loading, alt text

### 🤖 Interactive Features
- **AI Chatbot** - 12+ knowledge base responses about services
- **Gold Price Ticker** - Simulated live prices (ready for API)
- **Google Reviews Widget** - Direct link to leave reviews
- **Contact Form** - Client-side validation with visual feedback
- **Smooth Scrolling** - Anchor navigation with header offset

## 📁 Project Structure

```
gold_buyers/
├── index.html              # Main landing page
├── css/
│   └── styles.css         # Complete styling system
├── js/
│   └── main.js            # Interactive features & translations
├── assets/
│   └── images/            # Optimized WebP images (740px width)
├── sitemap.xml            # Search engine sitemap
├── robots.txt             # Crawler directives
├── .gitignore             # Git ignore patterns
├── LICENSE                # MIT License
├── GOOGLE-SETUP.md        # Google Business Profile integration guide
├── TRANSLATION-GUIDE.md   # Complete translation instructions
└── README.md              # This file
```

## 🛠️ Technologies

- **HTML5** - Semantic markup with microdata
- **CSS3** - Custom properties, grid, flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **WebP Images** - Modern format for optimal loading
- **Google Fonts** - Inter typeface (400-900 weights)

## 🚀 Quick Start

### Local Development

**Option 1: Python Server (Recommended)**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Option 2: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"
- Opens at: `http://localhost:5500`

**Option 3: Direct File**
- Simply double-click `index.html`
- Opens in default browser

### No Build Process Required
This is a static site - no compilation, bundling, or dependencies needed!

## 📋 Pre-Deployment Checklist

Before going live, complete these steps:

### Required Updates

- [x] **Google Place ID**: ~~Replace `YOUR_PLACE_ID`~~ ✅ **DONE**
  ```
  Current ID: ChIJ1RMWCS9a54YR0U9Tx8kg5vU
  Location: 4716 Montana Ave, El Paso, TX 79903
  ```

- [x] **Google Maps**: ~~Update coordinates~~ ✅ **DONE**
  ```
  Coordinates: 31.7956°N, 106.3942°W
  Interactive map embedded in contact section
  ```

- [ ] **Spanish Translations**: Follow `TRANSLATION-GUIDE.md`
  - Add `data-i18n` attributes to remaining elements
  - Hero section already translated (40+ keys)
  - ~100 more elements need translation

- [ ] **Favicon Files**: Generate and add to root
  ```
  Use: https://realfavicongenerator.net/
  Upload logo, download package, extract to root
  ```

- [ ] **Google Analytics**: Uncomment tracking code in `<head>`
  ```html
  Replace: G-XXXXXXXXXX with your measurement ID
  Get from: https://analytics.google.com
  ```

### Optional Enhancements

- [ ] **Live Gold Prices**: Replace simulated prices with real API
  - Recommended: [metals.live](https://metals.live) or [goldprice.org](https://goldprice.org)
  
- [ ] **Form Backend**: Add server-side form handling
  - Options: Formspree, Netlify Forms, Web3Forms
  
- [ ] **Live Chat**: Integrate chat widget
  - Options: Tawk.to, Intercom, Drift

## 🌐 Deployment Options

### Netlify (Recommended - Free)
```bash
# Method 1: Drag & Drop
1. Go to https://app.netlify.com/drop
2. Drag the gold_buyers folder
3. Done! Instant HTTPS + CDN

# Method 2: Git Integration
1. Push to GitHub
2. Import repo at netlify.com
3. Auto-deploy on every commit
```

### GitHub Pages (Free)
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: El Paso Gold Buyers landing page"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/gold-buyers.git
git branch -M main
git push -u origin main

# Enable Pages
Settings → Pages → Deploy from main branch
Site will be live at: https://yourusername.github.io/gold-buyers
```

### Vercel (Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or import from GitHub at vercel.com
```

### Traditional Hosting
```bash
# Upload via FTP/SFTP
- Host: your-host.com
- Upload all files to public_html/ or www/
- Set permissions: 644 (files), 755 (directories)
```

## 🔧 Configuration

### Business Information
Update in these locations:

1. **`index.html`**:
   - Hero section trust badges
   - Contact section details
   - Footer information

2. **`js/main.js`**:
   - Schema.org structured data
   - Business hours
   - Coordinates

3. **`sitemap.xml`**:
   - Replace `www.elpasogoldbuyers.com` with your domain

### Contact Details
```
Phone:   (915) 626-5661
Email:   compramos@aol.com
Address: 4716 Montana Ave, El Paso, TX 79903
Coords:  31.7956°N, 106.3942°W
Place ID: ChIJ1RMWCS9a54YR0U9Tx8kg5vU
```

### Color Customization
Edit CSS custom properties in `css/styles.css`:
```css
:root {
    --gold: #C9A961;           /* Champagne gold - primary */
    --gold-dark: #B8941F;      /* Hover states */
    --black: #0A0A0A;          /* Headers, premium sections */
    --cream: #FAF8F3;          /* Alternating backgrounds */
    --gray: #6B7280;           /* Body text */
}
```

## 📊 Performance Targets

- ✅ **Lighthouse Score**: >90 (all categories)
- ✅ **Largest Contentful Paint**: <2.5s
- ✅ **First Input Delay**: <100ms
- ✅ **Cumulative Layout Shift**: <0.1

## ♿ Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Color contrast ratio >4.5:1
- ✅ Keyboard navigable (tab through all links/buttons)
- ✅ Focus states on all controls

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome/Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |
| Chrome Mobile | Latest |

## 📚 Documentation

- **[GOOGLE-SETUP.md](GOOGLE-SETUP.md)** - Google Business Profile integration (✅ Complete)
- **[TRANSLATION-GUIDE.md](TRANSLATION-GUIDE.md)** - Translation instructions
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - AI development guide

## 🐛 Troubleshooting

### Images Not Loading
- Check paths: `assets/images/filename.webp`
- Verify WebP browser support (all modern browsers)
- Ensure images exist in directory

### Contact Form Issues
- Form uses `mailto:` (opens email client)
- For server-side: integrate Formspree or similar
- Check browser console for JS errors

### Translations Not Working
- Verify `data-i18n` attributes exist on elements
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`

### Maps Not Showing
- Verify Place ID: `ChIJ1RMWCS9a54YR0U9Tx8kg5vU`
- Check iframe src URL is valid
- Test map interactivity (click to open directions)

### Different Versions on Different Ports
- **Port 5500** (Live Server): Has browser caching
  - Fix: Hard refresh with Ctrl+Shift+R
- **Port 8000** (Python): Serves fresh files
  - Recommended for development

## 🧪 Testing

### Before Launch
```bash
# HTML Validation
https://validator.w3.org/

# Mobile-Friendly Test
https://search.google.com/test/mobile-friendly

# Lighthouse Audit
Chrome DevTools → Lighthouse → Generate Report

# Schema Markup Test
https://search.google.com/test/rich-results
```

### After Launch
```bash
# Submit Sitemap
Google Search Console: https://search.google.com/search-console
Bing Webmaster: https://www.bing.com/webmasters

# Monitor Performance
- Google Analytics (conversion tracking)
- Google Business Profile Insights
- Search Console Performance Report
```

## 🎨 Design System

### Typography Scale
```css
h1: 4.5rem (hero headline)
h2: 2.75rem (section headers)
h3: 1.75rem (card titles)
Body: 1rem (16px base)
```

### Spacing System
```css
Section padding: 100px (desktop), 60px (mobile)
Grid gaps: 2.5rem (cards), 4rem (features)
Container max-width: 1400px
```

### Shadow System
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08)
--shadow-md: 0 4px 20px rgba(0,0,0,0.12)
--shadow-lg: 0 8px 32px rgba(0,0,0,0.15)
```

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

Copyright (c) 2025 El Paso Gold Buyers

## 🤝 Git Workflow

```bash
# Create new branch for features
git checkout -b feature/new-section

# Make changes, then:
git add .
git commit -m "Add new testimonials section"
git push origin feature/new-section

# Merge to main when ready
git checkout main
git merge feature/new-section
```

## 📞 Support

**El Paso Gold Buyers**
- Email: compramos@aol.com
- Phone: (915) 626-5661
- Location: 4716 Montana Ave, El Paso, TX 79903

---

**Built with ❤️ for El Paso's premier gold buying business**

*Last Updated: October 2025 | Version 1.0 | Status: Production Ready*

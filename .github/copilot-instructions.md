# El Paso Gold Buyers - AI Agent Instructions

## Project Overview
Professional landing page for a local gold buying business in El Paso, TX. Single-page site optimized for local SEO, conversions, and Google Business Profile integration.

## Architecture
- **Separated concerns**: HTML (index.html), CSS (css/styles.css), JavaScript (js/main.js)
- **No build process**: Pure HTML/CSS/JS - deploy directly to any static host
- **Image strategy**: WebP format in `assets/images/` at 740px width for web optimization
- **SEO-first**: Extensive meta tags, structured data, and local search optimization

## Key Files
- `index.html` - Main landing page with semantic HTML5
- `css/styles.css` - Complete styling system with CSS custom properties
- `js/main.js` - Interactions, animations, and Schema.org structured data injection
- `sitemap.xml` - XML sitemap for search engine crawlers
- `robots.txt` - Crawler directives (currently allows all)

## Design System
### Colors (CSS Custom Properties)
```css
--gold: #D4AF37        /* Primary CTA color, highlights */
--gold-dark: #B8941F   /* Hover states */
--black: #0A0A0A       /* Headers, premium sections */
--cream: #FAF8F3       /* Alternating section backgrounds */
--gray: #6B7280        /* Body text, secondary content */
```

### Typography
- Font: Inter (400, 500, 600, 700, 800, 900 weights)
- Headings: 900 weight, tight letter-spacing (-0.02em)
- Body: 1rem base, 1.6-1.7 line-height

### Spacing
- Section padding: `100px 3rem` (desktop), `60px 1.5rem` (mobile)
- Grid gaps: `2.5rem` for cards, `4rem` for feature grids

## Component Patterns

### Sections
All major sections follow this structure:
```html
<section id="section-id" class="section section-{white|cream|black}">
    <div class="container">
        <div class="section-header">
            <div class="section-label">LABEL</div>
            <h2>Headline</h2>
            <p>Description</p>
        </div>
        <!-- Section content -->
    </div>
</section>
```

### Image Cards
```html
<div class="item-card">
    <div class="item-image">
        <img src="assets/images/[filename]" 
             alt="Descriptive alt text" 
             width="740" 
             height="740"
             loading="lazy">
    </div>
    <div class="item-content">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

### CTAs
- Primary: `.btn-primary` (gold background, black text)
- Secondary: `.btn-secondary` (white/outlined)
- Phone links: `tel:9156265661` with `.phone-link` class
- Email links: `mailto:compramos@aol.com`

## SEO Implementation

### Required Meta Tags (All Present)
1. **Basic**: title, description, keywords, robots
2. **Open Graph**: og:type, og:title, og:description, og:image
3. **Twitter Cards**: twitter:card, twitter:title, etc.
4. **Local**: geo.region, geo.placename, ICBM coordinates
5. **Schema.org**: Microdata attributes + JSON-LD injection via JS

### Image Optimization
- All images have descriptive alt text
- Width/height attributes prevent layout shift
- `loading="lazy"` for below-fold images
- `loading="eager"` for hero image only

### Structured Data (js/main.js)
LocalBusiness schema includes:
- Business name, address, phone
- Opening hours
- Geo coordinates
- Aggregate rating (5.0, 150 reviews)
- Price range ($$$)

## Image Naming Convention
Pattern: `gb_XXXrs=w_740,m,cg_true.webp`
- `gb_` = gold buyers prefix
- `XXX` = sequential number (001-015)
- `rs=w_740,m,cg_true` = responsive sizing metadata
- Hero image: `gb_rs=h_1000,cg_true.webp` (higher resolution)

## JavaScript Behaviors

### Smooth Scrolling
Anchor links scroll to sections with 90px header offset

### Header Scroll Effect
- Adds `.header-scrolled` class when scrolled >50px
- Changes background opacity and adds blur

### Contact Form
- Validates required fields with visual feedback
- Real-time validation on input
- Opens mailto: link with pre-filled data
- Fallback: Shows alert with manual contact info

### Scroll Animations
IntersectionObserver animates `.item-card`, `.feature-card`, `.step` on scroll-in

### FAQ Accordion
- Click to expand/collapse questions
- Only one answer open at a time
- Smooth animations with max-height transitions
- Schema.org FAQPage markup for rich snippets

### Exit-Intent Popup
- Triggers when mouse leaves viewport
- Shows once per session
- Captures abandoning visitors
- Dismissable with X button or background click

### Floating CTA Button
- Appears after 800px scroll
- Fixed position bottom-right
- Slide-up animation
- Phone icon with call-to-action

### Gold Price Ticker
- Simulated live price updates
- Updates every 5 minutes
- Ready for real API integration (metals.live or similar)
- Shows up/down indicators

### Language Switcher
- EN/ES toggle in header
- Stores preference in localStorage
- Ready for i18n implementation
- Alert message for coming soon

### Analytics Hooks
Tracks clicks on:
- `tel:` links (call_initiated event)
- `mailto:` links (email_initiated event)
- Outbound links (outbound_click event)
- Form interactions

## Mobile Responsive Breakpoints
- Desktop: >1200px (full 3-column grids)
- Tablet: 769-1200px (2-column grids)
- Mobile: ≤768px (1-column, hamburger menu)

## Integration Points

### Google Business Profile
1. **Maps**: Iframe in contact section (needs actual coordinates)
2. **Reviews**: Link in reviews section (needs actual business profile URL)
3. **Schema**: JSON-LD in main.js (update sameAs URLs with real social profiles)

### Google Analytics
- Commented out in `<head>`
- Replace `G-XXXXXXXXXX` with actual measurement ID
- Uncomment to activate

### Third-Party Services
Currently minimal. Form uses mailto:. Consider:
- FormSpree/Netlify Forms for server-side handling
- Live chat widget (Tawk.to, Intercom)
- Review widgets (Trustpilot, Google Reviews embeds)
- Gold price API (metals.live, goldprice.org) to replace simulated prices

## Common Modification Patterns

### Adding a New Section
1. Copy existing section structure
2. Add unique `id` for navigation
3. Update nav links in header
4. Choose background class: `section-white`, `section-cream`, or `section-black`
5. Follow typography hierarchy (h2 → h3 → p)

### Adding Images
1. Place WebP in `assets/images/`
2. Use descriptive filename
3. Reference as `assets/images/filename.webp`
4. Include width/height attributes
5. Add descriptive alt text (not "image" or "photo")

### Changing Contact Info
Update in 3 places:
1. Hero section trust badges
2. Contact section details
3. Footer contact info
4. Structured data in js/main.js

## Deployment Checklist
- [ ] Update all `www.elpasogoldbuyers.com` URLs to actual domain
- [ ] Add favicon files (32x32, 16x16, apple-touch-icon)
- [ ] Configure Google Analytics ID
- [ ] Update Google Maps embed with real coordinates
- [ ] Add actual Google Business Profile review link
- [ ] Replace team placeholder avatars with real photos
- [ ] Integrate real gold price API (replace simulated prices)
- [ ] Add Spanish translations for bilingual toggle
- [ ] Test all phone/email links
- [ ] Test FAQ accordion functionality
- [ ] Test exit-intent popup trigger
- [ ] Test floating CTA scroll behavior
- [ ] Validate HTML (validator.w3.org)
- [ ] Run Lighthouse audit (target >90 all categories)
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Test form validation and submission
- [ ] Verify Schema.org markup with Google Rich Results Test

## Performance Targets
- Lighthouse Score: >90 (all categories)
- Largest Contentful Paint: <2.5s
- First Input Delay: <100ms
- Cumulative Layout Shift: <0.1

## Accessibility
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Color contrast ratio >4.5:1 for all text
- Focus states on all interactive elements
- Keyboard navigable (tab through all links/buttons)

## Version Control Notes
- No node_modules or build artifacts
- Commit `css/styles.css` and `js/main.js` separately from HTML
- .gitignore not needed (no generated files)
- Track `assets/images/` in Git (they're optimized source files)

## Local Development
1. Open `index.html` in browser (file:// protocol works)
2. Or use simple server: `python -m http.server 8000`
3. No compilation required
4. Changes take effect on refresh

## Production Hosting Options
- **Netlify**: Drag-and-drop folder, instant HTTPS
- **Vercel**: Git integration, serverless functions available
- **GitHub Pages**: Free, automatic deployment from repo
- **Traditional**: Upload via FTP to any web host

---

**Remember**: This is a local business site. Priority is local SEO (El Paso searches), fast loading, and easy contact (phone/form). Every element should drive towards one goal: getting visitors to call or visit the location.

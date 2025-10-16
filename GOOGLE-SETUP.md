# Google Business Profile Integration Guide

## 🎯 Quick Setup Checklist

### ✅ What's Already Done
- ✅ Google Maps embed updated with correct address (4716 Montana Ave, El Paso, TX 79903)
- ✅ Coordinates set to: 31.7956°N, 106.3942°W
- ✅ Review link placeholders ready for your Place ID

### 🔧 What You Need to Do

---

## 1. Get Your Google Place ID

Your site currently has placeholder text: `YOUR_PLACE_ID`

**Find it here:**
1. Visit: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Search for: `4716 Montana Ave, El Paso, TX 79903`
3. Click the location marker
4. Copy the **Place ID** (looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

**Alternative Method (Faster):**
1. Go to Google Maps: https://www.google.com/maps
2. Search: `El Paso Gold Buyers` or your address
3. Right-click on your business → "Share or embed map"
4. The URL will contain your Place ID

---

## 2. Update Review Links in Your Site

Once you have your Place ID, find and replace in `index.html`:

**Replace this:**
```html
href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
```

**With this:**
```html
href="https://search.google.com/local/writereview?placeid=ChIJ_YOUR_ACTUAL_PLACE_ID_HERE"
```

**Locations to update:**
- Line ~428: Google Reviews section "Read Reviews on Google" button

---

## 3. Verify Google Maps Embed

The map is now set with your address. Test it:

1. Open `index.html` in browser
2. Scroll to Contact section
3. Click the map - it should show **4716 Montana Ave, El Paso, TX 79903**
4. Users can click "Directions" to navigate to you

**Current embed URL:**
```
https://maps.google.com/maps?q=4716+Montana+Ave,+El+Paso,+TX+79903&output=embed
```

---

## 4. Optional: Add Direct Review Button to Contact Widget

Want to add a review button to your floating contact widget?

Add this inside `<div class="contact-quick-actions">` in `index.html`:

```html
<button class="contact-action" onclick="window.open('https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID', '_blank')">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
    <span>Review Us</span>
</button>
```

---

## 5. Structured Data (Already Included)

Your site already has Schema.org LocalBusiness markup in `js/main.js` that includes:

```javascript
"aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "150"
}
```

**Update if needed:**
- Change review count to match actual Google reviews
- Update rating if not 5.0

---

## 6. Google Business Profile Best Practices

### Claim Your Profile (If Not Already Done)
1. Go to: https://www.google.com/business/
2. Sign in with Google account
3. Search for your business or add it
4. Verify ownership (by postcard, phone, or email)

### Optimize Your Profile
- ✅ Add all business hours
- ✅ Upload photos (use the WebP images from `assets/images/`)
- ✅ Add services you offer (gold buying, jewelry appraisal, etc.)
- ✅ Respond to reviews (increases visibility)
- ✅ Post updates regularly (special offers, new items)

### Short Name Setup (Optional)
After claiming, set a custom short name like:
`https://g.page/r/elpasogoldbuyers`

Then update review links to:
```html
href="https://g.page/r/elpasogoldbuyers/review"
```

---

## 🔗 Quick Reference Links

### Your Business Info
- **Name**: El Paso Gold Buyers
- **Address**: 4716 Montana Ave, El Paso, TX 79903
- **Phone**: (915) 626-5661
- **Email**: compramos@aol.com
- **Coordinates**: 31.7956°N, 106.3942°W

### Where Links Appear on Site
1. **Google Reviews Section** (line ~428): "Read Reviews on Google" button
2. **Contact Section** (line ~629): Embedded Google Map
3. **Contact Widget**: "Get Directions" button (opens Google Maps app/website)

### Testing Checklist
- [ ] Open site in browser
- [ ] Click "Read Reviews on Google" → Should open Google Business Profile
- [ ] Click embedded map → Should show location with directions option
- [ ] Click "Get Directions" in contact widget → Should open maps app
- [ ] Verify map shows correct address: 4716 Montana Ave
- [ ] Test on mobile (map should be tappable to open native maps app)

---

## 📞 Need Help?

**Can't find Place ID?**
- Use fallback: `https://www.google.com/search?q=El+Paso+Gold+Buyers+4716+Montana+Ave`
- This searches for your business directly

**Map not showing correct location?**
- Verify address spelling is exact
- Check if Google recognizes the address in Google Maps first
- May take 24-48 hours for new businesses to appear

**Want more reviews?**
- Add QR code linking to review page (print it at counter)
- Send follow-up emails/texts with review link
- Offer small incentive (ethically - don't pay for reviews)

---

## 🚀 Next Steps After Setup

1. **Submit to Google Search Console**
   - Add `sitemap.xml` to Search Console
   - Verify site ownership
   - Monitor search appearance

2. **Local SEO Enhancements**
   - List business on Yelp, Yellow Pages, BBB
   - Ensure NAP (Name, Address, Phone) consistency across web
   - Get backlinks from local El Paso directories

3. **Track Performance**
   - Enable Google Analytics (uncomment code in `<head>`)
   - Monitor Google Business Profile insights
   - Track phone calls and form submissions

---

**Last Updated**: Based on address 4716 Montana Ave, El Paso, TX 79903  
**Coordinates Source**: Google Maps geocoding  
**Review Link Format**: Google's standard writereview URL structure

# Daniela's UGC Portfolio

A modern, responsive portfolio website designed specifically for UGC (User-Generated Content) creators, featuring iPhone-style video showcases, brand partnerships display, and social media platform integration.

## Features

- **iPhone-Style Video Showcases**: Beautiful iPhone mockups to display TikTok and short-form content with view counts
- **Responsive Design**: Fully responsive layout that works perfectly on all devices
- **Smooth Animations**: Elegant animations and transitions for enhanced user experience
- **Brand Showcase**: Dedicated section to display brand partnerships
- **Platform Integration**: Links to all social media platforms with follower counts
- **Contact Form**: Professional contact form for business inquiries
- **Modern UI/UX**: Clean, modern design with gradient accents and glassmorphism effects

## Quick Start

1. Open `index.html` in your web browser
2. The site is ready to use immediately - no build process required!

## Customization Guide

### 1. Personal Information

Edit the hero section in `index.html` (lines 30-50) to update:
- Name
- Title/Role
- Stats (views, brand partners, engagement rate)

### 2. Adding Videos

To add your actual TikTok videos, replace the placeholder iframes in `index.html`:

```html
<iframe src="https://www.tiktok.com/embed/v2/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

Find your TikTok video ID:
1. Go to your TikTok video
2. Click "Share" → "Embed"
3. Copy the video ID from the embed code

### 3. Updating Brand Logos

Replace the placeholder brand names in the brands section (lines 160-195) with:
- Actual brand logos (as images)
- Brand names

Example:
```html
<div class="brand-item">
    <img src="images/brand-logo.png" alt="Brand Name" class="brand-logo">
</div>
```

### 4. Social Media Links

Update the platform links in `index.html` (lines 210-250):
- Replace "#" with your actual profile URLs
- Update usernames
- Update follower counts

### 5. Contact Form

The contact form currently shows an alert on submission. To make it functional:

Option 1: Use a service like Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Option 2: Implement a backend API endpoint and update the form submission in `script.js`

### 6. Colors and Styling

Customize the color scheme in `styles.css`:

```css
:root {
    --primary-color: #FF0050;      /* Main accent color */
    --secondary-color: #00F2EA;     /* Secondary accent */
    --dark: #000000;                /* Dark text */
    --light: #FFFFFF;               /* Light backgrounds */
    --gray: #8B8B8B;                /* Gray text */
}
```

## File Structure

```
daniela-ugc-portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactivity and animations
└── README.md          # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use compressed images for brand logos
2. **Video Loading**: Consider lazy loading for video embeds
3. **Hosting**: Use a CDN for better global performance

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be instantly deployed

### Vercel
1. Import GitHub repository
2. Deploy with one click

## Future Enhancements

- [ ] Add analytics tracking
- [ ] Implement dark mode toggle
- [ ] Add testimonials section
- [ ] Include case studies
- [ ] Add blog/content section
- [ ] Implement email newsletter signup

## License

This project is open source and available for personal use.

## Support

For questions or customization help, please reach out through the contact form on the website.

---

Built with modern web technologies for the best performance and user experience.
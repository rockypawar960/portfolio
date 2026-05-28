# Rocky Pawar's Portfolio - Deployment Guide

## Quick Deploy to Vercel

This portfolio is optimized for easy deployment on Vercel. Follow these steps:

### Option 1: Deploy Directly from GitHub (Recommended)

1. **Push to GitHub**
   - Commit all changes to your GitHub repository
   - ```bash
     git add .
     git commit -m "Add portfolio"
     git push origin main
     ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure it
   - Click "Deploy"

3. **Done!** Your portfolio will be live in minutes

### Option 2: Deploy from v0

1. **Click the Publish Button**
   - In v0, click the three dots menu in the top right
   - Select "Publish to Vercel"
   - Sign in with your Vercel account
   - Follow the prompts

2. **Your site will be deployed automatically**

## Environment Variables

No environment variables are required for this portfolio. It's completely static and will work out of the box.

## Customization

Before deploying, you can customize:

- **Contact Info**: Update links in `components/contact.tsx` and `components/hero.tsx`
- **Content**: Edit text in component files
- **Colors**: Modify the dark theme in `app/globals.css`
- **Animations**: Adjust animation speeds in `app/globals.css`

## Project Structure

```
/components
  - hero.tsx          # Hero section with intro and CTAs
  - about.tsx         # About and education section
  - skills.tsx        # Skills and technologies grid
  - experience.tsx    # Work experience timeline
  - projects.tsx      # Featured projects showcase
  - contact.tsx       # Contact information and links
  - footer.tsx        # Footer with quick links

/app
  - page.tsx          # Main page (combines all sections)
  - layout.tsx        # Root layout with metadata
  - globals.css       # Global styles and animations
```

## Features

✅ **Dark theme with modern tech aesthetic**
✅ **Fully responsive (mobile, tablet, desktop)**
✅ **Smooth animations and transitions**
✅ **Fast performance optimized for Vercel**
✅ **SEO optimized with metadata**
✅ **Semantic HTML and accessibility**
✅ **No external dependencies for styling**

## Performance

- Built with Next.js for optimal performance
- Uses Tailwind CSS for efficient styling
- Optimized images and lazy loading
- Lighthouse ready for fast scores

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Support

For questions about Next.js or deployment, check:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Happy deploying! 🚀**

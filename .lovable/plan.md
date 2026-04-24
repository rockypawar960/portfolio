
# Rocky Pawar — Java Backend Developer Portfolio

A premium, dark-themed single-page portfolio with neon green accents, built as a responsive React site within this TanStack Start project.

## Visual direction
- **Theme:** Deep charcoal/black background, neon green (#39FF14-ish) primary accent, soft white text, subtle grid/glow background effects
- **Typography:** Modern sans-serif (Inter), large bold display headings, mono accents for code-feel labels
- **Cards:** Glassmorphic surfaces, soft green glow on hover, rounded-2xl, lift animation
- **Motion:** Fade-in + slide-up on scroll (IntersectionObserver), animated stat counters, smooth scroll, hover glows

## Sections (single-page, anchor scroll)

1. **Sticky Nav** — Logo "RP", links (About, Skills, Projects, Experience, Contact), Resume download button. Hamburger on mobile.

2. **Hero**
   - Left: Greeting → "Rocky Pawar", role chip "Java Backend Developer", tagline *"Building scalable backend systems and AI-powered applications"*, CTA buttons (View Projects, Download Resume, Contact)
   - Right: Cut-out photo on circular neon-green radial glow with subtle floating animation
   - Background: faint grid + glow orbs

3. **About** — Two-column: bio paragraph + quick facts (MCA CGPA 8.47, Top 5% BCA, IEEE Hacksagon Finalist)

4. **Stats strip** — Animated counters: Projects (2+), CGPA (8.47), Certificates (3), Hackathon Finals (1)

5. **Skills** — Three category cards (Backend / Database / Tools) with chip badges for each tech

6. **Featured Project — Chanakya: The Mentor**
   - Large showcase card with screenshot (your uploaded dashboard image)
   - Problem / Solution / Impact three-column breakdown
   - Tech stack chips
   - **"Watch Demo" button → opens YouTube modal** (embed: nLtgsIYQGts)

7. **Other Projects** — Card for Student Management System (CRUD, JWT, Spring Boot, MySQL) with feature bullets

8. **Experience** — Timeline card: *Java Backend Developer Trainee (2024–Present)* with the four bullets

9. **Certificates** — 3 cards (Scaler, Infosys, AWS) with badge icons

10. **Achievements** — Highlight card: IEEE HACKSAGON Finalist at IIIT Gwalior

11. **Contact** — Form (Name, Email, Message) that opens user's email client via `mailto:` with prefilled subject/body. Side panel with email, LinkedIn, GitHub links.

12. **Footer** — Name, tagline, social icons, copyright

## Assets to wire in
- Copy `user-uploads://ChatGPT_Image_Apr_23_2026_05_33_03_PM.png` → `src/assets/rocky-hero.png` (hero photo)
- Copy `user-uploads://image.png` → `src/assets/chanakya-screenshot.png` (featured project preview)
- Copy `user-uploads://Latest_off_campus_resume_main.pdf` → `public/rocky-pawar-resume.pdf` (downloadable)

## Technical
- Single route at `/` (replace placeholder `index.tsx`)
- New `Portfolio` component with all sections
- Design tokens added to `src/styles.css` (neon green primary, dark surfaces, glow shadow utilities)
- YouTube modal via existing shadcn `Dialog`
- Smooth-scroll anchor navigation
- Fully mobile-responsive with hamburger menu (shadcn `Sheet`)
- Scroll-reveal animations via IntersectionObserver hook
- Updated page meta (title, description, OG tags) for SEO

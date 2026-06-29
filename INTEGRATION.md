# Portfolio upgrade: integration guide

This drop-in upgrade rebuilds your existing Vite + React + Tailwind + Framer Motion
portfolio around enterprise Microsoft case studies, removes the Firebase dependency
(which is what broke your images), and adds a built-in case-study system.

## File placement

Copy these into your `zahidparvizweb` repo, overwriting the existing files:

    src/App.jsx                      (new routing: Home, Work, CaseStudy, About, Contact)
    src/data/content.js              (NEW: all content lives here, no database)
    src/components/Home.jsx          (NEW: hero, metrics, featured case studies)
    src/components/Work.jsx          (NEW: replaces Projects.jsx)
    src/components/CaseStudy.jsx     (NEW: the case-study / success-story detail page)
    src/components/About.jsx         (replaces existing)
    src/components/Contact.jsx       (replaces existing)
    src/components/Header.jsx        (replaces existing)
    src/components/Footer.jsx        (replaces existing)
    index.html                       (replaces existing: adds meta + Open Graph tags)

## Steps

1. Delete `src/components/Projects.jsx` (replaced by Work.jsx) and remove `firebase.js`
   plus the `firebase` dependency. You no longer need Firebase, the admin app, or a
   Blaze plan. Run: `npm uninstall firebase`

2. Make sure `src/assets/profile.png`, `src/assets/aboutme.png`, and
   `src/assets/zahidparviz.pdf` still exist (the components import them). Replace
   `zahidparviz.pdf` with your new master resume PDF so the Resume button serves the
   corrected version.

3. The case-study card and detail covers use CSS gradients, so there are no images to
   host and nothing to break. To add a real cover later, drop an image in `public/`
   and reference it.

4. To add a new case study, edit `src/data/content.js` and add an object to
   `caseStudies`. To add a repo, add to `codeSamples`. That is the whole CMS.

5. `npm run dev` to check locally, then push. Vercel redeploys automatically.

## Optional: the og-image

index.html references /og-image.png for the link-preview card. Create a simple
1200x630 image (your name + title on a dark background) and put it in `public/og-image.png`.
This is what shows when you paste your link on LinkedIn.

## Note on link previews

This is a single-page app, so the homepage gets one preview card (from index.html).
Per-case-study preview cards require server rendering. When you are ready, the Next.js
migration adds a unique preview card for every case study you post, which is the main
reason to make that move.

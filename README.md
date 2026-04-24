# Accredian Enterprise — Partial Clone

A fully responsive clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js 14 (App Router)**, **Tailwind CSS**, a live **AI chat assistant**, and an **API route** for lead capture.

---

## Live Demo
> Deploy to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Outfit (Google Fonts via `next/font`)
- **AI Chat**: Rule-based NLP bot via Next.js API route (no API key needed)
- **Lead API**: Next.js API Route (`/api/leads`) — stores leads in `leads.json`
- **Deployment**: Vercel

---

## Sections Built
| Section | Component |
|---|---|
| Sticky Navbar (responsive + mobile menu) | `Navbar.jsx` |
| Hero (two-column, animated CTAs) | `Hero.jsx` |
| Stats bar | `Stats.jsx` |
| Enterprise Partners strip | `Partners.jsx` |
| Programs grid (6 cards) | `Programs.jsx` |
| Why Accredian features (6 cards) | `Features.jsx` |
| AI Chat Assistant (live bot) | `AIChat.jsx` |
| Testimonials (3 cards) | `Testimonials.jsx` |
| Lead Capture Form + validation | `LeadForm.jsx` |
| CTA Banner | `CTABanner.jsx` |
| Footer | `Footer.jsx` |

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
# Open http://localhost:3000
```

No environment variables needed — works out of the box.

---

## AI Chat Feature

The site includes a live **AI assistant** that answers user questions about Accredian programs instantly.

### How it works
1. User types a question (or picks a suggestion chip)
2. Frontend calls `/api/ai-chat` (Next.js API route)
3. The route uses intent-matching NLP to find the best answer from a curated knowledge base
4. Response is returned with a realistic typing delay for a natural feel

### Topics it handles
- All 6 programs (AI/ML, Data Science, Cloud, Product, Cybersecurity, Custom)
- Pricing, certifications, IIT/IIM credentials
- Delivery modes, team size, onboarding timeline
- Dashboard & tracking features
- General greetings and follow-ups

### Why no external API?
The bot uses a server-side knowledge base with pattern matching — zero cost, zero latency issues, works on any deployment including Vercel free tier.

---

## API — Lead Capture

### POST `/api/leads`
Submit a new enterprise lead.

**Request body:**
```json
{
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul@company.com",
  "company": "Acme Corp",
  "teamSize": "51-200",
  "program": "Data Science",
  "message": "We want to train 100 engineers."
}
```

**Response:**
```json
{ "success": true, "id": "1717000000000" }
```

### GET `/api/leads`
Retrieve all submitted leads (admin use).

---

## Deployment on Vercel

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic CI/CD deployments.

---

## Approach Taken

1. **Component-first**: Each section is an isolated, reusable React component with its own data.
2. **Design system**: Consistent color tokens (brand navy/blue) via Tailwind config.
3. **Responsive**: Mobile-first layout using Tailwind `md:` breakpoints and CSS Grid.
4. **AI Chat**: Server-side intent-matching bot with a curated knowledge base — no external API dependency.
5. **Lead API**: Next.js API route persists leads to `leads.json`, ready to swap for a real DB.
6. **Smooth UX**: Scroll-aware navbar, hover animations, form success/error states, suggestion chips.

---

## AI Usage (Claude)

| Area | What AI Did | What I Modified |
|---|---|---|
| Component scaffolding | Generated full JSX for all 11 components | Reviewed props, data arrays, Tailwind classes |
| AI chat widget | Generated chat UI + intent-matching API route | Tuned knowledge base, added suggestion chips |
| Lead form | Full controlled form with fetch + validation | Added error/disabled/success states |
| API routes | Generated POST/GET handlers with validation | Added file-based persistence |
| Responsive layout | Suggested breakpoints and grid structure | Adjusted spacing and mobile behaviour |
| README | Initial draft structure | Rewrote sections, added AI chat docs |

---

## Improvements with More Time
- Swap `leads.json` for PostgreSQL or MongoDB
- Add admin dashboard to view and manage leads
- Email notifications on form submit (Resend / Nodemailer)
- Upgrade AI chat to a real LLM (Claude / Gemini) when budget allows
- Add Framer Motion animations on scroll
- Unit tests for API routes and form validation
- `next/image` for optimized partner logos
- i18n support for multi-region enterprise clients

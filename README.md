# De Pizzano — Restaurant Website Concept

> **INDEPENDENT WEBSITE CONCEPT — FOR OWNER REVIEW**  
> *Business details, menu prices and imagery are based on available public information and require owner approval.*

---

## 1. Project Overview

**De Pizzano** is an independent, premium web application concept crafted for the pizza, pasta, and fast food eatery located in **Soldier Bazar No. 3, Karachi, Pakistan**. 

This sales prototype demonstrates the commercial power and brand elevation of a dedicated modern online presence compared to sole reliance on third-party food delivery aggregators.

### Core Business Identity (Researched Dataset)
* **Brand Name:** De Pizzano (Alternative display spelling: De-Pizzano)
* **Tagline:** *Tasty Delicious*
* **Location:** Shop No. 9, Murtaza Terrace, Soldier Bazar No. 3, near Hamza Uniform, Karachi, Pakistan.
* **Provisional Phone:** `+92 318 2588631` (Google listing; pending owner confirmation)
* **Provisional Operating Hours:** Daily 12:00 PM – 3:00 AM
* **Foodpanda Listing:** [De Pizzano Soldier Bazar on Foodpanda](https://www.foodpanda.pk/restaurant/s5nk/de-pizzano-soldier-bazar)
* **Google Maps Link:** [View Soldier Bazar Directions](https://www.google.com/maps/search/?api=1&query=Shop+No+9+Murtaza+Terrace+Soldier+Bazar+No+3+Karachi)

---

## 2. Business Objectives

1. **Independent Brand Elevation:** Showcase De Pizzano with custom pizzeria typography, warm charcoal/crimson/gold styling, and appetizing presentation.
2. **Interactive 26-Item Digital Menu:** Provide real-time category filtering and search across all 26 researched menu items.
3. **Ordering Destinations:** Offer frictionless click-to-call ordering and high-converting referral buttons directly to the verified Foodpanda restaurant listing.
4. **Data Integrity & Owner Safety:** Avoid fabricated ratings, fake reviews, or unverified secondary locations while establishing an architecture ready for instant production deployment upon owner review.

---

## 3. Technology Stack

* **Framework:** Next.js 15.1 (App Router, Server & Client Components)
* **Language:** TypeScript 5.7 (Strict mode enabled)
* **Library:** React 19.0
* **Styling:** Tailwind CSS 3.4 with custom design tokens
* **Animations:** Motion for React (`framer-motion` 12.4) with reduced-motion accessibility
* **Iconography:** Lucide React
* **Unit & Component Testing:** Jest 29.7 & React Testing Library 16.2
* **E2E Automation:** Playwright 1.50
* **Static Analysis:** ESLint 9 with `next/core-web-vitals`

---

## 4. Key Features

* **Complete 26-Item Menu:** Exact catalog spanning Starters (4), Regular Pizza (11), Special Pizza (5), Sandwiches (2), Pastas (2), and Fried Items (2).
* **Live Search & Category Filtering:** Instant search by name, category, or ingredients combined seamlessly with category filters.
* **Product Detail Modal:** Informative dialog with starting price indicators and public directory pricing disclaimers.
* **Real Link Actions:** Functional click-to-call `tel:` triggers, Google Maps directions, and secure Foodpanda ordering links.
* **Responsive Layouts:** Handcrafted viewport adaptability across mobile (320px, 375px, 390px, 430px), tablets (768px, 1024px), and desktops (1280px, 1440px, 1920px).
* **Full Accessibility:** Keyboard navigation, visible focus indicators, Escape key dismissal for modals/drawers, and full `prefers-reduced-motion` support.
* **SEO & Structured Data:** Semantic HTML5 hierarchy, page-specific Open Graph metadata, automated `sitemap.xml`, `robots.txt`, and Schema.org `Restaurant` JSON-LD.

---

## 5. Project Architecture & Directory Layout

```
de-pizzano-website/
├── public/
│   ├── icons/
│   └── images/
│       ├── brand/              # Brand SVG wordmark & logo
│       ├── hero/               # Hero graphics & decorative elements
│       ├── menu/               # 26 standalone vector menu assets
│       ├── gallery/            # Dish presentation assets
│       └── placeholders/       # High-res concept fallbacks
├── src/
│   ├── app/
│   │   ├── layout.tsx          # App shell, Navbar, Footer, SEO Schema
│   │   ├── page.tsx            # Homepage (Hero, Featured, About, Gallery, Location)
│   │   ├── globals.css         # Tailwind directives & accessibility resets
│   │   ├── not-found.tsx       # Custom 404 handler
│   │   ├── sitemap.ts          # Automated sitemap generation
│   │   ├── robots.ts           # Robots.txt configuration
│   │   ├── menu/page.tsx       # 26-item menu with search & category filters
│   │   ├── about/page.tsx      # Factual brand profile & concept story
│   │   ├── locations/page.tsx  # Soldier Bazar primary branch & multi-branch readiness
│   │   └── contact/page.tsx    # Direct contact actions, directions, hours
│   ├── components/
│   │   ├── animations/         # Reveal & PageTransition animation wrappers
│   │   ├── home/               # Hero, FeaturedMenu, AboutSection, Gallery, LocationSection
│   │   ├── layout/             # Navbar, MobileMenu, Footer
│   │   ├── menu/               # MenuCard, MenuGrid, MenuFilters, MenuSearch, ProductDialog
│   │   └── ui/                 # Button, Container, SectionHeading
│   ├── data/
│   │   ├── business.ts         # Central business configuration & contact details
│   │   ├── menu.ts             # Strongly typed 26 menu products & categories
│   │   ├── navigation.ts       # Navigation routes & labels
│   │   └── social-links.ts     # Configurable social handles with verification flags
│   ├── lib/
│   │   ├── format-price.ts     # Starting-price & currency formatters
│   │   ├── links.ts            # Safe telephone, map & Foodpanda link generators
│   │   └── utils.ts            # ClassName merge helper (clsx + twMerge)
│   └── types/
│       ├── business.ts         # Business & location interfaces
│       └── menu.ts             # Menu item & category schemas
├── docs/
│   ├── OWNER-VERIFICATION.md   # Launch checklist for restaurant management
│   ├── QA-REPORT.md            # Test matrix, bug log & resolution report
│   └── RESEARCH-NOTES.md       # Public research sources & discrepancy notes
├── tests/
│   ├── unit/                   # 8 Jest & RTL test suites (33 tests)
│   └── e2e/                    # Playwright end-to-end browser specifications
├── jest.config.ts
├── jest.setup.ts
├── playwright.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 6. Installation & Local Development

### Prerequisites
* Node.js version `>= 20.9.0` (Node 24 recommended)
* npm version `>= 10.0.0`

### Setup Instructions
```bash
# 1. Clone repository
git clone https://github.com/your-repo/de-pizzano-website.git
cd de-pizzano-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live website.

---

## 7. Testing & Verification Commands

```bash
# Run TypeScript static type check
npm run type-check

# Run ESLint linting verification
npm run lint

# Run Jest unit & component tests
npm test

# Run Jest tests with coverage report
npm run test:coverage

# Run Playwright End-to-End browser tests
npm run test:e2e

# Compile production build
npm run build

# Start production server
npm run start
```

---

## 8. Business Data Integrity Notes

* **Central Configuration:** All contact numbers, addresses, and hours are defined in `src/data/business.ts`. To change the primary contact or branch, edit this single file.
* **Pricing Notice:** Rates shown are from the public Foodpanda listing. Where the original listing noted "onwards", items are accurately labelled *"Starting at Rs. X"*.
* **WhatsApp Ordering:** Retained disabled in configuration until an active WhatsApp business number is confirmed by the owner.
* **Multi-Branch Readiness:** The code supports expanding from Soldier Bazar No. 3 to additional confirmed branches seamlessly.

---

## 9. Image Sources & Licensing

* Menu item illustrations are custom vector SVG assets stored locally under `/public/images/menu/` to guarantee zero layout shifts, zero broken remote URLs, and fast loading.
* All imagery is strictly classified as illustrative demo imagery and is ready to be replaced with authentic restaurant photos upon owner approval.

---

## 10. Demo Disclaimer

This website concept was created solely as an independent design and technology proposal. It is not an authorized or official website of De Pizzano. No business relationship, partnership, or official endorsement is claimed or implied.

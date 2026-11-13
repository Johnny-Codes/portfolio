// Single source of truth for website plan pricing.
// The math behind these numbers lives in docs/website-plans-pricing.md —
// update both together.

export const HOURLY_RATE = 65;
export const MINIMUM_TERM_MONTHS = 12;

export const plans = [
  {
    id: "essentials",
    name: "Essentials",
    tagline: "Everything a local business needs to look professional and get calls.",
    setupFee: 199,
    monthly: 125,
    pages: 5,
    editMinutes: 30,
    features: [
      "Up to 5 pages",
      "Custom-coded design, no WordPress",
      "Contact form with spam protection",
      "Mobile-friendly and fast",
      "Hosting, SSL & security included",
      "Basic local SEO setup",
      "30 minutes of edits every month",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "More room to show your work and stand out in local search.",
    setupFee: 399,
    monthly: 175,
    pages: 10,
    editMinutes: 60,
    featured: true,
    features: [
      "Up to 10 pages",
      "Everything in Essentials",
      "Photo gallery or project portfolio",
      "Google Business Profile setup & tune-up",
      "Reviews, map & booking-link integration",
      "Priority turnaround on edits",
      "60 minutes of edits every month",
    ],
  },
];

export const includedInEveryPlan = [
  {
    title: "Hosting on Cloudflare",
    body: "Your site is served from Cloudflare's global network: fast load times, free SSL, and built-in DDoS protection.",
  },
  {
    title: "Spam-protected forms",
    body: "Customer inquiries land in your inbox, filtered by Cloudflare Turnstile instead of annoying puzzles.",
  },
  {
    title: "Monthly edits",
    body: "Update hours, swap photos, change prices, post a special. Just send me an email or text.",
  },
  {
    title: "Local SEO basics",
    body: "Page titles, descriptions, structured data, and a sitemap so Google knows what you do and where.",
  },
  {
    title: "Privacy-friendly analytics",
    body: "Visitor stats via Cloudflare Web Analytics, with no cookie banners needed. Ask for your numbers anytime.",
  },
  {
    title: "A real local person",
    body: "Based in Arab, AL. Happy to meet in person anywhere in Marshall County, Huntsville, or Birmingham.",
  },
];

export const formatUSD = (amount) => `$${amount.toLocaleString("en-US")}`;

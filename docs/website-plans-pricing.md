# Website Plans — Pricing Math

Internal notes (not deployed; `docs/` is outside `public/`). Prices shown on
`/websites/` come from `src/websites/plans.js` — change both together.

## Inputs

| | Value |
|---|---|
| Hourly rate | $65/hr |
| Minimum term | 12 months, then month-to-month (30 days' notice) |
| Overage / extra work | $65/hr, billed in 15-minute increments ($16.25) |
| Hosting cost per client site | ~$0 (Cloudflare free tier) + domain ~$10–15/yr if you pay for it |

## Plans

| | Essentials | Growth |
|---|---|---|
| Setup fee | $199 | $399 |
| Monthly | $125 | $175 |
| Pages | up to 5 | up to 10 |
| Edit time included | 30 min/mo | 60 min/mo |
| Est. build time | ~16 hrs ($1,040) | ~26 hrs ($1,690) |

## Does it pay $65/hr? (worst case: client uses every edit minute)

**Essentials**
- Year 1 revenue: $199 + 12 × $125 = **$1,699**
- Edit time: 12 × 0.5 hr × $65 = $390 → leaves **$1,309 for the build ≈ $82/hr**
- Break-even on build + edits: month 10 (`199 + 125n ≥ 1040 + 32.50n`)
- Month 13+: $125 for ≤ 0.5 hr edits + a little admin → **$165+/hr**

**Growth**
- Year 1 revenue: $399 + 12 × $175 = **$2,499**
- Edit time: 12 × 1 hr × $65 = $780 → leaves **$1,719 for the build ≈ $66/hr**
- Break-even: month 12 (`399 + 175n ≥ 1690 + 65n`). Tight, so keep Growth builds near 26 hrs.
- Month 13+: $175 for ≤ 1 hr → **$175/hr**

Most clients won't use their full edit time, so real numbers are better than this.
The 12-month minimum is what makes a $199 setup fee safe: it guarantees the build is paid off.

## Customers needed for MRR targets

| MRR | All Essentials | All Growth | ~70/30 mix (avg ≈ $140) |
|---|---|---|---|
| $1,000 | 8 | 6 | ~8 |
| $2,500 | 20 | 15 | ~18 |
| $5,000 | 40 | 29 | ~36 |

Max edit load at 36 clients (25 Essentials / 11 Growth): ~24 hrs/mo; realistically about half.
At ~2 new builds/month (≈10 hrs/week): ~$1k MRR in 4 months, ~$2.5k in 9, ~$5k in 18 (before churn).

## Things the contract should cover

- 12-month minimum; early cancellation = remaining months due (or a buyout)
- After the term: month-to-month, 30 days' notice
- What counts as an edit (text, photos, hours, prices, staff, specials) vs. quoted work (new pages, redesigns, features)
- Edit time doesn't roll over; overage at $65/hr in 15-min increments, approved before work starts
- Ownership: client owns domain + content they supply; design/code can be bought out any time
- Buyout = (Monthly Fees left in the 12-month term) + X, where X = **$500 Essentials / $800 Growth**
  (≈ 4–5 months of fees / ~half the build at $65/hr; covers 2–3 hrs of handoff + the design and lost
  recurring income; still well under a $1,500–3,000 new build elsewhere).
  e.g. Essentials at month 8: 4 × $125 + $500 = $1,000 · Growth at month 15: $0 + $800 = $800
- Client supplies content by an agreed date; launch timeline starts when content is received
- Non-payment: site may be paused after X days late
- Revision rounds included in the initial build (e.g. 2)
- Not included: logo design / branding (client supplies logo, or site uses a text wordmark)
- Not offered: WordPress / CMS sites — no building, hosting, or maintaining them; existing WP sites get replaced with custom-coded ones

## Operational setup

- **Intake + contact forms** use Netlify Forms (detected from the prerendered HTML).
  After the first deploy: Netlify dashboard → *Forms* → confirm `website-intake` and `contact` appear,
  then *Forms → Form notifications* → add an email notification for each.
- **Billing (Stripe):** one Product per plan with a recurring monthly Price; add the setup fee as a
  one-time line item in the same Checkout / Payment Link so the client pays setup + first month at once.
  Stripe doesn't enforce the 12-month minimum; the contract does.
- **Client sites** go on Cloudflare (Pages/Workers static assets + Turnstile for form spam protection).

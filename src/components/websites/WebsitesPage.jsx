import SchemaForm from "../forms/SchemaForm";
import { websiteIntakeForm } from "../../forms/schemas";
import {
  HOURLY_RATE,
  MINIMUM_TERM_MONTHS,
  formatUSD,
  includedInEveryPlan,
  plans,
} from "../../websites/plans";

const lowestSetup = Math.min(...plans.map((p) => p.setupFee));
const lowestMonthly = Math.min(...plans.map((p) => p.monthly));

const steps = [
  {
    title: "Tell me about your business",
    body: "Fill out the short form below. It takes about 5 minutes and there's no commitment.",
  },
  {
    title: "Free consultation",
    body: "We talk by phone or meet in person. I'll confirm what you need, recommend a plan, and answer your questions.",
  },
  {
    title: "Sign & kick off",
    body: "Sign a simple agreement and pay the setup fee plus your first month through secure online billing.",
  },
  {
    title: "Review & launch",
    body: "You review the site and request changes before it goes live, typically 2–4 weeks after I have your content.",
  },
  {
    title: "Ongoing care",
    body: "I keep it hosted, secure, and up to date. Need a change? Send me a text or email.",
  },
];

const faqs = [
  {
    q: "Why a monthly plan instead of one big up-front price?",
    a: "You get a professional site without a large up-front bill, and it never goes stale. Hosting, security, updates, and your monthly edits are all covered by one predictable payment, with one local person to call.",
  },
  {
    q: "What counts as an edit?",
    a: `Updating text, swapping photos, changing hours or prices, adding a team member, posting a special, and similar small changes. New pages, redesigns, and new features are quoted separately at ${formatUSD(HOURLY_RATE)}/hour. Unused edit time doesn't roll over.`,
  },
  {
    q: "What if I need more than my monthly edit time?",
    a: `Extra time is billed at ${formatUSD(HOURLY_RATE)}/hour in 15-minute increments. I'll always tell you before starting anything that goes over your plan.`,
  },
  {
    q: `What happens after the ${MINIMUM_TERM_MONTHS}-month minimum?`,
    a: "Your plan continues month to month. You can cancel any time with 30 days' notice.",
  },
  {
    q: "Do I own my website?",
    a: "You always own your domain name and the content you provide: your text, photos, and logo. If you ever want to host it somewhere else, you can buy out the site's design and code at any time.",
  },
  {
    q: "Can I pay for the website up front instead?",
    a: `Yes. I can quote a one-time build at my ${formatUSD(HOURLY_RATE)}/hour rate, paired with a smaller monthly hosting plan. Just mention it in the form or during our consultation.`,
  },
  {
    q: "I already have a website. Can you replace it?",
    a: "Absolutely. I'll rebuild it on the same plans, move your domain over, and make sure your existing Google listing keeps pointing to the right place.",
  },
  {
    q: "Do you build or maintain WordPress sites?",
    a: "No. Every site I build is custom-coded, with no WordPress, page builders, or plugins. That means faster load times, far fewer security holes, and no plugin updates that break things. If you have a WordPress site today, I can replace it with a custom site, but I don't take over or maintain WordPress sites.",
  },
  {
    q: "Do you design logos?",
    a: "No, logo design isn't something I offer. If you already have a logo, I'll build the site around it. If you don't, I'll use a clean text version of your business name, and you can add a logo whenever you have one.",
  },
  {
    q: "Do you build online stores?",
    a: "Yes, but e-commerce is quoted separately because it depends on how many products you sell and how you handle shipping and payments. Tell me about it in the form.",
  },
];

const WebsitesPage = () => (
  <>
    {/* Hero */}
    <section className="text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
        Small Business Websites for <span className="text-professional-yellow">North Alabama</span>
      </h1>
      <p className="mt-6 text-xl text-professional-offwhite max-w-2xl mx-auto">
        Designed, hosted, and maintained by a local developer, for one simple monthly price.
      </p>
      <p className="mt-3 text-lg text-professional-silver">
        Setup from {formatUSD(lowestSetup)}, then from {formatUSD(lowestMonthly)}/month. Serving Arab, Guntersville,
        Huntsville, Birmingham &amp; Marshall County.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#intake"
          className="px-8 py-3 rounded-lg bg-professional-yellow text-black font-bold text-lg hover:bg-professional-darkyellow transition-colors"
        >
          Start Your Website
        </a>
        <a
          href="#plans"
          className="px-8 py-3 rounded-lg border border-professional-yellow text-professional-yellow font-bold text-lg hover:bg-professional-yellow hover:text-black transition-colors"
        >
          See Plans &amp; Pricing
        </a>
      </div>
    </section>

    {/* How it works */}
    <section id="how-it-works" className="py-10 scroll-mt-4">
      <h2 className="text-3xl text-center font-bold border-b-4 border-professional-yellow pb-4 mb-8">How It Works</h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-lg bg-professional-darkgrey border border-professional-midgrey p-5">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-professional-yellow text-black font-bold text-lg mb-3">
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-professional-silver">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* Plans */}
    <section id="plans" className="py-10 scroll-mt-4">
      <h2 className="text-3xl text-center font-bold border-b-4 border-professional-yellow pb-4 mb-3">Plans &amp; Pricing</h2>
      <p className="text-center text-lg text-professional-silver mb-8">
        Low setup fee, one monthly price, {MINIMUM_TERM_MONTHS}-month minimum. No surprise bills.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`relative rounded-xl p-6 sm:p-8 bg-gradient-to-br from-professional-grey via-professional-darkgrey to-black border-2 ${
              plan.featured ? "border-professional-yellow" : "border-professional-midgrey"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-professional-yellow text-black text-sm font-bold">
                Most popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-professional-yellow">{plan.name}</h3>
            <p className="mt-2 text-professional-silver min-h-[3rem]">{plan.tagline}</p>
            <p className="mt-6">
              <span className="text-5xl font-bold text-white">{formatUSD(plan.monthly)}</span>
              <span className="text-xl text-professional-silver">/month</span>
            </p>
            <p className="mt-1 text-professional-silver">+ {formatUSD(plan.setupFee)} one-time setup</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="text-professional-yellow mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#intake"
              className={`mt-8 block text-center px-6 py-3 rounded-lg font-bold transition-colors ${
                plan.featured
                  ? "bg-professional-yellow text-black hover:bg-professional-darkyellow"
                  : "border border-professional-yellow text-professional-yellow hover:bg-professional-yellow hover:text-black"
              }`}
            >
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-professional-silver">
        Need more than a quick edit? Extra work is {formatUSD(HOURLY_RATE)}/hour, billed in 15-minute increments.
        Online stores and custom features are quoted separately.
      </p>
    </section>

    {/* Included */}
    <section className="py-10">
      <h2 className="text-3xl text-center font-bold border-b-4 border-professional-yellow pb-4 mb-8">
        Included in Every Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {includedInEveryPlan.map((item) => (
          <div
            key={item.title}
            className="bg-black/40 rounded-lg p-5 border-l-4 border-professional-yellow"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-professional-silver">{item.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section id="faq" className="py-10 scroll-mt-4">
      <h2 className="text-3xl text-center font-bold border-b-4 border-professional-yellow pb-4 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-lg bg-professional-darkgrey border border-professional-midgrey p-5"
          >
            <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-lg font-semibold text-white">
              {faq.q}
              <span className="text-professional-yellow text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-professional-silver">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* Intake form */}
    <section id="intake" className="py-10 scroll-mt-4">
      <h2 className="text-3xl text-center font-bold border-b-4 border-professional-yellow pb-4 mb-3">
        Start Your Website
      </h2>
      <p className="text-center text-lg text-professional-silver mb-8 max-w-2xl mx-auto">
        Tell me about your business. It takes about 5 minutes and there&apos;s no commitment. I&apos;ll reach out within
        one business day to set up a free consultation.
      </p>
      <SchemaForm
        schema={websiteIntakeForm}
        submitLabel="Send My Project Details"
        successMessage="I'll review your answers and reach out within one business day to set up your free consultation."
      />
    </section>
  </>
);

export default WebsitesPage;

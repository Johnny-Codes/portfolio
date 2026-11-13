import { plans } from "./websites/plans.js";

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Paul Johns Business AI Integration & Web Development",
  "description": "Practical AI integration and workflow automation for businesses in Arab, Huntsville, Birmingham, and North Alabama, including AI assistants, document workflows, customer inquiry tools, and connections to existing business systems.",
  "url": "https://pauljohns.dev",
  "telephone": "256-299-7002",
  "email": "johnspaulm@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Arab",
    "addressRegion": "AL",
    "postalCode": "35016",
    "addressCountry": "US"
  },

  "areaServed": [
    {
      "@type": "City",
      "name": "Arab",
      "containedInPlace": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Huntsville",
      "containedInPlace": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Birmingham",
      "containedInPlace": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Guntersville",
      "containedInPlace": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "City",
      "name": "Cullman",
      "containedInPlace": {
        "@type": "State",
        "name": "Alabama"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Marshall County"
    }
  ],
  "priceRange": "$$",
  "serviceType": [
    "Business AI Integration",
    "AI Workflow Automation",
    "AI Assistant Development",
    "AI Customer Support Integration",
    "Document Processing Automation",
    "Business Process Automation",
    "Custom AI Application Development",
    "Website Design",
    "Web Development",
    "E-commerce Development",
    "Custom Software Development"
  ],
  "knowsAbout": [
    "React",
    "Python",
    "Django",
    "Business AI Integration",
    "Generative AI",
    "AI Workflow Automation",
    "OpenAI API",
    "Anthropic API",
    "Web Design",
    "E-commerce",
    "Business Process Automation"
  ],
  "sameAs": [
    "https://linkedin.com/in/pmjohns",
  ]
};

export const websitesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Small Business Website Design & Hosting",
  "serviceType": "Website Design",
  "url": "https://pauljohns.dev/websites/",
  "description": "Websites for small and local businesses in North Alabama, designed, hosted and maintained for one monthly price.",
  "provider": {
    "@type": "ProfessionalService",
    "name": structuredData.name,
    "url": structuredData.url,
    "telephone": structuredData.telephone,
    "address": structuredData.address,
  },
  "areaServed": structuredData.areaServed,
  "offers": plans.map((plan) => ({
    "@type": "Offer",
    "name": `${plan.name} Website Plan`,
    "priceCurrency": "USD",
    "price": plan.monthly,
    "priceSpecification": [
      {
        "@type": "UnitPriceSpecification",
        "name": "Monthly",
        "price": plan.monthly,
        "priceCurrency": "USD",
        "unitCode": "MON",
      },
      {
        "@type": "UnitPriceSpecification",
        "name": "One-time setup",
        "price": plan.setupFee,
        "priceCurrency": "USD",
      },
    ],
  })),
};

export function getStructuredData(page) {
  return page === "websites" ? websitesStructuredData : structuredData;
}

// Add this script to your index.html head section for local business SEO
// Schema.org structured data for local business and service area

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Paul Johns Web Development & AI Solutions",
  "description": "Freelance website design, custom web development, and AI automation services for businesses in Arab, Huntsville, Birmingham, and North Alabama",
  "url": "https://pauljohns.dev",
  "telephone": "256-299-7002",
  "email": "johnspaulm@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Arab",
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
    "Website Design",
    "Web Development",
    "E-commerce Development",
    "AI Integration",
    "Business Automation",
    "Agentic AI Solutions",
    "Custom Software Development"
  ],
  "knowsAbout": [
    "React",
    "Python",
    "Django",
    "AI Automation",
    "OpenAI GPT-4",
    "Web Design",
    "E-commerce",
    "SEO",
    "Agentic AI",
    "AI Solutions",
  ],
  "sameAs": [
    "https://linkedin.com/in/pmjohns",
  ]
};

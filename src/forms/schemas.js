// Form definitions rendered by SchemaForm. Submissions go to Netlify Forms,
// which detects each form from the prerendered HTML at deploy time — so every
// field here must render on the server (no client-only fields).

/**
 * Field shape:
 *  name, label, type: text | email | tel | url | textarea | select | radio | checkboxes
 *  required?, maxLength?, options? (for select/radio/checkboxes), placeholder?, help?
 */

export const websiteIntakeForm = {
  id: "website-intake",
  title: "Website project intake",
  sections: [
    {
      title: "About you",
      fields: [
        { name: "name", label: "Your name", type: "text", required: true, maxLength: 120 },
        { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
        { name: "phone", label: "Phone", type: "tel", required: true, maxLength: 40 },
        {
          name: "contactPreference",
          label: "Best way to reach you",
          type: "radio",
          required: true,
          options: ["Phone call", "Text", "Email"],
        },
        {
          name: "bestTime",
          label: "Best time to reach you",
          type: "text",
          maxLength: 120,
          placeholder: "e.g. weekday mornings",
        },
      ],
    },
    {
      title: "Your business",
      fields: [
        { name: "businessName", label: "Business name", type: "text", required: true, maxLength: 160 },
        {
          name: "industry",
          label: "What does your business do?",
          type: "text",
          required: true,
          maxLength: 200,
          placeholder: "e.g. HVAC repair, hair salon, landscaping",
        },
        {
          name: "serviceArea",
          label: "Where are you located / what area do you serve?",
          type: "text",
          required: true,
          maxLength: 200,
          placeholder: "e.g. Arab and Guntersville",
        },
        {
          name: "currentWebsite",
          label: "Current website (if any)",
          type: "url",
          maxLength: 300,
          placeholder: "https://",
        },
        {
          name: "domainStatus",
          label: "Do you own a domain name (yourbusiness.com)?",
          type: "radio",
          required: true,
          options: ["Yes", "No", "Not sure"],
        },
        {
          name: "domainName",
          label: "Domain name, or one you'd like",
          type: "text",
          maxLength: 200,
        },
      ],
    },
    {
      title: "Your website",
      fields: [
        {
          name: "plan",
          label: "Which plan are you interested in?",
          type: "radio",
          required: true,
          options: ["Essentials", "Growth", "Not sure yet"],
        },
        {
          name: "pages",
          label: "Which pages do you think you need?",
          type: "checkboxes",
          options: [
            "Home",
            "About",
            "Services",
            "Gallery / Portfolio",
            "Reviews / Testimonials",
            "FAQ",
            "Menu / Price list",
            "Contact",
          ],
        },
        {
          name: "features",
          label: "Features you want",
          type: "checkboxes",
          options: [
            "Contact / quote request form",
            "Google Map & directions",
            "Click-to-call button",
            "Online booking link",
            "Social media links",
            "Google reviews",
          ],
        },
        {
          name: "goal",
          label: "What's the #1 thing you want your website to do?",
          type: "textarea",
          required: true,
          maxLength: 2000,
          placeholder: "e.g. get more quote requests, look more professional, show off our work",
        },
        {
          name: "inspiration",
          label: "Websites you like (competitors or otherwise)",
          type: "textarea",
          maxLength: 1000,
          placeholder: "Paste links and tell me what you like about them",
        },
      ],
    },
    {
      title: "Content & timing",
      fields: [
        {
          name: "logo",
          label: "Do you have a logo? (Logo design isn't included)",
          type: "radio",
          options: ["Yes, a good-quality file", "Yes, but only a low-quality image", "No"],
        },
        {
          name: "photos",
          label: "Do you have photos of your work, team, or location?",
          type: "radio",
          options: ["Yes, plenty", "A few", "No"],
        },
        {
          name: "copy",
          label: "Who will write the text for the site?",
          type: "radio",
          options: ["I'll provide it", "I'd like help writing it", "Not sure"],
        },
        {
          name: "timeline",
          label: "When would you like to launch?",
          type: "select",
          required: true,
          options: ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring"],
        },
        {
          name: "referral",
          label: "How did you hear about me?",
          type: "text",
          maxLength: 200,
        },
        { name: "notes", label: "Anything else I should know?", type: "textarea", maxLength: 3000 },
      ],
    },
  ],
};

// Hidden honeypot input name. Real users never see or fill it.
export const HONEYPOT_FIELD = "company_website";

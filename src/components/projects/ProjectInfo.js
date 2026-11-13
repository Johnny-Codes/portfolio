const projects = [
  {
    id: 0,
    title: "What's Up Marshall County",
    description: "A comprehensive business and event directory platform connecting the Marshall County, Alabama community with local businesses in Arab, Guntersville, Albertville, and surrounding areas. Features include business listings, event management, and community engagement tools.",
    technologies: [
      "python",
      "django",
      "htmx",
      "alpinejs",
      "digitalocean",
      "docker",
      "postgresql"
    ],
    website: "https://www.whatsupmarshallcounty.com",
    image: "/images/whats-up-marshall-county.jpg",
    alt: "What's Up Marshall County local events and business directory"
  },
  {
    id: 4,
    title: "BoltSnapBolt - Magic: The Gathering Hub",
    status: "In Development",
    description:
      "A Magic: The Gathering site combining card search, a blog, deck building, and daily price history. Celery background jobs import card data and prices from Scryfall, and the deck builder enforces each format's rules, from deck size and copy limits to Commander color identity. A local LLM (Ollama) suggests how cards interact, code checks its claims against each card's exact stats, and players confirm or reject the results. The front end is server-rendered Next.js for SEO, with a Django and Wagtail CMS and API behind it. A CI/CD pipeline tests, builds, and deploys the Docker images.",
    technologies: [
      "python",
      "django",
      "wagtail",
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "postgresql",
      "celery",
      "redis",
      "ollama",
      "docker",
    ],
  },
  {
    id: 5,
    title: "Fluency Through Fables - Spanish Learning Platform",
    status: "In Development",
    description:
      "A Spanish learning site built around graded short stories that progress from beginner to conversational, plus verb conjugation pages, CEFR-leveled vocabulary lessons from A1 to C2 with quizzes, and printable writing-practice sheets. Readers share answers to practice questions and correct each other in a community built to be safe for all ages, with content filters, flagging, and an admin moderation queue. Also includes an admin dashboard, reader-reported fixes for AI-generated content, an A/B-tested Stripe support link, and Chispa, a puppy mascot whose AI-drafted replies are reviewed before they're posted. It runs on Node.js with built-in SQLite and no third-party runtime packages, and has structured data and llms.txt for search and AI answer engines.",
    technologies: ["nodejs", "sqlite", "ollama", "stripe", "docker"],
  },
  {
    id: 1,
    title: "IoT Digital Twin & Industrial Automation",
    description: "Advanced IoT network implementation utilizing ESP32 microcontrollers and Raspberry Pi devices to create a digital twin of manufacturing operations. Demonstrates expertise in hardware integration, data collection, and real-time monitoring systems applicable to business automation and Industry 4.0 solutions.",
    technologies: [
      "python",
    ]
  },
  {
    id: 2,
    title: "coINventory - Business Management System",
    description:
      "Full-stack inventory management and invoicing platform with integrated Stripe payment processing. Features include real-time inventory tracking, automated invoicing, and secure payment gateway integration. Perfect example of custom business automation solutions tailored to specific industry needs.",
    technologies: [
      "python",
      "django",
      "postgresql",
      "vite",
      "react",
      "stripe",
      "tailwindcss",
    ],
    youtube: "",
    image: "",
    alt: "coINventory logo",
    website: "",
    github: "",
  },
  {
    id: 3,
    title: "Homestead & Tech",
    description:
      "A personal project bringing together programming, gardening, and practical technology for homesteading. Homestead & Tech explores open-source smart-farm ideas, Raspberry Pi automation, and sustainable living in Alabama.",
    technologies: [],
    website: "https://homesteadandtech.com/",
    youtube: "https://www.youtube.com/@homesteadandtech",
  },
  // {
  //   id: 3,
  //   title: "AI-Powered Campaign Management System",
  //   description:
  //     "Sophisticated content management platform for collaborative storytelling and campaign coordination. Demonstrates complex database relationships, user role management, and multi-entity data handling. Showcases ability to build comprehensive admin systems with RESTful API architecture applicable to business content management needs.",
  //   technologies: ["python", "fastapi", "postgresql"],
  //   youtube: "https://youtu.be/fXpeTJha9Nw",
  //   image: "",
  //   alt: "Campaign Management System",
  //   website: "",
  //   github: "https://github.com/Johnny-Codes/dnd-dm-assistant",
  // },
  // {
  //   id: 4,
  //   title: "IntelliCram - AI-Powered Learning Platform",
  //   description:
  //     "AI-integrated study platform showcasing advanced implementation of GPT-based content generation and personalized learning algorithms. Features intelligent flashcard generation, adaptive quizzing, and AI-curated study materials. Demonstrates expertise in OpenAI API integration and building AI-powered features that deliver real value to users.",
  //   technologies: [
  //     "python",
  //     "fastapi",
  //     "react",
  //     "vite",
  //     "postgresql",
  //     "tailwindcss",
  //   ],
  //   youtube: "",
  //   image: "https://main--intellicram.netlify.app/assets/HomePageText-19f5a868.png",
  //   alt: "IntelliCram AI Learning Platform",
  //   website: "https://main--Intellicram.netlify.app/",
  //   github: "",
  // },
];

export default projects;

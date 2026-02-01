const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-4 font-bold text-rose-600">Freelance Website Design & AI Automation Expert</h1>
      <h2 className="text-xl text-center pb-4 text-gray-300">Serving Arab, Huntsville, Birmingham & North Alabama</h2>
      <p className="py-4 indent-8 text-lg">
        I'm Paul Johns, a freelance web developer and AI automation specialist based in Arab, Alabama, serving businesses throughout Marshall County, Huntsville, Birmingham, and the greater North Alabama region. I specialize in custom website design, agentic AI solutions, and business process automation that help local businesses grow their online presence and streamline operations.
      </p>
      <p className="py-4 indent-8 text-lg">
        With a proven track record of building and deploying real-world applications from concept to production, I offer comprehensive web development services including responsive website design, e-commerce solutions, and cutting-edge AI integrations. My experience includes founding and developing What's Up Marshall County, a live business directory connecting our local community with small businesses.
      </p>
      <div className="py-4 px-6 bg-gradient-to-r from-rose-900 to-rose-700 rounded-lg my-6 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4 text-center">Services I Offer:</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold text-sky-300 mb-2">🌐 Website Design & Development</h3>
            <ul className="list-disc list-inside text-lg ml-2">
              <li>Custom responsive website design</li>
              <li>E-commerce solutions with Stripe integration</li>
              <li>Business directories and listing platforms</li>
              <li>Website redesigns and modernization</li>
              <li>SEO optimization for local search</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky-300 mb-2">🤖 AI & Automation Solutions</h3>
            <ul className="list-disc list-inside text-lg ml-2">
              <li>Agentic AI implementation with GPT-4/Claude</li>
              <li>Business process automation</li>
              <li>Custom AI chatbots for customer service</li>
              <li>Data analysis and reporting automation</li>
              <li>AI-powered content generation tools</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-4 indent-8 text-lg">
        I bring enterprise-level technical expertise to small and medium-sized businesses in Alabama. With experience building multi-tenant SaaS platforms, integrating advanced APIs (Stripe, OpenAI GPT-4), and a 13+ year background in leadership from U.S. Army Special Operations, I deliver reliable, scalable solutions that drive real business results.
      </p>
      <p className="py-4 indent-8 text-lg">
        As a local entrepreneur who founded two businesses and developed custom inventory management systems, I understand the unique challenges Alabama businesses face. My experience in e-commerce management, digital marketing, and SEO helps me create websites that don't just look good—they generate leads and sales for your business.
      </p>
      <div className="py-4 px-2 bg-gray-800 rounded-lg my-4">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Technical Expertise:</h2>
        <ul className="list-disc list-inside text-lg">
          <li><span className="font-semibold text-sky-400">Web Development:</span> React, TypeScript, Python, Django, HTML5, CSS3, Tailwind</li>
          <li><span className="font-semibold text-sky-400">AI Integration:</span> OpenAI GPT-4, Claude, Anthropic API, LangChain, Agentic AI</li>
          <li><span className="font-semibold text-sky-400">E-Commerce:</span> Stripe Payments, Shopping Carts, Inventory Management</li>
          <li><span className="font-semibold text-sky-400">Deployment & Hosting:</span> Docker, Nginx, DigitalOcean, Netlify, Cloud Solutions</li>
          <li><span className="font-semibold text-sky-400">Database:</span> PostgreSQL, SQL, Database Design</li>
        </ul>
      </div>
      <div className="py-6 px-6 bg-gradient-to-r from-sky-900 to-blue-800 rounded-lg my-6 text-center">
        <h2 className="text-2xl font-bold text-yellow-300 mb-3">Why Choose Local?</h2>
        <p className="text-lg">
          Based in Arab, Alabama, I provide personalized service with face-to-face meetings available throughout Marshall County, Huntsville, and Birmingham. Supporting local businesses with world-class web development and AI solutions.
        </p>
      </div>
      <p className="py-4 indent-8 text-lg">
        Whether you need a professional website to establish your online presence, an e-commerce platform to sell products, or AI automation to streamline your business operations, I deliver solutions tailored to your specific needs and budget. Let's work together to grow your business in the digital age.
      </p>
    </>
  );
};

export default AboutMe;

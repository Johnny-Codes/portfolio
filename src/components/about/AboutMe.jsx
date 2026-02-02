const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-4 font-bold text-white border-b-4 border-professional-yellow pb-4 mb-4">Freelance Website Design & AI Automation Expert</h1>
      <h2 className="text-xl text-center pb-4 text-professional-silver">Serving Arab, Huntsville, Birmingham & North Alabama</h2>
      <p className="py-4 indent-8 text-lg">
        I'm Paul Johns, a freelance web developer and AI automation specialist based in Arab, Alabama, serving businesses throughout Marshall County, Huntsville, Birmingham, and the greater North Alabama region. I specialize in custom website design, agentic AI solutions, and business process automation that help local businesses grow their online presence and streamline operations.
      </p>
      <p className="py-4 indent-8 text-lg">
        With a proven track record of building and deploying real-world applications from concept to production, I offer comprehensive web development services including responsive website design, e-commerce solutions, and cutting-edge AI integrations. My experience includes founding and developing What's Up Marshall County, a live business directory connecting our local community with small businesses.
      </p>
      <div className="py-8 px-6 bg-gradient-to-br from-professional-grey via-professional-darkgrey to-black rounded-xl my-6 shadow-2xl border-2 border-professional-yellow/20 relative overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-professional-yellow opacity-30 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-professional-yellow opacity-30 rounded-bl-xl"></div>
        
        <h2 className="text-3xl font-bold text-professional-yellow mb-8 text-center tracking-wide">Services I Offer</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Website Design & Development */}
          <div className="bg-black/40 rounded-lg p-6 border-l-4 border-professional-yellow hover:border-professional-darkyellow transition-all hover:shadow-lg hover:shadow-professional-yellow/10">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-black">Website Design & Development</h3>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Custom responsive website design</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">E-commerce solutions with Stripe integration</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Business directories and listing platforms</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Website redesigns and modernization</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">SEO optimization for local search</span>
              </li>
            </ul>
          </div>
          
          {/* Column 2: AI & Automation Solutions */}
          <div className="bg-black/40 rounded-lg p-6 border-l-4 border-professional-yellow hover:border-professional-darkyellow transition-all hover:shadow-lg hover:shadow-professional-yellow/10">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-black">AI & Automation Solutions</h3>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Agentic AI implementation with GPT-4/Claude</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Business process automation</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Custom AI chatbots for customer service</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">Data analysis and reporting automation</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-professional-yellow mt-1 group-hover:scale-125 transition-transform">▸</span>
                <span className="group-hover:text-white transition-colors">AI-powered content generation tools</span>
              </li>
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
      <div className="py-4 px-2 bg-professional-darkgrey rounded-lg my-4 border border-professional-midgrey">
        <h2 className="text-xl font-semibold text-professional-yellow mb-2">Technical Expertise:</h2>
        <ul className="list-disc list-inside text-lg">
          <li><span className="font-semibold text-professional-offwhite">Web Development:</span> React, TypeScript, Python, Django, HTML5, CSS3, Tailwind</li>
          <li><span className="font-semibold text-professional-offwhite">AI Integration:</span> OpenAI GPT-4, Claude, Anthropic API, LangChain, Agentic AI</li>
          <li><span className="font-semibold text-professional-offwhite">E-Commerce:</span> Stripe Payments, Shopping Carts, Inventory Management</li>
          <li><span className="font-semibold text-professional-offwhite">Deployment & Hosting:</span> Docker, Nginx, DigitalOcean, Netlify, Cloud Solutions</li>
          <li><span className="font-semibold text-professional-offwhite">Database:</span> PostgreSQL, SQL, Database Design</li>
        </ul>
      </div>
      <div className="py-6 px-6 bg-gradient-to-r from-professional-grey to-professional-darkgrey rounded-lg my-6 text-center border border-professional-midgrey">
        <h2 className="text-2xl font-bold text-professional-yellow mb-3">Why Choose Local?</h2>
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

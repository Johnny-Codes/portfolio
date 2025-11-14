const AboutMe = () => {
  return (
    <>
      <h1 className="text-3xl text-center py-4 font-bold text-rose-600">Hello, I'm Paul Johns</h1>
      <p className="py-4 indent-8 text-lg">
        I am a Software Developer and leader with a proven history of building, deploying, and managing complex, real-world applications from concept to production. My experience isn't just academic; I am the founder and developer of a live, deployed business and event directory, managing everything from backend architecture to production DevOps and go-to-market strategy.
      </p>
      <p className="py-4 indent-8 text-lg">
        I have architected and built multi-tenant SaaS platforms from scratch using modern, decoupled stacks (React, TypeScript, Django REST Framework) and have engineered complex, high-value API integrations with Stripe, OpenAI (GPT-4), and PCGS. This hands-on technical expertise is built on a 13+ year foundation of leadership and strategic planning in U.S. Army Special Operations.
      </p>
      <p className="py-4 indent-8 text-lg">
        My military career was not just about leading teams; it was about data analysis, managing multi-million dollar programs, and executing complex plans in high-stakes environments. I am the person who can both architect the system and lead the team to get it done.
      </p>
      <p className="py-4 indent-8 text-lg">
        Beyond my military background, I'm a passionate numismatist and entrepreneur who founded two rare coin businesses. I developed my own inventory management system, showcasing my proficiency in Python, JavaScript, React, and TypeScript. My experience as an ecommerce manager for one of the largest coin companies globally has equipped me with skills in digital marketing, SEO, and online sales.
      </p>
      <p className="py-4 indent-8 text-lg">
        I am actively seeking a Full-Stack or Backend Software Developer role where I can leverage my unique blend of technical architecture, product ownership, and leadership to build and scale impactful solutions.
      </p>
      <div className="py-4 px-2 bg-gray-800 rounded-lg my-4">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">Core Technical Skills:</h2>
        <ul className="list-disc list-inside text-lg">
          <li><span className="font-semibold text-sky-400">Backend:</span> Python, Django, Django REST Framework, Gunicorn</li>
          <li><span className="font-semibold text-sky-400">Frontend:</span> React, TypeScript, Redux-Toolkit, HTMX, Alpine.js</li>
          <li><span className="font-semibold text-sky-400">Database:</span> PostgreSQL, SQL</li>
          <li><span className="font-semibold text-sky-400">DevOps & Deployment:</span> Docker, Docker Compose, Nginx, DigitalOcean</li>
        </ul>
      </div>
      <p className="py-4 indent-8 text-lg">
        Outside of the tech realm, I find joy in numismatics, strumming my guitar, exploring robotics, and indulging in survival camping adventures. I believe in getting the job done with unwavering determination and pride myself on delivering results, whether leading or contributing to a team.
      </p>
    </>
  );
};

export default AboutMe;

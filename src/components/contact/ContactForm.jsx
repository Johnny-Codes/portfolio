import { SiGithub, SiLinkedin } from "react-icons/si";

const ContactForm = () => {
  return (
    <>
     <div className="md:grid md:grid-cols-3 gap-4 sm:flex sm:flex-wrap">
      <div className="w-full col-span-2">
        <h2
          id="contact-me"
          className="text-3xl text-center text-shadow-md shadow-white"
        >
          Contact Me!
        </h2>
        <form
        data-netlify="true"
          name="contact"
          method="post"
        >
          <input type="hidden" name="contact" value="contact" />
          <p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded border border-gray-700 m-2 bg-slate-500 text-white "
            />
          </p>

          <p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-gray-700 m-2 bg-slate-500 text-white "
            />
          </p>
          <p>
            <input
              type="text"
              name="phone"
              placeholder="Your Contact Number"
              className="w-full px-4 py-2 rounded border border-gray-700 m-2 bg-slate-500 text-white "
            />
          </p>
          <p>
            <textarea
              placeholder="Message"
              name="message"
              rows="10"
              required
              className="w-full px-4 py-2 rounded border border-gray-700 m-2 bg-slate-500 text-white "
            ></textarea>
          </p>
          <p className="text-center">
            <button type="submit" className="px-4 py-2 border rounded-lg">
              Contact Me
            </button>
          </p>
        </form>
      </div>
      <div className="col-span-1 text-center">
        <p className="text-xl mb-2">...or find me on...</p>
        <p className="text-xl font-bold mb-2">
          <a
            href="https://www.linkedin.com/in/pmjohns/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <SiLinkedin /> LinkedIn
          </a>
        </p>
        <p className="text-xl font-bold">
          <a
            href="https://www.github.com/johnny-codes/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <SiGithub /> GitHub
          </a>
        </p>
      </div>
      </div>
    </>
  );
};

export default ContactForm;

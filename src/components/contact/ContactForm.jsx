import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setShowModal(true))
      .catch((error) => alert(error));
    event.preventDefault();
  };

  return (
    <>
      <div className="md:grid md:grid-cols-3 gap-4 sm:flex sm:flex-wrap">
        <div className="w-full col-span-2">
          <h2
            id="contact-me"
            className="text-3xl text-center border-b-4 border-professional-yellow pb-4 mb-4"
          >
            Get a Free Consultation
          </h2>
          <p className="text-center text-lg text-professional-silver mt-2 mb-4">
            Serving Arab, Huntsville, Birmingham & North Alabama
          </p>
          <form name="contact" method="post" onSubmit={handleSubmit}>
            <input type="hidden" name="contact" value="contact" />
            <p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-professional-midgrey m-2 bg-professional-grey text-white focus:border-professional-lightgrey focus:outline-none"
              />
            </p>

            <p>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-professional-midgrey m-2 bg-professional-grey text-professional-offwhite focus:border-professional-lightgrey focus:outline-none placeholder:text-professional-silver"
              />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                placeholder="Your Contact Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-professional-midgrey m-2 bg-professional-grey text-professional-offwhite focus:border-professional-lightgrey focus:outline-none placeholder:text-professional-silver"
              />
            </p>
            <p>
              <textarea
                placeholder="Message"
                name="message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-professional-midgrey m-2 bg-professional-grey text-professional-offwhite focus:border-professional-lightgrey focus:outline-none placeholder:text-professional-silver"
              ></textarea>
            </p>
            <p className="text-center">
              {showModal && (
                <div
                  className={`fixed inset-0 z-50 overflow-auto ${
                    showModal ? "block" : "hidden"
                  }`}
                >
                  <div className="flex items-center justify-center min-h-screen ">
                    <div className="fixed inset-0 bg-black opacity-75"></div>
                    <div className="relative bg-professional-grey rounded-lg p-8 max-w-md mx-auto border border-professional-midgrey">
                      <span
                        className="absolute top-0 right-0  m-2 text-white text-3xl cursor-pointer"
                        onClick={() => setShowModal(false)}
                      >
                        &times;
                      </span>
                      <p className="text-xl p-4 mt-2">
                        Thank you for contacting me!
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <button type="submit" className="px-4 py-2 border rounded-lg">
                Contact Me
              </button>
            </p>
          </form>
        </div>
        <div className="col-span-1 text-center">
          <p className="text-xl mb-2">...or find me on...</p>
          <p className="text-xl font-bold p-2">
            <a
              href="https://www.linkedin.com/in/pmjohns/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <SiLinkedin /> LinkedIn
            </a>
          </p>
          <p className="text-xl font-bold p-2">
            <a
              href="https://www.github.com/johnny-codes/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <SiGithub /> GitHub
            </a>
          </p>
          <p className="text-xl font-bold p-2">
            <a
              href="https://www.youtube.com/@johnny-codes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <FaYoutube /> YouTube
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

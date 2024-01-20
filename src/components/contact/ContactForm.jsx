import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateContactForm = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitContactForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={submitContactForm}
        data-netlify="true"
        method="POST"
        name="Contact"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            onChange={updateContactForm}
          ></input>
        </p>
        <p>
          <textarea
            id="message"
            placeholder="Message"
            rows="10"
            cols="50"
            required
            onChange={updateContactForm}
          ></textarea>
        </p>
        <p>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            onChange={updateContactForm}
          ></input>
        </p>
        <p>
          <input
            type="text"
            id="phone"
            placeholder="Your Contact Number"
            onChange={updateContactForm}
          ></input>
        </p>
        <p>
          <button className="submit-button">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;

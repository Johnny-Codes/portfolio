import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <form>
        <input type="text" id="name" placeholder="Your Name" required></input>
        <textarea
          id="message"
          placeholder="Message"
          rows="10"
          cols="50"
          required
        ></textarea>
        <input type="text" id="email" placeholder="Your Email"></input>
        <input type="text" id="phone" placeholder="Your Contact Number"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

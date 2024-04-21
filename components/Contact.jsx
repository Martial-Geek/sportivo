import React from "react";
import "../app/plainstyles.css";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">
        Contact <span>Us</span>
      </h1>

      <form
        id="contact_form"
        action="https://api.web3forms.com/submit"
        method="POST"
        class="contact"
      >
        <div class="inputBox">
          <input
            type="hidden"
            name="access_key"
            value="7eb63f77-6e28-4b98-9628-5c37833287b1"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="contact_inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            class="contact_inputs"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="phone number"
            class="contact_inputs"
            required
          />
          <input
            type="text"
            name="cover"
            placeholder="Subject"
            class="contact_inputs"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            cols="30"
            rows=""
          ></textarea>
          <input type="submit" value="Submit" class="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;

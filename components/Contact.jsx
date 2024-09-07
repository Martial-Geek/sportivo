"use client";

import { useState } from "react";
import "../app/plainstyles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const timestamp = new Date().toISOString(); // Adding timestamp

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzAmm0IeXsujdjlRppeWyxcytEGe3dMwAAN0GOVApsPtNEvlPKYFp6_R86yPEridGmeHQ/exec",
        {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({ ...formData, timestamp }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // const data = await response.json();
      alert("Form submitted successfully!");
      // console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      alert("Form submission failed!");
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading pb-12">
        Contact <span>Us</span>
      </h1>

      <form id="contact_form" className="contact" onSubmit={handleSubmit}>
        <div className="inputBox">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact_inputs"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            className="contact_inputs"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            className="contact_inputs"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact_inputs"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            cols="30"
            rows=""
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="mx-auto my-10 rounded-lg bg-purple-600 px-6 py-3 text-3xl font-bold text-white hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

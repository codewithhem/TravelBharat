import { useState } from "react";
import "../styless/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("Server error. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have any questions or suggestions? Send us a message.</p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <h2>TravelBharat</h2>
          <p>Email: info@travelbharat.com</p>
          <p>Phone: +91 7992159435</p>
          <p>Location: India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
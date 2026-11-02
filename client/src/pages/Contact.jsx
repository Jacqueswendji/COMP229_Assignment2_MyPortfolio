// Contact.jsx
// Contact page for the personal portfolio website.

// Contact.jsx
// Contact page for the personal portfolio website.

import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const contactData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    contactNumber: formData.get("contactNumber"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log("Contact form submitted:", contactData);

  navigate("/");
};

  return (
    <section className="page contact-page">
      <h1>Contact Me</h1>

      <p className="page-introduction">
        Feel free to contact me for professional, academic, or
        project-related opportunities.
      </p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Name:</strong> Jacques Honoré Wendji
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:jacqueswendji@yahoo.com">
              jacqueswendji@yahoo.com
            </a>
          </p>

          <p>
            <strong>Location:</strong> Ontario, Canada
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your first name"
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            required
          />

          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Your contact number"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit" className="button primary-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
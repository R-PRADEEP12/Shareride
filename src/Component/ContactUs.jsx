import React from 'react';
import './Contact.css';
import { FiPhone, FiMail, FiHelpCircle } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="cont_1-wrapper">
      <div className="cont_1-header">
        <h1>Get in Touch</h1>
        <p>We are here to assist you with all your needs. Reach out for inquiries or support.</p>
      </div>

      <div className="cont_1-content">
        <div className="cont_1-details">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> ShareRide Tech Pvt Ltd, #14/6 Road, Ulsoor, Bangalore-560008</p>
          <p><strong>Phone:</strong> <FiPhone /> +91 7200047856</p>
          <p><strong>Email:</strong> <FiMail /> info@shareride.com</p>
          <p><strong>Help & Support:</strong> <a href="#"><FiHelpCircle /> Click Here</a></p>
          <div className="cont_1-social-media">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://twitter.com/"><FaTwitter /></a>
            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.whatsapp.com/"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="cont_1-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Mobile Number" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

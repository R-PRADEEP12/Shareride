import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Ensure this file contains the styles

const Footer = () => {
  return (
    <footer className="hom_80">
      <div className="hom_81">
        <img src="https://img.freepik.com/premium-vector/cartoon-biker-riding-motorcycle-illustration-mascot-logo-vector_488085-607.jpg?w=2000" alt="Share Ride Logo" className="hom_82" />
        <p className="hom_83">Your trusted ride-sharing partner for efficient and reliable transportation solutions.</p>
        <ul className="hom_84">
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
          <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
        </ul>
      </div>
      <div className="hom_85">
        <h4 className="hom_86">Our Services</h4>
        <ul className="hom_90">
          <li><a href="/rides" className="hom_91">Ride Booking</a></li>
          <li><a href="/driver-partner" className="hom_91">Driver Partnership</a></li>
          <li><a href="/support" className="hom_91">Customer Support</a></li>
          <li><a href="/faq" className="hom_91">FAQs</a></li>
        </ul>
      </div>
      <div className="hom_88">
        <h4 className="hom_86">Contact Information</h4>
        <p className="hom_87">Email: <a href="mailto:support@shareride.com" className="hom_91">support@shareride.com</a></p>
        <p className="hom_87">Phone: +1 (123) 456-7890</p>
        <p className="hom_87">Address: 123 Ride Lane, Transport City, TS 12345</p>
      </div>
      <div className="hom_89">
        <h4 className="hom_86">Quick Links</h4>
        <ul className="hom_90">
          <li><a href="/about" className="hom_91">About Us</a></li>
          <li><a href="/services" className="hom_91">Services</a></li>
          <li><a href="/contact" className="hom_91">Contact</a></li>
          <li><a href="/privacy-policy" className="hom_91">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hom_91">Terms of Service</a></li>
        </ul>
      </div>
      <div className="hom_89">
        <h4 className="hom_86">Stay Connected</h4>
        <p className="hom_87">Follow us on social media for the latest updates and promotions.</p>
      </div>
      <div className="hom_93">
        <p className="hom_94">&copy; 2024 Share Ride. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

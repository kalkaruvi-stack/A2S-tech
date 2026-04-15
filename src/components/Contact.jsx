import "../styles/Contact.css";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="contact-section">
      {/* <span className="contact-badge">Contact us</span> */}
      <h1 className="contact-heading">Let's work together</h1>
      <p className="contact-text">Have a project in mind? Send us a message and we'll get back to you soon.</p>

      <div className="contact-card">
        <div className="form-row">
          <div className="form-group">
            <label>Your name</label>
            <input type="text" placeholder="John Doe" className="form-input" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="john@email.com" className="form-input" />
          </div>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="Project inquiry" className="form-input" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Tell us about your project..." className="form-textarea"></textarea>
        </div>
        <button className="form-button">Send Message</button>
      </div>

      {/* <div className="divider"><span>or reach us on social media</span></div> */}

      {/* <div className="social-grid">
        <a href="#" className="social-btn"><FaWhatsapp color="#25d366" /> WhatsApp</a>
        <a href="#" className="social-btn"><FaInstagram color="#e1306c" /> Instagram</a>
        <a href="#" className="social-btn"><FaYoutube color="#ff0000" /> YouTube</a>
      

      </div> */}
    </div>
  );
};

export default ContactPage;
import "../styles/Footer.css";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">A2</div>
            <div>
              <h3 className="footer-logo-name">AS2 TECH</h3>
              
            </div>
          </div>
          <p className="footer-desc">
            We deliver cutting-edge IT solutions, training, and development services tailored to your business needs.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-icon"><FaWhatsapp color="#25d366" /></a>
            <a href="#" className="footer-social-icon"><FaInstagram color="#e1306c" /></a>
            <a href="#" className="footer-social-icon"><FaYoutube color="#ff0000" /></a>
           

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
          
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Training & Development</a></li>
             <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Automotive radar</a></li>
            <li><a href="#">Automotive connectivity and infotainment</a></li>
           
            <li><a href="#">In-vehicle networks and ECU testing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact-list">
            <li>📍 Chennai, Tamil Nadu</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@as2tech.com</li>
            <li>🕐 Mon – Fri, 9am – 6pm</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span>© 2026 AS2 Tech. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
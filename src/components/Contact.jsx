import "../styles/Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-heading">GET IN TOUCH</h1>
      <h2 className="contact-subheading">Let's work together</h2>
      <p className="contact-text">
        Have a project in mind? Send me a message and I'll get back to you soon.
      </p>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your name" className="form-input" />
        <input type="email" placeholder="Your email" className="form-input" />
        <textarea placeholder="Your message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>

     
      {/* Social Links */}
      <div className="social-icons">
        <a href="#" className="icon youtube">YouTube</a>
        <a href="#" className="icon instagram">Instagram</a>
        <a href="#" className="icon tiktok">TikTok</a>
        <a href="#" className="icon twitter">X</a>
        <a href="#" className="icon spotify">Spotify</a>
      </div>
    </div>
  );
};

export default ContactPage;
"use client";

export default function ContactForm() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder="Marie Dupont" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="marie@company.com" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Hi Afraz, I'd like to discuss an opportunity..."
        />
      </div>
      <button
        className="btn btn-primary send-btn"
        type="button"
        onClick={() =>
          alert("Thank you! Wire this to EmailJS or Formspree for live sending.")
        }
      >
        Send Message ›
      </button>
    </div>
  );
}

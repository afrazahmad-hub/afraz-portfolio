"use client";

export default function ContactForm() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Hi Afraz,"
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

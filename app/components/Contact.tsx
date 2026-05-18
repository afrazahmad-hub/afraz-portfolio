import ContactForm from "./ContactForm";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "afrazjb@gmail.com",
    href: "mailto:afrazjb@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+33 7 57 51 70 57",
    href: "tel:+33757517057",
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "/in/afrazahmad-fintech",
    href: "https://www.linkedin.com/in/afrazahmad-fintech",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/afrazahmad-hub",
    href: "https://github.com/afrazahmad-hub",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="full-section">
      <FadeIn className="section-inner">
        <SectionHeading tag="Contact" title="Let's Connect" />
        <div className="contact-wrap">
          <div className="contact-info">
            <p>
              Actively seeking a 6-month internship in Fintech, Finance,
              Blockchain, or Data Analytics across France and Europe. Open to
              mobility.
            </p>
            {contactLinks.map((link) => (
              <a
                href={link.href}
                className="contact-link"
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div>
                  <div className="contact-label">{link.label}</div>
                  <div className="contact-value">{link.value}</div>
                </div>
              </a>
            ))}
            <div className="contact-link" style={{ cursor: "default" }}>
              <div className="contact-link-icon">📍</div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Rouen, Normandy, France</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </FadeIn>
    </section>
  );
}

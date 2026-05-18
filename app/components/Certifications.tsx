import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const certifications = [
  ["🤖", "Machine Learning in Python with Scikit-learn"],
  ["🐍", "Python for Data Science, AI & Development"],
  ["⛓", "Become a Blockchain Developer"],
  ["🔍", "Crypto Investigator Crash Course"],
  ["🏦", "Decentralized Finance (DeFi) Infrastructure"],
  ["🛡", "AML Fundamentals"],
  ["🧠", "Introduction to Multimodal Prompting for GenAI"],
  ["💹", "Finance & Crypto Day 2025"],
];

export default function Certifications() {
  return (
    <section id="certifications" className="full-section">
      <FadeIn className="section-inner">
        <SectionHeading tag="Credentials" title="Certifications" />
        <div className="certs-grid">
          {certifications.map(([icon, name]) => (
            <div className="cert-card" key={name}>
              <div className="cert-icon">{icon}</div>
              <div>
                <div className="cert-name">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const infoRows = [
  { icon: "📍", content: "Rouen, Normandy, France" },
  { icon: "📞", content: "+33 7 57 51 70 57" },
  { icon: "✉️", content: "afrazjb@gmail.com", href: "mailto:afrazjb@gmail.com" },
  { icon: "🎓", content: "MSc Corporate Finance & Fintech" },
  { icon: "🏢", content: "Fintech Risk & Compliance Intern · CashXChain" },
  // { icon: "🔍", content: "Seeking 6-month internship · Fintech / Blockchain / Data" },
];

export default function About() {
  return (
    <section id="about">
      <FadeIn>
        <SectionHeading tag="About me" title="Finance, Code & Compliance" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m an MSc Corporate Finance &amp; Fintech graduate from
              Clermont School of Business, currently interning as a Fintech Risk
              &amp; Compliance Engineer at CashXChain (Germany). My work sits at
              the intersection of blockchain technology, financial regulation,
              and data science.
            </p>
            <p>
              I specialise in AML/KYC compliance under MiCA, AMLDs, and FATF
              Travel Rules, alongside hands-on experience building Ethereum
              DApps, ML fraud detection models, and cross-border payment systems
              for EU-Africa and EU-Asia corridors.
            </p>
            <p>
              Open to international opportunities. Passionate about tech-driven
              financial innovation that is compliant, scalable, and impactful.
            </p>
            <div className="hobbies">
              <span className="tag teal">✈ Travelling</span>
              <span className="tag teal">📚 Reading</span>
              <span className="tag teal">🎵 Music</span>
            </div>
          </div>
          <div>
            {infoRows.map((row) => (
              <div className="info-row" key={row.content}>
                <div className="info-icon">{row.icon}</div>
                {row.href ? <a href={row.href}>{row.content}</a> : <span>{row.content}</span>}
              </div>
            ))}
            <div className="language-block">
              <div className="language-heading">Languages</div>
              <div className="lang-item">
                <span>English</span>
                <span className="lang-level">C1 · Fluent</span>
              </div>
              <div className="lang-bar">
                <div className="lang-fill" style={{ width: "92%" }} />
              </div>
              <div className="language-spacer" />
              <div className="lang-item">
                <span>French</span>
                <span className="lang-level">B1</span>
              </div>
              <div className="lang-bar">
                <div className="lang-fill" style={{ width: "45%" }} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

import Image from "next/image";
import FadeIn from "./FadeIn";

const stats = [
  { value: "1st", label: "Hackathon Winner - Chiliz Paris" },
  { value: "2", label: "Master Degrees" },
  { value: "🌐", label: "International Exposure" },
];

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <FadeIn className="hero-shell" immediate>
        <div className="hero-content">
          <div className="hero-kicker">Hi, I am</div>
          <div className="hero-name">Afraz Ahmad</div>
          <h1>
            Fintech - Blockchain
            <br />
            <span>ML &amp; Compliance</span>
          </h1>
          <p className="hero-sub">
            Fintech &amp; data-driven professional with expertise in blockchain,
            machine learning, and AML/KYC compliance. Currently interning at
            CashXChain (Germany). My MSc thesis evaluates the effectiveness of
            French cryptocurrency regulations in combating money laundering.
          </p>

          <div className="hero-btns">
            <a href="mailto:afrazjb@gmail.com" className="btn btn-primary">
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/afrazahmad-fintech"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/afrazahmad-hub"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit">
            <div className="hero-photo">
              <Image
                src="/afraz-profile.jpg"
                alt="Afraz Ahmad"
                width={520}
                height={520}
                priority
              />
            </div>
          </div>
          <div className="hero-role-card">
            <span>Fintech</span>
            <span>Compliance</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

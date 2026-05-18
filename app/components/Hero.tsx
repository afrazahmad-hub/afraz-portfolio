import FadeIn from "./FadeIn";

const stats = [
  { value: "🥇", label: "Hackathon Winner · Chiliz Paris" },
  { value: "2", label: "Master Degrees" },
  { value: "🌍", label: "International Exposure" },
];

export default function Hero() {
  return (
    <div className="hero">
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div className="grid-pattern" />
        <div className="glow" />
      </div>
      <FadeIn className="hero-content" immediate>
        <h1>
          Afraz Ahmad
          <br />
          <span>
            Fintech · Blockchain
            <br />
            ML &amp; Compliance
          </span>
        </h1>
        <p className="hero-sub">
          Fintech &amp; data-driven professional with expertise in blockchain,
          machine learning, and AML/KYC compliance. Currently interning at
          CashXChain (Germany). My MSc thesis evaluates the effectiveness of
          French cryptocurrency regulations in combating money laundering.
        </p>
        <div className="hero-btns">
          <a href="mailto:afrazjb@gmail.com" className="btn btn-primary">
            📬 Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/afrazahmad-fintech"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/afrazahmad-hub"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            🐙 GitHub
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}

import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    label: "ML · Data Science",
    title: "Living Standard Predictor",
    desc: "ML model predicting the living standard of French citizens using Python & scikit-learn. Achieved 85.1% accuracy using classification algorithms on socioeconomic datasets.",
    href: "https://github.com/afrazahmad-hub/Machine-Learning-Project.git",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    label: "DeFi · Trading Bot",
    title: "Crypto Trading Bot (Binance API)",
    desc: "Automated trading bot using the Binance API, achieving a 6.09% return during live testing on Ethereum. Implements signal-based entry/exit logic.",
    href: "https://github.com/afrazahmad-hub/crypto-trading-bot.git",
    tags: ["Python", "Binance API", "DeFi"],
  },
  {
    label: "Blockchain · DApp",
    title: "MetaMask Payment DApp (Ethereum)",
    desc: "Decentralized payment solution on Ethereum reducing settlement time by 30% via smart contract automation. Integrated MetaMask wallet with a Next.js frontend.",
    href: "https://github.com/afrazahmad-hub/ether-transfer-dapp.git",
    tags: ["Solidity", "Next.js", "ethers.js", "MetaMask"],
  },
  {
    label: "AML · Thesis Research",
    title: "Crypto AML Regulation Analysis",
    desc: "MSc thesis project evaluating the effectiveness of French virtual/crypto regulations (MiCA, AMLDs, FATF) in combating money laundering, with transaction pattern analysis.",
    tags: ["Python", "Power BI", "Econometrics"],
  },
  {
    label: "Hackathon · DeFi",
    title: "DeFi App - Qubic Hackathon",
    desc: "Led a 5-member team at the Qubic-Vottun Hackathon (Madrid) to build a DeFi application with crypto payments emphasis, competing against international teams.",
    tags: ["DeFi", "Smart Contracts", "Crypto Payments"],
  },
  {
    label: "Compliance · KYB",
    title: "CashXChain Guard (KYB Platform)",
    desc: "Contributing to CashXChain Guard - a KYB compliance platform for fintechs - covering sanctions screening, transaction monitoring, and EU corridor compliance workflows.",
    tags: ["KYB/AML", "Compliance", "Sanctions Screening"],
  },
];

const tealTags = new Set(["Scikit-learn", "Binance API", "Next.js", "Power BI", "DeFi", "KYB/AML"]);

export default function Projects() {
  return (
    <section id="projects" className="full-section">
      <FadeIn className="section-inner">
        <SectionHeading tag="Work" title="Featured Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="proj-card" key={project.title}>
              <div className="proj-label">{project.label}</div>
              <div className="proj-title">{project.title}</div>
              <div className="proj-desc">{project.desc}</div>
              {project.href ? (
                <a className="proj-link" href={project.href} target="_blank" rel="noreferrer">
                  🐙 {project.href.replace("https://", "")}
                </a>
              ) : null}
              <div className="proj-stack">
                {project.tags.map((tag) => (
                  <span className={`tag${tealTags.has(tag) ? " teal" : ""}`} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

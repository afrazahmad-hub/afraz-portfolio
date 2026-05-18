import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: "⛓",
    name: "Blockchain (DApps) & DeFi",
    tags: ["Solidity", "Ethereum", "Smart Contracts", "DeFi", "MetaMask", "ethers.js"],
  },
  {
    icon: "🤖",
    name: "Machine Learning",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: "📊",
    name: "Data Analytics",
    tags: ["Power BI", "SQL", "Data Visualization", "GitHub"],
  },
  {
    icon: "🛡",
    name: "AML / Compliance",
    tags: ["AML/KYC", "KYB", "MiCA", "FATF Travel Rule", "Transaction Monitoring"],
  }
];

const tealTags = new Set(["DeFi", "Scikit-learn", "Power BI", "AML/KYC", "Next.js", "Corporate Finance"]);
const softSkills = ["Teamwork", "Time Management", "Consistency", "Effective Communication"];

export default function Skills() {
  return (
    <section id="skills" className="full-section">
      <FadeIn className="section-inner">
        <SectionHeading tag="Expertise" title="Skills & Technologies" />
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span className={`tag${tealTags.has(tag) ? " teal" : ""}`} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="soft-skills">
          <span className="soft-skills-label">Soft Skills:</span>
          {softSkills.map((skill) => (
            <span className="tag teal" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    title: "Fintech Risk & Compliance Engineer Intern",
    badge: "Current",
    active: true,
    company: "CashXChain · Feldkirchen-Westerham, Bavaria, Germany",
    date: "March 2026 - Present",
    bullets: [
      "Supporting development of CashXChain Guard - a KYB compliance platform for fintechs",
      "AML/KYB regulatory research; contributing to compliance frameworks for EU-Africa & EU-Asia corridors",
      "Collaborating on transaction monitoring, sanctions screening, and partner onboarding",
    ],
  },
  {
    title: "Community Manager (Intern)",
    badge: "Jan-Mar 2026",
    company: "MOSTRO.xyz · Web3 Music Platform · France",
    date: "January 2026 - March 2026 (3 months)",
    bullets: [
      "Managed Web3 communities on Discord, Telegram, and X",
      "Drove user growth around the SPKZ token via AMAs, meme & sticker contests",
    ],
  },
  {
    title: "IT Assistant",
    badge: "Apr-Jun 2024",
    company: "Education Department of Punjab (BISE) · Rawalpindi, Pakistan",
    date: "April 2024 - June 2024 (3 months)",
    bullets: [
      "Managed digital records for 500 students; administered PKR 500,000 budget for exam invigilators",
      "Ensured 100% compliance with administrative timelines",
    ],
  },
  {
    title: "Blockchain Developer (Freelance)",
    badge: "2023-2024",
    company: "Self-Employed · France",
    date: "March 2023 - July 2024 (1 year 5 months)",
    bullets: [
      "Built DApps on Ethereum; NFT minting apps (ERC-721, ERC-1155, ERC-20)",
      "Integrated blockchain payments via MetaMask, ethers.js, and Next.js",
    ],
  },
  {
    title: "Blockchain Developer",
    badge: "Apr-Oct 2023",
    company: "Octaloop Technologies · Islamabad, Pakistan",
    date: "April 2023 - October 2023 (7 months)",
    bullets: [
      "Developed & deployed smart contract-based DApps across ERC-20/721/1155 token standards",
      "Integrated MetaMask payment solutions; implemented gas-efficient coding practices",
    ],
  },
  {
    title: "Compliance Officer",
    badge: "Oct 2023-Feb 2024",
    company: "ACE Money Transfer · Kharian, Pakistan",
    date: "October 2023 - February 2024 (4 months)",
    bullets: [
      "Reviewed ~900 transactions monthly with 100% regulatory adherence",
      "Delivered compliance training to 40+ customers, boosting compliance rates by 15%",
    ],
  },
  {
    title: "Research Assistant",
    badge: "2021",
    company: "Maritime Study Forum · Islamabad, Pakistan",
    date: "March 2021 - August 2021 (6 months)",
    bullets: ["Researched & reported on national and international maritime policy trends"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <FadeIn>
        <SectionHeading tag="Career" title="Work Experience" />
        <div className="timeline">
          {experiences.map((experience) => (
            <div className="tl-item" key={`${experience.title}-${experience.date}`}>
              <div className={`tl-dot${experience.active ? " current" : ""}`} />
              <div className="tl-card">
                <div className="tl-header">
                  <div className="tl-title">{experience.title}</div>
                  <div className={`tl-badge${experience.active ? " active" : ""}`}>
                    {experience.badge}
                  </div>
                </div>
                <div className="tl-company">{experience.company}</div>
                <div className="tl-date">{experience.date}</div>
                <ul className="tl-bullets">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

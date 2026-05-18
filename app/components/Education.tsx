import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const education = [
  {
    icon: "🎓",
    degree: "MSc Corporate Finance & Fintech",
    school: "Clermont School of Business · Clermont-Ferrand, France",
    year: "2024 - 2025",
    thesis: "Thesis: Effectiveness of French Virtual/Cryptocurrency Regulations to Combat Money Laundering",
  },
  {
    icon: "🏛",
    degree: "M.Phil Public Policy & Economics",
    school: "Pakistan Institute of Development Economics (PIDE) · Islamabad",
    year: "2019 - 2021",
    thesis: "Thesis: Impact of Fiscal Decentralization on Health Sector - Cross-Country Analysis (72 countries)",
  },
  {
    icon: "⛓",
    degree: "Diploma in Blockchain Development",
    school: "PIAIC · Pakistan",
    year: "January 2020 - December 2023",
  },
  {
    icon: "📖",
    degree: "MA Economics",
    school: "University of Gujrat · Pakistan",
    year: "2016 - 2017",
  },
];

export default function Education() {
  return (
    <section id="education">
      <FadeIn>
        <SectionHeading tag="Education" title="Academic Background" />
        <div className="edu-grid">
          {education.map((item) => (
            <div className="edu-card" key={item.degree}>
              <div className="edu-badge">{item.icon}</div>
              <div>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-school">{item.school}</div>
                <div className="edu-year">{item.year}</div>
                {item.thesis ? <div className="edu-thesis">{item.thesis}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

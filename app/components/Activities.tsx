import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const activities = [
  {
    icon: "🏆",
    title: "Hackathon - Chiliz · Paris, France",
    detail: "11-13 July 2025 · Competed against 89 projects across 12 prize categories",
    badge: "🥇 First Prize Winner",
  },
  {
    icon: "⚡",
    title: "Hackathon - Qubic × Vottun · Madrid, Spain",
    detail: "22-23 March 2025 · Led a 5-member team building a DeFi app with crypto payments emphasis",
  },
  {
    icon: "🌐",
    title: "Dutch Blockchain Week - Volunteer · Amsterdam, Netherlands",
    detail: "21-22 May 2025 · Coordinated with ~800 attendees across a 3-day blockchain conference",
  },
];

export default function Activities() {
  return (
    <section id="activities">
      <FadeIn>
        <SectionHeading tag="Community" title="Hackathons & Activities" />
        <div className="activities-grid">
          {activities.map((activity) => (
            <div className="act-card" key={activity.title}>
              <div className="act-icon">{activity.icon}</div>
              <div>
                <div className="act-title">{activity.title}</div>
                <div className="act-detail">{activity.detail}</div>
                {activity.badge ? <div className="act-badge">{activity.badge}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

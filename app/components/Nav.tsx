import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#activities", label: "Activities" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">AA</div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}

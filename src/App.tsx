import { HeroSection } from "./components/HeroSection";
import { CapabilityCard } from "./components/CapabilityCard";
import { ExperienceItem } from "./components/ExperienceItem";
import { ProjectCard } from "./components/ProjectCard";
import { SectionTitle } from "./components/SectionTitle";
import {
  capabilities,
  experience,
  heroMetrics,
  navLinks,
  profile,
  projects,
} from "./content";

export function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brand-mark">S</span>
          <span>
            {profile.name}
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="topbar-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <HeroSection profile={profile} metrics={heroMetrics} />

        <section className="section section-about" id="story">
          <div className="section-copy">
            <SectionTitle
              eyebrow="Perspective"
              title="Product work with motion, systems, and a point of view."
              description={profile.summary}
            />
          </div>

          <div className="story-grid">
            <article className="story-card">
              <span className="story-label">What I optimize for</span>
              <ul className="story-list">
                {profile.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </article>

            <article className="story-card story-card-highlight">
              <span className="story-label">Current focus</span>
              <p>{profile.focus}</p>
            </article>
          </div>
        </section>

        <section className="section" id="work">
          <SectionTitle
            eyebrow="Selected Work"
            title="Case studies framed around outcome, not just visuals."
            description="Replace these with your real projects. The layout is already structured for narrative, stack, and measurable impact."
          />

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <SectionTitle
            eyebrow="Capabilities"
            title="Design systems, immersive UI, and frontend execution."
            description="This section is tuned for what hiring managers and clients actually scan: where you create leverage, how you work, and what you can ship."
          />

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </section>

        <section className="section section-experience">
          <SectionTitle
            eyebrow="Experience Arc"
            title="A timeline that reads like progression, not a dump of roles."
            description="Swap in your actual companies, dates, and wins. The structure supports short, high-signal bullets."
          />

          <div className="experience-list">
            {experience.map((item) => (
              <ExperienceItem key={`${item.period}-${item.role}`} item={item} />
            ))}
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Available for product design, frontend engineering, and interactive brand work."
            description="Update the links below with your real handles and preferred contact route."
          />

          <div className="contact-panel">
            <a className="button button-primary" href={profile.primaryCta.href}>
              {profile.primaryCta.label}
            </a>
            <a className="button button-ghost" href={profile.secondaryCta.href}>
              {profile.secondaryCta.label}
            </a>

            <div className="contact-links">
              {profile.contacts.map((contact) => (
                <a key={contact.label} href={contact.href}>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

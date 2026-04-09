import { SceneCanvas } from "./SceneCanvas";
import type { HeroMetric } from "../content";

type HeroSectionProps = {
  profile: {
    name: string;
    role: string;
    intro: string;
    headline: string;
    primaryCta: {
      label: string;
      href: string;
    };
  };
  metrics: HeroMetric[];
};

export function HeroSection({ profile, metrics }: HeroSectionProps) {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <span className="eyebrow">3D Portfolio</span>
        <p className="hero-kicker">{profile.role}</p>
        <h1>{profile.intro}</h1>
        <p className="hero-description">{profile.headline}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore work
          </a>
          <a className="button button-ghost" href={profile.primaryCta.href}>
            {profile.primaryCta.label}
          </a>
        </div>

        <div className="metric-grid" aria-label="Portfolio highlights">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit">
          <SceneCanvas />
        </div>
        <div className="hero-note">
          <span>Live canvas</span>
          <p>Interactive WebGL composition using React Three Fiber.</p>
        </div>
      </div>
    </section>
  );
}

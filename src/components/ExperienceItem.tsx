import type { Experience } from "../content";

type ExperienceItemProps = {
  item: Experience;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <p className="experience-period">{item.period}</p>
      <div className="experience-body">
        <h3>
          {item.role}
          <span>{item.company}</span>
        </h3>
        <p>{item.summary}</p>
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

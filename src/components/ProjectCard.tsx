import type { Project } from "../content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="project-index">{`0${index + 1}`}</span>
      <div className="project-card-body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>

        <p className="project-impact">{project.impact}</p>

        <div className="tag-row" aria-label={`${project.title} stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <a className="project-link" href={project.href}>
          Use this slot as a real case study
        </a>
      </div>
    </article>
  );
}

import type { Capability } from "../content";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="capability-card">
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  );
}

import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
	return (
		<Section eyebrow="Things I've built" title="Personal Projects">
			<div className="proj-grid">
				{projects.map(({ title, description, stack }) => (
					<div className="proj-card" key={title}>
						<h3>{title}</h3>
						<p>{description}</p>
						<div className="badge-row">
							{stack.map((tech) => (
								<span key={tech}>{tech}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}

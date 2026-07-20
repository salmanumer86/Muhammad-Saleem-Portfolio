import Section from "./Section";
import { skillCards } from "../data/content";

export default function Skills() {
	return (
		<Section eyebrow="What I work with" title="Skills & Stack">
			<div className="card-grid">
				{skillCards.map(({ variant, icon, title, items }) => (
					<div className={`card ${variant}`} key={title}>
						<h3>
							<span className="ico">{icon}</span> {title}
						</h3>
						<ul>
							{items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
}

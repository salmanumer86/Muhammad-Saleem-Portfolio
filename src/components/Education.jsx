import Section from "./Section";
import { education } from "../data/content";

export default function Education() {
	return (
		<Section eyebrow="Where it started" title="Education & Certificates">
			<div className="timeline">
				{education.map(({ year, title, detail }) => (
					<div className="tl-row" key={title}>
						<span className="yr">{year}</span>
						<div>
							<h4>{title}</h4>
							<p>{detail}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}

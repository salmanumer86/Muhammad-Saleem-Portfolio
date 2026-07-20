import Section from "./Section";
import { otherSkills } from "../data/content";

export default function OtherSkills() {
	return (
		<Section eyebrow="Beyond the code" title="Other Skills">
			<div className="skills-cloud">
				{otherSkills.map((skill) => (
					<span key={skill}>{skill}</span>
				))}
			</div>
		</Section>
	);
}

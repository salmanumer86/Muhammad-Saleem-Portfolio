export default function Section({ eyebrow, title, children }) {
	return (
		<section>
			<div className="eyebrow-sec">{eyebrow}</div>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

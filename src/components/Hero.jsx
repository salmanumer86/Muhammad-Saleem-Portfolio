import { contacts, profile } from "../data/content";

export default function Hero() {
	return (
		<header className="hero">
			<div>
				<div className="eyebrow">{profile.status}</div>
				<h1>
					Hi, I'm <span>{profile.name}</span>
				</h1>
				<p className="desc">{profile.tagline}</p>
				<div className="contact-row">
					{contacts.map(({ icon, label, href, external }) => (
						<a
							key={label}
							href={href}
							{...(external ? { target: "_blank", rel: "noopener" } : {})}
						>
							{icon} {label}
						</a>
					))}
				</div>
			</div>
			<div className="hero-badge">
				<div className="big">{profile.badge.big}</div>
				<div className="small">
					{profile.badge.lines.map((line, i) => (
						<span key={line}>
							{i > 0 && <br />}
							{line}
						</span>
					))}
				</div>
			</div>
		</header>
	);
}

import { contacts, profile, resume } from "../data/content";
import { DownloadIcon } from "./Icons";

export default function Hero() {
	return (
		<header className="hero">
			<div>
				<div className="eyebrow">{profile.status}</div>
				<h1>
					Hi, I'm <span>{profile.name}</span>
				</h1>
				<p className="desc">{profile.tagline}</p>

				<a className="resume-btn" href={resume.href} download={resume.downloadAs}>
					<DownloadIcon />
					{resume.label}
				</a>

				<div className="contact-row">
					{contacts.map(({ Icon, brand, label, href, external }) => (
						<a
							key={label}
							className={`contact-pill brand-${brand}`}
							href={href}
							{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
						>
							<Icon />
							{label}
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

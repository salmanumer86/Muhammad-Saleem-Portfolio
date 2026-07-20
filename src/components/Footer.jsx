import { profile } from "../data/content";

export default function Footer() {
	return (
		<footer>
			<span>
				{profile.name} · {profile.location}
			</span>
			<span>{profile.email}</span>
		</footer>
	);
}

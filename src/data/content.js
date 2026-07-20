import {
	GitHubIcon,
	GmailIcon,
	LinkedInIcon,
	PhoneIcon,
	WhatsAppIcon,
} from "../components/Icons";

export const profile = {
	name: "Saleem",
	status: "Open to new roles",
	tagline:
		"MERN stack developer with a front-end/back-end toolkit built over years of hands-on practice — and a habit of teaching what I learn along the way.",
	email: "saleem65.teacher@gmail.com",
	location: "Lahore, Pakistan",
	badge: {
		big: "M.Sc",
		lines: ["Information Technology", "PUCIT Lahore"],
	},
};

// `brand` drives the icon tint; see the .contact-row rules in index.css.
export const contacts = [
	{
		Icon: GmailIcon,
		brand: "gmail",
		label: profile.email,
		href: `mailto:${profile.email}?subject=Portfolio%20Inquiry&body=Hi%20Saleem%2C%0A%0A`,
	},
	{
		Icon: LinkedInIcon,
		brand: "linkedin",
		label: "LinkedIn",
		href: "https://www.linkedin.com/feed/",
		external: true,
	},
	{
		Icon: GitHubIcon,
		brand: "github",
		label: "GitHub",
		href: "https://github.com/mygithubsaleem",
		external: true,
	},
	{ Icon: PhoneIcon, brand: "phone", label: "+92 327‑0767029", href: "tel:+923270767029" },
	{
		Icon: WhatsAppIcon,
		brand: "whatsapp",
		label: "WhatsApp",
		href: "https://wa.me/923270767029",
		external: true,
	},
];

export const resume = {
	href: "/resume.pdf",
	// Filename the browser saves as.
	downloadAs: "Muhammad-Saleem-Resume.pdf",
	label: "Download Resume",
};

export const skillCards = [
	{
		variant: "front",
		icon: "🖥️",
		title: "Front End",
		items: [
			"Strong command of React",
			"NPM and Webpack",
			"Redux Toolkit + React Context API",
			"React Query + Axios",
		],
	},
	{
		variant: "back",
		icon: "🗄️",
		title: "Back End",
		items: [
			"Optimal MySQL queries + Workbench",
			"MongoDB",
			"Apache web server",
			"Postman for API building/testing",
		],
	},
];

export const projects = [
	{
		title: "Wagon Tracking System",
		description: "A MERN app for tracking freight wagons on the move.",
		stack: ["MongoDB", "Express", "React", "Node"],
	},
	{
		title: "Weather Tracking Across the Globe",
		description: "Look up live weather anywhere in the world, built on MERN.",
		stack: ["MongoDB", "Express", "React", "Node"],
	},
];

export const education = [
	{
		year: "2026",
		title: "1 Million Prompters",
		detail: "Dubai Future Foundation — Dubai Centre for Artificial Intelligence",
	},
	{ year: "2005–07", title: "M.Sc. Information Technology", detail: "PUCIT, Lahore" },
	{
		year: "1990–91",
		title: "Dbase III, Lotus 1‑2‑3, Word Processing, BASIC",
		detail: "CS‑84 Computers & Computations — Group of Engineers & Systems Analysts",
	},
	{ year: "1988", title: "FORTRAN", detail: "UET, Lahore" },
	{ year: "1987", title: "COBOL, BASIC", detail: "PBTE, Lahore" },
];

export const otherSkills = [
	"Communication",
	"Teamwork",
	"Organizational skills",
	"Teaching",
	"Badminton",
	"Learning new technologies",
];

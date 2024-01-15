import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import RoundedChip from "./Skill";

const socialLinks = [
	{
		label: "Github",
		icon: <FiGithub />,
		link: "https://github.com/Akshaygore1"
	},
	{
		label: "Twitter",
		icon: <FiTwitter />,
		link: "https://twitter.com/Akshaygore2301"
	},
	{
		label: "LinkedIn",
		icon: <FiLinkedin />,
		link: "https://www.linkedin.com/in/akshaygore2301/"
	},
	{
		label: "Email",
		icon: <FiMail />,
		link: "mailto:backslash.flutter@gmail.com"
	}
];

function Footer() {
	return (
		<div className="py-5 border-t-3/2">
			<div className="flex align-center justify-center mt-4">
				{socialLinks.map((socialLink, index) => (
					<RoundedChip
						key={index}
						label={socialLink.label}
						icon={socialLink.icon}
						link={socialLink.link}
					/>
				))}
			</div>
		</div>
	);
}

export default Footer;

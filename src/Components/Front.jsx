import React from "react";
import photo from "../Assets/123.jpg";
import RoundedChip from "./Skill";
import { FaNodeJs, FaReact, FaAws, FaDocker } from "react-icons/fa";
import {
	BiLogoJavascript,
	BiLogoGraphql,
	BiLogoPostgresql,
	BiLogoMongodb,
	BiLogoTypescript
} from "react-icons/bi";
import { SiApachekafka, SiRedis } from "react-icons/si";
import { CiCircleMore } from "react-icons/ci";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const skills = [
	{ name: "JavaScript", icon: <BiLogoJavascript /> },
	{ name: "Node.js", icon: <FaNodeJs color="green" /> },
	{ name: "ReactJS", icon: <FaReact color=" #87ceeb" /> },
	{ name: "GraphQL", icon: <BiLogoGraphql color="#AA336A" /> },
	{ name: "PostgreSQL", icon: <BiLogoPostgresql color="blue" /> },
	{ name: "MongoDB", icon: <BiLogoMongodb color="green" /> },
	{ name: "AWS", icon: <FaAws /> },
	{ name: "Docker", icon: <FaDocker color="#1C63ED" /> },
	{ name: "Redis", icon: <SiRedis color="red" /> },
	{ name: "TypeScript", icon: <BiLogoTypescript color="#3077C6" /> },
	{ name: "Kafka", icon: <SiApachekafka /> },
	{ name: "Learning More...", icon: <CiCircleMore /> }
];

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

function Front() {
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="mb-4">
				<img
					className="w-24 mx-auto shadow-xl rounded-full"
					src={photo}
					alt="profile face"
				/>
			</div>
			<div className="text-center mt-3">
				<p className="text-2xl font-semibold ">Akshay Gore</p>
				<p className="text-xs text-white-400 mt-2">Full Stack Developer</p>
			</div>
			<div className="text-center mt-5 max-w-3xl">
				{skills.map((skill, index) => (
					<RoundedChip key={index} label={skill.name} icon={skill.icon} />
				))}
			</div>
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

export default Front;

import React from "react";
import RoundedChip from "./Skill";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, image, description, liveLink, githubLink }) => {
	return (
		<div className="max-w-56 h-full mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4 relative">
			<img className="w-full h-32 object-cover" src={image} alt={title} />
			<div className="p-3">
				<h2 className="text-lg font-semibold mb-1 text-black">{title}</h2>
				<div className="h-16 overflow-y-auto text-xs text-slate-400">
					{description}
				</div>
			</div>
			<div className="absolute bottom-0 my-2 flex justify-end space-x-2">
				<RoundedChip label="Live" icon={<FiExternalLink />} link={liveLink} />
				<RoundedChip label="Github" icon={<FaGithub />} link={githubLink} />
			</div>
		</div>
	);
};

export default ProjectCard;

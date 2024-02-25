import React from "react";
import RoundedChip from "./Skill";
import { FiExternalLink } from "react-icons/fi";

const BlogCard = ({ title, brief, slug }) => {
	const cardStyle = {
		backgroundColor: "#262626", // Adjust the opacity value here
		borderRadius: "0.2rem",
		overflow: "hidden",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
		position: "relative", // Ensure the container is positioned relatively
	};

	const chipStyle = {
		position: "absolute",
		top: "0.5rem",
		right: "0.5rem",
		margin: "0.25rem",
	};

	return (
		<div className="mx-auto shadow-lg m-2 relative" style={cardStyle}>
			<div className="p-3">
				<h2 className="text-lg font-semibold pb-2 text-white text-ellipsis overflow-hidden whitespace-nowrap max-w-96">
					{title}
				</h2>
				<div className="overflow-y-auto text-xs text-neutral-400">{brief}</div>
			</div>
			{/* Position the chip using absolute positioning */}
			<div style={chipStyle}>
				<RoundedChip
					label="Read"
					icon={<FiExternalLink />}
					link={"https://akshaygore.hashnode.dev/" + slug}
				/>
			</div>
		</div>
	);
};

export default BlogCard;

import React from "react";
import RoundedChip from "./Skill";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
	return (
		<div className="max-w-4xl mx-auto justify-center py-12" id="tech">
			<p className="text-2xl md:text-4xl font-bold pt-4 my-2">Experience</p>
			<div className="flex justify-between">
				<RoundedChip
					label="Zeliot Connected Services"
					icon={<MdOutlineWorkOutline />}
				/>
				<p className="text-sm">April-2022 - Present</p>
			</div>
		</div>
	);
};

export default Experience;

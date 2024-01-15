import React from "react";
import RoundedChip from "./Skill";
import { MdOutlineWorkOutline } from "react-icons/md";

const Experience = () => {
	return (
		<div className="max-w-4xl mx-auto justify-center py-12" id="tech">
			<p className="text-2xl md:text-4xl font-bold pt-4 my-2">Experience</p>
			<RoundedChip
				label="Zeliot Connected Services"
				icon={<MdOutlineWorkOutline />}
			/>

			<div className="p-4 m-2 rounded-lg border-l-4 border-primary">
				<blockquote className="text-lg italic m-2">
					As a Full Stack Developer at Zeliot Connected Services:
					<ul className="list-disc list-inside">
						<li>
							Proficient in React, Node.js, GraphQL, and databases (PostgreSQL,
							MySQL, Redis).
						</li>
						<li>
							Experienced in building and maintaining microservices
							architecture.
						</li>
						<li>Skilled in messaging systems, particularly Kafka.</li>
						<li>
							Expertise in frontend development, backend logic, and system
							architecture.
						</li>
						<li>Led a small team of interns and new joiners.</li>
						<li>
							Implemented CI/CD pipelines, automation processes, and cron jobs.
						</li>
						<li>
							Consistently tackled challenges and optimized development
							workflows.
						</li>
					</ul>
				</blockquote>
			</div>
		</div>
	);
};

export default Experience;

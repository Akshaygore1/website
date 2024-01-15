import React from "react";

function RoundedChip({ label, icon, link }) {
	return (
		<div className="text-primary capitalize text-xs py-0.5 px-3 bg-white border border-primaryBorder rounded-full justify-between items-center inline-flex m-1">
			{link ? (
				<a
					href={link}
					className="hover:underline focus:underline focus:outline-none no-underline flex justify-around items-center"
					target="_blank"
					rel="noopener noreferrer"
				>
					{icon && <span className="mr-1">{icon}</span>}
					{label}
				</a>
			) : (
				<>
					{icon && <span className="mr-1">{icon}</span>}
					{label}
				</>
			)}
		</div>
	);
}

export default RoundedChip;

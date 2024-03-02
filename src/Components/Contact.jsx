import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";

function Contact() {
	return (
		<div className="max-w-3xl mx-auto py-12 text-center" id="contactme">
			<p className="text-3xl md:text-5xl font-bold py-4">Get in Touch</p>
			<button
				className="capitalize  p-4 bg-[#262626] border border-neutral-400 rounded justify-between text-white items-center inline-flex m-1"
				onClick={() => {
					window.location.href = "mailto:recipient@example.com";
				}}
			>
				<FaEnvelope className="mr-2" />
				Mail me
			</button>
		</div>
	);
}

export default Contact;

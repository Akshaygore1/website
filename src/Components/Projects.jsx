import React from "react";
import crypto from "../Assets/crypto.jpeg";
import Dashboard from "../Assets/Dashboard.jpeg";
import ProjectCard from "./Projectcard";
import Store from "../Assets/Store.jpeg";
import ADMIN from "../Assets/admin.png";
import Coupon from "../Assets/Coupon.jpeg";
import Food from "../Assets/food.jpeg";

const projectsData = [
	{
		title: "CouponLap",
		image: Coupon,
		description: "Built with Next.js 14, Supabase, Cloudinary, and PostgreSQL.",
		liveLink: "https://couponlap.in/"
	},
	{
		title: "Admin Dashboard",
		image: Dashboard,
		description: "Next.js 14, Vercel, PostgreSQL, Server Actions.",
		liveLink: "https://nextjs-admin-dashboard-alpha.vercel.app/",
		githubLink: "https://github.com/Akshaygore1/nextjsAdminDashboard"
	},
	{
		title: "Cryptoowl",
		image: crypto,
		description:
			"Developed using React, Material UI, CoinGecko API, and Context API.",
		liveLink: "https://cryptoowl.netlify.app/",
		githubLink: "https://github.com/Akshaygore1/Crypto-Owl"
	},
	{
		title: "E-Commerce CMS",
		image: ADMIN,
		description: "Next.js 14, PlanetScale, Prisma, Zustand.",
		liveLink: "https://storemanagerhub.vercel.app",
		githubLink: "https://github.com/Akshaygore1/Crypto-Owl"
	},
	{
		title: "E-Commerce",
		image: Store,
		description: "Next.js 14, PlanetScale, Prisma, Zustand.",
		liveLink: "https://myecommerceshop.vercel.app/",
		githubLink:
			"https://github.com/Akshaygore1/Next-Js-Ecommerce/tree/main/store"
	},
	{
		title: "Restaurant Website",
		image: Food,
		description: "Using HTML, CSS, JavaScript",
		liveLink: "https://myrestraurant.netlify.app/",
		githubLink: "https://github.com/Akshaygore1/Restraurant-Website"
	}
];

function Projects() {
	return (
		<div className="max-w-4xl mx-auto justify-center py-12" id="tech">
			<p className="text-2xl md:text-4xl font-bold pt-4 my-2">Projects</p>
			<div className="flex flex-wrap justify-center py-2 my-2">
				{projectsData.map((project, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
					>
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

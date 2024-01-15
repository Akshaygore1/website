import React, { useEffect, useState } from "react";
import BlogCard from "./Blogcard";

const Blogs = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://gql.hashnode.com/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						query: `
                    query {
                      user(username:"akshay2301"){
                        id
                        posts(page:1,pageSize:4){
                          nodes{
                            title
                            slug
                            brief
                            coverImage {
                              url
                            }
                          }
                        }
                      }
                    }
                  `
					})
				});

				const result = await response.json();

				// Access the data from the result object
				const userData = result.data.user;
				const posts = userData.posts.nodes;

				setPosts(posts);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="max-w-4xl mx-auto justify-center py-12" id="tech">
			<p className="text-2xl md:text-4xl font-bold pt-4 my-2">Blogs</p>
			<div className="flex flex-wrap justify-center py-2 my-2">
				{posts.length > 0 &&
					posts.map((posts, index) => (
						<div
							key={index}
							className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
						>
							<BlogCard {...posts} />
						</div>
					))}
			</div>
		</div>
	);
};

export default Blogs;

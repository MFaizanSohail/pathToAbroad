import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function BlogList() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/blogs/getAll")
			.then((response) => {
				setBlogs(response.data);
			})
			.catch((error) => {
				console.error("Error fetching blogs:", error);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<div className="content">
				<div className="main-col">
					<h2>Blog Posts</h2>
					<div style={{ display: "flex" }}>
						{blogs.map((blog) => (
							<div key={blog._id}>
								<h3>{blog.title}</h3>
								<div
									dangerouslySetInnerHTML={{
										__html: blog.content,
									}}
								></div>
							</div>
						))}
					</div>
				</div>
				<Sidebar className="sidebar" />
			</div>
            <Footer />
		</div>
	);
}

export default BlogList;

import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../reduxToolkit/blogsReducer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spiner from "../Spiner/Spiner";
import { userType } from "../../utility/auth";

const Blog = () => {
	const [nextPg, setNextPg] = useState(10);
	const handlePagination = (e, p) => {
		console.log(p);
		setNextPg(p * 10);
	};
	const dispatch = useDispatch();
	const { blogsData, status } = useSelector((state) => state.blogs);

	useEffect(() => {
		userType();
		dispatch(fetchBlogs());
	}, []);

	useEffect(() => {
		window.scrollTo(0, 500);
	}, [nextPg]);

	if (status == STATUSES.LOADING) {
		return (
			<div className="loading">
				<Spiner />
			</div>
		);
	}

	return (
		<>
			{blogsData
				?.map((blog, i) => (
					<NavLink
						key={i}
						style={{ textDecoration: "none", color: "inherit" }}
						to={`/singleblog/${blog._id}`}
					>
						<div className="blog">
							<div className="title">
								<h1>{blog?.title.slice(0, 60)}...</h1>
							</div>
							<div className="tags">
								{" "}
								Tags :
								<Button size="small" variant="outlined">
									America
								</Button>{" "}
								<Button size="small" variant="outlined">
									Internship
								</Button>
								<Button size="small" variant="outlined">
									Harvard University
								</Button>{" "}
							</div>
							<div className="blogdetails">
								<span className="blogtext">
									{blog.description?.slice(0, 600)}...
								</span>
								<img
									src={blog?.imageUrl}
									className="blogimg"
									alt=""
								/>
							</div>
						</div>
					</NavLink>
				))
				.slice(nextPg - 10, nextPg)}
			<Stack spacing={2}>
				<Pagination
					className="homePagination"
					count={Math.ceil(blogsData.length / 10)}
					variant="outlined"
					shape="rounded"
					onChange={handlePagination}
				/>
			</Stack>
		</>
	);
};

export default Blog;

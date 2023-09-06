import React, { useEffect, useState } from "react";
import "./Singleblog.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../StaticData/data";

const Singleblog = () => {
	const { id } = useParams();
	const [myBlog, setMyBlog] = useState([]);
	
  const fetchThroughId = () => {
    const numericId = parseInt(id);

    let cntBlg = data.filter((item) => item.id === numericId);
    setMyBlog(cntBlg);
  };

	useEffect(() => {
		fetchThroughId();
	}, [id]);

  console.log("myBlog:", myBlog);

	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);
	return (
		<>
			{myBlog.map((blog, id) => (
				<div key={id} className="singleblog">
					<div className="myblog">
						<h2 className="title">{blog.title}</h2>
						<div className="blogtags">
							Tags :
							<Button size="small" variant="outlined">
								{blog.tag.country}
							</Button>{" "}
							<Button size="small" variant="outlined">
								{blog.tag.opurtunity}
							</Button>
							<Button size="small" variant="outlined">
								{blog.tag.university}
							</Button>
						</div>
						<div className="blogauthor">
							<img src="/img/contact2.png" alt="" />
							<div className="name">{blog.author}</div>
							<div className="timestamps">March 20,2023</div>
						</div>
						<div className="blogimg">
							<img src={blog.img} alt="" />
						</div>
						<div className="blogdesc">{blog.desc}</div>
						<div className="details">
							<h2 className="title">Details</h2>
							<ul>{blog.details}</ul>
						</div>
						<div className="elegibility">
							<h2 className="title">
								Elegibility and criteria
							</h2>
							<ul>{blog.elegibilty}</ul>
						</div>
						<div className="benifits">
							<h2 className="title">
								Benifits and others
							</h2>
							<ul>{blog.benifits}</ul>
						</div>
						<div className="howtoapply">
							<h2 className="title">
								Here is the criteria for applying on this post
							</h2>
							<ul>{blog.howtoapply}</ul>
						</div>
						<div className="deadline">
							<h2 className="title">Deadline</h2>
							<p className="para">{blog.deadline}</p>
						</div>
					</div>
					<Sidebar className="sidebar" />
				</div>
			))}
		</>
	);
};

export default Singleblog;

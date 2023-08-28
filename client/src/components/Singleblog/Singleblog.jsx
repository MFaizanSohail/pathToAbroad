import React from "react";
import "./Singleblog.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "@mui/material";

const Singleblog = () => {
  return (
    <div>
      <Navbar />
      <div className="singleblog">
        <div className="myblog">
          <h2 className="title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            exercitationem?
          </h2>
          <div className="blogtags">
            Tags :
            <Button size="small" variant="outlined">
              Outlined
            </Button>{" "}
            <Button size="small" variant="outlined">
              Outlined
            </Button>
            <Button size="small" variant="outlined">
              Outlined
            </Button>
          </div>
          <div className="blogauthor">
            <img src="/img/contact2.png" alt="" />
            <div className="name">Camila cabello</div>
            <div className="timestamps">March 20,2023</div>
          </div>
          <div className="blogimg">
            <img src="/img/blog-banner-48-1-696x392.png" alt="" />
          </div>
          <div className="blogdesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            dolor corporis provident magni obcaecati ex consequatur quia velit
            doloribus qui eos dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam est aspernatur quae explicabo dignissimos! Error incidunt in quis provident! Accusantium facere cupiditate tempore nemo amet ea odit, est vel nihil.<br /> <br /> Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium debitis facere doloremque omnis consequatur, eligendi officia dolorem vel sed unde quas, voluptates voluptatibus nisi temporibus sunt labore similique, architecto explicabo?
            consectetur, adipisicing elit. Necessitatibus excepturi ipsa
            laudantium incidunt ipsum libero harum ducimus similique! Sapiente
            ut, esse corrupti suscipit corporis at saepe harum ad vitae, quos,
            inventore sed in. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita modi, totam minima nisi, architecto facere, nemo iure esse illum facilis ipsam. Veritatis a ipsa blanditiis explicabo atque, quo consequatur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            dolor corporis provident magni obcaecati ex consequatur quia velit
            doloribus qui eos dolorem. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea magnam voluptates harum repellendus non doloribus cum. Nesciunt velit officia, vel ipsa rem temporibus quia excepturi illum consequatur corrupti? Maiores. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Necessitatibus excepturi ipsa
            laudantium incidunt ipsum libero harum ducimus similique! Sapiente
            ut, esse corrupti suscipit corporis at saepe harum ad vitae, quos,
            inventore sed in. <br /> <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt ab repellat aperiam eos libero labore laboriosam, expedita, quia quae ut voluptatibus temporibus tenetur. Labore, doloremque. Adipisci modi illo impedit!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            dolor corporis provident magni obcaecati ex consequatur quia velit
            doloribus qui eos dolorem. <br /> <br /> Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium est excepturi ipsum adipisci facilis eum consequatur obcaecati animi! Ducimus repellat dolores ratione expedita eligendi. Assumenda nulla officia harum officiis.
            consectetur, adipisicing elit. Necessitatibus excepturi ipsa
            laudantium incidunt ipsum libero harum ducimus similique! Sapiente
            ut, esse corrupti suscipit corporis at saepe harum ad vitae, quos,
            inventore sed in. <br /> <br />
          </div>
          <div className="details">
            <h2 className="title">Details</h2>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, reiciendis!</li>
              <li>Lorem,Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="elegibility">
            <h2 className="title">
            Elegibility and criteria ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nisi!
            </h2>
            <ul>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>
                Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem, ipsum dolor.
              </li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>
                Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem, ipsum dolor.
              </li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>
                Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem, ipsum dolor.
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
            </ul>
          </div>
          <div className="benifits">
            <h2 className="title">
              Benifits and others ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nisi!
            </h2>
            <ul>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit Lorem, ipsum..</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum. Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem, ipsum </li>
              <li>
                Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem, ipsum dolor.
              </li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum .</li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
            </ul>
          </div>
          <div className="howtoapply">
            <h2 className="title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nisi!
            </h2>
            <ul>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
              <li>Lorem, ipsum </li>
              <li>
                Lorem, ipsum dolor. Lorem ipsum dolor sit. Lorem, ipsum dolor.
              </li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum dolor sit.</li>
              <li>Lorem, ipsum dolor. Lorem ipsum .</li>
              <li>Lorem, ipsum dolor. Lorem ipsum.</li>
            </ul>
          </div>
          <div className="deadline">
            <h2 className="title">Deadline</h2>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              alias amet, consectetur officia cum dolorem nam hic totam, atque
              ipsam, provident aut veritatis!
            </p>
          </div>
        </div>
        <Sidebar className="sidebar" />
      </div>
      <Footer />
    </div>
  );
};

export default Singleblog;

import React, { useEffect, useState } from "react";
import "./ProfileInfo.scss";
import Navbar from "../Navbar/Navbar";
import ProfileModal from "../ProfileModal/ProfileModal";
import { userToken } from "../../utility/auth";
import axios from "axios";

const ProfileInfo = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [singleUser, setSingleUser] = useState({});

  const handleEvents = () => {
    setModalOpened(true);
  };

  console.log("user id : ", userToken(), "single User :", singleUser);

  const getUser = () => {
    axios
      .get(`http://localhost:4000/user/getUser/${userToken()}`)
      .then((res) => {
        setSingleUser(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileinfo-container">
        <div className="info-content">
          <div className="info-left">
            <img src="/img/contact3.png" alt="" />
            <div className="leftside-info">
              {singleUser.name}
              <span className="email">{singleUser.email}</span>
            </div>
            <div className="edit-profile">
              <button onClick={handleEvents}>Edit Profile</button>
            </div>
          </div>
          <div className="info-right">
            <h3>Profile settings</h3>
            <div className="fullname">
              Full Name
              <span> {singleUser.name}</span>
            </div>
            <div className="email">
              Email Address
              <span> {singleUser.email}</span>
            </div>
            <div className="organization">
              Organization
              <span>Novalogic</span>
            </div>
            <div className="info-about">
              About
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias aperiam laudantium tempora doloribus consequatur
                accusamus ipsum! Accusantium beatae eius possimus facilis totam
                dolorum repudiandae similique quia rerum.
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      {/* <Footer/> */}
    </>
  );
};

export default ProfileInfo;

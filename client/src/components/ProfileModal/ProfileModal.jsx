// import { Modal, useMantineTheme } from "@mantine/core";
import Modal from '@mui/material/Modal';
import "./ProfileModal.scss";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

function ProfileModal({ modalOpened, setModalOpened }) { 

  const [getImage,setGetImage]=useState(""); 
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      worksAT: "",
      organization: "",
      aboutMe: "",
      profileImg: "",
    },
    onSubmit: (values, { resetForm }) => {
      values.profileImg=getImage;
      console.log("Values of form : ",values); 
      resetForm();
      setModalOpened(false)
    },
  });

  const handleImagechange=(e)=>{ 
    setGetImage(e.target.files[0])
  }

  return (
    <Modal
      className="modal-container"  
      open={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <div className="cancel-btn" onClick={() => setModalOpened(false)}>x</div>
        <h3>Your info</h3>

        <div>
          <input
            value={values.firstName}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="Full Name"
          />
          <input
            value={values.email}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="email"
            placeholder="Email Adress"
          />
        </div>

        <div>
          <input
            value={values.worksAT}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works at"
          />
          <input
            value={values.organization}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="organization"
            placeholder="organization"
          />
        </div>

        <div className="about-me">
          <textarea
            rows={4}
            value={values.aboutMe}
            onChange={handleChange}
            type="text"
            className="infoInput"
            placeholder="About Me"
            name="aboutMe"
          />
        </div>

        <div>
          Profile Image
          <input
            type="file"
            name="profileImg" 
            onChange={handleImagechange}
          />
        </div>

        <button type="submit" className="button infoButton">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

import { Modal, useMantineTheme } from "@mantine/core";
import './ProfileModal.scss'
import axios from "axios";
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";
import { useDispatch } from "react-redux";

function ProfileModal({ deleteModalOpened, setDeleteModalOpened,userId,getAllUsers,userDelete,blogDelete }) {
  const dispatch=useDispatch()
  const theme = useMantineTheme();
  console.log('id:',userId);
  const handleDelete=(e)=>{
    e.preventDefault()
    setDeleteModalOpened(false)
   {userDelete && axios
      .delete(`http://localhost:4000/admin/userDelete/${userId}`)
      .then((res) => { 
        console.log("delete action :",res);
        getAllUsers()
      })
      .catch(function (error) {
        console.log(error);
      });} 
      {blogDelete && axios
        .delete(`http://localhost:4000/blog/BlogDelete/${userId}`)
        .then((res) => { 
          console.log("delete action :",res);
          dispatch(fetchBlogs());
        })
        .catch(function (error) {
          console.log(error);
        });} 
  }

  return (
    <Modal className="modal-container dltBtn-container"
      overlaycolor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayopacity={0.55}
      overlayblur={3}
      size="55%"
      opened={deleteModalOpened}
      onClose={() => setDeleteModalOpened(false)}
    >
      <form onSubmit={handleDelete} className="infoForm dltBtn-form">
        <h3>Please make sure you want to delete</h3>
        <button type="submit" className="button infoButton dltBtn" >Delete</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

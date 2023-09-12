import './ProfileModal.scss'
import axios from "axios";
import { fetchBlogs } from "../../reduxToolkit/blogsReducer";
import { useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';

function ProfileModal({ deleteModalOpened, setDeleteModalOpened,userId,getAllUsers,userDelete,blogDelete }) {
  const dispatch=useDispatch()  


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
    open={deleteModalOpened}
    onClose={() => setDeleteModalOpened(false)}
    >
      <form onSubmit={handleDelete} className="infoForm dltBtn-form"> 
      <div className="cancel-btn" style={{marginBottom:'2rem'}} onClick={() => setDeleteModalOpened(false)}>x</div>
        <h3>Please make sure you want to delete</h3>
        <button type="submit" className="button infoButton dltBtn" >Delete</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;

import React from 'react'
import "./Signup.scss";
import { Link } from 'react-router-dom';

const Registered = () => {
  return (
    <div className='Registered'>
      <h1 className='register'>Registration Completed</h1>
      <p className='description'>You have successfully Registered now you can login !</p>
      <p className='loginblow'>Click blow to login</p>
      <button className='submit' type="submit"><Link to={'/login'}>Log In </Link></button>
    </div>
  )
}

export default Registered

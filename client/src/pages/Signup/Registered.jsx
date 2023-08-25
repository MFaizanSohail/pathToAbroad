import React from 'react'
import "./Signup.scss";

const Registered = () => {
  return (
    <div className='Registered'>
      <h1 className='register'>Registration Completed</h1>
      <p className='description'>You have successfully Registered now you can login !</p>
      <p className='loginblow'>Click blow to login</p>
      <button className='submit' type="submit">Log In</button>
    </div>
  )
}

export default Registered

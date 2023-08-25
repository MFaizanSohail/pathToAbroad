import React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newstitle">Subscribe for latest news</div>
      <div className="newsdesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque tempore laboriosam iste totam maiores quo!</div>
      <div className="inputfield">
        <input type="text" className='input' placeholder='Enter your email '/>
        <button className='subscribe'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter

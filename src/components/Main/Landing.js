import React from 'react'
import './Landing.css'
import img1 from '../../images/13.png'
import img2 from '../../images/12.png'
import img3 from '../../images/11.png'
import img4 from '../../images/10.png'


const Landing = () => {

  
  return (
    <div className='container'>
      <div className='main'>
      <div className="main-one">
          <span className="title">New Collection</span>
          <h1 className='heading'>Luxury Watch</h1>
          <span className="subtitle">Best Product ever in Season</span>
        
          <p className='para'>
            Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Numquam, iste? dolor sit amet consectetur adipisicing elit.
            Optio quam alias odio voluptatum necessitatibus neque dolor quos
            magnam voluptatibus maxime accusamus sed voluptates deserunt impedit
            suscipit beatae, id ea asperiores.
          </p>
          <button className='button'>Shop now</button>
          </div>
        <div className='main-two'>
          <img className='subimg' src={img4} alt=''/>
        </div>
        <div className='images'>
          <img src={img1} alt=''  />
          <img src={img2} alt=''  />
          <img src={img3} alt=''  />
         </div>
     </div>
    </div>
  )
}

export default Landing
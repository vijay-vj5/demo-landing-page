import React from 'react'

import alogo from '../../images/logo2.png'
import blogo from '../../images/logo.png'
import './Logo.css'


const Logo = () => {
  return (
    <div className='logo'>
        <img className='brand' src={blogo} alt='logos'/>
        <h1>Watch<span>es</span></h1>
        {/* <img src={blogo} alt='logos'/> */}
        
    </div>
  )
}

export default Logo
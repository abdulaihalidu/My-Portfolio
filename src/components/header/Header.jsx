import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import Me from '../../assets/ha.png'
import HeaderSocials from './HeaderSocials'




const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Halidu Abdulai</h1>
        <h5 className="text-light">
          Web developer | Machine learning researcher
        </h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src={Me} alt='halidu abdulai' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

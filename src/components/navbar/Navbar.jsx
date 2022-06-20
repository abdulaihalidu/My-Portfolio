import React from 'react'
import { useState } from 'react';

import './navbar.css'
import { BiHomeAlt } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { RiContactsBook2Line } from 'react-icons/ri';

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('/#');

  return (
    <nav>
      <a
        href='/#'
        className={activeNav === '/#' ? 'active' : ''}
        onClick={() => setActiveNav('/#')}
      >
        <BiHomeAlt />
      </a>

      <a
        href='#about'
        className={activeNav === '#about'? 'active': ''}
        onClick={() => setActiveNav('#about')}
      >
        <BiUser />
      </a>
      <a
        href='#experience'
        className={activeNav === '#experience'? 'active': ''}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        className={activeNav === '#services'? 'active': ''}
        onClick={() => setActiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        className={activeNav === '#contact'? 'active': ''}
        onClick={() => setActiveNav('#contact')}
      >
        <RiContactsBook2Line />
      </a>
    </nav>
  )
}

export default Navbar
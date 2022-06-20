import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a
            href='https://www.linkedin.com/in/halidu-abdulai-87994520a'
            target='_blank'
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/abdulaihalidu'
            target='_blank'
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href='https://youtube.com/channel/UCtsjymuoJjlV7_OX36WPUIg'
            target='_blank'
            rel="noopener noreferrer"
          >
            <BsYoutube />
          </a>
          <a
            href="https://instagram.com/my_abc.official"
            target='_blank'
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
      </div>
  )
}

export default HeaderSocials
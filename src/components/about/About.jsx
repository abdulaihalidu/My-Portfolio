import React from 'react'
import './about.css'

import myImage from '../../assets/halid.jpeg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolderCheck } from 'react-icons/bs';


const About = () => {
  return (
    <section id='about'>
      <h4>Explore More</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={myImage} alt="about halidu" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__card-icon'/>
              <h4>Experience</h4>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__card-icon'/>
              <h4>Clients</h4>
              <small>10+ clients</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__card-icon'/>
              <h4>Projects</h4>
              <small>10+ Completed Projects</small>
            </article>
            
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Neque tempora laborum dolor doloremque quibusdam,
            iure molestiae placeat nostrum voluptate molestias
            rerum fugiat vel quidem nemo, voluptatem, accusamus vero! Iusto,
            consectetur!
          </p>
          <a href='#contact' className='btn btn-primary'>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About

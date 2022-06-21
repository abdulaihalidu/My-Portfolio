import React from 'react'
import './services.css'

import { BiCheckShield } from 'react-icons/bi';


const Services = () => {
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Building E-commerce Web Apps</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Building Portfolio Websites</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Project collaboration</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Django - Backend Development</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>ReactJs - Frontend Development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Data gathering</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Data Preprocessing</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Analysing Datasets </p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Classifition and Regression Tasks</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Evaluation of Machine Learning models</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Other Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Programming Languages Tuition</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Content Creation and Editing</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>Project Planning</p>
            </li>
            <li>
              <BiCheckShield className='service__list-icon' />
              <p>SQL Database Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h4>Skills I Have</h4>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__web">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Booststrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PostgreSql</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__ml">
           <h3>Machine Learning</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Pandas</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Numpy</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Scikit-learn</h4>
                <small>basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Matplotlib</h4>
                <small>Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
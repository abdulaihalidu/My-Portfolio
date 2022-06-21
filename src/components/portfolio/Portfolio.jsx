import React from 'react'
import './portfolio.css'

import cheapBuy from '../../assets/cheapbuy.png';
import covidTrack from '../../assets/covidTrack.jpeg';

const data = [
  {
    id: 1,
    img: cheapBuy,
    tittle: 'CheapBuy Web App',
    github: 'https://github.com/abdulaihalidu/CheapBuy',
    live: 'https://cheapbuy.herokuapp.com'
  }, 
  {
    id: 2,
    img: covidTrack,
    tittle: 'CovidTrack - Covid19 Tracker',
    github: 'https://github.com/abdulaihalidu/CovidTrack',
    live: 'https://github.com/abdulaihalidu/CovidTrack'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((item) => {
            return (
              <article className="portfolio__item" key={item.id}>
                <div className="portfolio__item-img">
                <img src={item.img} alt={item.tittle} />
                </div>
                  <h3>{item.tittle}</h3>
                <div className="cta">
                  <a className='btn'
                    href={item.github}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className='btn btn-primary'
                    href={item.live}
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
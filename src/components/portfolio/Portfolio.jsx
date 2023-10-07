import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    img: IMG1,
    title: "Crypto currency Dashboard & Financial visualization",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    img: IMG2,
    title: "title2",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    img: IMG3,
    title: "title3",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    img: IMG4,
    title: "title4",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    img: IMG5,
    title: "title5",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    img: IMG6,
    title: "title6",
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      {
        data.map(({id, img, title, github, demo})=> {
          return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
            <img src={img} alt={title} />
            </div>
              <h3> {title}</h3>
              <div className="portfolio_item-cta">
              <a href={github} className='btn'  target='blank'> Github</a>
              <a href={demo} className='btn btn-primary' target='blank'> Live Demo</a>
              </div>
          </article>
          )
        })
      }

      {/* <article className='portfolio_item'>
        <div className="portfolio_item-image">
        <img src={IMG2} alt="" />
        </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'  target='blank'> Github</a>
          <a href="https:/dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
        <img src={IMG3} alt="" />
        </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'  target='blank'> Github</a>
          <a href="https:/dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
        <img src={IMG4} alt="" />
        </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'  target='blank'> Github</a>
          <a href="https:/dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
        <img src={IMG5} alt="" />
        </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'  target='blank'> Github</a>
          <a href="https:/dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
        <img src={IMG6} alt="" />
        </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'  target='blank'> Github</a>
          <a href="https:/dribbble.com/Alien_pixels" className='btn btn-primary' target='blank'> Live Demo</a>
          </div>
      </article> */}

      </div>
    </section>
  )
}

export default Portfolio
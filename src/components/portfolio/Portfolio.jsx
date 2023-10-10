import React from 'react'
import './Portfolio.css'
import Video from '../../assets/antique-video.mp4'
import Video2 from '../../assets/Untitled-2.mp4'
import Video3 from '../../assets/real-estate-video.mp4'
import Video4 from '../../assets/Scalculator.mp4'
import Video5 from '../../assets/Sgame.mp4'
import Video6 from '../../assets/drum-kit.mp4'
import Video7 from '../../assets/QR.mp4'
import Video8 from '../../assets/old-portfolio.mp4'



const data = [
  {
    id: 1,
    video: Video,
    title: "Antique website",
    description: 'A business portfolio website for an Antique seller.',
    github: 'https://github.com/nyitrai100/1.website-with-html-css-Jquery',
    demo: 'https://serene-marshmallow-150d24.netlify.app/?fbclid=IwAR2evYV3m4Tzx0yBR9VETzMhBz2a1x96E1MvwW_fBZbmNuVVtR9EwJZIlic'
  },
  {
    id: 2,
    video: Video2,
    title: "JS Calculator",
    description: 'Compound Investment Calculator for Disruptive-social.',
    github: 'https://github.com/nyitrai100/investment-calc-master2/blob/main/index.html',
    demo: 'https://www.mascap.group'
  },
  {
    id: 3,
    video: Video3,
    title: "Real-estate website",
    description: 'The initial significant project undertaken during my university journey',
    github: '',
    demo: ''
  },
  {
    id: 4,
    video: Video4,
    title: "Saving Calculator",
    description: 'Calculator from my On-going Project',
    github: 'https://github.com/nyitrai100/John-s-calculator',
    demo: ''
  },
  {
    id: 5,
    video: Video5,
    title: "Simon Game Challenge",
    description: 'Simon Game with JS',
    github: 'https://github.com/nyitrai100/Udemy/tree/main/web%20development/Javascript/Simon%20Game%20Challenge%20Starting%20Files',
    demo: ''
  },
  {
    id: 6,
    video: Video6,
    title: "Drum-kit",
    description: 'Drum-kit with JS',
    github: 'https://github.com/nyitrai100/Udemy/tree/main/web%20development/Javascript/Drum%20Kit%20Starting%20Files',
    demo: ''
  },
  {
    id: 7,
    video: Video7,
    title: "QR Code Generator",
    description: 'Generate a QR code with an URL.',
    github: 'https://github.com/nyitrai100/Udemy/tree/main/web%20development/backend/2.4%20QR%20Code%20Project',
    demo: ''
  },
  {
    id: 8,
    video: Video8,
    title: "My Previous Portfolio Website",
    description: 'I created this website with HTML, CSS, Javascript, PHP.',
    github: 'https://github.com/nyitrai100/portfolio-website',
    demo: 'https://tranquil-cannoli-742856.netlify.app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
      {
        data.map(({id, video, title, description, github, demo})=> {
          return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
            <video src={video} width={'100%'} alt={title} autoPlay loop muted />
            </div>
              <h3 className='title'> {title}</h3>
              {description &&<p className='description-margin-bottom'> {description}</p>}
              <div className="portfolio_item-cta">
              {github && <a href={github} className='btn'  target='blank'> Github</a>}
              {demo && <a href={demo} className='btn btn-primary' target='blank'> Live Demo</a>}
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
import React from 'react'
import './Portfolio.css'
import Video from '../../assets/pdf-reader.mp4'
import Video2 from '../../assets/budapest-weather-app.mp4'




const data = [
  {
    id: 1,
    video: Video,
    title: "PDF-Reader",
    description: 'Find pdf documents, which are includes a keyword',
    github: 'https://github.com/nyitrai100/pdfReader',
    demo: ''
  },
  {
    id: 2,
    video: Video2,
    title: "Budapest-Weather-app",
    description: 'Check Budapestweather forecast or even change locations.',
    github: 'https://github.com/nyitrai100/BudapestWeatherApp',
    demo: ''
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container '>
      {
        data.map(({id, image, video, title, description, github, demo})=> {
          return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
            <video src={video} width={'100%'} alt={title} autoPlay loop muted />
            </div>
              <h3 className='title'> {title}</h3>
              {description &&<p className='description-margin-bottom'> {description}</p>}
              <div className="portfolio_item-cta ">
              {github && <a href={github} className='btn'  target='blank'> Github</a>}
              {demo && <a href={demo} className='btn btn-primary' id="text-black" target='blank'> Live Demo</a>}
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
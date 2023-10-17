import React from 'react'
import CV from '../../assets/CV.pdf'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'


const CTA= () => {
  return (
    <div className="cta">
        <div className='download'>
        <a href={CV} download className='btn'>Download CV</a>
        </div>
        <div >
        <a href="https://www.linkedin.com/in/bence-nyitrai-a5033425b/" target="_blank" className='links'> <BsLinkedin/> </a>
        <a href="https://github.com/nyitrai100" target="_blank" className='links'> <FaGithub/> </a>
        </div>
    </div>
  )
}

export default CTA
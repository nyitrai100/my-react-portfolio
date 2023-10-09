import React from 'react'
import'./about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">

          <div className="about_me">
              <div className="about_me-image">
                <img src={ME} alt="About Image" />
                </div>
          </div>

          <div className="about_content">
              <div className="about_cards">
                <article className='about_card'>
                    <FaAward className='about_icon'/>
                    <h5>Education</h5>
                    <small> University of Huddersfield, UK</small>
                </article>

                <article className='about_card'>
                    <FiUsers className='about_icon'/>
                    <h5>Year of Study</h5>
                    <small> Second Year Student</small>
                </article>

                <article className='about_card'>
                    <VscFolderLibrary className='about_icon'/>
                    <h5>Course</h5>
                    <small> Web programming with Cyber Security BSC</small>
                </article>
              </div>
                
                <h4>Hi there!</h4>   
                <p> My name is Bence Nyitrai,
                 I'am a Web programming with Cybersecurity student in University of Huddersfield UK.
                  I've been working in the several projects since i have started my educations.
                   <br/>During that time, I've gained experience in Front-end development.
                    Through my projects work, I strive to perfection, and I'm always excited to take on new challenges and opportunities.
                    <br/>If you're interested in collaborating or just want to say hello, feel free to contact with me.
                      Thanks for visiting my portfolio, and I look forward to connecting with you soon!
                  </p>
              <a href="#contact" className='btn btn-primary'> Let's Talk</a>
          </div>
      </div>

    </section>
  )
}

export default About
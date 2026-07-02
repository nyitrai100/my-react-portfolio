import React from 'react'
import'./about.css'
import ME from '../../assets/me-about.jpg'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {IoMdSchool} from 'react-icons/io'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">

          <div className="about_me">
              <div className="about_me-image">
                <img src={ME} alt="About" />
                </div>
          </div>
          
          <div className="about_content">
              <div className="about_cards">
                <article className='about_card'>
                    <IoMdSchool className='about_icon'/>
                    <h5>Education</h5>
                    <small> University of Huddersfield, UK</small>
                </article>

                <article className='about_card'>
                    <FiUsers className='about_icon'/>
                    <h5>Graduated</h5>
                    <small> First-Class degree with two awards</small>
                </article>

                <article className='about_card'>
                    <VscFolderLibrary className='about_icon'/>
                    <h5>Course</h5>
                    <small> Web programming with Cyber Security BSC</small>
                </article>
              </div>
                
                <h4 className='welcome'>Welcome!</h4>   
                  <p> My name is Bence Nyitrai,  
                    My name is Bence Nyitrai, and I recently graduated with First Class Honours in Web Programming with Cybersecurity from the University of Huddersfield, UK. 
                    During my studies, I was awarded the Departmental Prize for the Best Web and Information Systems Student and the Best Overall Performance on the Final Year Project in Web and Information Systems. 
                    I have one year of professional experience as a Junior Software Developer at Cortex, based in the Channel Islands. 
                    Throughout my studies and professional career, I have gained hands-on experience in both front-end and back-end development using C#, Blazor, JavaScript, and SQL.
                    I enjoy solving complex problems, building high-quality software, and continuously improving through real-world projects and teamwork. 
                    I am now seeking new opportunities where I can continue to grow as a software developer. 
                    If you're interested in connecting or have any questions, feel free to reach out. 
                    Thanks for visiting my portfolio, and I look forward to hearing from you!
                  </p>
              
          </div>
      </div>

    </section>
  )
}

export default About
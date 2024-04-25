import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import{AiOutlineHtml5} from 'react-icons/ai'
import{FaCss3Alt} from 'react-icons/fa'
import{TbBrandJavascript} from 'react-icons/tb'
import{FaBootstrap} from 'react-icons/fa'
import{SiTailwindcss} from 'react-icons/si'
import{BiLogoWordpress} from 'react-icons/bi'
import{SiWebflow} from 'react-icons/si'
import{FaReact} from 'react-icons/fa'
import{TbBrandNextjs} from 'react-icons/tb'
import{BiLogoNodejs} from 'react-icons/bi'
import{BiLogoMongodb} from 'react-icons/bi'
import{LiaPhp} from 'react-icons/lia'
import{GrMysql} from 'react-icons/gr'
import{SiMicrosoftexcel} from 'react-icons/si'
import{FaImages} from 'react-icons/fa'
import{FiPackage} from 'react-icons/fi'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>The Skills I Have?</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
            <article className='experience_details'>
                  <AiOutlineHtml5 className='experience_details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <FaCss3Alt className='experience_details-icon'/>
                  <div>
                    <h4>CSS</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <TbBrandJavascript className='experience_details-icon'/>
                <div>
                  <h4>Javascript</h4>
                </div>
            </article>
            <article className='experience_details'>
                  <FaBootstrap className='experience_details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <SiTailwindcss className='experience_details-icon'/>
                  <div>
                  <h4>Tailwind</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <BiLogoWordpress className='experience_details-icon'/>
                  <div>
                  <h4>WordPress</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <SiWebflow className='experience_details-icon'/>
                  <div>
                  <h4>WebFlow</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <FaReact className='experience_details-icon'/>
                  <div>
                  <h4>React</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <TbBrandNextjs className='experience_details-icon'/>
                  <div>
                  <h4>NextJS</h4>
                  </div>
            </article>
      
        </div>
      </div>

      <div className="experience_backend">
      <h3>Backend Development</h3>
        <div className="experience_content">
            <article className='experience_details'>
                  <BiLogoNodejs className='experience_details-icon'/>
                <div>
                   <h4>NodeJS</h4>
                </div>
            </article>
            <article className='experience_details'>
                  <BiLogoMongodb className='experience_details-icon'/>
                 <div>
                 <h4>MongoDB</h4>
                 </div>
            </article>
            <article className='experience_details'>
                  <LiaPhp className='experience_details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  </div>
            </article>
            <article className='experience_details'>
                  <GrMysql className='experience_details-icon'/>
                 <div>
                 <h4>MySQL</h4>
                 </div>
            </article>
            <article className='experience_details'>
                 <div>
                 <h4>C#</h4>
                 </div>
            </article>
        </div>
      </div>

      <div className="experience_backend extra-margin">
      <h3>Data Analysis</h3>
        <div className="experience_content">
            <article className='experience_details'>
                  <SiMicrosoftexcel className='experience_details-icon'/>
                <div>
                   <h4>Excel</h4>
                </div>
            </article>
            <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                <div>
                   <h4>R</h4>
                </div>
            </article>
           
        </div>
      </div>

      <div className="experience_backend extra-margin">
      <h3>Cyber Security</h3>
        <div className="experience_content">
            <article className='experience_details'>
                  <FiPackage className='experience_details-icon'/>
                <div>
                   <h4>Packet Tracer</h4>
                </div>
            </article>
            <article className='experience_details'>
                  <FaImages className='experience_details-icon'/>
                <div>
                   <h4>FTK Imager</h4>
                </div>
            </article>
           
        </div>
      </div>

    </div>
    </section>
  )
}

export default Experience
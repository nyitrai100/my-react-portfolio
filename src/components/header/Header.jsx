import React from 'react'
import './Header.css'
import CTA from './CTA'

const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Bence Nyitrai</h1>
      <h5 className='text-light'>Web Developer</h5>
      <CTA />
    </div>
   </header>  
  )
}

export default header
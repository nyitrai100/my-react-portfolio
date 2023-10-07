import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { useState } from 'react'


const data= [
  {
    avatar: AVTR1,
    name: 'avatar1',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis tempora accusamus mollitia cupiditate error, magni eveniet nihil maiores ratione.'
  },
  {
    avatar: AVTR2,
    name: 'avatar2',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis tempora accusamus mollitia cupiditate error, magni eveniet nihil maiores ratione.'
  },
  {
    avatar: AVTR3,
    name: 'avatar3',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis tempora accusamus mollitia cupiditate error, magni eveniet nihil maiores ratione.'
  },
  {
    avatar: AVTR4,
    name: 'avatar4',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis tempora accusamus mollitia cupiditate error, magni eveniet nihil maiores ratione.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5>
      <h2> Testimonials </h2>

      <div className="container testimonials_container">
          { 
          data.map(({avatar, name, review}, index )=>{ 
          return(
            <article key={index} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
        </article>
          )
        })
        }
           
      </div>
    </section>
  )
}

export default Testimonials
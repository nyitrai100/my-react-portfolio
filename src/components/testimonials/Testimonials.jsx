import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {  Navigation, Pagination,} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



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

      <Swiper className="container testimonials_container"
        modules={[Navigation, Pagination,]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        
      >
          { 
          data.map(({avatar, name, review}, index )=>{ 
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
        </SwiperSlide>
          )
        })
        }
           
      </Swiper>
    </section>
  )
}

export default Testimonials
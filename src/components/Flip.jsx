import React from 'react'
import About1 from '../assets/about1.jpeg'
import About2 from '../assets/about2.jpeg'
import About3 from '../assets/about3.jpeg'
import About4 from '../assets/about4.jpeg'
import About5 from '../assets/about5.jpeg'
import About6 from '../assets/about6.jpeg'
import About7 from '../assets/about7.jpeg'
import About8 from '../assets/about8.jpeg'
import About9 from '../assets/about9.jpeg'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import "swiper/css/effect-cards";

import { Autoplay } from "swiper";
import { Link } from 'react-router-dom';


const Flip = () => {
  const cards = [About1, About2, About3,About4,About5,About6,About7, About8, About9]
  return (
    <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 500,
          disableOnInteraction: false
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className='newSwiper'
        >
          {
          cards.map((item, index) => {
            return <SwiperSlide key={item}>
              <Link to='/works'>
                <img src={item} alt="name" />
              </Link>
            </SwiperSlide>
          })
          }
    </Swiper>
  )
}

export default Flip
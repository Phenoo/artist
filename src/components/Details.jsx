import React from 'react'

import { Pagination, Navigation } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


import ExhibitCard from './ExhibitCard'
import ButtonComponent from './ButtonComponent'

import Item1 from '../assets/exhibition1.jpeg'
import Item2 from '../assets/exhibition2.jpeg'
import Item3 from '../assets/exhibition3.jpeg'

const Details = () => {
  
  const items = [
    {
      id: '01',
      nature: 'in progress',
      name: 'paint and mit - in flagella sumre',
      duration: 'nov 4 2022 - nov 11 2022',
      location: 'lagos',
      venue: 'matero ikeja',
      photo: Item1,
    },
    {
      id: '02',
      nature: 'in progress',
      name: 'signin monalisco',
      duration: 'dec 12 2022 - dec 20 2022',
      location: 'awka',
      venue: 'st. patrick parish',
      photo: Item2,
    },
    {
      id: '03',
      nature: 'in progress',
      name: 'christmas play - art, magic and more. ',
      duration: 'dec 26 2022 - jan 1 2023',
      location: 'abuja',
      venue: 'asokro valley',
      photo: Item3,
    },
  ]

  return (
    <div className='details'>
      <section className='grid'>
        <div className='header'>
          <h4 className='headline'>
            exhibitions
          </h4>
          <p className='tophead'>
            Making “sculpture” also means being able to change the dynamics of a place.
          </p>
          <ButtonComponent link='exhibition' item='all exhibtions' />
        </div>
        <div>
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={'auto'}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
          {
            items.map((item, index) => {
              return (
                <SwiperSlide className='slide'>
                  <ExhibitCard key={item.id} item={item} />
                </SwiperSlide>
              )
            })
          }
          </Swiper>

        </div>
      </section>
    </div>
  )
}

export default Details
import React from 'react'
import Flip from './Flip'
import Logo from './Logo'
import { BsFillPaletteFill } from 'react-icons/bs'

const Description = () => {
  return (
    <div className='roos'>
      <section className='grid'>
        <div>
          <Logo />
          <div className="divider"></div>
          <p className="tophead">
            GODSON is a nigerian company that works in the field of applied art specially Painting and Drawing. 
            We create unforgettable experiences that connect and enrich people's lives.
          </p>
          <p className="tophead grey">
            Art is never finished, only abandoned.
          </p>
          <div className='star-svg'>
            <BsFillPaletteFill />
          </div>
        </div>
        <Flip />
      </section>
    </div>
  )
}

export default Description
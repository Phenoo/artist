import React from 'react'

// import {client} from '../lib/client'

import ButtonComponent from './ButtonComponent'

import BgVideo from '../assets/Untitled.mp4'
import { BsFillPaletteFill } from 'react-icons/bs'

const Showcase = () => {

  return (
    <div className="showcase">
        <video src={BgVideo} autoPlay loop muted />
        <div className='overlay center'>
          <h4 className="headline">
            artworks
          </h4>
          <div className="divider"></div>
          <p className='tophead'>
            From a material that power contains all the shapes, i bring out only one, and therein is the responsibility of the artist.
          </p>
          <ButtonComponent link='works' item='all artworks' />
        </div>
        <section>
          <div className='star-svg'>
            <BsFillPaletteFill />
          </div>
        </section>
    </div>
  )
}

export default Showcase
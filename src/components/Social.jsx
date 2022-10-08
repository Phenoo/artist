import React from 'react'
import {FaTiktok, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='social'>
      <ul>
        <li>
          <a href='#a'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='#a'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href='#a'>
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a href='#a'>
            <FaTiktok />
          </a>
        </li>
      </ul>
  </div>  )
}

export default Social
import React from 'react'
import {FaTiktok, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Social = () => {

  return (
    <motion.div className='social'
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition: {duration: 0.5}}}
    >
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
  </motion.div>  )
}

export default Social
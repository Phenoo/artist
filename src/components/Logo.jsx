import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Logo = () => {
  return (
    <motion.div className='logo'
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
    >
      <Link to='/'>
        <h4>
          godson
        </h4>
      </Link>
    </motion.div>
  )
}

export default Logo
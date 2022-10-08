import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <h4>
          godson
        </h4>
      </Link>
    </div>
  )
}

export default Logo
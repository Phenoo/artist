import React from 'react'

import { BsFillArrowDownRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';



const ButtonComponent = ({item, link}) => {
  return (
    <Link to={link}>
      <button className='button'>
        <div>
          <p>
            {item}
          </p>
        </div>
        <div>
          <BsFillArrowDownRightCircleFill />
        </div>
      </button>
    </Link>
  )
}

export default ButtonComponent
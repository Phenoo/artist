import React from 'react'

import { BsFillArrowDownRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {useArtContext} from '../lib/context'



const ButtonComponent = ({item, link}) => {
  const {scrollTo} = useArtContext()

  return (
    <Link to={link}>
      <button className='button' onClick={scrollTo}>
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
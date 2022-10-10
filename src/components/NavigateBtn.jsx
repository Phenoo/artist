import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'

const NavigateBtn = ({item}) => {
  const navigate = useNavigate();


  return (
      <button className='navigate-btn' onClick={navigate(`${item}`)}>
        <span>
          <BsFillArrowLeftCircleFill />
        </span>
        <span>
          back
        </span>
      </button>
  )
}

export default NavigateBtn
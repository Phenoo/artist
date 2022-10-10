import React from 'react'
import { useNavigate} from 'react-router-dom'

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'


const NavigateBtn = () => {
  const navigate = useNavigate();

  const handleNavigate = ({link, text}) => {
    navigate(`${link}`);
  }
  return (
    <button onClick={handleNavigate} className='navigate-btn'>
      <span>
        <BsFillArrowLeftCircleFill color={navigate.color} />
      </span>
      <span>
        back
      </span>
    </button>  
  )
}

export default NavigateBtn
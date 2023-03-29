import React from 'react'
import Description from '../components/Description'
import Details from '../components/Details'
import Home from '../components/Home'
import Message from '../components/Message'
import Showcase from '../components/Showcase'
import AnimatedCom from '../components/AnimatedCom'
import Market from '../components/Market' 

const Main = () => {

  return (
    <>
      <AnimatedCom>
        <Home />
        <Description />
        <Details />
        <Showcase />
        <Market />  
        <Message />
      </AnimatedCom>
    </>
  )
}

export default Main
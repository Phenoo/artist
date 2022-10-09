import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import Social from './Social'

import {motion} from 'framer-motion'
import { useAnimations } from './useAnimations'



const Container = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 0;
position: relative;
`


const MenuList = styled.div`

.social{
  display: none;
}

li{
  font-size: 1.25rem;
}
@media(max-width: 57em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  max-height: 100vh;
  overflow-y: hidden;
  z-index: 10;
  margin: 0;
  padding: 0;
  padding: 3rem 2rem;
  background-color: #111;
  transform: ${props => props.click ? 'translateX(0)' : 'translateX(1000%)'};
  transition: all 0.6s ease;
  overflow-y: hidden;
  overflow-x: hidden;

  .social{
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;


    li{
      font-size: 1rem;
    }
  }
}

.nav-list{
  display: flex;
  gap: 1rem;

  @media(max-width: 57em){
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
  }
}

li{
  text-transform: uppercase;
  font-family: "Poppins";
  transition: 300ms ease;
  overflow: hidden;

  &:hover {
    color: #f53b3b;
    transition: 300ms ease;
  }

  @media(max-width: 57em){
    font-size: 2rem;

    @media(max-width: 25em){
      font-size: 1.5rem;
    }
  }

}

`

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(1);
  const { transition, textReveal } = useAnimations();
  

  const handleClick = () => {
    setClick(!click);
  }








  return (
    <section id='nav'>
      <Container>
        <Logo />
        <MenuList click={click}>
          <motion.ul onClick={handleClick} className='nav-list'
            initial={{
              y: -600,
              transition: {type: 'spring', duration: 1, delay: .5}
            }}
            animate={{
              y: 0
            }}
          >
            <motion.li id="home"
              variants={textReveal}
              initial='bananin'
              whileInView='bananon'
              transition={{...transition, delay: 0.1}}
            >
              <Link to='/' onClick={() => setCurrent(1)} className={current === 1 ? 'active' : ''}>
                home
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              whileInView='bananon'
              transition={{...transition, delay: 0.2}}
            >
              <Link to='/about' onClick={() => setCurrent(2)} className={current === 2 ? 'active' : ''}>
                about
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              whileInView='bananon'
              transition={{...transition, delay: 0.3}}>
              <Link to='/works' onClick={() => setCurrent(3)} className={current === 3 ? 'active' : ''}>
                works
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              whileInView='bananon'
              transition={{...transition, delay: 0.4}}>
              <Link to='/contact' onClick={() => setCurrent(4)} className={current === 4 ? 'active' : ''}>
                contact
              </Link>
            </motion.li>
          </motion.ul>
          {click && <Social /> }

        </MenuList>
        <button onClick={handleClick} className={`menu-btn ${click ? 'active' : ''}`}> 
          <div className="first"></div>
          <div className='sec'></div>
        </button>

      </Container>
    </section>
  )
}

export default Navigation
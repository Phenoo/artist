import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'
import Social from './Social'

import {motion} from 'framer-motion'
import { useAnimations } from './useAnimations'
import { BsFillPaletteFill } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { useArtContext } from '../lib/context'




const Container = styled.nav`
position: fixed;
top: 0;
width: 100vw;
background: #edecec;

overflow: hidden;
z-index: 100;

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

`


const MenuList = styled.div`
display: flex;
gap: 1em;
align-items: center;
.paint{
  display: none;
  @media(max-width: 57em){
    display: flex;
    
  }
}

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
  z-index: 10;
  margin: 0;
  padding: 3rem 2rem;
  background: #edecec;
  transform: ${props => props.click ? 'translateX(0)' : 'translateX(1000%)'};
  transition: all 0.6s ease;
  overflow: hidden;
  touch-action: none;

  a{
    font-family: "Lobster Two";
  }

  .space-between{
    width: 85%;
    margin: 0 auto;
    position: absolute;
    bottom: 20px;

    svg{
      color: #000;
    }
  }

  .social{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;


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
    gap: 1.5rem;
  }
}

li{
  text-transform: uppercase;
  transition: 300ms ease;
  overflow: hidden;

  a{
    font-family: "Lobster Two";
    font-weight: light;
    cursor: pointer;
  }

  &:hover {
    color: #f53b3b;
    transition: 300ms ease;
  }

  @media(max-width: 57em){
    font-size: 2rem;
    .paint{
      display: flex;
    }
    

    @media(max-width: 500px){
      font-size: 1.25rem;
    }
  }

}


`

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(1);
  const { transition, textReveal } = useAnimations();
  const [fixed, setFixed] = useState('');
  const navRef = useRef();
  const {totalQuantities, showCart, setShowCart} = useArtContext()
  


  useEffect(() => {

    const windowScroll = () => {
      let windowHeight = window.scrollY
  
      if(windowHeight > 500){
        setFixed('fixed');
      } else{
        setFixed('')
      }
    }

    window.addEventListener('scroll', windowScroll);
  })

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <div id='nav'>

      <Container ref={navRef} className={`${fixed}`}>
        <section className='container'>

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
              animate='bananon'
              transition={{...transition, delay: 0.1}}
            >
              <Link to='/' onClick={() => setCurrent(1)} className={current === 1 ? 'active' : ''}>
                home
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              animate='bananon'
              transition={{...transition, delay: 0.2}}
            >
              <Link to='/about' onClick={() => setCurrent(2)} className={current === 2 ? 'active' : ''}>
                about
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              animate='bananon'
              transition={{...transition, delay: 0.3}}
            >
              <Link to='/works' onClick={() => setCurrent(3)} className={current === 3 ? 'active' : ''}>
                artworks
              </Link>
            </motion.li>

            <motion.li
              variants={textReveal}
              initial='bananin'
              animate='bananon'
              transition={{...transition, delay: 0.4}}>
              <Link to='/exhibition' onClick={() => setCurrent(4)} className={current === 4 ? 'active' : ''}>
                exhibition
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              animate='bananon'
              transition={{...transition, delay: 0.5}}
              >
              <Link to='/shop' onClick={() => {
                setCurrent(5)
              }} 
                className={current === 5 ? 'active' : ''}>
                shop
              </Link>
            </motion.li>
            <motion.li
              variants={textReveal}
              initial='bananin'
              animate='bananon'
              transition={{...transition, delay: 0.6}}>
              <Link to='/contact' onClick={() => setCurrent(6)} className={current === 6 ? 'active' : ''}>
                contact
              </Link>
            </motion.li>
          </motion.ul>
          {/* <div className="">
            <button onClick={() => setShowCart(!showCart)} className='bag'> 
              <FaShoppingBag /> 
              <span>
                {totalQuantities}
              </span>
            </button>
        </div> */}
          {click && 
            <div className="space-between">
              <Social /> 
              <div className="paint">
                <BsFillPaletteFill />                
              </div>
            </div>
          }
        </MenuList>
        <button onClick={handleClick} className={`menu-btn ${click ? 'activ' : ''}`}> 
          <div className="first"></div>
          <div className='sec'></div>
        </button>
        </section>
      </Container>

    </div>
    
  )
}

export default Navigation


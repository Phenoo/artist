import React from 'react'

import Logo from './Logo'
import Social from './Social'


const Footer = () => {
  return (
    <footer>
      <section className='footer-container space-between'>
        <Social />
        <div>
          <p>
            Copyright &copy; - All rights reserved 
          </p>
        </div>
        <Logo />
      </section>
    </footer>
  )
}

export default Footer
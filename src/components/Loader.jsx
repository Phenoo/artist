import React from 'react'
import Logo from './Logo'

const Loader = () => {
  return (
    <section className="loader-container">
      <div className="loader">
        <span className="hour"></span>
        <span className="min"></span>
        <span className="circle1"></span>
      </div>
      <Logo />
    </section>
  )
}

export default Loader
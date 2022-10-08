import React from 'react'

import Item from '../assets/item3.jpeg'
import FormComponent from './FormComponent'

const Message = () => {
  return (
    <div className="message">
      <section className="grid">
        <div>
          <img src={Item} alt="contact" />
        </div>
        <FormComponent />
      </section>
    </div>
  )
}

export default Message
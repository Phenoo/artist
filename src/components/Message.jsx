import React from 'react'

import Item from '../assets/item2.jpeg'
import FormComponent from './FormComponent'

const Message = () => {
  return (
    <div className="message">
      <section className="grid">
        <FormComponent />
        <div>
          <img src={Item} alt="contact" />
        </div>
      </section>
    </div>
  )
}

export default Message
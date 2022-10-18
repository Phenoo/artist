import React from 'react'

import Item from '../assets/item2.jpeg'
import FormComponent from './FormComponent'

const Message = () => {
  return (
    <div className="message">
      <section>
        <div className="center">
          <h4 className="headline">
            contact
          </h4>
          <div className="divider"></div>
        </div>
        <div className="grid">
          <FormComponent />
          <div>
            <img src={Item} alt="contact" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Message
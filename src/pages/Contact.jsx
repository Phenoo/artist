import React from 'react'
import FormComponent from '../components/FormComponent'

import Item from '../assets/item3.jpeg'

const Contact = () => {
  return (
    <div className="contact">
      <section>
        <div className="center">
          <div className="divider"></div>
          <h4 className="headline">
            contact us
          </h4>
        </div>
        <div className='grid'>
          <FormComponent />
          <div>
            <img src={Item} alt="contact" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
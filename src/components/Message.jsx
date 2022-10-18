import React from 'react'

import Item from '../assets/item2.jpeg'
import FormComponent from './FormComponent'
import {useArtContext} from '../lib/context'

const Message = () => {
  const {setTotalQuantities, totalQuantities} = useArtContext()
  console.log(totalQuantities)
  return (
    <div className="message">
      <section>
        <button onClick={() => setTotalQuantities(2)}>
          click
        </button>
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
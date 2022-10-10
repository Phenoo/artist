import React from 'react'
import FormComponent from '../components/FormComponent'

import Item from '../assets/item3.jpeg'

import AnimatedCom from '../components/AnimatedCom'

import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'


const Contact = () => {
  return (
    <AnimatedCom>
      <div className="contact">
        <section>
          <div className="center">
            <div className="divider"></div>
            <h4 className="headline">
              contact us
            </h4>
          </div>
          <div className="contact-details">
          <h6>
            contact details
          </h6>
          <div>
            <span>
              <AiOutlineMail />
            </span>
            <p>
            davidobilo9@gmail.com
            </p>
          </div>
          <div>
            <span>
              <AiOutlinePhone />
            </span>
            <p>
            +234 705 075 9896
          </p>
          </div>
          <div>
            <span>
              <GoLocation />
            </span>
            <p>
              Location: Lagos, Nigeria
            </p>
          </div>
        </div>
        <h4 className="tophead">
          Send Us Message
        </h4>
          <div className='grid'>
            <FormComponent />
            <div>
              <img src={Item} alt="contact" />
            </div>
          </div>
        </section>
      </div>
    </AnimatedCom>
  )
}

export default Contact
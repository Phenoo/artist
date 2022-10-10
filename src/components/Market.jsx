import React from 'react'

import Bag from '../assets/bag.webp'

import ButtonComponent from './ButtonComponent'

import {SiVisa, SiPaypal, SiStripe, SiBit, SiAmazonpay} from 'react-icons/si'

const Market = () => {
  return (
    <div className="market">
      <section>
      <div className="service grid">
        <div className="div">
        <h4 className="headline">
            shop
          </h4>
          <div className="divider"></div>
            <p>
              Here in Godson, we offer have one of the largest marketplace in the world and offer
              print-on-demand services to our customers. we have sold over 50+ wall art, apparel and other applied art products
              since 2018.

              <br />
              <br />

              With just few clicks, you can get your preferred artworks delivered to your house at an 
              affordable price.
              <br />
              <br />
            </p>
            <div className='payment'>
              <p>
                We process payments with :
              </p>
                <span>
                  <SiVisa />
                </span>
                <span>
                  <SiPaypal />
                </span>
                <span>
                  <SiStripe />
                </span>
                <span>
                  <SiAmazonpay />
                </span>
                <span>
                  <SiBit />
                </span>
              </div>

            

            <ButtonComponent link='shop' item='Shop now' />
        </div>
        <div className="div">
          <img src={Bag} alt="bag" />
        </div>
        </div>
      </section>
    </div>
  )
}

export default Market
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { urlFor } from '../lib/client';
import { useArtContext } from '../lib/context'

const Checkout = () => {
  const {totalPrice, cartItems} = useArtContext();
  const publicKey = 'pk_test_bd6ad0e416813de2f7b7cd3e0fbee6636483b886';
  const amount = totalPrice;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');



  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Buy Now',
    onSuccess: () => {
      alert(
        `Your purchase was successful! Transaction reference`
      );
    },
    onClose: () => alert("Wait! You need it!"),
  };

  return (
    <div className="check">
      <div className="cent">
        <div className="divider"></div>
        <h4 className="headline">
          checkout
        </h4>
      </div>
      <section className="container">
        <div className="item">
          {
            cartItems.map((item) => {
              return <article key={item._id} className="item-article"> 
                  <img src={urlFor(item.image)} alt='product' />
                  <p>{item.quantity} pcs of {item.name}</p>
              </article>
            })

          }
        </div>
        <div className="checkout">
          <form className="checkout-form">
            <div className="checkout-field">
              <label>Name </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="checkout-field">
              <label>Email </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="checkout-field">
              <label>Phone </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="item-details">
              <p className="item-details__amount">Amount: <span>${amount}</span></p>
            </div>
            <div className="item-details">
              <PaystackButton className="paystack-button" {...componentProps} type='submit' />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

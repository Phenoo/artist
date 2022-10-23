import React, { useRef } from 'react'
import { urlFor } from '../lib/client';
import { useArtContext } from '../lib/context'
import { AiOutlineMinus, AiOutlinePlus,} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';


const Cart = () => {
  const cartRef = useRef();

  const {showCart, setShowCart, totalQuantities, cartItems, totalPrice, onRemove, toggleCartItemQuanitity } = useArtContext();
  
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className='cart-container'>
        <div className="flex">
          <button onClick={() => setShowCart(!showCart)} className='btn'>
            Back
          </button>
          <h3>
            {totalQuantities} Items
          </h3>
        </div>
      {
            cartItems.length < 1 && (
              <div className="no-cart">
                <FaShoppingBag />
                <h4>
                  Your cart is Empty
                </h4>
                <p>
                  Looks like you haven't added anything to your cart yet
                </p>
              </div>
            )
          }
        <div className='cart-items'>
          {
            cartItems && 
            cartItems.map(item => {
              return  <>
                <article className="item" key={item._id}>
                    <div className="image">
                      <img src={urlFor(item.image)} alt='product' />
                    </div>
                    <div className="text">
                      <div className='space-between'>
                        <div>
                          <h4>{item.name}</h4>
                        </div>
                        <div>
                          <p>
                            ${item.Price}
                          </p>
                        </div>
                      </div>
                      <div className="space-between">
                          <div>
                            <div className="quantity">
                              <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') } >
                                <AiOutlineMinus />
                              </span>
                              <span className="qty">
                                {item.quantity}
                              </span>
                              <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }>
                                <AiOutlinePlus />
                              </span>
                            </div>
                          </div>
                          <div>
                            <button onClick={() => onRemove(item)} className='delete-btn'>
                              <TiDeleteOutline />
                            </button>
                          </div>
                      </div>
                    </div>
                  </article>
                </>
            })
          }
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total space-between">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <Link to='/check'>
                <button type="button" className="btn" onClick=''>
                  Pay
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
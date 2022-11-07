import React, { useEffect, useState } from 'react'
import { FaShoppingBag, FaStar } from 'react-icons/fa';
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'
import Loader from '../components/Loader'


import {useArtContext} from '../lib/context'
import Cart from '../components/Cart';

const ShopSingle = () => {
  const [single, setSingle] = useState(null);
  const {slug} = useParams();
  const { setSelectType, showCart,setShowCart, totalQuantities, qty, onAdd} = useArtContext();

  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;
    const post = await client.fetch(query);
    setSingle(post);

  }
  useEffect(() => {
    fetchSingleData();
  })

  const handleBuy = (product, quantity) => {
    onAdd(product, quantity);
    setShowCart(true)
  }

  
  if (!single) {
    return <Loader />
  }


  return (
    <div className='shop-single'>
      <section>
          <div className="cent">
            <div className="divider"></div>
          </div>
        <article>
          {
            single && single.map(product => {
              return (
                <article className="single-project" key={product.slug}>
                  <div className='center'>
                  <div className="shopping-button">
                    <button onClick={() => setShowCart(!showCart)} className='shopping-bag'> 
                      <FaShoppingBag /> 
                      <span>
                        {totalQuantities}
                      </span>
                    </button>
                  </div>
                    <div className='text flex'>
                      <h4 className='headline'>
                        {product.name}
                      </h4>
                    </div>
                    <div className="image">
                      <img src={urlFor(product.image)} alt="project" />
                    </div>
                  </div>
                  <div className="infox">
                    <div className="svg">
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <FaStar color="orange" />
                      <p>
                        (46)
                      </p>
                    </div>
                  </div>
                  <div className='infox'>
                    <h4 className='headline'>
                      description
                    </h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor nim id est laborum.
                    </p>
                  </div>
                  <div className="flex">
                    <div className='infox'>
                      <h4 className='headline'>
                        price
                      </h4>
                      <h6 className='headline'>
                        ${product.Price}
                      </h6>
                    </div>
                    <div className='infox'>
                      <h4 className='headline'>
                        Potrait type
                      </h4>
                      <select name="select" id=""
                        onChange={(e) => setSelectType(e.target.value)}
                      >
                        <option value="0">Select an option : </option>
                        <option value="1">Canvas Print (USD 50.9 5)</option>
                        <option value="2">Digital File (USD 62.95)</option>
                        <option value="3">Matte Art Print(USD 73.95)</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="btn" type='submit' onClick={() => onAdd(product, qty)}>
                      add to cart
                    </button>
                    <button className="btn-white" type='submit' onClick={() => handleBuy(product, qty)}>
                      buy now
                    </button>
                  </div>
                </article>
              )
            })
          }
        </article>
        {showCart && <Cart />}
      </section>
    </div>
  )
}

export default ShopSingle
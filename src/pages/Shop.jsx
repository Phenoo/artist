import React from 'react'
import AnimatedCom from '../components/AnimatedCom'
import ShopCard from '../components/ShopCard'
import Loader from '../components/Loader'
import {useArtContext} from '../lib/context'
import Cart from '../components/Cart'





const Shop = () => {
  const {activeFilter, handleWorkFilter, categories, filterWork, showCart} = useArtContext();

  if (filterWork.length < 1) {
    return <section className='work'>
            <Loader />
          </section>
  }
  return (
    <>
    {showCart && <Cart />}
    <AnimatedCom>
      <div className="shop">
        <section>
          <div className="cent">
            <div className="divider"></div>
              <h4 className="headline">
                shop
              </h4>
              <p className="tophead grey">
                Buy your preferred artworks here 
              </p>
          </div>

          <div className="button-filter">
            {categories &&
              categories.map((item, index) => {
                return (
                  <button key={index} className={`filter-btn ${activeFilter === item ? 'active' : ''}`} onClick={() => handleWorkFilter(item)}>
                    {item}
                  </button>
                )
              })
            }
          </div>
          <div className="marketplace">
          {filterWork &&
            filterWork?.map(
              (product) => <ShopCard key={product._id} product={product} />
            )
          }
          </div>
        </section>
      </div>
    </AnimatedCom>
    </>

  )
}

export default Shop
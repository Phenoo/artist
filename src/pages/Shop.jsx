import React from 'react'
import AnimatedCom from '../components/AnimatedCom'
import ShopCard from '../components/ShopCard'
import Loader from '../components/Loader'
import {useArtContext} from '../lib/context'





const Shop = () => {
  const {activeFilter, handleWorkFilter, categories, filterWork } = useArtContext();

  if (filterWork.length < 1) {
    return <section className='work'>
            <Loader />
          </section>
  }
  return (
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
            {
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
          {
            filterWork?.map(
              (item) => <ShopCard key={item._id} item={item} />
            )
          }
          </div>
        </section>
      </div>
    </AnimatedCom>
  )
}

export default Shop
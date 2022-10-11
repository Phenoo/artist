import React, { useEffect, useState } from 'react'
import {client} from '../lib/client'
import AnimatedCom from '../components/AnimatedCom'
import ShopCard from '../components/ShopCard'
import Loader from '../components/Loader'




const Shop = () => {
  const [posts, setPosts] = useState([]);


  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])

  if (posts.length < 1) {
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
            </div>
          <div className="marketplace">
          { posts &&
                posts?.map(
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
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import {  useParams} from 'react-router-dom'
import {client, urlFor} from '../lib/client'
import Loader from '../components/Loader'



const ShopSingle = () => {
  const [single, setSingle] = useState(null);
  const {slug} = useParams();

  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;
    const post = await client.fetch(query);
    setSingle(post);

  }
  useEffect(() => {
    fetchSingleData();
  })

  
  if (!single) {
    return <Loader />
  }


  return (
    <div className='shop'>
      <section>
        <article>
          {
            single && single.map(item => {
              return (
                <article className="single-project">
                  <div className='center'>
                    <div className='text'>
                      <h4 className='headline'>
                        "{item.name}"
                      </h4>
                    </div>
                    <div className="image">
                      <img src={urlFor(item.image)} alt="project" />
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
                        ${item.year /20}
                      </h6>
                    </div>
                    <div className='infox'>
                      <h4 className='headline'>
                        Potrait type
                      </h4>
                      <select name="select" id="">
                        <option value="0">Select an option : </option>
                        <option value="1">Canvas Print (USD 50.95 - USD 52.55)</option>
                        <option value="2">Digital File (USD 62.95 - USD 63.25)</option>
                        <option value="3">Matte Art Print(USD 73.95 - USD 74.25)</option>
                      </select>
                    </div>
                    <div className='info'>
                      <h4 className='headline'>
                        Potrait size
                      </h4>
                      <select name="select" id="">
                        <option value="0">Select an option : </option>
                        <option value="1">5x10 (USD 10.95 - USD 12.55)</option>
                        <option value="2">5x10 (USD 12.95 - USD 13.25)</option>
                        <option value="3">5x10 (USD 13.95 - USD 14.25)</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn" type='submit'>
                    add to cart
                  </button>
                </article>
              )
            })
          }
        </article>
      </section>
    </div>
  )
}

export default ShopSingle
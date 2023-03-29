import React from 'react'
import {urlFor} from '../lib/client'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useArtContext } from '../lib/context';
import {  AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';

const ShopCard = ({product}) => {
  const {scrollTo} = useArtContext()
  return (
    <motion.article 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      className='shop-card'>
      <Link to={`/shops/${product.slug.current}`} onClick={() =>scrollTo()}>
        <div className="shop-image">
          <img src={urlFor(product.image)} alt='project-item' />
        </div>
      </Link>
        <div className='shop-text'>
          <h4>
            {product.name}
          </h4>
          <h6>
            #{product.category}
          </h6>
          <div className="space-between">
            <p>${product.Price}</p>
            <button>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
    </motion.article>
  )
}

export default ShopCard
import React from 'react'
import {urlFor} from '../lib/client'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useArtContext } from '../lib/context';

const ShopCard = ({item}) => {
  const {scrollTo} = useArtContext()
  return (
    <motion.article 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      className='shop-card'>
      <Link to={`/shops/${item.slug.current}`} onClick={() =>scrollTo()}>
        <div className="shop-image">
          <img src={urlFor(item.image)} alt='project-item' />
        </div>
      </Link>
        <div className='shop-text'>
          <h6>
            {item.name}
          </h6>
          <p>${item.year / 20}</p>
        </div>
    </motion.article>
  )
}

export default ShopCard
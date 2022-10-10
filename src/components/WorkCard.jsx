import React from 'react'
import {urlFor} from "../lib/client.js";
import { Link, useNavigate } from 'react-router-dom';
import {useArtContext} from '../lib/context'


import { motion } from "framer-motion";


const WorkCard = ({item}) => {
  const navigate = useNavigate();
  const {scrollTo} = useArtContext()
  return (
    <motion.article 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      className='work-card' onClick={() => navigate(`/work/${item.slug.current}`)}>
      <Link to={`/work/${item.slug.current}`} onClick={() =>scrollTo()}>
        <img src={urlFor(item.image)} alt='project-item' />
        <div className='overlay center'>
          <h4>
            {item.name}
          </h4>
            <div className='divider'></div>
            <p>{item.year}</p>
        </div>
      </Link>
    </motion.article>
  )
}

export default WorkCard
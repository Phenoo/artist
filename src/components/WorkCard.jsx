import React from 'react'
import {urlFor} from "../lib/client.js";
import { Link, useNavigate } from 'react-router-dom';
import {useArtContext} from '../lib/context'

const WorkCard = ({item}) => {
  const navigate = useNavigate();
  const {scrollTo} = useArtContext()
  return (
    <article className='work-card' onClick={() => navigate(`/work/${item.slug.current}`)}>
      <Link to={`/work/${item.slug.current}`} onClick={() =>scrollTo()}>
        <img src={urlFor(item.image)} alt='project-item' />
        <div className='overlay center'>
          <h4>
            {item.name}
            <div className='divider'></div>
            <p>{item.year}</p>
          </h4>
        </div>
      </Link>
    </article>
  )
}

export default WorkCard
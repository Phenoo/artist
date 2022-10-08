import React from 'react'
import {urlFor} from "../lib/client.js";
import { Link } from 'react-router-dom';

const WorkCard = ({item}) => {
  return (
    <article className='work-card'>
      <Link to={`/work/${item.slug.current}`}>
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
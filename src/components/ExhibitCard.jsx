import React from 'react'

import {GoLocation} from 'react-icons/go'

const ExhibitCard = ({item: {nature, name, duration,location, venue, photo }}) => {
  return (
    <article className='exhibit-card'>
      <img src={photo} alt={name} />
      <div  className='space-between between overlay'>
        <div>
          <span  className='nature'>
            {nature}
          </span>
        </div>
        <div>
          <h6>{duration}</h6>
          <h4>{name}</h4>
          <h5> <GoLocation /> {location}</h5>
          <p>{venue}</p>
        </div>
      </div>
    </article>
  )
}

export default ExhibitCard
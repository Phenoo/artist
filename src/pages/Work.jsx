import React, {useEffect, useState} from 'react'
import WorkCard from '../components/WorkCard';
import {client} from '../lib/client'


const Work = () => {
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='work'>
      <section>
        <p className='tophead'>
          The aim of art is to represent not the outward appearance of things, but their inward significance
        </p>
        <h6>
          - Aristotle
        </h6>
      <div className="work-container">
        { posts &&
            posts?.map(
              (item) => <WorkCard key={item._id} item={item} />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default Work
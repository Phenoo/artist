import React, {useEffect, useState} from 'react'
import Loader from '../components/Loader';
import WorkCard from '../components/WorkCard';
import {client} from '../lib/client'


const Work = () => {
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
    return <Loader />
  }
  return (
    <div className='work'>
      <section>
        <div className="center">
          <div className="divider"></div>
          <h4 className="headline">
            our works
          </h4>
        </div>
        <p className='tophead'>
          " The aim of art is to represent not the outward appearance of things, but their inward significance. "
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
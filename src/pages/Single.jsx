import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {client, urlFor} from '../lib/client'

import {GoLocation} from 'react-icons/go'
import {AiOutlineCalendar} from 'react-icons/ai'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import WorkCard from '../components/WorkCard'
import Loader from '../components/Loader'


const Single = () => {
  const [single, setSingle] = useState(null);
  const [filterWork, setFilterWork] = useState([]);
  const {slug} = useParams();
  const navigate = useNavigate();

  const fetchSingleData = async () => {
    const query = `*[slug.current == "${slug}"]`;
    const post = await client.fetch(query);
    setSingle(post);

  }
  useEffect(() => {
    fetchSingleData();
  })



  const fetchSimilarData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setFilterWork(post.filter(item =>  item.category === 'Fiction'));
  }
  useEffect(() => {
    fetchSimilarData();
  })

  if (!single) {
    return <Loader />
  }

  const handleNavigate = () => {
    navigate('/works')
  }

  return (
    <section className='single'>
      <button onClick={handleNavigate} className='navigate-btn'>
        <span>
          <BsFillArrowLeftCircleFill />
        </span>
        <span>
          all works
        </span>
      </button>
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

              <div className='info'>
                <h4 className='headline'>
                  description
                </h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className='information'>
                <h4 className='headline'>
                  information
                </h4>
                <div className='information-container' >
                  <div>
                    <h6>
                      dimensions
                    </h6>
                    <p>
                      {item.size}
                    </p>
                  </div>
                  <div>
                    <h6>
                      materials
                    </h6>
                    <p>
                      {item.material && item.material.join(" , ")}
                    </p>
                  </div>
                  <div>
                    <h6>
                      category
                    </h6>
                    <p>
                      {item.category}
                    </p>
                  </div>
                  <div>
                    <h6>
                      year
                    </h6>
                    <p>
                      {item.year}
                    </p>
                  </div>

                </div>
              </div>
              <div className='information'>
                <h4 className='headline'>
                works exhbited at:
                </h4>
                <div className='column' >
                  <div>
                    <h6>
                      possagano (tv)
                    </h6>
                  </div>
                  <div className='flex'>
                    <span><GoLocation /></span>
                    <span>Palazzo Bonaparte</span>
                  </div>
                </div>
                <div className='flex'>
                    <span><AiOutlineCalendar /></span>
                    <span>from 12 MAR 2022 to 03 JUL 2022</span>
                  </div>
              </div>
              <div className='information'>
                <h4 className='headline'>
                  similar works:
                </h4>     
                <div className='wrap'>
                  { filterWork &&
                    filterWork?.map(
                      (item) => <WorkCard key={item._id} item={item} />
                    )
                  }
                </div>
              </div>
            </article>
          )
        })
      }
      </article>
    </section>
  )
}

export default Single
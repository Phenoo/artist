import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import NavigateBtn from '../components/NavigateBtn';
import {client, urlFor} from '../lib/client'


const About = () => {
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const query = '*[_type == "abouts"]';
    const post = await client.fetch(query);
    setPosts(post);
  }
  useEffect(() => {
    fetchData();
  }, [])

  if (!posts) {
    return <section className='work'>
            <NavigateBtn link='/' />
            <Loader />
          </section>
  }
  return (
    <div className='about'>
      <section>
        <div className="center">
          <div className="divider"></div>
          <h4 className="headline">
            about us
          </h4>
        </div>
        <div className="about-body">
        { posts &&
            posts?.map(
              (item) => {
                return (
                  <div>
                    <h4 className="aboutname">
                      {item.name}
                    </h4>
                    <p className="aboutdesc">
                      {item.description}
                    </p>
                    <div>
                      <img src={urlFor(item.image)} alt='project-item' />
                    </div>
                    <div className="cert">
                      <h4 className="headline">
                        certifications
                      </h4>
                      <h6>
                        {/* {item.certname} */}
                      </h6>
                      <p>
                        {/* {item.place} */}
                      </p>
                    </div>
                  </div>
                )
              }
            )
          }
        </div>
        <div className="wantus">
          <h4 className="tophead">
            Want us to work together? <a href="mailto:descometusah@gmail.com">Contact us</a>
          </h4>
        </div>
      </section>
    </div>
  )
}

export default About
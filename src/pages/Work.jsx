import React from 'react'
import Loader from '../components/Loader';
import WorkCard from '../components/WorkCard';
import AnimatedCom from '../components/AnimatedCom'
import {useArtContext} from '../lib/context'

const Work = () => {
    const {activeFilter, handleWorkFilter, categories, filterWork } = useArtContext();


  if (filterWork.length < 1) {
    return <section className='work'>
            <Loader />
          </section>
  }
  return (
    <AnimatedCom>
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
          <div className="button-filter">
            {
              categories.map((item, index) => {
                return (
                  <button key={index} className={`filter-btn ${activeFilter === item ? 'active' : ''}`} onClick={() => handleWorkFilter(item)}>
                    {item}
                  </button>
                )
              })
            }
          </div>
        <div className="work-container">
          {
              filterWork?.map(
                (item) => <WorkCard key={item._id} item={item} />
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
    </AnimatedCom>
  )
}

export default Work
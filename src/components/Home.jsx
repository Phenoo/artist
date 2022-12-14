import React from 'react'
import BgVideo from '../assets/bgvideo.mp4'


const Home = () => {
  return (
    <div className="home">
      <video src={BgVideo} autoPlay loop muted />
      <div className="overlay center">
        <h2>
          To create one's own world takes takes courage
          {/* There are painters who ransform the sun to a yellow spot, but there are others who with
          the help of their art and their intelligence, transform a yellow spot into sun. */}
        </h2>
        <p>
          - georgia o'keffie
        </p>
      </div>
    </div>
  )
}

export default Home
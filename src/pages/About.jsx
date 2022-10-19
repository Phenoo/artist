import BgVideo from '../assets/about.mp4'
import Wantus from '../components/Wantus';

const About = () => {
  return (
    <div className='about'>
      <div className="home">
          <video src={BgVideo} autoPlay loop muted />
          <div className="overlay center">
            <h2>
              There are painters who ransform the sun to a yellow spot, but there are others who with
              the help of their art and their intelligence, transform a yellow spot into sun.
            </h2>
          </div>
      </div>
      <section>
        <div className="about-body">
          <p>
            <span>godson  </span>   
                is orem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit temporibus iusto quo molestias ad cum officia, quas et adipisci ipsum nihil deleniti eligendi assumenda minima amet quasi nam nesciunt recusandae. Assumenda distinctio, eum aliquid voluptates cupiditate eius laborum vitae expedita eveniet doloribus amet vel ratione eligendi temporibus minima reiciendis quia neque ad aspernatur accusamus. Harum dignissimos sunt porro magni, explicabo, sequi minima repellat, in molestias accusantium incidunt impedit ipsa.
          </p>
          <h4 className="headline">
            "Art is an expression of love"
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam sunt rerum pariatur inventore libero, incidunt corrupti officiis! Quis libero aspernatur commodi pariatur quo. Quo earum molestiae omnis saepe nesciunt repellendus eum voluptate, a, voluptates ratione et distinctio expedita molestias.
          </p>
        </div>
        <div className="information">
          <h4 className="headline">
            collective exhibitions
          </h4>
          <div className="info">
            <p>
              <em>2020</em> "Paint nd Sip, The Exhibition", Palazzo, Rome, Italy.
            </p>
            <p>
              <em>2019</em> "Godson, The Exhibition", Palazzo, Rome, Italy.
            </p>
          </div>
        </div>
        <div className="information">
          <h4 className="headline">
            personal exhibitions
          </h4>
          <div className="info">
            <p>
              <em>2020</em> "Godson, The Exhibition", Palazzo, Bonaparte, Italy.
            </p>
            <p>
              <em>2019</em> "Godson, The Exhibition", Palazzo, Bonaparte, Italy.
            </p>
          </div>
        </div>
        <div className="information">
          <h4 className="headline">
            awards
          </h4>
          <div className="info">
            <p>
              <em>2020</em> "Culture and identity" Award, Anagni, Italy.
            </p>
            <p>
              <em>2019</em> "Culture and identity" Award, Anagni, Italy.
            </p>
          </div>
        </div>
        <div className="information">
          <h4 className="headline">
            course and lesson
          </h4>
          <div className="info">
            <p>
            <em>2018</em> master class, tokyo academy of art, new york, japan.
            </p>
            <p>
              <em>2019</em> master class, new york academy of art, new york, usa.
            </p>
          </div>
        </div>
        <Wantus />
        
      </section>
    </div>
  )
}

export default About
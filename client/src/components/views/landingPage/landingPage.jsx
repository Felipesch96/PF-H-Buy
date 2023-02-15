import styles from "./landingPage.module.css";
import Carousel from "../home/Carousel"

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div>
        <div className="bg-dark bg-opacity-50">
          <h1 className="text-center">Welcome to H-Buy</h1>
        </div>
        <div className="card" style={{width:"250px"}}>
          <img
            src="https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-charcoal-gallery-01.png?v=1"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <Carousel/>
        <p>
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit. Aut,
          <br /> excepturi esse nemo
          <br /> similique nobis incidunt molestias hic <br /> beatae assumenda
          sequi inventore reprehen
          <br />
          derit laudantium eveniet fugiat repellat
          <br />, natus culpa impedit in!
        </p>
        <p>
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit. Aut,
          <br /> excepturi esse nemo
          <br /> similique nobis incidunt molestias hic beatae assumenda sequi
          inventore reprehen
          <br />
          derit laudantium eveniet fugiat repellat
          <br />, natus culpa impedit in!
        </p>
        <p>
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit. Aut,
          <br /> excepturi esse nemo
          <br /> similique nobis incidunt molestias hic beatae assumenda sequi
          inventore reprehen
          <br />
          derit laudantium eveniet fugiat repellat
          <br />, natus culpa impedit in!
        </p>
        <p>
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit. Aut, excepturi esse nemo
          similique nobis incidunt molestias hic <br /> beatae assumenda sequi
          inventore reprehen
          <br />
          derit laudantium eveniet fugiat repellat
          <br />, natus culpa impedit in!
        </p>
        <a href="/home">
          <button type="button" class="btn btn-secondary text-center col-6 p-3">
            Ir al Home.
          </button>
        </a>

        <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPage;

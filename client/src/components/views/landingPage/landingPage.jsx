import styles from "./landingPage.module.css";
import random from "./negro.jpg";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div>
        <h1>Hola, Esta es la landing page</h1>
        <a href="#about">
          <button>Sobre Nosotros</button>
        </a>
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
          <br /> similique nobis incidunt molestias hic <br /> beatae assumenda
          sequi inventore reprehen
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
        <button type="button" class="btn btn-secondary text-center col-6 p-3">
          Ir al Home.
        </button>
        <br />
        <br />
      </div>
      <div className="bg-black ">
        <h1>Sobre Nosotros</h1>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rounded float-start">
          <div>
            <img src={random} alt="no se carga" style={{borderRadius:"100px"}} />
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez"><img src={random} alt="" /> </a>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
          <div>
            <img src={random} alt="no se carga" className="rounded" />
            <h3>Emiliano Hernandez</h3>
          </div>
        </div>
        <h1 id="about">Fin</h1>
      </div>
    </div>
  );
};

export default LandingPage;

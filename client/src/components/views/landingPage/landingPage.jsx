import styles from "./landingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <div>
        <div className="row row-cols-3 g-1 bg-dark bg-opacity-50">
          <br />
          <br />
          <br />
        <a href="#about" className="text-center"> 
          <button>Sobre Nosotros</button>
        </a>
        <h1 className="text-center">Bienvenidos a H-Buy</h1>
        </div>
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
          <br /> similique nobis incidunt molestias hic beatae assumenda
          sequi inventore reprehen
          <br />
          derit laudantium eveniet fugiat repellat
          <br />, natus culpa impedit in!
        </p>
        <p>
          Lorem ipsum dolor sit
          <br /> amet consectetur adipisicing elit. Aut,
          <br /> excepturi esse nemo
          <br /> similique nobis incidunt molestias hic beatae assumenda
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
        <a href="/home"><button type="button" class="btn btn-secondary text-center col-6 p-3">
          Ir al Home.</button></a>

        <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPage;

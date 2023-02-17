import avatar from "./media/avatar.jpg";
import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
import styles from "./landingPage.module.css";

const About = () => {
  return (
    <div className={styles.landing}>
      <div>
        <div className="bg-dark bg-opacity-50">
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
      <div className="bg-success-subtle">
        <h1 className="text-center">Sobre Nosotros</h1>
        <div
          className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rounded float-start"
          style={{ textAlign: "center" }}
        >
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Emiliano Hernandez</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Cesar Leyton</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Jhoan Alvarez</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Lara Onyskiw</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Nicolas Iconicoff</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Cristopher Lazo</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Felipe Schwindt</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={avatar}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
            />
            <h5>Francisco Cia</h5>
            <a href="https://github.com/emijhernandez">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/emijhernandez">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
        </div>
        <h1 className="text-center">Team</h1>
      </div>
    </div>
  );
};

export default About;

import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
// import styles from "./landingPage.module.css";
import logo from "./media/logoHenry.png";
import "./About.css";
const About = () => {
  return (
    <div className="landing">
      <div class="container pt-4">
        <h1 className="text-center bg-info rounded-3 title">About of H-Buy</h1>
        <div class="row ">
          <div class="col ">
            <img
              src={logo}
              class="img-fluid w-100 h-100 position-relative top-50 start-50 translate-middle"
              alt="card-horizontal-image"
            />
          </div>
          <div class=" bg-dark bg-opacity-25 col border rounded-5 p-3">
            <h2 className="text-center rounded-2 subtitle">
              ¿Que es H-buy? <i class="bi bi-shop"></i>
            </h2>
            H-Buy es una plataforma en línea que permite a los usuarios realizar
            compras de productos o servicios de manera virtual.
            <br />
            <br />
            <h2 className="text-center rounded-2 subtitle">
              ¿Que nos ofrece H-buy?
            </h2>
            A través de esta plataforma los clientes pueden buscar y seleccionar
            los productos que desean adquirir, agregarlos a su carrito de
            compras y realizar el pago de manera segura utilizando diferentes
            medios de pago electrónicos.
            <br />
            <br />
            Además, H-Buy puede incluir funciones adicionales como filtros
            <br />
            de búsqueda, recomendaciones personalizadas, reseñas de productos,
            <br />
            seguimiento de envíos y servicio al cliente en línea.
            <br />
            <br />
            En resumen, es una alternativa práctica y conveniente
            <br />
            para hacer compras desde cualquier lugar con acceso a internet, sin
            <br />
            necesidad de acudir a una tienda física.
            <br />
          </div>
          <div class="bg-dark bg-opacity-25 border rounded-5 p-2 mb-3">
            <br />
            <h2 className="text-center bg-info rounded-2 title">
              ¿Que mas ofrecemos?
            </h2>
            <br />
            <ul>
              <li>
                Catálogo de productos: nosotros presentamos un catálogo de
                productos con fotos,
                <br /> descripciones y precios para que los clientes puedan
                explorar los productos y realizar su selección.
              </li>
              <li>
                Carrito de compras: el carrito de compras es una herramienta que
                permite a los clientes <br />
                agregar productos a su pedido y luego hacer el pago en una sola
                transacción.
              </li>
              <li>
                Procesamiento de pagos: ofrecemos diferentes métodos de pago en
                línea, como tarjeta de <br />
                crédito, PayPal, transferencia bancaria, entre otros, para
                facilitar el proceso de compra.
              </li>
              <li>
                Seguridad en línea: tambien implementamos medidas de seguridad
                para
                <br /> proteger la información personal y financiera de los
                clientes, como encriptación de datos, <br />
                autenticación de usuario, y seguridad en el procesamiento de
                pagos.
              </li>
              <li>
                Servicio al cliente: nuestro equipo ofrece servicios de atención
                al cliente en línea, <br />
                como chat en vivo, correo electrónico o teléfono, para resolver{" "}
                <br />
                cualquier duda o problema que puedan tener los clientes.
              </li>
              <li>
                Envío y entrega: nosotros ofrecemos diferentes opciones
                <br /> de envío, incluyendo la entrega a domicilio, recogida en
                tienda, envío express, entre otros.
              </li>
              <li>
                Evaluaciones y reseñas: los clientes pueden dar su opinión sobre
                los productos que <br />
                han comprado a través de evaluaciones
                <br /> y reseñas en línea, lo que puede ayudar a otros clientes
                en su proceso de compra.
              </li>
            </ul>
            En general, H-Buy busca ofrecer una experiencia de compra fácil,
            rápida y segura para los clientes en
            <br /> línea, lo que puede ayudar a las empresas a llegar a un
            público más amplio y a aumentar sus ventas.
            <br />
          </div>
        </div>
      </div>

      <div className="bg-success-subtle">
        <h1 className="text-center">TEAM</h1>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 rounded  text-center">
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
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
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Cesar Leyton</h5>
            <a href="https://github.com/Cesarleops">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/Cesarleops">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Jhoan Alvarez</h5>
            <a href="https://github.com/jackira01">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/jackira01">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Lara Onyskiw</h5>
            <a href="https://github.com/laraonys">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/laraonys">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Nicolas Iconicoff</h5>
            <a href="https://github.com/Nicoiconi">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/Nicoiconi">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Cristopher Lazo</h5>
            <a href="https://github.com/Cristopher-99">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/Cristopher-99">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Felipe Schwindt</h5>
            <a href="https://github.com/Felipesch96">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/Felipesch96">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
          <div>
            <img
              src={github}
              alt="no se carga"
              className="border border-dark border-2 rounded-circle"
              style={{ width: "150px" }}
            />
            <h5>Francisco Cia</h5>
            <a href="https://github.com/FranciscoCia">
              <img src={linkedin} alt="" style={{ width: "50px" }} />{" "}
            </a>
            <a href="https://github.com/FranciscoCia">
              <img src={github} alt="" style={{ width: "50px" }} />{" "}
            </a>
          </div>
        </div>
        <br />-
      </div>
    </div>
  );
};

export default About;

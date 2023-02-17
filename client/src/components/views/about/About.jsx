import avatar from "./media/avatar.jpg";
import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
import styles from "./landingPage.module.css";

const About = () => {
  return (
    <div className={styles.landing}>
      <div>
        <div className="bg-dark bg-opacity-50">
          <h1 className="text-center">About of H-Buy</h1>
        </div>
        <h6>
          H-Buy es una plataforma en línea que permite a los usuarios
          <br />
          realizar compras de productos o servicios de manera virtual.
          <br />
          <br />
          A través de esta plataforma, los clientes pueden buscar y seleccionar
          <br />
          los productos que desean adquirir, agregarlos a su carrito de compras
          <br />
          y realizar el pago de manera segura utilizando diferentes medios de
          pago electrónicos.
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
          <br />
          ¿Que mas ofrecemos?
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
              permite a los clientes <br />agregar productos a su pedido y luego
              hacer el pago en una sola transacción.
            </li>
            <li>
              Procesamiento de pagos: ofrecemos diferentes métodos de pago en
              línea, como tarjeta de <br />crédito, PayPal, 
              transferencia bancaria, entre otros, para facilitar el proceso de
              compra.
            </li>
            <li>
              Seguridad en línea: tambien implementamos medidas de seguridad
              para<br /> proteger la información personal y financiera de los
              clientes, como encriptación de datos, <br />autenticación de usuario, y
              seguridad en el procesamiento de pagos.
            </li>
            <li>
              Servicio al cliente: nuestro equipo ofrece servicios de atención
              al cliente en línea, <br />como chat en vivo, 
              correo electrónico o teléfono, para resolver <br />cualquier duda o
              problema que puedan tener los clientes.
            </li>
            <li>
              Envío y entrega: nosotros ofrecemos diferentes opciones
              <br /> de envío, incluyendo la entrega a domicilio, recogida en
              tienda, envío express, entre otros.
            </li>
            <li>
              Evaluaciones y reseñas: los clientes pueden dar su opinión sobre
              los productos que <br />han comprado a través de evaluaciones
              <br /> y reseñas en línea, lo que puede ayudar a otros clientes en
              su proceso de compra.
            </li>
          </ul>
          En general, H-Buy busca ofrecer una experiencia de compra fácil,
          rápida y segura para los clientes en
          <br /> línea, lo que puede ayudar a las empresas a llegar a un público
          más amplio y a aumentar sus ventas.
        </h6>
        <br />
      </div>
      <div className="bg-success-subtle">
        <h1 className="text-center">TEAM</h1>
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
        <h1 className="text-center">
          -<hr />
        </h1>
      </div>
    </div>
  );
};

export default About;

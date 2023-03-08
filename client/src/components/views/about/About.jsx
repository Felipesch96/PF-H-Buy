import linkedin from "./media/linkedin.png";
import github from "./media/github.png";
// import styles from "./landingPage.module.css";
import logo from "./media/logoHenry.png";
import "./About.css";
//
const About = () => {
  return (
    <div className="landing">
      <div class="container pt-4">
        <h1 className="text-center bg-info rounded-3 title">About H-Buy</h1>
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
              ¿What's H-buy? <i class="bi bi-shop"></i>
            </h2>
            H-Buy it's an online platform that allows users to purchase products or services.
            <br />
            <br />
            <h2 className="text-center rounded-2 subtitle">
              ¿What does H-buy offer you?
            </h2>
            Through this platform customers can search and select the products they want to buy, add them to cart and pay for them safelly using different payment methods.
            <br />
            <br />
            Besides that, H-Buy includes additional functions like searching filters,
            <br />
            personal recommendations, product reviews, 
            <br />
            shipment tracking and online customer support
            <br />
            <br />
            To sum up, it's a practical and convinient alternative
            <br />
            to purchase what you need from any place with internet connection, 
            <br />
            without having to attend to a fisical store.
            <br />
          </div>
          <div class="bg-dark bg-opacity-25 border rounded-5 p-2 mb-3">
            <br />
            <h2 className="text-center bg-info rounded-2 title">
              ¿What else do we offer?
            </h2>
            <br />
            <ul>
              <li>
                Catalogue: we present you a list of products with pictures, description and prices for the customers to explore and choose according to their needs.
                
              </li>
              <li>
                Cart: this is the section that allows customers to add products to their wish list and pay for it easly.
              </li>
              <li>
                Payment processing: we offer different payment methods online, like credit or debit card, wire transfer or PayPal, to make the purchase easier.
              </li>
              <li>
                Safety: we have safety protocols implemented with the goal of keeping your personal and finatial information safe, like data encryption, <br />  users authentication and safety on the payment proccessing.
              </li>
              <li>
                Customer service: our team offers online customer service, like live chat, email or by phone to answer,
                 <br />
                any doubt or problem that a client can run into. 
              </li>
              <li>
                Shipping and delivery: we offer different shippment options, including
                Envío y entrega: nosotros ofrecemos diferentes opciones
                <br /> delivery, store pickup, express delivery, etc.
              </li>
              <li>
                Reviews: customers can give it's opinion on the product they have purchased through reviews,
                <br /> feature that can help other clients on their purchases
              </li>
            </ul>
            H-Buy hopes to offer an easy, fast and safe experience to it's users.
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

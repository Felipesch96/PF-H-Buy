import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import About from "./components/views/about/About";
import DetailProduct from "./components/views/DetailProduct/DetailProduct";
import Footer from "./components/views/footer/Footer";
import Home from "./components/views/home/Home";
import Payment from "./components/views/payment/payment";
import ProductsPage from "./components/views/productsPage/ProductsPage";
import ProfileComponent from "./components/views/profiles/profileComponent/ProfileComponent";
import Shipping from "./components/views/Shipping/Shipping";
import ShoppingCart from "./components/views/ShoppingCart/ShoppingCart";
import { OrderPlacement } from "./components/views/orderPlacement/OrderPlacement";


const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home/products" component={ProductsPage} />
          <Route exact path="/home/profile" component={ProfileComponent} />
          <Route exact path="/home/products/:id" component={DetailProduct} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/shipping" component={Shipping} />
          <Route path="/orderPlacement" component={OrderPlacement} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

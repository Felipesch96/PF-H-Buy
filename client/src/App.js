import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { AddAddress } from "./components/views/addAddress/AddAddress";
import DetailPage from "./components/views/DetailProduct/DetailPage";
import { OrderPlacement } from "./components/views/orderPlacement/OrderPlacement";
import Payment from "./components/views/payment/payment";
import Home from "./components/views/home/Home";
import About from "./components/views/about/About";
import ProductsPage from "./components/views/productsPage/ProductsPage";
import Footer from "./components/views/footer/Footer";
import ProfileComponent from "./components/views/profiles/profileComponent/ProfileComponent";
import ShoppingCart from "./components/views/ShoppingCart/ShoppingCart";
import Shipping from "./components/views/Shipping/Shipping";
import CreateReview from "./components/CreateReview/CreateReview";
import CardLoader from "./components/CardLoader/CardLoader";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/profile" component={ProfileComponent} />
          <Route exact path="/products/:id" component={DetailPage} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/shipping" component={Shipping} />
          <Route path="/orderPlacement" component={OrderPlacement} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/addAddress" component={AddAddress} />
          <Route exact path="/review/:id" component={CreateReview} />
          <Route exact path="/loader" component={CardLoader} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

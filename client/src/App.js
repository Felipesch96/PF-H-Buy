import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loaders/LoaderMain/LoaderMain";
import NavBar from "./components/navBar/NavBar";
import { AddAddress } from "./components/views/addAddress/AddAddress";
import DetailPage from "./components/views/DetailProduct/DetailPage";
import { OrderPlacement } from "./components/views/orderPlacement/OrderPlacement";
import Payment from "./components/views/payment/payment";
const Home = lazy(() => import("./components/views/home/Home"));
const About = lazy(() => import("./components/views/about/About"));
const ProductsPage = lazy(() =>
  import("./components/views/productsPage/ProductsPage")
);
const Footer = lazy(() => import("./components/views/footer/Footer"));
const ProfileComponent = lazy(() =>
  import("./components/views/profiles/profileComponent/ProfileComponent")
);
const ShoppingCart = lazy(() =>
  import("./components/views/ShoppingCart/ShoppingCart")
);
const Shipping = lazy(() => import("./components/views/Shipping/Shipping"));
const CreatedReview = lazy(() =>
  import("./components/CreateReview/CreateReview")
);


const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home/products" component={ProductsPage} />
            <Route exact path="/home/profile" component={ProfileComponent} />
            <Route exact path="/home/products/:id" component={DetailPage} />
            <Route exact path="/shoppingCart" component={ShoppingCart} />
            <Route exact path="/shipping" component={Shipping} />
            <Route path="/orderPlacement" component={OrderPlacement} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/addAddress" component={AddAddress} />
            <Route exact path="/review" component={CreatedReview} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

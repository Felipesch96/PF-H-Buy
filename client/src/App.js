import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Loader from "./components/Loaders/LoaderMain/LoaderMain";
import DetailPage from "./components/views/DetailProduct/DetailPage";
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

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/products/:id" component={DetailPage} />
            <Route exact path="/profile" component={ProfileComponent} />
            <Route exact path="/shoppingCart" component={ShoppingCart} />
            <Route exact path="/shipping" component={Shipping} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

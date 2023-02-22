import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/views/home/Home";
import NavBar from "./components/navBar/NavBar";
import ProductsPage from './components/views/productsPage/ProductsPage';
import Footer from './components/views/footer/Footer';
import LandingPage from './components/views/landingPage/LandingPage';
import About from './components/views/about/About';
import ProfileComponent from './components/views/profiles/profileComponent/ProfileComponent';
import DetailProduct from "./components/views/DetailProduct/DetailProduct";

const App =()=>{

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path='/profile' component={ProfileComponent} />
          <Route exact path="/products/:id" component={DetailProduct} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

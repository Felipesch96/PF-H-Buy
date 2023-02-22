import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/views/home/Home";
import NavBar from "./components/navBar/NavBar";
import ProductsPage from './components/views/productsPage/ProductsPage';
import Footer from './components/views/footer/Footer';
import LandingPage from './components/views/landingPage/index';
import About from './components/views/about/About';
import ProfileComponent from './components/views/profiles/profileComponent/ProfileComponent';
import DetailProduct from "./components/views/DetailProduct/DetailProduct";
import SignUp from "./components/views/signUp/SignUp";
import { Login } from "./components/views/profiles/login";

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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

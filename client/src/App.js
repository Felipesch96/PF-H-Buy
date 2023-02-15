import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/views/home/Home";
import NavBar from "./components/navBar/NavBar";
import ProductsPage from './components/views/productsPage/ProductsPage';
import Footer from './components/views/footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={ProductsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

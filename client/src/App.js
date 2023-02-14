import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

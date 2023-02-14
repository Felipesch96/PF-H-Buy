import './App.css';
import Home from "./components/views/home"

import{
  BrowserRouter as Router,
  Route
}from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Home}/>
      </div>
    </Router>
  );
}

export default App;
  
import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,

 
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";

import About from "./Components/About";
import Home from "./Components/Home";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";



class App extends React.Component {



  render() {
    return (
      <div className="app">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

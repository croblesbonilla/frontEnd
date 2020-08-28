import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute"
import App2 from "./App2"
import WebApp from "./components/WebApp";
import './App.css';


const App = () => {
    return (
        <Router>
        <div className="App">
          <PrivateRoute exact path = '/WebApp' component={WebApp}/>
          <Route exact path="/" component={App2} />
        </div>
      </Router>
    );
  }



export default App;

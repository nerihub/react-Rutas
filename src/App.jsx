import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Base from './components/Base';


function App() {
  return (
    <Router>
    <Link to="/Inicio">Inicio</Link>
    <Link to="/">Base</Link>
      <Switch>
        <Route path="/Inicio">
         <Inicio/>
        </Route>
        <Route path="/">
         <Base/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
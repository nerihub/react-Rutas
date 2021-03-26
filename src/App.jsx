import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Limk,
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Base from './components/Base';


function App() {
  return (
    <Router>
      <Switch>
      // <Route exact path="/">
      //    <Base/>
      //   </Route>
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
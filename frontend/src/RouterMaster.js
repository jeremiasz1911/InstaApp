import './App.css';
import Home from './Guest/Home';
import About from './Guest/About';
import Offert from './Guest/Offert';

import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';


function RouterMaster() {
  return (
      <Router>
          <div>
          {/* guest router */}
          <Route exact path="/" component={Home} />
          <Route exact path="/o-nas" component={About} />
          <Route exact path="/oferta" component={Offert} />

          </div>
      </Router>
  );
}

export default RouterMaster;

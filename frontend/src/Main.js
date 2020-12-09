import './App.css';
import GuestRouter from './Guest/GuestRouter';
import MainCarousel from './components/MainCarousel';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';


function Main() {
  return (
      <Router>
          <div>
          <Route exact path="/" component={GuestRouter} />
          <Route exact path="/caro" component={MainCarousel} />
          </div>
      </Router>
  );
}

export default Main;

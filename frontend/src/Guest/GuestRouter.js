import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function GuestRouter() {
  return (
    <Router>
        <div>
        <Route exact path="/" component={Home} />
        </div>
    </Router>
);
}

export default GuestRouter;

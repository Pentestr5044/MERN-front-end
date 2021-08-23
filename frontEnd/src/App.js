import React from 'react'
import './App.css';
import Home from './pages/Home.';
import enterScreen from './pages/enterScreen';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About';
import Register from './pages/Register';
import NewsLetter from './pages/NewsLetter';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import Coupons from './pages/Coupons';
import Login from './pages/Login';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/" exact component={enterScreen} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Recipes" exact component={Recipes} />
          <Route path="/About" exact component={About} />
          <Route path="/Register" exact component={Register} />
          <Route path="/NewsLetter" exact component={NewsLetter} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Coupons" exact component={Coupons} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Logout" exact component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

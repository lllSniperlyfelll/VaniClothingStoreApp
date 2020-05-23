import React from 'react';
import './App.css';
import './storestyle.css';
import './material.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppNavbar from './Components/Layouts/AppNavbar';



import ProductDetails from './Components/Products/ProductDetails';
import Dashboard from './Components/Layouts/Dashboard';

function App() {
  return (

    <Router>
      <div>
      <AppNavbar/>
        <Switch>
          <Route exact path ="/" component={Dashboard}/>
          <Route exact path ="/product/:id" component={ProductDetails}/>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

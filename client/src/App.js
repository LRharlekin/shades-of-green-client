import React from 'react';
import './App.css';
import { Dashboard } from './containers/Dashboard';
import { Place } from './containers/Place-details';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from './components/Header';
import { FiltersContainer } from './containers/Filters-container';


const API_KEY = 'AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok';

function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/filters/" component={FiltersContainer} />
        <Route path="/place/" component={Place} />
      </div>
    </Router>
  )
}

export default App;



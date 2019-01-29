import React, { Component } from 'react';
import './App.css';
import Layout from '../src/components/Layout';
import NavBar from './components/NavBar'; 
import AddMovie from './components/AddMovie';
import { Route, Switch } from "react-router";
import SeeAllMovies from './components/SeeAllMovies';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/addmovie" component={AddMovie} />
            <Route path="/seealmovies" component={SeeAllMovies} />
          </Switch>
        
      </div>
    );
  }
}

export default App;

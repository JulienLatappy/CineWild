import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><a class="navbar-brand" href="#">CineWild</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item active">
              <Link to="/addmovie"><a class="nav-link">Ajouter un film</a></Link>
            </li>
            <li class="nav-item active">
              <Link to="/seealmovies"><a class="nav-link" href="#">Voir tout les Films</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div> );
  }
}
 
export default NavBar;
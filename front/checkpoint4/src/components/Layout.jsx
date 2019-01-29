import React, { Component } from 'react';
import NavBar from './NavBar';
import Carou from './Carousel';
import { Container, Col, Row } from 'reactstrap';
import MoviesList from './MoviesList';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
     }
  }


componentDidMount(){
  fetch("http://localhost:5000/api/all/")
    .then(response => response.json())
    .then(data => {
      this.setState({
        movies : data
      });
    });
}


  render() { 
    const { movies } = this.state;
    return ( 
    <div>
      <Carou />
      <Container >
        <h1>Voici des Films séléctionnés au hasard !</h1>
        <Row>
          {movies.map(item =>(
            <Col md={6}>
              <MoviesList
                key={item.id}
                nomfilm={item.nom}
                genre={item.genre}
                real={item.réalisateur}
                année={item.année}
                img={item.image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div> );
  }
}
 
export default Layout;
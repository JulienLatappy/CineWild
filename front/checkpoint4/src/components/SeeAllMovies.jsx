import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import DeleteCards from './DeleteCards';
import { Button, Input } from 'reactstrap';


class SeeAllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
     }
   this.handleChange = this.handleChange.bind(this);
  }

handleChange(e){
  if(e.target.value !== ''){ 
  fetch(`http://localhost:5000/api/searchmovie/${e.target.value}`)
  .then(response => response.json())
  .then(data => {
    this.setState ({
      movies: data
    });
  });
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
        <h1>Voici tout les films présent sur la plateforme ! </h1>
       <h2>Ou alors les rechercher !</h2>
        <Container>
          <Input onChange={this.handleChange} className="width" type="text" placeholder="Search..."></Input>
        </Container>  
        <Container >
        <Row>
          {movies.map(item =>(
            <Col md={6}>
              <DeleteCards
                id={item.id}
                nomfilm={item.nom}
                genre={item.genre}
                real={item.réalisateur}
                année={item.année}
                img={item.image} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
     );
  }
}
 
export default SeeAllMovies;
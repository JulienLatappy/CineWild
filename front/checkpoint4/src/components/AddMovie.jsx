import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Alert } from 'reactstrap';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nom: '',
      genre: '',
      réalisateur: '',
      année: '',
      image: '',
      open: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }





  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    const data = {
      nom : this.state.nom,
      genre: this.state.genre,
      réalisateur : this.state.réalisateur,
      année: this.state.année,
      image: this.state.image,
    }
    e.preventDefault();
      fetch("http://localhost:5000/api/addmovie/", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(data)
      })
        .then(res => { 
          if (res.ok) { 
          this.setState ({
            open: true,
          })}
        })
      }

  render() { 
    return ( 
    <div>
      <h1>Ajouter un film </h1>
      <div>
      <Alert isOpen={this.state.open} color="success">
        <h4 className="alert-heading">Bien réalisé !</h4>
        <p>
          Aww yeah, tu as brillemment ajouté un film à la base de donnée !
        </p>
        <hr />
        <p className="mb-0">
          N'hésite pas à en ajouter d'autres pour toujours plus de plan séquence !
        </p>
      </Alert>
    </div>
 
      <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Nom du film</Label>
          <Input 
            type="text" 
            name="nom" 
            onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Genre</Label>
          <Input 
            type="text" 
            name="genre" 
            onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Réalisateur</Label>
          <Input 
            type="text" 
            name="réalisateur" 
            onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Année</Label>
          <Input 
            type="text" 
            name="année" 
            onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Url image</Label>
          <Input 
            type="text" 
            name="image" 
            onChange={this.handleChange}
            />
        </FormGroup>
        <Button 
          onClick={this.handleSubmit}
          color="primary">Submit</Button>
        </Form>
      </Container>
      </div>
    );
  }
}
export default AddMovie ;
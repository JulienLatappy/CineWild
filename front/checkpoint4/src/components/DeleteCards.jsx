import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class DeleteCards extends Component {
  
  
  
  actionDelete() {
    fetch(`http://localhost:5000/api/delmovie/${this.props.id}`, {
      method: "DELETE"
    })
      .then(res => res.text())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert("Film supprimé");
        }
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de la suppression du film");
      });
  }

  render(props) {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="30%"
            top
            height="300px"
            src={this.props.img}
            alt="Card image cap"
          />

          <CardBody>
            <CardTitle>{this.props.nomfilm}</CardTitle>
            <CardSubtitle>{this.props.genre}</CardSubtitle>
            <CardText>
              Réalisé par {this.props.real} en {this.props.année}
            </CardText>
          </CardBody>
          <Button color="primary">Modifier</Button>
          <Button color="danger" onClick={() => this.actionDelete()}>Supprimer</Button>
        </Card>
      </div>
    );
  }
}

export default DeleteCards;

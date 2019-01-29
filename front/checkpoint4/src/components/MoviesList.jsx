import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const MoviesList = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="30%" top height="300px" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.nomfilm}</CardTitle>
          <CardSubtitle>{props.genre}</CardSubtitle>
          <CardText>Réalisé par {props.real} en {props.année}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MoviesList;
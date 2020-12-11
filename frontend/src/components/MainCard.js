import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const MainCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top height="100%" src={props.imgpath} alt={props.imgalt} />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button color="primary">{props.button}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainCard;
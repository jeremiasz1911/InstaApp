import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const MainJumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
  <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>
        <hr className="my-2" />
        <p>{props.desc}</p>
        <p className="lead">
          <Button color="primary">{props.button}</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MainJumbotron;
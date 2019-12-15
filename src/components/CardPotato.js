import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, CardGroup
} from 'reactstrap';
import './CardPotato.scss';

class CardPotato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: this.props.potato
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardImg src={this.state.potato.images[0].url} alt="potato-image" />
            <CardTitle>{this.state.potato.name}</CardTitle>
            <CardText>{this.state.potato.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default CardPotato;

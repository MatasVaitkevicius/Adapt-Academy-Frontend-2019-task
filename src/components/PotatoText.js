import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class PotatoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: this.props.potato
    };
  }

  render() {
    return (
      <CardBody>
        <CardTitle>{this.state.potato.name}</CardTitle>
        <CardSubtitle>{this.state.potato.price}€</CardSubtitle>
        <CardText className="overflow-hidden">{this.state.potato.description}</CardText>
      </CardBody>
    )
  }
}

export default PotatoText;

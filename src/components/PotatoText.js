import React from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './PotatoText.scss'

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
        <CardText>{this.state.potato.description}</CardText>
        <Card>
          <Button className="btn btn-success" >Add to cart</Button>
        </Card>
      </CardBody>
    )
  }
}

export default PotatoText;

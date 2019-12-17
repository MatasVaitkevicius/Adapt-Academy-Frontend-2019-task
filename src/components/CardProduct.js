import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import './CardProduct.scss';

class CardProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: this.props.potato
    };
  }

  render() {
    return (
      <CardBody>
        <CardImg class="card__image" src={this.state.potato.images.length > 0 && this.state.potato.images[0].url} alt="potato-image" />
        <CardTitle>{this.state.potato.name}</CardTitle>
        <CardText className="card__text">{this.state.potato.description}</CardText>
      </CardBody>
    )
  }
}

export default CardProduct;

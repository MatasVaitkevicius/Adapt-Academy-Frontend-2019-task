import React from 'react'
import { withRouter } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, CardGroup
} from 'reactstrap';

class ProductsButton extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `/products`;
    this.props.history.push(path);
  }


  render() {
    return (
      <div>
        <Button onClick={this.routeChange} className="text-white bg-dark" >Shop Now!</Button>
      </div>
    )
  }
}

export default ProductsButton;

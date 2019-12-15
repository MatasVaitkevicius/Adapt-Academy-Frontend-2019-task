import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

class ManagePotato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: this.props.potato
    };
  }

  render() {
    return (
      <Card>
        <CardImg top width="100%" src={this.state.potato.images[0].url} alt="potato-image" />
        <CardBody>
          <CardTitle>{this.state.potato.name}</CardTitle>
          <CardText>{this.state.potato.description}</CardText>
          <Button color="success">Edit</Button>
          <Button color="danger">Delete</Button>
        </CardBody>
      </Card>
    )
  }
}

export default ManagePotato;

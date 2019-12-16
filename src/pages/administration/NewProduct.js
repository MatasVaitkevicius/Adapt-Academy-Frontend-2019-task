import React from 'react'
import './styles.scss'
import CarouselPotato from '../../components/CarouselPotato'
import { Form, FormGroup, Label, Col, Input, FormText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class NewProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.potato ? this.props.potato.id : null,
      name: this.props.potato ? this.props.potato.name : "",
      description: this.props.potato ? this.props.potato.description : "",
      price: this.props.potato ? this.props.potato.price : 0,
      images: this.props.potato && this.props.potato.images ? this.props.potato.images : [],
    }
    this.createProduct = this.createProduct.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  onDeleteImage(image) {
    this.setState({
      images: this.state.images.filter(i => i.id !== image.id)
    })
  }

  createProduct() {
    const product = {
      ...this.state
    }
    this.props.addNewProduct(product)
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    const newId = Math.max(...this.state.images.map(p => p.id))
    reader.onloadend = () => {
      this.setState({
        images: [...this.state.images, { url: reader.result, id: newId ? newId + 1 : 1 }]
      });
    }
    reader.readAsDataURL(file)
  }


  render() {
    const {
      name, description, price, images
    } = this.state

    return (
      <Form>
        <FormGroup row>

          <Col sm={10}>
            <Label className="font-weight-bold" for="exampleTitle">Product name</Label>
            <Input onChange={(e) => this.setState({ name: e.target.value })} value={name} bsSize="lg" type="text" name="text" id="exampleTitle" placeholder="Product name..." />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Label className="font-weight-bold" for="descriptionText">Product description</Label>
            <Input onChange={(e) => this.setState({ description: e.target.value })} value={description} type="textarea" name="text" id="descriptionText" placeholder="Tell me more about the product..." />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Label className="font-weight-bold" for="priceNumber">Product price</Label>
            <Input onChange={(e) => this.setState({ price: e.target.value })} value={price} type="number" name="number" id="priceNumber" placeholder="Product price €..." />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Label className="font-weight-bold" for="potatoFile">Product image</Label>
            <Input onChange={this.handleImageChange} type="file" name="file" id="potatoFile" />
          </Col>
        </FormGroup>
        <Link onClick={() => this.createProduct()} to="/admin" className="btn btn-success">Submit</Link>
        {images.map(i => (
          <>
            <Button onClick={() => this.onDeleteImage(i)}>X</Button> <img src={i.url} height="100" width="100" />
          </>))}
      </Form >
    )
  }
}

export { NewProduct };
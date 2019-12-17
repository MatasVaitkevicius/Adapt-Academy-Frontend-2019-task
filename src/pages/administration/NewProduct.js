import React from 'react'
import './styles.scss'
import CarouselPotato from '../../components/CarouselPotato'
import { Form, FormGroup, Label, Col, Input, Card, Row, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    console.log(this.state.images)
    this.setState({
      images: this.state.images.filter(i => i.id !== image.id)
    })
  }

  createProduct(e) {
    const errors = []

    if (!this.state.name) {
      errors.push("Product name is missing")
    }
    if (!this.state.description) {
      errors.push("Description is missing")
    }
    if(this.state.price <= 0) {
      errors.push("Invalid price")
    }
    if(this.state.images.length === 0) {
      errors.push("Please add an image")
    }
    if (errors.length > 0) {
      e.preventDefault()
      errors.forEach(e => toast.error(e))
    } else {
      this.props.addNewProduct(this.state)
    }
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(this.state.images.length)
    let newId = 1
    if(this.state.images)
    {
      newId = this.state.images.length
    } 
      console.log(newId)
      reader.onloadend = () => {
        this.setState({
          images: [...this.state.images, { url: reader.result, id: newId}]
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
        <Link onClick={this.createProduct} to="/admin" className="btn btn-success">Submit</Link>
        <Container className="text-left">
          <Row>
        {images.map(i => (
          <Card className="form__card">
          <Col>
             <img src={i.url} height="150" width="150" />
             <Button outline color="secondary" onClick={() => this.onDeleteImage(i)}>X</Button>
          </Col>
          </Card>))}
          </Row>
          </Container>
      </Form >
    )
  }
}

export { NewProduct };
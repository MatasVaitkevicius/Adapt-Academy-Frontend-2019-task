import React from 'react'
import CarouselProduct from '../../components/CarouselProduct'
import ProductText from '../../components/ProductText'
import { CardImg, Row, Col, CardGroup, Container, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import TemporaryImage from '../../images/500x350.png'

const Admin = ({ products, onDeleteProduct, setActivePotato }) => (
  <Container>
    <CardGroup>
      <Row xs="4">
        <Card className="product__card">
          <Col>
            <CardBody className="text-center">
              <CardImg top width="100%" src={TemporaryImage} alt="Card image cap" />
              <CardTitle></CardTitle>
              <CardText>Add New Product</CardText>
              <Link onClick={() => setActivePotato()} to="/newproduct" className="btn btn-outline-warning">Create New Product</Link>
            </CardBody>
          </Col>
        </Card>
        {products.map(p =>
          <Card className="product__card">
            <Col>
              <CarouselProduct images={p.images} />
              <ProductText potato={p} />
            </Col>
            <Container className="text-center">
              <Row>
                <Col>
                  <Link onClick={() => setActivePotato(p)} to="/newproduct" className="btn btn-outline-warning">Change</Link>
                </Col>
                <Col>
                  <Link outline color="danger" className="btn btn-outline-danger" onClick={() => onDeleteProduct(p.id)}>Delete</Link>
                </Col>
              </Row>
            </Container>
          </Card>
        )}
      </Row>
    </CardGroup>
  </Container>
);

export { Admin };
import React from 'react'
import CarouselPotato from '../../components/CarouselPotato'
import PotatoText from '../../components/PotatoText'
import { CardImg, Row, Col, Button, CardGroup, Container, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
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
                        <CarouselPotato images={p.images} />
                        <PotatoText potato={p} />
                </Col>
                <Link onClick={() => setActivePotato(p)} to="/newproduct" className="btn btn-outline-warning">Edit</Link>
                <Button outline color="danger" onClick={() => onDeleteProduct(p.id)}>Delete</Button>
                    </Card>
            )}
            </Row>
            </CardGroup>
    </Container>
);

export { Admin };
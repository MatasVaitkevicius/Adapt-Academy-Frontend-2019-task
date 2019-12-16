import React from 'react'
import CarouselPotato from '../../components/CarouselPotato'
import PotatoText from '../../components/PotatoText'
import { CardDeck, Row, Col, Button, CardGroup, Container, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


const Admin = ({ products, onDeleteProduct, setActivePotato }) => (
    <Container>
        <Card className="text-center">
            <CardBody>
                <CardTitle>Create new product</CardTitle>
                <CardSubtitle>Product images to add</CardSubtitle>
                <CardText>Product description to add</CardText>
                <Link to="/newproduct" className="btn btn-outline-warning">Create New Product</Link>
            </CardBody>
        </Card>

        <Row xs="2">
            {products.map(p =>
                <Col>
                    <Card>
                        <CarouselPotato images={p.images} />
                        <PotatoText potato={p} />
                        <Container className="text-center">
                            <Link onClick={() => setActivePotato(p)} to="/newproduct" className="btn btn-outline-warning">Edit</Link>
                            <Button outline color="danger" onClick={() => onDeleteProduct(p.id)}>Delete</Button>
                        </Container>
                    </Card>
                </Col>
            )}
        </Row>
    </Container>
);

export { Admin };
import React from 'react'
import CardPotato from '../../components/CardPotato'
import products from '../../mock/products'
import HomeCarousel from '../../components/HomeCarousel'
import { NavLink, Col, Button, Row, Container, Card, CardGroup } from 'reactstrap';
import './styles.scss'
import { Link } from 'react-router-dom';
import ProductsButton from '../../components/ProductsButton'
const Home = ({ products }) => (
    <div className="card">
        <HomeCarousel />
        <Link to="/products" className="btn btn-dark btn-lg">Shop Now</Link>
        <Container>
            <CardGroup className="card__group">
            <Row xs="2">
                {products.map(p =>
                <Card>
                <Col>
                    <CardPotato potato={p} />
                </Col>
                </Card>
                )}
            </Row>
            </CardGroup>
        </Container>
    </div>
);

export { Home };
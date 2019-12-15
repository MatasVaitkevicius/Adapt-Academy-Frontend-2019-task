import React from 'react'
import CardPotato from '../../components/CardPotato'
import products from '../../mock/products'
import HomeCarousel from '../../components/HomeCarousel'
import { NavLink, Col, Button, Row, Container, NavItem } from 'reactstrap';
import './styles.scss'
import { Link } from 'react-router-dom';
import ProductsButton from '../../components/ProductsButton'
const Home = () => (
    <div className="card">
        <HomeCarousel />
        <Link to="/products" className="btn btn-dark">Sign up</Link>
        <Container>
            <Row xs="2">
                {products.map(p =>
                    <Col>
                        <CardPotato potato={p} />
                    </Col>)}
            </Row>
        </Container>
    </div>
);

export { Home };
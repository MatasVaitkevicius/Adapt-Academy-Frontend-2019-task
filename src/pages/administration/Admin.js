import React from 'react'
import ManagePotato from '../../components/ManagePotato'
import products from '../../mock/products'
import { Card, Col, Button, Row, Container, CardGroup } from 'reactstrap';

const Admin = () => (
    <Container>
        <Row xs="2">
            {products.map(p =>
                <Col>
                    <ManagePotato potato={p} />
                </Col>)}
        </Row>
    </Container>
);

export { Admin };
import React from 'react'
import './styles.scss'
import CarouselPotato from '../../components/CarouselPotato'
import { Button, Card, Container, CardDeck, Col, Row, Badge, CardGroup, CardFooter } from 'reactstrap';
import PotatoText from '../../components/PotatoText'

const countPurchases = (purchases) => purchases.reduce((accu, value) => accu += value.count, 0)

const Products = ({ products, purchases, handleBuyProduct }) => (
    <Container>
        <Container className="text-right">
            <h3>Products bought:<Badge outline color="success">{countPurchases(purchases)}</Badge>🥔</h3>
        </Container>
        <CardGroup>
            <Row xs="3">
            {products.map(p =>
            <Card className="container__card">
            <Col>
                <CarouselPotato images={p.images} />
                    <PotatoText potato={p} />
                        </Col>
                        <Button outline color="success" onClick={() =>
                        handleBuyProduct(p)}>Add to cart</Button>
                        </Card>)}
                </Row>
        </CardGroup>

    </Container>
)

export { Products };
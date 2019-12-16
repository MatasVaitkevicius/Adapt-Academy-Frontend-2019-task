import React from 'react'
import './styles.scss'
import CarouselPotato from '../../components/CarouselPotato'
import { Button, Card, Container, CardDeck, Badge } from 'reactstrap';
import PotatoText from '../../components/PotatoText'

const countPurchases = (purchases) => purchases.reduce((accu, value) => accu += value.count, 0)

const Products = ({ products, purchases, handleBuyProduct }) => (
    <Container>
        <Container className="text-right">
            <h3>Products bought:<Badge outline color="success">{countPurchases(purchases)}</Badge>🥔</h3>
        </Container>
        <CardDeck>
            {products.map(p =>
                <Card>
                    <CarouselPotato images={p.images} />
                    <PotatoText potato={p} />
                    <Button outline color="success" onClick={() =>
                        handleBuyProduct(p)}>Add to cart</Button>
                </Card>)}
        </CardDeck>

    </Container>
)

export { Products };
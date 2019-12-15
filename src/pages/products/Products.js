import React from 'react'
import './styles.scss'
import CarouselPotato from '../../components/CarouselPotato'
import products from '../../mock/products'
import { CardColumns, Card, Col, Row, Container, CardDeck } from 'reactstrap';
import PotateText from '../../components/PotatoText'
const Products = () => (
    <div className="main-container">
        <CardDeck>
            {products.map(p =>
                <Card>
                    <CarouselPotato images={p.images} />
                    <PotateText potato={p} />
                </Card>)}
        </CardDeck>
    </div>
)

export { Products };
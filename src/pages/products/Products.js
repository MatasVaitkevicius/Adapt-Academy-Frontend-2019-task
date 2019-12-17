import React from 'react'
import './styles.scss'
import CarouselProduct from '../../components/CarouselProduct'
import { Button, Card, Container, CardDeck, Col, Row, Badge, CardGroup, CardFooter } from 'reactstrap';
import ProductText from '../../components/ProductText'

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
              <CarouselProduct images={p.images} />
              <ProductText potato={p} />
            </Col>
            <Button outline color="success" className="container__button" onClick={() =>
              handleBuyProduct(p)}>Add to cart</Button>
          </Card>)}
      </Row>
    </CardGroup>
  </Container>
)

export { Products };
import React from 'react'
import { CardTitle, Row, Col, Container, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const countPurchases = (purchases) => purchases.reduce((accu, value) => accu += value.count, 0)

const addAlert = (purchases) => {
  toast.success(`You successfully bought ${countPurchases(purchases)}🥔`);
}

const Purchases = ({ purchases, handleBuyProduct, decreaseProductCount, clearCart }) => (
  <>
    {purchases.length > 0 ? (
      <Container>
        <Row>
          <Col>
            <Table bordered>
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Description
                  </th>
                  <th>
                    Count
                 </th>
                  <th>
                    Increase
                  </th>
                  <th>
                    Decrease
                  </th>
                </tr>
              </thead>
              {purchases.map(p =>

                <tbody>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td className="text-center">{p.count}</td>
                  <td className="text-center">
                    <Button outline color="success" size="lg" onClick={() =>
                      handleBuyProduct(p)}>
                      +
                      </Button>
                  </td>
                  <td className="text-center">
                    <Button outline color="danger" size="lg" onClick={() =>
                      decreaseProductCount(p)}>
                      -
                                             </Button>
                  </td>
                </tbody>
              )}
            </Table>
          </Col>
        </Row>
        <Container className="text-right">
          <Button className="btn btn-success" onClick={() => {
            addAlert(purchases); clearCart();
          }
          }>
            Buy
                    </Button>
          <Button className="btn btn-warning" onClick={() => clearCart()}>
            Clear Cart
                </Button>
        </Container >
      </Container>
    ) : (
        <Container className="text-center">
          <CardTitle>Cart is empty :(</CardTitle>
          <Link to="/products" className="btn btn-success">Shop Now!</Link>
        </Container>
      )}
  </>
)

export { Purchases };
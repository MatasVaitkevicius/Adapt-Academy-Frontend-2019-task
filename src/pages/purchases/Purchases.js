import React from 'react'
import PotatoTable from '../../components/PotatoTable'
import { Card, Row, Col } from 'reactstrap';
const Purchases = () => (
    <div className="potato-table">
        <Row>
            <Col>
                <Card body>
                    <PotatoTable />
                </Card>
            </Col>
        </Row>
    </div>
)

export { Purchases };
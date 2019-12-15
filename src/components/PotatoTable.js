import React from 'react'
import { Table } from 'reactstrap';

class PotatoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: this.props.potato
    };
  }

  render() {
    return (
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <td>MHMM</td>
          <td>YESYES</td>
          <th scope="row">1</th>
          <td>Buy/Sell</td>
        </tbody>
      </Table>
    )
  }
}

export default PotatoTable;

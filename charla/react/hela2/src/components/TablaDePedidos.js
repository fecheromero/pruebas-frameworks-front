import React, { Component } from 'react';
import {Table, Row} from 'react-materialize'
import {Card} from "material-ui";

class TablaDePedidos extends Component {
  render() {
    return (
        <div className="section">
        <Card>
      <Table className="TablaDePedidos">
        { this.props.children }

          <thead>
          <tr>
            <th data-field="pino">Pino</th>
            <th data-field="gusto1">Gusto1</th>
            <th data-field="gusto2">Gusto2</th>
          </tr>
          </thead>

          <tbody>
          {this.props.pedidos.map((pedido)=>
              <tr>
                  <td>{pedido.pino}</td>
                  <td>{pedido.gusto1}</td>
                  <td>{pedido.gusto2}</td>
              </tr>)}
          </tbody>
      </Table>
        </Card>
        </div>
    )
  }
}


export default TablaDePedidos;
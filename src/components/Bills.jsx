import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {roundTo, roundToUp, roundToDown} from 'round-to';

function Bills() {
  const [facturas, setFacturas] = useState([]);
  const [compPend, setCompPend] = useState(0);
  const [compPag, setCompPag] = useState(0);
  const [vendPend, setVendPend] = useState(0);
  const [vendPag, setvendPag] = useState(0);
  const [saldo, setSaldo] = useState(0);

  return (
    <Container>
      <h2 class="text-center margin1">Facturas</h2>

      <Row>
        <Col>
        <h3>Estadísticas Facturas:</h3>
        </Col>
        <Col>
        <h3>Saldo Total: {saldo }</h3>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" >
          <thead>
            <tr >
              <th>Estado Facturas</th>
              <th>Cantidad Facturas</th>
              <th>Porcentaje aprox</th>
            </tr>
          </thead>
          <tbody>

           
            <tr>
              <td>Comprador Pendientes</td>
              <td>{compPend}</td>
              <td>{roundTo(compPend/facturas.length*100, 2)}%</td>

            </tr>
            <tr>
              <td>Comprador Pagadas</td>
              <td>{compPag}</td>
              <td>{roundTo(compPag/facturas.length*100, 2)}%</td>
            </tr>
            <tr>
              <td>Vendedor Pendientes</td>
              <td>{vendPend}</td>
              <td>{roundTo(vendPend/facturas.length*100, 2)}%</td>
            </tr> 
            <tr>
              <td>Vendedor Pagadas</td>
              <td>{vendPag}</td>
              <td>{roundTo(vendPag/facturas.length*100, 2)}%</td>
            </tr>           
          </tbody>
        </Table>
   
      {/* <div>
        <OrdersTable orders={orders}/>
      </div> */}
    </Container>
  );
}
export default Bills;
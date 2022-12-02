import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {roundTo, roundToUp, roundToDown} from 'round-to';
import {datosFacturas} from '../datosFacturas';
import FacturasTable from './FacturasTable';

function Bills() {
  const [facturas, setFacturas] = useState(datosFacturas);
  const [compPend, setCompPend] = useState(0);
  const [compPag, setCompPag] = useState(0);
  const [vendPend, setVendPend] = useState(0);
  const [vendPag, setvendPag] = useState(0);
  const [saldo, setSaldo] = useState(35950.17285200002);
  const [totalComp, setTotalComp] = useState(0);
  const [totalVend, setTotalVend] = useState(0);
  console.log(datosFacturas);


  // Use Effect para actualizar estado 
  useEffect(() => {
    countFacturas();
  }, [facturas]);


  
  
  const countFacturas = () => {
    let compradaPagada = 0;
    let compradaPendiente = 0;
    let vendidaPagada = 0;
    let vendidaPendiente = 0;
    let total_comprador = 0;
    let total_vendedor = 0;

    facturas.forEach(factura => {
      if (factura.client === '7'){
        total_comprador ++;
        if(factura.status === 'paid') {
          compradaPagada++;
        } else if(factura.status === 'pending') {
          compradaPendiente++;
        }
      }else if (factura.supplier === '7'){
        total_vendedor ++;
          if(factura.status === 'paid') {
          vendidaPagada++;
        } else if(factura.status === 'pending') {
          vendidaPendiente++;
        }
      }
    });

    setCompPag(compradaPagada);
    setCompPend(compradaPendiente);
    setvendPag(vendidaPagada);
    setVendPend(vendidaPendiente);

    setTotalComp(total_comprador);
    setTotalVend(total_vendedor);
  }

  // countFacturas();

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
              <th>Porcentaje (de su categoría)</th>
            </tr>
          </thead>
          <tbody>

           
            <tr>
              <td>Comprador Pendientes</td>
              <td>{compPend}</td>
              <td>{roundTo(compPend/totalComp*100, 2)}%</td>

            </tr>
            <tr>
              <td>Comprador Pagadas</td>
              <td>{compPag}</td>
              <td>{roundTo(compPag/totalComp*100, 2)}%</td>
            </tr>
            <tr>
              <td>Vendedor Pendientes</td>
              <td>{vendPend}</td>
              <td>{roundTo(vendPend/totalVend*100, 2)}%</td>
            </tr> 
            <tr>
              <td>Vendedor Pagadas</td>
              <td>{vendPag}</td>
              <td>{roundTo(vendPag/totalVend*100, 2)}%</td>
            </tr>           
          </tbody>
        </Table>
   
      <div>
        <FacturasTable facturas={facturas}/>
      </div>
    </Container>
  );
}
export default Bills;
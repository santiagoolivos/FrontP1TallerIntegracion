import OrdersTable from "./OrdersTable";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {roundTo, roundToUp, roundToDown} from 'round-to';
import {getOrders} from '../requests/getOrders';


function Orders() {
  const [orders, setOrders] = useState([]);
  const [aceptadas, setAceptadas] = useState(0);
  const [recibidas, setRecibidas] = useState(0);
  const [rechazadas, setRechazadas] = useState(0);
  const [completadas, setCompletadas] = useState(0);

  const countOrders = () => {
    let recibidas_cant = 0;
    let aceptadas_cant = 0;
    let rechazadas_cant = 0;
    let completadas_cant = 0;
    const setInitialOrders = async () => {
      const ord = await getOrders();
      console.log(ord);
      setOrders(ord)
      // setOrders(await getOrders())
    }
    setInitialOrders()
    orders.forEach(order => {
      if(order.estado === 'recibida') {
        recibidas_cant++;
      } else if(order.estado === 'aceptada') {
        aceptadas_cant++;
      } else if(order.estado === 'rechazada') {
        rechazadas_cant++;
      } else if(order.estado === 'completada') {
        completadas_cant++;
      }
    });
    setRecibidas(recibidas_cant);
    setAceptadas(aceptadas_cant);
    setRechazadas(rechazadas_cant);
    setCompletadas(completadas_cant)
  }

  return (
    <Container>
      <h2 class="text-center margin1">Ordenes</h2>
      <Row>
        <Col>
        <h3>Estadísticas Ordenes:</h3>
        </Col>
        <Col>
        <button type="button" class="btn btn-dark" onClick={countOrders}>Recalcular</button>
        </Col>
      </Row>
      <Table striped bordered hover variant="dark" >
          <thead>
            <tr >
              <th>Estado Orden</th>
              <th>Cantidad Ordenes</th>
              <th>Porcentaje aprox</th>
            </tr>
          </thead>
          <tbody>

           
            <tr>
              <td>Recibidas</td>
              <td>{recibidas}</td>
              <td>{roundTo(recibidas/orders.length*100, 2)}%</td>

            </tr>
            <tr>
              <td>Aceptadas</td>
              <td>{aceptadas}</td>
              <td>{roundTo(aceptadas/orders.length*100, 2)}%</td>
            </tr>
            <tr>
              <td>Rechazadas</td>
              <td>{rechazadas}</td>
              <td>{roundTo(rechazadas/orders.length*100, 2)}%</td>
            </tr> 
            <tr>
              <td>Completadas</td>
              <td>{rechazadas}</td>
              <td>{roundTo(completadas/orders.length*100, 2)}%</td>
            </tr>           
          </tbody>
        </Table>
   
      <div>
        <OrdersTable orders={orders}/>
      </div>
    </Container>
  );
}
export default Orders;
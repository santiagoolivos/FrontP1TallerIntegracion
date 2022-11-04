import OrdersTable from "./OrdersTable";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {roundTo, roundToUp, roundToDown} from 'round-to';
import {getOrders} from '../requests/getOrders';

const orders = [
  {
    id: 1,
    estado: 'Pendiente',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 2,
    estado: 'Aceptada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Finalizada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Aceptada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Aceptada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Aceptada',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Pendiente',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Pendiente',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Pendiente',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  },
  {
    id: 3,
    estado: 'Pendiente',
    fechaEntrega: '2021-05-01',
    cliente: 'Juan Perez',
    urlNotification: 'Coca Cola',
    cantidad: 10,
    sku: 'Coca Cola' 
  }
]
function Orders() {
  const [orders1, setOrders] = useState([]);
  const [pendientes, setPendientes] = useState(0);
  const [aceptadas, setAceptadas] = useState(0);
  const [finalizadas, setFinalizadas] = useState(0);

  const countOrders = () => {
    let pendientes1 = 0;
    let aceptadas1 = 0;
    let finalizadas1 = 0;
    const setStock = async () => {
      const stocks = await getOrders();
      console.log(stocks);
    }
    setStock()
    orders.forEach(order => {
      if(order.estado === 'Pendiente') {
        pendientes1++;
      } else if(order.estado === 'Aceptada') {
        aceptadas1++;
      } else {
        finalizadas1++;
      }
    });
    setPendientes(pendientes1);
    setAceptadas(aceptadas1);
    setFinalizadas(finalizadas1);
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
              <td>Pendientes</td>
              <td>{pendientes}</td>
              <td>{roundTo(pendientes/orders.length*100, 2)}%</td>

            </tr>
            <tr>
              <td>Aceptadas</td>
              <td>{aceptadas}</td>
              <td>{roundTo(aceptadas/orders.length*100, 2)}%</td>
            </tr>
            <tr>
              <td>Finalizadas</td>
              <td>{finalizadas}</td>
              <td>{roundTo(finalizadas/orders.length*100, 2)}%</td>
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
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';



function OrdersTable({orders}) {
  return (
    <div>
      <h3>Total Ordenes:</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <Table variant="dark" striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Orden ID</th>
              <th>Estado</th>
              <th>Fecha Entrega</th>
              <th>Cliente</th>
              <th>Url de Notificación</th>
              <th>Cantidad</th>
              <th>Sku</th>
            </tr>
          </thead>
          <tbody >

            {orders ? orders.map((order) => (
              <tr>
                <td>{orders.indexOf(order)}</td>
                <td>{order.id}</td>
                <td>{order.estado}</td>
                <td> {order.fechaEntrega}</td>
                <td>{order.cliente}</td>
                <td>{order.urlNotificacion}</td>
                <td>{order.cantidad}</td>
                <td>{order.sku}</td>
              </tr>
            )):
            null}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default OrdersTable;

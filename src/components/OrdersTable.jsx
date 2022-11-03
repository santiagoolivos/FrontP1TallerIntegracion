import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function OrdersTable({ orders }) {
  return (
    <div>
      <h3>Total Ordenes:</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Orden ID</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>

            {/* {orders ? orders.map((stock) => (
              <tr>
                <td>{stock.sku}</td>
                <td>{stock.total}</td>
              </tr>
            )):
            null} */}
          </tbody>
        </Table>
    </div>
  );
}

export default OrdersTable;

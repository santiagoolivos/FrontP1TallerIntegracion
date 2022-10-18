import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Info({ stocks }) {
  return (
    <div>
      <h3>Inventario:</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>

            {stocks ? stocks.map((stock) => (
              <tr>
                <td>{stock.sku}</td>
                <td>{stock.total}</td>
              </tr>
            )):
            null}
          </tbody>
        </Table>
    </div>
  );
}

export default Info;

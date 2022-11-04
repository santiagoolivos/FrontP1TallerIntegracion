import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function Info({ stocks }) {
  return (
    <div>
      <h3>Inventario:</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <Table striped bordered hover variant="dark">
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
    </div>
  );
}

export default Info;

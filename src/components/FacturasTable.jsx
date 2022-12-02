import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';



function FacturasTable({facturas}) {
  return (
    <div>
      <h3>Total Ordenes:</h3>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <Table variant="dark" striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Canal</th>
              <th>Status</th>
              <th>Precio</th>
              <th>Intereses</th>
              <th>Precio Total</th>
            </tr>
          </thead>
          <tbody >

            {facturas ? facturas.map((factura) => (
              <tr>
                <td>{facturas.indexOf(factura)}</td>
                <td>{factura.client}</td>
                <td>{factura.supplier}</td>
                <td> {factura.channel}</td>
                <td>{factura.status}</td>
                <td>{factura.price}</td>
                <td>{factura.interest}</td>
                <td>{factura.totalPrice}</td>
              </tr>
            )):
            null}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FacturasTable;

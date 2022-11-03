import OrdersTable from "./OrdersTable";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


function Orders() {
  return (
    <Container>
      <h1>Ordenes</h1>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Estado Orden</th>
              <th>Cantidad Ordenes</th>
            </tr>
          </thead>
          <tbody>

           
            <tr>
              <td>Pendientes</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Aceptadas</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Finalizadas</td>
              <td>0</td>
            </tr>           
          </tbody>
        </Table>
   
      <div>
        <OrdersTable orders={{}}/>
      </div>
    </Container>
  );
}
export default Orders;
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InventoryTable from './Inventory';
import { getStocks } from '../requests/getStocks';
import { getSpace } from '../requests/getSpace';

function Main() {
  const [stocks, setStocks] = useState([]);
  const [space, setSpace] = useState({});
  const [pspace, setPSpace] = useState({});

  function setSpaces(space) {
    if(space[0].buffer) {
      setPSpace(space[0]);
      setSpace(space[1]);
    } else {
      setPSpace(space[1]);
      setSpace(space[0]);
    }
  }

  useEffect(() => {
    const setStock = async () => {
      const stocks = await getStocks();
      const space = await getSpace();
      setStocks(stocks);
      setSpaces(space);
    }
    setStock();
    const intervalId = setInterval(setStock, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
        <h2 class="text-center margin1">Bodegas y Stocks </h2>
      <Row>
        
        <Col>
        {space
          ? <h3>Inventario normal: {space.usedSpace}/{space.totalSpace} ({(space.usedSpace/space.totalSpace).toFixed(2) * 100}%)</h3>
          : <h3>Inventario normal: 0/0 (0%)</h3>
        }
        </Col>
        <Col>
        {
          pspace
          ? <h3>Inventario pulmón: {pspace.usedSpace}/{pspace.totalSpace} ({(pspace.usedSpace/pspace.totalSpace).toFixed(2) * 100}%)</h3>
          : <h3>Inventario pulmón: 0/0 (0%)</h3>
        }
        </Col>
      </Row>
      <Row>
        <Col >
          <InventoryTable stocks={stocks} />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

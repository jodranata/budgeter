import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Balance from './Balance';
import Transaction from './Transaction';
import History from './History';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={3}>
            <Balance />
          </Col>
          <Col md={3}>
            <Transaction />
          </Col>
          <Col md={3}>
            <History />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
